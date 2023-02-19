<?php

use App\Http\Controllers\Extensions\Forex\ForexController;
use Illuminate\Support\Facades\Route;

Route::get('cron/forex/result', [ForexController::class, 'ForexResult'])->name('forex.result');
Route::get('cron/forex/missed', [ForexController::class, 'ForexMissed'])->name('forex.missed');
