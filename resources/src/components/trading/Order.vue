<template>
    <div class="px-0">
        <ul class="nav nav-tabs nav-fill" id="pills-tab" role="tablist">
            <li class="nav-item">
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
                    class="nav-link disabled"
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
            <li class="nav-item" v-if="$isMobile()">
                <button class="nav-link" @click="cardhide()">
                    <i class="bi bi-chevron-down"></i>
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
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
                                    :key="limit.min_amount"
                                    :max="limit.max_amount"
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
                                    @keyup="getPriceBuy('market')"
                                    required=""
                                    v-model="amountMarketBuy"
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
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    :min="0.00001"
                                    :max="limit.max_amount"
                                    :step="0.00001"
                                    @keyup="getPriceBuyTotal('market')"
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalbuymarket"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1" :key="bid">
                                <button
                                    class="btn btn-success btn-sm marketType fs-5"
                                    id="marketOrderBtnBuy"
                                    type="submit"
                                    disabled
                                    v-if="bid == null"
                                >
                                    {{ $t("Loading Orderbook") }}...
                                </button>
                                <button
                                    class="btn btn-success btn-sm marketType fs-5"
                                    id="marketOrderBtnBuy"
                                    type="submit"
                                    :disabled="loading"
                                    v-else
                                >
                                    {{ $t("Buy") }}
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
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
                                    :key="limit.min_amount"
                                    :max="limit.max_amount"
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
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
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    :min="0.00001"
                                    :max="limit.max_amount"
                                    :step="0.00001"
                                    @keyup="getPriceSellTotal('market')"
                                    aria-label="Amount (to the nearest dollar)"
                                    v-model="totalsellmarket"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1" :key="bid">
                                <button
                                    class="btn btn-danger btn-sm marketType fs-5"
                                    id="marketOrderBtnSell"
                                    type="submit"
                                    disabled
                                    v-if="bid == null"
                                >
                                    {{ $t("Loading Orderbook") }}...
                                </button>
                                <button
                                    class="btn btn-danger btn-sm marketType fs-5"
                                    id="marketOrderBtnSell"
                                    type="submit"
                                    :disabled="loading"
                                    v-else
                                >
                                    {{ $t("Sell") }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- <div
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
                                <span>Price</span>
                                <a class="text-warning" @click="getBestAsk()">{{
                                    $t("Best Ask")
                                }}</a>
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0 priceNowAsk"
                                    min="0"
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
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
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
                                    :key="limit.min_amount"
                                    :max="limit.max_amount"
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
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
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="getPriceBuyTotal('limit')"
                                    v-model="totalbuylimit"
                                    :min="0.00001"
                                    :max="limit.max_amount"
                                    :step="0.00001"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1" :key="bid">
                                <button
                                    class="btn btn-success btn-sm limitType fs-5"
                                    id="limitOrderBtnBuy"
                                    type="submit"
                                    disabled
                                    v-if="bid == null"
                                >
                                    {{ $t("Loading Orderbook") }}...
                                </button>
                                <button
                                    class="btn btn-success btn-sm limitType fs-5"
                                    id="limitOrderBtnBuy"
                                    type="submit"
                                    :disabled="loading"
                                    v-else
                                >
                                    {{ $t("Buy") }}
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
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
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
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
                                    :key="limit.min_amount"
                                    :max="limit.max_amount"
                                    :step="
                                        limit.min_amount
                                            ? limit.min_amount
                                            : 0.00001
                                    "
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
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div class="input-group input-group-sm mb-1">
                                <input
                                    type="number"
                                    class="form-control text-dark border-0"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="getPriceSellTotal('limit')"
                                    v-model="totalselllimit"
                                    :min="0.00001"
                                    :max="limit.max_amount"
                                    :step="0.00001"
                                />
                                <span
                                    class="input-group-text text-dark border-0"
                                    >{{ currency }}</span
                                >
                            </div>
                            <div class="d-grid mt-1" :key="bid">
                                <button
                                    class="btn btn-danger btn-sm limitType fs-5"
                                    id="limitOrderBtnSell"
                                    type="submit"
                                    disabled
                                    v-if="bid == null"
                                >
                                    {{ $t("Loading Orderbook") }}...
                                </button>
                                <button
                                    class="btn btn-danger btn-sm limitType fs-5"
                                    id="limitOrderBtnSell"
                                    type="submit"
                                    :disabled="loading"
                                    v-else
                                >
                                    {{ $t("Sell") }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> -->

            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('pills-wallets') }"
                id="pills-wallets"
            >
                <div class="row pb-1 px-1">
                    <div class="col-md-6 col-sm-12" :key="walSym">
                        <label
                            for="basic-url"
                            class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                        >
                            <a class="text-dark"
                                >{{ symbol }} {{ $t("Wallet") }}</a
                            >
                        </label>
                        <form
                            v-if="walSym == null"
                            @submit.prevent="createWallet(symbol)"
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
                                symbol
                            }}</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12" :key="walCur">
                        <label
                            for="basic-url"
                            class="form-label mb-1 d-flex justify-content-between text-1 text-dark"
                        >
                            <a class="text-dark">{{ currency }} Wallet</a>
                        </label>
                        <form
                            v-if="walCur == null"
                            @submit.prevent="createWallet(currency)"
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
                                currency
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
    props: ["provider", "limit", "limits", "fee", "pfee", "api", "bid", "ask"],

    // component list
    components: {},
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "pills-market",
            amountMarketBuy: 0,
            amountMarketSell: 0,
            amountLimitBuy: 0,
            amountLimitSell: 0,
            priceBuy: 0,
            priceSell: 0,
            loading: false,
            walSym: null,
            walCur: null,
            wallet_type: null,
            totalbuymarket: 0,
            totalsellmarket: 0,
            totalbuylimit: 0,
            totalselllimit: 0,
        };
    },

    // custom methods
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        cardhide() {
            this.$emit("cardhide");
        },
        fetchWallet(coin) {
            this.$http
                .post("/user/fetch/wallet", {
                    type: this.wallet_type,
                    symbol: coin,
                })
                .then((response) => {
                    if (coin == this.symbol) {
                        this.walSym = response.data.balance;
                    } else if (coin == this.currency) {
                        this.walCur = response.data.balance;
                    }
                });
        },
        createWallet(coin) {
            this.loading = true;
            this.$http
                .post("/user/wallet/j/create", {
                    type: this.wallet_type,
                    symbol: coin,
                })
                .then((response) => {
                    this.fetchWallet(coin);
                    this.$toast[response.data.type](response.data.message);
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
            if (this.ask > 0) {
                if (this.pfee > 0) {
                    this.$http
                        .post("/user/trade/store", {
                            amount: this.amountMarketBuy,
                            symbol: this.symbol,
                            currency: this.currency,
                            tradeType: "market",
                            type: 1,
                            wallettype: this.wallet_type,
                            price: this.ask * this.pfee,
                        })
                        .then((response) => {
                            this.$toast[response.data.type](
                                response.data.message
                            );
                            this.$emit("OrderPlaced");
                            this.fetchWallet(this.symbol);
                            this.fetchWallet(this.currency);
                        })
                        .catch((error) => {
                            this.$toast.error(error.response.data);
                        })
                        .finally(() => {
                            this.loading = false;
                        });
                } else {
                    this.$toast.error(
                        "Error fees not set, Please report to support"
                    );
                    this.loading = false;
                }
            } else {
                this.$toast.error("Please wait for orderbook to load");
                this.loading = false;
            }
        },
        marketSell() {
            this.loading = true;
            if (this.bid > 0) {
                this.$http
                    .post("/user/trade/store", {
                        amount: this.amountMarketSell,
                        symbol: this.symbol,
                        currency: this.currency,
                        tradeType: "market",
                        type: 2,
                        wallettype: this.wallet_type,
                        price: this.bid,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.$emit("OrderPlaced");
                        this.fetchWallet(this.symbol);
                        this.fetchWallet(this.currency);
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
                    .post("/user/trade/store", {
                        amount: this.amountLimitBuy,
                        price: this.priceBuy,
                        symbol: this.symbol,
                        currency: this.currency,
                        tradeType: "limit",
                        type: 1,
                        wallettype: this.wallet_type,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.$emit("OrderPlaced");
                        this.fetchWallet(this.symbol);
                        this.fetchWallet(this.currency);
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
                    .post("/user/trade/store", {
                        amount: this.amountLimitSell,
                        price: this.priceSell,
                        symbol: this.symbol,
                        currency: this.currency,
                        tradeType: "limit",
                        type: 2,
                        wallettype: this.wallet_type,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.$emit("OrderPlaced");
                        this.fetchWallet(this.symbol);
                        this.fetchWallet(this.currency);
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
        getPercBuy(type, perc) {
            if (this.ask != null) {
                if (this.walCur != null) {
                    var val = (this.walCur * perc) / this.pfee;
                    var amountMarketFinal = val / this.ask;
                    var totalmarketFinal = this.walCur * perc;
                    if (type == "market") {
                        this.amountMarketBuy = amountMarketFinal.toFixed(5);
                        this.totalbuymarket = totalmarketFinal.toFixed(5);
                    } else {
                        this.amountLimitBuy = amountMarketFinal.toFixed(5);
                        this.totalbuylimit = totalmarketFinal.toFixed(5);
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.currency + " Wallet First"
                    );
                }
            } else {
                this.$toast.error("Waiting For Orderbook...");
            }
        },
        getPercSell(type, perc) {
            if (this.bid != null) {
                if (this.walSym != null) {
                    var PercFinal = this.walSym * perc;
                    var TotalPercFinal = walSym * perc * this.bid;
                    if (type == "market") {
                        this.amountMarketSell = PercFinal.toFixed(5);
                        this.totalsellmarket = TotalPercFinal.toFixed(5);
                    } else {
                        this.amountLimitSell = PercFinal.toFixed(5);
                        this.totalselllimit = TotalPercFinal.toFixed(5);
                    }
                } else {
                    this.$toast.error(
                        "Create " + this.symbol + " Wallet First"
                    );
                }
            } else {
                this.$toast.error("Waiting For Orderbook...");
            }
        },
        getPriceBuy(type) {
            if (this.ask != null) {
                if (type == "market") {
                    var val = this.amountMarketBuy * this.ask * this.pfee;
                    this.totalbuymarket = val.toFixed(5);
                } else {
                    var val = this.amountLimitBuy * this.ask * this.pfee;
                    this.totalbuylimit = val.toFixed(5);
                }
            } else {
                this.$toast.error("Try Again");
            }
        },
        getPriceBuyTotal(type) {
            if (this.ask != null) {
                if (type == "market") {
                    var val = (this.totalbuymarket / this.ask) * this.pfee;
                    this.amountMarketBuy = val.toFixed(5);
                } else {
                    var val = (this.totalbuylimit / this.ask) * this.pfee;
                    this.amountLimitBuy = val.toFixed(5);
                }
            } else {
                this.$toast.error("Try Again");
            }
        },
        getPriceSell(type) {
            if (this.bid != null) {
                if (type == "market") {
                    var val = this.amountMarketSell * this.bid;
                    this.totalsellmarket = val.toFixed(5);
                } else {
                    var val = this.amountLimitSell * this.bid;
                    this.totalselllimit = val.toFixed(5);
                }
            } else {
                this.$toast.error("Try Again");
            }
        },
        getPriceSellTotal(type) {
            if (this.bid != null) {
                if (type == "market") {
                    var val = this.totalsellmarket * this.bid;
                    this.amountMarketSell = val.toFixed(5);
                } else {
                    var val = this.totalselllimit * this.bid;
                    this.amountLimitSell = val.toFixed(5);
                }
            } else {
                this.$toast.error("Try Again");
            }
        },
        getBestAsk() {
            this.priceBuy = this.ask;
        },
        getBestBid() {
            this.priceSell = this.bid;
        },
        restrictDecimal(e) {
            if (e == "amountMarketBuy") {
                this.amountMarketBuy =
                    this.amountMarketBuy.match(/^\d+\.?\d{0,8}/);
            } else if (e == "amountMarketSell") {
                this.amountMarketSell =
                    this.amountMarketSell.match(/^\d+\.?\d{0,8}/);
            } else if (e == "amountLimitBuy") {
                this.amountLimitBuy =
                    this.amountLimitBuy.match(/^\d+\.?\d{0,8}/);
            } else if (e == "amountLimitSell") {
                this.amountLimitSell =
                    this.amountLimitSell.match(/^\d+\.?\d{0,8}/);
            } else if (e == "priceBuy") {
                this.priceBuy = this.priceBuy.match(/^\d+\.?\d{0,8}/);
            } else if (e == "priceSell") {
                this.priceSell = this.priceSell.match(/^\d+\.?\d{0,8}/);
            }
        },
    },

    // on component created
    created() {
        if (this.api == 1) {
            this.wallet_type = "trading";
        } else {
            this.wallet_type = "funding";
        }
        this.fetchWallet(this.symbol);
        this.fetchWallet(this.currency);
    },

    // on component mounted
    mounted() {
        this.amountMarketBuy = this.limit.min_amount;
        this.amountMarketSell = this.limit.min_amount;
        this.amountLimitBuy = this.limit.min_amount;
        this.amountLimitSell = this.limit.min_amount;
    },

    // on component destroyed
    destroyed() {},
};
</script>
