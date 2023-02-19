@extends('layouts.user')
@section('content')

    <div class="row justify-start">
        <div class="card lg:col-span-4 md:col-span-4">
            <div class="card-body">
                <img class="img-thumbnail mb-1" src="{{ $deposit->gateway_currency()->methodImage() }}"
                    alt="{{ __('Payment Image') }}">
                <div class="deposit-content">
                    <ul>
                        <li>
                            {{ __('Final Amount') }}: <span class="text-success">{{ getAmount($deposit->final_amo) }}
                                {{ __($deposit->method_currency) }}</span>
                        </li>
                        <li>
                            {{ __('To Get') }}: <span class="text-danger">{{ getAmount($deposit->amount) }}
                                {{ __($general->cur_text) }}</span>
                        </li>
                    </ul>
                    <form action="{{ $data->url }}" method="{{ $data->method }}">
                        <script src="{{ $data->checkout_js }}"
                            @foreach ($data->val as $key => $value)
                            data-{{ $key }}="{{ $value }}" @endforeach>
                        </script>
                        <input type="hidden" custom="{{ $data->custom }}" name="hidden">
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection


@push('script')
    <script>
        "use strict";
        $(document).ready(function() {
            $('input[type="submit"]').addClass("btn btn-success");
        })
    </script>
@endpush
