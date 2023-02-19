<link rel="stylesheet" href="<?php echo e(asset('vendors/iziToast/css/iziToast.min.css')); ?>">
<script src="<?php echo e(asset('vendors/iziToast/js/iziToast.min.js')); ?>"></script>
<?php if(session()->has('notify')): ?>
    <?php $__currentLoopData = session('notify'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $msg): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <script>
            "use strict";
            iziToast.<?php echo e($msg[0]); ?>({
                zindex: 50,
                message: "<?php echo e(__($msg[1])); ?>",
                position: "topRight",
                animateInside: true,
                drag: true
            });
        </script>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php endif; ?>

<?php if($errors->any()): ?>
    <?php
        $collection = collect($errors->all());
        $errors = $collection->unique();
    ?>

    <script>
        "use strict";
        <?php $__currentLoopData = $errors; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            iziToast.error({
                message: '<?php echo e(__($error)); ?>',
                position: "topRight",
                animateInside: true,
                drag: true
            });
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </script>
<?php endif; ?>
<script>
    "use strict";

    function notify(status, message) {
        iziToast[status]({
            message: message,
            position: "topRight",
            animateInside: true,
            drag: true
        });
    }
</script>
<?php /**PATH D:\dev\vscode\resources\views/partials/notify.blade.php ENDPATH**/ ?>