<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait BinanceSmartChainBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthBroadcast" target="_blank">Tatum API documentation</a>
     */
    function bscBroadcast(string $txData, string $signatureId = "")
    {
        if ($signatureId != "") {
            $data = array('txData' => $txData, 'signatureId' => $signatureId);
        } else {
            $data = array('txData' => $txData);
        }
        return $this->post($data, "/{$this->getRoute('BSC')}/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionCount" target="_blank">Tatum API documentation</a>
     */
    function bscGetTransactionsCount(string $address)
    {
        return $this->get("/{$this->getRoute('BSC')}/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function bscGetCurrentBlock()
    {
        return $this->get("/{$this->getRoute('BSC')}/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function bscGetBlock(string $hash)
    {
        return $this->get("/{$this->getRoute('BSC')}/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function bscGetBlockHash(int $i)
    {
        return $this->get("/{$this->getRoute('BSC')}/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBalance" target="_blank">Tatum API documentation</a>
     */
    function bscGetAccountBalance(string $address)
    {
        return $this->get("/{$this->getRoute('BSC')}/account/balance/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/Ethbep20GetBalance" target="_blank">Tatum API documentation</a>
     */
    function bscGetAccountbep20Address(string $address, string $contractAddress)
    {
        return $this->get("/{$this->getRoute('BSC')}/account/balance/bep20/{$address}?contractAddress={$contractAddress}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function bscGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('BSC')}/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    function bscGetAccountInternalTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('BSC')}/account/transaction/bep20/internal/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function bscGetTransaction(string $hash)
    {
        return $this->get("/{$this->getRoute('BSC')}/transaction/{$hash}");
    }

    function ChainDeploybep20($data)
    {
        return $this->post($data, "/blockchain/token/deploy");
    }
}