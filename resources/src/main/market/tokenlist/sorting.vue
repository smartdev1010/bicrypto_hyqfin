<template>
    <dropdown text="button">
        <template #trigger>
            <button class="btn btn-outline-secondary">
                <i class="bi bi-sort-down-alt mr-2"></i>

                {{ label }}
            </button>
        </template>
        <list-group :class="'text-start'"
            ><div
                class="flex items-center border-b py-3 px-4 text-sm text-gray-900 dark:text-white"
            >
                <i class="bi bi-sort-down-alt mr-2"></i>
                {{ $t("Sorting Options") }}
            </div>
            <list-group-item
                v-for="(item, index) in items"
                :key="index"
                class="inline-flex w-full cursor-pointer items-center border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
                :class="{
                    'text-primary bg-gray-600 dark:bg-gray-100': activeSort(
                        item.target
                    ),
                }"
                @click="$sorter.sortOrder('ticker', item.target, item.type)"
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
                <i class="bi mr-1" :class="item.icon"></i>
                {{ index }}
            </list-group-item>
        </list-group>
    </dropdown>
</template>
<script setup>
import { Dropdown, ListGroup, ListGroupItem } from "flowbite-vue";
</script>
<script>
export default {
    props: ["sortData", "options", "label"],
    data() {
        return {
            items: {
                Token: { target: "token", type: "asc", icon: "coin" },
                Percent: { target: "percent", type: "desc", icon: "percent" },
                Price: { target: "close", type: "desc", icon: "graph-up" },
                Volatility: {
                    target: "volatility",
                    type: "desc",
                    icon: "graph-up",
                },
                Danger: {
                    target: "danger",
                    type: "desc",
                    icon: "exclamation-circle",
                },
                Change: { target: "change", type: "desc", icon: "clock" },
                Volume: {
                    target: "marketVolume",
                    type: "desc",
                    icon: "bar-chart-line-fill",
                },
                Trades: {
                    target: "trades",
                    type: "desc",
                    icon: "arrow-left-right",
                },
            },
        };
    },
    methods: {
        // check if key is active sort option
        activeSort(column) {
            return this.sortData.ticker.column === column;
        },
    },
};
</script>
