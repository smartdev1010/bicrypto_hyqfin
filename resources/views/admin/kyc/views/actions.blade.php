<a class="btn btn-sm btn-outline-warning" href="{{ route('admin.kyc.view', [$row->id, 'kyc_details']) }}"><i
        class="bi bi-eye"></i>
    {{ __('View Details') }}</a></a>
@if ($row->status != 'approved')
    <a class="btn btn-sm btn-outline-primary kyc_action kyc_approve" data-modal-toggle="kyc_action"
        data-id="{{ $row->id }}" data-toggle="modal" data-target="#actionkyc"><i class="bi bi-check-square"></i>
        {{ __('Update Status') }}</a>
    </li>
@endif
@if ($row->status == 'missing' || $row->status == 'rejected')
    <a class="btn btn-sm btn-outline-danger delete" data-modal-toggle="deleteModal" data-id="{{ $row->id }}"
        data-name="{{ $row->id }}"><i class="bi bi-trash"></i>
        {{ __('Delete') }}</a></li>
@endif
