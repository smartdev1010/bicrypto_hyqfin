<div
    class="<?php if($row->result == 1): ?> text-success
    <?php elseif($row->result == 2): ?>
        text-danger
    <?php elseif($row->result == 3): ?>
    <?php else: ?> <?php endif; ?>">
    <?php if($row->result == 1): ?>
        + <?php echo e(__(getAmount($row->profit))); ?> $
    <?php elseif($row->result == 2): ?>
        - <?php echo e(__(getAmount($row->profit))); ?> $
    <?php elseif($row->result == 3): ?>
        <?php echo e(__(getAmount($row->profit))); ?> $
    <?php else: ?>
        <span class="badge bg-light-warning"><?php echo e(__('Pending')); ?></span>
    <?php endif; ?>
</div>
<?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/investment_log_profit_view.blade.php ENDPATH**/ ?>