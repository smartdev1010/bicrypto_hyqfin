<?php $__currentLoopData = $submenu; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $subsubmenu): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php if(($subsubmenu->status == 1 && !isset($subsubmenu->permission)) ||
        ($subsubmenu->status == 1 && (isset($subsubmenu->permission) && Gate::allows($subsubmenu->permission)))): ?>
        <?php
            $submenu_active_classes = '';
            if (isset($subsubmenu->url)) {
                if ($subsubmenu->url === $_SERVER['REQUEST_URI']) {
                    $submenu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700';
                    $menu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700';
                } else {
                    $submenu_active_classes = '';
                }
            }
        ?>
        <li class="<?php echo e($submenu_active_classes); ?>">
            <?php if(!isset($subsubmenu->submenu)): ?>
                <a href="<?php echo e(isset($subsubmenu->url) ? url($subsubmenu->url) : 'javascript:void(0)'); ?>"
                    class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 pl-11 text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    target="<?php echo e(isset($subsubmenu->newTab) && $subsubmenu->newTab === true ? '_blank' : '_self'); ?>">
                    <i class="mr-3 icon text-xs bi bi-<?php echo e($subsubmenu->icon ?? 'chevron-right'); ?>"></i>
                    <span class="flex-1 whitespace-nowrap"><?php echo e(__($subsubmenu->name)); ?></span>
                </a>
            <?php else: ?>
                <a href="javascript:void(0)"
                    class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    aria-controls="dropdown-<?php echo e(__($subsubmenu->name)); ?>"
                    data-collapse-toggle="dropdown-<?php echo e(__($subsubmenu->name)); ?>">

                    <i class="mr-3 icon text-xs bi bi-<?php echo e($subsubmenu->icon ?? 'chevron-right'); ?>"></i>
                    <span class="flex-1 text-left whitespace-nowrap"><?php echo e(__($subsubmenu->name)); ?></span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                <ul id="dropdown-<?php echo e(__($subsubmenu->name)); ?>" class="hidden py-2 space-y-2 pl-7">
                    <?php if (isset($component)) { $__componentOriginalbaf097337b3fb8b57766d65b95992eb20fc4a417 = $component; } ?>
<?php $component = App\View\Components\Partials\Nav\Submenu::resolve(['submenu' => $subsubmenu->submenu] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('partials.nav.submenu'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\Partials\Nav\Submenu::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbaf097337b3fb8b57766d65b95992eb20fc4a417)): ?>
<?php $component = $__componentOriginalbaf097337b3fb8b57766d65b95992eb20fc4a417; ?>
<?php unset($__componentOriginalbaf097337b3fb8b57766d65b95992eb20fc4a417); ?>
<?php endif; ?>
                </ul>
            <?php endif; ?>
        </li>
    <?php endif; ?>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php /**PATH /home/hyqfin/public_html/resources/views/components/partials/nav/submenu.blade.php ENDPATH**/ ?>