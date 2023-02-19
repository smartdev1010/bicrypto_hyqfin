@if (!isset($row->user->mlm))
    {{ (new \App\Http\Controllers\Admin\DatabaseController())->regenerate() }}
    @php
        header('Refresh:0');
    @endphp
@endif
@if ($row->status != 1)
    @if ($row->type == 1)
        <button type="button" class="btn btn-icon btn-outline-warning btn-sm" data-modal-toggle="deposit_statusUpdate"
            onclick="$('#deposit_statusUpdate').find('input[name=id]').val('{{ $row->id }}');
                                                $('#deposit_statusUpdate').find('input[name=user_id]').val('{{ $row->user_id }}');">
            <i class="bi bi-pencil-square"></i>
        @else
            <button type="button" class="btn btn-icon btn-outline-warning btn-sm"
                data-modal-toggle="withdraw_statusUpdate"
                data-amountosend="{{ $row->amount - getAmount($row->amount * ($row->user->mlm->plan->margin / 100)) }}"
                onclick="$('#withdraw_statusUpdate').find('input[name=id]').val('{{ $row->id }}');
                                                $('#withdraw_statusUpdate').find('input[name=user_id]').val('{{ $row->user_id }}');
                                                $('#withdraw_statusUpdate').find('input[name=wallet_address]').val('{{ $row->wallet_address }}');
                                                $('#withdraw_statusUpdate').find('input[name=amount]').val('{{ $row->amount }}');
                                                $('#withdraw_statusUpdate').find('input[name=amountosend]').val('{{ $row->amount - getAmount($row->amount * ($row->user->mlm->plan->margin / 100)) }}');">
                <i class="bi bi-pencil-square"></i></button>
    @endif
@endif
