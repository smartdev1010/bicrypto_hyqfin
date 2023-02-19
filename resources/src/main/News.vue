<template>
    <div
        id="rightbar"
        class="fixed right-0 z-40 h-full w-4 flex-shrink-0 flex-col transition-width duration-300"
        style="z-index: 100"
        aria-label="rightbar"
        :class="{
            'rightbar-menu-expanded': !rightbarCollapsed,
        }"
    >
        <div
            class="supports-backdrop-blur:bg-white/60 flex h-full min-h-0 flex-1 flex-col border-l border-gray-200 bg-white bg-white/95 pt-0 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-slate-900/10"
        >
            <div
                class="align-left fixed z-40 grid h-screen w-4 place-items-center border-r border-gray-200 shadow transition-width duration-300 hover:bg-gray-200 dark:border-slate-50/[0.06] dark:hover:bg-gray-600 lg:border-slate-900/10"
                @click="rightbarCollapsed = !rightbarCollapsed"
            >
                <i
                    class="bi"
                    :class="{
                        'bi-chevron-left': rightbarCollapsed,
                        'bi-chevron-right': !rightbarCollapsed,
                    }"
                ></i>
            </div>
            <div
                class="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden py-3 pl-4"
            >
                <section
                    class="blog body-font overflow-y-auto overflow-x-hidden text-gray-700"
                >
                    <div class="mx-auto space-y-5 px-3">
                        <div
                            v-for="article in newsStore.news"
                            :key="article.id"
                            class="flex flex-col items-center justify-center pb-5 md:mb-0 md:w-1/3"
                        >
                            <div
                                class="overflow-hidden rounded-lg bg-white shadow-lg"
                            >
                                <div
                                    class="rounded-lg-t h-44 w-full bg-gray-300 bg-cover bg-center shadow-md"
                                    :style="
                                        'background-image: url(' +
                                        article.imageurl +
                                        ');'
                                    "
                                ></div>
                                <div class="p-4">
                                    <div class="header-content inline-flex">
                                        <div
                                            class="category-badge m-1 h-4 flex-1 rounded-full bg-purple-100"
                                            style="max-width: 1rem"
                                        >
                                            <div
                                                class="m-1 h-2 w-2 rounded-full bg-purple-500"
                                            ></div>
                                        </div>
                                        <div
                                            class="category-title flex-1 flex-col text-sm"
                                        >
                                            {{ article.source_info.name }}
                                        </div>
                                    </div>
                                    <div>
                                        <a
                                            :href="article.url"
                                            target="_blank"
                                            class="title-post text-sm font-medium text-gray-900"
                                            >{{ article.title }}</a
                                        >
                                    </div>
                                    <div
                                        class="summary-post text-justify text-xs"
                                    >
                                        <p
                                            v-html="truncateText(article.body)"
                                        ></p>
                                        <button
                                            class="mt-4 block rounded bg-blue-100 p-2 text-sm text-blue-500"
                                        >
                                            <span class="text-xs">{{
                                                time_since(article.published_on)
                                            }}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
const isEmpty = function (obj) {
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
};
const ago = function (val) {
    val = 0 | ((Date.now() - new Date(val * 1000)) / 1000);
    var unit,
        length = {
            sec: 60,
            min: 60,
            hr: 24,
            day: 7,
            week: 4.35,
            month: 12,
            year: 10000,
        },
        result;

    for (unit in length) {
        result = val % length[unit];
        if (!(val = 0 | (val / length[unit])))
            return result + " " + (result - 1 ? unit + "s" : unit) + " ago";
    }
};
import { useNewsStore } from "../store/news";
export default {
    filters: {
        tags: function (value) {
            if (!value) return "";
            return value.split("|").join(", ");
        },
    },
    props: ["rightbarCollapsed"],
    setup() {
        const newsStore = useNewsStore();
        return { newsStore };
    },
    data() {
        return {
            interval: null,
        };
    },
    created() {
        this.getNews();
        this.interval = setInterval(
            function () {
                this.getNews();
            }.bind(this),
            300000
        );
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        truncateText(value) {
            if (value.length > 135) {
                const substr = value.substring(0, 135);
                return substr.substring(0, substr.lastIndexOf(" ")) + " ...";
            } else {
                return value;
            }
        },
        async getNews() {
            this.newsStore.fetch();
        },
        time_since(val) {
            if (val) {
                return ago(val);
            } else {
                return "";
            }
        },
    },
};
</script>
<style scoped lang="scss">
.transparentt {
    opacity: 0;
}
</style>
