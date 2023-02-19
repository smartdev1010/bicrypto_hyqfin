@extends('layouts.admin')

@section('content')
    @include('admin.notification.header')

    <div class="card">
        <form action="" method="POST">
            @csrf
            <div class="card-body">
                <div class="form-group">
                    <label class="mb-2">@lang('Email Send Method')</label>
                    <select name="email_method" class="form-control">
                        <option value="php" @if (@$notification->mail_config->name == 'php') selected @endif>@lang('PHP Mail')
                        </option>
                        <option value="smtp" @if (@$notification->mail_config->name == 'smtp') selected @endif>@lang('SMTP')
                        </option>
                        <option value="sendgrid" @if (@$notification->mail_config->name == 'sendgrid') selected @endif>@lang('SendGrid API')
                        </option>
                        <option value="mailjet" @if (@$notification->mail_config->name == 'mailjet') selected @endif>@lang('Mailjet API')
                        </option>
                    </select>
                </div>
                <div class="mt-5 hidden configForm" id="smtp">
                    <div>
                        <h6 class="mb-2">@lang('SMTP Configuration')</h6>
                    </div>
                    <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                        <div>
                            <div class="form-group">
                                <label>@lang('Host') </label>
                                <input type="text" class="form-control" placeholder="e.g. @lang('smtp.googlcom')"
                                    name="host" value="{{ @$notification->mail_config->host ?? '' }}" />
                            </div>
                        </div>
                        <div>
                            <div class="form-group">
                                <label>@lang('Port') </label>
                                <input type="text" class="form-control" placeholder="@lang('Available port')" name="port"
                                    value="{{ @$notification->mail_config->port ?? '' }}" />
                            </div>
                        </div>
                        <div>
                            <div class="form-group">
                                <label>@lang('Encryption')</label>
                                <select class="form-control" name="enc">
                                    <option value="ssl" @if (@$notification->mail_config->enc == 'ssl') selected @endif>
                                        @lang('SSL')
                                    </option>
                                    <option value="tls" @if (@$notification->mail_config->enc == 'tls') selected @endif>
                                        @lang('TLS')</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="form-group">
                                <label>@lang('Username') </label>
                                <input type="text" class="form-control" placeholder="@lang('Normally your email') address"
                                    name="username" value="{{ @$notification->mail_config->username ?? '' }}" />
                            </div>
                        </div>
                        <div>
                            <div class="form-group">
                                <label>@lang('Password') </label>
                                <input type="text" class="form-control" placeholder="@lang('Normally your email password')" name="password"
                                    value="{{ @$notification->mail_config->password ?? '' }}" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 hidden configForm" id="sendgrid">
                    <div>
                        <h6 class="mb-2">@lang('SendGrid API Configuration')</h6>
                    </div>
                    <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                        <div class="form-group ">
                            <label>@lang('App Key') </label>
                            <input type="text" class="form-control" placeholder="@lang('SendGrid App key')" name="appkey"
                                value="{{ @$notification->mail_config->appkey ?? '' }}" />
                        </div>
                    </div>
                </div>
                <div class="row mt-5 hidden configForm" id="mailjet">
                    <div>
                        <h6 class="mb-2">@lang('Mailjet API Configuration')</h6>
                    </div>
                    <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                        <div>
                            <div class="form-group">
                                <label>@lang('Api Public Key') </label>
                                <input type="text" class="form-control" placeholder="@lang('Mailjet Api Public Key')"
                                    name="public_key" value="{{ @$notification->mail_config->public_key ?? '' }}" />
                            </div>
                        </div>
                        <div>
                            <div class="form-group">
                                <label>@lang('Api Secret Key') </label>
                                <input type="text" class="form-control" placeholder="@lang('Mailjet Api Secret Key')"
                                    name="secret_key" value="{{ @$notification->mail_config->secret_key ?? '' }}" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-outline-primary">@lang('Submit')</button>
            </div>
        </form>


    </div>
@endsection

@push('modals')
    <x-partials.modals.default-modal title="{{ __('Test Email Setup') }}" action="{{ route('admin.settings.mail.test') }}"
        submit="{{ __('Submit') }}" id="testMailModal">
        <div>
            <input type="hidden" name="id">
            <div class="form-group">
                <label>@lang('Sent to') </label>
                <input type="text" name="email" class="form-control" required placeholder="@lang('Email Address')">
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@push('breadcrumb-plugins')
    <button type="button" data-modal-toggle="testMailModal" class="btn btn-outline-primary"><i class="bi bi-send"></i>
        @lang('Send Test Mail')</button>
@endpush
@section('page-scripts')
    <script>
        (function($) {
            "use strict";

            var method = '{{ @$notification->mail_config->name }}';
            emailMethod(method);
            $('select[name=email_method]').on('change', function() {
                var method = $(this).val();
                emailMethod(method);
            });

            function emailMethod(method) {
                $('.configForm').addClass('hidden');
                if (method != 'php') {
                    $(`#${method}`).removeClass('hidden');
                }
            }

        })(jQuery);
    </script>
@endsection
