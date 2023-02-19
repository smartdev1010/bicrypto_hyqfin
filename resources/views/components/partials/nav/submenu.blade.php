@foreach ($submenu as $subsubmenu)
    @if (($subsubmenu->status == 1 && !isset($subsubmenu->permission)) ||
        ($subsubmenu->status == 1 && (isset($subsubmenu->permission) && Gate::allows($subsubmenu->permission))))
        @php
            $submenu_active_classes = '';
            if (isset($subsubmenu->url)) {
                if ($subsubmenu->url === $_SERVER['REQUEST_URI']) {
                    $submenu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700';
                    $menu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700';
                } else {
                    $submenu_active_classes = '';
                }
            }
        @endphp
        <li class="{{ $submenu_active_classes }}">
            @if (!isset($subsubmenu->submenu))
                <a href="{{ isset($subsubmenu->url) ? url($subsubmenu->url) : 'javascript:void(0)' }}"
                    class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 pl-11 text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    target="{{ isset($subsubmenu->newTab) && $subsubmenu->newTab === true ? '_blank' : '_self' }}">
                    <i class="mr-3 icon text-xs bi bi-{{ $subsubmenu->icon ?? 'chevron-right' }}"></i>
                    <span class="flex-1 whitespace-nowrap">{{ __($subsubmenu->name) }}</span>
                </a>
            @else
                <a href="javascript:void(0)"
                    class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-{{ __($subsubmenu->name) }}"
                    data-collapse-toggle="dropdown-{{ __($subsubmenu->name) }}">

                    <i class="mr-3 icon text-xs bi bi-{{ $subsubmenu->icon ?? 'chevron-right' }}"></i>
                    <span class="flex-1 text-left whitespace-nowrap">{{ __($subsubmenu->name) }}</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <ul id="dropdown-{{ __($subsubmenu->name) }}" class="hidden py-2 space-y-2 pl-7">
                    <x-partials.nav.submenu :submenu="$subsubmenu->submenu" />
                </ul>
            @endif
        </li>
    @endif
@endforeach
