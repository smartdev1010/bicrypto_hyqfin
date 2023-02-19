@extends('layouts.app')
@section('content')
<div class="card bg-black"  style="background-image: url('{{ asset('assets/images/staking/bg/banner.gif') }}');">
    <div class="card-body">
        <div class="row">
            <div class="col-8">
                <div class="card" style="background-color: #000000db!important;">
                    <div class="card-body">
                        <h1>{{ siteName() }} {{ __('locale.Staking')}}</h1>
                        <h3>{{ __('locale.Earn stable profits with professional asset management')}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-4">
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
                    <a class="card-footer btn" href="{{ route('user.home.staking') }}">
                        <i class="bi bi-chevron-left"></i><span> {{ __('locale.Go Back')}}</span>
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
                    <th scope="col">{{ __('locale.Total Staking')}}</th>
                    <th scope="col">{{ __('locale.Profit')}}</th>
                    <th scope="col">{{ __('locale.Duration (Days)')}}</th>
                    <th scope="col">{{ __('locale.Status')}}</th>
                </tr>
            </thead>
            <tbody>
                @forelse($coinlogs as $log)
                    <tr>
                        <td data-label="{{ __('locale.Coin')}}">
                            <div  class="d-flex align-items-center">
                                <img class="avatar-content me-1" width="32px" src="{{ getImage('assets/images/cryptoCurrency/'. strtolower($log->symbol).'.png') }}" alt="{{ $log->symbol }}">
                                <span class="fw-bold me-1 fs-3">{{ $log->symbol }}</span>
                            </div>
                        </td>
                        <td data-label="{{ __('locale.Total Staking')}}"><span class="text-success fw-bold fs-6">{{ ttz($log->staked) ?? '0' }} {{ $log->symbol }}</span></td>
                        <td data-label="{{ __('locale.Profit')}}">
                            <div> {{ __('locale.Yesterday Profit')}}: <span class="fw-bold text-success">{{ ttz($log->last_profit) ?? '0' }}</span> USDT</div>
                            <div> {{ __('locale.Total Profit')}}: <span class="fw-bold text-success">{{ ttz($log->total_profit) ?? '0' }}</span> USDT</div>
                        </td>
                        <td data-label="{{ __('locale.Duration')}}">
                            <div> {{ __('locale.Start')}}: <span class="fw-bold text-warning">{{showDateTime($log->start_date, 'd M, Y h:i:s')}}</span></div>
                            <div> {{ __('locale.End')}}: <span class="fw-bold text-warning">{{showDateTime($log->end_date, 'd M, Y h:i:s')}}</span></div>
                        </td>
                        <td data-label="{{ __('locale.Status')}}">
                            @if($log->status == 0)
                                <span class="badge bg-danger">{{ __('locale.Canceled')}}</span>
                            @elseif($log->status == 1)
                                <span class="badge bg-primary">{{ __('locale.Staking')}}</span>
                            @elseif($log->status == 2)
                                <span class="badge bg-warning">{{ __('locale.Completed')}}</span>
                            @elseif($log->status == 3)
                                <span class="badge bg-success">{{ __('locale.Claimed')}}</span>
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
    <div class="mb-1">{{paginateLinks($coinlogs) }}</div>
</div>
@endsection
