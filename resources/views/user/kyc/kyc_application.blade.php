@extends('layouts.user')

@section('title', __('Begin ID-Verification'))
@php
    $has_sidebar = false;
    $page_title = 'Begin ID-Verification';
@endphp
@section('page-style')
    @vite(['resources/css/kyc.css'])
@endsection
@section('content')
    <div class="page-header page-header-kyc">
        <div class="row justify-center">
            <div class="lg:col-span-8 col-xl-7 text-center">
                <h2 class="page-title">{{ __('Begin your ID-Verification') }}</h2>
                <p class="large">{{ __('Verify your identity to start using your trade wallet.') }}</p>
            </div>
        </div>
    </div>
    <div class="flex  justify-center">
        <div class="kyc-form-steps card  max-w-2xl">
            <form class="validate-modern" action="{{ route('user.kyc.submit') }}" method="POST" id="kyc_submit"
                enctype="multipart/form-data">
                @csrf
                @include('user.kyc.kyc-form')
            </form>
        </div>
    </div>

@endsection
@section('page-scripts')
    <script>
        (function(a) {
            var c = a(".document-type");
            0 < c.length && c.on("click", function() {
                var b = a(this).data("title"),
                    c = a(".doc-upload-d2"),
                    d = "undefined" != typeof a(this).data("change"),
                    e = a(this).data("img");
                a(".doc-type-name").text(b), a("._image").attr("src", e), 0 < c.length && d ? c.removeClass(
                    "hidden") : c.addClass("hidden")
            });
        })(jQuery);
    </script>
@endsection
