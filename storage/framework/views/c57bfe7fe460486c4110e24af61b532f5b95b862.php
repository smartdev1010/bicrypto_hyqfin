<?php $__env->startSection('page-style'); ?>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
    <div class="card text-center mx-auto w-1/3">
        <h1 class="card-title py-5"><?php echo e(__('System Updator')); ?></h1>
        <?php if($update_data['status']): ?>
            <div class="card-body">
                <div class="alert alert-warning m-5">
                    <div class="alert-body">
                        <?php echo e(__('Please backup your database and script files before upgrading.')); ?>

                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div class="card-body">
            <div class="alert alert-success m-5">
                <div class="alert-body">
                    <?php echo $update_data['message']; ?>

                </div>
            </div>
        </div>
        <?php if($update_data['status']): ?>
            <div class="card-body">
                <div class='alert alert-dark p-1'>
                    <div class="alert-body">
                        <div class="text-start">
                            <?php echo $update_data['changelog']; ?>

                        </div>
                    </div>
                </div>
            </div>
            <?php
                $update_id = null;
                $has_sql = null;
                $version = null;
            ?>
            <?php if(!empty($_POST['update_id'])): ?>
                <?php
                    $update_id = strip_tags(trim($_POST['update_id']));
                    $has_sql = strip_tags(trim($_POST['has_sql']));
                    $version = strip_tags(trim($_POST['version']));
                ?>
                <progress id="prog" value="0" max="100.0" class="progress mb-1 mx-auto w-75"></progress>
                <?php
                    $api->download_update($_POST['update_id'], $_POST['has_sql'], $_POST['version'], null, null, ['db_host' => getenv('DB_HOST'), 'db_user' => getenv('DB_USERNAME'), 'db_pass' => getenv('DB_PASSWORD'), 'db_name' => getenv('DB_DATABASE')]);
                ?>
            <?php else: ?>
                <form id="updater" action="<?php echo e(route('admin.update')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <div class="card-body">
                        <input type="hidden" class="form-control" value="<?php echo e($update_data['update_id']); ?>" name="update_id">
                        <input type="hidden" class="form-control" value="<?php echo e($update_data['has_sql']); ?>" name="has_sql">
                        <input type="hidden" class="form-control" value="<?php echo e($update_data['version']); ?>" name="version">
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-success"><?php echo e(__('Update')); ?></button>
                    </div>
                </form>
            <?php endif; ?>
    </div>
    <?php endif; ?>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a class="btn btn-success" href="<?php echo e(route('admin.clean')); ?>"><i class="bi bi-speedometer2 mr-1"></i>
        <?php echo e(__('Optimize')); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/update/index.blade.php ENDPATH**/ ?>