import { defineStore } from "pinia";
export const useMembershipStore = defineStore("membership", {
    state: () => ({
        memberships: [],
    }),

    actions: {
        async fetch() {
            await axios.post("/admin/membership/list").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                this.memberships = response.memberships;
            });
        },
        async add() {
            await axios.post("/admin/membership/add").then((response) => {
                if (response.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                this.memberships = response.memberships;
            });
        },
    },
});
