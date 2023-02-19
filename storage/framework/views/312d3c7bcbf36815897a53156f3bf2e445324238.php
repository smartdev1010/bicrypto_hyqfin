<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('user-table', [])->html();
} elseif ($_instance->childHasBeenRendered('Usl0AaD')) {
    $componentId = $_instance->getRenderedChildComponentId('Usl0AaD');
    $componentTag = $_instance->getRenderedChildComponentTagName('Usl0AaD');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('Usl0AaD');
} else {
    $response = \Livewire\Livewire::mount('user-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('Usl0AaD', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/users/list.blade.php ENDPATH**/ ?>