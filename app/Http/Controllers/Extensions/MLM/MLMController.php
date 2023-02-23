<?php

namespace App\Http\Controllers\Extensions\MLM;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\MLM\MLM;
use App\Models\MLM\MLMBV;
use App\Models\MLM\MLMDaily;
use App\Models\MLM\MLMTransactions;
use App\Models\MLM\MLMPlan;
use App\Models\Transaction;
use App\Models\User;
use App\Models\WalletsTransactions;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Extensions\Eco\EcoController;
use App\Models\Eco\EcoMainnetTokens;
use App\Models\Eco\EcoTokens;
use App\Models\Eco\EcoWallet;
use Illuminate\Http\Request;

class MLMController extends Controller
{

    public function dash()
    {
        $page_title = '';
        $user = Auth::user();
        $ref_by = User::where('ref_by',$user->id)->get();
        $mlm = MLM::where('username',$user->username)->first();
        $mlmB = $mlm->rank + 1;
        $bvTotal = MLMBV::where('user_id', $user->id)->sum('amount');
        if( MLMBV::where('user_id', $user->id)->exists()){
            if($mlm->last_withdraw != null){
                $bvWithdrawable = MLMBV::where('user_id', $user->id)->where('created_at','>',$mlm->last_withdraw)->sum('amount');
            } else {
                $bvWithdrawable = MLMBV::where('user_id', $user->id)->sum('amount');
            }
        } else {
            $bvWithdrawable = '0';
        }
        $bvLogs = MLMBV::where('user_id', $user->id)->latest()->limit(10)->get();
        $planA = MLMPlan::where('status',1)->where('rank',$mlm->rank)->first();
        $planB = MLMPlan::where('status',1)->where('rank',$mlmB)->first();
        if($mlm->left != null){
            $mlm1A = MLM::where('username',$mlm->left)->first();
            if($mlm1A->left != null){
                $mlm1AA = MLM::where('username',$mlm1A->left)->first();
                if($mlm1AA->left != null){
                    $mlm1AAA = MLM::where('username',$mlm1AA->left)->first();
                } else {
                    $mlm1AAA = null;
                }
                if($mlm1AA->right != null){
                    $mlm1AAB = MLM::where('username',$mlm1AA->right)->first();
                } else {
                    $mlm1AAB = null;
                }
            } else {
                $mlm1AA = null;$mlm1AAA = null;$mlm1AAB = null;
            }
            if($mlm1A->right != null){
                $mlm1AB = MLM::where('username',$mlm1A->right)->first();
                if($mlm1AB->left != null){
                    $mlm1ABA = MLM::where('username',$mlm1AB->left)->first();
                } else {
                    $mlm1ABA = null;
                }
                if($mlm1AB->right != null){
                    $mlm1ABB = MLM::where('username',$mlm1AB->right)->first();
                } else {
                    $mlm1ABB = null;
                }
            } else {
                $mlm1AB = null;$mlm1ABA = null;$mlm1ABB = null;
            }
        } else {
            $mlm1A = null;$mlm1AA = null;$mlm1AB = null;$mlm1AAA = null;$mlm1AAB = null;$mlm1ABA = null;$mlm1ABB = null;
        }

        if($mlm->right != null){
            $mlm1B = MLM::where('username',$mlm->right)->first();
            if($mlm1B->left != null){
                $mlm1BA = MLM::where('username',$mlm1B->left)->first();
                if($mlm1BA->left != null){
                    $mlm1BAA = MLM::where('username',$mlm1BA->left)->first();
                } else {
                    $mlm1BAA = null;
                }
                if($mlm1BA->right != null){
                    $mlm1BAB = MLM::where('username',$mlm1BA->right)->first();
                } else {
                    $mlm1BAB = null;
                }
            } else {
                $mlm1BA = null;$mlm1BAA = null;$mlm1BAB = null;
            }
            if($mlm1B->left != null){
                $mlm1BB = MLM::where('username',$mlm1B->right)->first();
                if($mlm1BB->left != null){
                    $mlm1BBA = MLM::where('username',$mlm1BB->left)->first();
                } else {
                    $mlm1BBA = null;
                }
                if($mlm1BB->right != null){
                    $mlm1BBB = MLM::where('username',$mlm1BB->right)->first();
                } else {
                    $mlm1BBB = null;
                }
            } else {
                $mlm1BB = null;$mlm1BBA = null;$mlm1BBB = null;
            }
        } else {
            $mlm1B = null;$mlm1BA = null;$mlm1BB = null;$mlm1BAA = null;$mlm1BAB = null;$mlm1BBA = null;$mlm1BBB = null;
        }
        return view('user.mlm.dash', compact('page_title','bvWithdrawable','ref_by','mlm','planA','planB','bvLogs','bvTotal','mlm1A','mlm1B','mlm1AA','mlm1AB','mlm1BA','mlm1BB','mlm1AAA','mlm1AAB','mlm1ABA','mlm1ABB','mlm1BAA','mlm1BAB','mlm1BBA','mlm1BBB'));
    }
    
    public function fetch_network()
    {
        $user = Auth::user();
        $mlm = MLM::where('username', $user->username)->first();
        $plat_mlm = getPlatform('mlm');
        
        if ($plat_mlm->type == 'binary') {
            $mlm = $mlm->binary_downlines();
        } elseif ($plat_mlm->type == 'unilevel') {
            $mlm->downlines = $user->unilevel_downlines();
        }
        if ($plat_mlm->membership_status == 1) {
            if ($mlm->membership == 0) {
                $planA = (new MLMPlan)->getPlan($mlm->membership_rank);
                $planB = $planA;
            } else {
                $planA = (new MLMPlan)->getPlan($mlm->membership_rank);
                $planB = (new MLMPlan)->getPlan($mlm->membership_rank + 1);
            }
        } else {
            $planA = (new MLMPlan)->getPlan($mlm->rank);
            $planB = (new MLMPlan)->getPlan($mlm->rank + 1);
        }
        $tokens = [];
        if (getExt(10) == 1) {
            $currencies = (new EcoTokens)->getCachedCurrencies();
            // return $currencies;
            foreach ($currencies as $cur) {
                $tokens[$cur->symbol] = $cur;
            }
            if (getNativeNetwork() == 'mainnet') {
                if (EcoMainnetTokens::where('status', 1)->exists()) {
                    $mainCurrencies = (new EcoMainnetTokens)->getCachedCurrencies();
                    foreach ($mainCurrencies as $cur) {
                        $tokens[$cur->symbol] = $cur;
                    }
                }
            }
        }
        return response()->json([
            'user' => $user,
            'ref_by' => $user->direct_downlines(),
            'mlm' => $mlm,
            'bvWithdrawable' => $user->mlm_withdrawable() ?? 0,
            'daily_bv' => $plat_mlm->commission_type == 'daily' ? $user->mlm_daily_bv : 0,
            'bvLogs' => MLMBV::where('user_id', $user->id)->latest()->limit(30)->get(),
            'bv_total' => MLMBV::where('user_id', $user->id)->sum('amount'),
            'directs' => User::where('ref_by', $user->id)->count(),
            'planA' => $planA,
            'planB' => $planB,
            'plan0' => (new MLMPlan)->plan0(),
            'tokens' => $tokens
        ]);
    }

