@extends('layouts.admin')

@section('content')
    <livewire:ext.forex.forex-table />
@endsection

@push('modals')
    <x-partials.modals.store-modal title="{{ __('New Forex Account') }}" action="{{ route('admin.forex.store') }}"
        submit="{{ __('Submit') }}" id="newForexAccount">
        <div class="grid gap-5 sm:grid-cols-4">
            <div>
                <label for="number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Account No') }}</label>
                <input type="number" id="number" name="number" aria-label="Account number" aria-describedby="number"
                    value="{{ old('number') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Password') }}</label>
                <input type="text" id="password" name="password" aria-label="password" aria-describedby="password"
                    value="{{ old('password') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="balance"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Balance') }}</label>
                <input type="number" id="balance" name="balance" aria-label="MT Balance" aria-describedby="balance"
                    value="{{ old('balance') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="broker"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Broker') }}</label>
                <input type="text" id="broker" name="broker" aria-label="MT Broker" aria-describedby="broker"
                    value="{{ old('broker') }}"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>



            <div>
                <label for="mt_version"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Version') }}</label>
                <select class="form-select" id="mt" name="mt">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <option value="4">
                        MT4
                    </option>
                    <option value="5">
                        MT5
                    </option>
                </select>
            </div>


            <div>
                <label for="signal1_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                    1</label>
                <select class="form-select" id="signal1_id" name="signal1_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    @foreach ($signals as $signal)
                        <option value="{{ $signal->id }}">
                            {{ $signal->title }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label for="signal2_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                    2</label>
                <select class="form-select" id="signal2_id" name="signal2_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    @foreach ($signals as $signal)
                        <option value="{{ $signal->id }}">
                            {{ $signal->title }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label for="signal3_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                    3</label>
                <select class="form-select" id="signal3_id" name="signal3_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    @foreach ($signals as $signal)
                        <option value="{{ $signal->id }}">
                            {{ $signal->title }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label for="signal4_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                    4</label>
                <select class="form-select" id="signal4_id" name="signal4_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    @foreach ($signals as $signal)
                        <option value="{{ $signal->id }}">
                            {{ $signal->title }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div>
                <label for="signal5_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                    5</label>
                <select class="form-select" id="signal5_id" name="signal5_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    @foreach ($signals as $signal)
                        <option value="{{ $signal->id }}">
                            {{ $signal->title }}
                        </option>
                    @endforeach
                </select>
            </div>
        </div>
        <div>
            <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="0" class="sr-only peer" data-on="{{ __('Active') }}"
                    data-off="{{ __('Disabled') }}" name="status" id="statusNew">
                <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)"
                    class="toggle peer">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
            </label>
        </div>


    </x-partials.modals.store-modal>
@endpush

{{-- @push('breadcrumb-plugins')
    <button class="btn btn-outline-primary" data-modal-toggle="newForexAccount"><i class="bi bi-plus-lg"></i>
        {{ __('New Account') }}</button>
@endpush --}}
