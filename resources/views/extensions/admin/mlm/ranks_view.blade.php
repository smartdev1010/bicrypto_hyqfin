<div>
  Directs Required:
  <span class="text-success">{{ $row->direct_required }}</span> Referral
</div>
<div>
  Deposits Required:
  <span class="text-success">{{ $row->deposits_required }}</span>
  {{ $this->plat['membership_deposit_currency'] ?? 'USDT' }}
</div>
<div>
  BV Required:
  <span class="text-success">{{ $row->bv_required }}</span> BV
</div>
<div>
  Withdraw Percentage:
  <span class="text-success">{{ $row->margin }}</span> %
</div>