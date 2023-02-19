<?php

namespace App\Http\Controllers\Admin;

use App\Models\Deposit;
use App\Models\Gateway;
use App\Models\GeneralSetting;
use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\User;
use App\Models\WithdrawMethod;
use App\Models\Withdrawal;
use App\Models\TradeLog;
use App\Models\PracticeLog;
use App\Models\ThirdpartyProvider;
use App\Models\Wallet;
use App\Models\WalletsFrozen;
use Illuminate\Http\Request;
use Throwable;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class ManageUsersController extends Controller
{
    public $provider = null;
    public function __construct()
    {
        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $this->provider = $thirdparty->title;
        }
    }
    public function allUsers()
    {
        abort_if(Gate::denies('user_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Manage Users';
        $type = 'all';
        return view('admin.users.list', compact('page_title', 'type'));
    }

    public function detail($id)
    {
        abort_if(Gate::denies('user_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'User Detail';
        $user = User::findOrFail($id);
        $totalDeposit = Deposit::where('user_id', $user->id)->where('status', 1)->sum('amount');
        $refer_by = User::where('id', $user->ref_by)->first();
        $totalWithdraw = Withdrawal::where('user_id', $user->id)->where('status', 1)->sum('amount');
        $totalTransaction = Transaction::where('user_id', $user->id)->count();
        $practiceLogCount = PracticeLog::where('user_id', $user->id)->count();
        $tradeLog['traded'] = TradeLog::where('user_id', $user->id)->count();
        $tradeLog['wining'] = TradeLog::where('user_id', $user->id)->where('result', 1)->where('status', 1)->count();
        $tradeLog['losing'] = TradeLog::where('user_id', $user->id)->where('result', 2)->where('status', 1)->count();
        $tradeLog['draw'] = TradeLog::where('user_id', $user->id)->where('result', 3)->where('status', 1)->count();
        $wallets = Wallet::where('user_id', $user->id)->get();
        if ($this->provider != null) {
            $wallet_type = 'trading';
        } else {
            $wallet_type = 'funding';
        }
        $frozen_wallet = $user->frozen_wallets();
        return view('admin.users.detail', compact('page_title', 'user', 'totalDeposit', 'frozen_wallet', 'wallet_type', 'totalWithdraw', 'totalTransaction', 'wallets', 'tradeLog', 'practiceLogCount', 'refer_by'));
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

    public function referralLog($id)
    {
        abort_if(Gate::denies('referral_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'Referral Log : ' . $user->username;
        $empty_message = 'No Referral User Found';
        $users  = User::where('ref_by', $id)->latest()->paginate(getPaginate());
        return view('admin.users.list', compact('page_title', 'empty_message', 'users'));
    }

    public function practiceLog($id)
    {
        abort_if(Gate::denies('binary_practice_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Practice Trade Log : ' . $user->username;
        $empty_message = 'No Data Found';
        $practiceLogs = PracticeLog::where('user_id', $user->id)->latest()->paginate(getPaginate());
        return view('admin.practice.index', compact('page_title', 'empty_message', 'practiceLogs'));
    }
    public function traded($id)
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Trade Log : ' . $user->username;
        $empty_message = 'No Data Found';
        $tradelogs = TradeLog::where('user_id', $user->id)->latest()->paginate(getPaginate());
        return view('admin.trade_log.index', compact('page_title', 'empty_message', 'tradelogs'));
    }
    public function wining($id)
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Wining Trade Log : ' . $user->username;
        $empty_message = 'No Data Found';
        $tradelogs = TradeLog::where('user_id', $user->id)->where('result', 1)->where('status', 1)->latest()->paginate(getPaginate());
        return view('admin.trade_log.index', compact('page_title', 'empty_message', 'tradelogs'));
    }
    public function losing($id)
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Losing Trade Log : ' . $user->username;
        $empty_message = 'No Data Found';
        $tradelogs = TradeLog::where('user_id', $user->id)->where('result', 2)->where('status',)->latest()->paginate(getPaginate());
        return view('admin.trade_log.index', compact('page_title', 'empty_message', 'tradelogs'));
    }
    public function draw($id)
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Draw Trade Log : ' . $user->username;
        $empty_message = 'No Data Found';
        $tradelogs = TradeLog::where('user_id', $user->id)->where('result', 3)->where('status', 1)->latest()->paginate(getPaginate());
        return view('admin.trade_log.index', compact('page_title', 'empty_message', 'tradelogs'));
    }

    public function addSubBalance(Request $request, $id)
    {
        $request->validate(['amount' => 'required|numeric|gt:0']);

        $user = User::findOrFail($id);
        $amount = getAmount($request->amount);
        $general = GeneralSetting::first(['cur_text', 'cur_sym']);
        $wallet = Wallet::where('user_id', $user->id)->where('address', $request->address)->where('symbol', $request->symbol)->first();
        $trx = getTrx();

        if ($request->act) {

            $wallet->balance += $amount;
            $wallet->save();
            $notify[] = ['success', $request->symbol . $amount . ' has been added to ' . $wallet->symbol . ' balance'];
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
                return back()->withNotify($notify);
            }

            $wallet->balance -= $amount;
            $wallet->save();
            $notify[] = ['success', $general->cur_sym . $amount . ' has been subtracted from ' . $user->username . ' balance'];
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
        return back()->withNotify($notify);
    }

    public function addSubBalanceFrozen(Request $request, $id)
    {
        $request->validate(['amount' => 'required|numeric|gt:0']);

        $user = User::findOrFail($id);
        $amount = getAmount($request->amount);
        $wallet = WalletsFrozen::where('user_id', $user->id)->where('symbol', $request->symbol)->first();
        $trx = getTrx();

        if ($request->act) {

            $wallet->balance += $amount;
            $wallet->save();
            $notify[] = ['success', $wallet->symbol . $amount . ' has been added to ' . $user->username . ' balance'];
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
                return back()->withNotify($notify);
            }

            $wallet->balance -= $amount;
            $wallet->save();
            $notify[] = ['success', $wallet->symbol . $amount . ' has been subtracted from ' . $user->username . ' balance'];
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
        return back()->withNotify($notify);
    }

    public function frozen_wallet_remove($id)
    {
        $wallet = WalletsFrozen::where('id', $id)->first();
        $wallet->delete();

        $notify[] = ['success', 'Wallet Removed Successfully'];
        return back()->withNotify($notify);
    }

    public function frozen_wallet_create(Request $request)
    {
        $wallet = new WalletsFrozen();
        $wallet->user_id = $request->user_id;
        $wallet->symbol = $request->symbol;
        $wallet->text = $request->text;
        $wallet->balance = 0;
        $wallet->status = 1;
        $wallet->save();

        $notify[] = ['success', 'Wallet Removed Successfully'];
        return back()->withNotify($notify);
    }

    public function frozen_wallet_activate(Request $request)
    {
        $wallet = WalletsFrozen::where('id', $request->id)->first();
        $wallet->status = 1;
        $wallet->save();

        $notify[] = ['success', 'Wallet Activated Successfully'];
        return back()->withNotify($notify);
    }

    public function frozen_wallet_deactivate(Request $request)
    {
        $wallet = WalletsFrozen::where('id', $request->id)->first();
        $wallet->status = 0;
        $wallet->save();

        $notify[] = ['success', 'Wallet Deactivated Successfully'];
        return back()->withNotify($notify);
    }

    public function userLoginHistory($id)
    {
        abort_if(Gate::denies('user_login_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $page_title = 'User Login History - ' . $user->username;
        $empty_message = 'No users login found.';
        $login_logs = $user->login_logs()->latest()->paginate(getPaginate());
        return view('admin.users.logins', compact('page_title', 'empty_message', 'login_logs'));
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

    public function transactions(Request $request, $id)
    {
        abort_if(Gate::denies('transaction_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        if ($request->search) {
            $search = $request->search;
            $page_title = 'Search User Transactions : ' . $user->username;
            $transactions = $user->transactions()->where('trx', $search)->with('user')->latest()->paginate(getPaginate());
            $empty_message = 'No transactions';
            return view('admin.reports.transactions', compact('page_title', 'search', 'user', 'transactions', 'empty_message'));
        }
        $page_title = 'User Transactions : ' . $user->username;
        $transactions = $user->transactions()->with('user')->latest()->paginate(getPaginate());
        $empty_message = 'No transactions';
        return view('admin.reports.transactions', compact('page_title', 'user', 'transactions', 'empty_message'));
    }

    public function deposits(Request $request, $id)
    {
        abort_if(Gate::denies('deposit_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        $userId = $user->id;
        if ($request->search) {
            $search = $request->search;
            $page_title = 'Search User Deposits : ' . $user->username;
            $deposits = $user->deposits()->where('trx', $search)->latest()->paginate(getPaginate());
            $empty_message = 'No deposits';
            return view('admin.deposit.log', compact('page_title', 'search', 'user', 'deposits', 'empty_message', 'userId'));
        }

        $page_title = 'User Deposit : ' . $user->username;
        $deposits = $user->deposits()->latest()->paginate(getPaginate());
        $empty_message = 'No deposits';
        $scope = 'all';
        return view('admin.deposit.log', compact('page_title', 'user', 'deposits', 'empty_message', 'userId', 'scope'));
    }


    public function depViaMethod($method, $type = null, $userId)
    {
        abort_if(Gate::denies('deposit_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $method = Gateway::where('alias', $method)->firstOrFail();
        $user = User::findOrFail($userId);
        if ($type == 'approved') {
            $page_title = 'Approved Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('user_id', $user->id)->where('method_code', $method->code)->where('status', 1)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'rejected') {
            $page_title = 'Rejected Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('user_id', $user->id)->where('method_code', $method->code)->where('status', 3)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'successful') {
            $page_title = 'Successful Payment Via ' . $method->name;
            $deposits = Deposit::where('status', 1)->where('user_id', $user->id)->where('method_code', $method->code)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } elseif ($type == 'pending') {
            $page_title = 'Pending Payment Via ' . $method->name;
            $deposits = Deposit::where('method_code', '>=', 1000)->where('user_id', $user->id)->where('method_code', $method->code)->where('status', 2)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        } else {
            $page_title = 'Payment Via ' . $method->name;
            $deposits = Deposit::where('status', '!=', 0)->where('user_id', $user->id)->where('method_code', $method->code)->latest()->with(['user', 'gateway'])->paginate(getPaginate());
        }
        $page_title = 'Deposit History: ' . $user->username . ' Via ' . $method->name;
        $methodAlias = $method->alias;
        $empty_message = 'Deposit Log';
        return view('admin.deposit.log', compact('page_title', 'empty_message', 'deposits', 'methodAlias', 'userId'));
    }



    public function withdrawals(Request $request, $id)
    {
        abort_if(Gate::denies('withdraw_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $user = User::findOrFail($id);
        if ($request->search) {
            $search = $request->search;
            $page_title = 'Search User Withdrawals : ' . $user->username;
            $withdrawals = $user->withdrawals()->where('trx', 'like', "%$search%")->latest()->paginate(getPaginate());
            $empty_message = 'No withdrawals';
            return view('admin.withdraw.withdrawals', compact('page_title', 'user', 'search', 'withdrawals', 'empty_message'));
        }
        $page_title = 'User Withdrawals : ' . $user->username;
        $withdrawals = $user->withdrawals()->latest()->paginate(getPaginate());
        $empty_message = 'No withdrawals';
        $userId = $user->id;
        return view('admin.withdraw.withdrawals', compact('page_title', 'user', 'withdrawals', 'empty_message', 'userId'));
    }

    public  function withdrawalsViaMethod($method, $type, $userId)
    {
        abort_if(Gate::denies('withdraw_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $method = WithdrawMethod::findOrFail($method);
        $user = User::findOrFail($userId);
        if ($type == 'approved') {
            $page_title = 'Approved Withdrawal of ' . $user->username . ' Via ' . $method->name;
            $withdrawals = Withdrawal::where('status', 1)->where('user_id', $user->id)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } elseif ($type == 'rejected') {
            $page_title = 'Rejected Withdrawals of ' . $user->username . ' Via ' . $method->name;
            $withdrawals = Withdrawal::where('status', 3)->where('user_id', $user->id)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } elseif ($type == 'pending') {
            $page_title = 'Pending Withdrawals of ' . $user->username . ' Via ' . $method->name;
            $withdrawals = Withdrawal::where('status', 2)->where('user_id', $user->id)->with(['user', 'method'])->latest()->paginate(getPaginate());
        } else {
            $page_title = 'Withdrawals of ' . $user->username . ' Via ' . $method->name;
            $withdrawals = Withdrawal::where('status', '!=', 0)->where('user_id', $user->id)->with(['user', 'method'])->latest()->paginate(getPaginate());
        }
        $empty_message = 'Withdraw Log Not Found';
        return view('admin.withdraw.withdrawals', compact('page_title', 'withdrawals', 'empty_message', 'method'));
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