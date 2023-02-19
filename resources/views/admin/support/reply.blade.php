@extends('layouts.admin')

@section('content')
    <form action="{{ route('admin.ticket.reply', $ticket->id) }}" enctype="multipart/form-data" method="post"
        class="form-horizontal">
        @csrf
        <div class="card mb-5">
            <div class="card-body">
                <div class="grid grid-cols-3 gap-5 mb-5">
                    <div>
                        @if ($ticket->status == 0)
                            <span
                                class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{{ __('Open') }}</span>
                        @elseif($ticket->status == 1)
                            <span
                                class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900y">{{ __('Answered') }}</span>
                        @elseif($ticket->status == 2)
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{{ __('Customer Reply') }}</span>
                        @elseif($ticket->status == 3)
                            <span
                                class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">{{ __('Closed') }}</span>
                        @endif
                    </div>
                    <div>
                        <p class="text-xl font-semibold text-blue-600/100 dark:text-blue-500/100">
                            [{{ __('Ticket#') }}{{ $ticket->ticket }}] {{ $ticket->subject }}
                        </p>
                    </div>
                    <div class="text-end">
                        <span id="badge-dismiss-red"
                            class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800">
                            {{ __('Close Ticket') }}
                            <button type="button"
                                class="inline-flex items-center p-0.5 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900"
                                data-dismiss-target="#badge-dismiss-red" aria-label="Remove" data-modal-toggle="DelModal">
                                <svg aria-hidden="true" class="w-3.5 h-3.5" aria-hidden="true" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only"> {{ __('Close Ticket') }}</span>
                            </button>
                        </span>
                    </div>
                </div>

                <div class="space-y-3">
                    <textarea id="inputMessage" name="message" aria-describedby="message" rows="3"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="{{ __('Your Message') }}."></textarea>
                    <div class="justify-start items-top mb-1">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="inputAttachments">{{ __('Attachments') }}</label>
                        <div>
                            <input class="upload" aria-describedby="file_input_help"name="attachments" type="file"
                                id="inputAttachments" accept=".png, .jpg, .jpeg .pdf, .doc"
                                onclick="extraTicketAttachment()">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                {{ __('Allowed File Extensions') }}: .jpg, .jpeg, .png, .pdf, .doc, .docx</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-primary" name="replayTicket"
                    value="1">{{ __('Reply') }}</button>
            </div>
        </div>
    </form>

    @foreach ($messages as $message)
        @if ($message->admin_id == 0)
            <div class="card">
                <div class="card-body">

                    <div class="row">
                        <div class="md:col-span-3 border-end text-end">
                            <h5 class="my-1">{{ $ticket->name }}</h5>
                            @if ($ticket->user_id != null)
                                <p><a
                                        href="{{ route('admin.users.detail', $ticket->user_id) }}">&#64;{{ $ticket->name }}</a>
                                </p>
                            @else
                                <p>@<span>{{ $ticket->name }}</span></p>
                            @endif

                        </div>

                        <div class="md:col-span-9">
                            <p class="text-muted fw-bold my-1">
                                {{ __('Posted on') }}
                                {{ showDateTime($message->created_at, 'l, dS F Y @ H:i') }}</p>
                            <p>{{ $message->message }}</p>
                            @if ($message->attachments()->count() > 0)
                                <div class="my-1">
                                    @foreach ($message->attachments as $k => $image)
                                        <a href="{{ route('admin.ticket.download', encrypt($image->id)) }}"
                                            class="mr-3"><i class="bi bi-file-earmark"></i>{{ __('Attachment') }}
                                            {{ ++$k }}</a>
                                    @endforeach
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button data-id="{{ $message->id }}" type="button" data-bs-toggle="modal"
                        data-bs-target="#DelMessage" class="btn btn-danger btn-sm delete-message"><i
                            class="bi bi-trash"></i> {{ __('Delete') }}</button>
                </div>

            </div>
        @else
            <div class="card">
                <div class="card-body">
                    <div class="row admin-bg-reply">

                        <div class="md:col-span-3 border-end text-end">
                            <h5 class="my-1">{{ @$message->admin->name }}</h5>
                            <p class="lead text-muted">{{ __('Staff') }}</p>

                        </div>

                        <div class="md:col-span-9">
                            <p class="text-muted fw-bold my-1">
                                {{ __('Posted on') }}
                                {{ showDateTime($message->created_at, 'l, dS F Y @ H:i') }}</p>
                            <p>{{ $message->message }}</p>
                            @if ($message->attachments()->count() > 0)
                                <div class="my-1">
                                    @foreach ($message->attachments as $k => $image)
                                        <a href="{{ route('admin.ticket.download', encrypt($image->id)) }}"
                                            class="mr-3"><i class="bi bi-file-earmark"></i>
                                            {{ __('Attachment') }} {{ ++$k }} </a>
                                    @endforeach
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button data-id="{{ $message->id }}" type="button" data-bs-toggle="modal"
                        data-bs-target="#DelMessage" class="btn btn-danger btn-sm delete-message"><i
                            class="bi bi-trash"></i> {{ __('Delete') }}</button>
                </div>
            </div>
        @endif
    @endforeach


@endsection


@push('modals')
    <x-partials.modals.default-modal title="{{ __('Close Support Ticket!') }}" btn="danger"
        action="{{ route('admin.ticket.reply', $ticket->id) }}" submit="{{ __('Close Ticket') }}" id="DelModal">
        <div>
            <input type="hidden" name="replayTicket" value="2">
            <strong>{{ __('Are you  want to Close This Support Ticket?') }}</strong>
        </div>
    </x-partials.modals.default-modal>
    <x-partials.modals.default-modal title="{{ __('Delete Reply!') }}" action="{{ route('admin.ticket.delete') }}"
        submit="{{ __('Delete') }}" id="DelMessage" btn="danger">
        <div>
            <input type="hidden" name="message_id" class="message_id">
            <strong>{{ __('Are you sure to delete this?') }}</strong>
        </div>
    </x-partials.modals.default-modal>
@endpush


@push('breadcrumb-plugins')
    <a href="{{ route('admin.ticket') }}" class="btn btn-outline-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-4 h-4 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

        {{ __('Go Back') }} </a>
@endpush
@push('script')
    <script>
        "use strict";
        $(document).ready(function() {
            $('.delete-message').on('click', function(e) {
                $('.message_id').val($(this).data('id'));
            })
        });

        function extraTicketAttachment() {
            $("#fileUploadsContainer").append(
                `
            <div class="mt-1 file-upload-wrapper" data-text="Select your file!"><input type="file" name="attachments[]" id="inputAttachments" class="form-control"/></div>`
            )
        }
    </script>
@endpush
