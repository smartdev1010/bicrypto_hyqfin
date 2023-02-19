@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">{{ 'Editing ' . $rank->title . ' rank' }}</h4>
            <div class="card-search"></div>
        </div>
        <form action="{{ route('admin.mlm.update') }}" method="POST" enctype="multipart/form-data" id="rankUpdate">
            @csrf
            <input type="hidden" name="id" id="id" value="{{ $rank->id }}">
            <input type="hidden" name="result_missed" id="result_missed" value="{{ $rank->result_missed }}">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label for="title">{{ __('locale.Title') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="title" name="title" aria-label="Rank Title"
                                aria-describedby="title" value="{{ $rank->title }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label for="rank">{{ __('locale.Rank') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="rank" name="rank" aria-label="Rank"
                                aria-describedby="rank" value="{{ $rank->rank }}">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label for="margin">{{ __('locale.Withdraw Margin') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="margin" name="margin"
                                aria-label="Rank Withdraw Margin" aria-describedby="margin" value="{{ $rank->margin }}">
                            <span class="input-group-text" for="margin">%</span>
                        </div>
                    </div>
                    @if (getPlatform('mlm')->deposits == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="deposit_commission">{{ __('locale.Referral Deposit Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="deposit_commission" name="deposit_commission"
                                    aria-label="Deposit Commission" aria-describedby="deposit_commission"
                                    value="{{ $rank->deposit_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getPlatform('mlm')->first_deposit == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="ref_commission">{{ __('locale.Referral First Deposit Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="ref_commission" name="ref_commission"
                                    aria-label="ref Commission" aria-describedby="ref_commission"
                                    value="{{ $rank->ref_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getPlatform('mlm')->active_first_deposit == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label
                                for="active_ref_commission">{{ __('locale.Active Referral First Deposit Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="active_ref_commission"
                                    name="active_ref_commission" aria-label="active_ref Commission"
                                    aria-describedby="active_ref_commission" value="{{ $rank->active_ref_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getPlatform('mlm')->trades == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="trade_commission">{{ __('locale.Referral Trade Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="trade_commission" name="trade_commission"
                                    aria-label="trade Commission" aria-describedby="trade_commission"
                                    value="{{ $rank->trade_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getExt('1')->status == 1 && getPlatform('mlm')->bot_investment == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="bot_commission">{{ __('locale.Referral Bot Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="bot_commission" name="bot_commission"
                                    aria-label="bot Commission" aria-describedby="bot_commission"
                                    value="{{ $rank->bot_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getExt('2')->status == 1 && getPlatform('mlm')->ico_purchase == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="ico_commission">{{ __('locale.Referral Token ICO Purchase Commission') }}</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="ico_commission" name="ico_commission"
                                    aria-label="ico Commission" aria-describedby="ico_commission"
                                    value="{{ $rank->ico_commission }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getExt('4')->status == 1)
                        @if (getPlatform('mlm')->forex_deposit == 1)
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <label for="forex_commission">{{ __('locale.Forex Deposit Commission') }}</label>
                                <div class="input-group mb-1">
                                    <input type="text" class="form-control" id="forex_commission"
                                        name="forex_commission" aria-label="ico Commission"
                                        aria-describedby="forex_commission" value="{{ $rank->forex_commission }}">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        @endif
                        @if (getPlatform('mlm')->forex_investment == 1)
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <label
                                    for="forex_investment_commission">{{ __('locale.Forex Investment Commission') }}</label>
                                <div class="input-group mb-1">
                                    <input type="text" class="form-control" id="forex_investment_commission"
                                        name="forex_investment_commission" aria-label="ico Commission"
                                        aria-describedby="forex_investment_commission"
                                        value="{{ $rank->forex_investment_commission }}">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        @endif
                    @endif
                    @if (getExt('6')->status == 1 && getPlatform('mlm')->staking == 1)
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="staking">Staking Commission</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="staking" name="staking"
                                    aria-label="Staking Commission" aria-describedby="staking"
                                    value="{{ $rank->staking }}">
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    @endif
                    @if (getPlatform('mlm')->type == 'unilevel')
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="deposits_required">VIP Rank Deposit Required</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="deposits_required"
                                    name="deposits_required" aria-label="Deposits Required"
                                    aria-describedby="deposits_required" value="{{ $rank->deposits_required }}">
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="bv_required">VIP Rank BV Required</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="bv_required" name="bv_required"
                                    aria-label="ico Commission" aria-describedby="bv_required"
                                    value="{{ $rank->bv_required }}">
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <label for="direct_required">VIP Rank Direct Referral Required</label>
                            <div class="input-group mb-1">
                                <input type="text" class="form-control" id="direct_required" name="direct_required"
                                    aria-label="ico Commission" aria-describedby="direct_required"
                                    value="{{ $rank->direct_required }}">
                            </div>
                        </div>
                    @endif
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1">{{ __('locale.Status') }} </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="{{ __('locale.Active') }}" data-off="{{ __('locale.Disabled') }}"
                            data-width="100%" name="status" @if ($rank->status == 1) checked @endif>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit"><i class="bi bi-pencil-square"></i>
                    {{ __('locale.Edit') }}
                </button>
            </div>
        </form>
    </div>
@endsection


@push('breadcrumb-plugins')
    <a href="{{ route('admin.mlm.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('locale.Back') }}</a>
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
