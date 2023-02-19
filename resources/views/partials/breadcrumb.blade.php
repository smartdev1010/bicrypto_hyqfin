<nav class="mb-5 flex justify-between items-center" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
            <span
                class="inline-flex items-center text-md font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {{ __($page_title ?? '') }}
            </span>
        </li>
    </ol>
    <div class="flex justify-end space-x-2 ">
        @stack('breadcrumb-plugins')
    </div>
</nav>
