@extends('layouts/fullLayoutMaster')
@php
    $configData = applClasses();
@endphp

@section('title', 'Reset Password')

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
                        <img src="{{ asset('images/pages/reset-password-v2-dark.svg') }}" class="img-fluid"
                            alt="Register V2" />
                    @else
                        <img src="{{ asset('images/pages/reset-password-v2.svg') }}" class="img-fluid" alt="Register V2" />
                    @endif
                </div>
            </div>
            <!-- /Left Text-->

            <!-- Reset password-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="#" class="col d-flex justify-content-center mb-1">
                        <div class="brand-text"><img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                                alt="{{ __('image') }}"></div>
                    </a>

                    <h4 class="card-title mb-1">{{ __('Reset Password') }} 🔒</h4>
                    <p class="card-text mb-2">{{ __('Your new password must be different from previously used passwords') }}
                    </p>

                    <form class="auth-reset-password-form mt-2" method="POST" action="{{ route('password.update') }}">
                        @csrf
                        <input type="hidden" name="token" value="{{ $request->route('token') }}">

                        <div class="mb-1">
                            <label for="email" class="form-label">{{ __('Email') }}</label>
                            <input type="email" class="form-control @error('email') is-invalid @enderror" id="email"
                                name="email" placeholder="john@example.com" aria-describedby="email" tabindex="1"
                                value="{{ old('email') }}" required autofocus />
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="reset-password-new">{{ __('New Password') }}</label>
                            </div>
                            <div
                                class="input-group input-group-merge form-password-toggle @error('password') is-invalid @enderror">
                                <input type="password"
                                    class="form-control form-control-merge @error('password') is-invalid @enderror"
                                    id="reset-password-new" name="password"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="reset-password-new" tabindex="2" autofocus required />
                                <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="reset-password-confirm">{{ __('Confirm Password') }}</label>
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input type="password" class="form-control form-control-merge" id="reset-password-confirm"
                                    name="password_confirmation" autocomplete="new-password"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="reset-password-confirm" tabindex="3" />
                                <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100"
                            tabindex="4">{{ __('Set New Password') }}</button>
                    </form>

                    <p class="text-center mt-2">
                        @if (Route::has('login'))
                            <a href="{{ route('login') }}">
                                <i data-feather="chevron-left"></i> {{ __('Back to login') }}
                            </a>
                        @endif
                    </p>
                </div>
            </div>
            <!-- /Reset Password basic -->
        </div>
    </div>
@endsection


@section('vendor-script')
    <script src="{{ asset(mix('vendors/js/forms/validation/jquery.validate.min.js')) }}"></script>
@endsection

@section('page-script')
    <script src="{{ asset(mix('js/scripts/pages/auth-reset-password.js')) }}"></script>
@endsection
