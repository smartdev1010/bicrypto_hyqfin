<div class="card col-span-2 sm:col-span-2 md:col-span-1">
    <div class="card-header justify-between">
        <div class="title-gradient"><?php echo e($title); ?></div>
        <span
            class="rounded-full scale-125 p-1 shadow hover:bg-gray-300/20 focus:bg-gray-300/20 active:bg-gray-300/25"
            style="color:<?php echo e($colors[0]); ?>"><?php echo $icon; ?></span>
    </div>

    <div class="grid grid-cols-1 gap-4 px-4 sm:gap-5 sm:px-5 lg:grid-cols-2">
        <div class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200"><?php echo e($data->first['count']); ?></span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200"><?php echo e($tooltip[0]); ?></p>
            </div>

            <?php if (isset($component)) { $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057 = $component; } ?>
<?php $component = App\View\Components\Partials\Progress::resolve(['title' => 'Percentage','color' => ''.e($colors[0]).'','percentage' => ''.e($data->first['percentage']).''] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.progress'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Progress::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057)): ?>
<?php $component = $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057; ?>
<?php unset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057); ?>
<?php endif; ?>
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200"><?php echo e(number_format($data->first['amount'])); ?></span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200"><?php echo e($tooltip[0]); ?> Amount</p>
            </div>

            <?php if (isset($component)) { $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057 = $component; } ?>
<?php $component = App\View\Components\Partials\Progress::resolve(['title' => 'Percentage','color' => '#ff9800','percentage' => ''.e($data->first['amount_percentage']).''] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.progress'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Progress::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057)): ?>
<?php $component = $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057; ?>
<?php unset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057); ?>
<?php endif; ?>
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200"><?php echo e($data->second['count']); ?></span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">Order</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200"><?php echo e($tooltip[1]); ?></p>
            </div>

            <?php if (isset($component)) { $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057 = $component; } ?>
<?php $component = App\View\Components\Partials\Progress::resolve(['title' => 'Percentage','color' => ''.e($colors[1]).'','percentage' => ''.e($data->second['percentage']).''] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.progress'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Progress::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057)): ?>
<?php $component = $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057; ?>
<?php unset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057); ?>
<?php endif; ?>
        </div>
        <div
            class="rounded-lg border border-slate-150 p-4 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div class="flex justify-between">
                <div>
                    <span
                        class="text-2xl font-medium text-slate-700 dark:text-gray-200"><?php echo e(number_format($data->second['amount'])); ?></span>
                    <span class="text-xs text-gray-500 dark:text-gray-200">$</span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-200"><?php echo e($tooltip[1]); ?> Amount</p>
            </div>

            <?php if (isset($component)) { $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057 = $component; } ?>
<?php $component = App\View\Components\Partials\Progress::resolve(['title' => 'Percentage','color' => '#64748b','percentage' => ''.e($data->second['amount_percentage']).''] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.progress'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Progress::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057)): ?>
<?php $component = $__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057; ?>
<?php unset($__componentOriginalc0cca071db90b85c7c3783d54e71844d2e049057); ?>
<?php endif; ?>
        </div>
    </div>
    <div class="ax-transparent-gridline w-full">
        <div id="<?php echo e($element); ?>"></div>
    </div>
    <script>
        var Chart = document.querySelector("#<?php echo e($element); ?>");
        var ChartOptions;

        ChartOptions = {
            colors: ["<?php echo e($colors[0]); ?>", "<?php echo e($colors[1]); ?>"],
            series: [{
                    name: "<?php echo e($tooltip[0]); ?>",
                    data: [<?php echo e($data->chart->first); ?>],
                },
                {
                    name: "<?php echo e($tooltip[1]); ?>",
                    data: [<?php echo e($data->chart->second); ?>],
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
<?php /**PATH D:\dev\vscode\resources\views/livewire/components/charts/monthly.blade.php ENDPATH**/ ?>