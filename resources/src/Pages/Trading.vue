<template>
    <div>
        <div v-if="!$isMobile()">
            <div
                class="trading-page"
                v-if="
                    typeof plat.trading.trading_cards === 'undefined' ||
                    plat.trading.trading_cards == 1
                "
            >
                <grid-layout
                    :layout.sync="layout"
                    :responsive-layouts="layouts"
                    :col-num="12"
                    :row-height="50"
                    :is-draggable="draggable"
                    :is-resizable="resizable"
                    :vertical-compact="true"
                    :use-css-transforms="true"
                    :responsive="responsive"
                >
                    <grid-item
                        :x="layout[0].x"
                        :y="layout[0].y"
                        :w="layout[0].w"
                        :h="layout[0].h"
                        :i="layout[0].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked tabbable rounded shadow"
                        style="overflow-y: auto; overflow-x: hidden"
                    >
                        <Markets v-if="exchange != null" :exchange="exchange" />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[1].x"
                        :y="layout[1].y"
                        :w="layout[1].w"
                        :h="layout[1].h"
                        :i="layout[1].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked tabbable rounded shadow"
                        style="overflow: hidden"
                    >
                        <Trades
                            v-if="exchange != null"
                            :exchange="exchange"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'trades'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[2].x"
                        :y="layout[2].y"
                        :w="layout[2].w"
                        :h="layout[2].h"
                        :i="layout[2].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Marketinfo
                            v-if="exchange != null"
                            :exchange="exchange"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'marketinfo'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[3].x"
                        :y="layout[3].y"
                        :w="layout[3].w"
                        :h="layout[3].h"
                        :i="layout[3].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                        id="creatable"
                    >
                        <template
                            v-if="ext.eco == 1 && provider != 'coinbasepro'"
                        >
                            <EcoTradingview
                                v-if="charting != null"
                                :charting="charting"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'eco'
                                "
                            />
                        </template>
                        <template v-else>
                            <Tradingview
                                v-if="provide != null"
                                :provide="provide"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'tradingview'
                                "
                            />
                        </template>
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[4].x"
                        :y="layout[4].y"
                        :w="layout[4].w"
                        :h="layout[4].h"
                        :i="layout[4].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Order
                            v-if="limit != null"
                            :limits="limits"
                            :limit="limit"
                            :fee="fee"
                            :pfee="pfee"
                            :api="api"
                            :bid="bid"
                            :ask="ask"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'order'
                            "
                            @OrderPlaced="renderOrders()"
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[5].x"
                        :y="layout[5].y"
                        :w="layout[5].w"
                        :h="layout[5].h"
                        :i="layout[5].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Orderbook
                            v-if="exchange != null"
                            :exchange="exchange"
                            @bestAsk="setBestAsk"
                            @bestBid="setBestBid"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'orderbook'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[6].x"
                        :y="layout[6].y"
                        :w="layout[6].w"
                        :h="layout[6].h"
                        :i="layout[6].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Orders
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                ordersRender
                            "
                        ></Orders>
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                </grid-layout>
            </div>
            <div class="row match-height trading_row" v-else>
                <div
                    class="col-lg-3 col-md-4"
                    style="
                        padding-right: 5px !important;
                        padding-left: 5px !important;
                    "
                >
                    <Markets
                        v-if="exchange != null"
                        :exchange="exchange"
                        class="darked tabbable shadow"
                        style="
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                        "
                    />
                    <Trades
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'trades'
                        "
                        class="darked tabbable shadow"
                        style="
                            margin: 5px 0 5px 0;
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                        "
                    />
                </div>
                <div
                    class="col-lg-6 col-md-8"
                    style="
                        padding-right: 5px !important;
                        padding-left: 5px !important;
                    "
                >
                    <Marketinfo
                        class="darked tabbable shadow"
                        style="margin-bottom: 5px"
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'marketinfo'
                        "
                    />
                    <div id="creatable" style="height: calc(55vh)">
                        <template
                            v-if="ext.eco == 1 && provider != 'coinbasepro'"
                        >
                            <EcoTradingview
                                v-if="charting != null"
                                :charting="charting"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'eco'
                                "
                            />
                        </template>
                        <template v-else>
                            <Tradingview
                                v-if="provide != null"
                                :provide="provide"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'tradingview'
                                "
                            />
                        </template>
                    </div>
                    <Order
                        class="darked tabbable shadow"
                        style="margin-top: 5px"
                        v-if="limit != null"
                        :limits="limits"
                        :limit="limit"
                        :fee="fee"
                        :pfee="pfee"
                        :api="api"
                        :bid="bid"
                        :ask="ask"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'order'
                        "
                        @OrderPlaced="renderOrders()"
                    />
                </div>
                <div
                    class="col-lg-3 col-md-4"
                    style="padding: 0 5px !important"
                >
                    <Orderbook
                        class="darked tabbable shadow"
                        style="max-height: calc(100vh)"
                        v-if="exchange != null"
                        :exchange="exchange"
                        @bestAsk="setBestAsk"
                        @bestBid="setBestBid"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'orderbook'
                        "
                    />
                </div>
                <div
                    class="col-lg-12 col-md-8"
                    style="padding: 0 5px !important"
                >
                    <Orders
                        class="darked tabbable shadow"
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            ordersRender
                        "
                    ></Orders>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row g-0 match-height trading_row">
                <div v-if="plat.mobile.market_info == 1" class="col-12">
                    <Marketinfo
                        class="darked tabbable shadow"
                        style="
                            padding-right: 5px !important;
                            padding-left: 15px !important;
                            margin-bottom: 5px;
                        "
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'marketinfo'
                        "
                    />
                </div>
                <div class="col-12">
                    <ul
                        class="nav nav-tabs nav-fill darked tabbable shadow"
                        style="font-size: 12px !important"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li class="nav-item" v-if="plat.mobile.charting == 1">
                            <button
                                class="nav-link"
                                @click.prevent="setActive('pills-chart')"
                                :class="{ active: isActive('pills-chart') }"
                                href="#pills-chart"
                            >
                                {{ $t("Chart") }}
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click.prevent="setActive('pills-orderbook')"
                                :class="{ active: isActive('pills-orderbook') }"
                                href="#pills-orderbook"
                            >
                                {{ $t("Orderbook") }}
                            </button>
                        </li>
                        <li class="nav-item" v-if="plat.mobile.trades == 1">
                            <button
                                class="nav-link"
                                @click.prevent="setActive('pills-trades')"
                                :class="{ active: isActive('pills-trades') }"
                                href="#pills-trades"
                            >
                                {{ $t("Trades") }}
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click.prevent="setActive('pills-markets')"
                                :class="{ active: isActive('pills-markets') }"
                                href="#pills-markets"
                            >
                                {{ $t("Markets") }}
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade"
                            :class="{ 'active show': isActive('pills-chart') }"
                            id="pills-chart"
                            role="tabpanel"
                            aria-labelledby="pills-chart-tab"
                        >
                            <div
                                id="creatable"
                                style="height: calc(55vh)"
                                v-if="plat.mobile.charting == 1"
                            >
                                <template
                                    v-if="
                                        ext.eco == 1 &&
                                        provider != 'coinbasepro'
                                    "
                                >
                                    <EcoTradingview
                                        v-if="charting != null"
                                        :charting="charting"
                                        :key="
                                            this.$route.params.symbol +
                                            this.$route.params.currency +
                                            'eco'
                                        "
                                    />
                                </template>
                                <template v-else>
                                    <Tradingview
                                        v-if="provide != null"
                                        :provide="provide"
                                        :key="
                                            this.$route.params.symbol +
                                            this.$route.params.currency +
                                            'tradingview'
                                        "
                                    />
                                </template>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('pills-orderbook'),
                            }"
                            id="pills-orderbook"
                            role="tabpanel"
                            aria-labelledby="pills-orderbook-tab"
                        >
                            <OrderbookMobile
                                class="darked tabbable shadow"
                                style="max-height: calc(100vh)"
                                v-if="exchange != null"
                                :exchange="exchange"
                                @bestAsk="setBestAsk"
                                @bestBid="setBestBid"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'orderbook'
                                "
                            />
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('pills-trades'),
                            }"
                            id="pills-trades"
                            role="tabpanel"
                            aria-labelledby="pills-trades-tab"
                        >
                            <Trades
                                v-if="
                                    exchange != null && plat.mobile.trades == 1
                                "
                                :exchange="exchange"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'trades'
                                "
                                class="darked tabbable shadow"
                                style="
                                    overflow-y: auto;
                                    overflow-x: hidden;
                                    min-height: calc(50vh);
                                    max-height: calc(50vh);
                                    z-index: 2;
                                "
                            />
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('pills-markets'),
                            }"
                            id="pills-markets"
                            role="tabpanel"
                            aria-labelledby="pills-markets-tab"
                        >
                            <Markets
                                v-if="exchange != null"
                                :exchange="exchange"
                                class="darked tabbable shadow"
                                style="
                                    overflow-y: auto;
                                    overflow-x: hidden;
                                    min-height: calc(50vh);
                                    max-height: calc(50vh);
                                    z-index: 2;
                                "
                            />
                        </div>
                    </div>
                </div>
                <div
                    v-if="plat.mobile.orders == 1"
                    class="col-12"
                    style="padding-right: 5px !important; margin-top: 5px"
                >
                    <Orders
                        style="z-index: 2"
                        class="darked tabbable shadow"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            ordersRender
                        "
                    ></Orders>
                </div>
            </div>
            <div
                v-if="orderbtn == true"
                :key="orderbtn"
                class="d-flex justify-content-between darked tabbable shadow"
                style="
                    position: fixed;
                    bottom: 0%;
                    width: 100%;
                    opacity: 1;
                    z-index: 2;
                    margin-bottom: 29px;
                    padding: 12px 8px;
                    margin-top: 5px;
                    border-top: #7367f0 solid 1px;
                "
            >
                <button
                    class="btn btn-success btn-sm"
                    style="width: 47%"
                    @click="
                        ordercard = !ordercard;
                        orderbtn = !orderbtn;
                    "
                >
                    {{ $t("Buy") }}
                </button>
                <button
                    class="btn btn-danger btn-sm"
                    style="width: 47%"
                    @click="
                        ordercard = !ordercard;
                        orderbtn = !orderbtn;
                    "
                >
                    {{ $t("Sell") }}
                </button>
            </div>
            <div
                v-if="ordercard == true"
                :key="ordercard"
                class="darked"
                style="
                    position: fixed;
                    bottom: 0%;
                    width: 100%;
                    background-color: #000;
                    opacity: 1;
                    z-index: 3;
                    margin-bottom: 29px;
                    border-top: #7367f0 solid 1px;
                "
            >
                <Order
                    class="darked tabbable shadow"
                    style="margin-top: 1px"
                    v-if="limit != null"
                    :limits="limits"
                    :limit="limit"
                    :fee="fee"
                    :pfee="pfee"
                    :api="api"
                    :bid="bid"
                    :ask="ask"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        'order'
                    "
                    @OrderPlaced="renderOrders()"
                    @cardhide="
                        ordercard = !ordercard;
                        orderbtn = !orderbtn;
                    "
                />
            </div>
        </div>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import Markets from "../components/trading/Markets.vue";
