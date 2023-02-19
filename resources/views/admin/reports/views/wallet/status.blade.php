@if ($row->status == 1)
    <span class="badge bg-success mr-1">{{ __('Completed') }}</span>
@elseif($row->status == 2)
    <span class="badge bg-warning mr-1">{{ __('Pending') }}</span>
@elseif($row->status == 3)
    <span class="badge bg-danger mr-1">{{ __('Rejected') }}</span>
@endif
