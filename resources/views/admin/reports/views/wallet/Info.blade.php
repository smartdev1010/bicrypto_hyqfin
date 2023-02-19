<div><span class="text-warning">{{ __('TRX') }}:</span>
    {{ $row->trx }}</div>
<div><span class="text-warning">{{ __('Amount') }}:</span>
    @if ($row->amount != 0)
        {{ ttz($row->amount) }} {{ $row->symbol }}
    @else
        <span class="badge rounded-pill bg-warning mr-1">{{ __('Pending') }}</span>
    @endif
</div>
<div><span class="text-warning">{{ __('Charge') }}:</span>
    @if ($row->charge != 0)
        {{ ttz($row->charge) }} {{ $row->symbol }}
    @else
        <span class="badge rounded-pill bg-warning mr-1">{{ __('Pending') }}</span>
    @endif
</div>
<div><span class="text-warning">{{ __('Recieved') }}:</span>
    @if ($row->amount_recieved != 0)
        {{ ttz($row->amount_recieved) }} {{ $row->symbol }}
    @else
        <span class="badge rounded-pill bg-warning mr-1">{{ __('Pending') }}</span>
    @endif
</div>
@if ($row->type == 2)
    <div><span class="text-warning">{{ __('Processing Fees') }}:</span>
        {{ ttz($row->fees) }} {{ $row->symbol }}</div>
@endif
<div><span class="text-warning">Date:</span>
    {{ showDateTime($row->created_at, 'd M, Y h:i:s') }}</div>
