<?php

namespace App\Http\Controllers\Admin;

use App\Models\GeneralSetting;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use App\Models\WithdrawMethod;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class WithdrawalController extends Controller
{
    public function log()
    {
        abort_if(Gate::denies('withdraw_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Withdrawals Log';
        $withdrawals = Withdrawal::where('status', '!=', 0)->with(['user', 'method'])->get();
        return view('admin.withdraw.withdrawals', compact('page_title', 'withdrawals'));
    }


    public function logViaMethod($method_id, $type = null)
    {
        abort_if(Gate::denies('withdraw_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $method = WithdrawMethod::findOrFail($method_id);
        if ($type == 'approved') {
            $page_title = 'Approved Withdrawal';
            $withdrawals = Withdrawal::where('status', 1)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } elseif ($type == 'rejected') {
            $page_title = 'Rejected Withdrawals';
            $withdrawals = Withdrawal::where('status', 3)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } elseif ($type == 'pending') {
            $page_title = 'Pending Withdrawals';
            $withdrawals = Withdrawal::where('status', 2)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } else {
            $page_title = 'Withdrawals';
            $withdrawals = Withdrawal::where('status', '!=', 0)->with(['user', 'method'])->latest()->paginate(getPaginate());
        }
        $empty_message = 'Withdraw Log Not Found';
        return view('admin.withdraw.withdrawals', compact('page_title', 'withdrawals', 'empty_message', 'method'));
    }

    public function details($id)
    {
        $general = GeneralSetting::first();
        $withdrawal = Withdrawal::where('id', $id)->where('status', '!=', 0)->with(['user', 'method'])->firstOrFail();
        $page_title = $withdrawal->user->username . ' Withdraw Requested ' . getAmount($withdrawal->amount) . ' ' . $general->cur_text;
        $details = ($withdrawal->withdraw_information != null) ? json_encode($withdrawal->withdraw_information) : null;
        $methodImage =  getImage(imagePath()['withdraw']['method']['path'] . '/' . $withdrawal->method->image, '800x800');

        return view('admin.withdraw.detail', compact('page_title', 'withdrawal', 'details', 'methodImage'));
    }

    public function approve(Request $request)
    {
        try {
            $withdraw = Withdrawal::where('id', $request->id)->where('status', 2)->with('user')->firstOrFail();
            $withdraw->status = 1;
            $withdraw->admin_feedback = $request->details;
            $withdraw->save();
            $withdraw->clearCache();
            if ($withdraw->save()) {
                $wal_trx = WalletsTransactions::where('user_id', $withdraw->user_id)->where('trx', $withdraw->trx)->firstOrFail();
                $wal_trx->status = 1;
                $wal_trx->save();
                $wal_trx->clearCache();
            }
            try {
                notify($withdraw->user, 'WITHDRAW_USER_APPROVED', [
                    'username' => $withdraw->user->username,
                    'site_name' => getNotify()->site_name,
                    "amount" => $withdraw->amount,
                    "currency" => $withdraw->symbol,
                    "trx" => $withdraw->trx,
                    "post_balance" => $withdraw->after_charge,
                    "charge" => $withdraw->charge,
                    "rate" => $withdraw->rate,
                    "delay" => $withdraw->method->delay,
                    "method_currency" => $withdraw->method_currency,
                    "method_name" => $withdraw->method->name,
                    "method_amount" => $withdraw->final_amo,
                    "admin_details" => $withdraw->admin_feedback
                ]);
                $notify[] = ['success', 'Client Notified By Email Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }
            $notify[] = ['success', 'Client Notified By Email Successfully'];
            $notify[] = ['success', 'Withdrawal Marked as Approved.'];
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
                'redirect' => route('admin.withdraw.log') . '?table[filters][status]=2'
            ]
        );
    }


    public function reject(Request $request)
    {
        try {
            $general = getGen();
            $withdraw = Withdrawal::where('id', $request->id)->where('status', 2)->firstOrFail();

            $wallet = Wallet::where('user_id', $withdraw->user_id)->where('provider', 'funding')->where('symbol', $withdraw->symbol)->first();
            $wallet->balance += getAmount($withdraw->amount);

            $withdraw->status = 3;
            $withdraw->admin_feedback = $request->details;

            $wal_trx = WalletsTransactions::where('user_id', $withdraw->user_id)->where('trx', $withdraw->trx)->firstOrFail();
            $wal_trx->status = 3;

            $withdraw->save();
            $withdraw->clearCache();
            $wallet->save();
            $wal_trx->save();
            $wal_trx->clearCache();

            $transaction = new Transaction();
            $transaction->user_id = $withdraw->user_id;
            $transaction->amount = $withdraw->amount;
            $transaction->post_balance = getAmount($wallet->balance);
            $transaction->charge = 0;
            $transaction->trx_type = '+';
            $transaction->details = getAmount($withdraw->amount) . ' ' . $general->cur_text . ' Refunded from Withdrawal Rejection';
            $transaction->trx = $withdraw->trx;
            $transaction->save();
            $transaction->clearCache();
            try {
                notify($withdraw->user, 'WITHDRAW_USER_REJECTED', [
                    'username' => $withdraw->user->username,
                    'site_name' => getNotify()->site_name,
                    "amount" => $withdraw->amount,
                    "currency" => $withdraw->symbol,
                    "trx" => $withdraw->trx,
                    "post_balance" => $withdraw->after_charge,
                    "charge" => $withdraw->charge,
                    "rate" => $withdraw->rate,
                    "delay" => $withdraw->method->delay,
                    "method_currency" => $withdraw->method_currency,
                    "method_name" => $withdraw->method->name,
                    "method_amount" => $withdraw->final_amo,
                    "admin_details" => $withdraw->admin_feedback
                ]);
                $notify[] = ['success', 'Client Notified By Email Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }

            $notify[] = ['success', 'Withdrawal has been rejected.'];
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
                'redirect' => route('admin.withdraw.log') . '?table[filters][status]=2'
            ]
        );
    }
}
