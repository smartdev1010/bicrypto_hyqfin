<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait WalletOperation
{

    /**
     * Generate Bitcoin wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */

    function generateBtcWallet()
    {
        $array = $this->get("/bitcoin/wallet");
        return $array;
    }

    /**
     * Generate Tron wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */

    function generateTronWallet()
    {
        $array = $this->get("/tron/wallet");
        return $array;
    }

    /**
     * Generate Binance Smart Chain wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */

    function generateBscWallet()
    {
        $array = $this->get("/bsc/wallet");
        return $array;
    }
    function generateBnbWallet()
    {
        $array = $this->get("/bnb/account");
        return $array;
    }
    function generatePolygonWallet()
    {
        $array = $this->get("/polygon/wallet");
        return $array;
    }
    function generateKlaytnWallet()
    {
        $array = $this->get("/klaytn/wallet");
        return $array;
    }
    function generateCeloWallet()
    {
        $array = $this->get("/celo/wallet");
        return $array;
    }
    function generateAlgorandWallet()
    {
        $array = $this->get("/algorand/wallet");
        return $array;
    }
    function generateSolanaWallet()
    {
        $array = $this->get("/solana/wallet");
        return $array;
    }

    /**
     * Generate Ethereum or any other ERC20 wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */

    function generateEthWallet()
    {
        $array = $this->get("/ethereum/wallet");
        return $array;
    }

    /**
     * Generate Litecoin wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */

    function generateLtcWallet()
    {
        $array = $this->get("/litecoin/wallet");
        return $array;
    }

    /**
     * Generate Bitcoin Cash wallet
     * @param $mnemonic mnemonic seed to use
     * @returns wallet
     */
    function generateBchWallet()
    {
        $array = $this->get("/bcash/wallet");
        return $array;
    }

    function generateDogeWallet()
    {
        $array = $this->get("/dogecoin/wallet");
        return $array;
    }

    /**
     * Generate wallet
     * @param $coin blockchain to generate wallet for
     * @param $mnemonic mnemonic seed to use. If not present, new one will be generated
     * @returns wallet or a combination of address and xpub
     */

    function generateWalletOperation(string $coin)
    {
        if ($this->network !== 'testnet' && $this->network !== 'mainnet') {
            throw new \TypeError(sprintf('Unsupported Network Type %s!', $this->network));
        }
        if ($this->in_arrayi($coin, $this->supportedBlockchain)) {
            switch ($coin) {
                case 'btc':
                    return $this->generateBtcWallet();
                    break;
                case 'bsc':
                    return $this->generateBscWallet();
                    break;
                case 'bnb':
                    return $this->generateBnbWallet();
                    break;
                case 'sol':
                    return $this->generateSolanaWallet();
                    break;
                case 'tron':
                    return $this->generateTronWallet();
                    break;
                case 'matic':
                    return $this->generatePolygonWallet();
                    break;
                case 'klay':
                    return $this->generateKlaytnWallet();
                    break;
                case 'celo':
                    return $this->generateCeloWallet();
                    break;
                case 'algo':
                    return $this->generateAlgorandWallet();
                    break;
                case 'doge':
                    return $this->generateDogeWallet();
                    break;
                case 'eth':
                case 'usdt':
                case 'usdc':
                case 'tusd':
                case 'leo':
                case 'link':
                case 'uni':
                case 'free':
                case 'mkr':
                case 'bat':
                case 'pax':
                case 'paxg':
                case 'pltc':
                case 'xcon':
                case 'mmy':
                    return $this->generateEthWallet();
                    break;
                case 'bch':
                    return $this->generateBchWallet();
                    break;
                case 'ltc':
                    return $this->generateLtcWallet();
                    break;
                case 'xrp':
                    return "xrp";
                    break;
                case 'xlm':
                    return "xlm";
                    break;
                case 'bnb':
                    return "bnb";
                    break;
                case 'vet':
                    return "vet";
                    break;
                case 'neo':
                    return "neo";
                    break;
                case 'libra':
                    return "libra";
                    break;
                case 'scrypta':
                    return "scrypta";
                    break;
                default:
                    throw new \UnexpectedValueException(sprintf('Unsupported Blockchain %s!', strtoupper($coin)));
                    break;
            }
        } else {
            throw new \UnexpectedValueException(sprintf('Unsupported Blockchain %s!', strtoupper($coin)));
        }
    }
}