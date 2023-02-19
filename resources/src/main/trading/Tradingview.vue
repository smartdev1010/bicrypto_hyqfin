<template>
    <div id="tradingview"></div>
</template>

<script>
export default {
    // component list
    components: {},
    props: ["provide"],

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
        };
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        new TradingView.widget({
            width: "100%",
            height: "100%",
            symbol: this.provide + ":" + this.symbol + this.currency,
            interval: "H",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_legend: true,
            save_image: false,
            container_id: "tradingview",
        });
    },

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {},
};
</script>
