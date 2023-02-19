import { defineStore } from "pinia";

export const useP2pStore = defineStore("p2p", {
    state: () => ({
        currencies: null,
        ads: null,
        orders: null,
        type: "buy",
        currency: null,
    }),

    actions: {
        async fetch(type, currency) {
            await axios
                .post("/user/p2p/fetch/ads", {
                    type: type,
                    currency: currency,
                })
                .then((response) => {
                    (this.currencies = response.currencies),
                        (this.ads = response.ads);
                });
        },
        async fetch_orders() {
            await axios.get("/user/p2p/fetch/orders").then((response) => {
                this.orders = response.orders;
            });
        },
    },
    persist: true,
});
