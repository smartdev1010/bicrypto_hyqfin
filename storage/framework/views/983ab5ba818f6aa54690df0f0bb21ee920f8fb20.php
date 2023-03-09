<?php $__env->startSection('content'); ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('ext.bot.bot-log-table', [])->html();
} elseif ($_instance->childHasBeenRendered('RqSHFw6')) {
    $componentId = $_instance->getRenderedChildComponentId('RqSHFw6');
    $componentTag = $_instance->getRenderedChildComponentTagName('RqSHFw6');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('RqSHFw6');
} else {
    $response = \Livewire\Livewire::mount('ext.bot.bot-log-table', []);
    $html = $response->html();
    $_instance->logRenderedChild('RqSHFw6', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Set Profit')).'','action' => ''.e(route('admin.bot.set')).'','submit' => ''.e(__('Submit')).'','id' => 'botSet'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" id="bot_id" name="bot_id">
            <label class="form-control-label h6">Profit Amount</label>
            <div class="input-group">
                <input type="number" class="form-control" onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                    id="profit" name="profit" placeholder="Amount" required>
            </div>
        </div>
        <div>
            <label class="form-control-label h6">Profit Calculation</label>
            <div class="flex justify-between items-center space-x-3">
                <select class="form-select" id="type" name="type" required>
                    <option value="" selected disabled="">
                        Choose a type
                    </option>
                    <option value="1">
                        Amount
                    </option>
                    <option value="2">
                        Percentage
                    </option>
                </select>
                <select class="form-select" id="result" name="result" required>
                    <option value="" selected disabled="">
                        Choose a result
                    </option>
                    <option value="1">
                        <?php echo e(__('Win')); ?>

                    </option>
                    <option value="2">
                        <?php echo e(__('Lose')); ?>

                    </option>
                    <option value="3">
                        <?php echo e(__('Draw')); ?>

                    </option>
                </select>
            </div>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/bot/log.blade.php ENDPATH**/ ?>