@extends('layouts.admin')
@section('content')
    <div class="card">
        <div class="card-header">
            Edit {{ $sidebar->name }}
        </div>

        <form action="{{ route('admin.sidebar.update', [$type, $id]) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">

                <div class="grid grid-cols-3 gap-5">
                    <div>
                        <div class="form-group">
                            <label for="name">Title*</label>
                            <input type="text" id="name" name="name" class="form-control"
                                value="{{ old('name', isset($sidebar) ? $sidebar->name : '') }}" required>
                        </div>
                    </div>
                    <div>
                        <label>Icon*</label>
                        <div class="input-group mb-3">
                            <input type="text" id="icon" name="icon" class=" iconpicker"
                                value="{{ old('icon', isset($sidebar) ? $sidebar->icon : '') }}" required>
                            <span class="selected-icon"></span>
                        </div>
                    </div>
                    <div>
                        <div class="form-group">
                            <label for="permission">{{ trans('cruds.role.fields.permissions') }}*</label>
                            <select name="permission" id="permission" class="form-control" required>
                                @foreach ($permissions as $permission)
                                    <option value="{{ $permission->code }}"
                                        @if (isset($sidebar) && isset($sidebar->permission) && $permission->code == $sidebar->permission) selected @endif>
                                        {{ $permission->title }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="flex items-center mb-2">
                        <label class="inline-flex relative items-center cursor-pointer mr-3">
                            <input type="checkbox" value="{{ $sidebar->status }}" class="sr-only peer" data-on="Cover"
                                data-off="Minimal" name="status" id="status"
                                @if ($sidebar->status == 1) checked @endif>
                            <div class="toggle peer" onclick="$('#status').val($('#status').val() == 1 ? 0 : 1)">
                            </div>
                        </label>
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <input class="btn btn-outline-success" type="submit" value="Save">
            </div>
        </form>
    </div>

    @if (isset($sidebar->submenu) && $sidebar->submenu != null)
        <div class="card mt-5">

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {{ __('Title') }} </th>
                            <th scope="col" class="px-6 py-3">
                                {{ __('Icon') }}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {{ __('Status') }}
                            </th>

                            <th scope="col" class="px-6 py-3">
                                {{ __('Action') }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($sidebar->submenu as $key => $submenu)
                            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ $submenu->name }}
                                </th>
                                <td class="px-6 py-4">
                                    <i class="bi bi-{{ $submenu->icon }}"></i>
                                </td>
                                <td class="px-6 py-4">
                                    @if ($submenu->status == 1)
                                        <span class="badge bg-success">{{ __('Active') }}</span>
                                    @else
                                        <span class="badge bg-warning">{{ __('Disabled') }}</span>
                                    @endif
                                </td>

                                <td class="px-6 py-4">
                                    <a href="{{ route('admin.sidebar.submenu.edit', [$type, $id, $key]) }}"
                                        class="btn btn-icon btn-outline-warning btn-sm" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="{{ __('Edit') }}">
                                        <i class="bi bi-pencil-square"></i>
                                    </a>
                                    @if ($submenu->status == 0)
                                        <a class="btn btn-icon btn-outline-success rounded btn-sm" data-bs-toggle="tooltip"
                                            href="{{ route('admin.sidebar.submenu.activate', [$type, $id, $key]) }}"
                                            data-submenu_id="{{ $key }}" data-name="{{ __($submenu->name) }}"
                                            title="{{ __('Enable') }}">
                                            <i class="bi bi-eye"></i>
                                        </a>
                                    @else
                                        <a class="btn btn-icon btn-outline-danger btn-sm" data-bs-toggle="tooltip"
                                            href="{{ route('admin.sidebar.submenu.deactivate', [$type, $id, $key]) }}"
                                            title="{{ __('Disable') }}">
                                            <i class="bi bi-eye-slash"></i>
                                        </a>
                                    @endif
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td class="text-muted text-center" colspan="100%">{{ __($empty_message) }}</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

        </div><!-- card end -->
    @endif
@endsection

@section('page-scripts')
    <script src="/vendors/icons/iconpicker.js"></script>
    <script>
        (async () => {
            const response = await fetch("/data/bootstrap5.json")
            const result = await response.json()
            const iconpicker = new Iconpicker(document.querySelector(".iconpicker"), {
                icons: result,
                showSelectedIn: document.querySelector(".selected-icon"),
                searchable: true,
                selectedClass: "selected",
                containerClass: "my-picker",
                hideOnSelect: true,
                fade: true,
                defaultValue: "{{ isset($sidebar) ? 'bi-' . $sidebar->icon : '' }}",
                valueFormat: val => `bi ${val}`
            });
        })()
    </script>
@endsection


@section('page-style')
    <style>
        .iconpicker-dropdown {
            visibility: hidden;
            opacity: 0;
        }

        .iconpicker-dropdown.show {
            visibility: visible;
            opacity: 1;
        }

        .iconpicker-dropdown ul {
            position: absolute;
            width: 250px;
            height: 200px;
            background: #fff;
            overflow: scroll;
            box-shadow: 0 0 28px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 999;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            left: 0;
            list-style: none;
        }

        .iconpicker-dropdown ul li {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border: 1px solid #b2b2b2 73;
            cursor: pointer;
            margin: 0.1rem;
        }

        .iconpicker-dropdown ul li.selected {
            background-color: #007eff;
            color: #fff;
        }

        .iconpicker-dropdown ul li.hidden {
            display: none;
        }
    </style>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.sidebar.' . $type) }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
