@extends('layouts.admin')
@php
    $page_title = '';
@endphp

@section('content')
    <livewire:kyc-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('KYC Delete Confirmation') }}" action="{{ route('admin.kyc.delete') }}"
        submit="{{ __('Delete') }}" id="deleteModal" btn="danger">
        <div>
            <input type="hidden" id="idd" name="id">
            <p>{{ __('Are you sure want to Reject This KYC Application') }}</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('KYC Update Confirmation') }}" action="{{ route('admin.kyc.update') }}"
        submit="{{ __('Submit') }}" id="kyc_action">
        <div id="kyc_status_form" class="space-y-3">
            <div id="missingnotediv" class="input-item input-with-label hide">
                <input type="hidden" name="req_type" value="update_kyc_status">
                <input type="hidden" name="kyc_id" id="kyc_id" required="required">
                <label class="input-item-label">{{ __('Admin Note') }}</label>
                <textarea name="notes" class="form-control" rows="5"></textarea>
            </div>
            <div>
                <label for="inputGroupSelect01">{{ __('Status') }}</label>
                <select class="form-select" id="status" name="status">
                    <option selected>{{ __('Choose') }}...</option>
                    <option value="approved">{{ __('Approve') }}</option>
                    <option value="missing">{{ __('Missing') }}</option>
                    <option value="rejected">{{ __('Reject') }}</option>
                </select>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@section('page-scripts')
    <script>
        $(document).on('click', '.delete', function() {
            $('#idd').val($(this).attr('data-id'));
        });
        $(document).on('click', '.kyc_action', function() {
            $('#kyc_id').val($(this).attr('data-id'));
        });
        $(function() {
            $("#status").change(function() {
                var val = $(this).val();
                if (val === "missing") {
                    $("#missingnotediv").removeClass('hide');
                } else {
                    $("#missingnotediv").addClass('hide');
                }
            });
        });
    </script>
@endsection
