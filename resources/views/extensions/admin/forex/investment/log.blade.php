@extends('layouts.admin')
@section('content')
<livewire:ext.forex.forex-investment-log-table />
@endsection

@push('modals')
<x-partials.modals.default-modal title="{{ __('Set Profit') }}" action="{{ route('admin.forex.investment.set') }}"
  submit="Adjust" id="forexinvestmentSet">
  <div>
    <input type="hidden" id="log_id" name="log_id">
    <label class="form-control-label h6">Profit Amount</label>
    <input type="number" class="form-control" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')" required
      id="profit" name="profit" placeholder="Profit Amount">
  </div>
  <div><label class="form-control-label h6">Profit Calculation</label>
    <select class="form-select" id="type" name="type" required>
      <option value="" selected>
        Choose an option
      </option>
      <option value="1">
        Amount
      </option>
      <option value="2">
        Percentage
      </option>
    </select>
  </div>
  <div>
    <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Result') }}</label>
    <select class="form-select" id="result" name="result" required>
      <option value="" selected>
        {{ __('Select Result') }}
      </option>
      <option value="4">
        {{ __('Win') }}
      </option>
      <option value="5">
        {{ __('Lose') }}
      </option>
      <option value="6">
        {{ __('Draw') }}
      </option>
    </select>
  </div>
</x-partials.modals.default-modal>
@endpush