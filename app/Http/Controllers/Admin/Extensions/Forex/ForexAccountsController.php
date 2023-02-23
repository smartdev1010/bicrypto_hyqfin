<?php

namespace App\Http\Controllers\Admin\Extensions\Forex;

use App\Http\Controllers\Controller;
use App\Models\Forex\ForexAccounts;
use App\Models\Forex\ForexLogs;
use App\Models\Forex\ForexSignals;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class ForexAccountsController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('forex_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Forex Accounts';
        $signals = (new ForexSignals)->getCache()->where('status', 1);
        return view('extensions.admin.forex.index', compact('page_title', 'signals'));
    }

    public function edit($id)
    {
        abort_if(Gate::denies('forex_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $account = ForexAccounts::findOrFail($id);
        $signals = ForexSignals::where('status', 1)->get();
        $page_title = 'Forex Account Editor';
        return view('extensions.admin.forex.edit', compact('page_title', 'account', 'signals'));
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'number' => 'required|numeric',
            'password' => 'required|max:80',
            'balance' => 'required|numeric',
            'broker' => 'required',
            'mt' => 'required|numeric',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['warning', $error[0]];
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
            $account = new ForexAccounts();
            $account->user_id = null;
            $account->number = $request->number;
            $account->password = $request->password;
            $account->balance = $request->balance;
            $account->broker = $request->broker;
            $account->mt = $request->mt;
            if (isset($request->signal1_id)) {
                $account->signal1_id = $request->signal1_id;
            }
            if (isset($request->signal2_id)) {
                $account->signal2_id = $request->signal2_id;
            }
            if (isset($request->signal3_id)) {
                $account->signal3_id = $request->signal3_id;
            }
            if (isset($request->signal4_id)) {
                $account->signal4_id = $request->signal4_id;
            }
            if (isset($request->signal5_id)) {
                $account->signal5_id = $request->signal5_id;
            }
            $account->status = $request->status ?? 0;
            $account->save();
            // $account->clearCache();

            $notify[] = ['success', 'Forex Account has been Updated'];
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
        $request->validate([
            'password' => 'required|max:80',
            'number' => 'required|numeric',
            'balance' => 'required|numeric',
            'broker' => 'required',
            'mt' => 'required',
        ]);

        $account = ForexAccounts::where('id', $request->id)->first();
        $account->number = $request->number;
        $account->password = $request->password;
        $account->balance = $request->balance;
        $account->broker = $request->broker;
        $account->mt = $request->mt;
        $account->signal1_id = $request->signal1_id;
        $account->signal2_id = $request->signal2_id;
        $account->signal3_id = $request->signal3_id;
        $account->signal4_id = $request->signal4_id;
        $account->signal5_id = $request->signal5_id;
        $account->status = $request->status;
        $account->save();
        // $account->clearCache();

        $notify[] = ['success', 'Forex Account has been Updated'];
        return back()->withNotify($notify);
    }

    public function verify(Request $request)
    {
        $log = ForexLogs::findOrFail($request->id);
        $account = ForexAccounts::where('user_id', $log->user_id)->first();
        $wallet = Wallet::where('user_id', $log->user_id)->where('symbol', 'USDT')->first();
        try {
            if ($log->type == 1) {
                $account->balance += $log->amount;
            } else if ($log->type == 2) {
                $wallet->balance += $log->amount;
            }
            $account->save();
            $account->save();
            $log->status = '1';
            $log->save();
            $log->clearCache();

            $notify[] = ['success', 'Transaction has been approved successfully'];
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

    public function log()
    {
        abort_if(Gate::denies('forex_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Forex Logs";
        return view('extensions.admin.forex.log', compact('page_title'));
    }
}