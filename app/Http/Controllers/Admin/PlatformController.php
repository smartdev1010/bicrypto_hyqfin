<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Platform;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class PlatformController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('platform_manager_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Platform Settings';
        $platform = getPlatforms();
        $ext = getExtsID();
        return view('admin.setting.platform', compact('page_title', 'platform', 'ext'));
    }

    public function update(Request $request)
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
            'community_line_percentage' => 'numeric'
        ]);

        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);

        $platform['dashboard'] = Platform::where('option', 'dashboard')->first();
        $platform['dashboard']->settings = json_encode([
            'default_page' => $request->default_page,
        ]);
        $platform['dashboard']->save();

        $platform['frontend'] = Platform::where('option', 'frontend')->first();
        $platform['frontend']->settings = json_encode([
            'frontend_status' => $request->frontend_status ?? 0,
        ]);
        $platform['frontend']->save();
        $platform['trading'] = Platform::where('option', 'trading')->first();
        $platform['trading']->settings = json_encode([
            'binary_status' => $request->binary_status ?? 0,
            'practice' => $request->practice ?? 0,
            'first_trade_page' => $request->first_trade_page ?? 0,
        ]);
        $platform['trading']->save();

        $binary_id = searchForId('Binary', $datas['user'], 'name');
        if ($binary_id != null) {
            $datas['user'][$binary_id]['status'] = $request->binary_status ?? 0;
        }

        $platform['kyc'] = Platform::where('option', 'kyc')->first();
        $platform['kyc']->settings = json_encode([
            'kyc_status' => $request->kyc_status ?? 0,
        ]);
        $platform['kyc']->save();

        $json = file_get_contents(resource_path('data/sidebar.json'));
        $datas = json_decode($json, true);
        $datas['admin'][3]['status'] = $request->kyc_status ?? 0;
        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        // $platform['mobile'] = Platform::where('option', 'mobile')->first();
        // $platform['mobile']->settings = json_encode([
        //     'market_info' => $request->mobile_market_info,
        //     'trades' => $request->mobile_trades,
        //     'charting' => $request->mobile_charting,
        //     'orders' => $request->mobile_orders,
        // ]);
        // $platform['mobile']->save();

        $platform['system'] = Platform::where('option', 'system')->first();
        $platform['system']->settings = json_encode([
            'sw' => $request->sw ?? 0,
            'maintenance' => $request->maintenance ?? 0,
            'phone' => $request->phone ?? 0,
        ]);
        $platform['system']->save();

        $kyc_id = searchForId('kyc_manager_show', $datas['admin'], 'permission');
        if ($kyc_id != null) {
            $datas['admin'][$kyc_id]['status'] = $request->kyc_status ?? 0;
        }

        // if (getExt(1) == 1) {
        //     $platform['bot'] = Platform::where('option', 'bot')->first();
        //     $platform['bot']->settings = json_encode([
        //         'data' => $request->data ?? 0,
        //     ]);
        //     $platform['bot']->save();
        // }

        $platform['wallet'] = Platform::where('option', 'wallet')->first();
        $platform['wallet']->settings = json_encode([
            'deposit_fees_method' => $request->deposit_fees_method,
        ]);
        $platform['wallet']->save();

        if (getExt(3) == 1) {
            $platform['mlm'] = Platform::where('option', 'mlm')->first();
            $platform['mlm']->settings = json_encode([
                'type' => $request->mlm_type,
                'commission_type' => $request->mlm_commission_type,
                'min_withdraw' => $request->mlm_min_withdraw,
                'deposits' => $request->mlm_deposits ?? 0,
                'first_deposit' => $request->mlm_first_deposit ?? 0,
                'active_first_deposit' => $request->mlm_active_first_deposit ?? 0,
                'trades' => $request->mlm_trades ?? 0,
                'bot_investment' => $request->mlm_bot_investment ?? 0,
                'ico_purchase' => $request->mlm_ico_purchase ?? 0,
                'forex_deposit' => $request->mlm_forex_deposit ?? 0,
                'forex_investment' => $request->mlm_forex_investment ?? 0,
                'staking' => $request->mlm_staking ?? 0,
                'unilevel_upline1_percentage' => $request->unilevel_upline1_percentage,
                'unilevel_upline2_percentage' => $request->unilevel_upline2_percentage,
                'unilevel_upline3_percentage' => $request->unilevel_upline3_percentage,
                'unilevel_upline4_percentage' => $request->unilevel_upline4_percentage,
                'unilevel_upline5_percentage' => $request->unilevel_upline5_percentage,
                'unilevel_upline6_percentage' => $request->unilevel_upline6_percentage,
                'unilevel_upline7_percentage' => $request->unilevel_upline7_percentage,
                'unilevel_upline8_percentage' => $request->unilevel_upline8_percentage,
                'unilevel_upline9_percentage' => $request->unilevel_upline9_percentage,
                'unilevel_upline10_percentage' => $request->unilevel_upline10_percentage,
                'unilevel_upline2_status' => $request->unilevel_upline2_status ?? 0,
                'unilevel_upline3_status' => $request->unilevel_upline3_status ?? 0,
                'unilevel_upline4_status' => $request->unilevel_upline4_status ?? 0,
                'unilevel_upline5_status' => $request->unilevel_upline5_status ?? 0,
                'unilevel_upline6_status' => $request->unilevel_upline6_status ?? 0,
                'unilevel_upline7_status' => $request->unilevel_upline7_status ?? 0,
                'unilevel_upline8_status' => $request->unilevel_upline8_status ?? 0,
                'unilevel_upline9_status' => $request->unilevel_upline9_status ?? 0,
                'unilevel_upline10_status' => $request->unilevel_upline10_status ?? 0,
                'community_line_status' => $request->community_line_status ?? 0,
                'community_line_clients' => $request->community_line_clients,
                'membership_status' => $request->membership_status ?? 0,
                'membership_fees' => $request->membership_fees,
                'membership_can_earn' => $request->membership_can_earn ?? 0,
                'membership_duration' => $request->membership_duration,
                'membership_grace_duration' => $request->membership_grace_duration,
                'membership_custom_deposit' => $request->membership_custom_deposit,
                'membership_deposit_currency' => $request->membership_deposit_currency,
                'membership_deposit_wallet' => $request->membership_deposit_wallet,
                'membership_custom_withdraw' => $request->membership_custom_withdraw,
                'membership_withdraw_currency' => $request->membership_withdraw_currency,
                'membership_deposit_currency_network' => $request->membership_deposit_currency_network,
                'membership_terms' => $request->membership_terms
            ]);
            $platform['mlm']->save();
        }


        if (getExt(6) == 1) {
            $platform['staking'] = Platform::where('option', 'staking')->first();
            $platform['staking']->settings = json_encode([
                'cancel_stake' => $request->cancel_stake ?? 0,
            ]);
            $platform['staking']->save();
        }

        if (getExt(10) == 1) {
            $platform['eco'] = Platform::where('option', 'eco')->first();
            $platform['eco']->settings = json_encode([
                'ecosystem_trading_only' => $request->ecosystem_trading_only ?? 0,
            ]);
            $platform['eco']->save();
        }
        $platform['wallet']->clearCache();

        $newJsonString = json_encode($datas, JSON_PRETTY_PRINT);
        file_put_contents(resource_path('data/sidebar.json'), stripslashes($newJsonString));

        \Illuminate\Support\Facades\Artisan::call('optimize:clear');
        $notify[] = ['success', 'Platform Setting has been updated.'];
        return back()->withNotify($notify);
    }
}