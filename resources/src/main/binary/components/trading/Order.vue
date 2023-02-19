<template>
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
                        id="riseFall-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('riseFall')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="riseFall"
                        aria-selected="false"
                        @click.prevent="setActive('riseFall')"
                    >
                        {{ $t("Rise/Fall") }}</a
                    >
                </li>
            </ul>
        </div>
        <div id="orderContent" class="px-3 py-5">
            <div id="riseFall" :class="isActive('riseFall') ? '' : 'hidden'">
                <form id="Order" @submit.prevent="Order()">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="flex">
                            <input
                                v-model="time"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :min="min_time"
                                :max="max_time"
                                required=""
                                placeholder="Time"
                            />
                            <button
                                id="dropdownDefaultButton"
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                type="button"
                                data-dropdown-toggle="timeDropdown"
                                aria-expanded="false"
                            >
                                {{ OrderTimeUnit }}
                                <svg
                                    class="ml-2 h-4 w-4"
                                    aria-hidden="true"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                id="timeDropdown"
                                class="hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                            >
                                <ul
                                    v-if="limit != null"
                                    :key="limit.max_time_hour"
                                    class="py-1 text-xs text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton"
                                >
                                    <li>
                                        <a
                                            class="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            @click="
                                                SetOrderTime(
                                                    'Sec',
                                                    limit.min_time_sec,
                                                    limit.max_time_sec
                                                )
                                            "
                                            >{{ $t("Sec") }}</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            value="min"
                                            class="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            @click="
                                                SetOrderTime(
                                                    'Min',
                                                    limit.min_time_min,
                                                    limit.max_time_min
                                                )
                                            "
                                            >{{ $t("Min") }}</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            value="hour"
                                            class="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            @click="
                                                SetOrderTime(
                                                    'Hour',
                                                    limit.min_time_hour,
                                                    limit.max_time_hour
                                                )
                                            "
                                            >{{ $t("Hour") }}</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex">
                            <input
                                :key="limit"
                                v-model="amount"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :min="
                                    limit
                                        ? limit.min_amount
                                            ? limit.min_amount
                                            : '0.00000001'
                                        : '0.00000001'
                                "
                                :max="
                                    limit
                                        ? limit.max_amount
                                            ? limit.max_amount
                                            : '1000000'
                                        : '1000000'
                                "
                                :step="
                                    limit
                                        ? limit.min_amount
                                            ? limit.min_amount
                                            : '0.00000001'
                                        : '0.00000001'
                                "
                                required
                                placeholder="Amount"
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >{{ currency }}</span
                            >
                        </div>
                        <div>
                            <label
                                class="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            >
                                <a v-if="type == 'practice'" class="">{{
                                    $t("Practice Wallet")
                                }}</a>
                                <a v-else class="">{{ $t("Wallet") }}</a>
                            </label>

                            <div v-if="type == 'practice'" class="mb-1 flex">
                                <input
                                    :key="userStore.user"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :value="
                                        userStore.user
                                            ? userStore.user.practice_balance
                                            : 0
                                    "
                                    readonly
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div v-else class="mb-1 flex">
                                <input
                                    v-if="wallet !== null"
                                    :key="wallet"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :value="wallet"
                                    readonly
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <form
                                    v-else
                                    @submit.prevent="createWallet(currency)"
                                >
                                    <button
                                        type="submit"
                                        class="btn btn-success btn-sm"
                                    >
                                        {{ $t("Create Wallet") }}
                                    </button>
                                </form>
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                class="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                            >
                                <a class="">{{ $t("Profit") }}</a>
                            </label>
                            <div class="mb-1 flex">
                                <input
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :value="profitComputed"
                                    readonly
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                    >%</span
                                >
                            </div>
                        </div>

                        <button
                            :key="marketStore.bestAsk + btnWidth.rise"
                            class="btn flex items-center justify-center"
                            :class="
                                marketStore.bestAsk == null || loading
                                    ? 'rounded-md border border-gray-700 focus:outline-none disabled:opacity-75'
                                    : 'btn-outline-success'
                            "
                            type="submit"
                            :disabled="marketStore.bestAsk == null || loading"
                            @click="SetOrderType(1)"
                        >
                            <i class="bi bi-graph-up mr-2"></i>
                            <template v-if="btnWidth.rise == 0">
                                <span>{{ $t("Rise") }}</span>
                            </template>
                            <div
                                v-else
                                class="w-full rounded-sm bg-gray-200 dark:bg-gray-700"
                            >
                                <div
                                    class="rounded-sm bg-green-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
                                    :style="'width:' + btnWidth.rise + '%'"
                                >
                                    {{ btnWidth.rise }}%
                                </div>
                            </div>
                        </button>
                        <button
                            :key="marketStore.bestAsk + btnWidth.fall"
                            class="btn flex items-center justify-center"
                            :class="
                                marketStore.bestAsk == null || loading
                                    ? 'rounded-md border border-gray-700 focus:outline-none disabled:opacity-75'
                                    : 'btn-outline-danger'
                            "
                            type="submit"
                            :disabled="marketStore.bestAsk == null || loading"
                            @click="SetOrderType(2)"
                        >
                            <i class="bi bi-graph-down mr-2"></i>
                            <template v-if="btnWidth.fall == 0">
                                <span>{{ $t("Fall") }}</span>
                            </template>
                            <div
                                v-else
                                class="w-full rounded-sm bg-gray-200 dark:bg-gray-700"
                            >
                                <div
                                    class="rounded-sm bg-red-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
                                    :style="'width:' + btnWidth.fall + '%'"
                                >
                                    {{ btnWidth.fall }}%
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

