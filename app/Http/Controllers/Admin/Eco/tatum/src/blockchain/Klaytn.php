<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait KlaytnBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICBroadcast" target="_blank">Tatum API documentation</a>
     */
    function klaytnBroadcast(string $txData, string $signatureId = "")
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
    function klaytnGetTransactionsCount(string $address)
    {
        return $this->get("/klaytn/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetCurrentBlock()
    {
        return $this->get("/klaytn/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetBlock(string $hash)
    {
        return $this->get("/klaytn/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetBlockHash(int $i)
    {
        return $this->get("/klaytn/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBalance" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetAccountBalance(string $address)
    {
        return $this->get("/klaytn/account/balance/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/klaytn/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function klaytnGetTransaction(string $hash)
    {
        return $this->get("/klaytn/transaction/{$hash}");
    }
    
}