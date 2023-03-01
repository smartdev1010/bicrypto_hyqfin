<?php if($row->status != 1): ?>
<button class="btn btn-outline-primary btn-sm" data-modal-toggle='forexinvestmentSet'
  onclick="$('#forexinvestmentSet').find('input[name=log_id]').val(<?php echo e($row->id); ?>)"><?php echo e(__('Start and Stop')); ?>

</button>
<?php endif; ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/logs_actions_view.blade.php ENDPATH**/ ?>