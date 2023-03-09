<template>
    <div class="flex flex-col lg:flex-row lg:space-x-8">
        <!-- Investment Overview -->
        <InvestmentOverview
            :total-invested="totalInvested"
            :total-profit="totalProfit"
            :today-profit="todayProfit"
        />

        <!-- Investment Plans Component -->
        <div class="mt-5 w-full lg:w-3/4">
            <!-- Investment Plans -->
            <h2 class="text-xl font-semibold">Investment Plans</h2>

            <div>
                <div
                    class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div v-if="isLoading">
                        <div class="card animate-pulse">
                            <div class="card-body">
                                <div
                                    class="skeleton mb-2 h-4 w-3/4 rounded bg-gray-400"
                                ></div>
                                <div
                                    class="skeleton mb-2 h-4 w-1/2 rounded bg-gray-400"
                                ></div>
                                <div
                                    class="skeleton mb-2 h-4 w-3/4 rounded bg-gray-400"
                                ></div>
                                <div
                                    class="skeleton h-4 w-1/3 rounded bg-gray-400"
                                ></div>
                            </div>
                            <div class="card-footer">
                                <div
                                    class="skeleton h-4 w-1/3 rounded bg-gray-400"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="plans.length === 0">
                        <div
                            class="rounded-md border border-gray-300 p-4 text-gray-500"
                        >
                            <p class="text-center">
                                No plans available at this time. Please check
                                back later.
                            </p>
                        </div>
                    </div>
                    <InvestmentPlan
                        v-for="(plan, index) in plans"
                        v-else
                        :key="index"
                        :plan="plan"
                        @show-investment-modal="startInvestment(plan)"
                    />
                </div>
            </div>
        </div>

        <!-- User's Current Investment Plan -->
        <!-- <div class="w-full lg:w-1/4">
            <CurrentInvestmentPlan :current-plan="currentPlan" />
        </div> -->
    </div>
</template>

<script>
import InvestmentPlan from "./InvestmentPlan.vue";
import InvestmentOverview from "./InvestmentOverview.vue";
// import CurrentInvestmentPlan from "./CurrentInvestmentPlan.vue";

export default {
    components: {
        InvestmentPlan,
        InvestmentOverview,
        // CurrentInvestmentPlan,
    },
    props: {
        plans: {
            type: Array,
            required: true,
        },
        totalInvested: {
            type: Number,
            required: true,
        },
        totalProfit: {
            type: Number,
            required: true,
        },
        todayProfit: {
            type: Number,
            required: true,
        },
    },

    emits: ["start-investment"],
    data() {
        return {
            isLoading: true,
        };
    },
    watch: {
        plans(newPlans) {
            if (newPlans && newPlans.length > 0) {
                this.isLoading = false;
            } else {
                this.isLoading = true;
            }
        },
    },
    methods: {
        startInvestment(plan) {
            this.$emit("start-investment", plan);
        },
    },
};
</script>
