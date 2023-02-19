<?php foreach ((['component']) as $__key => $__value) {
    $__consumeVariable = is_string($__key) ? $__key : $__value;
    $$__consumeVariable = is_string($__key) ? $__env->getConsumableComponentData($__key, $__value) : $__env->getConsumableComponentData($__value);
} ?>

<?php
    $attributes = $attributes->merge(['wire:key' => 'empty-message-'.$component->id]);
    $theme = $component->getTheme();
?>

<?php if($theme === 'tailwind'): ?>
    <tr <?php echo e($attributes); ?>>
        <td colspan="<?php echo e($component->getColspanCount()); ?>">
            <div class="flex justify-center items-center space-x-2 dark:bg-gray-800">
                <span class="font-medium py-8 text-gray-400 text-lg dark:text-white"><?php echo e($component->getEmptyMessage()); ?></span>
            </div>
        </td>
    </tr>
<?php elseif($theme === 'bootstrap-4' || $theme === 'bootstrap-5'): ?>
     <tr <?php echo e($attributes); ?>>
        <td colspan="<?php echo e($component->getColspanCount()); ?>">
            <?php echo e($component->getEmptyMessage()); ?>

        </td>
    </tr>
<?php endif; ?>
<?php /**PATH D:\dev\vscode\resources\views/vendor/livewire-tables/components/table/empty.blade.php ENDPATH**/ ?>