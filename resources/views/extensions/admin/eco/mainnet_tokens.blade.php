@extends('layouts.admin')

@section('content')
    <livewire:ext.eco.eco-mainnet-tokens-table :chain="$chain" />
@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Upload Token Icon') }}"
        action="{{ route('admin.eco.blockchain.tokens.add.icon', $chain) }}" submit="{{ __('Upload') }}" id="addIcon">
        <div>
            <input type="hidden" name="symbol">
            <input class="upload" name="image" type="file" id="image" accept=".png, .jpg, .jpeg" required />
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Fees Account Creation Confirmation') }}"
        action="{{ route('admin.eco.blockchain.tokens.fees.account.create', $chain) }}" submit="{{ __('Create') }}"
        id="createFeesAccount">
        <div>
            <input type="hidden" name="symbol">
            <input type="hidden" name="postfix">
            <p>Do you want to create a fees account for this token?</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Withdraw Settings') }}"
        action="{{ route('admin.eco.blockchain.mainnet.tokens.withdraw.settings', $chain) }}" submit="{{ __('Create') }}"
        id="editWithdraw">
        <div class="mb-1">
            <input type="hidden" name="id">
            <label class="form-label" for="withdraw_min">{{ __('Minimum Withdraw') }}</label>
            <input type="number" class="form-control" name="withdraw_min"min="0" step=".00000001" value="0"
                required>
        </div>
        <div class="mb-1">
            <label class="form-label" for="withdraw_max">{{ __('Maximum Withdraw') }}</label>
            <input type="number" class="form-control" name="withdraw_max"min="0" step=".00000001" value="0"
                required>
        </div>
        <div class="mb-1">
            <label class="form-label" for="withdraw_fee">{{ __('Withdraw Fees') }}</label>
            <div class="input-group">
                <input type="number" name="withdraw_fee" value="1">
                <span>%</span>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    {{-- @if ($chain == 'ETH')
        <a href="javascript:void(0)" onclick="$('#deploy').modal('show');" class="btn btn-outline-sm btn-outline-primary"><i
                class="bi bi-plus-lg"></i>
            {{ __('Deploy Token') }}</a>
    @endif
    <a href="javascript:void(0)" onclick="$('#addToken').modal('show');" class="btn btn-outline-sm btn-outline-primary"><i
            class="bi bi-plus-lg"></i>
        {{ __('Add Token') }}</a> --}}
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush

@section('page-scripts')
    <script>
        "use strict";

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
    </script>
@endsection
