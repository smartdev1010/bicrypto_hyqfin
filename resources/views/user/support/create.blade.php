@extends('layouts.user')
@section('content')
    <div class=" my-2 text-end">
        <a href="/app/support" class="btn btn-outline-secondary">{{ __('Back') }}</a>
    </div>
    <div class="card">
        <form class="message__chatbox__form row" action="{{ route('user.ticket.store') }}" method="post"
            enctype="multipart/form-data" onsubmit="return submitUserForm();">
            @csrf
            <div class="card-body space-y-5">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2">
                    <div class="">
                        <label for="name" class="label">{{ __('Name') }}</label>
                        <input type="text" id="name" name="name" class="form-control "
                            value="{{ $user->firstname . ' ' . $user->lastname }}" readonly>
                    </div>
                    <div class="">
                        <label for="email" class="label">{{ __('Email') }}</label>
                        <input type="text" id="email" name="email" class="form-control "
                            value="{{ $user->email }}" readonly>
                    </div>
                </div>
                <div class="">
                    <label for="subject" class="label">{{ __('Subject') }}</label>
                    <input type="text" id="subject" name="subject" class="form-control "
                        placeholder="{{ __('Enter Subject') }}" required="">
                </div>
                <div class="">
                    <label for="message" class="label">{{ __('Message') }}</label>
                    <textarea id="message" name="message" class="form-control " placeholder="{{ __('Message') }}"></textarea>
                </div>

                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <label for="file2" class="label">{{ __('Attachments') }}</label>
                        <input type="file" class="upload" name="attachments[]" id="file2">
                        <div id="fileUploadsContainer"></div>
                        <span class="info font-sm">{{ __('Allowed File Extensions') }}: .jpg, .jpeg,
                            .png, .pdf, .doc, .docx</span>
                    </div>
                    <div class="add-area">
                        <label class="label">&nbsp;</label>
                        <button class="btn btn-primary btn-icon" onclick="extraTicketAttachment()" type="button"><i
                                class="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">{{ __('Send Message') }}</button>
            </div>
        </form>
    </div>
@endsection
@section('page-scripts')
    <script>
        "use strict";

        function extraTicketAttachment() {
            $("#fileUploadsContainer").append(
                '<input type="file" name="attachments[]" class="upload mt-2"/>')
        }
    </script>
@endsection
