@if ($row->status == 0)
    <span class="badge bg-danger">{{ __('Canceled') }}</span>
@elseif($row->status == 1)
    <span class="badge bg-primary">{{ __('Staking') }}</span>
@elseif($row->status == 2)
    <span class="badge bg-warning">{{ __('Completed') }}</span>
@elseif($row->status == 3)
    <span class="badge bg-success">{{ __('Claimed') }}</span>
@endif
