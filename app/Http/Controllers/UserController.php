<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\GeneralSetting;
use App\Models\Transaction;
use App\Models\Commission;
use App\Models\User;
use App\Models\Tokens;
use App\Models\WithdrawMethod;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Mail\EmailToUser;
use App\Models\Currencies;
use App\Models\Deposit;
use App\Models\Popups;
use App\Models\Platform;
use App\Models\PopupsStatus;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\RegisterViewResponse;
use Illuminate\Support\Str;
use Throwable;

class UserController extends Controller
{

    public function index()
    {
        $page_title = 'Dashboard';
        $thirdparty = getProvider();
        $provider = $thirdparty ? $thirdparty->title : 'kucoin';
        $trading_wallet = $thirdparty != null ? 1 : 0;
        $gnl_cur = GetCurrency();
        return view('layouts.app', compact('page_title', 'provider', 'trading_wallet', 'gnl_cur'));
    }

    public function api_tokens()
    {
        $tokens = Auth::user()->tokens;
        foreach ($tokens as $key => $value) {
            $value->abilities = json_decode($value->abilities, true);
        }
        return response()->json(
            [
                'success' => false,
                'type' => 'success',
                'tokens' => Auth::user()->tokens
            ]
        );
    }

    public function api_tokens_edit(Request $request)
    {
        $token = Tokens::where('id', $request->token)->first();
        $abilites = [];
        foreach ($request->abilities as $key => $value) {
            $abilites[] = $value;
        }
        $token->abilities = json_encode($abilites);
        $token->save();
        return response()->json(
            [
                'success' => false,
                'type' => 'success',
                'message' => "Token updated successfully",
            ]
        );
    }

