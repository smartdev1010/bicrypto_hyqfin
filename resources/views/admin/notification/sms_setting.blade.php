@extends('layouts.admin')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    @include('admin.notification.header')

    <form action="" method="POST">
        @csrf
        <div class="grid xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div class="card">
                <div class="card-body space-y-3">
                    <div class="form-group">
                        <label class="text-lg font-medium text-gray-900 dark:text-white">@lang('Sms Send Method')</label>
                        <select name="sms_method" class="form-control">
                            <option value="clickatell" @if (@$notification->sms_config->name == 'clickatell') selected @endif>
                                @lang('Clickatell')</option>
                            <option value="infobip" @if (@$notification->sms_config->name == 'infobip') selected @endif>
                                @lang('Infobip')
                            </option>
                            <option value="messageBird" @if (@$notification->sms_config->name == 'messageBird') selected @endif>
                                @lang('Message Bird')</option>
                            <option value="nexmo" @if (@$notification->sms_config->name == 'nexmo') selected @endif>
                                @lang('Nexmo')
                            </option>
                            <option value="smsBroadcast" @if (@$notification->sms_config->name == 'smsBroadcast') selected @endif>
                                @lang('Sms Broadcast')</option>
                            <option value="twilio" @if (@$notification->sms_config->name == 'twilio') selected @endif>
                                @lang('Twilio')
                            </option>
                            <option value="textMagic" @if (@$notification->sms_config->name == 'textMagic') selected @endif>
                                @lang('Text Magic')</option>
                            <option value="custom" @if (@$notification->sms_config->name == 'custom') selected @endif>
                                @lang('Custom API')
                            </option>
                        </select>
                    </div>

                    <div>
                        <label class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="{{ @$notification->sms_status }}" class="sr-only peer"
                                data-on="Cover" data-off="Minimal" name="sms_status" id="sms_status"
                                @if (@$notification->sms_status) checked @endif>
                            <div class="toggle peer" onclick="$('#sms_status').val($('#sms_status').val() == 1 ? 0 : 1)">
                            </div>
                            <span
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ __('Status') }}</span>
                        </label>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-success">{{ __('Submit') }}</button>

                </div>
            </div>
            <div class="card card-body space-y-3 configForm" id="infobip">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Infobip Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Username') </label>
                        <input type="text" class="form-control" placeholder="@lang('Username')" name="infobip_username"
                            value="{{ @$notification->sms_config->infobip->username }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Password') </label>
                        <input type="text" class="form-control" placeholder="@lang('Password')" name="infobip_password"
                            value="{{ @$notification->sms_config->infobip->password }}" />
                    </div>
                </div>
            </div>


            <div class="card card-body space-y-3 configForm" id="nexmo">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Nexmo Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('API Key') </label>
                        <input type="text" class="form-control" placeholder="@lang('API Key')" name="nexmo_api_key"
                            value="{{ @$notification->sms_config->nexmo->api_key }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('API Secret') </label>
                        <input type="text" class="form-control" placeholder="@lang('API Secret')" name="nexmo_api_secret"
                            value="{{ @$notification->sms_config->nexmo->api_secret }}" />
                    </div>
                </div>
            </div>
            <div class="card card-body space-y-3 configForm" id="smsBroadcast">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Sms Broadcast Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Username') </label>
                        <input type="text" class="form-control" placeholder="@lang('Username')"
                            name="sms_broadcast_username"
                            value="{{ @$notification->sms_config->sms_broadcast->username }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Password') </label>
                        <input type="text" class="form-control" placeholder="@lang('Password')"
                            name="sms_broadcast_password"
                            value="{{ @$notification->sms_config->sms_broadcast->password }}" />
                    </div>
                </div>
            </div>


            <div class="card card-body space-y-3 configForm" id="twilio">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Twilio Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Account SID') </label>
                        <input type="text" class="form-control" placeholder="@lang('Account SID')" name="account_sid"
                            value="{{ @$notification->sms_config->twilio->account_sid }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Auth Token') </label>
                        <input type="text" class="form-control" placeholder="@lang('Auth Token')" name="auth_token"
                            value="{{ @$notification->sms_config->twilio->auth_token }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('From Number') </label>
                        <input type="text" class="form-control" placeholder="@lang('From Number')" name="from"
                            value="{{ @$notification->sms_config->twilio->from }}" />
                    </div>
                </div>
            </div>
            <div class="card card-body space-y-3 configForm" id="textMagic">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Text Magic Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Username') </label>
                        <input type="text" class="form-control" placeholder="@lang('Username')"
                            name="text_magic_username" value="{{ @$notification->sms_config->text_magic->username }}" />
                    </div>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('Apiv2 Key') </label>
                        <input type="text" class="form-control" placeholder="@lang('Apiv2 Key')" name="apiv2_key"
                            value="{{ @$notification->sms_config->text_magic->apiv2_key }}" />
                    </div>
                </div>
            </div>

            <div class="card card-body space-y-3 configForm" id="clickatell">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Clickatell Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('API Key') </label>
                        <input type="text" class="form-control" placeholder="@lang('API Key')"
                            name="clickatell_api_key" value="{{ @$notification->sms_config->clickatell->api_key }}" />
                    </div>
                </div>
            </div>

            <div class="card card-body space-y-3 configForm" id="messageBird">
                <div>
                    <h6 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Message Bird Configuration')</h6>
                </div>
                <div>
                    <div class="form-group">
                        <label>@lang('API Key') </label>
                        <input type="text" class="form-control" placeholder="@lang('API Key')"
                            name="message_bird_api_key"
                            value="{{ @$notification->sms_config->message_bird->api_key }}" />
                    </div>
                </div>
            </div>


        </div>

        <div class="grid grid-cols-4 gap-5 configForm mt-5" id="custom">
            <div class="card card-body space-y-3">
                <div>
                    <h6 class="text-lg text-center font-medium text-gray-900 dark:text-white">
                        @lang('Custom API')</h6>
                </div>
                <div>
                    <div class="p-4">
                        <label class="text-sm font-medium text-gray-900 dark:text-white">@lang('API URL')
                        </label>
                        <div class="input-group">
                            <span class="input-group-text">
                                <select name="custom_api_method" class="method-select">
                                    <option value="get">@lang('GET')</option>
                                    <option value="post">@lang('POST')</option>
                                </select>
                            </span>
                            <input type="text" class="form-control" name="custom_api_url"
                                value="{{ @$notification->sms_config->custom->url }}" placeholder="@lang('API URL')" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative card card-body space-y-3  overflow-x-auto">
                <table class=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="  text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-l-lg ">
                                {{ __('Short Code') }}
                            </th>
                            <th scope="col" class="px-3 py-3 text-right">
                                {{ __('Description') }}
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row"
                                class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                @{{ message }}
                            </th>
                            <td class="px-6 py-4 text-right">
                                @lang('Message')
                                </th>
                            </td>



                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row"
                                class=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                @{{ number }}
                            </th>
                            <td class="px-6 py-4 text-right">
                                @lang('Number')
                                </th>
                            </td>



                        </tr>

                    </tbody>

                </table>
            </div>



            <div class="card border-dark mb-3">
                <div class="card-header bg-dark flex justify-between">
                    <h5 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Headers')</h5>
                    <button type="button" class="btn btn-sm btn-outline-light float-right addHeader"><i
                            class="la la-fw la-plus"></i>@lang('Add') </button>
                </div>
                <div class="card-body">
                    <div class="headerFields">
                        @for ($i = 0; $i < count($notification->sms_config->custom->headers->name); $i++)
                            <div class="row mt-3">
                                <div class="md:col-span-5">
                                    <input type="text" name="custom_header_name[]" class="form-control"
                                        value="{{ @$notification->sms_config->custom->headers->name[$i] }}"
                                        placeholder="@lang('Headers Name')">
                                </div>
                                <div class="md:col-span-5">
                                    <input type="text" name="custom_header_value[]" class="form-control"
                                        value="{{ @$notification->sms_config->custom->headers->value[$i] }}"
                                        placeholder="@lang('Headers Value')">
                                </div>
                                <div class="md:col-span-2">
                                    <button type="button" class="btn btn-danger btn-block removeHeader h-100"><i
                                            class="bi bi-x-lg"></i></button>
                                </div>
                            </div>
                        @endfor
                    </div>
                </div>
            </div>
            <div class="card border-dark mb-3">
                <div class="card-header bg-dark flex justify-between">
                    <h5 class="text-lg font-medium text-gray-900 dark:text-white">@lang('Body')</h5>
                    <button type="button" class="btn btn-sm btn-outline-light float-right addBody"><i
                            class="la la-fw la-plus"></i>@lang('Add') </button>
                </div>
                <div class="card-body">
                    <div class="bodyFields">
                        @for ($i = 0; $i < count($notification->sms_config->custom->body->name); $i++)
                            <div class="row mt-3">
                                <div class="md:col-span-5">
                                    <input type="text" name="custom_body_name[]" class="form-control"
                                        value="{{ @$notification->sms_config->custom->body->name[$i] }}"
                                        placeholder="@lang('Body Name')">
                                </div>
                                <div class="md:col-span-5">
                                    <input type="text" name="custom_body_value[]"
                                        value="{{ @$notification->sms_config->custom->body->value[$i] }}"
                                        class="form-control" placeholder="@lang('Body Value')">
                                </div>
                                <div class="md:col-span-2">
                                    <button type="button" class="btn btn-danger btn-block removeBody h-100"><i
                                            class="bi bi-x-lg"></i></button>
                                </div>
                            </div>
                        @endfor
                    </div>
                </div>
            </div>

        </div>
    </form>


    </div>
