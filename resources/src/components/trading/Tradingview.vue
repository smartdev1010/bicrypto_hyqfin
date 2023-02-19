<template>
    <div style="height: 100%" id="tradingview"></div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";

export default {
    props: ["provide"],

    // component list
    components: {},

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
        };
    },

    // custom methods
    methods: {},

    // on component created
    created() {},

    // on component mounted
    mounted() {
        loadScript("https://s3.tradingview.com/tv.js")
            .then(() => {
                new TradingView.widget({
                    autosize: true,
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
            })
            .catch(() => {
                // Failed to fetch script
            });
    },

    // on component destroyed
    destroyed() {},
};
</script>
