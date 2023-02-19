<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class LocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // available language in template array
        $availLocale = [
            "ar" => "ar",
            "bn" => "bn",
            "de" => "de",
            "en" => "en",
            "es" => "es",
            "fa" => "fa",
            "fr" => "fr",
            "hi" => "hi",
            "hu" => "hu",
            "id" => "id",
            "it" => "it",
            "ja" => "ja",
            "ko" => "ko",
            "nb" => "nb",
            "nl" => "nl",
            "pl" => "pl",
            "pt" => "pt",
            "ru" => "ru",
            "th" => "th",
            "tr" => "tr",
            "uk" => "uk",
            "ur" => "ur",
            "vi" => "vi",
            "zh" => "zh"
        ];

        // Locale is enabled and allowed to be change
        if (session()->has('locale') && array_key_exists(session()->get('locale'), $availLocale)) {
            // Set the Laravel locale
            app()->setLocale(session()->get('locale'));
        }

        return $next($request);
    }
}
