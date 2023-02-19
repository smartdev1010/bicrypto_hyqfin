@extends('layouts.admin')

@section('content')
    <h3 class="title-gradient">
        {{ __('Roles List') }}</h3>
    <p class="mb-2 font-extralight text-sm">
        {{ __('A role provided access to predefined menus and features so that depending') }} <br />
        {{ __('on assigned role an administrator can have access to what he need') }}
    </p>

    <!-- Role cards -->
    <div class="grid-3">
        @foreach ($roles as $role)
            <div class="card">
                <div class="card-body">
                    <div class="flex items-start justify-between">
                        <span class="font-light">{{ __('Total') }} {{ $role->users->count() }}
                            {{ __('users') }}</span>
                        @if ($role->users->count() > 0)
                            <div class="flex -space-x-4 pr-7">
                                @foreach ($role->users as $user)
                                    <img class="absolute  w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                                        src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                        alt="{{ $user->username }}">
                                @endforeach
                            </div>
                        @endif
                    </div>

                    <div class="mt-8">
                        <div class="flex justify-between">
                            <h4 class="role-heading  font-medium">{{ $role->title }}</h4>
                            <div>
                                <a href="{{ route('admin.roles.edit', $role->id) }}"
                                    class="btn btn-sm btn-outline-info">{{ __('Edit') }}
                                </a>
                                @if ($role->id > 2)
                                    <a href="{{ route('admin.roles.del', $role->id) }}"
                                        class="btn btn-sm btn-outline-danger">{{ __('Delete') }}
                                    </a>
                                    {{-- <button data-modal-toggle="deleteRole"
                                        onclick="$('#deleteRole').find('input[name=id]').val({{ $role->id }})"
                                        class="btn btn-sm btn-outline-danger">{{ __('Delete') }}
                                    </button> --}}
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
        <div class="card flex items-center flex-row max-w-xl">
            <div class="object-cover h-auto w-36 rounded-l-lg">
                <img src="../assets/images/illustrations/permission.svg" alt="">
            </div>
            <span class="flex flex-col justify-between p-4 leading-normal my-2 xl:my-4">
                <h5 class="mb-2 font-medium tracking-tight text-gray-900 dark:text-white">
                    {{ __('Add role, if it does not exist') }}</h5>
                <a href="{{ route('admin.roles.create') }}">
                    <span class="btn btn-outline-primary btn-sm">{{ __('Add New Role') }}</span>
                </a>
            </span>
        </div>
    </div>

    <!--/ Role cards -->
    <h3 class="mt-10 title-gradient">{{ __('Total users with their roles') }}</h3>
    <p class="mb-2  font-extralight text-sm">
        {{ __('Find all of your company’s administrator accounts and their associate roles.') }}</p>

    <livewire:user-role-table />
@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Assign Role') }}" action="{{ route('admin.roles.assign') }}"
        submit="Assign" id="assignRole">
        <span>
            <input type="hidden" name="id">
            <label class="form-control-label">{{ __('Role') }}</label>
            <select class="form-select" id="role_id" name="role_id" required>
                <option value="" disabled="" selected>
                    {{ __('Choose an option') }}
                </option>
                @foreach ($roles as $role)
                    <option value="{{ $role->id }}">
                        {{ $role->title }}
                    </option>
                @endforeach
            </select>
        </span>
    </x-partials.modals.default-modal>
    {{-- <x-partials.modals.default-modal title="{{ __('Delete Role') }}" action="{{ route('admin.roles.delete') }}"
        submit="Delete" id="deleteRole">
        <span>
            <input type="hidden" name="id">
            <p>Do you want to delete this role?</p>
        </span>
    </x-partials.modals.default-modal> --}}
@endpush
@push('breadcrumb-plugins')
    <a href="{{ route('admin.permissions.index') }}" class="btn btn-outline-primary items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        {{ __('Permissions') }}</a>
@endpush
