<div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
  <div class="w-[108rem] flex-none flex justify-end">
    
    <img src="/assets/background/docs-dark.png" alt="" class="w-[90rem] flex-none max-w-none hidden dark:block"
      decoding="async">
  </div>
</div>
<div style="margin-bottom: 65px;"></div>
<nav
  class="fixed top-0 z-40 lg:z-50 w-full flex-none backdrop-blur transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
  <div class="py-3 px-3 lg:px-5 lg:pl-3">
    <div class="flex justify-between items-center">
      <div class="flex justify-start items-center">
        <button id="toggleSidebar" aria-expanded="false" aria-controls="sidebar"
          @click="sidebarCollapsed = !sidebarCollapsed"
          class="mr-3 hidden cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <button id="toggleSidebarMobile" aria-expanded="false" aria-controls="sidebar" @click="
                        sidebarMobile = !sidebarMobile;
                        sidebarCollapsed = !sidebarCollapsed;
                    "
          class="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">
          <svg :class="{ hidden: sidebarMobile }" class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg id="toggleSidebarMobileClose" class="h-6 w-6" :class="{ hidden: !sidebarMobile }" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <a href="./" class="flex mr-14">
          <img src="<?php echo e(getImage(imagePath()['logoIcon']['path'] . '/logo.png')); ?>" class="mr-3 h-8" />
        </a>
      </div>
      <div class="flex items-center">
        <button type="button" data-dropdown-toggle="notification-dropdown"
          class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
          <span class="sr-only">View notifications</span>

          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z">
            </path>
          </svg>
        </button>
        <div
          class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
          id="notification-dropdown">
          <div
            class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            Notifications
          </div>
          <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.panels.admin-notifications', [])->html();
} elseif ($_instance->childHasBeenRendered('PWqAolR')) {
    $componentId = $_instance->getRenderedChildComponentId('PWqAolR');
    $componentTag = $_instance->getRenderedChildComponentTagName('PWqAolR');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('PWqAolR');
} else {
    $response = \Livewire\Livewire::mount('components.panels.admin-notifications', []);
    $html = $response->html();
    $_instance->logRenderedChild('PWqAolR', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
          <a href="#"
            class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
            <div class="inline-flex items-center ">
              <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"></path>
              </svg>
              View all
            </div>
          </a>
        </div>


        <a href="/app/" class="btn btn-outline-secondary mx-3">
          User Dashboard
        </a>

        

    <div id="tooltip-toggle" role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
      Toggle dark mode
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/js/dark-mode.js']); ?>

    <div class="flex items-center ml-3">
      <?php
if (! isset($_instance)) {
    $html = \Livewire\Livewire::mount('components.nav.profile', [])->html();
} elseif ($_instance->childHasBeenRendered('ZnJ58If')) {
    $componentId = $_instance->getRenderedChildComponentId('ZnJ58If');
    $componentTag = $_instance->getRenderedChildComponentTagName('ZnJ58If');
    $html = \Livewire\Livewire::dummyMount($componentId, $componentTag);
    $_instance->preserveRenderedChild('ZnJ58If');
} else {
    $response = \Livewire\Livewire::mount('components.nav.profile', []);
    $html = $response->html();
    $_instance->logRenderedChild('ZnJ58If', $response->id(), \Livewire\Livewire::getRootElementTagName($html));
}
echo $html;
?>
    </div>
  </div>
  </div>
  </div>
</nav><?php /**PATH D:\dev\vscode\resources\views/panels/navigation-menu.blade.php ENDPATH**/ ?>