<template>
    <div class="px-0">
        <ul class="nav nav-tabs nav-fill" id="pills-tab" role="tablist">
            <li
                class="nav-item"
                v-if="
                    $store.state.marketOrder != null &&
                    $store.state.marketOrder == true
                "
            >
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-market')"
                    :class="{ active: isActive('pills-market') }"
                    href="#pills-market"
                >
                    {{ $t("Spot") }}
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-limit')"
                    :class="{ active: isActive('pills-limit') }"
                    href="#pills-limit"
                >
                    {{ $t("Limit") }}
                </button>
            </li>
            <li class="nav-item">
                <button
                    class="nav-link"
                    @click.prevent="setActive('pills-wallets')"
                    :class="{ active: isActive('pills-wallets') }"
                    href="#pills-wallets"
                >
                    {{ $t("Wallets") }}
                </button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-market') }"
                id="pills-market"
                role="tabpanel"
                aria-labelledby="pills-market-tab"
                v-if="
                    $store.state.marketOrder != null &&
                    $store.state.marketOrder == true
                "
            >
                <div class="row pb-1 px-1">
                    <div class="col-6">
                        <form class="text-center" @submit.prevent="marketBuy()">
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <span>
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('market', 0.25)"
                                        >25%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('market', 0.5)"
                                        >50%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('market', 0.75)"
                                        >75%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('market', 1)"
                                        >100%</a
                                    >
                                </span>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 MarketBuy"
                                    :min="
                                        market.min_amount
                                            ? market.min_amount
                                            : 0
                                    "
                                    :key="market.min_amount"
                                    :max="market.max_amount"
                                    step="0.00000001"
                                    required=""
                                    v-model="amountMarketBuy"
                                    @keyup="getPriceBuy('market')"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ symbol }}</span
                                >
                                <span
                                    class="input-group-text text-dark border-0 ms-1"
                                >
                                    <a
                                        @click="
                                            amountMarketBuy++;
                                            getPriceBuy('market');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        @click="
                                            amountMarketBuy--;
                                            getPriceBuy('market');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Taker Fee") }}:
                                    <span class="text-warning"
                                        >{{ market.taker || toMoney }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    disabled
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalbuymarket"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1">
                                <button
                                    class="btn btn-success btn-sm marketType fs-5"
                                    id="marketOrderBtnBuy"
                                    type="submit"
                                    :disabled="loading"
                                >
                                    {{ $t("Buy") }} {{ symbol }}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        <form
                            class="text-center"
                            @submit.prevent="marketSell()"
                        >
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <span>
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('market', 0.25)"
                                        >25%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('market', 0.5)"
                                        >50%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('market', 0.75)"
                                        >75%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('market', 1)"
                                        >100%</a
                                    >
                                </span>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 MarketSell"
                                    :min="
                                        market.min_amount
                                            ? market.min_amount
                                            : 0
                                    "
                                    :key="market.min_amount"
                                    :max="market.max_amount"
                                    step="0.00000001"
                                    required=""
                                    v-model="amountMarketSell"
                                    @keyup="getPriceSell('market')"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ symbol }}</span
                                >
                                <span
                                    class="input-group-text text-dark border-0 ms-1"
                                >
                                    <a
                                        @click="
                                            amountMarketSell++;
                                            getPriceSell('market');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        @click="
                                            amountMarketSell--;
                                            getPriceSell('market');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Maker Fee") }}:
                                    <span class="text-warning"
                                        >{{ market.maker || toMoney }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    disabled
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalsellmarket"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1">
                                <button
                                    class="btn btn-danger btn-sm marketType fs-5"
                                    id="marketOrderBtnSell"
                                    type="submit"
                                    :disabled="loading"
                                >
                                    {{ $t("Sell") }} {{ symbol }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-limit') }"
                id="pills-limit"
                role="tabpanel"
                aria-labelledby="pills-limit-tab"
            >
                <div class="row pb-1 px-1">
                    <div class="col-6">
                        <form class="text-center" @submit.prevent="limitBuy()">
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Price") }}</span>
                                <a class="text-warning" @click="getBestAsk()">{{
                                    $t("Best Ask")
                                }}</a>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 priceNowAsk"
                                    min="0"
                                    step="0.00000001"
                                    required=""
                                    id="price"
                                    v-model="priceBuy"
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <span>
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('limit', 0.25)"
                                        >25%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('limit', 0.5)"
                                        >50%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('limit', 0.75)"
                                        >75%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercBuy('limit', 1)"
                                        >100%</a
                                    >
                                </span>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 LimitBuy"
                                    :min="
                                        market.min_amount
                                            ? market.min_amount
                                            : 0
                                    "
                                    :key="market.min_amount"
                                    :max="market.max_amount"
                                    step="0.00000001"
                                    required=""
                                    v-model="amountLimitBuy"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="getPriceBuy('limit')"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ symbol }}</span
                                >
                                <span
                                    class="input-group-text text-dark border-0 ms-1"
                                >
                                    <a
                                        @click="
                                            amountLimitBuy++;
                                            getPriceBuy('limit');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        @click="
                                            amountLimitBuy--;
                                            getPriceBuy('limit');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Taker Fee") }}:
                                    <span class="text-warning"
                                        >{{ market.taker }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalbuylimit"
                                    disabled
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1">
                                <button
                                    class="btn btn-success btn-sm limitType fs-5"
                                    id="limitOrderBtnBuy"
                                    type="submit"
                                    :disabled="loading"
                                >
                                    {{ $t("Buy") }} {{ symbol }}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        <form class="text-center" @submit.prevent="limitSell()">
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Price") }}</span>
                                <a class="text-warning" @click="getBestBid()">{{
                                    $t("Best Bid")
                                }}</a>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 priceNowAsk"
                                    min="0"
                                    step="0.00000001"
                                    required=""
                                    id="price"
                                    v-model="priceSell"
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <span>
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('limit', 0.25)"
                                        >25%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('limit', 0.5)"
                                        >50%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('limit', 0.75)"
                                        >75%</a
                                    >
                                    <a
                                        class="text-dark"
                                        @click="getPercSell('limit', 1)"
                                        >100%</a
                                    >
                                </span>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 LimitSell"
                                    :min="
                                        market.min_amount
                                            ? market.min_amount
                                            : 0
                                    "
                                    :key="market.min_amount"
                                    :max="market.max_amount"
                                    step="0.00000001"
                                    required=""
                                    v-model="amountLimitSell"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="getPriceSell('limit')"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ symbol }}</span
                                >
                                <span
                                    class="input-group-text text-dark border-0 ms-1"
                                >
                                    <a
                                        @click="
                                            amountLimitSell++;
                                            getPriceSell('limit');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        @click="
                                            amountLimitSell--;
                                            getPriceSell('limit');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                            </div>
                            <label
                                for="basic-url"
                                class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Maker Fee") }}:
                                    <span class="text-warning"
                                        >{{ market.maker || toMoney }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalselllimit"
                                    disabled
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1">
                                <button
                                    class="btn btn-danger btn-sm limitType fs-5"
                                    id="limitOrderBtnSell"
                                    type="submit"
                                    :disabled="loading"
                                >
                                    {{ $t("Sell") }}
                                    {{
                                        symbol.includes("_")
                                            ? symbol.substring(
                                                  0,
                                                  symbol.indexOf("_")
                                              )
                                            : symbol
                                    }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-wallets') }"
                id="pills-wallets"
            >
                <div class="row pb-1 px-1">
                    <div class="col-md-6 col-sm-12" :key="'sym' + walSym">
                        <label
                            for="basic-url"
                            class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                        >
                            <a class="text-dark"
                                >{{
                                    symbol.includes("_")
                                        ? symbol.substring(
                                              0,
                                              symbol.indexOf("_")
                                          )
                                        : symbol
                                }}
                                {{ $t("Wallet") }}</a
                            >
                        </label>
                        <form
                            v-if="walSym == null"
                            @submit.prevent="
                                createWallet(
                                    market.currency,
                                    market.currency_chain
                                )
                            "
                        >
                            <button
                                type="submit"
                                class="btn btn-success btn-sm"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </button>
                        </form>
                        <div v-else class="input-group input-group-sm mb-1">
                            <input
                                type="number"
                                class="form-control text-dark border-0"
                                :value="walSym"
                                :key="walSym"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span class="input-group-text text-dark border-0">{{
                                market.currency
                            }}</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12" :key="'cur' + walCur">
                        <label
                            for="basic-url"
                            class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                        >
                            <a class="text-dark"
                                >{{
                                    currency.includes("_")
                                        ? currency.substring(
                                              0,
                                              currency.indexOf("_")
                                          )
                                        : currency
                                }}
                                Wallet</a
                            >
                        </label>
                        <form
                            v-if="walCur == null"
                            @submit.prevent="
                                createWallet(market.pair, market.pair_chain)
                            "
                        >
                            <button
                                type="submit"
                                class="btn btn-success btn-sm"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </button>
                        </form>
                        <div v-else class="input-group input-group-sm mb-1">
                            <input
                                type="number"
                                class="form-control text-dark border-0"
                                :value="walCur"
                                :key="walCur"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span class="input-group-text text-dark border-0">{{
                                market.pair
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// component
export default {
    props: ["market", "market_info"],
    // component list
    components: {},
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "pills-limit",
            amountMarketBuy: {},
            amountMarketSell: {},
            amountLimitBuy: {},
            amountLimitSell: {},
            priceBuy: 0,
            priceSell: 0,
            loading: false,
            walSym: null,
            walCur: null,
            totalbuymarket: 0,
            totalsellmarket: 0,
            totalbuylimit: 0,
            totalselllimit: 0,
        };
    },
    watch: {
        "$store.state.marketOrder": function () {
            if (this.$store.state.marketOrder == false) {
                this.setActive("pills-limit");
            } else {
                this.setActive("pills-market");
            }
        },
    },
    // custom methods
    methods: {
        fetchWallet(coin, chain) {
            this.$http
                .post("/user/fetch/eco/wallet", {
                    symbol: coin.includes("_")
                            ? coin.substring(0, coin.indexOf("_"))
                            : coin,
                    postfix: coin.includes("_")
                        ? coin.substring(coin.indexOf("_"))
                        : "",
                    chain: chain,
                })
                .then((response) => {
                    if (coin == this.symbol) {
                        this.walSym = response.data.balance;
                    } else if (coin == this.currency) {
                        this.walCur = response.data.balance;
                    }
                })
                .catch((err) => {
                    this.fetchWallet(
                        coin.includes("_")
                            ? coin.substring(0, coin.indexOf("_"))
                            : coin,
                        chain
                    );
                });
        },
        createWallet(coin, chain) {
            this.loading = true;
            this.$http
                .post("/user/eco/wallet/create", {
                    chain: chain,
                    network: chain,
                    symbol: coin.includes("_")
                        ? coin.substring(0, coin.indexOf("_"))
                        : coin,
                    postfix: coin.includes("_")
                        ? coin.substring(coin.indexOf("_"))
                        : "",
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                    this.fetchWallet(coin, chain);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        marketBuy() {
            this.loading = true;
            if (this.$store.state.bestAsk > 0) {
                this.$http
                    .post("/user/eco/trade/store", {
                        amount: this.amountMarketBuy,
                        symbol: this.market.currency,
                        symbol_chain: this.market.currency_chain,
                        currency: this.market.pair,
                        currency_chain: this.market.pair_chain,
                        tradeType: "market",
                        type: "BUY",
                        taker: this.market.taker,
                        price: this.$store.state.bestAsk,
                    })
                    .then((response) => {
                        if (response.data.data) {
                            response.data.message.forEach((msg) => {
                                this.$toast[response.data.type](msg);
                            });
                        } else {
                            this.$toast[response.data.type](
                                response.data.message
                            );
                        }
                        this.$events.emit("MainOrderPlaced");
                        this.fetchWallet(
                            this.symbol,
                            this.market.currency_chain
                        );
                        this.fetchWallet(this.currency, this.market.pair_chain);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("No Market Price, Please Do Limit Order");
                this.loading = false;
            }
        },
        marketSell() {
            this.loading = true;
            if (this.$store.state.bestAsk > 0) {
                this.$http
                    .post("/user/eco/trade/store", {
                        amount: this.amountMarketSell,
                        symbol: this.market.currency,
                        symbol_chain: this.market.currency_chain,
                        currency: this.market.pair,
                        currency_chain: this.market.pair_chain,
                        tradeType: "market",
                        type: "SELL",
                        maker: this.market.maker,
                        price: this.$store.state.bestAsk,
                    })
                    .then((response) => {
                        if (response.data.data) {
                            response.data.message.forEach((msg) => {
                                this.$toast[response.data.type](msg);
                            });
                        } else {
                            this.$toast[response.data.type](
                                response.data.message
                            );
                        }
                        this.$events.emit("MainOrderPlaced");
                        this.fetchWallet(
                            this.symbol,
                            this.market.currency_chain
                        );
                        this.fetchWallet(this.currency, this.market.pair_chain);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please wait for orderbook to load");
                this.loading = false;
            }
        },
        limitBuy() {
            this.loading = true;
            if (this.priceBuy > 0) {
                this.$http
                    .post("/user/eco/trade/store", {
                        amount: this.amountLimitBuy,
                        price: this.priceBuy,
                        symbol: this.market.currency,
                        symbol_chain: this.market.currency_chain,
                        currency: this.market.pair,
                        currency_chain: this.market.pair_chain,
                        tradeType: "limit",
                        type: "BUY",
                        taker: this.market.taker,
                    })
                    .then((response) => {
                        if (response.data.data) {
                            response.data.message.forEach((msg) => {
                                this.$toast[response.data.type](msg);
                            });
                        } else {
                            this.$toast[response.data.type](
                                response.data.message
                            );
                        }
                        this.$events.emit("MainOrderPlaced");
                        this.fetchWallet(
                            this.symbol,
                            this.market.currency_chain
                        );
                        this.fetchWallet(this.currency, this.market.pair_chain);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please set a valid price");
                this.loading = false;
            }
        },
        limitSell() {
            this.loading = true;
            if (this.priceSell > 0) {
                this.$http
                    .post("/user/eco/trade/store", {
                        amount: this.amountLimitSell,
                        price: this.priceSell,
                        symbol: this.market.currency,
                        symbol_chain: this.market.currency_chain,
                        currency: this.market.pair,
                        currency_chain: this.market.pair_chain,
                        tradeType: "limit",
                        type: "SELL",
                        maker: this.market.maker,
                    })
                    .then((response) => {
                        if (response.data.data) {
                            response.data.message.forEach((msg) => {
                                this.$toast[response.data.type](msg);
                            });
                        } else {
                            this.$toast[response.data.type](
                                response.data.message
                            );
                        }
                        this.$events.emit("MainOrderPlaced");
                        this.fetchWallet(
                            this.symbol,
                            this.market.currency_chain
                        );
                        this.fetchWallet(this.currency, this.market.pair_chain);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please set a valid price");
                this.loading = false;
            }
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        getPercBuy(type, perc) {
            if (type == "market") {
                if (this.walCur != null) {
                    var val =
                        this.walCur * perc -
                        this.walCur * perc * (this.market.taker / 100);
                    this.amountMarketBuy = val;
                    this.totalbuymarket = val * this.$store.state.bestAsk;
                } else {
                    this.$toast.error(
                        "Create " + this.currency + " Wallet First"
                    );
                }
            } else {
                if (this.walCur != null) {
                    var val =
                        this.walCur * perc -
                        this.walCur * perc * (this.market.taker / 100);
                    this.amountLimitBuy = val;
                    this.totalbuylimit = val * this.$store.state.bestAsk;
                } else {
                    this.$toast.error(
                        "Create " + this.currency + " Wallet First"
                    );
                }
            }
        },
        getPercSell(type, perc) {
            if (type == "market") {
                if (this.walSym != null) {
                    this.amountMarketSell = this.walSym * perc;
                    this.totalsellmarket =
                        (this.amountMarketSell -
                            this.amountMarketSell * (this.market.maker / 100)) *
                        this.$store.state.bestBid;
                } else {
                    this.$toast.error(
                        "Create " + this.symbol + " Wallet First"
                    );
                }
            } else {
                if (this.$store.state.bestBid != null) {
                    this.amountLimitSell = this.walSym * perc;
                    this.totalselllimit =
                        this.amountMarketSell * this.$store.state.bestBid;
                } else {
                    this.$toast.error(
                        "Create " + this.symbol + " Wallet First"
                    );
                }
            }
        },
        getPriceBuy(type) {
            if (type == "market") {
                if (this.walCur != null) {
                    var val =
                        this.amountMarketBuy -
                        this.amountMarketBuy * (this.market.taker / 100);
                    if (this.walCur > val) {
                        this.totalbuymarket = (
                            val * this.$store.state.bestAsk
                        ).toFixed(6);
                    } else {
                        this.$toast.error(
                            "Order price higher than your " +
                                this.currency +
                                " wallet balance"
                        );
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.currency + " Wallet First"
                    );
                }
            } else {
                if (this.walCur != null) {
                    var val =
                        this.amountLimitBuy -
                        this.amountLimitBuy * (this.market.taker / 100);
                    if (this.walCur > val) {
                        this.totalbuylimit = (
                            val * this.$store.state.bestAsk
                        ).toFixed(6);
                    } else {
                        this.$toast.error(
                            "Order price higher than your " +
                                this.currency +
                                " wallet balance"
                        );
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.currency + " Wallet First"
                    );
                }
            }
        },
        getPriceSell(type) {
            if (type == "market") {
                if (this.walSym != null) {
                    if (this.walSym > this.amountMarketSell) {
                        this.totalsellmarket = (
                            (this.amountMarketSell -
                                this.amountMarketSell *
                                    (this.market.maker / 100)) *
                            this.$store.state.bestBid
                        ).toFixed(6);
                    } else {
                        this.$toast.error(
                            "Order amount higher than your " +
                                this.symbol +
                                " wallet balance"
                        );
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.symbol + " Wallet First"
                    );
                }
            } else {
                if (this.walSym != null) {
                    if (this.walSym > this.amountLimitSell) {
                        this.totalselllimit = (
                            (this.amountLimitSell -
                                this.amountLimitSell *
                                    (this.market.maker / 100)) *
                            this.$store.state.bestBid
                        ).toFixed(6);
                    } else {
                        this.$toast.error(
                            "Order amount higher than your " +
                                this.symbol +
                                " wallet balance"
                        );
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.symbol + " Wallet First"
                    );
                }
            }
        },
        getBestAsk() {
            this.priceBuy = this.$store.state.bestAsk;
        },
        getBestBid() {
            this.priceSell = this.$store.state.bestBid;
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchWallet(this.market.currency, this.market.currency_chain);
        this.fetchWallet(this.market.pair, this.market.pair_chain);
        this.amountMarketBuy = this.market.min_amount;
        this.amountMarketSell = this.market.min_amount;
        this.amountLimitBuy = this.market.min_amount;
        this.amountLimitSell = this.market.min_amount;
    },

    // on component destroyed
    destroyed() {},
};
</script>
