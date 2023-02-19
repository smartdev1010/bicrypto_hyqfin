@extends('layouts.user')
@php
    $page_title = 'KYC Details';
@endphp
@section('title', __('KYC Details'))
@section('page-style')
    @vite(['resources/css/kyc.css'])
@endsection
@section('content')
    <div class="content-area card">
        <div class="card-innr">
            <div class="card-head flex justify-between items-center">
                <h4 class="card-title mb-1">{{ __('KYC Application Documents') }}</h4>
                <div class="flex items-center guttar-20px">
                    <div class="flex-col d-sm-block d-none">
                        <a href="{{ route('user.kyc') }}" class="btn btn-light btn-sm btn-auto btn-primary"><i
                                class="bi bi-chevron-left mr-3"></i> {{ __('Back') }}</a>
                    </div>
                    <div class="flex-col d-sm-none">
                        <a href="{{ route('user.kyc') }}" class="btn btn-icon btn-sm btn-primary"><i
                                class="bi bi-arrow-left"></i></a>
                    </div>
                </div>
            </div>
            <div class="gaps-1-5x"></div>
            <div class="data-details d-mflex flex-wrap items-center justify-between">
                <div class="fake-class">
                    <span class="data-details-title">{{ __('Submited By') }}</span>
                    <span class="data-details-info text-dark">{{ $kyc->firstName . ' ' . $kyc->lastName }}</span>
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
                        class="badge badge-md badge-block badge-{{ __status($kyc->status, 'status') }} ucap">{{ __status($kyc->status, 'text') }}</span>
                </div>
                @if ($kyc->notes !== null)
                    <div class="gaps-2x w-full d-none d-md-block"></div>
                    <div class="w-full">
                        <span class="data-details-title">{{ __('Admin Note') }}</span>
                        <span class="data-details-info text-dark">{!! $kyc->notes !!}</span>
                    </div>
                @endif
            </div>
            <div class="gaps-3x mt-1"></div>
            <h6 class="card-sub-title">{{ __('Personal Information') }}</h6>
            <ul class="data-details-list">
                <li>
                    <div class="data-details-head">{{ __('First Name') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->firstName }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Last Name') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->lastName }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Email Address') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->email }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Phone Number') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->phone }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Date of Birth') }}</div>
                    <div class="data-details-des text-dark">{{ _date($kyc->dob, get_setting('site_date_format')) }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Full Address') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->address1 }}, {{ $kyc->address2 }},
                        {{ $kyc->city }}, {{ $kyc->state }} {{ $kyc->zip }}.</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Country of Residence') }}</div>
                    <div class="data-details-des text-dark">{{ $kyc->country }}</div>
                </li>{{-- li --}}
                <li>
                    <div class="data-details-head">{{ __('Telegram Username') }}</div>
                    <div class="data-details-des text-dark"><span>{{ '@' . preg_replace('/@/', '', $kyc->telegram, 1) }}
                        </span><a href="https://t.me/{{ preg_replace('/@/', '', $kyc->telegram, 1) }}" target="_blank"><em
                                class="far fa-paper-plane"></em></a></div>
                </li>{{-- li --}}
            </ul>
            <div class="gaps-3x"></div>
            <h6 class="card-sub-title">{{ __('Uploaded Documnets') }}</h6>
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
                    @if ($kyc->document != null)
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
        </div>{{-- .card-innr --}}
    </div>{{-- .card --}}
    </div>{{-- .container --}}
    </div>{{-- .page-content --}}
@endsection
