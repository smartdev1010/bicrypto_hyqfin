<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\Extension;
use App\Models\ForexAccounts;
use App\Models\Forex\ForexInvestments;
use App\Models\ForexLogs;
use App\Models\ForexSignals;
use App\Models\MLM;
use App\Models\MLMBV;
use App\Models\MLMPlan;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Wallet;
use App\Models\InvestmentLogs;
use App\Models\LevelReport;
use App\Models\Platform;
use App\Models\WalletsTransactions;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class LevelReportController extends Controller
{

    public function fetch()
    {
        $user = Auth::user();
        $levelReport = LevelReport::where('parentUser', $user->id)->get();
        return response()->json([
            'levelReport' => $levelReport
        ]);
    }
    public function updateReportTable($id, $level){
        if($level > 12) return;
        $user = Auth::user();
        $platform = getPlatforms();
        if($level == 1) $percentage = $platform->mlm->unilevel_upline1_percentage;
        if($level == 2) $percentage = $platform->mlm->unilevel_upline2_percentage;
        if($level == 3) $percentage = $platform->mlm->unilevel_upline3_percentage;
        if($level == 4) $percentage = $platform->mlm->unilevel_upline4_percentage;
        if($level == 5) $percentage = $platform->mlm->unilevel_upline5_percentage;
        if($level == 6) $percentage = $platform->mlm->unilevel_upline6_percentage;
        if($level == 7) $percentage = $platform->mlm->unilevel_upline7_percentage;
        if($level == 8) $percentage = $platform->mlm->unilevel_upline8_percentage;
        if($level == 9) $percentage = $platform->mlm->unilevel_upline9_percentage;
        if($level == 10) $percentage = $platform->mlm->unilevel_upline10_percentage;
        if($level == 11) $percentage = $platform->mlm->unilevel_upline11_percentage;
        if($level == 12) $percentage = $platform->mlm->unilevel_upline12_percentage;
        
        $arr_users = User::where('ref_by', $id)->get();
        foreach ($arr_users as $each_user) {
            $arr_investments = InvestmentLogs::where('user_id', $each_user->id)->get();
            
            // dd(count($arr_investments));
            foreach($arr_investments as $each_investment){
                if(count(LevelReport::where('parentUser', $user->id)->where('userId', $each_user->id)->where('investmentId', $each_investment->id)->get()) == 0){
                    $amount = 0;
                    $item = new LevelReport();
                    $item->parentUser = $user->id;
                    $item->userId = $each_user->id;
                    $item->investmentId = $each_investment->id;
                    $item->start_at = $each_investment->created_at;
                    $item->profit_at = Carbon::now();
                    $item->duration = ForexInvestments::findOrFail($each_investment->plan_id)->duration;
                    $item->level = $level;
                    if(date_diff($item->profit_at, $item->start_at)->format('%a') > $item->duration){
                        $amount = $percentage * $each_investment->amount * $item->duration / 100;
                        $item->status = 1;
                    }
                    else{
                        $amount = $percentage * $each_investment->amount * date_diff($item->profit_at, $item->start_at)->format('%a') / 100;
                        $item->status = 0;
                    }
                    $item->save();
                    $wallet = Wallet::where('user_id', Auth::user()->id)->where('type', 'funding')->where('symbol', 'USDT')->first();
                    $wallet->balance += $amount;
                    echo $wallet;
                    if($wallet->save()){
                        if($amount > 0){
                            $wallet_new_trx = new WalletsTransactions();
                            $wallet_new_trx->user_id = Auth::user()->id;
                            $wallet_new_trx->symbol = 'USDT';
                            $wallet_new_trx->amount = $amount;
                            $wallet_new_trx->amount_recieved = $amount;
                            $wallet_new_trx->charge = $amount;
                            $wallet_new_trx->to = 'USDT';
                            $wallet_new_trx->type = '1';
                            $wallet_new_trx->status = '1';
                            $wallet_new_trx->trx = getTrx();
                            $wallet_new_trx->details = 'You get profited '.$amount . ' ' . 'USDT from mlm';
                            $wallet_new_trx->wallet_type = 'funding';
                            $wallet_new_trx->save();
                            $wallet_new_trx->clearCache();
                        }
                    }
                }
                else{
                    $item = LevelReport::where('parentUser', $user->id)->where('userId', $each_user->id)->where('investmentId', $each_investment->id)->first();
                    if($item->status == 1)    continue;
                    $now = date_create();
                    $startDate = date_create($item->start_at);
                    $profitDate = date_create($item->profit_at);
                    if(date_diff($now, $startDate)->format('%a') >= $item->duration){
                        $item->status = 1;
                        $amount = $percentage * $each_investment->amount * ($item->duration - date_diff($profitDate, $startDate)->format('%a')) / 100;
                    }
                    else{
                        $amount = $percentage * $each_investment->amount * (date_diff($now, $startDate)->format('%a') - date_diff($profitDate, $startDate)->format('%a')) / 100;
                        $item->profit_at = $now;
                    }
                    
                    $item->save();
                    $wallet = Wallet::where('user_id', Auth::user()->id)->where('type', 'funding')->where('symbol', 'USDT')->first();
                    $wallet->balance += $amount;
                    echo $wallet;
                    if($wallet->save()){
                        if($amount > 0){
                            $wallet_new_trx = new WalletsTransactions();
                            $wallet_new_trx->user_id = Auth::user()->id;
                            $wallet_new_trx->symbol = 'USDT';
                            $wallet_new_trx->amount = $amount;
                            $wallet_new_trx->amount_recieved = $amount;
                            $wallet_new_trx->charge = $amount;
                            $wallet_new_trx->to = 'USDT';
                            $wallet_new_trx->type = '1';
                            $wallet_new_trx->status = '1';
                            $wallet_new_trx->trx = getTrx();
                            $wallet_new_trx->details = 'You get profited '.$amount . ' ' . 'USDT from mlm';
                            $wallet_new_trx->wallet_type = 'funding';
                            $wallet_new_trx->save();
                            $wallet_new_trx->clearCache();
                        }
                    }
                }
            }
            $this->updateReportTable($each_user->id, $level + 1);
        }
        // echo 123;
    }
    public function updateReport(){
      $user = Auth::user();
      $platform = getPlatforms();
      $this->updateReportTable($user->id, 1);
    }
}