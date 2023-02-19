@extends('layouts/fullLayoutMaster')
@php
    $configData = applClasses();
@endphp
@section('title', 'Register Page')

@section('page-style')
    {{-- Page Css files --}}
    <link rel="stylesheet" href="{{ asset(mix('css/base/plugins/forms/form-validation.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/authentication.css')) }}">
@endsection

@section('content')
    <div class="auth-wrapper auth-cover">
        <div class="auth-inner row m-0">
            <!-- Brand logo-->
            <!-- /Brand logo-->

            <!-- Left Text-->
            <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    @if ($configData['theme'] === 'dark')
                        <img class="img-fluid" src="{{ asset('images/pages/register-v2-dark.svg') }}" alt="Register V2" />
                    @else
                        <img class="img-fluid" src="{{ asset('images/pages/register-v2.svg') }}" alt="Register V2" />
                    @endif
                </div>
            </div>
            <!-- /Left Text-->

            <!-- Register-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="#" class="col d-flex justify-content-center mb-1">
                        <div class="brand-text"><img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                                alt="{{ __('image') }}"></div>
                    </a>
                    <h4 class="card-title mb-1">{{ __('Adventure starts here') }} 🚀</h4>
                    <p class="card-text mb-2">{{ __('Register to access the trading platform') }}!</p>

                    <form class="auth-register-form mt-2" method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="row">
                            <div class="col-lg-6 mb-1">
                                <label for="register-username" class="form-label">{{ __('Username') }}</label>
                                <input type="text" class="form-control @error('username') is-invalid @enderror"
                                    id="register-username" name="username" placeholder="johndoe"
                                    aria-describedby="register-username" tabindex="1" autofocus
                                    value="{{ old('username') }}" />
                                @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="col-lg-6 m mb-1">
                                <label for="register-email" class="form-label">{{ __('Email') }}</label>
                                <input type="text" class="form-control @error('email') is-invalid @enderror"
                                    id="register-email" name="email" placeholder="john@example.com"
                                    aria-describedby="register-email" tabindex="2" value="{{ old('email') }}" />
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 mb-1">
                                <label for="register-password" class="form-label">{{ __('Password') }}</label>

                                <div
                                    class="input-group input-group-merge form-password-toggle @error('password') is-invalid @enderror">
                                    <input type="password"
                                        class="form-control form-control-merge @error('password') is-invalid @enderror"
                                        id="register-password" name="password"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="register-password" tabindex="3" />
                                    <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                </div>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="col-lg-6 mb-1">
                                <label for="register-password-confirm"
                                    class="form-label">{{ __('Confirm Password') }}</label>

                                <div class="input-group input-group-merge form-password-toggle">
                                    <input type="password" class="form-control form-control-merge"
                                        id="register-password-confirm" name="password_confirmation"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="register-password" tabindex="4" />
                                    <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-1 col-md-6">
                                <label class="form-label" for="firstname">{{ __('First Name') }}</label>
                                <input type="text" name="firstname" id="firstname"
                                    class="form-control @error('firstname') is-invalid @enderror" placeholder="John"
                                    aria-describedby="register-firstname" tabindex="5" autofocus
                                    value="{{ old('firstname') }}" />
                                @error('firstname')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="mb-1 col-md-6">
                                <label class="form-label" for="lastname">{{ __('Last Name') }}</label>
                                <input type="text" name="lastname" id="lastname"
                                    class="form-control @error('lastname') is-invalid @enderror" placeholder="Doe"
                                    aria-describedby="register-lastname" tabindex="6" autofocus
                                    value="{{ old('lastname') }}" />
                                @error('lastname')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            @if (getPlatform('system') != null && getPlatform('system')->phone == 'on')
                                <div class="mb-1 col-md-6">
                                    <label class="form-label" for="phone">{{ __('Phone Number') }}</label>
                                    <div class="input-group">
                                        <span class="input-group-text h-100 p-0">
                                            <select name="country_code" class="h-100 border-0 px-2">
                                                @include('partials.country_code')
                                            </select>
                                        </span>
                                        <input type="tel" name="phone" id="phone"
                                            class="form-control @error('phone') is-invalid @enderror"
                                            placeholder="000-000-0000" aria-describedby="register-phone" tabindex="7"
                                            autofocus value="{{ old('phone') }}" />
                                    </div>
                                    @error('phone')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            @endif
                        </div>
                        @if (session()->get('reference') != null)
                            <div class="row">
                                <div class="col-12 my-1">
                                    <label for="multiStepsreferenceBy"
                                        class="form-label">{{ __('Reference By') }}</label>
                                    <input type="text" class="form-control" id="multiStepsreferenceBy"
                                        name="multiStepsreferBy" placeholder="johndoe" aria-describedby="referenceBy"
                                        tabindex="8" autofocus value="{{ session()->get('reference') }}" readonly />
                                </div>
                            </div>
                        @endif

                        @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                            <div class="mb-1">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="terms" name="terms"
                                        tabindex="9" />
                                    <label class="form-check-label" for="terms">
                                        {{ __('I agree to the') }} <a href="{{ route('terms.show') }}"
                                            target="_blank">{{ __('Terms of Service') }}</a>
                                        {{ __('and') }}
                                        <a href="{{ route('policy.show') }}"
                                            target="_blank">{{ __('Privacy Policy') }}</a>
                                    </label>
                                </div>
                            </div>
                        @endif
                        <button type="submit" class="btn btn-primary w-100" tabindex="5">{{ __('Sign up') }}</button>
                    </form>

                    <p class="text-center mt-2">
                        <span>{{ __('Already have an account') }}?</span>
                        @if (Route::has('login'))
                            <a href="{{ route('login') }}">
                                <span>{{ __('Sign in instead') }}</span>
                            </a>
                        @endif
                    </p>
                </div>
            </div>
            <!-- /Register basic -->
        </div>
    </div>
@endsection
@if (getPlatform('system')->phone == 'on')
    @push('style')
        <style type="text/css">
            .country-code .input-group-prepend .input-group-text {
                background: #fff !important;
            }

            .country-code select {
                border: none;
            }

            .country-code select:focus {
                border: none;
                outline: none;
            }
        </style>
    @endpush

    @php
        try {
            $info = json_decode(json_encode(getIpInfo()), true);
            $country_code = @implode(',', $info['code']) ?? 'UK';
        } catch (\Throwable $th) {
            //throw $th;
        }
    @endphp

    @push('script')
        <script>
            "use strict";
            @if ($country_code)
                $(`option[data-code={{ $country_code }}]`).attr('selected', '');
            @endif
            $('select[name=country_code]').change(function() {
                $('input[name=country]').val($('select[name=country_code] :selected').data('country'));
            }).change();
        </script>
    @endpush
@endif


@section('vendor-script')
    <script src="{{ asset('vendors/js/forms/validation/jquery.validate.min.js') }}"></script>
@endsection

@section('page-script')
    <script src="{{ asset('js/scripts/pages/auth-register.js') }}"></script>
@endsection
