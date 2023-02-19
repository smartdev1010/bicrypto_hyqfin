<div wire:init="loadData" class="card col-span-2 sm:col-span-2 md:col-span-1">
    <div class="card-header justify-between">
        <div class="title-gradient">Loading...</div>
        <span
            class="rounded-full scale-125 p-1 shadow-sm hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25">{!! $icon !!}</span>
    </div>
    <div class="mt-4 grid grid-cols-2 gap-3 px-4 sm:mt-5 sm:grid-cols-4 sm:gap-5 sm:px-5 lg:mt-6">
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-gray-600">
            <div class="flex justify-between space-x-1">
                <p class="text-xl font-semibold text-slate-700 dark:text-gray-100">
                    0
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            </div>
            <p class="mt-1 text-xs text-slate-800 dark:text-gray-200">Loading...</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-gray-600">
            <div class="flex justify-between">
                <p class="text-xl font-semibold text-slate-700 dark:text-gray-100">
                    0
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <p class="mt-1 text-xs text-slate-800 dark:text-gray-200">Loading...</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-gray-600">
            <div class="flex justify-between">
                <p class="text-xl font-semibold text-slate-700 dark:text-gray-100">
                    0
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            </div>
            <p class="mt-1 text-xs text-slate-800 dark:text-gray-200">Loading...</p>
        </div>
        <div class="rounded-lg bg-slate-100 p-4 dark:bg-gray-600">
            <div class="flex justify-between">
                <p class="text-xl font-semibold text-slate-700 dark:text-gray-100">
                    0
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6 text-yellow-600 dark:text-yellow-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <p class="mt-1 text-xs text-slate-800 dark:text-gray-200">Loading...</p>
        </div>
    </div>
    <div class="ax-transparent-gridline ax-rounded-b-lg mt-5">
        <div style="min-height: 220px"></div>
    </div>
</div>
