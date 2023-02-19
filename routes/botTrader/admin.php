<?php

use App\Http\Controllers\Admin\Extensions\Bot\ManageBotController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexAccountsController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexInvestmentsController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexSignalsController;
use Illuminate\Support\Facades\Route;
 
Route::group(['prefix' => 'bot', 'as' => 'bot.'], function () {
    // Route::get('/', [ForexInvestmentsController::class, 'index'])->name('index');
    Route::get('/', [ManageBotController::class, 'index'])->name('index');
    Route::get('new', [ManageBotController::class, 'new'])->name('new');
    Route::get('edit/{id}', [ManageBotController::class, 'edit'])->name('edit');
    Route::post('set', [ManageBotController::class, 'set'])->name('set')->middleware('demo');
    Route::post('store', [ManageBotController::class, 'store'])->name('store')->middleware('demo');
    Route::post('update', [ManageBotController::class, 'update'])->name('update')->middleware('demo');

    // Log
    Route::get('log', [ManageBotController::class, 'log'])->name('log.list');

    // Time
    Route::group(['prefix' => 'time', 'as' => 'time.'], function () {
        Route::get('/{id}', [ManageBotController::class, 'indexTime'])->name('index');
        Route::post('store', [ManageBotController::class, 'storeTime'])->name('store')->middleware('demo');
        Route::post('update', [ManageBotController::class, 'updateTime'])->name('update')->middleware('demo');
    });
});