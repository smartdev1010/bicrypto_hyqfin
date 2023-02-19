<?php $__env->startSection('content'); ?>
    <form action="<?php echo e(route('admin.withdraw.method.update', $method->id)); ?>" method="POST" enctype="multipart/form-data">
        <?php echo csrf_field(); ?>
        <div class="space-y-5">
            <div class="card">
                <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                    <p class=" text-lg font-medium text-gray-900 dark:text-white
                       ">
                        <?php echo e(__('Info')); ?>

                    </p>
                </div>
                <div class="card-body">
                    <div class="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Method Name')); ?></label>
                            <input type="text" name="name" value="<?php echo e($method->name); ?>"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                        </div>


                        <div>
                            <label for="currency"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Currency')); ?></label>
                            <input type="text" name="currency" value="<?php echo e($method->currency); ?>"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                        </div>
                        <div>
                            <label for="delay"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Processing Time')); ?></label>
                            <input type="text" name="delay" value="<?php echo e($method->delay); ?>"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <label for="profit_missed"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Rate')); ?></label>

                            </div>

                            <div class="flex">
                                <span id="rate" for="rate"
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    1 <?php echo e(__($general->cur_text)); ?> =
                                </span>
                                <input type="number"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
                                    id="rate" placeholder="0" name="rate" value="<?php echo e($method->rate); ?>">

                            </div>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input">Upload file</label>
                            <div class="flex justify-start items-top mb-1">

                                <img class="img-thumbnail mb-1" style="max-width: 164px"
                                    src="<?php echo e(getImage(imagePath()['withdraw']['method']['path'] . '/' . $method->image, imagePath()['withdraw']['method']['size'])); ?>" />
                                <div>
                                    <input
                                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"name="image" type="file" id="image"
                                        accept=".png, .jpg, .jpeg">
                                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg,
                                        or
                                        jpeg
                                        (MAX. 64x64px).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-5">
                <div class="card">
                    <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                        <p class=" text-lg font-medium text-gray-900 dark:text-white
                       ">
                            <?php echo e(__('Range')); ?>

                        </p>
                    </div>
                    <div class="card-body space-y-3">
                        <div>
                            <div class="flex justify-between">
                                <label for="min_limit"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Minimum Amount')); ?></label>
                            </div>
                            <div class="flex">
                                <span id="min_limit" for="min_limit"
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <?php echo e(__($general->cur_text)); ?>


                                </span>
                                <input type="number"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
                                    placeholder="0" name="min_limit" value="<?php echo e($method->min_limit); ?>">
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <label for="max_limit"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Maximum Amount')); ?></label>
                            </div>
                            <div class="flex">
                                <span id="max_limit" for="max_limit"
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <?php echo e(__($general->cur_text)); ?>

                                </span>
                                <input type="number"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
                                    placeholder="0" name="max_limit" value="<?php echo e($method->max_limit); ?>">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header bg-gray-200 dark:bg-sky-600  rounded-t-lg">
                        <p class=" text-lg font-medium text-gray-900 dark:text-white
                           ">
                            <?php echo e(__('Charge')); ?>

                        </p>
                    </div>
                    <div class="card-body space-y-3">
                        <div>
                            <div class="flex justify-between">
                                <label for="fixed_charge"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Fixed Charge')); ?></label>
                            </div>
                            <div class="flex">
                                <span id="fixed_charge" for="fixed_charge"
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <?php echo e(__($general->cur_text)); ?>

                                </span>
                                <input type="number"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
                                    placeholder="0" name="fixed_charge" value="<?php echo e($method->fixed_charge); ?>">
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <label for="percent_charge"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Percent Charge')); ?>

                                </label>

                            </div>
                            <div class="flex">
                                <span id="percent_charge" for="percent_charge"
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    %

                                </span>
                                <input type="number"
                                    class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-red-500"
                                    pplaceholder="0" name="percent_charge" value="<?php echo e($method->percent_charge); ?>">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header bg-gray-200 dark:bg-sky-600 rounded-t-lg">
                    <p class=" text-lg font-medium text-gray-900 dark:text-white
                       ">
                        <?php echo e(__('Withdraw Instruction')); ?></p>
                </div>
                <textarea id="instruction" name="instruction"><?php echo e($method->instruction); ?></textarea>
            </div>
            <div class="card border-dark">
                <div class="card-header bg-gray-200 dark:bg-sky-600 rounded-t-lg flex justify-between">
                    <div class="text-lg font-medium text-gray-900 dark:text-white">
                        <?php echo e(__('User data')); ?>

                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary addUserData"><i
                            class="bi bi-plus"></i><?php echo e(__('Add new')); ?>

                    </button>
                </div>
                <div class="card-body">
                    <div class="space-y-5 addedField">

                        <?php if($method->user_data != null): ?>
                            <?php $__currentLoopData = $method->user_data; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="user-data grid grid-cols-3 gap-3">
                                    <input name="field_name[]" class="form-control" type="text"
                                        value="<?php echo e($v->field_level); ?>" required placeholder="<?php echo app('translator')->get('Field Name'); ?>">
                                    <select name="type[]" class="form-control">
                                        <option value="text" <?php if($v->type == 'text'): ?> selected <?php endif; ?>>
                                            <?php echo e(__('Input Text')); ?>

                                        </option>
                                        <option value="textarea" <?php if($v->type == 'textarea'): ?> selected <?php endif; ?>>
                                            <?php echo e(__('Textarea')); ?>

                                        </option>
                                        <option value="file" <?php if($v->type == 'file'): ?> selected <?php endif; ?>>
                                            <?php echo e(__('File upload')); ?>

                                        </option>
                                    </select>
                                    <div class="flex">
                                        <select name="validation[]" class="form-control">
                                            <option value="required" <?php if($v->validation == 'required'): ?> selected <?php endif; ?>>
                                                <?php echo e(__('Required')); ?> </option>
                                            <option value="nullable" <?php if($v->validation == 'nullable'): ?> selected <?php endif; ?>>
                                                <?php echo e(__('Optional')); ?> </option>
                                        </select>
                                        <button class="btn btn-danger removeBtn btn-icon btn-sm ml-2" type="button">
                                            <i class="bi bi-x text-2xl"></i>
                                        </button>
                                    </div>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button type="submit" class="btn btn-success"><?php echo app('translator')->get('Update'); ?></button>
                </div>
            </div>
        </div>
    </form>
