<?php

use App\Http\Controllers\Extensions\Forex\ForexController;
use App\Http\Controllers\WalletController;
use Illuminate\Support\Facades\Route;

Route::post('/fetch/forex', [ForexController::class, 'fetch_info'])->middleware('checkKYC')->name('fetch.forex');
Route::post('/fetch/investment', [ForexController::class, 'investment_fetch_info'])->middleware('checkKYC')->name('fetch.investment');
Route::post('/fetch/investment/tmp', [ForexController::class, 'fetch_investment_logs'])->middleware('checkKYC')->name('fetch.investment');
Route::post('/fetch/investment/investment', [ForexController::class, 'investment_add'])->middleware('checkKYC')->name('fetch.investment');
Route::post('/fetch/investment/investmentUpdate', [ForexController::class, 'investment_update'])->middleware('checkKYC')->name('fetch.investment');
Route::post('/fetch/investment/investmentDateUpdate', [ForexController::class, 'investment_date_update'])->middleware('checkKYC')->name('fetch.investment');
Route::post('/fetch/wallet/walletUpdate', [WalletController::class, 'walletUpdate']);
Route::post('/fetch/wallet', [WalletController::class, 'getWallet']);

Route::group(['middleware' => 'checkKYC', 'prefix' => 'forex', 'as' => 'forex.'], function () {
    Route::post('/create', [ForexController::class, 'create'])->name('create');
    Route::post('/store', [ForexController::class, 'store'])->name('store');
    Route::post('/withdraw', [ForexController::class, 'withdraw'])->name('withdraw');
    Route::post('/deposit', [ForexController::class, 'deposit'])->name('deposit');
});