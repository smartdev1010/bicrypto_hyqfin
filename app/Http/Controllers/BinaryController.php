<?php

namespace App\Http\Controllers;

use App\Models\KYC;
use App\Models\PracticeLog;
use App\Models\ThirdpartyProvider;
use App\Models\TradeLog;
use App\Models\Withdrawal;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BinaryController extends Controller
{
    public $api;
    public $provider;
    public function __construct()
    {

        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $exchange_class = "\\ccxt\\$thirdparty->title";
            if ($thirdparty->title == 'binance') {
                $this->api = new $exchange_class(array(
                    'apiKey' => $thirdparty->api,
                    'secret' => $thirdparty->secret,
                    'password' => $thirdparty->password,
                    'options' => array(
                        'adjustForTimeDifference' => true,
                        'recvWindow' => 30000,
                    ),
                ));
            } else {
                $this->api = new $exchange_class(array(
                    'apiKey' => $thirdparty->api,
                    'secret' => $thirdparty->secret,
                    'password' => $thirdparty->password,
                ));
            }
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = null;
        }
        #$this->api->set_sandbox_mode('enable');
    }


    public function index()
    {
        $user = Auth::user();
        Carbon::setWeekStartsAt(Carbon::MONDAY);
        Carbon::setWeekEndsAt(Carbon::SUNDAY);
        $logs = (new TradeLog)->getCacheByUser($user->id);
        $practice_log = (new PracticeLog())->getCacheByUser($user->id);
        $trade['Won'] = $logs->where('result', 1)->sum('margin');
        $trade['Log'] = $logs->count();
        $trade['Win'] = $logs->where('result', 1)->count();
        $trade['Lose'] = $logs->where('result', 2)->count();
        $trade['Draw'] = $logs->where('result', 3)->count();
        $perc['tradeWon_last_week'] = $logs->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->where('result', 1)->sum('margin');
        if ($trade['Win'] > 0) {
            $perc['tradeWon_last_week_percentage'] = $perc['tradeWon_last_week'] > 0 ? ceil((($perc['tradeWon_last_week']) * 100) / $trade['Win']) : 0;
        } else {
            $perc['tradeWon_last_week_percentage'] = 0;
        }
        $trade['practice_Won'] = $practice_log->where('result', 1)->sum('margin');
        $trade['practice_Log'] = $practice_log->count();
        $trade['practice_Win'] = $practice_log->where('result', 1)->count();
        $trade['practice_Lose'] = $practice_log->where('result', 2)->count();
        $trade['practice_Draw'] = $practice_log->where('result', 3)->count();
        $trade['practice_logs'] = $user->practice_log_limit(10);
        $perc['practiceWon_last_week'] = $practice_log->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->where('result', 1)->sum('margin');
        if ($trade['practice_Win'] > 0) {
            $perc['practiceWon_last_week_percentage'] = $perc['practiceWon_last_week'] > 0 ? ceil((($perc['practiceWon_last_week']) * 100) / $trade['practice_Win']) : 0;
        } else {
            $perc['practiceWon_last_week_percentage'] = 0;
        }
        return response()->json([
            'funding_wallets' => getWallet($user->id, 'funding', 'USDT', 'funding')->balance ?? null,
            'perc' => $perc,
            'trade' => $trade,
            'tradelogs' => (new TradeLog)->getCacheByUserWithLimit($user->id, 10),
            'practicelogs' => $trade['practice_logs'],
            'deposit' => $user->deposits()->sum('amount'),
            'withdraw' => $user->withdrawals()->sum('amount'),
            'transaction' => $user->transactions->count(),
        ]);
    }

    public function practice()
    {
        if ($this->provider == 'coinbasepro') {
            $provide = 'COINBASE';
            $provider = 'coinbasepro';
        } else if ($this->provider != 'coinbasepro' && $this->provider != null) {
            $provide = strtoupper($this->provider);
            $provider = $this->provider;
        } else {
            $provide = 'KUCOIN';
            $provider = 'kucoin';
        }
        return response()->json([
            'user' => Auth::user(),
            'limit' => json_decode(getGen()->limits),
            'provider' => $provider,
            'provide' => $provide,
        ]);
    }

    public function addPracticeBalance()
    {
        try {
            $gnl = getGen();
            $user = Auth::user();
            $user->practice_balance = $gnl->practice_balance;
            $user->save();
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Practice Balance Add Successfully'
                ]
            );
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
    }

    public function trade($symbol, $currency)
    {
        if ($this->provider == 'coinbasepro') {
            $provide = 'COINBASE';
            $provider = 'coinbasepro';
        } else if ($this->provider != 'coinbasepro' && $this->provider != null) {
            $provide = strtoupper($this->provider);
            $provider = $this->provider;
        } else {
            $provide = 'KUCOIN';
            $provider = 'kucoin';
        }
        return response()->json([
            'user' => Auth::user(),
            'limit' => json_decode(getGen()->limits),
            'provider' => $provider,
            'provide' => $provide,
        ]);
    }


    public function fetch_wallet(Request $request)
    {
        $user = Auth::user();
        if (isWallet($user->id, 'funding', $request->currency, 'funding') == true) {
            $wallet = getWallet($user->id, 'funding', $request->currency, 'funding')->balance;
        } else {
            $wallet = null;
        }

        return response()->json([
            'wallet' => $wallet,
        ]);;
    }

    public function binary_practice_log()
    {
        $user = Auth::user();
        $contracts = PracticeLog::where('user_id', $user->id)->get();
        if (!file_exists(public_path('data/practice/u00' . $user->id . '.json'))) {
            if (!file_exists(public_path('data'))) {
                mkdir(public_path('data'));
            }
            if (!file_exists(public_path('data/practice'))) {
                mkdir(public_path('data/practice'));
            }
            $json_data = '{"' . $user->id . '": {"1": []}}';
            file_put_contents(public_path('data/practice/u00' . $user->id . '.json'), $json_data);
        }
        $jsonString = file_get_contents(public_path('data/practice/u00' . $user->id . '.json'));
        $datas = json_decode($jsonString, true);
        return response()->json([
            'contracts' => $contracts,
            'datas' => $datas,
        ]);
    }

    public function binary_practice_orders()
    {
        $user = Auth::user();
        $orders = PracticeLog::where('user_id', $user->id)->latest()->get();
        return response()->json([
            'orders' => $orders,
        ]);
    }

    public function binary_trade_log()
    {
        $user = Auth::user();
        $contracts = TradeLog::where('user_id', $user->id)->get();
        if (!file_exists(public_path('data/trade/u00' . $user->id . '.json'))) {
            if (!file_exists(public_path('data'))) {
                mkdir(public_path('data'));
            }
            if (!file_exists(public_path('data/trade'))) {
                mkdir(public_path('data/trade'));
            }
            $json_data = '{"' . $user->id . '": {"1": []}}';
            file_put_contents(public_path('data/trade/u00' . $user->id . '.json'), $json_data);
        }
        $jsonString = file_get_contents(public_path('data/trade/u00' . $user->id . '.json'));
        $datas = json_decode($jsonString, true);
        return response()->json([
            'contracts' => $contracts,
            'datas' => $datas,
        ]);
    }

    public function binary_trade_orders()
    {
        $user = Auth::user();
        $orders = TradeLog::where('user_id', $user->id)->latest()->get();
        return response()->json([
            'orders' => $orders,
        ]);
    }

    public function preview($type, $id)
    {
        $user = Auth::user();
        if ($type == 'trade') {
            $contract = TradeLog::where('id', $id)->where('user_id', $user->id)->firstOrFail();
        } else {
            $contract = PracticeLog::where('id', $id)->where('user_id', $user->id)->firstOrFail();
        }
        if (!file_exists(public_path('data/' . $type . '/u00' . $user->id . '.json'))) {
            $json_data = '{"' . $user->id . '": {"1": []}}';
            file_put_contents(public_path('data/' . $type . '/u00' . $user->id . '.json'), $json_data);
        }
        $jsonString = file_get_contents(public_path('data/' . $type . '/u00' . $user->id . '.json'));
        $datas = json_decode($jsonString, true);
        $data = $datas[$user->id][$id];
        $duration = Carbon::parse($contract->in_time)
            ->addSeconds($contract->duration)
            ->format('Y-m-d H:i:s');
        return response()->json([
            'contract' => $contract,
            'data' => $data,
            'duration' => $duration,
        ]);
    }
}
