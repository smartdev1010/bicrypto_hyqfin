@extends('layouts.app')
@section('content')
<div class="se-pre-con">
    <div class="se-pre-con2 spinner-border text-primary" role="status">
        <span class="sr-only"></span>
    </div>
</div>
<div class="card bg-black"  style="background-image: url('{{ asset('assets/images/staking/bg/banner.gif') }}');">
    <div class="card-body">
        <div class="row">
            <div class="col-lg-9 col-md-8 col-sm-12 col-12">
                <div class="card" style="background-color: #000000db!important;">
                    <div class="card-body">
                        <h1>{{ siteName() }} {{ __('locale.Staking')}}</h1>
                        <h3>{{ __('locale.Earn stable profits with professional asset management')}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12 col-12">
                <div class="card shadow" style="border-top: 6px solid #2dbd96;background-color: #000000db!important;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="">{{ __('locale.Assets')}} (USDT)</div>
                                <div class="">{{$assets}}</div>
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col">
                                <div class="">{{ __('locale.Yesterday Profit')}} (USDT)</div>
                                <div class="">{{$last_profit}}</div>
                            </div>
                            <div class="col">
                                <div class="">{{ __('locale.Total Profit')}} (USDT)</div>
                                <div class="">{{$total_profit}}</div>
                            </div>
                        </div>
                    </div>
                    <a href="{{ route('user.home.staking.log') }}" class="card-footer btn">
                        <span>{{ __('locale.View More')}} </span><i class="bi bi-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="table-responsive">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">{{ __('locale.Coin')}}</th>
                    <th scope="col">{{ __('locale.APR')}}</th>
                    <th scope="col">{{ __('locale.Duration (Days)')}}</th>
                    <th scope="col">{{ __('locale.Minimum Stake Amount')}}</th>
                    <th scope="col">{{ __('locale.Action')}}</th>
                </tr>
            </thead>
            <tbody>
                @forelse($coins->where('status',1) as $coin)
                    <tr>
                        <td data-label="{{ __('locale.Coin')}}">
                            <div  class="d-flex align-items-center">
                                <img class="avatar-content me-1" width="32px" src="{{ getImage('assets/images/cryptoCurrency/'. strtolower($coin->symbol).'.png') }}" alt="{{ $coin->symbol }}">
                                <span class="fw-bold me-1 fs-3">{{ $coin->symbol }}</span>
                                <span class="text-mute fs-5">{{ $coin->title }}</span>
                            </div>
                        </td>
                        <td data-label="{{ __('locale.APR')}}"><span class="text-success fw-bold fs-4">{{ $coin->profit }}%</span></td>
                        <td data-label="{{ __('locale.Duration (Days)')}}"><span class="text-warning fw-bold fs-4">{{ $coin->period }}</span></td>
                        <td data-label="{{ __('locale.Minimum Stake Amount')}}">
                            <span class="fs-4">{{ ttz($coin->min_stake) }} {{ $coin->symbol }}</span>
                        </td>
                        <td data-label="{{ __('locale.Action')}}">
                            @if (getStakingLog($coin->id,auth()->user()->id) != null)
                                @php
                                    $coinlog = getStakingLog($coin->id,auth()->user()->id);
                                @endphp
                                @if($coinlog->status != 2)
                                    <button type="button" class="btn btn-warning subBtn" data-bs-toggle="modal" data-bs-target="#subscribeModal"
                                            data-id="{{ $coin->id }}" data-symbol="{{ $coin->symbol }}" data-apr="{{ $coin->apr }}"
                                            data-staked="{{ ttz($coin->staked) }}" data-max_stake="{{ ttz($coin->max_stake) }}" data-period="{{ $coin->period }}"
                                            data-profit_unit="{{ $coin->profit_unit }}" data-daily_profit="{{ ttz($coin->daily_profit) }}"
                                            data-network="{{ $coin->network }}" data-method="{{ $coin->method }}"
                                            data-min="{{ $coin->min_stake }}" data-max="{{ $coin->max_stake }}">{{ __('locale.Stake')}}
                                    </button>
                                @endif
                                @if($coinlog->status == 1)
                                    <button type="button" class="btn btn-danger cancelBtn" data-bs-toggle="modal" data-bs-target="#cancelModal"
                                            data-id="{{ $coin->id }}" data-symbol="{{ $coin->symbol }}">{{ __('locale.Cancel')}}
                                    </button>
                                @elseif($coinlog->status == 2)
                                    <button type="button" class="btn btn-success claimBtn" data-bs-toggle="modal" data-bs-target="#claimModal"
                                            data-id="{{ $coin->id }}" data-symbol="{{ $coin->symbol }}">{{ __('locale.Claim Profit')}}
                                    </button>
                                @endif
                            @else
                            <button type="button" class="btn btn-warning subBtn" data-bs-toggle="modal" data-bs-target="#subscribeModal"
                                    data-id="{{ $coin->id }}" data-symbol="{{ $coin->symbol }}" data-apr="{{ $coin->apr }}"
                                    data-staked="{{ ttz($coin->staked) }}" data-max_stake="{{ ttz($coin->max_stake) }}" data-period="{{ $coin->period }}"
                                    data-profit_unit="{{ $coin->profit_unit }}" data-daily_profit="{{ ttz($coin->daily_profit) }}"
                                    data-network="{{ $coin->network }}" data-method="{{ $coin->method }}"
                                    data-min="{{ $coin->min_stake }}" data-max="{{ $coin->max_stake }}">{{ __('locale.Stake')}}
                            </button>
                            @endif
                        </td>
                    </tr>
                @empty
                <tr>
                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                </tr>
                @endforelse

            </tbody>
        </table><!-- table end -->
    <div class="mb-1">{{paginateLinks($coins) }}</div>
</div>
<div class="modal modal-slide-in fade" id="subscribeModal">
    <div class="modal-dialog sidebar-sm">
        <form class="add-new-record modal-content pt-0" action="{{ route('user.staking.store') }}" method="POST"
            enctype="multipart/form-data">
            @csrf
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
            <div class="modal-header mb-1">
                <h5 class="modal-title" id="exampleModalLabel">{{ __('locale.Staking')}} <span class="stakeSymbol"></span></h5>
            </div>
            <div class="modal-body flex-grow-1">
                <input type="hidden" name="coin_id">
                <input type="hidden" name="symbol">
                <label for="amount">{{ __('locale.Your Funding Wallet Balance')}}</label>
                <div class="input-group w-auto mb-1">
                    <input type="number"  class="form-control text-white" value="{{ ttz($wallet->balance) }}" disabled>
                    <span class="input-group-text text-light">USDT</span>
                </div>
                <label for="amount">{{ __('locale.Stake Amount')}}</label>
                <div class="input-group w-auto mb-1">
                    <input type="number" class="form-control amountInput" min=""
                        max="" step="0.00000001" required="" id="amount" name="amount" placeholder="Amount">
                    <span class="input-group-text text-light stakeSymbol"></span>
                </div>
                <div class="card bg-black">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-1">
                            <span>Est. APR</span>
                            <span class="text-success"><span class="apr"></span>%</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Staked Amount</span>
                            <span class="staked"></span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Max Available</span>
                            <span class="max_stake"></span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Staking Period</span>
                            <span class="period"></span><span> Days</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Staking Method</span>
                            <span class="method"></span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Coin Network</span>
                            <span class="network"></span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span>Profit Distribution</span>
                            <span class="profit_unit"></span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Est. Daily Profits</span>
                            <span class="daily_profit"></span>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('locale.Close')}}</button>
                <button type="submit" class="btn btn-primary ms-1">{{ __('locale.Stake')}}</button>
            </div>
        </form>
    </div>
