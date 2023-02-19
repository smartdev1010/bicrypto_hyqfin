import { defineStore } from "pinia";

export const useLogStore = defineStore("log", {
    state: () => ({
        logs: {
            withdraw: [],
            deposit: [],
            transaction: [],
        },
    }),

    actions: {
        async fetch(type) {
            await axios
                .post("/user/fetch/" + type + "/history")
                .then((response) => {
                    this.logs[type] = response.logs;
                });
        },
    },
    persist: true,
});
