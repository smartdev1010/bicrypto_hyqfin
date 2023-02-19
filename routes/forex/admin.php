<?php

use App\Http\Controllers\Admin\Extensions\Forex\ForexAccountsController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexInvestmentsController;
use App\Http\Controllers\Admin\Extensions\Forex\ForexSignalsController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'forex', 'as' => 'forex.'], function () {
    Route::get('/', [ForexAccountsController::class, 'index'])->name('index');
    Route::get('new', [ForexAccountsController::class, 'new'])->name('new');
    Route::get('edit/{id}', [ForexAccountsController::class, 'edit'])->name('edit');
    Route::post('verify', [ForexAccountsController::class, 'verify'])->name('verify')->middleware('demo');
    Route::post('store', [ForexAccountsController::class, 'store'])->name('store')->middleware('demo');
    Route::post('update', [ForexAccountsController::class, 'update'])->name('update')->middleware('demo');

    Route::group(['prefix' => 'investment', 'as' => 'investment.'], function () {
        Route::get('/', [ForexInvestmentsController::class, 'index'])->name('index');
        Route::get('new', [ForexInvestmentsController::class, 'new'])->name('new');
        Route::get('edit/{id}', [ForexInvestmentsController::class, 'edit'])->name('edit');
        Route::post('store', [ForexInvestmentsController::class, 'store'])->name('store')->middleware('demo');
        Route::post('update', [ForexInvestmentsController::class, 'update'])->name('update')->middleware('demo');
        Route::post('set', [ForexInvestmentsController::class, 'set'])->name('set')->middleware('demo');

        // Log
        Route::get('log', [ForexInvestmentsController::class, 'log'])->name('log.list');
    });

    Route::group(['prefix' => 'signals', 'as' => 'signals.'], function () {
        Route::get('/', [ForexSignalsController::class, 'index'])->name('index');
        Route::get('new', [ForexSignalsController::class, 'new'])->name('new');
        Route::get('edit/{id}', [ForexSignalsController::class, 'edit'])->name('edit');
        Route::post('store', [ForexSignalsController::class, 'store'])->name('store')->middleware('demo');
        Route::post('update', [ForexSignalsController::class, 'update'])->name('update')->middleware('demo');
    });

    // Log
    Route::get('log', [ForexAccountsController::class, 'log'])->name('log.list');
});