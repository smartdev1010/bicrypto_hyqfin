<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use App\Models\Binance\BinanceCurrencies;
use App\Models\CoinbaseCurrencies;
use App\Models\GatewayCurrency;
use App\Models\Kucoin\KucoinCurrencies;
use App\Models\ThirdpartyTransactions;
use App\Models\Transaction;
use App\Models\User;
use App\Models\CommissionInvestment;
use App\Models\Wallet;
use App\Models\WalletsTransactions;
use App\Models\Platform;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class WalletController extends Controller
{
    public $api;
    public $provider;
    public function __construct()
    {
        $thirdparty = getProvider();
        if ($thirdparty != null) {

            $exchange_class = "\\ccxt\\$thirdparty->title";
            if ($thirdparty->title == 'kucoin') {
                $this->api = new $exchange_class(array(
                    'apiKey' => $thirdparty->api,
                    'secret' => $thirdparty->secret,
                    'password' => $thirdparty->password,
                    'options' => array(
                        'versions' => array(
                            'public' => array(
                                'GET' => array(
                                    'currencies/{currency}' => 'v2',
                                ),
                            ),
                        ),
                    ),
                    //'verbose'=> true
                ));
            } else if ($thirdparty->title == 'binance') {
                $this->api = new $exchange_class(array(
                    'apiKey' => $thirdparty->api,
                    'secret' => $thirdparty->secret,
                    'password' => $thirdparty->password,
                    'options' => array(
                        'adjustForTimeDifference' => true,
                        'recvWindow' => 30000,
                    ),
                ));
            } else {
                $this->api = new $exchange_class(array(
                    'apiKey' => $thirdparty->api,
                    'secret' => $thirdparty->secret,
                    'password' => $thirdparty->password,
                ));
            }
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = 'funding';
        }
        #$this->api->set_sandbox_mode('enable');
    }
    public function walletUpdate(Request $request){
        if($request->id < 0){
            $request->id = -$request->id;
            $user = Auth::user();
            $wallet = Wallet::where('id', $request->id)->first();
            $wallet->balance += $request->amount;
            if($wallet->save()){
                // profit of investment
                if($request->amount > 0){
                    $wallet_new_trx = new WalletsTransactions();
                    $wallet_new_trx->user_id = $user->id;
                    $wallet_new_trx->symbol = $wallet->symbol;
                    $wallet_new_trx->amount = $request->amount;
                    $wallet_new_trx->amount_recieved = $request->amount;
                    $wallet_new_trx->charge = $request->amount;
                    $wallet_new_trx->to = $wallet->symbol;
                    $wallet_new_trx->type = '1';
                    $wallet_new_trx->status = '1';
                    $wallet_new_trx->trx = getTrx();
                    $wallet_new_trx->details = 'You refunded '.$request->amount . ' ' . $wallet->symbol;
                    $wallet_new_trx->wallet_type = 'funding';
                    $wallet_new_trx->save();
                    $wallet_new_trx->clearCache();
                }
                else{
                    $wallet_new_trx = new WalletsTransactions();
                    $wallet_new_trx->user_id = $user->id;
                    $wallet_new_trx->symbol = $wallet->symbol;
                    $wallet_new_trx->amount = $request->amount;
                    $wallet_new_trx->amount_recieved = $request->amount;
                    $wallet_new_trx->charge = $request->amount;
                    $wallet_new_trx->to = $wallet->symbol;
                    $wallet_new_trx->type = '0';
                    $wallet_new_trx->status = '1';
                    $wallet_new_trx->trx = getTrx();
                    $wallet_new_trx->details = 'You Signed in Membership.';
                    $wallet_new_trx->wallet_type = 'funding';
                    $wallet_new_trx->save();
                    $wallet_new_trx->clearCache();
                }
            }
        }
        else if($request->amount != 0){
            $user = Auth::user();
            $wallet = Wallet::where('id', $request->id)->first();
            $wallet->balance += $request->amount;
            if($wallet->save()){
                // profit of investment
                if($request->amount > 0){
                    $wallet_new_trx = new WalletsTransactions();
                    $wallet_new_trx->user_id = $user->id;
                    $wallet_new_trx->symbol = $wallet->symbol;
                    $wallet_new_trx->amount = $request->amount;
                    $wallet_new_trx->amount_recieved = $request->amount;
                    $wallet_new_trx->charge = $request->amount;
                    $wallet_new_trx->to = $wallet->symbol;
                    $wallet_new_trx->type = '1';
                    $wallet_new_trx->status = '1';
                    $wallet_new_trx->trx = getTrx();
                    $wallet_new_trx->details = 'profited '.$request->amount . ' ' . $wallet->symbol;
                    $wallet_new_trx->wallet_type = 'funding';
                    $wallet_new_trx->save();
                    $wallet_new_trx->clearCache();
                }
            }
        }
    }
    function fetch_create_deposit_address_helper($exchange, $code, $chain = null)
    {
        $response = null;
        try {
            $response = $exchange->fetch_deposit_address($code, $chain ? array('chain' => strtolower($chain)) : array());
            if ((!$response['address']) || (!strlen($response['address']))) {
                throw new \ccxt\ExchangeError($exchange->id);
            }
        } catch (\ccxt\ExchangeError $e) {
            $response = $exchange->create_deposit_address($code, $chain ? array('chain' => strtolower($chain)) : array());
        }
        return $response;
    }

    function fetch_create_deposit_address($exchange, $code, $chainName, $chain = null)
    {
        try {
            return $this->fetch_create_deposit_address_helper($exchange, $code, $chain);
        } catch (\ccxt\ExchangeError $e) {
        }
    }

    public function fetch_wallets()
    {
        $user = Auth::user();
        if ($this->provider != 'funding') {
            if (Wallet::where('provider', '!=', 'local')->where('user_id', $user->id)->exists()) {
                $all_wallets = (new Wallet)->getCached($user->id);
                $wallets['trading'] = $all_wallets->where('provider', $this->provider);
                $wallets['funding'] = $all_wallets->where('provider', 'funding');
            } else {
                $wallets['trading'] = null;
                $wallets['funding'] = null;
            }
            if ($this->provider == 'coinbasepro') {
                $currencies = (new CoinbaseCurrencies)->getEnabled();
            } else if ($this->provider == 'kucoin') {
                $currencies = (new KucoinCurrencies)->getEnabled();
            } else if ($this->provider == 'binance') {
                $currencies = (new BinanceCurrencies)->getEnabled();
            } else {
                $currencies = null;
            }
            return response()->json([
                'user' => $user,
                'wallets' => $wallets,
                'api' => 1,
                'currencies' => $currencies,
            ]);
        } else {
            if (Wallet::where('provider', 'funding')->where('user_id', $user->id)->exists()) {
                $wallets['funding'] = (new Wallet)->getCached($user->id)->where('provider', 'funding');
            } else {
                $wallets['funding'] = null;
            }
            $currencies = (new KucoinCurrencies)->getEnabled();
            return response()->json([
                'user' => $user,
                'wallets' => $wallets,
                'api' => 0,
                'currencies' => $currencies,
            ]);
        }
    }
    public function getWallet(Request $request){
        $wallet = Wallet::get();
        $platform = CommissionInvestment::get();
        return response()->json([
            'wallet' => $wallet,
            'platforms' => $platform
        ]);
    }

    public function fetch_wallet($type, $symbol, $address)
    {
        $user = Auth::user();
        $wal = Wallet::where('user_id', $user->id)->where('address', $address)->where('symbol', $symbol)->where('type', $type)->first();
        // $wal_trx = WalletsTransactions::where('user_id', $user->id)->where('symbol', $symbol)->latest()->get();
        // if($type == 'funding')
            $wal_trx = WalletsTransactions::where('user_id', $user->id)->where('symbol', $symbol)->where('wallet_type', $type)->latest()->get();
        // if($type == 'trading')
            // $wal_trx = WalletsTransactions::where('user_id', $user->id)->where('symbol', $symbol)->where('wallet_type', $type)->latest()->get();
        session()->put('Track', $wal);
        if ($this->provider != 'funding') {
            $chains = [];
            if ($this->provider == 'coinbasepro') {
                $currencies = (new CoinbaseCurrencies)->getEnabled();
                $curr = CoinbaseCurrencies::where('symbol', $wal->symbol)->first();
                $addresses = null;
                $chains = null;
            } else if ($this->provider == 'binance') {
                $currencies = (new BinanceCurrencies)->getEnabled();
                $curr = BinanceCurrencies::where('symbol', $wal->symbol)->first();
                $addresses = json_decode($wal->addresses);
                $chainss = json_decode($curr->networks, True);
                foreach ($chainss as $chain) {
                    if ($chain['withdrawEnable'] == true) {
                        $chains[$chain['network']] = $chain;
                    }
                }
                if ($addresses != null) {
                    foreach ($addresses as $key => $value) {
                        $value->chain = $chains[$key];
                        $value->network = $chains[$key]['network'];
                    }
                }
            } else if ($this->provider == 'kucoin') {
                $addressesData = json_decode($wal->addresses);
                $response = $this->api->public_get_currencies_currency(array('currency' => $symbol));
                $currency = $this->api->safe_value($response, 'data');
                if ($currency) {
                    $chainss = collect($this->api->safe_value($currency, 'chains'));
                    foreach ($chainss->where('isWithdrawEnabled', true)->where('isDepositEnabled', true) as $chain) {
                        $chains[$chain['chainName']] = $chain;
                    }
                }
                if ($addressesData != null) {
                    foreach ($addressesData as $key => $value) {
                        if (isset($chains[$key])) {
                            $adr = $value;
                            $adr->chain = $chains[$key];
                            $adr->network = $chains[$key]['chainName'];
                            $addresses[$key] = $adr;
                        }
                    }
                }
                $currencies = (new KucoinCurrencies)->getEnabled();
                $curr = KucoinCurrencies::where('symbol', $wal->symbol)->first();
            } else {
                $currencies = null;
                $curr = null;
            }
            if (GatewayCurrency::whereHas('method', function ($gate) {
                $gate->where('status', 1);
            })->with('method')->exists()) {
                $dp = 1;
            }
            return response()->json([
                'wal' => $wal,
                'wal_trx' => $wal_trx,
                'addresses' => $addresses ?? null,
                'currencies' => $currencies,
                'curr' => $curr,
                'currency' => getCurrency(),
                'api' => 1,
                'dp' => $dp ?? 0,
            ]);
        } else {
            if (GatewayCurrency::whereHas('method', function ($gate) {
                $gate->where('status', 1);
            })->with('method')->exists()) {
                $dp = 1;
            }
            return response()->json([
                'wal' => $wal,
                'wal_trx' => $wal_trx,
                'addresses' => null,
                'currencies' => null,
                'curr' => null,
                'currency' => getCurrency(),
                'chains' => null,
                'api' => 0,
                'dp' => $dp ?? 0,
            ]);
        }
    }

    public function fetch_wallet_balance(Request $request)
    {
        if ($request->type == 'funding') {
            if (isWallet(auth()->user()->id, 'funding', $request->symbol, 'funding') == false) {
                return response()->json([
                    'symbol' => null,
                    'balance' => null
                ]);
            } else {
                $wallet = getWallet(auth()->user()->id, 'funding', $request->symbol, 'funding');
                return response()->json([
                    'symbol' => $wallet->symbol,
                    'balance' => $wallet->balance
                ]);
            }
        } else {
            if (isWallet(auth()->user()->id, 'trading', $request->symbol, $this->provider) == false) {
                return response()->json([
                    'symbol' => null,
                    'balance' => null
                ]);
            } else {
                $wallet = getWallet(auth()->user()->id, 'trading', $request->symbol, $this->provider);
                return response()->json([
                    'symbol' => $wallet->symbol,
                    'balance' => $wallet->balance
                ]);
            }
        }
    }

    public function create_json(Request $request)
    {
        $user = Auth::user();
        if (Wallet::where('provider', $this->provider)->where('user_id', $user->id)->where('type', $request->type)->where('symbol', $request->symbol)->first()) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'You Have ' . $request->symbol . ' Wallet Already!'
                ]
            );
        } else {
            if ($request->type == 'trading') {
                $wallet = new Wallet();
                $wallet->user_id = $user->id;
                $wallet->provider = $this->provider;
                $wallet->symbol = $request->symbol;
                $wallet->type = $request->type;
                if ($this->provider == 'coinbasepro') {
                    try {
                        $wallet->address = $this->api->create_deposit_address($request->symbol)['address'];
                        $wallet->save();
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'success',
                                'message' => 'Your ' . $wallet->symbol . ' Wallet Created Successfully'
                            ]
                        );
                    } catch (Throwable $e) {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'warning',
                                'message' => 'Wallet Generation Failed, Please report to support'
                            ]
                        );
                    }
                } else if ($this->provider == 'binance') {
                    $curr = BinanceCurrencies::where('symbol', $request->symbol)->first();
                    $chainss = json_decode($curr->networks, True);
                    foreach ($chainss as $chain) {
                        if ($chain['withdrawEnable'] == true) {
                            $chains[] = $chain;
                        }
                    }
                    $results = array();
                    if (count($chains) > 1) {
                        foreach ($chains as $chain) {
                            $chainName = $this->api->safe_string($chain, 'network');
                            try {
                                $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                            } catch (Throwable $e) {
                                return response()->json(
                                    [
                                        'success' => true,
                                        'type' => 'warning',
                                        'message' => str_replace($this->provider . ' ', '', $e->getMessage()),
                                    ]
                                );
                            }
                            if (!isset($results)) {
                                $results = array();
                            }
                            $results[$chainName] = $address;
                        }
                    } else {
                        $chain = $this->api->safe_value($chains, 0);
                        $chainName = $this->api->safe_string($chain, 'network');
                        try {
                            $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                        } catch (Throwable $e) {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'warning',
                                    'message' => str_replace($this->provider . ' ', '', $e->getMessage()),
                                ]
                            );
                        }
                        if (!isset($results)) {
                            $results = array();
                        }
                        $results[$chainName] = $address;
                    }
                    $results = array_filter($results);
                    $wallet->addresses = json_encode($results);
                    try {
                        $wallet->address = reset($results)['address'];
                        $wallet->save();
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'success',
                                'message' => 'Your ' . $wallet->symbol . ' Wallet Created Successfully'
                            ]
                        );
                    } catch (Throwable $e) {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'warning',
                                'message' => json_decode(str_replace($this->provider . ' ', '', $e->getMessage()))->msg,
                            ]
                        );
                    }
                } else if ($this->provider == 'bybit') {
                    try {
                        $wallet->address = $this->api->fetch_deposit_address($request->symbol)['address'];
                        $wallet->addresses = json_encode($this->api->fetch_deposit_addresses_by_network($request->symbol));
                        $wallet->save();
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'success',
                                'message' => 'Your ' . $wallet->symbol . ' Wallet Created Successfully'
                            ]
                        );
                    } catch (Throwable $e) {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'warning',
                                'message' => str_replace($this->provider . ' ', '', $e->getMessage()),
                            ]
                        );
                    }
                } else if ($this->provider == 'kucoin') {
                    $response = $this->api->public_get_currencies_currency(array('currency' => $request->symbol));
                    $currency = $this->api->safe_value($response, 'data');
                    $results = array();
                    if ($currency) {
                        $chains = $this->api->safe_value($currency, 'chains');
                        if ((count($chains) > 1) && ($request->symbol !== 'BNB')) {
                            foreach ($chains as $chain) {
                                $chainName = $this->api->safe_string($chain, 'chainName');
                                $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName, $chainName);
                                if (!isset($results)) {
                                    $results = array();
                                }
                                $results[$chainName] = $address;
                            }
                        } else {
                            $chain = $this->api->safe_value($chains, 0);
                            $chainName = $this->api->safe_string($chain, 'chainName');
                            $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName);
                            if (!isset($results)) {
                                $results = array();
                            }
                            $results[$chainName] = $address;
                        }
                        $results = array_filter($results);
                        $wallet->addresses = json_encode($results);
                        try {
                            $wallet->address = reset($results)['address'];
                            $wallet->save();
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'success',
                                    'message' => 'Your ' . $wallet->symbol . ' Wallet Created Successfully'
                                ]
                            );
                        } catch (Throwable $e) {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'error',
                                    'message' => 'API Connection Failed'
                                ]
                            );
                        }
                    } else {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'warning',
                                'message' => 'Wallet Generation Failed, Please report to support'
                            ]
                        );
                    }
                }
            } else {
                if (Wallet::where('provider', 'funding')->where('user_id', $user->id)->where('type', $request->type)->where('symbol', $request->symbol)->first()) {
                    return response()->json(
                        [
                            'success' => true,
                            'type' => 'warning',
                            'message' => 'You Have ' . $request->symbol . ' Wallet Already!'
                        ]
                    );
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $user->id;
                    $wallet->symbol = $request->symbol;
                    $wallet->address = grs(34);
                    $wallet->type = 'funding';
                    $wallet->provider = 'funding';
                    $wallet->save();
                    return response()->json(
                        [
                            'success' => true,
                            'type' => 'success',
                            'message' => 'Your ' . $wallet->symbol . ' Wallet Created Successfully'
                        ]
                    );
                }
            }
        }
    }

    public function deposit(Request $request)
    {
        $user = Auth::user();
        if (ThirdpartyTransactions::where('address', $request->address)->exists()) {
            return response()->json(
                [
                    'success' => false,
                    'type' => 'error',
                    'message' => 'Transaction Hash Already Used'
                ]
            );
        } else {

            $deposit = new ThirdpartyTransactions();
            $deposit->user_id = $user->id;
            $deposit->symbol = $request->symbol;
            $deposit->recieving_address = $request->recieving_address;
            $deposit->address = $request->address;
            $deposit->chain = $request->chain;
            $deposit->type = '1';
            $deposit->status = '0';
            $deposit->save();
            $deposit->clearCache();

            $wallet_new_trx = new WalletsTransactions();
            $wallet_new_trx->symbol = $request->symbol;
            $wallet_new_trx->user_id = $user->id;
            $wallet_new_trx->address = $request->address;
            $wallet_new_trx->to = $request->recieving_address;
            $wallet_new_trx->chain = $request->chain;
            $wallet_new_trx->type = '1';
            $wallet_new_trx->status = '2';
            $wallet_new_trx->details = 'Deposited To ' . $request->symbol . ' Wallet ';
            $wallet_new_trx->wallet_type = 'trading';
            $wallet_new_trx->save();
            $wallet_new_trx->clearCache();

            $adminNotification = new AdminNotification();
            $adminNotification->user_id = $user->id;
            $adminNotification->title = 'New Deposit From ' . $user->username;
            $adminNotification->click_url = route('admin.report.wallet');
            $adminNotification->save();
            $adminNotification->clearCache();

            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'wal_trx' => WalletsTransactions::where('user_id', $user->id)->where('symbol', $request->symbol)->latest()->get(),
                    'message' => 'Deposit order placed successfully'
                ]
            );
        }
    }

    public function withdraw(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'recieving_address' => 'required',
        ]);

        $user = Auth::user();
        $wallet = Wallet::where('user_id', $user->id)
            ->where('provider', $this->provider)
            ->where('type', 'trading')
            ->where('symbol', $request->symbol)
            ->first();

        if (!$wallet || !$request->amount || !$request->recieving_address) {
            return response()->json([
                'success' => true,
                'type' => 'error',
                'message' => 'Invalid input',
            ]);
        }

        $fee = getGen()->provider_withdraw_fee / 100;
        $withdrawAmount = $request->amount * (1 + $fee);

        if ($withdrawAmount >= $wallet->balance) {
            return response()->json([
                'success' => true,
                'type' => 'error',
                'message' => 'Your withdraw amount is higher than your balance',
            ]);
        }
        $wallet->balance -= $request->amount + ($request->amount * $fee);

        $withdraw = new ThirdpartyTransactions();
        $withdraw->user_id = $user->id;
        $withdraw->symbol = $request->symbol;
        $withdraw->recieving_address = $request->recieving_address;
        $withdraw->amount = $request->amount;
        switch ($this->provider) {
            case 'coinbasepro':
                try {
                    $provider_withdraw = $this->api->withdraw($request->symbol, $request->amount, $request->recieving_address);
                } catch (\Throwable $th) {
                    return $this->handleWithdrawalError($user, $request, $wallet, 'Internal error, please try again after 12h');
                }
                $withdraw->fee = $provider_withdraw['info']['fee'];
                $withdraw->trx_id = $provider_withdraw['info']['id'];
                break;
            case 'binance':
                try {
                    $provider_withdraw = $this->api->withdraw($request->symbol, $request->amount, $request->recieving_address, $request->memo, ['network' => $request->chain]);
                } catch (\Throwable $th) {
                    return $this->handleWithdrawalError($user, $request, $wallet, 'Internal error, please try again after 12h');
                }
                $withdraw->trx_id = $provider_withdraw['info']['id'];
                break;
            default:
                $withdraw->memo = $request->memo;
                $withdraw->chain = $request->chain;
                try {
                    $transfer_process = $this->api->transfer($request->symbol, $request->amount, 'trade', 'main');
                } catch (\Throwable $th) {
                    return $this->handleWithdrawalError($user, $request, $wallet, 'Internal error, please try again after 12h');
                }
                if (isset($transfer_process['id'])) {
                    try {
                        $provider_withdraw = $this->api->withdraw($request->symbol, $request->amount, $request->recieving_address, $request->memo, ['network' => $request->chain]);
                    } catch (\Throwable $th) {
                        return $this->handleWithdrawalError($user, $request, $wallet, 'Internal error, please try again after 12h');
                    }
                    if (isset($provider_withdraw['id'])) {
                        try {
                            $withdraw_id = collect($this->api->fetch_withdrawals())->where('id', $provider_withdraw['id'])->first();
                            $withdraw->trx_id = $provider_withdraw['id'];
                            $withdraw->fee = ($request->amount * $fee) + $withdraw_id['fee']['cost'];
                        } catch (\Throwable $th) {
                            $withdraw->fee = $fee;
                        }
                    }
                }
                break;
        }

        $withdraw->type = '2';
        $withdraw->status = '0';
        $withdraw->save();
        $withdraw->clearCache();
        $wallet->save();


        $transaction = new Transaction();
        $transaction->user_id = $withdraw->user_id;
        $transaction->currency = $request->symbol;
        $transaction->amount = getAmount($withdraw->amount);
        $transaction->post_balance = getAmount($wallet->balance);
        $transaction->charge = getAmount($request->amount + ($request->amount * $fee));
        $transaction->trx_type = '-';
        $transaction->details = 'Withdraw of ' . $withdraw->amount . ' ' . $withdraw->symbol . ' From Wallet: ' . $withdraw->recieving_address;
        $transaction->trx =  $withdraw->trx_id;
        $transaction->save();
        $transaction->clearCache();

        $wallet_new_trx = new WalletsTransactions();
        $wallet_new_trx->user_id = $withdraw->user_id;
        $wallet_new_trx->symbol = $withdraw->symbol;
        $wallet_new_trx->amount = $withdraw->amount;
        if ($this->provider == 'kucoin') {
            $wallet_new_trx->chain = $request->chain;
        } else if ($this->provider == 'binance') {
            $wallet_new_trx->chain = $request->chain;
        }
        $wallet_new_trx->charge = getAmount($request->amount + ($request->amount * $fee));
        if ($this->provider == 'binance') {
            $wallet_new_trx->amount_recieved = $wallet_new_trx->charge - $request->fee;
        } else {
            $wallet_new_trx->amount_recieved = $wallet_new_trx->charge - $withdraw->fee;
        }
        $wallet_new_trx->to = $withdraw->recieving_address;
        $wallet_new_trx->type = '2';
        $wallet_new_trx->status = '1';
        $wallet_new_trx->trx = $withdraw->trx_id;
        $wallet_new_trx->wallet_type = 'trading';
        $wallet_new_trx->details = 'Withdraw of ' . $withdraw->amount . ' ' . $withdraw->symbol . ' From Wallet: ' . $withdraw->recieving_address;
        if ($this->provider == 'binance') {
            $wallet_new_trx->fees = ($request->amount * $fee) + $request->fee;
        } else {
            $wallet_new_trx->fees = $withdraw->fee;
        }
        $wallet_new_trx->save();
        $wallet_new_trx->clearCache();

        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New Withdraw From ' . $user->username;
        $adminNotification->click_url = route('admin.withdraw.log');
        $adminNotification->save();
        $adminNotification->clearCache();

        try {
            notify($user, 'PROVIDER_WITHDRAW', [
                "amount" => $request->amount,
                "currency" => $request->symbol,
                "trx" => $transaction->trx_id,
                "post_balance" => $transaction->post_balance,
                "charge" => $wallet_new_trx->fees,
                "recieving_address" => $request->recieving_address,
                "recieved" => $wallet_new_trx->amount_recieved
            ]);
        } catch (\Throwable $th) {
            //throw $th;
        }

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'wal_trx' => WalletsTransactions::where('user_id', $user->id)->where('symbol', $request->symbol)->latest()->get(),
                'wal' => $wallet,
                'message' => 'Withdraw order placed successfully'
            ]
        );
    }

    private function handleWithdrawalError($user, $request, $wallet, $message)
    {
        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = $request->amount . ' ' . $request->symbol . ' Withdraw Failed, add balance to ' . $this->provider . ' please.';
        $adminNotification->click_url = '#';
        $adminNotification->save();
        $adminNotification->clearCache();
        return response()->json(
            [
                'success' => true,
                'type' => 'error',
                'wal_trx' => WalletsTransactions::where('user_id', $user->id)->where('symbol', $request->symbol)->latest()->get(),
                'wal' => $wallet,
                'message' => $message
            ]
        );
    }
    public function transfer_from_trading(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
        ]);
        $user = Auth::user();

        if (Wallet::where('user_id', $user->id)->where('provider', 'funding')->where('symbol', $request->symbol)->exists() == true) {
            $from = Wallet::where('user_id', $user->id)->where('provider', $this->provider)->where('symbol', $request->symbol)->first();
            $to = Wallet::where('user_id', $user->id)->where('provider', 'funding')->where('symbol', $request->symbol)->first();
            if ($request->amount > $from->balance) {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'error',
                        'message' => 'Amount is higher than your wallet balance'
                    ]
                );
            } else {
                $transfer = new Transaction();
                $transfer->user_id = $user->id;
                $transfer->amount = getAmount($request->amount);
                $transfer->post_balance = getAmount($request->balance);
                $transfer->charge = getAmount($request->amount);
                $transfer->trx_type = '-';
                $transfer->details = 'Transfer of ' . $request->amount . ' ' . $request->symbol . ' from trading to funding wallet';
                $transfer->trx = getTrx();
                $transfer->save();
                $transfer->clearCache();

                $wallet_new_trx = new WalletsTransactions();
                $wallet_new_trx->user_id = $transfer->user_id;
                $wallet_new_trx->symbol = $request->symbol;
                $wallet_new_trx->amount = $transfer->amount;
                $wallet_new_trx->amount_recieved = $transfer->amount;
                $wallet_new_trx->charge = $request->amount;
                $wallet_new_trx->to = $to->address;
                $wallet_new_trx->type = '3';
                $wallet_new_trx->status = '1';
                $wallet_new_trx->trx = $transfer->trx;
                $wallet_new_trx->wallet_type = 'trading';
                $wallet_new_trx->details = 'Transfer of ' . $request->amount . ' ' . $request->symbol . ' from trading to funding wallet';
                $wallet_new_trx->save();
                $wallet_new_trx->clearCache();

                $from->balance -= $request->amount;
                $from->save();
                $to->balance += $request->amount;
                $to->save();

                return response()->json(
                    [
                        'success' => true,
                        'type' => 'success',
                        'wal_trx' => WalletsTransactions::where('user_id', $user->id)->where('symbol', $request->symbol)->latest()->get(),
                        'wal' => $from,
                        'message' => 'Balance Transferred Successfully'
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Create Funding Wallet first'
                ]
            );
        }
    }

    public function transfer_from_funding(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
        ]);
        $user = Auth::user();
        if (Wallet::where('user_id', $user->id)->where('provider', $this->provider)->where('symbol', $request->symbol)->exists() == true) {
            $from = Wallet::where('user_id', $user->id)->where('provider', 'funding')->where('symbol', $request->symbol)->first();
            $to = Wallet::where('user_id', $user->id)->where('provider', $this->provider)->where('symbol', $request->symbol)->first();
            if ($request->amount > $from->balance) {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'error',
                        'message' => 'Amount is higher than your wallet balance'
                    ]
                );
            } else {
                $transfer = new Transaction();
                $transfer->user_id = $user->id;
                $transfer->amount = getAmount($request->amount);
                $transfer->post_balance = getAmount($request->balance);
                $transfer->charge = getAmount($request->amount);
                $transfer->trx_type = '-';
                $transfer->currency = $request->symbol;
                $transfer->details = 'Transfer of ' . $request->amount . ' ' . $request->symbol . ' from funding to trading wallet';
                $transfer->trx = getTrx();
                $transfer->save();
                $transfer->clearCache();
                $from->balance -= $request->amount;
                $from->save();

                $wallet_new_trx = new WalletsTransactions();
                $wallet_new_trx->user_id = $transfer->user_id;
                $wallet_new_trx->symbol = $request->symbol;
                $wallet_new_trx->amount = $transfer->amount;
                $wallet_new_trx->amount_recieved = $transfer->amount;
                $wallet_new_trx->charge = $request->amount;
                $wallet_new_trx->to = $to->address;
                $wallet_new_trx->type = '4';
                $wallet_new_trx->status = '2';
                $wallet_new_trx->trx = $transfer->trx;
                $wallet_new_trx->wallet_type = 'funding';
                $wallet_new_trx->details = 'Transfer of ' . $request->amount . ' ' . $request->symbol . ' from funding to trading wallet';
                $wallet_new_trx->save();
                $wallet_new_trx->clearCache();

                $adminNotification = new AdminNotification();
                $adminNotification->user_id = $user->id;
                $adminNotification->title = 'New Transfer From ' . $user->username;
                $adminNotification->click_url = route('admin.report.wallet') . '?table[filters][status]=2&table[filters][type]=4';
                $adminNotification->save();
                $adminNotification->clearCache();

                return response()->json(
                    [
                        'success' => true,
                        'type' => 'success',
                        'wal_trx' => WalletsTransactions::where('user_id', $user->id)->where('symbol', $request->symbol)->latest()->get(),
                        'wal' => $from,
                        'message' => 'Balance Transfer Pending Approval'
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Create Funding Wallet first'
                ]
            );
        }
    }

    public function authenticate(Request $request)
    {
        if (User::where('eth_address', $request->ethAddress)->exists()) {
            $user = User::where('eth_address', $request->ethAddress)->first();
            auth()->login($user);
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Wallet Authenticated Successfully'
                ]
            );
        } else {
            return response()->json(
                [
                    'success' => false,
                    'type' => 'error',
                    'message' => 'Your Account Dont Have Connected Wallet'
                ]
            );
        }
    }

    public function connect(Request $request)
    {
        $user = Auth::user();
        $user->forceFill([
            'eth_Address' => $request->address,
        ])->save();
        return 1;
    }

    public function disconnect(Request $request)
    {
        $user = Auth::user();
        $user->forceFill([
            'eth_Address' => null,
        ])->save();
        return 1;
    }

    public function regenerate(Request $request)
    {
        $user = Auth::user();
        $wallet = Wallet::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'trading')->where('symbol', $request->symbol)->first();
        if ($this->provider == 'coinbasepro') {
            try {
                $wallet->address = $this->api->create_deposit_address($request->symbol)['address'];
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Wallet Regeneration Failed, Please check api connection'];
            }
        } else if ($this->provider == 'binance') {
            $curr = BinanceCurrencies::where('symbol', $request->symbol)->first();
            $chainss = json_decode($curr->networks, True);
            foreach ($chainss as $chain) {
                if ($chain['withdrawEnable'] == true) {
                    $chains[] = $chain;
                }
            }
            $results = array();
            if (count($chains) > 1) {
                foreach ($chains as $chain) {
                    $chainName = $this->api->safe_string($chain, 'network');
                    try {
                        $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                    } catch (Throwable $e) {
                        $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
                    }
                    if (!isset($results)) {
                        $results = array();
                    }
                    $results[$chainName] = $address;
                }
            } else {
                $chain = $this->api->safe_value($chains, 0);
                $chainName = $this->api->safe_string($chain, 'network');
                try {
                    $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                } catch (Throwable $e) {
                    $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
                }
                if (!isset($results)) {
                    $results = array();
                }
                $results[$chainName] = $address;
            }
            $results = array_filter($results);
            $wallet->addresses = json_encode($results);
            try {
                $wallet->address = reset($results)['address'];
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['error', json_decode(str_replace($this->provider . ' ', '', $e->getMessage()))->msg];
            }
        } else if ($this->provider == 'bybit') {
            try {
                $wallet->address = $this->api->fetch_deposit_address($request->symbol)['address'];
                $wallet->addresses = json_encode($this->api->fetch_deposit_addresses_by_network($request->symbol));
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
            }
        } else if ($this->provider == 'kucoin') {
            $response = $this->api->public_get_currencies_currency(array('currency' => $request->symbol));
            $currency = $this->api->safe_value($response, 'data');
            $results = array();
            if ($currency) {
                $chains = $this->api->safe_value($currency, 'chains');
                if ((count($chains) > 1) && ($request->symbol !== 'BNB')) {
                    foreach ($chains as $chain) {
                        $chainName = $this->api->safe_string($chain, 'chainName');
                        $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName, $chainName);
                        if (!isset($results)) {
                            $results = array();
                        }
                        $results[$chainName] = $address;
                    }
                } else {
                    $chain = $this->api->safe_value($chains, 0);
                    $chainName = $this->api->safe_string($chain, 'chainName');
                    $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName);
                    if (!isset($results)) {
                        $results = array();
                    }
                    $results[$chainName] = $address;
                }
                $results = array_filter($results);
                $wallet->addresses = json_encode($results);
                try {
                    $wallet->address = reset($results)['address'];
                    $wallet->save();
                    $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
                } catch (Throwable $e) {
                    $notify[] = ['error', 'API Connection Failed'];
                }
            } else {
                $notify[] = ['warning', 'Wallet Regeneration Failed, Please check api connection'];
            }
        }
        return back()->withNotify($notify);
    }

    public function admincreateWallet(Request $request)
    {
        if (Wallet::where('provider', $this->provider)->where('user_id', $request->user_id)->where('type', $request->type)->where('symbol', $request->symbol)->first()) {
            $notify[] = ['warning', 'You Have ' . $request->symbol . ' Wallet Already!'];
        } else {
            if ($request->type == 'trading') {
                $wallet = new Wallet();
                $wallet->user_id = $request->user_id;
                $wallet->provider = $this->provider;
                $wallet->symbol = $request->symbol;
                $wallet->type = 'trading';
                if ($this->provider == 'coinbasepro') {
                    try {
                        $wallet->address = $this->api->create_deposit_address($request->symbol)['address'];
                        $wallet->save();
                        $notify[] = ['success', $wallet->symbol . ' Wallet Created Successfully'];
                    } catch (Throwable $e) {
                        $notify[] = ['warning', 'Wallet Generation Failed, Please check your provider connection'];
                    }
                } else if ($this->provider == 'kucoin') {
                    $response = $this->api->public_get_currencies_currency(array('currency' => $request->symbol));
                    $currency = $this->api->safe_value($response, 'data');
                    $results = array();
                    if ($currency) {
                        $chains = $this->api->safe_value($currency, 'chains');
                        if ((count($chains) > 1) && ($request->symbol !== 'BNB')) {
                            foreach ($chains as $chain) {
                                $chainName = $this->api->safe_string($chain, 'chainName');
                                $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName, $chainName);
                                if (!isset($results)) {
                                    $results = array();
                                }
                                $results[$chainName] = $address;
                            }
                        } else {
                            $chain = $this->api->safe_value($chains, 0);
                            $chainName = $this->api->safe_string($chain, 'chainName');
                            $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName);
                            if (!isset($results)) {
                                $results = array();
                            }
                            $results[$chainName] = $address;
                        }
                        $results = array_filter($results);
                        $wallet->addresses = json_encode($results);
                        if (reset($results) != null) {
                            $wallet->address = reset($results)['address'];
                            $notify[] = ['success', $wallet->symbol . ' Wallet Created Successfully'];
                            $wallet->save();
                        } else {
                            $notify[] = ['warning', 'Wallet Generation Failed, No Address Created'];
                        }
                    } else {
                        $notify[] = ['warning', 'Wallet Generation Failed, Please check your provider connection'];
                    }
                }
            } else {
                if (Wallet::where('provider', 'funding')->where('user_id', $request->user_id)->where('type', $request->type)->where('symbol', $request->symbol)->first()) {
                    $notify[] = ['warning', 'You Have ' . $request->symbol . ' Wallet Already!'];
                } else {
                    $wallet = new Wallet();
                    $wallet->user_id = $request->user_id;
                    $wallet->symbol = $request->symbol;
                    $wallet->address = grs(34);
                    $wallet->type = 'funding';
                    $wallet->provider = 'funding';
                    $notify[] = ['success', 'Client ' . $wallet->symbol . ' Wallet Created Successfully'];
                    $wallet->save();
                }
            }
        }
        return back()->withNotify($notify);
    }

    public function adminregenerateWallet(Request $request)
    {
        $wallet = Wallet::where('provider', $this->provider)->where('user_id', $request->user_id)->where('type', 'trading')->where('symbol', $request->symbol)->first();
        if ($this->provider == 'coinbasepro') {
            try {
                $wallet->address = $this->api->create_deposit_address($request->symbol)['address'];
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['warning', 'Wallet Regeneration Failed, Please check api connection'];
            }
        } else if ($this->provider == 'binance') {
            $curr = BinanceCurrencies::where('symbol', $request->symbol)->first();
            $chainss = json_decode($curr->networks, True);
            foreach ($chainss as $chain) {
                if ($chain['withdrawEnable'] == true) {
                    $chains[] = $chain;
                }
            }
            $results = array();
            if (count($chains) > 1) {
                foreach ($chains as $chain) {
                    $chainName = $this->api->safe_string($chain, 'network');
                    try {
                        $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                    } catch (Throwable $e) {
                        $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
                    }
                    if (!isset($results)) {
                        $results = array();
                    }
                    $results[$chainName] = $address;
                }
            } else {
                $chain = $this->api->safe_value($chains, 0);
                $chainName = $this->api->safe_string($chain, 'network');
                try {
                    $address = $this->api->fetch_deposit_address($request->symbol, ["network" => $chainName]);
                } catch (Throwable $e) {
                    $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
                }
                if (!isset($results)) {
                    $results = array();
                }
                $results[$chainName] = $address;
            }
            $results = array_filter($results);
            $wallet->addresses = json_encode($results);
            try {
                $wallet->address = reset($results)['address'];
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['error', json_decode(str_replace($this->provider . ' ', '', $e->getMessage()))->msg];
            }
        } else if ($this->provider == 'bybit') {
            try {
                $wallet->address = $this->api->fetch_deposit_address($request->symbol)['address'];
                $wallet->addresses = json_encode($this->api->fetch_deposit_addresses_by_network($request->symbol));
                $wallet->save();
                $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
            } catch (Throwable $e) {
                $notify[] = ['error', str_replace($this->provider . ' ', '', $e->getMessage())];
            }
        } else if ($this->provider == 'kucoin') {
            $response = $this->api->public_get_currencies_currency(array('currency' => $request->symbol));
            $currency = $this->api->safe_value($response, 'data');
            $results = array();
            if ($currency) {
                $chains = $this->api->safe_value($currency, 'chains');
                if ((count($chains) > 1) && ($request->symbol !== 'BNB')) {
                    foreach ($chains as $chain) {
                        $chainName = $this->api->safe_string($chain, 'chainName');
                        $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName, $chainName);
                        if (!isset($results)) {
                            $results = array();
                        }
                        $results[$chainName] = $address;
                    }
                } else {
                    $chain = $this->api->safe_value($chains, 0);
                    $chainName = $this->api->safe_string($chain, 'chainName');
                    $address = $this->fetch_create_deposit_address($this->api, $request->symbol, $chainName);
                    if (!isset($results)) {
                        $results = array();
                    }
                    $results[$chainName] = $address;
                }
                $results = array_filter($results);
                $wallet->addresses = json_encode($results);
                try {
                    $wallet->address = reset($results)['address'];
                    $wallet->save();
                    $notify[] = ['success', $wallet->symbol . ' Wallet Regenerated Successfully'];
                } catch (Throwable $e) {
                    $notify[] = ['error', 'API Connection Failed'];
                }
            } else {
                $notify[] = ['warning', 'Wallet Regeneration Failed, Please check api connection'];
            }
        }
        return back()->withNotify($notify);
    }
}