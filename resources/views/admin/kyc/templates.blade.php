@extends('layouts.admin')

@section('content')
    <livewire:kyc-templates-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Template Activation Confirmation') }}"
        action="{{ route('admin.kyc.activate') }}" submit="{{ __('Activate ') }}" id="activateModal">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to activate') }} <span class="fw-bold extension-name"></span>
                {{ __('template') }}?</p>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Template Disable Confirmation') }}"
        action="{{ route('admin.kyc.deactivate') }}" submit="{{ __('Disable ') }}" id="deactivateModal" btn="danger">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to disable') }} <span class="fw-bold extension-name"></span>
                {{ __('template') }}?</p>
        </div>
    </x-partials.modals.default-modal>
@endpush

@push('breadcrumb-plugins')
    <a class="btn btn-outline-primary" href="{{ route('admin.kyc.template.new') }}"><i class="bi bi-plus-lg"></i>
        {{ __('New Template') }}</a>
@endpush
