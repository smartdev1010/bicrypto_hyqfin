<?php $__env->startSection('content'); ?>
<div class="space-y-5 overflow-hidden">
  <div class="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.area', ['element' => 'total_users','route' => 'admin.users.all','title' => 'Users','tooltip' => 'Total Users','color' => '#9061F9','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>'])->html();
} elseif ($_instance->childHasBeenRendered('beRGbrd')) {
    $componentId = $_instance->getRenderedChildComponentId('beRGbrd');
    $componentTag = $_instance->getRenderedChildComponentTagName('beRGbrd');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('beRGbrd');
} else {
    $response = \Livewire\Livewire::mount('components.charts.area', ['element' => 'total_users','route' => 'admin.users.all','title' => 'Users','tooltip' => 'Total Users','color' => '#9061F9','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('beRGbrd', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.area', ['element' => 'verified_users','route' => 'admin.users.all','title' => 'Verified Users','tooltip' => 'Verified Users','color' => '#55DD92','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>'])->html();
} elseif ($_instance->childHasBeenRendered('g5juYls')) {
    $componentId = $_instance->getRenderedChildComponentId('g5juYls');
    $componentTag = $_instance->getRenderedChildComponentTagName('g5juYls');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('g5juYls');
} else {
    $response = \Livewire\Livewire::mount('components.charts.area', ['element' => 'verified_users','route' => 'admin.users.all','title' => 'Verified Users','tooltip' => 'Verified Users','color' => '#55DD92','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('g5juYls', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.area', ['element' => 'unverified_users','route' => 'admin.users.all','title' => 'Unverified Users','tooltip' => 'Unverified Users','color' => '#F05252','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
              </svg>'])->html();
} elseif ($_instance->childHasBeenRendered('wqCYWzu')) {
    $componentId = $_instance->getRenderedChildComponentId('wqCYWzu');
    $componentTag = $_instance->getRenderedChildComponentTagName('wqCYWzu');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('wqCYWzu');
} else {
    $response = \Livewire\Livewire::mount('components.charts.area', ['element' => 'unverified_users','route' => 'admin.users.all','title' => 'Unverified Users','tooltip' => 'Unverified Users','color' => '#F05252','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
              </svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('wqCYWzu', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
  </div>

  <div class="grid gap-5 grid-cols-2">
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('trade_log')): ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.transactions', ['element' => 'trades_report','route' => 'admin.users.all','title' => 'Trades Report','tooltip' => 'Trades','color' => '#4467EF','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>'])->html();
} elseif ($_instance->childHasBeenRendered('X6DMfRu')) {
    $componentId = $_instance->getRenderedChildComponentId('X6DMfRu');
    $componentTag = $_instance->getRenderedChildComponentTagName('X6DMfRu');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('X6DMfRu');
} else {
    $response = \Livewire\Livewire::mount('components.charts.transactions', ['element' => 'trades_report','route' => 'admin.users.all','title' => 'Trades Report','tooltip' => 'Trades','color' => '#4467EF','icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('X6DMfRu', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php endif; ?>
    <?php if($plat->trading->binary_status == 1): ?>
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check(['binary_practice_log', 'binary_trade_log'])): ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.monthly', ['element' => 'binary_trades','route' => 'admin.users.all','title' => 'Binary Trades Report','tooltip' => ['Wins', 'Loses'],'colors' => ['#22c55e', '#ef4444'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>'])->html();
} elseif ($_instance->childHasBeenRendered('acOxGBR')) {
    $componentId = $_instance->getRenderedChildComponentId('acOxGBR');
    $componentTag = $_instance->getRenderedChildComponentTagName('acOxGBR');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('acOxGBR');
} else {
    $response = \Livewire\Livewire::mount('components.charts.monthly', ['element' => 'binary_trades','route' => 'admin.users.all','title' => 'Binary Trades Report','tooltip' => ['Wins', 'Loses'],'colors' => ['#22c55e', '#ef4444'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('acOxGBR', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php endif; ?>
    <?php endif; ?>
  </div>


  <div class="grid gap-5 grid-cols-2">
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('trade_log')): ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.monthly-transactions', ['element' => 'deposits','route' => 'admin.users.all','title' => 'Deposits','tooltip' => ['Total', 'Fees', 'Completed', 'Pending'],'colors' => ['#9061F9', '#E74694', '#0E9F6E', '#E3A008'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" /></svg>'])->html();
} elseif ($_instance->childHasBeenRendered('jngTE3u')) {
    $componentId = $_instance->getRenderedChildComponentId('jngTE3u');
    $componentTag = $_instance->getRenderedChildComponentTagName('jngTE3u');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('jngTE3u');
} else {
    $response = \Livewire\Livewire::mount('components.charts.monthly-transactions', ['element' => 'deposits','route' => 'admin.users.all','title' => 'Deposits','tooltip' => ['Total', 'Fees', 'Completed', 'Pending'],'colors' => ['#9061F9', '#E74694', '#0E9F6E', '#E3A008'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" /></svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('jngTE3u', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php endif; ?>
    <?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check(['binary_practice_log', 'binary_trade_log'])): ?>
    <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.charts.monthly-transactions', ['element' => 'withdrawals','route' => 'admin.users.all','title' => 'Withdrawals','tooltip' => ['Total', 'Fees', 'Completed', 'Pending'],'colors' => ['#9061F9', '#E74694', '#0E9F6E', '#E3A008'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>'])->html();
} elseif ($_instance->childHasBeenRendered('q5fe1Ct')) {
    $componentId = $_instance->getRenderedChildComponentId('q5fe1Ct');
    $componentTag = $_instance->getRenderedChildComponentTagName('q5fe1Ct');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('q5fe1Ct');
} else {
    $response = \Livewire\Livewire::mount('components.charts.monthly-transactions', ['element' => 'withdrawals','route' => 'admin.users.all','title' => 'Withdrawals','tooltip' => ['Total', 'Fees', 'Completed', 'Pending'],'colors' => ['#9061F9', '#E74694', '#0E9F6E', '#E3A008'],'icon' => '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>']);
    $html = $response->html();
    $_instance->logRenderedChild('q5fe1Ct', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    <?php endif; ?>
  </div>
</div>



<?php $__env->stopSection(); ?>
<?php $__env->startPush('breadcrumb-plugins'); ?>
<?php if (app(\Illuminate\Contracts\Auth\Access\Gate::class)->check('update_show')): ?>
<!-- <?php if($gnl->new_version > $api->get_current_version()): ?>
            <a type="button" class="btn btn-outline-warning"
                href="<?php echo e(route('admin.update')); ?>"><?php echo e(__('New Update Released')); ?>:
                V<?php echo e($gnl->new_version); ?></a>
        <?php endif; ?> -->
<button type="button" class="btn btn-outline-primary" onclick="check_update()" id="checkUpdatebtn">
  <div role="status" id="spinner" class="hidden">
    <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101"
      fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor" />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill" />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  <?php echo e(__('Check New Update')); ?>

</button>
<?php endif; ?>
<?php $__env->stopPush(); ?>
<?php $__env->startSection('vendor-scripts'); ?>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-scripts'); ?>
<script>
function check_update() {
  $('#checkUpdatebtn').prop("disabled", true);
  $('#checkUpdatebtn').addClass("focus:outline-none disabled:opacity-50");
  $('#spinner').removeClass('hidden');
  $.ajax({
    method: "get",
    headers: {
      "X-CSRF-TOKEN": "<?php echo e(csrf_token()); ?>",
    },
    url: "<?php echo e(route('admin.update.check')); ?>",
    success: function(response) {
      notify(response.type, response.message)
      $('#checkUpdatebtn').prop("disabled", false);
      $('#checkUpdatebtn').removeClass(
        "focus:outline-none disabled:opacity-50");
      $('#spinner').addClass('hidden');
      window.livewire.emit('refreshDatatable');
      $('#checkUpdateclose').click();
    },
    error: function(response) {
      notify(response.type, response.message)
      $('#checkUpdatebtn').prop("disabled", false);
      $('#checkUpdatebtn').removeClass(
        "focus:outline-none disabled:opacity-50");
      $('#spinner').addClass('hidden');
      $('#checkUpdateclose').click();
    }
  });
};
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\dev\vscode\resources\views/admin/dashboard.blade.php ENDPATH**/ ?>