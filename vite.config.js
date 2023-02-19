import { defineConfig } from "vite";
import laravel, { refreshPaths } from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
    plugins: [
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: "__tla",
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: (i) => `__tla_${i}`,
        }),
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/src/login.js",
                "resources/css/user.css",
                "resources/src/user.js",
                "resources/src/frontend/trading.js",
                "resources/js/sidebar.js",
                "resources/js/dark-mode.js",
                "resources/css/kyc.css",
            ],
            refresh: [
                ...refreshPaths,
                "app/Http/Livewire/**",
                "resources/views/**",
            ],
            alias: {
                "@": "/resources/src",
            },
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
                compilerOptions: {
                    isCustomElement: (tag) =>
                        ["apexchart", "w3m-core-button"].includes(tag),
                },
            },
        }),
        VueI18nPlugin({
            include: resolve(
                dirname(fileURLToPath(import.meta.url)),
                "./resources/lang/**"
            ),
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        watch: {
            ignored: [
                "**/public/data/practice/**",
                "**/public/data/trade/**",
                "**/storage/**",
            ],
        },
    },
});
