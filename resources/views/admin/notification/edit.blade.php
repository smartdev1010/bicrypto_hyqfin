@extends('layouts.admin')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    @include('admin.notification.header')

    <form action="{{ route('admin.settings.mail.template.update', $template->id) }}" method="post">
        @csrf
        <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div class="md:col-span-2 xs:col-span-1 lg:col-span-2">

                <div class="@if ($template->push_notification_status) md:col-span-12 @else md:col-span-6 @endif">
                    <div class="card">
                        <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                            <p class=" text-lg font-medium text-gray-900 dark:text-white
                               ">
                                {{ __('Email Template') }}
                            </p>
                        </div>
                        <div class="card-body space-y-3">
                            <div class="grid grid-cols-12 gap-5">
                                <div class="col-span-10">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">@lang('Subject')</label>
                                    <input type="text" class="form-control form-control-lg"
                                        placeholder="@lang('Email subject')" name="subject" value="{{ $template->subj }}"
                                        required />
                                </div>
                                <div class="col-span-2">
                                    <div class="block mb-2 text-sm font-medium text-gray-900 dark:text-whit">
                                        {{ __('Status') }}</div>
                                    <label class="inline-flex relative items-center cursor-pointer mr-3">
                                        <input type="checkbox" value="{{ $template->email_status }}" class="sr-only peer"
                                            data-on="Cover" data-off="Minimal" name="email_status" id="email_status"
                                            @if ($template->email_status) checked @endif>
                                        <div class="toggle peer"
                                            onclick="$('#email_status').val($('#email_status').val() == 1 ? 0 : 1)">
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">@lang('Message')
                                    <span class="text-danger">*</span></label>
                                <textarea id="email_body" name="email_body" placeholder="@lang('Your message using short-codes')">{{ $template->email_body }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="grid grid-cols-2 gap-5">
                    <div>
                        <div class="card">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                   ">
                                    {{ __('SMS Template') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                <div class="flex items-center mb-2">
                                    <label class="inline-flex relative items-center cursor-pointer mr-3">
                                        <input type="checkbox" value="{{ $template->sms_status }}" class="sr-only peer"
                                            data-on="Cover" data-off="Minimal" name="sms_status" id="sms_status"
                                            @if ($template->sms_status) checked @endif>
                                        <div class="toggle peer"
                                            onclick="$('#sms_status').val($('#sms_status').val() == 1 ? 0 : 1)">
                                        </div>
                                    </label>
                                    <span
                                        class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Send SMS') }}</span>
                                </div>
                                <label
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">@lang('Message')</label>
                                <textarea name="sms_body" rows="10" class="form-control" placeholder="@lang('Your message using short-codes')" required>{{ $template->sms_body }}</textarea>
                            </div>
                        </div>
                    </div>
                    @if ($template->push_notification_status == 1)
                        <div class="card">
                            <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                                <p
                                    class=" text-lg font-medium text-gray-900 dark:text-white
                                       ">
                                    {{ __('Push Notification Template') }}
                                </p>
                            </div>
                            <div class="card-body space-y-3">
                                <div class="flex items-center mb-2">
                                    <label class="inline-flex relative items-center cursor-pointer mr-3">
                                        <input type="checkbox" value="{{ $template->push_notification_status }}"
                                            class="sr-only peer" data-on="Cover" data-off="Minimal"
                                            name="push_notification_status" id="push_notification_status"
                                            @if ($template->push_notification_status) checked @endif>
                                        <div class="toggle peer"
                                            onclick="$('#push_notification_status').val($('#push_notification_status').val() == 1 ? 0 : 1)">
                                        </div>
                                    </label>
                                    <span
                                        class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Send Push Notification') }}</span>
                                </div>
                                <div class="form-group">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">@lang('Message')</label>
                                    <textarea name="push_notification_body" rows="10" class="form-control" placeholder="@lang('Your message using short-codes')" required>{{ $template->push_notification_body }}</textarea>
                                </div>
                            </div>
                        </div>
                    @endif
                </div>
            </div>

            <div>
                <button type="submit" class="btn btn-outline-primary w-full mb-1">@lang('Submit')</button>
                <div class="card overflow-hidden">
                    <div class="card-body p-0">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 rounded-l-lg">
                                        {{ __('Short Code') }}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {{ __('Description') }}
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @forelse($template->shortcodes as $shortcode => $key)
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row"
                                            class="short-codes px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <span class="short-codes">@php echo "{{ ". $shortcode ." }}"  @endphp</span>
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ __($key) }}
                                            </th>
                                        </td>

                                    @empty
                                    <tr>
                                        <td colspan="100%" class="text-muted text-center">{{ __($emptyMessage) }}
                                        </td>
                                    </tr>
                                @endforelse
                            </tbody>

                        </table>
                    </div>
                </div><!-- card end -->
                <h6 class="mt-4 mb-2">@lang('Global Short Codes')</h6>
                <div class="card overflow-hidden">
                    <div class="card-body p-0">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 rounded-l-lg">
                                        {{ __('Short Code') }}
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        {{ __('Description') }}
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($notification->global_shortcodes as $shortCode => $codeDetails)
                                    <tr class="bg-white dark:bg-gray-800">
                                        <th scope="row"
                                            class="short-codes px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <span class="short-codes">@{{ @php echo $shortCode @endphp }}</span>
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ __($codeDetails) }}
                                            </th>
                                        </td>
                                @endforeach
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection


@push('breadcrumb-plugins')
    <a href="{{ route('admin.settings.mail.templates') }}" class="btn btn-outline-secondary"><i
            class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush

@section('page-scripts')
    <script src="https://cdn.tiny.cloud/1/{{ getGen()->tinymce }}/tinymce/6/tinymce.min.js" referrerpolicy="origin">
    </script>
    <script>
        $(function() {
            tinymce.init({
                selector: 'textarea#email_body',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | code',
            });
        });
    </script>
@endsection

@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection
