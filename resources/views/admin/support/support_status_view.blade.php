@if ($row->status == 0)
    <span class="badge bg-success">{{ __('Open') }}</span>
@elseif($row->status == 1)
    <span class="badge bg-primary">{{ __('Answered') }}</span>
@elseif($row->status == 2)
    <span class="badge bg-warning">{{ __('Customer Reply') }}</span>
@elseif($row->status == 3)
    <span class="badge bg-dark">{{ __('Closed') }}</span>
@endif
