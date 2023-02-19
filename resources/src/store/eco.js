import { defineStore } from "pinia";

export const useEcoStore = defineStore("eco", {
    state: () => ({
        marketOrder: false,
        bestAsk: null,
        bestBid: null,
        market: [],
        provider: null,
        market_info: null,
    }),

    actions: {
        async fetch(symbol, currency) {
            await axios
                .post("/user/trade/" + symbol + "-" + currency)
                .then((response) => {
                    if (response.message == "Verify your identify first!") {
                        window.location.href = "/user/kyc";
                    }
                    (this.market = response.market),
                        (this.provider = response.provider),
                        (this.market_info = response.market_info);
                });
        },
        closeModal() {
            this.isShowModal = false;
        },
        showModal() {
            this.isShowModal = true;
        },
    },
    persist: true,
});
