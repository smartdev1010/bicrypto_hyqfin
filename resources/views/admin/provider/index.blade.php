@extends('layouts.admin')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Providers') }}</h4>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Provider') }} </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('API Connection') }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Status') }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Action') }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($providers as $provider)
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th scope="row"
                                        class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex  items-center">
                                            <img class="avatar-content mr-3" style="width:110px;height:35px"
                                                src="{{ getImage('assets/images/providers/' . strtolower($provider->title) . '.jpg') }}" />
                                            {{ $provider->name }}

                                        </div>
                                    </th>

                                    <td class="px-6 py-2">
                                        @if ($provider->status == 1)
                                            @if ($connection == 1)
                                                <span class="badge bg-success">{{ __('Connected Successfully') }}</span>
                                            @elseif($connection == 0)
                                                <span class="badge bg-danger">{{ __('Connection Failed') }}</span>
                                            @else
                                            @endif
                                        @else
                                        @endif
                                    </td>

                                    <td class="px-6 py-2">
                                        @if ($provider->development != 1)
                                            @if ($provider->status == 1)
                                                <span class="badge bg-success">{{ __('Active') }}</span>
                                            @else
                                                <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                            @endif
                                        @else
                                            <span class="badge bg-secondary">{{ __('In Development') }}</span>
                                        @endif
                                    </td>
                                    <td class="px-6 py-2 space-y-2">
                                        @if ($provider->development == 1)
                                        @else
                                            @if ($provider->installed == 1)
                                                @if ($provider->status == 1)
                                                    @php
                                                        $res = $api->check_update($provider->product_id);
                                                    @endphp
                                                    @if ($res['status'])
                                                        <a type="button" class="btn btn-warning btn-sm" style="top:80%"
                                                            href="{{ route('admin.provider.install', [$provider->product_id]) }}">
                                                            <i class="bi bi-download"></i> {{ __('Update') }}
                                                            V{{ $res['version'] }}
                                                            {{ __('Available') }}</a>
                                                    @endif
                                                    <div class="space-x-2">
                                                        <a href="{{ route('admin.provider.currencies.index', $provider->id) }}"
                                                            class="btn btn-info btn-sm" title="Enable/Disable Currencies">
                                                            {{ __('Currencies') }}
                                                        </a>
                                                        <a href="{{ route('admin.provider.markets.index', $provider->id) }}"
                                                            class="btn btn-info btn-sm" title="Enable/Disable Market Pairs">
                                                            {{ __('Markets') }}
                                                        </a>
                                                        <a href="{{ route('admin.provider.balances', $provider->id) }}"
                                                            class="btn btn-info btn-sm"
                                                            title="CHeck balances and debug errors in provider api connection">
                                                            {{ __('Debug') }}
                                                        </a>
                                                        <a href="{{ route('admin.provider.refresh') }}"
                                                            class="btn btn-icon btn-primary btn-sm" title="Refresh">
                                                            <i class="bi bi-arrow-repeat"></i>
                                                        </a>
                                                    </div>
                                                @endif
                                                <a href="{{ route('admin.provider.edit', $provider->id) }}"
                                                    class="btn btn-icon btn-warning btn-sm" title="{{ __('Edit') }}">
                                                    <i class="bi bi-pencil-square"></i>
                                                </a>
                                                @if ($provider->status == 0)
                                                    <button type="button"
                                                        onclick="
                                                    $('#activateModal').find('.provider-name').text('{{ __($provider->name) }}');
                                                    $('#activateModal').find('input[name=id]').val('{{ $provider->id }}');"
                                                        class="btn btn-icon btn-outline-success btn-sm"
                                                        data-modal-toggle="activateModal" title="{{ __('Enable') }}">
                                                        <i class="bi bi-eye"></i>
                                                    </button>
                                                @else
                                                    <span title="{{ __('Disable') }}">
                                                        <button
                                                            type="button"onclick="
                                                        $('#deactivateModal').find('.provider-name').text('{{ __($provider->name) }}');
                                                        $('#deactivateModal').find('input[name=id]').val('{{ $provider->id }}');"
                                                            class="btn btn-icon btn-outline-danger btn-sm"
                                                            data-modal-toggle="deactivateModal">
                                                            <i class="bi bi-eye-slash"></i>
                                                        </button>
                                                    </span>
                                                @endif
                                                @if ($provider->title != 'coinbasepro')
                                                    <a href="{{ route('admin.provider.activater', [$provider->product_id]) }}"
                                                        class="btn btn-success btn-sm ml-1"
                                                        title="Reverify if you license show invalid error">
                                                        {{ __('Re-Verify License') }}
                                                    </a>
                                                @endif
                                            @else
                                                @if ($provider->activated == 0)
                                                    <a href="{{ route('admin.provider.activater', [$provider->product_id]) }}"
                                                        class="btn btn-icon btn-success btn-sm ml-1"
                                                        title="{{ __('Verify License') }}">
                                                        <i class="bi bi-check-lg"></i>
                                                    </a>
                                                @else
                                                    <a href="{{ route('admin.provider.install', [$provider->product_id]) }}"
                                                        class="btn btn-icon btn-dark btn-sm ml-1"
                                                        title="{{ __('Install') }}">
                                                        <i class="bi bi-download"></i>
                                                    </a>
                                                    @if ($provider->title != 'coinbasepro')
                                                        <a href="{{ route('admin.provider.activater', [$provider->product_id]) }}"
                                                            class="btn btn-icon btn-success btn-sm ml-1"
                                                            title="{{ __('Re-Verify License') }}">
                                                            <i class="bi bi-check-lg"></i>
                                                        </a>
                                                    @endif
                                                @endif
                                            @endif
                                        @endif
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                </tr>
                            @endforelse

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Provider Activation Confirmation') }}"
        action="{{ route('admin.provider.activate') }}" submit="{{ __('Activate') }}" id="activateModal" done="reload">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to activate') }} <span class="fw-bold currency-name"></span>
                {{ __('provider') }}?</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Provider Deactivation Confirmation') }}" btn="danger"
        action="{{ route('admin.provider.deactivate') }}" submit="{{ __('Deactivate') }}" id="deactivateModal"
        done="reload">
        <div>
            <input type="hidden" name="id">
            <p>{{ __('Are you sure to deactivate') }} <span class="fw-bold provider-name"></span>
                {{ __('provider') }}?</p>
        </div>
    </x-partials.modals.default-modal>
@endpush
