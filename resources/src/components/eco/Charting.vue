<template></template>

<script>
import { DataFeed, widget as TvWidget } from "tradingview-api";

const supported_resolutions = [
    "1",
    "3",
    "5",
    "15",
    "30",
    "60",
    "240",
    "720",
    "D",
    "W",
    "M",
    "Y",
];
// 1min, 5min, 15min, 30min, 60min, 4hour, 1day, 1mon, 1week, 1year
const intervalMap = {
    "1m": "1",
    "3m": "3",
    "5m": "5",
    "15m": "15",
    "30m": "30",
    "1h": "60",
    "4h": "240",
    "12h": "720",
    "1d": "D",
    w: "W",
    m: "M",
    y: "Y",
};
const intervalFetch = {
    "1m": "MIN_1",
    "3m": "MIN_3",
    "5m": "MIN_5",
    "15m": "MIN_15",
    "30m": "MIN_30",
    "1h": "HOUR_1",
    "4h": "HOUR_4",
    "12h": "HOUR_12",
    "1d": "DAY",
    w: "WEEK",
    m: "MONTH",
    y: "YEAR",
};
export default {
    props: ["market"],
    name: "KLineWidget",
    data() {
        return {
            interval: "1h",
            widget: null,
            duration: 86400000, // milliseconds
            now: Date.now(),
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
        async $route(to, from) {
            //this.unsubscribeKLine();
            this.pair =
                this.$route.params.symbol + "/" + this.$route.params.currency;
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
        },
    },
    methods: {
        resolveSymbol() {
            return new Promise((resolve) => {
                const pair = this.pair;
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
            const pair = this.symbol + "/" + this.currency;
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
                //this.unsubscribeKLine();
                for (let key in intervalMap) {
                    if (intervalMap[key] === params.resolution) {
                        this.interval = key;
                    }
                }
            }
            const res = await this.fetchOHLCV(this.pair);
            if (
                params.resolution === intervalMap[this.interval] &&
                params.firstDataRequest &&
                res &&
                res.length
            ) {
                this.subscribeKLine(this.pair);
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
                    time: item.timestamp,
                    open: item.open,
                    high: item.high,
                    low: item.low,
                    close: item.close,
                    volume: item.volume,
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
        fetchOHLCV() {
            const pair =
                this.$route.params.symbol + "/" + this.$route.params.currency;
            return this.$http
                .post("/user/fetch/chart", {
                    symbol: pair,
                    timeframe: intervalFetch[this.interval],
                })
                .then((res) => {
                    return res.data;
                });
        },
        handleTick(tick) {
            this.datafeed.updateKLine({
                time: tick["timestamp"],
                open: tick["open"],
                high: tick["high"],
                low: tick["low"],
                close: tick["close"],
                volume: tick["volume"],
            });
        },
        async subscribeKLine() {
            let res = [];
            while (
                window.location.href.indexOf(
                    this.market.currency + "-" + this.market.pair
                ) > -1
            ) {
                try {
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                    res = await this.fetchOHLCV();
                    if (res.length !== 0) {
                        res.sort(function (x, y) {
                            return x.timestamp - y.timestamp;
                        });
                        this.handleTick(res[res.length - 1]);
                    }
                } catch (e) {}
            }
        },
        initTradingView() {
            $("#tv_chart_container").remove();
            $("<div>", {
                id: "tv_chart_container",
                style: "height: 100%;",
            }).appendTo("#creatable");
            this.widget = new TvWidget({
                //debug: true,
                fullscreen: false,
                width: "100%",
                height: "100%",
                symbol:
                    this.$route.params.symbol +
                    "/" +
                    this.$route.params.currency,
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
    mounted() {
        this.initTradingView();
    },
};
</script>
