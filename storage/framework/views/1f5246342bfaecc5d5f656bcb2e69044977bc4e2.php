<?php $__env->startSection('content'); ?>
<?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.bot.bot-table', [])->html();
} elseif ($_instance->childHasBeenRendered('fBx4F3H')) {
    $componentId = $_instance->getRenderedChildComponentId('fBx4F3H');
    $componentTag = $_instance->getRenderedChildComponentTagName('fBx4F3H');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('fBx4F3H');
} else {
    $response = \Livewire\Livewire::mount('ext.bot.bot-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('fBx4F3H', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
<?php if (isset($component)) { $__componentOriginalf1845cd5202e86b80311642d324d20f01e64b953 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\StoreModal::resolve(['title' => ''.e(__('New Bot')).'','action' => ''.e(route('admin.bot.store')).'','submit' => ''.e(__('Submit')).'','id' => 'newBot'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.store-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\StoreModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
  <div class="space-y-2">

    <div class="grid gap-5 sm:grid-cols-3">
      <div>
        <label for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Title')); ?></label>
        <input type="text" id="title" name="title" aria-label="Bot Title" aria-describedby="title" required
          value="<?php echo e(old('title')); ?>"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>

      <div>
        <div class="flex justify-between">
          <label for="perc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('APR')); ?></label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="perc" name="perc" aria-label="Bot APR" placeholder="Annual Profit Rate" required aria-describedby="perc"
            value="<?php echo e(old('perc')); ?>">
          <span id="perc" for="perc"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>
      <div>
        <div class="flex justify-between">
          <label for="uses"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Uses')); ?></label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="uses" name="uses" aria-label="Bot Uses" placeholder="Uses of the bot" required aria-describedby="uses"
            value="<?php echo e(old('uses')); ?>">
          <span id="uses" for="uses"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>

    </div>

    <div>
      <label ffor="desc"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Description')); ?></label>
      <textarea id="desc" name="desc" aria-label="Bot Description" aria-describedby="desc" value="<?php echo e(old('desc')); ?>"
        rows="3" required
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your description here..."><?php echo e(old('desc')); ?></textarea>

    </div>

    <div class="grid gap-5 sm:grid-cols-3">

      <div>
        <div class="flex justify-between">
          <label for="min_profit"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Minimum Profit')); ?></label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="min_profit" name="min_profit" aria-label="Minimum Profit" aria-describedby="min_profit"
            value="<?php echo e(old('min_profit')); ?>" required>
          <span id="min_profit" for="min_profit"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <label for="max_profit"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Maximum Profit')); ?></label>

        </div>

        <div class="flex">
          <input type="number" required
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="max_profit" name="max_profit" aria-label="Maximum Profit" aria-describedby="max_profit"
            value="<?php echo e(old('max_profit')); ?>">
          <span id="max_profit" for="max_profit"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>



      <div>
        <label for="result_missed"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Result If Missed')); ?></label>
        <select class="form-select" id="result_missed" name="result_missed" required>
          <option value="" selected>
            <?php echo e(__('Select Result If Missed')); ?>

          </option>
          <option value="1">
            <?php echo e(__('Win')); ?>

          </option>
          <option value="2">
            <?php echo e(__('Lose')); ?>

          </option>
          <option value="3">
            <?php echo e(__('Draw')); ?>

          </option>
        </select>
      </div>


      <div>
        <div class="flex justify-between">
          <label for="profit_missed"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Profit If Missed')); ?></label>

        </div>

        <div class="flex">
          <input type="number"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
            id="profit_missed" name="profit_missed" aria-label="Maximum Profit" required
            aria-describedby="profit_missed" value="<?php echo e(old('profit_missed')); ?>">
          <span id="profit_missed" for="profit_missed"
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            %
          </span>
        </div>
      </div>


      <div>
        <label for="min_bot_amount"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Bot Minimum Amount')); ?></label>
        <input type="number" id="min_bot_amount" name="min_bot_amount" step="0.00000001"
          value="<?php echo e(old('min_bot_amount')); ?>" required
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>
      <div>
        <label for="max_bot_amount"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Bot Maximum Amount')); ?></label>
        <input type="number" id="max_bot_amount" name="max_bot_amount" value="<?php echo e(old('max_bot_amount')); ?>" required
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
      </div>


    </div>
    <div>

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
        file</label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help" name="image" type="file" id="image" accept=".png, .jpg, .jpeg">
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
        jpeg
        (MAX. 128x128px).</p>

    </div>

    <div>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" data-on="<?php echo e(__('Active')); ?>"
          data-off="<?php echo e(__('Disabled')); ?>" name="is_new" id="is_newEdit">
        <div onclick="$('#is_newEdit').val($('#is_newEdit').val() == 1 ? 0 : 1)" class="toggle peer">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Featured')); ?></span>
      </label>
    </div>
    <div>
      <label class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" data-on="<?php echo e(__('Active')); ?>"
          data-off="<?php echo e(__('Disabled')); ?>" name="status" id="statusEdit">
        <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Status')); ?></span>
      </label>
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
<button class="btn btn-outline-primary" data-modal-toggle="newBot"><i class="bi bi-plus-lg"></i>
  <?php echo e(__('New Bot')); ?></button>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/bot/index.blade.php ENDPATH**/ ?>