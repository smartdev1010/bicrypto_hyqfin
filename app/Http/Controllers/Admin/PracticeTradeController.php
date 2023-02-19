<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Gate;

class PracticeTradeController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('binary_practice_log'), Response::HTTP_FORBIDDEN, '403 Forbidden');
        $page_title = "Practice Trade List";
        $empty_message = "No Data Found";
        return view('admin.practice.index', compact('page_title', 'empty_message'));
    }
}