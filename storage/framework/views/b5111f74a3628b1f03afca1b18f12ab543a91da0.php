<div>
    <div class="card">
        <div class="card-header">
            <div>
                <div class="flex items-center">
                    <span class="title-gradient"><?php echo e(__($title)); ?></span>
                    <?php if(isset($data->percentage)): ?>
                        <span class="badge bg-primary"><?php echo e($data->percentage); ?>%</span>
                    <?php endif; ?>
                </div>
                <div class="flex items-center">
                    <?php if(isset($data->count)): ?>
                        <span class="mr-1 text-2xl font-semibold"
                            style="color:<?php echo e($color); ?>"><?php echo e($data->count); ?></span>
                    <?php endif; ?>
                    <?php if(isset($data->last_week)): ?>
                        <span class="badge bg-dark"><?php echo e($data->last_week); ?> since last week</span>
                    <?php endif; ?>
                </div>
            </div>
            <span
                class="rounded-full scale-125 p-1 shadow hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
                style="color:<?php echo e($color); ?>"><?php echo $icon; ?></span>
        </div>
        <div class="ax-transparent-gridline">
            <div id="<?php echo e($element); ?>" style="min-height: 150px;"></div>
        </div>
    </div>
    <script>
        <?php if($element != null): ?>
            var Chart = document.querySelector("#<?php echo e($element); ?>");
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
                colors: ["<?php echo e($color); ?>"],
                series: [{
                    name: "<?php echo e($tooltip); ?>",
                    <?php if(isset($data->chart)): ?>
                        data: [<?php echo e($data->chart->data); ?>],
                    <?php endif; ?>
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
    <?php endif; ?>
</div>
<?php /**PATH /home/hyqfin/public_html/resources/views/livewire/components/charts/area.blade.php ENDPATH**/ ?>