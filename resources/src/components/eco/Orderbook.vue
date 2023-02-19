<template>
    <div class=" ">
        <ul class="nav nav-tabs nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item">
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-graph')"
                    :class="{ active: isActive('pills-graph') }"
                    href="#pills-graph"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
                        <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-graph-up')"
                    :class="{ active: isActive('pills-graph-up') }"
                    href="#pills-graph-up"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-graph-down')"
                    :class="{ active: isActive('pills-graph-down') }"
                    href="#pills-graph-down"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="css-3kwgah"
                        style="
                            margin: 0px;
                            min-width: 0px;
                            font-size: 24px;
                            width: 1em;
                            height: 1em;
                        "
                    >
                        <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
                        <path
                            d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </button>
            </li>
        </ul>
        <div class="tab-content" id="pills-graph-tabContent">
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-graph') }"
                id="pills-graph"
                role="tabpanel"
                aria-labelledby="pills-graph-tab"
            >
                <table
                    class="table text-dark table-sm table-borderless"
                    style="overflow-x: hidden"
                >
                    <thead class="text-muted">
                        <th class="text-start" scope="col">Price</th>
                        <th class="text-start" scope="col">Amount</th>
                        <th class="text-end" scope="col">Total</th>
                    </thead>
                </table>
                <div
                    style="
                        display: flex;
                        flex-direction: column;
                        height: 70vh;
                        justify-content: center;
                    "
                >
                    <table class="asks">
                        <div class="order-loader">
                            <div
                                class="se-pre-con2 spinner-border text-primary"
                                role="status"
                            >
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </table>

                    <div class="border-top border-bottom">
                        <span class="fs-6">{{ $t("Market Price") }}: </span>
                        <span class="fs-6 best_ask"></span
                        ><i class="fs-5 best_ask_icon bi"></i>
                    </div>

                    <table class="bids">
                        <div class="order-loader">
                            <div
                                class="se-pre-con2 spinner-border text-primary"
                                role="status"
                            >
                                <span class="sr-only"></span>
                            </div>
                        </div>
                    </table>
                </div>
            </div>
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-graph-down') }"
                id="pills-graph-down"
                role="tabpanel"
                aria-labelledby="pills-graph-down-tab"
            >
                <div class="table-responsive">
                    <table class="table text-dark table-sm table-borderless">
                        <thead class="text-muted">
                            <th scope="col">{{ $t("Price") }}</th>
                            <th scope="col">{{ $t("Amount") }}</th>
                            <th scope="col">{{ $t("Total") }}</th>
                        </thead>
                    </table>
                    <table class="asks_only"></table>
                </div>
            </div>
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-graph-up') }"
                id="pills-graph-up"
                role="tabpanel"
                aria-labelledby="pills-graph-up-tab"
            >
                <div class="table-responsive">
                    <table class="table text-dark table-sm table-borderless">
                        <thead class="text-muted">
                            <th scope="col">{{ $t("Price") }}</th>
                            <th scope="col">{{ $t("Amount") }}</th>
                            <th scope="col">{{ $t("Total") }}</th>
                        </thead>
                    </table>
                    <table class="bids_only"></table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// component
