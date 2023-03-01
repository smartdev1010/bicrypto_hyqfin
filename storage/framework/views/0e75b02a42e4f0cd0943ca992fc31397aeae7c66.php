<div><span class="text-warning"><?php echo e(__('TRX')); ?>:</span>
    <?php echo e($row->trx); ?></div>
<div><span class="text-warning"><?php echo e(__('Amount')); ?>:</span>
    <?php if($row->amount != 0): ?>
        <?php echo e(ttz($row->amount)); ?> <?php echo e($row->symbol); ?>

    <?php else: ?>
        <span class="badge rounded-pill bg-warning mr-1"><?php echo e(__('Pending')); ?></span>
    <?php endif; ?>
</div>
<div><span class="text-warning"><?php echo e(__('Charge')); ?>:</span>
    <?php if($row->charge != 0): ?>
        <?php echo e(ttz($row->charge)); ?> <?php echo e($row->symbol); ?>

    <?php else: ?>
        <span class="badge rounded-pill bg-warning mr-1"><?php echo e(__('Pending')); ?></span>
    <?php endif; ?>
</div>
<div><span class="text-warning"><?php echo e(__('Recieved')); ?>:</span>
    <?php if($row->amount_recieved != 0): ?>
        <?php echo e(ttz($row->amount_recieved)); ?> <?php echo e($row->symbol); ?>

    <?php else: ?>
        <span class="badge rounded-pill bg-warning mr-1"><?php echo e(__('Pending')); ?></span>
    <?php endif; ?>
</div>
<?php if($row->type == 2): ?>
    <div><span class="text-warning"><?php echo e(__('Processing Fees')); ?>:</span>
        <?php echo e(ttz($row->fees)); ?> <?php echo e($row->symbol); ?></div>
<?php endif; ?>
<div><span class="text-warning">Date:</span>
    <?php echo e(showDateTime($row->created_at, 'd M, Y h:i:s')); ?></div>
<?php /**PATH D:\dev\vscode\resources\views/admin/reports/views/wallet/info.blade.php ENDPATH**/ ?>