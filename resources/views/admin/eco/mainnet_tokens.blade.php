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
                    <h4 class="card-title">Mainnet {{ __('Tokens') }}</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('Token') }}</th>
                                <th scope="col">{{ __('Status') }}</th>
                                <th scope="col">{{ __('Withdraw') }}</th>
                                <th scope="col">{{ __('Info') }}</th>
                                <th scope="col">{{ __('Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($tokens as $token)
                                <tr>
                                    <td data-label="{{ __('Token') }}">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img class="avatar-content me-1"
                                                src="{{ getImage('assets/images/cryptoCurrency/' . strtolower($token->symbol) . '.png') }}" />
                                            <div>
                                                <div class="fw-bold">{{ $token->name }} ({{ $token->symbol }})</div>
                                                @if ($token->testnet != null)
                                                    <div><span class="text-danger"> Testnet: </span>{{ $token->testnet }}
                                                    </div>
                                                @else
                                                    <div><span class="text-success"> Mainnet: </span>{{ $token->chain }}
                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </td>
                                    <td data-label="{{ __('Status') }}">
                                        <input type="checkbox" data-onstyle="success" data-offstyle="danger"
                                            data-toggle="toggle" data-on="Active" data-off="Disabled" data-width="100%"
                                            data-size="mini" name="status" id="status"
                                            @if ($token->status == 1) checked @endif
                                            onchange="ChangeStatus({{ $token->id }}, {{ $token->status === 1 ? 0 : 1 }})">
                                    </td>
                                    <td data-label="{{ __('Withdraw') }}">
                                        <div class="fw-bold">{{ __('Minimum Withdraw') }}:
                                            @if ($token->withdraw_min != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_min) }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Maximum Withdraw') }}:
                                            @if ($token->withdraw_max != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_max) }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                        <div class="fw-bold">{{ __('Withdraw Fees') }}:
                                            @if ($token->withdraw_fee != null)
                                                <span class="text-warning">{{ getAmount($token->withdraw_fee) }} %</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Set') }}</span>
                                            @endif
                                        </div>
                                    </td>
                                    <td data-label="Info">
                                        <div class="fw-bold">{{ __('Fees Account') }}:
                                            @if ($fees_accounts->where('symbol', $token->symbol)->first() != null)
                                                <span
                                                    class="text-success">{{ $fees_accounts->where('symbol', $token->symbol)->first()->account_id }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Found') }}</span>
                                            @endif
                                        </div>
                                        {{-- <div class="fw-bold">{{ __('Balance') }}:
                                            @if ($fees_accounts->where('symbol', $token->symbol)->first() != null)
                                                <span
                                                    class="text-success">{{ getAmount(getFeesWallet($fees_accounts->where('symbol', $token->symbol)->first()->wallet_id)->balance) ?? 'Wallet Removed' }}</span>
                                            @else
                                                <span class="text-danger">{{ __('Not Found') }}</span>
                                            @endif
                                        </div> --}}
                                    </td>
                                    <td data-label="{{ __('Action') }}">
                                        @if (!$fees_accounts->where('symbol', $token->symbol)->first() != null)
                                            <div class="mb-1">
                                                <a href="javascript:void(0)"
                                                    onclick="$('#createFeesAccount').modal('show');
                                                    $('#createFeesAccount').find('input[name=symbol]').val($(this).data('symbol'));
                                                    $('#createFeesAccount').find('input[name=postfix]').val($(this).data('postfix'));"
                                                    data-symbol="{{ $token->symbol }}"
                                                    data-postfix="{{ $token->postfix }}" class="btn btn-warning btn-sm">
                                                    <i class="bi bi-gear"></i> {{ __('Create Fees Account') }}
                                                </a>
                                            </div>
                                        @endif

                                        <div class="mb-1">
                                            <a href="javascript:void(0)"
                                                onclick="$('#editWithdraw').modal('show');
                                                    $('#editWithdraw').find('input[name=id]').val($(this).data('id'));"
                                                data-id="{{ $token->id }}" class="btn btn-success btn-sm">
                                                <i class="bi bi-gear"></i> {{ __('Withdraw Settings') }}
                                            </a>
                                        </div>

                                        <div class="mb-1">
                                            @if (!file_exists('assets/images/cryptoCurrency/' . strtolower($token->symbol) . '.png'))
                                                <a onclick="$('#addIcon').modal('show');
                                                    $('#addIcon').find('input[name=symbol]').val($(this).data('symbol'));"
                                                    data-symbol="{{ $token->symbol }}" class="btn btn-info btn-sm">
                                                    <i class="bi bi-upload"></i> {{ __('Add Icon') }}
                                                </a>
                                            @else
                                                <a onclick="$('#addIcon').modal('show');
                                                    $('#addIcon').find('input[name=symbol]').val($(this).data('symbol'));"
                                                    data-symbol="{{ $token->symbol }}" class="btn btn-info btn-sm">
                                                    <i class="bi bi-upload"></i> {{ __('Edit Icon') }}
                                                </a>
                                            @endif
                                        </div>
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
            <div class="mb-1">{{ paginateLinks($tokens) }}</div>
        </div>
    </div>
    <div id="createFeesAccount" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Are you sure want to create fees account?') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="add-new-record modal-content pt-0"
                    action="{{ route('admin.eco.blockchain.tokens.fees.account.create', $network->chain) }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
                    <input type="hidden" name="symbol">
                    <input type="hidden" name="postfix">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Create') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="editWithdraw">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.mainnet.tokens.withdraw.settings', $network->chain) }}"
                method="POST" enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Withdraw Settings') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="id">
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_min">{{ __('Minimum Withdraw') }}</label>
                        <input type="number" class="form-control" name="withdraw_min"min="0" step=".00000001"
                            value="0">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_max">{{ __('Maximum Withdraw') }}</label>
                        <input type="number" class="form-control" name="withdraw_max"min="0" step=".00000001"
                            value="0">
                    </div>
                    <div class="mb-1">
                        <label class="form-label" for="withdraw_fee">{{ __('Withdraw Fees') }}</label>
                        <div class="input-group">
                            <input type="number" class="form-control" name="withdraw_fee" value="1">
                            <span class="input-group-text">%</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Edit') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="addIcon">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0"
                action="{{ route('admin.eco.blockchain.tokens.add.icon', $network->chain) }}" method="POST"
                enctype="multipart/form-data">
                @csrf
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">×</button>
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">{{ __('Upload Token Icon') }}</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <input type="hidden" name="symbol">
                    <div class="d-flex justify-content-start align-items-top mb-1">
                        <div>
                            <input class="form-control" name="image" type="file" id="image"
                                accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary data-submit me-1">{{ __('Upload') }}</button>
                    <button type="reset" class="btn btn-outline-secondary"
                        data-bs-dismiss="modal">{{ __('Cancel') }}</button>
                </div>
            </form>
        </div>
    </div>
@endsection

@push('breadcrumb-plugins')
    {{-- @if ($network->chain == 'ETH')
        <a href="javascript:void(0)" onclick="$('#deploy').modal('show');" class="btn btn-primary"><i
                class="bi bi-plus-lg"></i>
            {{ __('Deploy Token') }}</a>
    @endif
    <a href="javascript:void(0)" onclick="$('#addToken').modal('show');" class="btn btn-primary"><i
            class="bi bi-plus-lg"></i>
        {{ __('Add Token') }}</a> --}}
    <a href="{{ route('admin.eco.blockchain.index') }}" class="btn btn-primary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush

@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection
@push('script')
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

        function ChangeStatus(id, status) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.eco.blockchain.mainnet.tokens.update.status', $network->chain) }}",
                method: "POST",
                data: {
                    id: id,
                    status: status,
                },
                success: function(response) {
                    notify(response.type, response.message)
                },
                error: function(response) {
                    notify(response.type, response.message)
                }
            });
        }
    </script>
@endpush
