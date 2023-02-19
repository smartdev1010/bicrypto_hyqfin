<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class TradeLogController extends Controller
{

    public function index()
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Trade List";
        $empty_message = "No Data Found";
        return view('admin.trade_log.index', compact('page_title', 'empty_message'));
    }
}