<?php
    $country_code = json_decode(json_encode(getIpInfo()), true)['code'];
?>
<?php $__env->startSection('content'); ?>
    <div class="grid xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        <div class="xs:col-span-1 md:col-span-2 lg:col-span-3">
            <div class="row">
                <div class="col-xl-9 lg:col-span-7 md:col-span-7">
                    <div class="card">
                        <form action="<?php echo e(route('admin.users.update', [$user->id])); ?>" method="POST"
                            enctype="multipart/form-data">
                            <?php echo csrf_field(); ?>
                            <div class="card-body">
                                <div class="card-header">
                                    <h5 class="card-title border-bottom pb-2"><?php echo e($user->fullname); ?> <?php echo e(__('Information')); ?>

                                    </h5>
                                </div>
                                <div class="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label for="firstname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('First Name')); ?></label>
                                        <input type="text"name="firstname"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->firstName : $user->firstname); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="lastname"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Last Name')); ?></label>
                                        <input type="text"name="lastname"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->lastName : $user->lastname); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Email')); ?></label>
                                        <input type="email" name="email"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->email : $user->email); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="mobile"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Mobile Number')); ?></label>
                                        <input type="text" name="mobile"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->phone : $user->mobile); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="address"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Address')); ?></label>
                                        <input type="text"name="address"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->address1 : $user->address); ?>"
                                            placeholder=" <?php echo e(__('House number, street address')); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="city"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('City')); ?></label>
                                        <input type="text"name="city"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->city : $user->city); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="city"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('State')); ?></label>
                                        <input type="text" name="state"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->state : $user->state); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="zip"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Zip/Postal')); ?></label>
                                        <input type="text" name="zip"
                                            value="<?php echo e(isset($user->kyc_application) ? $user->kyc_application->zip : $user->zip); ?>"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                                    </div>
                                    <div>
                                        <label for="zip"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Country')); ?></label>

                                        <select id="country" name="country" placeholder="Country"
                                            aria-describedby="country" value="<?php echo e(old('country')); ?>" class="form-control">
                                            <?php echo $__env->make('partials.country', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                        </select>
                                    </div>
                                    <?php if(isset($user->kyc_application)): ?>
                                        <div>
                                            <label for="kyc"
                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('KYC Status')); ?></label>
                                            <div class="input-group">
                                                <input value="<?php echo e($user->kyc_application->status); ?>">
                                                <span><a class="text-white"
                                                        href="<?php echo e(route('admin.kyc.view', [$user->kyc_application->id, 'kyc_details'])); ?>">View</a></span>
                                            </div>
                                        </div>
                                    <?php endif; ?>

                                </div>



                            </div>
                            <div class="card-footer">
                                <button type="submit" class="btn btn-outline-success"><?php echo e(__('Save Changes')); ?></button>


                            </div>
                        </form>
                    </div>
                    <br>



                </div>


            </div>
        </div>
        <div class="col-span-1 space-y-4">
            <div class="card">
                <div class="card-body">
                    <a href="#">
                        <img src="<?php echo e(getImage(imagePath()['profileImage']['path'] . '/' . $user->profile_photo_path, imagePath()['profileImage']['size'])); ?>"
                            alt="<?php echo e(__('Profile Image')); ?>" class="rounded-full">
                    </a>
                    <div>

                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            <?php echo e($user->fullname); ?>

                        </h5>
                        <span class="text-small"><?php echo e(__('Joined At')); ?>

                            <strong><?php echo e(showDateTime($user->created_at, 'd M, Y h:i A')); ?></strong></span>

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            <?php echo e(__('User information')); ?>

                        </h5>

                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <?php if($refer_by): ?>
                                <li class="list-group-item flex justify-between items-center">
                                    <span class="float-start"><?php echo e(__('Referred By')); ?></span>
                                    <span class="float-end text-muted"><?php echo e(__($refer_by->username)); ?></span>
                                </li>
                            <?php endif; ?>
                            </p>

                        </ul>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <?php switch($user->status):
                            case (1): ?>
                                <span class="badge rounded-pill bg-success"><?php echo e(__('Active')); ?></span>
                            <?php break; ?>

                            <?php case (0): ?>
                                <span class="badge rounded-pill bg-danger"><?php echo e(__('Banned')); ?></span>
                            <?php break; ?>
                        <?php endswitch; ?>
                    </div>
                </div>
            </div>

            




        </div>

    </div>

    <div class="card mb-5">
        <div class="card-body">
            <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('wallets-table', ['user' => $user->id])->html();
} elseif ($_instance->childHasBeenRendered('Dd5mniM')) {
    $componentId = $_instance->getRenderedChildComponentId('Dd5mniM');
    $componentTag = $_instance->getRenderedChildComponentTagName('Dd5mniM');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('Dd5mniM');
} else {
    $response = \Livewire\Livewire::mount('wallets-table', ['user' => $user->id]);
    $html = $response->html();
    $_instance->logRenderedChild('Dd5mniM', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('wallets-frozen-table', ['frozen' => count($frozen_wallet) > 0 ? 1 : 0])->html();
} elseif ($_instance->childHasBeenRendered('9lFN4c3')) {
    $componentId = $_instance->getRenderedChildComponentId('9lFN4c3');
    $componentTag = $_instance->getRenderedChildComponentTagName('9lFN4c3');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('9lFN4c3');
} else {
    $response = \Livewire\Livewire::mount('wallets-frozen-table', ['frozen' => count($frozen_wallet) > 0 ? 1 : 0]);
    $html = $response->html();
    $_instance->logRenderedChild('9lFN4c3', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('modals'); ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Add / Subtract Balance')).'','action' => ''.e(route('admin.users.addSubBalanceFrozen', $user->id)).'','submit' => ''.e(__('Submit')).'','id' => 'addSubModalFrozen'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" name="symbol">
            <select id="act" name="act"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" checked><?php echo e(__('Add Balance')); ?></option>
                <option value="0"><?php echo e(__('Subtract Balance')); ?></option>
            </select>
        </div>

        <div>
            <label><?php echo e(__('Amount')); ?><span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="text" name="amount" placeholder="<?php echo e(__('Please provide positive amount')); ?>">
                <span><?php echo e(__($general->cur_sym)); ?></span>
            </div>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Create Frozen Wallet')).'','action' => ''.e(route('admin.users.wallet.frozen.create')).'','submit' => ''.e(__('Create')).'','id' => 'createFrozenWallet'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" name="user_id" class="hidden" value="<?php echo e($user->id); ?>">
            <label><?php echo e(__('Symbol')); ?><span class="text-danger">*</span></label>
            <input type="text" name="symbol" class="form-control">
        </div>
        <div>
            <label><?php echo e(__('Hover Text')); ?><span class="text-danger">*</span></label>
            <textarea type="text" name="text" class="form-control"></textarea>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>

    <?php if (isset($component)) { $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6 = $component; } ?>
<?php $component = App\View\Components\Partials\Modals\DefaultModal::resolve(['title' => ''.e(__('Add / Subtract Balance')).'','action' => ''.e(route('admin.users.addSubBalance', $user->id)).'','submit' => ''.e(__('Submit')).'','id' => 'addSubModal'] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.modals.default-modal'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Modals\DefaultModal::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
        <div>
            <input type="hidden" name="address">
            <input type="hidden" name="symbol">
            <select id="act" name="act"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="1" checked><?php echo e(__('Add Balance')); ?></option>
                <option value="0"><?php echo e(__('Subtract Balance')); ?></option>
            </select>
        </div>

        <div>
            <label><?php echo e(__('Amount')); ?><span class="text-danger">*</span></label>
            <div class="input-group">
                <input type="text" name="amount" placeholder="<?php echo e(__('Please provide positive amount')); ?>">
                <span><?php echo e(__($general->cur_sym)); ?></span>
            </div>
        </div>
     <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6)): ?>
<?php $component = $__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6; ?>
<?php unset($__componentOriginal97f9e81f85e1cbdb086bb2304feb692c1f40dcb6); ?>
<?php endif; ?>
<?php $__env->stopPush(); ?>
<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.users.all')); ?>" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        <?php echo e(__('Back')); ?></a>
<?php $__env->stopPush(); ?>

<?php $__env->startPush('script'); ?>
    <script>
        "use strict";
        $("select[name=country]").val("<?php echo e(@$user->country); ?>");
        <?php if($country_code): ?>
            $(`option[data-code=<?php echo e($country_code[0]); ?>]`).attr('selected', '');
        <?php endif; ?>
        $('select[name=country_code]').change(function() {
            $('input[name=country]').val($('select[name=country_code] :selected').data('country'));
        }).change();
    </script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/users/detail.blade.php ENDPATH**/ ?>