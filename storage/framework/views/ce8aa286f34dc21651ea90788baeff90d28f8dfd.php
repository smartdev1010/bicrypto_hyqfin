<span
    <?php if($row->trx_type == '+'): ?> class="text-green-400 dark:text-green-300" <?php else: ?> class="text-red-400 dark:text-red-300" <?php endif; ?>>
    <?php echo e($row->trx_type == '+' ? '+' : '-'); ?> <?php echo e(getAmount($row->amount)); ?>

    <?php echo e(isset($row->currency) ? $row->currency : $this->general->cur_text); ?></span>
<?php /**PATH D:\dev\vscode\resources\views/admin/reports/views/transaction/amount.blade.php ENDPATH**/ ?>