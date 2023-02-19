<template>
    <div class="">
        <div class="card-header m-1">
            <h4 class="card-title">
                {{ $t("Market Trades") }}
            </h4>
        </div>

        <div
            class="table-responsive"
            style="max-height: 280px; overflow-y: auto"
        >
            <table class="table text-dark table-sm tableFixHead">
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
                <tbody id="tradeTable" class="trade"></tbody>
            </table>
        </div>
    </div>
</template>

<script>
// component
export default {
    props: ["exchange"],
    // component list
    components: {},
    // component data
    data() {
        return {
            data_symbol: null,
        };
    },
    computed: {},

    // custom methods
    methods: {
        updateTrades(res) {
            let lastId = "";
            let color = "";
            var tabled = document.getElementById("tradeTable");
            for (let i = 0; i < res.length; i++) {
                if (res[i]["id"] > lastId) {
                    if (res[i]["side"] == "sell") {
                        color = "rgb(246,70,93)";
                    } else {
                        color = "rgb(14,203,129)";
                    }
                    let row = $("<tr>")
                        .append(
                            $("<td>")
                                .css("color", color)
                                .addClass("price")
                                .append($("<span>").text(res[i]["price"]))
                        )
                        .append(
                            $("<td>")
                                .addClass("amount")
                                .append($("<span>").text(res[i]["amount"]))
                        )
                        .append(
                            $('<td class="text-end">')
                                .addClass("time")
                                .append(
                                    $("<span>").text(
                                        this.formatTime(res[i]["datetime"])
                                    )
                                )
                        );
                    $(".trade").prepend(row);
                    lastId = res[i]["id"];
                }
                if (tabled.rows.length > 12) {
                    tabled.deleteRow(tabled.rows.length - 1);
                }
            }
        },
        contains(target, pattern) {
            var value = 0;
            pattern.forEach(function (word) {
                value = value + target.includes(word);
            });
            return value === 1;
        },
        async loopTrades() {
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ) > -1
            ) {
                try {
                    const data = await this.exchange.watchTrades(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    );
                    this.updateTrades(data);
                } catch (e) {
                    console.log(e);
                    break;
                }
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
