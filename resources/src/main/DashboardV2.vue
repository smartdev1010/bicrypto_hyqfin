<template>
    <div>
        <div
            class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
        >
            <div class="font-medium">{{ $t("Markets") }}</div>
            <Filter>
                <input
                    v-model="filters.symbol.value"
                    type="text"
                    class="filter-input"
                    placeholder="Symbol"
            /></Filter>
        </div>
        <div class="card relative overflow-x-auto">
            <VTable
                v-if="list.length > 0"
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="list"
                :filters="filters"
                :page-size="10"
                :hide-sort-icons="true"
                @totalPagesChanged="totalPages = $event"
            >
                <template #head>
                    <tr
                        class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <VTh sort-key="symbol" scope="col" class="py-3 px-6">
                            <Col text="Symbol" />
                        </VTh>
                        <VTh sort-key="price" scope="col" class="py-3 px-6">
                            <Col text="Price" />
                        </VTh>
                        <VTh sort-key="change" scope="col" class="py-3 px-6">
                            <Col text="Change" />
                        </VTh>
                        <th scope="col" class="py-3 px-6"></th>
                        <VTh sort-key="action" scope="col" class="py-3 px-6">
                            <Col text="Action" />
                        </VTh>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="list.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td
                                data-label="Symbol"
                                class="flex items-center py-4 px-6"
                            >
                                <div class="tokenicon-wrap">
                                    <img
                                        v-lazy="
                                            row.currency
                                                ? '/assets/images/cryptoCurrency/' +
                                                  row.currency.toLowerCase() +
                                                  '.png'
                                                : '/market/notification.png'
                                        "
                                        class="tokenicon-image"
                                    />
                                </div>
                                <span class="font-medium">{{
                                    row.currency
                                }}</span>
                            </td>
                            <td data-label="price">
                                <span
                                    class="text-start"
                                    :class="row.class || ''"
                                    >{{ priceFormatter(row.price) || "" }}</span
                                >
                                USDT
                            </td>
                            <td>
                                <div class="well">
                                    <section
                                        :class="{
                                            transparent: !row.history,
                                        }"
                                    >
                                        <svg
                                            :class="row.class"
                                            :viewBox="svgBox"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <LineChartList
                                                :values="
                                                    points(
                                                        width,
                                                        height,
                                                        history[row.symbol]
                                                    )
                                                "
                                            ></LineChartList>
                                        </svg>
                                    </section>
                                </div>
                            </td>
                            <td data-label="change">
                                <span
                                    class="mr-1 text-start"
                                    :class="row.classChange || ''"
                                    >{{
                                        priceFormatter(row.change, 2) || ""
                                    }}%</span
                                >
                            </td>

                            <td class="py-3 px-6" data-label="Action">
                                <router-link
                                    class=""
                                    :to="'trade/' + row.symbol"
                                    ><button class="btn btn-outline-primary">
                                        Trade
                                    </button>
                                </router-link>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr
                            scope="row"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td colspan="100%" class="py-4 px-6">
                                {{ $t("No results found!") }}
                            </td>
                        </tr>
                    </template>
                </template>
            </VTable>
        </div>

        <VTPagination
            v-model:currentPage="currentPage"
            class="float-right flex items-center justify-between pt-4"
            aria-label="Table navigation"
            :total-pages="totalPages"
            :max-page-links="10"
            :boundary-links="true"
        >
            <template #firstPage> {{ $t("First") }} </template>

            <template #lastPage> {{ $t("Last") }} </template>

            <template #next
                ><span class="sr-only">{{ $t("Next") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>

            <template #previous>
                <span class="sr-only">{{ $t("Previous") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>
        </VTPagination>
    </div>
</template>

<script>
import toMoney from "../partials/toMoney.vue";
import toDate from "../partials/toDate.vue";
import Filter from "../partials/table/Filter.vue";
import Col from "../partials/table/Col.vue";
import LineChartList from "./market/tokenlist/LineChart.vue";
import { useMarketStore } from "../store/market";
export default {
    // component list
    components: { toDate, toMoney, Filter, Col, LineChartList },
    setup() {
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
        return { marketStore };
    },
    // component data
    data() {
        return {
            cur_rate: cur_rate,
            cur_symbol: cur_symbol,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            currentPage: 1,
            totalPages: 0,
            list: {},
            cx: 0,
            cy: 0,
            width: 200,
            height: 28,
            history: [],
        };
    },
    computed: {
        svgBox() {
            return "0 0 " + this.width + " " + this.height;
        },
    },

    // on component created
    async created() {
        await this.marketStore.fetch_markets();
        if (this.marketStore.markets) {
            if (this.marketStore.markets["USDT"]) {
                this.list = Object.values(this.marketStore.markets["USDT"]);
            } else {
                this.list = Object.values(this.marketStore.markets["ETH"]);
            }
        } else {
            this.list = [];
        }
    },

    // on component mounted
    mounted() {
        this.loop();
    },

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        points(width, height, values) {
            width = parseFloat(width) || 0;
            height = parseFloat(height) || 0;
            values = Array.isArray(values) ? values : [];
            values = values.map((n) => parseFloat(n) || 0);

            let min = values.reduce(
                (min, val) => (val < min ? val : min),
                values[0]
            );
            let max = values.reduce(
                (max, val) => (val > max ? val : max),
                values[0]
            );
            let len = values.length;
            let half = height / 2;
            let range = max > min ? max - min : height;
            let gap = len > 1 ? width / (len - 1) : 1;
            let out = [];

            for (let i = 0; i < len; ++i) {
                let d = values[i];
                let val = 2 * ((d - min) / range - 0.5);
                let x = i * gap;
                let y = -val * half * 0.8 + half;
                out.push({ x, y });
            }
            return out;
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
        handle(tickers) {
            try {
                const market = this.marketStore.markets["USDT"];
                if (!market) return;

                for (const [symbol, ticker] of Object.entries(tickers)) {
                    const marketSymbol = market[symbol];
                    if (!marketSymbol || !ticker.last) continue;

                    marketSymbol.price = ticker.last;
                    marketSymbol.class =
                        ticker.last > (this.old && this.old[symbol])
                            ? "text-success"
                            : "text-danger";

                    this.calcHistory(symbol, ticker.last);
                    if (ticker.percentage) {
                        marketSymbol.change = ticker.percentage;
                        marketSymbol.classChange =
                            ticker.percentage >
                            (this.oldChange && this.oldChange[symbol])
                                ? "text-success"
                                : "text-danger";
                    }
                }
                this.old = Object.fromEntries(
                    Object.entries(tickers).map(([symbol, ticker]) => [
                        symbol,
                        ticker.last,
                    ])
                );
            } catch (error) {
                console.error(error);
            }
        },
        calcHistory(symbol, close) {
            if (!this.history[symbol]) {
                this.history[symbol] = [];
            }
            if (!this.history[symbol].length) {
                this.fakeHistory(symbol, close);
            }
            this.history[symbol].push(close);
            this.history[symbol].splice(0, this.history[symbol].length - 30);
        },
        fakeHistory(symbol, close) {
            const num = close * 0.0002;
            const min = -Math.abs(num);
            const max = Math.abs(num);
            this.history[symbol] = [];

            for (let i = 0; i < 30; ++i) {
                const rand = Math.random() * (max - min) + min;
                this.history[symbol].push(close + rand);
            }
        },

        async loop() {
            while (window.location.pathname === "/app/") {
                try {
                    const tickers =
                        await this.marketStore.exchange.fetchTickers();
                    this.handle(tickers);
                } catch (e) {
                    break;
                }
            }
        },
    },
};
</script>
<style lang="scss">
// grey colors
$colorGrey: lightslategray;
$lineJoin: 6px;
$padSpace: 1em;
$colorGain: darken(yellowgreen, 10%);
$colorLoss: desaturate(red, 30%);
.well {
    position: relative;
    padding: calc($padSpace * 0.4) calc($padSpace * 0.8);
    background-image: radial-gradient(
        ellipse at top left,
        rgba(black, 0.2) 0%,
        rgba(black, 0.01) 100%
    );
    border-radius: $lineJoin;
}
.color {
    color: $colorGrey;
}
polyline {
    stroke: $colorGrey;
}
circle {
    fill: $colorGrey;
}

// text-success color for price chage
.text-success .color {
    color: $colorGain;
}
.text-success polyline {
    stroke: $colorGain;
}
.text-success circle {
    fill: $colorGain;
}

// text-danger color for price change
.text-danger .color {
    color: $colorLoss;
}
.text-danger polyline {
    stroke: $colorLoss;
}
.text-danger circle {
    fill: $colorLoss;
}

// position helpers
.pos-abs {
    position: absolute;
}
.pos-rel {
    position: relative;
}
$iconSize: 46px;
// info colors
$colorInfo: darken(slategray, 15%);
$colorInfoText: lighten($colorInfo, 45%);

// comp wrapper
.tokenicon-wrap {
    display: block;
    position: relative;
    margin-right: 8px;
    width: $iconSize;
    min-height: $iconSize;

    .tokenicon-image {
        display: block;
        position: relative;
        overflow: hidden;
        text-align: center;
        width: $iconSize;
        height: auto;

        &.default {
            display: flex;
            flex-direction: row;
            justify-items: center;
            justify-content: center;
            color: $colorInfoText;
            background-color: $colorInfo;
            border-radius: 100%;
            height: $iconSize;
            line-height: $iconSize;
            letter-spacing: -1px;
            transform: rotate(-25deg);
        }
    }
}
</style>
