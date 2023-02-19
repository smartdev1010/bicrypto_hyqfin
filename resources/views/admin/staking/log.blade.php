@extends('layouts.app')
@section('content')
<div class="row" id="table-hover-row">
    <div class="col-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title">{{ __('locale.Staking Logs')}}</h4>
                <div class="card-search"></div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">{{ __('locale.User')}}</th>
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
                            <td data-label="{{ __('locale.User')}}">
                                <span class="fs-5">{{ getUser($log->user_id)->username }}</span>
                            </td>
                            <td data-label="{{ __('locale.Coin')}}">
                                <div class="d-flex align-items-center">
                                    <img class="avatar-content me-1" width="32px"
                                        src="{{ getImage('assets/images/cryptoCurrency/'. strtolower($log->symbol).'.png') }}"
                                        alt="{{ $log->symbol }}">
                                    <span class="fw-bold me-1 fs-5">{{ $log->symbol }}</span>
                                </div>
                            </td>
                            <td data-label="{{ __('locale.Total Staking')}}"><span
                                    class="text-success fw-bold fs-6">{{ ttz($log->staked) ?? '0' }}
                                    {{ $log->symbol }}</span></td>
                            <td data-label="{{ __('locale.Profit')}}">
                                <div> {{ __('locale.Yesterday Profit')}}: <span
                                        class="fw-bold text-success">{{ ttz($log->last_profit) ?? '0' }}</span> USDT
                                </div>
                                <div> {{ __('locale.Total Profit')}}: <span
                                        class="fw-bold text-success">{{ ttz($log->total_profit) ?? '0' }}</span> USDT
                                </div>
                            </td>
                            <td data-label="{{ __('locale.Duration')}}">
                                <div> {{ __('locale.Start')}}: <span
                                        class="fw-bold text-warning">{{showDateTime($log->start_date, 'd M, Y h:i:s')}}</span>
                                </div>
                                <div> {{ __('locale.End')}}: <span
                                        class="fw-bold text-warning">{{showDateTime($log->end_date, 'd M, Y h:i:s')}}</span>
                                </div>
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
        </div>
    </div>
</div>
@endsection

{{-- @push('breadcrumb-plugins')
<div class="d-flex flex-row-reverse">
    <div class="col-lg-4 col-md-6 col-sm-12">
        <form action="{{ route('admin.forex.log.search', $scope ?? str_replace('admin.forex.log.', '', request()->route()->getName())) }}" method="GET">
            <div class="input-group">
                <input type="text" name="search" class="form-control" placeholder="@lang('Search ...')" value="{{ $search ?? '' }}">
                    <button class="btn btn-primary" type="submit"><i class="bi bi-search"></i></button>
            </div>
        </form>
    </div>
</div>
@endpush --}}
