@extends('layouts.admin')

@section('content')
    <livewire:popups-table />
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.popups.create') }}" class="btn btn-outline-primary"><i class="bi bi-plus-lg mr-1"></i>
        {{ __('New Popup') }}</a>
@endpush
