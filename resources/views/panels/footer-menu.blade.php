<footer id="footer"
    class="fixed bottom-0 right-0 px-4 pl-20 w-full dark:bg-gray-800 md:flex md:items-center md:justify-between overflow-hidden z-40 border-t backdrop-blur transition-colors duration-500 lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
    <div class="xl:flex xl:items-center xl:space-x-3 md:mb-0">
        <p class="text-sm text-center text-gray-500 dark:text-gray-400 xl:mb-0">
            &copy;
            <script>
                document.write(new Date().getFullYear())
            </script> {{ siteName() }}.
            {{ __('All rights Reserved') }}
        </p>
    </div>
    <div class="flex justify-center items-center space-x-3">
        @php
            $locales = [
                'ar' => ['lang' => 'Arabic', 'icon' => 'iq'],
                'bn' => ['lang' => 'Bengali', 'icon' => 'in'],
                'de' => ['lang' => 'German', 'icon' => 'de'],
                'en' => ['lang' => 'English', 'icon' => 'us'],
                'es' => ['lang' => 'Spanish', 'icon' => 'es'],
                'fa' => ['lang' => 'Farsi', 'icon' => 'ir'],
                'fr' => ['lang' => 'French', 'icon' => 'fr'],
                'hi' => ['lang' => 'Hindi', 'icon' => 'in'],
                'hu' => ['lang' => 'Hungarian', 'icon' => 'hu'],
                'id' => ['lang' => 'Indonesian', 'icon' => 'id'],
                'it' => ['lang' => 'Italian', 'icon' => 'it'],
                'ja' => ['lang' => 'Japanese', 'icon' => 'jp'],
                'ko' => ['lang' => 'Korean', 'icon' => 'kr'],
                'nb' => ['lang' => 'Norwegian', 'icon' => 'no'],
                'nl' => ['lang' => 'Netherlands', 'icon' => 'nl'],
                'pl' => ['lang' => 'Polish', 'icon' => 'pl'],
                'pt' => ['lang' => 'Portuguese', 'icon' => 'pt'],
                'ru' => ['lang' => 'Russain', 'icon' => 'ru'],
                'th' => ['lang' => 'Thai', 'icon' => 'th'],
                'tr' => ['lang' => 'Turkish', 'icon' => 'tr'],
                'uk' => ['lang' => 'Ukrainian', 'icon' => 'ua'],
                'ur' => ['lang' => 'Urdo', 'icon' => 'pk'],
                'vi' => ['lang' => 'Vietnamese', 'icon' => 'vn'],
                'zh' => ['lang' => 'Chinese', 'icon' => 'cn'],
            ];
            $locale = arrayToObject($locales);
        @endphp
        <button id="dropdownLanguageButton" data-dropdown-toggle="dropdownLanguage"
            class="flex p-1.5 items-center text-sm font-medium text-gray-900 rounded-full hover:text-primary-600 dark:hover:text-primary-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
            type="button">
            <span class="sr-only">Open user menu</span>
            <i
                class="h-3.5 w-3.5 rounded-full mr-2 flag-icon flag-icon-{{ $locales[Session::get('locale')]['icon'] ?? 'us' }}">
            </i>
            {{ ucfirst(Session::get('locale') ?? 'en') }}
            <svg class="w-4 h-4 mx-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
        @if (getExt(12) == 1)
            <a href="/user/livechat" target="_blank"
                class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            </a>
        @endif
        <button onclick="toggleFullScreen();"
            class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg id="toggleFullScreen" onclick="toggleFullScreen();" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>

        </button>
        {{-- <button data-tooltip-target="tooltip-options"
            class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"></path>
            </svg>

            <span class="sr-only">Options</span>
        </button> --}}
    </div>
    <script>
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                $('#toggleFullScreen').html(
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />'
                );
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    $('#toggleFullScreen').html(
                        '<path stroke-linecap="round" stroke-linejoin="round"d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />'
                    );
                }
            }
        }
    </script>
</footer>
@section('dropdowns')
    <!-- Dropdown menu -->
    <div id="dropdownLanguage"
        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1" role="none">
            @foreach ($locales as $key => $locale)
                <li>
                    <a href="{{ url('lang/' . $key) }}"
                        class="block py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                        role="menuitem">
                        <div class="inline-flex items-center">
                            <i class="h-3.5 w-3.5 rounded-full mr-2 flag-icon flag-icon-{{ $locale['icon'] }}"> </i>
                            {{ $locale['lang'] }} ({{ ucfirst($key) }})
                        </div>
                    </a>
                </li>
            @endforeach
        </ul>
    </div>
@endsection

@push('tooltips')
    <div id="tooltip-expand" role="tooltip"
        class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Expand
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    {{-- <div id="tooltip-options" role="tooltip"
        class="inline-block absolute invisible z-50 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
        Options
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div> --}}
@endpush
