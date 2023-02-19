@extends('layouts/fullLayoutMaster')
@php
    $configData = applClasses();
@endphp

@section('title', 'Verify Email Cover')

@section('page-style')
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/authentication.css')) }}">
@endsection

@section('content')
    <div class="auth-wrapper auth-cover">
        <div class="auth-inner row m-0">

            <!-- Left Text-->
            <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    @if ($configData['theme'] === 'dark')
                        <img src="{{ asset('images/illustration/verify-email-illustration-dark.svg') }}" class="img-fluid"
                            alt="two steps verification" />
                    @else
                        <img src="{{ asset('images/illustration/verify-email-illustration.svg') }}" class="img-fluid"
                            alt="two steps verification" />
                    @endif
                </div>
            </div>
            <!-- /Left Text-->

            <!-- verify email cover-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="#" class="col d-flex justify-content-center mb-1">
                        <div class="brand-text"><img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                                alt="{{ __('image') }}"></div>
                    </a>

                    <h4 class="card-title mb-1">{{ __('Verify Your Email Address') }}! </h4>
                    @if (session('status') == 'verification-link-sent')
                        <div class="alert alert-success" role="alert">
                            <div class="alert-body">
                                {{ __('A new verification link has been sent to the email address you provided during registration.') }}
                            </div>
                        </div>
                    @endif
                    <p class="card-text mb-2">
                        {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you did not receive the email, we will gladly send you another.') }}
                    </p>

                    <div class="mt-4 d-flex justify-content-between">
                        <form method="POST" action="{{ route('verification.send') }}">
                            @csrf
                            <button type="submit"
                                class="btn btn-link btn-flat-secondary">{{ __('click here to request another') }}</button>
                        </form>

                        <form method="POST" action="/logout">
                            @csrf

                            <button type="submit" class="btn btn-danger">
                                {{ __('Log Out') }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
