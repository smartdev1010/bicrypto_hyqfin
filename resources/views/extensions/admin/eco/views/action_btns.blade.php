@if ($row->activation_trx == null)
    <a href="{{ route('admin.eco.blockchain.addresses.activate', [$this->chain, $this->symbol, $row->id]) }}"
        class='btn btn-outline-primary btn-sm'>
        Activate
    </a>
@else
    <a href="{{ route('admin.eco.blockchain.addresses.activate.check', [$this->chain, $this->symbol, $row->id]) }}"
        class='btn btn-outline-success btn-sm'>
        Check
    </a>
@endif
