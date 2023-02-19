<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait TronBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthBroadcast" target="_blank">Tatum API documentation</a>
     */
    function tronBroadcast(string $txData, string $signatureId = "")
    {
        if ($signatureId != "") {
            $data = array('txData' => $txData, 'signatureId' => $signatureId);
        } else {
            $data = array('txData' => $txData);
        }
        return $this->post($data, "/{$this->getRoute('TRON')}/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionCount" target="_blank">Tatum API documentation</a>
     */
    function tronGetTransactionsCount(string $address)
    {
        return $this->get("/{$this->getRoute('TRON')}/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function tronGetCurrentBlock()
    {
        return $this->get("/{$this->getRoute('TRON')}/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function tronGetBlock(string $hash)
    {
        return $this->get("/{$this->getRoute('TRON')}/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function tronGetBlockHash(int $i)
    {
        return $this->get("/{$this->getRoute('TRON')}/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetBalance" target="_blank">Tatum API documentation</a>
     */
    function tronGetAccountBalance($token, $wallet)
    {
        $decimals = '0.';
        for ($i = 1; $i < $token->decimals; $i++) {
            $decimals .= 0;
        }
        $decimals = $decimals . '1';
        if ($wallet->symbol == 'TRON') {
            return json_decode($this->get("/tron/account/{$wallet->address}"))->balance * $decimals;
        } else {
            $balances = json_decode($this->get("/tron/account/{$wallet->address}"));
            if (isset($balances->trc20)) {
                foreach ($balances->trc20 as $value) {
                    if (property_exists($value, $token->address)) {
                        foreach ($value as $key => $v) {
                            return $v * $decimals;
                        }
                    }
                }
            } else {
                return null;
            }
        }
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/Ethtron20GetBalance" target="_blank">Tatum API documentation</a>
     */
    function tronGetAccounttron20Address(string $address, string $contractAddress)
    {
        return $this->get("/{$this->getRoute('TRON')}/account/balance/tron/{$address}?contractAddress={$contractAddress}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function tronGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('TRON')}/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    function tronGetAccountInternalTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/{$this->getRoute('TRON')}/account/transaction/tron/internal/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/EthGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function tronGetTransaction(string $hash)
    {
        return $this->get("/{$this->getRoute('TRON')}/transaction/{$hash}");
    }

    function DeployTronToken($data, $type)
    {
        return $this->post($data, "/tron/{$type}/deploy");
    }
}