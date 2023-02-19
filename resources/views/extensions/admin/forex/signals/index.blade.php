@extends('layouts.admin')

@section('content')
    <livewire:ext.forex.forex-signals-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('New Forex Signal') }}" action="{{ route('admin.forex.signals.store') }}"
        submit="{{ __('Submit') }}" id="newForexSignal">


        <div>
            <label for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Title') }}</label>
            <input type="text" id="title" name="title" aria-label="title" aria-describedby="title"
                value="{{ old('title') }}" required
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
            <div class="justify-start items-top mb-1">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="title">{{ __('Select Image') }}</label>
                <div class="mr-1">
                    <img class="img-thumbnail mb-1" style="max-width: 164px" src="" />
                </div>
                <input class="upload" name="image" type="file" id="image" accept=".png, .jpg, .jpeg" required>
                <p class="mt-1 text-sm text-red-500 dark:text-red-500" id="title">png, jpg, or
                    jpeg
                    (MAX. 64x64px).</p>

            </div>

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

    </x-partials.modals.default-modal>
@endpush

@push('breadcrumb-plugins')
    <button class="btn btn-outline-primary" data-modal-toggle="newForexSignal"><i class="bi bi-plus-lg"></i>
        {{ __('New Signal') }}</button>
@endpush
