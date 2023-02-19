@php
    $configData = applClasses();
    use Illuminate\Support\Facades\Gate;
@endphp
<div class="main-menu menu-fixed {{ $configData['theme'] === 'dark' || $configData['theme'] === 'semi-dark' ? 'menu-dark' : 'menu-light' }} menu-accordion menu-shadow"
    data-scroll-to-active="true">
    <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
            <li class="nav-item me-auto">
                <a class="navbar-brand" href="{{ route('admin.dashboard') }}">
                    <span class="brand-logo">
                        <img id="favicon_light" class=""
                            src="{{ getImage(imagePath()['logoIcon']['path'] . '/icon.png') }}"
                            alt="{{ __('image') }}">
                        <img id="favicon_dark" class="hidden"
                            src="{{ getImage(imagePath()['logoIcon']['path'] . '/icon-dark.png') }}"
                            alt="{{ __('image') }}">
                    </span>
                    <div class="brand-text">
                        <img id="logo" class=""
                            src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo.png') }}"
                            alt="{{ __('image') }}">
                        <img id="logo_dark" class="hidden"
                            src="{{ getImage(imagePath()['logoIcon']['path'] . '/logo-dark.png') }}"
                            alt="{{ __('image') }}">
                    </div>
                </a>
            </li>
            <li class="nav-item nav-toggle">
                <a class="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse">
                    <i class="bi bi-x d-block d-xl-none text-primary toggle-icon font-medium-4"></i>
                    <i class="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            {{-- Foreach menu item starts --}}
            @if (isset($menuData[0]))
                @foreach ($menuData[0] as $menu)
                    @if (($menu->status == 1 && !isset($menu->permission)) ||
                        ($menu->status == 1 && (isset($menu->permission) && Gate::allows($menu->permission))))
                        @if (isset($menu->navheader))
                            <li class="navigation-header">
                                <span>{{ __($menu->navheader) }}</span>
                                <i class="bi bi-three-dots-vertical"></i>
                            </li>
                        @else
                            {{-- Add Custom Class with nav-item --}}
                            @php
                                $custom_classes = '';
                                if (isset($menu->classlist)) {
                                    $custom_classes = $menu->classlist;
                                }
                            @endphp
                            <li
                                class="nav-item {{ $custom_classes }} {{ isset($menu->url) ? ($menu->url === $_SERVER['REQUEST_URI'] ? 'active' : '') : '' }}">
                                <a href="{{ isset($menu->url) ? url($menu->url) : 'javascript:void(0)' }}"
                                    class="d-flex align-items-center"
                                    target="{{ isset($menu->newTab) ? '_blank' : '_self' }}">
                                    <i class="bi bi-{{ $menu->icon }}"></i>
                                    <span class="menu-title text-truncate">{{ __($menu->name) }}</span>
                                </a>
                                @if (isset($menu->submenu))
                                    @include('panels/submenu', ['menu' => $menu->submenu])
                                @endif
                            </li>
                        @endif
                    @endif
                @endforeach
            @endif
            {{-- Foreach menu item ends --}}
        </ul>
    </div>
</div>
<!-- END: Main Menu-->
