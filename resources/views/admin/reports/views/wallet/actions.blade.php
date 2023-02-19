@if ($row->type == 1 && $row->status == 2)
    <span data-tooltip-target="cancelTransfer-tooltip">
        <button class="btn btn-icon btn-outline-danger btn-sm" data-modal-toggle="cancelTransfer"
            onclick="$('#cancelTransfer').find('input[name=trx]').val('{{ $row->trx }}');">
            <i class="bi bi-x-lg"></i>
        </button>
    </span>
@endif
@if ($row->type == 4 && $row->status == 2)
    <span data-tooltip-target="rejectTransfer-tooltip">
        <button class="btn btn-icon btn-outline-danger btn-sm" data-modal-toggle="rejectTransfer"
            onclick="
        $('#rejectTransfer').find('input[name=trx]').val('{{ $row->trx }}');">
            <i class="bi bi-x-lg"></i>
        </button>
    </span>
    <span data-tooltip-target="approveTransfer-tooltip">
        <button class="btn btn-icon btn-outline-success btn-sm" data-modal-toggle="approveTransfer"
            onclick="$('#approveTransfer').find('input[name=trx]').val('{{ $row->trx }}');">
            <i class="bi bi-check-lg"></i>
        </button>
    </span>
@endif

@push(' tooltips')
    <div id="cancelTransfer-tooltip" role="tooltip"
        class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Cancel Transfer
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="rejectTransfer-tooltip" role="tooltip"
        class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        RejectTransfer
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <div id="approveTransfer-tooltip" role="tooltip"
        class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Approve Transfer
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
@endpush
