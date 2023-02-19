@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">{{ __('Blockchains') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Blockchain') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($blockchains as $blockchain)
                                <tr>
                                    <td data-label="{{ __('Blockchain') }}">{{ $blockchain->name }}
                                        ({{ $blockchain->chain }})
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        @if ($blockchain->dev != 1)
                                            @if ($blockchain->status == 1)
                                                <input type="checkbox" data-onstyle="success" data-offstyle="danger"
                                                    data-toggle="toggle" data-on="Active" data-off="Disabled"
                                                    data-width="50%" data-size="mini" name="status" id="status"
                                                    @if ($blockchain->status == 1) checked @endif
                                                    onchange="ChangeStatus({{ $blockchain->id }}, {{ $blockchain->status === 1 ? 0 : 1 }})">
                                            @else
                                                <input type="checkbox" data-onstyle="success" data-offstyle="danger"
                                                    data-toggle="toggle" data-on="Active" data-off="Disabled"
                                                    data-width="50%" data-size="mini" name="status" id="status"
                                                    @if ($blockchain->status == 1) checked @endif
                                                    onchange="ChangeStatus({{ $blockchain->id }}, {{ $blockchain->status === 1 ? 0 : 1 }})">
                                            @endif
                                        @else
                                            <span class="badge bg-secondary">{{ __('In Development') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        @if ($blockchain->dev != 1)
                                            <a href="{{ route('admin.eco.blockchain.wallet.index', $blockchain->chain) }}"
                                                class="btn btn-primary btn-sm">
                                                {{ __('Wallets') }}
                                            </a>
                                            @if (!in_array($blockchain->chain, ['BTC', 'BCH', 'LTC', 'DOGE', 'BNB']))
                                                <a href="{{ route('admin.eco.blockchain.tokens.index', $blockchain->chain) }}"
                                                    class="btn btn-primary btn-sm">
                                                    {{ __('Tokens') }}
                                                </a>
                                            @endif
                                            <a href="{{ route('admin.eco.blockchain.mainnet.tokens.index', $blockchain->chain) }}"
                                                class="btn btn-primary btn-sm">
                                                Mainnet Tokens
                                            </a>
                                            {{-- <a href="{{ route('admin.eco.blockchain.ledger.index', $blockchain->chain) }}"
                                                class="btn btn-primary btn-sm">
                                                {{ __('Ledger') }}
                                            </a> --}}
                                        @endif
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
            <div class="mb-1">{{ paginateLinks($blockchains) }}</div>
        </div>
    </div>

    {{-- Remove Subscriber MODAL --}}
    <div id="removeModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to remove?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.eco.blockchain.remove') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <input type="hidden" name="id" id="id">
                        <p><span class="fw-bold"></span> {{ __('blockchain will be removed.') }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-danger">{{ __('Remove') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection


@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection

@push('script')
    <script>
        "use strict";

        function ChangeStatus(id, status) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.eco.blockchain.update.status') }}",
                method: "POST",
                data: {
                    id: id,
                    status: status,
                },
                success: function(response) {
                    notify(response.type, response.message)
                    location.reload()
                },
                error: function(response) {
                    notify(response.type, response.message)
                }
            });
        }
    </script>
@endpush
