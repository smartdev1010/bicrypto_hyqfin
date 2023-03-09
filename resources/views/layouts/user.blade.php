<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @include('partials.seo')

    <script>
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
                '(prefers-color-scheme: dark)').matches) || !('color-theme' in localStorage)) {
            document.documentElement.classList.add('dark');
            window.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            window.theme = 'light';
        }
    </script>
    @vite(['resources/css/app.css'])

    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    @yield('page-style')
    @livewireStyles

    @php
        // getAdminMenu();
        getUserMenu();
    @endphp
</head>

<body class="font-sans antialiased bg-gray-50 dark:bg-gray-900 text-slate-500 dark:text-slate-400 ">

    <div class="min-h-screen overflow-x-hidden">

        <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div class="w-[108rem] flex-none flex justify-end">
                <img src="/assets/background/docs-dark.png" alt=""
                    class="w-[90rem] flex-none max-w-none hidden dark:block" decoding="async">
            </div>
        </div>
        <div style="margin-bottom: 65px;"></div>
        <nav
            class="fixed top-0 z-40 lg:z-50 w-full flex-none backdrop-blur transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div class="py-3 px-3 lg:px-5 lg:pl-3">
                <div class="flex justify-between items-center">
                    <div class="flex justify-start items-center">
                        <a href="./" class="flex mr-14">
                            <img src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}" class="mr-3 h-8" />
                        </a>
                    </div>
                    <div class="flex items-center">
                        <a href="/app" class="btn btn-outline-secondary mx-3">
                            <i class="bi bi-chevron-left"></i>Back
                        </a>

                        <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button"
                            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div id="tooltip-toggle" role="tooltip"
                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                            Toggle dark mode
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        @vite(['resources/js/dark-mode.js'])

                        <div class="flex items-center ml-3">
                            <livewire:components.nav.profile />
                        </div>
                    </div>
                </div>
            </div>
        </nav>


        <div id="app-content" class="flex overflow-hidden">
            <div id="main-content"
                class="relative mb-10 h-full w-full overflow-y-auto bg-gray-50 p-5 duration-300 dark:bg-gray-900">
                @if (Request::is('admin**') && !Request::is('admin/template/index'))
                    @include('partials.breadcrumb')
                @endif
                @yield('vendor-scripts')
                @yield('content')
            </div>

        </div>

        @include('panels.footer-menu')

        {{-- @include('partials.cookie') --}}
        @include('partials.notify')

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
            integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        @stack('modals')
        @yield('dropdowns')
        @stack('tooltips')
    </div>
    @vite(['resources/js/app.js'])
    @yield('page-scripts')
    @livewireScripts
</body>

</html>
