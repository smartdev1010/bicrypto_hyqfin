@extends('layouts.admin')

@section('content')
    <livewire:ext.eco.eco-wallets-table :chain="$chain" :symbol="$symbol" />
    <div class="card mt-5">
        <div class="card-header">
            <h4>Guide</h4>
        </div>
        <div class="card-body">
            <ul class="list-disc px-3">
                <li><span class="fw-bolder">Index</span> is important to identify address
                    precalculated from master wallet</li>
                <li>Create addresses to make sure your clients can generate a wallet</li>
                <li><span class="fw-bolder">Create Addresses</span> button will create 50 addresses,
                    dont over make addresses to
                    prevent overheat on your database</li>
                <li><span class="fw-bolder">Bulk Refresh Balances</span> button will fetch the
                    balances on ledger account and blockchain free balance but blockchain balance can only be fetched if
                    address is activated</li>
                {{-- <li><span class="fw-bolder">Unassign Bulk Action</span> button will do the following
                    <ul>
                        <li> <span class="fw-bolder text-danger">Remove</span> the client wallet
                            from
                            database
                        </li>
                        <li> <span class="fw-bolder text-danger">Remove</span> the connection
                            between user
                            ledger account and address</li>
                        <li> <span class="fw-bolder text-success">Allow</span> the address to be
                            assigned to
                            another user</li>
                        <li> <span class="fw-bolder text-success">Keep</span> the address
                            activation status
                        </li>
                        <li> <span class="fw-bolder text-success">Keep</span> all balances in the
                            address to be used by another client</li>
                    </ul>
                </li> --}}
                <li><span class="fw-bolder">Balance</span> is the user balance on the ledger
                    account that
                    he can withdraw or trade with</li>
                <li><span class="fw-bolder">Free Balance</span> is the wallet balance on the
                    blockchain</li>
                <li><span class="badge bg-success">user</span> is an address created and
                    assigned to user</li>
                <li><span class="badge bg-success">Activation TxId</span> is an address
                    activated and checked successfully</li>
            </ul>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    <div class="space-x-1">
        {{-- <button type="button" data-bs-toggle="modal" data-bs-target="#makeAddresses" class="btn btn-outline-primary"><i
            class="bi bi-plus-lg"></i>{{ __('Make Addresses') }}</button> --}}

        <a href="{{ route('admin.eco.blockchain.addresses.store', [$chain, $symbol]) }}" class="btn btn-outline-primary">
            <i class="bi bi-plus-lg"></i> Create Addresses
        </a>
        <a href="{{ route('admin.eco.blockchain.mainnet.tokens.index', $chain) }}" class="btn btn-outline-secondary">
            <i class="bi bi-chevron-left"></i> Back
        </a>
    </div>
@endpush
