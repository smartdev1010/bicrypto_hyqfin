<template>
    <div class="row match-height">
        <div class="lg:col-span-3">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        BTC <span v-if="contract.hilow">{{ $t("Rise") }}</span
                        ><span v-else>{{ $t("Fall") }}</span>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col">
                            {{ $t("Profit/Loss") }}:<br />
                            <div
                                :class="
                                    contract.result == 1
                                        ? 'text-success'
                                        : contract.result == 2
                                        ? 'text-danger'
                                        : 'text-secondary'
                                "
                            >
                                <b
                                    ><span v-if="contract.result == 1"
                                        >+
                                        {{ contract.amount * gnl.profit }}</span
                                    ><span v-else-if="contract.result == 2"
                                        >-
                                        {{ contract.amount * gnl.profit }}</span
                                    ><span v-else>{{ $t("Draw") }}</span>
                                </b>
                            </div>
                        </div>
                        <div class="col">
                            {{ $t("Sell price") }}:<br /><b>
                                <toMoney
                                    :num="
                                        contract.amount +
                                        contract.amount * gnl.profit
                                    "
                                    decimals="4"
                            /></b>
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col">
                            {{ $t("Buy price") }}:<br /><b>
                                <toMoney :num="contract.amount" decimals="4"
                            /></b>
                        </div>
                        <div class="col">
                            {{ $t("Payout limit") }}:<br /><b>{{
                                contract.amount * gnl.profit
                            }}</b>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div
                    class="card-body"
                    style="max-height: 280px; overflow-y: auto"
                >
                    <div class="row">
                        <div class="col-3">
                            <i
                                class="bi bi-play btn btn-icon fs-3 bg-light-secondary rounded border-white"
                            ></i>
                        </div>
                        <div class="col-9">
                            {{ $t("Reference ID") }}:<br /><b>{{
                                contract.id
                            }}</b>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="bi bi-clock btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div class="col-9">
                                {{ $t("Duration") }}:<br /><span
                                    v-if="
                                        contract.duration >= 60 &&
                                        contract.duration < 3600
                                    "
                                    ><b> {{ contract.duration / 60 }}</b>
                                    {{ $t("Min") }}</span
                                >
                                <span v-else-if="contract.duration > 3600"
                                    ><b> {{ contract.duration / 3600 }}</b>
                                    {{ $t("hour") }}
                                </span>
                                <span v-else
                                    ><b>{{ contract.duration }}</b>
                                    {{ $t("Sec") }}</span
                                >
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="bi bi-chevron-bar-contract btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div v-if="data.length > 0" class="col-9">
                                {{ $t("Barrier") }}:<br /><b>
                                    <toMoney :num="barrier" decimals="4"
                                /></b>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="border-warning bi bi-geo-alt btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div class="col-9">
                                {{ $t("Start time") }}:<br /><b>{{
                                    contract.in_time
                                }}</b>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="border-danger bi bi-record-circle btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div class="col-9">
                                {{ $t("Entry spot") }}:<br /><b>
                                    <toMoney
                                        :num="contract.price_was"
                                        decimals="4"
                                /></b>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="border-info bi bi-record-circle-fill btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div v-if="data.length > 0" class="col-9">
                                {{ $t("Exit spot") }}:<br /><b>{{
                                    data[data.length - 1].value
                                }}</b>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-3">
                                <i
                                    class="border-success bi bi-flag btn btn-icon fs-3 bg-light-secondary rounded"
                                ></i>
                            </div>
                            <div class="col-9">
                                {{ $t("Exit time") }}:<br /><b>{{
                                    duration
                                }}</b>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:col-span-9">
            <div class="card">
                <div class="card-body">
                    <!-- Line Chart Starts -->
                    <div class="col-12">
                        <div class="card">
                            <div
                                class="card-header flex-sm-row flex-column justify-md-between flex items-start justify-start"
                            >
                                <div>
                                    <h4 class="card-title mb-25">
                                        {{ $t("Contract details") }}
                                    </h4>
                                </div>
                                <div
                                    class="mt-sm-0 mt-1 flex flex-wrap items-center"
                                >
                                    <h5
                                        v-if="data.length > 0"
                                        class="fw-bolder mr-1 mb-0"
                                    >
                                        $ {{ data[data.length - 1].value }}
                                    </h5>
                                    <span
                                        v-if="data.length > 0"
                                        class="badge badge-light-secondary"
                                    >
                                        <i
                                            class="text-danger font-small-3 bi bi-arrow-down"
                                        ></i>
                                        <span class="align-middle">
                                            <toMoney
                                                :num="perc"
                                                decimals="4"
                                            />%</span
                                        >
                                    </span>
                                </div>
                            </div>
                            <div class="card-body parent-chart">
                                <div id="chart" class="child-chart"></div>
                            </div>
                        </div>
                    </div>
                    <!-- Line Chart Ends -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";
import toMoney from "../../../partials/toMoney.vue";
import toDate from "../../../partials/toDate.vue";
$(window).resize(function () {
    chart.applyOptions({
        width: $(".parent-chart").innerWidth(),
        height: $(".parent-chart").innerHeight(),
    });
});

export default {
    // component list
    components: { toDate, toMoney },
    props: [],

    // component data
    data() {
        return {
            gnl: gnl,
            contract: [],
            data: [],
            duration: [],
        };
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchData();
    },

    // on component destroyed
    unmounted() {},
    // custom methods
    methods: {
        barrier() {
            return this.data[0].value;
        },
        perc() {
            return this.data[0].value / this.data[this.data.length - 1].value;
        },
        fetchData() {
            axios
                .post(
                    "/user/fetch/binary/contract/view/" +
                        this.$route.params.type +
                        "/" +
                        this.$route.params.id
                )
                .then((response) => {
                    (this.contract = response.data.contract),
                        (this.data = response.data.data),
                        (this.duration = response.data.duration);
                    loadScript(
                        "https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js"
                    )
                        .then(() => {
                            var chart = LightweightCharts.createChart(
                                document.getElementById("chart"),
                                {
                                    rightPriceScale: {
                                        scaleMargins: {
                                            top: 0.1,
                                            bottom: 0.1,
                                        },
                                    },
                                    layout: {
                                        backgroundColor: "#ffffff",
                                        textColor: "rgba(33, 56, 77, 1)",
                                    },
                                    grid: {
                                        vertLines: {
                                            color: "rgba(197, 203, 206, 0.4)",
                                        },
                                        horzLines: {
                                            color: "rgba(197, 203, 206, 0.4)",
                                        },
                                    },
                                    timeScale: {
                                        timeVisible: true,
                                        secondsVisible: false,
                                    },
                                }
                            );
                            var lineSeries = chart.addBaselineSeries({
                                baseValue: {
                                    type: "price",
                                    price: this.data[0].value,
                                },
                                lastPriceAnimation: 1,
                            });
                            lineSeries.setData(this.data);

                            var lineSeries1 = chart.addLineSeries({
                                color: "#bdc3c7",
                            });

                            lineSeries1.setData(this.data[0]);
                            chart.timeScale().fitContent();
                        })
                        .catch(() => {
                            // Failed to fetch script
                        });
                });
        },
    },
};
</script>
<style scoped>
.parent-chart {
    position: relative;
    width: 100%;
    padding-bottom: 50%;
}
.child-chart {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
