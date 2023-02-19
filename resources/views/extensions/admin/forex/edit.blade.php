@extends('layouts.admin')

@section('content')
    <form action="{{ route('admin.forex.update') }}" method="POST" enctype="multipart/form-data" id="accountUpdate">
        @csrf
        <div class="card">
            <div class="card-header flex justify-between items-center">
                <h4 class="card-title">Editing {{ $account->user !== null ? $account->user->username : '' }} account
                </h4>
            </div>
            <div class="card-body">
                <input type="hidden" name="id" id="id" value="{{ $account->id }}">

                <div class="grid gap-5 sm:grid-cols-4">
                    <div>
                        <label for="number"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Account No') }}</label>
                        <input type="number" id="number" name="number" aria-label="Account number"
                            aria-describedby="number" value="{{ $account->number }}" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>

                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Password') }}</label>
                        <input type="text" id="password" name="password" aria-label="password"
                            aria-describedby="password" value="{{ $account->password }}" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>

                    <div>
                        <label for="balance"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Balance') }}</label>
                        <input type="number" id="balance" name="balance" aria-label="MT Balance"
                            aria-describedby="balance" value="{{ $account->balance }}" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>

                    <div>
                        <label for="broker"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Broker') }}</label>
                        <input type="text" id="broker" name="broker" aria-label="MT Broker" aria-describedby="broker"
                            value="{{ $account->broker }}" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>

                    <div>
                        <label for="mt"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('MT Version') }}</label>
                        <select class="form-select" id="mt" name="mt" required>
                            <option value="" {{ $account->mt == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            <option value="4" {{ $account->mt == 4 ? 'selected' : '' }}>
                                MT4
                            </option>
                            <option value="5" {{ $account->mt == 5 ? 'selected' : '' }}>
                                MT5
                            </option>
                        </select>
                    </div>


                    <div>
                        <label for="signal1_id"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Select Signal') }}
                            1</label>
                        <select class="form-select" id="signal1_id" name="signal1_id">
                            <option value="{{ $account->signal1_id }}"
                                {{ $account->signal1_id == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            @foreach ($signals as $signal)
                                <option value="{{ $signal->id }}"
                                    {{ $account->signal1_id == $signal->id ? 'selected' : '' }}>
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
                            <option value="{{ $account->signal2_id }}"
                                {{ $account->signal2_id == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            @foreach ($signals as $signal)
                                <option value="{{ $signal->id }}"
                                    {{ $account->signal2_id == $signal->id ? 'selected' : '' }}>
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
                            <option value="{{ $account->signal3_id }}"
                                {{ $account->signal3_id == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            @foreach ($signals as $signal)
                                <option value="{{ $signal->id }}"
                                    {{ $account->signal3_id == $signal->id ? 'selected' : '' }}>
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
                            <option value="{{ $account->signal4_id }}"
                                {{ $account->signal4_id == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            @foreach ($signals as $signal)
                                <option value="{{ $signal->id }}"
                                    {{ $account->signal4_id == $signal->id ? 'selected' : '' }}>
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
                            <option value="{{ $account->signal5_id }}"
                                {{ $account->signal5_id == null ? 'selected' : '' }} disabled="">
                                Choose a version
                            </option>
                            @foreach ($signals as $signal)
                                <option value="{{ $signal->id }}"
                                    {{ $account->signal5_id == $signal->id ? 'selected' : '' }}>
                                    {{ $signal->title }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                </div>

                <div class="mt-5">
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="{{ $account->status }}"
                            @if ($account->status == 1) checked @endif class="sr-only peer"
                            data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" name="status"
                            id="statusEdit">
                        <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
                    </label>
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-success">
                    {{ __('Edit') }}</button>

            </div>
        </div>
    </form>
@endsection


@push('breadcrumb-plugins')
    <a href="{{ route('admin.forex.index') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush
