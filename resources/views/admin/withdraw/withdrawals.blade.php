@extends('layouts.admin')

@section('content')
    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        @if (request()->routeIs('admin.withdraw.log') ||
                request()->routeIs('admin.withdraw.method') ||
                request()->routeIs('admin.users.withdrawals') ||
                request()->routeIs('admin.users.withdrawals.method'))
            <div class="widget-two shadow rounded px-2 py-1 mb-1  bg-green-500">
                <div class="widget-two__content">
                    <h2 class="text-white">
                        {{ __($general->cur_sym) }}{{ $withdrawals->where('status', 1)->sum('amount') }}</h2>
                    <p class="text-white">@lang('Approved Withdrawals')</p>
                </div>
            </div><!-- widget-two end -->
            <div class="widget-two shadow rounded px-2 py-1 mb-1  bg-gray-600">
                <div class="widget-two__content">
                    <h2 class="text-white">
                        {{ __($general->cur_sym) }}{{ $withdrawals->where('status', 2)->sum('amount') }}</h2>
                    <p class="text-white">@lang('Pending Withdrawals')</p>
                </div>
            </div><!-- widget-two end -->
            <div class="widget-two shadow rounded px-2 py-1 mb-1  bg-pink-500">
                <div class="widget-two__content">
                    <h2 class="text-white">
                        {{ __($general->cur_sym) }}{{ $withdrawals->where('status', 3)->sum('amount') }}</h2>
                    <p class="text-white">@lang('Rejected Withdrawals')</p>
                </div>
            </div><!-- widget-two end -->
        @endif
    </div>
    <livewire:funding-withdrawal-log-table :type="$type ?? ''" :user="$userId ?? ''" />
@endsection
