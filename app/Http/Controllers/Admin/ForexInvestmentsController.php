<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ForexInvestments;
use App\Models\ForexLogs;
use App\Models\User;
use Illuminate\Http\Request;

class ForexInvestmentsController extends Controller
{
    public function index()
    {
        $page_title = 'Forex Plans';
        $plans = ForexInvestments::latest()->paginate(getPaginate());
        $empty_message = 'No Plans Found';
        return view('admin.forex.investment.index', compact('page_title','plans','empty_message'));
    }

    public function new()
    {
        $page_title = 'New Plan';
        return view('admin.forex.investment.new', compact('page_title'));
    }

    public function edit($id)
    {
        $plan = ForexInvestments::findOrFail($id);
        $page_title = 'Forex Plan Editor';
        return view('admin.forex.investment.edit', compact('page_title','plan'));
    }

    public function store(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'price' => 'required|numeric',
    		'duration' => 'required|numeric',
    		'roi' => 'required|numeric',
    		'profit_missed' => 'required|numeric',
    		'result_missed' => 'required',
    		'image' => 'mimes:jpeg,jpg,png,svg'
    	]);

        $plan = new ForexInvestments();
        $plan->title = $request->title;
        $plan->desc = $request->desc;
        $plan->price = $request->price;
        $plan->duration = $request->duration;
        $plan->roi = $request->roi;
        $plan->profit_missed = $request->profit_missed;
        $plan->result_missed = $request->result_missed;
        $path = imagePath()['forex_investment']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImage($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $plan->image = $filename;
        }
        $request->merge(['is_new' => isset($request->is_new) ? 1 : 0]);
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $plan->status = $request->status;
        $plan->is_new = $request->is_new;
        $plan->save();

        $plan = new ForexLogs();
        $plan->user_id=User::get()->id;
        $plan->investment_id = $request->title;
        $plan->desc = $request->desc;
        $plan->price = $request->price;
        $plan->duration = $request->duration;
        $plan->roi = $request->roi;
        $plan->profit_missed = $request->profit_missed;
        $plan->result_missed = $request->result_missed;
        $path = imagePath()['forex_investment']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImage($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $plan->image = $filename;
        }
        $request->merge(['is_new' => isset($request->is_new) ? 1 : 0]);
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $plan->status = $request->status;
        $plan->is_new = $request->is_new;
        $plan->save();

        $notify[] = ['success', 'Forex Plan has been Updated'];
        return redirect()->route('admin.forex.investment.index')->withNotify($notify);
    }
    public function update(Request $request)
    {
        $request->validate([
    		'title' => 'required|max:80',
    		'price' => 'required|numeric',
    		'duration' => 'required|numeric',
    		'roi' => 'required|numeric',
    		'profit_missed' => 'required|numeric',
    		'result_missed' => 'required',
    		'image' => 'mimes:jpeg,jpg,png,svg'
    	]);

        $plan = ForexInvestments::findOrFail($request->id);
        $plan->title = $request->title;
        $plan->desc = $request->desc;
        $plan->price = $request->price;
        $plan->duration = $request->duration;
        $plan->roi = $request->roi;
        $plan->profit_missed = $request->profit_missed;
        $plan->result_missed = $request->result_missed;
        $path = imagePath()['forex_investment']['path'];
        if ($request->hasFile('image')) {
            try {
                $filename = uploadImage($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['errors', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $plan->image = $filename;
        }
        $request->merge(['is_new' => isset($request->is_new) ? 1 : 0]);
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $plan->status = $request->status;
        $plan->is_new = $request->is_new;
        $plan->save();

        $notify[] = ['success', 'Forex Plan has been Updated'];
        return redirect()->route('admin.forex.investment.index')->withNotify($notify);
    }
    public function remove(Request $request)
    {
        $request->validate(['id' => 'required|numeric']);
        $plan = ForexInvestments::findOrFail($request->id);
        $plan->delete();

        $notify[] = ['success', 'Forex Plan has been removed'];
        return back()->withNotify($notify);
    }

    public function log()
    {
    	$page_title = "All Forex Investment Logs List";
    	$empty_message = "No Data Found";
        $user = User::get();
    	$forex_logs = ForexLogs::where('type',3)->latest()->paginate(getPaginate());
    	return view('admin.forex.investment.log', compact('page_title', 'empty_message', 'forex_logs','user'));
    }

    public function pending()
    {
        $page_title = "Pending Forex Investment Logs List";
        $empty_message = "No Data Found";
        $user = User::get();
        $forex_logs = ForexLogs::where('type',3)->where('status', 0)->latest()->paginate(getPaginate());
        return view('admin.forex.investment.log', compact('page_title', 'empty_message', 'forex_logs','user'));
    }

    public function completed()
    {
        $page_title = "Completed Forex Investment Logs List";
        $empty_message = "No Data Found";
        $user = User::get();
        $forex_logs = ForexLogs::where('type',3)->where('status', 1)->latest()->paginate(getPaginate());
        return view('admin.forex.investment.log', compact('page_title', 'empty_message', 'forex_logs','user'));
    }

    public function search(Request $request, $scope)
    {
        $search = $request->search;
        $page_title = '';
        $user = User::get();
        $empty_message = 'No search result was found.';
        $forex_logs =  ForexLogs::where('type',3)->whereHas('user',function($q) use ($search){
            $q->where('username', $search);
        });
        if($scope == 'pending') {
            $page_title .= 'Pending Forex Investment Logs Search';
            $forex_logs = $forex_logs->where('status', 0);
        }
        elseif($scope == 'completed') {
            $page_title .= 'Completed Forex Investment Logs Search';
            $forex_logs = $forex_logs->where('status', 1);
        }
        elseif($scope == 'list') {
            $page_title .= 'All Forex Investment Logs Search';
        }
        $forex_logs = $forex_logs->paginate(getPaginate());
        $page_title .= ' - ' . $search;
        return view('admin.forex.investment.log', compact('page_title', 'empty_message', 'forex_logs', 'search','user'));
    }

    public function set(Request $request)
    {
        $log = ForexLogs::where('id',$request->log_id)->first();
        $log->profit = $request->profit;
        $log->result = $request->result;
        $log->status = '2';
        $log->save();

        $notify[] = ['success', 'Profit has been adjusted successfully'];
        return back()->withNotify($notify);
    }
}