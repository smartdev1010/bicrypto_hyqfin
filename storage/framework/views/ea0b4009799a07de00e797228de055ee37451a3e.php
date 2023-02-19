<aside id="sidebar" class="hidden fixed left-0 z-20 flex-col flex-shrink-0 lg:w-[4rem] lg:flex duration-300"
    style="max-height: calc(100vh - 6rem)"
    :class="{
        'sidebar-menu-expanded':
            !sidebarCollapsed ||
            (sidebarCollapsed && sidebarHover) ||
            sidebarMobile,
        hidden: !sidebarMobile,
    }"
    @mouseover.debounce.100ms="
        sidebarHover = true
    " @mouseleave.debounce.100ms="sidebarHover = false"
    aria-label="Sidebar">
    <div
        class="supports-backdrop-blur:bg-white/60 relative flex h-full min-h-0 flex-1 flex-col border-r border-gray-200 bg-white bg-white/95 pt-0 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-slate-900/10">
        <div id="sidebarOverflow" class="flex flex-1 flex-col overflow-x-hidden pt-5 pb-4" style="max-height: calc(88vh)"
            :class="!sidebarCollapsed ||
                (sidebarCollapsed && sidebarHover) ||
                sidebarMobile ?
                'overflow-y-auto' :
                'overflow-y-hidden'">
            <div class="flex-1 space-y-1 divide-y divide-gray-200 px-3 dark:divide-gray-700">
                <ul class="space-y-2 pb-2" id="sidebar-ul"
                    :class="{
                        expandedMenu:
                            !sidebarCollapsed ||
                            (sidebarCollapsed && sidebarHover) ||
                            sidebarMobile,
                        collapsedMenu: !sidebarMobile,
                    }">
                    <?php if(isset($menuData[0])): ?>
                        <?php $__currentLoopData = $menuData[0]; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $menu): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php if(
                                ($menu->status == 1 && !isset($menu->permission)) ||
                                    ($menu->status == 1 && (isset($menu->permission) && Gate::allows($menu->permission)))): ?>
                                <?php
                                    $menu_active_classes = '';
                                    if (isset($menu->url)) {
                                        if ($menu->url === $_SERVER['REQUEST_URI']) {
                                            $menu_active_classes = 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700';
                                        } else {
                                            $menu_active_classes = '';
                                        }
                                    }
                                ?>
                                <li class="<?php echo e($menu_active_classes); ?>">

                                    <?php if(!isset($menu->submenu)): ?>
                                        <a href="<?php echo e(isset($menu->url) ? url($menu->url) : 'javascript:void(0)'); ?>"
                                            target="<?php echo e(isset($menu->newTab) ? '_blank' : '_self'); ?>"
                                            class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">

                                            <i class="bi bi-<?php echo e($menu->icon); ?>"></i>
                                            <span class="ml-3 whitespace-nowrap"><?php echo e(__($menu->name)); ?></span>
                                        </a>
                                    <?php else: ?>
                                        <a class="transition-transform ease-in-out hover:translate-x-1 duration-300 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                            aria-controls="dropdown-<?php echo e(__($menu->name)); ?>"
                                            data-collapse-toggle="dropdown-<?php echo e(__($menu->name)); ?>">

                                            <i class="bi bi-<?php echo e($menu->icon); ?>"></i>
                                            <span
                                                class="toggle-item flex-1 ml-3 text-left whitespace-nowrap"><?php echo e(__($menu->name)); ?></span>
                                            <svg class="toggle-item w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                        <ul id="dropdown-<?php echo e(__($menu->name)); ?>"
                                            class="hidden shadow-inner mt-1 space-y-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                                            <?php if (isset($component)) { $__componentOriginalbaf097337b3fb8b57766d65b95992eb20fc4a417 = $component; } ?>
<?php $component = App\View\Components\Partials\Nav\Submenu::resolve(['submenu' => $menu->submenu] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
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
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </div>

</aside>
<div class="" :class="!sidebarMobile ? 'hidden' : 'fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90'"
    @click="
        sidebarMobile = !sidebarMobile;
        sidebarCollapsed = !sidebarCollapsed;
    "></div>
<?php /**PATH D:\dev\vscode\resources\views/panels/sidebar-menu.blade.php ENDPATH**/ ?>