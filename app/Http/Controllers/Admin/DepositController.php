<?php

namespace App\Http\Controllers\Admin;

use App\Models\Deposit;
use App\Models\Gateway;
use App\Models\GeneralSetting;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Extension;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use Illuminate\Http\Request;
use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class DepositController extends Controller
{
    public function deposit()
    {
        abort_if(Gate::denies('deposit_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Deposit History';
        $deposits = Deposit::get();
        return view('admin.deposit.log', compact('page_title', 'deposits'));
    }

    public function depViaMethod($method, $type = null)
    {
        $method = Gateway::where('alias', $method)->firstOrFail();

        if ($type == 'approved') {
            $page_title = 'Approved Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('method_code', $method->code)->where('status', 1)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'rejected') {
            $page_title = 'Rejected Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('method_code', $method->code)->where('status', 3)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'successful') {
            $page_title = 'Successful Payment Via ' . $method->name;
            $deposits = Deposit::where('status', 1)->where('method_code', $method->code)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'pending') {
            $page_title = 'Pending Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('method_code', $method->code)->where('status', 2)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } else {
            $page_title = 'Payment Via ' . $method->name;
            $deposits = Deposit::where('status', '!=', 0)->where('method_code', $method->code)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        }
        $methodAlias = $method->alias;
        $empty_message = 'Deposit Log';
        return view('admin.deposit.log', compact('page_title', 'empty_message', 'deposits', 'methodAlias'));
    }

    public function details($id)
    {
        $general = GeneralSetting::first();
        $deposit = Deposit::where('id', $id)->where('method_code', '>=', 1000)->with(['user', 'gateway'])->firstOrFail();
        $page_title = $deposit->user->username . ' requested ' . getAmount($deposit->amount) . ' ' . $general->cur_text;
        $details = ($deposit->detail != null) ? json_encode($deposit->detail) : null;
        return view('admin.deposit.detail', compact('page_title', 'deposit', 'details'));
    }

    public function approve(Request $request)
    {
        $deposit = Deposit::where('id', $request->id)->where('status', 2)->firstOrFail();
        $deposit->status = 1;
        $deposit->save();
        $deposit->clearCache();

        $user = User::find($deposit->user_id);
        $wallet = Wallet::where('user_id', $deposit->user_id)->where('type', 'funding')->where('symbol', $deposit->symbol)->first();
        if (getPlatform('wallet')->deposit_fees_method == 'added') {
            $wallet->balance += $deposit->amount / getCoinRate($deposit->symbol);
        } else if (getPlatform('wallet')->deposit_fees_method == 'subtracted') {
            $wallet->balance += ($deposit->amount - $deposit->charge) / getCoinRate($deposit->symbol);
        }
        $wallet->save();

        $transaction = new Transaction();
        $transaction->user_id = $deposit->user_id;
        $transaction->amount = getAmount($deposit->amount);
        $transaction->post_balance = getAmount($wallet->balance);
        $transaction->charge = getAmount($deposit->charge);
        $transaction->trx_type = '+';
        $transaction->details = 'Deposit Via ' . $deposit->gateway_currency()->name;
        $transaction->trx =  $deposit->trx;
        $transaction->save();
        $transaction->clearCache();

        $wal_trx = WalletsTransactions::where('user_id', $deposit->user_id)->where('trx', $deposit->trx)->firstOrFail();
        $wal_trx->status = 1;
        $wal_trx->save();

        $plat_mlm = getPlatform('mlm');
        if (Extension::where('id', 3)->first()->status == 1 && $plat_mlm->deposits == 1 && $user->ref_by != null) {
            BVstore($user, 1, $deposit->amount);
        }

        try {
            notify($user, 'MANUAL_DEPOSIT_ADMIN_APPROVED', [
                'username' => $user->username,
                'site_name' => getNotify()->site_name,
                "amount" => $deposit->amount,
                "currency" => $deposit->symbol,
                "trx" => $transaction->trx,
                "post_balance" => $transaction->post_balance,
                "charge" => $deposit->charge,
                "rate" => $deposit->rate,
                "method_currency" => $deposit->method_currency,
                "method_name" => $deposit->gateway_currency()->name,
                "method_amount" => $deposit->final_amo
            ]);
            $notify[] = ['success', 'Client Notified By Email Successfully'];
        } catch (Throwable $e) {
            $notify[] = ['warning', 'Mail Not Properly Set'];
        }

        $notify[] = ['success', 'Deposit has been approved.'];
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1],
                'redirect' => route('admin.deposit.list') . '?table[filters][status]=2'
            ]
        );
    }

    public function reject(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required|integer',
            'message' => 'required|max:250'
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
            $deposit = Deposit::where('id', $request->id)->where('status', 2)->firstOrFail();
            $user = User::find($deposit->user_id);

            $deposit->admin_feedback = $request->message;
            $deposit->status = 3;
            $deposit->save();
            $deposit->clearCache();

            try {
                notify($user, 'MANUAL_DEPOSIT_ADMIN_REJECTED', [
                    'username' => $user->username,
                    'site_name' => getNotify()->site_name,
                    "amount" => $deposit->amount,
                    "currency" => $deposit->symbol,
                    "trx" => $deposit->trx,
                    "method_name" => $deposit->gateway_currency()->name,
                    "rejection_message" => $deposit->admin_feedback
                ]);
                $notify[] = ['success', 'Client Notified By Email Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }

            $wal_trx = WalletsTransactions::where('user_id', $deposit->user_id)->where('trx', $deposit->trx)->firstOrFail();
            $wal_trx->status = 3;
            $wal_trx->save();
            $wal_trx->clearCache();

            $notify[] = ['success', 'Deposit has been rejected.'];
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
                'message' => $notify[0][1],
                'redirect' => route('admin.deposit.list') . '?table[filters][status]=2'
            ]
        );
    }
}
