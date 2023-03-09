<template>
    <div class="space-y-5">
        <investment-plans
            :plans="plans"
            :total-invested="totalInvested"
            :total-profit="totalProfit"
            :today-profit="todayProfit"
            @start-investment="showInvestmentModal"
        />
        <investment-logs :logs="logs" @investment-cancel="fetchData" />
        <investment-modal
            v-if="showModal == true"
            :plan="selectedPlan"
            :wallet="wallet"
            @close-modal="closeInvestmentModal"
            @investment-made="completeInvestment"
            @wallet-created="fetchData"
        />
    </div>
</template>

<script>
import InvestmentPlans from "./investment/InvestmentPlans.vue";
import InvestmentLogs from "./investment/InvestmentLogs.vue";
import InvestmentModal from "./investment/InvestmentModal.vue";

export default {
    name: "Investment",
    components: { InvestmentPlans, InvestmentLogs, InvestmentModal },
    data() {
        return {
            pageTitle: "Investment Plans and Logs",
            plans: [],
            logs: [],
            wallet: [],
            showModal: false,
            selectedPlan: null,
            totalInvested: 0,
            totalProfit: 0,
            todayProfit: 0,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios
                .get("/user/investment")
                .then((response) => {
                    this.plans = response.plans;
                    this.logs = response.logs;
                    this.totalInvested = response.totalInvested;
                    this.totalProfit = response.totalProfit;
                    this.todayProfit = response.todayProfit;
                    this.wallet = response.wallet;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        showInvestmentModal(plan) {
            this.selectedPlan = plan;
            this.showModal = true;
        },
        closeInvestmentModal() {
            this.showModal = false;
        },
        completeInvestment() {
            this.fetchData();
            this.showModal = false;
        },
    },
};
</script>
