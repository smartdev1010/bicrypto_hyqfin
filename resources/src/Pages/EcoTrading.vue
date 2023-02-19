<template>
    <div>
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
                    <template
                        v-if="
                            ext.eco == 1 && plat.eco.ecosystem_trading_only == 1
                        "
                    >
                        <EcoMarkets />
                    </template>
                    <template v-else>
                        <Markets />
                    </template>
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
                    style="overflow-y: auto; overflow-x: hidden"
                >
                    <Trades
                        :market="market"
                        v-if="market != null"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            market.id
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
                    id="creatable"
                >
                    <Charting
                        :market="market"
                        v-if="market != null"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            market.id
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
                >
                    <Order
                        :market="market"
                        v-if="market != null"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            market.id
                        "
                    />
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
                    <Orderbook
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency
                        "
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
                    <Orders
                        v-if="market != null"
                        :market="market"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            market.id
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
                    class="darked tabbable shadow"
                    style="
                        overflow-y: auto;
                        overflow-x: hidden;
                        min-height: calc(50vh);
                        max-height: calc(50vh);
                    "
                />
                <Trades
                    :market="market"
                    v-if="market != null"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        market.id
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
                <div id="creatable" style="height: calc(55vh)">
                    <Charting
                        :market="market"
                        v-if="market != null"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            market.id
                        "
                    />
                </div>
                <Order
                    class="darked tabbable shadow"
                    style="margin-top: 5px"
                    :market="market"
                    v-if="market != null"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        market.id
                    "
                />
            </div>
            <div class="col-lg-3 col-md-4" style="padding: 0 5px !important">
                <Orderbook
                    class="darked tabbable shadow"
                    style="max-height: calc(100vh)"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        'orderbook'
                    "
                />
            </div>
            <div class="col-lg-12 col-md-8" style="padding: 0 5px !important">
                <Orders
                    class="darked tabbable shadow"
                    v-if="market != null"
                    :market="market"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        market.id
                    "
                ></Orders>
            </div>
        </div>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import Markets from "../components/eco/Markets.vue";
import EcoMarkets from "../components/eco/EcoMarkets.vue";
import Trades from "../components/eco/Trades.vue";
import Charting from "../components/eco/Charting.vue";
import Order from "../components/eco/Order.vue";
import Orders from "../components/eco/Orders.vue";
import Orderbook from "../components/eco/Orderbook.vue";

let testLayouts = {
    xs: [
        { x: 0, y: 17, w: 2, h: 7, i: "0" }, // Markets
        { x: 0, y: 13, w: 2, h: 7, i: "1" }, // Trades
        { x: 0, y: 0, w: 4, h: 6, i: "2" }, // Charting
        { x: 0, y: 6, w: 4, h: 6, i: "3" }, // Order
        { x: 2, y: 12, w: 2, h: 14, i: "4" }, // Orderbook
        { x: 0, y: 19, w: 6, h: 8, i: "5" }, // Orders
    ],
    sm: [
        { x: 0, y: 16, w: 3, h: 8, i: "0" }, // Markets
        { x: 3, y: 16, w: 3, h: 8, i: "1" }, // Trades
        { x: 0, y: 0, w: 4, h: 8, i: "2" }, // Charting
        { x: 0, y: 8, w: 4, h: 6, i: "3" }, // Order
        { x: 4, y: 0, w: 2, h: 14, i: "4" }, // Orderbook
        { x: 0, y: 22, w: 6, h: 8, i: "5" }, // Orders
    ],
    md: [
        { x: 0, y: 0, w: 3, h: 6, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 6, i: "1" }, // Trades
        { x: 3, y: 0, w: 5, h: 7, i: "2" }, // Charting
        { x: 3, y: 8, w: 5, h: 5, i: "3" }, // Order
        { x: 8, y: 2, w: 2, h: 12, i: "4" }, // Orderbook
        { x: 0, y: 14, w: 10, h: 8, i: "5" }, // Orders
    ],
    lg: [
        { x: 0, y: 0, w: 3, h: 6, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 6, i: "1" }, // Trades
        { x: 3, y: 0, w: 6, h: 7, i: "2" }, // Charting
        { x: 3, y: 8, w: 6, h: 5, i: "3" }, // Order
        { x: 9, y: 0, w: 3, h: 12, i: "4" }, // Orderbook
        { x: 0, y: 14, w: 12, h: 8, i: "5" }, // Orders
    ],
};

export default {
    // component list
    components: {
        Markets,
        EcoMarkets,
        Trades,
        Charting,
        Order,
        Orders,
        Orderbook,
        GridLayout,
        GridItem,
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            provider: null,
            market: null,
            market_info: null,
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: true,
            responsive: true,
            index: 0,
            plat: plat,
            ext: ext,
        };
    },
    watch: {
        eventLog: function () {
            const eventsDiv = this.$refs.eventsDiv;
            eventsDiv.scrollTop = eventsDiv.scrollHeight;
        },
        async $route(to, from) {
            this.fetchData();
            $("asks").empty();
            $("bids").empty();
            $("tradeTable").empty();
        },
    },

    // custom methods
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        fetchData() {
            this.$http
                .post(
                    "/user/trade/" +
                        this.$route.params.symbol +
                        "-" +
                        this.$route.params.currency
                )
                .then((response) => {
                    if (response.data.message == "Verify your identify first!") {
                        window.location.href = "/user/kyc";
                    }
                    (this.market = response.data.market),
                        (this.provider = response.data.provider),
                        (this.market_info = response.data.market_info);
                });
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
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
$dark: #031219;
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
