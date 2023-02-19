<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class LanguageController extends Controller
{
    //
    public function swap($locale)
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
        // check for existing language
        if (array_key_exists($locale, $availLocale)) {
            session()->put('locale', $locale);
        }
        return redirect()->back();
    }
}
