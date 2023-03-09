<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

  <?php echo $__env->make('partials.seo', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  <script>
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
      '(prefers-color-scheme: dark)').matches) || !('color-theme' in localStorage)) {
    document.documentElement.classList.add('dark');
    window.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    window.theme = 'light';
  }
  </script>
  <!-- Scripts -->
  <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css']); ?>

  <link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</head>

<body class="font-sans antialiased bg-gray-50 text-slate-500 dark:text-slate-400 dark:bg-slate-900">


  <div id="app"></div>

  <script>
  window.usermenuData = [<?php echo json_encode(getUserMenu(), 15, 512) ?>]
  window.VUE_APP_I18N_LOCALE = "<?php echo e(getenv('VUE_APP_I18N_LOCALE') ?? null); ?>";
  window.VUE_APP_I18N_FALLBACK_LOCALE = "<?php echo e(getenv('VUE_APP_I18N_FALLBACK_LOCALE') ?? null); ?>";
  window.gnl = <?php echo json_encode($general, 15, 512) ?>;
  window.cors = gnl.cors ? gnl.cors : '';
  window.plat = <?php echo json_encode(getPlatforms(), 15, 512) ?>;
  window.ext = <?php echo json_encode(getExts(), 15, 512) ?>;
  window.provider = '<?php echo e($provider); ?>';
  window.trading_wallet = '<?php echo e($trading_wallet); ?>';
  window.siteName = '<?php echo e($siteName); ?>';
  window.cur_rate = '<?php echo e($gnl_cur->rate); ?>';
  window.cur_symbol = '<?php echo e($gnl_cur->code); ?>';
  window.walletconnectid = "<?php echo e(getenv('VUE_APP_WALLET_CONNECT_PROJECT_ID')); ?>"
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ccxt@2.6.36/dist/ccxt.browser.js"></script>

  <?php echo app('Illuminate\Foundation\Vite')('resources/src/user.js'); ?>
  <?php echo app('Illuminate\Foundation\Vite')(['resources/js/dark-mode.js']); ?>
  <?php echo $__env->make('partials.notify', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

  
</body>

</html><?php /**PATH D:\dev\vscode\resources\views/layouts/app.blade.php ENDPATH**/ ?>