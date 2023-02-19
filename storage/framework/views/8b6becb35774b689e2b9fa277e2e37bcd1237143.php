<?php if($row->user != null): ?>
    <a href="<?php echo e(route('admin.forex.edit', $row->id)); ?>" class="btn btn-outline-warning btn-sm"><?php echo e(__('Edit')); ?></a>
<?php endif; ?>
<?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/actions_view.blade.php ENDPATH**/ ?>