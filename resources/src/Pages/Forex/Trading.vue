<template>
    <iframe
        :src="
            'https://trade.mql5.com/trade?servers=' +
            account.broker +
            '&amp;trade_server=' +
            account.broker +
            '&demo_all_servers&=1&amp;startup_mode=open_trade&amp;lang=' +
            account.language +
            '&amp;save_password=on&login=' +
            account.number
        "
        allowfullscreen="allowfullscreen"
        :style="
            'height:' +
            windowHeight +
            'px;' +
            'width:' +
            windowWidth +
            'px;' +
            'margin:-27px'
        "
    ></iframe>
</template>

<script>
export default {
    props: [],
    // component list
    components: {},

    // component data
    data() {
        return {
            account: {},
            windowHeight: window.innerHeight * 0.88,
            windowWidth: window.innerWidth * 0.955,
            txt: "",
        };
    },

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchData() {
            this.$http.post("/user/fetch/forex").then((response) => {
                this.account = response.data.account;
            });
        },
        onResize() {
            this.windowHeight = window.innerHeight * 0.88;
            this.windowWidth = window.innerWidth * 0.955;
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
    // on component destroyed
    destroyed() {},
};
</script>
