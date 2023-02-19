<?php
/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

if(!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')){
throw new \TatumException("Access Denied!");
}
require("Bcash.php");
require("Bitcoin.php");
require("BinanceSmartChain.php");
require("BinanceBeaconChain.php");
require("Ethereum.php");
require("Litecoin.php");
require("Token.php");
require("Tron.php");
require("Polygon.php");
require("Celo.php");
require("Klaytn.php");
require("Algorand.php");
require("Solana.php");