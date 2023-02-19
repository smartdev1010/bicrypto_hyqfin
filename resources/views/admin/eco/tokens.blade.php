@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Tokens') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Token') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Info') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($tokens as $token)
                                <tr>
                                    <td data-label="{{ __('Token') }}">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img class="avatar-content me-1"
                                                src="{{ getImage('assets/images/cryptoCurrency/' . strtolower($token->symbol) . '.png') }}" />
                                            <div>
                                                <div class="fw-bold">{{ $token->name }} ({{ $token->symbol }})</div>
                                                @if ($token->testnet != null)
                                                    <div><span class="text-danger"> Testnet: </span>{{ $token->testnet }}
                                                    </div>
                                                @else
                                                    <div><span class="text-success"> Mainnet: </span>{{ $token->chain }}
                                                    </div>
                                                @endif
                                                <input type="checkbox" data-onstyle="success" data-offstyle="danger"
                                                    data-toggle="toggle" data-on="Active" data-off="Disabled"
                                                    data-width="100%" data-size="mini" name="status" id="status"
                                                    @if ($token->status == 1) checked @endif
                                                    onchange="ChangeStatus({{ $token->id }}, {{ $token->status === 1 ? 0 : 1 }})">
                                            </div>
                                        </div>
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        <div class="fw-bold">{{ __('Deployed') }}:
                                            @if ($token->actions >= 1)
                                                <span class="badge bg-success">{{ __('Yes') }}</span>
                                            @else
                                                <span class="badge bg-danger">{{ __('No') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Smart Contract Fetched') }}:
                                            @if ($token->actions >= 2)
                                                <span class="badge bg-success">{{ __('Yes') }}</span>
                                            @else
                                                <span class="badge bg-danger">{{ __('No') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Registered In Ledger') }}:
                                            @if ($token->actions >= 3)
                                                <span class="badge bg-success">{{ __('Yes') }}</span>
                                            @else
                                                <span class="badge bg-danger">{{ __('No') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Synced blockchain to ledger') }}:
                                            @if ($token->actions >= 4)
                                                <span class="badge bg-success">{{ __('Yes') }}</span>
                                            @else
                                                <span class="badge bg-danger">{{ __('No') }}</span>
                                            @endif
                                        </div>
                                        <hr>
                                        <div class="fw-bold">{{ __('Smart Contract Hash') }}:
                                            @if ($token->testnet != null)
                                                <a target="_blank"
                                                    href="https://sepolia.etherscan.io/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'ETH')
                                                <a target="_blank"
                                                    href="https://etherscan.io/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'BSC')
                                                <a target="_blank"
                                                    href="https://bscscan.com/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'TRON')
                                                <a target="_blank"
                                                    href="https://tronscan.org/#/transaction/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'MATIC')
                                                <a target="_blank"
                                                    href="https://polygonscan.com/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'KLAY')
                                                <a target="_blank"
                                                    href="https://scope.klaytn.com/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'CELO')
                                                <a target="_blank"
                                                    href="https://celoscan.io/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @elseif (getNativeNetwork() == 'mainnet' && $network->chain == 'SOL')
                                                <a target="_blank"
                                                    href="https://solscan.io/tx/{{ $token->hash }}">{{ cut_char($token->hash, 15) }}</a>
                                            @else
                                                {{ cut_char($token->address, 15) }}
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Address') }}:
                                            @if ($token->address != null && getNativeNetwork() == 'testnet' && getenv('TESTNET_TYPE') == 'ethereum-sepolia')
                                                <a target="_blank"
                                                    href="https://sepolia.etherscan.io/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'ETH')
                                                <a target="_blank"
                                                    href="https://etherscan.io/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'BSC')
                                                <a target="_blank"
                                                    href="https://bscscan.com/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'TRON')
                                                <a target="_blank"
                                                    href="https://tronscan.org/#/address/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'MATIC')
                                                <a target="_blank"
                                                    href="https://polygonscan.com/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'KLAY')
                                                <a target="_blank"
                                                    href="https://scope.klaytn.com/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'CELO')
                                                <a target="_blank"
                                                    href="https://celoscan.io/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @elseif ($token->address != null && getNativeNetwork() == 'mainnet' && $network->chain == 'SOL')
                                                <a target="_blank"
                                                    href="https://solscan.io/token/{{ $token->address }}">{{ cut_char($token->address, 15) }}</a>
                                            @else
                                                {{ cut_char($token->address, 15) }}
                                            @endif
                                        </div>
                                    </td>
                                    <td data-label="Info">
                                        <div class="fw-bold">{{ __('Minimum Withdraw') }}:
                                            @if ($token->withdraw_min != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_min) }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Maximum Withdraw') }}:
                                            @if ($token->withdraw_max != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_max) }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Withdraw Fees') }}:
                                            @if ($token->withdraw_fee != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_fee) }} %</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Has Memo') }}:
                                            @if ($token->has_memo != null && $token->has_memo == 1)
                                                <span class="badge badge-success">{{ __('Yes') }}</span>
                                            @else
                                                <span class="badge badge-danger">{{ __('No') }}</span>
                                            @endif
                                        </div>
                                        <hr>
                                        <div class="fw-bold">{{ __('Fees Account') }}:
                                            @if ($fees_accounts->where('symbol', $token->symbol)->first() != null)
                                                <span
                                                    class="text-success">{{ $fees_accounts->where('symbol', $token->symbol)->first()->account_id }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Found') }}</span>
                                            @endif
                                        </div>
                                        {{-- <div class="fw-bold">{{ __('Balance') }}:
                                            @if ($fees_accounts->where('symbol', $token->symbol)->first() != null)
                                                <span
                                                    class="text-success">{{ getAmount(getFeesWallet($fees_accounts->where('symbol', $token->symbol)->first()->wallet_id)->balance) ?? 'Wallet Removed' }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Found') }}</span>
                                            @endif
                                        </div> --}}
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        <div class="mb-1">
                                            @if ($token->actions == 1)
                                                @if (in_array($network->chain, ['TRON', 'SOL']))
                                                    <a href="javascript:void(0)"
                                                        onclick="$('#addSmartContractAddress').modal('show');
                                                    $('#addSmartContractAddress').find('input[name=id]').val($(this).data('id'));"
                                                        data-id="{{ $token->id }}" class="btn btn-success btn-sm">
                                                        {{ __('Add Token Contract') }}
                                                    </a>
                                                @else
                                                    <a href="{{ route('admin.eco.blockchain.tokens.fetch.contract', [$network->chain, $token->id]) }}"
                                                        class="btn btn-success btn-sm">
                                                        {{ __('Fetch Address') }}
                                                    </a>
                                                @endif
                                            @elseif ($token->actions == 2)
                                                <a href="javascript:void(0)"
                                                    onclick="$('#tokenRegister').modal('show');
                                                    $('#tokenRegister').find('input[name=id]').val($(this).data('id'));"
                                                    data-id="{{ $token->id }}" class="btn btn-success btn-sm">
                                                    {{ __('Register') }}
                                                </a>
                                            @elseif ($token->actions == 3)
                                                <a href="{{ route('admin.eco.blockchain.tokens.sync', [$network->chain, $token->id]) }}"
                                                    class="btn btn-success btn-sm">
                                                    {{ __('Sync') }}
                                                </a>
                                            @elseif ($token->actions == 4 && $network->chain == 'ETH')
                                                <button class="btn btn-warning btn-sm"
                                                    onclick="addTokenFunction('{{ $token->symbol }}','{{ $token->address }}','{{ $token->chain }}','{{ getImage('assets/images/cryptoCurrency/' . strtolower($token->symbol) . '.png') }}')">
                                                    <i class="bi bi-plus-lg"></i> {{ __('Add To Metamask') }}
                                                </button>
                                            @endif
                                        </div>

                                        <div class="mb-1">
                                            <a href="javascript:void(0)"
                                                onclick="$('#editWithdraw').modal('show');
                                                    $('#editWithdraw').find('input[name=id]').val($(this).data('id'));"
                                                data-id="{{ $token->id }}" class="btn btn-success btn-sm">
                                                <i class="bi bi-gear"></i> {{ __('Withdraw Settings') }}
                                            </a>
                                        </div>

                                        @if (!$fees_accounts->where('symbol', $token->symbol)->first() != null)
                                            <div class="mb-1">
                                                <a href="javascript:void(0)"
                                                    onclick="$('#createFeesAccount').modal('show');
                                                    $('#createFeesAccount').find('input[name=symbol]').val($(this).data('symbol'));"
                                                    data-symbol="{{ $token->symbol }}" class="btn btn-warning btn-sm">
                                                    <i class="bi bi-gear"></i> {{ __('Create Fees Account') }}
                                                </a>
                                            </div>
                                        @endif

                                        <div>
                                            @if (!file_exists('assets/images/cryptoCurrency/' . strtolower($token->symbol) . '.png'))
                                                <a onclick="$('#addIcon').modal('show');
                                                    $('#addIcon').find('input[name=symbol]').val($(this).data('symbol'));"
                                                    data-symbol="{{ $token->symbol }}" class="btn btn-info btn-sm">
                                                    <i class="bi bi-upload"></i> {{ __('Add Icon') }}
                                                </a>
                                            @else
                                                <a onclick="$('#addIcon').modal('show');
                                                    $('#addIcon').find('input[name=symbol]').val($(this).data('symbol'));"
                                                    data-symbol="{{ $token->symbol }}" class="btn btn-info btn-sm">
                                                    <i class="bi bi-upload"></i> {{ __('Edit Icon') }}
                                                </a>
                                            @endif
                                        </div>

                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse

                        </tbody>
                    </table><!-- table end -->
                </div>
            </div><!-- card end -->
            <div class="mb-1">{{ paginateLinks($tokens) }}</div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="addIcon">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.tokens.add.icon', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Upload Token Icon') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="symbol">
                    <div class="d-flex justify-content-start align-items-top mb-1">
                        <div>
                            <input class="form-control" name="image" type="file" id="image"
                                accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Upload') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div id="createFeesAccount" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to create fees account?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="add-new-record modal-content pt-0"
                    action="{{ route('admin.eco.blockchain.tokens.fees.account.create', $network->chain) }}"
                    method="POST" enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="symbol">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark"
                            data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Create') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="editWithdraw">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.tokens.withdraw.settings', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Withdraw Settings') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="id">
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_min">{{ __('Minimum Withdraw') }}</label>
                        <input type="number" class="form-control" name="withdraw_min" min="0" step=".00000001"
                            value="0">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_max">{{ __('Maximum Withdraw') }}</label>
                        <input type="number" class="form-control" name="withdraw_max" min="0" step=".00000001"
                            value="0">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_fee">{{ __('Withdraw Fees') }}</label>
                        <div class="input-group">
                            <input type="number" class="form-control" name="withdraw_fee" value="1">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Edit') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="addSmartContractAddress">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.tokens.add.contract', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">Add Token Address</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="id" id="id">
                    <div class="mb-1">
                        <label class="form-label" for="smartContract">Token Address</label>
                        <input type="text" class="form-control" name="smartContract" placeholder="">
                        <small>Write token address from the smart contract transaction hash</small>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Submit') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="tokenRegister">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.tokens.register', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Create Virtual Currency') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="id">
                    @if ($network->chain == 'TRON')
                        <div class="mb-1"><label class="form-control-label h6">Token Type</label>
                            <select class="form-select" id="type" name="type">
                                <option value="" selected disabled="">
                                    Choose an option
                                </option>
                                <option value="TRC10">
                                    TRC10
                                </option>
                                <option value="TRC20">
                                    TRC20
                                </option>
                            </select>
                        </div>
                    @endif
                    <div class="mb-1">
                        <label class="form-label" for="base_pair">{{ __('Base Pair') }}</label>
                        <input type="text" class="form-control" name="base_pair" placeholder="USDT">
                        <small>Base pair for {{ $network->chain }} token. Transaction value will be calculated according
                            to
                            this
                            base
                            pair.</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="base_rate">{{ __('Base Rate') }}</label>
                        <input type="number" class="form-control" name="base_rate" placeholder="1" min="1"
                            step="1">
                        <small>Exchange rate of the base pair. Each unit of the created curency will represent value of
                            baseRate*1 basePair.</small>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Register') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    @if ($wallet != null)
        <div class="modal modal-slide-in fade" id="deploy">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0"
                    action="{{ route('admin.eco.blockchain.tokens.deploy', $network->chain) }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">{{ __('Deploy Token') }}</h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        @if ($network->chain == 'TRON')
                            <div class="mb-1"><label class="form-control-label h6">Token Type</label>
                                <select class="form-select" id="type" name="type">
                                    <option value="" selected disabled="">
                                        Choose an option
                                    </option>
                                    <option value="trc10">
                                        TRC10
                                    </option>
                                    <option value="trc20">
                                        TRC20
                                    </option>
                                </select>
                                <small class="text-warning">Make sure you have at least 200 TRX in your wallet for
                                    deployment
                                    fees</small>
                            </div>
                        @endif
                        <div class="mb-1">
                            <label class="form-label" for="symbol">{{ __('Symbol') }}</label>
                            <input type="text" class="form-control" name="symbol">
                            <small class="text-warning">Unique token symbol</small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="name">{{ __('Name') }}</label>
                            <input type="text" class="form-control" name="name">
                            <small class="text-danger">*{{ __('No Spaces') }}</small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="cap">{{ __('Total Cap') }}</label>
                            <input type="number" class="form-control" name="cap">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="supply">{{ __('Supply') }}</label>
                            <input type="number" class="form-control" name="supply">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="decimals">Digits</label>
                            <input type="number" class="form-control" name="decimals">
                            <small class="text-warning">Number of decimal points</small>
                        </div>
                        <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Deploy') }}</button>
                        <button type="reset" class="btn btn-outline-secondary"
                            data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal modal-slide-in fade" id="addToken">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0"
                    action="{{ route('admin.eco.blockchain.tokens.add', $network->chain) }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">{{ __('Add Token') }}</h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div class="mb-1">
                            <label class="form-label" for="symbol">{{ __('Symbol') }}</label>
                            <input type="text" class="form-control" name="symbol">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="name">{{ __('Name') }}</label>
                            <input type="text" class="form-control" name="name">
                            <small class="text-danger">*{{ __('No Spaces') }}</small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="cap">{{ __('Total Cap') }}</label>
                            <input type="number" class="form-control" name="cap">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="supply">{{ __('Supply') }}</label>
                            <input type="number" class="form-control" name="supply">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="decimals">Digits</label>
                            <input type="number" class="form-control" name="decimals">
                            <small class="text-warning">Number of decimal points</small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="hash">{{ __('Hash') }}</label>
                            <input type="text" class="form-control" name="hash">
                            <small class="text-warning">*{{ __('Your smart contract creation transaction id') }}</small>
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="token_address">{{ __('Token Address') }}</label>
                            <input type="text" class="form-control" name="token_address">
                        </div>
                        <div class="mb-1">
                            <label class="form-label" for="holder_address">{{ __('Holder Address') }}</label>
                            <input type="text" class="form-control" name="holder_address">
                            <small class="text-warning">*Holder address must be identical to the blockchain wallet address
                                to use same Xpub for wallets generation</small>
                        </div>
                        <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Add') }}</button>
                        <button type="reset" class="btn btn-outline-secondary"
                            data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                    </div>
                </form>
            </div>
        </div>
    @endif
@endsection

@push('breadcrumb-plugins')
    @if (in_array($network->chain, ['ETH', 'BSC', 'MATIC', 'KLAY', 'XDC', 'ONE', 'CELO', 'SOL', 'TRON']))
        <button type="button" data-bs-toggle="modal" data-bs-target="#deploy" class="btn btn-primary"><i
                class="bi bi-plus-lg"></i>
            {{ __('Deploy Token') }}</button>
    @endif
    <button type="button" data-bs-toggle="modal" data-bs-target="#addToken" class="btn btn-primary"><i
            class="bi bi-plus-lg"></i>
        {{ __('Add Token') }}</button>
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-primary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection
@section('page-script')
    <script>
        const tokenDecimals = 8;
        let chain = '';
        async function addTokenFunction(symbol, address, type, image) {
            if (type == 'ETH') {
                this.chain = 'ERC20';
            }
            try {
                const wasAdded = await ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: this.chain,
                        options: {
                            address: address,
                            symbol: symbol,
                            decimals: tokenDecimals,
                            image: image,
                        },
                    },
                });
            } catch (error) {
                console.log(error);
            }
        }

        function ChangeStatus(id, status) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.eco.blockchain.tokens.update.status', $network->chain) }}",
                method: "POST",
                data: {
                    id: id,
                    status: status,
                },
                success: function(response) {
                    notify(response.type, response.message)
                },
                error: function(response) {
                    notify(response.type, response.message)
                }
            });
        }
    </script>
@endsection
