@extends('layouts.user')
@section('content')

    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Withdrawal Logs') }}</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead>
                            <tr>
                                <th>{{ __('Transaction ID') }}</th>
                                <th>{{ __('Gateway') }}</th>
                                <th>{{ __('Amount') }}</th>
                                <th>{{ __('Charge') }}</th>
                                <th>{{ __('After Charge') }}</th>
                                <th>{{ __('Rate') }}</th>
                                <th>{{ __('Receivable') }}</th>
                                <th>{{ __('Status') }}</th>
                                <th>{{ __('Time') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($withdraws as $k=>$data)
                                <tr>
                                    <td data-label="#{{ __('TRX') }}">{{ $data->trx }}</td>
                                    <td data-label="{{ __('Gateway') }}">{{ __($data->method->name) }}</td>
                                    <td data-label="{{ __('Amount') }}">
                                        <strong>{{ getAmount($data->amount) }} {{ __(getCurrency()->symbol) }}</strong>
                                    </td>
                                    <td data-label="{{ __('Charge') }}" class="text-danger">
                                        {{ getAmount($data->charge) }} {{ __(getCurrency()->symbol) }}
                                    </td>
                                    <td data-label="{{ __('After Charge') }}">
                                        {{ getAmount($data->after_charge) }} {{ __(getCurrency()->symbol) }}
                                    </td>
                                    <td data-label="{{ __('Rate') }}">
                                        {{ getAmount($data->rate) }} {{ __($data->currency) }}
                                    </td>
                                    <td data-label="{{ __('Receivable') }}" class="text-success">
                                        <strong>{{ getAmount($data->final_amount) }} {{ __($data->currency) }}</strong>
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        <div class="flex justify-between">
                                            @if ($data->status == 2)
                                                <span class="badge bg-primary">{{ __('Pending') }}</span>
                                            @elseif($data->status == 1)
                                                <span class="badge bg-success">{{ __('Completed') }}</span>
                                                <button class="btn btn-icon btn-info btn-sm approveBtn"
                                                    data-admin_feedback="{{ $data->admin_feedback }}"><i
                                                        class="bi bi-info-circle"></i></button>
                                            @elseif($data->status == 3)
                                                <span class="badge bg-danger">{{ __('Rejected') }}</span>
                                                <button class="btn btn-icon btn-info btn-sm approveBtn"
                                                    data-admin_feedback="{{ $data->admin_feedback }}"><i
                                                        class="bi bi-info-circle"></i></button>
                                            @endif
                                        </div>
                                    </td>

                                    <td data-label="{{ __('Time') }}">
                                        <i class="bi bi-calendar"></i>{{ showDateTime($data->created_at) }}
                                    </td>
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
            <div class="mb-1">{{ paginateLinks($withdraws) }}</div>
        </div>
    </div>

    <div id="detailModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Details') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="withdraw-detail"></p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm text-white btn-danger"
                        data-bs-dismiss="modal">{{ __('Close') }}</button>

                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script>
        "use strict";
        $('.approveBtn').on('click', function() {
            var modal = $('#detailModal');
            var feedback = $(this).data('admin_feedback');

            modal.find('.withdraw-detail').html(`<p> ${feedback} </p>`);
            modal.modal('show');
        });
    </script>
@endpush
