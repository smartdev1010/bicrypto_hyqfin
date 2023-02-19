<?php

use App\Http\Controllers\Admin\Extensions\Staking\ManageStakingController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'staking', 'as' => 'staking.'], function () {
    Route::get('/', [ManageStakingController::class, 'index'])->name('index');
    Route::get('new', [ManageStakingController::class, 'new'])->name('new');
    Route::get('edit/{id}', [ManageStakingController::class, 'edit'])->name('edit');
    Route::get('verify/{id}', [ManageStakingController::class, 'verify'])->name('verify')->middleware('demo');
    Route::post('store', [ManageStakingController::class, 'store'])->name('store')->middleware('demo');
    Route::post('update', [ManageStakingController::class, 'update'])->name('update')->middleware('demo');

    // Log
    Route::get('logs', [ManageStakingController::class, 'log'])->name('log.list');
});
