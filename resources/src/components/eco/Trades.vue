<template>
    <div class=" ">
        <div class="d-flex justify-content-between align-items-center p-1">
            <span class="text-warning fw-bold">{{ $t("Market Trades") }}</span>
        </div>

        <div class="table-responsive">
            <table class="table text-dark table-sm">
                <thead class="text-muted">
                    <tr>
                        <th class="text-start" scope="col">
                            {{ $t("Price") }}
                        </th>
                        <th class="text-start" scope="col">
                            {{ $t("Amount") }}
                        </th>
                        <th class="text-end" scope="col">{{ $t("Time") }}</th>
                    </tr>
                </thead>
                <tbody id="tradeTable" class="trade">
                    <tr v-for="i in sideLength" :key="i">
                        <td :id="'price' + i">-</td>
                        <td :id="'amount' + i">-</td>
                        <td :id="'time' + i">-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// component
export default {
    props: ["orderRender", "market"],
    // component list
    components: {},

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            trades: [],
            sideLength: 12,
            refreshRate: 100,
        };
    },
    computed: {},

    // custom methods
    methods: {
        async loopTrades() {
            while (
                window.location.href.indexOf(
                    this.market.currency + "-" + this.market.pair
                ) > -1
            ) {
                try {
                    await this.fetchTrades();
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                } catch (e) {
                    break;
                }
            }
        },
        async fetchTrades() {
            this.$http
                .post("/user/fetch/eco/trades", {
                    symbol: this.market.currency,
                    symbol_chain: this.market.currency_chain,
                    currency: this.market.pair,
                    currency_chain: this.market.pair_chain,
                })
                .then((response) => {
                    if (response.data.trades.length > 0) {
                        this.listTrades(response.data.trades);
                    }
                });
        },
        listTrades(res) {
            const now = Date.now();
            let color = "";
            if (
                !this.lastUpdated ||
                now - this.lastUpdated > this.refreshRate
            ) {
                for (let i = 0; i < res.length; i++) {
                    if (res[i]["type"] == "SELL") {
                        color = "rgb(246,70,93)";
                    } else {
                        color = "rgb(14,203,129)";
                    }
                    $("#price" + (i + 1))
                        .css("color", color)
                        .addClass("price")
                        .text(res[i]["price"]);
                    $("#amount" + (i + 1))
                        .addClass("amount")
                        .text(res[i]["amount"]);
                    $("#time" + (i + 1))
                        .addClass("time")
                        .text(
                            new Date(res[i]["created"]).toLocaleTimeString(
                                "en-US"
                            )
                        );
                }
                this.lastUpdated = now;
            }
        },
        formatTime(time) {
            return time.split("T")[1].split(".")[0];
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.loopTrades();
    },

    // on component destroyed
    destroyed() {},
};
</script>
