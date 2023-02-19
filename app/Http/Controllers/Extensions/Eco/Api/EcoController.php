<?php

namespace App\Http\Controllers\Extensions\Eco\Api;

use App\Http\Controllers\Controller;
use App\Models\AdminNotification;
use App\Models\Eco\EcoFeesAccount;
use App\Models\Eco\EcoFeesLog;
use App\Models\Eco\EcoLog;
use App\Models\Eco\EcoMainnetTokens;
use App\Models\Eco\EcoMarkets;
use App\Models\Eco\EcoRealWallets;
use App\Models\Eco\EcoTokens;
use App\Models\Eco\EcoNetworks;
use App\Models\Eco\EcoSettings;
use App\Models\Eco\EcoWallet;
use App\Models\Tokens;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tatum\Tatum;
use Throwable;

class EcoController extends Controller
{
    public $eco;
    public $provider;
    public $net;
    public $markets;
    public function __construct()
    {
        $this->eco = new Tatum();
        $this->net = getNativeNetwork();
        $this->markets = EcoMarkets::where('network', $this->net)->where('status', 1)->select([
            "symbol",
            "currency",
            "currency_chain",
            "pair",
            "pair_chain",
            "type",
            "maker",
            "taker",
            "min_amount",
            "max_amount",
            "status"
        ])->get();
        #$this->api->set_sandbox_mode('enable');
    }

    public function markets()
    {
        return $this->markets;
    }

    public function trading($currency, $pair)
    {
        $market = EcoMarkets::where('symbol', $currency . '/' . $pair)->first();
        $market_info['currency'] = EcoTokens::where('symbol', $currency)->first();
        $market_info['pair'] = EcoTokens::where('symbol', $pair)->first();
        return [
            'market' => $market,
            'market_info' => $market_info
        ];
    }

