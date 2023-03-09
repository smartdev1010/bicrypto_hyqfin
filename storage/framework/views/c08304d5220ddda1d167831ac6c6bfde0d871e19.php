<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-header flex justify-between items-center">
            <h4 class="card-title"><?php echo e('Editing ' . $bot->title . ' Bot'); ?></h4>

        </div>
        <form action="<?php echo e(route('admin.bot.update')); ?>" method="POST" enctype="multipart/form-data" id="botUpdate">
            <?php echo csrf_field(); ?>
            <input type="hidden" name="id" id="id" value="<?php echo e($bot->id); ?>">

            <div class="card-body space-y-2">
                <div class="grid gap-5 sm:grid-cols-3">

                    <div>
                        <label for="title"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Title')); ?></label>
                        <input type="text" id="title" name="title" aria-label="Bot Title" aria-describedby="title"
                            value="<?php echo e($bot->title); ?>" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="perc"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('APR (Annual Profit Rate)')); ?></label>

                        </div>

                        <div class="input-group">
                            <input type="number" id="perc" name="perc" aria-label="Bot APR" aria-describedby="perc"
                                required value="<?php echo e($bot->perc); ?>">
                            <span id="perc" for="perc">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <label for="uses"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Uses (Uses of the bot)')); ?></label>

                        </div>

                        <div class="input-group">
                            <input type="number" id="uses" name="uses" aria-label="Bot Uses"
                                aria-describedby="uses" required value="<?php echo e($bot->uses); ?>">
                            <span id="uses" for="uses">
                                %
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="desc"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Description')); ?></label>
                    <textarea id="desc" name="desc" aria-label="Bot Description" aria-describedby="desc" rows="3" required
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your description here..."><?php echo e($bot->desc); ?></textarea>

                </div>

                <div class="grid gap-5   sm:grid-cols-3 mb-5">
                    <div>
                        <div class="flex justify-between">
                            <label for="min_profit"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Minimum Profit')); ?></label>

                        </div>

                        <div class="input-group">
                            <input type="number" id="min_profit" name="min_profit" aria-label="Minimum Profit"
                                aria-describedby="min_profit" value="<?php echo e($bot->min_profit); ?>" required>
                            <span id="min_profit" for="min_profit">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <label for="max_profit"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Maximum Profit')); ?></label>
                        </div>
                        <div class="input-group">
                            <input type="number" id="max_profit" name="max_profit" aria-label="Maximum Profit"
                                aria-describedby="max_profit" value="<?php echo e($bot->max_profit); ?>" required>
                            <span id="max_profit" for="max_profit">
                                % </span>


                        </div>
                    </div>


                    <div>
                        <label for="result_missed"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Result If Missed')); ?></label>
                        <select class="form-select" id="result_missed" name="result_missed" required>
                            <option value="" <?php echo e($bot->result_missed == null ? 'selected' : ''); ?>>
                                <?php echo e(__('Select Result If Missed')); ?>

                            </option>
                            <option value="1" <?php echo e($bot->result_missed == 1 ? 'selected' : ''); ?>>
                                <?php echo e(__('Win')); ?>

                            </option>
                            <option value="2" <?php echo e($bot->result_missed == 2 ? 'selected' : ''); ?>>
                                <?php echo e(__('Lose')); ?>

                            </option>
                            <option value="3" <?php echo e($bot->result_missed == 3 ? 'selected' : ''); ?>>
                                <?php echo e(__('Draw')); ?>

                            </option>
                        </select>
                    </div>

                    <div>
                        <div class="flex justify-between">
                            <label for="profit_missed"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Profit If Missed')); ?></label>

                        </div>

                        <div class="input-group">
                            <input type="number" id="profit_missed" name="profit_missed" aria-label="Maximum Profit"
                                aria-describedby="profit_missed" value="<?php echo e($bot->profit_missed); ?>" required>
                            <span id="profit_missed" for="profit_missed">
                                %
                            </span>
                        </div>
                    </div>
                    <div>
                        <label for="min_bot_amount"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Bot Minimum Amount')); ?></label>
                        <input type="number" name="min_bot_amount" step="0.00000001"
                            value="<?php echo e($limits->min_bot_amount); ?>" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>
                    <div>
                        <label for="max_bot_amount"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><?php echo e(__('Bot Maximum Amount')); ?></label>
                        <input type="number"name="max_bot_amount" value="<?php echo e($limits->max_bot_amount); ?>" required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder-red-500">
                    </div>




                </div>
                <div class="justify-start items-top mb-1 max-w-md">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload
                        file</label>
                    <div class=" flex">
                        <div>
                            <div class="mr-1">
                                <img class="img-thumbnail mb-1" style="max-width: 164px"
                                    src="<?php echo e(getImage(imagePath()['bot']['path'] . '/' . $bot->image, imagePath()['bot']['size'])); ?>" />
                            </div>
                        </div>
                        <div>
                            <input class="upload" aria-describedby="file_input_help"name="image" type="file"
                                id="image" accept=".png, .jpg, .jpeg">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">png, jpg, or
                                jpeg
                                (MAX. 64x64px).</p>
                        </div>
                    </div>

                </div>

                <div>
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="<?php echo e($bot->is_new); ?>" <?php echo e($bot->is_new == 1 ? 'checked' : ''); ?>

                            class="sr-only peer" data-on="<?php echo e(__('Active')); ?>" data-off="<?php echo e(__('Disabled')); ?>"
                            name="is_new" id="is_newEdit">
                        <div onclick="$('#is_newEdit').val($('#is_newEdit').val() == 1 ? 0 : 1)" class="toggle peer">
                        </div>
                        <span
                            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Featured')); ?></span>
                    </label>
                </div>
                <div>
                    <label class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="<?php echo e($bot->status); ?>" <?php echo e($bot->status == 1 ? 'checked' : ''); ?>

                            class="sr-only peer" data-on="<?php echo e(__('Active')); ?>" data-off="<?php echo e(__('Disabled')); ?>"
                            name="status" id="statusEdit">
                        <div onclick="$('#statusEdit').val($('#statusEdit').val() == 1 ? 0 : 1)" class="toggle peer">
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><?php echo e(__('Status')); ?></span>
                    </label>
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-outline-success"><?php echo e(__('Edit')); ?></button>
            </div>
        </form>
    </div>
<?php $__env->stopSection(); ?>


<?php $__env->startPush('breadcrumb-plugins'); ?>
    <a href="<?php echo e(route('admin.bot.index')); ?>" class="btn btn-outline-secondary"><i class="bi bi-chevron-left mr-1"></i>
        <?php echo e(__('Back')); ?></a>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/extensions/admin/bot/edit.blade.php ENDPATH**/ ?>