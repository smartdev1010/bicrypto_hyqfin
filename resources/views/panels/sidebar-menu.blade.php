<aside id="sidebar" class="hidden fixed left-0 z-20 flex-col flex-shrink-0 lg:w-[4rem] lg:flex duration-300"
    style="max-height: calc(100vh - 6rem)"
    :class="{
        'sidebar-menu-expanded':
            !sidebarCollapsed ||
            (sidebarCollapsed && sidebarHover) ||
            sidebarMobile,
        hidden: !sidebarMobile,
    }"
    @mouseover.debounce.100ms="
        sidebarHover = true
    " @mouseleave.debounce.100ms="sidebarHover = false"
    aria-label="Sidebar">
    <div
        class="supports-backdrop-blur:bg-white/60 relative flex h-full min-h-0 flex-1 flex-col border-r border-gray-200 bg-white bg-white/95 pt-0 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-slate-900/10">
        <div id="sidebarOverflow" class="flex flex-1 flex-col overflow-x-hidden pt-5 pb-4" style="max-height: calc(88vh)"
            :class="!sidebarCollapsed ||
                (sidebarCollapsed && sidebarHover) ||
                sidebarMobile ?
                'overflow-y-auto' :
                'overflow-y-hidden'">
            <div class="flex-1 space-y-1 divide-y divide-gray-200 px-3 dark:divide-gray-700">
                <ul class="space-y-2 pb-2" id="sidebar-ul"
                    :class="{
                        expandedMenu:
                            !sidebarCollapsed ||
                            (sidebarCollapsed && sidebarHover) ||
                            sidebarMobile,
                        collapsedMenu: !sidebarMobile,
                    }">
                    @if (isset($menuData[0]))
                        @foreach ($menuData[0] as $menu)
                            @if (
                                ($menu->status == 1 && !isset($menu->permission)) ||
                                    ($menu->status == 1 && (isset($menu->permission) && Gate::allows($menu->permission))))
                                @php
                                    $menu_active_classes = '';
                                    if (isset($menu->url)) {
                                        if ($menu->url === $_SERVER['REQUEST_URI']) {
                                            $menu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700';
                                        } else {
                                            $menu_active_classes = '';
                                        }
                                    }
                                @endphp
                                <li class="{{ $menu_active_classes }}">

                                    @if (!isset($menu->submenu))
                                        <a href="{{ isset($menu->url) ? url($menu->url) : 'javascript:void(0)' }}"
                                            target="{{ isset($menu->newTab) ? '_blank' : '_self' }}"
                                            class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">

                                            <i class="bi bi-{{ $menu->icon }}"></i>
                                            <span class="ml-3 whitespace-nowrap">{{ __($menu->name) }}</span>
                                        </a>
                                    @else
                                        <a class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                            aria-controls="dropdown-{{ __($menu->name) }}"
                                            data-collapse-toggle="dropdown-{{ __($menu->name) }}">

                                            <i class="bi bi-{{ $menu->icon }}"></i>
                                            <span
                                                class="toggle-item flex-1 ml-3 text-left whitespace-nowrap">{{ __($menu->name) }}</span>
                                            <svg class="toggle-item w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <ul id="dropdown-{{ __($menu->name) }}"
                                            class="hidden shadow-inner mt-1 space-y-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                                            <x-partials.nav.submenu :submenu="$menu->submenu" />
                                        </ul>
                                    @endif
                                </li>
                            @endif
                        @endforeach
                    @endif
                </ul>
            </div>
        </div>
    </div>

</aside>
<div class="" :class="!sidebarMobile ? 'hidden' : 'fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90'"
    @click="
        sidebarMobile = !sidebarMobile;
        sidebarCollapsed = !sidebarCollapsed;
    "></div>
