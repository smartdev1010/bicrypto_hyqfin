<template>
    <div class="">
        <div
            class="d-flex d-sm-none justify-content-between align-items-center text-2"
        >
            <div class="d-flex flex-column">
                <div class="text-muted">
                    {{ $t("Last Price") }}:
                    <span class="last_price">------</span
                    ><i class="last_price_icon bi"></i>
                </div>
                <div class="text-muted">
                    {{ $t("24h Change") }}:
                    <span class="day_change">------</span
                    ><i class="day_change_icon bi"></i>
                </div>
            </div>
            <div v-if="provider != 'coinbasepro'" class="d-flex flex-column">
                <div class="text-muted d-none d-md-block">
                    {{ this.$route.params.symbol }} {{ $t("Volume") }}:
                    <span class="text-dark day_volume_pair">------</span>
                </div>
                <div class="text-muted d-none d-md-block">
                    {{ this.$route.params.currency }} {{ $t("Volume") }}:
                    <span class="text-dark day_volume_currency">------</span>
                </div>
            </div>
            <div v-if="provider != 'coinbasepro'" class="d-flex flex-column">
                <div class="text-muted">
                    {{ $t("24h High") }}:
                    <span class="text-dark day_high">------</span>
                </div>
                <div class="text-muted">
                    {{ $t("24h Low") }}:
                    <span class="text-dark day_low">------</span>
                </div>
            </div>
        </div>
        <div
            class="d-none d-sm-flex justify-content-between align-items-center mx-1 text-2 mt-1"
        >
            <div class="d-flex align-items-center">
                <img
                    class="avatar-content"
                    width="36px"
                    :src="
                        this.$route.params.symbol
                            ? '/assets/images/cryptoCurrency/' +
                              this.$route.params.symbol.toLowerCase() +
                              '.png'
                            : '/market/notification.png'
                    "
                />
                <i class="bi bi-chevron-right"></i>
                <img
                    class="avatar-content"
                    width="36px"
                    :src="
                        this.$route.params.currency
                            ? '/assets/images/cryptoCurrency/' +
                              this.$route.params.currency.toLowerCase() +
                              '.png'
                            : '/market/notification.png'
                    "
                />
            </div>
            <div v-if="provider != 'coinbasepro'" class="d-flex flex-column">
                <span class="text-muted">{{ $t("24h change") }}</span>
                <span class="day_change fs-6">-------</span>
            </div>
            <div class="d-flex flex-column">
                <span class="text-muted">{{ $t("24h Price Range") }}</span>
                <div class="text-muted">
                    {{ $t("High") }}:
                    <span class="text-dark day_high">-------</span>
                </div>
                <div class="text-muted">
                    {{ $t("Low") }}:
                    <span class="text-dark day_low">-------</span>
                </div>
            </div>
            <div class="d-flex flex-column">
                <span class="text-muted">{{ $t("24h Volume") }}</span>
                <span class="text-muted"
                    >{{ this.$route.params.symbol }}:
                    <span class="text-dark day_volume_pair">-------</span></span
                >
                <span v-if="provider != 'coinbasepro'" class="text-muted"
                    >{{ this.$route.params.currency }}:
                    <span class="text-dark day_volume_currency"
                        >-------</span
                    ></span
                >
            </div>
        </div>
    </div>
</template>

<script>
// component
export default {
    props: ["provider"],

    // component list
    components: {},

    // component data
    data() {
        return {
            last_price: "",
            day_change: "",
        };
    },

    watch: {
        $route(to, from) {
            this.loopTicker();
        },
    },
    // custom methods
    methods: {
        async updateTicker(tick) {
            this.tickElements = $(".last_price");
            this.tickIcons = $(".last_price-icon");
            const tickElement = this.tickElements;
            const tickIcon = this.tickIcons;
            if (!this.last_price || tick["last"] > this.last_price) {
                tickElement.text(tick["last"]);
                tickElement.toggleClass("text-success");
                tickIcon.toggleClass("bi-arrow-up text-success");
            } else if (tick["last"] < this.last_price) {
                tickElement.text(tick["last"]);
                tickElement.toggleClass("text-danger");
                tickIcon.toggleClass("bi-arrow-down text-danger");
            }
            this.last_price = tick["last"];

            if (this.provide != "coinbasepro") {
                this.percentageElements = $(".day_change");
                this.percentageIcons = $(".day_change-icon");
                const percentageElement = this.percentageElements;
                const percentageIcon = this.percentageIcons;
                if (!this.day_change || tick["percentage"] > this.day_change) {
                    percentageElement.text(tick["percentage"] + "%");
                    percentageElement.toggleClass("text-success");
                    percentageIcon.toggleClass("bi-arrow-up text-success");
                } else if (tick["percentage"] < this.day_change) {
                    percentageElement.text(tick["percentage"] + "%");
                    percentageElement.toggleClass("text-danger");
                    percentageIcon.toggleClass("bi-arrow-down text-danger");
                }
                this.day_change = tick["percentage"];
                this.day_volume_currencys = $(".day_volume_currency");
                const day_volume_currency = this.day_volume_currencys;
                day_volume_currency.text(
                    new Intl.NumberFormat().format(tick["quoteVolume"])
                );
            }

            this.day_highs = $(".day_high");
            const day_high = this.day_highs;
            day_high.text(this.formatPrice(tick["high"]));

            this.day_lows = $(".day_low");
            const day_low = this.day_lows;
            day_low.text(this.formatPrice(tick["low"]));

            this.day_volume_pairs = $(".day_volume_pair");
            const day_volume_pair = this.day_volume_pairs;
            day_volume_pair.text(
                new Intl.NumberFormat().format(tick["baseVolume"])
            );
        },

        contains(target, pattern) {
            var value = 0;
            pattern.forEach(function (word) {
                value = value + target.includes(word);
            });
            return value === 1;
        },
        async loopTicker() {
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "-" +
                        this.$route.params.currency
                ) > -1
            ) {
                if (document.hidden) {
                    await ccxt.sleep(1000);
                    continue;
                }
                try {
                    const data = await exchange.watchTicker(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    );
                    this.updateTicker(data);
                } catch (e) {
                    break;
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

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.loopTicker();
    },

    // on component destroyed
    destroyed() {},
};
</script>
