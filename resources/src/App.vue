<template>
    <div class="min-h-screen overflow-x-hidden">
        <div class="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
            <div class="flex w-[108rem] flex-none justify-end">
                <img src="/assets/background/docs-dark.png" alt=""
                    class="hidden w-[90rem] max-w-none flex-none dark:block" decoding="async" />
            </div>
        </div>
        <div style="margin-bottom: 65px"></div>
        <nav
            class="supports-backdrop-blur:bg-white/60 fixed top-0 z-40 w-full flex-none border-b bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
            <div class="py-3 px-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button id="toggleSidebar" aria-expanded="false" aria-controls="sidebar"
                            class="mr-3 hidden cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
                            @click="sidebarCollapsed = !sidebarCollapsed">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button id="toggleSidebarMobile" aria-expanded="false" aria-controls="sidebar"
                            class="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
                            @click="
    sidebarMobile = !sidebarMobile;
sidebarCollapsed = !sidebarCollapsed;
                            ">
                            <svg :class="{ hidden: sidebarMobile }" class="h-6 w-6" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" class="h-6 w-6" :class="{ hidden: !sidebarMobile }"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <router-link to="/" class="if-sm mr-14 flex">
                            <img src="/assets/images/logoIcon/logo.png" class="mr-3 h-8" />
                        </router-link>
                    </div>
                    <div class="flex items-center lg:order-2">
                        <a v-if="
                            userStore.user != null &&
                            userStore.user.role_id == 1
                        " href="/admin/dashboard" class="btn btn-outline-secondary if-md">
                            Admin
                        </a>
                        <template v-if="ext.walletConnect == 1">
                            <Login class="mx-3" />
                        </template>
                        <button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button"
                            class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            <svg id="theme-toggle-dark-icon" class="hidden h-5 w-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg id="theme-toggle-light-icon" class="hidden h-5 w-5" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <div id="tooltip-toggle" role="tooltip"
                            class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300">
                            Toggle dark mode
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button id="user-menu-button" type="button"
                            class="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
                            aria-expanded="false" data-dropdown-toggle="profile-dropdown">
                            <span class="sr-only">Open user menu</span>
                            <img v-lazy="
                                userStore.user
                                    ? '/assets/images/profile/' +
                                    userStore.user.profile_photo_path
                                    : '/assets/no-image.png'
                            " class="h-8 w-8 rounded-full" alt="user photo" />
                        </button>
                        <div id="profile-dropdown"
                            class="z-40 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700">
                            <div class="py-3 px-4">
                                <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{
                                    userStore.user
                                        ? userStore.user.firstname
                                        : ""
                                }}
                                    {{
                                        userStore.user
                                            ? userStore.user.lastname
                                            : ""
                                    }}</span>
                                <span class="block truncate text-sm font-light text-gray-500 dark:text-gray-400">{{
                                    userStore.user
                                        ? userStore.user.email
                                        : ""
                                }}</span>
                            </div>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a href="/user/profile"
                                        class="text-dark block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My
                                        profile</a>
                                </li>
                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <router-link to="/support"
                                        class="text-dark block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Support</router-link>
                                </li>
                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <router-link to="/api-management"
                                        class="text-dark block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">API
                                        Management</router-link>
                                </li>
                            </ul>
                            <ul class="py-1 font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <a v-if="userStore.user !== null"
                                        class="text-dark block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="user_logout()">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="app-content" class="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
            <aside id="sidebar" class="fixed left-0 z-20 h-full flex-shrink-0 flex-col duration-300 lg:flex lg:w-[4rem]"
                aria-label="Sidebar" :class="{
                    'sidebar-menu-expanded':
                        !sidebarCollapsed ||
                        (sidebarCollapsed && sidebarHover) ||
                        sidebarMobile,
                    hidden: !sidebarMobile,
                }" @mouseover="
    !sidebarMobile ? (sidebarHover = !sidebarHover) : ''
" @mouseout="!sidebarMobile ? (sidebarHover = !sidebarHover) : ''">
                <div
                    class="supports-backdrop-blur:bg-white/60 relative flex h-full min-h-0 flex-1 flex-col border-r border-gray-200 bg-white bg-white/95 pt-0 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-slate-900/10">
                    <div id="sidebarOverflow" class="flex flex-1 flex-col overflow-x-hidden pt-5 pb-4"
                        style="max-height: calc(88vh)" :class="
                            !sidebarCollapsed ||
                                (sidebarCollapsed && sidebarHover) ||
                                sidebarMobile
                                ? 'overflow-y-auto'
                                : 'overflow-y-hidden'
                        ">
                        <div class="flex-1 space-y-1 divide-y divide-gray-200 px-3 dark:divide-gray-700">
                            <ul id="sidebar-ul" class="space-y-2 pb-2" :class="{
                                expandedMenu:
                                    !sidebarCollapsed ||
                                    (sidebarCollapsed && sidebarHover) ||
                                    sidebarMobile,
                                collapsedMenu: !sidebarMobile,
                            }">
                                <template v-for="menu in usermenuData[0]">
                                    <li v-if="menu.status == 1" :class="
                                        checkPath(menu.url)
                                            ? 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700'
                                            : ''
                                    ">
                                        <template v-if="!menu.submenu">
                                            <router-link :to="menu.url"
                                                class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                :target="
                                                    menu.newTab
                                                        ? '_blank'
                                                        : '_self'
                                                ">
                                                <i :class="
                                                    'bi bi-' + menu.icon
                                                "></i>
                                                <span class="ml-3 whitespace-nowrap">{{ $t(menu.name) }}</span>
                                            </router-link>
                                        </template>
                                        <template v-else>
                                            <a class="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                                @click="
                                                    userStore.toggleMenu(menu)
                                                ">
                                                <i :class="
                                                    'bi bi-' + menu.icon
                                                "></i>
                                                <span class="ml-3 flex-1 whitespace-nowrap text-left">{{
                                                    $t(menu.name)
                                                }}</span>
                                                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </a>
                                            <ul class="mt-1 space-y-2 rounded-lg bg-gray-50 shadow-inner dark:bg-gray-900"
                                                :class="
                                                    userStore.toggledMenu
                                                        ? userStore.toggledMenu
                                                            .name == menu.name
                                                            ? userStore
                                                                .toggledMenu
                                                                .showSub
                                                                ? ''
                                                                : 'hidden'
                                                            : 'hidden'
                                                        : 'hidden'
                                                ">
                                                <template v-for="submenu in menu.submenu" :key="submenu.url">
                                                    <li :class="
                                                        checkPath(
                                                            submenu.url
                                                        )
                                                            ? 'rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-700'
                                                            : ''
                                                    ">
                                                        <router-link :to="submenu.url"
                                                            class="group flex items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition-transform duration-300 ease-in-out hover:translate-x-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                                            <i class="icon bi mr-3 text-xs" :class="
                                                                'bi-' +
                                                                submenu.icon
                                                            "></i>
                                                            <span class="flex-1 whitespace-nowrap">{{
                                                                $t(
                                                                    submenu.name
                                                                                                                            )
                                                            }}</span>
                                                        </router-link>
                                                    </li>
                                                </template>
                                            </ul>
                                        </template>
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <News :rightbar-collapsed="rightbarCollapsed" />
            <div class="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90" :class="{ hidden: !sidebarMobile }"
                @click="
    sidebarMobile = !sidebarMobile;
