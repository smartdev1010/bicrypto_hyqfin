<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\Extension;
use App\Models\ForexAccounts;
use App\Models\ForexInvestments;
use App\Models\CommissionInvestment;
use App\Models\ForexLogs;
use App\Models\ForexSignals;
use App\Models\MLM;
use App\Models\MLMBV;
use App\Models\MLMPlan;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Membership;
use App\Models\Wallet;
use App\Models\Platform;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MembershipController extends Controller
{
    public function dashboard(){
      $page_title = 'Membership';
      $membership = Membership::get();
      $membership_fee = Platform::where('id', 12)->first()->settings;
      return view('admin.membership', compact(
        'page_title',
        'membership',
        'membership_fee'
      ));
    }
    public function commission(){
      $page_title = 'Commission Settings';
      $commissions = CommissionInvestment::get();
      return view('admin.commission', compact('commissions'));
    }
    public function add(){
      $user = Auth::user();
      if(count(Membership::where('user_id', $user->id)->get()) == 0){
        $membership = new Membership();
        $membership->user_id = $user->id;
        $membership->status = 1;
        $membership->save();
      }
      return $this->getList();
    }
    public function getList(){
      $membership = Membership::get();
      $now = date_create();
      foreach($membership as $item){
        $startDate = date_create($item->start_at);
        if(date_diff($now, $startDate)->format('%a') > 365){
          $item->delete();
        }
      }
      return response()->json(
        [
            'memberships' => $membership,
        ]
    );
    }
    public function update(Request $request){
      $member = Membership::where('user_id', $request->member)->first();
      $member->status = 1;
      $member->start_at = date_create();
      $member->save();
      return $this->dashboard();
    }
    public function changeFee(Request $request){
      $membership_fee = Platform::where('id', 12)->first();
      $membership_fee->settings = $request->fee;
      $membership_fee->save();
      return $this->dashboard();
    }
    public function updateCommission(Request $request)
    {
        $request->validate([
            'unilevel_upline1_percentage' => 'numeric',
            'unilevel_upline2_percentage' => 'numeric',
            'unilevel_upline3_percentage' => 'numeric',
            'unilevel_upline4_percentage' => 'numeric',
            'unilevel_upline5_percentage' => 'numeric',
            'unilevel_upline6_percentage' => 'numeric',
            'unilevel_upline7_percentage' => 'numeric',
            'unilevel_upline8_percentage' => 'numeric',
            'unilevel_upline9_percentage' => 'numeric',
            'unilevel_upline10_percentage' => 'numeric',
            'unilevel_upline11_percentage' => 'numeric',
            'unilevel_upline12_percentage' => 'numeric',
            'community_line_percentage' => 'numeric'
        ]);
        $commission = CommissionInvestment::where('id', 1)->first();     
        $commission->commission = $request->unilevel_upline1_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 2)->first();
        $commission->commission = $request->unilevel_upline2_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 3)->first();
        $commission->commission = $request->unilevel_upline3_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 4)->first();
        $commission->commission = $request->unilevel_upline4_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 5)->first();
        $commission->commission = $request->unilevel_upline5_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 6)->first();
        $commission->commission = $request->unilevel_upline6_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 7)->first();
        $commission->commission = $request->unilevel_upline7_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 8)->first();
        $commission->commission = $request->unilevel_upline8_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 9)->first();
        $commission->commission = $request->unilevel_upline9_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 10)->first();
        $commission->commission = $request->unilevel_upline10_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 11)->first();
        $commission->commission = $request->unilevel_upline11_percentage;
        $commission->save();
        $commission = CommissionInvestment::where('id', 12)->first();
        $commission->commission = $request->unilevel_upline12_percentage;
        $commission->save();

        $notify[] = ['success', 'Commission has been updated.'];
        return back()->withNotify($notify);
    }
}