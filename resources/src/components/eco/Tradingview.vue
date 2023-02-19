<template></template>

<script>
import { DataFeed, widget as TvWidget } from "tradingview-api";

const supported_resolutions_provider = {
    binance: [
        "1",
        "3",
        "5",
        "15",
        "30",
        "60",
        "120",
        "240",
        "360",
        "480",
        "720",
        "D",
        "W",
        "M",
    ],
    kucoin: ["1", "5", "15", "30", "60", "240", "D", "W", "M"],
};
const supported_resolutions = supported_resolutions_provider[provider];
// 1min, 5min, 15min, 30min, 60min, 4hour, 1day, 1mon, 1week, 1year
const intervalMap_provider = {
    binance: {
        "1m": "1",
        "3m": "3",
        "5m": "5",
        "15m": "15",
        "30m": "30",
        "1h": "60",
        "2h": "120",
        "4h": "240",
        "6h": "360",
        "8h": "480",
        "12h": "720",
        "1d": "D",
        w: "W",
        m: "M",
    },
    kucoin: {
        "1m": "1",
        "5m": "5",
        "15m": "15",
        "30m": "30",
        "1h": "60",
        "4h": "240",
        "1d": "D",
        w: "W",
        m: "M",
    },
};
const intervalMap = intervalMap_provider[provider];
export default {
    props: ["charting"],
    name: "KLineWidget",
    data() {
        return {
            interval: "1m",
            since: null,
            widget: null,
            duration: 86400000, // milliseconds
            now: this.charting.milliseconds(),
            lastprice: [],
            pair: this.$route.params.symbol + "/" + this.$route.params.currency,
            datafeed: new DataFeed({
                getBars: (params) => this.getBars(params),
                fetchResolveSymbol: () => this.resolveSymbol(),
                fetchConfiguration: () => {
                    return new Promise((resolve) => {
                        resolve({
                            supported_resolutions: supported_resolutions,
                        });
                    });
                },
            }),
        };
    },
    watch: {
        $route(to, from) {
            if (to.meta.title == "Trading") {
                this.datafeed = new DataFeed({
                    getBars: (params) => this.getBars(params),
                    fetchResolveSymbol: () => this.resolveSymbol(),
                    fetchConfiguration: () => {
                        return new Promise((resolve) => {
                            resolve({
                                supported_resolutions: supported_resolutions,
                            });
                        });
                    },
                });
                $("#tv_chart_container").remove();
                this.initTradingView();
            }
        },
    },
    methods: {
        resolveSymbol() {
            return new Promise((resolve) => {
                var pair =
                    this.$route.params.symbol +
                    "/" +
                    this.$route.params.currency;
                resolve({
                    name: pair,
                    full_name: pair,
                    description: pair,
                    type: pair,
                    session: "24x7",
                    exchange: gnl.sitename.toUpperCase(),
                    listed_exchange: gnl.sitename.toUpperCase(),
                    timezone: "Etc/UTC",
                    format: "price",
                    minmov: 1,
                    has_intraday: true,
                    supported_resolutions: supported_resolutions,
                    volume_precision: 2,
                    data_status: "streaming",
                });
            });
        },
        async getBars(params) {
            //const since = this.now - this.duration;
            //const size = window.innerWidth;
            if (!params.firstDataRequest) {
                return {
                    bars: [],
                    meta: {
                        noData: true,
                    },
                };
            }
            if (params.resolution !== intervalMap[this.interval]) {
                this.unsubscribeKLine();
                for (let key in intervalMap) {
                    if (intervalMap[key] === params.resolution) {
                        this.interval = key;
                    }
                }
            }
            const res = await this.getKLine(
                this.$route.params.symbol + "/" + this.$route.params.currency
            );
            if (
                params.resolution === intervalMap[this.interval] &&
                params.firstDataRequest &&
                res &&
                res.length
            ) {
                this.subscribeKLine(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                );
            }

            if (!res || !res.length) {
                return {
                    bars: [],
                    meta: { noData: true },
                };
            }
            const list = [];
            for (let i = 0; i < res.length; i++) {
                const item = res[i];
                list.push({
                    time: item[0],
                    open: item[1],
                    high: item[2],
                    low: item[3],
                    close: item[4],
                    volume: item[5],
                });
            }
            list.sort((l, r) => (l.time > r.time ? 1 : -1));
            return {
                bars: list,
                meta: {
                    noData: !list.length,
                },
            };
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        getKLine(pair) {
            switch (intervalMap[this.interval]) {
                case "1":
                    this.duration = 86400000;
                    break;
                case "3":
                    this.duration = 259200000;
                    break;
                case "5":
                    this.duration = 432000000;
                    break;
                case "15":
                    this.duration = 1296000000;
                    break;
                case "30":
                    this.duration = 2592000000;
                    break;
                case "60":
                    this.duration = 5184000000;
                    break;
                case "120":
                    this.duration = 10368000000;
                    break;
                case "240":
                    this.duration = 20736000000;
                    break;
                case "320":
                    this.duration = 31104000000;
                    break;
                case "480":
                    this.duration = 41472000000;
                    break;
                case "720":
                    this.duration = 62208000000;
                    break;
                case "D":
                    this.duration = 165888000000;
                    break;
                case "W":
                    this.duration = 1161216000000;
                    break;
                case "M":
                    this.duration = 4976640000000;
                    break;
                default:
                    break;
            }
            switch (provider) {
                case "binance":
                    this.since = this.now - this.duration / 3;
                    break;
                case "kucoin":
                    this.since = this.now - this.duration;
                    break;

                default:
                    this.since = this.now - this.duration;
                    break;
            }
            try {
                let res = this.charting.fetchOHLCV(
                    pair,
                    this.interval,
                    this.since
                );
                return res;
            } catch (e) {
                console.log(e.constructor.name, e.message);
                if (e.constructor.name == 419) {
                    let res = this.charting.fetchOHLCV(
                        pair,
                        this.interval,
                        this.since
                    );
                    return res;
                }
            }
        },
        handleTick(tick) {
            const favicon = document.getElementById("favicon");
            this.datafeed.updateKLine({
                time: tick[0],
                open: tick[1],
                high: tick[2],
                low: tick[3],
                close: tick[4],
                volume: tick[5],
            });
            if (
                !this.lastprice[
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ] ||
                tick[4] >
                    this.lastprice[
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    ]
            ) {
                document.title =
                    tick[4] +
                    " | " +
                    this.$route.params.symbol +
                    "/" +
                    this.$route.params.currency;
                favicon.href = "/assets/up.png";
            } else if (
                tick[4] <
                this.lastprice[
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ]
            ) {
                document.title =
                    tick[4] +
                    " | " +
                    this.$route.params.symbol +
                    "/" +
                    this.$route.params.currency;
                favicon.href = "/assets/down.png";
            } else {
                favicon.href = "/assets/neutral.png";
            }
            this.lastprice[
                this.$route.params.symbol + "/" + this.$route.params.currency
            ] = tick[4];
        },
        async subscribeKLine() {
            let res = [];
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ) > -1
            ) {
                try {
                    res[
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    ] = await this.charting.watchOHLCV(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency,
                        this.interval
                    );
                    this.handleTick(
                        res[
                            this.$route.params.symbol +
                                "/" +
                                this.$route.params.currency
                        ][
                            res[
                                this.$route.params.symbol +
                                    "/" +
                                    this.$route.params.currency
                            ].length - 1
                        ]
                    );
                } catch (e) {
                    console.log(e);
                    break;
                }
            }
        },
        async unsubscribeKLine() {
            const connection =
                this.charting.clients[Object.keys(this.charting.clients)[1]];
            for (var key in connection.subscriptions) {
                const message = {
                    id: this.getRandomInt(0, 1000).toString(),
                    type: "unsubscribe",
                    topic: key,
                    privateChannel: false,
                    response: true,
                };
                await connection.send(message);
            }
            await this.charting.close();
        },
        initTradingView() {
            $("<div>", {
                id: "tv_chart_container",
                style: "height: 100%;",
            }).appendTo("#creatable");
            this.widget = new TvWidget({
                //debug: true,
                fullscreen: false,
                width: "100%",
                height: "100%",
                symbol: this.symbol + "/" + this.currency,
                interval: intervalMap[this.interval],
                container_id: "tv_chart_container",
                datafeed: this.datafeed,
                library_path: "/charting_library/",
                locale: "en",
                theme: "Dark",
                timezone: "Etc/UTC",
                allow_symbol_change: false,
                charts_storage_api_version: "1.1",
                client_id: "tradingview.com",
                user_id: "public_user_id",
                disabled_features: [
                    "header_compare",
                    "study_dialog_search_control",
                    "symbol_search_hot_key",
                    "header_symbol_search",
                    "go_to_date",
                    "compare_symbol",
                    "timezone_menu",
                    "timeframes_toolbar",
                ],
                enabled_features: [
                    "dont_show_boolean_study_arguments",
                    "use_localstorage_for_settings",
                    "save_chart_properties_to_local_storage",
                    "side_toolbar_in_fullscreen_mode",
                    "hide_last_na_study_output",
                    "constraint_dialogs_movement",
                    "hide_left_toolbar_by_default",
                ],
            });
        },
        setSymbol(symbol) {
            this.unsubscribeKLine();
            this.symbol = symbol;
            this.widget?.setSymbol(symbol, intervalMap[this.interval], () => {
                console.log("------setSymbol---------", this.symbol);
            });
        },
    },
    created() {
        this.initTradingView();
    },
    mounted() {
        this.parentHeight = this.$parent.$el.offsetHeight;
    },
};
</script>
