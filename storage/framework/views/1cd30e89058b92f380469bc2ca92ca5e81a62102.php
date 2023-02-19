<div class="my-1">
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="h-2.5 rounded-full" style="width: <?php echo e($percentage); ?>%;background-color:<?php echo e($color); ?>">
        </div>
    </div>
    <div class="flex justify-between mt-1">
        <span class="text-xs dark:text-gray-300" style="color:<?php echo e($color); ?>"><?php echo e($title); ?></span>
        <span class="text-xs dark:text-gray-300" style="color:<?php echo e($color); ?>"><?php echo e($percentage); ?>%</span>
    </div>
</div>
<?php /**PATH /home/hyqfin/public_html/resources/views/components/partials/progress.blade.php ENDPATH**/ ?>