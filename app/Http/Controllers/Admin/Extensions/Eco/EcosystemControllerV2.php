<?php

namespace App\Http\Controllers\Admin\Extensions\Eco;

use App\Http\Controllers\Controller;
use App\Models\Eco\EcoWallet;
use App\Models\Eco\EcoFeesAccount;
use App\Models\Eco\EcoMarkets;
use App\Models\Eco\EcoMainnetTokens;
use App\Models\Eco\EcoNetworks;
use App\Models\Eco\EcoRealWallets;
use App\Models\Eco\EcoSettings;
use App\Models\Eco\EcoTokens;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class EcosystemController extends Controller
{
    public $eco;
    public $api;
    public $net;
    public function __construct()
    {
        $this->eco = new \Tatum\Sdk();
        $this->net = getNativeNetwork();
        if ($this->net == 'mainnet') {
            $this->eco->mainnet()->config()->setApiKey(getenv('TATUM_API_KEY'));
            $this->api =  $this->eco->mainnet()->api();
        } else {
            $this->eco->testnet()->config()->setApiKey(getenv('TATUM_TESTNET_API_KEY'));
            $this->eco->testnet()->config()->setDebug(true);
            $this->api =  $this->eco->testnet()->api();
        }
    }

    public function blockchain()
    {
        $page_title = 'Blockchains';
        $blockchains = EcoNetworks::paginate(getPaginate(20));

        return view('extensions.admin.eco.blockchains', compact('page_title', 'blockchains'));
    }

    public function blockchain_update_status(Request $request)
    {
        $blockchain = EcoNetworks::where('id', $request->id)->first();
        $blockchain->status = $request->status;
        $blockchain->save();

        return response()->json([
            'type' => 'success',
            'message' => 'Blockchain Status Changed Successfully',
        ]);
    }


    //
    //
    // Wallet
    //
    //

    public function wallet($chain)
    {
        $network = EcoNetworks::where('chain', $chain)->first();
        $page_title = $network->name . ' Ecosystem Wallet';
        $wallet = EcoRealWallets::where('chain', $chain)->first();
        $tokens = EcoTokens::where('chain', $chain)->get();
        if ($wallet != null) {
            try {
                if ($chain == 'ETH') {
                    // dd($this->api->ethereum()->ethGetTransactionByAddress($wallet->address, "50"));
                    $wallet->balance = $this->net == 'mainnet' ? $this->api->ethereum()->ethGetBalance($wallet->address)['balance'] : $this->api->ethereum()->ethGetBalance($wallet->address, [$x_testnet_type = getenv('TESTNET_TYPE')])['balance'];
                    // $wallet->trxs = $this->api->ethereum()->ethGetTransactionByAddress($wallet->address);
                    // $wallet->internal_trxs = json_decode($this->eco->ethGetAccountInternalTransactions($wallet->address));
                } else if ($chain == 'BSC') {
                    $wallet->balance = $this->net == 'mainnet' ? $this->api->bNBSmartChain()->bscGetBalance($wallet->address)['balance'] : $this->api->bNBSmartChain()->bscGetBalance($wallet->address)['balance'];
                } else if ($chain == 'TRON') {
                    $mainnetToken = EcoMainnetTokens::where('symbol', 'TRON')->where('chain', $chain)->first();
                    $decimals = '0.';
                    for ($i = 1; $i < $mainnetToken->decimals; $i++) {
                        $decimals .= 0;
                    }
                    $decimals = $decimals . '1';
                    $wallet->balance = $this->api->tron()->tronGetAccount($wallet->address)['balance'] * $decimals;
                } else if ($chain == 'BNB') {
                    dd($this->api->bNBBeaconChain()->bnbGetAccount($wallet->address));
                    //$wallet->balance = json_decode($this->eco->bnbGetAccountBalance($wallet->address))->balances->free;
                } else if ($chain == 'MATIC') {
                    $wallet->balance = $this->api->polygon()->polygonGetBalance($wallet->address)['balance'];
                } else if ($chain == 'KLAY') {
                    dd($this->api->polygon()->polygonGetBalance($wallet->address));
                    $wallet->balance = json_decode($this->eco->klaytnGetAccountBalance($wallet->address))->balance;
                } else if ($chain == 'CELO') {
                    $wallet->balance = $this->api->celo()->celoGetBalance($wallet->address)['celo'];
                } else if ($chain == 'ALGO') {
                    dd($this->api->polygon()->polygonGetBalance($wallet->address));
                    $wallet->balance = json_decode($this->eco->algorandGetAccountBalance($wallet->address))->balance;
                } else if ($chain == 'BTC') {
                    $wallet->balance = $this->api->bitcoin()->btcGetBalanceOfAddress($wallet->address)['balance'];
                } else if ($chain == 'SOL') {
                    dd($this->api->polygon()->polygonGetBalance($wallet->address));
                    $wallet->balance = json_decode($this->eco->solanaGetAccountBalance($wallet->address))->balance;
                }
                if (is_array($wallet->internal_trxs)) {
                    $wallet->internal_trxs = arrayToObject($wallet->internal_trxs);
                } else {
                    $wallet->internal_trxs = [];
                }
                if (is_array($wallet->trxs)) {
                    $wallet->trxs = arrayToObject($wallet->trxs);
                } else {
                    $wallet->trxs = [];
                }
            } catch (\Throwable $th) {
                $wallet->balance = 'not active';
            }
        }
        return view('extensions.admin.eco.wallet', compact('page_title', 'wallet', 'network', 'tokens'));
    }

    public function real_wallet_create($chain)
    {
        try {
            switch (strtolower($chain)) {
                case 'eth':
                    $wallet = $this->api->ethereum()->ethGenerateWallet();
                    $walletAddress = $this->api->ethereum()->ethGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->ethereum()->ethGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'btc':
                    $wallet = $this->api->bitcoin()->btcGenerateWallet();
                    $walletAddress = $this->api->bitcoin()->btcGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->bitcoin()->btcGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'bsc':
                    $wallet = $this->api->bNBSmartChain()->bscGenerateWallet();
                    $walletAddress = $this->api->bNBSmartChain()->bscGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->bNBSmartChain()->bscGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'tron':
                    $wallet = $this->api->tron()->generateTronwallet();
                    $walletAddress = $this->api->tron()->tronGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->tron()->tronGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'matic':
                    $wallet = $this->api->polygon()->polygonGenerateWallet();
                    $walletAddress = $this->api->polygon()->polygonGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->polygon()->polygonGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'klay':
                    $wallet = $this->api->klaytn()->klaytnGenerateWallet();
                    break;
                case 'celo':
                    $wallet = $this->api->celo()->celoGenerateWallet();
                    $walletAddress = $this->api->celo()->celoGenerateAddress($wallet['xpub'], '0')['address'];
                    $walletPrivateKey = $this->api->celo()->celoGenerateAddressPrivateKey(
                        [
                            "index" => 0,
                            "mnemonic" => $wallet['mnemonic']
                        ]
                    )['key'];
                    break;
                case 'doge':
                    $wallet = $this->api->dogecoin()->dogeGenerateWallet();
                    break;
                case 'bch':
                    $wallet = $this->api->bitcoinCash()->bchGenerateWallet();
                    break;
                case 'ltc':
                    $wallet = $this->api->litecoin()->ltcGenerateWallet();
                    break;
                case 'bnb':
                    $wallet = $this->api->bNBBeaconChain()->bnbGenerateWallet();
                    break;
                default:
                    break;
            }
            $real_wallet = new EcoRealWallets();
            $real_wallet->chain = $chain;
            if (in_array($chain, ["BNB", "SOL"])) {
                $real_wallet->private_key = $wallet['privateKey'];
                $real_wallet->address = $wallet['address'];
            } else {
                $real_wallet->xpub = $wallet['xpub'];
                $real_wallet->mnemonic = $wallet['mnemonic'];
                $real_wallet->private_key = $walletPrivateKey;
                $real_wallet->address = $walletAddress;
            }
            $real_wallet->save();
            $notify[] = ['success', 'Wallet Generated Successfully'];
        } catch (\Throwable $th) {
            $notify[] = ['error', $th];
        }
        return back()->withNotify($notify);
    }

    public function real_wallet_secure($chain)
    {
        $real_wallet = EcoRealWallets::where('chain', $chain)->first();
        $real_wallet->mnemonic = null;
        $real_wallet->save();
        $notify[] = ['success', 'Wallet Info Secured Successfully'];
        return back()->withNotify($notify);
    }

    public function real_wallet_add(Request $request, $chain)
    {
        try {
            $real_wallet = new EcoRealWallets();
            $real_wallet->chain = $chain;
            if (in_array($chain, ["ALGO", "SOL"])) {
                $real_wallet->mnemnic = $request->mnemnic;
            } else {
                $real_wallet->xpub = $request->xpub;
                $real_wallet->private_key = $request->private_key;
            }
            $real_wallet->address = $request->address;
            $real_wallet->save();
            $notify[] = ['success', 'Wallet Added Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function real_wallet_remove($chain)
    {
        try {
            $real_wallet = EcoRealWallets::where('chain', $chain)->first();
            $real_wallet->delete();
            $notify[] = ['success', 'Wallet Removed Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }


    //
    //
    // Tokens
    //
    //

    public function tokens($chain)
    {
        $page_title = 'Tokens';
        $network = EcoNetworks::where('chain', $chain)->first();
        $wallet = EcoRealWallets::where('chain', $chain)->first();
        return view('extensions.admin.eco.tokens', compact('page_title', 'network', 'wallet', 'chain'));
    }

    public function token_deploy(Request $request, $chain)
    {
        $validate = Validator::make($request->all(), [
            'symbol' => 'required|string|max:255|unique:eco_tokens,symbol',
            'name' => 'required|string|max:255',
            'cap' => 'required|numeric',
            'decimals' => 'required|numeric',
            'supply' => 'required|numeric',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {
            $wallet = EcoRealWallets::where('chain', $chain)->first();

            if (in_array($chain, ["ETH", "BSC", "MATIC", "KLAY", "XDC", "ONE"])) {
                if ($chain == 'ETH') {
                    $data = array(
                        "chain" => $chain,
                        "symbol" => $request->symbol,
                        "name" => $request->name,
                        "totalCap" => $request->cap,
                        "supply" => $request->supply,
                        "digits" => getAmount($request->decimals),
                        "address" => $wallet->address,
                        "fromPrivateKey" => $wallet->private_key,
                        "fee" => array(
                            "gasLimit" => "6000000",
                            "gasPrice" => "20"
                        )
                    );
                } else {
                    $data = array(
                        "chain" => $chain,
                        "symbol" => $request->symbol,
                        "name" => $request->name,
                        "totalCap" => $request->cap,
                        "supply" => $request->supply,
                        "digits" => getAmount($request->decimals),
                        "address" => $wallet->address,
                        "fromPrivateKey" => $wallet->private_key
                    );
                }
                $token = json_decode($this->eco->ChainDeployErc20($data));
            } else if ($chain == 'TRON') {
                $data = [
                    "fromPrivateKey" => $wallet->private_key,
                    "recipient" => $wallet->address,
                    "name" => $request->name,
                    "symbol" => $request->symbol,
                    "totalSupply" => getAmount($request->supply),
                    "decimals" => getAmount($request->decimals)
                ];
                $token = json_decode($this->eco->DeployTronToken($data, $request->type));
            } else if ($chain == 'CELO') {
                $data = [
                    "chain" => $chain,
                    "fromPrivateKey" => $wallet->private_key,
                    "address" => $wallet->address,
                    "name" => $request->name,
                    "symbol" => $request->symbol,
                    "totalCap" => $request->supply,
                    "supply" => $request->supply,
                    "digits" => getAmount($request->decimals),
                    "feeCurrency" => 'CELO',

                ];
                $token = json_decode($this->eco->ChainDeployErc20($data));
            } else if ($chain == 'SOL') {
                $data = [
                    "chain" => $chain,
                    "name" => $request->name,
                    "symbol" => $request->symbol,
                    "supply" => $request->supply,
                    "digits" => getAmount($request->decimals),
                    "address" => $wallet->address,
                    "from" => $wallet->address,
                    "fromPrivateKey" => $wallet->private_key,
                ];
                $token = json_decode($this->eco->ChainDeployErc20($data));
            }
            if (isset($token->txId)) {
                $new_token = new EcoTokens();
                $new_token->chain = $chain;
                $new_token->symbol = strtoupper($request->symbol);
                $new_token->name = $request->name;
                $new_token->cap = $request->cap;
                $new_token->decimals = $request->decimals;
                $new_token->supply = $request->supply;
                $new_token->holder_address = $wallet->address;
                $new_token->actions = 1;
                $new_token->hash = $token->txId;
                if (getNativeNetwork() != 'mainnet') {
                    $new_token->testnet = getenv('TESTNET_TYPE');
                    $new_token->network = 'testnet';
                } else {
                    $new_token->network = 'mainnet';
                }
                $new_token->save();
                $new_token->clearCache();
                $notify[] = ['success', 'Token Deployed Successfully'];
            } else {
                $notify[] = ['error', $token->message];
            }
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function token_add(Request $request, $chain)
    {
        $validate = Validator::make($request->all(), [
            'symbol' => 'required|string|max:255|unique:eco_tokens,symbol',
            'name' => 'required|string|max:255',
            'cap' => 'required|numeric',
            'supply' => 'required|numeric',
            'hash' => 'required|string',
            'token_address' => 'required|string',
            'holder_address' => 'required|string',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {
            $network = EcoNetworks::where('chain', $chain)->first();
            $new_token = new EcoTokens();
            $new_token->chain = $chain;
            $new_token->symbol = strtoupper($request->symbol);
            $new_token->name = $request->name;
            $new_token->cap = $request->cap;
            $new_token->decimals = $request->decimals;
            $new_token->supply = $request->supply;
            $new_token->address = $request->token_address;
            $new_token->holder_address = $request->holder_address;
            $new_token->actions = 2;
            $new_token->hash = $request->hash;
            $new_token->testnet = $network->testnet;
            $new_token->save();
            $new_token->clearCache();

            $notify[] = ['success', 'Token Deployed Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function token_smart_contract_fetch($chain, $id)
    {
        $token = EcoTokens::where('id', $id)->first();
        try {
            $token->address = json_decode(
                $this->eco->GetSmartContractFromAddress($chain, $token->hash)
            )->contractAddress;
            $token->actions = 2;
            $token->save();
            $token->clearCache();
            $notify[] = ['success', 'Token Smart Contract Fetched Successfully'];
        } catch (\Throwable $th) {
            $notify[] = ['error', 'Token Smart Contract Fetching Failed'];
        }
        return back()->withNotify($notify);
    }

    public function token_smart_contract_add(Request $request, $chain)
    {
        $token = EcoTokens::where('id', $request->id)->first();
        $token->address = $request->smartContract;
        $token->actions = 2;
        $token->save();
        $token->clearCache();

        $notify[] = ['success', 'Token Smart Contract Address Added Successfully'];
        return back()->withNotify($notify);
    }

    public function token_register(Request $request, $chain)
    {
        $validate = Validator::make($request->all(), [
            'base_pair' => 'required|string',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {
            $token = EcoTokens::where('id', $request->id)->first();
            $wallet = EcoRealWallets::where('chain', $chain)->first();
            if (in_array($chain, ["ETH", "CELO", "MATIC", "KCS", "BSC", "ONE", "XDC", "KLAY", "SOL"])) {
                $data = array(
                    "symbol" => $token->symbol,
                    "supply" => "$token->supply",
                    "decimals" => $token->decimals,
                    "description" => $token->name,
                    "basePair" => $request->base_pair,
                    "address" => $wallet->address
                );
                $req = json_decode($this->eco->RegisterToken($data, $chain));
            } else if ($chain == 'TRON') {
                $data = array(
                    "symbol" => $token->symbol,
                    "supply" => "$token->supply",
                    "decimals" => $token->decimals,
                    "description" => $token->name,
                    "type" => $request->type,
                    "basePair" => $request->base_pair,
                    "address" => $wallet->address
                );
                $req = json_decode($this->eco->RegisterTronToken($data, $chain));
                $token->type = $request->type;
            }
            if (!isset($req->statusCode)) {
                $token->base_pair = $request->base_pair;
                $token->actions = 3;
                $token->account_id = $req->accountId;
                $token->save();
                $token->clearCache();
                $notify[] = ['success', 'Token Registered Successfully'];
            } else {
                $notify[] = ['warning', $req->message];
            }
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function token_sync($chain, $id)
    {
        $token = EcoTokens::where('id', $id)->first();
        $req = json_decode($this->eco->SyncSmartContractToErc20Token($token->symbol, $token->address));
        if (!isset($req->statusCode)) {
            $token->actions = 4;
            $token->save();
            $token->clearCache();
            $notify[] = ['success', 'Token Synced Successfully'];
        } else {
            $notify[] = ['warning', $req->message];
        }
        return back()->withNotify($notify);
    }
    public function add_icon(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'image' => 'mimes:jpeg,jpg,png,svg'
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        $path = imagePath()['cryptoCurrency']['path'];
        $size = imagePath()['cryptoCurrency']['size'];
        if (isset($request->image)) {
            try {
                $filename = uploadimg($request->image, $path, $size, $request->symbol, strtolower($request->symbol . '.png'));
                $notify[] = ['success', $filename . ' Icon Uploaded Successfully'];
            } catch (\Exception $exp) {
                $notify[] = ['error', 'Icon could not be uploaded.'];
            }
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function token_withdraw_settings(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'withdraw_min' => 'required|numeric',
            'withdraw_max' => 'required|numeric',
            'withdraw_fee' => 'required|numeric',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {

            $token = EcoTokens::where('id', $request->id)->first();
            $token->withdraw_min = $request->withdraw_min;
            $token->withdraw_max = $request->withdraw_max;
            $token->withdraw_fee = $request->withdraw_fee;
            $token->save();
            $token->clearCache();

            $notify[] = ['success', 'Token Withdraw Settings Updated Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    public function token_fees_account_create(Request $request, $chain)
    {
        $wal = EcoRealWallets::where('chain', $request->chain)->first();
        $provider = EcoSettings::first();
        $user = Auth::user();
        $net = getNativeNetwork();
        if (!EcoFeesAccount::where('chain', $request->chain)->where('network', $net)->where('symbol', $request->symbol)->exists()) {
            try {
                $payload = array(
                    "currency" => $request->symbol . ($request->postfix ?? ''),
                    "xpub" =>   $request->chain == 'BNB' ? $wal->address : $wal->xpub,
                    "customer" => array(
                        "accountingCurrency" => $provider->accounting_currency ?? 'USD',
                        "customerCountry" => $user->client_country ?? 'US',
                        "externalId" => "$user->id",
                        "providerCountry" => $provider->provider_country ?? 'US'
                    ),
                    "compliant" => false,
                    "accountCode" => "AC_$user->id",
                    "accountingCurrency" => $user->accounting_currency ?? 'USD',
                    "accountNumber" => "$user->id"
                );

                $account = json_decode($this->eco->createAccount($payload));
                if (!isset($account->errorCode)) {
                    $fees_wallet = new EcoFeesAccount();
                    $fees_wallet->chain = $chain;
                    $fees_wallet->network = $net;
                    $fees_wallet->symbol = $request->symbol;
                    $fees_wallet->postfix = $request->postfix;
                    $fees_wallet->account_id = $account->id;
                    $fees_wallet->customer_id = $account->customerId;
                    $fees_wallet->save();
                    $fees_wallet->clearCache();

                    $notify[] = ['success', 'Wallet Created Successfully'];
                } else {
                    $notify[] = ['error', $account->message];
                }
            } catch (\Throwable $th) {
                return response()->json(
                    [
                        'success' => true,
                        'type' => 'error',
                        'message' => $th
                    ]
                );
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        } else {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Fees account already exists'
                ]
            );
        }
    }


    //
    //
    // Mainnet Tokens
    //
    //


    public function mainnet_tokens($chain)
    {
        $page_title = 'Tokens';
        return view('extensions.admin.eco.mainnet_tokens', compact('page_title', 'chain'));
    }

    public function mainnet_token_withdraw_settings(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'withdraw_min' => 'required|numeric',
            'withdraw_max' => 'required|numeric',
            'withdraw_fee' => 'required|numeric',
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['warning', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {

            $token = EcoMainnetTokens::where('id', $request->id)->first();
            $token->withdraw_min = $request->withdraw_min;
            $token->withdraw_max = $request->withdraw_max;
            $token->withdraw_fee = $request->withdraw_fee;
            $token->save();
            $token->clearCache();

            $notify[] = ['success', 'Token Withdraw Settings Updated Successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    //
    //
    // Markets
    //
    //


    public function markets()
    {
        $page_title = 'Ecosystem Markets';
        $net = getNativeNetwork();
        $tokens = [];
        $currencies = EcoTokens::where('network', $net)->where('status', 1)->select('chain', 'symbol', 'network')->get();
        $networks = EcoNetworks::where('status', 1)->get();
        if ($net == 'mainnet') {
            foreach ($networks as $network) {
                if (EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->exists()) {
                    $datas[] = EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->get();
                }
            }
            foreach ($datas as $data) {
                foreach ($data as $item) {
                    $tokens[] = $item;
                }
            }
        }
        return view('extensions.admin.eco.markets', compact('page_title', 'currencies', 'tokens', 'networks', 'net'));
    }

    public function market_store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'currency' => 'required|string',
            'pair' => 'required|string',
            'taker' => 'required|numeric',
            'maker' => 'required|numeric',
            'minimum' => 'required|numeric',
            'maximum' => 'required|numeric'
        ]);
        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['error', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => $notify[0][0],
                    'message' => $notify[0][1]
                ]
            );
        }
        try {
            $tokens = [];
            $tokens_postfixed = [];
            $networks = EcoNetworks::where('status', 1)->get();
            foreach ($networks as $network) {
                if (EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->exists()) {
                    $datas[] = EcoMainnetTokens::where('chain', $network->chain)->where('status', 1)->select('chain', 'symbol', 'network', 'postfix')->get();
                }
            }
            foreach ($datas as $data) {
                foreach ($data as $item) {
                    if ($item->postfix != null) {
                        $tokens_postfixed[] = $item->symbol;
                    } else {
                        $tokens[] = $item->symbol;
                    }
                }
            }

            $currency_symbol = explode('|', $request->currency)[0];
            $currency_chain = explode('|', $request->currency)[1];
            $pair_symbol = explode('|', $request->pair)[0];
            $pair_chain = explode('|', $request->pair)[1];
            $market = new EcoMarkets();
            if (in_array($currency_symbol, $tokens_postfixed)) {
                $market->currency = $currency_symbol . ($currency_chain != 'ETH' ? '_' . $currency_chain : '');
                $market->currency_chain = $currency_chain;
            } else {
                $market->currency = $currency_symbol;
                $market->currency_chain = $currency_chain;
            }

            if (in_array($pair_symbol, $tokens_postfixed)) {
                $market->pair = $pair_symbol . ($pair_chain != 'ETH' ? '_' . $pair_chain : '');
                $market->pair_chain = $pair_chain;
            } else {
                $market->pair = $pair_symbol;
                $market->pair_chain = $pair_chain;
            }
            $market->symbol = $market->currency . '/' . $market->pair;
            $market->taker = $request->taker;
            $market->maker = $request->maker;
            $market->min_amount = $request->minimum;
            $market->max_amount = $request->maximum;
            $market->type = $request->type ?? 'spot';
            $market->network = getNativeNetwork();
            $market->status = 1;
            $market->save();
            $market->clearCache();

            $notify[] = ['success', $market->symbol . ' has been created successfully'];
        } catch (\Throwable $th) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => $th
                ]
            );
        }
        return response()->json(
            [
                'success' => true,
                'type' => $notify[0][0],
                'message' => $notify[0][1]
            ]
        );
    }

    // Extra


    public function getTradeChart($symbol, $currency, $timeframe)
    {
        $now = Carbon::now()->getPreciseTimestamp(3);
        switch ($timeframe) {
            case 'MIN_1':
                $frame = 60000;
                break;
            case 'MIN_3':
                $frame = 180000;
                break;
            case 'MIN_5':
                $frame = 300000;
                break;
            case 'MIN_15':
                $frame = 900000;
                break;
            case 'MIN_30':
                $frame = 1800000;
                break;
            case 'HOUR_1':
                $frame = 3600000;
                break;
            case 'HOUR_4':
                $frame = 14400000;
                break;
            case 'HOUR_12':
                $frame = 43200000;
                break;
            case 'DAY':
                $frame = 86400000;
                break;
            case 'WEEK':
                $frame = 604800000;
                break;
            case 'MONTH':
                $frame = 2592000000;
                break;
            case 'YEAR':
                $frame = 31536000000;
                break;
            default:
                $frame = 300000;
                break;
        }
        $data = array(
            "pair" => $symbol . '/' . $currency,
            "from" => ($now - $frame),
            "to" => $now,
            "timeFrame" => $timeframe
        );
        return json_decode($this->eco->getTradeChart($data));
    }

    public function addresses($chain, $symbol)
    {
        $page_title = $symbol . ' Addresses';
        return view('extensions.admin.eco.addresses', compact('page_title', 'chain', 'symbol'));
    }

    public function addresses_store($chain, $symbol)
    {
        $real_wallet = EcoRealWallets::where('chain', $chain)->first();
        if (EcoWallet::where('chain', $chain)->exists()) {
            $last = EcoWallet::where('chain', $chain)->orderBy('index', 'DESC')->first()->index + 1;
        } else {
            $last = 0;
        }
        $payload = array(
            "chain" => $chain,
            "owner" => $real_wallet->address,
            "from" => $last,
            "to" => $last,
        );
        $query = json_decode($this->eco->gasPump($payload));
        for ($i = 0; $i < count($query); $i++) {
            $wallet = new EcoWallet();
            $wallet->index = getAmount($i + $last);
            $wallet->chain = $chain;
            $wallet->symbol = $symbol;
            $wallet->address = $query[$i];
            $wallet->network = $this->net;
            $wallet->save();
        }
        $notify[] = ['success', 'Wallets Created Successfully'];
        return back()->withNotify($notify);
    }

    public function addresses_activate($chain, $symbol, $id)
    {
        $wallet = EcoRealWallets::where('chain', $chain)->first();
        $address = EcoWallet::where('id', $id)->first();
        $payload = array(
            "chain" => $chain,
            "owner" => $wallet->address,
            "from" => $address->index,
            "to" => $address->index,
            "feeLimit" => 600,
            "fromPrivateKey" => $wallet->private_key
        );
        $query = json_decode($this->eco->gasPumpActivate($payload));
        $address->activation_trx = $query->txId;
        $address->save();
        $notify[] = ['success', 'Addresses Activation Sent'];
        return back()->withNotify($notify);
    }

    public function addresses_check_activation($chain, $symbol, $id)
    {
        $wallet = EcoWallet::where('id', $id)->first();
        if ($wallet->activation_trx != null) {
            $query = json_decode($this->eco->gasPumpCheckActivation($chain, $wallet->activation_trx), true);
            if ($query['valid'][0]['index'] == $wallet->index) {
                $wallet->status = 1;
                $wallet->save();
                $notify[] = ['success', 'Addresses Was Activated Successfully'];
            } else {
                $notify[] = ['error', $query['message'] ?? 'Pending'];
            }
        } else {
            $notify[] = ['error', 'No TxId found, Activate First'];
        }
        return back()->withNotify($notify);
    }
}
