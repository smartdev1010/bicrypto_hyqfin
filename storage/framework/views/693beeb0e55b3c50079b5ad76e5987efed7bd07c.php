<span class="fw-bold fs-5">
    <?php if($row->type == 1): ?>
        <?php echo e(__('Deposit')); ?>

    <?php elseif($row->type == 2): ?>
        <?php echo e(__('Withdraw')); ?>

    <?php elseif($row->type == 3): ?>
        <?php echo e(__('Transfer From Trading')); ?>

    <?php elseif($row->type == 4): ?>
        <?php echo e(__('Transfer From Funding')); ?>

    <?php endif; ?>
</span>
<?php /**PATH D:\dev\vscode\resources\views/admin/reports/views/wallet/type.blade.php ENDPATH**/ ?>