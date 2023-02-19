<div wire:init="loadData">
    <?php $__currentLoopData = $adminNotifications; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notification): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <a href="<?php echo e(route('admin.notification.read', $notification->id)); ?>"
            class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
            <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                    src="<?php echo e(getImage(imagePath()['profileImage']['path'] . '/' . @$notification->user->profile_photo_path, imagePath()['profileImage']['size'])); ?>"
                    alt="Jese image">
                <div
                    class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                        </path>
                        <path
                            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">New notification
                    from <span
                        class="font-semibold text-gray-900 dark:text-white"><?php echo e(@$notification->user->username); ?></span>:
                    "<?php echo e(__($notification->title)); ?>"</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">
                    <?php echo e($notification->created_at->diffForHumans()); ?></div>
            </div>
        </a>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH /home/hyqfin/public_html/resources/views/livewire/components/panels/admin-notifications.blade.php ENDPATH**/ ?>