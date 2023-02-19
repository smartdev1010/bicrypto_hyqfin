@extends('layouts.admin')
@section('page-style')
@endsection
@section('content')
    <div class="card text-center mx-auto w-1/3">
        <h1 class="card-title py-5">{{ __('License Activator') }}</h1>
        <div class="card-body">
            <div class="alert alert-danger">
                <div class="alert-body">
                    {{ __('Do not run this activater if your license is active in the platform otherwise your site will show error 406') }}
                </div>
            </div>
        </div>
        @php
            $license_code = null;
            $client_name = null;
        @endphp
        @if (!empty($_POST['license']) && !empty($_POST['client']))
            @php
                $license_code = strip_tags(trim($_POST['license']));
                $client_name = strip_tags(trim($_POST['client']));
                $activate_response = $api->activate_license($license_code, $client_name);
            @endphp
            @if (empty($activate_response))
                @php
                    $msg = 'Server is unavailable.';
                @endphp
            @else
                @php
                    $msg = $activate_response['message'];
                @endphp
            @endif
            @if ($activate_response['status'] != true)
                <form action="{{ route('admin.lic.activate') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <div class="alert alert-danger mb-1">
                            <div class="alert-body">
                                {{ ucfirst($msg) }}
                            </div>
                        </div>
                        <div class="text-start mb-1">
                            <label class="form-control-label">{{ __('License code') }}</label>
                            <div class="control">
                                <input class="form-control" type="text" placeholder="Enter your purchase/license code"
                                    name="license" required>
                            </div>
                        </div>
                        <div class="text-start mb-1">
                            <label class="form-control-label">{{ __('Your Envato Username') }}</label>
                            <div class="control">
                                <input class="form-control" type="text" placeholder="Enter your name/envato username"
                                    name="client" required>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-outline-success">{{ __('Activate') }}</button>
                    </div>
                </form>
            @else
                <div class="alert alert-success mb-1">
                    <div class="alert-body">
                        {{ ucfirst($msg) }}
                    </div>
                </div>
            @endif
        @else
            <form action="{{ route('admin.lic.activate') }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="text-start mb-1">
                        <label class="form-control-label">{{ __('License code') }}</label>
                        <div class="control">
                            <input class="form-control" type="text" placeholder="Enter your purchase/license code"
                                name="license" required>
                        </div>
                    </div>
                    <div class="text-start mb-1">
                        <label class="form-control-label">{{ __('Your name') }}</label>
                        <div class="control">
                            <input class="form-control" type="text" placeholder="Enter your name/envato username"
                                name="client" required>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-outline-success">{{ __('Activate') }}</button>
                </div>
            </form>
        @endif
    </div>
@endsection
