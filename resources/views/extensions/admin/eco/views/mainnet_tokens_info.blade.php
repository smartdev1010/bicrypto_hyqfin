<div class="fw-bolder">{{ __('Fees Account') }}:
</div>
@if (isset($row->fees_account_main['account_id']))
    <span class="text-success">{{ $row->fees_account_main['account_id'] }}</span>
@else
    <span class="text-danger">{{ __('Not Found') }}</span>
@endif
<div class="fw-bolder">{{ __('Token Address') }}:
</div>
@if ($row->address != null && getNativeNetwork() == 'testnet' && getenv('TESTNET_TYPE') == 'ethereum-sepolia')
    <a target="_blank" class="underline"
        href="https://sepolia.etherscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'ETH')
    <a target="_blank" class="underline"
        href="https://etherscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'BSC')
    <a target="_blank" class="underline"
        href="https://bscscan.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'TRON')
    @if ($row->symbol == 'TRON')
        <a target="_blank" class="underline"
            href="https://tronscan.org/#/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @else
        <a target="_blank" class="underline"
            href="https://tronscan.org/#/token20/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
    @endif
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'MATIC')
    <a target="_blank" class="underline"
        href="https://polygonscan.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'KLAY')
    <a target="_blank" class="underline"
        href="https://scope.klaytn.com/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'CELO')
    <a target="_blank" class="underline"
        href="https://celoscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'SOL')
    <a target="_blank" class="underline"
        href="https://solscan.io/token/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@else
    {{ cut_char($row->address, 15) }}
@endif

{{-- <div class="fw-bold">{{ __('Balance') }}:
    @if ($fees_accounts->where('symbol', $row->symbol)->first() != null)
        <span
            class="text-success">{{ getAmount(getFeesWallet($fees_accounts->where('symbol', $row->symbol)->first()->wallet_id)->balance) ?? 'Wallet Removed' }}</span>
    @else
        <span class="text-danger">{{ __('Not Found') }}</span>
    @endif
</div> --}}
