<div> {{ __('Symbol') }}: <span class="fw-bold">{{ $row->symbol }}</span></div>
<div> {{ __('Type') }}: <span class="fw-bold">{{ strtoUpper($row->type) }}</span></div>
<div> {{ __('Side') }}: <span class="fw-bold">
        @if ($row->side == 'buy')
            <span class="badge bg-success">{{ __('Buy') }}</span>
        @else
            <span class="badge bg-danger">{{ __('Sell') }}</span>
        @endif
    </span>
</div>
<div> {{ __('Provider') }}: <span class="fw-bold">{{ strtoUpper($row->provider) }}</span></div>
