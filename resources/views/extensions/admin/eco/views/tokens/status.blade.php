<div class="fw-bold">{{ __('Deployed') }}:
    @if ($row->actions >= 1)
        <span class="badge bg-success">{{ __('Yes') }}</span>
    @else
        <span class="badge bg-danger">{{ __('No') }}</span>
    @endif
</div>
<div class="fw-bold">{{ __('Smart Contract Fetched') }}:
    @if ($row->actions >= 2)
        <span class="badge bg-success">{{ __('Yes') }}</span>
    @else
        <span class="badge bg-danger">{{ __('No') }}</span>
    @endif
</div>
<div class="fw-bold">{{ __('Registered In Ledger') }}:
    @if ($row->actions >= 3)
        <span class="badge bg-success">{{ __('Yes') }}</span>
    @else
        <span class="badge bg-danger">{{ __('No') }}</span>
    @endif
</div>
<div class="fw-bold">{{ __('Synced blockchain to ledger') }}:
    @if ($row->actions >= 4)
        <span class="badge bg-success">{{ __('Yes') }}</span>
    @else
        <span class="badge bg-danger">{{ __('No') }}</span>
    @endif
</div>
<hr>
<div class="fw-bold">{{ __('Smart Contract Hash') }}:
    @if ($row->testnet != null)
        <a target="_blank" class="underline"
            href="https://sepolia.etherscan.io/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'ETH')
        <a target="_blank" class="underline"
            href="https://etherscan.io/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'BSC')
        <a target="_blank" class="underline"
            href="https://bscscan.com/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'TRON')
        <a target="_blank" class="underline"
            href="https://tronscan.org/#/transaction/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'MATIC')
        <a target="_blank" class="underline"
            href="https://polygonscan.com/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'KLAY')
        <a target="_blank" class="underline"
            href="https://scope.klaytn.com/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'CELO')
        <a target="_blank" class="underline"
            href="https://celoscan.io/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @elseif (getNativeNetwork() == 'mainnet' && $this->chain == 'SOL')
        <a target="_blank" class="underline"
            href="https://solscan.io/tx/{{ $row->hash }}">{{ cut_char($row->hash, 15) }}</a>
    @else
        {{ cut_char($row->address, 15) }}
    @endif
</div>
<div class="fw-bold ">{{ __('Address') }}:
    @if ($row->address != null && getNativeNetwork() == 'testnet' && getenv('TESTNET_TYPE') == 'ethereum-sepolia')
        <a target="_blank" class="underline"
            href="https://sepolia.etherscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'ETH')
        <a target="_blank" class="underline"
            href="https://etherscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'BSC')
        <a target="_blank" class="underline"
            href="https://bscscan.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'TRON')
        <a target="_blank" class="underline"
            href="https://tronscan.org/#/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'MATIC')
        <a target="_blank" class="underline"
            href="https://polygonscan.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'KLAY')
        <a target="_blank" class="underline"
            href="https://scope.klaytn.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'CELO')
        <a target="_blank" class="underline"
            href="https://celoscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $this->chain == 'SOL')
        <a target="_blank" class="underline"
            href="https://solscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @else
        {{ cut_char($row->address, 15) }}
    @endif
</div>
