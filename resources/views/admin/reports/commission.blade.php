@extends('layouts.app')
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Commissions') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Username') }}</th>
                                <th scope="col">{{ __('Amount') }}</th>
                                <th scope="col">{{ __('Date') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($commissions as $value)
                                <tr>
                                    <td data-label="{{ __('Username') }}">
                                        <a href="{{ route('admin.users.detail', $value->user_id) }}">
                                            {!! getUser($value->user_id)->username ?? '<span class="text-danger">Error: Account Removed</span>' !!}
                                        </a>
                                    </td>
                                    <td data-label="{{ __('Amount') }}">
                                        {{ getAmount($value->amount) }} BV
                                    </td>
                                    <td data-label="{{ __('Date') }}">{{ showDateTime($value->created_at) }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse

                        </tbody>
                    </table><!-- table end -->
                </div>
            </div><!-- card end -->
            <div class="mb-1">{{ paginateLinks($commissions) }}</div>

        </div>
    </div>
@endsection


@push('breadcrumb-plugins')
    <form action="{{ route('admin.report.commission.search') }}" method="GET" class=" float-sm-right bg--white">
        <div class="input-group">
            <input type="text" name="search" class="form-control" placeholder="{{ __('Username') }}"
                value="{{ $search ?? '' }}">
            <button class="btn btn-outline-primary" type="submit"><i class="bi bi-search"></i></button>
        </div>
    </form>
@endpush
