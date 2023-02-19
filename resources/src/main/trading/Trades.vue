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
                <li class="mr-2">
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
                v-if="activeItem === 'marketTrades'"
                id="marketTrades"
                class="px-3 pt-3"
            >
                <table>
                    <thead>
                        <th class="text-start" scope="col">
                            {{ $t("Price") }}
                        </th>
                        <th class="text-end" scope="col">
                            {{ $t("Amount") }}
                        </th>
                        <th
                            class="text-end"
                            style="padding-right: 5px"
                            scope="col"
                        >
                            {{ $t("Time") }}
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="item in trades" class="tdd">
                            <td class="price" :style="'color:' + item.color">
                                {{ item.price }}
                            </td>
                            <td class="amount text-dark text-end">
                                {{ item.amount }}
                            </td>
                            <td class="time text-dark text-end">
                                {{ item.time }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { useMarketStore } from "../../store/market";
export default {
    // component list
    components: {},
    setup() {
        const marketStore = useMarketStore();
        return { marketStore };
    },
    // component data
    data() {
        return {
            data_symbol: null,
            trades: [],
            sideLength: 11,
            refreshRate: 500,
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
            if (p == null || isNaN(p)) {
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
        updateTrades(tradeData) {
            const color =
                tradeData[0].side === "sell"
                    ? "rgb(246,70,93)"
                    : "rgb(14,203,129)";
            const newTrade = {
                price: this.priceFormatter(tradeData[0].price),
                amount: this.priceFormatter(tradeData[0].amount),
                time: this.formatTime(tradeData[0].datetime),
                color: color,
            };
            this.trades.unshift(newTrade);
            if (this.trades.length === this.sideLength) {
                this.trades.pop();
            }
        },
        async loopTrades() {
            if (this.marketStore.exchange.has["watchTrades"]) {
                while (
                    window.location.href.indexOf(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    ) > -1
                ) {
                    try {
                        const data =
                            await this.marketStore.exchange.watchTrades(
                                this.$route.params.symbol +
                                    "/" +
                                    this.$route.params.currency
                            );
                        this.updateTrades(data);
                    } catch (e) {
                        break;
                    }
                }
            }
        },
        formatTime(time) {
            return time.split("T")[1].split(".")[0];
        },
    },
};
</script>
