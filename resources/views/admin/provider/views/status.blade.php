@if ($row->development != 1)
    @if ($row->status == 1)
        <span class="badge bg-success">{{ __('Active') }}</span>
    @else
        <span class="badge bg-warning">{{ __('Disabled') }}</span>
    @endif
@else
    <span class="badge bg-secondary">{{ __('In Development') }}</span>
@endif
