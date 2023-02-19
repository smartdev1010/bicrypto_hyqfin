@extends('layouts.admin')
@section('content')
    <form action="" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="grid grid-cols-2 gap-5">

            <div class="card">
                <div class="card-body">
                    <h5 class=" text-lg font-medium text-gray-900 dark:text-white">{{ __('White Logo') }}</h5>


                    <div class="h-auto max-w-lg rounded-lg mb-4"
                        style="height:100px;background-size: cover;background-image: url({{ getImage(imagePath()['logoIcon']['path'] . '/logo.png', '?' . time()) }})">
                    </div>

                    <div class="col">
                        <label class="input-group-text" for="logo">{{ __('Select Logo') }}</label>
                        <input class="upload" type="file" id="logo" accept=".png, .jpg, .jpeg" name="logo">
                    </div>
                    <span
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">350px
                        x 75px</span>

                </div>
            </div>


            <div class="card">
                <div class="card-body">
                    <h5 class=" text-lg font-medium text-gray-900 dark:text-white">{{ __('Dark Logo') }}</h5>
                    <div class="md:col-span-6 mb-1">
                        <div class="h-auto max-w-lg rounded-lg mb-4 bg-dark"
                            style="height:100px;background-size: cover;background-image: url({{ getImage(imagePath()['logoIcon']['path'] . '/logo-dark.png', '?' . time()) }})">
                        </div>
                    </div>
                    <div class="col">
                        <label class="input-group-text" for="logo-dark">{{ __('Select Logo') }}</label>
                        <input class="upload" type="file" id="logo-dark" accept=".png, .jpg, .jpeg" name="logo_dark">
                    </div>
                    <span
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">350px
                        x 75p</span>


                </div>
            </div>

        </div>
        <div class="grid grid-cols-2 gap-5 py-4">


            <div class="card">
                <div class="card-body">
                    <h5 class=" text-lg font-medium text-gray-900 dark:text-white">{{ __('White Icon') }}</h5>
                    <div class="md:col-span-6 mb-1">
                        <div class="img-fluid"
                            style="height:100px;width:100px;background-size: cover;background-image: url({{ getImage(imagePath()['logoIcon']['path'] . '/icon.png', '?' . time()) }})">
                        </div>
                    </div>
                    <div class="col">
                        <label for="icon" class="input-group-text">Select Icon</label>
                        <input class="upload" type="file" id="icon" accept=".png" name="icon">
                    </div>
                    <span
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">64px
                        x 64px</span>

                </div>
            </div>



            <div class="card">
                <div class="card-body">
                    <h5 class=" text-lg font-medium text-gray-900 dark:text-white">{{ __('Dark Icon') }}</h5>
                    <div class="md:col-span-6 mb-1">
                        <div class="img-fluid bg-dark"
                            style="height:100px;width:100px;background-size: cover;background-image: url({{ getImage(imagePath()['logoIcon']['path'] . '/icon-dark.png', '?' . time()) }})">
                        </div>
                    </div>
                    <div class="col">
                        <label for="icon-dark" class="input-group-text">{{ __('Select Icon') }}</label>
                        <input class="upload" type="file" id="icon-dark" accept=".png" name="icon_dark">
                    </div>
                    <span
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">64px
                        x 64px</span>


                </div>
            </div>


            <div class="card">
                <div class="card-body">
                    <h5 class=" text-lg font-medium text-gray-900 dark:text-white">{{ __('Favicon') }}</h5>
                    <div class="md:col-span-6 mb-1">
                        <div class="img-fluid"
                            style="height:26px;width:26px;background-size: cover;background-image: url({{ getImage(imagePath()['logoIcon']['path'] . '/favicon.png', '?' . time()) }})">
                        </div>
                    </div>
                    <div class="col">
                        <label for="favicon" class="input-group-text">{{ __('Select Favicon') }}</label>
                        <input class="upload" type="file" id="favicon" accept=".png" name="favicon">
                    </div>
                    <small
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded
                        dark:bg-red-900 dark:text-red-300">{{ __('generate favicon on') }}
                        <a href="https://www.favicon-generator.org/">favicon-generator.org</a>
                        {{ __('then convert it to PNG from') }} <a
                            href="https://cloudconvert.com/ico-to-png">cloudconvert.com</a></small>
                </div>
            </div>

        </div>




        <div class="card">
            <div class="card-body">
                <button type="submit" class="btn btn-success">{{ __('Update') }}</button>

                <label class="text-warning">*{{ __('Please clean your browser cache after update') }}</label>
            </div>
        </div>

    </form>
@endsection

@push('style')
    <style type="text/css">
        .logoPrev {
            background-size: 100%;
        }

        .iconPrev {
            background-size: 100%;
        }
    </style>
@endpush
