<template>
    <Modal size="2xl" @close="$emit('close-modal')">
        <template #header>
            <div class="flex items-center text-lg">
                <h3 id="modal-headline" class="text-lg">
                    Invest in {{ plan.name }}
                </h3>
            </div>
        </template>
        <template #body>
            <div class="mb-5">
                <div v-if="wallet">
                    <label for="wallet_id">USDT Funding Wallet:</label>
                    <div class="flex items-center">
                        <span class="text-warning font-medium"
                            >{{ Number(wallet.balance).toFixed(2) }}
                            {{ wallet.symbol }}</span
                        >
                    </div>
                </div>
                <div v-else>
                    <button class="btn btn-primary" @click="CreateWallet()">
                        Create Wallet
                    </button>
                </div>
            </div>
            <div>
                <label>
                    Please enter the amount you wish to invest and click "<span
                        class="text-success font-medium"
                        >Invest Now</span
                    >"
                </label>
                <input
                    v-model.number="amount"
                    type="number"
                    :min="plan.min_amount"
                    :max="plan.max_amount"
                    step="1"
                    class="form-control"
                    placeholder="Enter investment amount"
                />
                <small
                    ><span class="text-warning font-medium">Min</span>:
                    {{ plan.min_amount }} /
                    <span class="text-warning font-medium">Max</span>:
                    {{ plan.max_amount }}</small
                >
            </div>
        </template>
        <template #footer>
            <div class="flex justify-end">
                <button
                    type="button"
                    class="btn btn-outline-success mr-3"
                    :disabled="loading || !wallet"
                    @click="invest()"
                >
                    Invest Now
                </button>
                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="$emit('close-modal')"
                >
                    Close
                </button>
            </div>
        </template>
    </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
import { useWalletsStore } from "../../store/wallets";
export default {
    name: "InvestmentModal",
    components: { Modal },
    props: {
        plan: {
            type: Object,
            required: true,
        },
        wallet: {
            type: Object,
            required: true,
        },
    },
    emits: ["investment-made", "close-modal", "wallet-created"],
    setup() {
        const walletsStore = useWalletsStore();
        return { walletsStore };
    },
    data() {
        return {
            amount: 0,
            loading: false,
            wallet_id: null,
        };
    },
    methods: {
        CreateWallet() {
            this.walletsStore.create("USDT", "funding");
            this.$emit("wallet-created");
        },
        invest() {
            if (this.amount > this.plan.max_amount) {
                return this.$toast.error(
                    `Amount cannot be greater than ${this.plan.max_amount}`
                );
            }
            if (this.amount < this.plan.min_amount) {
                return this.$toast.error(
                    `Amount cannot be less than ${this.plan.min_amount}`
                );
            }

            this.loading = true;

            axios
                .post("/user/investment/store", {
                    investment_plan_id: this.plan.id,
                    amount: this.amount,
                })
                .then((response) => {
                    this.$emit("investment-made");
                    this.$toast[response.type](response.message);
                })
                .catch((error) => {
                    this.$emit("close-modal");
                    this.$toast[error.response.data.type](
                        error.response.data.message
                    );
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>
