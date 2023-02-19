<div>
    <div class="card">
        <div class="card-header">
            <div>
                <div class="flex items-center">
                    <span class="title-gradient">{{ __($title) }}</span>
                    @if (isset($data->percentage))
                        <span class="badge bg-primary">{{ $data->percentage }}%</span>
                    @endif
                </div>
                <div class="flex items-center">
                    @if (isset($data->count))
                        <span class="mr-1 text-2xl font-semibold"
                            style="color:{{ $color }}">{{ $data->count }}</span>
                    @endif
                    @if (isset($data->last_week))
                        <span class="badge bg-dark">{{ $data->last_week }} since last week</span>
                    @endif
                </div>
            </div>
            <span
                class="rounded-full scale-125 p-1 shadow hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
                style="color:{{ $color }}">{!! $icon !!}</span>
        </div>
        <div class="ax-transparent-gridline">
            <div id="{{ $element }}" style="min-height: 150px;"></div>
        </div>
    </div>
    <script>
        @if ($element != null)
            var Chart = document.querySelector("#{{ $element }}");
            var ChartOptions;
            ChartOptions = {
                chart: {
                    animations: {
                        enabled: false,
                    },
                    type: "area",
                    stacked: false,
                    height: 150,
                    parentHeightOffset: 0,
                    toolbar: {
                        show: false,
                        offsetY: -15,
                        tools: {
                            download: false,
                            selection: false,
                            zoom: false,
                            zoomin: false,
                            zoomout: false,
                            pan: false,
                            reset: false | '<img src="/static/icons/reset.png" width="20">',
                        },
                        autoSelected: 'pan'
                    },
                },
                colors: ["{{ $color }}"],
                series: [{
                    name: "{{ $tooltip }}",
                    @if (isset($data->chart))
                        data: [{{ $data->chart->data }}],
                    @endif
                }, ],
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: -20,
                        bottom: -8,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.1,
                        stops: [20, 100, 100, 100],
                    },
                },
                stroke: {
                    width: 2,
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
                tooltip: {
                    x: {
                        show: false
                    }
                },
            };

            Chart = new ApexCharts(Chart, ChartOptions);
            Chart.render();
    </script>
    @endif
</div>
