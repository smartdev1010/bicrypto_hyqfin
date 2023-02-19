@extends('layouts.admin')

@section('content')
    <form action="{{ route('admin.payment.provider.update', $gateway->code) }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="alias" value="{{ $gateway->alias }}">
        <input type="hidden" name="description" value="{{ $gateway->description }}">
        <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div class="col-span-1">
                <div class="card">
                    <div class="card-body">
                        <img class="img-thumbnail mb-1"
                            src="{{ getImage(imagePath()['gateway']['path'] . '/' . $gateway->image, imagePath()['gateway']['size']) }}" />
                        <input class="upload" name="image" type="file" id="image" accept=".png, .jpg, .jpeg" />
                    </div>
                    <hr>
                    <div class="card-body">
                        <h4 class=" text-lg font-medium text-gray-900 dark:text-white
                        ">
                            {{ __('Settings of') }} {{ __($gateway->name) }}</h4>
                        @foreach ($parameters->where('global', true) as $key => $param)
                            <div class="mt-1">
                                <label>{{ __(@$param->title) }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="global[{{ $key }}]"
                                    value="{{ @$param->value }}" required />
                            </div>
                        @endforeach
                        @if ($gateway->code < 1000 && $gateway->extra)
                            <div class="mt-1">
                                <h4 class="mb-1">{{ __('Configurations') }}</h4>
                                <div class="row mt-1">
                                    @foreach ($gateway->extra as $key => $param)
                                        <div class="col lg:col-span-6">
                                            <label>{{ __(@$param->title) }}</label>
                                            <div class="input-group">
                                                <input type="text" value="{{ route($param->value) }}" readonly />
                                                <span class="copyInput" data-bs-toggle="tooltip" data-bs-placement="top"
                                                    title="{{ __('Copy') }}"><i class="bi bi-clipboard"></i></span>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-success">
                            {{ __('Update Setting') }}
                        </button>
                    </div>
                </div>
            </div>
            <div class="xs:col-span-1 md:col-span-2 lg:col-span-2 space-y-5">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div>
                                <h1>{{ __($gateway->name) }}</h1>
                            </div>
                            <div>
                                <div class="input-group-btn">
                                    <select class="newCurrencyVal">
                                        <option value="">{{ __('Select currency') }}</option>
                                        @forelse($supportedCurrencies as $currency => $symbol)
                                            <option value="{{ $currency }}" data-symbol="{{ $symbol }}">
                                                {{ __($currency) }} </option>
                                        @empty
                                            <option value="">{{ __('No available currency support') }}
                                            </option>
                                        @endforelse

                                    </select>
                                    <button type="button" class="btn-outline-primary newCurrencyBtn"
                                        data-crypto="{{ $gateway->crypto }}"
                                        data-name="{{ $gateway->name }}">{{ __('Add new') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p>{{ __($gateway->description) }}</p>
                        <!-- payment-method-item start -->
                    </div>
                </div>
                @isset($gateway->currencies)
                    @foreach ($gateway->currencies as $gateway_currency)
                        <input type="hidden" name="currency[{{ $currency_idx }}][symbol]"
                            value="{{ $gateway_currency->symbol }}">
                        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="flex">
                                <img class="img-thumbnail mr-3"
                                    src="{{ getImage(imagePath()['gateway']['path'] . '/' . $gateway_currency->image, imagePath()['gateway']['size']) }}">
                                <div>
                                    <h4 class="mb-1">Currency Specific Image</h4>
                                    <input class="upload" name="currency[{{ $currency_idx }}][image]" type="file"
                                        id="mage{{ $currency_idx }}" accept=".png, .jpg, .jpeg" />
                                </div>
                            </div>
                            <div>
                                <h4 class="mb-1">{{ __($gateway->name) }} - {{ __($gateway_currency->currency) }}</h4>
                                <div class="flex items-center">
                                    <input type="text" class="form-control mr-3" placeholder="{{ __('Name for Provider') }}"
                                        name="currency[{{ $currency_idx }}][name]" value="{{ $gateway_currency->name }}"
                                        required />
                                    <button type="button" class="btn btn-danger" data-modal-toggle="deleteModal"
                                        onclick="
                                            $('#deleteModal').find('input[name=id]').val('{{ $gateway_currency->id }}');
                                            $('#deleteModal').find('.name').text('{{ $gateway_currency->currencyIdentifier() }}');">
                                        <i class="bi bi-trash mr-2"></i>{{ __('Remove') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div class="card">
                                <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                    <p
                                        class=" text-lg font-medium text-gray-900 dark:text-white
                                               ">
                                        {{ __('Payment Limits') }}
                                    </p>
                                </div>
                                <div class="card-body space-y-3">
                                    <div><label class="w-full mt-1">{{ __('Minimum Amount') }} <span
                                                class="text-danger">*</span></label>
                                        <div class="input-group mb-1">
                                            <input type="text" name="currency[{{ $currency_idx }}][min_amount]"
                                                value="{{ ttz($gateway_currency->min_amount) }}" placeholder="0" required />
                                            <span>{{ __(getcurrency()->code) }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="w-full">{{ __('Maximum Amount') }} <span
                                                class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input type="text" placeholder="0"
                                                name="currency[{{ $currency_idx }}][max_amount]"
                                                value="{{ ttz($gateway_currency->max_amount) }}" required />
                                            <span>{{ __(getcurrency()->code) }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                    <p
                                        class=" text-lg font-medium text-gray-900 dark:text-white
                                               ">
                                        {{ __('Fees') }}
                                    </p>
                                </div>
                                <div class="card-body space-y-3">
                                    <div><label class="w-full mt-1">{{ __('Fixed Fee') }} <span
                                                class="text-danger">*</span></label>
                                        <div class="input-group mb-1">
                                            <input type="text" placeholder="0"
                                                name="currency[{{ $currency_idx }}][fixed_charge]"
                                                value="{{ ttz($gateway_currency->fixed_charge) }}" required />
                                            <span>{{ __(getcurrency()->code) }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="w-full">{{ __('Percentage Fee') }} <span
                                                class="text-danger">*</span></label>
                                        <div class="input-group">
                                            <input type="text" placeholder="0"
                                                name="currency[{{ $currency_idx }}][percent_charge]"
                                                value="{{ ttz($gateway_currency->percent_charge) }}" required />
                                            <span>%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                    <p
                                        class=" text-lg font-medium text-gray-900 dark:text-white
                                               ">
                                        {{ __('Conversion Rate') }}
                                    </p>
                                </div>
                                <div class="card-body space-y-3">
                                    <div>
                                        <div class="my-1">
                                            <label class="w-full">{{ __('Currency') }}</label>
                                            <input type="text" name="currency[{{ $currency_idx }}][currency]"
                                                class="form-control border-radius-5 "
                                                value="{{ __($gateway_currency->currency) }}" readonly />
                                        </div>

                                    </div>
                                    <div>
                                        <div class="my-1">
                                            <label class="w-full">{{ __('Symbol') }}</label>
                                            <input type="text" name="currency[{{ $currency_idx }}][symbol]"
                                                class="form-control border-radius-5 symbl"
                                                value="{{ $gateway_currency->symbol }}" data-crypto="{{ $gateway->crypto }}"
                                                required />
                                        </div>

                                    </div>
                                    <div>
                                        <label class="w-full">{{ __('Rate') }} <span class="text-danger">*</span></label>
                                        <div class="input-group">
                                            {{-- <div>1 {{ __(getcurrency()->code) }} = </div> --}}
                                            <input type="text" placeholder="0" name="currency[{{ $currency_idx }}][rate]"
                                                value="{{ $gateway_currency->rate + 0 }}" required />
                                            <span><span
                                                    class="currency_symbol">{{ __($gateway_currency->baseSymbol()) }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        @if ($parameters->where('global', false)->count() != 0)
                            @php
                                $gateway_parameter = json_decode($gateway_currency->gateway_parameter);
                            @endphp
                            <div class="card">
                                <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                    <p
                                        class=" text-lg font-medium text-gray-900 dark:text-white
                                               ">
                                        {{ __('Configuration') }}
                                    </p>
                                </div>
                                <div class="card-body space-y-3">
                                    @foreach ($parameters->where('global', false) as $key => $param)
                                        <div>
                                            <div class="input-group mb-1">
                                                <label class="w-full">{{ __($param->title) }}
                                                    <span class="text-danger">*</span></label>
                                                <input type="text" class="form-control"
                                                    name="currency[{{ $currency_idx }}][param][{{ $key }}]"
                                                    value="{{ $gateway_parameter->$key }}" placeholder="--" required />
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endif

                        @php $currency_idx++ @endphp
                    @endforeach
                @endisset
                <!-- payment-method-item end -->
                <!-- **new payment-method-item start -->

                <div class="child-item newMethodCurrency hidden">
                    <input disabled type="hidden" name="currency[{{ $currency_idx }}][symbol]" class="currencySymbol">
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <div class="flex">
                            <img class="img-thumbnail mr-3"
                                src="{{ getImage(imagePath()['gateway']['path'], imagePath()['gateway']['size']) }}">
                            <div>
                                <h4 class="mb-1">Currency Specific Image</h4>
                                <input disabled type="file" accept=".png, .jpg, .jpeg" class="upload"
                                    id="image{{ $currency_idx }}" name="currency[{{ $currency_idx }}][image]" />
                            </div>
                        </div>
                        <div>
                            <h4 class="mb-1">{{ __($gateway->name) }} - {{ __(getcurrency()->currency) }}</h4>
                            <div class="flex items-center">
                                <input disabled type="text" class="form-control mr-3"
                                    placeholder="{{ __('Name for Provider') }}"
                                    name="currency[{{ $currency_idx }}][name]" required />
                                <button type="button" class="mt-1 btn btn-danger newCurrencyRemove">
                                    <i class="bi bi-trash mr-2"></i>{{ __('Remove') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                        <div class="card">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                           ">
                                    {{ __('Range') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                <div><label class="w-full mt-1">{{ __('Minimum Amount') }} <span
                                            class="text-danger">*</span></label>
                                    <div class="input-group mb-1">
                                        <input disabled type="text" name="currency[{{ $currency_idx }}][min_amount]"
                                            placeholder="0" required />
                                        <span>{{ __(getcurrency()->code) }}</span>
                                    </div>
                                </div>
                                <div>
                                    <label class="w-full">{{ __('Maximum Amount') }} <span
                                            class="text-danger">*</span></label>
                                    <div class="input-group">
                                        <input disabled type="text" placeholder="0"
                                            name="currency[{{ $currency_idx }}][max_amount]" required />
                                        <span>{{ __(getcurrency()->code) }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                           ">
                                    {{ __('Charge') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                <div><label class="w-full mt-1">{{ __('Fixed Charge') }} <span
                                            class="text-danger">*</span></label>
                                    <div class="input-group mb-1">
                                        <input disabled type="text" placeholder="0"
                                            name="currency[{{ $currency_idx }}][fixed_charge]" required />
                                        <span>{{ __(getcurrency()->code) }}</span>
                                    </div>
                                </div>
                                <div><label class="w-full">{{ __('Percent Charge') }} <span
                                            class="text-danger">*</span></label>
                                    <div class="input-group">
                                        <input disabled type="text" placeholder="0"
                                            name="currency[{{ $currency_idx }}][percent_charge]" required>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                           ">
                                    {{ __('Currency') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                <div>
                                    <label class="w-full">{{ __('Currency') }}</label>
                                    <div class="mb-1">
                                        <input disabled type="text" class="form-control currencyText border-radius-5"
                                            name="currency[{{ $currency_idx }}][currency]" readonly />
                                    </div>
                                </div>

                                <div>
                                    <label class="w-full">{{ __('Symbol') }}</label>
                                    <div class="mb-1">
                                        <input type="text" name="currency[{{ $currency_idx }}][symbol]"
                                            class="form-control border-radius-5 symbl"
                                            ata-crypto="{{ $gateway->crypto }}" disabled />
                                    </div>
                                </div>
                                <div>
                                    <label class="w-full">{{ __('Rate') }} <span class="text-danger">*</span></label>
                                    <div class="input-group">
                                        {{-- <div>
            1 {{ __(getcurrency()->code) }} =
        </div> --}}
                                        <input disabled type="text" placeholder="0"
                                            name="currency[{{ $currency_idx }}][rate]" required />
                                        <span class="currency_symbol"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @if ($parameters->where('global', false)->count() != 0)
                        <div class="card  mt-2">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                           ">
                                    {{ __('Configuration') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                @foreach ($parameters->where('global', false) as $key => $param)
                                    <div>
                                        <label class="w-full">{{ __($param->title) }} <span
                                                class="text-danger">*</span></label>
                                        <div class="mb-1">
                                            <input disabled type="text" class="form-control"
                                                name="currency[{{ $currency_idx }}][param][{{ $key }}]"
                                                placeholder="--" required />
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endif
                </div>
            </div>
            <!-- **new payment-method-item end -->
        </div>
    </form>

@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Provider Currency Remove Confirmation') }}"
        action="{{ route('admin.payment.provider.remove', $gateway->code) }}" submit="{{ __('Remove') }}"
        id="deleteModal" btn="danger">
        <div>
            <p>{{ __('Are you sure to delete') }} <span class="name"></span>
                {{ __('Provider currency?') }}</p>
        </div>
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    <a href="{{ route('admin.payment.provider.index') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Go Back') }}</a>
@endpush

@section('page-scripts')
    <script>
        $(function() {
            "use strict";

            $('.newCurrencyBtn').on('click', function() {
                var form = $('.newMethodCurrency');

                var getCurrencySelected = $('.newCurrencyVal').find(':selected').val();
                var currency = $(this).data('crypto') == 1 ? 'USD' : `${getCurrencySelected}`;

                if (!getCurrencySelected) return;
                form.find('input').removeAttr('disabled');
                var symbol = $('.newCurrencyVal').find(':selected').data('symbol');
                form.find('.currencyText').val(getCurrencySelected);
                form.find('.currency_symbol').text(currency);
                $('#payment_currency_name').text(`${$(this).data('name')} - ${getCurrencySelected}`);
                form.removeClass('hidden');
                $('html, body').animate({
                    scrollTop: $('html, body').height()
                }, 'slow');

                $('.newCurrencyRemove').on('click', function() {
                    form.find('input').val('');
                    // form.addClass('hidden');
                    form.remove();
                });

            });

            $('.symbl').on('input', function() {
                var curText = $(this).data('crypto') == 1 ? 'USD' : $(this).val();
                $(this).parents('.payment-method-body').find('.currency_symbol').text(curText);
            });

            $('.copyInput').on('click', function(e) {
                var copybtn = $(this);
                var input = copybtn.parent().parent().siblings('input');
                if (input && input.select) {
                    input.select();
                    try {
                        document.execCommand('SelectAll')
                        document.execCommand('Copy', false, null);
                        input.blur();
                        copybtn.addClass('copied');
                        setTimeout(function() {
                            copybtn.removeClass('copied');
                        }, 1000);
                    } catch (err) {
                        alert('Please press Ctrl/Cmd + C to copy');
                    }
                }
            });

        });
    </script>
@endsection
