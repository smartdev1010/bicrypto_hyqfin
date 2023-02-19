@if ($row->dev == 1)
    <span class="badge bg-secondary">{{ __('In Planning Stage') }}</span>
@elseif ($row->dev == 2)
    <span class="badge bg-info">{{ __('In Development Stage') }}</span>
@else
    @if ($row->installed == 1)
        @if ($row->status == 1)
            <span class="badge bg-success">{{ __('Active') }}</span>
        @else
            <span class="badge bg-warning">{{ __('Disabled') }}</span>
        @endif
    @else
        <span class="badge bg-light-success">{{ __('Not Installed') }}</span>
    @endif
@endif
