@extends('layouts.admin')
@php
    $page_title = 'KYC Details';
@endphp
@section('title', 'KYC details')
@php
    $space = '&nbsp;';
@endphp
@section('content')
    <div class="card">
        <div class="card-head flex justify-between items-center">
            <h4 class="card-title mb-5">
                <div class="card-header">
                    <div class="title-gradient">
                        {{ __('KYC Information of') }}
                        <span>{{ _x($kyc->firstName) . ' ' . _x($kyc->lastName) }}
                    </div>
                </div>
            </h4>
            <div class="flex items-center pr-5">
                <div class="relative inline-block">
                    @if ($kyc->status != 'approved')
                        <a class="btn btn-outline-primary kyc_action kyc_approve" data-modal-toggle="kyc_action"
                            data-id="{{ $kyc->id }}" data-toggle="modal" data-target="#actionkyc"><i
                                class="bi bi-check-square"></i>
                            {{ __('Update Status') }}</a>
                        </li>
                    @endif
                    @if ($kyc->status == 'missing' || $kyc->status == 'rejected')
                        <a class="btn btn-outline-danger delete" data-modal-toggle="deleteModal"
                            data-id="{{ $kyc->id }}" data-name="{{ $kyc->id }}"><i class="bi bi-trash"></i>
                            {{ __('Delete') }}</a></li>
                    @endif
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="data-details flex flex-wrap items-center justify-between">
                <div class="fake-class">
                    <span class="data-details-title">{{ __('Submited By') }}</span>
                    <span class="data-details-info text-dark">{{ set_id($kyc->userId) }}</span>
                </div>
                <div class="fake-class">
                    <span class="data-details-title">{{ __('Submited On') }}</span>
                    <span class="data-details-info text-dark">{{ _date($kyc->created_at) }}</span>
                </div>
                @if ($kyc->reviewedBy != 0)
                    <div class="fake-class">
                        <span class="data-details-title">{{ __('Checked By') }}</span>
                        <span class="data-details-info text-dark">{{ $kyc->checker_info->name }}</span>
                    </div>
                @else
                    <div class="fake-class">
                        <span class="data-details-title">{{ __('Checked On') }}</span>
                        <span class="data-details-info text-dark">{{ __('Not reviewed yet') }}</span>
                    </div>
                @endif
                @if ($kyc->reviewedAt != null)
                    <div class="fake-class">
                        <span class="data-details-title">{{ __('Checked On') }}</span>
                        <span class="data-details-info text-dark">{{ _date($kyc->updated_at) }}</span>
                    </div>
                @endif
                <div class="fake-class">
                    <span
                        class="badge badge-md badge-{{ __status($kyc->status, 'status') }} ucap">{{ __status($kyc->status, 'text') }}</span>
                </div>
                @if ($kyc->notes !== null)
                    <div class="w-full">
                        <span class="data-details-title">{{ __('Admin Note') }}</span>
                        <span class="data-details-info text-dark">{!! $kyc->notes !!}</span>
                    </div>
                @endif
            </div>
            <h6 class="card-sub-title my-5">{{ __('Personal Information') }}</h6>
            <ul class="data-details-list">
                <li>
                    <div class="data-details-head">{{ __('First Name') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->firstName ? _x($kyc->firstName) : $space !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Last Name') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->lastName ? _x($kyc->lastName) : $space !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Email Address') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->email, auth()->user()->type !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Phone Number') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->phone ? _x($kyc->phone) : $space !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Date of Birth') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->dob ? _date($kyc->dob, 'd M Y') : $space !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Full Address') }}</div>
                    <div class="data-details-des text-dark">{!! kyc_address($kyc, $space) !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Country of Residence') }}</div>
                    <div class="data-details-des text-dark">{!! $kyc->country ? _x($kyc->country) : $space !!}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Telegram Username') }}</div>
                    <div class="data-details-des text-dark">
                        @if ($kyc->telegram)
                            <span>{{ '@' . preg_replace('/@/', '', _x($kyc->telegram), 1) }}</span><a
                                href="https://t.me/{{ preg_replace('/@/', '', _x($kyc->telegram), 1) }}"
                                target="_blank"><em class="far fa-paper-plane"></em></a>
                        @else
                            &nbsp;
                        @endif
                    </div>
                </li>{{-- li --}}
            </ul>
            <h6 class="card-sub-title my-5">{{ __('Uploaded Documnets') }}</h6>
            <ul class="data-details-list">
                <li>
                    <div class="data-details-head">
                        @if ($kyc->documentType == 'nidcard')
                            {{ __('National ID Card') }}
                        @elseif($kyc->documentType == 'passport')
                            {{ __('Passport') }}
                        @elseif($kyc->documentType == 'license')
                            {{ __('Driving License') }}
                        @else
                            {{ __('Documents') }}
                        @endif
                    </div>
                    @if ($kyc->document != null || $kyc->document2 != null || $kyc->document3 != null)
                        <ul class="data-details-docs">
                            @if ($kyc->document != null)
                                <li>
                                    <span
                                        class="data-details-docs-title text-dark">{{ $kyc->documentType == 'nidcard' ? 'Front Side' : 'Document' }}</span>
                                    <div class="data-doc-item data-doc-item-lg">
                                        <div class="data-doc-image">
                                            <img class="img-fluid img-thumbnail"
                                                src="{{ getImage('assets/images/kyc/' . $kyc->document) }}">
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="{{ getImage('assets/images/kyc/' . $kyc->document) }}"
                                                    target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                        </ul>
                                    </div>
                                </li>{{-- li --}}
                            @endif
                            @if ($kyc->document2 != null)
                                <li>
                                    <span
                                        class="data-details-docs-title text-dark">{{ $kyc->documentType == 'nidcard' ? 'Back Side' : 'Proof' }}</span>
                                    <div class="data-doc-item data-doc-item-lg">
                                        <div class="data-doc-image">
                                            <img class="img-fluid img-thumbnail"
                                                src="{{ getImage('assets/images/kyc/' . $kyc->document2) }}">
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="{{ getImage('assets/images/kyc/' . $kyc->document2) }}"
                                                    target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                        </ul>
                                    </div>
                                </li>{{-- li --}}
                            @endif

                            @if ($kyc->document3 != null)
                                <li>
                                    <span class="data-details-docs-title text-dark">{{ __('Proof') }}</span>
                                    <div class="data-doc-item data-doc-item-lg">
                                        <div class="data-doc-image">
                                            <img class="img-fluid img-thumbnail"
                                                src="{{ getImage('assets/images/kyc/' . $kyc->document3) }}">
                                        </div>
                                        <ul class="data-doc-actions">
                                            <li><a href="{{ getImage('assets/images/kyc/' . $kyc->document3) }}"
                                                    target="_blank"><i class="bi bi-cloud-download text-white"></i></a></li>
                                        </ul>
                                    </div>
                                </li>{{-- li --}}
                            @endif
                        </ul>
                    @else
                        {{ __('No document uploaded.') }}
                    @endif
                </li>{{-- li --}}
            </ul>
        </div>
    </div>{{-- .card --}}

@endsection
@push('modals')
    <x-partials.modals.default-modal title="{{ __('KYC Delete Confirmation') }}" action="{{ route('admin.kyc.delete') }}"
        submit="{{ __('Delete') }}" id="deleteModal" btn="danger">
        <div>
            <input type="hidden" id="idd" name="id">
            <p>{{ __('Are you sure want to Reject This KYC Application') }}</p>
        </div>
    </x-partials.modals.default-modal>

    <x-partials.modals.default-modal title="{{ __('KYC Update Confirmation') }}"
        action="{{ route('admin.kyc.update') }}" submit="{{ __('Submit') }}" id="kyc_action">
        <div id="kyc_status_form" class="space-y-3">
            <div id="missingnotediv" class="input-item input-with-label hide">
                <input type="hidden" name="req_type" value="update_kyc_status">
                <input type="hidden" name="kyc_id" id="kyc_id" required="required">
                <label class="input-item-label">{{ __('Admin Note') }}</label>
                <textarea name="notes" class="form-control" rows="5"></textarea>
            </div>
            <div>
                <label for="inputGroupSelect01">{{ __('Status') }}</label>
                <select class="form-select" id="status" name="status">
                    <option selected>{{ __('Choose') }}...</option>
                    <option value="approved">{{ __('Approve') }}</option>
                    <option value="missing">{{ __('Missing') }}</option>
                    <option value="rejected">{{ __('Reject') }}</option>
                </select>
            </div>
        </div>
    </x-partials.modals.default-modal>
@endpush
@section('page-scripts')
    <script>
        $(document).on('click', '.delete', function() {
            $('#idd').val($(this).attr('data-id'));
        });
        $(document).on('click', '.kyc_action', function() {
            $('#kyc_id').val($(this).attr('data-id'));
        });
        $(function() {
            $("#status").change(function() {
                var val = $(this).val();
                if (val === "missing") {
                    $("#missingnotediv").removeClass('hide');
                } else {
                    $("#missingnotediv").addClass('hide');
                }
            });
        });
    </script>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.kycs') }}" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        {{ __('Back') }}</a>
@endpush
