@extends('layouts.user')
@section('content')

    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Referrals') }}</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead>
                            <th>{{ __('ID') }}</th>
                            <th>{{ __('First Name') }}</th>
                            <th>{{ __('Last Name') }}</th>
                            <th>{{ __('Username') }}</th>
                            <th>{{ __('Date') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($referrals as $referral)
                                <tr>
                                    <td data-label="{{ __('ID') }}">{{ $loop->iteration }}</td>
                                    <td data-label="{{ __('First Name') }}">{{ __($referral->firstname) }}</td>
                                    <td data-label="{{ __('Last Name') }}">{{ __($referral->lastname) }}</td>
                                    <td data-label="{{ __('Username') }}"> {{ __($referral->username) }}</td>
                                    <td data-label="{{ __('Date') }}">{{ showDateTime($referral->created_at) }}</td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

            </div>
            <div class="mb-1">{{ paginateLinks($referrals) }}</div>
        </div>
    </div>
@endsection
