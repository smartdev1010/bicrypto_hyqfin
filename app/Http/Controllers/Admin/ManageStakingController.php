<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StakingCurrency;
use App\Models\StakingLog;
use Illuminate\Http\Request;

class ManageStakingController extends Controller
{
    public function index()
    {
        $page_title = 'Staking Coins';
        $coins = StakingCurrency::latest()->paginate(getPaginate());
        $empty_message = 'No Currency Found';
        return view('admin.staking.index', compact('page_title', 'coins', 'empty_message'));
    }

    public function new()
    {
        $page_title = 'New Coin';
        return view('admin.staking.new', compact('page_title'));
    }

    public function edit($id)
    {
        $coin = StakingCurrency::findOrFail($id);
        $page_title = 'Staking Currency Editor';
        return view('admin.staking.edit', compact('page_title', 'coin'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|unique:staking_currencies,title',
            'symbol' => 'required|unique:staking_currencies,symbol',
            'network' => 'required',
            'period' => 'required|numeric',
            'profit' => 'required|numeric',
            'price' => 'numeric',
            'amount' => 'required|numeric',
            'min_stake' => 'required|numeric',
            'max_stake' => 'required|numeric',
            'staked' => 'required|numeric',
            'apr' => 'required|numeric',
            'daily_profit' => 'required|numeric',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $coin = new StakingCurrency();
        $coin->title = $request->title;
        $coin->symbol = $request->symbol;
        $coin->network = $request->network;
        $coin->period = $request->period;
        $coin->price = $request->price;
        $coin->profit = $request->profit;
        $coin->amount = $request->amount;
        $coin->min_stake = $request->min_stake;
        $coin->max_stake = $request->max_stake;
        $coin->staked = $request->staked;
        $coin->apr = $request->apr;
        $coin->daily_profit = $request->daily_profit;
        $coin->profit_unit = $request->profit_unit;
        $coin->method = $request->method;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $coin->status = $request->status;

        if (isset($request->image)) {
            $path = imagePath()['staking']['path'];
            $size = imagePath()['staking']['size'];
            if ($request->hasFile('image')) {
                try {
                    $filename = uploadImage($request->image, $path, $size);
                } catch (\Exception $exp) {
                    $notify[] = ['errors', 'Image could not be uploaded.'];
                    return back()->withNotify($notify);
                }
                $coin->icon = $filename;
            }
        }
        $coin->save();

        $notify[] = ['success', 'New Staking Currency has been Added'];
        return redirect()->route('admin.staking.index')->withNotify($notify);
    }

    public function update(Request $request)
    {
        $request->validate([
            'network' => 'required',
            'period' => 'required|numeric',
            'profit' => 'required|numeric',
            'price' => 'numeric',
            'amount' => 'required|numeric',
            'min_stake' => 'required|numeric',
            'max_stake' => 'required|numeric',
            'staked' => 'required|numeric',
            'apr' => 'required|numeric',
            'daily_profit' => 'required|numeric',
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);

        $coin = StakingCurrency::where('id', $request->id)->first();
        $coin->network = $request->network;
        $coin->period = $request->period;
        $coin->profit = $request->profit;
        $coin->price = $request->price;
        $coin->amount = $request->amount;
        $coin->min_stake = $request->min_stake;
        $coin->max_stake = $request->max_stake;
        $coin->staked = $request->staked;
        $coin->apr = $request->apr;
        $coin->daily_profit = $request->daily_profit;
        $coin->profit_unit = $request->profit_unit;
        $coin->method = $request->method;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $coin->status = $request->status;
        if (isset($request->image)) {
            $path = imagePath()['staking']['path'];
            $size = imagePath()['staking']['size'];
            if ($request->hasFile('image')) {
                try {
                    $filename = uploadImage($request->image, $path, $size);
                } catch (\Exception $exp) {
                    $notify[] = ['errors', 'Image could not be uploaded.'];
                    return back()->withNotify($notify);
                }
                $coin->icon = $filename;
            }
        }
        $coin->save();

        $notify[] = ['success', 'Staking Currency has been Updated'];
        return redirect()->route('admin.staking.index')->withNotify($notify);
    }


    public function remove(Request $request)
    {
        $coin = StakingCurrency::where('id', $request->id)->first();
        $coin->delete();

        $notify[] = ['success', 'Staking Currency has been Removed Successfully'];
        return back()->withNotify($notify);
    }

    public function log()
    {
        $page_title = 'Staking Logs';
        $empty_message = 'No Staking Coin Found';
        $coinlogs = StakingLog::latest()->paginate(getPaginate());
        return view('admin.staking.log', compact('page_title', 'empty_message', 'coinlogs'));
    }

    public function pending()
    {
        $page_title = 'Pending Logs';
        $empty_message = 'No Staking Coin Found';
        $coinlogs = StakingLog::where('status', 1)->latest()->paginate(getPaginate());
        return view('admin.staking.log', compact('page_title', 'empty_message', 'coinlogs'));
    }

    public function completed()
    {
        $page_title = 'Completed Logs';
        $empty_message = 'No Staking Coin Found';
        $coinlogs = StakingLog::where('status', 2)->latest()->paginate(getPaginate());
        return view('admin.staking.log', compact('page_title', 'empty_message', 'coinlogs'));
    }

    public function claimed()
    {
        $page_title = 'Claimed Logs';
        $empty_message = 'No Staking Coin Found';
        $coinlogs = StakingLog::where('status', 3)->latest()->paginate(getPaginate());
        return view('admin.staking.log', compact('page_title', 'empty_message', 'coinlogs'));
    }

    public function canceled()
    {
        $page_title = 'Canceled Logs';
        $empty_message = 'No Staking Coin Found';
        $coinlogs = StakingLog::where('status', 0)->latest()->paginate(getPaginate());
        return view('admin.staking.log', compact('page_title', 'empty_message', 'coinlogs'));
    }

    public function activate(Request $request)
    {
        $request->validate(['id' => 'required|integer']);
        $coin = StakingCurrency::findOrFail($request->id);
        $coin->status = 1;
        $coin->save();
        $notify[] = ['success', $coin->title . ' has been activated'];
        return back()->withNotify($notify);
    }

    public function deactivate(Request $request)
    {
        $request->validate(['id' => 'required|integer']);
        $coin = StakingCurrency::findOrFail($request->id);
        $coin->status = 0;
        $coin->save();
        $notify[] = ['success', $coin->title . ' has been disabled'];
        return back()->withNotify($notify);
    }
}
