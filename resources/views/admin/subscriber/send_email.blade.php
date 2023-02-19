@extends('layouts.admin')

@section('content')
    <div class="row">

        <div class="col-xl-12">
            <div class="card">
                <form action="{{ route('admin.subscriber.sendEmail') }}" method="POST">
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col md:col-span-12 mb-2">
                                <label class="fw-bold">{{ __('Subject') }}</label>
                                <input type="text" class="form-control" placeholder="{{ __('Email subject') }}"
                                    name="subject" value="{{ old('subject') }}" />
                            </div>
                            <div class="col md:col-span-12">
                                <label class="fw-bold">{{ __('Email Body') }}</label>
                                <textarea name="body" rows="10" class="form-control" placeholder="{{ __('Your email template') }}">{{ old('body') }}</textarea>
                            </div>

                        </div>
                    </div>
                    <div class="card-footer text-end">
                        <button type="submit" class="btn btn-success "><i
                                class="bi bi-send"></i>{{ __(' Send Mail') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('page-script')
    <script src="//js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>
    <script type="text/javascript">
        bkLib.onDomLoaded(nicEditors.allTextAreas);
    </script>
@endsection
@push('breadcrumb-plugins')
    <a href="{{ route('admin.subscriber.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('Go Back') }}</a>
@endpush
