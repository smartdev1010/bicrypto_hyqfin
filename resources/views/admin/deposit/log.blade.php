@extends('layouts.admin')
@section('vendor-style')

@section('content')
    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
        @if (request()->routeIs('admin.deposit.list') ||
                request()->routeIs('admin.deposit.method') ||
                request()->routeIs('admin.users.deposits') ||
                request()->routeIs('admin.deposit.dateSearch') ||
                request()->routeIs('admin.users.deposits.method'))
            <div class="shadow rounded px-2 py-1 mb-1 bg-green-500">
                <div class="widget-two__content">
                    <h2 class="text-white">{{ __($general->cur_sym) }}{{ $deposits->where('status', 1)->sum('amount') }}
                    </h2>
                    <p class="text-white">{{ __('Successful Deposit') }}</p>
                </div>
            </div><!-- widget-two end -->
            <div class="shadow rounded px-2 py-1 mb-1 bg-gray-600">
                <div class="widget-two__content">
                    <h2 class="text-white">{{ __($general->cur_sym) }}{{ $deposits->where('status', 2)->sum('amount') }}
                    </h2>
                    <p class="text-white">{{ __('Pending Deposit') }}</p>
                </div>
            </div><!-- widget-two end -->
            <div class="shadow rounded px-2 py-1 mb-1 bg-pink-500">
                <div class="widget-two__content">
                    <h2 class="text-white">{{ __($general->cur_sym) }}{{ $deposits->where('status', 3)->sum('amount') }}
                    </h2>
                    <p class="text-white">{{ __('Rejected Deposit') }}</p>
                </div>
            </div><!-- widget-two end -->
        @endif
    </div>

    <livewire:funding-deposit-log-table :type="$type ?? ''" :user="$userId ?? ''" />

@endsection
