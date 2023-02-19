@extends('layouts.app')

@section('vendor-style')
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
@endsection
@section('content')
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title">{{ __('New Bot') }}</h4>
            <div class="card-search"></div>
        </div>
        <form action="{{ route('admin.bot.store') }}" method="POST" enctype="multipart/form-data" id="newBot">
            @csrf
            <div class="card-body">
                <input type="hidden" name="result_missed" id="result_missed">
                <div class="row">
                    <div class="col-lg-6">
                        <label for="title">{{ __('Title') }}</label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="title" name="title" aria-label="Bot Title"
                                aria-describedby="title" value="{{ old('title') }}">
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label for="perc">{{ __('APR') }}</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="perc" name="perc" aria-label="Bot APR"
                                aria-describedby="perc" value="{{ old('perc') }}">
                            <span class="input-group-text" for="perc">%</span>
                        </div>
                        <small class="text-warning">*Annual Profit Rate</small>
                    </div>
                    <div class="col-lg-3">
                        <label for="fake">{{ __('Uses') }}</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="fake" name="fake" aria-label="Bot Uses"
                                aria-describedby="fake" value="{{ old('fake') }}">
                            <span class="input-group-text" for="fake">%</span>
                        </div>
                        <small class="text-warning">*Uses of the bot</small>
                    </div>
                </div>
                <label for="desc">{{ __('Description') }}</label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" id="desc" name="desc" aria-label="Bot Description"
                        aria-describedby="desc" value="{{ old('desc') }}">
                </div>
                <div class="row">
                    <div class="col-lg-3">
                        <label for="min_profit">{{ __('Minimum Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" id="min_profit" name="min_profit"
                                aria-label="Minimum Profit" aria-describedby="min_profit" value="{{ old('min_profit') }}">
                            <span class="input-group-text" for="min_profit">%</span>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label for="max_profit">{{ __('Maximum Profit') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" id="max_profit" name="max_profit"
                                aria-label="Maximum Profit" aria-describedby="max_profit" value="{{ old('max_profit') }}">
                            <span class="input-group-text" for="max_profit">%</span>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label for="result_missed">{{ __('Result If Missed') }}</label>
                        <div class="dropdown">
                            <button class="btn btn-outline-warning dropdown-toggle w-100" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" id="result_missedt" name="result_missedt">
                                {{ __('Select Result If Missed') }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#newBot').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="1">{{ __('Win') }}</a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#newBot').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="2">{{ __('Lose') }}</a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#newBot').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="3">{{ __('Draw') }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <label for="profit_missed">{{ __('Profit If Missed') }}</label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" id="profit_missed" name="profit_missed"
                                aria-label="Maximum Profit" aria-describedby="profit_missed"
                                value="{{ old('profit_missed') }}">
                            <span class="input-group-text" for="profit_missed">%</span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label class="form-control-label h6">{{ __('Bot Minimum Amount') }} </label>
                        <div class="input-group mb-1">
                            <input class="form-control form-control-lg" type="number" name="min_bot_amount"
                                step="0.00000001" value="{{ old('min_bot_amount') }}">
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label class="form-control-label h6">{{ __('Bot Maximum Amount') }} </label>
                        <div class="input-group mb-1">
                            <input class="form-control form-control-lg" type="number" name="max_bot_amount"
                                value="{{ old('max_bot_amount') }}">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-top mb-1">
                    <div>
                        <input class="form-control" name="image" type="file" id="image"
                            accept=".png, .jpg, .jpeg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1">Featured </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="Yes" data-off="No" data-width="100%" name="is_new">
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1">{{ __('Status') }} </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="{{ __('Active') }}" data-off="{{ __('Disabled') }}" data-width="100%"
                            name="status">
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit">{{ __('Submit') }}
                </button>
            </div>
        </form>
    </div>
@endsection

@push('breadcrumb-plugins')
    <a href="{{ route('admin.bot.index') }}" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        {{ __('Back') }}</a>
@endpush


@section('vendor-script')
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
@endsection

@push('script')
    <script>
        "use strict";
        $('.toggle').bootstrapToggle({
            on: 'Y',
            off: 'N',
            width: '100%',
            size: 'small'
        });
    </script>
@endpush
