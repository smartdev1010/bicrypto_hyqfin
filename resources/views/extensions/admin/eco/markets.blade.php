@extends('layouts.admin')

@section('content')
    <livewire:ext.eco.eco-markets-table />
@endsection
@push('modals')
    <x-partials.modals.store-modal title="{{ __('Create Market') }}" action="{{ route('admin.eco.markets.store') }}"
        submit="Create" id="createMarket">
        <div class="grid gap-5 mx-6 sm:grid-cols-3">
            <div>
                <label for="currency"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Currency') }}</label>
                <select id="currency" name="currency" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option selected>{{ __('Choose a currency') }}</option>
                    @foreach ($currencies as $currency)
                        <option class="fs-5" value="{{ $currency->symbol . '|' . $currency->chain }}">
                            {{ $currency->symbol }} ({{ $currency->chain }})</option>
                    @endforeach
                    @if ($net == 'mainnet')
                        @foreach ($tokens as $token)
                            <option class="fs-5" value="{{ $token->symbol . '|' . $token->chain }}">
                                {{ $token->symbol }} ({{ $token->chain }})
                            </option>
                        @endforeach
                    @endif

                </select>

            </div>

            <div>

                <label for="pair"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Pair') }}</label>
                <select id="pair" name="pair" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option selected> {{ __('Choose a pair') }}</option>
                    @foreach ($currencies as $pair)
                        <option class="fs-5" value="{{ $pair->symbol . '|' . $pair->chain }}">
                            {{ $pair->symbol }} ({{ $pair->chain }})
                        </option>
                    @endforeach
                    @if ($net == 'mainnet')
                        @foreach ($tokens as $token)
                            <option class="fs-5" value="{{ $token->symbol . '|' . $token->chain }}">
                                {{ $token->symbol }} ({{ $token->chain }})
                            </option>
                        @endforeach
                    @endif
                </select>

            </div>
            <div>
                <div class="flex justify-between">
                    <label for="maker"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Maker') }}</label>

                </div>

                <div class="input-group">
                    <input type="number" required name="maker" min="0.001" step=".001">
                    <span id="maker" for="maker">
                        %
                    </span>
                </div>
            </div>
            <div>
                <div class="flex justify-between">
                    <label for="taker"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Taker') }}</label>

                </div>

                <div class="input-group">
                    <input type="number" required name="taker" min="0.001" step=".001">
                    <span id="taker" for="taker">
                        %
                    </span>
                </div>
            </div>
            <div>
                <label for="minimum"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Minimum Amount') }}</label>
                <input type="number" name="minimum" min="0.0000001" step=".0000001" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>
            <div>
                <label for="maximum"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Maximum Amount') }}</label>
                <input type="number" name="maximum" min="0.0000001" step=".0000001" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>
            <div>
                <label for="type"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Type') }}</label>
                <input type="text" name="type" value="spot" readonly disabled
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>
        </div>
    </x-partials.modals.store-modal>
@endpush

@push('breadcrumb-plugins')
    <button class="btn btn-outline-success" data-modal-toggle="createMarket">{{ __('Create Market') }}</button>
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Blockchains') }}</a>
@endpush
