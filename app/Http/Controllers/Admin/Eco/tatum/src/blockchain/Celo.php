<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait CeloBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICBroadcast" target="_blank">Tatum API documentation</a>
     */
    function celoBroadcast(string $txData, string $signatureId = "")
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
    function celoGetTransactionsCount(string $address)
    {
        return $this->get("/celo/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function celoGetCurrentBlock()
    {
        return $this->get("/celo/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function celoGetBlock(string $hash)
    {
        return $this->get("/celo/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function celoGetBlockHash(int $i)
    {
        return $this->get("/celo/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBalance" target="_blank">Tatum API documentation</a>
     */
    function celoGetAccountBalance($wallet)
    {
        $balance = json_decode($this->get("/celo/account/balance/{$wallet->address}"));
        if (strtolower($wallet->symbol) == 'celo') {
            return $balance->celo;
        } else if (strtolower($wallet->symbol) == 'cusd') {
            return $balance->cUsd;
        } else if (strtolower($wallet->symbol) == 'ceur') {
            return $balance->cEur;
        }
    }
    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function celoGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/celo/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function celoGetTransaction(string $hash)
    {
        return $this->get("/celo/transaction/{$hash}");
    }
}