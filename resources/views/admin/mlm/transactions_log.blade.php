@extends('layouts.app')
@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="card-title">Transactions Log</h4>
                    <div class="card-search"></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">{{ __('locale.ID') }}</th>
                                <th scope="col">{{ __('locale.User') }}</th>
                                <th scope="col">{{ __('locale.Hash') }}</th>
                                <th scope="col">{{ __('locale.Date') }}</th>
                                <th scope="col">{{ __('locale.Status') }}</th>
                                <th scope="col">{{ __('locale.Action') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($transactions as $transaction)
                                <tr>
                                    <td data-label="{{ __('locale.ID') }}">{{ __($loop->iteration) }}</td>
                                    <td class="fw-bold" data-label="{{ __('locale.User') }}">
                                        @if (getUser($transaction->user_id) != null)
                                            <a href="{{ route('admin.users.detail', $transaction->user_id) }}">
                                                {{ getUser($transaction->user_id)->username }}
                                            </a>
                                        @else
                                            <span class="text-danger">Error: Account Removed</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Hash') }}">{{ $transaction->hash }}</td>
                                    <td data-label="Date">{{ showDateTime($transaction->created_at, 'd M, Y h:i:s') }}
                                    </td>
                                    <td data-label="{{ __('locale.Status') }}">
                                        @if ($transaction->status == 0)
                                            <span class="badge bg-primary">{{ __('locale.Pending') }}</span>
                                        @elseif($transaction->status == 1)
                                            <span class="badge bg-success">{{ __('locale.Approved') }}</span>
                                        @elseif($transaction->status == 2)
                                            <span class="badge bg-warning">{{ __('locale.Cancelled') }}</span>
                                        @endif
                                    </td>
                                    <td data-label="{{ __('locale.Action') }}">
                                        @if ($transaction->status != 1)
                                            @if ($transaction->type == 1)
                                                <button type="button" class="btn btn-icon btn-info btn-sm"
                                                    data-bs-toggle="modal" data-bs-target="#deposit_statusUpdate"
                                                    data-id="{{ $transaction->id }}"
                                                    data-user_id="{{ $transaction->user_id }}"
                                                    onclick="$('#deposit_statusUpdate').find('input[name=id]').val($(this).data('id'));
                                                $('#deposit_statusUpdate').find('input[name=user_id]').val($(this).data('user_id'));"><i
                                                        class="bi bi-pencil-square"></i></button>
                                            @else
                                                <button type="button" class="btn btn-icon btn-info btn-sm"
                                                    data-bs-toggle="modal" data-bs-target="#withdraw_statusUpdate"
                                                    data-id="{{ $transaction->id }}"
                                                    data-user_id="{{ $transaction->user_id }}"
                                                    data-wallet_address="{{ $transaction->wallet_address }}"
                                                    data-amount="{{ $transaction->amount }}"
                                                    onclick="$('#withdraw_statusUpdate').find('input[name=id]').val($(this).data('id'));
                                                $('#withdraw_statusUpdate').find('input[name=user_id]').val($(this).data('user_id'));
                                                $('#withdraw_statusUpdate').find('input[name=wallet_address]').val($(this).data('wallet_address'));
                                                $('#withdraw_statusUpdate').find('input[name=amount]').val($(this).data('amount'));"><i
                                                        class="bi bi-pencil-square"></i></button>
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
            <div class="mb-1">{{ paginateLinks($transactions) }}</div>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="deposit_statusUpdate">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0" action="{{ route('admin.mlm.transaction.statusUpdate') }}"
                method="POST" enctype="multipart/form-data">
                @csrf
                <input type="hidden" id="id" name="id">
                <input type="hidden" id="user_id" name="user_id">
                <input type="hidden" id="type" name="type" value="deposit">
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">Set Amount</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <div>
                        <label for="amount" class="form-label">Deposit Amount</label>
                        <div class="input-group">
                            <input type="number" class="form-control" required="" id="amount" name="amount"
                                placeholder="Amount">
                        </div>
                        <small class="text-warning">test transaction hash before approving or adding amount</small>
                    </div>
                    <div class="mt-1">
                        <label class="form-control-label h6">Status</label>
                        <select class="form-select" id="status" name="status">
                            <option value="" disabled="">
                                Choose an option
                            </option>
                            <option value="1">
                                Approve
                            </option>
                            <option value="2">
                                Reject
                            </option>
                        </select>
                    </div>
                    <div class="text-end mt-1">
                        <button class="btn btn-success" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="modal modal-slide-in fade" id="withdraw_statusUpdate">
        <div class="modal-dialog sidebar-sm">
            <form class="add-new-record modal-content pt-0" action="{{ route('admin.mlm.transaction.statusUpdate') }}"
                method="POST" enctype="multipart/form-data">
                @csrf
                <input type="hidden" id="id" name="id">
                <input type="hidden" id="user_id" name="user_id">
                <input type="hidden" id="type" name="type" value="withdraw">
                <div class="modal-header mb-1">
                    <h5 class="modal-title" id="exampleModalLabel">Withdraw Confirmation</h5>
                </div>
                <div class="modal-body flex-grow-1">
                    <div>
                        <label for="wallet_address" class="form-label">Wallet Address</label>
                        <div class="input-group">
                            <input type="text" class="form-control" required="" id="wallet_address"
                                name="wallet_address" placeholder="Wallet Address" readonly>
                        </div>
                        <small class="text-warning">Send to this wallet address</small>
                    </div>
                    <div>
                        <label for="amount" class="form-label">Withdraw Amount</label>
                        <div class="input-group">
                            <input type="text" class="form-control" required="" id="amount" name="amount"
                                placeholder="Amount" readonly>
                        </div>
                        <small class="text-warning">Amount to send</small>
                    </div>
                    <div>
                        <label for="hash" class="form-label">Withdraw Hash</label>
                        <div class="input-group">
                            <input type="text" class="form-control" required="" id="hash" name="hash"
                                placeholder="Transaction Hash">
                        </div>
                        <small class="text-warning">Write the transaction hash after sending to the client wallet</small>
                    </div>
                    <div class="mt-1">
                        <label class="form-control-label h6">Status</label>
                        <select class="form-select" id="status" name="status">
                            <option value="" disabled="">
                                Choose an option
                            </option>
                            <option value="1">
                                Approve
                            </option>
                            <option value="2">
                                Reject
                            </option>
                        </select>
                    </div>
                    <div class="text-end mt-1">
                        <button class="btn btn-success" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
