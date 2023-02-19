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
                <li>
                    <a
                        id="marketTrades-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('marketTrades')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="marketTrades"
                        aria-selected="false"
                        @click.prevent="setActive('marketTrades')"
                    >
                        {{ $t("Market Trades") }}</a
                    >
                </li>
            </ul>
        </div>
        <div id="tradesContent">
            <div
                id="marketTrades"
                class="px-3 pt-3"
                :class="isActive('marketTrades') ? '' : 'hidden'"
            >
                <div class="table-responsive">
                    <table class="text-dark table-sm table">
                        <thead class="text-muted">
                            <tr>
                                <th class="text-start" scope="col">
                                    {{ $t("Price") }}
                                </th>
                                <th class="text-end" scope="col">
                                    {{ $t("Amount") }}
                                </th>
                                <th class="text-end" scope="col">
                                    {{ $t("Time") }}
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tradeTable" class="trade">
                            <tr v-for="i in sideLength" :key="i">
                                <td :id="'price' + i" class="text-start">-</td>
                                <td :id="'amount' + i" class="text-end">-</td>
                                <td :id="'time' + i" class="text-end">-</td>
                            </tr>
                        </tbody>
                    </table>
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
    props: ["orderRender", "market"],

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            trades: [],
            sideLength: 12,
            refreshRate: 100,
            activeItem: "marketTrades",
        };
    },
    computed: {},

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.loopTrades();
    },

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
        priceFormatter(p, f1 = 8, f2 = 2, d = ",") {
            if (!p) {
                return 0;
            }
            p =
                parseInt(p) !== 0
                    ? parseFloat(p).toFixed(f2)
                    : parseFloat(p).toFixed(f1);
            p =
                parseInt(p) !== 0
                    ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, d)
                    : p;
            return p;
        },
        listTrades(res) {
            const now = Date.now();
            let color = "";
            if (
                !this.lastUpdated ||
                now - this.lastUpdated > this.refreshRate
            ) {
                for (let i = 0; i < res.length; i++) {
                    if (res[i]["type"] == "SELL") {
                        color = "rgb(246,70,93)";
                    } else {
                        color = "rgb(14,203,129)";
                    }
                    $("#price" + (i + 1))
                        .css("color", color)
                        .addClass("price")
                        .text(this.priceFormatter(res[i]["price"]));
                    $("#amount" + (i + 1))
                        .addClass("amount")
                        .text(this.priceFormatter(res[i]["amount"]));
                    $("#time" + (i + 1))
                        .addClass("time")
                        .text(
                            new Date(res[i]["created"]).toLocaleTimeString(
                                "en-US"
                            )
                        );
                }
                this.lastUpdated = now;
            }
        },
        async loopTrades() {
            while (
                window.location.href.indexOf(
                    this.market.currency + "-" + this.market.pair
                ) > -1
            ) {
                try {
                    await this.fetchTrades();
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                } catch (e) {
                    break;
                }
            }
        },
        async fetchTrades() {
            axios
                .post("/user/fetch/eco/trades", {
                    symbol: this.market.currency,
                    symbol_chain: this.market.currency_chain,
                    currency: this.market.pair,
                    currency_chain: this.market.pair_chain,
                })
                .then((response) => {
                    if (response.trades.length > 0) {
                        this.listTrades(response.trades);
                    }
                });
        },
        formatTime(time) {
            return time.split("T")[1].split(".")[0];
        },
    },
};
</script>