@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Test SMS Setup') }}"
        action="{{ route('admin.settings.mail.sms.test') }}" submit="{{ __('Submit') }}" id="testSMSModal">
        <div>
            <input type="hidden" name="id">
            <div class="form-group">
                <label>@lang('Sent to') </label>
                <input type="text" name="mobile" class="form-control" placeholder="@lang('Mobile')" required>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    <button type="button" data-modal-toggle="testSMSModal" class="btn btn-outline-primary"><i class="bi bi-send"></i>
        @lang('Send Test SMS')</button>
@endpush
@section('page-style')
    <style>
        .method-select {
            padding: 2px 7px;
        }
    </style>
@endsection
@section('page-scripts')
    <script>
        (function($) {
            "use strict";

            var method = '{{ @$notification->sms_config->name }}';

            if (!method) {
                method = 'clickatell';
            }

            smsMethod(method);
            $('select[name=sms_method]').on('change', function() {
                var method = $(this).val();
                smsMethod(method);
            });

            function smsMethod(method) {
                $('.configForm').addClass('hidden');
                if (method != 'php') {
                    $(`#${method}`).removeClass('hidden');
                }
            }

            $('.addHeader').click(function() {
                var html = `
                    <div class="row mt-3">
                        <div class="md:col-span-5">
                            <input type="text" name="custom_header_name[]" class="form-control" placeholder="@lang('Headers Name')">
                        </div>
                        <div class="md:col-span-5">
                            <input type="text" name="custom_header_value[]" class="form-control" placeholder="@lang('Headers Value')">
                        </div>
                        <div class="md:col-span-2">
                            <button type="button" class="btn btn-danger btn-block removeHeader h-100"><i class="bi bi-x-lg"></i></button>
                        </div>
                    </div>
                `;
                $('.headerFields').append(html);

            })
            $(document).on('click', '.removeHeader', function() {
                $(this).closest('.row').remove();
            })

            $('.addBody').click(function() {
                var html = `
                    <div class="row mt-3">
                        <div class="md:col-span-5">
                            <input type="text" name="custom_body_name[]" class="form-control" placeholder="@lang('Body Name')">
                        </div>
                        <div class="md:col-span-5">
                            <input type="text" name="custom_body_value[]" class="form-control" placeholder="@lang('Body Value')">
                        </div>
                        <div class="md:col-span-2">
                            <button type="button" class="btn btn-danger btn-block removeBody h-100"><i class="bi bi-x-lg"></i></button>
                        </div>
                    </div>
                `;
                $('.bodyFields').append(html);

            })
            $(document).on('click', '.removeBody', function() {
                $(this).closest('.row').remove();
            })

            $('select[name=custom_api_method]').val('{{ @$notification->sms_config->custom->method }}');

        })(jQuery);
    </script>
@endsection

@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection
