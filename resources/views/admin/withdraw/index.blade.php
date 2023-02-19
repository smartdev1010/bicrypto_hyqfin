@extends('layouts.admin')

@section('content')
    <livewire:withdrawal.gateways />
@endsection



@push('breadcrumb-plugins')
    <a class="btn btn-primary" href="{{ route('admin.withdraw.method.create') }}"><i
            class="bi bi-plus"></i>{{ __('Add new') }}</a>
@endpush
