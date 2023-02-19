<div class="card col-span-2 sm:col-span-2 md:col-span-1">
    <div class="card-header justify-between">
        <div class="title-gradient">{{ $title }}</div>
        <span
            class="rounded-full scale-125 p-1 shadow hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
            style="color:{{ $colors[0] }}">{!! $icon !!}</span>
    </div>

    <div class="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
        <div class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ $data->first['count'] }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">{{ $tooltip[0] }}</p>
            </div>

            <x-partials.progress title="Percentage" color="{{ $colors[0] }}"
                percentage="{{ $data->first['percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ number_format($data->first['amount']) }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">{{ $tooltip[0] }} Amount</p>
            </div>

            <x-partials.progress title="Percentage" color="#ff9800"
                percentage="{{ $data->first['amount_percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ $data->second['count'] }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">{{ $tooltip[1] }}</p>
            </div>

            <x-partials.progress title="Percentage" color="{{ $colors[1] }}"
                percentage="{{ $data->second['percentage'] }}" />
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200">{{ number_format($data->second['amount']) }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200">{{ $tooltip[1] }} Amount</p>
            </div>

            <x-partials.progress title="Percentage" color="#64748b"
                percentage="{{ $data->second['amount_percentage'] }}" />
        </div>
    </div>
    <div class="ax-transparent-gridline w-full">
        <div id="{{ $element }}"></div>
    </div>
    <script>
        var Chart = document.querySelector("#{{ $element }}");
        var ChartOptions;

        ChartOptions = {
            colors: ["{{ $colors[0] }}", "{{ $colors[1] }}"],
            series: [{
                    name: "{{ $tooltip[0] }}",
                    data: [{{ $data->chart->first }}],
                },
                {
                    name: "{{ $tooltip[1] }}",
                    data: [{{ $data->chart->second }}],
                },
            ],
            chart: {
                animations: {
                    enabled: false,
                },
                height: 260,
                type: "bar",
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    barHeight: "90%",
                    columnWidth: "35%",
                },
            },
            legend: {
                show: true,
                labels: {
                    colors: 'gray',
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                labels: {
                    hideOverlappingLabels: false,
                    style: {
                        colors: 'gray',
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: -8,
                },
            },
            yaxis: {
                show: false,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                },
            },
            responsive: [{
                breakpoint: 850,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "55%",
                        },
                    },
                },
            }, ],
        };

        Chart = new ApexCharts(Chart, ChartOptions);
        Chart.render();
    </script>
</div>
