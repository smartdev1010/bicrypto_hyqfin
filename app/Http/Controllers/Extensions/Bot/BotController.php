<?php

namespace App\Http\Controllers\Extensions\Bot;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\Bot\Bot;
use App\Models\Bot\BotContract;
use App\Models\Bot\BotTiming;
use App\Models\Extension;
use App\Models\GeneralSetting;
use App\Models\ThirdpartyProvider;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BotController extends Controller
{
    public function __construct()
    {

        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $exchange_class = "\\ccxt\\$thirdparty->title";
            $this->api = new $exchange_class(array(
                'apiKey' => $thirdparty->api,
                'secret' => $thirdparty->secret,
                'password' => $thirdparty->password,
            ));
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = null;
        }
        #$this->api->set_sandbox_mode('enable');
    }

    public function fetch_info()
    {
        $user = Auth::user();
        $bot_contracts = (new BotContract)->getCached($user->id);
        $profit = $bot_contracts->where('result', 1)->sum('profit');

        return response()->json([
            'bot_contracts' => $bot_contracts,
            'bot_contracts_count_running' => $bot_contracts->where('status', '!=', 1)->count(),
            'bot_contracts_count_completed' => $bot_contracts->where('status', 1)->count(),
            'bot_contracts_count_amount' => $bot_contracts->sum('amount'),
            'profit' => $profit,
        ]);
    }

    public function fetch_bot(Request $request)
    {
        $user = Auth::user();
        if (isWallet($user->id, 'funding', $request->currency, 'funding') == true) {
            $wallet = getWallet($user->id, 'funding', $request->currency, 'funding');
        } else {
            $wallet = null;
        }
        if (BotContract::where('user_id', $user->id)->where('symbol', $request->symbol)->where('status', '!=', '1')->exists()) {
            $runningBots = BotContract::where('user_id', $user->id)->where('symbol', $request->symbol)->where('status', '!=', '1')->get();
        } else {
            $runningBots = [];
        }
        if ($this->provider == 'coinbasepro') {
            $provide = 'COINBASE';
        } else if ($this->provider != 'coinbasepro' && $this->provider != null) {
            $provide = strtoupper($this->provider);
        } else {
            $provide = 'KUCOIN';
        }
        return response()->json([
            'wallet' => $wallet,
            'bot_type' => (new Bot)->getEnabled(),
            'runningBots' => $runningBots,
            'provider' => $this->provider,
            'provide' => $provide,
        ]);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric|gt:0',
            'botTime' => 'required|exists:bot_timings,duration',
            'bot_id' => 'required|exists:bots,id',
            'price' => 'required',
        ]);

        if ($validate->fails()) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Please select bot and time duration.'
                ]
            );
        }
        $user = Auth::user();
        $wallet = getWallet($user->id, 'funding', $request->currency, 'funding');
        $bot = Bot::where('id', $request->bot_id)->first();
        $general = GeneralSetting::first();
        if ($request->amount > $wallet->balance) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Your Account Balance ' . getAmount($wallet->balance) . ' ' . $general->cur_text . ' Not Enough! Please Deposit Money'
                ]
            );
        }
        $wallet->balance -= $request->amount;
        $wallet->save();

        $bot_contract = new BotContract();
        $bot_contract->user_id = $user->id;
        $bot_contract->bot_id = $request->bot_id;
        $bot_contract->bot_name = $bot->title;
        $bot_contract->symbol = $request->symbol;
        $bot_contract->pair = $request->currency;
        $bot_contract->amount = $request->amount;
        $bot_contract->min_profit = $bot->min_profit;
        $bot_contract->max_profit = $bot->max_profit;
        $bot_contract->status = '0';
        $bot_contract->start_price = $request->price;
        if ($request->type == "Min") {
            $time = Carbon::now()->addMinutes($request->botTime);
            $duration = $request->botTime * 60;
        } elseif ($request->type == "Hour") {
            $time = Carbon::now()->addHours($request->botTime);
            $duration = $request->botTime * 60 * 60;
        } elseif ($request->type == "Day") {
            $time = Carbon::now()->addDays($request->botTime);
            $duration = $request->botTime * 60 * 60 * 24;
        }

        $bot_contract->duration = $duration;
        $bot_contract->start_date = Carbon::now();
        $bot_contract->end_date = $time;
        $bot_contract->save();

        $transaction = new Transaction();
        $transaction->user_id = $user->id;
        $transaction->amount = $bot_contract->amount;
        $transaction->post_balance = $wallet->balance;
        $transaction->trx_type = "-";
        $transaction->details = 'Bot contract on ' . $request->symbol . $request->currency;
        $transaction->trx = getTrx();
        $transaction->save();


        notify($transaction->user, 'BOT_SUBSCRIBED_SUCCESSFUL', [
            "amount" => $bot_contract->amount,
            "currency" => $bot_contract->symbol . '/' . $bot_contract->pair,
            "pair" => $bot_contract->pair,
            "title" => $bot->title,
            "trx" => $transaction->trx,
            "post_balance" => $transaction->post_balance,
            "duration" => $request->botTime,
            "duration_type" => $request->type,
            "end_date" => $bot_contract->end_date
        ]);

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New bot subscription from ' . $user->username;
        $adminNotification->click_url = route('admin.bot.log.list');
        $adminNotification->save();


        if (Extension::where('id', 3)->first()->status == 1 && getPlatform('mlm')->bot_investment == 1 && $user->ref_by != null) {
            BVstore($user, 5, $request->amount);
        }

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Your Contract Started Successfully'
            ]
        );
    }

    public function botResult()
    {
        $bot_contracts = BotContract::where('status', 2)->where('result', '>', 3)->where('end_date', '<', Carbon::now())->get();
        $gnl = GeneralSetting::first();
        $gnl->last_cron_run =  Carbon::now();
        $gnl->save();

        foreach ($bot_contracts as $bot_contract) {
            $wallet = getWallet($bot_contract->user_id, 'funding', $bot_contract->pair, 'funding');
            if ($bot_contract->result == 4) {
                $wallet->balance += $bot_contract->amount + $bot_contract->profit;
                $wallet->save();
                $bot_contract->result = 1;
                $bot_contract->status = 1;
                $bot_contract->save();
            } else if ($bot_contract->result == 5) {
                $wallet->balance += $bot_contract->amount - $bot_contract->profit;
                $wallet->save();
                $bot_contract->result = 2;
                $bot_contract->status = 1;
                $bot_contract->save();
            } else if ($bot_contract->result == 6) {
                $wallet->balance += $bot_contract->amount;
                $wallet->save();
                $bot_contract->result = 3;
                $bot_contract->status = 1;
                $bot_contract->save();
            }
        }
    }
    public function botMissed()
    {
        $bot_contracts = BotContract::where('status', 0)->where('result', '<', 4)->get();
        $gnl = GeneralSetting::first();
        $gnl->last_cron_run =  Carbon::now();
        $gnl->save();

        foreach ($bot_contracts as $bot_contract) {
            $bot = Bot::where('id', $bot_contract->bot_id)->first();
            if ($bot->result_missed == 1) {
                $bot_contract->result = 4;
                $bot_contract->status = 2;
                $bot_contract->profit = $bot_contract->amount * ($bot->profit_missed / 100);
                $bot_contract->save();
            } else if ($bot->result_missed == 2) {
                $bot_contract->result = 5;
                $bot_contract->status = 2;
                $bot_contract->profit = $bot_contract->amount * ($bot->profit_missed / 100);
                $bot_contract->save();
            } else if ($bot->result_missed == 3) {
                $bot_contract->result = 6;
                $bot_contract->status = 2;
                $bot_contract->profit = '0';
                $bot_contract->save();
            }
        }
        (new BotContract)->clearCache();
    }
}
