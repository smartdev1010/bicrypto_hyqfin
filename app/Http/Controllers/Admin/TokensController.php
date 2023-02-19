<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tokens;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Str;

class TokensController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        abort_if(Gate::denies('api_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = 'Tokens Manager';
        $empty_message = 'No Tokens Found';
        $tokens = Tokens::get();
        return view('admin.setting.token-manager', compact('page_title', 'empty_message', 'tokens'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $token = new Tokens();
        $token->name = $request->name;
        $token->abilities = json_encode($request->abilities);
        $token->token = Str::random(32);
        $token->save();

        $notify = ['success', 'Token Created Successfully'];
        return back()->withNotify($notify);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        abort_if(Gate::denies('api_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $token = Tokens::where('id', $id)->first();
        $page_title = $token->name . ' Token Edit';
        return view('admin.setting.token-edit', compact('page_title', 'token'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $token = Tokens::findOrFail($id);
        $token->name = $request->name;
        $token->abilities = json_encode($request->abilities);
        $token->save();

        $notify = ['success', 'Token Updated Successfully'];
        return back()->withNotify($notify);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        abort_if(Gate::denies('api_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $token = Tokens::findOrFail($id);
        $token->delete();

        $notify = ['success', 'Token Removed Successfully'];
        return back()->withNotify($notify);
    }
}