import Trades from "../components/trading/Trades.vue";
import Marketinfo from "../components/trading/Marketinfo.vue";
import Tradingview from "../components/trading/Tradingview.vue";
import EcoTradingview from "../components/eco/Tradingview.vue";
import Order from "../components/trading/Order.vue";
import Orders from "../components/trading/Orders.vue";
import Orderbook from "../components/trading/Orderbook.vue";
import OrderbookMobile from "../components/trading/OrderbookMobile.vue";
import { loadScript } from "vue-plugin-load-script";

let testLayouts = {
    xs: [
        { x: 0, y: 17, w: 2, h: 7, i: "0" }, // Markets
        { x: 0, y: 13, w: 2, h: 7, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 1, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 7, w: 4, h: 6, i: "4" }, // Order
        { x: 2, y: 13, w: 2, h: 14, i: "5" }, // Orderbook
        { x: 0, y: 20, w: 6, h: 8, i: "6" }, // Orders
    ],
    sm: [
        { x: 0, y: 16, w: 3, h: 7, i: "0" }, // Markets
        { x: 3, y: 16, w: 3, h: 6, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 2, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 10, w: 4, h: 5, i: "4" }, // Order
        { x: 4, y: 2, w: 2, h: 12, i: "5" }, // Orderbook
        { x: 0, y: 24, w: 6, h: 8, i: "6" }, // Orders
    ],
    md: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 6, i: "1" }, // Trades
        { x: 3, y: 0, w: 7, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 5, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 5, h: 5, i: "4" }, // Order
        { x: 8, y: 4, w: 2, h: 12, i: "5" }, // Orderbook
        { x: 0, y: 18, w: 10, h: 8, i: "6" }, // Orders
    ],
    lg: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 7, i: "1" }, // Trades
        { x: 3, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 6, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 6, h: 6, i: "4" }, // Order
        { x: 9, y: 0, w: 3, h: 14, i: "5" }, // Orderbook
        { x: 0, y: 18, w: 12, h: 8, i: "6" }, // Orders
    ],
};

