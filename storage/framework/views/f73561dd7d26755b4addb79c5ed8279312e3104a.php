
<?php $__env->startSection('content'); ?>
<style>
.submit-btn {
  padding: 5px 10px;
  border-radius: 5px;
}

.submit-btn:hover {
  cursor: pointer;
}

.save-btn {
  margin-left: 20px;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
<form action="/admin/membership/fee" method="post"
  style="display:flex; flex-direction: row; justify-content:space-between;align-items:center" class="mb-3">
  <?php echo csrf_field(); ?>
  <span style="flex: 1">Membership Fee : </span>
  <input type="number" name="fee" class="form-control" value=<?php echo e($membership_fee); ?> style="flex: 3" />
  <label class="ml-3">USDT</label>
  <button class="save-btn">Save</button>
</form>
<?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('membership-table', [])->html();
} elseif ($_instance->childHasBeenRendered('OSvqrIt')) {
    $componentId = $_instance->getRenderedChildComponentId('OSvqrIt');
    $componentTag = $_instance->getRenderedChildComponentTagName('OSvqrIt');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('OSvqrIt');
} else {
    $response = \Livewire\Livewire::mount('membership-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('OSvqrIt', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/membership.blade.php ENDPATH**/ ?>