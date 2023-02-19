<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\UserLogin;
use App\Models\MLM\MLMBV;
use App\Models\ThirdpartyProvider;
use App\Models\ThirdpartyTransactions;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class ReportController extends Controller
{
    public function __construct()
    {
        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $exchange_class = "\\ccxt\\$thirdparty->title";
            $this->api = new $exchange_class(array(
                'apiKey' => $thirdparty->api,
                'secret' => $thirdparty->secret,
                'password' => $thirdparty->password,
            ));
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = 'funding';
        }
        #$this->api->set_sandbox_mode('enable');
    }

    public function transaction()
    {
        abort_if(Gate::denies('transaction_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Transaction Logs';
        return view('admin.reports.transactions', compact('page_title'));
    }

    public function wallet()
    {
        abort_if(Gate::denies('transaction_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Wallet Transaction Logs';
        return view('admin.reports.wallet', compact('page_title'));
    }

    public function wallet_trx_cancel(Request $request)
    {
        try {
            $wallet_trx = WalletsTransactions::where('trx', $request->trx)->first();
            if ($wallet_trx->wallet_type == 'trading' && $wallet_trx->trx != null) {
                $provider_trx = ThirdpartyTransactions::where('trx_id', $wallet_trx->trx)->first();
                $provider_trx->delete();
            }
            if (Transaction::where('trx', $request->trx)->exists()) {
                $trx = Transaction::where('trx', $request->trx)->first();
                $trx->delete();
                $trx->clearCache();
            }
            $wallet_trx->delete();
            $wallet_trx->clearCache();
            $notify[] = ['success', 'Transaction Canceled Successfully'];
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

    public function wallet_transfer_funding_approve(Request $request)
    {
        try {
            $trx = WalletsTransactions::where('trx', $request->trx)->first();
            $trx->status = '1';
            $trx->save();
            $trx->clearCache();
            $to = Wallet::where('user_id', $trx->user_id)->where('provider', $this->provider)->where('symbol', $trx->symbol)->first();
            $to->balance += $trx->amount;
            $to->save();

            $notify[] = ['success', 'Balance Transfer Approved'];
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
    public function wallet_transfer_funding_reject(Request $request)
    {
        try {
            $transfer = WalletsTransactions::where('trx', $request->trx)->first();
            $transfer->status = 3;
            //$withdraw->admin_feedback = $request->details;
            $transfer->save();
            $transfer->clearCache();

            $wallet = Wallet::where('user_id', $transfer->user_id)->where('provider', 'funding')->where('symbol', $transfer->symbol)->first();
            $wallet->balance += getAmount($transfer->amount);
            $wallet->save();

            $notify[] = ['success', 'Transfer has been rejected.'];
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

    public function loginHistory(Request $request)
    {
        abort_if(Gate::denies('user_login_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'User Login History';
        return view('admin.reports.logins', compact('page_title'));
    }

    public function loginIpHistory($ip)
    {
        abort_if(Gate::denies('user_login_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Login By - ' . $ip;
        return view('admin.reports.logins', compact('page_title',));
    }

    public function exchange_log()
    {
        $page_title = "All Trades List";
        if ($this->provider != null) {
            return view('admin.exchange.provider', compact('page_title'));
        } else {
            return view('admin.exchange.log', compact('page_title'));
        }
    }
}
