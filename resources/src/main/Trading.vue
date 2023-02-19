<template>
    <div style="font-family: BinancePlex, Arial, sans-serif !important">
        <div class="containered" style="margin: -20px; margin-bottom: 3px">
            <Marketinfo
                :key="
                    $route.params.symbol + $route.params.currency + 'marketinfo'
                "
            />
            <Orderbook
                :key="
                    $route.params.symbol + $route.params.currency + 'orderbook'
                "
            />
            <Markets
                style="overflow-y: auto; overflow-x: hidden"
                type="trade"
                subtype="non"
            />
            <Trades
                :key="$route.params.symbol + $route.params.currency + 'trades'"
                style="overflow-y: auto; overflow-x: hidden"
            />
            <div
                id="creatable"
                class="Chart border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
            >
                <template v-if="ext.eco == 1 && provider != 'coinbasepro'">
                    <EcoTradingview
                        :key="
                            $route.params.symbol +
                            $route.params.currency +
                            'eco'
                        "
                    />
                </template>
                <template v-else>
                    <Tradingview
                        v-if="provide != null"
                        :key="
                            $route.params.symbol +
                            $route.params.currency +
                            'tradingview'
                        "
                        :provide="provide"
                    />
                </template>
            </div>
            <Suspense>
                <Order
                    :key="
                        $route.params.symbol + $route.params.currency + 'order'
                    "
                    :fee="fee"
                    :pfee="pfee"
                    :api="api"
                    @OrderPlaced="renderOrders()"
                />
                <template #fallback>
                    <div
                        class="Order border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
                    >
                        <div class="w-full bg-gray-200 dark:bg-gray-800">
                            <ul
                                id="myTab"
                                class="nf flex-cols -mb-px flex overflow-x-hidden text-center"
                                role="tablist"
                            >
                                <li>
                                    <a
                                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                                        :class="
                                            !isActive('tab-market')
                                                ? 'cursor-pointer border-transparent bg-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                                : 'border-gray-300 bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300'
                                        "
                                        @click.prevent="setActive('tab-market')"
                                    >
                                        {{ $t("Spot") }}</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                                        :class="
                                            !isActive('tab-limit')
                                                ? 'cursor-pointer border-transparent bg-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                                : 'border-gray-300 bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300'
                                        "
                                        @click.prevent="setActive('tab-limit')"
                                    >
                                        {{ $t("Limit") }}</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                                        :class="
                                            !isActive('tab-wallets')
                                                ? 'cursor-pointer border-transparent bg-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                                : 'border-gray-300 bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-300'
                                        "
                                        @click.prevent="
                                            setActive('tab-wallets')
                                        "
                                    >
                                        {{ $t("Wallets") }}</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </Suspense>
        </div>
        <Orders
            :key="$route.params.symbol + $route.params.currency + ordersRender"
        ></Orders>
    </div>
</template>

<script>
import Markets from "./trading/Markets.vue";
import Trades from "./trading/Trades.vue";
import Marketinfo from "./trading/Marketinfo.vue";
import Order from "./trading/Order.vue";
import Orders from "./trading/Orders.vue";
import Orderbook from "./trading/Orderbook.vue";
import { defineAsyncComponent } from "vue";
import { useUserStore } from "../store/user";
import { useMarketStore } from "../store/market";
export default {
    // component list
    components: {
        Markets,
        Trades,
        Marketinfo,
        Tradingview: defineAsyncComponent(() =>
            import("./trading/Tradingview.vue")
        ),
        EcoTradingview: defineAsyncComponent(() =>
            import("../extensions/eco/components/Tradingview.vue")
        ),
        Order,
        Orders,
        Orderbook,
    },
    setup() {
        const userStore = useUserStore();
        const marketStore = useMarketStore();

        const config = {
            //enableRateLimit: true,
            // verbose: true,
            proxy: gnl.cors,
            options: {
                tradesLimit: 10,
            },
            newUpdates: true,
            timeout: 20000,
        };
        marketStore.exchange = new ccxt.pro[provider](config);
        return { userStore, marketStore };
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            provide: null,
            provider: provider,
            fee: null,
            pfee: null,
            api: 1,
            index: 0,
            ordersRender: 0,
            ext: ext,
            plat: plat,
            ordercard: false,
            orderbtn: true,
            activeItem:
                plat.mobile.charting == 1 ? "pills-chart" : "pills-orderbook",
        };
    },
    watch: {
        eventLog: function () {
            const eventsDiv = this.$refs.eventsDiv;
            eventsDiv.scrollTop = eventsDiv.scrollHeight;
        },
        async $route(to, from) {
            await this.marketStore.exchange.close();
            document.getElementById("favicon").href =
                "/assets/images/logoIcon/favicon.png";
            $("asks").empty();
            $("bids").empty();
            $("tradeTable").empty();
        },
    },
    created() {
        this.fetchData();
    },
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
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        renderOrders() {
            this.ordersRender += 1;
        },
        setBestAsk(value) {
            this.ask = value;
        },
        setBestBid(value) {
            this.bid = value;
        },
        fetchData() {
            axios
                .post(
                    "/user/trade/" +
                        this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                )
                .then((response) => {
                    if (response.message == "Verify your identify first!") {
                        window.location.href = "/user/kyc";
                    }
                    (this.provide = response.provide),
                        (this.api = response.api),
                        (this.fee = response.fee),
                        (this.pfee = response.pfee);
                });
        },
    },
};
</script>
<style lang="scss" scope>
table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    overflow: hidden;
}
@media only screen and (min-width: 1200px) {
    table {
        border-collapse: collapse;
        width: 100%;
        font-size: 12px;
        overflow: hidden;
    }
}
.tdd {
    position: relative;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
}
td {
    .percent_ask {
        position: absolute;
        top: 0;
        height: 100%;
        bottom: 0;
        right: 0;
        background-color: rgba(246, 70, 94, 0.2);
    }
    .percent_bid {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        right: 0;
        background-color: rgba(14, 203, 129, 0.2);
    }
    span {
        font-size: 12px;
        margin-left: 0px;
        flex: 1 1 0%;
        text-align: right;
        cursor: pointer;
    }
}
td.price {
    width: 30%;
    span {
        padding-left: 5px;
    }
}
td.quantity {
    width: 30%;
    text-align: right;
}
td.time {
    width: 40%;
    text-align: right;
    padding-right: 5px;
}
td.btc {
    width: 40%;
    text-align: right;
    padding-right: 5px;
}
</style>