sidebarCollapsed = !sidebarCollapsed;
                "></div>
            <div id="main-content"
                class="relative mb-10 h-full w-full overflow-y-auto bg-gray-50 p-5 pr-16 duration-300 dark:bg-gray-900 lg:ml-[4rem]"
                :class="{
                    'sidebar-main-expanded':
                        !sidebarCollapsed ||
                        (sidebarCollapsed && sidebarHover) ||
                        sidebarMobile,
                }">
                <router-view v-slot="{ Component, route }">
                    <component :is="Component" :key="route.name"></component>
                </router-view>
            </div>

            <footer id="footer"
                class="supports-backdrop-blur:bg-white/60 fixed bottom-0 right-0 z-40 w-full overflow-hidden border-t bg-white/95 px-4 pl-20 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-gray-800 dark:bg-transparent sm:flex sm:items-center sm:justify-between lg:border-slate-900/10">
                <div class="md:mb-0 xl:flex xl:items-center xl:space-x-3">
                    <p class="hidden text-center text-sm text-gray-500 dark:text-gray-400 md:block xl:mb-0">
                        &copy;
                        {{ getCurrentYear }}
                        {{ siteName }}.
                        {{ $t("All rights Reserved") }}
                    </p>
                </div>
                <div class="flex items-center justify-center space-x-3">
                    <button id="dropdownLanguageButton" data-dropdown-toggle="dropdownLanguage"
                        class="flex items-center rounded-full p-1.5 text-sm font-medium text-gray-900 hover:text-primary-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:text-primary-500 dark:focus:ring-gray-700 md:mr-0"
                        type="button">
                        <span class="sr-only">Open user menu</span>
                        <i class="flag-icon mr-2 h-3.5 w-3.5 rounded-full"
                            :class="'flag-icon-' + locales[$i18n.locale].icon"></i>
                        <svg class="mx-1.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                    <a v-if="ext.livechat == 1" href="/user/livechat" target="_blank"
                        class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </a>
                    <button
                        class="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="toggleFullScreen()">
                        <svg id="toggleFullScreen" onclick="toggleFullScreen();" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    </button>
                </div>
            </footer>
            <div id="dropdownLanguage"
                class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
                <ul class="py-1" role="none">
                    <li v-for="(locale, key, index) in locales" :key="index">
                        <a class="block py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem" @click="SelectLang(key)">
                            <div class="inline-flex items-center">
                                <i class="flag-icon mr-2 h-3.5 w-3.5 rounded-full" :class="'flag-icon-' + locale.icon">
                                </i>
                                {{ locale.lang }} ({{ key }})
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="tooltip-expand" role="tooltip"
                class="tooltip invisible absolute z-50 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                Expand
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>
</template>

<script>
import News from "./main/News.vue";
import { useUserStore } from "./store/user";
import { useRouter } from "vue-router";
import { defineAsyncComponent } from "vue";
import Tr from "./translation";

export default {
    components: {
        News,
        Login: defineAsyncComponent(() => import("./Login.vue")),
    },
    setup() {
        const userStore = useUserStore();
        const router = useRouter();
        router.beforeEach((to) => {
            userStore.toggledMenu = null;
        });
        return { userStore };
    },
    // component data
    data() {
        return {
            usermenuData: usermenuData,
            sidebarCollapsed: true,
            sidebarHover: false,
            sidebarMobile: false,
            rightbarCollapsed: true,
            siteName: siteName,
            ext: ext,
            plat: plat,
            custom_classes: "",
            popups: [],
            locales: {
                ar: { lang: "Arabic", icon: "iq" },
                bn: { lang: "Bengali", icon: "in" },
                de: { lang: "German", icon: "de" },
                en: { lang: "English", icon: "us" },
                es: { lang: "Spanish", icon: "es" },
                fa: { lang: "Farsi", icon: "ir" },
                fr: { lang: "French", icon: "fr" },
                hi: { lang: "Hindi", icon: "in" },
                hu: { lang: "Hungarian", icon: "hu" },
                id: { lang: "Indonesian", icon: "id" },
                it: { lang: "Italian", icon: "it" },
                ja: { lang: "Japanese", icon: "jp" },
                ko: { lang: "Korean", icon: "kr" },
                nb: { lang: "Norwegian", icon: "no" },
                nl: { lang: "Netherlands", icon: "nl" },
                pl: { lang: "Polish", icon: "pl" },
                pt: { lang: "Portuguese", icon: "pt" },
                ru: { lang: "Russain", icon: "ru" },
                th: { lang: "Thai", icon: "th" },
                tr: { lang: "Turkish", icon: "tr" },
                uk: { lang: "Ukrainian", icon: "ua" },
                ur: { lang: "Urdo", icon: "pk" },
                vi: { lang: "Vietnamese", icon: "vn" },
                zh: { lang: "Chinese", icon: "cn" },
            },
        };
    },
    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        },
    },

    watch: {
        async $route(to, from) {
            try {
                document.title = to.meta.title || "Dashboard";
            } catch (error) { }
            if (to.path == "/dashboard") {
                if (plat.dashboard.default_page == "trading") {
                    this.$router.push(
                        "/trade/" + plat.trading.first_trade_page
                    );
                } else if (plat.dashboard.default_page == "binary") {
                    this.$router.push("/binary");
                } else if (plat.dashboard.default_page == "bot") {
                    this.$router.push("/bot");
                } else if (plat.dashboard.default_page == "ico") {
                    this.$router.push("/ico");
                } else if (plat.dashboard.default_page == "mlm") {
                    this.$router.push("/network");
                } else if (plat.dashboard.default_page == "forex") {
                    this.$router.push("/forex");
                } else if (plat.dashboard.default_page == "staking") {
                    this.$router.push("/staking");
                } else if (plat.dashboard.default_page == "knowledge") {
                    this.$router.push("/knowledge");
                }
            }
        },
    },
    created() {
        this.fetchData();
    },
    // on component mounted
    mounted() { },

    // on component destroyed
    unmounted() { },
    // custom methods
    methods: {
        checkPath(url) {
            return url == window.location.pathname.replace("/app/", "/")
                ? true
                : false;
        },
        async SelectLang(lang) {
            await Tr.switchLanguage(lang);
        },
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                $("#toggleFullScreen").html(
                    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />'
                );
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    $("#toggleFullScreen").html(
                        '<path stroke-linecap="round" stroke-linejoin="round"d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />'
                    );
                }
            }
        },
        user_logout() {
            axios
                .post("/logout")
                .then((response) => {
                    this.$toast.success("Logged Out Successfully");
                    location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        truncate(str, n) {
            return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
        },
        async fetchData() {
            if (this.userStore.user == null) {
                await this.userStore.fetch();
            }
        },
    },
};
</script>

<style lang="scss">
// ///////////////////////////////////////////////
// Zoom Fade
// ///////////////////////////////////////////////
.zoom-fade-enter-active,
.zoom-fade-leave-active {
    transition: transform 0.35s, opacity 0.28s ease-in-out;
}

.zoom-fade-enter {
    transform: scale(0.97);
    opacity: 0;
}

.zoom-fade-leave-to {
    transform: scale(1.03);
    opacity: 0;
}

// ///////////////////////////////////////////////
// Fade Regular
// ///////////////////////////////////////////////
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.28s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

// ///////////////////////////////////////////////
// Page Slide
// ///////////////////////////////////////////////
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.35s, transform 0.4s;
}

