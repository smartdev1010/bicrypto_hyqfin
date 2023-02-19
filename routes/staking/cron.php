<?php

use App\Http\Controllers\Extensions\Staking\StakingController;
use Illuminate\Support\Facades\Route;

Route::get('cron/staking/profit', [StakingController::class, 'staking_profit'])->name('staking.profit');
