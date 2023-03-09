<?php

namespace App\Http\Controllers\Admin;

use App\Models\Deposit;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Withdrawal;
use App\Models\TradeLog;
use App\Models\PracticeLog;
use App\Models\Wallet;
use App\Models\WalletsFrozen;
use Illuminate\Http\Request;
use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function allUsers()
    {
        abort_if(Gate::denies('user_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Manage Users';
        $type = 'all';
        return view('admin.users.list', compact('page_title', 'type'));
    }

    public function detail($id)
    {
        if (Gate::denies('user_edit')) {
            return response()->json(['error' => 'Forbidden'], Response::HTTP_FORBIDDEN);
        }
        $user = User::with('kyc_application')->findOrFail($id);
        $totalDeposit = Deposit::where('user_id', $user->id)
            ->where('status', 1)
            ->sum('amount');
        $totalWithdraw = Withdrawal::where('user_id', $user->id)
            ->where('status', 1)
            ->sum('amount');
        $totalTransaction = Transaction::where('user_id', $user->id)->count();
        $tradeLog = [
            'traded' => TradeLog::where('user_id', $user->id)->count(),
            'wining' => TradeLog::where('user_id', $user->id)
                ->where('result', 1)
                ->where('status', 1)
                ->count(),
            'losing' => TradeLog::where('user_id', $user->id)
                ->where('result', 2)
                ->where('status', 1)
                ->count(),
            'draw' => TradeLog::where('user_id', $user->id)
                ->where('result', 3)
                ->where('status', 1)
                ->count()
        ];
        $practiceLogCount = PracticeLog::where('user_id', $user->id)->count();
        $refer_by = User::where('id', $user->ref_by)->first();
        $wallets = Wallet::where('user_id', $user->id)->get();
        $wallet_type = (getProvider() != null) ? 'trading' : 'funding';
        $frozen_wallet = (new WalletsFrozen())->getCached($user->id);
        return view('admin.users.detail', [
            'user' => $user,
            'totalDeposit' => $totalDeposit,
            'totalWithdraw' => $totalWithdraw,
            'totalTransaction' => $totalTransaction,
            'wallets' => $wallets,
            'tradeLog' => $tradeLog,
            'practiceLogCount' => $practiceLogCount,
            'refer_by' => $refer_by,
            'wallet_type' => $wallet_type,
            'frozen_wallet' => $frozen_wallet
        ]);
    }


    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $request->validate([
            'firstname' => 'required|max:60',
            'lastname' => 'required|max:60',
            'email' => 'required|email|max:160|unique:users,email,' . $user->id,
        ]);

        if ($request->email != $user->email && User::whereEmail($request->email)->whereId('!=', $user->id)->count() > 0) {
            $notify[] = ['error', 'Email already exists.'];
            return back()->withNotify($notify);
        }
        if ($request->mobile != $user->mobile && User::where('mobile', $request->mobile)->whereId('!=', $user->id)->count() > 0) {
            $notify[] = ['error', 'Phone number already exists.'];
            return back()->withNotify($notify);
        }
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $request->merge(['email_verified_at' => isset($request->email_verified_at) ? 1 : 0]);

        $user->mobile = $request->mobile;
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->state = $request->state;
        $user->zip = $request->zip;
        $user->country = $request->country;
        $user->save();

        $notify[] = ['success', 'User detail has been updated'];
        return redirect()->back()->withNotify($notify);
    }

    public function addSubBalance(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric|gt:0'
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
            $user = User::findOrFail($id);
            $amount = getAmount($request->amount);
            $wallet = Wallet::where('user_id', $user->id)->where('address', $request->address)->where('symbol', $request->symbol)->first();
            $trx = getTrx();

            if ($request->act) {

                $wallet->balance += $amount;
                $wallet->save();
                $notify[] = ['success', $request->symbol . ' ' . $amount . ' has been added to ' . $user->username . ' balance'];
                if ($user) {
                    $transaction = new Transaction();
                    $transaction->user_id = $user->id;
                    $transaction->amount = $amount;
                    $transaction->post_balance = getAmount($wallet->balance);
                    $transaction->charge = 0;
                    $transaction->trx_type = '+';
                    $transaction->details = 'Added Balance Via Admin';
                    $transaction->trx =  $trx;
                    $transaction->save();
                    $transaction->clearCache();
                    try {
                        notify($user, 'ADMIN_BALANCE_ADD', [
                            'username' => $user->username,
                            'site_name' => getNotify()->site_name,
                            "amount" => $transaction->amount,
                            "currency" => $request->symbol,
                            "trx" => $transaction->trx,
                            "post_balance" => $transaction->post_balance
                        ]);
                        $notify[] = ['success', 'Client Notified By Email Successfully'];
                    } catch (Throwable $e) {
                        $notify[] = ['warning', 'Mail Not Properly Set'];
                    }
                }
            } else {
                if ($amount > $wallet->balance) {
                    $notify[] = ['error', $user->username . ' has insufficient balance.'];
                    return response()->json(
                        [
                            'success' => true,
                            'type' => $notify[0][0],
                            'message' => $notify[0][1]
                        ]
                    );
                }

                $wallet->balance -= $amount;
                $wallet->save();
                $notify[] = ['success', $request->symbol . ' ' . $amount . ' has been subtracted from ' . $user->username . ' balance'];
                if ($user) {
                    $transaction = new Transaction();
                    $transaction->user_id = $user->id;
                    $transaction->amount = $amount;
                    $transaction->post_balance = getAmount($wallet->balance);
                    $transaction->charge = 0;
                    $transaction->trx_type = '-';
                    $transaction->details = 'Subtract Balance Via Admin';
                    $transaction->trx =  $trx;
                    $transaction->save();
                    $transaction->clearCache();
                    try {
                        notify($user, 'ADMIN_BALANCE_SUBTRACTED', [
                            'username' => $user->username,
                            'site_name' => getNotify()->site_name,
                            "amount" => $transaction->amount,
                            "currency" => $request->symbol,
                            "trx" => $transaction->trx,
                            "post_balance" => $transaction->post_balance
                        ]);
                        $notify[] = ['success', 'Client Notified By Email Successfully'];
                    } catch (Throwable $e) {
                        $notify[] = ['warning', 'Mail Not Properly Set'];
                    }
                }
            }
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

    public function addSubBalanceFrozen(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric|gt:0'
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
            $user = User::findOrFail($id);
            $amount = getAmount($request->amount);
            $wallet = WalletsFrozen::where('user_id', $user->id)->where('symbol', $request->symbol)->first();
            $trx = getTrx();

            if ($request->act) {

                $wallet->balance += $amount;
                $wallet->save();
                $notify[] = ['success', $request->symbol . ' ' . $amount . ' has been added to ' . $user->username . ' balance'];
                if ($user) {
                    $transaction = new Transaction();
                    $transaction->user_id = $user->id;
                    $transaction->amount = $amount;
                    $transaction->post_balance = getAmount($wallet->balance);
                    $transaction->charge = 0;
                    $transaction->trx_type = '+';
                    $transaction->details = 'Added Balance Via Admin';
                    $transaction->trx =  $trx;
                    $transaction->save();
                    $transaction->clearCache();
                    try {
                        notify($user, 'ADMIN_BALANCE_ADD', [
                            'username' => $user->username,
                            'site_name' => getNotify()->site_name,
                            "amount" => $transaction->amount,
                            "currency" => $request->symbol,
                            "trx" => $transaction->trx,
                            "post_balance" => $transaction->post_balance
                        ]);
                        $notify[] = ['success', 'Client Notified By Email Successfully'];
                    } catch (Throwable $e) {
                        $notify[] = ['warning', 'Mail Not Properly Set'];
                    }
                }
            } else {
                if ($amount > $wallet->balance) {
                    $notify[] = ['error', $user->username . ' has insufficient balance.'];
                    return response()->json(
                        [
                            'success' => true,
                            'type' => $notify[0][0],
                            'message' => $notify[0][1]
                        ]
                    );
                }

                $wallet->balance -= $amount;
                $wallet->save();
                $wallet->clearCache();
                $notify[] = ['success', $request->symbol . ' ' . $amount . ' has been subtracted from ' . $user->username . ' balance'];
                if ($user) {
                    $transaction = new Transaction();
                    $transaction->user_id = $user->id;
                    $transaction->amount = $amount;
                    $transaction->post_balance = getAmount($wallet->balance);
                    $transaction->charge = 0;
                    $transaction->trx_type = '-';
                    $transaction->details = 'Subtract Balance Via Admin';
                    $transaction->trx =  $trx;
                    $transaction->save();
                    $transaction->clearCache();
                    try {
                        notify($user, 'ADMIN_BALANCE_SUBTRACTED', [
                            'username' => $user->username,
                            'site_name' => getNotify()->site_name,
                            "amount" => $transaction->amount,
                            "currency" => $request->symbol,
                            "trx" => $transaction->trx,
                            "post_balance" => $transaction->post_balance
                        ]);
                        $notify[] = ['success', 'Client Notified By Email Successfully'];
                    } catch (Throwable $e) {
                        $notify[] = ['warning', 'Mail Not Properly Set'];
                    }
                }
            }
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

    public function frozen_wallet_create(Request $request)
    {
        try {
            $wallet = new WalletsFrozen();
            $wallet->user_id = $request->user_id;
            $wallet->symbol = $request->symbol;
            $wallet->text = $request->text;
            $wallet->balance = 0;
            $wallet->status = 1;
            $wallet->save();
            $wallet->clearCache();

            return response()->json([
                'success' => true,
                'type' => 'success',
                'message' => 'Wallet created successfully'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'type' => 'error',
                'message' => 'Error: ' . $th->getMessage()
            ]);
        }
    }

    public function showEmailSingleForm($id)
    {
        abort_if(Gate::denies('user_mailer'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'Send Email To: ' . $user->username;
        return view('admin.users.email_single', compact('page_title', 'user'));
    }

    public function sendEmailSingle(Request $request, $id)
    {
        abort_if(Gate::denies('user_mailer'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'message' => 'required|string|max:65000',
            'subject' => 'required|string|max:190',
        ]);

        $user = User::findOrFail($id);
        $subject = $request->subject;
        $message = $request->message;

        notify($user, 'SEND_MAIL', [
            'site_name' => getNotify()->site_name,
            'subject' => $subject,
            'message' => $message,
            'username' => $user->username
        ], ['email']);
        try {
            $notify[] = ['success', $user->username . ' will receive an email shortly.'];
        } catch (Throwable $e) {
            $notify[] = ['warning', 'Mail Not Properly Set'];
        }

        return back()->withNotify($notify);
    }

    public function showEmailAllForm()
    {
        abort_if(Gate::denies('user_mailer'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Send Email To All Users';
        return view('admin.users.email_all', compact('page_title'));
    }

    public function sendEmailAll(Request $request)
    {
        abort_if(Gate::denies('user_mailer'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $request->validate([
            'message' => 'required|string|max:65000',
            'subject' => 'required|string|max:190',
        ]);

        foreach (User::where('status', 1)->cursor() as $user) {
            $subject = $request->subject;
            $message = $request->message;
            try {
                notify($user, 'SEND_MAIL', [
                    'site_name' => getNotify()->site_name,
                    'subject' => $subject,
                    'message' => $message,
                    'username' => $user->username
                ], ['email']);
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Mail Not Properly Set'];
            }
        }

        $notify[] = ['success', 'All users will receive an email shortly.'];
        return back()->withNotify($notify);
    }
}