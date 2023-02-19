<?php

use App\Http\Controllers\Extensions\Bot\BotController;
use Illuminate\Support\Facades\Route;

Route::get('cron/bot/result', [BotController::class, 'botResult'])->name('bot.result');
Route::get('cron/bot/missed', [BotController::class, 'botMissed'])->name('bot.missed');
