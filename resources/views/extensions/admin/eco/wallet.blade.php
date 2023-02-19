@extends('layouts.admin')

@section('content')
    <div class="grid gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="col-span-1">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-header">
                    <div class="card-title">
                        <h5 class="title-gradient">{{ __('Network information') }}</h5>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="">
                        <li class=" flex justify-between items-center">
                            {{ __('Name') }}
                            <span class="h6 mt-1">{{ $network->name }}</span>
                        </li>
                        <li class=" flex justify-between items-center">
                            {{ __('Symbol') }}
                            <span class="h6 mt-1">{{ $network->chain }}</span>
                        </li>
                        <li class="flex justify-between items-center">
                            <span>{{ __('Status') }}</span>
                            <span
                                class="h6 mt-1 badge bg-{{ $network->status == 1 ? 'success' : 'danger' }}">{{ $network->status == 1 ? 'Active' : 'Disabled' }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="xs:col-span-1 md:col-span-2 lg:col-span-3">
            <div class="card rounded-2 overflow-hidden shadow">
                <div class="card-header">
                    <div class="card-title">
                        <h5 class="title-gradient">{{ __('Wallet') }}</h5>
                    </div>
                </div>
                @if ($wallet != null)
                    <div class="card-body">
                        <ul class=" space-y-2">
                            @if ($wallet->mnemonic != null)
                                <li class=" flex justify-between items-center">
                                    <span class="mr-2">{{ __('Mnemonic') }}</span>
                                    <input type="text" class="form-control" readonly value="{{ $wallet->mnemonic }}">
                                </li>
                            @endif
                            @if ($wallet->mnemonic != null)
                                <li class=" flex justify-between items-center">
                                    <span class="mr-2">{{ __('Mnemonic') }}</span>
                                    <input type="text" class="form-control" readonly value="{{ $wallet->xpub }}">
                                </li>
                            @endif
                            @if ($wallet->mnemonic != null || in_array($network->chain, ['ALGO', 'SOL']))
                                <li class=" flex justify-between items-center">
                                    <span class="mr-2">{{ __('Private Key') }}</span>
                                    <input type="text" class="form-control" readonly value="{{ $wallet->private_key }}">
                                </li>
                            @endif
                            <li class=" flex justify-between items-center">
                                <span class="mr-2">{{ __('Address') }}</span>
                                <input type="text" class="form-control" readonly value="{{ $wallet->address }}">
                            </li>
                            @if (!in_array($network->chain, ['TRON', 'BCH', 'DOGE']))
                                <li class=" flex justify-between items-center">
                                    <span class="mr-2">{{ __('Balance') }}</span>
                                    <input type="text" class="form-control" readonly
                                        value="{{ $wallet->balance }} {{ $wallet->chain }}">
                                </li>
                            @endif
                        </ul>
                    </div>
                    @if ($wallet->mnemonic != null)
                        <div class="card-footer flex justify-between items-center">
                            <span
                                class="text-danger">*{{ __('Save these wallet info in your PC before clicking Secure wallet as they are one time only') }}</span>
                            <a href="{{ route('admin.eco.blockchain.wallet.secure', $network->chain) }}"
                                class="btn btn-outline-danger">{{ __('Secure Wallet') }}</a>
                        </div>
                    @else
                        <div class="card-footer text-end">
                            <button class="btn btn-outline-danger"
                                data-modal-toggle="removeWallet">{{ __('Remove Wallet') }}</button>
                        </div>
                    @endif
                @else
                    <div class="card-footer">
                        @if ($network->chain != 'ALGO')
                            <a href="{{ route('admin.eco.blockchain.wallet.create', $network->chain) }}">
                                <button class="btn btn-outline-success mr-1">{{ __('Create Wallet') }}</button>
                            </a>
                        @endif
                        <button class="btn btn-outline-warning" data-modal-toggle="addWallet">
                            {{ __('Add Wallet') }}
                        </button>
                    </div>
                @endif
            </div>
            {{-- <div class="card">
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
            </div> --}}
        </div>
    </div>
@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Wallet Removal Confirmation') }}"
        action="{{ route('admin.eco.blockchain.wallet.remove', $network->chain) }}" submit="{{ __('Remove') }}"
        id="removeWallet" done="reload">
        <p><span class="fw-bold">{{ __('Are your sure you want to remove the wallet?') }}</span> </p>
        <ul class="">
            <li class=" -danger">{{ __('All') }} <span class="fw-bold">{{ __('main wallets') }} </span>
                {{ __('need to be removed that made after adding this wallet.') }}
            </li>
            <li class=" -danger">{{ __('All') }} <span class="fw-bold">{{ __('ledger') }} </span>
                {{ __('accounts need to be removed that made after adding this wallet.') }}
            </li>
            <li class=" -danger">{{ __('All') }} <span class="fw-bold">{{ __('fees') }}
                </span>{{ __('accounts need to be removed that made after adding this wallet.') }}
            </li>
            <li class=" -danger">{{ __('All') }} <span class="fw-bold">{{ __('Tokens') }} </span>
                {{ __('created on this wallet need to be removed.') }}
            </li>
        </ul>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Add Wallet') }}"
        action="{{ route('admin.eco.blockchain.wallet.add', $network->chain) }}" submit="{{ __('Add') }}"
        id="addWallet">
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
                <label class="form-label" for="mnemonic">{{ __('Wallet Mnemonic') }}</label>
                <input type="text" class="form-control" name="mnemonic">
            </div>
        @else
            <div class="mb-1">
                <label class="form-label" for="xpub">{{ __('Wallet XPub') }}</label>
                <input type="text" class="form-control" name="xpub">
            </div>
        @endif
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-outline-primary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
