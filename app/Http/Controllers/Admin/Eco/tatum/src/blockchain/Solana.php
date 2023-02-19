<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait SolanaBlockchain
{

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICBroadcast" target="_blank">Tatum API documentation</a>
     */
    function solanaBroadcast(string $txData, string $signatureId = "")
    {
        if ($signatureId != "") {
            $data = array('txData' => $txData, 'signatureId' => $signatureId);
        } else {
            $data = array('txData' => $txData);
        }
        return $this->post($data, "/solana/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionCount" target="_blank">Tatum API documentation</a>
     */
    function solanaGetTransactionsCount(string $address)
    {
        return $this->get("/solana/transaction/count/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockChainInfo" target="_blank">Tatum API documentation</a>
     */
    function solanaGetCurrentBlock()
    {
        return $this->get("/solana/block/current");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/BtcGetBlock" target="_blank">Tatum API documentation</a>
     */
    function solanaGetBlock(string $hash)
    {
        return $this->get("/solana/block/hash/{$hash}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBlockHash" target="_blank">Tatum API documentation</a>
     */
    function solanaGetBlockHash(int $i)
    {
        return $this->get("/solana/block/hash/{$i}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetBalance" target="_blank">Tatum API documentation</a>
     */
    function solanaGetAccountBalance(string $address)
    {
        return $this->get("/solana/account/balance/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransactionByAddress" target="_blank">Tatum API documentation</a>
     */
    function solanaGetAccountTransactions(string $address, int $pageSize = 50, int $offset = 0)
    {
        return $this->get("/solana/account/transaction/address/{$address}?pageSize={$pageSize}&offset={$offset}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/MATICGetTransaction" target="_blank">Tatum API documentation</a>
     */
    function solanaGetTransaction(string $hash)
    {
        return $this->get("/solana/transaction/{$hash}");
    }
    
}