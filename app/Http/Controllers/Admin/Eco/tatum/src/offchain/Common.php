<?php

/**
 * @author Adeleye Benjamin Adesanoye <adeleye.benjamin@highbreedtech.com>
 */

namespace Tatum;

if (!defined('TATUM') || !defined('TATUMIO') || !defined('TATUMPHP') || !defined('TATUMLIB')) {
    throw new \TatumException("Access Denied!");
}

trait OffchainCommon
{

    function RegisterToken(array $data, $chain)
    {
        return $this->post($data, "/offchain/token/{$chain}");
    }
    function RegisterTronToken(array $data)
    {
        return $this->post($data, "/offchain/tron/trc");
    }

    function SyncSmartContractToErc20Token($name, $address)
    {
        return $this->post_path("/offchain/token/{$name}/{$address}");
    }

    function gasPump($data)
    {
        return $this->post($data, "/gas-pump");
    }

    function gasPumpActivate($data)
    {
        return $this->post($data, "/gas-pump/activate");
    }

    function gasPumpCheckActivation($chain, $txId)
    {
        return $this->get("/gas-pump/address/{$chain}/{$txId}");
    }

    function gasPumpTransfer(array $data)
    {
        return $this->post($data, "/blockchain/sc/custodial/transfer");
    }


    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/generateDepositAddress" target="_blank">Tatum API documentation</a>
     */
    function generateDepositAddress(string $id, int $index = null)
    {
        $url = "/offchain/account/{$id}/address";
        return $this->post_path($index === '' || $index === null ? $url : $url . "?index={$index}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/generateDepositAddressesBatch" target="_blank">Tatum API documentation</a>
     */
    function generateDepositAddresses(array $data)
    {
        return $this->post($data, "/offchain/account/address/batch");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/addressExists" target="_blank">Tatum API documentation</a>
     */
    function checkAddressExists(string $address, string $currency, int $index = null)
    {
        $url = "/offchain/account/address/{$address}/{$currency}";
        return $this->get($index === '' || $index === null ? $url : $url . "?index={$index}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/GetWithdrawals" target="_blank">Tatum API documentation</a>
     */
    function getWithdrawals(string $status = "", string $currency = "", int $pageSize = 50, int $offset = 0)
    {
        $url = "/offchain/withdrawal?pageSize={$pageSize}&offset={$offset}";
        if ($status) {
            $url += "&status={$status}";
        }
        if ($currency) {
            $url += "&currency={$currency}";
        }
        return $this->get($url);
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/assignAddress" target="_blank">Tatum API documentation</a>
     */
    function assignDepositAddress(string $id, string $address)
    {
        return $this->post_path("/offchain/account/{$id}/address/{$address}");
    }
    function unassignDepositAddress(string $id, string $address)
    {
        return $this->delete_path("/offchain/account/{$id}/address/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/createErc20" target="_blank">Tatum API documentation</a>
     */
    function registerEthereumErc20(array $data)
    {
        return $this->post($data, "/offchain/ethereum/erc20");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/storeErc20Address" target="_blank">Tatum API documentation</a>
     */
    function storeErc20ContractAddress(string $name, string $address)
    {
        return $this->post("/offchain/ethereum/erc20/{$name}/{$address}");
    }


    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/storeTrcAddress" target="_blank">Tatum API documentation</a>
     */
    function storeTrcContractAddress(string $name, string $address)
    {
        return $this->post("/offchain/tron/trc/{$name}/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/createTrc" target="_blank">Tatum API documentation</a>
     */
    function registerTronTrc(array $data)
    {
        return $this->post($data, "/offchain/tron/trc");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/removeAddress" target="_blank">Tatum API documentation</a>
     */
    function removeDepositAddress(string $id, string $address)
    {
        return $this->delete("/offchain/account/{$id}/address/{$address}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/getAllDepositAddresses" target="_blank">Tatum API documentation</a>
     */
    function getDepositAddressesForAccount(string $id)
    {
        return $this->get("/offchain/account/{$id}/address");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/broadcastBlockchainTransaction" target="_blank">Tatum API documentation</a>
     */
    function offchainBroadcast(array $data)
    {
        return $this->post($data, "/offchain/withdrawal/broadcast");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/storeWithdrawal" target="_blank">Tatum API documentation</a>
     */
    function offchainStoreWithdrawal(array $data)
    {
        return $this->post($data, "/offchain/withdrawal");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/cancelInProgressWithdrawal" target="_blank">Tatum API documentation</a>
     */
    function offchainCancelWithdrawal(string $id, bool $revert = true)
    {
        return $this->delete("/offchain/withdrawal/{$id}?revert={$revert}");
    }

    /**
     * For more details, see <a href="https://tatum.io/apidoc#operation/completeWithdrawal" target="_blank">Tatum API documentation</a>
     */
    function offchainCompleteWithdrawal(string $id, string $txId)
    {
        return $this->put("/offchain/withdrawal/{$id}/{$txId}");
    }

    /**
     * Transfer
     */


    function TransferErc20(array $data)
    {
        return $this->post($data, "/offchain/ethereum/erc20/transfer");
    }

    function TransferTron(array $data)
    {
        return $this->post($data, "/offchain/tron/transfer");
    }

    function TransferBsc(array $data)
    {
        return $this->post($data, "/offchain/bsc/transfer");
    }

    function TransferBnb(array $data)
    {
        return $this->post($data, "/offchain/bnb/transfer");
    }

    function TransferPolygon(array $data)
    {
        return $this->post($data, "/offchain/polygon/transfer");
    }

    function TransferKlaytn(array $data)
    {
        return $this->post($data, "/offchain/klaytn/transfer");
    }


    function TransferCelo(array $data)
    {
        return $this->post($data, "/offchain/celo/transfer");
    }

    function TransferAlgorand(array $data)
    {
        return $this->post($data, "/offchain/algorand/transfer");
    }

    function TransferSolana(array $data)
    {
        return $this->post($data, "/offchain/solana/transfer");
    }

    function TransferBch(array $data)
    {
        return $this->post($data, "/offchain/bcash/transfer");
    }

    function TransferDoge(array $data)
    {
        return $this->post($data, "/offchain/dogecoin/transfer");
    }

    function TransferLtc(array $data)
    {
        return $this->post($data, "/offchain/litecoin/transfer");
    }

    function TransferBtc(array $data)
    {
        return $this->post($data, "/offchain/bitcoin/transfer");
    }


    function transferOperation(string $coin, array $data)
    {
        if ($this->network !== 'testnet' && $this->network !== 'mainnet') {
            throw new \TypeError(sprintf('Unsupported Network Type %s!', $this->network));
        }
        if ($this->in_arrayi($coin, $this->supportedBlockchain)) {
            switch ($coin) {
                case 'btc':
                    return $this->TransferBtc($data);
                    break;
                case 'bsc':
                    return $this->TransferBsc($data);
                    break;
                case 'bnb':
                    return $this->TransferBnb($data);
                    break;
                case 'sol':
                    return $this->TransferSolana($data);
                    break;
                case 'tron':
                    return $this->TransferTron($data);
                    break;
                case 'matic':
                    return $this->TransferPolygon($data);
                    break;
                case 'klay':
                    return $this->TransferKlaytn($data);
                    break;
                case 'celo':
                    return $this->TransferCelo($data);
                    break;
                case 'algo':
                    return $this->TransferAlgorand($data);
                    break;
                case 'doge':
                    return $this->TransferDoge($data);
                    break;
                case 'eth':
                    return $this->TransferErc20($data);
                    break;
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
                case 'bch':
                    return $this->TransferBch($data);
                    break;
                case 'ltc':
                    return $this->TransferLtc($data);
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