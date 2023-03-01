<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('user-table', [])->html();
} elseif ($_instance->childHasBeenRendered('reb1ikr')) {
    $componentId = $_instance->getRenderedChildComponentId('reb1ikr');
    $componentTag = $_instance->getRenderedChildComponentTagName('reb1ikr');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('reb1ikr');
} else {
    $response = \Livewire\Livewire::mount('user-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('reb1ikr', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/users/list.blade.php ENDPATH**/ ?>