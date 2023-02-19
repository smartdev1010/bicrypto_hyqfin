<div <?php echo count($attributes) ? $column->arrayToAttributes($attributes) : ''; ?>>
    <?php $__currentLoopData = $buttons; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $button): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php echo $button->getContents($row); ?>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div><?php /**PATH /home/hyqfin/public_html/resources/views/vendor/livewire-tables/includes/columns/button-group.blade.php ENDPATH**/ ?>