@if ($row->activation_trx != null &&
    getNativeNetwork() == 'testnet' &&
    getenv('TESTNET_TYPE') == 'ethereum-sepolia')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://sepolia.etherscan.io/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'ETH')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://etherscan.io/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'BSC')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://bscscan.com/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'TRON')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://tronscan.org/#/transaction/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'MATIC')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://polygonscan.com/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'KLAY')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://scope.klaytn.com/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'CELO')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://celoscan.io/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@elseif ($row->activation_trx != null && getNativeNetwork() == 'mainnet' && $row->chain == 'SOL')
    <a target="_blank" class="badge bg-light-{{ $row->status == 1 ? 'success' : 'secondary' }}"
        href="https://solscan.io/tx/{{ $row->activation_trx }}">{{ cut_char($row->activation_trx, 15) }}</a>
@else
    {{ cut_char($row->activation_trx, 15) }}
@endif
