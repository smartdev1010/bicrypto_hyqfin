<div class="fw-bold">{{ __('Minimum Withdraw') }}:
    @if ($row->withdraw_min != null)
        <span class="text-warning">{{ getAmount($row->withdraw_min) }}</span>
    @else
        <span class="text-danger">{{ __('Not Set') }}</span>
    @endif
</div>
<div class="fw-bold">{{ __('Maximum Withdraw') }}:
    @if ($row->withdraw_max != null)
        <span class="text-warning">{{ getAmount($row->withdraw_max) }}</span>
    @else
        <span class="text-danger">{{ __('Not Set') }}</span>
    @endif
</div>
<div class="fw-bold">{{ __('Withdraw Fees') }}:
    @if ($row->withdraw_fee != null)
        <span class="text-warning">{{ getAmount($row->withdraw_fee) }} %</span>
    @else
        <span class="text-danger">{{ __('Not Set') }}</span>
    @endif
</div>
