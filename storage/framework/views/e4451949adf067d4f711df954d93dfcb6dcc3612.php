

<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('report.transactions', [])->html();
} elseif ($_instance->childHasBeenRendered('2crbVAs')) {
    $componentId = $_instance->getRenderedChildComponentId('2crbVAs');
    $componentTag = $_instance->getRenderedChildComponentTagName('2crbVAs');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('2crbVAs');
} else {
    $response = \Livewire\Livewire::mount('report.transactions', []);
    $html = $response->html();
    $_instance->logRenderedChild('2crbVAs', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/reports/transactions.blade.php ENDPATH**/ ?>