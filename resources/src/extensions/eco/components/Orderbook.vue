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
                    <!-- <i :class="'bi ' + best_ask_icon" :key="best_ask_icon"></i> -->
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
const computeBarWidth = {
    width: 250,
    sortwidth: {
        sort: function (arr) {
            return arr.sort((a, b) => a[1] - b[1]);
        },
        median: function (arr) {
            const t = Math.floor((arr.length * 2) / 3);
            return arr[t][1] < 1 ? 1 : arr[t][1];
        },
        medianUnit: function (arr1, arr2, n) {
            const combined = [...arr1, ...arr2];
            const median = this.median(this.sort(combined)) / n;
            return median;
        },
        width: function (e, t) {
            if (t === 0) return 1;
            const n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : n > 160 ? 160 : n;
        },
    },
    init: function (arr1, arr2) {
        const n = this.sortwidth.medianUnit(arr1, arr2, 48);
        arr1.forEach((e) => {
            e.push({
                width: (this.sortwidth.width(e[1], n) * this.width) / 100,
            });
        });
        arr2.forEach((e) => {
            e.push({
                width: (this.sortwidth.width(e[1], n) * this.width) / 100,
            });
        });
    },
};

import ListItem from "../../../main/trading/orderbook/ListItem.vue";
import { useEcoStore } from "../../../store/eco";
export default {
    // component list
    components: { ListItem },
    setup() {
        const ecoStore = useEcoStore();
        return { ecoStore };
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            limit: {
                asks: 10,
                bids: 10,
            },
            showMoreAsks: false,
            showMoreBids: false,
            sideLength: 20,
            refreshRate: 500,
            best_ask: "",
            best_ask_icon: "",
            bestAsker: null,
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
        //this.fetchOrderbook();
        this.loopOrderbook();
    },
    // on component mounted
    mounted() {},
    // custom methods
    methods: {
        async loopOrderbook() {
            while (
                window.location.href.indexOf(
                    this.symbol + "-" + this.currency
                ) > -1
            ) {
                try {
                    await this.fetchOrderbook();
                    await new Promise((resolve) => setTimeout(resolve, 5000));
                } catch (e) {
                    break;
                }
            }
        },
        async fetchOrderbook() {
            try {
                const res = await axios.post(
                    "/user/fetch/orderbook/" + this.symbol + "-" + this.currency
                );

                if (res.asks.length > 0 || res.bids.length > 0) {
                    this.updateOrderbook(res);
                }
                this.ecoStore.marketOrder = res.asks.length > 0;
            } catch (error) {
                this.$toast.error(error.message);
            }
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
        async updateOrderbook(data) {
            const now = Date.now();

            if (
                !this.lastUpdated ||
                now - this.lastUpdated > this.refreshRate
            ) {
                computeBarWidth.init(data.bids, data.asks);

                this.updateOrderbookSide(data.bids, ".bids", "bestBid");
                this.updateOrderbookSide(
                    data.asks,
                    ".asks",
                    "bestAsk",
                    "best_ask"
                );

                this.lastUpdated = now;
            }
        },

        updateOrderbookSide(sideData, selector, bestKey, bestClassKey) {
            if (sideData.length > 0) {
                $(selector).empty();
                for (let i = 0; i < this.sideLength; i++) {
                    try {
                        if (sideData[i]) {
                            const item = sideData[i];
                            this[selector.substr(1)][i] = [
                                this.priceFormatter(item[0]),
                                this.priceFormatter(item[1]),
                                this.priceFormatter(item[0] * item[1]),
                                item[2].width,
                            ];
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }

                const lastItem = sideData[sideData.length - 1];
                if (!this[bestKey] || lastItem[0] > this[bestKey]) {
                    if (bestClassKey) this[bestClassKey] = "text-success";
                } else if (lastItem[0] < this[bestKey]) {
                    if (bestClassKey) this[bestClassKey] = "text-danger";
                }
                this[bestKey] = lastItem[0];

                this.ecoStore[bestKey] = lastItem[0];
            }
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
    },
};
</script>