export default {
    // component list
    components: {
        Markets,
        Trades,
        Marketinfo,
        Tradingview,
        EcoTradingview,
        Order,
        Orders,
        Orderbook,
        OrderbookMobile,
        GridLayout,
        GridItem,
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            provider: null,
            provide: null,
            limits: null,
            limit: null,
            fee: null,
            pfee: null,
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: true,
            responsive: true,
            ask: null,
            bid: null,
            api: 1,
            index: 0,
            ordersRender: 0,
            ext: ext,
            exchange: null,
            charting: null,
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
            if (this.exchange.clients && this.exchange.clients.length > 0) {
                const connection =
                    this.exchange.clients[
                        Object.keys(this.exchange.clients)[1]
                    ];
                for (var key in connection.subscriptions) {
                    const message = {
                        id: this.getRandomInt(0, 1000).toString(),
                        type: "unsubscribe",
                        topic: key,
                        privateChannel: false,
                        response: true,
                    };
                    connection.send(message);
                }
                await this.exchange.close();
            }

            if (
                ext.eco == 1 &&
                this.charting.clients &&
                this.charting.clients.length > 0
            ) {
                const eco_connection =
                    this.charting.clients[
                        Object.keys(this.charting.clients)[1]
                    ];
                for (var key in eco_connection.subscriptions) {
                    const message = {
                        id: this.getRandomInt(0, 1000).toString(),
                        type: "unsubscribe",
                        topic: key,
                        privateChannel: false,
                        response: true,
                    };
                    eco_connection.send(message);
                }
                await this.charting.close();
            }
            $("asks").empty();
            $("bids").empty();
            $("tradeTable").empty();
        },
    },

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
            this.$http
                .post(
                    "/user/trade/" +
                        this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                )
                .then((response) => {
                    if (
                        response.data.message == "Verify your identify first!"
                    ) {
                        window.location.href = "/user/kyc";
                    }
                    (this.provider = response.data.provider),
                        (this.provide = response.data.provide),
                        (this.limits = response.data.limits),
                        (this.limit = response.data.limit),
                        (this.api = response.data.api),
                        (this.fee = response.data.fee),
                        (this.pfee = response.data.pfee);
                });
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },
    beforeCreate() {
        loadScript("/vendors/js/exchanges.js")
            .then(() => {
                const config = {
                    enableRateLimit: true,
                    //verbose: true,
                    proxy: gnl.cors,
                    options: {
                        tradesLimit: 10,
                    },
                };

                this.exchange = new ccxt[provider](config);
                if (ext.eco == 1 && provider != "coinbasepro") {
                    this.charting = new ccxt[provider](config);
                }
            })
            .catch(() => {
                // Failed to fetch script
            });
    },
    created() {
        this.fetchData();
    },
    mounted() {},
    // on component destroyed
    destroyed() {},
};
</script>
<style lang="scss" scope>
$dark: #131722; //#171b29
$light: #d5f0e9;
$ease-out-expo: cubic-bezier(0.005, 1, 0.22, 1);

