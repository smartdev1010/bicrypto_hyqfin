<?php $__env->startSection('content'); ?>
<div class="card">
  <div class="card-header flex justify-between items-center">
    <h4 class="card-title"><?php echo e('Editing ' . $plan->title . ' plan'); ?></h4>

  </div>
  <form action="<?php echo e(route('admin.forex.investment.update')); ?>" method="POST" enctype="multipart/form-data"
    id="planUpdate">
    <?php echo csrf_field(); ?>
    <input type="hidden" name="id" id="id" value="<?php echo e($plan->id); ?>">
    <div class="card-body">
      <div class="grid gap-5 sm:grid-cols-3">

        <div>
          <label for="title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Plan Title')); ?></label>
          <input type="text" id="title" name="title" aria-label="Plan Title" aria-describedby="title"
            value="<?php echo e($plan->title); ?>" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="min"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Minimum')); ?></label>
          <input type="text" id="min" name="min" aria-label="min" aria-describedby="password" value="<?php echo e($plan->min); ?>"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="max"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Maximum')); ?></label>
          <input type="text" id="max" name="max" aria-label="max" aria-describedby="password" value="<?php echo e($plan->max); ?>"
            required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="duration"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Duration (Days)')); ?></label>
          <input type="text" id="duration" name="duration" aria-label="Duration" aria-describedby="duration"
            value="<?php echo e($plan->duration); ?>" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label for="roi"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Return on Investment')); ?></label>
          <input type="text" id="roi" name="roi" aria-label="Return on Investment" aria-describedby="roi"
            value="<?php echo e($plan->roi); ?>" required
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
            file</label>
          <div class="flex">
            <img class="img-thumbnail mr-3" style="max-width: 64px"
              src="<?php echo e(getImage(imagePath()['forex_investment']['path'] . '/' . $plan->image, imagePath()['forex_investment']['path'])); ?>" />
            <div>
              <input class="upload" aria-describedby="file_input_help" name="image" type="file" id="image"
                accept=".png, .jpg, .jpeg">
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
                jpeg
                (MAX. 64x64px).</p>
            </div>
          </div>
        </div>
      </div>


      <div class="grid grid-cols-1 gap-5 my-5">

        <div>
          <label ffor="desc"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Description')); ?></label>
          <textarea id="desc" name="desc" aria-describedby="desc" value="<?php echo e($plan->desc); ?>" rows="3" required
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your description here..."><?php echo e($plan->desc); ?></textarea>

        </div>




      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="<?php echo e($plan->is_new); ?>" <?php if($plan->is_new == 1): ?> checked <?php endif; ?> class="sr-only
          peer"
          data-on="<?php echo e(__('Active')); ?>" data-off="<?php echo e(__('Disabled')); ?>" name="is_new"
          id="is_newNew">
          <div onclick="$('#is_newNew').val($('#is_newNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Featured')); ?></span>
        </label>
      </div>
      <div>
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="<?php echo e($plan->status); ?>" <?php if($plan->status == 1): ?> checked <?php endif; ?> class="sr-only
          peer"
          data-on="<?php echo e(__('Active')); ?>" data-off="<?php echo e(__('Disabled')); ?>" name="status"
          id="statusNew">
          <div onclick="$('#statusNew').val($('#statusNew').val() == 1 ? 0 : 1)" class="toggle peer">
          </div>
          <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Status')); ?></span>
        </label>
      </div>
    </div>

    <div class="card-footer text-end">
      <button type="submit" class="btn btn-success"><?php echo e(__('Edit')); ?></button>
    </div>
  </form>
</div>
<?php $__env->stopSection(); ?>


<?php $__env->startPush('breadcrumb-plugins'); ?>
<a href="<?php echo e(route('admin.forex.investment.index')); ?>" class="btn btn-outline-primary"><i class="bi bi-chevron-left"></i>
  <?php echo e(__('Back')); ?></a>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/edit.blade.php ENDPATH**/ ?>