@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="accounts-tab" data-bs-toggle="tab" href="#accounts"
                            aria-controls="accounts" role="tab">{{ __('Accounts') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="tokens-tab" data-bs-toggle="tab" href="#tokens" aria-controls="tokens"
                            role="tab">{{ __('Tokens') }}</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="accounts" aria-labelledby="accounts-tab" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">{{ __('User') }}</th>
                                        <th scope="col">{{ __('Balance') }}</th>
                                        <th scope="col">{{ __('Currency') }}</th>
                                        <th scope="col">{{ __('Status') }}</th>
                                        <th scope="col">{{ __('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($accounts as $account)
                                        <tr>
                                            <td data-label="{{ __('User') }}">

                                                <div>{{ __('Account ID') }}: <span
                                                        class="fw-bold">{{ $account->id }}</span>
                                                </div>
                                                <div>{{ __('Customer Code') }}:
                                                    <span
                                                        class="fw-bold">{{ getUser($account->accountCode)->username ?? $account->accountCode }}</span>
                                                </div>
                                                <div>{{ __('Customer ID') }}: <span
                                                        class="fw-bold">{{ $account->customerId }}</span>
                                                </div>
                                            </td>
                                            <td data-label="{{ __('Balance') }}">
                                                <div>{{ __('Total Balance') }}: <span
                                                        class="fw-bold">{{ $account->balance->accountBalance }}</span>
                                                </div>
                                                <div>{{ __('Free Balance') }}: <span
                                                        class="fw-bold">{{ $account->balance->availableBalance }}</span>
                                                </div>
                                            </td>
                                            <td data-label="{{ __('Currency') }}">
                                                <div>{{ __('Accounting Currency') }}: <span
                                                        class="fw-bold">{{ $account->accountingCurrency }}</span></div>
                                                <div>{{ __('Chain Currency') }}: <span
                                                        class="fw-bold">{{ $account->currency }}</span>
                                                </div>
                                            </td>
                                            <td data-label="{{ __('Status') }}">
                                                @if ($account->active == true)
                                                    <span class="badge bg-success">{{ __('Active') }}</span>
                                                @else
                                                    <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                                @endif
                                            </td>
                                            <td data-label="{{ __('Actions') }}">
                                                <a href="javascript:void(0)" class="btn btn-success btn-sm"
                                                    onclick="$('#newDepositAddress').modal('show');
                                                    $('#newDepositAddress').find('input[name=id]').val($(this).data('id'));"
                                                    data-id="{{ $account->id }}">
                                                    {{ __('Create Deposit Address') }}
                                                </a>
                                                <a href="{{ route('admin.eco.blockchain.ledger.account.deposit.addresses', [$network->chain, $account->id]) }}"
                                                    class="btn btn-success btn-sm btn-icon">
                                                    <i class="bi bi-wallet2"></i>
                                                </a>
                                                <a href="{{ route('admin.eco.blockchain.ledger.account.deposit.log', [$network->chain, $account->id]) }}"
                                                    class="btn btn-success btn-sm btn-icon">
                                                    <i class="bi bi-wallet"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td class="text-muted text-center" colspan="100%">No Account found') }}</td>
                                        </tr>
                                    @endforelse

                                </tbody>
                            </table><!-- table end -->
                        </div>
                    </div>
                    <div class="tab-pane" id="tokens" aria-labelledby="tokens-tab" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">{{ __('Token') }}</th>
                                        <th scope="col">{{ __('Balance') }}</th>
                                        <th scope="col">{{ __('Status') }}</th>
                                        <th scope="col">{{ __('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($tokens as $token)
                                        <td data-label="{{ __('Token') }}">
                                            <div>{{ __('Symbol') }}: <span
                                                    class="fw-bold">{{ str_replace('VC_', '', $token->currency) }}</span>
                                            </div>
                                            <div>{{ __('Accounting Currency') }}: <span
                                                    class="fw-bold">{{ $token->accountingCurrency }}</span></div>
                                            <div>{{ __('Type') }}: @if (strpos($token->currency, 'VC_') !== false)
                                                    <span class="badge bg-warning">{{ __('Virtual Token') }}</span>
                                                @else
                                                    <span class="badge bg-warning">{{ __('Chain Token') }}</span>
                                                @endif
                                            </div>
                                        </td>
                                        <td data-label="{{ __('Balance') }}">
                                            <div>{{ __('Total Balance') }}: {{ $token->balance->accountBalance }}
                                            </div>
                                            <div>{{ __('Free Balance') }}: {{ $token->balance->availableBalance }}
                                            </div>
                                        </td>
                                        <td data-label="{{ __('Status') }}">
                                            @if ($token->active == true)
                                                <span class="badge bg-success">{{ __('Active') }}</span>
                                            @else
                                                <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                            @endif
                                        </td>
                                        <td data-label="{{ __('Actions') }}">
                                        </td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td class="text-muted text-center" colspan="100%">
                                                {{ __('No Token found') }}</td>
                                        </tr>
                                    @endforelse
                                    <tr>
                                        <td class="text-center" colspan="100%"><a href="javascript:void(0)"
                                                class="btn btn-success btn-sm" onclick="$('#newToken').modal('show');">
                                                {{ __('Create New Token') }}
                                            </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table><!-- table end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="newAccount">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.ledger.account.store', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Create Virtual Account') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="chain" value="{{ $network->chain }}">
                    <div class="mb-1">
                        <label class="form-label" for="account_code">{{ __('Account Code') }}</label>
                        <input type="text" class="form-control" name="account_code" placeholder="1011_B">
                        <small class="text-danger">{{ __('For book keeping to distinct account purpose.') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="account_number">{{ __('Account Number') }}</label>
                        <input type="number" class="form-control" name="account_number" placeholder="1234567890">
                        <small
                            class="text-danger">{{ __('Account number from external system. (will be used as identifier in
                                                                                    trading)') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="accounting_currency">{{ __('Accounting Currency') }}</label>
                        <input type="text" class="form-control" name="accounting_currency" placeholder="USD">
                        <small
                            class="text-danger">{{ __('All transaction will be billed in this currency for created account
                                                                                    associated with this currency. If not set, EUR is used. ISO-4217') }}</small>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Create') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="newDepositAddress">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.ledger.deposit.address.store', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Create Deposit Address') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="chain" value="{{ $network->chain }}">
                    <input type="hidden" name="id">
                    <p><span class="fw-bold"></span> {{ __('Create Deposit Address For this Client?') }}</p>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Create') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="newToken">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.ledger.token.store', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Create Virtual Currency') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="chain" value="{{ $network->chain }}">
                    <div class="mb-1">
                        <label class="form-label" for="symbol">{{ __('Symbol') }}</label>
                        <input type="text" class="form-control" name="symbol" placeholder="VIRTUAL">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="desc">{{ __('Description') }}</label>
                        <input type="text" class="form-control" name="name"
                            placeholder="My Virtual Token description.">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="supply">{{ __('Supply') }}</label>
                        <input type="number" class="form-control" name="supply" placeholder="1000000">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="base_pair">{{ __('Base Pair') }}</label>
                        <input type="text" class="form-control" name="base_pair" placeholder="USDT">
                        <small
                            class="text-danger">{{ __('Base pair for virtual currency. Transaction value will be calculated
                                                                                    according to this base pair. e.g. 1 VIRTUAL is equal to 1 BTC, if basePair is set to BTC.') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="rate">{{ __('Rate') }}</label>
                        <input type="number" class="form-control" name="rate" placeholder="1">
                        <small
                            class="text-danger">{{ __('Exchange rate of the base pair. Each unit of the created curency will
                                                                                    represent value of baseRate*1 basePair. (must be > 0)') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="account_code">{{ __('Account Code') }}</label>
                        <input type="text" class="form-control" name="account_code" placeholder="1011_B">
                        <small class="text-danger">{{ __('For book keeping to distinct account purpose.') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="account_number">{{ __('Account Number') }}</label>
                        <input type="number" class="form-control" name="account_number" placeholder="1234567890">
                        <small
                            class="text-danger">{{ __('Account number from external system. (will be used as identifier in
                                                                                    trading)') }}</small>
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="accounting_currency">{{ __('Accounting Currency') }}</label>
                        <input type="text" class="form-control" name="accounting_currency" placeholder="USD">
                        <small
                            class="text-danger">{{ __('All transaction will be billed in this currency for created account
                                                                                    associated with this currency. If not set, EUR is used. ISO-4217') }}</small>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Deploy') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
@endsection
@push('breadcrumb-plugins')
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-primary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
