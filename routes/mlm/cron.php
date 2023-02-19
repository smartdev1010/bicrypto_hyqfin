<?php

use App\Http\Controllers\Extensions\MLM\MLMController;
use Illuminate\Support\Facades\Route;

Route::get('cron/mlm/ranks', [MLMController::class, 'cron_mlm_ranks'])->name('mlm.ranks');
Route::get('cron/mlm/daily', [MLMController::class, 'cron_mlm_daily'])->name('mlm.daily');
Route::get('cron/mlm/membership', [MLMController::class, 'cron_mlm_membership'])->name('mlm.membership');
