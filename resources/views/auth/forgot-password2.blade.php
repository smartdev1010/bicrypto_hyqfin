@extends('layouts/fullLayoutMaster')
@php
    $configData = applClasses();
@endphp

@section('title', 'Forgot Password')

@section('page-style')
    {{-- Page Css files --}}
    <link rel="stylesheet" href="{{ asset(mix('css/base/plugins/forms/form-validation.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/authentication.css')) }}">
@endsection

@section('content')
    <div class="auth-wrapper auth-cover">
        <div class="auth-inner row m-0">

            <!-- Left Text-->
            <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    @if ($configData['theme'] === 'dark')
                        <img class="img-fluid" src="{{ asset('images/pages/forgot-password-v2-dark.svg') }}"
                            alt="Forgot password V2" />
                    @else
                        <img class="img-fluid" src="{{ asset('images/pages/forgot-password-v2.svg') }}"
                            alt="Forgot password V2" />
                    @endif
                </div>
            </div>
            <!-- /Left Text-->

            <!-- Forgot password-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="#" class="col d-flex justify-content-center mb-1">
                        <div class="brand-text"><img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                                alt="{{ __('image') }}"></div>
                    </a>

                    <h4 class="card-title mb-1">{{ __('Forgot Password') }}? 🔒</h4>
                    <p class="card-text mb-2">
                        {{ __('Enter your email and we will send you instructions to reset your password') }}
                    </p>

                    @if (session('status'))
                        <div class="mb-1 text-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form class="auth-forgot-password-form mt-2" method="POST" action="{{ route('password.email') }}">
                        @csrf
                        <div class="mb-1">
                            <label for="forgot-password-email" class="form-label">{{ __('Email') }}</label>
                            <input type="text" class="form-control @error('email') is-invalid @enderror"
                                id="forgot-password-email" name="email" value="{{ old('email') }}"
                                placeholder="john@example.com" aria-describedby="forgot-password-email" tabindex="1"
                                autofocus />
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <button type="submit" class="btn btn-primary w-100"
                            tabindex="2">{{ __('Send reset link') }}</button>
                    </form>

                    <p class="text-center mt-2">
                        @if (Route::has('login'))
                            <a href="{{ route('login') }}"> <i data-feather="chevron-left"></i> {{ __('Back to login') }}
                            </a>
                        @endif
                    </p>
                </div>
            </div>
            <!-- /Forgot Password basic -->
        </div>
    </div>
@endsection


@section('vendor-script')
    <script src="{{ asset(mix('vendors/js/forms/validation/jquery.validate.min.js')) }}"></script>
@endsection

@section('page-script')
    <script src="{{ asset(mix('js/scripts/pages/auth-forgot-password.js')) }}"></script>
@endsection
