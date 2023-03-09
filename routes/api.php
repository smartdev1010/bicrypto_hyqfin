<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\MarketController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\WalletController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['sessions']], function () {
    $limiter = config('fortify.limiters.login');
    Route::get('/login', [AuthController::class, 'authenticate'])
        ->middleware(array_filter([
            'guest:' . config('fortify.guard'),
            $limiter ? 'throttle:' . $limiter : null,
        ]))->name('token.login');
});
Route::post('/register', [AuthController::class, 'register'])
    ->middleware(['guest:' . config('fortify.guard')]);

Route::get('/news', [NewsController::class, 'fetch']);
Route::get('/orderbook', [MarketController::class, 'orderbook']);
Route::get('/chart', [MarketController::class, 'chart']);
Route::get('/trade', [MarketController::class, 'trade']);
Route::get('/orders', [MarketController::class, 'orders']);
Route::get('/wallets', [WalletController::class, 'wallets']);
Route::get('/wallet/transactions', [WalletController::class, 'wallet_transactions']);
Route::get('/deposit', [WalletController::class, 'deposit']);

getRoute(10, 'api');
// getRoute(11, 'api');
// getRoute(12, 'api');
