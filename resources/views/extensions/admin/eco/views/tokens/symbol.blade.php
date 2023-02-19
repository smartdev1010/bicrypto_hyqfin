<div class="flex justify-start items-center">
    <img class="avatar-content mr-2 h-12"
        src="{{ getImage('assets/images/cryptoCurrency/' . strtolower($row->symbol) . '.png') }}" />
    <div>
        <div class="fw-bold">{{ $row->name }} ({{ $row->symbol }})</div>
        @if ($row->testnet != null)
            <div><span class="text-danger"> Testnet: </span>{{ $row->testnet }}
            </div>
        @else
            <div><span class="text-success"> Mainnet: </span>{{ $row->chain }}
            </div>
        @endif
    </div>
</div>
