<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ThirdpartyProvider;
use Illuminate\Http\Request;

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
}