<?php $__env->stopSection(); ?>


<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.withdraw.method.index')); ?>" class="btn btn-outline-secondary">
        <i class="bi bi-chevron-left"></i> <?php echo e(__('Go Back')); ?>

    </a>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('page-scripts'); ?>
    <script src="https://cdn.tiny.cloud/1/<?php echo e($general->tinymce); ?>/tinymce/6/tinymce.min.js" referrerpolicy="origin">
    </script>
    <script>
        $(function() {
            "use strict";
            tinymce.init({
                selector: 'textarea#instruction',
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount code',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat | code',
            });

            $('input[name=currency]').on('input', function() {
                $('.currency_symbol').text($(this).val());
            });
            $('.currency_symbol').text($('input[name=currency]').val());

            $('.addUserData').on('click', function() {
                var html = `
                <div class="user-data grid grid-cols-3 gap-3">
                    <input name="field_name[]" class="form-control" type="text" value="" required placeholder="<?php echo e(__('Field Name')); ?>">
                    <select name="type[]" class="form-control">
                        <option value="text" > <?php echo e(__('Input Text')); ?> </option>
                        <option value="textarea" > <?php echo e(__('Textarea')); ?> </option>
                        <option value="file"> <?php echo e(__('File upload')); ?> </option>
                    </select>
                    <div class="flex">
                        <select name="validation[]"
                                class="form-control">
                            <option value="required"> <?php echo e(__('Required')); ?> </option>
                            <option value="nullable">  <?php echo e(__('Optional')); ?> </option>
                        </select>
                        <button class="btn btn-danger removeBtn btn-icon btn-sm ml-2" type="button">
                            <i class="bi bi-x text-2xl"></i>
                        </button>
                    </div>
                </div>`;

                $('.addedField').append(html);
            });


            $(document).on('click', '.removeBtn', function() {
                $(this).closest('.user-data').remove();
            });

            <?php if($method->currency): ?>
                $('input[name=currency]').trigger('input');
            <?php endif; ?>
        });
    </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/hyqfin/public_html/resources/views/admin/withdraw/edit.blade.php ENDPATH**/ ?>