    public function api_tokens_store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|unique:tokens|string',
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
        $user = Auth::user();
        $token = new Tokens();
        $token->user_id = $user->id;
        $token->name = $request->name;
        $abilites = [];
        foreach ($request->abilities as $key => $value) {
            $abilites[] = $value;
        }
        $token->abilities = json_encode($abilites);
        $token->token = Str::random(32);
        $token->save();
        return response()->json(
            [
                'success' => false,
                'type' => 'success',
                'message' => "Token Created successfully",
            ]
        );
    }
    public function api_tokens_delete(Request $request)
    {
        $token = Tokens::where('id', $request->id)->first();
        $token->delete();
        return response()->json(
            [
                'success' => false,
                'type' => 'success',
                'message' => "Token removed successfully",
            ]
        );
    }
    public function home()
    {
        return redirect()->route('user.home');
    }

    public function data()
    {
        $user = Auth::user();
        if ($user->frozen_wallets() != null) {
            $user->frozen_wallet = $user->frozen_wallets();
        }
        if (Popups::where('status', 1)->exists()) {
            $popups = [];
            $data = Popups::where('status', 1)->get();
            foreach ($data as $item) {
                if (!PopupsStatus::where('popup_id', $item->id)->where('user_id', $user->id)->where('status', 0)->exists()) {
                    $popup[] = $item;
                }
            }
            $popups = $popup ?? null;
        }
        $users = User::get();
        $currency = Currencies::where('status', 1)->first();
        return response()->json([
            'user' => $user,
            'users' => $users,
            'popups' => $popups ?? null,
            'kyc' => checkKYC($user->id),
            'currency' => $currency,
            'membership_fee' => Platform::where('id', 12)->first()->settings
        ]);
    }

    public function send_email(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
        ], [
            'user_id.required' => __('Select a user first!'),
        ]);

        if ($validator->fails()) {
            if ($validator->errors()->has('name')) {
                $msg = $validator->errors()->first();
            } else {
                $msg = __('messages.somthing_wrong');
            }

            $ret['msg'] = 'warning';
            $ret['message'] = $msg;
        } else {
            $user = User::FindOrFail($request->input('user_id'));

            if ($user) {
                $msg = $request->input('message');
                $msg = replace_with($msg, '[[user_name]]', $user->name);
                $data = (object) [
                    'user' => (object) ['name' => $user->name, 'email' => $user->email],
                    'subject' => $request->input('subject'),
                    'greeting' => $request->input('greeting'),
                    'text' => str_replace("\n", "<br>", $msg),
                ];
                $when = now()->addMinutes(2);

                try {
                    Mail::to($user->email)
                        ->later($when, new EmailToUser($data));
                    $ret['msg'] = 'success';
                    $ret['message'] = __('messages.mail.send');
                } catch (\Exception $e) {
                    $ret['errors'] = $e->getMessage();
                    $ret['msg'] = 'warning';
                    $ret['message'] = __('messages.mail.issues');
                }
            } else {
                $ret['msg'] = 'warning';
                $ret['message'] = __('messages.mail.failed');
            }

            if ($request->ajax()) {
                return response()->json($ret);
            }
            return back()->with([$ret['msg'] => $ret['message']]);
        }
    }


    public function commissions()
    {
        $user = Auth::user();
        $page_title = 'Commission History';
        $empty_message = 'No Commission found.';
        $commissions = Commission::where('user_id', $user->id)->latest()->paginate(getPaginate());
        return view('user.commissions', compact('page_title', 'empty_message', 'commissions'));
    }

    public function referralog()
    {
        $user = Auth::user();
        $page_title = 'Referral Log';
        $empty_message = 'No Referral User';
        $referrals = User::where('ref_by', $user->id)->latest()->paginate(getPaginate());
        return view('user.referral', compact('page_title', 'empty_message', 'referrals'));
    }

    public function withdrawMoney($symbol)
    {
        $data['withdrawMethod'] = WithdrawMethod::where('status', 1)->get();
        $data['page_title'] = "Withdraw Money";
        $data['symbol'] = $symbol;
        return view('user.withdraw.methods', $data);
    }

    public function withdrawStore(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'method_code' => 'required',
            'amount' => 'required|numeric'
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
            $method = WithdrawMethod::where('id', $request->method_code)->where('status', 1)->firstOrFail();
            $user = auth()->user();
            $wallet = Wallet::where('provider', 'funding')->where('user_id', $user->id)->where('type', 'funding')->where('symbol', $request->symbol)->first();
            if ($request->amount < $method->min_limit) {
                $notify[] = ['error', 'Your Requested Amount is Smaller Than Minimum Amount.'];
                return response()->json(
                    [
                        'success' => true,
                        'type' => $notify[0][0],
                        'message' => $notify[0][1]
                    ]
                );
            }
            if ($request->amount > $method->max_limit) {
                $notify[] = ['error', 'Your Requested Amount is Larger Than Maximum Amount.'];
                return response()->json(
                    [
                        'success' => true,
                        'type' => $notify[0][0],
                        'message' => $notify[0][1]
                    ]
                );
            }

            if ($request->amount > $wallet->balance) {
                $notify[] = ['error', 'Your do not have Sufficient Balance For Withdraw.'];
                return response()->json(
                    [
                        'success' => true,
                        'type' => $notify[0][0],
                        'message' => $notify[0][1]
                    ]
                );
            }

            $charge = $method->fixed_charge + ($request->amount * $method->percent_charge / 100);
            $afterCharge = $request->amount - $charge;
            $finalAmount = getAmount($afterCharge * $method->rate);

            $withdraw = new Withdrawal();
            $withdraw->method_id = $method->id;
            $withdraw->user_id = $user->id;
            $withdraw->amount = getAmount($request->amount);
            $withdraw->currency = $method->currency;
            $withdraw->rate = $method->rate;
            $withdraw->charge = $charge;
            $withdraw->symbol = $wallet->symbol;
            $withdraw->final_amount = $finalAmount;
            $withdraw->after_charge = $afterCharge;
            $withdraw->trx = getTrx();
            $withdraw->save();
            $withdraw->clearCache();
            session()->put('wtrx', $withdraw->trx);
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
                'message' => 'Withdraw Initiated',
                'redirect' => route('user.withdraw.preview')
            ]
        );
    }

    public function withdrawPreview()
    {
        $data['withdraw'] = Withdrawal::with('method', 'user')->where('trx', session()->get('wtrx'))->where('status', 0)->latest()->firstOrFail();
        $data['page_title'] = "Withdraw Preview";
        $user = Auth::user();
        $data['wallet'] = Wallet::where('user_id', $user->id)->where('type', 'funding')->where('symbol', $data['withdraw']->symbol)->first();
        return view('user.withdraw.preview', $data);
    }


    public function withdrawSubmit(Request $request)
    {
        $withdraw = Withdrawal::with('method', 'user')->where('trx', session()->get('wtrx'))->where('status', 0)->latest()->firstOrFail();
        $rules = [];
        $inputField = [];
        if ($withdraw->method->user_data != null) {
            foreach ($withdraw->method->user_data as $key => $cus) {
                $rules[$key] = [$cus->validation];
                if ($cus->type == 'file') {
                    array_push($rules[$key], 'image');
                    array_push($rules[$key], 'mimes:jpeg,jpg,png');
                    array_push($rules[$key], 'max:2048');
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
        $user = Auth::user();
        $wallet = Wallet::where('user_id', $user->id)->where('type', 'funding')->where('symbol', $withdraw->symbol)->first();

        if (getAmount($withdraw->final_amount) > $wallet->balance) {
            $notify[] = ['error', 'Your Request Amount is Larger Then Your Current Balance.'];
            return back()->withNotify($notify);
        }

        $directory = date("Y") . "/" . date("m") . "/" . date("d");
        $path = imagePath()['verify']['withdraw']['path'] . '/' . $directory;
        $collection = collect($request);
        $reqField = [];
        if ($withdraw->method->user_data != null) {
            foreach ($collection as $k => $v) {
                foreach ($withdraw->method->user_data as $inKey => $inVal) {
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
                                    $notify[] = ['error', 'Could not upload your ' . $request[$inKey]];
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
            $withdraw['withdraw_information'] = $reqField;
        } else {
            $withdraw['withdraw_information'] = null;
        }

        $withdraw->status = 2;
        $withdraw->save();
        $wallet->balance -= $withdraw->amount * $withdraw->rate;
        $wallet->save();

        if ($wallet->save()) {
            $transaction = new Transaction();
            $transaction->user_id = $withdraw->user_id;
            $transaction->amount = getAmount($withdraw->amount);
            $transaction->post_balance = getAmount($wallet->balance);
            $transaction->charge = getAmount($withdraw->charge);
            $transaction->trx_type = '-';
            $transaction->details = getAmount($withdraw->amount * $withdraw->rate) . ' ' . $withdraw->currency . ' Withdraw Via ' . $withdraw->method->name;
            $transaction->trx =  $withdraw->trx;
            $transaction->save();
            $transaction->clearCache();
            try {
                notify($withdraw->user, 'WITHDRAW_USER_REQUESTED', [
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
                    "method_amount" => $withdraw->final_amo
                ]);
            } catch (Throwable $e) {
            }

            if ($transaction->save()) {
                $wallet_new_trx = new WalletsTransactions();
                $wallet_new_trx->user_id = $withdraw->user_id;
                $wallet_new_trx->symbol = $withdraw->symbol;
                $wallet_new_trx->amount = $withdraw->amount;
                $wallet_new_trx->amount_recieved = $withdraw->final_amount / getCoinRate($withdraw->symbol);
                $wallet_new_trx->charge = getAmount($withdraw->charge);
                $wallet_new_trx->to = $withdraw->symbol;
                $wallet_new_trx->type = '2';
                $wallet_new_trx->status = '2';
                $wallet_new_trx->trx = $withdraw->trx;
                $wallet_new_trx->details = getAmount($withdraw->final_amount) . ' ' . $withdraw->currency . ' Withdraw Via ' . $withdraw->method->name;
                $wallet_new_trx->wallet_type = 'funding';
                $wallet_new_trx->save();
                $wallet_new_trx->clearCache();
            }
        }

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New withdraw request from ' . $user->username;
        $adminNotification->click_url = route('admin.withdraw.details', $withdraw->id);
        $adminNotification->save();
        $adminNotification->clearCache();

        $notify[] = ['success', 'Withdraw Request Successfully Send'];
        return redirect()->route('app.home')->withNotify($notify);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        $profile = User::where('id', $user->id)->first();
        $path = imagePath()['profileImage']['path'];
        $size = imagePath()['profileImage']['size'];
        if (isset($request->image)) {
            try {
                $filename = uploadImg($request->image, $path, $size);
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Image could not be uploaded.'];
                return back()->withNotify($notify);
            }
            $profile->profile_photo_path = $filename;
            $profile->save();
            $notify[] = ['success', 'Profile Image Updated Successfully'];
            return back()->withNotify($notify);
        }
        $this->validate($request, [
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'image' => ['nullable', 'max:4096'],
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'zip' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'state' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'country' => ['required', 'string', 'max:255'],
        ]);
        if ($request->email != $user->email) {
            $profile->name = $request->firstname . ' ' . $request->lastname;
            $profile->email = $request->email;
            $profile->email_verified_at = null;
            $profile->save();
            $user->sendEmailVerificationNotification();
        } else {
            $profile->name = $request->firstname . ' ' . $request->lastname;
            $profile->email = $request->email;
            $profile->firstname = $request->firstname;
            $profile->lastname = $request->lastname;
            $profile->zip = $request->zip;
            $profile->address = $request->address;
            $profile->state = $request->state;
            $profile->city = $request->city;
            $profile->country = $request->country;
            $profile->save();
        }

        $notify[] = ['success', 'Profile Updated Successfully'];
        return back()->withNotify($notify);
    }

    public function createref(Request $request, $reference): RegisterViewResponse
    {
        session()->put('reference', $reference);
        return app(RegisterViewResponse::class);
    }

    public function fetch_withdraw_history()
    {
        $logs = Withdrawal::where('user_id', Auth::id())->where('status', '!=', 0)->with('method')->latest()->get();
        return response()->json([
            'logs' => $logs
        ]);
    }
    public function fetch_deposit_history()
    {
        return response()->json([
            'logs' => (new Deposit)->getCached(auth()->user()->id)
        ]);
    }
    public function fetch_transaction_history()
    {
        $logs = auth()->user()->transactions()->latest()->get();
        return response()->json([
            'logs' => $logs
        ]);
    }

    public function depositHistory()
    {
        $page_title = 'Deposit History';
        $empty_message = 'No history found.';
        $logs = auth()->user()->deposits()->with(['gateway'])->latest()->paginate(getPaginate());
        $gnl = GeneralSetting::first();
        return view('user.deposit_history', compact('page_title', 'empty_message', 'logs', 'gnl'));
    }
    public function withdrawLog()
    {
        $data['page_title'] = "Withdraw Log";
        $data['withdraws'] = Withdrawal::where('user_id', Auth::id())->where('status', '!=', 0)->with('method')->latest()->paginate(getPaginate());
        $data['empty_message'] = "No Data Found!";
        return view('user.withdraw.log', $data);
    }
}