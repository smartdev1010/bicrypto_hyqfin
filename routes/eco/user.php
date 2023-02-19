<?php

use App\Http\Controllers\Extensions\Eco\EcoController;
use Illuminate\Support\Facades\Route;

Route::get('/eco/data', [EcoController::class, 'ecos'])->name('user.fetch.eco');
Route::group(['prefix' => 'fetch', 'as' => 'fetch.'], function () {
    Route::post('/eco/trade/orders', [EcoController::class, 'orders']);
    Route::post('/eco/trade/get/orders', [EcoController::class, 'fetch_orders']);
    Route::post('/chart', [EcoController::class, 'chart']);
    Route::post('/orderbook/{symbol}-{currency}', [EcoController::class, 'orderbook']);
    Route::post('/eco/trades', [EcoController::class, 'fetch_trades']);
    Route::post('/eco/wallets', [EcoController::class, 'fetch_wallets']);
    Route::post('/eco/wallet', [EcoController::class, 'fetch_wallet_balance']);
    Route::post('/eco/wallet/main/{symbol}/{address}', [EcoController::class, 'fetch_wallet']);
    Route::post('/eco/wallet/main/logs/{symbol}/{address}', [EcoController::class, 'fetch_wallet_logs']);
});
Route::post('/eco/order/cancel/{id}', [EcoController::class, 'cancel_order']);
Route::post('/eco/wallet/withdraw', [EcoController::class, 'withdraw']);
Route::post('/eco/wallet/create', [EcoController::class, 'create_wallet']);
Route::group(['middleware' => 'checkKYC', 'prefix' => 'trade', 'as' => 'trade.'], function () {
    Route::post('/{currency}-{pair}', [EcoController::class, 'trading']);
});

Route::group(['prefix' => 'eco', 'as' => 'eco.'], function () {
    Route::group(['middleware' => 'checkKYC', 'prefix' => 'trade', 'as' => 'trade.'], function () {
        Route::post('store', [EcoController::class, 'place_order']);
    });
});
Route::get('/eco/markets',  [EcoController::class, 'markets'])->name('eco.markets');