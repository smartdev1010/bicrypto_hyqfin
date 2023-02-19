@extends('layouts.admin')

@section('content')
    @include('admin.notification.header')

    <div class="card mb-5">
        <form action="{{ route('admin.settings.mail.push.update') }}" method="POST">
            @csrf
            <div class="card-body">
                <div class="flex items-center mb-2">
                    <label class="inline-flex relative items-center cursor-pointer mr-3">
                        <input type="checkbox" value="{{ @$notification->push_status }}" class="sr-only peer" data-on="Cover"
                            data-off="Minimal" name="push_status" id="push_status"
                            @if (@$notification->push_status) checked @endif>
                        <div class="toggle peer" onclick="$('#push_status').val($('#push_status').val() == 1 ? 0 : 1)">
                        </div>
                    </label>
                    <span
                        class="text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Send Push Notification') }}</span>
                </div>
                <div class="grid grid-cols-2 gap-5">
                    <div class="form-group">
                        <label class="text-lg font-medium text-gray-900 dark:text-white">@lang('OneSignal APP ID')
                        </label>
                        <input type="text" class="form-control" placeholder="@lang('OneSignal APP ID')" name="ONESIGNAL_APP_ID"
                            value="{{ getenv('ONESIGNAL_APP_ID') ?? '' }}" />
                    </div>
                    <div class="form-group">
                        <label class="text-lg font-medium text-gray-900 dark:text-white">@lang('OneSignal Rest API Key')
                        </label>
                        <input type="text" class="form-control" placeholder="@lang('OneSignal Rest API Key')"
                            name="ONESIGNAL_REST_API_KEY" value="{{ getenv('ONESIGNAL_REST_API_KEY') ?? '' }}" />
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-success">{{ __('Submit') }}</button>
            </div>
        </form>
    </div>
    <div class="card">
        <h4 class="text-lg font-medium text-gray-900 dark:text-white p-4">Guide</h4>

        <ul class="max-w-full space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 p-4">
            <li>Register An Account <a href="https://dashboard.onesignal.com/apps/">Onesignal</a></li>
            <li>Create an app</li>
            <li>Enter Name of your app or website</li>
            <li>Select Web</li>
            <li>Select Typical Site</li>
            <li>Enter SITE NAME , SITE URL , </li>
            <li>If you have ssl and using secure https then select AUTO RESUBSCRIBE (HTTPS
                ONLY)</li>
            <li>upload your icon in DEFAULT ICON URL</li>
            <li>if your site not on https then enable My site is not fully HTTPS and write a
                label</li>
            <li>Add Prompt (we suggest using bell and hide if subscribed)</li>
            <li>Set a Welcome Notification</li>
            <li>if you have safari cert then enable SAFARI CERTIFICATE and add it to have
                notification for apple devices
            </li>
            <li>Click save</li>
            <li>Go to app > settings > key and ID</li>
            <li>Copy the info from there to these 2 inputs an save</li>
        </ul>

    </div>
@endsection