    public function chart(Request $request)
    {
        $request->validate([
            'symbol' => 'required|string|exists:eco_markets',
            'timeframe' => 'required|in:MIN_1,MIN_3,MIN_5,MIN_15,MIN_30,HOUR_1,HOUR_4,HOUR_12,DAY,WEEK,MONTH,YEAR',
        ]);
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
            return [];
        }
    }

    public function orderbook(Request $request)
    {
        $request->validate([
            'symbol' => 'required|string',
            'currency' => 'required|string',
            'size' => 'int|min:0|max:50',
            'offset' => 'int|min:0',
        ]);
        $BuyQuery = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => strtoupper($request->symbol) . '/' . strtoupper($request->currency),
            "tradeType" => 'BUY',
            "sort" => ["PRICE_ASC"],
        );
        $SellQuery = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => strtoupper($request->symbol) . '/' . strtoupper($request->currency),
            "tradeType" => 'SELL',
            "sort" => ["PRICE_ASC"],
        );
        $BuyTrades = json_decode($this->eco->getActiveBuy($BuyQuery), true);
        if (isset($BuyTrades->errorCode)) {
            return $BuyTrades;
        }
        $SellTrades = json_decode($this->eco->getActiveSell($SellQuery), true);
        if (isset($SellTrades->errorCode)) {
            return $SellTrades;
        }

        $data = [];
        $bids = array();
        if (isset($BuyTrades[0]['price'])) {
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
        }
        $asks = array();
        if (isset($SellTrades[0]['price'])) {
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
        }
        $data = [
            'asks' => $ask ?? [],
            'bids' => $bid ?? [],
        ];
        return $data;
    }

    public function trades(Request $request)
    {
        $request->validate([
            'symbol' => 'required|string',
            'currency' => 'required|string',
            'size' => 'int|min:0|max:50',
            'offset' => 'int|min:0',
        ]);
        $query = array(
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $request->symbol . '/' . $request->currency,
            "types" => ['BUY', 'SELL'],
            "sort" => ["CREATED_DESC"],
        );
        return json_decode($this->eco->getOrderbook($query), true);
    }

    public function orders(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'symbol' => 'required|string',
            'symbol_chain' => 'required|string',
            'currency' => 'required|string',
            'size' => 'int|min:0|max:50',
            'offset' => 'int|min:0',
        ]);

        $token = Tokens::with(['user'])->where('token', $request->token)->first();
        if (!EcoWallet::where('user_id', $token->user->id)->where('chain', $request->symbol_chain)->where('network', $this->net)->where('symbol', $request->symbol)->exists()) {

            return [
                'closed_orders' => null,
                'open_orders' => null
            ];
        }

        $wallet = EcoWallet::where('user_id', $token->user->id)->where('chain', $request->symbol_chain)->where('network', $this->net)->where('symbol', $request->symbol)->first();

        $query = array(
            "id" => $wallet->account_id,
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $request->symbol . '/' . $request->currency,
            "types" => ['BUY', 'SELL'],
            "sort" => ["CREATED_DESC"],
        );
        $BuyQuery = array(
            "id" => $wallet->account_id,
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $request->symbol . '/' . $request->currency,
            "tradeType" => 'BUY',
            "sort" => ["CREATED_DESC"],
        );
        $SellQuery = array(
            "id" => $wallet->account_id,
            "pageSize" => $request->size ?? '50',
            "offset" => $request->offset ?? '0',
            "pair" => $request->symbol . '/' . $request->currency,
            "tradeType" => 'SELL',
            "sort" => ["CREATED_DESC"],
        );
        $BuyOrders = json_decode($this->eco->getActiveBuy($BuyQuery), true);
        $SellOrders = json_decode($this->eco->getActiveSell($SellQuery), true);
        $ClosedOrders = json_decode($this->eco->getOrderbook($query));

        return [
            'closed_orders' => $ClosedOrders,
            'open_orders' => array_merge($BuyOrders, $SellOrders)
        ];
    }

    // public function cancel_order(Request $request)
    // {
    //     $request->validate([
    //         'token' => 'required|string|exists:tokens',
    //         'id' => 'required|string',
    //     ]);
    //     try {
    //         $this->eco->deleteTrade($request->id);
    //     } catch (\Throwable $th) {
    //         return [
    //             'success' => true,
    //             'result' => 'error',
    //             'message' => $th
    //         ];
    //     }

    //     return [
    //         'success' => true,
    //         'result' => 'success',
    //         'message' => 'Order Canceled Successfully',
    //     ];
    // }



    public function place_order(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'symbol' => 'required|string',
            'currency' => 'required|string',
            'amount' => 'required|numeric',
            'result' => 'required|in:BUY,SELL',
            'price' => 'numeric',
        ]);
        $user = Auth::user();
        if (EcoWallet::where('user_id', $user->id)->where('symbol', $request->currency)->where('network', $this->net)->exists()) {
            if (EcoWallet::where('user_id', $user->id)->where('symbol', $request->symbol)->where('network', $this->net)->exists()) {
                $ws = EcoWallet::where('user_id', $user->id)->where('symbol', $request->symbol)->where('network', $this->net)->first();
                $wc = EcoWallet::where('user_id', $user->id)->where('symbol', $request->currency)->where('network', $this->net)->first();
                if ($wc->postfix == "") {
                    $wc->postfix = null;
                    $wc->save();
                }
                if ($ws->postfix == "") {
                    $ws->postfix = null;
                    $ws->save();
                }
                if ($request->type == 'BUY') {
                    if ($wc->balance > $request->amount * $request->price) {
                        if ($wc->postfix != null ? EcoFeesAccount::where('chain', $wc->chain)->where('network', $this->net)->where('symbol', $wc->currency)->where('postfix', $wc->postfix)->exists() : EcoFeesAccount::where('chain', $wc->chain)->where('network', $this->net)->where('symbol', $wc->currency)->where('postfix', $wc->postfix)->exists()) {
                            $buyer_fees = $wc->postfix != null ? EcoFeesAccount::where('chain', $wc->chain)->where('network', $this->net)->where('symbol', $wc->currency)->where('postfix', $wc->postfix)->first() : EcoFeesAccount::where('chain', $wc->chain)->where('network', $this->net)->where('symbol', $wc->currency)->where('postfix', $wc->postfix)->first();
                            $query = array(
                                "type" => 'BUY',
                                "price" => "$request->price",
                                "amount" => "$request->amount",
                                "pair" => $request->symbol . '/' . $request->currency,
                                "currency1AccountId" => $ws->account_id,
                                "currency2AccountId" => $wc->account_id,
                                "fee" => $request->taker,
                                "feeAccountId" => $buyer_fees->account_id,
                                "attr" => array(
                                    "sealDate" => floor(microtime(true) * 1000)
                                )
                            );
                        } else {
                            return
                                [
                                    'success' => false,
                                    'result' => 'error',
                                    'message' => $request->currency . ' fees account not found',
                                ];
                        }
                    } else {
                        return
                            [
                                'success' => false,
                                'result' => 'error',
                                'message' => $request->currency . ' balance less than order amount',
                            ];
                    }
                } else {
                    if ($ws->balance > $request->amount) {
                        if ($ws->postfix != null ? EcoFeesAccount::where('chain', $ws->chain)->where('network', $this->net)->where('symbol', $ws->currency)->where('postfix', $ws->postfix)->exists() : EcoFeesAccount::where('chain', $ws->chain)->where('network', $this->net)->where('symbol', $ws->currency)->exists()) {
                            $seller_fees = $ws->postfix != null ? EcoFeesAccount::where('chain', $ws->chain)->where('network', $this->net)->where('symbol', $ws->currency)->where('postfix', $ws->postfix)->first() : EcoFeesAccount::where('chain', $ws->chain)->where('network', $this->net)->where('symbol', $ws->currency)->first();
                            $query = array(
                                "type" => 'SELL',
                                "price" => "$request->price",
                                "amount" => "$request->amount",
                                "pair" => $request->symbol . '/' . $request->currency,
                                "currency1AccountId" => $ws->account_id,
                                "currency2AccountId" => $wc->account_id,
                                "fee" => $request->maker,
                                "feeAccountId" => $seller_fees->account_id,
                                "attr" => array(
                                    "sealDate" => floor(microtime(true) * 1000)
                                )
                            );
                        } else {
                            return
                                [
                                    'success' => false,
                                    'result' => 'error',
                                    'message' => $request->symbol . ' fees account not found',
                                ];
                        }
                    } else {
                        return
                            [
                                'success' => false,
                                'result' => 'error',
                                'message' => $request->symbol . ' balance less than order amount',
                            ];
                    }
                }
                if (getPlatform('trading')->practice != 1) {
                    try {
                        $create_order = json_decode($this->eco->storeTrade($query));
                        if ($create_order->id) {
                            return
                                [
                                    'success' => true,
                                    'result' => 'success',
                                    'message' => 'Order Placed Successfully: (' . $request->type . ' ' . $request->amount . ' ' . $request->symbol . ')',
                                ];
                        } else {
                            return
                                [
                                    'success' => true,
                                    'result' => 'error',
                                    'message' => $create_order->message,
                                    'messages' => $create_order->data,
                                ];
                        }
                    } catch (Throwable $e) {
                        if (isset($create_order->message) && $create_order->message == 'Your request is only available to registered API key users. Get your API key for free: https://dashboard.tatum.io') {
                            return
                                [
                                    'success' => true,
                                    'result' => 'error',
                                    'message' => 'Order Failed, Try Again',
                                ];
                        } else {
                            return
                                [
                                    'success' => true,
                                    'result' => 'error',
                                    'message' => $create_order->message,
                                    'messages' => $create_order->data,
                                ];
                        }
                    }
                } else {
                    return
                        [
                            'success' => true,
                            'result' => 'warning',
                            'message' => 'Trading Disabled, Practice only'
                        ];
                }
            } else {
                return
                    [
                        'success' => true,
                        'result' => 'warning',
                        'message' => 'Create ' . $request->symbol . ' Wallet First'
                    ];
            }
        } else {
            return
                [
                    'success' => true,
                    'result' => 'warning',
                    'message' => 'Create ' . $request->currency . ' Wallet First'
                ];
        }
    }

    public function wallet(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'currency' => 'required|string|exists:eco_wallets',
            'chain' => 'required|string|exists:eco_wallets',
            'address' => 'required|string|exists:eco_wallets',
        ]);
        $total_balance = 0;
        $addresses = [];
        $token = Tokens::with(['user'])->where('token', $request->token)->first();
        if ($this->net == 'mainnet' && EcoMainnetTokens::where('symbol', $request->currency)->where('status', 1)->exists()) {
            $coins = [];
            $mainCurrencies = EcoMainnetTokens::where('symbol', $request->currency)->where('status', 1)->select('chain', 'symbol', 'postfix', 'withdraw_fee', 'withdraw_min', 'withdraw_max')->get();
            foreach ($mainCurrencies as $cur) {
                $coins[] = $cur;
            }
            $currencies = EcoTokens::where('symbol', $request->currency)->where('network', $this->net)->where('status', 1)->select('chain', 'symbol', 'withdraw_fee', 'withdraw_min', 'withdraw_max')->get();
            foreach ($currencies as $cur) {
                $coins[] = $cur;
            }
            foreach ($coins as $key => $coin) {
                if (EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->exists()) {
                    $wallet = EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->first();
                    try {
                        $balance = json_decode($this->eco->getAccountBalance($wallet->account_id));
                        if (isset($balance->availableBalance)) {
                            $wallet->balance = getAmount($balance->availableBalance);
                            $wallet->save();
                        }
                    } catch (\Throwable $th) {
                        throw $th;
                    }
                    $total_balance = getAmount($total_balance + $wallet->balance);
                    $addresses[$wallet->chain] = $wallet;
                    $log[$wallet->chain] = $wallet->log;
                    $addresses[$wallet->chain]['withdraw_fee'] = $coin->withdraw_fee;
                    $addresses[$wallet->chain]['withdraw_min'] = $coin->withdraw_min;
                    $addresses[$wallet->chain]['withdraw_max'] = $coin->withdraw_max;
                    $addresses[$wallet->chain]['withdraw_memo'] = $coin->withdraw_memo;
                    $addresses[$wallet->chain]['has_memo'] = $coin->has_memo;
                }
            }
            foreach ($coins as $key => $coin) {
                if (EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->exists()) {
                    $wallet = EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->first();
                    if ($key == 0) {
                        $wallet->total_balance = $total_balance;
                    }
                }
            }
        } else if (EcoWallet::where('symbol', $request->currency)->where('address', $request->address)->where('user_id', $token->user->id)->where('network', $this->net)->exists()) {
            $wallet = EcoWallet::where('symbol', $request->currency)->where('address', $request->address)->where('user_id', $token->user->id)->where('network', $this->net)->first();
            $coin = EcoTokens::where('chain', $wallet->chain)->where('symbol', $request->currency)->where('network', $this->net)->where('status', 1)->select('chain', 'symbol', 'withdraw_fee', 'withdraw_min', 'withdraw_max')->first();

            try {
                $balance = json_decode($this->eco->getAccountBalance($wallet->account_id));
                if (isset($balance->availableBalance)) {
                    $wallet->balance = getAmount($balance->availableBalance);
                    $wallet->save();
                }
            } catch (\Throwable $th) {
                throw $th;
            }
            $total_balance = $wallet->balance;
            $addresses[$wallet->chain] = $wallet;
            $log[$wallet->chain] = $wallet->log;
            $addresses[$wallet->chain]['withdraw_fee'] = $coin->withdraw_fee;
            $addresses[$wallet->chain]['withdraw_min'] = $coin->withdraw_min;
            $addresses[$wallet->chain]['withdraw_max'] = $coin->withdraw_max;
            $addresses[$wallet->chain]['withdraw_memo'] = $coin->withdraw_memo;
            $addresses[$wallet->chain]['has_memo'] = $coin->has_memo;
        }
        $logs = [];
        foreach ($log as $chain => $item) {
            foreach ($item as $value) {
                $value->chain = $chain;
                $logs[] = $value;
            }
        }
        return [
            'wal' => $wallet,
            'addresses' => arrayToObject($addresses),
            'logs' => $logs,
        ];
    }

    public function fetch_wallet_logs($symbol, $address)
    {
        $user = Auth::user();
        $data = [];
        if ($this->net == 'mainnet' && EcoMainnetTokens::where('symbol', $symbol)->where('status', 1)->exists()) {
            $tokens = [];
            $mainCurrencies = EcoMainnetTokens::where('symbol', $symbol)->where('status', 1)->select('chain', 'symbol', 'postfix', 'withdraw_fee', 'withdraw_min', 'withdraw_max')->get();
            foreach ($mainCurrencies as $cur) {
                $tokens[] = $cur;
            }
            $currencies = EcoTokens::where('symbol', $symbol)->where('network', $this->net)->where('status', 1)->select('chain', 'symbol', 'withdraw_fee', 'withdraw_min', 'withdraw_max')->get();
            foreach ($currencies as $cur) {
                $tokens[] = $cur;
            }
            foreach ($tokens as $key => $token) {
                if (EcoWallet::where('chain', $token->chain)->where('user_id', $user->id)->where('symbol', $token->symbol . ($token->postfix ?? ''))->where('network', $this->net)->exists()) {
                    $wallet = EcoWallet::where('chain', $token->chain)->where('user_id', $user->id)->where('symbol', $token->symbol . ($token->postfix ?? ''))->where('network', $this->net)->first();
                    $data[$token->chain] = json_decode($this->eco->getTransactionsByAccount(array(
                        "id" => $wallet->account_id,
                        "transactionTypes" => ["CREDIT_DEPOSIT"]
                    )));
                    if (count($data[$token->chain]) > 0) {
                        if ($wallet->status == 2) {
                            $query = json_decode($this->eco->gasPumpCheckActivation($token->chain, $wallet->activation_trx), true);
                            if ($query['valid'][0]['index'] == $wallet->index) {
                                $wallet->status = 1;
                                $wallet->save();
                            }
                        }
                        if ($wallet->status == 0) {
                            $real_wallet = EcoRealWallets::where('chain', $token->chain)->first();
                            $payload = array(
                                "chain" => $token->chain,
                                "owner" => $real_wallet->address,
                                "from" => $wallet->index,
                                "to" => $wallet->index,
                                "feeLimit" => 600,
                                "fromPrivateKey" => $real_wallet->private_key
                            );
                            $query = json_decode($this->eco->gasPumpActivate($payload));
                            if (isset($query->txId)) {
                                $wallet->activation_trx = $query->txId;
                                $wallet->status = 2;
                                $wallet->save();
                            } else {
                                $adminNotification = new AdminNotification();
                                $adminNotification->user_id = $user->id;
                                $adminNotification->title = 'Wallet failed to activate by ' . $user->username;
                                $adminNotification->click_url = '#';
                                $adminNotification->save();
                            }
                        }
                    }
                    foreach ($data[$token->chain] as $item) {
                        if (!EcoLog::where('txid', $item->txId)->exists()) {
                            $new_log = new EcoLog();
                            $new_log->wallet_id = $wallet->id;
                            $new_log->amount = $item->amount;
                            $new_log->ref_id = $item->reference;
                            $new_log->txid = $item->txId;
                            $new_log->type = 1;
                            $new_log->status = 1;
                            $new_log->save();

                            // $adminNotification = new AdminNotification();
                            // $adminNotification->user_id = $user->id;
                            // $adminNotification->title = 'New Deposit by ' . $user->username;
                            // $adminNotification->click_url = '#';
                            // $adminNotification->save();
                        }
                    }
                    $log[$wallet->chain] = $wallet->log;
                }
            }
        } else if (EcoWallet::where('symbol', $symbol)->where('address', $address)->where('user_id', $user->id)->where('network', $this->net)->exists()) {
            $wallet = EcoWallet::where('symbol', $symbol)->where('address', $address)->where('user_id', $user->id)->where('network', $this->net)->first();
            $data[$wallet->chain] = json_decode($this->eco->getTransactionsByAccount(array(
                "id" => $wallet->account_id,
                "transactionTypes" => ["CREDIT_DEPOSIT"]
            )));

            if (count($data[$wallet->chain]) > 0) {
                if ($wallet->status == 2) {
                    $query = json_decode($this->eco->gasPumpCheckActivation($wallet->chain, $wallet->activation_trx), true);
                    if ($query['valid'][0]['index'] == $wallet->index) {
                        $wallet->status = 1;
                        $wallet->save();
                    }
                }
                if ($wallet->status == 0) {
                    $real_wallet = EcoRealWallets::where('chain', $wallet->chain)->first();
                    $payload = array(
                        "chain" => $wallet->chain,
                        "owner" => $real_wallet->address,
                        "from" => $wallet->index,
                        "to" => $wallet->index,
                        "feeLimit" => 600,
                        "fromPrivateKey" => $real_wallet->private_key
                    );
                    $query = json_decode($this->eco->gasPumpActivate($payload));
                    if (isset($query->txId)) {
                        $wallet->activation_trx = $query->txId;
                        $wallet->status = 2;
                        $wallet->save();
                    } else {
                        $adminNotification = new AdminNotification();
                        $adminNotification->user_id = $user->id;
                        $adminNotification->title = 'Wallet failed to activate by ' . $user->username;
                        $adminNotification->click_url = '#';
                        $adminNotification->save();
                    }
                }
            }
            foreach ($data[$wallet->chain] as $item) {
                if (!EcoLog::where('txid', $item->txId)->exists()) {
                    $new_log = new EcoLog();
                    $new_log->wallet_id = $wallet->id;
                    $new_log->amount = $item->amount;
                    $new_log->ref_id = $item->reference;
                    $new_log->txid = $item->txId;
                    $new_log->type = 1;
                    $new_log->status = 1;
                    $new_log->save();
                }
            }
            $log[$wallet->chain] = $wallet->log;
        }

        $logs = [];
        foreach ($log as $chain => $item) {
            foreach ($item as $value) {
                $value->chain = $chain;
                $logs[] = $value;
            }
        }
        return [
            'logs' => $logs
        ];
    }

    public function fetch_wallets()
    {
        $networks = EcoNetworks::where('status', 1)->get();
        $user = Auth::user();
        $currencies = [];
        $cur = [];
        $datas = [];
        $tokens = [];
        $wallets = [];
        foreach ($networks as $network) {
            if (EcoTokens::where('chain', $network->chain)->where('status', 1)->where('network', $this->net)->exists()) {
                $cur[] = EcoTokens::where('chain', $network->chain)->where('status', 1)->where('network', $this->net)->select('chain', 'symbol', 'network')->get();
            }
            if ($this->net == 'mainnet') {
                if (EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->exists()) {
                    $datas[] = EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->get();
                }
            }
        }
        if (count($cur) > 0) {
            foreach ($cur as $data) {
                foreach ($data as $item) {
                    if (!strpos($item->symbol, '_') !== false) {
                        $currencies[] = $item;
                    }
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
        if (EcoWallet::where('user_id', $user->id)->where('network', $this->net)->exists()) {
            $wals = EcoWallet::where('user_id', $user->id)->where('network', $this->net)->get();
            foreach ($wals as $wal) {
                if (!strpos($wal->symbol, '_') !== false) {
                    $wallets[] = $wal;
                }
                $wal->total_balance = EcoWallet::where('user_id', $user->id)->where('currency', $wal->currency)->sum('balance');
                $wal->save();
            }
        }
        return [
            'wallets' => $wallets,
            'currencies' => $currencies,
            'tokens' => $tokens,
            'net' => $this->net
        ];
    }

    public function fetch_wallet_balance(Request $request)
    {
        $user = Auth::user();
        if (EcoWallet::where('chain', $request->chain)->where('user_id', $user->id)->where('currency', $request->symbol)->where('network', $this->net)->exists()) {
            $wallet = EcoWallet::where('chain', $request->chain)->where('user_id', $user->id)->where('currency', $request->symbol)->where('network', $this->net)->first();
            if ($wallet->account_id != null) {
                $balance = json_decode($this->eco->getAccountBalance($wallet->account_id));
                if (!isset($balance->errorCode)) {
                    $wallet->balance = $balance->availableBalance;
                    $wallet->save();
                }
            }
        }
        return [
            'symbol' => $wallet->symbol ?? null,
            'balance' => $wallet->balance ?? null
        ];
    }

    public function create_wallet(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'symbol' => 'required|string',
        ]);
        $token = Tokens::with(['user'])->where('token', $request->token)->first();
        $networks = EcoNetworks::where('status', 1)->get();
        $provider = EcoSettings::first();
        $chains = [];
        foreach ($networks as $network) {
            $chains[] = $network->chain;
        }
        $coins = [];
        $report = [];
        $currencies = EcoTokens::where('symbol', $request->symbol)->where('network', $this->net)->where('status', 1)->select('chain', 'symbol')->get();
        foreach ($currencies as $cur) {
            $coins[] = $cur;
        }
        if ($this->net == 'mainnet') {
            if (EcoMainnetTokens::where('symbol', $request->symbol)->where('status', 1)->exists()) {
                $mainCurrencies = EcoMainnetTokens::where('symbol', $request->symbol)->where('status', 1)->select('chain', 'symbol', 'postfix')->get();
                foreach ($mainCurrencies as $cur) {
                    $coins[] = $cur;
                }
            }
        }
        foreach ($coins as $key => $coin) {
            if (in_array($coin->chain, ['ETH', 'CELO', 'BSC', 'ONE', 'KLAY', 'MATIC', 'TRON'])) {
                $id = $token->user->id;
                $missingLedgerPayload = array(
                    "currency" => $coin->symbol . ($coin->postfix ?? ''),
                    "customer" => array(
                        "accountingCurrency" => $provider->accounting_currency ?? 'USD',
                        "customerCountry" => $token->user->client_country ?? 'US',
                        "externalId" => "$id",
                        "providerCountry" => $provider->provider_country ?? 'US'
                    ),
                    "accountCode" => "AC_$id",
                    "accountingCurrency" => $token->user->accounting_currency ?? 'USD',
                    "accountNumber" => "$id"
                );
                if (EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->exists()) {
                    $wallet = EcoWallet::where('chain', $coin->chain)->where('user_id', $token->user->id)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('network', $this->net)->first();

                    if ($wallet->account_id == null) {
                        $account = json_decode($this->eco->createAccount($missingLedgerPayload));
                        if (!isset($account->errorCode)) {
                            $wallet->account_id = $account->id;
                            if ($wallet->assigned != 1) {
                                $result = json_decode($this->eco->assignDepositAddress($account->id, $wallet->address));
                                if (!isset($result->errorCode)) {
                                    $wallet->assigned = 1;
                                    $wallet->address = $result->address;
                                    $report[$key] = [
                                        'result' => 'success',
                                        'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                        'address' => $result->address,
                                        'chain' => $coin->chain
                                    ];
                                    $wallet->save();
                                } else {
                                    $adminNotification = new AdminNotification();
                                    $adminNotification->user_id = $token->user->id;
                                    $adminNotification->title = 'Failed to assign a wallet ' . $wallet->id . ' to a account id ' . $account->id;
                                    $adminNotification->click_url = route('admin.eco.blockchain.addresses.index', [$coin->chain, $coin->symbol]);
                                    $adminNotification->save();
                                    $report[$key] = [
                                        'result' => 'error',
                                        'message' => $result->message
                                    ];
                                }
                            }
                        } else {
                            $report[$key] = [
                                'result' => 'error',
                                'message' => $account->message
                            ];
                        }
                    } else {
                        if ($wallet->assigned != 1) {
                            $result = json_decode($this->eco->assignDepositAddress($wallet->account_id, $wallet->address));
                            if (!isset($result->errorCode)) {
                                $wallet->assigned = 1;
                                $wallet->address = $result->address;
                                $report[$key] = [
                                    'result' => 'success',
                                    'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                    'address' => $result->address,
                                    'chain' => $coin->chain
                                ];
                                $wallet->save();
                            } else {
                                $adminNotification = new AdminNotification();
                                $adminNotification->user_id = $token->user->id;
                                $adminNotification->title = 'Failed to assign a wallet ' . $wallet->id . ' to a account id ' . $wallet->account_id;
                                $adminNotification->click_url = route('admin.eco.blockchain.addresses.index', [$coin->chain, $coin->symbol]);
                                $adminNotification->save();
                                $report[$key] = [
                                    'result' => 'error',
                                    'message' => $result->message
                                ];
                            }
                        } else {
                            $report[$key] = [
                                'result' => 'error',
                                'message' => 'Wallet Already Exists'
                            ];
                        }
                    }
                } else {
                    if (EcoWallet::where('user_id', null)->where('chain', $coin->chain)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('assigned', '!=', 1)->exists()) {
                        $wallet = EcoWallet::where('user_id', null)->where('chain', $coin->chain)->where('symbol', $coin->symbol . ($coin->postfix ?? ''))->where('assigned', '!=', 1)->first();
                        $wallet->user_id = $token->user->id;

                        if ($wallet->account_id == null) {
                            $account = json_decode($this->eco->createAccount($missingLedgerPayload));
                            if (!isset($account->errorCode)) {
                                $wallet->account_id = $account->id;
                                if ($wallet->assigned != 1) {
                                    $result = json_decode($this->eco->assignDepositAddress($account->id, $wallet->address));
                                    if (!isset($result->errorCode)) {
                                        $wallet->assigned = 1;
                                        $wallet->address = $result->address;
                                        $report[$key] = [
                                            'result' => 'success',
                                            'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                            'address' => $result->address,
                                            'chain' => $coin->chain
                                        ];
                                        $wallet->save();
                                    } else {
                                        $adminNotification = new AdminNotification();
                                        $adminNotification->user_id = $token->user->id;
                                        $adminNotification->title = 'Failed to assign a wallet ' . $wallet->id . ' to a account id ' . $account->id;
                                        $adminNotification->click_url = route('admin.eco.blockchain.addresses.index', [$coin->chain, $coin->symbol]);
                                        $adminNotification->save();
                                        $report[$key] = [
                                            'result' => 'error',
                                            'message' => $result->message
                                        ];
                                    }
                                }
                            } else {
                                $report[$key] = [
                                    'result' => 'error',
                                    'message' => $account->message
                                ];
                            }
                        } else {
                            if ($wallet->assigned != 1) {
                                $result = json_decode($this->eco->assignDepositAddress($wallet->account_id, $wallet->address));
                                if (!isset($result->errorCode)) {
                                    $wallet->assigned = 1;
                                    $wallet->address = $result->address;
                                    $report[$key] = [
                                        'result' => 'success',
                                        'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                        'address' => $result->address,
                                        'chain' => $coin->chain
                                    ];
                                    $wallet->save();
                                } else {
                                    $adminNotification = new AdminNotification();
                                    $adminNotification->user_id = $token->user->id;
                                    $adminNotification->title = 'Failed to assign a wallet ' . $wallet->id . ' to a account id ' . $wallet->account_id;
                                    $adminNotification->click_url = route('admin.eco.blockchain.addresses.index', [$coin->chain, $coin->symbol]);
                                    $adminNotification->save();
                                    $report[$key] = [
                                        'result' => 'error',
                                        'message' => $result->message
                                    ];
                                }
                            } else {
                                $report[$key] = [
                                    'result' => 'warning',
                                    'message' => 'Wallet Already Exists'
                                ];
                            }
                        }
                    } else {
                        $real_wallet = EcoRealWallets::where('chain', $coin->chain)->first();
                        if (EcoWallet::where('chain', $coin->chain)->exists()) {
                            $last = EcoWallet::where('chain', $coin->chain)->orderBy('index', 'DESC')->first()->index + 1;
                        } else {
                            $last = 0;
                        }
                        $query = json_decode($this->eco->gasPump(array(
                            "chain" => $coin->chain,
                            "owner" => $real_wallet->address,
                            "from" => $last,
                            "to" => $last,
                        )));
                        $wallet = new EcoWallet();
                        $wallet->user_id = $token->user->id;
                        $wallet->index = getAmount($last);
                        $wallet->chain = $coin->chain;
                        $wallet->symbol = $coin->symbol . ($coin->postfix ?? '');
                        $wallet->currency = $coin->symbol;
                        $wallet->postfix = $coin->postfix ?? '';
                        $wallet->address = $query[0];
                        $wallet->network = $this->net;
                        $account = json_decode($this->eco->createAccount($missingLedgerPayload));
                        if (!isset($account->errorCode)) {
                            $wallet->account_id = $account->id;
                            if ($wallet->assigned != 1) {
                                $loop = false;
                                $result = json_decode($this->eco->assignDepositAddress($account->id, $wallet->address));
                                if (isset($result->errorCode)) {
                                    $loop = true;
                                } else {
                                    $wallet->assigned = 1;
                                    $wallet->address = $result->address;
                                    $report[$key] = [
                                        'result' => 'success',
                                        'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                        'address' => $result->address,
                                        'chain' => $coin->chain
                                    ];
                                    $wallet->save();
                                }
                                while ($loop == true) {
                                    try {
                                        $last++;
                                        $query = json_decode($this->eco->gasPump(array(
                                            "chain" => $coin->chain,
                                            "owner" => $real_wallet->address,
                                            "from" => $last,
                                            "to" => $last,
                                        )));
                                        $wallet->address = $query[0];
                                        $result = json_decode($this->eco->assignDepositAddress($account->id, $wallet->address));
                                        if (!isset($result->errorCode)) {
                                            $wallet->assigned = 1;
                                            $wallet->address = $result->address;
                                            $report[$key] = [
                                                'result' => 'success',
                                                'message' =>  $coin->symbol . ($coin->postfix ? '(' . $coin->postfix . ')' : '') . ' Wallet Created Successfully',
                                                'address' => $result->address,
                                                'chain' => $coin->chain
                                            ];
                                            $wallet->save();
                                            $loop = false;
                                            break;
                                        }
                                    } catch (\Throwable $th) {
                                        //throw $th;
                                    }
                                }
                            }
                        } else {
                            $report[$key] = [
                                'result' => 'error',
                                'message' => $account->message,
                                'data' => $account
                            ];
                        }
                    }
                }
            }
        }

        return $report;
    }

    public function deposit_address_create($id)
    {
        $address = json_decode($this->eco->generateDepositAddress($id));
        if ($address->statusCode) {
            return [
                'result' => 'error',
                'message' => $address->data
            ];
        } else {
            return [
                'message' => $address
            ];
        }
    }

    public function order_balance($id)
    {
        return json_decode($this->eco->getAccountBalance($id))->availableBalance;
    }

    public function withdraw(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'sender_wallet_symbol' => 'required|string|exists:eco_wallets,currency',
            'sender_wallet_chain' => 'required|string|exists:eco_wallets,chain',
            'reciever_wallet_address' => 'required|string',
            'amount' => 'required|numeric',
        ]);
        $token = Tokens::with(['user'])->where('token', $request->token)->first();
        if (!strpos($token->abilities, 'withdraw')) {
            return
                [
                    'result' => 'error',
                    'message' => "API don't have withdrawal permission."
                ];
        }
        $client_wallet = EcoWallet::where('chain', $request->sender_wallet_chain)->where('user_id', $token->user->id)->where('currency', $request->sender_wallet_symbol)->first();
        if (!$client_wallet) {
            return
                [
                    'result' => 'error',
                    'message' => 'Invalid sender wallet.'
                ];
        }
        $balance = getBalance($client_wallet->id);
        if ($balance != null) {
            $client_wallet->free_balance = $balance;
        }
        $client_wallet->save();
        if (EcoTokens::where('symbol', $request->sender_wallet_symbol)->where('chain', $client_wallet->chain)->exists()) {
            $token = EcoTokens::where('symbol', $request->sender_wallet_symbol)->where('chain', $client_wallet->chain)->first();
            $token->type = 0;
        } else if (EcoMainnetTokens::where('symbol', $request->sender_wallet_symbol)->where('chain', $client_wallet->chain)->exists()) {
            $token = EcoMainnetTokens::where('symbol', $request->sender_wallet_symbol)->where('chain', $client_wallet->chain)->first();
        } else {
            return
                [
                    'result' => 'error',
                    'message' => 'Invalid sending symbol.'
                ];
        }
        $feed = $request->amount + $token->withdraw_fee;

        if ($client_wallet->balance < $feed) {
            return
                [
                    'result' => 'error',
                    'message' => 'Insufficient balance for withdrawal',
                ];
        }
        if ($client_wallet->free_balance > $feed) {
            $wallet = $client_wallet;
        } else {
            $wallet = EcoWallet::where('chain', $client_wallet->chain)->where('symbol', $client_wallet->symbol)->where('status', 1)->where('network', $client_wallet->network)->where('free_balance', '>=', $request->amount)->first();
        }
        $real_wallet = EcoRealWallets::where('chain', $wallet->chain)->first();

        if (!in_array($wallet->chain, ['ETH', 'BSC', 'MATIC', 'KLAY', 'TRON', 'CELO'])) {
            return
                [
                    'result' => 'error',
                    'message' => 'Chain dont support withdrawal yet'
                ];
        }

        $withdrawData = array(
            "senderAccountId" => $client_wallet->account_id,
            "address" => $request->reciever_wallet_address,
            "amount" => "$request->amount",
            "fee" => "$token->withdraw_fee",
        );
        $withdraw = json_decode($this->eco->offchainStoreWithdrawal($withdrawData));

        if (isset($withdraw->errorCode)) {
            return
                [
                    'result' => 'error',
                    'message' => $withdraw->message,
                    'data' => $withdraw,
                ];
        }

        $log = new EcoLog();
        $log->wallet_id = $client_wallet->id;
        $log->amount = $request->amount;
        $log->fee = $token->withdraw_fee;
        $log->ref_id = $withdraw->id;
        $log->type = 2;

        $fees_log = new EcoFeesLog();
        $fees_log->wallet_id = $client_wallet->id;
        $fees_log->amount = $token->withdraw_fee;
        $fees_log->ref_id = $withdraw->id;
        $fees_log->type = 2;


        if ($token->type == 0) {
            if ($wallet->chain == 'CELO') {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "tokenAddress" => $token->address,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                    "feeCurrency" => "CELO",
                );
            } else if ($wallet->chain == 'TRON') {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "tokenAddress" => $token->address,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                    "feeLimit" => 20,
                );
            } else {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "tokenAddress" => $token->address,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                );
            }
        } else {
            if ($wallet->chain == 'CELO') {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                    "feeCurrency" => "CELO",
                );
            } else if ($wallet->chain == 'TRON') {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                    "feeLimit" => 20,
                );
            } else {
                $transferData = array(
                    "chain" => $wallet->chain,
                    "custodialAddress" => $wallet->address,
                    "recipient" => $request->reciever_wallet_address,
                    "contractType" => $token->type,
                    "amount" => "$request->amount",
                    "fromPrivateKey" => $real_wallet->private_key,
                );
            }
        }

        $transfer = json_decode($this->eco->gasPumpTransfer($transferData));

        if (!isset($transfer->txId)) {
            try {
                $this->eco->offchainCancelWithdrawal($withdraw->id, false);
            } catch (\Throwable $th) {
                //throw $th;
            }
            return
                [
                    'result' => 'error',
                    'message' => $transfer->message,
                    'data' => $transfer,
                ];
        }

        $feesData = array(
            "senderAccountId" => $client_wallet->account_id,
            "recipientAccountId" => EcoFeesAccount::where('chain', $wallet->chain)->where('network', $this->net)->where('symbol', $request->sender_wallet_symbol)->first()->account_id,
            "amount" => "$token->withdraw_fee",
        );
        $feesResult = json_decode($this->eco->storeTransaction($feesData));
        if (isset($feesResult->reference)) {
            $fees_log->txid = $feesResult->reference;
            $fees_log->withdraw_txid = $transfer->txId;
            $fees_log->status = 1;
            $fees_log->save();
        }
        $log->txid = $transfer->txId;
        $log->status = 1;
        $log->save();
        json_decode($this->eco->offchainCompleteWithdrawal($withdraw->id, $transfer->txId));
        return
            [
                'result' => 'success',
                'message' => "Withdrawal of " . $request->amount . " " . $request->sender_wallet_symbol . " is processing",
            ];
    }

    public function transfer(array $data)
    {
        $result = $this->eco->storeTransaction($data);
        return $result;
    }
}
