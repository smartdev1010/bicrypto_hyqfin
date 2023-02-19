<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class LivechatController extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'LivechatController';
    }
}
