@extends('layouts.user')
@section('content')

    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Transactions') }}</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead>
                            <th>{{ __('Date') }}</th>
                            <th>{{ __('TRX') }}</th>
                            <th>{{ __('Amount') }}</th>
                            <th>{{ __('Charge') }}</th>
                            <th>{{ __('Post Balance') }}</th>
                            <th>{{ __('Detail') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($transactions as $trx)
                                <tr>
                                    <td data-label="{{ __('Date') }}">{{ showDateTime($trx->created_at) }}</td>
                                    <td data-label="{{ __('TRX') }}" class="fw-bold">
                                        {{ Str::limit($trx->trx, 15, '...') }}
                                    </td>
                                    <td data-label="{{ __('Amount') }}" class="budget">
                                        <strong
                                            @if ($trx->trx_type == '+') class="text-success" @else class="text-danger" @endif>
                                            {{ $trx->trx_type == '+' ? '+' : '-' }}
                                            {{ getAmount($trx->amount) * getCurrency()->rate }}
                                            {{ $trx->currency ? $trx->currency : getCurrency()->symbol }}</strong>
                                    </td>
                                    <td data-label="{{ __('Charge') }}" class="budget">
                                        {{ getAmount($trx->charge * getCurrency()->rate) }}
                                        {{ $trx->currency ? $trx->currency : getCurrency()->symbol }} </td>
                                    <td data-label="{{ __('Post Balance') }}">
                                        {{ getAmount($trx->post_balance * getCurrency()->rate) }}
                                        {{ $trx->currency ? $trx->currency : getCurrency()->symbol }}</td>
                                    <td data-label="{{ __('Detail') }}">{{ __($trx->details) }}</td>
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
            <div class="mb-1">{{ paginateLinks($transactions) }}</div>
        </div>
    </div>
@endsection
