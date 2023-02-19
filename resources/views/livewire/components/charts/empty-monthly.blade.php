<div wire:init="loadData" class="card col-span-2 sm:col-span-2 md:col-span-1">
    <div class="card-header justify-between">
        <div class="title-gradient">Loading...</div>
        <span
            class="rounded-full scale-125 p-1 shadow-sm hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></span>
    </div>

    <div class="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">0</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Loading...</p>
            </div>

            <x-partials.progress title="Percentage" color="#ff9800" percentage="0" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">0</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">0 Amount</p>
            </div>

            <x-partials.progress title="Percentage" color="#ff9800" percentage="0" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">0</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Loading...</p>
            </div>

            <x-partials.progress title="Percentage" color="#ff9800" percentage="0" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">0</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">0 Amount</p>
            </div>

            <x-partials.progress title="Percentage" color="#64748b" percentage="0" />
        </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:space-x-7">
        <div class="ax-transparent-gridline grid w-full grid-cols-1">
            <div style="min-height: 260px;"></div>
        </div>
    </div>
</div>
