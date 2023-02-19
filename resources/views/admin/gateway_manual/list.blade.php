@extends('layouts.admin')
@section('content')
    <livewire:deposit.gateways type="manual" />
@endsection


@push('breadcrumb-plugins')
    <a class="btn btn-outline-primary" href="{{ route('admin.payment.manual.create') }}"><i
            class="bi bi-plus-lg"></i>{{ __('Add new') }}</a>
@endpush
