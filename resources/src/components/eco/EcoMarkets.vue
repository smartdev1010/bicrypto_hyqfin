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
                        <th class="d-lg-none d-xl-block" scope="col">
                            {{ $t("Change") }}
                        </th>
                        <th scope="col">{{ $t("Price") }}</th>
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
                                            './' +
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

                            <td class="d-lg-none d-xl-block">
                                <span
                                    :class="'change-' + fav.currency + fav.pair"
                                ></span>
                            </td>
                            <td>
                                <span
                                    :class="'tic-' + fav.currency + fav.pair"
                                ></span
                                ><i
                                    :class="
                                        'tic-' +
                                        fav.currency +
                                        fav.pair +
                                        '-icon bi'
                                    "
                                ></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div
                class="tab-pane fade"
                v-for="(mark, key, index) in markets"
                :key="key"
                :class="{ 'active show': isActive(key) }"
                :id="{ key }"
            >
                <table
                    class="table text-dark table-sm table-borderless tableFixHead"
                    :class="'custom-data-table-' + key"
                >
                    <thead class="text-muted">
                        <th scope="col">{{ $t("Pair") }}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(market, index) in mark" :key="index">
                            <td>
                                <div class="d-flex justify-content-start">
                                    <form
                                        @submit.prevent="
                                            addToWatchlist(
                                                market.currency,
                                                market.pair,
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
                                            './' +
                                            market.currency +
                                            '-' +
                                            market.pair
                                        "
                                    >
                                        <span class="text-dark fw-bold">{{
                                            market.currency.includes("_")
                                                ? market.currency.substring(
                                                      0,
                                                      market.currency.indexOf(
                                                          "_"
                                                      )
                                                  )
                                                : market.currency
                                        }}</span
                                        ><span
                                            v-if="market.currency.includes('_')"
                                            class="badge bg-info"
                                            >{{
                                                market.currency.substring(
                                                    market.currency.indexOf(
                                                        "_"
                                                    ) + 1
                                                )
                                            }}</span
                                        >/<span
                                            class="text-secondary fw-bold"
                                            >{{
                                                market.pair.includes("_")
                                                    ? market.pair.substring(
                                                          0,
                                                          market.pair.indexOf(
                                                              "_"
                                                          )
                                                      )
                                                    : market.pair
                                            }}</span
                                        ><span
                                            v-if="market.pair.includes('_')"
                                            class="badge bg-info"
                                            >{{
                                                market.pair.substring(
                                                    market.pair.indexOf("_") + 1
                                                )
                                            }}</span
                                        >
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// component
export default {
    // component data
    data() {
        return {
            favs: [],
            old: [],
            markets: [],
            ext: ext,
            activeItem: "fav",
        };
    },

    // custom methods
    methods: {
        fetchMarkets() {
            this.$http.get("/user/eco/markets").then((response) => {
                this.markets = response.data.markets;
            });
        },
        fetchFavs() {
            this.$http.post("/user/watchlist/data").then((response) => {
                this.favs = response.data.favs;
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
        addToWatchlist(currency, pair, type) {
            this.$http
                .post("/user/watchlist/store", {
                    currency: currency,
                    pair: pair,
                    type: type,
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                    this.fetchFavs();
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                });
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
        contains(target, pattern) {
            var value = 0;
            pattern.forEach(function (word) {
                value = value + target.includes(word);
            });
            return value === 1;
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
    },

    // on component mounted
    mounted() {},
    // on component mounted
    beforeUpdate() {
        var tr_elements = $(".custom-data-table-fav tbody tr");
        $(document).on("input", "input[name=search_table_fav]", function () {
            var search = $(this).val().toUpperCase();
            var match = tr_elements
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
    },
    unmounted() {},
    // on component destroyed
    destroyed() {},
};
</script>
<style>
.not-watchlisted:hover .bi-star {
    color: rgb(255, 159, 67) !important;
}
.watchlisted:hover .bi-star-fill {
    color: rgb(130, 134, 139) !important;
}
</style>
