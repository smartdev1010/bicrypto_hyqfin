@extends('layouts.admin')
@section('content')
    <form action="{{ route('admin.seo.content', 'seo') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="type" value="data">
        <input type="hidden" name="seo_image" value="1">
        <div class="grid xs:grid-cols-1 md:grid-cols-3 gap-5">
            <div class="xs:col-span-1 md:col-span-2">
                <div class="card">
                    <div class="card-body">
                        <div class="col">
                            <label class="form-control-label  h6 mt-1">{{ __('Social Title') }}</label>
                            <input type="text" class="form-control" placeholder="{{ __('Social Share Title') }}"
                                name="social_title" value="{{ @$seo->data_values->social_title }}" required />
                        </div>
                        <br>
                        <div class="col">
                            <label class="form-control-label  h6 mt-1">{{ __('Social Description') }}</label>
                            <textarea name="social_description" rows="3" class="form-control"
                                placeholder="{{ __('Social Share  meta description') }}" required>{{ @$seo->data_values->social_description }}</textarea>
                        </div>
                        <div class="col ">
                            <label class="form-control-label h6 mt-1">{{ __('Meta Keywords') }}</label>
                            <small class="ml-2 mt-2 text-facebook">{{ __('Separate multiple keywords by') }}
                                <code>,</code>({{ __('comma') }})</small>
                            <input type="text" class="form-control" name="keywords[]"
                                value="@if (@$seo->data_values->keywords) @foreach ($seo->data_values->keywords as $option)
                                    {{ $option }}
                                    @endforeach @endif"
                                multiple="multiple" required />
                        </div>

                        <div class="col">
                            <label class="form-control-label  h6 mt-1">{{ __('Meta Description') }}</label>
                            <textarea name="description" rows="3" class="form-control" placeholder="{{ __('SEO meta description') }}"
                                required>{{ @$seo->data_values->description }}</textarea>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-outline-success">{{ __('Update') }}</button>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">{{ __('Social Image Preview') }}</div>
                        <div class="col">
                            <div class="image-upload">
                                <div class="thumb mt-2">
                                    <div class="mb-2">
                                        <div class="profilePicPreview"
                                            style="height:300px;background-image: url({{ getImage(imagePath()['seo']['path'] . '/' . @$seo->data_values->image, imagePath()['seo']['size']) }})">
                                        </div>
                                    </div>
                                    <input class="upload" type="file" name="image_input" id="profilePicUpload1"
                                        accept=".png, .jpg, .jpeg">
                                    <small class="mt-2 text-facebook">{{ __('Supported files') }}:
                                        <b>{{ __('jpeg') }}, {{ __('jpg') }}</b>.
                                        {{ __('Image will be resized into') }}
                                        {{ imagePath()['seo']['size'] }}{{ __('px') }}. </small>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection
