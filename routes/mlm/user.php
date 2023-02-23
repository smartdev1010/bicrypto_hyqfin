<?php

use App\Http\Controllers\Extensions\MLM\MLMController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexAccountsController;
use Illuminate\Support\Facades\Route;

Route::post('/fetch/network', [MLMController::class, 'fetch_network'])->middleware('checkKYC')->name('fetch.network');
Route::group(['middleware' => 'checkKYC', 'prefix' => 'mlm', 'as' => 'mlm.'], function () {
    Route::get('/', [MLMController::class, 'dash'])->middleware('checkKYC')->name('home.mlm');
    // Route::get('/', [ForexAccountsController::class, 'index'])->name('index');
    Route::post('/withdraw', [MLMController::class, 'withdraw'])->name('withdraw');
    Route::post('/deposit', [MLMController::class, 'deposit'])->name('deposit');
});