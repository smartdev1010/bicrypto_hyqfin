@extends('layouts.admin')

@section('content')
    <div class="grid xs:grid-cols-1 md:grid-cols-4 gap-5">
        <div class="col-span-1">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-body">
                    <h5 class="mb-20 text-muted">@lang('Withdraw Via') {{ __(@$withdrawal->method->name) }}</h5>

                    <img class="img-thumbnail img-fluid" src="{{ $methodImage }}" alt="{{ __('image') }}"
                        class="rounded-2 withdraw-detailImage">


                    <ul class="list-group">
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Date') }}
                            <span class="fw-bold">{{ showDateTime($withdrawal->created_at) }}</span>
                        </li>

                        <li class="list-group-item flex justify-between items-center">
                            @lang('Trx Number')
                            <span class="fw-bold">{{ $withdrawal->trx }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Username') }}
                            <span class="fw-bold">
                                <a
                                    href="{{ route('admin.users.detail', $withdrawal->user_id) }}">{{ @$withdrawal->user->username }}</a>
                            </span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('method') }}
                            <span class="fw-bold">{{ __($withdrawal->method->name) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Amount') }}
                            <span class="fw-bold">{{ getAmount($withdrawal->amount) }}
                                {{ __($general->cur_text) }}</span>
                        </li>

                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Charge') }}
                            <span class="fw-bold">{{ getAmount($withdrawal->charge) }}
                                {{ __($general->cur_text) }}</span>
                        </li>

                        <li class="list-group-item flex justify-between items-center">
                            @lang('After Charge')
                            <span class="fw-bold">{{ getAmount($withdrawal->after_charge) }}
                                {{ __($general->cur_text) }}</span>
                        </li>
                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Rate') }}
                            <span class="fw-bold">1 {{ __($general->cur_text) }}
                                = {{ getAmount($withdrawal->rate) }} {{ __($withdrawal->currency) }}</span>
                        </li>

                        <li class="list-group-item flex justify-between items-center">
                            @lang('Payable')
                            <span class="fw-bold">{{ getAmount($withdrawal->final_amount) }}
                                {{ __($withdrawal->currency) }}</span>
                        </li>

                        <li class="list-group-item flex justify-between items-center">
                            {{ __('Status') }}
                            @if ($withdrawal->status == 2)
                                <span class="badge rounded-pill bg-warning">{{ __('Pending') }}</span>
                            @elseif($withdrawal->status == 1)
                                <span class="badge rounded-pill bg-success">@lang('Approved')</span>
                            @elseif($withdrawal->status == 3)
                                <span class="badge rounded-pill bg-danger">@lang('Rejected')</span>
                            @endif
                        </li>

                        @if ($withdrawal->admin_feedback)
                            <li class="list-group-item">
                                <strong>@lang('Admin Response')</strong>
                                <br>
                                <p>{{ $withdrawal->admin_feedback }}</p>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
        <div class="xs:col-span-1 md:col-span-3">

            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-body">
                    <h5 class="card-title border-bottom pb-2">@lang('User Withdraw Information')</h5>


                    @if ($details != null)
                        @foreach (json_decode($details) as $k => $val)
                            @if ($val->type == 'file')
                                <div class="row mt-2">
                                    <div class="md:col-span-8">
                                        <h6>{{ __(inputTitle($k)) }}</h6>
                                        <img src="{{ getImage('assets/images/verify/withdraw/' . $val->field_name) }}"
                                            alt="{{ __('image') }}">
                                    </div>
                                </div>
                            @else
                                <div class="row mt-2">
                                    <div class="md:col-span-12">
                                        <h6>{{ __(inputTitle($k)) }}</h6>
                                        <p>{{ $val->field_name }}</p>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    @endif


                    @if ($withdrawal->status == 2)
                        <div class="row mt-2">
                            <div class="md:col-span-12">
                                <button class="btn btn-success ml-1" data-modal-toggle="approveModal"
                                    onclick="
                                $('#approveModal').find('input[name=id]').val('{{ $withdrawal->id }}');
                                $('#approveModal').find('.withdraw-amount').text('{{ getAmount($withdrawal->final_amount) }} {{ $withdrawal->currency }}');"><i
                                        class="bi bi-check-lg"></i> @lang('Approve')
                                </button>

                                <button class="btn btn-danger ml-1" data-modal-toggle="rejectModal"
                                    onclick="
                                $('#rejectModal').find('input[name=id]').val('{{ $withdrawal->id }}');
                                $('#rejectModal').find('.withdraw-amount').text('{{ getAmount($withdrawal->final_amount) }} {{ __($withdrawal->currency) }}');"><i
                                        class="bi bi-x-octagon"></i>
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
    <x-partials.modals.default-modal title="{{ __('Approve Withdrawal Confirmation') }}"
        action="{{ route('admin.withdraw.approve') }}" submit="{{ __('Approve ') }}" id="approveModal">
        <div>
            <input type="hidden" name="id">
            <p>@lang('Have you Sent') <span class="fw-bold withdraw-amount text-success"></span>?</p>
            <p class="withdraw-detail"></p>
            <textarea name="details" class="form-control pt-3" rows="3" placeholder="@lang('Provide the Details. eg: Transaction number')" required=""></textarea>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Reject Withdrawal Confirmation') }}"
        action="{{ route('admin.withdraw.reject') }}" submit="{{ __('Reject') }}" id="rejectModal" btn="danger">
        <div>
            <input type="hidden" name="id">
            <strong>@lang('Reason of Rejection')</strong>
            <textarea name="details" class="form-control" rows="3" placeholder="@lang('Provide the Details')" required=""></textarea>
        </div>
    </x-partials.modals.default-modal>
@endpush

@push('script')
    <script>
        $(function() {
            "use strict";
            $('.approveBtn').on('click', function() {
                var modal = $('#approveModal');
                $('#approveModal').find('input[name=id]').val($(this).data('id'));
                $('#approveModal').find('.withdraw-amount').text($(this).data('amount'));
                modal.modal('show');
            });

            $('.rejectBtn').on('click', function() {
                var modal = $('#rejectModal');
                modal.modal('show');
            });
        });
    </script>
@endpush
