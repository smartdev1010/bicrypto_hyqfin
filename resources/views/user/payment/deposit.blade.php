@extends('layouts.user')
@section('content')
    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        @forelse ($gatewayCurrency as $data)
            <div class="card custom-card deposit-card">
                <div class="card-header">
                    <h5 class="card-title">{{ __($data->name) }}</h5>
                </div>
                <div class="card-body">
                    <div class="deposit__thumb">
                        <img class="img-thumbnail" src="{{ $data->methodImage() }}" alt="{{ __($data->name) }}">
                    </div>
                </div>
                <div class="card-footer">
                    <a href="javascript:void(0)" data-id="{{ $data->id }}" data-resource="{{ $data }}"
                        data-min_amount="{{ ttz($data->min_amount) }}" data-max_amount="{{ ttz($data->max_amount) }}"
                        data-base_symbol="{{ $data->baseSymbol() }}" data-currency="{{ $data->currency }}"
                        data-fix_charge="{{ ttz($data->fixed_charge) }}" data-rate="{{ ttz($data->rate) }}"
                        data-percent_charge="{{ ttz($data->percent_charge) }}"
                        class="btn btn-primary text-center deposit w-full" data-modal-toggle="deposit-modal">
                        {{ __('Deposit Now') }}</a>
                </div>
            </div>
        @empty
            <div class="card deposit-card">
                <div class="card-body">
                    No Method Available Yet
                </div>
            </div>
        @endforelse
    </div>
@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Enter Deposit Amount') }}" action="{{ route('user.deposit.insert') }}"
        submit="{{ __('Submit') }}" id="deposit-modal">
        <ul>
            <input type="hidden" id="symbol" name="symbol" value="{{ $track->symbol }}">
            <input type="hidden" name="currency" class="edit-currency" value="">
            <input type="hidden" name="method_code" class="edit-method-code" value="">
            <li>
                <span>{{ __('Deposit Limit') }}</span> <span class="text-success depositLimit"></span>
            </li>
            <li>
                <span>{{ __('Charge') }}</span> <span class="text-danger depositCharge"></span>
            </li>
            <li>
                <span>{{ __('Rate') }}</span> <span class="text-info">1
                    {{ __($general->cur_text) }} = <span class="rate"></span></span>
            </li>
        </ul>
        <label class="form-control-label h6">{{ __('Enter Amount') }} </label>
        <div class="input-group">
            <input type="number" id="amount" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                name="amount" placeholder="0.00" required value="{{ old('amount') }}">
            <span>{{ __($general->cur_text) }}</span>
        </div>
    </x-partials.modals.default-modal>
@endpush
@section('page-scripts')
    <script>
        "use strict";
        $(document).ready(function() {
            $('.deposit').on('click', function() {
                var id = $(this).data('id');
                var result = $(this).data('resource');
                var minAmount = $(this).data('min_amount');
                var maxAmount = $(this).data('max_amount');
                var baseSymbol = "{{ __($general->cur_text) }}";
                var fixCharge = $(this).data('fix_charge');
                var rate = $(this).data('rate');
                var currency = $(this).data('currency');
                var percentCharge = $(this).data('percent_charge');

                var depositLimit = `${minAmount} - ${maxAmount}  ${baseSymbol}`;
                $('.depositLimit').text(depositLimit);
                var depositCharge =
                    `${fixCharge} ${baseSymbol}  ${(0 < percentCharge) ? ' + ' +percentCharge + ' % ' : ''}`;
                $('.depositCharge').text(depositCharge);
                $('.rate').text(rate + ' ' + currency);
                $('.method-name').text(`{{ __('Payment By ') }} ${result.name}`);
                $('.currency-addon').text(baseSymbol);
                $('.edit-currency').val(result.currency);
                $('.edit-method-code').val(result.method_code);
            });
        });
    </script>
@endsection
