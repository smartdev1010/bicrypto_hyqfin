<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Extension;
use App\Models\MLMPlan;
use Illuminate\Http\Request;

class ManageMLMController extends Controller
{
    public function index()
    {
        $page_title = 'MLM Ranks';
        $bot = Extension::where('id',1)->first();
        $ico = Extension::where('id',2)->first();
        $forex = Extension::where('id',4)->first();
        $plans = MLMPlan::paginate(getPaginate(10));
        $empty_message = 'No Rank Available';
        return view('admin.mlm.index', compact('page_title','plans','empty_message','bot','ico','forex'));
    }
    public function new()
    {
        $page_title = 'New Rank';
        $bot = Extension::where('id',1)->first();
        $ico = Extension::where('id',2)->first();
        $forex = Extension::where('id',4)->first();
        return view('admin.mlm.new', compact('page_title','bot','ico','forex'));
    }
    public function edit($id)
    {
        $rank = MLMPlan::findOrFail($id);
        $page_title = 'Rank Editor';
        $bot = Extension::where('id',1)->first();
        $ico = Extension::where('id',2)->first();
        $forex = Extension::where('id',4)->first();
        return view('admin.mlm.edit', compact('page_title','rank','bot','ico','forex'));
    }
    public function store(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'rank' => 'required|numeric',
    		'bv' => 'required|numeric',
    		'margin' => 'required|numeric',
    		'deposit_commission' => 'required|numeric',
    		'ref_commission' => 'required|numeric',
    		'active_ref_commission' => 'required|numeric',
    		'trade_commission' => 'required|numeric',
    		'bot_commission' => 'numeric',
    		'ico_commission' => 'numeric',
    		'forex_commission' => 'numeric',
    		'forex_investment_commission' => 'numeric'
    	]);

        $rank = new MLMPlan();
        $rank->title = $request->title;
        $rank->rank = $request->rank;
        $rank->bv = $request->bv;
        $rank->margin = $request->margin;
        $rank->deposit_commission = $request->deposit_commission;
        $rank->ref_commission = $request->ref_commission;
        $rank->active_ref_commission = $request->active_ref_commission;
        $rank->trade_commission = $request->trade_commission;
        $rank->bot_commission = $request->bot_commission;
        $rank->ico_commission = $request->ico_commission;
        $rank->forex_commission = $request->forex_commission;
        $rank->forex_investment_commission = $request->forex_investment_commission;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $rank->status = $request->status;
        $rank->save();

        $notify[] = ['success', 'Rank has been Updated'];
        return redirect()->route('admin.mlm.index')->withNotify($notify);
    }
    public function update(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'rank' => 'required|numeric',
    		'bv' => 'required|numeric',
    		'margin' => 'required|numeric',
    		'deposit_commission' => 'required|numeric',
    		'ref_commission' => 'required|numeric',
    		'active_ref_commission' => 'required|numeric',
    		'trade_commission' => 'required|numeric',
    		'bot_commission' => 'numeric',
    		'ico_commission' => 'numeric',
    		'forex_commission' => 'numeric',
    		'forex_investment_commission' => 'numeric'
    	]);

        $rank = MLMPlan::findOrFail($request->id);
        $rank->title = $request->title;
        $rank->rank = $request->rank;
        $rank->bv = $request->bv;
        $rank->margin = $request->margin;
        $rank->deposit_commission = $request->deposit_commission;
        $rank->ref_commission = $request->ref_commission;
        $rank->active_ref_commission = $request->active_ref_commission;
        $rank->trade_commission = $request->trade_commission;
        $rank->bot_commission = $request->bot_commission;
        $rank->ico_commission = $request->ico_commission;
        $rank->forex_commission = $request->forex_commission;
        $rank->forex_investment_commission = $request->forex_investment_commission;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $rank->status = $request->status;
        $rank->save();

        $notify[] = ['success', 'Rank has been Updated'];
        return redirect()->route('admin.mlm.index')->withNotify($notify);
    }
    public function remove(Request $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $rank = MLMPlan::findOrFail($request->id);
        $rank->delete();

        $notify[] = ['success', 'Rank has been removed'];
        return back()->withNotify($notify);
    }
}
