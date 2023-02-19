import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
    state: () => ({
        news: [],
    }),

    actions: {
        async fetch() {
            let response = await fetch(
                "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
            );
            if (response.ok) {
                let json = await response.json();
                this.news = json["Data"];
            } else {
                console.log("Fetch Error :-S", response.status);
            }
        },
    },
    persist: true,
});
