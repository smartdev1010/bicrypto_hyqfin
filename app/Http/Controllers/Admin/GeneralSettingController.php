<?php

namespace App\Http\Controllers\Admin;

use App\Models\GeneralSetting;
use App\Http\Controllers\Controller;
use App\Models\Currencies;
use App\Models\Eco\EcoSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class GeneralSettingController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('general_settings_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $general = GeneralSetting::first();
        $limits = json_decode($general->limits);
        $page_title = 'Settings';
        $notify_settings = json_decode(getNotify()->settings);
        return view('admin.setting.general_setting', compact('page_title', 'general', 'limits', 'notify_settings'));
    }

    public function currencies()
    {
        abort_if(Gate::denies('currencies_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Currencies';
        return view('admin.setting.currencies', compact('page_title'));
    }

    public function update(Request $request)
    {
        $validation_rule = [
            'exchange_fee' => ['numeric'],
            'trx_fee' => ['numeric'],
            'profit' => ['numeric'],
            'practice_balance' => ['numeric'],
            'TATUM_RETRIES' => ['numeric'],
            'TATUM_RETRY_DELAY' => ['numeric'],
        ];

        $validator = Validator::make($request->all(), $validation_rule, []);
        $validator->validate();

        $general_setting = GeneralSetting::first();
        $notification = getNotify();
        $notification->site_name = $request->sitename;
        $notification->save();

        $request->merge(['force_ssl' => isset($request->force_ssl) ? 1 : 0]);
        $request->merge(['registration' => isset($request->registration) ? 1 : 0]);
        $request->merge(['APP_DEBUG' => isset($request->APP_DEBUG) ? 'true' : 'false']);


        $general_setting->sitename = $request->sitename;
        $general_setting->cur_text = $request->cur_text;
        $general_setting->cur_sym = $request->cur_sym;
        $general_setting->force_ssl = $request->force_ssl;
        $general_setting->practice_balance = $request->practice_balance;
        $general_setting->practice_wallet = $request->practice_wallet;
        $general_setting->registration = $request->registration;
        $general_setting->profit = $request->profit;
        $general_setting->exchange_fee = $request->exchange_fee;
        $general_setting->trx_fee = $request->trx_fee;
        $general_setting->cors = $request->cors;
        $general_setting->tinymce = $request->tinymce;
        $general_setting->limits = json_encode([
            'min_amount' => $request->min_amount,
            'max_amount' => $request->max_amount,
            'min_time_sec' => $request->min_time_sec,
            'max_time_sec' => $request->max_time_sec,
            'min_time_min' => $request->min_time_min,
            'max_time_min' => $request->max_time_min,
            'min_time_hour' => $request->min_time_hour,
            'max_time_hour' => $request->max_time_hour,
        ]);
        $general_setting->provider_withdraw_fee = $request->provider_withdraw_fee;
        changeEnv('APP_NAME', '"' . $request->input('sitename', null) . '"');
        changeEnv('APP_DEBUG', $request->input('APP_DEBUG', null));
        changeEnv('VUE_APP_I18N_LOCALE', $request->input('VUE_APP_I18N_LOCALE', null));
        changeEnv('VUE_APP_I18N_FALLBACK_LOCALE', $request->input('VUE_APP_I18N_FALLBACK_LOCALE', null));
        changeEnv('VUE_APP_WALLET_CONNECT_PROJECT_ID', $request->input('VUE_APP_WALLET_CONNECT_PROJECT_ID', null));

        if (getExt(10) == 1) {
            changeEnv('TATUM_API_URL', '"' . $request->input('TATUM_API_URL', null) . '"');
            changeEnv('TATUM_API_KEY', '"' . $request->input('TATUM_API_KEY', null) . '"');
            changeEnv('TATUM_TESTNET_API_KEY', '"' . $request->input('TATUM_TESTNET_API_KEY', null) . '"');
            changeEnv('NETWORK', '"' . $request->input('NETWORK', null) . '"');
            $native_settings = EcoSettings::first();
            $native_settings->network = $request->input('NETWORK');
            $native_settings->save();
            changeEnv('TESTNET_TYPE', '"' . $request->input('TESTNET_TYPE', null) . '"');
            changeEnv('TATUM_RETRIES', '"' . $request->input('TATUM_RETRIES', null) . '"');
            changeEnv('TATUM_RETRY_DELAY', '"' . $request->input('TATUM_RETRY_DELAY', null) . '"');
        }

        if (getExt(12) == 1) {
            changeEnv('PUSHER_APP_ID', '"' . $request->input('PUSHER_APP_ID', null) . '"');
            changeEnv('PUSHER_APP_KEY', '"' . $request->input('PUSHER_APP_KEY', null) . '"');
            changeEnv('PUSHER_APP_SECRET', '"' . $request->input('PUSHER_APP_SECRET', null) . '"');
            changeEnv('PUSHER_APP_CLUSTER', '"' . $request->input('PUSHER_APP_CLUSTER', null) . '"');
        }

        $general_setting->save();
        $general_setting->clearCache();
        Artisan::call('optimize:clear');
        $notify[] = ['success', 'General Setting has been updated.'];
        return back()->withNotify($notify);
    }

    public function currency_update(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'rate' => 'numeric',
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
            $cur = Currencies::where('id', $request->id)->first();
            $cur->rate = $request->rate;
            $cur->save();
            $notify[] = ['success', 'Currency Rate has been updated.'];
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

    public function logoIcon()
    {
        abort_if(Gate::denies('logo_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Logo & Icon';
        return view('admin.setting.logo_icon', compact('page_title'));
    }

    public function logoIconUpdate(Request $request)
    {
        $request->validate([
            'logo' => 'image|mimes:jpg,jpeg,png,svg',
            'logo-dark' => 'image|mimes:jpg,jpeg,png,svg',
            'icon' => 'image|mimes:png',
            'icon-dark' => 'image|mimes:png',
            'favicon' => 'image|mimes:png',
        ]);
        $path = imagePath()['logoIcon']['path'];
        if ($request->hasFile('logo')) {
            try {
                $size = imagePath()['logoIcon']['size'];
                uploadImg($request->logo, $path, $size, null, '/logo.png');
            } catch (\Exception $exp) {
                $notify[] = ['error', $exp];
                return back()->withNotify($notify);
            }
        }
        if ($request->hasFile('logo_dark')) {
            try {
                $size = imagePath()['logoIcon']['size'];
                uploadImg($request->logo_dark, $path, $size, null, '/logo-dark.png');
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Dark Logo could not be uploaded.'];
                return back()->withNotify($notify);
            }
        }
        if ($request->hasFile('icon')) {
            try {
                $size = imagePath()['icon']['size'];
                uploadImg($request->icon, $path, $size, null, '/icon.png');
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Icon could not be uploaded.'];
                return back()->withNotify($notify);
            }
        }

        if ($request->hasFile('icon_dark')) {
            try {
                $size = imagePath()['icon']['size'];
                uploadImg($request->icon_dark, $path, $size, null, '/icon-dark.png');
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Dark Icon could not be uploaded.'];
                return back()->withNotify($notify);
            }
        }

        if ($request->hasFile('favicon')) {
            try {
                $size = imagePath()['favicon']['size'];
                uploadImg($request->favicon, $path, $size, null, '/favicon.png');
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Favicon could not be uploaded.'];
                return back()->withNotify($notify);
            }
        }

        $notify[] = ['success', 'Logo Icons has been updated.'];
        return back()->withNotify($notify);
    }

    public function currency_activate(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required|integer'
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
            $currency = Currencies::where('id', $request->id)->first();
            if ($currency->status != 1) {
                $active = Currencies::where('status', 1)->first();
                $active->status = 0;
                $active->save();
            }
            $currency->status = 1;
            $currency->save();
            $notify[] = ['success', $currency->name . ' has been activated'];
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
}
