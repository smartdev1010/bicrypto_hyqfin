<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.mlm.transactions-log-table', [])->html();
} elseif ($_instance->childHasBeenRendered('PdChvKJ')) {
    $componentId = $_instance->getRenderedChildComponentId('PdChvKJ');
    $componentTag = $_instance->getRenderedChildComponentTagName('PdChvKJ');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('PdChvKJ');
} else {
    $response = \Livewire\Livewire::mount('ext.mlm.transactions-log-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('PdChvKJ', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>
<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => 'Deposit Confirmation','action' => ''.e(route('admin.mlm.transaction.statusUpdate')).'','submit' => 'Submit','id' => 'deposit_statusUpdate'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>

        <div>
            <input type="hidden" id="id" name="id">
            <input type="hidden" id="user_id" name="user_id">
            <input type="hidden" id="type" name="type" value="deposit">
            <label for="amount" class="form-label"><?php echo e(__('Deposit Amount')); ?></label>
            <input type="number" class="form-control" id="amount" name="amount" placeholder="Amount" required>
            <small class="text-warning"><?php echo e(__('test transaction hash before approving or adding amount')); ?></small>
        </div>
        <div class="mt-1">
            <label class="form-control-label h6">Status</label>
            <select class="form-select" id="status" name="status" required>
                <option value="" selected>
                    <?php echo e(__('Choose an option')); ?>

                </option>
                <option value="1">
                    <?php echo e(__('Approve')); ?>

                </option>
                <option value="2">
                    <?php echo e(__('Reject')); ?>

                </option>
            </select>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => 'Withdraw Confirmation','action' => ''.e(route('admin.mlm.transaction.statusUpdate')).'','submit' => 'Submit','id' => 'withdraw_statusUpdate'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>

        <div>
            <input type="hidden" id="id" name="id">
            <input type="hidden" id="user_id" name="user_id">
            <input type="hidden" id="type" name="type" value="withdraw">
            <label for="wallet_address" class="form-label"><?php echo e(__('Wallet Address')); ?></label>
            <input type="text" class="form-control" id="wallet_address" name="wallet_address"
                placeholder="Wallet Address" readonly>
            <small class="text-warning"><?php echo e(__('Send to this wallet address')); ?></small>
        </div>
        <div>
            <label for="amount" class="form-label"><?php echo e(__('Withdraw Total Amount')); ?></label>
            <input type="text" class="form-control" id="amount" name="amount" placeholder="Amount" readonly>
            <small class="text-warning"><?php echo e(__('Total BV requested for withdrawal')); ?></small>
        </div>
        <div>
            <label for="amountosend" class="form-label"><?php echo e(__('Withdraw Amount To Be Paid')); ?></label>
            <input type="text" class="form-control" id="amountosend" name="amountosend" placeholder="Amount" readonly>
            <small class="text-warning"><?php echo e(__('Amount to send')); ?></small>
        </div>
        <div>
            <label for="hash" class="form-label"><?php echo e(__('Withdraw Hash')); ?></label>
            <input type="text" class="form-control" required id="hash" name="hash"
                placeholder="Transaction Hash">
            <small class="text-warning"><?php echo e(__('Write the transaction hash after sending to the client wallet')); ?></small>
        </div>
        <div class="mt-1">
            <label class="form-control-label h6"><?php echo e(__('Status')); ?></label>
            <select class="form-select" id="status" name="status" required>
                <option value="" selected>
                    <?php echo e(__('Choose an option')); ?>

                </option>
                <option value="1">
                    <?php echo e(__('Approve')); ?>

                </option>
                <option value="2">
                    <?php echo e(__('Reject')); ?>

                </option>
            </select>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/mlm/transactions_log.blade.php ENDPATH**/ ?>