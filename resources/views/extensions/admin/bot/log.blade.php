@extends('layouts.admin')
@section('content')
    <livewire:ext.bot.bot-log-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Set Profit') }}" action="{{ route('admin.bot.set') }}"
        submit="{{ __('Submit') }}" id="botSet">
        <div>
            <input type="hidden" id="bot_id" name="bot_id">
            <label class="form-control-label h6">Profit Amount</label>
            <div class="input-group">
                <input type="number" class="form-control" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                    id="profit" name="profit" placeholder="Amount" required>
            </div>
        </div>
        <div>
            <label class="form-control-label h6">Profit Calculation</label>
            <div class="flex justify-between items-center space-x-3">
                <select class="form-select" id="type" name="type" required>
                    <option value="" selected disabled="">
                        Choose a type
                    </option>
                    <option value="1">
                        Amount
                    </option>
                    <option value="2">
                        Percentage
                    </option>
                </select>
                <select class="form-select" id="result" name="result" required>
                    <option value="" selected disabled="">
                        Choose a result
                    </option>
                    <option value="1">
                        {{ __('Win') }}
                    </option>
                    <option value="2">
                        {{ __('Lose') }}
                    </option>
                    <option value="3">
                        {{ __('Draw') }}
                    </option>
                </select>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
