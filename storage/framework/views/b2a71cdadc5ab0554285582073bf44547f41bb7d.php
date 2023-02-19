 <?php if($row->installed == 1): ?>
     <?php
         $res = (new \App\Http\Controllers\Admin\Ext\InstallController())->check_update($row->product_id);
     ?>
     <?php if($res['status']): ?>
         <a type="button" class="btn btn-outline-warning" style="top:80%"
             href="<?php echo e(route('admin.extensions.install', [$row->product_id])); ?>">
             <i class="bi bi-download"></i> <?php echo e(__('Update')); ?>

             V<?php echo e($res['version']); ?>

             <?php echo e(__('Available')); ?></a>
     <?php endif; ?>
     <?php if($row->status == 0): ?>
         <button type="button" class="btn btn-icon btn-outline-success rounded ml-1"
             onclick="$('#activateModal').find('.extension-name').text('<?php echo e(__($row->name)); ?>');
         $('#activateModal').find('input[name=id]').val('<?php echo e($row->id); ?>');"
             data-modal-toggle="activateModal" title="<?php echo e(__('Enable')); ?>">
             <i class="bi bi-eye"></i>
         </button>
     <?php else: ?>
         <button type="button" class="btn btn-icon btn-outline-danger ml-1 deactivateBtn"
             data-modal-toggle="deactivateModal"
             onclick="$('#deactivateModal').find('.extension-name').text('<?php echo e(__($row->name)); ?>');
             $('#deactivateModal').find('input[name=id]').val('<?php echo e($row->id); ?>');"
             title="<?php echo e(__('Disable')); ?>">
             <i class="bi bi-eye-slash"></i>
         </button>
     <?php endif; ?>
     <a href="<?php echo e(route('admin.extensions.activater', [$row->product_id])); ?>"
         class="btn btn-icon btn-outline-success ml-1" title="<?php echo e(__('Re-Verify License')); ?>">
         <i class="bi bi-check-lg"></i>
     </a>
 <?php else: ?>
     <?php if($row->activated == 0): ?>
         <a href="<?php echo e(route('admin.extensions.activater', [$row->product_id])); ?>"
             class="btn btn-icon btn-outline-success ml-1" title="<?php echo e(__('Verify License')); ?>">
             <i class="bi bi-check-lg"></i>
         </a>
     <?php else: ?>
         <a href="<?php echo e(route('admin.extensions.install', [$row->product_id])); ?>"
             class="btn btn-icon btn-outline-dark ml-1" title="<?php echo e(__('Install')); ?>">
             <i class="bi bi-download"></i>
         </a>
         <a href="<?php echo e(route('admin.extensions.activater', [$row->product_id])); ?>"
             class="btn btn-icon btn-outline-success ml-1" title="<?php echo e(__('Re-Verify License')); ?>">
             <i class="bi bi-check-lg"></i>
         </a>
     <?php endif; ?>
 <?php endif; ?>
<?php /**PATH /home/hyqfin/public_html/resources/views/admin/extension/actions_view.blade.php ENDPATH**/ ?>