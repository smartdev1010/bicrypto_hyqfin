@extends('layouts.user')
@section('content')

    <div class="card max-w-md">
        <div class="card-title">
            <div class="card-header">
                <h5 class="title-gradient"><span class="text-base">{{ __('Withdrawal Confirmation') }}</span></h5>
            </div>
        </div>
        <form class="withdraw-form" action="{{ route('user.withdraw.submit') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <ul class="list-disc">
                    <li>
                        @lang('Request Amount'): <span class="text-success">{{ getAmount($withdraw->amount) }}
                            {{ __($general->cur_text) }}</span>
                    </li>
                    <li>
                        @lang('Withdrawal Charge'): <span class="text-danger">{{ getAmount($withdraw->charge) }}
                            {{ __($general->cur_text) }}</span>
                    </li>

                    <li>
                        @lang('Payable'): <span class="text-danger">{{ getAmount($withdraw->after_charge) }}
                            {{ __($general->cur_text) }}</span>
                    </li>

                    <li>
                        @lang('Conversion Rate'): <span class="text-info">1 {{ __($general->cur_text) }} =
                            {{ getAmount($withdraw->rate) }} {{ __($withdraw->currency) }}</span>
                    </li>
                    <li>
                        {{ __('Wallet Will Be Charged') }}: <span
                            class="text-primary">{{ getAmount(($withdraw->final_amount + $withdraw->charge) / getCoinRate($withdraw->symbol)) }}
                            {{ $withdraw->symbol }}</span>
                    </li>
                </ul>
                <h6 class="subtitle mt-4">@lang('Balance Will be')</h6>

                <div class="input-group">
                    <input type="text" value="{{ getAmount($wallet->balance - $withdraw->amount * $withdraw->rate) }}"
                        placeholder="Enter Amount" required="" readonly="">
                    <span>
                        {{ $withdraw->symbol }}
                    </span>
                </div>

                @if ($withdraw->method->user_data)
                    @foreach ($withdraw->method->user_data as $k => $v)
                        @if ($v->type == 'text')
                            <div>
                                <label><strong>{{ __($v->field_level) }} @if ($v->validation == 'required')
                                            <span class="text-danger">*</span>
                                        @endif
                                    </strong>
                                </label>
                                <input type="text" name="{{ $k }}" class="form-control"
                                    value="{{ old($k) }}" placeholder="{{ __($v->field_level) }}"
                                    @if ($v->validation == 'required') required @endif>
                                @if ($errors->has($k))
                                    <span class="text-danger">{{ __($errors->first($k)) }}</span>
                                @endif
                            </div>
                        @elseif($v->type == 'textarea')
                            <div>
                                <label><strong>{{ __($v->field_level) }} @if ($v->validation == 'required')
                                            <span class="text-danger">*</span>
                                        @endif
                                    </strong>
                                </label>
                                <textarea name="{{ $k }}" class="form-control" placeholder="{{ __($v->field_level) }}" rows="3"
                                    @if ($v->validation == 'required') required @endif>{{ old($k) }}</textarea>
                                @if ($errors->has($k))
                                    <span class="text-danger">{{ __($errors->first($k)) }}</span>
                                @endif
                            </div>
                        @elseif($v->type == 'file')
                            <label><strong>{{ __($v->field_level) }} @if ($v->validation == 'required')
                                        <span class="text-danger">*</span>
                                    @endif
                                </strong></label>
                            <div>
                                <div class="fileinput fileinput-new " data-provides="fileinput">
                                    <div class="fileinput-new thumbnail withdraw-thumbnail" data-trigger="fileinput">
                                        <img class="w-full" src="{{ getImage('/') }}" alt="{{ __('image') }}">
                                    </div>
                                    <div class="fileinput-preview fileinput-exists thumbnail wh-200-150"></div>
                                    <div class="img-input-div">
                                        <span class="btn btn-info btn-file">
                                            <span class="fileinput-new text-white"> @lang('Select')
                                                {{ __($v->field_level) }}</span>
                                            <span class="fileinput-exists text-white"> @lang('Change')</span>
                                            <input type="file" name="{{ $k }}" accept="image/*"
                                                @if ($v->validation == 'required') required @endif>
                                        </span>
                                        <a href="#" class="btn btn-danger fileinput-exists"
                                            data-bs-dismiss="fileinput">
                                            {{ __('Remove') }}</a>
                                    </div>
                                </div>
                                @if ($errors->has($k))
                                    <br>
                                    <span class="text-danger">{{ __($errors->first($k)) }}</span>
                                @endif
                            </div>
                        @endif
                    @endforeach
                @endif
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary mt-2 my-3">{{ __('Confirm') }}</button>
            </div>
        </form>
    </div>
@endsection
@push('style-lib')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.2.7/css/fileinput.min.css">
@endpush
@push('script-lib')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/5.2.7/js/fileinput.min.js"></script>
@endpush