    public function withdraw(Request $request)
    {
        $user = Auth::user();
        $mlm = MLM::where('username', $user->username)->first();
        if (MLMBV::where('user_id', $user->id)->exists()) {
            $bvWithdrawable = MLMBV::where('user_id', $user->id)->where('status', 0)->sum('amount') - MLMBV::where('user_id', $user->id)->where('status', 2)->sum('amount');
        } else {
            $bvWithdrawable = '0';
        }
        $planA = MLMPlan::where('status', 1)->where('rank', $mlm->rank)->first();
        $plat_mlm = getPlatform('mlm');
        if ($bvWithdrawable >= $plat_mlm->min_withdraw) {
            if ($plat_mlm->membership_status == 1) {
                if ($mlm->membership == 0 && getPlatform('mlm')->membership_can_earn == 1) {
                    return response()->json(
                        [
                            'success' => true,
                            'type' => 'error',
                            'message' => 'Only clients with active membership can withdraw'
                        ]
                    );
                }
                $withdraw = new MLMTransactions();
                $withdraw->user_id = $user->id;
                $withdraw->wallet_address = $request->wallet_address;
                $withdraw->amount = $bvWithdrawable;
                $withdraw->type = 2;
                $withdraw->status = 0;
                $withdraw->save();
            } else {
                $wallet = getWallet($user->id, 'funding', 'USDT', 'funding');
                $wallet->balance += $bvWithdrawable * ($planA->margin / 100);
                $wallet->save();

                $transaction = new Transaction();
                $transaction->user_id = $user->id;
                $transaction->currency = "BV";
                $transaction->amount = $bvWithdrawable * ($planA->margin / 100);
                $transaction->post_balance = getAmount($wallet->balance);
                $transaction->charge = '0';
                $transaction->trx_type = '+';
                $transaction->details = 'BV Withdraw Into Your ' . $wallet->symbol . ' Wallet';
                $transaction->trx = getTrx();
                $transaction->save();

                notify($transaction->user, 'MEMBERSHIP_WITHDRAW_SUCCESSFUL', [
                    "amount" => $transaction->amount,
                    "trx" => $transaction->trx
                ]);

                $wallet_new_trx = new WalletsTransactions();
                $wallet_new_trx->user_id = $user->id;
                $wallet_new_trx->address = $wallet->address;
                $wallet_new_trx->amount = $bvWithdrawable * ($planA->margin / 100);
                $wallet_new_trx->amount_recieved = $bvWithdrawable * ($planA->margin / 100);
                $wallet_new_trx->charge = '0';
                $wallet_new_trx->to = $wallet->address;
                $wallet_new_trx->type = '1';
                $wallet_new_trx->status = '1';
                $wallet_new_trx->trx = $transaction->trx;
                $wallet_new_trx->details = 'BV Withdraw Into Your ' . $wallet->symbol . ' Wallet';
                $wallet_new_trx->wallet_type = 'funding';
                $wallet_new_trx->save();
            }
            $bvs = MLMBV::where('user_id', $user->id)->where('status', '!=', 1)->get();
            foreach ($bvs as $bv) {
                $bv->status = 1;
                $bv->save();
            }

            $adminNotification = new AdminNotification();
            $adminNotification->user_id = $user->id;
            $adminNotification->title = 'New MLM withdrawal by ' . $user->username;
            $adminNotification->click_url = route('admin.mlm.transaction.logs');
            $adminNotification->save();

            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Withdraw Successfully'
                ]
            );
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Withdraw Failed'
                ]
            );
        }
    }

    public function deposit(Request $request)
    {
        $user = Auth::user();
        $plan0 = MLMPlan::where('status', 1)->where('rank', 0)->first();
        $mlm = MLM::where('username', $user->username)->first();
        $deposit = new MLMTransactions();
        $deposit->user_id = $user->id;
        $deposit->type = 1;
        $plat_mlm = getPlatform('mlm');
        $cl = false;
        if ($request->type == 'wallet') {
            $deposit->hash = $request->hash;
            $deposit->status = 0;
        } else {
            if ($request->amount > $request->balance) {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'error',
                        'message' => "You don't have enough balance!"
                    ]
                );
            }
            if (EcoTokens::where('symbol', $request->symbol)->where('chain', $request->chain)->exists()) {
                $token = EcoTokens::where('symbol', $request->symbol)->where('chain', $request->chain)->first();
                if (EcoWallet::where('user_id', $user->id)->where('currency', $request->symbol)->where('chain', $request->chain)->exists()) {
                    $ledger = EcoWallet::where('user_id', $user->id)->where('currency', $request->symbol)->where('chain', $request->chain)->first();
                    $eco = new EcoController();
                    $payload = array(
                        "senderAccountId" => $ledger->account_id,
                        "recipientAccountId" => $token->account_id,
                        "amount" => $request->amount
                    );
                    try {
                        $eco->transfer($payload);
                        $deposit->amount = $request->amount;
                        $deposit->status = 1;
                        if ($mlm->membership == 0) {
                            if ($request->amount >= $plan0->deposits_required) {
                                $mlm->membership = 1;
                                $cl = true;
                            }
                        } else {
                            $mlm->membership = 1;
                            $cl = true;
                        }
                        $mlm->membership_deposits += $request->amount;
                        $mlm->save();
                    } catch (\Throwable $th) {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'error',
                                'message' => 'Deposit Failed'
                            ]
                        );
                    }
                } else {
                    return response()->json(
                        [
                            'success' => true,
                            'type' => 'error',
                            'message' => 'Wallet not found!'
                        ]
                    );
                }
            } else {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'error',
                        'message' => 'Token not found!'
                    ]
                );
            }
        }
        $deposit->save();
        $deposit->clearCache();

        if ($plat_mlm->community_line_status == 1 && $cl == true && $plat_mlm->community_line_clients > 0) {
            $last_mlm = MLM::where('community_line', '!=', null)->orderBy('community_line', 'DESC')->first();
            $order = ($last_mlm->community_line ?? 0) + 1;
            $mlm->community_line = $order;
            $mlm->save();
        }

        if ($user->ref_by != null) {
            BVstore($user, 12, $request->amount, null, null, false, $cl);
        }
        $transaction = new Transaction();
        $transaction->currency = $request->type == 'wallet' ? "BV" : $plat_mlm->membership_deposit_currency;
        $transaction->user_id = $user->id;
        $transaction->amount = ($request->amount ?? 0);
        $transaction->post_balance = $request->balance - ($request->amount ?? 0);
        $transaction->charge = ($request->amount ?? 0) * 0.01;
        $transaction->trx_type = '-';
        $transaction->details = 'Membership ' . $request->symbol . ' Token Deposit';
        $transaction->trx = getTrx();
        $transaction->save();
        $transaction->clearCache();

        notify($user, 'MEMBERSHIP_DEPOSIT_SUCCESSFUL', [
            "amount" => $transaction->amount,
            "trx" => $transaction->trx
        ]);

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Membership deposit by ' . $user->username;
        $adminNotification->click_url = route('admin.mlm.transaction.logs');
        $adminNotification->save();
        $adminNotification->clearCache();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Deposit Sent Successfully'
            ]
        );
    }

    public function cron_mlm_ranks()
    {
        $mlms = MLM::get();

        foreach ($mlms as $mlm) {
            if ($mlm->left != null && $mlm->right != null) {
                $mlm1A = MLM::where('username', $mlm->left)->first();
                $mlm1B = MLM::where('username', $mlm->right)->first();
                if ($mlm1A->rank == 0 && $mlm1B->rank == 0) {
                    $mlm->rank = 1;
                } else if ($mlm1A->rank == 1 && $mlm1B->rank == 1) {
                    $mlm->rank = 2;
                } else if ($mlm1A->rank == 2 && $mlm1B->rank == 2) {
                    $mlm->rank = 3;
                } else if ($mlm1A->rank == 3 && $mlm1B->rank == 3) {
                    $mlm->rank = 4;
                } else if ($mlm1A->rank == 4 && $mlm1B->rank == 4) {
                    $mlm->rank = 5;
                } else if ($mlm1A->rank == 5 && $mlm1B->rank == 5) {
                    $mlm->rank = 6;
                }
                $mlm->save();
            } else {
                $mlm->rank = 0;
                $mlm->save();
            }
        }
    }

    public function cron_mlm_daily()
    {
        $dailies = MLMDaily::get();
        foreach ($dailies as $daily) {
            if ($daily->days_left != 0) {
                if (Carbon::now() > $daily->created_at->addDays($daily->duration - $daily->days_left)) {
                    $bv = new MLMBV();
                    $bv->user_id = $daily->user_id;
                    $bv->daily_id = $daily->id;
                    $bv->type = $daily->type;
                    $bv->amount = $daily->amount;
                    $bv->status = 0;
                    $bv->save();
                    $daily->days_left -= 1;
                    $daily->save();
                }
            } else {
                $daily->delete();
            }
        }
    }


    public function cron_mlm_membership()
    {
        $members = MLM::where('membership', 1)->orWhere('membership', 2)->get();
        $plans = MLMPLAN::where('status', 1)->get();
        $plat_mlm = getPlatform('mlm');
        foreach ($members as $member) {
            $ref = User::where('username', $member->username)->first();
            $directs = User::where('ref_by', $ref->id)->count();
            $bv = MLMBV::where('user_id', $ref->id)->sum('amount');
            $last_bv = MLMBV::where('user_id', $ref->id)->get()->last()->created_at ?? null;
            if ($last_bv != null) {
                $earning_duration = (Carbon::now()->valueOf() - $last_bv->valueOf()) / 86400000;
                $duration = $plat_mlm->membership_duration;
                $grace_duration = $plat_mlm->membership_grace_duration;
                $total_duration = $duration + $grace_duration;
                if ($earning_duration < $total_duration) {
                    if ($earning_duration > $duration) {
                        $member->membership = 2;
                    }
                    if ($plans->where('direct_required', '<=', $directs)->where('deposits_required', '<=', $member->membership_deposits)->where('bv_required', '<=', $bv)->isNotEmpty()) {
                        $member->membership_rank = $plans->where('direct_required', '<=', $directs)->where('deposits_required', '<=', $member->membership_deposits)->where('bv_required', '<=', $bv)->last()->rank;
                    }
                    $member->save();
                } else if ($earning_duration > $total_duration) {
                    $member->membership = 3;
                    $member->save();
                }
            } else {
                if ($plans->where('direct_required', '<=', $directs)->where('deposits_required', '<=', $member->membership_deposits)->where('bv_required', '<=', $bv)->isNotEmpty()) {
                    $member->membership_rank = $plans->where('direct_required', '<=', $directs)->where('deposits_required', '<=', $member->membership_deposits)->where('bv_required', '<=', $bv)->last()->rank;
                }
                $member->save();
            }
        }
    }
}