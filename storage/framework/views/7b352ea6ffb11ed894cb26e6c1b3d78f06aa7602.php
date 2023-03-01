<?php $__env->startSection('content'); ?>
<?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('report.wallet-transactions', [])->html();
} elseif ($_instance->childHasBeenRendered('vSoJZnN')) {
    $componentId = $_instance->getRenderedChildComponentId('vSoJZnN');
    $componentTag = $_instance->getRenderedChildComponentTagName('vSoJZnN');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('vSoJZnN');
} else {
    $response = \Livewire\Livewire::mount('report.wallet-transactions', []);
    $html = $response->html();
    $_instance->logRenderedChild('vSoJZnN', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
<?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Approve Transfer Confirmation')).'','action' => ''.e(route('admin.report.wallet.transfer.funding.approve')).'','submit' => ''.e(__('Confirm')).'','id' => 'approveTransfer'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
  <div>
    <input type="hidden" name="trx">
    <p><?php echo e(__('Are you sure you want to approve transfer')); ?>?</p>
  </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Reject Transfer Confirmation')).'','action' => ''.e(route('admin.report.wallet.transfer.funding.reject')).'','submit' => ''.e(__('Reject')).'','id' => 'rejectTransfer'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
  <div>
    <input type="hidden" name="trx">
    <p><?php echo e(__('Are you sure you want to reject transfer')); ?>?</p>
  </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Cancel Transfer Confirmation')).'','action' => ''.e(route('admin.report.wallet.cancel')).'','submit' => ''.e(__('Cancel')).'','id' => 'cancelTransfer'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
  <div>
    <input type="hidden" name="trx">
    <p><?php echo e(__('Are you sure you want to cancel transfer?')); ?></p>
  </div>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/reports/wallet.blade.php ENDPATH**/ ?>