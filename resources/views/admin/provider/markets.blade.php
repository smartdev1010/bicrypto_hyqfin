@extends('layouts.admin')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">{{ __('Markets') }}</h4>

                </div>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Market') }} </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Status') }}
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    {{ __('Action') }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($markets as $pairs)
                                @forelse($pairs as $market)
                                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <span class="fw-bold fs-6">{{ $market->symbol }}</span>
                                        </th>

                                        <td class="px-6 py-4">
                                            @if ($market->status == 1)
                                                <span class="badge bg-success">{{ __('Active') }}</span>
                                            @else
                                                <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                            @endif
                                        </td>
                                        <td class="px-6 py-4">
                                            @if ($market->status == 0)
                                                <button type="button"
                                                    class="btn btn-icon btn-outline-success btn-sm activateBtn"
                                                    onclick="
                                                    $('#activateModal').find('.market-name').text('{{ $market->symbol }}');
                                                    $('#activateModal').find('input[name=symbol]').val('{{ $market->symbol }}');"
                                                    data-modal-toggle="activateModal" title="{{ __('Enable') }}">
                                                    <i class="bi bi-eye"></i>
                                                </button>
                                            @else
                                                <button type="button"
                                                    class="btn btn-icon btn-outline-danger btn-sm deactivateBtn"
                                                    onclick="
                                                    $('#deactivateModal').find('.market-name').text('{{ $market->symbol }}');
                                                    $('#deactivateModal').find('input[name=symbol]').val('{{ $market->symbol }}');"
                                                    data-modal-toggle="deactivateModal" title="{{ __('Disable') }}">
                                                    <i class="bi bi-eye-slash"></i>
                                                </button>
                                            @endif
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                                    </tr>
                                @endforelse
                            @endforeach
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Provider Market Activation Confirmation') }}"
        action="{{ route('admin.provider.market.activate') }}" submit="{{ __('Activate') }}" id="activateModal"
        done="reload">
        <div>
            <input type="hidden" name="symbol">
            <input type="hidden" name="provider_id" value="{{ $id }}">
            <p>{{ __('Are you sure to activate') }} <span class="fw-bold market-name"></span>
                {{ __('market') }}?</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('Provider Market Deactivation Confirmation') }}" btn="danger"
        action="{{ route('admin.provider.market.deactivate') }}" submit="{{ __('Deactivate') }}" id="deactivateModal"
        done="reload">
        <div>
            <input type="hidden" name="symbol">
            <input type="hidden" name="provider_id" value="{{ $id }}">
            <p>{{ __('Are you sure to deactivate') }} <span class="fw-bold market-name"></span>
                {{ __('market') }}?</p>
        </div>
    </x-partials.modals.default-modal>
@endpush

@push('breadcrumb-plugins')
    <a href="{{ route('admin.provider.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
