<template>
    <div
        class="main-menu menu-fixed menu-accordion menu-shadow"
        :class="[
            configData['themeuser'] === 'light' ||
            configData['themeuser'] === 'semi-dark'
                ? 'menu-dark'
                : 'menu-light',
            { expanded: isHovering },
        ]"
        data-scroll-to-active="true"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
    >
        <div class="navbar-header" :class="{ expanded: isHovering }">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto">
                    <router-link class="navbar-brand" to="/">
                        <span class="brand-logo">
                            <img
                                src="/assets/images/logoIcon/icon.png"
                                alt="image"
                                id="favicon_light"
                                :class="
                                    configData['themeuser'] == 'light'
                                        ? ''
                                        : 'hidden'
                                "
                            />
                            <img
                                src="/assets/images/logoIcon/icon-dark.png"
                                alt="image"
                                id="favicon_dark"
                                :class="
                                    configData['themeuser'] == 'light'
                                        ? 'hidden'
                                        : ''
                                "
                            />
                        </span>
                        <div class="brand-text">
                            <img
                                src="/assets/images/logoIcon/logo.png"
                                alt="image"
                                id="logo"
                                :class="
                                    configData['themeuser'] == 'light'
                                        ? ''
                                        : 'hidden'
                                "
                            /><img
                                src="/assets/images/logoIcon/logo-dark.png"
                                alt="image"
                                id="logo_dark"
                                :class="
                                    configData['themeuser'] == 'light'
                                        ? 'hidden'
                                        : ''
                                "
                            />
                        </div>
                    </router-link>
                </li>
                <li class="nav-item nav-toggle">
                    <a
                        class="nav-link modern-nav-toggle pe-0"
                        data-bs-toggle="collapse"
                    >
                        <i
                            class="bi bi-x d-block d-xl-none text-primary toggle-icon font-medium-4"
                        ></i>
                        <i
                            class="d-none d-xl-block collapse-toggle-icon font-medium-4 text-primary"
                        ></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main-menu-content">
            <ul
                class="navigation navigation-main"
                id="main-menu-navigation"
                data-menu="menu-navigation"
            >
                <template v-for="menu in usermenuData[0]">
                    <template v-if="menu.navheader">
                        <li class="navigation-header" :key="menu.icon">
                            <span>{{ menu.navheader }}</span>
                            <i class="bi bi-three-dots-vertical"></i>
                        </li>
                    </template>
                    <template
                        v-else
                        :class="
                            menu.classlist
                                ? (custom_classes = menu.classlist)
                                : ''
                        "
                    >
                        <SubMenu
                            :menu="menu"
                            :key="menu.icon"
                            :custom_classes="custom_classes"
                        />
                    </template>
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
import SubMenu from "./SubMenu.vue";
export default {
    props: ["configData", "usermenuData"],
    components: {
        SubMenu,
    },
    setup() {},
    // component data
    data() {
        return {
            siteName: siteName,
            isHovering: false,
            custom_classes: "",
        };
    },

    methods: {},
    // on component created
    created() {},
};
</script>
