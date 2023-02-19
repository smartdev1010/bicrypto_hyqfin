@if ($row->status == 2)
    <span class="badge bg-warning">{{ __('Pending') }}</span>
@elseif($row->status == 1)
    <span class="badge bg-success">{{ __('Approved') }}</span>
@elseif($row->status == 3)
    <span class="badge bg-danger">{{ __('Rejected') }}</span>
@endif
