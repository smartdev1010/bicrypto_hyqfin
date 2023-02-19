@extends('layouts.admin')

@section('content')
    <livewire:report.wallet-transactions />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Approve Transfer Confirmation') }}"
        action="{{ route('admin.report.wallet.transfer.funding.approve') }}" submit="{{ __('Confirm') }}"
        id="approveTransfer">
        <div>
            <input type="hidden" name="trx">
            <p>{{ __('Are you sure you want to approve transfer') }}?</p>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Reject Transfer Confirmation') }}"
        action="{{ route('admin.report.wallet.transfer.funding.reject') }}" submit="{{ __('Reject') }}" id="rejectTransfer">
        <div>
            <input type="hidden" name="trx">
            <p>{{ __('Are you sure you want to reject transfer') }}?</p>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Cancel Transfer Confirmation') }}"
        action="{{ route('admin.report.wallet.cancel') }}" submit="{{ __('Cancel') }}" id="cancelTransfer">
        <div>
            <input type="hidden" name="trx">
            <p>{{ __('Are you sure you want to cancel transfer?') }}</p>
        </div>
    </x-partials.modals.default-modal>
@endpush
