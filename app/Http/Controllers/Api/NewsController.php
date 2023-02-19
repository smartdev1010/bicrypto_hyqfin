<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class NewsController extends Controller
{

    public function fetch()
    {
        $client = new Client();
        $response = $client->get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN');

        if ($response->getStatusCode() == 200) {
            $news = json_decode($response->getBody(), true);
            return $news["Data"];
        } else {
            return [
                'type' => 'error',
                'message' => "Fetch Error :-S", ['status_code' => $response->getStatusCode()]
            ];
        }
    }
}
