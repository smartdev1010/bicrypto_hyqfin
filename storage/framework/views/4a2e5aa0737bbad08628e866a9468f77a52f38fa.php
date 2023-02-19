<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.forex.forex-log-table', [])->html();
} elseif ($_instance->childHasBeenRendered('YNsAmIi')) {
    $componentId = $_instance->getRenderedChildComponentId('YNsAmIi');
    $componentTag = $_instance->getRenderedChildComponentTagName('YNsAmIi');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('YNsAmIi');
} else {
    $response = \Livewire\Livewire::mount('ext.forex.forex-log-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('YNsAmIi', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>
<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => 'Forex Transaction Confirmation','action' => ''.e(route('admin.forex.verify')).'','submit' => 'Verify','id' => 'forexVerify'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <input type="hidden" name="id" id="id">
        <span class="font-medium"></span><?php echo e(__('Are you sure want to verify it?')); ?>

     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/log.blade.php ENDPATH**/ ?>