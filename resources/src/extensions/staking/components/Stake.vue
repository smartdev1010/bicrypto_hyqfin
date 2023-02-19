<template>
    <div
        id="subscribeModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
    >
        <form
            class="add-new-record modal-content pt-0"
            @submit.prevent="Stake()"
        >
            <div class="relative h-full w-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div
                    class="relative rounded-lg bg-white shadow dark:bg-gray-700"
                >
                    <!-- Modal header -->
                    <div
                        class="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600"
                    >
                        <h3
                            class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                            {{ $t("Staking") }} <span>{{ coin.symbol }}</span>
                        </h3>
                        <button
                            type="button"
                            class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
                        >
                            <svg
                                aria-hidden="true"
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="space-y-6 p-6">
                        <div class="flex justify-between">
                            <label for="amount">{{ $t("Stake Amount") }}</label>
                            <span class="text-light"
                                >{{ wallet.balance }} USDT</span
                            >
                        </div>
                        <div class="input-group mb-1 w-auto">
                            <input
                                type="number"
                                step="0.00000001"
                                required=""
                                v-model="amount"
                                min="0"
                                placeholder="Amount"
                            />
                            <span>{{ coin.symbol }}</span>
                        </div>
                        <div class="card bg-black">
                            <div class="card-body">
                                <div
                                    class="mb-1 flex justify-between"
                                    v-if="coin.price != null"
                                >
                                    <span>{{ $t("Price") }}</span>
                                    <span class="text-success"
                                        >{{ coin.price }} USDT</span
                                    >
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{
                                        $t("Est. Annual Profit Rate")
                                    }}</span>
                                    <span class="text-success"
                                        >{{ coin.apr }}%</span
                                    >
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Staked Amount") }}</span>
                                    <span>{{ coin.staked }}</span>
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Max Available") }}</span>
                                    <span>{{ coin.max_stake }}</span>
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Staking period") }}</span>
                                    <span
                                        >{{ coin.period }}
                                        {{ $t("Days") }}</span
                                    >
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Staking Method") }}</span>
                                    <span>{{ coin.method }}</span>
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Coin Network") }}</span>
                                    <span>{{ coin.network }}</span>
                                </div>
                                <div class="mb-1 flex justify-between">
                                    <span>{{ $t("Profit Distribution") }}</span>
                                    <span>{{ coin.profit_unit }}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>{{ $t("Est. Daily Profits") }}</span>
                                    <span>{{ coin.daily_profit }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div
                        class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
                    >
                        <button
                            data-modal-toggle="defaultModal"
                            type="button"
                            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {{ $t("Stake") }}
                        </button>
                        <button
                            data-modal-toggle="defaultModal"
                            type="button"
                            class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                        >
                            {{ $t("Close") }}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Stake",
    props: ["coin", "wallet"],
    // component list
    components: {},

    // component data
    data() {
        return {
            amount: 0,
            loading: false,
        };
    },

    // custom coin.methods
    methods: {
        Stake() {
            (this.loading = true),
                axios
                    .post("/user/staking/store", {
                        symbol: this.coin.symbol,
                        coin_id: this.coin.id,
                        amount: this.amount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            this.$emit("Staked");
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                        $("#subscribeModal").modal("hide");
                    });
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
