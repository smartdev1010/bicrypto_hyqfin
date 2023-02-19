@if ($this->plat['deposits'] == 1)
    <div>{{ __('Referral Deposit') }}: <span class="text-success">{{ $row->deposit_commission }}</span>
        BV</div>
@endif
@if ($this->plat['first_deposit'] == 1)
    <div>{{ __('Referral First Deposit') }}: <span class="text-success">{{ $row->ref_commission }}</span>
        BV</div>
@endif
@if ($this->plat['active_first_deposit'] == 1)
    <div>{{ __('Active Referral First Deposit') }}: <span class="text-success">{{ $row->active_ref_commission }}</span>
        BV</div>
@endif
@if ($this->plat['trades'] == 1)
    <div>{{ __('Trade') }}: <span class="text-success">{{ $row->trade_commission }}</span> BV</div>
@endif
@if ($this->ext[1] == 1 && $this->plat['bot_investment'] == 1)
    <div>{{ __('Bot Investment') }}: <span class="text-success">{{ $row->bot_commission }}</span> BV
    </div>
@endif
@if ($this->ext[2] == 1 && $this->plat['ico_purchase'] == 1)
    <div>{{ __('Token ICO Purchase') }}: <span class="text-success">{{ $row->ico_commission }}</span>
        BV</div>
@endif
@if ($this->ext[4] == 1)
    @if ($this->plat['forex_deposit'] == 1)
        <div>{{ __('Forex Deposit Commission') }}: <span class="text-success">{{ $row->forex_commission }}</span> BV
        </div>
    @endif
    @if ($this->plat['forex_investment'] == 1)
        <div>{{ __('Forex Investment Commission') }}: <span
                class="text-success">{{ $row->forex_investment_commission }}</span>
            BV
        </div>
    @endif
@endif
@if ($this->ext[6] == 1 && $this->plat['staking'] == 1)
    <div>Staking: <span class="text-success">{{ $row->staking }}</span> BV</div>
@endif
