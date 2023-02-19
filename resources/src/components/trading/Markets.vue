<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <button class="btn btn-icon" style="position: relative; top: -5px">
                <i
                    class="bi bi-chevron-left text-warning fs-6"
                    @click.prevent="scrollLeft()"
                ></i>
            </button>
            <ul
                class="nav nav-tabs nf"
                role="tablist"
                style="overflow-x: hidden"
            >
                <li class="nav-item">
                    <small
                        ><a
                            class="nav-link"
                            @click.prevent="setActive('fav')"
                            :class="{ active: isActive('fav') }"
                            href="#fav"
                            ><i class="bi bi-star bi-icon"></i></a
                    ></small>
                </li>
                <li class="nav-item" v-if="ext.eco == 1 && ecos != ''">
                    <small
                        ><a
                            class="nav-link"
                            @click.prevent="setActive('eco')"
                            :class="{ active: isActive('eco') }"
                            href="#eco"
                            ><i class="bi bi-award bi-icon"></i></a
                    ></small>
                </li>
                <li
                    class="nav-item"
                    v-for="(mark, key, index) in markets"
                    :key="index"
                >
                    <small>
                        <a
                            class="nav-link"
                            @click.prevent="setActive(key)"
                            :class="{ active: isActive(key) }"
                            href="#profile"
                            >{{ key }}</a
                        ></small
                    >
                </li>
            </ul>
            <button class="btn btn-icon" style="position: relative; top: -5px">
                <i
                    class="bi bi-chevron-right text-warning fs-6"
                    @click.prevent="scrollRight()"
                ></i>
            </button>
        </div>
        <div class="tab-content" id="myTabContent">
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('fav') }"
                id="fav"
            >
                <div class="row">
                    <div class="col-12 card-search custom-data-search">
                        <div class="input-group input-group-sm px-1 mb-1">
                            <span
                                class="input-group-text text-dark border-0"
                                id="basic-addon1"
                                ><i class="bi bi-search"></i
                            ></span>
                            <input
                                type="text"
                                name="search_table_fav"
                                class="form-control form-control-sm text-dark border-0"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </div>
                <table
                    class="table text-dark table-sm table-borderless tableFixHead custom-data-table-fav"
                >
                    <thead class="text-muted">
                        <th scope="col">{{ $t("Pair") }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(fav, index) in favs" :key="index">
                            <td>
                                <div class="d-flex justify-content-start">
                                    <form
                                        @submit.prevent="
                                            removeFromWatchlist(fav.id)
                                        "
                                    >
                                        <button
                                            type="submit"
                                            class="watchlisted"
                                            style="
                                                background: transparent;
                                                border: transparent;
                                            "
                                        >
                                            <i
                                                class="me-1 text-warning bi bi-star-fill"
                                            ></i>
                                        </button>
                                    </form>
                                    <router-link
                                        :to="
                                            '../' +
                                            fav.currency +
                                            (fav.type == 1 ? '/' : '-') +
                                            fav.pair
                                        "
                                    >
                                        <span class="text-dark fw-bold">{{
                                            fav.currency
                                        }}</span
                                        >/<span
                                            class="text-secondary fw-bold"
                                            >{{ fav.pair }}</span
                                        >
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('eco') }"
                id="eco"
            >
                <div class="row">
                    <div class="col-12 card-search custom-data-search">
                        <div class="input-group input-group-sm px-1 mb-1">
                            <span
                                class="input-group-text text-dark border-0"
                                id="basic-addon1"
                                ><i class="bi bi-search"></i
                            ></span>
                            <input
                                type="text"
                                name="search_table_eco"
                                class="form-control form-control-sm text-dark border-0"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </div>
                <table
                    class="table text-dark table-sm table-borderless tableFixHead custom-data-table-eco"
                >
                    <thead class="text-muted">
                        <th scope="col">{{ $t("Pair") }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(eco, index) in ecos" :key="index">
                            <td>
                                <div class="d-flex justify-content-start">
                                    <form
                                        @submit.prevent="
                                            addToWatchlist(
                                                eco.currency,
                                                eco.pair,
                                                2
                                            )
                                        "
                                    >
                                        <button
                                            type="submit"
                                            class="not-watchlisted"
                                            style="
                                                background: transparent;
                                                border: transparent;
                                            "
                                        >
                                            <i
                                                class="me-1 text-secondary bi bi-star"
                                            ></i>
                                        </button>
                                    </form>
                                    <router-link
                                        :to="
                                            '../' +
                                            eco.currency +
                                            '-' +
                                            eco.pair
                                        "
                                    >
                                        <span class="text-dark fw-bold">{{
                                            eco.currency
                                        }}</span
                                        >/<span
                                            class="text-secondary fw-bold"
                                            >{{ eco.pair }}</span
                                        >
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                class="tab-pane fade"
                v-for="(mark, key, index) in markets"
                :key="index"
                :class="{ 'active show': isActive(key) }"
                :id="{ key }"
            >
                <MarketList
                    :list="Object.values(mark)"
                    @fetchFavs="fetchFavs"
                ></MarketList>
            </div>
        </div>
    </div>
</template>

<script>
import MarketList from "./MarketsList.vue";
// component
export default {
    props: ["exchange"],
    // component list
    components: { MarketList },

    // component data
    data() {
        return {
            favs: [],
            ecos: [],
            old: [],
            ext: ext,
            markets: [],
            provider: provider,
            activeItem: "USDT",
        };
    },
    computed: {},

    // custom methods
    methods: {
        fetchMarkets() {
            this.$http.get("/data/markets/markets.json").then((response) => {
                if (provider != null) {
                    this.markets = response.data[provider];
                } else {
                    this.markets = response.data["kucoin"];
                }
            });
        },
        fetchFavs() {
            this.$http.post("/user/watchlist/data").then((response) => {
                this.favs = response.data.favs.sort((a, b) =>
                    a.currency.localeCompare(b.currency)
                );
            });
        },
        fetchEcos() {
            this.$http.get("/user/eco/data").then((response) => {
                this.ecos = response.data.ecos;
            });
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        scrollLeft() {
            var leftPos = $(".nf").scrollLeft();
            $(".nf").animate({ scrollLeft: leftPos - 200 }, 800);
        },
        scrollRight() {
            var leftPos = $(".nf").scrollLeft();
            $(".nf").animate({ scrollLeft: leftPos + 200 }, 800);
        },
        removeFromWatchlist(id) {
            this.$http
                .post("/user/watchlist/delete", {
                    id: id,
                })
                .then((response) => {
                    this.$toast.success(response.data.message);
                    this.fetchFavs();
                })
                .catch((error) => {
                    this.$toast.error("Market Already Removed From Watchlist");
                });
        },
        handle(tickers) {
            this.tickerElements = this.tickerElements || {};
            this.tickerIcons = this.tickerIcons || {};
            this.changeElements = this.changeElements || {};
            for (const [symbol, ticker] of Object.entries(tickers)) {
                const symbolWithoutSlash = symbol.replace("/", "");
                if (!(symbol in this.tickerElements)) {
                    this.tickerElements[symbol] = $(
                        ".tic-" + symbolWithoutSlash
                    );
                }
                if (!(symbol in this.tickerIcons)) {
                    this.tickerIcons[symbol] = $(
                        ".tic-" + symbolWithoutSlash + "-icon"
                    );
                }
                const tickerElement = this.tickerElements[symbol];
                const tickerIcon = this.tickerIcons[symbol];
                if (!this.old[symbol] || ticker["last"] > this.old[symbol]) {
                    tickerElement.text(ticker["last"]);
                    tickerElement.toggleClass("text-success");
                    tickerIcon.toggleClass("bi-arrow-up text-success");
                } else if (ticker["last"] < this.old[symbol]) {
                    tickerElement.text(ticker["last"]);
                    tickerElement.toggleClass("text-danger");
                    tickerIcon.toggleClass("bi-arrow-down text-danger");
                }
                this.old[symbol] = ticker["last"];
                if (!(symbol in this.changeElements)) {
                    this.changeElements[symbol] = $(
                        ".change-" + symbolWithoutSlash
                    );
                }
                const changeElement = this.changeElements[symbol];
                if (ticker["change"] > 0) {
                    changeElement.text(
                        this.formatTotal(ticker["change"]) + "%"
                    );
                    changeElement
                        .addClass("text-success")
                        .removeClass("text-danger");
                } else if (ticker["change"] < 0) {
                    changeElement.text(
                        this.formatTotal(ticker["change"]) + "%"
                    );
                    changeElement
                        .addClass("text-danger")
                        .removeClass("text-success");
                } else {
                    changeElement.text(
                        this.formatTotal(ticker["change"]) + "%"
                    );
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
        async loop() {
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ) > -1
            ) {
                try {
                    const tickers = await this.exchange.fetchTickers();
                    this.handle(tickers);
                } catch (e) {
                    console.log(e);
                    break;
                }
            }
        },
        formatTotal(total) {
            return ccxt.decimalToPrecision(
                total,
                ccxt.ROUND,
                3,
                ccxt.DECIMAL_PLACES,
                ccxt.PAD_WITH_ZERO
            );
        },
    },

    // on component created
    created() {
        this.fetchMarkets();
        this.fetchFavs();
        if (ext.eco == 1 && this.$route.path.includes("binary") != true) {
            this.fetchEcos();
        }
    },

    // on component mounted
    mounted() {},
    beforeUpdate() {
        var tr_elements_fav = $(".custom-data-table-fav tbody tr");
        $(document).on("input", "input[name=search_table_fav]", function () {
            var search = $(this).val().toUpperCase();
            var match = tr_elements_fav
                .filter(function (idx, elem) {
                    return $(elem)
                        .text()
                        .trim()
                        .toUpperCase()
                        .indexOf(search) >= 0
                        ? elem
                        : null;
                })
                .sort();
            var table_content = $(".custom-data-table-fav tbody");
            if (match.length == 0) {
                table_content.html(
                    '<tr><td colspan="100%" class="text-center">Data Not Found</td></tr>'
                );
            } else {
                table_content.html(match);
            }
        });
        var tr_elements_eco = $(".custom-data-table-eco tbody tr");
        $(document).on("input", "input[name=search_table_eco]", function () {
            var search = $(this).val().toUpperCase();
            var match = tr_elements_eco
                .filter(function (idx, elem) {
                    return $(elem)
                        .text()
                        .trim()
                        .toUpperCase()
                        .indexOf(search) >= 0
                        ? elem
                        : null;
                })
                .sort();
            var table_content = $(".custom-data-table-eco tbody");
            if (match.length == 0) {
                table_content.html(
                    '<tr><td colspan="100%" class="text-center">Data Not Found</td></tr>'
                );
            } else {
                table_content.html(match);
            }
        });
    },
};
</script>
<style>
.scroller {
    height: calc(35vh);
}
.not-watchlisted:hover .bi-star {
    color: rgb(255, 159, 67) !important;
}
.watchlisted:hover .bi-star-fill {
    color: rgb(130, 134, 139) !important;
}
</style>
