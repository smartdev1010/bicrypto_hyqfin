@extends('layouts.admin')
@section('content')
<livewire:ext.mlm.transactions-log-table />
@endsection
@push('modals')
<x-partials.modals.default-modal title="Deposit Confirmation" action="{{ route('admin.mlm.transaction.statusUpdate') }}"
  submit="Submit" id="deposit_statusUpdate">

  <div>
    <input type="hidden" id="id" name="id">
    <input type="hidden" id="user_id" name="user_id">
    <input type="hidden" id="type" name="type" value="deposit">
    <label for="amount" class="form-label">{{ __('Deposit Amount') }}</label>
    <input type="number" class="form-control" id="amount" name="amount" placeholder="Amount" required>
    <small class="text-warning">{{ __('test transaction hash before approving or adding amount') }}</small>
  </div>
  <div class="mt-1">
    <label class="form-control-label h6">Status</label>
    <select class="form-select" id="status" name="status" required>
      <option value="" selected>
        {{ __('Choose an option') }}
      </option>
      <option value="1">
        {{ __('Approve') }}
      </option>
      <option value="2">
        {{ __('Reject') }}
      </option>
    </select>
  </div>
</x-partials.modals.default-modal>
<x-partials.modals.default-modal title="Withdraw Confirmation"
  action="{{ route('admin.mlm.transaction.statusUpdate') }}" submit="Submit" id="withdraw_statusUpdate">

  <div>
    <input type="hidden" id="id" name="id">
    <input type="hidden" id="user_id" name="user_id">
    <input type="hidden" id="type" name="type" value="withdraw">
    <label for="wallet_address" class="form-label">{{ __('Wallet Address') }}</label>
    <input type="text" class="form-control" id="wallet_address" name="wallet_address" placeholder="Wallet Address"
      readonly>
    <small class="text-warning">{{ __('Send to this wallet address') }}</small>
  </div>
  <div>
    <label for="amount" class="form-label">{{ __('Withdraw Total Amount') }}</label>
    <input type="text" class="form-control" id="amount" name="amount" placeholder="Amount" readonly>
    <small class="text-warning">{{ __('Total BV requested for withdrawal') }}</small>
  </div>
  <div>
    <label for="amountosend" class="form-label">{{ __('Withdraw Amount To Be Paid') }}</label>
    <input type="text" class="form-control" id="amountosend" name="amountosend" placeholder="Amount" readonly>
    <small class="text-warning">{{ __('Amount to send') }}</small>
  </div>
  <div>
    <label for="hash" class="form-label">{{ __('Withdraw Hash') }}</label>
    <input type="text" class="form-control" required id="hash" name="hash" placeholder="Transaction Hash">
    <small class="text-warning">{{ __('Write the transaction hash after sending to the client wallet') }}</small>
  </div>
  <div class="mt-1">
    <label class="form-control-label h6">{{ __('Status') }}</label>
    <select class="form-select" id="status" name="status" required>
      <option value="" selected>
        {{ __('Choose an option') }}
      </option>
      <option value="1">
        {{ __('Approve') }}
      </option>
      <option value="2">
        {{ __('Reject') }}
      </option>
    </select>
  </div>
</x-partials.modals.default-modal>
@endpush