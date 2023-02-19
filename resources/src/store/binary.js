import { defineStore } from "pinia";

export const useBinaryStore = defineStore("binary", {
    state: () => ({
        funding_wallets: null,
        perc: null,
        trade: null,
        tradelogs: [],
        practicelogs: [],
        deposit: null,
        withdraw: null,
        transaction: null,
        tradePositive: 0,
        totaltrades: 0,
        practice_Positive: 0,
        practice_totaltrades: 0,
        trade: {
            chart: {
                type: "donut",
                height: 120,
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: true,
            },
            series: [],
            legend: {
                show: false,
            },
            comparedResult: [2, -3, 8],
            labels: ["Wins", "Draws", "Loses"],
            stroke: {
                width: 0,
            },
            colors: ["#22c55e", "#28c76f33", "#EA5455"],
            grid: {
                padding: {
                    right: -20,
                    bottom: -8,
                    left: -20,
                },
            },
            responsive: [
                {
                    breakpoint: 1325,
                    options: {
                        chart: {
                            height: 100,
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 120,
                        },
                    },
                },
                {
                    breakpoint: 1045,
                    options: {
                        chart: {
                            height: 100,
                        },
                    },
                },
                {
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 120,
                        },
                    },
                },
            ],
        },
        practice: {
            chart: {
                type: "donut",
                height: 120,
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: true,
            },
            series: [],
            legend: {
                show: false,
            },
            comparedResult: [2, -3, 8],
            labels: ["Wins", "Draws", "Loses"],
            stroke: {
                width: 0,
            },
            colors: ["#22c55e", "#28c76f33", "#EA5455"],
            grid: {
                padding: {
                    right: -20,
                    bottom: -8,
                    left: -20,
                },
            },
            responsive: [
                {
                    breakpoint: 1325,
                    options: {
                        chart: {
                            height: 100,
                        },
                    },
                },
                {
                    breakpoint: 1200,
                    options: {
                        chart: {
                            height: 120,
                        },
                    },
                },
                {
                    breakpoint: 1045,
                    options: {
                        chart: {
                            height: 100,
                        },
                    },
                },
                {
                    breakpoint: 992,
                    options: {
                        chart: {
                            height: 120,
                        },
                    },
                },
            ],
        },
        practice_contracts: [],
        practice_datas: [],
        trade_contracts: [],
        trade_datas: [],
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/binary/data").then((response) => {
                (this.funding_wallets = response.funding_wallets),
                    (this.perc = response.perc),
                    (this.trade = response.trade),
                    (this.tradelogs = response.tradelogs),
                    (this.practicelogs = response.practicelogs),
                    (this.deposit = response.deposit),
                    (this.withdraw = response.withdraw),
                    (this.transaction = response.transaction);
                (this.trade.series = [
                    response.trade.Win,
                    response.trade.Draw,
                    response.trade.Lose,
                ]),
                    (this.practice.series = [
                        response.trade.practice_Win,
                        response.trade.practice_Draw,
                        response.trade.practice_Lose,
                    ]),
                    (this.totaltrade =
                        (response.trade.Win ? response.trade.Win : 0) +
                        (response.trade.Lose ? response.trade.Lose : 0) +
                        (response.trade.Draw ? response.trade.Draw : 0)),
                    (this.tradePositive =
                        this.tradePositive === "undefined"
                            ? "0"
                            : response.trade.Win - response.trade.Lose),
                    (this.totaltrades =
                        this.totaltrades === "undefined"
                            ? "0"
                            : response.trade.Win +
                              response.trade.Lose +
                              response.trade.Draw),
                    (this.practice_totaltrades =
                        this.practice_totaltrades === "undefined"
                            ? "0"
                            : response.trade.practice_Win +
                              response.trade.practice_Lose +
                              response.trade.practice_Draw),
                    (this.practice_Positive =
                        this.practice_Positive === "undefined"
                            ? "0"
                            : response.trade.practice_Win -
                              response.trade.practice_Lose);
            });
        },
        async fetch_practice_contracts() {
            await axios
                .post("/user/fetch/binary/practice/contracts")
                .then((response) => {
                    (this.practice_contracts = response.contracts),
                        (this.practice_datas = response.datas);
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                });
        },
        async fetch_trade_contracts() {
            await axios
                .post("/user/fetch/binary/trade/contracts")
                .then((response) => {
                    (this.trade_contracts = response.contracts),
                        (this.trade_datas = response.datas);
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                });
        },
    },
    persist: true,
});
