@extends('layouts.admin')
@section('content')
    <livewire:extensions-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Extension Activation Confirmation') }}"
        action="{{ route('admin.extensions.activate') }}" submit="{{ __('Activate ') }}" id="activateModal">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to activate') }} <span class="fw-bold extension-name"></span>
                {{ __('extension') }}?</p>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Extension Disable Confirmation') }}"
        action="{{ route('admin.extensions.deactivate') }}" submit="{{ __('Disable ') }}" id="deactivateModal" btn="danger">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to disable') }} <span class="fw-bold extension-name"></span>
                {{ __('extension') }}?</p>
        </div>
    </x-partials.modals.default-modal>
@endpush
