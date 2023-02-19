{{-- For submenu --}}
<ul class="menu-content">
    @if (isset($menu))
        @foreach ($menu as $submenu)
            @if ($submenu->status == 1)
                <li
                    class="{{ isset($submenu->url) ? ($submenu->url === $_SERVER['REQUEST_URI'] ? 'active' : '') : '' }}">
                    <a href="{{ isset($submenu->url) ? url($submenu->url) : 'javascript:void(0)' }}"
                        class="d-flex align-items-center"
                        target="{{ isset($submenu->newTab) && $submenu->newTab === true ? '_blank' : '_self' }}">
                        @if (isset($submenu->icon))
                            <i class="bi bi-{{ $submenu->icon }}"></i>
                        @endif
                        <span class="menu-item text-truncate">{{ __('' . $submenu->name) }}</span>
                    </a>
                    @if (isset($submenu->submenu))
                        @include('panels/user/submenu', ['menu' => $submenu->submenu])
                    @endif
                </li>
            @endif
        @endforeach
    @endif
</ul>
