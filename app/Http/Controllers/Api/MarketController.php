<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ExchangeLogs;
use App\Models\ThirdpartyOrders;
use App\Models\ThirdpartyProvider;
use App\Models\Tokens;
use App\Models\User;
use Illuminate\Http\Request;
use Throwable;

class MarketController extends Controller
{

    public $provider;
    public $api;
    public function __construct()
    {

        if (ThirdpartyProvider::where('status', 1)->exists()) {
            $thirdparty = ThirdpartyProvider::where('status', 1)->first();
            $exchange_class = "\\ccxt\\$thirdparty->title";
            if ($thirdparty->title == 'binance') {
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
            $this->provider = null;
        }
        #$this->api->set_sandbox_mode('enable');
    }

    public function orderbook(Request $request)
    {
        $request->validate([
            'currency' => 'required|string',
            'pair' => 'required|string',
        ]);

        try {
            $orderbook = $this->api->fetch_order_book(strtoupper($request->currency) . '/' . strtoupper($request->pair));
        } catch (\Throwable $th) {
            return [
                'type' => 'error',
                'message' => 'Symbol not found.'
            ];
        }
        return [
            'asks' => $orderbook['asks'],
            'bids' => $orderbook['bids']
        ];
    }

    public function chart(Request $request)
    {
        $request->validate([
            'currency' => 'required|string',
            'pair' => 'required|string',
            'timeframe' => 'in:1m,5m,15m,30m,1h,4h,1d,w,m',
            'since' => 'numeric',
            'limit' => 'numeric',
        ]);
        try {
            $chart = $this->api->fetch_ohlcv(strtoupper($request->currency) . '/' . strtoupper($request->pair), $request->timeframe ?? '1m', $request->since ?? null, $request->limit ?? null);
        } catch (\Throwable $th) {
            return [
                'type' => 'error',
                'message' => 'Rate Limit Exceeded'
            ];
        }
        return $chart;
    }

    public function trade(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'amount' => 'required|numeric',
            'price' => 'numeric',
            'currency' => 'required|string',
            'symbol' => 'required|string',
            'tradeType' => 'required|string|in:buy,sell',
            'orderType' => 'required|string|in:market,limit',
            'walletType' => 'required|string|in:funding,trading',
        ]);
        $token = Tokens::where('token', $request->token)->first();

        if (!strpos($token->abilities, 'trade')) {
            return
                [
                    'result' => 'error',
                    'message' => "API don't have trading permission"
                ];
        }

