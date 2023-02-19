@extends('layouts.admin')

@section('content')
    <livewire:user-permissions-table />
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.roles.index') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush
