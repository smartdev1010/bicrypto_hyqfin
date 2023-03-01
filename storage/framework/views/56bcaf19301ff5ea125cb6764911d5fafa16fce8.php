<?php if($row->status == 1): ?>
    <span class="badge bg-success mr-1"><?php echo e(__('Completed')); ?></span>
<?php elseif($row->status == 2): ?>
    <span class="badge bg-warning mr-1"><?php echo e(__('Pending')); ?></span>
<?php elseif($row->status == 3): ?>
    <span class="badge bg-danger mr-1"><?php echo e(__('Rejected')); ?></span>
<?php endif; ?>
<?php /**PATH D:\dev\vscode\resources\views/admin/reports/views/wallet/status.blade.php ENDPATH**/ ?>