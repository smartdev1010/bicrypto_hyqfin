@extends('layouts.admin')

@section('content')
    <livewire:ext.eco.eco-tokens-table :chain="$chain" />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Upload Token Icon') }}"
        action="{{ route('admin.eco.blockchain.tokens.add.icon', $network->chain) }}" submit="{{ __('Upload') }}"
        id="addIcon">
        <div>
            <input type="hidden" name="symbol">
            <input class="upload" name="image" type="file" id="image" accept=".png, .jpg, .jpeg" required />
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Create Fees Account Confirmation') }}"
        action="{{ route('admin.eco.blockchain.tokens.fees.account.create', $network->chain) }}" submit="{{ __('Create') }}"
        id="createFeesAccount">
        <div>
            <input type="hidden" name="symbol">
            {{ __('Are you sure want to create fees account?') }}
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Withdraw Settings') }}"
        action="{{ route('admin.eco.blockchain.tokens.withdraw.settings', $network->chain) }}" submit="{{ __('Edit') }}"
        id="editWithdraw">
        <div class="mb-1">
            <input type="hidden" name="id">
            <label class="form-label" for="withdraw_min">{{ __('Minimum Withdraw') }}</label>
            <input type="number" class="form-control" name="withdraw_min" min="0" step=".00000001" value="0"
                required>
        </div>
        <div class="mb-1">
            <label class="form-label" for="withdraw_max">{{ __('Maximum Withdraw') }}</label>
            <input type="number" class="form-control" name="withdraw_max" min="0" step=".00000001" value="0"
                required>
        </div>
        <div class="mb-1">
            <label class="form-label" for="withdraw_fee">{{ __('Withdraw Fees') }}</label>
            <div class="input-group">
                <input type="number" name="withdraw_fee" value="1" min="0.00000001" step="0.00000001" required>
                <span>%</span>
            </div>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Add Token Address') }}"
        action="{{ route('admin.eco.blockchain.tokens.add.contract', $network->chain) }}" submit="{{ __('Submit') }}"
        id="addSmartContractAddress">
        <div class="mb-1">
            <input type="hidden" name="id" id="id">
            <label class="form-label" for="smartContract">Token Address</label>
            <input type="text" class="form-control" name="smartContract" placeholder="" required>
            <small>Write token address from the smart contract transaction hash</small>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Create Virtual Currency') }}"
        action="{{ route('admin.eco.blockchain.tokens.register', $network->chain) }}" submit="{{ __('Register') }}"
        id="tokenRegister">
        @if ($network->chain == 'TRON')
            <div class="mb-1"><label class="form-control-label h6">Token Type</label>
                <select class="form-select" id="type" name="type" required>
                    <option value="">
                        Choose an option
                    </option>
                    <option value="TRC10">
                        TRC10
                    </option>
                    <option value="TRC20" selected>
                        TRC20
                    </option>
                </select>
            </div>
        @endif
        <div class="mb-1">
            <label class="form-label" for="base_pair">{{ __('Base Pair') }}</label>
            <input type="text" class="form-control" name="base_pair" placeholder="USDT" required>
            <small>Base pair for {{ $network->chain }} token. Transaction value will be calculated according
                to
                this
                base
                pair.</small>
        </div>
        <div class="mb-1">
            <input type="hidden" name="id">
            <label class="form-label" for="base_rate">{{ __('Base Rate') }}</label>
            <input type="number" class="form-control" name="base_rate" placeholder="1" min="0.00000001" step="0.00000001"
                required>
            <small>Exchange rate of the base pair. Each unit of the created curency will represent value of
                baseRate*1 basePair.</small>
        </div>
    </x-partials.modals.default-modal>
    @if ($wallet != null)
        <x-partials.modals.default-modal title="{{ __('Deploy Token') }}"
            action="{{ route('admin.eco.blockchain.tokens.deploy', $network->chain) }}" submit="{{ __('Deploy') }}"
            id="deploy">
            @if ($network->chain == 'TRON')
                <div class="mb-1"><label class="form-control-label h6">Token Type</label>
                    <select class="form-select" id="type" name="type" required>
                        <option value="">
                            Choose an option
                        </option>
                        <option value="trc10">
                            TRC10
                        </option>
                        <option value="trc20" selected>
                            TRC20
                        </option>
                    </select>
                    <small class="text-warning">Make sure you have at least 200 TRX in your wallet for
                        deployment
                        fees</small>
                </div>
            @endif
            <div class="grid gap-5 mx-1 sm:grid-cols-2">
                <div>
                    <label for="symbol"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Symbol') }}</label>
                    <input type="text"id="symbol" name="symbol" required
                        placeholder="{{ __('Unique token symbol (Capital Letters Only!)') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>
                <div>
                    <label for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Name') }}</label>
                    <input type="text"id="name" name="name" placeholder="{{ __('No Spaces') }}" required
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>


                <div class="mb-1">
                    <label class="form-label" for="cap">{{ __('Total Cap') }}</label>
                    <input type="number" class="form-control" name="cap" required>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="supply">{{ __('Supply') }}</label>
                    <input type="number" class="form-control" name="supply" required>
                </div>
                <div>
                    <label for="decimals"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Digits') }}</label>
                    <input type="text"id="decimals" name="decimals" required
                        placeholder="{{ __('Number of decimal points') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>

            </div>
        </x-partials.modals.default-modal>
        <x-partials.modals.default-modal title="{{ __('Add Token') }}"
            action="{{ route('admin.eco.blockchain.tokens.add', $network->chain) }}" submit="{{ __('Add') }}"
            id="addToken">
            <div class="grid gap-5 mx-1 sm:grid-cols-2">
                <div>
                    <label for="symbol"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Symbol') }}</label>
                    <input type="text"id="symbol" name="symbol" required
                        placeholder="{{ __('Unique token symbol (Capital Letters Only!)') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>
                <div>
                    <label for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Name') }}</label>
                    <input type="text"id="name" name="name" placeholder="{{ __('No Spaces') }}" required
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>


                <div class="mb-1">
                    <label class="form-label" for="cap">{{ __('Total Cap') }}</label>
                    <input type="number" class="form-control" name="cap" required>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="supply">{{ __('Supply') }}</label>
                    <input type="number" class="form-control" name="supply" required>
                </div>
                <div>
                    <label for="decimals"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Digits') }}</label>
                    <input type="text"id="decimals" name="decimals" required
                        placeholder="{{ __('Number of decimal points') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>
                <div>
                    <label for="hash"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Hash') }}</label>
                    <input type="text"id="hash" name="hash" required
                        placeholder="{{ __('Your smart contract creation transaction id') }}"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>


                <div class="mb-1">
                    <label class="form-label" for="token_address">{{ __('Token Address') }}</label>
                    <input type="text" class="form-control" name="token_address" required>
                </div>
                <div class="mb-1">
                    <label class="form-label" for="holder_address">{{ __('Holder Address') }}</label>
                    <input type="text" class="form-control" name="holder_address" required>
                    <small class="text-warning">*Holder address must be identical to the blockchain wallet address
                        to use same Xpub for wallets generation</small>
                </div>
            </div>
        </x-partials.modals.default-modal>
    @endif
@endpush
@push('breadcrumb-plugins')
    <div class="space-x-1">
        @if ($wallet != null)
            @if (in_array($network->chain, ['ETH', 'BSC', 'MATIC', 'KLAY', 'XDC', 'ONE', 'CELO', 'SOL', 'TRON']))
                <button type="button" data-modal-toggle="deploy" class="btn btn-outline-primary"><i
                        class="bi bi-plus-lg"></i>
                    {{ __('Deploy Token') }}</button>
            @endif
            <button type="button" data-modal-toggle="addToken" class="btn btn-outline-primary"><i
                    class="bi bi-plus-lg"></i>
                {{ __('Add Token') }}</button>
        @else
            <button class="btn bg-danger mr-1" disabled>
                {{ __('Create Wallet First') }}</button>
        @endif
        <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-outline-secondary"><i
                class="bi bi-chevron-left"></i>
            {{ __('Back') }}</a>
    </div>
@endpush
@section('page-scripts')
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
    </script>
@endsection
