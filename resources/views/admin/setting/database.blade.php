@extends('layouts.admin')
@section('content')
    @if ($mlm->installed == 1)
        <div class="card">
            <div class="card-body">
                <div class="card-title">
                    {{ __('MLM Table Optimizer') }}
                </div>
                <br>
                <a href="{{ route('admin.mlm.regenerate') }}"
                    class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Regenerate MLM Rows For Old Users') }}</a>
            </div>
        </div>
    @endif
    <br>
    <div class="card">
        <div class="card-title p-3">
            {{ __('Logs Cleaner') }}
        </div>
        <div class="card-body">

            <div class="grid grid-cols-4 gap-5 jus">
                <div class="">
                    <form method="POST" action="{{ route('admin.database.binary.practice.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Binary Practice Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.binary.trade.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class=" w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Binary Trade Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.trade.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Trade Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.forex.investments.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class=" w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Forex Investments Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.bot.investments.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Bot Investments Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.staking.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Staking Logs') }}</button>
                    </form>
                </div>
                <div class="">
                    <form method="POST" action="{{ route('admin.database.ico.logs.clean') }}">
                        @csrf
                        <button type="submit"
                            class=" w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Token ICO Logs') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                {{ __('Wallets Optimizer') }}
            </div>
            <div class="row">
                <div class="lg:col-span-3 md:col-span-4 xs:col-span-6 mb-1">
                    <form method="POST" action="{{ route('admin.database.wallets.clean') }}">
                        @csrf
                        <button type="submit"
                            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ __('Clean Broken Wallets') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                System Optimizer
            </div>
            <div class="row">
                <div class="lg:col-span-3 md:col-span-4 xs:col-span-6 mb-1">
                    <form method="POST" action="{{ route('admin.database.refresh.sidebar') }}">
                        @csrf
                        <button type="submit"
                            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{ __('Refresh Sidebar') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
