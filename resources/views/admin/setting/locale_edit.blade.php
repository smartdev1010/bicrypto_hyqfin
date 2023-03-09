@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header flex justify-between items-center">
            <h4 class="card-title">{{ $locale->title }} {{ __('Editor') }}</h4>

        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            {{ __('String') }} </th>
                        <th scope="col" class="px-6 py-3">
                            {{ __('Translation') }}
                        </th>

                    </tr>
                </thead>
                <tbody>
                    @foreach ($strings as $key => $item)
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input type="text" disabled readonly class="form-control" value="{{ $key }}">
                            </th>
                            <td class="px-6 py-4">
                                <div class="flex">
                                    <input type="text" class="form-control" name="{{ $key }}"
                                        id="{{ $key }}" aria-describedby="{{ $key }}"
                                        value="{{ $item }}">
                                    <button data-bs-toggle="tooltip" data-bs-placement="top" title="Update"
                                        class="btn btn-outline-success mx-2"
                                        onclick="updateString('{{ $key }}')"><i
                                            class="bi bi-arrow-repeat"></i></button>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div><!-- card end -->
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('New String') }}" action="{{ route('admin.locale.store') }}"
        submit="{{ __('Create') }}" id="new">
        <div class="mb-1">
            <input type="hidden" name="id" value="{{ $locale->id }}">
            <label for="">{{ __('String') }}</label>
            <input type="text" class="form-control form-control-sm" name="string">
        </div>
        <div>
            <label for="">{{ __('Translation') }}</label>
            <input type="text" class="form-control form-control-sm" name="translation">
        </div>
    </x-partials.modals.default-modal>
@endpush

@push('breadcrumb-plugins')
    <div class="space-x-2">
        <button type="button" class="btn btn-outline-success" data-modal-toggle="new" aria-pressed="false"
            autocomplete="off"><i class="bi bi-plus-lg mr-1"></i> {{ __('New') }}</button>
        <a href="{{ route('admin.locale.index') }}" class="btn btn-outline-secondary"><i
                class="bi bi-chevron-left mr-1"></i>
            {{ __('Back') }}</a>
    </div>
@endpush

@section('page-scripts')
    <script>
        "use strict";

        function updateString(key) {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                url: "{{ route('admin.locale.update', $locale->id) }}",
                method: "PUT",
                data: {
                    key: key,
                    value: document.getElementById(key).value
                },
                success: function(response) {
                    notify(response.type, response.message)
                },
                error: function(response) {
                    notify(response.type, response.message)
                }
            });
        }
    </script>
@endsection
