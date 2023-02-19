<a class="btn  btn-sm btn-outline-warning" href="{{ route('admin.kyc.template.edit', $row->id) }}"><i
        class="bi bi-pen"></i>
    {{ __('Edit') }}</a></a>

@if ($row->status == 0)
    <button type="button" class="btn  btn-sm btn-outline-success rounded ml-1"
        onclick="$('#activateModal').find('.extension-name').text('{{ __($row->name) }}');
    $('#activateModal').find('input[name=id]').val('{{ $row->id }}');"
        data-modal-toggle="activateModal" title="{{ __('Enable') }}">
        <i class="bi bi-eye" style="margin-right: 0!important"></i>
    </button>
@else
    <button type="button" class="btn  btn-sm btn-outline-danger ml-1 deactivateBtn" data-modal-toggle="deactivateModal"
        onclick="$('#deactivateModal').find('.extension-name').text('{{ __($row->name) }}');
        $('#deactivateModal').find('input[name=id]').val('{{ $row->id }}');"
        title="{{ __('Disable') }}">
        <i class="bi bi-eye-slash" style="margin-right: 0!important"></i>
    </button>
@endif
