<?php

namespace App\Http\Controllers\Admin\Extensions\MLM;

use App\Http\Controllers\Controller;
use App\Models\MLM\MLMPlan;
use App\Models\MLM\MLMTransactions;
use App\Models\MLM\MLM;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class ManageMLMController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('mlm_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'MLM Ranks';
        return view('extensions.admin.mlm.index', compact('page_title'));
    }
    public function transaction_logs()
    {
        abort_if(Gate::denies('mlm_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Membership Transaction Logs';
        return view('extensions.admin.mlm.transactions_log', compact('page_title'));
    }
    public function bv_logs()
    {
        abort_if(Gate::denies('mlm_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'BV Logs';
        return view('extensions.admin.mlm.bv_logs', compact('page_title'));
    }
    public function transaction_statusUpdate(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'numeric'
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
            $user = User::where('id', $request->user_id)->first();
            $mlm = MLM::where('username', $user->username)->first();
            $plan0 = MLMPlan::where('status', 1)->where('rank', 0)->first();
            $trx = MLMTransactions::where('id', $request->id)->first();
            $trx->status = $request->status;
            $cl = false;
            $plat_mlm = getPlatform('mlm');
            if ($request->type == 'deposit') {
                $mlm->membership_deposits += $request->amount;
                $trx->amount = $request->amount;
                if ($mlm->membership == 0) {
                    if ($request->amount >= $plan0->deposits_required) {
                        $mlm->membership = 1;
                        $cl = true;
                    }
                } else {
                    $mlm->membership = 1;
                    $cl = true;
                }

                if ($plat_mlm->community_line_status == 1 && $cl == true && $plat_mlm->community_line_clients > 0) {
                    $last_mlm = MLM::where('community_line', '!=', null)->orderBy('community_line', 'DESC')->first();
                    $order = ($last_mlm->community_line ?? 0) + 1;
                    $mlm->community_line = $order;
                }
                $mlm->save();
                $mlm->clearCache();
            } else {
                $trx->hash = $request->hash;
                $trx->amount = $request->amountosend;
                $cl = true;
            }

            $trx->save();
            $trx->clearCache();

            if ($user->ref_by != null) {
                BVstore($user, $request->type == 'deposit' ? 12 : 11, $request->amount, null, null, false, $cl);
            }

            $transaction = new Transaction();
            $transaction->user_id = $request->user_id;
            $transaction->currency = $request->type == 'deposit' ? $plat_mlm->membership_deposit_currency : $plat_mlm->membership_withdraw_currency;
            $transaction->amount = $trx->amount;
            $transaction->post_balance = $trx->amount;
            $transaction->charge = '0';
            $transaction->trx_type = '+';
            $transaction->details = 'BV Withdraw Into Your ' . $trx->wallet_address . ' Wallet';
            $transaction->trx = getTrx();
            $transaction->save();
            $transaction->clearCache();

            notify($user, $request->type == 'deposit' ? 'MEMBERSHIP_DEPOSIT_SUCCESSFUL' : 'MEMBERSHIP_WITHDRAW_SUCCESSFUL', [
                "amount" => $transaction->amount,
                "trx" => $transaction->trx
            ]);

            $notify[] = ['success', 'Status Updated Successfully'];
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
    public function new()
    {
        abort_if(Gate::denies('mlm_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'New Rank';
        return view('extensions.admin.mlm.new', compact('page_title'));
    }
    public function edit($id)
    {
        abort_if(Gate::denies('mlm_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $rank = MLMPlan::findOrFail($id);
        $page_title = 'Rank Editor';
        return view('extensions.admin.mlm.edit', compact('page_title', 'rank'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:80',
            'rank' => 'required|numeric',
            'margin' => 'required|numeric',
            'deposit_commission' => 'numeric',
            'ref_commission' => 'numeric',
            'active_ref_commission' => 'numeric',
            'trade_commission' => 'numeric',
            'bot_commission' => 'numeric',
            'ico_commission' => 'numeric',
            'forex_commission' => 'numeric',
            'forex_investment_commission' => 'numeric',
            'staking' => 'numeric',
            'direct_required' => 'numeric',
            'deposits_required' => 'numeric',
            'bv_required' => 'numeric'
        ]);

        $rank = new MLMPlan();
        $rank->title = $request->title;
        $rank->rank = $request->rank;
        $rank->margin = $request->margin;
        $rank->deposit_commission = $request->deposit_commission;
        $rank->ref_commission = $request->ref_commission;
        $rank->active_ref_commission = $request->active_ref_commission;
        $rank->trade_commission = $request->trade_commission;
        $rank->bot_commission = $request->bot_commission;
        $rank->ico_commission = $request->ico_commission;
        $rank->forex_commission = $request->forex_commission;
        $rank->forex_investment_commission = $request->forex_investment_commission;
        $rank->staking = $request->staking;
        $rank->direct_required = $request->direct_required;
        $rank->deposits_required = $request->deposits_required;
        $rank->bv_required = $request->bv_required;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $rank->status = $request->status;
        $rank->save();
        $rank->clearCache();

        $notify[] = ['success', 'Rank has been Updated'];
        return redirect()->route('admin.mlm.index')->withNotify($notify);
    }
    public function update(Request $request)
    {
        $request->validate([
            'title' => 'required|max:80',
            'rank' => 'required|numeric',
            'margin' => 'required|numeric',
            'deposit_commission' => 'numeric',
            'ref_commission' => 'numeric',
            'active_ref_commission' => 'numeric',
            'trade_commission' => 'numeric',
            'bot_commission' => 'numeric',
            'ico_commission' => 'numeric',
            'forex_commission' => 'numeric',
            'forex_investment_commission' => 'numeric',
            'staking' => 'numeric',
            'direct_required' => 'numeric',
            'deposits_required' => 'numeric',
            'bv_required' => 'numeric'
        ]);

        $rank = MLMPlan::findOrFail($request->id);
        $rank->title = $request->title;
        $rank->rank = $request->rank;
        $rank->margin = $request->margin;
        $rank->deposit_commission = $request->deposit_commission;
        $rank->ref_commission = $request->ref_commission;
        $rank->active_ref_commission = $request->active_ref_commission;
        $rank->trade_commission = $request->trade_commission;
        $rank->bot_commission = $request->bot_commission;
        $rank->ico_commission = $request->ico_commission;
        $rank->forex_commission = $request->forex_commission;
        $rank->forex_investment_commission = $request->forex_investment_commission;
        $rank->staking = $request->staking;
        $rank->direct_required = $request->direct_required;
        $rank->deposits_required = $request->deposits_required;
        $rank->bv_required = $request->bv_required;
        $request->merge(['status' => isset($request->status) ? 1 : 0]);
        $rank->status = $request->status;
        $rank->save();
        $rank->clearCache();

        $notify[] = ['success', 'Rank has been Updated'];
        return redirect()->route('admin.mlm.index')->withNotify($notify);
    }
}
