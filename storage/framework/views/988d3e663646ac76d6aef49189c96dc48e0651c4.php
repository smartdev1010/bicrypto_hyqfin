

<?php $__env->startSection('vendor-style'); ?>
    <!-- vendor css files -->
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="card-title"><?php echo e(__('New Plan')); ?></h4>
            <div class="card-search"></div>
        </div>
        <form action="<?php echo e(route('admin.forex.investment.store')); ?>" method="POST" enctype="multipart/form-data" id="planUpdate">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="status" id="status">
            <input type="hidden" name="result_missed" id="result_missed">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="title"><?php echo e(__('Plan Title')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="title" name="title" aria-label="Plan Title"
                                aria-describedby="title" value="<?php echo e(old('title')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="price"><?php echo e(__('Price')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="price" name="price" aria-label="price"
                                aria-describedby="password" value="<?php echo e(old('price')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="min"><?php echo e(__('Minimum')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="min" name="min" aria-label="min"
                                aria-describedby="password" value="<?php echo e(old('min')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="max"><?php echo e(__('Maximum')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="max" name="max" aria-label="max"
                                aria-describedby="password" value="<?php echo e(old('max')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="duration"><?php echo e(__('Duration (Days)')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="duration" name="duration" aria-label="Duration"
                                aria-describedby="duration" value="<?php echo e(old('duration')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label class="form-label" for="roi"><?php echo e(__('Return on Investment')); ?></label>
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" id="roi" name="roi"
                                aria-label="Return on Investment" aria-describedby="roi" value="<?php echo e(old('roi')); ?>">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label for="result_missed"><?php echo e(__('Result If Missed')); ?></label>
                        <div class="dropdown">
                            <button class="btn btn-outline-warning dropdown-toggle w-100" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" id="result_missedt" name="result_missedt">
                                <?php echo e(__('Select Result If Missed')); ?>

                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#planUpdate').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="1"><?php echo e(__('Win')); ?></a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#planUpdate').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="2"><?php echo e(__('Lose')); ?></a></li>
                                <li><a class="dropdown-item"
                                        onclick="$('#result_missedt').text($(this).text());$('#planUpdate').find('input[name=result_missed]').val($(this).data('result'));"
                                        data-result="3"><?php echo e(__('Draw')); ?></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <label for="profit_missed"><?php echo e(__('Profit If Missed')); ?></label>
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" id="profit_missed" name="profit_missed"
                                aria-label="Maximum Profit" aria-describedby="profit_missed"
                                value="<?php echo e(old('profit_missed')); ?>">
                            <span class="input-group-text" for="profit_missed">%</span>
                        </div>
                    </div>
                </div>
                <label for="desc"><?php echo e(__('Description')); ?></label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" id="desc" name="desc"
                        aria-label="Plan Description" aria-describedby="desc" value="<?php echo e(old('desc')); ?>">
                </div>
                <div class="d-flex justify-content-start align-items-top mb-1">
                    <input class="form-control" name="image" type="file" id="image"
                        accept=".png, .jpg, .jpeg" />
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1">Featured </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="Yes" data-off="No" data-width="100%" name="is_new">
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <label class="form-control-label h6 mt-1"><?php echo e(__('Status')); ?> </label>
                        <input type="checkbox" data-onstyle="success" data-offstyle="danger" data-toggle="toggle"
                            data-on="<?php echo e(__('Active')); ?>" data-off="<?php echo e(__('Disabled')); ?>" data-width="100%"
                            name="status">
                    </div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" type="submit"><?php echo e(__('Submit')); ?>

                </button>
            </div>
        </form>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.forex.investment.index')); ?>" class="btn btn-primary btn-sm"><i
            class="bi bi-chevron-left"></i> <?php echo e(__('Back')); ?></a>
<?php $__env->stopPush(); ?>

<?php $__env->startSection('vendor-script'); ?>
    <!-- vendor files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap4-toggle/3.6.1/bootstrap4-toggle.min.js"></script>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('script'); ?>
    <script>
        "use strict";
        $('.toggle').bootstrapToggle({
            on: 'Y',
            off: 'N',
            width: '100%',
            size: 'small'
        });
    </script>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/forex/investment/new.blade.php ENDPATH**/ ?>