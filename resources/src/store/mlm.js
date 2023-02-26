import { defineStore } from "pinia";

export const useMlmStore = defineStore("mlm", {
    state: () => ({
        ref_by: null,
        mlm: null,
        mlmB: null,
        bvWithdrawable: null,
        daily_bv: null,
        bvLogs: null,
        planA: null,
        planB: null,
        plan0: null,
        loading: false,
        bv_total: null,
        directs: null,
        hash: null,
        wallet_address: null,
        walCur: null,
        tokens: null,
        canDirect: false,
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/network").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.ref_by = response.ref_by),
                    (this.mlm = response.mlm),
                    (this.mlmB = response.mlmB),
                    (this.bvWithdrawable = response.bvWithdrawable),
                    (this.daily_bv = response.daily_bv),
                    (this.bvLogs = response.bvLogs),
                    (this.bv_total = response.bv_total),
                    (this.directs = response.directs),
                    (this.planA = response.planA),
                    (this.planB = response.planB),
                    (this.plan0 = response.plan0),
                    (this.tokens = response.tokens);
                if (
                    this.tokens[plat.mlm.membership_deposit_currency] !==
                    undefined
                ) {
                    this.canDirect = true;
                }
            });
        },
        async updateReport() {
            await axios.post("/user/mlm/updateReport").then((response) => {
                console.log("updateReport");
            });
        },
        async fetchWallet(coin, chain) {
            await axios
                .post("/user/fetch/eco/wallet", {
                    type: "main",
                    symbol: coin,
                    chain: chain,
                })
                .then((response) => {
                    this.walCur = response.balance;
                })
                .catch((err) => {
                    this.fetchWallet(coin, chain);
                });
        },
        async createWallet(coin, chain) {
            this.loading = true;
            await axios
                .post("/user/eco/wallet/create", {
                    chain: chain,
                    network: chain,
                    symbol: coin,
                    postfix: "",
                    type: "main",
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetchWallet(coin, chain);
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        async deposit(type, amount) {
            (this.loading = true),
                await axios
                    .post("/user/mlm/deposit", {
                        hash: this.hash,
                        amount: amount,
                        type: type,
                        symbol: plat.mlm.membership_deposit_currency,
                        chain: plat.mlm.membership_deposit_currency_network,
                        balance: this.walCur,
                    })
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetch();
                        if (ext.eco == 1) {
                            this.fetchWallet(
                                plat.mlm.membership_deposit_currency,
                                plat.mlm.membership_deposit_currency_network
                            );
                        }
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.fetch();
                    });
        },
        async membership_withdraw() {
            (this.loading = true),
                await axios
                    .post("/user/mlm/withdraw", {
                        wallet_address: this.wallet_address,
                    })
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetch();
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.fetch();
                    });
        },
        async Withdraw() {
            (this.loading = true),
                await axios
                    .post("/user/mlm/withdraw")
                    .then((response) => {
                        $toast[response.type](response.message);
                        this.fetch();
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.fetch();
                    });
        },
    },
    persist: true,
});
