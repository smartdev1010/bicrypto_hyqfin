<?php

namespace App\Http\Controllers\Extensions\Eco;

use App\Http\Controllers\Controller;
use App\Models\Eco\EcoCurrencies;
use App\Models\Eco\EcoFeesAccount;
use App\Models\Eco\EcoLedgerAccounts;
use App\Models\Eco\EcoMainnetTokens;
use App\Models\Eco\EcoMarkets;
use App\Models\Eco\EcoRealWallets;
use App\Models\Eco\EcoSettings;
use App\Models\Eco\EcoTokens;
use App\Models\Eco\EcoNetworks;
use App\Models\ThirdpartyProvider;
use App\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tatum\Tatum;
use Illuminate\Support\Facades\Validator;
use Throwable;

class EcoController extends Controller
{
    public function __construct()
    {
        $this->eco = new Tatum();
        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $this->provider = $thirdparty->title;
        } else {
            $this->provider = null;
        }
        $this->net = getNativeNetwork();
        $this->markets = EcoMarkets::where('network', $this->net)->where('status', 1)->get();
        #$this->api->set_sandbox_mode('enable');
    }
    public function trading($currency, $pair)
    {
        $market = EcoMarkets::where('symbol', $currency . '/' . $pair)->first();
        $market_info['currency'] = EcoCurrencies::where('symbol', $currency)->first();
        $market_info['pair'] = EcoCurrencies::where('symbol', $pair)->first();
        return response()->json([
            'market' => $market,
            'provider' => $this->provider,
            'market_info' => $market_info
        ]);
    }
    public function orders($currency, $pair)
    {
        $fee = getGen()->exchange_fee;
        $pfee = 1 + ($fee / 100);
        $market = EcoMarkets::where('symbol', $currency . '/' . $pair)->first();
        return response()->json([
            'fee' => $fee,
            'pfee' => $pfee,
            'market' => $market,
        ]);
    }
    public function ecos()
    {
        $ecos = [];
        if (count($this->markets)) {
            foreach ($this->markets as $market) {
                $eco[$market->symbol] = $market;
            }
            $ecos = $eco;
        }
        return response()->json([
            'ecos' => $ecos,
        ]);
    }

    public function markets()
    {
        $data = [];
        if (count($this->markets)) {
            foreach ($this->markets as $market) {
                $data[$market->pair][$market->symbol] = $market;
            }
            $markets = $data;
        }
        return response()->json([
            'markets' => $markets,
        ]);
    }


    public function chart(Request $request)
    {
        $now = Carbon::now()->getPreciseTimestamp(3);
        switch ($request->timeframe) {
            case 'MIN_1':
                $frame = 60000 * 199;
                break;
            case 'MIN_3':
                $frame = 180000 * 199;
                break;
            case 'MIN_5':
                $frame = 300000 * 199;
                break;
            case 'MIN_15':
                $frame = 900000 * 199;
                break;
            case 'MIN_30':
                $frame = 1800000 * 199;
                break;
            case 'HOUR_1':
                $frame = 3600000 * 199;
                break;
            case 'HOUR_4':
                $frame = 14400000 * 199;
                break;
            case 'HOUR_12':
                $frame = 43200000 * 199;
                break;
            case 'DAY':
                $frame = 86400000 * 199;
                break;
            case 'WEEK':
                $frame = 604800000 * 199;
                break;
            case 'MONTH':
                $frame = 2592000000 * 199;
                break;
            case 'YEAR':
                $frame = 31536000000 * 199;
                break;
            default:
                $frame = 300000;
                break;
        }
        $data = array(
            "pair" => $request->symbol,
            "from" => ($now - $frame),
            "to" => $now,
            "timeFrame" => $request->timeframe
        );
        $chart = json_decode($this->eco->getTradeChart($data));
        if (!isset($chart->message)) {
            return $chart;
        } else {
            $chart = json_decode($this->eco->getTradeChart($data));
            if (!isset($chart->message)) {
                return $chart;
            } else {
                $chart = json_decode($this->eco->getTradeChart($data));
                if (!isset($chart->message)) {
                    return $chart;
                } else {
                    $chart = json_decode($this->eco->getTradeChart($data));
                    if (!isset($chart->message)) {
                        return $chart;
                    } else {
                        $chart = json_decode($this->eco->getTradeChart($data));
                    }
                }
            }
        }
    }

    public function orderbook(Request $request, $symbol, $currency)
    {
        $BuyQuery = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $symbol . '/' . $currency,
            "tradeType" => 'BUY',
            "sort" => ["PRICE_ASC"],
        );
        $SellQuery = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $symbol . '/' . $currency,
            "tradeType" => 'SELL',
            "sort" => ["PRICE_ASC"],
        );
        $data = [];
        $BuyTrades = json_decode($this->eco->getActiveBuy($BuyQuery), true);
        $SellTrades = json_decode($this->eco->getActiveSell($SellQuery), true);

        $bids = array();
        foreach ($BuyTrades as $trade) {
            if (array_key_exists($trade['price'], $bids)) {
                $bids[$trade['price']]    = [
                    $trade['price'],
                    $bids[$trade['price']][1] + ($trade['amount'] - $trade['fill'])
                ];
            } else {
                $bids[$trade['price']] = [
                    $trade['price'],
                    $trade['amount'] - $trade['fill']
                ];
            }
        }
        $bid = array_values($bids);

        $asks = array();
        foreach ($SellTrades as $trade) {
            if (array_key_exists($trade['price'], $asks)) {
                $asks[$trade['price']]    = [
                    $trade['price'],
                    $asks[$trade['price']][1] + ($trade['amount'] - $trade['fill'])
                ];
            } else {
                $asks[$trade['price']] = [
                    $trade['price'],
                    $trade['amount'] - $trade['fill']
                ];
            }
        }
        $ask = array_values($asks);

        $data = [
            'asks' => $ask,
            'bids' => $bid,
        ];
        return $data;
    }

    public function fetch_trades(Request $request)
    {
        $query = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $request->symbol . '/' . $request->currency,
            "types" => ['BUY', 'SELL'],
            "sort" => ["CREATED_DESC"],
        );
        $trades = json_decode($this->eco->getOrderbook($query), true);
        return response()->json([
            'trades' => $trades
        ]);
    }

    public function fetch_orders(Request $request)
    {
        $user = Auth::user();
        if (EcoLedgerAccounts::where('user_id', $user->id)->where('chain', $request->symbol_chain)->where('network', $this->net)->where('currency', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol))->exists()) {
            $account = EcoLedgerAccounts::where('user_id', $user->id)->where('chain', $request->symbol_chain)->where('network', $this->net)->where('currency', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol))->first();

            $query = array(
                "id" => $account->account_id,
                "pageSize" => $request->size ?? '50',
                "offset" => $request->offset ?? '0',
                "pair" => $request->symbol . '/' . $request->currency,
                "types" => ['BUY', 'SELL'],
                "sort" => ["CREATED_DESC"],
            );
            $BuyQuery = array(
                "id" => $account->account_id,
                "pageSize" => $request->size ?? '50',
                "offset" => $request->offset ?? '0',
                "pair" => $request->symbol . '/' . $request->currency,
                "tradeType" => 'BUY',
                "sort" => ["CREATED_DESC"],
            );
            $SellQuery = array(
                "id" => $account->account_id,
                "pageSize" => $request->size ?? '50',
                "offset" => $request->offset ?? '0',
                "pair" => $request->symbol . '/' . $request->currency,
                "tradeType" => 'SELL',
                "sort" => ["CREATED_DESC"],
            );
            $BuyOrders = json_decode($this->eco->getActiveBuy($BuyQuery), true);
            $SellOrders = json_decode($this->eco->getActiveSell($SellQuery), true);
            $ClosedOrders = json_decode($this->eco->getOrderbook($query));

            return response()->json([
                'closed_orders' => $ClosedOrders,
                'open_orders' => array_merge($BuyOrders, $SellOrders)
            ]);
        } else {
            return response()->json([
                'closed_orders' => null,
                'open_orders' => null
            ]);
        }
    }

    public function cancel_order($id)
    {
        try {
            $this->eco->deleteTrade($id);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => true,
                'type' => 'error',
                'message' => $th
            ]);
        }

        return response()->json([
            'success' => true,
            'type' => 'success',
            'message' => 'Order Canceled Successfully',
        ]);
    }

    public function fetch_wallet($symbol, $address)
    {
        if (EcoTokens::where('symbol', $symbol)->exists()) {
            $token = EcoTokens::where('symbol', $symbol)->first();
        } else {
            $token = EcoMainnetTokens::where('symbol', $symbol)->first();
        }
        $networks = EcoNetworks::where('status', 1)->get();
        foreach ($networks as $network) {
            $datas[] = $network->chain;
        }
        $networks = $datas;
        $user = Auth::user();
        $wallet = Wallet::where('user_id', $user->id)->where('type', 'main')->where('address', $address)->where('symbol', $symbol)->first();
        $addresses = json_decode($wallet->addresses, true);
        $total_balance = 0;
        $data = [];
        foreach ($addresses as $item) {
            try {
                $balance = json_decode($this->eco->getAccountBalance($item['account_id']))->availableBalance;
                $total_balance += $balance;
            } catch (\Throwable $th) {
                throw $th;
            }
            if ($balance) {
                $addresses[$item['chain']] = [
                    "address" => $item['address'],
                    "memo" =>  $item['memo'],
                    "balance" =>  $balance,
                    "account_id" =>  $item['account_id'],
                    "chain" =>  $item['chain'],
                    "currency" =>  $item['currency']
                ];
            } else {
                $addresses[$item['chain']] = [
                    "address" => $item['address'],
                    "memo" =>  $item['memo'],
                    "balance" =>  0,
                    "account_id" =>  $item['account_id'],
                    "chain" =>  $item['chain'],
                    "currency" =>  $item['currency']
                ];
            }
            try {
                $data[] = json_decode($this->eco->getTransactionsByAccount(array(
                    "id" => $item['account_id'],
                    "transactionTypes" => ["DEBIT_WITHDRAWAL", "CREDIT_DEPOSIT", "CREDIT_PAYMENT"]
                )));
            } catch (\Throwable $th) {
                $wal_trx = null;
            }
        }
        $wallet->addresses = json_encode($addresses);
        $wallet->balance = $total_balance;
        $wallet->save();
        $wal_trx = [];
        foreach (array_reverse(
            $data
        )  as $items) {
            foreach ($items as $item) {
                $wal_trx[] = $item;
            }
        }
        return response()->json([
            'wal' => $wallet,
            'token' => $token,
            'wal_trx' => $wal_trx,
            'addresses' => json_decode($wallet->addresses),
            'networks' => $networks
        ]);
    }

    public function fetch_wallets()
    {
        $networks = EcoNetworks::where('status', 1)->get();
        $currencies = [];
        $cur = [];
        foreach ($networks as $network) {
            if ($network->status == 1) {
                if (EcoCurrencies::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->exists()) {
                    $cur[] = EcoCurrencies::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->get();
                }
            }
        }
        if (count($cur) > 0) {
            foreach ($cur as $data) {
                foreach ($data as $item) {
                    if ($item->postfix == null) {
                        $currencies[] = $item;
                    }
                }
            }
        } else {
        }
        if ($this->net == 'mainnet') {
            $tokens = [];
            foreach ($networks as $network) {
                if ($network->status == 1) {
                    if (EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->exists()) {
                        $datas[] = EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->get();
                    }
                }
            }
            foreach ($datas as $data) {
                foreach ($data as $item) {
                    if ($item->postfix == null) {
                        $tokens[] = $item;
                    }
                }
            }
        }
        if (Wallet::where('user_id', auth()->user()->id)->where('provider', $this->net)->exists()) {
            $wallets = Wallet::where('user_id', auth()->user()->id)->where('provider', $this->net)->get();
        }
        return response()->json([
            'wallets' => $wallets ?? null,
            'currencies' => $currencies,
            'tokens' => $tokens ?? null,
            'net' => $this->net
        ]);
    }

    public function fetch_wallet_balance(Request $request)
    {
        $user = Auth::user();
        if (isWallet($user->id, 'main', $request->symbol, $this->net) == false) {
            return response()->json([
                'symbol' => null,
                'balance' => null
            ]);
        } else {
            $wallet = Wallet::where('user_id', $user->id)->where('symbol', $request->symbol)->where('provider', $this->net)->first();
            $addresses = json_decode($wallet->addresses, true);
            try {
                $query = json_decode($this->eco->getAccountBalance($addresses[$request->chain]['account_id']));
                if (isset($query->availableBalance)) {
                    $balance = $query->availableBalance;
                }
            } catch (\Throwable $th) {
                throw $th;
            }
            return response()->json([
                'symbol' => $wallet->symbol,
                'balance' => $balance ?? null
            ]);
        }
    }

    public function create_wallet(Request $request)
    {
        $wal = EcoRealWallets::where('chain', $request->chain)->select('xpub', 'address')->first();
        $provider = EcoSettings::first();
        $user = Auth::user();
        if (!Wallet::where('user_id', $user->id)->where('symbol', $request->symbol)->where('provider', $this->net)->exists()) {
            $tokens = [];
            $currencies = EcoCurrencies::where('symbol', $request->symbol)->where('type', $this->net)->where('status', 1)->select('chain', 'symbol', 'postfix')->get();
            foreach ($currencies as $cur) {
                $tokens[] = $cur;
            }
            if ($this->net == 'mainnet') {
                if (EcoMainnetTokens::where('symbol', $request->symbol)->where('status', 1)->exists()) {
                    $mainCurrencies = EcoMainnetTokens::where('symbol', $request->symbol)->where('status', 1)->select('chain', 'symbol', 'postfix')->get();
                    foreach ($mainCurrencies as $cur) {
                        $tokens[] = $cur;
                    }
                }
            }
            $ledger = [];
            foreach ($tokens as $token) {
                if (EcoLedgerAccounts::where('chain', $token->chain)->where('user_id', $user->id)->where('currency', $token->symbol)->exists()) {
                    $ledger[$token->account_id] = EcoLedgerAccounts::where('chain', $token->chain)->where('user_id', $user->id)->where('currency', $token->symbol)->first();
                    $token->account_id = $ledger[$token->account_id]->account_id;
                    $array[] = array("accountId" => $token->account_id);
                } else {
                    $missingLedgerPayload = array(
                        "currency" => $token->symbol . ($token->postfix ?? ''),
                        "xpub" =>   $request->chain == 'BNB' ? $wal->address : $wal->xpub,
                        "customer" => array(
                            "accountingCurrency" => $provider->accounting_currency ?? 'USD',
                            "customerCountry" => $user->client_country ?? 'US',
                            "externalId" => "$user->id",
                            "providerCountry" => $provider->provider_country ?? 'US'
                        ),
                        "compliant" => false,
                        "accountCode" => "AC_$user->id",
                        "accountingCurrency" => $user->accounting_currency ?? 'USD',
                        "accountNumber" => "$user->id"
                    );

                    $account = json_decode($this->eco->createAccount($missingLedgerPayload));

                    if (!isset($account->errorCode)) {
                        $ledger[$account->id] = new EcoLedgerAccounts();
                        $ledger[$account->id]->user_id = $user->id;
                        $ledger[$account->id]->chain = $token->chain;
                        $ledger[$account->id]->network = $this->net;
                        $ledger[$account->id]->account_id = $account->id;
                        $ledger[$account->id]->customer_id = $account->customerId;
                        $ledger[$account->id]->account_code = $account->accountCode;
                        $ledger[$account->id]->account_number = $account->accountNumber;
                        $ledger[$account->id]->account_cur = $account->accountingCurrency;
                        $ledger[$account->id]->currency = $token->symbol;
                        $ledger[$account->id]->postfix = $token->postfix;
                        $ledger[$account->id]->frozen = $account->frozen;
                        $ledger[$account->id]->active = $account->active;
                        $ledger[$account->id]->save();

                        $token->account_id = $account->id;
                        $array[] = array("accountId" => $account->id);
                    } else {
                        return response()->json([
                            'type' => 'error',
                            'message' => $account->message
                        ]);
                    }
                }
            }
            $payload = array(
                "addresses" => $array
            );
            $addresses = json_decode($this->eco->generateDepositAddresses($payload));
            if (!isset($addresses->errorCode)) {
                foreach ($addresses as $address) {
                    for ($i = 0; $i < count($tokens); $i++) {
                        if ($tokens[$i]->symbol . ($tokens[$i]->postfix ?? '') == $address->currency) {
                            $tokens[$i]->address = $address->address;
                            $tokens[$i]->index = $address->derivationKey;
                            if ($request->chain == 'BNB') {
                                $tokens[$i]->memo = $address->memo;
                            }
                        }
                    }
                }

                $wallet = new Wallet();
                $wallet->user_id = $user->id;
                $wallet->symbol = $request->symbol;
                $wallet->address = $tokens[0]->address;
                $wallet->type = 'main';
                $wallet->provider = $this->net;

                foreach ($tokens as $token) {
                    $ledger[$token->account_id]->address = $token->address;
                    $ledger[$token->account_id]->index = $token->index;
                    $ledger[$token->account_id]->save();
                    $addressesData[$token->chain] = [
                        "address" => $token->address,
                        "memo" =>  $token->memo ?? "",
                        "balance" =>  0,
                        "account_id" =>  $token->account_id,
                        "chain" =>  $token->chain,
                        "currency" =>  $token->symbol,
                        "postfix" =>  $token->postfix ?? ''
                    ];
                }

                $wallet->addresses = json_encode($addressesData);
                $wallet->save();

                foreach ($tokens as $token) {
                    $account = EcoLedgerAccounts::where('account_id', $token->account_id)->first();
                    $account->wallet_id = $wallet->id;
                    $account->save();
                }

                return response()->json([
                    'type' => 'success',
                    'message' => 'Wallet Created Successfully',
                    'addresses' => $addresses,
                ]);
            } else {
                return response()->json([
                    'type' => 'error',
                    'message' => $addresses->message
                ]);
            }
        } else {
            return response()->json([
                'type' => 'error',
                'message' => 'Wallet Already Exists'
            ]);
        }
    }

    public function deposit_address_create($id)
    {
        $address = json_decode($this->eco->generateDepositAddress($id));
        if ($address->statusCode) {
            return response()->json([
                'type' => 'error',
                'message' => $address->data
            ]);
        } else {
            return response()->json([
                'message' => $address
            ]);
        }
    }

    public function place_order(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric',
            'price' => 'numeric',
        ]);
        if ($validate->fails()) {
            return response()->json($validate->errors());
        }
        $user = Auth::user();
        if (isWallet($user->id, 'main', (strpos($request->currency, "_") ? substr($request->currency, 0, strpos($request->currency, "_")) : $request->currency), $this->net) == true) {
            if (isWallet($user->id, 'main', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol), $this->net) == true) {
                $ws = getWallet($user->id, 'main', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol), $this->net);
                $wc = getWallet($user->id, 'main', (strpos($request->currency, "_") ? substr($request->currency, 0, strpos($request->currency, "_")) : $request->currency), $this->net);
                $a_s = json_decode($ws->addresses, true);
                $a_c = json_decode($wc->addresses, true);
                if ($request->type == 'BUY') {
                    if ($a_c[$request->currency_chain]['balance'] > $request->amount * $request->price) {
                        if (EcoFeesAccount::where('chain', $request->currency_chain)->where('network', $this->net)->where('symbol', (strpos($request->currency, "_") ? substr($request->currency, 0, strpos($request->currency, "_")) : $request->currency))->exists()) {
                            $buyer_fees = EcoFeesAccount::where('chain', $request->currency_chain)->where('network', $this->net)->where('symbol', (strpos($request->currency, "_") ? substr($request->currency, 0, strpos($request->currency, "_")) : $request->currency))->first();
                            $query = array(
                                "type" => 'BUY',
                                "price" => $request->price,
                                "amount" => $request->amount,
                                "pair" => $request->symbol . '/' . $request->currency,
                                "currency1AccountId" => $a_s[$request->symbol_chain]['account_id'],
                                "currency2AccountId" => $a_c[$request->currency_chain]['account_id'],
                                "fee" => $request->taker,
                                "feeAccountId" => $buyer_fees->account_id,
                                "attr" => array(
                                    "sealDate" => floor(microtime(true) * 1000)
                                )
                            );
                        } else {
                            return response()->json(
                                [
                                    'success' => false,
                                    'type' => 'error',
                                    'message' => $request->currency . ' fees account not found',
                                ]
                            );
                        }
                    } else {
                        return response()->json(
                            [
                                'success' => false,
                                'type' => 'error',
                                'message' => $request->currency . ' balance less than order amount',
                            ]
                        );
                    }
                } else {
                    if ($a_s[$request->symbol_chain]['balance'] > $request->amount) {
                        if (EcoFeesAccount::where('chain', $request->symbol_chain)->where('network', $this->net)->where('symbol', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol))->exists()) {
                            $seller_fees = EcoFeesAccount::where('chain', $request->symbol_chain)->where('network', $this->net)->where('symbol', (strpos($request->symbol, "_") ? substr($request->symbol, 0, strpos($request->symbol, "_")) : $request->symbol))->first();
                            $query = array(
                                "type" => 'SELL',
                                "price" => $request->price,
                                "amount" => $request->amount,
                                "pair" => $request->symbol . '/' . $request->currency,
                                "currency1AccountId" => $a_s[$request->symbol_chain]['account_id'],
                                "currency2AccountId" => $a_c[$request->currency_chain]['account_id'],
                                "fee" => $request->maker,
                                "feeAccountId" => $seller_fees->account_id,
                                "attr" => array(
                                    "sealDate" => floor(microtime(true) * 1000)
                                )
                            );
                        } else {
                            return response()->json(
                                [
                                    'success' => false,
                                    'type' => 'error',
                                    'message' => $request->symbol . ' fees account not found',
                                ]
                            );
                        }
                    } else {
                        return response()->json(
                            [
                                'success' => false,
                                'type' => 'error',
                                'message' => $request->symbol . ' balance less than order amount',
                            ]
                        );
                    }
                }
                if (getPlatform('trading')->practice != 1) {
                    try {
                        $create_order = json_decode($this->eco->storeTrade($query));
                        if ($create_order->id) {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'success',
                                    'message' => 'Order Placed Successfully: (' . $request->type . ' ' . $request->amount . ' ' . $request->symbol . ')',
                                ]
                            );
                        } else {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'error',
                                    'message' => $create_order->message,
                                ]
                            );
                        }
                    } catch (Throwable $e) {
                        if ($create_order->message == 'Your request is only available to registered API key users. Get your API key for free: https://dashboard.tatum.io') {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'error',
                                    'message' => 'Order Failed, Try Again',
                                ]
                            );
                        } else {
                            return response()->json(
                                [
                                    'success' => true,
                                    'type' => 'error',
                                    'message' => $create_order->message,
                                ]
                            );
                        }
                    }
                } else {
                    return response()->json(
                        [
                            'success' => true,
                            'type' => 'warning',
                            'message' => 'Trading Disabled, Practice only'
                        ]
                    );
                }
            } else {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'warning',
                        'message' => 'Create Wallets Firstly'
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Create Wallets Firstly'
                ]
            );
        }
    }

    public function order_balance($id)
    {
        return json_decode($this->eco->getAccountBalance($id))->availableBalance;
    }

    public function withdraw(Request $request)
    {
        $real_wallet = EcoRealWallets::where('chain', $request->chain)->first();
        $user = Auth::user();
        $sender = EcoLedgerAccounts::where('user_id', $user->id)->where('chain', $request->chain)->where('network', $this->net)->where('currency', $request->symbol)->first();
        if (in_array($request->chain, ['ETH', 'BSC', 'MATIC', 'KLAY'])) {
            $payload = array(
                "address" => $request->withdraw_address,
                "amount" => $request->amount,
                "privateKey" => $real_wallet->private_key,
                "senderAccountId" => $sender->account_id
            );
        } else if (in_array($request->chain, ['TRON'])) {
            $payload = array(
                "address" => $request->withdraw_address,
                "amount" => $request->amount,
                "index" => $sender->index,
                "mnemonic" => $real_wallet->mnemonic,
                "senderAccountId" => $sender->account_id
            );
        } else if ($request->chain == 'CELO') {
            $payload = array(
                "address" => $request->withdraw_address,
                "amount" => $request->amount,
                "privateKey" => $real_wallet->private_key,
                "senderAccountId" => $sender->account_id,
                "feeCurrency" => 'CELO'
            );
        } else if (in_array($request->chain, ['BTC', 'BCH', 'LTC', 'DOGE'])) {
            $payload = array(
                "senderAccountId" => $sender->account_id,
                "address" => $request->withdraw_address,
                "amount" => $request->amount,
                "mnemonic" => $real_wallet->mnemonic,
                "xpub" => $real_wallet->xpub
            );
        }
        $withdraw = json_decode($this->eco->Transfer($request->chain, $payload));
        if (isset($withdraw->errorCode)) {
            if (isset($withdraw->cause)) {
                return response()->json(
                    [
                        'success' => false,
                        'type' => 'error',
                        'data' => $withdraw,
                        'message' => $withdraw->cause
                    ]
                );
            } else {
                return response()->json(
                    [
                        'success' => false,
                        'type' => 'error',
                        'data' => $withdraw,
                        'message' => $withdraw->message
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => $request->amount . " " . $request->symbol . " withdraw is processing"
                ]
            );
        }
    }

    public function transfer(array $data)
    {
        $result = $this->eco->storeTransaction($data);
        return $result;
    }
}