<button type="button" class="btn btn-icon btn-sm btn-outline-warning" data-modal-toggle="updateModal"
    title="{{ __('Edit') }}"
    onclick="$('#updateModal').find('.currency-name').text('{{ __($row->name) }}');$('#updateModal').find('input[name=rate]').val('{{ $row->rate }}');
    $('#updateModal').find('input[name=id]').val('{{ $row->id }}');">
    <i class="bi bi-pencil-square"></i>
</button>
@if ($row->status == 0)
    <button type="button" class="btn btn-icon btn-sm btn-outline-success" data-modal-toggle="activateModal"
        title="{{ __('Enable') }}"
        onclick="$('#activateModal').find('.currency-name').val('{{ __($row->name) }}');
        $('#activateModal').find('input[name=id]').val('{{ $row->id }}');">
        <i class="bi bi-eye"></i>
    </button>
@else
@endif
