@if ($row->status == 'open')
    <span class="badge bg-primary">{{ __('Live') }}</span>
@elseif($row->status == 'closed')
    <span class="badge bg-success">{{ __('Filled') }}</span>
@elseif($row->status == 'filling')
    <span class="badge bg-warning">{{ __('Filling') }}</span>
@elseif($row->status == 'canceled')
    <span class="badge bg-danger">{{ __('Canceled') }}</span>
@endif </span>
