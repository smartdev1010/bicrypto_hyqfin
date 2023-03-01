<?php $__env->startSection('content'); ?>
    <div class="grid grid-cols-2">
        <form action="<?php echo e(route('admin.users.email.single', $user->id)); ?>" method="POST">
            <?php echo csrf_field(); ?>
            <div class="card col-span-2 sm:col-span-2 xl:col-span-1">
                <div class="card-body space-y-4">
                    <div>
                        <label for="subject"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Subject')); ?></label>
                        <input type="text" id="subject" name="subject"
                            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="<?php echo e(__('Email subject')); ?>" required>
                    </div>
                    <div>
                        <label for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"><?php echo e(__('Message')); ?></label>
                        <textarea id="message" rows="6"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            name="message" placeholder="<?php echo e(__('Your message')); ?>"></textarea>
                    </div>
                </div>

                <div class="card-footer text-end">
                    <button type="submit" class="btn btn-outline-primary"><?php echo e(__('Send Email')); ?></button>
                </div>
            </div>
        </form>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-script'); ?>
    <script src="//js.nicedit.com/nicEdit-latest.js" type="text/javascript"></script>
    <script type="text/javascript">
        bkLib.onDomLoaded(nicEditors.allTextAreas);
    </script>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.users.all')); ?>" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        <?php echo e(__('Users')); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/users/email_single.blade.php ENDPATH**/ ?>