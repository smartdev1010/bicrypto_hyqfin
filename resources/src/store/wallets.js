import { defineStore } from "pinia";

export const useWalletsStore = defineStore("wallet", {
    state: () => ({
        wallets: [],
        currencies: [],
        main_wallets: [],
        main_currencies: [],
        SelectedWallet: null,
        api: 0,
        loading: false,
        isShowModal: {
            newWallet: false,
            newMainWallet: false,
        },
        loading: false,
        timer: [],
        mianLogs: [],
        wallet: null,
        platforms: null,
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/wallets").then((response) => {
                (this.wallets = response.wallets),
                    (this.api = response.api),
                    (this.currencies = response.currencies);
            });
        },
        async fetch_wallet(id) {
            await axios.post("/user/fetch/wallet").then((response) => {
                (this.wallet = response.wallet),
                    (this.platforms = response.platforms);
            });
        },
        async walletUpdate(data) {
            await axios
                .post("/user/fetch/wallet/walletUpdate", data)
                .then((response) => {
                    this.fetch();
                    return true;
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                    return false;
                });
        },
        async fetch_main() {
            await axios.post("/user/fetch/eco/wallets").then((response) => {
                this.main_currencies = response.currencies;
                if (response.net == "mainnet") {
                    response.tokens.forEach((element) => {
                        this.main_currencies.push(element);
                    });
                }
                this.main_wallets = response.wallets;
            });
        },
        closeModal(type) {
            if (type == "newWallet") {
                this.isShowModal.newWallet = false;
            } else if (type == "newMainWallet") {
                this.isShowModal.newMainWallet = false;
            }
        },
        showModal(type) {
            if (type == "newWallet") {
                this.isShowModal.newWallet = true;
            } else if (type == "newMainWallet") {
                this.isShowModal.newMainWallet = true;
            }
        },
        async create(symbol) {
            (this.loading = true),
                axios
                    .post("/user/wallet/j/create", {
                        type: this.type,
                        symbol: symbol,
                    })
                    .then((response) => {
                        this.fetch();
                        $toast[response.type](response.message);
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("newWallet");
                    });
        },
        async create_main(data) {
            (this.loading = true),
                axios
                    .post("/user/eco/wallet/create", {
                        chain: data.chain,
                        symbol: data.symbol,
                        postfix: data.postfix,
                        network: data.network,
                    })
                    .then((response) => {
                        this.fetch_main();
                        for (let i = 0; i < response.length; i++) {
                            $toast[response[i].type](response[i].message);
                        }
                    })
                    .catch((error) => {
                        $toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("newMainWallet");
                    });
        },
        fetchMainWalletLogs(symbol, address) {
            axios
                .post(
                    "/user/fetch/eco/wallet/main/logs/" + symbol + "/" + address
                )
                .then((response) => {
                    this.mianLogs = response.logs;
                });
        },
    },
    persist: true,
});
