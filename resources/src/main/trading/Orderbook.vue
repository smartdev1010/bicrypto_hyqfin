<template>
    <div
        class="Orderbook border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
    >
        <ul class="flex p-1 xs:hidden md:flex" role="tablist">
            <li class="p-1">
                <button
                    :class="{
                        'text-gray-200 dark:text-gray-600':
                            showMoreAsks ||
                            showMoreBids ||
                            (showMoreAsks && showMoreBids),
                    }"
                    @click.prevent="
                        (showMoreAsks = false),
                            (showMoreBids = false),
                            (limit.asks = 10),
                            (limit.bids = 10)
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
                        <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
            <li class="p-1">
                <button
                    :class="{
                        'text-gray-200 dark:text-gray-600':
                            !showMoreBids || showMoreAsks,
                    }"
                    @click.prevent="
                        (showMoreAsks = false),
                            (showMoreBids = true),
                            (limit.asks = 0),
                            (limit.bids = 20)
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
            <li class="p-1">
                <button
                    :class="{
                        'text-gray-200 dark:text-gray-600':
                            showMoreBids || !showMoreAsks,
                    }"
                    @click.prevent="
                        (showMoreAsks = true),
                            (showMoreBids = false),
                            (limit.asks = 20),
                            (limit.bids = 0)
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
        </ul>
        <div :key="limit.asks" class="OrderbookGrid">
            <div v-if="limit.asks != 0" class="Bids">
                <table style="overflow-x: hidden">
                    <thead class="">
                        <th
                            class="text-start"
                            style="padding-left: 5px"
                            scope="col"
                        >
                            Price
                        </th>
                        <th class="text-center" scope="col">Amount</th>
                        <th
                            class="text-end"
                            style="padding-right: 5px"
                            scope="col"
                        >
                            Total
                        </th>
                    </thead>
                    <tbody>
                        <ListItem
                            :key="showMoreBids"
                            :data="asks"
                            type="ask"
                            color="rgb(246, 70, 93)"
                            :show-less="showMoreBids"
                            :limit="limit.asks"
                        />
                    </tbody>
                </table>
            </div>
            <div class="LastPrice xs:hidden md:block">
                <div class="p-3">
                    <span class="">Last Price: </span>
                    <span :class="best_ask">{{ asks[0][0] }}</span>
                    <i class="bi" :class="best_ask_icon"></i>
                </div>
            </div>
            <div v-if="limit.bids != 0" class="Asks">
                <table style="overflow-x: hidden">
                    <thead v-if="limit.asks == 0" class="text-muted">
                        <th class="pl-2 text-start" scope="col">Price</th>
                        <th class="text-center" scope="col">Amount</th>
                        <th class="text-end" scope="col">Total</th>
                    </thead>
                    <thead v-if="limit.asks != 0" class="xs:block md:hidden">
                        <th class="pl-2 text-start" scope="col">Price</th>
                        <th class="text-center" scope="col">Amount</th>
                        <th class="text-end" scope="col">Total</th>
                    </thead>
                    <tbody>
                        <ListItem
                            :key="showMoreAsks"
                            :data="bids"
                            type="bid"
                            color="rgb(14, 203, 129)"
                            :show-less="showMoreAsks"
                            :limit="limit.bids"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// component
var computBarWidth = {
    width: 250,
    sortwidth: {
        sort: function (e) {
            return (
                e.sort(function (e, t) {
                    return e[1] - t[1];
                }),
                e
            );
        },
        median: function (e) {
            var t = Math.floor((e.length / 3) * 2);
            return e[t][1] < 1 ? 1 : e[t][1];
        },
        medianUnit: function (e, t, n) {
            var r = new Array(e);
            r = r[0];
            var o = new Array(t);
            (o = o[0]), (r = r.concat(o));
            var i = this.median(this.sort(r)) / n;
            return (o = r = null), i;
        },
        width: function (e, t) {
            if (0 == t) return 1;
            var n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : 160 < n ? 160 : n;
        },
    },
    init: function (e, t) {
        var n = [],
            r = [];
        e.forEach(function (e) {
            n.push(e);
        }),
            t.forEach(function (e) {
                r.push(e);
            });
        var o = this.sortwidth.medianUnit(n, r, 48);
        e.forEach(function (e) {
            e.push({
                width:
                    (computBarWidth.sortwidth.width(e[1], o) *
                        computBarWidth.width) /
                    100,
            });
        }),
            t.forEach(function (e) {
                e.push({
                    width:
                        (computBarWidth.sortwidth.width(e[1], o) *
                            computBarWidth.width) /
                        100,
                });
            });
    },
};
import ListItem from "./orderbook/ListItem.vue";
import { useMarketStore } from "../../store/market";
export default {
    // component list
    components: { ListItem },
    setup() {
        const marketStore = useMarketStore();
        return { marketStore };
    },

    // component data
    data() {
        return {
            limit: {
                asks: 12,
                bids: 12,
            },
            showMoreAsks: false,
            showMoreBids: false,
            sideLength: 20,
            refreshRate: 500,
            best_ask: "",
            best_ask_icon: "",
            lastUpdated: "",
            activeItem: "pills-graph",
            data: {},
            asks: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
            bids: [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ],
        };
    },
    // on component created
    created() {
        this.loopOrderbook();
    },
    // on component mounted
    mounted() {},
    methods: {
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
        async updateOrderbook(data) {
            const now = Date.now();
            if (
                !this.lastUpdated ||
                now - this.lastUpdated > this.refreshRate
            ) {
                computBarWidth.init(data.bids, data.asks);
                $(".asks,.bids").empty();
                this.asks = data.asks
                    .slice(0, this.sideLength)
                    .map(([price, volume, { width }]) => [
                        this.priceFormatter(price),
                        this.priceFormatter(volume),
                        this.priceFormatter(price * volume),
                        width,
                    ]);

                this.bids = data.bids
                    .slice(0, this.sideLength)
                    .map(([price, volume, { width }]) => [
                        this.priceFormatter(price),
                        this.priceFormatter(volume),
                        this.priceFormatter(price * volume),
                        width,
                    ]);

                const isBetter = data.asks[0][0] > this.bestAsker;
                this.best_ask = isBetter ? "text-success" : "text-danger";
                this.best_ask_icon = isBetter
                    ? "bi-arrow-up text-success"
                    : "bi-arrow-down text-danger";
                this.bestAsker = data.asks[0][0];

                this.marketStore.bestAsk = data.asks[0][0];
                this.marketStore.bestBid = data.bids[0][0];

                this.lastUpdated = now;
            } else {
                await ccxt.sleep(this.refreshRate / 2);
            }
        },
        async loopOrderbook() {
            if (this.marketStore.exchange.has["watchOrderBook"]) {
                while (
                    window.location.href.indexOf(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    ) > -1
                ) {
                    try {
                        const data =
                            await this.marketStore.exchange.watchOrderBook(
                                this.$route.params.symbol +
                                    "/" +
                                    this.$route.params.currency,
                                this.sideLength
                            );
                        this.updateOrderbook(data);
                    } catch (e) {
                        break;
                    }
                }
            }
        },
    },
};
</script>
