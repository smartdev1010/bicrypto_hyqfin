@extends('layouts.admin')
@section('content')
    <div class="card">
        <div class="card-header">
            Edit {{ $sidebar->name }}
        </div>
        <form action="{{ route('admin.sidebar.submenu.update', [$type, $id, $submenu_id]) }}" method="POST"
            enctype="multipart/form-data">
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
                        <div class="input-group">
                            <input type="text" id="icon" name="icon" class=" iconpicker"
                                value="{{ old('icon', isset($sidebar) ? $sidebar->icon : '') }}" required>
                            <span class="selected-icon"></span>
                        </div>
                    </div>
                    <div>
                        <div class="form-group">
                            <label for="permission">{{ trans('cruds.role.fields.permissions') }}*
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
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.sidebar.edit', [$type, $id]) }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush

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