        $user = User::where('id', $token->user_id)->first();
        $fee = (getGen()->exchange_fee / 100) * $request->amount;
        $feed = $request->amount + $fee;
        $price = $request->price;
        if ($request->walletType == 'funding') {
            $provider = 'funding';
        } else {
            $provider = $this->provider;
        }
        if (isWallet($user->id, $request->walletType, $request->currency, $provider) == true) {
            if (isWallet($user->id, $request->walletType, $request->symbol, $provider) == true) {
                if ($request->tradeType == 'buy') {
                    $ws = getWallet($user->id, $request->walletType, $request->symbol, $provider);
                    $wc = getWallet($user->id, $request->walletType, $request->currency, $provider);
                    if ($wc->balance > ($feed * $price)) {
                        $pass = '1';
                    } else {
                        $pass = '0';
                    }
                } else {
                    $wc = getWallet($user->id, $request->walletType, $request->symbol, $provider);
                    $ws = getWallet($user->id, $request->walletType, $request->currency, $provider);
                    if ($wc->balance > $feed) {
                        $pass = '1';
                    } else {
                        $pass = '0';
                    }
                }
                if ($pass == 0) {
                    return response()->json(
                        [
                            'result' => 'warning',
                            'message' => 'Your ' . $wc->symbol . ' Balance Not Enough! Please Add Deposit Firstly'
                        ]
                    );
                } else {
                    if ($this->provider != null && getPlatform('trading')->practice != 1) {
                        $exchangeLog = new ThirdpartyOrders();
                        $exchangeLog->user_id = $user->id;
                        try {
                            if ($request->orderType != 'limit') {
                                $create_order = $this->api->create_order($request->symbol . '/' . $request->currency, $request->orderType, $request->tradeType, $request->amount);
                            } else {
                                $create_order = $this->api->create_order($request->symbol . '/' . $request->currency, $request->orderType, $request->tradeType, $request->amount, $request->price);
                            }
                        } catch (Throwable $e) {
                            if ($this->provider == 'binance') {
                                return response()->json(
                                    [
                                        'result' => 'warning',
                                        'message' => is_array($e->getMessage()) ? json_decode(str_replace($this->provider . ' ', '', $e->getMessage()))->msg : str_replace($this->provider . ' ', '', $e->getMessage()),
                                    ]
                                );
                            } else {
                                return response()->json(
                                    [
                                        'result' => 'error',
                                        'message' => str_replace($this->provider . ' ', '', $e->getMessage()),
                                    ]
                                );
                            }
                        }
                        $fetch_order = $this->api->fetch_order($create_order['id'], $request->symbol . '/' . $request->currency);
                        $exchangeLog->order_id = $create_order['id'];
                        $exchangeLog->symbol = $create_order['symbol'];
                        $exchangeLog->type = $create_order['type'];
                        $exchangeLog->side = $create_order['side'];
                        $exchangeLog->price =  $fetch_order['price'];
                        $exchangeLog->stopPrice =  $fetch_order['stopPrice'];
                        $exchangeLog->amount = $request->amount;
                        $exchangeLog->cost = $fetch_order['cost'];
                        $exchangeLog->average = $fetch_order['average'];
                        $exchangeLog->filled = $fetch_order['filled'];
                        $exchangeLog->remaining = $fetch_order['remaining'];
                        $exchangeLog->status = $fetch_order['status'];
                        if ($this->provider == 'binance') {
                            $exchangeLog->fee = $fetch_order['fee'];
                        } else {
                            $exchangeLog->fee = $fetch_order['fee']['cost'];
                        }
                        $exchangeLog->provider = $this->provider;
                        $exchangeLog->save();

                        if ($request->tradeType == 'buy') {
                            $wc->balance -= $feed * $price;
                            $wc->save();
                            if ($fetch_order['remaining'] == 0) {
                                $ws->balance += $request->amount;
                                $ws->save();
                            }
                        } else {
                            $wc->balance -= $feed;
                            $wc->save();
                            if ($fetch_order['remaining'] == 0) {
                                $ws->balance += $request->amount * $exchangeLog->price;
                                $ws->save();
                            }
                        }
                        return response()->json(
                            [
                                'result' => 'success',
                                'message' => ucfirst($exchangeLog->side) . ' Order of (' . $request->amount . ' ' . getPair($exchangeLog->symbol)[0] . ') placed successfully'
                            ]
                        );
                    } else {
                        $exchangeLog = new ExchangeLogs();
                        $exchangeLog->user_id = $user->id;
                        $exchangeLog->order_id = getTrx();
                        $exchangeLog->symbol = $request->symbol . '/' . $request->currency;
                        $exchangeLog->type = $request->orderType;
                        if ($request->tradeType == 1) {
                            $exchangeLog->side = 'buy';
                        } else if ($request->tradeType == 2) {
                            $exchangeLog->side = 'sell';
                        }
                        $exchangeLog->price =  $request->price;
                        $exchangeLog->amount = $request->amount;
                        $exchangeLog->cost = $request->price * $request->amount;
                        $exchangeLog->average = $request->price;
                        $exchangeLog->filled = $request->amount;
                        $exchangeLog->remaining = 0;
                        $exchangeLog->status = $request->status;
                        $exchangeLog->fee = $fee;
                        $exchangeLog->provider = 'local';
                        if ($exchangeLog->type == 'market') {
                            $exchangeLog->status = 'closed';
                        } else if ($exchangeLog->type == 'limit') {
                            $exchangeLog->status = 'open';
                        }
                        $exchangeLog->save();

                        if ($request->tradeType == 'buy') {
                            $wc->balance -= $feed * $price;
                            $wc->save();
                            $ws->balance += $request->amount;
                            $ws->save();
                        } else {
                            $wc->balance -= $feed;
                            $wc->save();
                            $ws->balance += $exchangeLog->cost;
                            $ws->save();
                        }
                        return response()->json(
                            [
                                'result' => 'success',
                                'message' => ucfirst($exchangeLog->side) . ' Order of (' . $request->amount . ' ' . getPair($exchangeLog->symbol)[0] . ') placed successfully'
                            ]
                        );
                    }
                }
            } else {
                return response()->json(
                    [
                        'result' => 'warning',
                        'message' => 'Create Wallets Firstly'
                    ]
                );
            }
        } else {
            return response()->json(
                [
                    'result' => 'warning',
                    'message' => 'Create Wallets Firstly'
                ]
            );
        }
    }

    public function orders(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'page' => 'nullable|integer|min:1',
            'per_page' => 'nullable|integer|min:1|max:100',
        ]);
        $user = Tokens::where('token', $request->token)
            ->firstOrFail()
            ->user;
        $page = $request->get('page', 1);
        $perPage = $request->get('per_page', 10);
        $orders = ThirdpartyOrders::where('provider', $this->provider)
            ->where('user_id', $user->id)
            ->latest()
            ->select([
                "order_id",
                "symbol",
                "type",
                "side",
                "price",
                "stopPrice",
                "amount",
                "cost",
                "average",
                "filled",
                "remaining",
                "status",
                "fee",
                "created_at"
            ])
            ->paginate($perPage, ['*'], 'page', $page);
        return response()->json(
            [
                'result' => 'success',
                'data' => $orders->items(),
                'meta' => [
                    'current_page' => $orders->currentPage(),
                    'per_page' => $orders->perPage(),
                    'total_pages' => $orders->lastPage(),
                    'total' => $orders->total(),
                ],
            ]
        );
    }
}
