@extends('layouts.user')
@section('content')

    <div class="row justify-start">
        <div class="card lg:col-span-4 md:col-span-4">
            <div class="card-header">{{ __('Stripe Payment') }}</div>
            <div class="card-body card-body-deposit">
                <div class="card-wrapper"></div>
                <br><br>
                <form role="form" id="payment-form" method="{{ $data->method }}" action="{{ $data->url }}">
                    {{ csrf_field() }}
                    <input type="hidden" value="{{ $data->track }}" name="track">
                    <div class="row">
                        <div class="md:col-span-6">
                            <label for="name">{{ __('CARD NAME') }}</label>
                            <div class="input-group">
                                <input type="text" class="form-control" name="name"
                                    placeholder="{{ __('Card Name') }}" autocomplete="off" autofocus />
                                <span class="input-group-text bg-info "><i class="bi bi-person-badge"></i></span>
                            </div>
                        </div>
                        <div class="md:col-span-6">
                            <label for="cardNumber">{{ __('CARD NUMBER') }}</label>
                            <div class="input-group">
                                <input type="tel" class="form-control" name="cardNumber"
                                    placeholder="{{ __('Valid Card Number') }}" autocomplete="off" required autofocus />
                                <span class="input-group-text bg-info"><i class="bi bi-credit-card"></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="md:col-span-6">
                            <label for="cardExpiry">{{ __('EXPIRATION DATE') }}</label>
                            <input type="tel" class="form-control input-sz" name="cardExpiry"
                                placeholder="{{ __('MM / YYYY') }}" autocomplete="off" required />
                        </div>
                        <div class="md:col-span-6 ">
                            <label for="cardCVC">{{ __('CVC CODE') }}</label>
                            <input type="tel" class="form-control input-sz" name="cardCVC"
                                placeholder="{{ __('CVC') }}" autocomplete="off" required />
                        </div>
                    </div>
                    <br>
                    <button class="btn btn-primary text--white" type="submit"> {{ __('Pay Now') }}
                    </button>
                </form>
            </div>
        </div>
    </div>
@endsection


@push('script')
    <script type="text/javascript" src="https://rawgit.com/jessepollak/card/master/dist/card.js"></script>

    <script>
        (function($) {
            "use strict";
            $(document).ready(function() {
                var card = new Card({
                    form: '#payment-form',
                    container: '.card-wrapper',
                    formSelectors: {
                        numberInput: 'input[name="cardNumber"]',
                        expiryInput: 'input[name="cardExpiry"]',
                        cvcInput: 'input[name="cardCVC"]',
                        nameInput: 'input[name="name"]'
                    }
                });
            });
        })(jQuery);
    </script>
@endpush
