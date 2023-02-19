@extends('layouts.user')
@section('content')

    <div class="row justify-start">
        <div class="card lg:col-span-4 md:col-span-4">
            <div class="card-body">
                <div class="card card-deposit text-center">
                    <div class="deposit-card">
                        <div class="card-header">
                            <h3 class="card-title">{{ __('Payment Preview') }}</h3>
                        </div>
                    </div>
                    <div class="card-body card-body-deposit text-center">
                        <h4 class="my-2  text-info"> {{ __('PLEASE SEND EXACTLY') }} <span class="text-success">
                                {{ $data->amount }}</span> {{ __($data->currency) }}</h4>
                        <h5 class="mb-2">{{ __('TO') }} <span class="text-success"> {{ $data->sendto }}</span></h5>
                        <img class="crypto-img" src="{{ $data->img }}" alt="{{ __('image') }}">
                        <h4 class="text-danger bold my-4">{{ __('SCAN TO SEND') }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
