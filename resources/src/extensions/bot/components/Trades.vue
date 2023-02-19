<template>
    <div
        class="Trades border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
    >
        <div class="w-full bg-gray-200 dark:bg-gray-800">
            <ul
                id="myTab"
                class="nf flex-cols -mb-px flex overflow-x-hidden text-center"
                role="tablist"
            >
                <li class="mr-2 bg-gray-900">
                    <a
                        id="tab-contracts-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('tab-contracts')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="tab-contracts"
                        aria-selected="false"
                        @click.prevent="setActive('tab-contracts')"
                        >{{ $t("Active Contracts") }}</a
                    >
                </li>
            </ul>
        </div>
        <div id="tabbContent" class="px-3 py-3">
            <div
                id="tab-contracts"
                class=""
                :class="isActive('tab-contracts') ? '' : 'hidden'"
            >
                <div
                    style="overflow-y: auto; max-height: 250px"
                    class="space-y-3 pr-3"
                >
                    <template v-if="runningBots.length != 0">
                        <div
                            v-for="(bot, index) in runningBots"
                            :key="index"
                            class="rounded-lg border border-gray-300 bg-white p-3 shadow-lg dark:border-gray-600 dark:bg-gray-800"
                        >
                            <div
                                class="mb-2 flex justify-between text-xs font-medium"
                            >
                                <span>{{ bot.bot_name }}</span>
                                <span
                                    >({{ Number(bot.amount).toFixed(2) }}
                                    {{ bot.pair }})</span
                                >
                            </div>
                            <div
                                class="w-full rounded bg-gray-200 dark:bg-gray-700"
                            >
                                <div
                                    class="rounded text-center text-xs font-medium leading-none text-blue-100"
                                    :style="'width:' + time_left(bot) + '%'"
                                    :class="
                                        time_left(bot) == 100
                                            ? 'bg-green-600'
                                            : 'bg-red-600'
                                    "
                                >
                                    {{
                                        time_left(bot) == 100
                                            ? "Completed"
                                            : time_left(bot) + "%"
                                    }}
                                </div>
                            </div>
                        </div>
                    </template>
                    <div v-else class="text-center">
                        <div class="flex w-full justify-center" colspan="100%">
                            <img
                                height="128"
                                width="128"
                                src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                alt=""
                            />
                        </div>
                        {{ $t("No Data Found") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// component
export default {
    // component list
    components: {},
    props: ["runningBots"],

    // component data
    data() {
        return {
            activeItem: "tab-contracts",
        };
    },

    computed: {},

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        time_left(bot) {
            var start = new Date(Date.parse(bot.start_date)),
                today = new Date();

            //use Math.abs to avoid sign
            var q = Math.abs(today - start) / 1000;
            if (Math.round((q / bot.duration) * 100) > 100) {
                return 100;
            }
            return Math.round((q / bot.duration) * 100);
        },
    },
};
</script>
