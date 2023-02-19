<div class="card col-span-2 sm:col-span-2 md:col-span-1">
    <div class="card-header">
        <div class="title-gradient">
            Trades Report
        </div>
        <span
            class="rounded-full scale-125 p-1 shadow hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
            style="color:{{ $color }}">{!! $icon !!}</span>
    </div>
    <div class="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
        <div class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>

                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ $data->buy['count'] }}</span>

                    <span class="text-xs text-gray-500 dark:text-gray-200">Transaction</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Buy Orders</p>
            </div>
            <x-partials.progress title="Percentage" color="#22c55e" percentage="{{ $data->buy['percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ number_format($data->buy['cost'],2) }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Cost</p>
            </div>
            <x-partials.progress title="Percentage" color="#ff9800" percentage="{{ $data->buy['cost_percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ $data->sell['count'] }}</span>

                    <span class="text-xs text-gray-500 dark:text-gray-200">Transaction</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Sell Orders</p>
            </div>
            <x-partials.progress title="Percentage" color="#f000b9" percentage="{{ $data->sell['percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ number_format($data->sell['cost']) }}</span>

                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">Cost</p>
            </div>
            <x-partials.progress title="Percentage" color="#64748b" percentage="{{ $data->sell['cost_percentage'] }}" />
        </div>
    </div>

    <div class="mt-4 flex grow items-center justify-between px-4 sm:px-5">
        <div class="flex items-center space-x-2">
            <p class="text-xs text-slate-800 dark:text-gray-200">Since Last Week</p>
            <p class="text-slate-800 dark:text-gray-200">{{ $data->last_week }}</p>
            @if ($data->count > $data->last_week)
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12">
                    </path>
                </svg>
            @elseif($data->count < $data->last_week)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-4 w-4 text-red-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                </svg>
            @endif
        </div>
    </div>
    <div class="ax-transparent-gridline ax-rounded-b-lg mt-5">
        <div id="{{ $element }}"></div>
    </div>
    <script>
        var Chart = document.querySelector("#{{ $element }}");
        var ChartOptions;

        ChartOptions = {
            colors: ["{{ $color }}"],
            series: [{
                name: "{{ $tooltip }}",
                data: [{{ $data->chart->data }}],
            }, ],
            chart: {
                animations: {
                    enabled: false,
                },
                type: "area",
                height: 220,
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0,
                    top: -28,
                    bottom: -15,
                },
            },
            tooltip: {
                shared: true,
            },
            legend: {
                show: false,
            },
            yaxis: {
                show: false,
            },
            xaxis: {
                labels: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
            },
        };

        Chart = new ApexCharts(Chart, ChartOptions);
        Chart.render();
    </script>
</div>
