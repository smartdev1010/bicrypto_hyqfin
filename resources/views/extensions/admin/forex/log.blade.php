@extends('layouts.admin')
@section('content')
    <livewire:ext.forex.forex-log-table />
@endsection
@push('modals')
    <x-partials.modals.default-modal title="Forex Transaction Confirmation" action="{{ route('admin.forex.verify') }}"
        submit="Verify" id="forexVerify">
        <input type="hidden" name="id" id="id">
        <span class="font-medium"></span>{{ __('Are you sure want to verify it?') }}
    </x-partials.modals.default-modal>
@endpush
