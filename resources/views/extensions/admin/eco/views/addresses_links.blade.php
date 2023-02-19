@if ($row->address != null && getNativeNetwork() == 'testnet' && getenv('TESTNET_TYPE') == 'ethereum-sepolia')
    <a target="_blank"
        href="https://sepolia.etherscan.io/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'ETH')
    <a target="_blank" href="https://etherscan.io/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'BSC')
    <a target="_blank" href="https://bscscan.com/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'TRON')
    <a target="_blank" href="https://tronscan.org/#/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'MATIC')
    <a target="_blank" href="https://polygonscan.com/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'KLAY')
    <a target="_blank"
        href="https://scope.klaytn.com/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'CELO')
    <a target="_blank" href="https://celoscan.io/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@elseif ($row->address != null && getNativeNetwork() == 'mainnet' && $row->chain == 'SOL')
    <a target="_blank" href="https://solscan.io/address/{{ $row->address }}">{{ cut_char($row->address, 15) }}</a>
@else
    {{ cut_char($row->address, 15) }}
@endif
