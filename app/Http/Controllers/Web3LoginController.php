<?php

namespace App\Http\Controllers;

use Elliptic\EC;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use kornrunner\Keccak;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Web3LoginController
{
    public function generate(string $nonce): string
    {
        return str_replace(':nonce:', $nonce, value(config('web3.message', "Hey! Sign this message to prove you have access to this wallet. This won't cost you anything.\n\nSecurity code (you can ignore this): :nonce:")));
    }

    public function verify(string $nonce, string $signature, string $address): bool
    {
        $message = $this->generate($nonce);

        $hash = Keccak::hash(sprintf("\x19Ethereum Signed Message:\n%s%s", strlen($message), $message), 256);
        $sign   = ['r' => substr($signature, 2, 64), 's' => substr($signature, 66, 64)];
        $recid  = ord(hex2bin(substr($signature, 130, 2))) - 27;

        if ($recid != ($recid & 1)) {
            return false;
        }

        $pubkey = (new EC('secp256k1'))->recoverPubKey($hash, $sign, $recid);

        return hash_equals(
            (string) Str::of($address)->after('0x')->lower(),
            substr(Keccak::hash(substr(hex2bin($pubkey->encode('hex')), 1), 256), 24)
        );
    }
    public function signature(Request $request)
    {
        $request->session()->put('nonce', $nonce = Str::random());

        return $this->generate($nonce);
    }

    public function link(Request $request)
    {
        $request->validate([
            'address' => ['required', 'string', 'regex:/0x[a-fA-F0-9]{40}/m'],
            'signature' => ['required', 'string', 'regex:/^0x([A-Fa-f0-9]{130})$/'],
        ]);

        if (!$this->verify($request->session()->pull('nonce'), $request->input('signature'), $request->input('address'))) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Signature verification failed.'
                ]
            );
        }

        $user = Auth::user();
        $user->eth_Address = strtolower($request->input('address'));
        $user->save();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Wallet Linked Successfully'
            ]
        );
    }

    public function login(Request $request)
    {
        $request->validate([
            'address' => ['required', 'string', 'regex:/0x[a-fA-F0-9]{40}/m'],
            'signature' => ['required', 'string', 'regex:/^0x([A-Fa-f0-9]{130})$/'],
        ]);

        if (!$this->verify($request->session()->pull('nonce'), $request->input('signature'), $request->input('address'))) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Signature verification failed.'
                ]
            );
        }

        if (User::where('eth_Address', strtolower($request->input('address')))->exists()) {
            $user = User::where('eth_Address', strtolower($request->input('address')))->first();
            Auth::login($user);
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Wallet Authenticated Successfully'
                ]
            );
        } else {
            return response()->json(
                [
                    'success' => false,
                    'type' => 'error',
                    'message' => 'Address not registered.'
                ]
            );
        }
    }

    // public function message(): string
    // {
    //     $nonce = Str::random();
    //     $message = "Sign this message to confirm you own this wallet address. This action will not cost any gas fees.\n\nNonce: " . $nonce;

    //     session()->put('sign_message', $message);

    //     return $message;
    // }

    // public function verify(Request $request): string
    // {
    //     $result = $this->verifySignature(session()->pull('sign_message'), $request->signature, $request->address);
    //     if ($result == true) {
    //         if (User::where('ethAddress', $request->address)->exists()) {
    //             $user = User::where('ethAddress', $request->address)->first();
    //             auth()->login($user);
    //             return json_encode([
    //                 'success' => true,
    //                 'type' => 'success',
    //                 'message' => 'Wallet Authenticated Successfully'
    //             ]);
    //         } else {
    //             return json_encode([
    //                 'success' => false,
    //                 'type' => 'error',
    //                 'message' => 'Your Account Dont Have Connected Wallet'
    //             ]);
    //         }
    //     }
    // }

    // protected function verifySignature(string $message, string $signature, string $address): bool
    // {
    //     $hash = Keccak::hash(sprintf("\x19Ethereum Signed Message:\n%s%s", strlen($message), $message), 256);
    //     $sign = [
    //         'r' => substr($signature, 2, 64),
    //         's' => substr($signature, 66, 64),
    //     ];
    //     $recid = ord(hex2bin(substr($signature, 130, 2))) - 27;

    //     if ($recid != ($recid & 1)) {
    //         return false;
    //     }

    //     $pubkey = (new EC('secp256k1'))->recoverPubKey($hash, $sign, $recid);
    //     $derived_address = '0x' . substr(Keccak::hash(substr(hex2bin($pubkey->encode('hex')), 1), 256), 24);

    //     return (Str::lower($address) === $derived_address);
    // }
}
