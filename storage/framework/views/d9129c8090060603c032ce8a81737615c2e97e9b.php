<?php $__env->startSection('content'); ?>
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title"><?php echo e(__('Providers')); ?></h4>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    <?php echo e(__('Provider')); ?> </th>
                                <th scope="col" class="px-6 py-3">
                                    <?php echo e(__('API Connection')); ?>

                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <?php echo e(__('Status')); ?>

                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <?php echo e(__('Action')); ?>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $providers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $provider): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <th scope="row"
                                        class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <div class="flex  items-center">
                                            <img class="avatar-content mr-3" style="width:110px;height:35px"
                                                src="<?php echo e(getImage('assets/images/providers/' . strtolower($provider->title) . '.jpg')); ?>" />
                                            <?php echo e($provider->name); ?>


                                        </div>
                                    </th>

                                    <td class="px-6 py-2">
                                        <?php if($provider->status == 1): ?>
                                            <?php if($connection == 1): ?>
                                                <span class="badge bg-success"><?php echo e(__('Connected Successfully')); ?></span>
                                            <?php elseif($connection == 0): ?>
                                                <span class="badge bg-danger"><?php echo e(__('Connection Failed')); ?></span>
                                            <?php else: ?>
                                            <?php endif; ?>
                                        <?php else: ?>
                                        <?php endif; ?>
                                    </td>

                                    <td class="px-6 py-2">
                                        <?php if($provider->development != 1): ?>
                                            <?php if($provider->status == 1): ?>
                                                <span class="badge bg-success"><?php echo e(__('Active')); ?></span>
                                            <?php else: ?>
                                                <span class="badge bg-warning"><?php echo e(__('Disabled')); ?></span>
                                            <?php endif; ?>
                                        <?php else: ?>
                                            <span class="badge bg-secondary"><?php echo e(__('In Development')); ?></span>
                                        <?php endif; ?>
                                    </td>
                                    <td class="px-6 py-2 space-y-2">
                                        <?php if($provider->development == 1): ?>
                                        <?php else: ?>
                                            <?php if($provider->installed == 1): ?>
                                                <?php if($provider->status == 1): ?>
                                                    <?php
                                                        $res = $api->check_update($provider->product_id);
                                                    ?>
                                                    <?php if($res['status']): ?>
                                                        <a type="button" class="btn btn-warning btn-sm" style="top:80%"
                                                            href="<?php echo e(route('admin.provider.install', [$provider->product_id])); ?>">
                                                            <i class="bi bi-download"></i> <?php echo e(__('Update')); ?>

                                                            V<?php echo e($res['version']); ?>

                                                            <?php echo e(__('Available')); ?></a>
                                                    <?php endif; ?>
                                                    <div class="space-x-2">
                                                        <a href="<?php echo e(route('admin.provider.currencies.index', $provider->id)); ?>"
                                                            class="btn btn-info btn-sm" title="Enable/Disable Currencies">
                                                            <?php echo e(__('Currencies')); ?>

                                                        </a>
                                                        <a href="<?php echo e(route('admin.provider.markets.index', $provider->id)); ?>"
                                                            class="btn btn-info btn-sm" title="Enable/Disable Market Pairs">
                                                            <?php echo e(__('Markets')); ?>

                                                        </a>
                                                        <a href="<?php echo e(route('admin.provider.balances', $provider->id)); ?>"
                                                            class="btn btn-info btn-sm"
                                                            title="CHeck balances and debug errors in provider api connection">
                                                            <?php echo e(__('Debug')); ?>

                                                        </a>
                                                        <a href="<?php echo e(route('admin.provider.refresh')); ?>"
                                                            class="btn btn-icon btn-primary btn-sm" title="Refresh">
                                                            <i class="bi bi-arrow-repeat"></i>
                                                        </a>
                                                    </div>
                                                <?php endif; ?>
                                                <a href="<?php echo e(route('admin.provider.edit', $provider->id)); ?>"
                                                    class="btn btn-icon btn-warning btn-sm" title="<?php echo e(__('Edit')); ?>">
                                                    <i class="bi bi-pencil-square"></i>
                                                </a>
                                                <?php if($provider->status == 0): ?>
                                                    <button type="button"
                                                        onclick="
                                                    $('#activateModal').find('.provider-name').text('<?php echo e(__($provider->name)); ?>');
                                                    $('#activateModal').find('input[name=id]').val('<?php echo e($provider->id); ?>');"
                                                        class="btn btn-icon btn-outline-success btn-sm"
                                                        data-modal-toggle="activateModal" title="<?php echo e(__('Enable')); ?>">
                                                        <i class="bi bi-eye"></i>
                                                    </button>
                                                <?php else: ?>
                                                    <span title="<?php echo e(__('Disable')); ?>">
                                                        <button
                                                            type="button"onclick="
                                                        $('#deactivateModal').find('.provider-name').text('<?php echo e(__($provider->name)); ?>');
                                                        $('#deactivateModal').find('input[name=id]').val('<?php echo e($provider->id); ?>');"
                                                            class="btn btn-icon btn-outline-danger btn-sm"
                                                            data-modal-toggle="deactivateModal">
                                                            <i class="bi bi-eye-slash"></i>
                                                        </button>
                                                    </span>
                                                <?php endif; ?>
                                                <?php if($provider->title != 'coinbasepro'): ?>
                                                    <a href="<?php echo e(route('admin.provider.activater', [$provider->product_id])); ?>"
                                                        class="btn btn-success btn-sm ml-1"
                                                        title="Reverify if you license show invalid error">
                                                        <?php echo e(__('Re-Verify License')); ?>

                                                    </a>
                                                <?php endif; ?>
                                            <?php else: ?>
                                                <?php if($provider->activated == 0): ?>
                                                    <a href="<?php echo e(route('admin.provider.activater', [$provider->product_id])); ?>"
                                                        class="btn btn-icon btn-success btn-sm ml-1"
                                                        title="<?php echo e(__('Verify License')); ?>">
                                                        <i class="bi bi-check-lg"></i>
                                                    </a>
                                                <?php else: ?>
                                                    <a href="<?php echo e(route('admin.provider.install', [$provider->product_id])); ?>"
                                                        class="btn btn-icon btn-dark btn-sm ml-1"
                                                        title="<?php echo e(__('Install')); ?>">
                                                        <i class="bi bi-download"></i>
                                                    </a>
                                                    <?php if($provider->title != 'coinbasepro'): ?>
                                                        <a href="<?php echo e(route('admin.provider.activater', [$provider->product_id])); ?>"
                                                            class="btn btn-icon btn-success btn-sm ml-1"
                                                            title="<?php echo e(__('Re-Verify License')); ?>">
                                                            <i class="bi bi-check-lg"></i>
                                                        </a>
                                                    <?php endif; ?>
                                                <?php endif; ?>
                                            <?php endif; ?>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <tr>
                                    <td class="text-muted text-center" colspan="100%"><?php echo e(__($empty_message)); ?></td>
                                </tr>
                            <?php endif; ?>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Provider Activation Confirmation')).'','action' => ''.e(route('admin.provider.activate')).'','submit' => ''.e(__('Activate')).'','id' => 'activateModal','done' => 'reload'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" name="id">
            <p><?php echo e(__('Are you sure to activate')); ?> <span class="fw-bold currency-name"></span>
                <?php echo e(__('provider')); ?>?</p>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Provider Deactivation Confirmation')).'','btn' => 'danger','action' => ''.e(route('admin.provider.deactivate')).'','submit' => ''.e(__('Deactivate')).'','id' => 'deactivateModal','done' => 'reload'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" name="id">
            <p><?php echo e(__('Are you sure to deactivate')); ?> <span class="fw-bold provider-name"></span>
                <?php echo e(__('provider')); ?>?</p>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/provider/index.blade.php ENDPATH**/ ?>