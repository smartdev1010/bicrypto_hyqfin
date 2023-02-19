@if ($row->status != 1)
    <button class="btn btn-outline-primary btn-sm" data-modal-toggle='forexinvestmentSet'
        onclick="$('#forexinvestmentSet').find('input[name=log_id]').val({{ $row->id }})">{{ __('Adjust') }}
    </button>
@endif
