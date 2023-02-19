@if ($row->dev == 0)
    <a href="{{ route('admin.eco.blockchain.wallet.index', $row->chain) }}" class="btn btn-outline-primary btn-sm">
        <i class="bi bi-wallet2"></i>{{ __('Wallets') }}
    </a>
    @if (!in_array($row->chain, ['BTC', 'BCH', 'LTC', 'DOGE', 'BNB']))
        <a href="{{ route('admin.eco.blockchain.tokens.index', $row->chain) }}" class="btn btn-outline-info btn-sm">
            <i class="bi bi-coin"></i>{{ __('Tokens') }}
        </a>
    @endif
    <a href="{{ route('admin.eco.blockchain.mainnet.tokens.index', $row->chain) }}"
        class="btn btn-outline-warning btn-sm">
        <i class="bi bi-currency-bitcoin"></i>{{ __('Mainnet Tokens') }}
    </a>
@elseif ($row->dev == 2)
    <a href="{{ route('admin.eco.blockchain.wallet.index', $row->chain) }}" class="btn btn-outline-primary btn-sm">
        <i class="bi bi-wallet2"></i>{{ __('Wallets') }}
    </a>
@endif
