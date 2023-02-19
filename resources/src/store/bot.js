import { defineStore } from "pinia";

export const useBotStore = defineStore("bot", {
    state: () => ({
        logs: [],
        bot_contracts_count_running: null,
        bot_contracts_count_completed: null,
        bot_contracts_count_amount: null,
        profit: null,
        isShowModal: false,
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/bot").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.logs = response.bot_contracts),
                    (this.bot_contracts_count_running =
                        response.bot_contracts_count_running),
                    (this.bot_contracts_count_completed =
                        response.bot_contracts_count_completed),
                    (this.bot_contracts_count_amount =
                        response.bot_contracts_count_amount),
                    (this.profit = response.profit);
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
