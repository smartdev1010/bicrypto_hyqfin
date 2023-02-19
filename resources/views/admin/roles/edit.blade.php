@extends('layouts.admin')
@section('page-style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css" />
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css" />
    <style>
        .select2-container--classic .select2-results__option,
        .select2-container--default .select2-results__option {
            background-color: #fff !important;
        }
    </style>
@endsection
@section('content')
    <div class="card">
        <div class="card-header">
            {{ trans('global.edit') }} {{ trans('cruds.role.title_singular') }}
        </div>

        <form action="{{ route('admin.roles.update', [$role->id]) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                @method('PUT')
                <div class="form-group {{ $errors->has('title') ? 'has-error' : '' }}">
                    <label for="title">{{ trans('cruds.role.fields.title') }}*</label>
                    <input type="text" id="title" name="title" class="form-control"
                        value="{{ old('title', isset($role) ? $role->title : '') }}" required>
                    @if ($errors->has('title'))
                        <em class="invalid-feedback">
                            {{ $errors->first('title') }}
                        </em>
                    @endif
                    <p class="helper-block">
                        {{ trans('cruds.role.fields.title_helper') }}
                    </p>
                </div>
                <div class="mt-1 form-group {{ $errors->has('permissions') ? 'has-error' : '' }}">
                    <label for="permissions">{{ trans('cruds.role.fields.permissions') }}*
                        <span class="btn btn-info btn-sm select-all">{{ trans('global.select_all') }}</span>
                        <span class="btn btn-info btn-sm deselect-all">{{ trans('global.deselect_all') }}</span></label>
                    <select name="permissions[]" id="permissions" class="form-control select2" multiple="multiple" required>
                        @foreach ($permissions as $id => $permission)
                            <option value="{{ $permission }}"
                                {{ in_array($id, old('permissions', [])) || (isset($role) && $role->permissions->contains($permission)) ? 'selected' : '' }}>
                                {{ $id }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('permissions'))
                        <em class="invalid-feedback">
                            {{ $errors->first('permissions') }}
                        </em>
                    @endif
                    <p class="helper-block">
                        {{ trans('cruds.role.fields.permissions_helper') }}
                    </p>
                </div>
            </div>
            <div class="card-footer">
                <input class="btn btn-outline-success" type="submit" value="{{ trans('global.save') }}">
            </div>
        </form>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.roles.index') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush
@section('page-scripts')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.full.min.js"></script>
    <script>
        $(document).ready(function() {
            window._token = $('meta[name="csrf-token"]').attr('content')

            var allEditors = document.querySelectorAll('.ckeditor');
            for (var i = 0; i < allEditors.length; ++i) {
                ClassicEditor.create(allEditors[i], {
                    removePlugins: ['ImageUpload']
                });
            }
            $('.select2').select2();
            $('.select-all').click(function() {
                let $select2 = $(this).parent().siblings('.select2');
                $select2.find('option').prop('selected', 'selected');
                $select2.trigger('change')
            });
            $('.deselect-all').click(function() {
                let $select2 = $(this).parent().siblings('.select2');
                $select2.find('option').prop('selected', '');
                $select2.trigger('change')
            });
        })
    </script>
@endsection
