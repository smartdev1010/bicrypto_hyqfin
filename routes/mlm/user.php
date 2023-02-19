<?php

use App\Http\Controllers\Extensions\MLM\MLMController;
use Illuminate\Support\Facades\Route;

Route::post('/fetch/network', [MLMController::class, 'fetch_network'])->middleware('checkKYC')->name('fetch.network');
Route::group(['middleware' => 'checkKYC', 'prefix' => 'mlm', 'as' => 'mlm.'], function () {
    Route::post('/withdraw', [MLMController::class, 'withdraw'])->name('withdraw');
    Route::post('/deposit', [MLMController::class, 'deposit'])->name('deposit');
});
