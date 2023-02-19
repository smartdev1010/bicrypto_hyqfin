@extends('layouts.user')
@php
    $page_title = 'KYC Verification';
    $kyc_title = $user_kyc !== null && isset($_GET['thank_you']) ? __('Begin your ID-Verification') : __('KYC Verification');
    $kyc_desc = $user_kyc !== null && isset($_GET['thank_you']) ? __('Verify your identity to participate in our platform.') : __('To comply with regulations each participant is required to go through identity verification (KYC/AML) to prevent fraud, money laundering operations, transactions banned under the sanctions regime or those which fund terrorism. Please, complete our fast and secure verification process to participate in our platform.');
@endphp
@section('page-style')
    @vite(['resources/css/kyc.css'])
@endsection
@section('content')
    <div class=" max-w-2xl mx-auto">
        <div class="page-header page-header-kyc">
            <div class="row justify-center">
                <div class="text-center">
                    <h2 class="page-title">{{ $kyc_title }}</h2>
                    <p class="large">{{ $kyc_desc }}</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="">
                <div class="kyc-status card">
                    {{-- IF NOT SUBMITED --}}
                    @if ($user_kyc == null)
                        <div class="card-body text-center py-3 border-light rounded">
                            <div class="status-empty">
                                <div class="status-icon flex justify-center items-center">
                                    <i class="bi bi-files"></i>
                                </div>
                                <span
                                    class="status-text mx-5 text-dark">{{ __('You have not submitted your necessary documents to verify your identity.') }}{{ __(' In order to trade in our platform, please verify your identity.') }}</span>
                                <p class="px-md-5">
                                    {{ __('It would great if you please submit the form. If you have any question, please feel free to contact our support team.') }}
                                </p>
                                <a href="{{ route('user.kyc.application') }}?state=new"
                                    class="btn mt-5 btn-primary">{{ __('Click here to complete your KYC') }}</a>
                            </div>
                        </div>
                    @endif
                    {{-- IF SUBMITED @Thanks --}}
                    @if ($user_kyc !== null && isset($_GET['thank_you']))
                        <div class="card-body text-center py-3 border-warning rounded">
                            <div class="status-thank">
                                <div class="status-icon flex justify-center items-center">
                                    <i class="bi bi-check"></i>
                                </div>
                                <span
                                    class="status-text mx-5 large text-dark">{{ __('You have completed the process of KYC') }}</span>
                                <p class="px-md-5">
                                    {{ __('We are still waiting for your identity verification. Once our team verified your identity, you will be notified by email. You can also check your KYC  compliance status from your profile page.') }}
                                </p>
                            </div>
                        </div>
                    @endif

                    {{-- IF PENDING --}}
                    @if ($user_kyc !== null && $user_kyc->status == 'pending' && !isset($_GET['thank_you']))
                        <div class="card-body text-center py-3 border-info rounded flex items-center">
                            <div class="status-process">
                                <div class="status-icon flex justify-center items-center">
                                    <i class="bi bi-infinity"></i>
                                </div>
                                <span
                                    class="status-text text-dark">{{ __('Your application verification under process.') }}</span>
                                <p class="px-md-5">
                                    {{ __('We are still working on your identity verification. Once our team verified your identity, you will be notified by email.') }}
                                </p>
                            </div>
                        </div>
                    @endif

                    {{-- IF REJECTED/MISSING --}}
                    @if (
                        $user_kyc !== null &&
                            ($user_kyc->status == 'missing' || $user_kyc->status == 'rejected') &&
                            !isset($_GET['thank_you']))
                        <div class="card-body text-center py-3 border-warning rounded">
                            <div class="status{{ $user_kyc->status == 'missing' ? '-warnning' : '-canceled' }}">
                                <div class="status-icon flex justify-center items-center">
                                    <i class="bi bi-exclamation-lg"></i>
                                </div>
                                <span class="status-text mx-5 text-dark">
                                    {{ $user_kyc->status == 'missing' ? __('We found some information to be missing.') : __('Sorry! Your application was rejected.') }}
                                </span>
                                <p class="px-md-5">
                                    {{ __('In our verification process, we found information that is incorrect or missing. Please resubmit the form. In case of any issues with the submission please contact our support team.') }}
                                </p>
                                <a href="{{ route('user.kyc.application') }}?state={{ $user_kyc->status == 'missing' ? 'missing' : 'resubmit' }}"
                                    class="btn mt-5 btn-primary mt-0">{{ __('Submit Again') }}</a>
                            </div>
                        </div>
                    @endif

                    {{-- IF VERIFIED --}}
                    @if ($user_kyc !== null && $user_kyc->status == 'approved' && !isset($_GET['thank_you']))
                        <div class="card-body text-center py-3 border-success rounded">
                            <div class="status-verified">
                                <div class="status-icon flex justify-center items-center">
                                    <i class="bi bi-shield-check text-success"></i>
                                </div>
                                <span
                                    class="status-text mx-5 text-dark">{{ __('Your identity verified successfully.') }}</span>
                                <p class="px-md-5">
                                    {{ __('One of our team members verified your identity. Now you can participate in our platform. Thank you.') }}
                                </p>
                                <a href="/app" class="btn mt-5 btn-primary">{{ __('Trade Wallet') }}</a>
                            </div>
                        </div>
                    @endif

                </div>
            </div>
        </div>
    </div>
@endsection
