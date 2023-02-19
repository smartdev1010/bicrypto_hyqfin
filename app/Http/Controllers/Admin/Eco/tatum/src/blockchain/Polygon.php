<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait PolygonBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICBroadcast" target="_blank">Tatum API documentation</a>
     */
    function polygonBroadcast(string $txData, string $signatureId = "")
    {
        if ($signatureId != "") {
            $data = array('txData' => $txData, 'signatureId' => $signatureId);
        } else {
            $data = array('txData' => $txData);
        }
        return $this->post($data, "/{$this->getRoute("MATIC")}/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionCount" target="_blank">Tatum API documentation</a>
     */
    function polygonGetTransactionsCount(string $address)
    {
        return $this->get("/polygon/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function polygonGetCurrentBlock()
    {
        return $this->get("/polygon/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function polygonGetBlock(string $hash)
    {
        return $this->get("/polygon/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function polygonGetBlockHash(int $i)
    {
        return $this->get("/polygon/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBalance" target="_blank">Tatum API documentation</a>
     */
    function polygonGetAccountBalance(string $address)
    {
        return json_decode($this->get("/polygon/account/balance/{$address}"))->balance;
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function polygonGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/polygon/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function polygonGetTransaction(string $hash)
    {
        return $this->get("/polygon/transaction/{$hash}");
    }
}