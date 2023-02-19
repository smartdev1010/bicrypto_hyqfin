@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            {{ trans('global.create') }} {{ trans('cruds.role.title_singular') }}
        </div>

        <form action="{{ route('admin.roles.store') }}" method="POST" enctype="multipart/form-data" id="formsubmit">
            @csrf
            <div class="card-body">
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
                <div class="form-group {{ $errors->has('permissions') ? 'has-error' : '' }} py-2">
                    <label for="permissions">{{ trans('cruds.role.fields.permissions') }}*
                        <span class="btn btn-info btn-sm select-all">{{ trans('global.select_all') }}</span>
                        <span class="btn btn-info btn-sm deselect-all">{{ trans('global.deselect_all') }}</span></label>
                    <select
                        class="mt-2 select2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="permissions[]" id="permissions" multiple required data-allow-clear="false">
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
            <div class="card-footer text-end">
                <button class="btn btn-outline-success submitt"
                    onclick="
                $('.submitt').prop('disabled', true);
                $('.submitt').addClass('focus:outline-none disabled:opacity-50')
                $('#formsubmit').submit()">{{ trans('global.save') }}</button>
            </div>
        </form>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.roles.index') }}" class="btn btn-primary"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush
@section('page-scripts')
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('.select2').select2();
        });
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
    </script>
@endsection
