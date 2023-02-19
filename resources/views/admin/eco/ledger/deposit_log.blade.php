@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Deposit logs') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Currency') }}</th>
                                <th scope="col">{{ __('Type') }}</th>
                                <th scope="col">{{ __('Amount') }}</th>
                                <th scope="col">{{ __('Info') }}</th>
                                <th scope="col">{{ __('Market Value') }}</th>
                                <th scope="col">{{ __('Date') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($logs as $log)
                                <tr>
                                    <td data-label="Currency" class="fw-bold">{{ $log->currency }}</td>
                                    <td data-label="Type" class="fw-bold">{{ $log->operationType }}</td>
                                    <td data-label="Amount" class="fw-bold">{{ $log->amount }} {{ $log->currency }}</td>
                                    <td data-label="Info">
                                        <div>{{ __('reference') }}: <span class="fw-bold">{{ $log->reference }}</span>
                                        </div>
                                        <div>{{ __('txId') }}: <span class="fw-bold">{{ $log->txId }}</span>
                                        </div>
                                        <div>{{ __('address') }}: <span class="fw-bold">{{ $log->address }}</span>
                                        </div>
                                    </td>
                                    <td data-label="Market Value">
                                        <div>{{ __('Currency') }}: <span
                                                class="fw-bold">{{ $log->marketValue->currency }}</span></div>
                                        <div>{{ __('Source') }}: <span
                                                class="fw-bold">{{ $log->marketValue->source }}</span></div>
                                        <div>{{ __('Amount') }}: <span
                                                class="fw-bold">{{ getAmount($log->marketValue->amount) }}
                                                {{ $log->marketValue->currency }}</span>
                                        </div>
                                    </td>
                                    <td data-label="Date">{{ date('Y-m-d H:i:s', $log->created / 1000) }}</td>
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
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-primary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
