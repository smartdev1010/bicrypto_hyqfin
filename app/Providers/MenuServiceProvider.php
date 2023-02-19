<?php

namespace App\Providers;

use App\Models\SidebarMenu;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $adminMenu = [];
        $userMenu = [];

        $json = json_decode(file_get_contents(resource_path('data/sidebar.json')), true);

        $adminMenu = arrayToObject($json['admin']);
        $user = $json['user'];
        if (getExt('5')->status == 1) {
            $data = file_get_contents(resource_path('data/page_builder.json'));
            $page = json_decode($data, true);
            $userMenu = arrayToObject(array_merge($user, $page));
        } else {
            $userMenu = arrayToObject($json['user']);
        }

        \View::share('menuData', [$adminMenu]);
        \View::share('usermenuData', [$userMenu]);
    }
}