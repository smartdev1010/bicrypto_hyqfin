@php
    $configData = Helper::applClasses();
@endphp
@extends('layouts/fullLayoutMaster')

@section('title', 'Coming Soon')

@section('page-style')
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/page-misc.css')) }}">
@endsection

@section('content')
    <!-- Coming soon page-->
    <div class="misc-wrapper">
        <a class="brand-logo" href="#">
        </a>
        <div class="misc-inner p-2 p-sm-3">
            <div class="w-100 text-center">
                <h2 class="mb-1">{{ __('We are launching soon') }} 🚀</h2>
                <p class="mb-3">
                    {{ __('We are creating something awesome. Please subscribe to get notified when it is ready') }}!
                </p>
                <form class="row row-cols-md-auto row justify-content-center align-items-center m-0 mb-2 gx-3"
                    action="javascript:void(0)">
                    <div class="col-12 m-0 mb-1">
                        <input class="form-control" id="notify-email" type="text" placeholder="john@example.com" />
                    </div>
                    <div class="col-12 d-md-block d-grid ps-md-0 ps-auto">
                        <button class="btn btn-primary mb-1 btn-sm-block" type="submit">{{ __('Notify') }}</button>
                    </div>
                </form>
                @if ($configData['theme'] === 'dark')
                    <img class="img-fluid" src="{{ asset('images/pages/coming-soon-dark.svg') }}" alt="Coming soon page" />
                @else
                    <img class="img-fluid" src="{{ asset('images/pages/coming-soon.svg') }}" alt="Coming soon page" />
                @endif
            </div>
        </div>
    </div>
    <!-- / Coming soon page-->
@endsection
