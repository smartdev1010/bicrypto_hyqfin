@extends('layouts.user')
@section('content')


    <div class=" my-2 text-end">
        <a href="/app/support" class="btn btn-outline-secondary">{{ __('Back') }}</a>
    </div>
    <div class="card">
        <div class="card-header">
            <h5 class="title">
                @if ($my_ticket->status == 0)
                    <span class="badge bg-success">{{ __('Open') }}</span>
                @elseif($my_ticket->status == 1)
                    <span class="badge bg-primary">{{ __('Answered') }}</span>
                @elseif($my_ticket->status == 2)
                    <span class="badge bg-warning">{{ __('Replied') }}</span>
                @elseif($my_ticket->status == 3)
                    <span class="badge bg-danger">{{ __('Closed') }}</span>
                @endif
                <span class="text-white">[{{ __('Ticket') }}#{{ $my_ticket->ticket }}]
                    {{ $my_ticket->subject }}</span>
            </h5>
            <a href="javascript:void(0)" data-modal-toggle="DelModal"
                class="btn-sm btn btn-danger text-center mt-2">{{ __('Close Ticket') }}</a>
        </div>
        <div class="card-body">
            @if ($my_ticket->status != 4)
                <form method="post" action="{{ route('user.ticket.reply', $my_ticket->id) }}"
                    class="message__chatbox__form row" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group xs:col-span-12">
                        <textarea id="message" name="message" class="form-control " placeholder="{{ __('Enter Message') }}"></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="space-y-2">
                            <label for="file" class="label">{{ __('Attachments') }}</label>
                            <input type="file" class="upload" id="file" name="attachments[]">
                            <div id="fileUploadsContainer"></div>
                            <span class="info fs-14">{{ __('Allowed File Extensions') }}:
                                .jpg,
                                .jpeg, .png, .pdf, .doc, .docx</span>
                        </div>
                        <div class="add-area">
                            <label class="label">&nbsp;</label>
                            <button class="btn btn-primary btn-icon" onclick="extraTicketAttachment()" type="button"><i
                                    class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>

                    <div class="form-group xs:col-span-12 mt-2 mb-0">
                        <button type="submit" class="btn btn-primary" name="replayTicket"
                            value="1">{{ __('Send Message') }}</button>
                    </div>
                </form>
            @endif
        </div>
    </div>

    <div class="card mt-5">
        <div class="card-body">
            <div class="reply-message-area">
                @foreach ($messages as $message)
                    @if ($message->admin_id == 0)
                        <div class="reply-item rounded bg-wallet mb-1 p-1 shadow border-light">
                            <div class="row">
                                <div class="col-2">
                                    <div class="reply-thumb">
                                        <img src="{{ getImage(imagePath()['profileImage']['path'] . '/' . auth()->user()->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                            alt="{{ __('User') }}">
                                    </div>
                                </div>
                                <div class="col-10">
                                    <div class="meta-date text-warning">
                                        {{ __('Posted on') }} <span
                                            class="cl-theme">{{ $message->created_at->format('l, dS F Y @ H:i') }}</span>
                                    </div>
                                    <p>
                                        {{ $message->message }}
                                    </p>
                                    @if ($message->attachments()->count() > 0)
                                        <div class="mt-2">
                                            @foreach ($message->attachments as $k => $image)
                                                <a href="{{ route('user.ticket.download', encrypt($image->id)) }}"
                                                    class="mr-3"><i class="bi bi-file-earmark"></i>
                                                    {{ __('Attachment') }} {{ ++$k }} </a>
                                            @endforeach
                                        </div>
                                    @endif
                                </div>
                            </div>
                            <div class="name-area">
                                <h6 class="title">{{ __($message->ticket->name) }}</h6>
                            </div>

                        </div>
                    @else
                        <ul>
                            <li>
                                <div class="reply-item">
                                    <div class="name-area">
                                        <div class="reply-thumb">
                                            <img src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $message->admin->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                                alt="{{ __('Admin Image') }}">
                                        </div>
                                        <h6 class="title">{{ __($message->admin->name) }}</h6>
                                    </div>
                                    <div class="content-area">
                                        <span class="meta-date">
                                            {{ __('Posted on') }}, <span
                                                class="cl-theme">{{ $message->created_at->format('l, dS F Y @ H:i') }}</span>
                                        </span>
                                        <p>
                                            {{ $message->message }}
                                        </p>
                                        @if ($message->attachments()->count() > 0)
                                            <div class="mt-2">
                                                @foreach ($message->attachments as $k => $image)
                                                    <a href="{{ route('user.ticket.download', encrypt($image->id)) }}"
                                                        class="mr-3"><i class="bi bi-file-earmark"></i>
                                                        {{ __('Attachment') }} {{ ++$k }} </a>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </li>
                        </ul>
                    @endif
                @endforeach
            </div>
        </div>
    </div>
    </div>


@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('Confirmation') }}"
        action="{{ route('user.ticket.reply', $my_ticket->id) }}" submit="{{ __('Confirm') }}" id="DelModal"
        btn="danger">
        <div>
            <input type="hidden" name="replayTicket" value="2">
            <p>{{ __('Are you sure you want to close this support ticket') }}</p>
        </div>
    </x-partials.modals.default-modal>
@endpush
@section('page-scripts')
    <script>
        "use strict";

        function extraTicketAttachment() {
            $("#fileUploadsContainer").append(
                '<input type="file" name="attachments[]" class="upload mt-2" />')
        }
    </script>
@endsection
