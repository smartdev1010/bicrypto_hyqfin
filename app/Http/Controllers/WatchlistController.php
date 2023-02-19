<?php

namespace App\Http\Controllers;

use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WatchlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function favs()
    {
        $favs = (new Watchlist)->getCached(auth()->user()->id);
        return response()->json([
            'favs' => $favs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if (Watchlist::where('user_id', $user->id)->where('currency', $request->currency)->where('pair', $request->pair)->exists()) {
            return response()->json(
                [
                    'success' => true,
                    'type' => 'warning',
                    'message' => 'Pair already in Watchlist'
                ]
            );
        } else {
            $watchlists = new Watchlist();
            $watchlists->user_id = $user->id;
            $watchlists->currency = $request->currency;
            $watchlists->pair = $request->pair;
            $watchlists->type = $request->type;
            $watchlists->save();
            return response()->json(
                [
                    'success' => true,
                    'type' => 'success',
                    'message' => 'Pair added to watchlist Successfully'
                ]
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Watchlist  $watchlist
     * @return \Illuminate\Http\Response
     */
    public function show(Watchlist $watchlist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Watchlist  $watchlist
     * @return \Illuminate\Http\Response
     */
    public function edit(Watchlist $watchlist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Watchlist  $watchlist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Watchlist $watchlist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Watchlist  $watchlist
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required|exists:watchlists,id'
        ]);

        if ($validate->fails()) {
            foreach (json_decode($validate->errors()) as $key => $error) {
                $notify[] = ['warning', $error[0]];
            }
            return response()->json(
                [
                    'success' => true,
                    'type' => 'error',
                    'message' => 'Pair has been removed from watchlist already'
                ]
            );
        }
        Watchlist::where('id', $request->id)->delete();
        (new Watchlist)->clearCache();

        return response()->json(
            [
                'success' => true,
                'type' => 'success',
                'message' => 'Pair Removed From Watchlist Successfully'
            ]
        );
    }
}
