<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.forex.forex-table', [])->html();
} elseif ($_instance->childHasBeenRendered('NoxDKax')) {
    $componentId = $_instance->getRenderedChildComponentId('NoxDKax');
    $componentTag = $_instance->getRenderedChildComponentTagName('NoxDKax');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('NoxDKax');
} else {
    $response = \Livewire\Livewire::mount('ext.forex.forex-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('NoxDKax', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\StoreModal::resolve(['title' => ''.e(__('New Forex Account')).'','action' => ''.e(route('admin.forex.store')).'','submit' => ''.e(__('Submit')).'','id' => 'newForexAccount'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.store-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\StoreModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div class="grid gap-5 sm:grid-cols-4">
            <div>
                <label for="number"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('MT Account No')); ?></label>
                <input type="number" id="number" name="number" aria-label="Account number" aria-describedby="number"
                    value="<?php echo e(old('number')); ?>"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('MT Password')); ?></label>
                <input type="text" id="password" name="password" aria-label="password" aria-describedby="password"
                    value="<?php echo e(old('password')); ?>"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="balance"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('MT Balance')); ?></label>
                <input type="number" id="balance" name="balance" aria-label="MT Balance" aria-describedby="balance"
                    value="<?php echo e(old('balance')); ?>"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>

            <div>

                <label for="broker"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('MT Broker')); ?></label>
                <input type="text" id="broker" name="broker" aria-label="MT Broker" aria-describedby="broker"
                    value="<?php echo e(old('broker')); ?>"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
            </div>



            <div>
                <label for="mt_version"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('MT Version')); ?></label>
                <select class="form-select" id="mt" name="mt">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <option value="4">
                        MT4
                    </option>
                    <option value="5">
                        MT5
                    </option>
                </select>
            </div>


            <div>
                <label for="signal1_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Select Signal')); ?>

                    1</label>
                <select class="form-select" id="signal1_id" name="signal1_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <?php $__currentLoopData = $signals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $signal): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($signal->id); ?>">
                            <?php echo e($signal->title); ?>

                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>

            <div>
                <label for="signal2_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Select Signal')); ?>

                    2</label>
                <select class="form-select" id="signal2_id" name="signal2_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <?php $__currentLoopData = $signals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $signal): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($signal->id); ?>">
                            <?php echo e($signal->title); ?>

                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>

            <div>
                <label for="signal3_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Select Signal')); ?>

                    3</label>
                <select class="form-select" id="signal3_id" name="signal3_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <?php $__currentLoopData = $signals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $signal): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($signal->id); ?>">
                            <?php echo e($signal->title); ?>

                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>

            <div>
                <label for="signal4_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Select Signal')); ?>

                    4</label>
                <select class="form-select" id="signal4_id" name="signal4_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <?php $__currentLoopData = $signals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $signal): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($signal->id); ?>">
                            <?php echo e($signal->title); ?>

                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>

            <div>
                <label for="signal5_id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Select Signal')); ?>

                    5</label>
                <select class="form-select" id="signal5_id" name="signal5_id">
                    <option value="" selected disabled="">
                        Choose a version
                    </option>
                    <?php $__currentLoopData = $signals; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $signal): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($signal->id); ?>">
                            <?php echo e($signal->title); ?>

                        </option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>
        </div>
        <div>
            <label class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="0" class="sr-only peer" data-on="<?php echo e(__('Active')); ?>"
                    data-off="<?php echo e(__('Disabled')); ?>" name="status" id="statusNew">
                <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)"
                    class="toggle peer">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Status')); ?></span>
            </label>
        </div>


     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953)): ?>
<?php $component = $__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953; ?>
<?php unset($__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>



<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/index.blade.php ENDPATH**/ ?>