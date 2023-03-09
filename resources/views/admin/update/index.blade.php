@extends('layouts.admin')
@section('page-style')
@endsection
@section('content')
    <div class="card text-center mx-auto w-100">
        <h1 class="card-title py-5">{{ __('System Updator') }}</h1>
        @if ($update_data['status'])
            <div class="card-body">
                <div class="alert alert-warning m-5">
                    <div class="alert-body">
                        {{ __('Please backup your database and script files before upgrading.') }}
                    </div>
                </div>
            </div>
        @endif
        <div class="card-body">
            <div class="alert alert-success m-5">
                <div class="alert-body">
                    {!! $update_data['message'] !!}
                </div>
            </div>
        </div>
        @if ($update_data['status'])
            <div class="card-body">
                <div class='alert alert-dark p-1'>
                    <div class="alert-body">
                        <div class="text-start">
                            {!! $update_data['changelog'] !!}
                        </div>
                    </div>
                </div>
            </div>
            @php
                $update_id = null;
                $has_sql = null;
                $version = null;
            @endphp
            @if (!empty($_POST['update_id']))
                @php
                    $update_id = strip_tags(trim($_POST['update_id']));
                    $has_sql = strip_tags(trim($_POST['has_sql']));
                    $version = strip_tags(trim($_POST['version']));
                @endphp
                <progress id="prog" value="0" max="100.0" class="progress mb-1 mx-auto w-75"></progress>
                @php
                    $api->download_update($_POST['update_id'], $_POST['has_sql'], $_POST['version'], null, null, ['db_host' => getenv('DB_HOST'), 'db_user' => getenv('DB_USERNAME'), 'db_pass' => getenv('DB_PASSWORD'), 'db_name' => getenv('DB_DATABASE')]);
                @endphp
            @else
                <form id="updater" action="{{ route('admin.update') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <input type="hidden" class="form-control" value="{{ $update_data['update_id'] }}" name="update_id">
                        <input type="hidden" class="form-control" value="{{ $update_data['has_sql'] }}" name="has_sql">
                        <input type="hidden" class="form-control" value="{{ $update_data['version'] }}" name="version">
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-success">{{ __('Update') }}</button>
                    </div>
                </form>
            @endif
    </div>
    @endif
    </div>
@endsection

@push('breadcrumb-plugins')
    <a class="btn btn-success" href="{{ route('admin.clean') }}"><i class="bi bi-speedometer2 mr-1"></i>
        {{ __('Optimize') }}</a>
@endpush
