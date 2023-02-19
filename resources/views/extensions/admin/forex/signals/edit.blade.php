@extends('layouts.admin')

@section('content')
    <form action="{{ route('admin.forex.signals.update') }}" method="POST" enctype="multipart/form-data" id="signalUpdate">
        @csrf
        <div class="card">
            <div class="card-header flex justify-between items-center">
                <h4 class="card-title">{{ 'Editing ' . $signal->title . ' signal' }}</h4>
            </div>
            <input type="hidden" name="id" id="id" value="{{ $signal->id }}">
            <input type="hidden" name="status" id="status" value="{{ $signal->status }}">
            <div class="card-body space-y-5">
                <div>
                    <label class="form-label" for="title">{{ __('Title') }}</label>
                    <input type="text" class="form-control" id="title" name="title" aria-label="title" required
                        aria-describedby="title" value="{{ $signal->title }}">
                </div>
                <div>
                    <label class="form-label" for="image">{{ __('Select Image') }}</label>
                    <div class="flex items-center mt-2">
                        <img class="img-thumbnail mr-5"
                            src="{{ getImage(imagePath()['signal']['path'] . '/' . $signal->image, imagePath()['signal']['path']) }}" />
                        <input class="upload" name="image" type="file" id="image" required
                            accept=".png, .jpg, .jpeg" />
                    </div>
                </div>
                <div>
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="{{ $signal->status }}" {{ $signal->status == 1 ? 'checked' : '' }}
                            class="sr-only peer" data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}"
                            name="status" id="statusEdit">
                        <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
                    </label>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-outline-success" type="submit"><i class="bi bi-pencil-square"></i>
                    {{ __('Edit') }}
                </button>
            </div>
        </div>
    </form>
@endsection


@push('breadcrumb-plugins')
    <a href="{{ route('admin.forex.signals.index') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush
