@extends('layouts.user')
@section('content')
    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        @forelse ($withdrawMethod as $data)
            <div class="card deposit-card">
                <div class="card-header">
                    <h5 class="card-title">{{ __($data->name) }}</h5>
                </div>
                <div class="card-body space-y-5">
                    <div class="deposit__thumb">
                        <img style="height: 100px;width: 100%;"
                            src="{{ getImage(imagePath()['withdraw']['method']['path'] . '/' . $data->image, imagePath()['withdraw']['method']['size']) }}"
                            alt="{{ __($data->name) }}">
                    </div>
                    <ul class="list-disc">
                        <li>@lang('Limit')
                            : {{ getAmount($data->min_limit) }}
                            - {{ getAmount($data->max_limit) }} {{ __($data->currency) }}</li>

                        <li> {{ __('Charge') }}
                            - {{ getAmount($data->fixed_charge) }} {{ __($data->currency) }}
                            + {{ getAmount($data->percent_charge) }}%
                        </li>
                        <li> {{ __('Rate') }}
                            <span class="text-info">1 {{ __($general->cur_text) }} =
                                {{ getAmount($data->rate) }} {{ $data->currency }}</span>
                        </li>
                        <li>@lang('Processing Time')
                            - {{ $data->delay }}
                        </li>
                    </ul>
                </div>
                <div class="card-footer text-center">
                    <a href="javascript:void(0)" data-id="{{ $data->id }}" data-resource="{{ $data }}"
                        data-min_amount="{{ getAmount($data->min_limit) }}"
                        data-max_amount="{{ getAmount($data->max_limit) }}"
                        data-fix_charge="{{ getAmount($data->fixed_charge) }}"
                        data-percent_charge="{{ getAmount($data->percent_charge) }}"
                        data-base_symbol="{{ __($data->currency) }}" class="btn mt-2 btn-success deposit"
                        data-modal-toggle="exampleModal">
                        @lang('Withdraw Now')</a>
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
    @if ($withdrawMethod != null)
        <x-partials.modals.default-modal title="{{ __('Enter Withdraw Amount') }}"
            action="{{ route('user.withdraw.money') }}" submit="{{ __('Confirm') }}" id="exampleModal">
            <div>
                <input type="hidden" id="symbol" name="symbol" value="{{ $symbol }}">
                <input type="hidden" name="currency" class="edit-currency form-control" value="">
                <input type="hidden" name="method_code" class="edit-method-code  form-control" value="">
                <p class="text-danger depositLimit"></p>
                <p class="text-danger depositCharge"></p>

                <div>
                    <label>@lang('Enter Amount'):</label>
                    <div class="input-group">
                        <input type="number" id="amount" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                            name="amount" placeholder="0.00" required="" value="{{ old('amount') }}">
                        <span>{{ getGen()->cur_text }}</span>
                    </div>
                </div>
            </div>
        </x-partials.modals.default-modal>
    @endif
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
                var fixCharge = $(this).data('fix_charge');
                var percentCharge = $(this).data('percent_charge');

                var depositLimit =
                    `@lang('Withdraw Limit'): ${minAmount} - ${maxAmount}  {{ getGen()->cur_text }}`;
                $('.depositLimit').text(depositLimit);
                var depositCharge =
                    `{{ __('Charge') }}: ${fixCharge} {{ getGen()->cur_text }} ${(0 < percentCharge) ? ' + ' + percentCharge + ' %' : ''}`
                $('.depositCharge').text(depositCharge);
                $('.method-name').text(`@lang('Withdraw Via') ${result.name}`);
                $('.edit-currency').val(result.currency);
                $('.edit-method-code').val(result.id);
            });


        });
    </script>
@endsection
