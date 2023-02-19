<?php

namespace App\Http\Responses;

use App\Models\UserLogin;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{

    public function toResponse($request)
    {
        if (auth()->user()->role_id != 2) {
            return redirect()->intended(config('fortify.admin'));
        } else {
            try {

                $info = json_decode(json_encode(getIpInfo()), true);
                $ip =  $info['ip'][0];
                $exist = UserLogin::where('user_ip', $ip)->first();
                $userLogin = new UserLogin();
                if ($exist) {
                    $userLogin->longitude =  $exist->longitude;
                    $userLogin->latitude =  $exist->latitude;
                    $userLogin->location =  $exist->location;
                    $userLogin->country_code = $exist->country_code;
                    $userLogin->country =  $exist->country;
                } else {
                    $userLogin->longitude =  $info['long'][0];
                    $userLogin->latitude =  $info['lat'][0];
                    $userLogin->location =  $info['city'][0] . " - " . $info['country'][0] . " - " . $info['code'][0];
                    $userLogin->country_code = $info['code'][0];
                    $userLogin->country =  $info['country'][0];
                }

                $userAgent = osBrowser();
                $userLogin->user_id = auth()->user()->id;
                $userLogin->user_ip =  $ip;

                $userLogin->browser = @$userAgent['browser'];
                $userLogin->os = @$userAgent['os_platform'];
                $userLogin->save();
            } catch (\Throwable $th) {
                //throw $th;
            }
            return redirect()->intended(config('fortify.home'));
        }
    }
}
