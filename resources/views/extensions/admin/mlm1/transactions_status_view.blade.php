@if ($row->status == 0)
    <span class="badge bg-primary">{{ __('Pending') }}</span>
@elseif($row->status == 1)
    <span class="badge bg-success">{{ __('Approved') }}</span>
@elseif($row->status == 2)
    <span class="badge bg-warning">{{ __('Cancelled') }}</span>
@endif
