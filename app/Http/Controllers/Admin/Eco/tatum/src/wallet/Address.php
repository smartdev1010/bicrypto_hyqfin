<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait AddressOperation
{

    /**
     * Generate Bitcoin private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateBtcPrivateKey(string $mnemonic, int $index)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/bitcoin/wallet/priv");;
        return $array;
    }

    function generateDogePrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/dogecoin/wallet/priv");;
        return $array;
    }
    /**
     * Generate Tron or any other Tron20 private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateTronPrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/tron/wallet/priv");;
        return $array;
    }

    /**
     * Generate Binance Smart Chain or any other bep20 private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateBscPrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/bsc/wallet/priv");;
        return $array;
    }

    function generatePolygonPrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/polygon/wallet/priv");;
        return $array;
    }

    function generateKlaytnPrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/klaytn/wallet/priv");;
        return $array;
    }

    function generateCeloPrivateKey(string $mnemonic, int $index = 0)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/celo/wallet/priv");;
        return $array;
    }


    /**
     * Generate Ethereum or any other ERC20 private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateEthPrivateKey(string $mnemonic, int $index)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/ethereum/wallet/priv");;
        return $array;
    }

    /**
     * Generate Litecoin private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateLtcPrivateKey(string $mnemonic, int $index)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/litecoin/wallet/priv");;
        return $array;
    }

    /**
     * Generate Bitcoin Cash private key from mnemonic seed
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generateBchPrivateKey(string $mnemonic, int $index)
    {
        $this->checkIndex($index);
        $this->checkMnemonic($mnemonic);
        $data = array(
            "mnemonic" => $mnemonic,
            "index" => $index
        );
        $array = $this->post($data, "/bcash/wallet/priv");;
        return $array;
    }

    /**
     * Generate Bitcoin address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateBtcAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/bitcoin/address/{$xpub}/{$index}");
        return $hdaddress;
    }

    function generateDogeAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/dogecoin/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    /**
     * Generate Tron or any other Tron address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateTronAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/tron/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    /**
     * Generate Binance Smart Chain or any other BSC address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateBscAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/bsc/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    function generatePolygonAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/polygon/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    function generateKlaytnAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/klaytn/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    function generateCeloAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/celo/address/{$xpub}/{$index}");
        return $hdaddress;
    }
    function generateAlgorandAddress(string $priv)
    {
        $address = $this->get("/algorand/address/{$priv}");
        return $address;
    }

    /**
     * Generate Ethereum or any other ERC20 address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateEthAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/ethereum/address/{$xpub}/{$index}");
        return $hdaddress;
    }

    /**
     * Generate Litecoin address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateLtcAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/litecoin/address/{$xpub}/{$index}");
        return $hdaddress;
    }

    /**
     * Generate Bitcoin Cash address
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateBchAddress(string $xpub, int $index)
    {
        $this->checkIndex($index);
        $this->checkXpub($xpub);
        $hdaddress = $this->get("/bcash/address/{$xpub}/{$index}");
        return $hdaddress;
    }

    /**
     * Generate private key from mnemonic seed
     * @param $coin type of blockchain
     * @param $mnemonic mnemonic to generate private key from
     * @param $index derivation index of private key to generate.
     * @returns blockchain private key to the address
     */

    function generatePrivateKeyFromMnemonic(string $coin, string $mnemonic, int $index)
    {
        if ($this->network !== 'testnet' && $this->network !== 'mainnet') {
            throw new \TypeError(sprintf('Unsupported Network Type %s!', $this->network));
        }
        if ($this->in_arrayi($coin, $this->supportedBlockchain)) {
            switch ($coin) {
                case 'btc':
                    return $this->generateBtcPrivateKey($mnemonic, $index);
                    break;
                case 'bsc':
                    return $this->generateBscPrivateKey($mnemonic);
                    break;
                case 'tron':
                    return $this->generateTronPrivateKey($mnemonic);
                    break;
                case 'matic':
                    return $this->generatePolygonPrivateKey($mnemonic);
                    break;
                case 'klay':
                    return $this->generateKlaytnPrivateKey($mnemonic);
                    break;
                case 'celo':
                    return $this->generateCeloPrivateKey($mnemonic);
                    break;
                case 'doge':
                    return $this->generateDogePrivateKey($mnemonic);
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
                    return $this->generateEthPrivateKey($mnemonic, $index);
                    break;
                case 'bch':
                    return $this->generateBchPrivateKey($mnemonic, $index);
                    break;
                case 'ltc':
                    return $this->generateLtcPrivateKey($mnemonic, $index);
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

    /**
     * Generate address
     * @param $coin type of blockchain
     * @param $xpub extended public key to generate address from
     * @param $index derivation index of address to generate. Up to 2^31 addresses can be generated.
     * @returns blockchain address
     */

    function generateAddressFromXPubOperation(string $coin, string $xpub, int $index)
    {
        if ($this->network !== 'testnet' && $this->network !== 'mainnet') {
            throw new \TypeError(sprintf('Unsupported Network Type %s!', $this->network));
        }
        if ($this->in_arrayi($coin, $this->supportedBlockchain)) {
            switch ($coin) {
                case 'btc':
                    return $this->generateBtcAddress($xpub, $index);
                    break;
                case 'bsc':
                    return $this->generateBscAddress($xpub, $index);
                    break;
                case 'tron':
                    return $this->generateTronAddress($xpub, $index);
                    break;
                case 'matic':
                    return $this->generatePolygonAddress($xpub, $index);
                    break;
                case 'klay':
                    return $this->generateKlaytnAddress($xpub, $index);
                    break;
                case 'celo':
                    return $this->generateCeloAddress($xpub, $index);
                    break;
                case 'algo':
                    return $this->generateAlgorandAddress($xpub, $index);
                    break;
                case 'doge':
                    return $this->generateDogeAddress($xpub, $index);
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
                    return $this->generateEthAddress($xpub, $index);
                    break;
                case 'bch':
                    return $this->generateBchAddress($xpub, $index);
                    break;
                case 'ltc':
                    return $this->generateLtcAddress($xpub, $index);
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

    /**
     * Generate address from private key
     * @param $coin type of blockchain
     * @param $privateKey private key to use
     * @returns blockchain address to the private key
     */

    function generateAddressFromPrivatekeyOperation(string $coin, string $privateKey)
    {
        if ($this->network !== 'testnet' && $this->network !== 'mainnet') {
            throw new \TypeError(sprintf('Unsupported Network Type %s!', $this->network));
        }
        if ($this->in_arrayi($coin, $this->supportedBlockchain)) {
            switch ($coin) {
                case 'btc':
                    return $this->convertBtcPrivateKey($privateKey);
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
                    return $this->convertEthPrivateKey($privateKey);
                    break;
                case 'bch':
                    return $this->convertBchPrivateKey($privateKey);
                    break;
                case 'ltc':
                    return $this->convertLtcPrivateKey($privateKey);
                    break;
                case 'xrp':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'xlm':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'bnb':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'vet':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'neo':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'libra':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
                    break;
                case 'scrypta':
                    throw new \UnexpectedValueException(sprintf('Unsupported PrivateKey to Address on %s Blockchain!', strtoupper($coin)));
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