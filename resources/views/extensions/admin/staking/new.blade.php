@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">{{ __('New Coin') }}</h4>
            <div class="card-search"></div>
        </div>
        <form action="{{ route('admin.staking.store') }}" method="POST" enctype="multipart/form-data" id="accountUpdate">
            @csrf
            <input type="hidden" name="status" id="status">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="title">{{ __('Title') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="title" name="title" aria-label="Coin Title"
                                aria-describedby="title" value="{{ old('title') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="symbol">{{ __('Symbol') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="symbol" name="symbol"
                                aria-label="Coin Symbol" aria-describedby="symbol" value="{{ old('symbol') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="network">{{ __('Network') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="network" name="network"
                                aria-label="Coin Network" aria-describedby="network" value="{{ old('network') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="price">{{ __('Price') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="price" name="price"
                                aria-label="Coin Price" aria-describedby="price" value="{{ old('price') }}">
                            <span class="input-group-text">USDT</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="period">{{ __('Duration (Days)') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="period" name="period"
                                aria-label="Coin Period" aria-describedby="period" value="{{ old('period') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="profit">{{ __('Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="profit" name="profit"
                                aria-label="Coin Profit" aria-describedby="profit" value="{{ old('profit') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="amount">{{ __('Total Amount') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="amount" name="amount"
                                aria-label="Total Amount" aria-describedby="amount" value="{{ old('amount') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="min_stake">{{ __('Minimum Stake') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="min_stake" name="min_stake"
                                aria-label="Minimum Stake" aria-describedby="min_stake" value="{{ old('min_stake') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="max_stake">{{ __('Maximum Stake') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="max_stake" name="max_stake"
                                aria-label="Maximum Stake" aria-describedby="max_stake" value="{{ old('max_stake') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="staked">{{ __('Staked') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="staked" name="staked"
                                aria-label="Coin Title" aria-describedby="staked" value="{{ old('staked') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="apr">{{ __('Annual Percentage Rate (APR)') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="apr" name="apr"
                                aria-label="Annual Percentage Rate (APR)" aria-describedby="apr"
                                value="{{ old('apr') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="profit_unit">{{ __('Profit Gain (Only Daily for now)') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="profit_unit" name="profit_unit"
                                aria-label="Profit Gain" aria-describedby="profit_unit" value="daily" disabled>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="daily_profit">{{ __('Daily Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="daily_profit"
                                name="daily_profit" aria-label="Daily Profit" aria-describedby="daily_profit"
                                value="{{ old('daily_profit') }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="method">{{ __('Method (Only Manual For Now)') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="method" name="method"
                                aria-label="Method" aria-describedby="method" value="manual" disabled>
                        </div>
                    </div>

                    <div class="d-flex justify-content-start align-items-top mb-1">
                        <div>
                            <input class="form-control" name="image" type="file" id="image"
                                accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1">{{ __('Status') }} </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" data-width="100%"
                            name="status">
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit">{{ __('Submit') }}
                </button>
            </div>
        </form>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.staking.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush


@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection

@push('script')
    <script>
        "use strict";
        $('.toggle').bootstrapToggle({
            on: 'Y',
            off: 'N',
            width: '100%',
            size: 'small'
        });
    </script>
@endpush
