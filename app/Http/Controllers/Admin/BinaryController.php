<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class BinaryController extends Controller
{

    public function trade_log()
    {
        abort_if(Gate::denies('binary_trade_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Trade List";
        return view('admin.binary.trade', compact('page_title'));
    }
    public function practice_log()
    {
        abort_if(Gate::denies('binary_practice_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Practice Trade List";
        return view('admin.binary.practice', compact('page_title'));
    }
}
