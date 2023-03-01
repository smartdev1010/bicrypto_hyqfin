<?php

namespace App\Http\Controllers\Extensions\Forex;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\Extension;
use App\Models\Forex\ForexAccounts;
use App\Models\Forex\ForexInvestments;
use App\Models\Forex\ForexLogs;
use App\Models\Forex\ForexSignals;
use App\Models\GeneralSetting;
use App\Models\Transaction;
use App\Models\WalletsTransactions;
use App\Models\Wallet;
use App\Models\InvestmentLogs;
use App\Models\Investment;
use App\Models\WithdrawLogs;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ForexController extends Controller
{
    public function investment_fetch_info(){
        $user = Auth::user();
        $investment_logs = InvestmentLogs::where('user_id', $user->id)->get();
        return response()->json([
            'user' => $user,
            'account' => ForexAccounts::where('user_id', $user->id)->first(),
            'investment_logs' => $investment_logs,
            'investment' => ForexInvestments::get(),
            'withdraw_logs' => WithdrawLogs::get(),
            'currentDate' => date("Y-m-d H:i:s")
        ]);
    }

    public function fetch_investment_logs(Request $request){
        $investment_logs = InvestmentLogs::where('user_id', $request->id)->get();
        return response()->json([
            'investment_logs' => $investment_logs
        ]);
    }
    
    public function fetch_info()
    {
        $user = Auth::user();
        
        $logs = (new ForexLogs)->getCached($user->id);
        $investment_logs = (new ForexLogs)->getCachedType($user->id, 3);
        $investments = (new ForexInvestments)->getEnabled();
        $account = ForexAccounts::where('user_id', $user->id)->get();
        return response()->json([
            'user' => $user,
            'account' => $account,
            'forex_logs' => (new ForexLogs)->getCacheLimit(10, $user->id),
            'forex_log' => $logs->sum('profit'),
            'forex_investment' => $investments,
            'investment' => $investment_logs->first(),
            'investment_logs' => $investment_logs,
            'investment_logs_amount' => $investment_logs->sum('amount'),
            'investment_logs_profit' => $investment_logs->where('status', 1)->sum('profit'),
            'wallets' => Wallet::where('user_id', $user->id)->where('type', 'funding')->get(),
            'wallet' => getWallet($user->id, 'funding', 'USDT', 'funding'),
        ]);
    }

    public function fetch_trade()
    {
        $page_title = '';
        $account = ForexAccounts::where('user_id', auth()->user()->id)->first();
        return view('user.forex.mt', compact('page_title', 'account'));
    }
    public function investment_add(Request $request){
        $validate = Validator::make($request->all(), [
            'plan_id' => 'required|max:80',
            'amount' => 'required|numeric',
            'profit' => 'required|numeric',
            'wallet' => 'required|numeric',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        if(Wallet::findOrFail($request->wallet)->balance < $request->amount){
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => "Not enough money"
                ]
            );
        }
        $user = Auth::user();
        $investment = new InvestmentLogs();
        $investment->user_id = $user->id;
        $investment->plan_id = $request->plan_id;
        $investment->amount = $request->amount;
        $investment->profit = $request->profit;
        $investment->wallet_id = $request->wallet;
        $investment->started_at = date("Y-m-d H:i:s");;
        $investment->profited_at = date("Y-m-d H:i:s");;

        if($investment->save()){
            $forex_log = new ForexLogs();
            $forex_log->user_id = $user->id;
            $forex_log->investment_id = $request->plan_id;
            $forex_log->amount = $request->amount;
            $forex_log->duration = ForexInvestments::findOrFail($request->plan_id)->duration;
            $forex_log->wallet_symbol = Wallet::findOrFail($request->wallet)->symbol;
            $forex_log->start_date = Carbon::now();
            $forex_log->end_date = Carbon::now()->addDays(ForexInvestments::findOrFail($request->plan_id)->duration);
            $forex_log->type = '3';
            $forex_log->status = '0';
            $forex_log->trx = getTrx();
            $forex_log->save();
            $forex_log->clearCache();

            $wallet_new_trx = new WalletsTransactions();
            $wallet_new_trx->user_id = $user->id;
            $wallet_new_trx->symbol = Wallet::findOrFail($request->wallet)->symbol;
            $wallet_new_trx->amount = $request->amount;
            $wallet_new_trx->amount_recieved = $request->amount;
            $wallet_new_trx->charge = $request->amount;
            $wallet_new_trx->to = Wallet::findOrFail($request->wallet)->symbol;
            $wallet_new_trx->type = '2';
            $wallet_new_trx->status = '1';
            $wallet_new_trx->trx = getTrx();
            $wallet_new_trx->details = $request->amount . ' ' . Wallet::findOrFail($request->wallet)->symbol . ' Invested in  ' . ForexInvestments::findOrFail($request->plan_id)->title;
            $wallet_new_trx->wallet_type = 'funding';
            $wallet_new_trx->save();
            $wallet_new_trx->clearCache();
        }
        
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => $investment,
                'message' => 'Investment starts Successfully.'
            ]
        );
    }
    public function investment_update(Request $request){
        $user = Auth::user();
        $investment = InvestmentLogs::findOrFail($request->id);
        $investment->profit = $request->profit;

        $investment->save();
        return true;
    }
    public function investment_date_update1(Request $request){
        $user = Auth::user();
        $investment = InvestmentLogs::findOrFail($request->id);
        $now = date("Y-m-d H:i:s");
        $profited = date($investment->profited_at);
        $investment->profited_at = $profited.setDate($profited.getDate() + 1);

        $investment->save();
        return true;
    }
    public function investment_date_update(Request $request){
        $user = Auth::user();
        $investment = InvestmentLogs::findOrFail($request->id);
        // $investment->profited_at = date_create("Y-m-d H:i:s");
        // $investment->profited_at = date("Y-m-d H:i:s");
        $now = date_create();
        $profited = date_create($investment->profited_at);
        // dd($now);
        // dd($profited);
        // dd(date_diff($now, $profited)->format('%a'));
        // $profited.setDate($profited.getDate() + );
        date_add($profited,date_interval_create_from_date_string(date_diff($now, $profited)->format('%a')." days"));
        // dd($profited);
        $investment->profited_at = $profited;
        $investment->save();
        return true;
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
        $forex_log->amount = $request->amount * getCoinRate($request->symbol);
        $forex_log->status = '0';
        $forex_log->duration = $investment->duration;
        $forex_log->start_date = Carbon::now();
        $forex_log->end_date = Carbon::now()->addDays($investment->duration);
        $forex_log->trx = getTrx();
        $forex_log->save();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Investment from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.investment.log.list');
        $adminNotification->save();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $forex_log->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "-";
        $transaction->details = 'Investment';
        $transaction->trx = $forex_log->trx;
        $transaction->save();


        notify($transaction->user, 'FOREX_INVESTMENT_SUBSCRIBED_SUCCESSFUL', [
            "amount" => $forex_log->amount,
            "currency" => $request->symbol,
            "title" => $investment->title,
            "trx" => $transaction->trx,
            "post_balance" => $transaction->post_balance,
            "duration" => $investment->duration,
            "end_date" => $forex_log->end_date
        ]);

        if (Extension::where('id', 3)->first()->status == 1 && getPlatform('mlm')->forex_investment == 1 && $user->ref_by != null) {
            if (getPlatform('mlm')->commission_type == 'daily') {
                BVstore($user, 8, getCoinRate($wallet->symbol) * $request->amount, $forex_log->id, $investment->duration, true);
            } else {
                BVstore($user, 8, getCoinRate($wallet->symbol) * $request->amount);
            }
        }
        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'meta' => ForexLogs::where('user_id', $user->id)->latest()->limit(10)->get(),
                'message' => 'Your Investment Started Successfully'
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
        $forex_log->clearCache();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Forex Deposit from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.log.list');
        $adminNotification->save();
        $adminNotification->clearCache();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $forex_log->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "+";
        $transaction->details = 'Forex Deposit';
        $transaction->trx = $forex_log->trx;
        $transaction->save();
        $transaction->clearCache();

        notify($transaction->user, 'FOREX_DEPOSIT_SUCCESSFUL', [
            "amount" => $forex_log->amount,
            "currency" => $wallet->symbol,
            "trx" => $transaction->trx,
            "post_balance" => $transaction->post_balance
        ]);

        if (Extension::where('id', 3)->first()->status == 1 && getPlatform('mlm')->forex_deposit == 1 && $user->ref_by != null) {
            BVstore($user, 7, getCoinRate($wallet->symbol) * $request->amount);
        }

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
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
                    'message' => 'Your Account Balance ' . getAmount($account->balance) . ' Not Enough! Please Deposit Firstly'
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
        $forex_log->clearCache();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Forex Withdraw from ' . $user->username;
        $adminNotification->click_url = route('admin.forex.log.list');
        $adminNotification->save();
        $adminNotification->clearCache();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $request->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "-";
        $transaction->details = 'Forex Withdraw';
        $transaction->trx = $forex_log->trx;
        $transaction->save();
        $transaction->clearCache();

        $account->balance -= $request->amount;
        $account->save();


        notify($transaction->user, 'FOREX_WITHDRAW_SUCCESSFUL', [
            "amount" => $forex_log->amount,
            "currency" => $wallet->symbol,
            "trx" => $transaction->trx,
            "post_balance" => $transaction->post_balance
        ]);

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Forex Withdraw Placed Successfully'
            ]
        );
    }

    public function ForexResult()
    {
        $forex_logs = ForexLogs::where('status', 2)->where('result', '>', 3)->where('end_date', '<', Carbon::now())->get();
        $gnl = GeneralSetting::first();
        $gnl->last_cron_run =  Carbon::now();
        $gnl->save();

        foreach ($forex_logs as $forex_log) {
            $account = ForexAccounts::where('user_id', $forex_log->user_id)->first();
            if ($forex_log->result == 4) {
                $account->balance += $forex_log->amount + $forex_log->profit;
                $account->save();
                $forex_log->result = 1;
                $forex_log->status = 1;
                $forex_log->save();
            } else if ($forex_log->result == 5) {
                $account->balance += $forex_log->amount - $forex_log->profit;
                $account->save();
                $forex_log->result = 2;
                $forex_log->status = 1;
                $forex_log->save();
            } else if ($forex_log->result == 6) {
                $account->balance += $forex_log->amount;
                $account->save();
                $forex_log->result = 3;
                $forex_log->status = 1;
                $forex_log->save();
            }
        }
    }

    public function ForexMissed()
    {
        $forex_logs = ForexLogs::where('status', 0)->where('result', '<', 4)->get();
        $gnl = GeneralSetting::first();
        $gnl->last_cron_run =  Carbon::now();
        $gnl->save();

        foreach ($forex_logs as $forex_log) {
            $forex = ForexInvestments::where('id', $forex_log->investment_id)->first();
            if ($forex->result_missed == 1) {
                $forex_log->result = 4;
                $forex_log->status = 2;
                $forex_log->profit = $forex_log->amount * ($forex->profit_missed / 100);
                $forex_log->save();
            } else if ($forex->result_missed == 2) {
                $forex_log->result = 5;
                $forex_log->status = 2;
                $forex_log->profit = $forex_log->amount * ($forex->profit_missed / 100);
                $forex_log->save();
            } else if ($forex->result_missed == 3) {
                $forex_log->result = 6;
                $forex_log->status = 2;
                $forex_log->profit = '0';
                $forex_log->save();
            }
        }
        (new ForexLogs)->clearCache();
    }
}