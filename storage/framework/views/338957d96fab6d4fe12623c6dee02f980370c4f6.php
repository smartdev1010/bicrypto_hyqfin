<?php $__env->startSection('content'); ?>
<?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.forex.forex-investment-log-table', [])->html();
} elseif ($_instance->childHasBeenRendered('vRczzrl')) {
    $componentId = $_instance->getRenderedChildComponentId('vRczzrl');
    $componentTag = $_instance->getRenderedChildComponentTagName('vRczzrl');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('vRczzrl');
} else {
    $response = \Livewire\Livewire::mount('ext.forex.forex-investment-log-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('vRczzrl', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
<?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Set Profit')).'','action' => ''.e(route('admin.forex.investment.set')).'','submit' => 'Adjust','id' => 'forexinvestmentSet'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
  <div>
    <input type="hidden" id="log_id" name="log_id">
    <label class="form-control-label h6">Profit Amount</label>
    <input type="number" class="form-control" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')" required
      id="profit" name="profit" placeholder="Profit Amount">
  </div>
  <div><label class="form-control-label h6">Profit Calculation</label>
    <select class="form-select" id="type" name="type" required>
      <option value="" selected>
        Choose an option
      </option>
      <option value="1">
        Amount
      </option>
      <option value="2">
        Percentage
      </option>
    </select>
  </div>
  <div>
    <label for="result" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Result')); ?></label>
    <select class="form-select" id="result" name="result" required>
      <option value="" selected>
        <?php echo e(__('Select Result')); ?>

      </option>
      <option value="4">
        <?php echo e(__('Win')); ?>

      </option>
      <option value="5">
        <?php echo e(__('Lose')); ?>

      </option>
      <option value="6">
        <?php echo e(__('Draw')); ?>

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
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/log.blade.php ENDPATH**/ ?>