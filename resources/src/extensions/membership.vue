<template>
    <div>
        <div class="align-center flex justify-center">
            <div class="card relative">
                <div class="card-body align-center flex justify-center">
                    <div class="text-center">
                        <h1>
                            <span style="font-size: 30px; margin: 20px"
                                >{{ $t("Welcome") }} 🎉
                                {{
                                    userStore.user
                                        ? userStore.user.firstname
                                        : ""
                                }}
                            </span>
                            <div style="font-size: 20px; margin-top: 40px">
                                {{
                                    $t(
                                        "You need to pay membership fee for using bots, investment, staking parts.\n If you want to use them, please press button."
                                    )
                                }}
                            </div>
                        </h1>
                        <button class="mybtn">
                            <toMoney
                                :num="
                                    this.forexStore.wallets.filter(
                                        (wallet) =>
                                            wallet.user_id ==
                                                this.userStore.user.id &&
                                            wallet.symbol == 'USDT'
                                    )[0] == undefined
                                        ? 0
                                        : this.forexStore.wallets.filter(
                                              (wallet) =>
                                                  wallet.user_id ==
                                                      this.userStore.user.id &&
                                                  wallet.symbol == 'USDT'
                                          )[0].balance
                                "
                                decimals="2"
                            />
                            {{ " USDT" }}
                        </button>
                        <button
                            class="mybtn"
                            @click="this.func()"
                            v-if="
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                ).length == 0
                            "
                        >
                            {{ $t("Start Membership") }}
                        </button>
                        <div style="font-size: 20px">
                            {{
                                "This action may cost " +
                                this.userStore.membership_fee +
                                " USDT"
                            }}
                        </div>
                        <div
                            v-if="this.error != ''"
                            class="bg bg-danger m-1 rounded-lg"
                        >
                            {{ error }}
                        </div>
                        <div
                            v-if="
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                ).length > 0 &&
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                )[0].status == 1
                            "
                            class="bg bg-warning m-1 rounded-lg"
                        >
                            {{ "You've already entered here." }}
                        </div>
                        <div
                            v-if="
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                ).length > 0 &&
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                )[0].status == 0
                            "
                            class="bg bg-danger rounded-lg"
                        >
                            {{ "Please wait for the approval." }}
                        </div>
                        <div
                            v-else-if="
                                this.membershipStore.memberships.filter(
                                    (membership) =>
                                        membership.user_id ==
                                        this.userStore.user.id
                                ).length > 0
                            "
                            class="bg bg-danger rounded-lg"
                        >
                            {{
                                "Your end date is " +
                                new Date(
                                    new Date(
                                        this.membershipStore.memberships.filter(
                                            (membership) =>
                                                membership.user_id ==
                                                this.userStore.user.id
                                        )[0].start_at
                                    ).getTime() +
                                        365 * 24 * 60 * 60 * 1000
                                )
                            }}
                        </div>
                    </div>
                    <img
                        src="/assets/images/illustrations/bot.svg"
                        class="w-48"
                        alt="Medal Pic"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import toMoney from "../partials/toMoney.vue";
import Filter from "../partials/table/Filter.vue";
import Col from "../partials/table/Col.vue";
import { useBotStore } from "../store/bot";
import { useUserStore } from "../store/user";
import { useWalletsStore } from "../store/wallets";
import { useMembershipStore } from "../store/membership";
import { useForexStore } from "../store/forex";

export default {
    components: { toMoney, Filter, Col },
    setup() {
        const userStore = useUserStore();
        const botStore = useBotStore();
        const membershipStore = useMembershipStore();
        const forexStore = useForexStore();
        const walletsStore = useWalletsStore();
        return {
            userStore,
            botStore,
            membershipStore,
            forexStore,
            walletsStore,
        };
    },
    data() {
        return {
            gnl: gnl,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
                pair: { value: "", keys: ["pair"] },
            },
            currentPage: 1,
            totalPages: 0,
            error: "",
        };
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},
    updated() {},

    // custom methods
    methods: {
        async func() {
            if (confirm("Are you sure to pay for this?")) {
                if (
                    this.forexStore.wallets.filter(
                        (wallet) =>
                            wallet.user_id == this.userStore.user.id &&
                            wallet.symbol == "USDT"
                    )[0] == undefined
                )
                    this.error = "You don't have USDT wallet!";
                else if (
                    this.forexStore.wallets.filter(
                        (wallet) =>
                            wallet.user_id == this.userStore.user.id &&
                            wallet.symbol == "USDT"
                    )[0].balance >= this.userStore.membership_fee
                ) {
                    this.membershipStore.add();
                    await this.walletsStore.walletUpdate({
                        id: -this.forexStore.wallets.filter(
                            (wallet) =>
                                wallet.user_id == this.userStore.user.id &&
                                wallet.symbol == "USDT"
                        )[0].id,
                        amount: -this.userStore.membership_fee,
                    });
                } else {
                    this.error = "You don't have enough money!";
                }
            }
        },
        async fetchData() {
            if (this.botStore.logs.length == 0) {
                await this.botStore.fetch();
            }
            await this.membershipStore.fetch();
            await this.forexStore.fetch();
            await this.walletsStore.fetch();
        },
    },
};
</script>
<style scoped>
.mybtn {
    font-size: 20px;
    padding: 15px 40px;
    background: transparent;
    border: 1px solid lightblue;
    margin: 40px;
    border-radius: 10px;
    color: lightblue;
    transition: all ease-in-out 0.2s;
}
.mybtn:hover {
    background-color: lightblue;
    color: white;
}
</style>
