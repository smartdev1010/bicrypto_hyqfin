@extends('layouts.admin')

@section('content')
<livewire:ext.forex.forex-investment-table />
@endsection

@push('modals')
<x-partials.modals.store-modal title="{{ __('New Investment Plan') }}"
  action="{{ route('admin.forex.investment.store') }}" submit="{{ __('Submit') }}" id="newForexInvestment">


  <div class="grid gap-5 sm:grid-cols-3">
    <div>
      <label for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Plan Title') }}</label>
      <input type="text" id="title" name="title" aria-label="Plan Title" aria-describedby="title"
        value="{{ old('title') }}" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="min" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Minimum') }}</label>
      <input ype="number" id="min" name="min" aria-label="min" aria-describedby="password" value="{{ old('min') }}"
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>

    <div>
      <label for="max" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Maximum') }}</label>
      <input type="number" id="max" name="max" aria-label="max" aria-describedby="password" value="{{ old('max') }}"
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="duration"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Duration (Days)') }}</label>
      <input ype="number" id="duration" name="duration" aria-label="Duration" aria-describedby="duration"
        value="{{ old('duration') }}" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="roi"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Return on Investment') }}</label>
      <input ype="number" id="roi" name="roi" aria-label="Return on Investment" aria-describedby="roi"
        value="{{ old('roi') }}" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
        file</label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help" name="image" type="file" id="image" accept=".png, .jpg, .jpeg">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
        jpeg
        (MAX. 64x64px).</p>

    </div>

  </div>

  <div class="grid gap-5 sm:grid-cols-1">
    <div>
      <label ffor="desc"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Description') }}</label>
      <textarea id="desc" name="desc" aria-label="Bot Description" aria-describedby="desc" value="{{ old('desc') }}"
        required rows="3"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your description here...">{{ old('desc') }}</textarea>

    </div>
    <div>

      <div class="mb-2">
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="0" class="sr-only peer" data-on="{{ __('Active') }}"
            data-off="{{ __('Disabled') }}" name="is_new" id="is_newNew">
          <div onclick="$('#is_newNew').val($('#is_newNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Featured') }}</span>
        </label>
      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="0" class="sr-only peer" data-on="{{ __('Active') }}"
            data-off="{{ __('Disabled') }}" name="status" id="statusNew">
          <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
        </label>
      </div>
    </div>
  </div>

</x-partials.modals.store-modal>
@endpush

@push('breadcrumb-plugins')
<button class="btn btn-outline-primary" data-modal-toggle="newForexInvestment"><i class="bi bi-plus-lg"></i>
  {{ __('New Investment Plan') }}</button>
@endpush