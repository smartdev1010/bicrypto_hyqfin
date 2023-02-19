<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Http\Responses\LogoutResponse;

class CheckStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->user()->status == 1) {
            if (auth()->user()->role_id == 2 && getPlatform('system')->maintenance == 1) {
                Auth::guard()->logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();
                return app(LogoutResponse::class);
            }
            return $next($request);
        } else {
            return  redirect()->route('banned');
        }
    }
}