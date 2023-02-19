<?php

namespace App\Http\Controllers\Admin\Extensions\Forex;

use App\Http\Controllers\Controller;
use App\Models\Forex\ForexInvestments;
use App\Models\Forex\ForexLogs;
use App\Models\WalletsTransactions;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class ForexInvestmentsController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('forex_investments_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Investment Plans';
        // return view('extensions.admin.forex.investment.log', compact('page_title'));
        // return view('extensions.admin.forex.index', compact('page_title', 'signals'));
        return view('extensions.admin.forex.investment.index', compact('page_title'));
    }

    public function new()
    {
        abort_if(Gate::denies('forex_investments_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'New Plan';
        return view('extensions.admin.forex.investment.new', compact('page_title'));
    }

    public function edit($id)
    {
        abort_if(Gate::denies('forex_investments_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $plan = ForexInvestments::findOrFail($id);
        $page_title = 'Investment Plan Editor';
        return view('extensions.admin.forex.investment.edit', compact('page_title', 'plan'));
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|max:80',
            'min' => 'required|numeric',
            'max' => 'required|numeric',
            'duration' => 'required|numeric',
            'roi' => 'required|numeric',
            'image' => 'mimes:jpeg,jpg,png,svg'
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
        
        try {
            $plan = new ForexInvestments();
            $plan->title = $request->title;
            $plan->desc = $request->desc;
            $plan->min = $request->min;
            $plan->max = $request->max;
            $plan->duration = $request->duration;
            $plan->roi = $request->roi;
            $path = imagePath()['forex_investment']['path'];
            if (isset($request->image)) {
                try {
                    $filename = uploadImg($request->image, $path);
                } catch (\Exception $exp) {
                    $notify[] = ['error', 'Image could not be uploaded.'];
                    return response()->json(
                        [
                            'success' => true,
                            'type' => $notify[0][0],
                            'message' => $notify[0][1]
                        ]
                    );
                }
                $plan->image = $filename;
            }
            $plan->status = $request->status ?? 0;
            $plan->is_new = $request->is_new ?? 0;
            $plan->save();
            $plan->clearCache();
            $notify[] = ['success', 'Investment Plan has been Updated'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }
    public function update(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|max:80',
            'min' => 'required|numeric',
            'max' => 'required|numeric',
            'duration' => 'required|numeric',
            'roi' => 'required|numeric',
            'image' => 'mimes:jpeg,jpg,png,svg'
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

        $plan = ForexInvestments::findOrFail($request->id);
        $plan->title = $request->title;
        $plan->desc = $request->desc;
        $plan->min = $request->min;
        $plan->max = $request->max;
        $plan->duration = $request->duration;
        $plan->roi = $request->roi;
        $path = imagePath()['forex_investment']['path'];
        if (isset($request->image)) {
            if ($plan->image != null) {
                unlink(public_path('/' . $path . '/' . $plan->image));
            }
            try {
                $filename = uploadImg($request->image, $path);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $plan->image = $filename;
        }
        $plan->status = $request->status;
        $plan->is_new = $request->is_new;
        $plan->save();
        $plan->clearCache();

        $notify[] = ['success', 'Investment Plan has been Updated'];
        return back()->withNotify($notify);
    }
    public function log()
    {
        abort_if(Gate::denies('forex_investments_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Investment Logs";
        return view('extensions.admin.forex.investment.log', compact('page_title'));
    }

    public function set(Request $request)
    {
        try {
            $log = ForexLogs::where('id', $request->log_id)->first();
            if ($request->type == 1) {
                $log->profit = $request->profit;
            } elseif ($request->type == 2) {
                $log->profit = $log->amount * ($request->profit / 100);
            }
            $log->result = $request->result;
            $log->status = '2';
            $log->save();
            $log->clearCache();

            $notify[] = ['success', 'Profit has been adjusted successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }
}