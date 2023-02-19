<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\Extension;
use App\Models\ForexAccounts;
use App\Models\ForexInvestments;
use App\Models\ForexLogs;
use App\Models\ForexSignals;
use App\Models\MLM;
use App\Models\MLMBV;
use App\Models\MLMPlan;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ForexController extends Controller
{

    public function fetch_info()
    {
        $user = Auth::user();
        $investment_logs = ForexLogs::where('user_id', $user->id)->where('type', 3)->get();
        return response()->json([
            'user' => $user,
            'account' => ForexAccounts::where('user_id', $user->id)->first(),
            'forex_logs' => ForexLogs::where('user_id', $user->id)->latest()->limit(10)->get(),
            'forex_log' => ForexLogs::where('user_id', $user->id)->get()->sum('profit'),
            'forex_investment' => ForexInvestments::where('status', 1)->get(),
            'signals' => ForexSignals::get(),
            'investment_logs' => $investment_logs,
            'investment_logs_amount' => $investment_logs->sum('amount'),
            'investment_logs_profit' => $investment_logs->where('status', 1)->sum('profit'),
            'investment' => ForexLogs::where('user_id', $user->id)->where('type', 3)->first(),
            'wallets' => Wallet::where('user_id', $user->id)->where('type', 'funding')->get(),
            'wallet' => getWallet(auth()->user()->id, 'funding', 'USDT', 'funding'),
            'currency' => getCurrency(),
            'forex_plans' => ForexInvestments::get(),
        ]);
    }

    public function fetch_trade()
    {
        $page_title = '';
        $account = ForexAccounts::where('user_id', auth()->user()->id)->first();
        return view('user.forex.mt', compact('page_title', 'account'));
    }

    public function create()
    {
        $user = Auth::user();
        $account = new ForexAccounts();
        $account->user_id = $user->id;
        $account->balance = '0';
        $account->status = '0';
        $account->save();
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => $account,
                'message' => 'Forex Account Created Successfully'
            ]
        );
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric',
            'investment_id' => 'required|exists:forex_investments,id',
        ]);

        if ($validate->fails()) {
            $notify[] = ['warning', 'Please Select Investment Amount and Duration.'];
            return back()->withNotify($notify);
        }
        $user = Auth::user();
        $wallet = getWallet($user->id, 'funding', $request->symbol, 'funding');
        $investment = ForexInvestments::where('id', $request->investment_id)->first();
        if ($request->amount > $wallet->balance) {
            $notify[] = ['warning', 'Your Account Balance ' . getAmount($wallet->balance) . ' ' . $wallet->symbol . ' Not Enough! Please Deposit Money'];
            return back()->withNotify($notify);
        }
        $wallet->balance -= $request->amount;
        $wallet->save();

        $forex_log = new ForexLogs();
        $forex_log->user_id = $user->id;
        $forex_log->investment_id = $request->investment_id;
        $forex_log->type = '3';
        $forex_log->amount = $request->amount;
        $forex_log->status = '0';
        $forex_log->duration = $investment->duration;
        $forex_log->start_date = Carbon::now();
        $forex_log->end_date = Carbon::now()->addDays($investment->duration);
        $forex_log->trx = getTrx();
        $forex_log->save();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Forex Investment from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.log.pending');
        $adminNotification->save();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $forex_log->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "-";
        $transaction->details = 'Forex Investment';
        $transaction->trx = $forex_log->trx;
        $transaction->save();

        if (Extension::where('id', 3)->first()->status == 1) {
            if ($user->ref_by != null) {
                $ref = User::where('id', $user->ref_by)->first();
                $refMLM = MLM::where('username', $ref->username)->first();
                $plan = MLMPlan::where('status', 1)->where('rank', $refMLM->rank)->first();
                $bonus = getCoinRate($wallet->symbol) * $request->amount * $plan->forex_investment_commission;
                $bvLog = new MLMBV();
                $bvLog->user_id = $ref->id;
                $bvLog->type = '8';
                $bvLog->amount = $bonus;
                $bvLog->save();
            }
        }
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => ForexLogs::where('user_id', $user->id)->latest()->limit(10)->get(),
                'message' => 'Your Forex Investment Started Successfully'
            ]
        );
    }

    public function deposit(Request $request)
    {
        $user = Auth::user();
        $wallet = getWallet($user->id, 'funding', $request->symbol, 'funding');
        if ($request->amount > $wallet->balance) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Your Account Balance ' . getAmount($wallet->balance) . ' ' . $wallet->symbol . ' Not Enough! Please Deposit Firstly'
                ]
            );
        }
        $wallet->balance -= $request->amount;
        $wallet->save();

        $forex_log = new ForexLogs();
        $forex_log->user_id = $user->id;
        $forex_log->type = '1';
        $forex_log->amount = getCoinRate($wallet->symbol) * $request->amount;
        $forex_log->status = '0';
        $forex_log->trx = getTrx();
        $forex_log->save();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Forex Deposit from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.log.pending');
        $adminNotification->save();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $forex_log->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "+";
        $transaction->details = 'Forex Deposit';
        $transaction->trx = $forex_log->trx;
        $transaction->save();

        if (Extension::where('id', 3)->first()->status == 1) {
            if ($user->ref_by != null) {
                $ref = User::where('id', $user->ref_by)->first();
                $refMLM = MLM::where('username', $ref->username)->first();
                $plan = MLMPlan::where('status', 1)->where('rank', $refMLM->rank)->first();
                $bonus = getCoinRate($wallet->symbol) * $request->amount * $plan->forex_investment_commission;
                $bvLog = new MLMBV();
                $bvLog->user_id = $ref->id;
                $bvLog->type = '7';
                $bvLog->amount = $bonus;
                $bvLog->save();
            }
        }

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => ForexLogs::where('user_id', $user->id)->latest()->limit(10)->get(),
                'message' => 'Forex Deposited Successfully'
            ]
        );
    }
    public function withdraw(Request $request)
    {
        $user = Auth::user();
        $wallet = getWallet($user->id, 'funding', $request->symbol, 'funding');
        $account = ForexAccounts::where('user_id', $user->id)->first();
        if ($request->amount > $account->balance) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Your Account Balance ' . getAmount($wallet->balance) . ' ' . $wallet->symbol . ' Not Enough! Please Deposit Firstly'
                ]
            );
        }

        $forex_log = new ForexLogs();
        $forex_log->user_id = $user->id;
        $forex_log->type = '2';
        $forex_log->amount = $request->amount;
        $forex_log->status = '0';
        $forex_log->trx = getTrx();
        $forex_log->save();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Forex Withdraw from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.log.pending');
        $adminNotification->save();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $request->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "-";
        $transaction->details = 'Forex Withdraw';
        $transaction->trx = $forex_log->trx;
        $transaction->save();

        $account->balance -= $request->amount;
        $account->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => ForexLogs::where('user_id', $user->id)->latest()->limit(10)->get(),
                'message' => 'Forex Withdraw Placed Successfully'
            ]
        );
    }
}