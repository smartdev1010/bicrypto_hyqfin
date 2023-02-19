<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\Deposit;
use App\Models\GatewayCurrency;
use App\Models\Extension;
use App\Models\Platform;
use App\Models\Transaction;
use App\Models\User;
use App\Models\WalletsTransactions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Throwable;

class PaymentController extends Controller
{
    public function __construct()
    {
    }

    public function deposit()
    {
        $gatewayCurrency = GatewayCurrency::whereHas('method', function ($gate) {
            $gate->where('status', 1);
        })->with('method')->orderby('method_code')->get();
        $page_title = 'Deposit Methods';
        $track = session()->get('Track');
        return view('user.payment.deposit', compact('gatewayCurrency', 'page_title', 'track'));
    }

    public function depositInsert(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric|gt:0',
            'method_code' => 'required',
            'currency' => 'required',
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
            $user = Auth::user();
            $gate = GatewayCurrency::where('method_code', $request->method_code)->where('currency', $request->currency)->first();
            if (!$gate) {
                $notify[] = ['error', 'Invalid Gateway'];
                return response()->json(
                    [
                        'success' => true,
                        'type' => $notify[0][0],
                        'message' => $notify[0][1]
                    ]
                );
            }

            if ($gate->min_amount > $request->amount || $gate->max_amount < $request->amount) {
                $notify[] = ['error', 'Please Follow Deposit Limit'];
                return response()->json(
                    [
                        'success' => true,
                        'type' => $notify[0][0],
                        'message' => $notify[0][1]
                    ]
                );
            }
            $charge = getAmount($gate->fixed_charge + ($request->amount * $gate->percent_charge / 100));

            if (getPlatform('wallet')->deposit_fees_method == 'added') {
                $payable = getAmount($request->amount + $charge);
            } else if (getPlatform('wallet')->deposit_fees_method == 'subtracted') {
                $payable = $request->amount;
            }

            $final_amo = getAmount($payable * $gate->rate);

            $data = new Deposit();
            $data->user_id = $user->id;
            $data->method_code = $gate->method_code;
            $data->method_currency = strtoupper($gate->currency);
            $data->amount = $request->amount;
            $data->charge = $charge;
            $data->rate = $gate->rate;
            $data->final_amo = getAmount($final_amo);
            $data->address = $request->address;
            $data->symbol = $request->symbol;
            $data->btc_amo = 0;
            $data->btc_wallet = "";
            $data->trx = getTrx();
            $data->try = 0;
            $data->status = 0;
            $data->save();

            session()->put('Track', $data);
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
                'type' => 'success',
                'message' => 'Deposit Initiated',
                'redirect' => route('user.deposit.preview')
            ]
        );
    }


    public function depositPreview()
    {
        $track = session()->get('Track');
        $data = Deposit::where('trx', $track->trx)->orderBy('id', 'DESC')->firstOrFail();
        if (is_null($data)) {
            $notify[] = ['error', 'Invalid Deposit Request'];
            return redirect()->route(gatewayRedirectUrl())->withNotify($notify);
        }
        if ($data->status != 0) {
            $notify[] = ['error', 'Invalid Deposit Request'];
            return redirect()->route(gatewayRedirectUrl())->withNotify($notify);
        }
        $page_title = 'Payment Preview';
        $address = $track->address;
        $symbol = $track->symbol;
        $plat = Platform::first();
        return view('user.payment.preview', compact('data', 'page_title', 'address', 'symbol', 'plat'));
    }


    public function depositConfirm()
    {
        $track = Session::get('Track');
        $deposit = Deposit::where('trx', $track->trx)->orderBy('id', 'DESC')->with('gateway')->first();
        if (is_null($deposit)) {
            $notify[] = ['error', 'Invalid Deposit Request'];
            return redirect()->route(gatewayRedirectUrl())->withNotify($notify);
        }
        if ($deposit->status != 0) {
            $notify[] = ['error', 'Invalid Deposit Request'];
            return redirect()->route(gatewayRedirectUrl())->withNotify($notify);
        }

        if ($deposit->method_code >= 1000) {
            $this->userDataUpdate($deposit);
            $notify[] = ['success', 'Your deposit request is queued for approval.'];
            return back()->withNotify($notify);
        }


        $dirName = $deposit->gateway->alias;
        $new = __NAMESPACE__ . '\\' . $dirName . '\\ProcessController';

        $data = $new::process($deposit);
        $data = json_decode($data);


        if (isset($data->error)) {
            $notify[] = ['error', $data->message];
            return redirect()->route(gatewayRedirectUrl())->withNotify($notify);
        }
        if (isset($data->redirect)) {
            return redirect($data->redirect_url);
        }

        // for Stripe V3
        if (@$data->session) {
            $deposit->btc_wallet = $data->session->id;
            $deposit->save();
        }

        $page_title = 'Payment Confirm';
        return view($data->view, compact('data', 'page_title', 'deposit'));
    }


    public static function userDataUpdate($trx)
    {
        $data = Deposit::where('trx', $trx)->first();
        if ($data->status == 0) {
            $data->status = 1;
            $data->save();

            $user = User::find($data->user_id);
            $wallet = getWallet($data->user_id, 'funding', $data->symbol, 'funding');
            if (getPlatform('wallet')->deposit_fees_method == 'added') {
                $wallet->balance += ($data->amount * $data->rate) / getCoinRate($data->symbol);
            } else if (getPlatform('wallet')->deposit_fees_method == 'subtracted') {
                $wallet->balance += (($data->amount - $data->charge) * $data->rate) / getCoinRate($data->symbol);
            }
            $wallet->save();

            $transaction = new Transaction();
            $transaction->user_id = $data->user_id;
            $transaction->amount = $data->amount;
            $transaction->post_balance = getAmount($wallet->balance);
            $transaction->charge = getAmount($data->charge);
            $transaction->trx_type = '+';
            $transaction->details = 'Deposit Via ' . $data->gateway_currency()->name . ' Into Your ' . $wallet->symbol . '';
            $transaction->trx = $data->trx;
            $transaction->save();
            try {
                notify($transaction->user, 'AUTOMATED_DEPOSIT_SUCCESSFUL', [
                    'username' => $transaction->user->username,
                    'site_name' => getNotify()->site_name,
                    "amount" => $data->amount,
                    "currency" => $data->symbol,
                    "trx" => $data->trx,
                    "post_balance" => $transaction->post_balance,
                    "charge" => $data->charge,
                    "rate" => $data->rate,
                    "method_currency" => $data->method_currency,
                    "method_name" => $data->gateway_currency()->name,
                    "method_amount" => $data->final_amo
                ]);
                $notify[] = ['success', 'Client Notified By Email Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }

            $wallet_new_trx = new WalletsTransactions();
            $wallet_new_trx->user_id = $user->id;
            $wallet_new_trx->symbol = $data->symbol;
            $wallet_new_trx->address = $data->address;
            $wallet_new_trx->amount = $data->amount;
            if (getPlatform('wallet')->deposit_fees_method == 'added') {
                $wallet_new_trx->amount_recieved = ($data->amount * $data->rate) / getCoinRate($data->symbol);
            } else if (getPlatform('wallet')->deposit_fees_method == 'subtracted') {
                $wallet_new_trx->amount_recieved = (($data->amount - $data->charge) * $data->rate) / getCoinRate($data->symbol);
            }
            $wallet_new_trx->charge = ($data->charge * $data->rate) / getCoinRate($data->symbol);
            $wallet_new_trx->to = $data->address;
            $wallet_new_trx->type = '1';
            $wallet_new_trx->status = '1';
            $wallet_new_trx->trx = $data->trx;
            $wallet_new_trx->details = 'Deposited ' . (($data->amount - $data->charge) * $data->rate) / getCoinRate($data->symbol) . ' To Wallet';
            $wallet_new_trx->wallet_type = 'funding';
            $wallet_new_trx->save();
            $wallet_new_trx->clearCache();

            if (Extension::where('id', 3)->first()->status == 1 && getPlatform('mlm')->deposits == 1 && $user->ref_by != null) {
                BVstore($user, 1, $data->amount);
            }
            $adminNotification = new AdminNotification();
            $adminNotification->user_id = $user->id;
            $adminNotification->title = 'Deposit successful via ' . $data->gateway_currency()->name;
            $adminNotification->click_url = route('admin.deposit.successful');
            $adminNotification->save();
            $adminNotification->clearCache();
        }
    }

    public function manualDepositConfirm()
    {
        $track = session()->get('Track');
        $data = Deposit::with('gateway')->where('status', 0)->where('trx', $track->trx)->first();
        if (!$data) {
            return redirect()->route(gatewayRedirectUrl());
        }
        if ($data->status != 0) {
            return redirect()->route(gatewayRedirectUrl());
        }
        if ($data->method_code > 999) {

            $page_title = 'Deposit Confirm';
            $method = $data->gateway_currency();
            return view('user.manual_payment.manual_confirm', compact('data', 'page_title', 'method'));
        }
        abort(404);
    }

    public function manualDepositUpdate(Request $request)
    {
        $track = session()->get('Track');
        $data = Deposit::with('gateway')->where('status', 0)->where('trx', $track->trx)->first();
        if (!$data) {
            return redirect()->route(gatewayRedirectUrl());
        }
        if ($data->status != 0) {
            return redirect()->route(gatewayRedirectUrl());
        }

        $params = json_decode($data->gateway_currency()->gateway_parameter);

        $rules = [];
        $inputField = [];
        $verifyImages = [];

        if ($params != null) {
            foreach ($params as $key => $cus) {
                $rules[$key] = [$cus->validation];
                if ($cus->type == 'file') {
                    array_push($rules[$key], 'image');
                    array_push($rules[$key], 'mimes:jpeg,jpg,png');
                    array_push($rules[$key], 'max:2048');

                    array_push($verifyImages, $key);
                }
                if ($cus->type == 'text') {
                    array_push($rules[$key], 'max:191');
                }
                if ($cus->type == 'textarea') {
                    array_push($rules[$key], 'max:300');
                }
                $inputField[] = $key;
            }
        }


        $this->validate($request, $rules);


        $directory = date("Y") . "/" . date("m") . "/" . date("d");
        $path = imagePath()['verify']['deposit']['path'] . '/' . $directory;
        $collection = collect($request);
        $reqField = [];
        if ($params != null) {
            foreach ($collection as $k => $v) {
                foreach ($params as $inKey => $inVal) {
                    if ($k != $inKey) {
                        continue;
                    } else {
                        if ($inVal->type == 'file') {
                            if ($request->hasFile($inKey)) {
                                try {
                                    $reqField[$inKey] = [
                                        'field_name' => $directory . '/' . uploadImg($request[$inKey], $path),
                                        'type' => $inVal->type,
                                    ];
                                } catch (\Exception $exp) {
                                    $notify[] = ['error', 'Could not upload your ' . $inKey];
                                    return back()->withNotify($notify)->withInput();
                                }
                            }
                        } else {
                            $reqField[$inKey] = $v;
                            $reqField[$inKey] = [
                                'field_name' => $v,
                                'type' => $inVal->type,
                            ];
                        }
                    }
                }
            }
            $data->detail = $reqField;
        } else {
            $data->detail = null;
        }



        $data->status = 2; // pending
        $data->save();
        $user = User::where('id', $data->user_id)->first();
        if ($data->save()) {
            try {
                notify($user, 'MANUAL_DEPOSIT_USER_REQUESTED', [
                    'username' => $user->username,
                    'site_name' => getNotify()->site_name,
                    "amount" => $data->amount,
                    "currency" => $data->symbol,
                    "trx" => $data->trx,
                    "charge" => $data->charge,
                    "rate" => $data->rate,
                    "method_currency" => $data->method_currency,
                    "method_name" => $data->gateway_currency()->name,
                    "method_amount" => $data->final_amo
                ]);
                $notify[] = ['success', 'Client Notified By Email Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }
        }


        $wallet_new_trx = new WalletsTransactions();
        $wallet_new_trx->user_id = $data->user_id;
        $wallet_new_trx->symbol = $data->symbol;
        $wallet_new_trx->address = $data->address;
        if (getPlatform('wallet')->deposit_fees_method == 'added') {
            $wallet_new_trx->amount_recieved = ($data->amount * $data->rate) / getCoinRate($data->symbol);
        } else if (getPlatform('wallet')->deposit_fees_method == 'subtracted') {
            $wallet_new_trx->amount_recieved = (($data->amount - $data->charge) * $data->rate) / getCoinRate($data->symbol);
        }
        $wallet_new_trx->amount = $data->amount;
        $wallet_new_trx->charge = ($data->charge * $data->rate) / getCoinRate($data->symbol);
        $wallet_new_trx->to = $data->address;
        $wallet_new_trx->type = '1';
        $wallet_new_trx->status = '2';
        $wallet_new_trx->trx = $data->trx;
        $wallet_new_trx->details = 'Deposited ' . ($data->amount * $data->rate) / getCoinRate($data->symbol) . ' To Wallet';
        $wallet_new_trx->wallet_type = 'funding';
        $wallet_new_trx->save();
        $wallet_new_trx->clearCache();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $data->user->id;
        $adminNotification->title = 'Deposit request from ' . $data->user->username;
        $adminNotification->click_url = route('admin.deposit.details', $data->id);
        $adminNotification->save();
        $adminNotification->clearCache();

        $notify[] = ['success', 'Your deposit request has been taken successfully.'];
        return redirect()->route('app.home')->withNotify($notify);
    }
}
