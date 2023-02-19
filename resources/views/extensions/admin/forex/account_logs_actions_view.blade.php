@if ($row->status != 1)
    <button class="btn btn-outline-success btn-sm" data-modal-toggle='forexVerify'
        onclick="$('#forexVerify').find('input[name=id]').val({{ $row->id }})">{{ __('Verify Transaction') }}
    </button>
@endif
