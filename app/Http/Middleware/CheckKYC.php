<?php

namespace App\Http\Middleware;

use App\Models\KYC;
use App\Models\Platform;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class CheckKYC
{
    public function handle($request, Closure $next)
    {
        $platform = getPlatform('kyc');
        if ($platform->kyc_status == 1) {
            if (KYC::where('userId', Auth::user()->id)->exists()) {
                $status = KYC::where('userId', Auth::user()->id)->first();
                if ($status->status == 'approved') {
                    return $next($request);
                }
            }
        } else {
            return $next($request);
        }

        if (Request::is('user/deposit**', 'user/withdraw**')) {
            $notify[] = ['warning', 'Verify your identify first!'];
            return $request->expectsJson()
                ? abort(403, 'Your Identity is not verified.')
                : redirect()->route('user.kyc')->withNotify($notify);
        } else {
            return response()->json(
                [
                    'success' => false,
                    'type' => 'error',
                    'message' => "Verify your identify first!"
                ]
            );
        }
    }
}
