<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\InvestmentLog;
use App\Models\InvestmentPlans;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class InvestmentLogController extends Controller
{
    public function index()
    {
        $page_title = 'Investment Logs';
        $logs = InvestmentLog::with('user', 'plan')->get();

        return view('admin.investment.logs', compact('page_title', 'logs'));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'investment_plan_id' => 'required',
            'amount' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $plan = InvestmentPlans::findOrFail($request->investment_plan_id);

        if ($request->amount < $plan->min_amount || $request->amount > $plan->max_amount) {
            return redirect()->back()->with('error', 'Investment amount should be between ' . $plan->min_amount . ' and ' . $plan->max_amount);
        }

        $log = new InvestmentLog();
        $log->investment_plan_id = $request->investment_plan_id;
        $log->user_id = Auth::user()->id;
        $log->amount = $request->amount;
        $log->status = 1;
        $log->save();

        $plan->increment('total_investors', 1);

        return redirect()->back()->with('success', 'Investment added successfully');
    }

    public function cancel(Request $request, $id)
    {
        $log = InvestmentLog::findOrFail($id);

        if ($log->status == 1) {
            $log->status = 3;
            $log->save();

            $plan = InvestmentPlans::findOrFail($log->investment_plan_id);
            $plan->decrement('total_investors', 1);

            return redirect()->back()->with('success', 'Investment cancelled successfully');
        }

        return redirect()->back()->with('error', 'Unable to cancel investment');
    }

    public function cron()
    {
        $plans = InvestmentPlans::where('status', 1)
            ->where('end_date', '<', Carbon::now())
            ->get();

        foreach ($plans as $plan) {
            $plan->status = 2; // set status to completed
            $plan->save();
        }
    }
}
