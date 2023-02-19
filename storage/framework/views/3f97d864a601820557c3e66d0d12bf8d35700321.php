<?php $__env->startSection('content'); ?>
<?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.forex.forex-investment-table', [])->html();
} elseif ($_instance->childHasBeenRendered('D4w7K1q')) {
    $componentId = $_instance->getRenderedChildComponentId('D4w7K1q');
    $componentTag = $_instance->getRenderedChildComponentTagName('D4w7K1q');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('D4w7K1q');
} else {
    $response = \Livewire\Livewire::mount('ext.forex.forex-investment-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('D4w7K1q', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
<?php if (isset($component)) { $__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\StoreModal::resolve(['title' => ''.e(__('New Investment Plan')).'','action' => ''.e(route('admin.forex.investment.store')).'','submit' => ''.e(__('Submit')).'','id' => 'newForexInvestment'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.store-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\StoreModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>


  <div class="grid gap-5 sm:grid-cols-3">
    <div>
      <label for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Plan Title')); ?></label>
      <input type="text" id="title" name="title" aria-label="Plan Title" aria-describedby="title"
        value="<?php echo e(old('title')); ?>" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="min" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Minimum')); ?></label>
      <input ype="number" id="min" name="min" aria-label="min" aria-describedby="password" value="<?php echo e(old('min')); ?>"
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>

    <div>
      <label for="max" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Maximum')); ?></label>
      <input type="number" id="max" name="max" aria-label="max" aria-describedby="password" value="<?php echo e(old('max')); ?>"
        required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="duration"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Duration (Days)')); ?></label>
      <input ype="number" id="duration" name="duration" aria-label="Duration" aria-describedby="duration"
        value="<?php echo e(old('duration')); ?>" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>
      <label for="roi"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Return on Investment')); ?></label>
      <input ype="number" id="roi" name="roi" aria-label="Return on Investment" aria-describedby="roi"
        value="<?php echo e(old('roi')); ?>" required
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
    </div>
    <div>

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
        file</label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help" name="image" type="file" id="image" accept=".png, .jpg, .jpeg">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
        jpeg
        (MAX. 64x64px).</p>

    </div>

  </div>

  <div class="grid gap-5 sm:grid-cols-1">
    <div>
      <label ffor="desc"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Description')); ?></label>
      <textarea id="desc" name="desc" aria-label="Bot Description" aria-describedby="desc" value="<?php echo e(old('desc')); ?>"
        required rows="3"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your description here..."><?php echo e(old('desc')); ?></textarea>

    </div>
    <div>

      <div class="mb-2">
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="0" class="sr-only peer" data-on="<?php echo e(__('Active')); ?>"
            data-off="<?php echo e(__('Disabled')); ?>" name="is_new" id="is_newNew">
          <div onclick="$('#is_newNew').val($('#is_newNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Featured')); ?></span>
        </label>
      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="0" class="sr-only peer" data-on="<?php echo e(__('Active')); ?>"
            data-off="<?php echo e(__('Disabled')); ?>" name="status" id="statusNew">
          <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Status')); ?></span>
        </label>
      </div>
    </div>
  </div>

 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953)): ?>
<?php $component = $__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953; ?>
<?php unset($__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
<button class="btn btn-outline-primary" data-modal-toggle="newForexInvestment"><i class="bi bi-plus-lg"></i>
  <?php echo e(__('New Investment Plan')); ?></button>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/index.blade.php ENDPATH**/ ?>