import { defineStore } from "pinia";
export const useInvestmentStore = defineStore("investment", {
    state: () => ({
        account: [],
        investment: [],
        investment_logs: [],
        withdraw_logs: [],
        currentDate: null,
        loading: false,
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/investment").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.account = response.account),
                    (this.investment_logs = response.investment_logs),
                    (this.investment = response.investment),
                    (this.withdraw_logs = response.withdraw_logs);
            });
            this.currentDate = new Date();
        },
        async start(data) {
            console.log(data);
            if (data.amount < data.minimum) {
                $toast.error(
                    "You have to invest more than " +
                        parseInt(data.minimum) +
                        " USD"
                );
                return false;
            }
            if (data.amount > parseFloat(data.budget)) {
                $toast.error(
                    "Sorry, You don't have enough money in this wallet. Please select another wallet"
                );
                return false;
            }
            await axios
                .post("/user/fetch/investment/investment", data)
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                    return true;
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                    return false;
                });
            return true;
        },
        async updateProfit(profit, id) {
            await axios
                .post("/user/fetch/investment/investmentUpdate", {
                    profit,
                    id,
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                    return true;
                })
                .catch((error) => {
                    // $toast.error(error.response.data.message);
                    return false;
                });
        },
        async updateProfitedDate(currentDate, id) {
            await axios
                .post("/user/fetch/investment/investmentDateUpdate", {
                    currentDate,
                    id,
                })
                .then((response) => {
                    $toast[response.type](response.message);
                    this.fetch();
                    return true;
                })
                .catch((error) => {
                    // $toast.error(error.response.data.message);
                    return false;
                });
        },
    },
    persist: true,
});
