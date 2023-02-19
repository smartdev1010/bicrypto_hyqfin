@extends('layouts.admin')

@section('content')
    <livewire:ext.eco.eco-blockchains-table />
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.eco.markets.index') }}" class="btn btn-outline-primary"><i class="bi bi-chevron-right"></i>
        {{ __('Markets') }}</a>
@endpush
