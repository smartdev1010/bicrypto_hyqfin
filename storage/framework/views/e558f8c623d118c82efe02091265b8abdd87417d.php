<?php if($row->status != 1): ?>
    <button class="btn btn-outline-success btn-sm" data-modal-toggle='forexVerify'
        onclick="$('#forexVerify').find('input[name=id]').val(<?php echo e($row->id); ?>)"><?php echo e(__('Verify Transaction')); ?>

    </button>
<?php endif; ?>
<?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/account_logs_actions_view.blade.php ENDPATH**/ ?>