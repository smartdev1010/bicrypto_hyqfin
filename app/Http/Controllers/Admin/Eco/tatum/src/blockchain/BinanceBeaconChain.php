<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait BinanceBeaconChainBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthBroadcast" target="_blank">Tatum API documentation</a>
     */
    function bnbBroadcast(string $txData, string $signatureId = "")
    {
        if ($signatureId != "") {
            $data = array('txData' => $txData, 'signatureId' => $signatureId);
        } else {
            $data = array('txData' => $txData);
        }
        return $this->post($data, "/{$this->getRoute('BNB')}/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionCount" target="_blank">Tatum API documentation</a>
     */
    function bnbGetTransactionsCount(string $address)
    {
        return $this->get("/{$this->getRoute('BNB')}/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function bnbGetCurrentBlock()
    {
        return $this->get("/{$this->getRoute('BNB')}/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function bnbGetBlock(string $hash)
    {
        return $this->get("/{$this->getRoute('BNB')}/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function bnbGetBlockHash(int $i)
    {
        return $this->get("/{$this->getRoute('BNB')}/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBalance" target="_blank">Tatum API documentation</a>
     */
    function bnbGetAccountBalance(string $address)
    {
        return $this->get("/bnb/account/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/Ethbep20GetBalance" target="_blank">Tatum API documentation</a>
     */
    function bnbGetAccountbep20Address(string $address, string $contractAddress)
    {
        return $this->get("/{$this->getRoute('BNB')}/account/balance/bep20/{$address}?contractAddress={$contractAddress}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function bnbGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('BNB')}/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    function bnbGetAccountInternalTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('BNB')}/account/transaction/bep20/internal/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function bnbGetTransaction(string $hash)
    {
        return $this->get("/{$this->getRoute('BNB')}/transaction/{$hash}");
    }

    function ChainDeploybnb($data)
    {
        return $this->post($data, "/blockchain/token/deploy");
    }
}