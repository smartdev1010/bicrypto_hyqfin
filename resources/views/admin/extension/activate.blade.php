@extends('layouts.admin')
@php
    $api = new \App\Http\Controllers\Admin\Ext\InstallController();
@endphp
@section('content')
    <div class="col-4 w-1/3 card text-center mx-auto">
        <div class="pt-5">
            <h1 class="card-title">{{ __('Extension Activator') }}</h1>
        </div>
        <div class="box">
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
                    <div class="alert alert-danger px-5">
                        <div class="alert-body">
                            {{ __('Server is unavailable.') }}
                        </div>
                    </div>
                @else
                    <div class="alert alert-success px-5">
                        <div class="alert-body">
                            {{ $activate_response['message'] }}
                        </div>
                    </div>
                @endif
                @if ($activate_response['status'] != true)
                    <form action="{{ route('admin.extensions.verify') }}" method="POST" class="space-y-5">
                        @csrf
                        <div class="px-5">
                            <input type="hidden" id="product_id" name="product_id" value="{{ $product->product_id }}">
                            <div class="text-start mb-1">
                                <label class="form-control-label">{{ __('License code') }}</label>
                                <div class="control">
                                    <input class="form-control" type="text"
                                        placeholder="Enter your purchase/license code" name="license" required>
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
                            <button type="submit" class="btn btn-success w-full">{{ __('Activate') }}</button>
                        </div>
                    </form>
                @else
                    <div class="alert alert-success px-5">
                        <div class="alert-body">
                            {{ $activate_response['message'] }}
                        </div>
                    </div>
                @endif
            @else
                <form action="{{ route('admin.extensions.verify') }}" method="POST" class="space-y-5">
                    @csrf
                    <div class="px-5">
                        <input type="hidden" id="product_id" name="product_id" value="{{ $product->product_id }}">
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
                        <button type="submit" class="btn btn-success w-full">{{ __('Activate') }}</button>
                    </div>
                </form>
            @endif
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a class="btn btn-outline-success" href="{{ route('admin.clean') }}"><i class="bi bi-speedometer2"></i>
        {{ __('Optimize') }}</a>
    <a class="btn btn-outline-secondary" href="{{ route('admin.extensions.index') }}"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
