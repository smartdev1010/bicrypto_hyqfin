import { defineStore } from "pinia";
export const useMarketStore = defineStore("market", {
    state: () => ({
        markets: [],
        favs: [],
        ecos: [],
        bestAsk: null,
        bestBid: null,
        exchange: null,
        widget: null,
        market: null,
        walSym: null,
        walCur: null,
        wallet_type: null,
    }),

    actions: {
        async fetch_markets() {
            const response = await axios.get("/data/markets/markets.json");
            this.markets = response[provider];
        },
        async fetch_favs() {
            await axios.post("/user/watchlist/data").then((response) => {
                this.favs = response.favs.sort((a, b) =>
                    a.currency.localeCompare(b.currency)
                );
            });
        },
        async fetch_ecos() {
            await axios.get("/user/eco/data").then((response) => {
                this.ecos = response.ecos;
            });
        },
        async fetchWallet(coin, type) {
            await axios
                .post("/user/fetch/wallet", {
                    type: this.wallet_type,
                    symbol: coin,
                })
                .then((response) => {
                    if (type == 1) {
                        this.walSym = response.balance;
                    } else if (type == 2) {
                        this.walCur = response.balance;
                    }
                });
        },
        async createWallet(coin, type) {
            this.loading = true;
            await axios
                .post("/user/wallet/j/create", {
                    type: this.wallet_type,
                    symbol: coin,
                })
                .then((response) => {
                    this.fetchWallet(coin, type);
                    $toast[response.type](response.message);
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    persist: true,
});
