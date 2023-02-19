@extends('layouts.user')
@section('content')

    <div class="card max-w-md">
        <div class="card-title">
            <div class="card-header">
                <div class="title-gradient">{{ __($page_title) }}</div>
            </div>
        </div>
        <form action="{{ route('user.deposit.manual.update') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="text-center">
                        <p class="mt-2">{{ __('You have requested') }} <b
                                class="text-success">{{ getAmount($data['amount']) }}
                                {{ __($general->cur_text) }}</b> , {{ __('Please pay') }}
                            <b class="text-success">{{ getAmount($data['final_amo']) . ' ' . $data['method_currency'] }}
                            </b> {{ __('for successful payment') }}
                        </p>
                        <h4 class="mb-4">{{ __('Please follow the instruction bellow') }}</h4>

                        <p class="my-2 text--white">@php echo  $data->gateway->description @endphp</p>
                    </div>

                    @if ($method->gateway_parameter)
                        @foreach (json_decode($method->gateway_parameter) as $k => $v)
                            @if ($v->type == 'text')
                                <div class="form-group">
                                    <label class="label mt-1"><strong>{{ __(inputTitle($v->field_level)) }}
                                            @if ($v->validation == 'required')
                                                <span class="text-danger">*</span>
                                            @endif
                                        </strong>
                                    </label>
                                    <input type="text" class="form-control" name="{{ $k }}"
                                        value="{{ old($k) }}" placeholder="{{ __($v->field_level) }}">
                                </div>
                            @elseif($v->type == 'textarea')
                                <div class="col">
                                    <label class="label mt-1"><strong>{{ __(inputTitle($v->field_level)) }}
                                            @if ($v->validation == 'required')
                                                <span class="text-danger">*</span>
                                            @endif
                                        </strong>
                                    </label>
                                    <textarea name="{{ $k }}" class="form-control" placeholder="{{ __($v->field_level) }}" rows="3">{{ old($k) }}</textarea>

                                </div>
                            @elseif($v->type == 'file')
                                <div class="col">
                                    <label><strong>{{ __($v->field_level) }} @if ($v->validation == 'required')
                                                <span class="text-danger">*</span>
                                            @endif
                                        </strong></label>
                                    <br>

                                    <div class="fileinput fileinput-new " data-provides="fileinput">
                                        <div class="fileinput-new thumbnail withdraw-thumbnail" data-trigger="fileinput">
                                            <img src="{{ asset(getImage('/')) }}" alt="{{ __('image') }}">
                                        </div>
                                        <div class="fileinput-preview fileinput-exists thumbnail wh-200-150">
                                        </div>

                                        <div class="img-input-div">
                                            <span class="btn btn-info btn-file">
                                                <span class="fileinput-new text--white"> {{ __('Select') }}
                                                    {{ __($v->field_level) }}</span>
                                                <span class="fileinput-exists text--white">
                                                    {{ __('Change') }}</span>
                                                <input type="file" name="{{ $k }}" accept="image/*">
                                            </span>
                                            <a href="#" class="btn btn-danger fileinput-exists"
                                                data-bs-dismiss="fileinput"> {{ __('Remove') }}</a>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    @endif

                </div>

            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-success mt-2 w-full">{{ __('Pay Now') }}</button>
            </div>
        </form>
    </div>

@endsection
@push('style')
    <style type="text/css">
        .withdraw-thumbnail {
            max-width: 220px;
            max-height: 220px
        }
    </style>
@endpush
@push('script-lib')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.2.7/js/fileinput.min.js"></script>
@endpush
@push('style-lib')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.2.7/css/fileinput.min.css">
@endpush