.slide-fade-enter {
    opacity: 0;
    transform: translateX(-30%);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(30%);
}

// ///////////////////////////////////////////////
// Zoom Out
// ///////////////////////////////////////////////
.zoom-out-enter-active,
.zoom-out-leave-active {
    transition: opacity 0.35s ease-in-out, transform 0.45s ease-out;
}

.zoom-out-enter,
.zoom-out-leave-to {
    opacity: 0;
    transform: scale(0);
}

// ///////////////////////////////////////////////
// Fade Bottom
// ///////////////////////////////////////////////

// Speed: 1x
.fade-bottom-enter-active,
.fade-bottom-leave-active {
    transition: opacity 0.3s, transform 0.35s;
}

.fade-bottom-enter {
    opacity: 0;
    transform: translateY(-8%);
}

.fade-bottom-leave-to {
    opacity: 0;
    transform: translateY(8%);
}

// Speed: 2x
.fade-bottom-2x-enter-active,
.fade-bottom-2x-leave-active {
    transition: opacity 0.2s, transform 0.25s;
}

.fade-bottom-2x-enter {
    opacity: 0;
    transform: translateY(-4%);
}

.fade-bottom-2x-leave-to {
    opacity: 0;
    transform: translateY(4%);
}

// ///////////////////////////////////////////////
// Fade Top
// ///////////////////////////////////////////////

// Speed: 1x
.fade-top-enter-active,
.fade-top-leave-active {
    transition: opacity 0.3s, transform 0.35s;
}

.fade-top-enter {
    opacity: 0;
    transform: translateY(8%);
}

.fade-top-leave-to {
    opacity: 0;
    transform: translateY(-8%);
}

// Speed: 2x
.fade-top-2x-enter-active,
.fade-top-2x-leave-active {
    transition: opacity 0.2s, transform 0.25s;
}

.fade-top-2x-enter {
    opacity: 0;
    transform: translateY(4%);
}

.fade-top-2x-leave-to {
    opacity: 0;
    transform: translateY(-4%);
}

///////////////////////////////////////////////////////////
// transition-group : list;
///////////////////////////////////////////////////////////
.list-leave-active {
    position: absolute;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

///////////////////////////////////////////////////////////
// transition-group : list-enter-up;
///////////////////////////////////////////////////////////
.list-enter-up-leave-active {
    transition: none !important;
}

.list-enter-up-enter {
    opacity: 0;
    transform: translateY(30px);
}
</style>