var computBarWidth = {
    width: 250,
    sortDepth: {
        sort: function (e) {
            return (
                e.sort(function (e, t) {
                    return e[1] - t[1];
                }),
                e
            );
        },
        median: function (e) {
            var t = Math.floor((e.length / 3) * 2);
            return e[t][1] < 1 ? 1 : e[t][1];
        },
        medianUnit: function (e, t, n) {
            var r = new Array(e);
            r = r[0];
            var o = new Array(t);
            (o = o[0]), (r = r.concat(o));
            var i = this.median(this.sort(r)) / n;
            return (o = r = null), i;
        },
        width: function (e, t) {
            if (0 == t) return 1;
            var n = Math.round(Number(e) / t);
            return n <= 0 ? 1 : 160 < n ? 160 : n;
        },
    },
    init: function (e, t) {
        var n = [],
            r = [];
        e.forEach(function (e) {
            n.push(e);
        }),
            t.forEach(function (e) {
                r.push(e);
            });
        var o = this.sortDepth.medianUnit(n, r, 48);
        e.forEach(function (e) {
            e.push({
                width:
                    (computBarWidth.sortDepth.width(e[1], o) *
                        computBarWidth.width) /
                    100,
            });
        }),
            t.forEach(function (e) {
                e.push({
                    width:
                        (computBarWidth.sortDepth.width(e[1], o) *
                            computBarWidth.width) /
                        100,
                });
            });
    },
};
function number_format(number, decimals, decPoint, thousandsSep) {
    number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = typeof thousandsSep === "undefined" ? "," : thousandsSep;
    var dec = typeof decPoint === "undefined" ? "." : decPoint;
    var s = "";

    var toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return "" + (Math.round(n * k) / k).toFixed(prec);
    };

    // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || "").length < prec) {
        s[1] = s[1] || "";
        s[1] += new Array(prec - s[1].length + 1).join("0");
    }

    return s.join(dec);
}
export default {
    // component list
    components: {},

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            sideLength: 20,
            refreshRate: 500,
            bestAsker: "",
            lastUpdated: "",
            activeItem: "pills-graph",
            data: {},
        };
    },
    // custom methods
    methods: {
        async loopOrderbook() {
            while (
                window.location.href.indexOf(
                    this.symbol + "-" + this.currency
                ) > -1
            ) {
                try {
                    await this.fetchOrderbook();
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                } catch (e) {
                    break;
                }
            }
        },
        async fetchOrderbook() {
            this.$http
                .post(
                    "/user/fetch/orderbook/" + this.symbol + "-" + this.currency
                )
                .then((res) => {
                    if (res.data.asks.length > 0) {
                        this.$store.commit("OPEN_MARKET_ORDER");
                    } else {
                        this.$store.commit("CLOSE_MARKET_ORDER");
                    }
                    if (res.data.asks.length > 0 || res.data.bids.length > 0) {
                        this.updateOrderbook(res.data);
                    }
                });
        },
        async updateOrderbook(data) {
            const now = Date.now();
            if (
                !this.lastUpdated ||
                now - this.lastUpdated > this.refreshRate
            ) {
                computBarWidth.init(data.bids, data.asks);
                $(".asks,.bids,.asks_only,.bids_only").empty();

                $.each(data.asks, function (index, item) {
                    let row = $("<tr>")
                        .append(
                            $('<td class="tdd">')
                                .css("color", "rgb(246,70,93)")
                                .addClass("price")
                                .append($("<span>").text(item[0]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("quantity")
                                .append($("<span>").text(item[1]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("btc")
                                .append(
                                    $("<span>").text(
                                        (item[0] * item[1]).toLocaleString(
                                            "en-US"
                                        )
                                    )
                                )
                                .append(
                                    $("<div>")
                                        .addClass("percent")
                                        .css("width", item[2].width + "px")
                                )
                        );
                    if (index > 16) row.hide();

                    $(".asks").prepend(row);

                    let rowy = $("<tr>")
                        .append(
                            $('<td class="tdd">')
                                .css("color", "rgb(246,70,93)")
                                .addClass("price")
                                .append($("<span>").text(item[0]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("quantity")
                                .append($("<span>").text(item[1]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("btc")
                                .append(
                                    $("<span>").text(
                                        (item[0] * item[1]).toLocaleString(
                                            "en-US"
                                        )
                                    )
                                )
                                .append(
                                    $("<div>")
                                        .addClass("percent")
                                        .css("width", item[2].width + "px")
                                )
                        );

                    if (index > 20) rowy.hide();

                    $(".asks_only").prepend(rowy);
                });
                $.each(data.bids, function (index, item) {
                    let row = $("<tr>")
                        .append(
                            $('<td class="tdd">')
                                .css("color", "rgb(14,203,129)")
                                .addClass("price")
                                .append($("<span>").text(item[0]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("quantity")
                                .append($("<span>").text(item[1]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("btc")
                                .append(
                                    $("<span>").text(
                                        (item[0] * item[1]).toLocaleString(
                                            "en-US"
                                        )
                                    )
                                )
                                .append(
                                    $("<div>")
                                        .addClass("percent")
                                        .css("width", item[2].width + "px")
                                )
                        );

                    if (index > 16) row.hide();

                    $(".bids").prepend(row);

                    let rowy = $("<tr>")
                        .append(
                            $('<td class="tdd">')
                                .css("color", "rgb(14,203,129)")
                                .addClass("price")
                                .append($("<span>").text(item[0]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("quantity")
                                .append($("<span>").text(item[1]))
                        )
                        .append(
                            $('<td class="tdd">')
                                .addClass("btc")
                                .append(
                                    $("<span>").text(
                                        (item[0] * item[1]).toLocaleString(
                                            "en-US"
                                        )
                                    )
                                )
                                .append(
                                    $("<div>")
                                        .addClass("percent")
                                        .css("width", item[2].width + "px")
                                )
                        );

                    if (index > 20) rowy.hide();

                    $(".bids_only").prepend(rowy);
                });

                this.best_asks = $(".best_ask");
                this.best_ask_Icons = $(".best_ask_icon");
                const best_ask = this.best_asks;
                const best_ask_Icon = this.best_ask_Icons;
                const favicon = document.getElementById("favicon");
                if (data.asks[0]) {
                    if (!this.bestAsker || data.asks[0][0] > this.bestAsker) {
                        best_ask.text(data.asks[0][0]);
                        best_ask.toggleClass("text-success");
                        best_ask_Icon
                            .addClass("bi-arrow-up text-success")
                            .removeClass("bi-arrow-down text-danger");
                        favicon.href = "/assets/up.png";
                    } else if (data.asks[0][0] < this.bestAsker) {
                        best_ask.text(data.asks[0][0]);
                        best_ask.toggleClass("text-danger");
                        best_ask_Icon
                            .addClass("bi-arrow-down text-danger")
                            .removeClass("bi-arrow-up text-success");
                        favicon.href = "/assets/down.png";
                    } else {
                        favicon.href = "/assets/neutral.png";
                    }
                    this.bestAsker = data.asks[0][0];
                    document.title =
                        this.bestAsker +
                        " | " +
                        this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency;
                    this.$store.state.bestAsk = data.asks[0][0];
                }

                if (data.bids[0]) {
                    this.$store.state.bestBid = data.bids[0][0];
                }

                this.lastUpdated = now;
            }
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
    },
    // on component created
    created() {
        //this.fetchOrderbook();
        this.loopOrderbook();
    },
    // on component mounted
    mounted() {},
};
</script>
