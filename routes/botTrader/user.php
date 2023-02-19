<?php

use App\Http\Controllers\Extensions\Bot\BotController;
use Illuminate\Support\Facades\Route;

Route::post('/fetch/bot', [BotController::class, 'fetch_info'])->middleware('checkKYC')->name('fetch.info');
Route::post('/fetch/bot/info', [BotController::class, 'fetch_bot'])->middleware('checkKYC')->name('fetch.bot');
Route::post('/store/bot', [BotController::class, 'store'])->middleware('checkKYC')->name('store.bot');
