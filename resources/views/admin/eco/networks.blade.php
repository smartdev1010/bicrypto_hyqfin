@extends('layouts.app')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('locale.Networks') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('locale.Network') }}</th>
                                <th scope="col">{{ __('locale.Status') }}</th>
                                <th scope="col">{{ __('locale.Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($networks as $network)
                                <tr>
                                    <td data-label="{{ __('locale.Network') }}">{{ $network->name }}
                                        ({{ $network->chain }})
                                    </td>
                                    <td data-label="{{ __('locale.Status') }}">
                                        @if ($network->status == 1)
                                            <span class="badge bg-success">{{ __('locale.Active') }}</span>
                                        @else
                                            <span class="badge bg-warning">{{ __('locale.Disabled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Action') }}">
                                        <a href="{{ route('admin.eco.networks.tokens.index', $network->chain) }}"
                                            class="btn btn-primary btn-sm">
                                            Tokens
                                        </a>
                                        <a href="{{ route('admin.eco.networks.markets.index', $network->chain) }}"
                                            class="btn btn-primary btn-sm">
                                            Markets
                                        </a>
                                        <a href="{{ route('admin.eco.networks.ledger.index', $network->chain) }}"
                                            class="btn btn-primary btn-sm">
                                            Ledger
                                        </a>
                                        <a href="{{ route('admin.eco.networks.wallet.index', $network->chain) }}"
                                            class="btn btn-primary btn-sm">
                                            Wallets
                                        </a>
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
            <div class="mb-1">{{ paginateLinks($networks) }}</div>
        </div>
    </div>

    {{-- Remove Subscriber MODAL --}}
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('locale.Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.eco.networks.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('locale.network will be removed.') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark"
                            data-bs-dismiss="modal">{{ __('locale.Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('locale.Remove') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
