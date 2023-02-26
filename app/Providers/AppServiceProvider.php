<?php

namespace App\Providers;

use App\Models\Frontend;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Laravel\Fortify\Fortify;
use Jenssegers\Agent\Agent;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Fortify::ignoreRoutes();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */

    public function boot()
    {
        $general = getGen();

        $sitname = str_word_count($general->sitename);
        $sitnameArr = explode(' ', $general->sitename);
        if ($sitname > 1) {
            $title = "$sitnameArr[0] " . str_replace($sitnameArr[0], '', $general->sitename);
        } else {
            $title = "$general->sitename";
        }

        $notification = getNotify();
        $viewShare['general'] = $general;
        $viewShare['notification'] = $notification;
        $viewShare['siteName'] = $title;
        $viewShare['agent'] = new Agent();
        view()->share($viewShare);

        view()->composer('partials.seo', function ($view) {
            $seo = (new Frontend)->getCache();
            $view->with([
                'seo' => $seo ? $seo->data_values : $seo,
            ]);
        });
        // view()->composer('panels.user.navbar', function ($view) {
        //     $view->with([
        //         'user' => Auth::user(),
        //     ]);
        // });

        if ($general->force_ssl) {
            URL::forceScheme('http');
        }
    }
}