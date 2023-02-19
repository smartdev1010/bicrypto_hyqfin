<?php $__env->startSection('content'); ?>
    <div class="row" id="table-hover-row">
        <div class="col-12">
            <div class="card">
                <div class="card-header flex justify-between items-center">
                    <h4 class="card-title"><?php echo e(__('Balances')); ?></h4>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-hover custom-data-bs-table">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col"><?php echo e(__('Currency')); ?></th>
                                <th scope="col"><?php echo e(__('Available')); ?></th>
                                <th scope="col"><?php echo e(__('Used')); ?></th>
                                <th scope="col"><?php echo e(__('Total')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__empty_1 = true; $__currentLoopData = $currencies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $currency): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                                <?php if($currency[$free] != 0): ?>
                                    <tr>
                                        <td data-label="<?php echo e(__('Currency')); ?>">

                                            <img class="avatar-content mr-1" width="32px"
                                                src="<?php echo e(getImage('assets/images/cryptoCurrency/' . strtolower($currency[$symbol]) . '.png')); ?>"
                                                alt="<?php echo e($currency[$symbol]); ?>">
                                            <?php echo e($currency[$symbol]); ?>

                                        </td>
                                        <td data-label="<?php echo e(__('Available')); ?>"><?php echo e(number_format($currency[$free], 8)); ?></td>
                                        <td data-label="<?php echo e(__('Used')); ?>"><?php echo e(number_format($currency[$used], 8)); ?></td>
                                        <td data-label="<?php echo e(__('Total')); ?>">
                                            <?php echo e(number_format($currency[$free] + $currency[$used], 8)); ?></td>
                                    </tr>
                                <?php endif; ?>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                                <tr>
                                    <td class="text-muted text-center" colspan="100%"><?php echo e(__($empty_message)); ?></td>
                                </tr>
                            <?php endif; ?>

                        </tbody>
                    </table><!-- table end -->
                </div>
            </div><!-- card end -->
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.provider.index')); ?>" class="btn btn-primary btn-sm"><i class="bi bi-chevron-left"></i>
        <?php echo e(__('Back')); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/provider/balance.blade.php ENDPATH**/ ?>