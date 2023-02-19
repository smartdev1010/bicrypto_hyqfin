<div wire:init="loadData">
    <div class="card">
        <div class="card-header">
            <div>
                <div class="flex items-center">
                    <span class="title-gradient">Loading...</span>
                    <span class="badge bg-primary">0%</span>
                </div>
                <div class="flex items-center">
                    <span class="mr-1 text-2xl font-semibold">0</span>
                    <span class="badge bg-dark">0 since last week</span>
                </div>
            </div>
            <span
                class="rounded-full scale-125 p-1 shadow-sm hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
                style="color:{{ $color }}"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg></span>
        </div>
        <div class="ax-transparent-gridline">
            <div style="min-height: 150px;"></div>
        </div>
    </div>
</div>
