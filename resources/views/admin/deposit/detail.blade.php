@extends('layouts.admin')
@section('content')
    <div class="grid xs:grid-cols-1 md:grid-cols-4 gap-5">
        <div class="col-span-1">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-body">
                    <h5 class="mb-20 text-muted">{{ __('Deposit Via') }} {{ __(@$deposit->gateway->name) }}</h5>
                    <div class="p-3 bg-white">
                        <img src="{{ $deposit->gateway_currency()->methodImage() }}" alt="{{ __('Profile Image') }}"
                            class="rounded-2 deposit-imgView">
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Date') }}
                            <span class="fw-bold">{{ showDateTime($deposit->created_at) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Transaction Number') }}
                            <span class="fw-bold">{{ $deposit->trx }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Username') }}
                            <span class="fw-bold">
                                <a
                                    href="{{ route('admin.users.detail', $deposit->user_id) }}">{{ @$deposit->user->username }}</a>
                            </span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Method') }}
                            <span class="fw-bold">{{ __(@$deposit->gateway->name) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Amount') }}
                            <span class="fw-bold">{{ getAmount($deposit->amount) }} {{ __($general->cur_text) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Charge') }}
                            <span class="fw-bold">{{ getAmount($deposit->charge) }} {{ __($general->cur_text) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('After Charge') }}
                            <span class="fw-bold">
                                @if (getPlatform('wallet')->deposit_fees_method == 'subtracted')
                                    {{ getAmount($deposit->amount - $deposit->charge) }}
                                @else
                                    {{ getAmount($deposit->amount + $deposit->charge) }}
                                @endif {{ __($general->cur_text) }} {{ __($general->cur_text) }}
                            </span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Rate') }}
                            <span class="fw-bold">1 {{ __($general->cur_text) }}
                                = {{ getAmount($deposit->rate) }} {{ __($deposit->baseCurrency()) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Payable') }}
                            <span class="fw-bold">{{ getAmount($deposit->final_amo) }}
                                {{ __($deposit->method_currency) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Status') }}
                            @if ($deposit->status == 2)
                                <span class="badge bg-warning">{{ __('Pending') }}</span>
                            @elseif($deposit->status == 1)
                                <span class="badge bg-success">{{ __('Approved') }}</span>
                            @elseif($deposit->status == 3)
                                <span class="badge bg-danger">{{ __('Rejected') }}</span>
                            @endif
                        </li>
                        @if ($deposit->admin_feedback)
                            <li class="list-group-item">
                                <strong>{{ __('Admin Response') }}</strong>
                                <br>
                                <p>{{ __($deposit->admin_feedback) }}</p>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
        <div class="xs:col-span-1 md:col-span-3">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-body">
                    <h5 class="card-title mb-2 border-bottom pb-2">{{ __('User Deposit Information') }}</h5>
                    @if ($details != null)
                        @foreach (json_decode($details) as $k => $val)
                            @if ($val->type == 'file')
                                <div class="row mt-4">
                                    <div class="md:col-span-8">
                                        <h6>{{ inputTitle($k) }}</h6>
                                        <img src="{{ getImage('assets/images/verify/deposit/' . $val->field_name) }}"
                                            alt="{{ __('Image') }}">
                                    </div>
                                </div>
                            @else
                                <div class="row mt-4">
                                    <div class="md:col-span-12">
                                        <h6>{{ inputTitle($k) }}</h6>
                                        <p>{{ __($val->field_name) }}</p>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    @endif
                    @if ($deposit->status == 2)
                        <div class="row mt-4">
                            <div class="md:col-span-12">
                                <button class="btn btn-success ml-1" data-modal-toggle="approveModal"
                                    onclick="
                                    $('#approveModal').find('input[name=id]').val('{{ $deposit->id }}');
                                    $('#approveModal').find('.withdraw-amount').text('{{ getAmount($deposit->amount) . ' ' . __($general->cur_text) }}');
                                    $('#approveModal').find('.withdraw-user').text('{{ @$deposit->user->username }}');"
                                    data-info="{{ $details }}" title="{{ __('Approve') }}"><i
                                        class="bi bi-check-lg"></i>
                                    {{ __('Approve') }}
                                </button>

                                <button class="btn btn-danger ml-1" data-modal-toggle="rejectModal"
                                    onclick="
                                $('#rejectModal').find('input[name=id]').val('{{ $deposit->id }}');
                                $('#rejectModal').find('.withdraw-amount').text('{{ getAmount($deposit->amount) . ' ' . __($general->cur_text) }}');
                                $('#rejectModal').find('.withdraw-user').text('{{ @$deposit->user->username }}');"
                                    data-info="{{ $details }}"><i class="bi bi-x-octagon"></i>
                                    {{ __('Reject') }}
                                </button>
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>

@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Approve Deposit Confirmation') }}"
        action="{{ route('admin.deposit.approve') }}" submit="{{ __('Approve ') }}" id="approveModal">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to') }} <span class="fw-bold">{{ __('approve') }}</span> <span
                    class="withdraw-amount text-success"></span> {{ __('deposit of') }} <span
                    class="withdraw-user"></span>?</p>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Reject Deposit Confirmation') }}"
        action="{{ route('admin.deposit.reject') }}" submit="{{ __('Reject ') }}" id="rejectModal" btn="danger">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to') }} <span class="fw-bold">{{ __('reject') }}</span> <span
                    class="withdraw-amount text-success"></span> {{ __('deposit of') }} <span
                    class="withdraw-user"></span>?</p>

            <div class="mt-2">
                <label class="mt-2">{{ __('Reason for Rejection') }}</label>
                <textarea class="form-control" name="message" id="message" placeholder="{{ __('Reason for Rejection') }}"
                    rows="5"></textarea>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
