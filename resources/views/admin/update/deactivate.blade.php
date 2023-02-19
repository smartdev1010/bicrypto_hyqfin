@extends('layouts.admin')
@section('page-style')
@endsection
@section('content')
    <div class="card text-center mx-auto w-1/3">
        <div class="card-body">
            <h1 class="mt-5 card-title">{{ __('License Deactivator') }}</h1>
            <div class="alert alert-success mb-1 px-5">
                <div class="alert-body">
                    {{ __('Click on deactivate license to deactivate and remove the currently installed license from this installation, So that you can activate the same license on some other domain.') }}
                </div>
            </div>
        </div>
        @if (!empty($_POST))
            @php
                $deactivate_response = $api->deactivate_license();
            @endphp
            @if (empty($deactivate_response))
                @php
                    $msg = 'Server is unavailable.';
                @endphp
            @else
                @php
                    $msg = $deactivate_response['message'];
                @endphp
            @endif
            @if ($deactivate_response['status'] != true)
                <form action="{{ route('admin.lic.deactivate') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <div class="alert alert-danger mb-1">
                            <div class="alert-body">
                                {{ ucfirst($msg) }}
                            </div>
                        </div>
                        <input type="hidden" name="something">
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-outline-danger">{{ __('Deactivate License') }}</button>
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
            <form action="{{ route('admin.lic.deactivate') }}" method="POST">
                @csrf
                <div class="card-body">
                    <input type="hidden" name="something">
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-outline-danger">{{ __('Deactivate License') }}</button>
                </div>
            </form>
        @endif
    </div>
@endsection
