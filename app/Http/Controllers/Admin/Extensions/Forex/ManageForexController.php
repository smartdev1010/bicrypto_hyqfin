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

class ManageForexController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('forex_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Forex Accounts';
        $accounts = ForexAccounts::latest()->paginate(getPaginate());
        $empty_message = 'No Account Found';
        return view('extensions.admin.forex.index', compact('page_title', 'accounts', 'empty_message'));
    }

    public function new()
    {
        abort_if(Gate::denies('forex_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'New Account';
        $signals = ForexSignals::where('status', 1)->get();
        return view('extensions.admin.forex.new', compact('page_title', 'signals'));
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
        $request->validate([
            'number' => 'required|numeric',
            'password' => 'required|max:80',
            'balance' => 'required|numeric',
            'broker' => 'required',
            'mt' => 'required|numeric',
        ]);

        $account = new ForexAccounts();
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
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $account->status = $request->status;
        $account->save();

        $notify[] = ['success', 'Forex Account has been Updated'];
        return redirect()->route('admin.forex.index')->withNotify($notify);
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

        $account = ForexAccounts::findOrFail($request->id);
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
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $account->status = $request->status;
        $account->save();

        $notify[] = ['success', 'Forex Account has been Updated'];
        return redirect()->route('admin.forex.index')->withNotify($notify);
    }

    public function verify($id)
    {
        $log = ForexLogs::findOrFail($id);
        $account = ForexAccounts::where('user_id', $log->user_id)->first();
        $wallet = Wallet::where('user_id', $log->user_id)->where('symbol', 'USDT')->first();
        if ($log->type == 1) {
            $account->balance += $log->amount;
        } else if ($log->type == 2) {
            $wallet->balance += $log->amount;
        }
        $wallet->save();
        $account->save();
        $log->status = '1';
        $log->save();

        $notify[] = ['success', 'Transaction has been approved successfully'];
        return back()->withNotify($notify);
    }

    public function log()
    {
        abort_if(Gate::denies('forex_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Forex Logs";
        return view('extensions.admin.forex.log', compact('page_title'));
    }
}