:root {
    --theme-background-base: #{lighten($dark, 0%)};
    --theme-background-300: #{lighten($dark, 75%)};
    --theme-background-o75: #{rgba(lighten($dark, 10%), 0.75)};
    --theme-background-o20: #{rgba(lighten($dark, 10%), 0.2)};
    --theme-color-o75: #{rgba($light, 0.75)};
}

table {
    border-collapse: collapse;
    width: 100%;
    font-size: 11px;
    font-weight: 500;
    color: #b7bdc6;
    overflow: hidden;
    width: 100%;
}

.tdd {
    position: relative;
    height: 18px;
    line-height: 18px;
}

td {
    height: 12px;
    line-height: 12px;

    span {
        position: relative;
        z-index: 2;
    }

    .percent {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
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
    color: #999;
    padding-right: 5px;
}

td.btc {
    width: 40%;
    text-align: right;
    padding-right: 5px;
}

table.asks {
    .percent {
        background-color: rgba(246, 70, 94, 0.2);
    }
}

table.bids {
    .percent {
        background-color: rgba(14, 203, 129, 0.2);
    }
}

table.asks_only {
    .percent {
        background-color: rgba(246, 70, 94, 0.2);
    }
}

table.bids_only {
    .percent {
        background-color: rgba(14, 203, 129, 0.2);
    }
}

.order-loader {
    position: relative;
    right: 0px;
    top: 120px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #000000b5;
}

.se-pre-con2 {
    position: absolute;
    top: 50%;
    left: 50%;
}

.hidden {
    display: none;
}

.trading_row {
    margin: -20px -20px 5px -20px !important;
}
@media (max-width: 767.98px) {
    html {
        body.navbar-sticky {
            .app-content {
                padding: calc(1rem - 0.8rem + 4.45rem) 0 0 0 !important;
            }
        }
    }
    .trading_row {
        margin: 0 10px 0 0 !important;
    }
}
</style>
