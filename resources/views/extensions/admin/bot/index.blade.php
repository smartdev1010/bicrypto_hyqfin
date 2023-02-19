@extends('layouts.admin')

@section('content')
<livewire:ext.bot.bot-table />
@endsection

@push('modals')
<x-partials.modals.store-modal title="{{ __('New Bot') }}" action="{{ route('admin.bot.store') }}"
  submit="{{ __('Submit') }}" id="newBot">
  <div class="space-y-2">

    <div class="grid gap-5 sm:grid-cols-3">
      <div>
        <label for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Title') }}</label>
        <input type="text" id="title" name="title" aria-label="Bot Title" aria-describedby="title" required
          value="{{ old('title') }}"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>

      <div>
        <div class="flex justify-between">
          <label for="perc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('APR') }}</label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="perc" name="perc" aria-label="Bot APR" placeholder="Annual Profit Rate" required aria-describedby="perc"
            value="{{ old('perc') }}">
          <span id="perc" for="perc"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <label for="uses"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Uses') }}</label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="uses" name="uses" aria-label="Bot Uses" placeholder="Uses of the bot" required aria-describedby="uses"
            value="{{ old('uses') }}">
          <span id="uses" for="uses"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>

    </div>

    <div>
      <label ffor="desc"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Description') }}</label>
      <textarea id="desc" name="desc" aria-label="Bot Description" aria-describedby="desc" value="{{ old('desc') }}"
        rows="3" required
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your description here...">{{ old('desc') }}</textarea>

    </div>

    <div class="grid gap-5 sm:grid-cols-3">

      <div>
        <div class="flex justify-between">
          <label for="min_profit"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Minimum Profit') }}</label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="min_profit" name="min_profit" aria-label="Minimum Profit" aria-describedby="min_profit"
            value="{{ old('min_profit') }}" required>
          <span id="min_profit" for="min_profit"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <label for="max_profit"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Maximum Profit') }}</label>

        </div>

        <div class="flex">
          <input type="number" required
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="max_profit" name="max_profit" aria-label="Maximum Profit" aria-describedby="max_profit"
            value="{{ old('max_profit') }}">
          <span id="max_profit" for="max_profit"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>



      <div>
        <label for="result_missed"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Result If Missed') }}</label>
        <select class="form-select" id="result_missed" name="result_missed" required>
          <option value="" selected>
            {{ __('Select Result If Missed') }}
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


      <div>
        <div class="flex justify-between">
          <label for="profit_missed"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Profit If Missed') }}</label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="profit_missed" name="profit_missed" aria-label="Maximum Profit" required
            aria-describedby="profit_missed" value="{{ old('profit_missed') }}">
          <span id="profit_missed" for="profit_missed"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>


      <div>
        <label for="min_bot_amount"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Bot Minimum Amount') }}</label>
        <input type="number" id="min_bot_amount" name="min_bot_amount" step="0.00000001"
          value="{{ old('min_bot_amount') }}" required
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>
      <div>
        <label for="max_bot_amount"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Bot Maximum Amount') }}</label>
        <input type="number" id="max_bot_amount" name="max_bot_amount" value="{{ old('max_bot_amount') }}" required
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>


    </div>
    <div>

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
        file</label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help" name="image" type="file" id="image" accept=".png, .jpg, .jpeg">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
        jpeg
        (MAX. 128x128px).</p>

    </div>

    <div>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" data-on="{{ __('Active') }}"
          data-off="{{ __('Disabled') }}" name="is_new" id="is_newEdit">
        <div onclick="$('#is_newEdit').val($('#is_newEdit').val() == 1 ? 0 : 1)" class="toggle peer">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Featured') }}</span>
      </label>
    </div>
    <div>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" data-on="{{ __('Active') }}"
          data-off="{{ __('Disabled') }}" name="status" id="statusEdit">
        <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
      </label>
    </div>
  </div>

</x-partials.modals.store-modal>
@endpush

@push('breadcrumb-plugins')
<button class="btn btn-outline-primary" data-modal-toggle="newBot"><i class="bi bi-plus-lg"></i>
  {{ __('New Bot') }}</button>
@endpush