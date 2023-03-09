@if ($row->status == 1)
    <span class="badge bg-primary">{{ __('Active') }}</span>
@elseif($row->status == 2)
    <span class="badge bg-success">{{ __('Completed') }}</span>
@elseif($row->status == 3)
    <span class="badge bg-warning">{{ __('Cancelled') }}</span>
@endif </span>
