<div>
    <button type="button"
        class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
        <span class="sr-only">Open user menu</span>
        @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
            <img class="w-8 h-8 rounded-full"
                src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size']) }}"
                alt="{{ $user->name }}" alt="user photo">
        @endif
    </button>
</div>

<div class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    id="dropdown-2">
    <div class="py-3 px-4" role="none">
        <p class="text-sm text-gray-900 dark:text-white" role="none">
            {{ $user->name }}
        </p>
        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
            {{ $user->email }}
        </p>
    </div>
    <ul class="py-1" role="none">
        <x-jet-responsive-nav-link
            href="{{ Route::has('admin.profile.show') ? route('admin.profile.show') : 'javascript:void(0)' }}"
            :active="request()->routeIs('profile.show')"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
            {{ __('Profile') }}
        </x-jet-responsive-nav-link>
        {{-- @if (Laravel\Jetstream\Jetstream::hasApiFeatures())
            <x-jet-responsive-nav-link href="{{ route('api-tokens.index') }}" :active="request()->routeIs('api-tokens.index')"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                {{ __('API Tokens') }}
            </x-jet-responsive-nav-link>
        @endif --}}
        <form method="POST" action="{{ route('logout') }}" x-data>
            @csrf

            <x-jet-responsive-nav-link href="{{ route('logout') }}" @click.prevent="$root.submit();">
                {{ __('Log Out') }}
            </x-jet-responsive-nav-link>
        </form>
    </ul>
</div>
