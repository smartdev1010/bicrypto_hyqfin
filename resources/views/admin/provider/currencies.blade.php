@extends('layouts.admin')

@section('content')
    <livewire:provider-currencies-table :idx="$id" />
@endsection

@push('breadcrumb-plugins')
    <a class="btn btn-primary" href="{{ route('admin.provider.index') }}"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
