@extends('layouts.admin')

@section('content')
<div class="card">
  <div class="card-header flex justify-between items-center">
    <h4 class="card-title">{{ 'Editing ' . $plan->title . ' plan' }}</h4>

  </div>
  <form action="{{ route('admin.forex.investment.update') }}" method="POST" enctype="multipart/form-data"
    id="planUpdate">
    @csrf
    <input type="hidden" name="id" id="id" value="{{ $plan->id }}">
    <div class="card-body">
      <div class="grid gap-5 sm:grid-cols-3">

        <div>
          <label for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Plan Title') }}</label>
          <input type="text" id="title" name="title" aria-label="Plan Title" aria-describedby="title"
            value="{{ $plan->title }}" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="min"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Minimum') }}</label>
          <input type="text" id="min" name="min" aria-label="min" aria-describedby="password" value="{{ $plan->min }}"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="max"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Maximum') }}</label>
          <input type="text" id="max" name="max" aria-label="max" aria-describedby="password" value="{{ $plan->max }}"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="duration"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Duration (Days)') }}</label>
          <input type="text" id="duration" name="duration" aria-label="Duration" aria-describedby="duration"
            value="{{ $plan->duration }}" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="roi"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Return on Investment') }}</label>
          <input type="text" id="roi" name="roi" aria-label="Return on Investment" aria-describedby="roi"
            value="{{ $plan->roi }}" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
            file</label>
          <div class="flex">
            <img class="img-thumbnail mr-3" style="max-width: 64px"
              src="{{ getImage(imagePath()['forex_investment']['path'] . '/' . $plan->image, imagePath()['forex_investment']['path']) }}" />
            <div>
              <input class="upload" aria-describedby="file_input_help" name="image" type="file" id="image"
                accept=".png, .jpg, .jpeg">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
                jpeg
                (MAX. 64x64px).</p>
            </div>
          </div>
        </div>
      </div>


      <div class="grid grid-cols-1 gap-5 my-5">

        <div>
          <label ffor="desc"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ __('Description') }}</label>
          <textarea id="desc" name="desc" aria-describedby="desc" value="{{ $plan->desc }}" rows="3" required
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your description here...">{{ $plan->desc }}</textarea>

        </div>




      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="{{ $plan->is_new }}" @if ($plan->is_new == 1) checked @endif class="sr-only
          peer"
          data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" name="is_new"
          id="is_newNew">
          <div onclick="$('#is_newNew').val($('#is_newNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Featured') }}</span>
        </label>
      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="{{ $plan->status }}" @if ($plan->status == 1) checked @endif class="sr-only
          peer"
          data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" name="status"
          id="statusNew">
          <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
        </label>
      </div>
    </div>

    <div class="card-footer text-end">
      <button type="submit" class="btn btn-success">{{ __('Edit') }}</button>
    </div>
  </form>
</div>
@endsection


@push('breadcrumb-plugins')
<a href="{{ route('admin.forex.investment.index') }}" class="btn btn-outline-primary"><i class="bi bi-chevron-left"></i>
  {{ __('Back') }}</a>
@endpush