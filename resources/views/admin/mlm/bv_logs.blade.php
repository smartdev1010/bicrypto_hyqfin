@extends('layouts.app')
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">BV Logs</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('locale.ID') }}</th>
                                <th scope="col">{{ __('locale.User') }}</th>
                                <th scope="col">{{ __('locale.Amount') }}</th>
                                <th scope="col">{{ __('locale.Date') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($bvs as $bv)
                                <tr>
                                    <td data-label="{{ __('locale.ID') }}">{{ __($loop->iteration) }}</td>
                                    <td class="fw-bold" data-label="{{ __('locale.User') }}">
                                        @if (getUser($bv->user_id) != null)
                                            <a href="{{ route('admin.users.detail', $bv->user_id) }}">
                                                {{ getUser($bv->user_id)->username }}
                                            </a>
                                        @else
                                            <span class="text-danger">Error: Account Removed</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Amount') }}">{{ $bv->amount }}</a>
                                    </td>
                                    <td data-label="Date">{{ showDateTime($bv->created_at, 'd M, Y h:i:s') }}</td>
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
            <div class="mb-1">{{ paginateLinks($bvs) }}</div>
        </div>
    </div>
@endsection
