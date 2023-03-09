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
    <!-- Scripts -->
    @vite(['resources/css/app.css'])

    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    @yield('page-style')
    @livewireStyles

    @php
        getAdminMenu();
        // getUserMenu();
    @endphp
</head>

<body class="font-sans antialiased bg-gray-50 dark:bg-gray-900 text-slate-500 dark:text-slate-400 ">

    <div class="min-h-screen overflow-x-hidden" x-data="{
        sidebarCollapsed: $persist(true),
        sidebarHover: false,
        sidebarMobile: false,
    }">

        @include('panels.navigation-menu')

        <div id="app-content" class="flex overflow-hidden">

            @include('panels.sidebar-menu')
            <div id="main-content"
                class="relative mb-10 h-full w-full overflow-y-auto bg-gray-50 p-5 duration-300 dark:bg-gray-900 lg:ml-[4rem]"
                :class="{
                    'sidebar-main-expanded':
                        !sidebarCollapsed ||
                        (sidebarCollapsed && sidebarHover) ||
                        sidebarMobile,
                }">
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
