<template>
    <div>
        <section class="page-topbar">
            <div class="flex-middle flex-space flex-row">
                <div class="flex items-center justify-between">
                    <!-- <Limits
                        :options="options"
                        :listCount="listCount"
                        class="mr-1"
                    /> -->
                    <Sorting
                        :sort-data="sortData"
                        :label="sortByLabel()"
                        class="mr-1"
                    />
                    <MarketsFilter
                        :options="options"
                        :markets-data="marketsData"
                        class="mr-1"
                    />

                    <!-- <Dropdown>
                        <template v-slot:trigger>
                            <button class="btn btn-outline-secondary">
                                <i class="bi bi-gear"></i></button
                        ></template>
                        <template v-slot:list>
                            <div
                                class="flex items-center border-b py-3 px-4 text-start text-sm text-gray-900 dark:text-white"
                            >
                                Live Price Options
                            </div>
                            <div class="p-3">
                                <Toggle
                                    :text="'Show top coins price in header'"
                                    v-model="options.prices.header"
                                    @change="saveOptions"
                                ></Toggle>
                                <Toggle
                                    :text="'Show price chart for in list'"
                                    v-model="options.prices.chart"
                                    @change="saveOptions"
                                ></Toggle></div
                        ></template>
                    </Dropdown> -->
                </div>
                <div
                    class="text-big if-medium mr-1 flex-1 text-clip text-center"
                >
                    <span v-if="tickerList.length > 0">
                        {{ $t("Markets") }}</span
                    >
                    <span v-else> {{ $t("Loading Markets...") }}</span>
                </div>
                <div class="w-25">
                    <label
                        for="search"
                        class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Search</label
                    >
                    <div class="relative">
                        <div
                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                        >
                            <svg
                                aria-hidden="true"
                                class="h-5 w-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            v-model="searchStr"
                            class="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            type="text"
                            placeholder="Search..."
                            @click="SearchonClick"
                            @change="SearchonChange"
                            @keyup="SearchonInput"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section v-if="!listCount" class="mb-1">
            <div class="card flex-middle flex-stretch flex-row p-2 pl-5">
                <div class="bi bi-info-circle iconLarge mr-3"></div>
                <div class="flex-1 text-clip">
                    <div v-if="searchStr">
                        <span class="text-dark"
                            >No match for
                            <span class="text-secondary">{{
                                searchStr
                            }}</span></span
                        >
                        <br />
                        <span class="text-info"
                            >{{
                                $t(
                                    "Can't find anything matching your search input"
                                )
                            }}.</span
                        >
                    </div>
                    <div v-else>
                        <span class="text-dark">{{
                            $t("No market data available")
                        }}</span>
                        <br />
                        <span class="text-info"
                            >{{ $t("Markets data has not loaded yet") }}.</span
                        >
                    </div>
                </div>
            </div>
        </section>

        <section class="pagelist-wrap">
            <div
                v-if="tickerList.length"
                class="pagelist-item flex-middle flex-stretch flex-row shadow"
                style="background: rgb(255 255 255 / 6%)"
            >
                <div class="iconWidth if-small mr-1"></div>
                <div class="mr-1 flex-1 text-clip">
                    <span
                        class="clickable"
                        @click="$sorter.sortOrder('ticker', 'token', 'asc')"
                        >{{ $t("Token") }}</span
                    >
                </div>
                <div class="mr-1 flex-1 text-clip">
                    <span
                        class="clickable"
                        @click="$sorter.sortOrder('ticker', 'close', 'desc')"
                        >{{ $t("Price") }}</span
                    >
                </div>
                <div
                    v-if="options.prices.chart"
                    class="well if-medium disabled mr-1 flex-1"
                ></div>
                <div class="mr-1 flex-1 text-clip">
                    <span
                        class="clickable"
                        @click="$sorter.sortOrder('ticker', 'percent', 'desc')"
                        >{{ $t("Percent") }}</span
                    >
                </div>
                <div class="if-medium mr-1 flex-1 text-clip">
                    <span
                        class="clickable"
                        @click="
                            $sorter.sortOrder('ticker', 'marketVolume', 'desc')
                        "
                        >{{ $t("Volume") }}</span
                    >
                </div>
                <div class="if-large flex-1 text-clip text-end">
                    <span
                        class="clickable"
                        @click="$sorter.sortOrder('ticker', 'trades', 'desc')"
                        >{{ $t("Book") }}</span
                    >
                </div>
            </div>

            <div
                v-for="p in tickerList"
                :key="p.symbol"
                class="pagelist-item flex-middle flex-stretch clickable flex-row shadow"
                :class="p.style"
                @click="showModal(p.route)"
            >
                <div
                    class="if-small mr-1"
                    :class="{ 'alarm-bubble': p.alarms }"
                >
                    <TokenIcon :image="p.image" :alt="p.token"></TokenIcon>
                </div>

                <div class="mr-1 flex-1 text-clip">
                    <span class="text-warning">{{ p.token }}</span>
                    <br />
                    <span class="text-secondary">{{ p.name }}</span>
                </div>

                <div class="mr-1 flex-1 text-clip" style="margin-left: -45px">
                    <span class="text-nowrap text-dark fw-bold"
                        ><toFixed :num="p.close" :asset="p.market" />
                        <span class="text-secondary">{{ p.market }}</span></span
                    >
                    <br />
                    <span class="text-nowrap color fw-bold"
                        >{{ p.sign
                        }}<toFixed :num="p.change" :asset="p.market" />
                        <span class="text-secondary">24H</span></span
                    >
                </div>

                <div
                    v-if="options.prices.chart"
                    class="well if-medium mr-1 flex-1"
                >
                    <section
                        :class="{
                            transparent: !p.history.length,
                        }"
                    >
                        <svg
                            :viewBox="svgBox"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <LineChartList
                                :values="
                                    $utils.points(width, height, p.history)
                                "
                            ></LineChartList>
                        </svg>
                    </section>
                </div>

                <div class="mr-1 flex-1 text-clip">
                    <span class="text-nowrap color fw-bold"
                        >{{ p.sign
                        }}<toMoney :num="p.percent" decimals="3" />%</span
                    >
                    <br />
                    <span v-tooltip title="High/Low Volatility Score">
                        <i class="bi bi-bar-chart mr-1"></i>
                        <toFixed :num="p.volatility" :asset="3"
                    /></span>
                </div>

                <div class="if-medium mr-1 flex-1 text-clip">
                    <span class="text-nowrap text-dark fw-bold"
                        ><toMoney :num="p.marketVolume" />
                        <span class="text-nowrap text-secondary">{{
                            p.market
                        }}</span></span
                    >
                    <br />
                    <span class="text-nowrap text-secondary"
                        ><toMoney :num="p.tokenVolume" />
                        <span class="text-nowrap text-secondary">{{
                            p.token
                        }}</span></span
                    >
                </div>

                <div class="if-large flex-1 text-clip text-end">
                    <span class="text-nowrap text-dark fw-bold"
                        ><toMoney :num="p.trades"
                    /></span>
                    <br />
                    <button
                        v-tooltip
                        class="text-primary-hover"
                        :title="'Trade ' + p.token"
                    >
                        {{ $t("Trades") }}
                    </button>
                </div>
            </div>

            <!-- <div
                class="pagelist-item flex-middle flex-space flex-row shadow"
                style="background: rgb(255 255 255 / 6%)"
                v-if="listCount"
            >
                <div class="text-secondary items-center">
                    <i class="bi bi-list mr-2"></i>{{ listLeftText }}
                </div>
                <button
                    v-if="listLeft"
                    class="text-dark items-center"
                    @click="limitList(0)"
                >
                    <i class="bi bi-list mr-2"></i>{{ $t("Show all") }}
                </button>
            </div> -->
        </section>
        <Modal ref="modal" @onDone="modalDone">
            <div v-if="modalData.pair != null">
                <section :class="modalData.style">
                    <!--  coin name and price -->
                    <div class="flex-middle flex-space mb-5 flex-row">
                        <div class="text-nowrap mr-1">
                            <div class="flex-middle flex-row">
                                <div class="if-medium mr-1">
                                    <TokenIcon
                                        :image="modalData.image"
                                        :alt="modalData.token"
                                    ></TokenIcon>
                                </div>
                                <div>
                                    <div class="form-label">
                                        {{ modalData.token }}
                                        <span v-if="coinRank"
                                            >#<toMoney :num="coinRank"
                                        /></span>
                                    </div>
                                    <span class="text-dark">{{
                                        modalData.name
                                    }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="text-nowrap mr-1 text-end">
                            <div class="form-label">
                                {{ modalData.market }} Price
                            </div>
                            <span class="text-dark"
                                ><toFixed
                                    :num="modalData.close"
                                    :asset="modalData.market"
                            /></span>
                        </div>

                        <div
                            class="text-nowrap d-none d-sm-block mr-1 text-end"
                        >
                            <div class="form-label">Chg 24h</div>
                            <span class="color"
                                >{{ modalData.sign
                                }}<toFixed
                                    :num="modalData.percent"
                                    :asset="3"
                                />%</span
                            >
                        </div>
                    </div>

                    <div
                        class="mb-3 grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3"
                    >
                        <div class="well text-nowrap flex-1">
                            <div class="form-label">High 24h</div>
                            <span class="text-dark"
                                ><toFixed
                                    :num="modalData.high"
                                    :asset="modalData.market"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">Low 24h</div>
                            <span class="text-dark"
                                ><toFixed
                                    :num="modalData.low"
                                    :asset="modalData.market"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">
                                {{ modalData.market }} Vol 24h
                            </div>
                            <span class="text-dark"
                                ><toMoney :num="modalData.marketVolume"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">
                                {{ modalData.token }} Vol 24h
                            </div>
                            <span class="text-dark"
                                ><toMoney :num="modalData.tokenVolume"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">Market Cap USD</div>
                            <span class="text-dark"
                                ><toMoney :num="marketCap"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">Current Supply</div>
                            <span class="text-dark"
                                ><toMoney :num="totalSupply"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">Volume USD 24H</div>
                            <span class="text-dark"
                                ><toMoney :num="totalVolume"
                            /></span>
                        </div>

                        <div class="well text-nowrap flex-1">
                            <div class="form-label">Price USD</div>
                            <span class="text-dark"
                                >$<toMoney :num="usdPrice"
                            /></span>
                        </div>
                    </div>

                    <!-- draw line chart for symbol using candle data -->
                    <div class="text-nowrap well mb-3">
                        <div class="flex-middle flex-space flex-row">
                            <div class="form-label mr-1 text-clip">
                                7D Graph
                            </div>
                            <div class="form-label mr-1 text-clip">
                                24h Volatility
                                <span class="text-dark"
                                    ><toFixed
                                        :num="modalData.volatility"
                                        :asset="1"
                                    />%</span
                                >
                            </div>
                            <div class="form-label text-clip">
                                P&amp;D Danger
                                <span class="text-dark"
                                    ><toFixed
                                        :num="modalData.danger"
                                        :asset="1"
                                    />%</span
                                >
                            </div>
                        </div>
                        <LineChart
                            :width="chartWidth"
                            :height="chartHeight"
                            :values="chartData"
                        ></LineChart>
                    </div>

                    <AlarmsList
                        :alarms-data="alarmsData"
                        :pair-data="modalData"
                        @listCount="onAlarmsCount"
                        @alarmsRefresh="RefreshAlarms"
                    ></AlarmsList>
                </section>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from "./Modal.vue";
import Search from "./Search.vue";
import TokenIcon from "./TokenIcon.vue";
import Toggle from "./Toggle.vue";
import Dropdown from "./Dropdown.vue";
import Limits from "./tokenlist/limits.vue";
import Sorting from "./tokenlist/sorting.vue";
import MarketsFilter from "./tokenlist/marketsFilter.vue";
import LineChartList from "./tokenlist/LineChart.vue";
import toFixed from "../../partials/toFixed.vue";
import toMoney from "../../partials/toMoney.vue";
import TokenPage from "./TokenPage.vue";
import Tabs from "./Tabs.vue";
import LineChart from "./LineChart.vue";
import toDate from "../../partials/toDate.vue";
import AlarmsList from "./AlarmsList.vue";

// component
export default {
    // component list
    components: {
        Search,
        TokenIcon,
        Toggle,
        LineChartList,
        toFixed,
        toMoney,
        Limits,
        Sorting,
        MarketsFilter,
        Dropdown,
        Modal,
        TokenPage,
        Tabs,
        LineChart,
        toDate,
        AlarmsList,
    },

    // component props
    props: {
        options: {
            type: Object,
            default() {
                return {};
            },
            required: true,
        },
        sortData: {
            type: Object,
            default() {
                return {};
            },
            required: true,
        },
    },
    // comonent data
    data() {
        return {
            listCount: 0,
            searchStr: "",
            listLeft: 0,
            cx: 0,
            cy: 0,
            width: 200,
            height: 28,
            modalData: {},
            marketsData: {},
            priceData: [],
            assetsList: [],
            historyData: [],
            coinsData: {},
            tickerStatus: 0, // ( 0: off, 1: wait, 2: on )
            tickerStart: 0,
            tickerTime: "",
            coinRank: "",
            marketCap: "",
            totalSupply: "",
            totalVolume: "",
            usdPrice: 0,
            // line chart
            chartWidth: 800,
            chartHeight: 120,
            chartData: [],
            alarmsData: [],
            alarmsCount: 0,
        };
    },

    // computed methods
    computed: {
        // check if alert button should be visible
        hasBubble() {
            return this.historyCount;
        },
        // compute number of "new" history entries
        historyCount() {
            return this.historyData.filter((e) => e.isNew).length | 0;
        },
        // get top 3 usdt coins based on volume
        marketPrices() {
            let market = this.options.prices.market || "USDT";
            let list = this.priceData.filter((p) => p.market === market);
            return this.$utils.sort(list, "percent", "desc").slice(0, 3);
        },
        // get filtered and sorted ticker list for display
        tickerList() {
            let { market } = this.options.prices;
            let { column, order } = this.sortData.ticker;

            let limit = parseInt(this.options.prices.limit) | 0;
            let search = String(this.searchStr).replace(/[^A-Z0-9]+/gi, "");
            let regex = search.length > 1 ? new RegExp(search, "i") : null;
            let count = this.priceData.length;
            let list = [];

            // filter the list
            while (count--) {
                let p = this.priceData[count];
                if (market && p.market !== market) continue;
                if (regex && !(regex.test(p.token) || regex.test(p.name)))
                    continue;
                list.push(p);
            }
            // sort the list
            list = this.$utils.sort(list, column, order);

            // update paging totals
            let total = list.length;
            this.listCount = total;
            this.listLeft = 0;

            // trim the list
            if (total && limit && limit < total) {
                list = list.slice(0, limit);
                this.listLeft = total - list.length;
            }
            return list;
        },

        // text about hidden list pair
        listLeftText() {
            let total = this.listCount;
            let remain = this.listLeft;
            let market = this.options.prices.market;
            let limit = this.options.prices.limit;
            let count = this.$utils.noun(
                total,
                market + " token pair",
                market + " token pairs"
            );
            if (remain) return "Showing " + limit + " of " + count;
            return "Showing all " + count;
        },
        svgBox() {
            return "0 0 " + this.width + " " + this.height;
        },
    },

    // on component created
    created() {
        this.setupAlarmsHandlers();
        this.setupGlobalHandlers();
        this.setupCoincapHandlers();
        this.setupTickerHandlers();
        this.setupHistoryHandlers();
        this.setupMessengerHandlers();
    },

    // custom mounted
    methods: {
        sortByLabel() {
            let { column } = this.sortData.ticker;
            switch (column) {
                case "token":
                    return "Token";
                case "percent":
                    return "Percent";
                case "close":
                    return "Price";
                case "volatility":
                    return "Volatility";
                case "danger":
                    return "Danger";
                case "change":
                    return "Change";
                case "marketVolume":
                    return "Volume";
                case "tokenVolume":
                    return "Volume";
                case "trades":
                    return "Trades";
                default:
                    return "Default";
            }
        },
        SearchonClick(e) {
            this.$emit("click", e);
        },
        SearchonChange(e) {
            this.$emit("change", e);
        },
        SearchonInput(e) {
            this.$emit("input", this.searchStr);
        },
        SearchonReset(e) {
            this.searchStr = "";
            this.$emit("input", "");
        },
        // setup global event bus handlers
        setupGlobalHandlers() {
            this.$bus.on("alarmsRefresh", this.RefreshAlarms);
            this.$bus.on("closeModal", this.closeModal);
        },
        RefreshAlarms() {
            this.$alarms.on("update", (data) => {
                this.alarmsData = data;
            });
            this.$alarms.loadData();
        },
        // setup alarms class handlers
        setupAlarmsHandlers() {
            this.$alarms.on("update", (data) => {
                this.alarmsData = data;
            });
            this.$alarms.loadData();
        },

        // setup msg queue to go off on a timer
        setupMessengerHandlers() {
            this.$messenger.useAjax(this.$ajax);
            this.$messenger.on("sent", (info) => {
                this.$toast.info(info);
            });
            this.$messenger.start();
        },

        // update alarms count for this token
        onAlarmsCount(count) {
            this.alarmsCount = count;
        },

        // fetch token data from api
        fetchGlobalData() {
            this.$coincap.fetchCoin(this.modalData.id, (data) => {
                let { rank, marketCapUsd, supply, volumeUsd24Hr, priceUsd } =
                    data;
                this.coinRank = rank || this.coinRank;
                this.marketCap = marketCapUsd || this.marketCap;
                this.totalSupply = supply || this.totalSupply;
                this.totalVolume = volumeUsd24Hr || this.totalVolume;
                this.usdPrice = priceUsd || this.usdPrice;
            });
        },

        // fetch last 24h candle data
        fetchChartData() {
            let symbol = this.modalData.symbol;
            this.$binance.fetchChartData(symbol, (prices) => {
                if (prices.length) {
                    this.chartData = prices;
                }
            });
        },
        // toggle socket connection
        toggleConnection() {
            if (this.tickerStatus) {
                this.$binance.stopTickerStream();
            } else {
                this.$binance.startTickerStream(true);
            }
        },
        // setup history class handlers
        setupHistoryHandlers() {
            this.$history.on("update", (data) => {
                this.historyData = data;
            });
            this.$history.loadData();
        },
        // show modal window
        showModal(symbol) {
            let d = this.priceData.filter((p) => p.symbol === symbol).shift();
            if (!this.$refs.modal) return;
            let title = d.pair + " Info ";
            this.modalData = d;
            this.$refs.modal.show(title);
            this.fetchGlobalData();
            this.fetchChartData();
            if (this.modalData.symbol) {
                this.curPrice = Number(this.modalData.close).toFixed(8);
            }
        },
        // close modal window, if open
        closeModal() {
            if (!this.$refs.modal) return;
            this.$refs.modal.close();
        },

        // on modal close event
        modalDone() {
            this.modalData = {};
        },
        getPoints(width, height, values) {
            return this.$utils.points(width, height, values);
        },
        // apply options
        saveOptions() {
            this.$opts.saveOptions(this.options);
        },

        // setup coincap data handlers
        setupCoincapHandlers() {
            this.$coincap.useAjax(this.$ajax);
            this.$coincap.on("allcoins", this.onCoincapData);
            this.$coincap.fetchAll();
        },

        // setup binance live ticker data handlers
        setupTickerHandlers() {
            this.$binance.useAjax(this.$ajax);
            this.$binance.on("sock_fail", this.onSockFail);
            this.$binance.on("ticker_init", this.onTickerInit);
            this.$binance.on("ticker_fail", this.onTickerFail);
            this.$binance.on("ticker_error", this.onTickerError);
            this.$binance.on("ticker_close", this.onTickerClose);
            this.$binance.on("ticker_open", this.onTickerOpen);
            this.$binance.on("ticker_data", this.onTickerData);
            this.$binance.on("ticker_prices", this.onTickerPrices);
            this.$binance.on("markets_data", this.onMarketsData);
            this.$binance.fetchMarketsData();
            this.$binance.startTickerStream(true);
        },

        // handle coincap all coins data
        onCoincapData(coins) {
            this.coinsData = coins;
            this.$binance.setCoinData(coins);
        },

        // handle binance available markets data
        onMarketsData(markets) {
            const list = Object.keys(markets);
            this.assetsList = list;
            this.marketsData = markets;
        },

        // show socket related notifications
        tickerNotify(title, message) {
            if (document.hasFocus()) return;
            let d = new Date();
            this.$notify.add(title, message + " \nNow: " + d.toLocaleString());
        },

        // on socket init fail
        onSockFail(error) {
            this.tickerStatus = 0;
            this.showNotice(error, "error");
        },

        // on socket conenction attempt
        onTickerInit(time) {
            this.tickerStatus = 0;
            this.tickerStart = time;
        },

        // on socket failure to start
        onTickerFail(error) {
            this.tickerStatus = 0;
            this.showNotice(error, "error");
        },

        // when socket connection ends
        onTickerError(e) {
            let info = String(
                e.message ||
                    "Your country in ban list, Please try using VPN to access our services."
            );
            this.tickerStatus = 0;
            this.tickerNotify("Ticker Error", info);
            this.showNotice(info, "error");
        },

        // when socket connection ends
        onTickerClose(e) {
            this.tickerStatus = 0;
            this.$bus.emit("toggleWatchform", "stop");
            this.$bus.emit("toggleTradeBot", "stop");
        },

        // when socket connection opens
        onTickerOpen(e) {
            this.tickerStatus = 1;
            this.tickerStart = Date.now();
        },

        // when socket connection has data
        onTickerData(data) {
            this.tickerStatus = 2;
        },

        // updates price data list from socket on an interval
        onTickerPrices(prices) {
            for (let i = 0; i < prices.length; ++i) {
                let p = prices[i];
                p.alarms = this.$alarms.getCount(p.symbol);
                this.updateModalPairData(p);
                this.checkPairAlarms(p);
            }
            let secs = (Date.now() - this.tickerStart) / 1000;
            this.tickerTime = this.$utils.elapsed(secs, "", true);
            this.priceData = prices;
        },
        // update pair data inside modals
        updateModalPairData(pair) {
            if (!this.modalData || !this.modalData.symbol) return;
            if (!pair || !pair.symbol || this.modalData.symbol !== pair.symbol)
                return;
            this.modalData = pair;
            this.coinRank = this.modalData.rank;
            this.marketCap = this.modalData.capusd;
            this.totalSupply = this.modalData.supply;
            this.totalVolume = this.modalData.marketVolume;
        },

        // check if alarms need to go off for a pair
        checkPairAlarms(pair) {
            this.$alarms.check(pair.symbol, pair.close, (title, info, a) => {
                let icon = this.$utils.fullUrl(a.image);
                this.$notify.add(title, info, icon, (e) => {
                    this.setRoute("/history");
                });
                this.$messenger.add(title, info, icon);
                this.$history.add(title, info, icon);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.pagelist-item-chart {
    padding: 0.5em;
    background-image: radial-gradient(
        ellipse at top right,
        rgba(#000, 0.2) 0%,
        rgba(#000, 0) 100%
    );
    border-radius: $lineJoin;
}
</style>
