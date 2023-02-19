<template>
    <template v-for="submenu in menu" :key="submenu.url">
        <li :class="customClasses">
            <!-- <template v-if="!submenu.submenu"> -->
            <router-link
                :to="submenu.url"
                class="group flex items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            >
                <i
                    class="icon bi mr-3 text-xs"
                    :class="'bi-' + submenu.icon"
                ></i>
                <span class="flex-1 whitespace-nowrap">{{
                    $t(submenu.name)
                }}</span>
            </router-link>
            <!-- </template> -->
            <!-- <template v-else>
                <a
                    class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    :aria-controls="'dropdown-' + submenu.name"
                    :data-collapse-toggle="'dropdown-' + submenu.name"
                >
                    <i
                        class="icon bi mr-3 text-xs"
                        :class="'bi-' + submenu.icon"
                    ></i>
                    <span class="flex-1 whitespace-nowrap text-left">{{
                        $t(submenu.name)
                    }}</span>
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
                <ul
                    :id="'dropdown-' + submenu.name"
                    class="mt-1 hidden space-y-2 rounded-lg bg-gray-50 shadow-inner dark:bg-gray-900"
                >
                    <SubMenuItem
                        :menu="submenu.submenu"
                        :pathname="pathname"
                        :key="pathname"
                    />
                </ul>
            </template> -->
        </li>
    </template>
</template>

<script>
// component
export default {
    name: "sub-sub-menu-item",
    props: ["menu", "pathname"],
    components: {},
    data() {
        return {};
    },
    computed: {
        customClasses() {
            return this.menu.url
                ? this.menu.url === this.pathname
                    ? "rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                    : ""
                : "";
        },
    },
    methods: {},
    created() {},
    destroyed() {},
};
</script>
