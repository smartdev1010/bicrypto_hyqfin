@extends('layouts.app')

@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">{{ 'Editing ' . $coin->title . ' Staking Coin' }}</h4>
            <div class="card-search"></div>
        </div>
        <form action="{{ route('admin.staking.update') }}" method="POST" enctype="multipart/form-data" id="accountUpdate">
            @csrf
            <input type="hidden" name="id" id="id" value="{{ $coin->id }}">
            <input type="hidden" name="status" id="status" value="{{ $coin->status }}">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="title">{{ __('locale.Title') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="title" name="title" aria-label="Coin Title"
                                aria-describedby="title" value="{{ $coin->title }}" disabled>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="symbol">{{ __('locale.Symbol') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="symbol" name="symbol" aria-label="Coin Symbol"
                                aria-describedby="symbol" value="{{ $coin->symbol }}" disabled>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="network">{{ __('locale.Network') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="network" name="network" aria-label="Coin Network"
                                aria-describedby="network" value="{{ $coin->network }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="price">{{ __('locale.Price') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="price" name="price"
                                aria-label="Coin Price" aria-describedby="price" value="{{ $coin->price }}">
                            <span class="input-group-text">USDT</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="period">{{ __('locale.Duration (Days)') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="period" name="period"
                                aria-label="Coin Period" aria-describedby="period" value="{{ $coin->period }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="profit">{{ __('locale.Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="profit" name="profit"
                                aria-label="Coin Profit" aria-describedby="profit" value="{{ $coin->profit }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="amount">{{ __('locale.Total Amount') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="amount" name="amount"
                                aria-label="Total Amount" aria-describedby="amount" value="{{ $coin->amount }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="min_stake">{{ __('locale.Minimum Stake') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="min_stake" name="min_stake"
                                aria-label="Minimum Stake" aria-describedby="min_stake" value="{{ $coin->min_stake }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="max_stake">{{ __('locale.Maximum Stake') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="max_stake" name="max_stake"
                                aria-label="Maximum Stake" aria-describedby="max_stake" value="{{ $coin->max_stake }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="staked">{{ __('locale.Staked') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="staked" name="staked"
                                aria-label="Coin Title" aria-describedby="staked" value="{{ $coin->staked }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="apr">{{ __('locale.Annual Percentage Rate (APR)') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="apr" name="apr"
                                aria-label="Annual Percentage Rate (APR)" aria-describedby="apr"
                                value="{{ $coin->apr }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label"
                            for="profit_unit">{{ __('locale.Profit Gain (Only Daily for now)') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="profit_unit" name="profit_unit"
                                aria-label="Profit Gain" aria-describedby="profit_unit" value="daily" disabled>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="daily_profit">{{ __('locale.Daily Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" step="0.0000001" id="daily_profit"
                                name="daily_profit" aria-label="Daily Profit" aria-describedby="daily_profit"
                                value="{{ $coin->daily_profit }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label"
                            for="method">{{ __('locale.Method (Only Manual For Now)') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="method" name="method" aria-label="Method"
                                aria-describedby="method" value="manual" disabled>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start align-items-top mb-1">
                        <div class="me-1">
                            <img class="img-thumbnail mb-1"
                                src="{{ getImage(imagePath()['staking']['path'] . '/' . $coin->icon, imagePath()['staking']['size']) }}" />
                        </div>
                        <div>
                            <input class="form-control" name="image" type="file" id="image" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-top">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" data-bs-toggle="toggle" name="status" id="status"
                            @if ($coin->status == 1) checked @endif>
                        <label class="form-check-label" for="status">{{ __('locale.Status') }}?</label>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit"><i class="bi bi-pencil-square"></i> {{ __('locale.Edit') }}
                </button>
            </div>
        </form>
    </div>
@endsection


@push('breadcrumb-plugins')
    <a href="{{ route('admin.staking.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('locale.Back') }}</a>
@endpush
