@extends('layouts/fullLayoutMaster')
@php
    use mobiledetect\mobiledetectlib\Detection;
    $detect = new Mobile_Detect();
    $configData = applClasses();
@endphp
@section('title', 'Login Page')

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
                        <img class="img-fluid" src="{{ asset('images/pages/login-v2-dark.svg') }}" alt="Login V2" />
                    @else
                        <img class="img-fluid" src="{{ asset('images/pages/login-v2.svg') }}" alt="Login V2" />
                    @endif
                </div>
            </div>
            <!-- /Left Text-->

            <!-- Login-->
            <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <a href="#" class="col d-flex justify-content-center mb-1">
                        <div class="brand-text"><img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                                alt="{{ __('image') }}"></div>
                    </a>

                    <h4 class="card-title mb-1">{{ __('Welcome') }}! 👋</h4>
                    <p class="card-text mb-2">{{ __('Please sign-in to your account and start the adventure') }}</p>

                    @if (session('status'))
                        <div class="alert alert-success mb-1 rounded-0" role="alert">
                            <div class="alert-body">
                                {{ session('status') }}
                            </div>
                        </div>
                    @endif

                    <form class="auth-login-form mt-2" method="POST" action="{{ route('login') }}" id="loginForm">
                        @csrf
                        <div class="mb-1">
                            <label for="login-email" class="form-label">{{ __('Email / Username') }}</label>
                            <input type="text"
                                class="form-control @error('email') is-invalid @enderror @error('username') is-invalid @enderror"
                                id="login-email" name="email" placeholder="john@example.com"
                                aria-describedby="login-email" tabindex="1" autofocus value="{{ old('email') }}" />
                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>

                        <div class="mb-1">
                            <div class="d-flex justify-content-between">
                                <label class="form-label" for="login-password">{{ __('Password') }}</label>
                                @if (Route::has('password.request'))
                                    <a href="{{ route('password.request') }}">
                                        <small>{{ __('Forgot Password') }}?</small>
                                    </a>
                                @endif
                            </div>
                            <div class="input-group input-group-merge form-password-toggle">
                                <input type="password" class="form-control form-control-merge" id="login-password"
                                    name="password" tabindex="2"
                                    placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    aria-describedby="login-password" />
                                <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                            </div>
                        </div>
                        <div class="mb-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember" name="remember"
                                    tabindex="3" {{ old('remember') ? 'checked' : '' }} />
                                <label class="form-check-label" for="remember"> {{ __('Remember Me') }} </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" tabindex="4">{{ __('Sign in') }}</button>
                    </form>

                    <p class="text-center mt-2">
                        <span>{{ __('New on our platform') }}?</span>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">
                                <span>{{ __('Create an account') }}</span>
                            </a>
                        @endif
                    </p>
                    @if (getExt('7')->status == 1)
                        <div class="divider my-2">
                            <div class="divider-text">or</div>
                        </div>

                        <div class="auth-footer-btn d-flex justify-content-center">
                            <button type="button" class="btn btn-success w-100" onclick="login('Metamask')">
                                {{ __('Sign In With Wallet') }}
                            </button>
                            </a>
                        </div>
                    @endif
                </div>
            </div>
            <!-- /Login basic -->
        </div>
    </div>
@endsection

@section('vendor-script')
    <script src="{{ asset(mix('vendors/js/forms/validation/jquery.validate.min.js')) }}"></script>
@endsection

@section('page-script')
    <script src="{{ asset(mix('js/scripts/pages/auth-login.js')) }}"></script>
    @if (getExt('7')->status == 1)
        <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>
        <script>
            async function login(type) {
                if (type == 'Metamask') {

                    if (!window.ethereum) {
                        alert('MetaMask not detected. Please install MetaMask first.');
                        return;
                    }

                    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

                    let res = await fetch('/login/web3-login-message');
                    const message = await res.text();

                    const accounts = await ethereum.request({
                        method: 'eth_requestAccounts'
                    });
                    const account = accounts[0];

                    const signer = provider.getSigner();

                    const address = await signer.getAddress();
                    const signature = await signer.signMessage(message);
                    $.ajax({
                        headers: {
                            "X-CSRF-TOKEN": "{{ csrf_token() }}",
                        },
                        url: "{{ route('web3.login.verify') }}",
                        method: "POST",
                        data: {
                            address: address,
                            signature: signature,
                        },
                        success: function(response) {
                            let res = JSON.parse(response);
                            if (res.success == true) {
                                notify(res.type, res.message)
                                window.location.href = "{{ route('user.home') }}";
                            } else {
                                notify(res.type, res.message)
                            }
                        },
                        error: function(response) {
                            let res = JSON.parse(response);
                            notify(res.type, res.message)
                        }
                    });
                }
            }
        </script>
    @endif
@endsection
