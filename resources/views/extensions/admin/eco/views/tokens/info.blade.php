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
<div class="fw-bold">{{ __('Has Memo') }}:
    @if ($row->has_memo != null && $row->has_memo == 1)
        <span class="badge bg-success">{{ __('Yes') }}</span>
    @else
        <span class="badge bg-danger">{{ __('No') }}</span>
    @endif
</div>
<hr>
<div class="fw-bold">{{ __('Fees Account') }}:
    @if (isset($row->fees_account['account_id']))
        <span class="text-success">{{ $row->fees_account['account_id'] }}</span>
    @else
        <span class="text-danger">{{ __('Not Found') }}</span>
    @endif
</div>
{{-- <div class="fw-bold">{{ __('Balance') }}:
                                            @if ($fees_accounts->where('symbol', $row->symbol)->first() != null)
                                                <span
                                                    class="text-success">{{ getAmount(getFeesWallet($fees_accounts->where('symbol', $row->symbol)->first()->wallet_id)->balance) ?? 'Wallet Removed' }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Found') }}</span>
                                            @endif
                                        </div> --}}
