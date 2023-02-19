import { defineStore } from "pinia";

export const useIcoStore = defineStore("ico", {
    state: () => ({
        icos: [],
        meta: null,
        wallets: null,
        ico_logs: null,
        ico_balance: null,
        ico: null,
        wallet_symbol: null,
        balance: null,
        rec_wallet: "",
        loading: false,
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/ico").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.icos = response.icos),
                    (this.meta = response.meta),
                    (this.wallets = response.wallets),
                    (this.ico_logs = response.ico_logs),
                    (this.ico_balance = response.ico_balance);
            });
        },
        async fetch_ico() {
            await axios
                .post(
                    "/user/fetch/ico/" +
                        window.location.href.substring(
                            window.location.href.lastIndexOf("/") + 1
                        )
                )
                .then((response) => {
                    (this.ico = response.ico),
                        (this.rec_wallet = response.rec_wallet),
                        (this.wallet_symbol = response.ico.network_symbol),
                        (this.balance = response.balance);
                });
        },
        async purchase(amount) {
            (this.loading = true),
                await axios
                    .post("/user/store/ico", {
                        amount: amount,
                        cost: amount / this.ico.rate,
                        ico_symbol: this.ico.symbol,
                        ico_id: this.ico.id,
                        symbol: this.ico.network_symbol,
                        rec_wallet: this.rec_wallet,
                    })
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetch_ico();
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        async fetchWallet() {
            await axios
                .post("/user/fetch/wallet", {
                    symbol: this.wallet_symbol,
                    type: "funding",
                })
                .then((response) => {
                    this.balance = response.balance;
                });
        },
        async createWallet() {
            (this.loading = true),
                await axios
                    .post("/user/wallet/j/create", {
                        symbol: this.wallet_symbol,
                        type: "funding",
                    })
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetchWallet();
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        async change_rec_wallet() {
            (this.loading = true),
                await axios
                    .post("/user/store/ico/rec_wallet", {
                        rec_wallet: this.rec_wallet,
                        network_symbol: this.ico.network_symbol,
                    })
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetchWallet();
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
    },
    persist: true,
});
