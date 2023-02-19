@extends('layouts.admin')

@section('content')
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title">Email Templates</h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th>{{ __('Short Code') }} </th>
                                <th>{{ __('Description') }}</th>
                            </tr>
                        </thead>
                        <tbody class="list">
                            <tr>
                                <td data-label="{{ __('Short Code') }}">@{{ name }}</td>
                                <td data-label="{{ __('Description') }}">{{ __('User Name') }}</td>
                            </tr>
                            <tr>
                                <td data-label="{{ __('Short Code') }}">@{{ message }}</td>
                                <td data-label="{{ __('Description') }}">{{ __('Message') }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="md:col-span-12">
            <div class="card mt-1">
                <div class="card-body">
                    <form action="{{ route('admin.email.template.global') }}" method="POST">
                        @csrf
                        <div class="row">

                            <div class="col md:col-span-12">
                                <label class="h6 mt-1">{{ __('Email Sent From') }} <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form-control form-control-lg"
                                    placeholder="{{ __('Email address') }}" name="email_from"
                                    value="{{ $general_setting->email_from }}" required />
                            </div>
                            <div class="col md:col-span-12">
                                <label class="h6 mt-1">{{ __('Email Body') }} <span class="text-danger">*</span></label>
                                <textarea name="email_template" rows="10" class="form-control form-control-lg"
                                    placeholder="{{ __('Your email template') }}">{{ $general_setting->email_template }}</textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mr-2 mt-2">{{ __('Update') }}</button>
                    </form>
                </div>
            </div><!-- card end -->
        </div>
    </div>
@endsection
@section('vendor-script')
@endsection
