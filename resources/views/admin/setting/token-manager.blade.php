@extends('layouts.admin')

@section('content')
    <form action="{{ route('admin.tokens.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="card mb-5">
            <div class="card-body">
                <h4 class="card-title">{{ __('Create API Token') }}</h4>
                <h6 class="card-subtitle text-muted">
                    {{ __('API tokens allow third-party services to authenticate with our application on your behalf.') }}
                </h6>
            </div>
            <div class="card-body space-y-5">

                <div>
                    <label for="title"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Token Name') }}</label>
                    <input type="textn"id="name" type="text" name="name" value="{{ old('name') }}" autofocus
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                </div>


                <!-- Token Permissions -->
                @if (Laravel\Jetstream\Jetstream::hasPermissions())
                    <x-jet-label class="form-label" for="permissions" value="{{ __('Permissions') }}" />


                    <div class="grid grid-cols-3 gap-5">
                        @foreach (Laravel\Jetstream\Jetstream::$permissions as $permission)
                            <div class="form-check space-y-2">
                                <input class="form-check-input" type="checkbox" value="{{ $permission }}"
                                    name="abilities[]">
                                <label class="form-check-label" for="{{ 'create-' . $permission }}">
                                    {{ $permission }}
                                </label>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-success">{{ __('Create') }}</button>
            </div>
        </div>
    </form>

    <!-- Manage API Tokens -->
    <div>
        {{-- <x-jet-action-section>
            <x-slot name="title"> --}}
        <div class="card">
            <div class="card-title">
                <div class="card-header">
                    {{ __('Manage API Tokens') }}
                </div>
            </div>
            <div class="px-6">
                {{ __('You may delete any of the existing tokens if they are no longer needed.') }}</div>
            <div class="card-body space-y-2">
                {{-- </x-slot>

            <x-slot name="description"> --}}
                {{-- </x-slot> --}}

                <!-- API Token List -->
                {{-- <x-slot name="content">
            <div> --}}
                @foreach ($tokens->sortBy('name') as $token)
                    <div class="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg shadow">
                        <div class="flex justify-between items-center">
                            <div class="fw-bolder">
                                {{ $token->name }} @if (isset($token->user))
                                    (<a class="text-blue-500"
                                        href="{{ route('admin.users.detail', $token->user->id) }}">{{ Str::ucfirst($token->user->username) }}</a>)
                                @endif
                            </div>

                            <div class="fw-bolder">
                                {{ $token->token }}
                            </div>

                            <div class="my-1 flex space-x-3">
                                <a href="{{ route('admin.tokens.edit', $token->id) }}">
                                    <button type="submit"
                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {{ __('Edit') }}</button>


                                </a>

                                <form action="{{ route('admin.tokens.destroy', $token->id) }}" method="POST">
                                    @csrf

                                    @method('DELETE')
                                    <button type="submit"
                                        class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{{ __('Delete') }}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        {{-- </div>
        </x-slot>
        </x-jet-action-section> --}}
    </div>
@endsection
