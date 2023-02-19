<template>
    <dropdown placement="left" text="button">
        <template #trigger>
            <button class="btn btn-outline-secondary">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mr-1 h-3 w-3"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>

                {{ limitCountLabel }}
            </button>
        </template>
        <list-group :class="'text-start'"
            ><div
                class="flex items-center border-b py-3 px-4 text-sm text-gray-900 dark:text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mr-2 h-3 w-3"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>

                Limits
            </div>
            <list-group-item
                v-for="(item, index) in items"
                :key="index"
                class="inline-flex w-full cursor-pointer items-center border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
                :class="{
                    'text-primary bg-gray-600 dark:bg-gray-100':
                        activeLimit(item),
                }"
                @click="limitList(item)"
            >
                <template #prefix
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-3 w-3"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </template>
                {{ item }}
                {{ $t("tokens") }} </list-group-item
            ><list-group-item
                class="inline-flex w-full cursor-pointer items-center border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
                :class="{
                    'text-primary bg-gray-600 dark:bg-gray-100':
                        option.prices.limit === 0,
                }"
                @click="limitList(0)"
            >
                <template #prefix
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-3 w-3"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </template>
                {{ $t("All tokens") }}
            </list-group-item>
        </list-group>
    </dropdown>
</template>
<script setup>
import { Dropdown, ListGroup, ListGroupItem } from "flowbite-vue";
</script>
<script>
export default {
    props: ["listCount", "options"],
    data() {
        return {
            items: [10, 20, 30, 50, 100],
            option: this.options,
        };
    },
    computed: {
        limitCountLabel() {
            let limit = parseInt(this.option.prices.limit) | 0;
            if (limit && limit < this.listCount)
                return limit + "/" + this.listCount;
            return "All " + this.listCount;
        },
    },
    methods: {
        limitList(num) {
            this.option.prices.limit = parseInt(num) | 0;
            this.saveOptions();
        },
        saveOptions() {
            this.$opts.saveOptions(this.option);
        },
        // check if num is active list limit option
        activeLimit(limit) {
            return this.options.prices.limit === limit;
        },
    },
};
</script>
