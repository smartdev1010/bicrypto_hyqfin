<a data-bs-toggle="tooltip" data-bs-placement="top" title="{{ __('Add/Subtract Balance') }}"
    data-address="{{ $row->address }}" data-symbol="{{ $row->symbol }}" class="btn btn-icon btn-success btn-sm"
    data-modal-toggle="addSubModal"
    onclick="$('#addSubModal').find('input[name=address]').val($(this).data('address'));
                                                $('#addSubModal').find('input[name=symbol]').val($(this).data('symbol'));">
    <i class="bi bi-cash"></i>
</a>
@if ($row->provider != 'funding' && $row->provider != 'mainnet' && $row->provider != 'testnet')
    <form class="ml-1" method="POST" action="{{ route('admin.wallet.regenerate') }}">
        @csrf
        <input type="hidden" id="user_id" name="user_id" value="{{ $this->user }}">
        <input type="hidden" id="symbol" name="symbol" value="{{ $row->symbol }}">
        <input type="hidden" id="address" name="address" value="{{ $row->address }}">
        <input type="hidden" id="type" name="type" value="{{ $row->type }}">
        <button type="submit" class="btn btn-icon btn-warning btn-sm" data-bs-toggle="tooltip" data-bs-placement="top"
            title="{{ __('Regenerate row') }}"><i class="bi bi-arrow-repeat"></i></button>
    </form>
@endif