</div>
<div id="cancelModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('locale.Staking')}} <span class="stakeSymbol"></span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('user.staking.cancel') }}" method="POST">
                @csrf
                <input type="hidden" name="coin_id">
                <div class="modal-body">
                    <p>{{ __('locale.Are you sure to cancel')}} <span class="fw-bold stakeSymbol"></span> {{ __('locale.Stake')}}?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('locale.Close')}}</button>
                    <button type="submit" class="btn btn-danger">{{ __('locale.Cancel')}}</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="claimModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ __('locale.Staking')}} <span class="stakeSymbol"></span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('user.staking.claim') }}" method="POST">
                @csrf
                <input type="hidden" name="coin_id">
                <div class="modal-body">
                    <p>{{ __('locale.Are you sure to claim')}} <span class="fw-bold stakeSymbol"></span> {{ __('locale.Stake')}}?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('locale.Close')}}</button>
                    <button type="submit" class="btn btn-success">{{ __('locale.Claim')}}</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
@push('script')
    <script>
        window.onload = prepareButton;
        async function prepareButton() {
            $(".se-pre-con").fadeOut("slow");
        }
        $(function () {
            "use strict";
            $('.subBtn').on('click', function () {
                var modal = $('#subscribeModal');
                modal.find('.stakeSymbol').text($(this).data('symbol'));
                modal.find('input[name=coin_id]').val($(this).data('id'));
                modal.find('input[name=symbol]').val($(this).data('symbol'));
                modal.find('.apr').text($(this).data('apr'));
                modal.find('.staked').text($(this).data('staked'));
                modal.find('.max_stake').text($(this).data('max_stake'));
                modal.find('.period').text($(this).data('period'));
                modal.find('.method').text($(this).data('method'));
                modal.find('.network').text($(this).data('network'));
                modal.find('.profit_unit').text($(this).data('profit_unit'));
                modal.find('.daily_profit').text($(this).data('daily_profit'));
                modal.find('input[name=amount]').attr({
                    "max" : $(this).data('max_stake'),
                    "min" : $(this).data('min_stake'),
                    "step" : $(this).data('min_stake'),
                });
            });

            $('.cancelBtn').on('click', function () {
                var modal = $('#cancelModal');
                modal.find('.stakeSymbol').text($(this).data('symbol'));
                modal.find('input[name=coin_id]').val($(this).data('id'));
            });

            $('.claimBtn').on('click', function () {
                var modal = $('#claimModal');
                modal.find('.stakeSymbol').text($(this).data('symbol'));
                modal.find('input[name=coin_id]').val($(this).data('id'));
            });
        });

    </script>
@endpush
