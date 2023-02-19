@extends('layouts.admin')

@section('content')
    <livewire:ext.bot.bot-timing-table />
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('New Duration') }}" action="{{ route('admin.bot.time.store') }}"
        submit="{{ __('Submit') }}" id="newTime">


        <div>
            <input type="hidden" name="id" id="id" value="{{ $bot->id }}">

            <label for="duration"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Bot Duration') }}</label>
            <input type="number" id="duration" name="duration" aria-label="Bot Duration" aria-describedby="duration" required
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>

        <div>

            <label for="duration_unit"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Duration Unit') }}</label>
            <select name="type" id="type" required
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value="">{{ __('Select Time Unit') }}</option>
                <option value="Min">{{ __('Minute') }}</option>
                <option value="Hour">{{ __('Hour') }}</option>
                <option value="Day">{{ __('Day') }}</option>

            </select>

        </div>
        <div>
            <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" data-on="{{ __('Active') }}"
                    data-off="{{ __('Disabled') }}" name="status" id="statusNew" value="0">
                <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
            </label>
        </div>


    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Edit Duration') }}" action="{{ route('admin.bot.time.update') }}"
        submit="{{ __('Submit') }}" id="editTime">

        <div>
            <input type="hidden" name="id" id="id">
            <label for="duration"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Bot Duration') }}</label>
            <input type="number" id="duration" name="duration" aria-label="Bot Duration" aria-describedby="duration"
                required
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">

            <div class="mt-2">
                <label class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" data-on="{{ __('Active') }}"
                        data-off="{{ __('Disabled') }}" name="status" id="statusEdit">
                    <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
                    </div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
                </label>
            </div>
        </div>

    </x-partials.modals.default-modal>
@endpush

@push('breadcrumb-plugins')
    <a href="{{ route('admin.bot.index') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
    <button class="btn btn-outline-primary" data-modal-toggle="newTime"><i class="bi bi-plus-lg"></i>
        {{ __('Add New Duration') }}</button>
@endpush


@section('page-scripts')
    <script>
        function setTiming(id, duration, status) {
            $('#editTime').find('input[name=id]').val(id);
            $('#editTime').find('input[name=duration]').val(duration);
            $('#editTime').find('#statusEdit').val(status);
            if (status == 1) {
                $('#editTime').find('#statusEdit').attr('checked', true)
            }
        }
    </script>
@endsection
