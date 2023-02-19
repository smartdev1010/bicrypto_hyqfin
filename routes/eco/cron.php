<?php

use Illuminate\Support\Facades\Route;

Route::get('cron/swap', 'CronController@swap')->name('swap.');
