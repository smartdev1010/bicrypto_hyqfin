<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\InvestmentLog;
use App\Models\InvestmentPlans;
use App\Models\Transaction;
use App\Models\Wallet;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class InvestmentController extends Controller
{


    public function index(): JsonResponse
    {
        $user = Auth::user();
        $logs = InvestmentLog::with('plan')->where('user_id', $user->id)->get();
        $totalInvested = $logs->where('status', '!=', 3)->sum('amount');
        $totalProfit = $logs->sum('profit');
        $todayProfit = $logs->where('created_at', '>=', Carbon::today())->sum('profit');

        return response()->json([
            'status' => 'success',
            'plans' => InvestmentPlans::where('status', 1)->get(),
            'logs' => $logs,
            'totalProfit' => $totalProfit,
            'todayProfit' => $todayProfit,
            'totalInvested' => $totalInvested,
            'wallet' => getWallet($user->id, 'funding', 'USDT', 'funding'),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'investment_plan_id' => 'required',
            'amount' => 'required|numeric',
        ]);

        $user = Auth::user();
        $plan = InvestmentPlans::findOrFail($request->investment_plan_id);
        $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');

        if ($wallet->balance < $request->amount) {
            return response()->json(['status' => false, 'message' => 'Insufficient balance', 'type' => 'error']);
        }

        if ($request->amount < $plan->min_amount || $request->amount > $plan->max_amount) {
            return response()->json(['type' => 'error', 'message' => 'Investment amount should be between ' . $plan->min_amount . ' and ' . $plan->max_amount]);
        }
        $log = new InvestmentLog();
        $log->investment_plan_id = $request->investment_plan_id;
        $log->user_id = $user->id;
        $log->wallet_id = $wallet->id;
        $log->amount = $request->amount;
        $log->status = 1;
        $log->end_date = now()->addDays($plan->duration_in_days);
        $log->trx = getTrx();
        $log->save();

        // Update the user's wallet balance
        $wallet->balance -= $request->amount;
        $wallet->save();

        // Create a new transaction log
        $details = 'Investment of ' . $request->amount . ' USDT in plan ' . $plan->name;
        $this->transaction($wallet, $request->amount, "-", $details, $log->trx);

        $plan->increment('total_investors', 1);

        // Notify admin
        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Investment from ' . $user->username;
        $adminNotification->click_url = route('admin.investment.logs.index');
        $adminNotification->save();

        notify($user, 'INVESTMENT_SUBSCRIBED_SUCCESSFUL', [
            "amount" => $log->amount,
            "currency" => $wallet->symbol,
            "title" => $plan->name,
            "trx" => $log->trx,
            "post_balance" => $wallet->balance,
            "duration" => $plan->duration_in_days,
            "end_date" => $log->end_date
        ]);

        return response()->json(['message' => 'Investment added successfully', 'type' => 'success']);
    }


    public function cancel(Request $request)
    {
        $log = InvestmentLog::where('id', $request->id)->first();

        if ($log && $log->status == 1) {
            try {
                // Refund wallet balance
                $wallet = getWallet($log->user_id, 'funding', 'USDT', 'funding');
                $wallet->increment('balance', $log->amount);
                $new_trx = getTrx();
                $this->transaction($wallet, $log->amount, '+', 'Investment Cancelled & Refunded', $new_trx);

                $transaction = Transaction::where('trx', $log->trx)->first();
                $transaction->delete();

                $plan = InvestmentPlans::findOrFail($log->investment_plan_id);
                $plan->decrement('total_investors', 1);

                $log->status = 3;
                $log->save();

                // Notify admin
                $adminNotification = new AdminNotification();
                $adminNotification->user_id = $log->user_id;
                $adminNotification->title = 'Investment Cancelled & Refunded from ' . $log->user->username;
                $adminNotification->click_url = route('admin.investment.logs.index');
                $adminNotification->save();

                return response()->json(['message' => 'Investment cancelled successfully', 'type' => 'success']);
            } catch (\Throwable $th) {
                return response()->json(['message' => $th->getMessage(), 'type' => 'error']);
            }
        }

        return response()->json(['message' => 'Unable to cancel investment', 'type' => 'error']);
    }



    public function destroy(Request $request, InvestmentLog $investment)
    {
        $investment->status = 3;
        $investment->save();
        return redirect()->route('investments.index')
            ->with('success', 'Investment deleted successfully.');
    }

    public function cron()
    {
        try {
            $logs = InvestmentLog::where('status', 1)->get();
            $now = Carbon::now();
            foreach ($logs as $log) {
                // calculate profit
                $days_passed = $log->created_at->diffInDays($now);
                $profit = $log->amount * ($log->plan->interest_rate / 100) * $days_passed;

                // add profit earned to log
                if ($days_passed > 0) {
                    $log->profit += $profit;
                    $log->save();
                }

                // check if investment has ended
                if ($log->end_date < $now) {
                    $log->status = 2; // set status to completed
                    $log->save();

                    $user = $log->user;

                    // add profit to user's balance
                    $wallet = getWallet($log->user_id, 'funding', 'USDT', 'funding');
                    $wallet->balance += $log->profit + $log->amount;
                    $wallet->save();

                    // create transaction
                    $details = 'Investment completed. Profit: ' . $log->profit . ', Amount returned: ' . ($log->amount + $log->profit);
                    $trx = getTrx();

                    $this->transaction($wallet, $log->profit + $log->amount, '+', $details, $trx);

                    // create admin notification
                    $adminNotification = new AdminNotification();
                    $adminNotification->user_id = $user->id;
                    $adminNotification->title = 'Investment Completed for ' . $user->username;
                    $adminNotification->click_url = route('admin.investment.logs.index');
                    $adminNotification->save();
                }
            }
        } catch (Exception $e) {
            // log the error and/or send an email to the site admin
            Log::error('Error in cron job: ' . $e->getMessage());
        }
    }


    public function transaction($wallet, $amount, $side, $details, $trx)
    {
        $transaction = new Transaction();
        $transaction->user_id = $wallet->user_id;
        $transaction->amount = $amount;
        $transaction->currency = $wallet->symbol;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = $side;
        $transaction->details = $details;
        $transaction->trx = $trx;
        $transaction->save();
    }
}
