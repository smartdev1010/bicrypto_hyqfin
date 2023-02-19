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
    <?php echo $__env->yieldContent('page-style'); ?>
    <?php echo \Livewire\Livewire::styles(); ?>


    <?php
        getAdminMenu();
        // getUserMenu();
    ?>
</head>

<body class="font-sans antialiased bg-gray-50 dark:bg-gray-900 text-slate-500 dark:text-slate-400 ">

    <div class="min-h-screen overflow-x-hidden" x-data="{
        sidebarCollapsed: $persist(true),
        sidebarHover: false,
        sidebarMobile: false,
    }">

        <?php echo $__env->make('panels.navigation-menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <div id="app-content" class="flex overflow-hidden">

            <?php echo $__env->make('panels.sidebar-menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
            <div id="main-content"
                class="relative mb-10 h-full w-full overflow-y-auto bg-gray-50 p-5 duration-300 dark:bg-gray-900 lg:ml-[4rem]"
                :class="{
                    'sidebar-main-expanded':
                        !sidebarCollapsed ||
                        (sidebarCollapsed && sidebarHover) ||
                        sidebarMobile,
                }">
                <?php if(Request::is('admin**') && !Request::is('admin/template/index')): ?>
                    <?php echo $__env->make('partials.breadcrumb', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                <?php endif; ?>
                <?php echo $__env->yieldContent('vendor-scripts'); ?>
                <?php echo $__env->yieldContent('content'); ?>
            </div>

        </div>

        <?php echo $__env->make('panels.footer-menu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        
        <?php echo $__env->make('partials.notify', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
            integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <?php echo $__env->yieldPushContent('modals'); ?>
        <?php echo $__env->yieldContent('dropdowns'); ?>
        <?php echo $__env->yieldPushContent('tooltips'); ?>
    </div>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.js']); ?>
    <?php echo $__env->yieldContent('page-scripts'); ?>
    <?php echo \Livewire\Livewire::scripts(); ?>

</body>

</html>
<?php /**PATH /home/hyqfin/public_html/resources/views/layouts/admin.blade.php ENDPATH**/ ?>