

<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('withdrawal.gateways', [])->html();
} elseif ($_instance->childHasBeenRendered('hQERsDB')) {
    $componentId = $_instance->getRenderedChildComponentId('hQERsDB');
    $componentTag = $_instance->getRenderedChildComponentTagName('hQERsDB');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('hQERsDB');
} else {
    $response = \Livewire\Livewire::mount('withdrawal.gateways', []);
    $html = $response->html();
    $_instance->logRenderedChild('hQERsDB', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>



<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a class="btn btn-primary" href="<?php echo e(route('admin.withdraw.method.create')); ?>"><i
            class="bi bi-plus"></i><?php echo e(__('Add new')); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/withdraw/index.blade.php ENDPATH**/ ?>