<template>
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
                        <span class="text-dark">{{ modalData.name }}</span>
                    </div>
                </div>
            </div>

            <div class="text-nowrap mr-1 text-end">
                <div class="form-label">{{ modalData.market }} Price</div>
                <span class="text-dark"
                    ><toFixed :num="modalData.close" :asset="modalData.market"
                /></span>
            </div>

            <div class="text-nowrap d-none d-sm-block mr-1 text-end">
                <div class="form-label">Chg 24h</div>
                <span class="color"
                    >{{ modalData.sign
                    }}<toFixed :num="modalData.percent" :asset="3" />%</span
                >
            </div>

            <div class="text-nowrap d-none d-sm-block mr-1 text-end">
                <!-- <router-link to=></router-link> -->
            </div>
        </div>

        <div class="mb-3 grid grid-cols-3 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <div class="well text-nowrap flex-1">
                <div class="form-label">High 24h</div>
                <span class="text-dark"
                    ><toFixed :num="modalData.high" :asset="modalData.market"
                /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">Low 24h</div>
                <span class="text-dark"
                    ><toFixed :num="modalData.low" :asset="modalData.market"
                /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">{{ modalData.market }} Vol 24h</div>
                <span class="text-dark"
                    ><toMoney :num="modalData.marketVolume"
                /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">{{ modalData.token }} Vol 24h</div>
                <span class="text-dark"
                    ><toMoney :num="modalData.tokenVolume"
                /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">Market Cap USD</div>
                <span class="text-dark"><toMoney :num="marketCap" /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">Current Supply</div>
                <span class="text-dark"><toMoney :num="totalSupply" /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">Volume USD 24H</div>
                <span class="text-dark"><toMoney :num="totalVolume" /></span>
            </div>

            <div class="well text-nowrap flex-1">
                <div class="form-label">Price USD</div>
                <span class="text-dark">$<toMoney :num="usdPrice" /></span>
            </div>
        </div>

        <!-- draw line chart for symbol using candle data -->
        <div class="text-nowrap well mb-3">
            <div class="flex-middle flex-space flex-row">
                <div class="form-label mr-1 text-clip">7D Graph</div>
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
                        ><toFixed :num="modalData.danger" :asset="1" />%</span
                    >
                </div>
            </div>
            <LineChart
                :width="chartWidth"
                :height="chartHeight"
                :values="chartData"
            ></LineChart>
            <Spinner ref="chartSpinner" class="abs rounded"></Spinner>
        </div>

        <AlarmsList
            :alarms-data="alarmsData"
            :pair-data="modalData"
            @listCount="onAlarmsCount"
        ></AlarmsList>
    </section>
</template>

<script>
import Spinner from "./Spinner.vue";
import Tabs from "./Tabs.vue";
import TokenIcon from "./TokenIcon.vue";
import LineChart from "./LineChart.vue";
import AlarmsList from "./AlarmsList.vue";
import toFixed from "../../partials/toFixed.vue";
import toMoney from "../../partials/toMoney.vue";

// component
export default {
    // component list
    components: {
        Spinner,
        Tabs,
        TokenIcon,
        LineChart,
        AlarmsList,
        toFixed,
        toMoney,
    },

    // component props
    props: {
        modalData: {
            type: Object,
            default() {
                return {};
            },
            required: true,
        }, // pair data
        alarmsData: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    emits: ["setTitle"],

    // comonent data
    data() {
        return {
            coinRank: this.modalData.rank,
            marketCap: this.modalData.capusd,
            totalSupply: this.modalData.supply,
            totalVolume: this.modalData.marketVolume,
            curPrice: this.modalData.close,
            usdPrice: 0,
            alarmsCount: 0,
            // line chart
            chartWidth: 800,
            chartHeight: 120,
            chartData: [],
        };
    },
    // watch methods
    watch: {
        // update title as token data changes
        modalData: function () {
            let p = this.modalData;
            this.$bus.emit(
                "setTitle",
                p.pair + " " + p.arrow + " " + p.sign + p.percent
            );
        },
    },

    // component mounted
    mounted() {
        this.fetchGlobalData();
        this.fetchChartData();
    },

    // component methods
    methods: {
        // update alarms count for this token
        onAlarmsCount(count) {
            this.alarmsCount = count;
        },

        // update events count for this token
        onNewsCount(count) {
            this.newsCount = count;
        },

        // spinner helper
        spinner(name, method, message) {
            if (!this.$refs[name] || !method) return;
            this.$refs[name][method](message);
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
            this.spinner("chartSpinner", "show", "Loading chart data");
            this.$binance.fetchChartData(symbol, (prices) => {
                if (prices.length) {
                    this.spinner("chartSpinner", "hide");
                    this.chartData = prices;
                } else {
                    this.spinner(
                        "chartSpinner",
                        "error",
                        "No data for " + symbol
                    );
                }
            });
        },
    },
};
</script>
