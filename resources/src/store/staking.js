import { defineStore } from "pinia";
export const useStakingStore = defineStore("staking", {
    state: () => ({
        coins: [],
        logs: [],
        coinlogs: [],
        assets: null,
        last_profit: null,
        total_profit: null,
        wallet: null,
        coin: null,
        isShowModal: {
            stake: false,
            cancel: false,
            claim: false,
        },
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/staking").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.coins = response.coins),
                    (this.logs = response.logs),
                    (this.coinlogs = response.coinlogs),
                    (this.assets = response.assets),
                    (this.last_profit = response.last_profit),
                    (this.total_profit = response.total_profit),
                    (this.wallet = response.wallet);
            });
        },
        async setCoin(row, type) {
            this.coin = row;
            this.showModal(type);
        },
        closeModal(type) {
            if (type == "stake") {
                this.isShowModal.stake = false;
            } else if (type == "cancel") {
                this.isShowModal.cancel = false;
            } else if (type == "claim") {
                this.isShowModal.claim = false;
            }
        },
        showModal(type) {
            if (type == "stake") {
                this.isShowModal.stake = true;
            } else if (type == "cancel") {
                this.isShowModal.cancel = true;
            } else if (type == "claim") {
                this.isShowModal.claim = true;
            }
        },
        async Stake(amount) {
            await axios
                .post("/user/staking/store", {
                    symbol: this.coin.symbol,
                    coin_id: this.coin.id,
                    amount: amount,
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.closeModal("stake");
                });
        },
        async CancelStake() {
            await axios
                .post("/user/staking/cancel", {
                    symbol: this.coin.symbol,
                    coin_id: this.coin.id,
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.closeModal("cancel");
                });
        },
        async ClaimStake() {
            await axios
                .post("/user/staking/claim", {
                    symbol: this.coin.symbol,
                    coin_id: this.coin.id,
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.closeModal("claim");
                });
        },
    },
    persist: true,
});