import { useMarketStore } from "../../../../store/market";
import { useUserStore } from "../../../../store/user";
export default {
    // component list
    components: {},
    props: ["limit", "type"],
    setup() {
        const userStore = useUserStore();
        const marketStore = useMarketStore();
        return { marketStore, userStore };
    },
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "riseFall",
            loading: false,
            gnl: gnl,
            time: null,
            amount: null,
            wallet: null,
            obj: [],
            min_time: null,
            max_time: null,
            tradeLogId: null,
            second: null,
            OrderTimeUnit: "Sec",
            OrderType: null,
            message: [],
            dataframe: {},
            timeCount: null,
            timeLeft: null,
            startCount: false,
            areaSeries: false,
            chart: null,
            btnWidth: {
                rise: 0,
                fall: 0,
            },
        };
    },
    computed: {
        profitComputed() {
            return this.priceFormatter(gnl.profit, 2);
        },
    },

    // on component created
    created() {
        if (this.type == "trade") {
            this.fetchData();
        }
        loadScript(
            "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"
        )
            .then(() => {
                this.createChart();
            })
            .catch(() => {});
    },

    // on component mounted
    mounted() {
        if (this.limit != null) {
            this.min_time = this.limit.min_time_sec;
            this.max_time = this.limit.max_time_sec;
        }
    },

    // on component destroyed
    unmounted() {},
    // custom methods
    methods: {
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
        Order() {
            this.timeCount = this.secondCount();
            if (
                this.type == "practice" &&
                this.userStore.user.practice_balance - this.amount < 0
            ) {
                this.$toast.error(
                    "Your Practice Balance Not Enough! Please Add Practice Amount"
                );
            } else if (this.type == "trade" && this.wallet - this.amount < 0) {
                this.$toast.error(
                    "Your Balance Not Enough! Please Add Balance First"
                );
            } else {
                this.placeOrder();
            }
        },
        placeOrder() {
            this.loading = true;
            axios
                .post("/user/binary/" + this.type + "/store", {
                    amount: this.amount,
                    symbol: this.symbol,
                    OrderType: this.OrderType,
                    duration: this.time,
                    currency: this.currency,
                    unit: this.OrderTimeUnit,
                })
                .then((response) => {
                    if (response.value == 1) {
                        this.tradeLogId = response.tradeLogId;
                        this.countDown(this.timeCount);
                        if (this.OrderType == 1) {
                            $(".tradeType").text("Rise");
                            $(".tradePrice").text(
                                response.trade + " " + this.currency
                            );
                            this.$toast.success("Trade: Rise");
                        } else {
                            $(".tradeType").text("Fall");
                            $(".tradePrice").text(
                                response.trade + " " + this.currency
                            );
                            this.$toast.success("Trade: Fall");
                        }
                    } else if (response.value == 2) {
                        this.$toast.error(response.message);
                    } else {
                        $.each(response, function (i, val) {
                            this.$toast.error(val);
                        });
                    }
                })
                .catch((error) => {});
        },
        countDown(timeCount) {
            let json = [];
            var countup;
            this.timeLeft = timeCount;
            this.btnWidth.rise = 0;
            this.btnWidth.fall = 0;
            countup = setInterval(() => {
                if (this.timeLeft == 0) {
                    this.timeLeft = null;
                    this.btnWidth.rise = 0;
                    this.btnWidth.fall = 0;
                    this.obj = json;
                    this.gameResult();
                    clearInterval(countup);
                } else {
                    let E = Number(Date.now() / 1000);
                    let c = Number(this.marketStore.bestAsk);
                    json.push({
                        time: E,
                        value: c,
                    });
                    this.areaSeries.update({ time: E, value: c });
                    if (this.OrderType == 1) {
                        this.btnWidth.rise = (
                            Number(this.btnWidth.rise) +
                            100 / timeCount
                        ).toFixed(2);
                    } else {
                        this.btnWidth.fall = (
                            Number(this.btnWidth.fall) +
                            100 / timeCount
                        ).toFixed(2);
                    }
                    this.timeLeft = this.timeLeft - 1;
                }
            }, 1000);
        },
        gameResult() {
            axios
                .post("/user/binary/" + this.type + "/result", {
                    tradeLogId: this.tradeLogId,
                    currency: this.currency,
                    obj: this.obj,
                })
                .then((response) => {
                    if (response.result == 1) {
                        this.$toast.success("Trade Win");
                    } else if (response.result == 2) {
                        this.$toast.error("Trade Lose");
                    } else if (response.result == 3) {
                        this.$toast.error("Trade Draw");
                    } else {
                        $.each(response.data, function (i, val) {
                            this.$toast.error(val);
                        });
                    }
                    if (this.type == "practice") {
                        this.userStore.user.practice_balance = response.balance;
                    } else if (this.type == "trade") {
                        this.wallet = response.balance;
                    }
                })
                .catch((error) => {})
                .finally(() => {
                    // this.cleanChart();
                    this.areaSeries.setData([]);
                    this.loading = false;
                });
        },
        cleanChart() {
            this.chart.removeSeries(this.areaSeries);
            this.chart = null;
            this.createChart(); // create chart again
        },
        SetOrderType(value) {
            this.OrderType = value;
        },
        SetOrderTime(time_unit, min, max) {
            this.OrderTimeUnit = time_unit;
            this.min_time = min;
            this.max_time = max;
        },
        secondCount() {
            if (this.OrderTimeUnit == "Sec") {
                return this.time;
            } else if (this.OrderTimeUnit == "Min") {
                return this.time * 60;
            } else if (this.OrderTimeUnit == "Hour") {
                return this.time * 60 * 60;
            }
        },
        fetchData() {
            axios
                .post("/user/fetch/binary/trade/wallet", {
                    currency: this.currency,
                })
                .then((response) => {
                    this.wallet = response.wallet;
                });
        },
        createWallet(symbol) {
            axios
                .post("/user/wallet/j/create", {
                    type: "funding",
                    symbol: symbol,
                })
                .then((response) => {
                    this.fetchData(symbol);
                    this.$toast[response.type](response.message);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                })
                .finally(() => {});
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        createChart() {
            var chartaContainer = document.getElementById("charta");
            this.chart = LightweightCharts.createChart(chartaContainer, {
                width: 600,
                height: 300,
                layout: {
                    textColor: "#d1d4dc",
                    backgroundColor: "#111827",
                },
                rightPriceScale: {
                    scaleMargins: {
                        top: 0.3,
                        bottom: 0.25,
                    },
                },
                crosshair: {
                    vertLine: {
                        width: 5,
                        color: "rgba(224, 227, 235, 0.1)",
                        style: 0,
                    },
                    horzLine: {
                        visible: false,
                        labelVisible: false,
                    },
                },
                grid: {
                    vertLines: {
                        color: "rgba(42, 46, 57, 0)",
                    },
                    horzLines: {
                        color: "rgba(42, 46, 57, 0)",
                    },
                },
                timeScale: {
                    timeVisible: true,
                    secondsVisible: true,
                    tickMarkFormatter: (time) => {
                        const minute = LightweightCharts.isBusinessDay(time)
                            ? time.minute
                            : new Date(time * 1000).getUTCMinutes();
                        return String(minute);
                    },
                },
            });
            new ResizeObserver((entries) => {
                if (entries[0].target !== chartaContainer) {
                    return;
                }
                const newRect = entries[0].contentRect;
                this.chart.applyOptions({
                    width: newRect.width,
                });
            }).observe(chartaContainer);
            this.chart.timeScale().fitContent();
            this.areaSeries = this.chart.addAreaSeries({
                topColor: "rgba(38, 198, 218, 0.56)",
                bottomColor: "rgba(38, 198, 218, 0.04)",
                lineColor: "rgba(38, 198, 218, 1)",
                lineWidth: 2,
                crossHairMarkerVisible: true,
                lastPriceAnimation: 1,
            });

            this.areaSeries.setData([]);
        },
    },
};
</script>
