<?php

namespace App\Http\Controllers;

use App\Models\MLM;
use App\Models\MLMBV;
use App\Models\MLMPlan;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use App\Notifications\DepositNote;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

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

        $mlm['L'] = getH($mlm->L);
        if($mlm['L'] != null){
            $mlm['L']['L'] = getH($mlm['L']->L);
            if($mlm['L']['L'] != null){
                $mlm['L']['L']['L'] = getH($mlm['L']['L']->L);
                if($mlm['L']['L']['L'] != null){
                    $mlm['L']['L']['L']['L'] = getH($mlm['L']['L']['L']->L);
                    if($mlm['L']['L']['L']['L'] != null){
                        $mlm['L']['L']['L']['L']['L'] = getH($mlm['L']['L']['L']['L']->L);
                        $mlm['L']['L']['L']['L']['R'] = getH($mlm['L']['L']['L']['L']->R);
                    }
                    $mlm['L']['L']['L']['R'] = getH($mlm['L']['L']['L']->R);
                    if($mlm['L']['L']['L']['R'] != null){
                        $mlm['L']['L']['L']['R']['L'] = getH($mlm['L']['L']['L']['R']->L);
                        $mlm['L']['L']['L']['R']['R'] = getH($mlm['L']['L']['L']['R']->R);
                    }
                }
                $mlm['L']['L']['R'] = getH($mlm['L']['L']->R);
                if($mlm['L']['L']['R'] != null){
                    $mlm['L']['L']['R']['L'] = getH($mlm['L']['L']['R']->L);
                    if($mlm['L']['L']['R']['L'] != null){
                        $mlm['L']['L']['R']['L']['L'] = getH($mlm['L']['L']['R']['L']->L);
                        $mlm['L']['L']['R']['L']['R'] = getH($mlm['L']['L']['R']['L']->R);
                    }
                    $mlm['L']['L']['R']['R'] = getH($mlm['L']['L']['R']->R);
                    if($mlm['L']['L']['R']['R'] != null){
                        $mlm['L']['L']['R']['R']['L'] = getH($mlm['L']['L']['R']['R']->L);
                        $mlm['L']['L']['R']['R']['R'] = getH($mlm['L']['L']['R']['R']->R);
                    }
                }
            }
            $mlm['L']['R'] = getH($mlm['L']->R);
            if($mlm['L']['R'] != null){
                $mlm['L']['R']['L'] = getH($mlm['L']['R']->L);
                if($mlm['L']['R']['L'] != null){
                    $mlm['L']['R']['L']['L'] = getH($mlm['L']['R']['L']->L);
                    if($mlm['L']['R']['L']['L'] != null){
                        $mlm['L']['R']['L']['L']['L'] = getH($mlm['L']['R']['L']['L']->L);
                        $mlm['L']['R']['L']['L']['R'] = getH($mlm['L']['R']['L']['L']->R);
                    }
                    $mlm['L']['R']['L']['R'] = getH($mlm['L']['R']['L']->R);
                    if($mlm['L']['R']['L']['R'] != null){
                        $mlm['L']['R']['L']['R']['L'] = getH($mlm['L']['R']['L']['R']->L);
                        $mlm['L']['R']['L']['R']['R'] = getH($mlm['L']['R']['L']['R']->R);
                    }
                }
                $mlm['L']['R']['R'] = getH($mlm['L']['R']->R);
                if($mlm['L']['R']['R'] != null){
                    $mlm['L']['R']['R']['L'] = getH($mlm['L']['R']['R']->L);
                    if($mlm['L']['R']['R']['L'] != null){
                        $mlm['L']['R']['R']['L']['L'] = getH($mlm['L']['R']['R']['L']->L);
                        $mlm['L']['R']['R']['L']['R'] = getH($mlm['L']['R']['R']['L']->R);
                    }
                    $mlm['L']['R']['R']['R'] = getH($mlm['L']['R']['R']->R);
                    if($mlm['L']['R']['R']['R'] != null){
                        $mlm['L']['R']['R']['R']['L'] = getH($mlm['L']['R']['R']['R']->L);
                        $mlm['L']['R']['R']['R']['R'] = getH($mlm['L']['R']['R']['R']->R);
                    }
                }
            }
        }
        $mlm['R'] = getH($mlm->R);
        if($mlm['R'] != null){
            $mlm['R']['L'] = getH($mlm['R']->L);
            if($mlm['R']['L'] != null){
                $mlm['R']['L']['L'] = getH($mlm['R']['L']->L);
                if($mlm['R']['L']['L'] != null){
                    $mlm['R']['L']['L']['L'] = getH($mlm['R']['L']['L']->L);
                    if($mlm['R']['L']['L']['L'] != null){
                        $mlm['R']['L']['L']['L']['L'] = getH($mlm['R']['L']['L']['L']->L);
                        $mlm['R']['L']['L']['L']['R'] = getH($mlm['R']['L']['L']['L']->R);
                    }
                    $mlm['R']['L']['L']['R'] = getH($mlm['R']['L']['L']->R);
                    if($mlm['R']['L']['L']['R'] != null){
                        $mlm['R']['L']['L']['R']['L'] = getH($mlm['R']['L']['L']['R']->L);
                        $mlm['R']['L']['L']['R']['R'] = getH($mlm['R']['L']['L']['R']->R);
                    }
                }
                $mlm['R']['L']['R'] = getH($mlm['R']['L']->R);
                if($mlm['R']['L']['R'] != null){
                    $mlm['R']['L']['R']['L'] = getH($mlm['R']['L']['R']->L);
                    if($mlm['R']['L']['R']['L'] != null){
                        $mlm['R']['L']['R']['L']['L'] = getH($mlm['R']['L']['R']['L']->L);
                        $mlm['R']['L']['R']['L']['R'] = getH($mlm['R']['L']['R']['L']->R);
                    }
                    $mlm['R']['L']['R']['R'] = getH($mlm['R']['L']['R']->R);
                    if($mlm['R']['L']['R']['R'] != null){
                        $mlm['R']['L']['R']['R']['L'] = getH($mlm['R']['L']['R']['R']->L);
                        $mlm['R']['L']['R']['R']['R'] = getH($mlm['R']['L']['R']['R']->R);
                    }
                }
            }
            $mlm['R']['R'] = getH($mlm['R']->R);
            if($mlm['R']['R'] != null){
                $mlm['R']['R']['L'] = getH($mlm['R']['R']->L);
                if($mlm['R']['R']['L'] != null){
                    $mlm['R']['R']['L']['L'] = getH($mlm['R']['R']['L']->L);
                    if($mlm['R']['R']['L']['L'] != null){
                        $mlm['R']['R']['L']['L']['L'] = getH($mlm['R']['R']['L']['L']->L);
                        $mlm['R']['R']['L']['L']['R'] = getH($mlm['R']['R']['L']['L']->R);
                    }
                    $mlm['R']['R']['L']['R'] = getH($mlm['R']['R']['L']->R);
                    if($mlm['R']['R']['L']['R'] != null){
                        $mlm['R']['R']['L']['R']['L'] = getH($mlm['R']['R']['L']['R']->L);
                        $mlm['R']['R']['L']['R']['R'] = getH($mlm['R']['R']['L']['R']->R);
                    }
                }
                $mlm['R']['R']['R'] = getH($mlm['R']['R']->R);
                if($mlm['R']['R']['R'] != null){
                    $mlm['R']['R']['R']['L'] = getH($mlm['R']['R']['R']->L);
                    if($mlm['R']['R']['R']['L'] != null){
                        $mlm['R']['R']['R']['L']['L'] = getH($mlm['R']['R']['R']['L']->L);
                        $mlm['R']['R']['R']['L']['R'] = getH($mlm['R']['R']['R']['L']->R);
                    }
                    $mlm['R']['R']['R']['R'] = getH($mlm['R']['R']['R']->R);
                    if($mlm['R']['R']['R']['R'] != null){
                        $mlm['R']['R']['R']['R']['L'] = getH($mlm['R']['R']['R']['R']->L);
                        $mlm['R']['R']['R']['R']['R'] = getH($mlm['R']['R']['R']['R']->R);
                    }
                }
            }
        }
        return view('user.mlm.dash', compact('page_title','user','bvWithdrawable','ref_by','mlm','planA','planB','bvLogs','bvTotal'));
    }
    public function withdraw()
    {
        $user = Auth::user();
        $mlm = MLM::where('username',$user->username)->first();
        if( MLMBV::where('user_id', $user->id)->exists()){
            if($mlm->last_withdraw != null){
                $bvWithdrawable = MLMBV::where('user_id', $user->id)->where('created_at','>',$mlm->last_withdraw)->sum('amount');
            } else {
                $bvWithdrawable = MLMBV::where('user_id', $user->id)->sum('amount');
            }
        } else {
            $bvWithdrawable = '0';
        }
        $planA = MLMPlan::where('status',1)->where('rank',$mlm->rank)->first();
        if($bvWithdrawable >= $planA->bv){
            $wallet = getWallet($user->id,'funding','USDT','funding');
            $wallet->balance += $bvWithdrawable * ($planA->margin / 100);
            $wallet->save();
            if($wallet->save()){
                $transaction = new Transaction();
                $transaction->user_id = $user->id;
                $transaction->amount = $bvWithdrawable * ($planA->margin / 100);
                $transaction->post_balance = getAmount($wallet->balance);
                $transaction->charge = '0';
                $transaction->trx_type = '+';
                $transaction->details = 'BV Withdraw Into Your '. $wallet->symbol. ' Wallet';
                $transaction->trx = getTrx();
                $transaction->save();
                $transaction->user->notify((new DepositNote($transaction, 'automated-deposit-successful')));

                if($transaction->save()){
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
                    $wallet_new_trx->details = 'BV Withdraw Into Your '. $wallet->symbol. ' Wallet';
                    $wallet_new_trx->save();

                    if($wallet_new_trx->save()){
                        $mlm->last_withdraw = Carbon::now();
                        $mlm->save();
                    }
                }
            }
            $notify[] = ['success', 'Withdraw Successfully'];
        } else {
            $notify[] = ['success', 'Withdraw Failed'];
        }
        return back()->withNotify($notify);
    }
}
