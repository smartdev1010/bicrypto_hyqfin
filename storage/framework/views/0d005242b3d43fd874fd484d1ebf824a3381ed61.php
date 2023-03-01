<a data-bs-toggle="tooltip" data-bs-placement="top" title="<?php echo e(__('Add/Subtract Balance')); ?>"
    data-address="<?php echo e($row->address); ?>" data-symbol="<?php echo e($row->symbol); ?>" class="btn btn-icon btn-success btn-sm"
    data-modal-toggle="addSubModal"
    onclick="$('#addSubModal').find('input[name=address]').val($(this).data('address'));
                                                $('#addSubModal').find('input[name=symbol]').val($(this).data('symbol'));">
    <i class="bi bi-cash"></i>
</a>
<?php if($row->provider != 'funding' && $row->provider != 'mainnet' && $row->provider != 'testnet'): ?>
    <form class="ml-1" method="POST" action="<?php echo e(route('admin.wallet.regenerate')); ?>">
        <?php echo csrf_field(); ?>
        <input type="hidden" id="user_id" name="user_id" value="<?php echo e($this->user); ?>">
        <input type="hidden" id="symbol" name="symbol" value="<?php echo e($row->symbol); ?>">
        <input type="hidden" id="address" name="address" value="<?php echo e($row->address); ?>">
        <input type="hidden" id="type" name="type" value="<?php echo e($row->type); ?>">
        <button type="submit" class="btn btn-icon btn-warning btn-sm" data-bs-toggle="tooltip" data-bs-placement="top"
            title="<?php echo e(__('Regenerate row')); ?>"><i class="bi bi-arrow-repeat"></i></button>
    </form>
<?php endif; ?>
<?php /**PATH D:\dev\vscode\resources\views/admin/users/wallets_actions_view.blade.php ENDPATH**/ ?>