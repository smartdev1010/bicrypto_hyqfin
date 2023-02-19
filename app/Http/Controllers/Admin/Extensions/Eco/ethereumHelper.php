<?php


function create_eth_wallet()
{
    $query = array(
        "mnemonic" => "string"
    );
    $url = getGen()->tatum_url . "/ethereum/wallet?" . http_build_query($query);

    $headers = [
        'accept: application/json',
        'x-api-key: ' . getGen()->tatum_api,
        'x-testnet-type: ethereum-ropsten'
    ];
    $data = curl_get($url, $headers);
    return $data;
}

function create_eth_address($xpub)
{
    $url = getGen()->tatum_url . "/bitcoin/address/" . $xpub . "/1";

    $headers = [
        'accept: application/json',
        'x-api-key: ' . getGen()->tatum_api
    ];
    $data = curl_get($url, $headers);
    return $data;
}

function create_eth_wallet_private_key()
{
    $url = getGen()->tatum_url . "/bitcoin/wallet/priv";

    $post_fields = '{
            "mnemonic": "marriage spare stamp oppose slam museum sense van fee claim enough rifle cigar wealth daughter sand seminar jaguar absent grape family visual noodle lucky",
            "index": 1
        }';

    $headers = [
        'Content-Type: application/json',
        'x-api-key: ' . getGen()->tatum_api
    ];
    $data = curl_post($url, $post_fields, $headers);

    return $data;
}

function create_erc20_smart_contract_token($chain, $symbol, $name, $totalCap, $supply, $address, $fromPrivateKey, $gasLimit, $gasPrice)
{
    $url = getGen()->tatum_url . "/blockchain/token/deploy";

    $post_fields = '{
            "chain": "' . $chain . '",
            "symbol": "' . $symbol . '",
            "name": "' . $name . '",
            "totalCap": "' . $totalCap . '",
            "supply": "' . $supply . '",
            "digits": 18,
            "address": "' . $address . '",
            "fromPrivateKey": "' . $fromPrivateKey . '",
            "nonce": 0,
            "fee": {
                "gasLimit": "' . $gasLimit . '",
                "gasPrice": "' . $gasPrice . '"
            }
        }';

    $headers = [
        'Content-Type: application/json',
        'x-api-key: ' . getGen()->tatum_api,
        'x-testnet-type: ethereum-ropsten',
    ];
    $data = curl_post($url, $post_fields, $headers);

    return $data;
}
