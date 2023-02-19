@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-12">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-body">
                    <h5 class="text-muted">{{ __('Network information') }}</h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {{ __('Name') }}
                            <span class="h6 mt-1">{{ $network->name }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {{ __('Symbol') }}
                            <span class="h6 mt-1">{{ $network->chain }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {{ __('Status') }}
                            <span class="h6 mt-1">{{ $network->status }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-md-8 col-sm-12">
            <div class="card rounded-2 overflow-hidden shadow">
                @if ($wallet != null)
                    <div class="card-body">
                        <h5 class="card-title text-muted">{{ __('Wallet') }}</h5>
                        <ul class="list-group">
                            @if ($wallet->mnemonic != null)
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    {{ __('Mnemonic') }}
                                    <span class="h6 mt-1">{{ $wallet->mnemonic }}</span>
                                </li>
                            @endif
                            @if ($wallet->mnemonic != null)
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    {{ __('Xpub') }}
                                    <span class="h6 mt-1">{{ $wallet->xpub }}</span>
                                </li>
                            @endif
                            @if ($wallet->mnemonic != null || in_array($network->chain, ['ALGO', 'SOL']))
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    {{ __('Private Key') }}
                                    <span class="h6 mt-1">{{ $wallet->private_key }}</span>
                                </li>
                            @endif
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                {{ __('Address') }}
                                <span class="h6 mt-1">{{ $wallet->address }}</span>
                            </li>
                            @if (!in_array($network->chain, ['TRON', 'BCH', 'DOGE']))
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    {{ __('Balance') }}:
                                    <span class="h6 mt-1">{{ $wallet->balance }} {{ $wallet->chain }}</span>
                                </li>
                            @endif
                        </ul>
                    </div>
                    @if ($wallet->mnemonic != null)
                        <div class="card-footer d-flex justify-content-between align-items-center">
                            <span
                                class="text-danger">*{{ __('Save these wallet info in your PC before clicking Secure wallet as they are one time only') }}</span>
                            <a href="{{ route('admin.eco.blockchain.wallet.secure', $network->chain) }}"
                                class="btn btn-danger">{{ __('Secure Wallet') }}</a>
                        </div>
                    @else
                        <div class="card-footer text-end">
                            <button class="btn btn-danger"
                                onclick="$('#removeWallet').modal('show');">{{ __('Remove Wallet') }}</button>
                        </div>
                    @endif
                @else
                    <div class="card-footer">
                        @if ($network->chain != 'ALGO')
                            <a href="{{ route('admin.eco.blockchain.wallet.create', $network->chain) }}">
                                <button class="btn btn-success me-1">{{ __('Create Wallet') }}</button>
                            </a>
                        @endif
                        <button class="btn btn-warning" onclick="$('#addWallet').modal('show');">
                            {{ __('Add Wallet') }}
                        </button>
                    </div>
                @endif
            </div>
            <div class="card">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="transactions-tab" data-bs-toggle="tab" href="#transactions"
                            aria-controls="transactions" role="tab">{{ __('Transactions') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="internal-tab" data-bs-toggle="tab" href="#internal" aria-controls="internal"
                            role="tab">{{ __('Internal Transactions') }}</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="transactions" aria-labelledby="transactions-tab" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">{{ __('Txn Hash') }}</th>
                                        <th scope="col">{{ __('Block') }}</th>
                                        <th scope="col">{{ __('Age') }}</th>
                                        <th scope="col">{{ __('From') }}</th>
                                        <th scope="col">{{ __('To') }}</th>
                                        <th scope="col">{{ __('Value') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if ($wallet != null)
                                        @forelse($wallet->trxs as $trx)
                                            <tr>
                                                <td data-label="Txn Hash">{{ cut_char($trx->hash, 15) }}</td>
                                                <td data-label="Block">{{ $trx->blockNumber }}</td>
                                                <td data-label="Age">{{ $trx->timeStamp }}</td>
                                                <td data-label="From">{{ cut_char($trx->from, 15) }}</td>
                                                <td data-label="To">{{ cut_char($trx->to, 15) }}</td>
                                                <td data-label="Value">{{ $trx->value }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td class="text-muted text-center" colspan="100%">
                                                    {{ __('No transactions found') }}
                                                </td>
                                            </tr>
                                        @endforelse
                                    @endif
                                </tbody>
                            </table><!-- table end -->
                        </div>
                    </div>
                    <div class="tab-pane" id="internal" aria-labelledby="internal-tab" role="tabpanel">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">{{ __('Txn Hash') }}</th>
                                        <th scope="col">{{ __('Block') }}</th>
                                        <th scope="col">{{ __('Age') }}</th>
                                        <th scope="col">{{ __('From') }}</th>
                                        <th scope="col">{{ __('To') }}</th>
                                        <th scope="col">{{ __('Value') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if ($wallet != null)
                                        @forelse($wallet->internal_trxs as $trx)
                                            <tr>
                                                <td data-label="Txn Hash">{{ cut_char($trx->hash, 15) }}</td>
                                                <td data-label="Block">{{ $trx->blockNumber }}</td>
                                                <td data-label="Age">{{ $trx->timeStamp }}</td>
                                                <td data-label="From">{{ cut_char($trx->from, 15) }}</td>
                                                <td data-label="To">{{ cut_char($trx->to, 15) }}</td>
                                                <td data-label="Value">{{ $trx->value }}</td>
                                            </tr>
                                        @empty
                                            <tr>
                                                <td class="text-muted text-center" colspan="100%">
                                                    {{ __('No transactions found') }}
                                                </td>
                                            </tr>
                                        @endforelse
                                    @endif

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Remove Subscriber MODAL --}}
    <div id="removeWallet" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><span class="fw-bold">{{ __('Are your sure you want to remove the wallet?') }}</span> </p>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-danger">{{ __('All') }} <span
                                class="fw-bold">{{ __('main wallets') }} </span>
                            {{ __('need to be removed that made after adding this wallet.') }}
                        </li>
                        <li class="list-group-item list-group-item-danger">{{ __('All') }} <span
                                class="fw-bold">{{ __('ledger') }} </span>
                            {{ __('accounts need to be removed that made after adding this wallet.') }}
                        </li>
                        <li class="list-group-item list-group-item-danger">{{ __('All') }} <span
                                class="fw-bold">{{ __('fees') }}
                            </span>{{ __('accounts need to be removed that made after adding this wallet.') }}
                        </li>
                        <li class="list-group-item list-group-item-danger">{{ __('All') }} <span
                                class="fw-bold">{{ __('Tokens') }} </span>
                            {{ __('created on this wallet need to be removed.') }}
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                    <a href="{{ route('admin.eco.blockchain.wallet.remove', $network->chain) }}">
                        <button type="submit" class="btn btn-danger">{{ __('Remove') }}</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="addWallet">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.wallet.add', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Add Wallet') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <div class="mb-1">
                        <label class="form-label" for="address">{{ __('Wallet Address') }}</label>
                        <input type="text" class="form-control" name="address">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="private_key">{{ __('Wallet Private Key') }}</label>
                        <input type="text" class="form-control" name="private_key">
                    </div>
                    @if (in_array($network->chain, ['BNB', 'SOL']))
                        <div class="mb-1">
                            <label class="form-label" for="mnemonic">Wallet Mnemonic</label>
                            <input type="text" class="form-control" name="mnemonic">
                        </div>
                    @else
                        <div class="mb-1">
                            <label class="form-label" for="xpub">Wallet XPub</label>
                            <input type="text" class="form-control" name="xpub">
                        </div>
                    @endif
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Add') }}</button>
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

@section('page-script')
    <script>
        function getXpub(id) {

        }
    </script>
@endsection
