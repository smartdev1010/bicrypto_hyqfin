@extends('layouts.app')
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Forex Logs') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('ID') }}</th>
                                <th scope="col">{{ __('User') }}</th>
                                <th scope="col">{{ __('Type') }}</th>
                                <th scope="col">{{ __('Amount') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($forex_logs as $forex_log)
                                <tr>
                                    <td data-label="{{ __('ID') }}">{{ __($loop->iteration) }}</td>
                                    <td data-label="{{ __('User') }}"><a class="badge bg-info"
                                            href="{{ route('admin.users.detail', $forex_log->user_id) }}">{{ $user->where('id', $forex_log->user_id)->first()->username }}</a>
                                    </td>
                                    <td data-label="{{ __('Type') }}" class="text-uppercase">
                                        @if ($forex_log->type == 1)
                                            <span class="badge bg-success">{{ __('Forex Deposit') }}</span>
                                        @elseif($forex_log->type == 2)
                                            <span class="badge bg-danger">{{ __('Forex Withdraw') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Amount') }}">{{ __(getAmount($forex_log->amount)) }} $</td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($forex_log->status == 0)
                                            <span class="badge bg-warning">{{ __('Pending') }}</span>
                                        @elseif($forex_log->status == 1)
                                            <span class="badge bg-success">{{ __('Complete') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        @if ($forex_log->status != 1)
                                            <a class="btn btn-icon btn-success btn-sm" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="{{ __('Verify Transaction') }}"
                                                onclick="$('#forexSet').modal('show');">
                                                <i class="bi bi-check-lg"></i>
                                            </a>
                                            <div id="forexSet" class="modal fade text-start" tabindex="-1"
                                                aria-hidden="true" role="dialog">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">
                                                                {{ __('Are you sure want to verify it?') }}</h5>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p><span class="fw-bold"></span>
                                                                {{ __('Payment will be verified.') }}</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-dark"
                                                                data-bs-dismiss="modal">{{ __('Close') }}</button>
                                                            <a href="{{ route('admin.forex.verify', $forex_log->id) }}">
                                                                <button type="submit"
                                                                    class="btn btn-success">{{ __('Verify') }}</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="mb-1">{{ paginateLinks($forex_logs) }}</div>
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
