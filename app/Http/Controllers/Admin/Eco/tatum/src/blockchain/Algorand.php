<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait AlgorandBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICBroadcast" target="_blank">Tatum API documentation</a>
     */
    function algorandBroadcast(string $txData, string $signatureId = "")
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
    function algorandGetTransactionsCount(string $address)
    {
        return $this->get("/algorand/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function algorandGetCurrentBlock()
    {
        return $this->get("/algorand/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function algorandGetBlock(string $hash)
    {
        return $this->get("/algorand/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function algorandGetBlockHash(int $i)
    {
        return $this->get("/algorand/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBalance" target="_blank">Tatum API documentation</a>
     */
    function algorandGetAccountBalance(string $address)
    {
        return $this->get("/algorand/account/balance/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function algorandGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/algorand/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function algorandGetTransaction(string $hash)
    {
        return $this->get("/algorand/transaction/{$hash}");
    }
}