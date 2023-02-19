<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

require(__DIR__ . "/offchain/Offchain.php");

trait Offchain
{
    use OffchainCommon;

    function transfer($coin, array $data)
    {
        return $this->transferOperation(strtolower(trim($coin)), $data);
    }
}