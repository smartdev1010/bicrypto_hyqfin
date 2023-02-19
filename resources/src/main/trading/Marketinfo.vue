<template>
    <div
        class="Info border border-gray-100 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-900"
    >
        <div class="scrollbar-hide flex overflow-x-scroll text-xs text-white">
            <div class="test-start mr-5 flex items-center">
                <img
                    :key="$route.params.symbol"
                    v-lazy="
                        $route.params.symbol
                            ? '/assets/images/cryptoCurrency/' +
                              $route.params.symbol.toLowerCase() +
                              '.png'
                            : '/market/notification.png'
                    "
                    width="36"
                />
                <i class="bi bi-chevron-right text-dark"></i>
                <img
                    :key="$route.params.currency"
                    v-lazy="
                        $route.params.currency
                            ? '/assets/images/cryptoCurrency/' +
                              $route.params.currency.toLowerCase() +
                              '.png'
                            : '/market/notification.png'
                    "
                    width="36"
                />
            </div>
            <div class="flex-1">
                <div class="text-dark">{{ $t("Last Price") }}:</div>
                <div :class="last_price_class">
                    {{ last_price }}
                    <!-- <i class="bi" :class="last_price_icon"></i> -->
                </div>
            </div>
            <div class="flex-1">
                <div class="text-dark">{{ $t("24h Change") }}:</div>
                <div class="">
                    <span :class="day_change_class">{{ day_change }} %</span
                    ><i class="bi" :class="day_change_icon"></i>
                </div>
            </div>
            <div
                v-if="provider != 'coinbasepro'"
                class="text-dark flex-1 xs:hidden sm:block"
            >
                <div>{{ $route.params.symbol }} {{ $t("Volume") }}:</div>
                <div class="">
                    <span>{{ day_volume_pair }}</span>
                </div>
            </div>
            <div
                v-if="provider != 'coinbasepro'"
                class="text-dark flex-1 xs:hidden sm:block"
            >
                <div class="">
                    {{ $route.params.currency }} {{ $t("Volume") }}:
                    <span>{{ day_volume_currency }}</span>
                </div>
            </div>
            <div
                v-if="provider != 'coinbasepro'"
                class="text-dark flex-1 xs:hidden lg:block"
            >
                <div>{{ $t("24h High") }}:</div>
                <div class="">
                    <span>{{ day_high }}</span>
                </div>
            </div>
            <div
                v-if="provider != 'coinbasepro'"
                class="text-dark flex-1 xs:hidden lg:block"
            >
                <div>{{ $t("24h Low") }}:</div>
                <div class="">
                    <span>{{ day_low }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// component
import { useMarketStore } from "../../store/market";
export default {
    // component list
    components: {},
    props: ["provider"],
    setup() {
        const marketStore = useMarketStore();
        return { marketStore };
    },

    // component data
    data() {
        return {
            last_price: 0,
            last_price_class: "",
            last_price_icon: "",
            day_change: 0,
            day_change_class: "",
            day_change_icon: "",
            day_volume_currency: "",
            day_high: 0,
            day_low: 0,
            day_volume_pair: 0,
        };
    },

    // on component created

    created() {},
    // on component mounted
    mounted() {
        this.loopTicker();
    },

    // on component destroyed
    unmounted() {},
    // custom methods
    methods: {
        priceFormatter(p, f1 = 8, f2 = 2, d = ",") {
            if (!p) {
                return 0;
            }
            p =
                parseInt(p) !== 0
                    ? parseFloat(p).toFixed(f2)
                    : parseFloat(p).toFixed(f1);
            p =
                parseInt(p) !== 0
                    ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, d)
                    : p;
            return p;
        },
        async updateTicker(tick) {
            if (!this.last_price || tick["last"] > this.last_price) {
                this.last_price_class = "text-success";
                // this.last_price_icon = "bi-arrow-up text-success";
            } else if (tick["last"] < this.last_price) {
                this.last_price_class = "text-danger";
                // this.last_price_icon = "bi-arrow-down text-danger";
            }
            this.last_price = this.priceFormatter(tick["last"]);

            if (this.provide != "coinbasepro") {
                if (!this.day_change || tick["percentage"] > this.day_change) {
                    this.day_change_class = "text-success";
                    this.day_changeday_change_icon = "bi-arrow-up text-success";
                } else if (tick["percentage"] < this.day_change) {
                    this.day_change_class = "text-danger";
                    this.day_changeday_change_icon =
                        "bi-arrow-down text-danger";
                }
                this.day_change = tick["percentage"];

                this.day_volume_currency = this.priceFormatter(
                    tick["quoteVolume"],
                    2
                );
            }

            this.day_high = this.formatPrice(tick["high"]);
            this.day_low = this.formatPrice(tick["low"]);
            this.day_volume_pair = this.priceFormatter(tick["baseVolume"], 2);
        },
        async loopTicker() {
            if (this.marketStore.exchange.has["watchTicker"]) {
                while (
                    window.location.href.indexOf(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    ) > -1
                ) {
                    try {
                        const data =
                            await this.marketStore.exchange.watchTicker(
                                this.$route.params.symbol +
                                    "/" +
                                    this.$route.params.currency
                            );
                        this.updateTicker(data);
                    } catch (e) {
                        break;
                    }
                }
            }
        },

        formatPrice(price) {
            return ccxt.decimalToPrecision(
                price,
                ccxt.ROUND,
                9,
                ccxt.SIGNIFICANT_DIGITS,
                ccxt.PAD_WITH_ZERO
            );
        },
    },
};
</script>
