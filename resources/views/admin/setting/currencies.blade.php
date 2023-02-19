@extends('layouts.admin')

@section('content')
    <livewire:currencies-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Currency Activation Confirmation') }}"
        action="{{ route('admin.currency.activate') }}" submit="{{ __('Activate') }}" id="activateModal">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to activate') }} <span class="fw-bold currency-name"></span>
                {{ __('currency') }}?</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Currency Rate Update') }}" action="{{ route('admin.currency.update') }}"
        submit="{{ __('Update') }}" id="updateModal">
        <div>
            <input type="hidden" name="id">
            <label for="cur">Rate in USD</label>
            <input type="number" class="form-control" name="rate">
        </div>
    </x-partials.modals.default-modal>
@endpush
