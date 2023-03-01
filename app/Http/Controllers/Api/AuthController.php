<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\AdminNotification;
use App\Models\MLM\MLM;
use App\Models\Tokens;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Rules\Password;

class AuthController extends Controller
{

    public function authenticate(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'ability' => 'required|string',
            'email' => 'required|string',
        ]);
        $token = Tokens::where('token', $request->token)->first();

        if (!strpos($token->abilities, 'auth')) {
            return
                [
                    'result' => 'error',
                    'message' => "API don't have authentication permission"
                ];
        }

        $user = User::firstOrNew(['email' => $request->email]);

        if (!$user->exists) {
            $user->password = Hash::make('12345678');
            $user->name = 'No Name';
            $user->firstname = 'No Name';
            $user->lastname = 'No Name';
            $user->username = $request->email;
            $user->email = $request->email;
            $user->email_verified_at = Carbon::now();
            $user->status = 1;
            $user->role_id = 2;
            $user->save();

            return response()->json([
                'success' => true,
                'type' => 'success',
                'message' => 'User Created Successfully',
                'password' => '12345678',
                'token' => $request->session()->get('_token')
            ]);
        }

        try {
            auth()->login($user);
            return response()->json([
                'success' => true,
                'type' => 'success',
                'message' => 'User Authenticated Successfully',
                'token' => $request->session()->get('_token')
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'type' => 'error',
                'message' => $th
            ]);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'token' => 'required|string|exists:tokens',
            'email' => 'required|string|email|max:255|unique:users',
            'firstname' => 'required|string|max:60',
            'lastname' => 'required|string|max:60',
            'username' => 'required|string|unique:users|min:6',
            'phone' => 'required|string',
        ]);

        $token = Tokens::where('token', $request->token)->first();

        if (!strpos($token->abilities, 'auth')) {
            return
                [
                    'result' => 'error',
                    'message' => "API don't have authentication permission"
                ];
        }

        if (isset($request->reference)) {
            $referUser = User::where('username', $request->reference)->first();
        } else {
            $referUser = null;
        }

        if (isset($request->phone)) {
            $phone = $request->phone;
        } else {
            $phone = null;
        }

        if (getExt(3) == 1) {
            $plat_mlm = getPlatform('mlm');
            if ($plat_mlm->type == 'binary') {
                $newmlm = new MLM();
                $newmlm->username = $request->username;
                $newmlm->save();

                if ($referUser != null) {
                    $mlm = getH($request->reference);
                    $leaf = $this->findLeafNode($mlm);
                    if ($leaf->L == null) {
                        $leaf->L = $request->username;
                        $leaf->save();
                    } else {
                        $leaf->R = $request->username;
                        $leaf->save();
                    }
                }
            } else {
                $newmlm = new MLM();
                $newmlm->username = $request->username;
                $newmlm->save();
            }
        }
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make('12345678'),
            'name' => $request->firstname . ' ' . $request->lastname,
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'username' => $request->username,
            'phone' => $phone ? $phone : null,
            'ref_by' => $referUser ? $referUser->id : null,
            'status' => 1,
            'role_id' => 2,
        ]);;


        $adminNotification = new AdminNotification();
        $adminNotification->user_id = $user->id;
        $adminNotification->title = 'New member registered';
        $adminNotification->click_url = route('admin.users.detail', $user->id);
        $adminNotification->save();

        return response()->json([
            'email' => $user->email,
            'password' => '12345678',
            'name' => $user->name,
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'username' => $user->username,
            'phone' => $user->phone
        ]);
    }

    function findLeafNode($node)
    {
        while ($node->L != null || $node->R != null) {
            if ($node->L == null) {
                $node = getH($node->R);
            } else {
                $node = getH($node->L);
            }
        }
        return $node;
    }
}