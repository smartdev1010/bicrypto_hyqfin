import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        kyc: null,
        popups: null,
        user: null,
        currency: null,
        toggledMenu: null,
        page: null,
        users: [],
    }),

    actions: {
        async fetch() {
            await axios.post("/user/fetch/data").then((response) => {
                (this.user = response.data.user),
                    (this.users = response.data.users),
                    (this.kyc = response.data.kyc),
                    (this.popups = response.data.popups),
                    (this.currency = response.data.currency);
            });
        },
        async AddPracticeBalance() {
            await axios
                .post("/user/binary/add/practice/balance")
                .then((response) => {
                    $toast[response.type](response.message);
                })
                .catch((error) => {
                    $toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.user.practice_balance = 10000;
                });
        },
        toggleMenu(menu) {
            if (this.toggledMenu != null) {
                if (this.toggledMenu.name == menu.name) {
                    this.toggledMenu.showSub = !this.toggledMenu.showSub;
                } else {
                    this.toggledMenu = menu;
                    this.toggledMenu.showSub = true;
                }
            } else {
                this.toggledMenu = menu;
                this.toggledMenu.showSub = true;
            }
        },
    },
    persist: true,
});
