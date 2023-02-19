<template>
    <li v-if="menu.status == 1" :class="customClasses" :key="pathname">
        <template v-if="!menu.submenu">
            <router-link
                :to="menu.url"
                class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                :target="menu.newTab ? '_blank' : '_self'"
            >
                <i :class="'bi bi-' + menu.icon"></i>
                <span class="ml-3 whitespace-nowrap">{{ $t(menu.name) }}</span>
            </router-link>
        </template>
        <template v-else>
            <a
                class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                :aria-controls="'dropdown-' + menu.name"
                @click="userStore.toggleMenu(menu)"
            >
                <i :class="'bi bi-' + menu.icon"></i>
                <span class="ml-3 flex-1 whitespace-nowrap text-left">{{
                    $t(menu.name)
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
                class="mt-1 space-y-2 rounded-lg bg-gray-50 shadow-inner dark:bg-gray-900"
                :class="
                    userStore.toggledMenu
                        ? userStore.toggledMenu.name == menu.name
                            ? userStore.toggledMenu.showSub
                                ? ''
                                : 'hidden'
                            : 'hidden'
                        : 'hidden'
                "
            >
                <SubMenuItem
                    :menu="menu.submenu"
                    :pathname="pathname"
                    :key="pathname"
                />
            </ul>
        </template>
    </li>
</template>

<script>
import SubMenuItem from "./SubMenuItem.vue";

// component
import { useUserStore } from "../store/user";
export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    name: "side-menu",
    props: ["menu"],

    // component list
    components: {
        SubMenuItem,
    },
    // component data
    data() {
        return { pathname: window.location.pathname.replace("/app/", "/") };
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
    // custom methods
    methods: {},
    // on component created
    created() {},

    // on component destroyed
    destroyed() {},
};
</script>
