@extends('layouts.admin')
@section('content')
    <div class="row">
        <div class="md:col-span-12">
            <div class="card">
                <form action="{{ route('admin.email.template.setting') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col mb-1 md:col-span-6">
                                <label class="mb-1 h6">{{ __('Email Send Method') }}</label>
                                <select name="email_method" class="form-control">
                                    <option value="php" @if ($general_setting->mail_config->name == 'php') selected @endif>
                                        {{ __('PHP Mail') }}</option>
                                    <option value="smtp" @if ($general_setting->mail_config->name == 'smtp') selected @endif>
                                        {{ __('SMTP') }}</option>
                                    <option value="sendgrid" @if ($general_setting->mail_config->name == 'sendgrid') selected @endif>
                                        {{ __('SendGrid API') }}</option>
                                    <option value="mailjet" @if ($general_setting->mail_config->name == 'mailjet') selected @endif>
                                        {{ __('Mailjet API') }}</option>
                                </select>
                            </div>
                            <div class="col md:col-span-6 text-end">
                                <h6 class="mb-1">&nbsp;</h6>
                                <button type="button" data-bs-target="#testMailModal" data-bs-toggle="modal"
                                    class="btn btn-info">{{ __('Send Test Mail') }}</button>
                            </div>
                        </div>
                        <div class="row d-none configForm" id="smtp">
                            <div class="md:col-span-12">
                                <h6 class="mb-2">{{ __('SMTP Configuration') }}</h6>
                            </div>
                            <div class="col md:col-span-4">
                                <label class="fw-bold">{{ __('Host') }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control"
                                    placeholder="e.g. {{ __('smtp.googlemail.com') }}" name="host"
                                    value="{{ $general_setting->mail_config->host ?? '' }}" />
                            </div>
                            <div class="col md:col-span-4">
                                <label class="fw-bold">{{ __('Port') }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="{{ __('Available port') }}"
                                    name="port" value="{{ $general_setting->mail_config->port ?? '' }}" />
                            </div>
                            <div class="col md:col-span-4">
                                <label class="fw-bold">{{ __('Encryption') }}</label>
                                <select class="form-control" name="enc">
                                    <option value="ssl">{{ __('SSL') }}</option>
                                    <option value="tls">{{ __('TLS') }}</option>
                                </select>
                            </div>
                            <div class="col md:col-span-6">
                                <label class="fw-bold">{{ __('Username') }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control"
                                    placeholder="{{ __('Normally your email') }} address" name="username"
                                    value="{{ $general_setting->mail_config->username ?? '' }}" />
                            </div>
                            <div class="col md:col-span-6">
                                <label class="fw-bold">{{ __('Password') }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control"
                                    placeholder="{{ __('Normally your email password') }}" name="password"
                                    value="{{ $general_setting->mail_config->password ?? '' }}" />
                            </div>
                        </div>
                        <div class="row d-none configForm" id="sendgrid">
                            <div class="md:col-span-12">
                                <h6 class="mb-2">{{ __('SendGrid API Configuration') }}</h6>
                            </div>
                            <div class="col md:col-span-12">
                                <label>{{ __('APP KEY') }} <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="{{ __('SendGrid app key') }}"
                                    name="appkey" value="{{ $general_setting->mail_config->appkey ?? '' }}" />
                            </div>
                        </div>
                        <div class="row d-none configForm" id="mailjet">
                            <div class="md:col-span-12">
                                <h6 class="mb-2">{{ __('Mailjet API Configuration') }}</h6>
                            </div>
                            <div class="col md:col-span-6">
                                <label class="fw-bold">{{ __('API PUBLIC KEY') }} <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="{{ __('Mailjet API PUBLIC KEY') }}"
                                    name="public_key" value="{{ $general_setting->mail_config->public_key ?? '' }}" />
                            </div>
                            <div class="col md:col-span-6">
                                <label class="fw-bold">{{ __('API SECRET KEY') }} <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control" placeholder="{{ __('Mailjet API SECRET KEY') }}"
                                    name="secret_key" value="{{ $general_setting->mail_config->secret_key ?? '' }}" />
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">{{ __('Update') }}</button>
                    </div>
                </form>
            </div><!-- card end -->
        </div>


    </div>


    {{-- TEST MAIL MODAL --}}
    <div id="testMailModal" class="modal fade text-start" tabindex="-1" aria-hidden="true" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ __('Test Mail Setup') }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="{{ route('admin.email.template.sendTestMail') }}" method="POST">
                    @csrf
                    <input type="hidden" name="id">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col md:col-span-12">
                                <label>{{ __('Sent to') }} <span class="text-danger">*</span></label>
                                <input type="text" name="email" class="form-control"
                                    placeholder="{{ __('Email Address') }}">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">{{ __('Close') }}</button>
                        <button type="submit" class="btn btn-success">{{ __('Send') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection


@push('script')
    <script>
        $(function() {
            "use strict";
            $('select[name=email_method]').on('change', function() {
                var method = $(this).val();
                $('.configForm').addClass('d-none');
                if (method != 'php') {
                    $(`#${method}`).removeClass('d-none');
                }
            }).change();

        });
    </script>
@endpush
