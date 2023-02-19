<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExchangeLogs;
use App\Models\GeneralSetting;
use App\Models\ThirdpartyOrders;
use App\Models\ThirdpartyProvider;
use App\Models\Wallet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Throwable;

class ExchangeController extends Controller
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

    public function btcRate(Request $request)
    {
        $cryptoRate = getCoinRate($request->coinSymbol);
        return $cryptoRate;
    }

    public function trading()
    {
        if ($this->provider != null) {
            $api = 1;
        } else {
            $api = 0;
        }
        $fee = getGen()->exchange_fee;
        $pfee = 1 + ($fee / 100);
        if ($this->provider == 'coinbasepro') {
            $provide = 'COINBASE';
            $provider = 'coinbasepro';
        } else if ($this->provider != 'coinbasepro' && $this->provider != null) {
            $provide = strtoupper($this->provider);
            $provider = $this->provider;
        } else {
            $provide = 'KUCOIN';
            $provider = 'kucoin';
        }
        return response()->json([
            'provider' => $provider,
            'provide' => $provide,
            'fee' => $fee,
            'pfee' => $pfee,
            'api' => $api,
        ]);
    }

    public function trading_orders()
    {
        $user = Auth::user();
        if ($this->provider != null) {
            if (Wallet::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'trading')->where('address', '!=', null)->sum('balance') >= 0) {
                $wallets = Wallet::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'trading')->where('address', '!=', null)->get();
            } else {
                $wallets = Wallet::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'trading')->where('address', '!=', null)->get();
            }
            $orders['market'] = ThirdpartyOrders::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'market')->latest()->get();
            $orders['limit'] = ThirdpartyOrders::where('provider', $this->provider)->where('user_id', $user->id)->where('type', 'limit')->latest()->get();
        } else {
            $wallets = Wallet::where('provider', 'funding')->where('user_id', $user->id)->where('type', 'funding')->where('address', '!=', null)->get();
            $orders['market'] = ExchangeLogs::where('provider', 'local')->where('user_id', $user->id)->where('type', 'market')->latest()->get();
            $orders['limit'] = ExchangeLogs::where('provider', 'local')->where('user_id', $user->id)->where('type', 'limit')->latest()->get();
        }
        return response()->json([
            'wallets' => $wallets,
            'orders' => $orders
        ]);
    }

    public function trading_market_orders($symbol, $currency)
    {
        $user = Auth::user();
        if ($this->provider != null) {
            $orders['closed'] = ThirdpartyOrders::where('user_id', $user->id)->where('provider', $this->provider)->where('symbol', $symbol . '/' . $currency)->where('status', 'closed')->orWhere('status', 'canceled')->latest()->get();
            $orders['open'] = ThirdpartyOrders::where('user_id', $user->id)->where('provider', $this->provider)->where('symbol', $symbol . '/' . $currency)->where('status', 'open')->orWhere('status', 'filling')->latest()->get();
        } else {
            $orders['closed'] = ExchangeLogs::where('user_id', $user->id)->where('provider', 'local')->where('symbol', $symbol . '/' . $currency)->where('status', 'closed')->orWhere('status', 'canceled')->latest()->get();
            $orders['open'] = ExchangeLogs::where('user_id', $user->id)->where('provider', 'local')->where('symbol', $symbol . '/' . $currency)->where('status', 'open')->orWhere('status', 'filling')->latest()->get();
        }
        return response()->json([
            'orders' => $orders
        ]);
    }

    public function store(Request $request)
    {
        //dd($request);
        $validate = Validator::make($request->all(), [
            'amount' => 'required|numeric',
            'price' => 'numeric',
        ]);
        if ($validate->fails()) {
            return response()->json($validate->errors());
        }
        $user = Auth::user();
        $fee = (GeneralSetting::first()->exchange_fee / 100) * $request->amount;
        $feed = $request->amount + $fee;
        $price = $request->price;
        if ($request->wallettype == 'funding') {
            $provider = 'funding';
        } else {
            $provider = $this->provider;
        }
        $tradeType = $request->tradeType == 1 ? 'market' : 'limit';
        $side = $request->type == 1 ? 'buy' : 'sell';
        if (isWallet($user->id, $request->wallettype, $request->currency, $provider) == true) {
            if (isWallet($user->id, $request->wallettype, $request->symbol, $provider) == true) {
                if ($side == 'buy') {
                    $ws = getWallet($user->id, $request->wallettype, $request->symbol, $provider);
                    $wc = getWallet($user->id, $request->wallettype, $request->currency, $provider);
                    if ($wc->balance > ($feed * $price)) {
                        $pass = '1';
                    } else {
                        $pass = '0';
                    }
                } else {
                    $wc = getWallet($user->id, $request->wallettype, $request->symbol, $provider);
                    $ws = getWallet($user->id, $request->wallettype, $request->currency, $provider);
                    if ($wc->balance > $feed) {
                        $pass = '1';
                    } else {
                        $pass = '0';
                    }
                }
                if ($pass == 0) {
                    if ($this->provider != null) {
                        return response()->json(
                            [
                                'success' => true,
                                'type' => 'warning',
                                'message' => 'Your ' . $wc->symbol . ' Balance Not Enough! Please Add Deposit Firstly'
                            ]
                        );
                    } else {
                        $notify[] = ['warning', 'Your ' . $wc->symbol . ' Balance Not Enough! Please Add Deposit Firstly'];
                        return back()->withNotify($notify);
                    }
                } else {
                    if ($this->provider != null && getPlatform('trading')->practice != 1) {
                        $exchangeLog = new ThirdpartyOrders();
                        $exchangeLog->user_id = $user->id;
                        try {
                            if ($tradeType != 'limit') {
                                $create_order = $this->api->create_order($request->symbol . '/' . $request->currency, $tradeType, $side, $request->amount);
                            } else {
                                $create_order = $this->api->create_order($request->symbol . '/' . $request->currency, $tradeType, $side, $request->amount, $request->price);
                            }
                        } catch (Throwable $e) {
                            if ($this->provider == 'binance') {
                                return response()->json(
                                    [
                                        'success' => true,
                                        'type' => 'warning',
                                        'message' => is_array($e->getMessage()) ? json_decode(str_replace($this->provider . ' ', '', $e->getMessage()))->msg : str_replace($this->provider . ' ', '', $e->getMessage()),
                                    ]
                                );
                            } else {
                                return response()->json(
                                    [
                                        'success' => true,
                                        'type' => 'error',
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

                        if ($side == 'buy') {
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
                                'success' => true,
                                'type' => 'success',
                                'message' => ucfirst($exchangeLog->side) . ' Order of (' . $request->amount . ' ' . getPair($exchangeLog->symbol)[0] . ') placed successfully'
                            ]
                        );
                    } else {
                        $exchangeLog = new ExchangeLogs();
                        $exchangeLog->user_id = $user->id;
                        $exchangeLog->order_id = getTrx();
                        $exchangeLog->symbol = $request->symbol . '/' . $request->currency;
                        $exchangeLog->type = $request->tradeType;
                        if ($request->type == 1) {
                            $exchangeLog->side = 'buy';
                        } else if ($request->type == 2) {
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

                        if ($side == 'buy') {
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
                                'success' => true,
                                'type' => 'success',
                                'message' => ucfirst($exchangeLog->side) . ' Order of (' . $request->amount . ' ' . getPair($exchangeLog->symbol)[0] . ') placed successfully'
                            ]
                        );
                    }
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

    public function fetch_order(Request $request)
    {
        $order = $this->api->fetch_order($request->order_id, $request->symbol . '/' . $request->currency);
        $log = ThirdpartyOrders::where('provider', $this->provider)->where('order_id', $request->order_id)->first();
        $log->status = $order['status'];
        $log->filled = $order['filled'];
        $log->remaining = $order['remaining'];
        $log->save();
        return;
    }

    public function cancel(Request $request)
    {
        if ($this->provider == null) {
            $response = [
                'success' => true,
                'type' => 'error',
                'message' => 'Something went wrong, please contact support er0x002',
            ];
            return response()->json($response);
        }
        $order = $this->api->fetch_order($request->order_id, $request->symbol . '/' . $request->currency);
        $log = ThirdpartyOrders::where('provider', $this->provider)->where('order_id', $request->order_id)->first();

        if ($order['status'] == 'canceled') {
            $log->status = $order['status'];
            $log->save();
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Order canceled already.'
                ]
            );
        }
        if ($order['status'] == 'closed') {
            $log->status = $order['status'];
            $log->filled = $order['filled'];
            $log->remaining = $order['remaining'];
            $log->save();
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Order cancellation failed, Order was filled already.'
                ]
            );
        }
        if ($order['status'] == 'filling') {
            $log->status = $order['status'];
            $log->filled = $order['filled'];
            $log->remaining = $order['remaining'];
            $log->save();
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Order cancellation failed, Order is getting filled already.'
                ]
            );
        }
        try {
            $this->api->cancel_order($request->order_id, $request->symbol . '/' . $request->currency);
        } catch (Throwable $e) {
            return response()->json([
                'success' => true,
                'type' => 'error',
                'message' => 'Order cancellation failed, Please report to support',
            ]);
        }
        $log->status = 'canceled';
        $log->save();
        $fee = (getGen()->exchange_fee / 100) * $log->amount;
        $cost = $log->amount * $log->price;
        $from = getWallet($log->user_id, 'trading', $request->symbol, $this->provider);
        $to = getWallet($log->user_id, 'trading', $request->currency, $this->provider);
        if ($log->side == 'buy') {
            $to->balance += $cost + $fee;
        } elseif ($log->side == 'sell') {
            $from->balance += $log->amount + $fee;
        }
        $from->save();
        $to->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Order cancelled successfully'
            ]
        );
    }
}
