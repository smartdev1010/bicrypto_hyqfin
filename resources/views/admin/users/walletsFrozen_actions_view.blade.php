<a data-bs-toggle="tooltip" data-bs-placement="top" title="{{ __('Add/Subtract Balance') }}"
    class="btn btn-icon btn-sm btn-success" data-modal-toggle="addSubModalFrozen"
    onclick="$('#addSubModalFrozen').find('input[name=symbol]').val('{{ $row->symbol }}');">
    <i class="bi bi-cash"></i>
</a>
