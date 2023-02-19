<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Extensions\Eco\Api\EcoController;

Route::group(['prefix' => 'public/eco', 'as' => 'api.'], function () {
    Route::get('/markets',  [EcoController::class, 'markets']);
    Route::post('/chart', [EcoController::class, 'chart']);
    Route::post('/orderbook', [EcoController::class, 'orderbook']);
    Route::post('/trades', [EcoController::class, 'trades']);
});
Route::group(['prefix' => 'private/eco', 'as' => 'api.'], function () {
    // Route::post('/user/orders', [EcoController::class, 'fetch_orders']);
    // Route::post('/user/order/cancel/{id}', [EcoController::class, 'cancel_order']);
    // Route::post('/user/wallets', [EcoController::class, 'fetch_wallets']);
    // Route::post('/user/wallet/{symbol}/{address}', [EcoController::class, 'fetch_wallet']);
    // Route::post('/user/wallet/logs/{symbol}/{address}', [EcoController::class, 'fetch_wallet_logs']);
    // Route::post('/wallet', [EcoController::class, 'wallet']);
    Route::post('/orders', [EcoController::class, 'orders']);
    Route::post('/wallet/withdraw', [EcoController::class, 'withdraw']);
    Route::post('/wallet/create', [EcoController::class, 'create_wallet']);
});
