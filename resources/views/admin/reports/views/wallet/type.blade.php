<span class="fw-bold fs-5">
    @if ($row->type == 1)
        {{ __('Deposit') }}
    @elseif($row->type == 2)
        {{ __('Withdraw') }}
    @elseif($row->type == 3)
        {{ __('Transfer From Trading') }}
    @elseif($row->type == 4)
        {{ __('Transfer From Funding') }}
    @endif
</span>
