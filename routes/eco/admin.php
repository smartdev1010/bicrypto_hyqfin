<?php

use App\Http\Controllers\Admin\Extensions\Eco\EcosystemController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'eco', 'as' => 'eco.'], function () {
    Route::group(['prefix' => 'blockchains', 'as' => 'blockchain.'], function () {
        Route::get('', [EcosystemController::class, 'blockchain'])->name('index');

        Route::group(['middleware' => 'demo', 'prefix' => '{chain}'], function () {
            Route::group(['prefix' => 'wallet', 'as' => 'wallet.'], function () {
                Route::get('', [EcosystemController::class, 'wallet'])->name('index');
                Route::get('/create', [EcosystemController::class, 'real_wallet_create'])->name('create');
                Route::get('/secure', [EcosystemController::class, 'real_wallet_secure'])->name('secure');
                Route::post('/add', [EcosystemController::class, 'real_wallet_add'])->name('add');
                Route::post('/remove', [EcosystemController::class, 'real_wallet_remove'])->name('remove');
            });

            Route::group(['prefix' => 'ledger', 'as' => 'ledger.'], function () {
                Route::get('', [EcosystemController::class, 'ledger'])->name('index');
                Route::get('{id}', [EcosystemController::class, 'legder_account'])->name('account.index');
                Route::get('/edit/{id}', [EcosystemController::class, 'legder_account_edit'])->name('account.edit');
                Route::post('/account/store', [EcosystemController::class, 'legder_account_store'])->name('account.store');
                Route::post('/deposit/address/store', [EcosystemController::class, 'legder_deposit_address_store'])->name('deposit.address.store');
                Route::get('/account/{id}/deposit/addresses', [EcosystemController::class, 'ledger_deposit_addresses'])->name('account.deposit.addresses');
                Route::get('/account/{id}/deposit/log', [EcosystemController::class, 'ledger_deposit_log'])->name('account.deposit.log');
                Route::post('/token/store', [EcosystemController::class, 'legder_token_store'])->name('token.store');
                Route::post('/update', [EcosystemController::class, 'legder_account_update'])->name('account.update');
                Route::get('/wallet/create', [EcosystemController::class, 'legder_wallet_create'])->name('wallet.create');
            });

            Route::group(['prefix' => 'tokens', 'as' => 'tokens.'], function () {
                Route::get('', [EcosystemController::class, 'tokens'])->name('index');
                Route::get('/new', [EcosystemController::class, 'tokens_new'])->name('new');
                Route::post('/store/{id}', [EcosystemController::class, 'tokens_store'])->name('store');
                Route::post('/update/{id}', [EcosystemController::class, 'tokens_update'])->name('update');
                Route::post('/updateStatus', [EcosystemController::class, 'token_update_status'])->name('update.status');
                Route::post('/remove', [EcosystemController::class, 'tokens_remove'])->name('remove');

                Route::post('/register', [EcosystemController::class, 'token_register'])->name('register');
                Route::get('/fetch/contract/{id}', [EcosystemController::class, 'token_smart_contract_fetch'])->name('fetch.contract');
                Route::post('/add/contract', [EcosystemController::class, 'token_smart_contract_add'])->name('add.contract');
                Route::get('/sync/{id}', [EcosystemController::class, 'token_sync'])->name('sync');
                Route::post('/add/icon', [EcosystemController::class, 'add_icon'])->name('add.icon');
                Route::post('/deploy', [EcosystemController::class, 'token_deploy'])->name('deploy');
                Route::post('/add', [EcosystemController::class, 'token_add'])->name('add');
                Route::post('/withdraw/settings', [EcosystemController::class, 'token_withdraw_settings'])->name('withdraw.settings');
                Route::post('/fees/account/create', [EcosystemController::class, 'token_fees_account_create'])->name('fees.account.create');
            });

            Route::group(['prefix' => 'mainnet_tokens', 'as' => 'mainnet.tokens.'], function () {
                Route::get('', [EcosystemController::class, 'mainnet_tokens'])->name('index');
                Route::post('/updateStatus', [EcosystemController::class, 'mainnet_token_update_status'])->name('update.status');
                Route::post('/withdraw/settings', [EcosystemController::class, 'mainnet_token_withdraw_settings'])->name('withdraw.settings');
                Route::post('/fees/account/create', [EcosystemController::class, 'mainnet_token_fees_account_create'])->name('fees.account.create');
            });

            Route::group(['prefix' => '/{currency}/addresses', 'as' => 'addresses.'], function () {
                Route::get('/', [EcosystemController::class, 'addresses'])->name('index');
                Route::get('/store', [EcosystemController::class, 'addresses_store'])->name('store');
                Route::get('/activate/{id}', [EcosystemController::class, 'addresses_activate'])->name('activate');
                Route::get('/activate/check/{id}', [EcosystemController::class, 'addresses_check_activation'])->name('activate.check');
            });
        });
    });
    Route::group(['prefix' => 'markets', 'as' => 'markets.'], function () {
        Route::get('', [EcosystemController::class, 'markets'])->name('index');
        Route::get('/edit/{id}', [EcosystemController::class, 'markets_edit'])->name('edit');
        Route::post('/store', [EcosystemController::class, 'market_store'])->name('store');
        Route::post('/update', [EcosystemController::class, 'market_update'])->name('update');
    });
});
