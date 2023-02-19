<?php

function create_btc_wallet()
{
    $url = getGen()->tatum_url . "/bitcoin/wallet";

    $headers = [
        'accept: application/json',
        'x-api-key: ' . getGen()->tatum_api
    ];
    $data = curl_get($url, $headers);
    return $data;
}

function create_btc_address($xpub)
{
    $url = getGen()->tatum_url . "/bitcoin/address/" . $xpub . "/1";

    $headers = [
        'accept: application/json',
        'x-api-key: ' . getGen()->tatum_api
    ];
    $data = curl_get($url, $headers);
    return $data;
}

function create_btc_wallet_private_key($mnemonic)
{
    $url = getGen()->tatum_url . "/bitcoin/wallet/priv";

    $post_fields = '{
            "mnemonic": "' . $mnemonic . '",
            "index": 1
        }';

    $headers = [
        'Content-Type: application/json',
        'x-api-key: ' . getGen()->tatum_api
    ];
    $data = curl_post($url, $post_fields, $headers);

    return $data;
}
