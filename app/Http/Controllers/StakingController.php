<?php

namespace App\Http\Controllers;

use App\Models\StakingCurrency;
use App\Models\StakingLog;
use App\Models\Wallet;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class StakingController extends Controller
{


    public function fetch_info()
    {
        $user = Auth::user();
        if (isWallet($user->id, 'funding', 'USDT', 'funding') == true) {
            $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');
        } else {
            $wallet = new Wallet();
            $wallet->user_id = $user->id;
            $wallet->symbol = 'USDT';
            $wallet->address = grs(34);
            $wallet->type = 'funding';
            $wallet->provider = 'funding';
            $wallet->save();
        }
        $coins = StakingCurrency::latest()->get();
        $coinlogs = [];
        foreach ($coins as $coin) {
            $coinlogs[$coin->id] = StakingLog::where('user_id', $user->id)->where('coin_id', $coin->id)->where('status', '>', 0)->where('status', '<', 3)->latest()->first();
        }
        return response()->json([
            'user' => $user,
            'coins' => $coins,
            'coinlogs' => $coinlogs,
            'assets' => StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('cost'),
            'last_profit' => StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('last_profit'),
            'total_profit' => StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('total_profit'),
            'wallet' => $wallet,
            'currency' => getCurrency()
        ]);
    }

    public function fetch_log()
    {
        $user = Auth::user();
        $coinlogs = StakingLog::where('user_id', $user->id)->latest()->get();
        $assets = StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('cost');
        $last_profit = StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('last_profit');
        $total_profit = StakingLog::where('user_id', $user->id)->where('status', 1)->orwhere('status', 2)->sum('total_profit');

        return response()->json([
            'user' => $user,
            'coinlogs' => $coinlogs,
            'assets' => $assets,
            'last_profit' => $last_profit,
            'total_profit' => $total_profit,
        ]);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric',
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors());
        }
        $user = Auth::user();
        $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');
        $stackCoin = StakingCurrency::where('id', $request->coin_id)->first();
        try {
            $price = getCoinRate($request->symbol);
        } catch (Exception $e) {
            $price = $stackCoin->price;
        }
        if (($request->amount * $price) > $wallet->balance) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Your Account Balance ' . getAmount($wallet->balance) . ' ' . $wallet->symbol . ' Not Enough! Please Deposit Money'
                ]
            );
        }
        if ($request->amount < $stackCoin->min_stake) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Your Stake Amount Lower Than The Minimum Stack Allowed!'
                ]
            );
        }
        if ($request->amount > ($stackCoin->max_stake - $stackCoin->staked)) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Your Stake Amount Higher Than The Maximum Stack Allowed!'
                ]
            );
        }

        if (StakingLog::where('coin_id', $request->coin_id)->where('user_id', $user->id)->where('status', 1)->exists()) {
            $stakeLog = StakingLog::where('coin_id', $request->coin_id)->where('user_id', $user->id)->where('status', 1)->first();
            $stakeLog->cost += $request->amount * $price;
            $stakeLog->staked += $request->amount;
            $stakeLog->status = 1;
            $stakeLog->save();
        } else {
            $stakeLog = new StakingLog();
            $stakeLog->coin_id = $request->coin_id;
            $stakeLog->user_id = $user->id;
            $stakeLog->symbol = $request->symbol;
            $stakeLog->cost = $request->amount * $price;
            $stakeLog->staked = $request->amount;
            $stakeLog->start_date = Carbon::now();
            $stakeLog->end_date = Carbon::now()->addDays($stackCoin->period);
            $stakeLog->status = 1;
            $stakeLog->save();
        }

        $wallet->balance -= $request->amount * $price;
        $wallet->save();

        $stackCoin->staked += $request->amount;
        $stackCoin->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Your Staked ' . $request->amount . ' ' . $request->symbol . ' Successfully'
            ]
        );
    }
    public function cancel(Request $request)
    {
        $user = Auth::user();
        $stakeLog = StakingLog::where('coin_id', $request->coin_id)->where('user_id', $user->id)->where('status', 1)->first();
        $stakeCoin = StakingCurrency::where('id', $request->coin_id)->first();
        $stakeCoin->staked -= $stakeLog->staked;
        $stakeCoin->save();

        $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');
        $wallet->balance += $stakeLog->cost;
        $wallet->save();

        $stakeLog->status = 0;
        $stakeLog->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'All Stakes Canceled Successfully'
            ]
        );
    }
    public function claim(Request $request)
    {
        $user = Auth::user();
        $stakeLog = StakingLog::where('coin_id', $request->coin_id)->where('user_id', $user->id)->where('status', 2)->first();

        $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');
        $wallet->balance += $stakeLog->cost + $stakeLog->profit_total;
        $wallet->save();

        $stakeLog->status = 3;
        $stakeLog->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'All Stakes Claimed Successfully'
            ]
        );
    }
}
