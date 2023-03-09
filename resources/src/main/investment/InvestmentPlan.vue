<template>
    <div class="card">
        <div class="card-header flex justify-between">
            <h3 class="text-lg font-semibold">{{ plan.name }}</h3>
            <div v-if="plan.recommanded == 1" class="badge bg-success">
                Recommanded
            </div>
        </div>
        <div class="card-body">
            <p class="">{{ plan.description }}</p>
            <div class="mt-4 flex justify-between">
                <div class="flex items-center">
                    <span class="text-dark text-lg font-semibold">$</span>
                    <span class="text-dark text-3xl font-bold">{{
                        plan.min_amount
                    }}</span>
                    <span class="text-lg font-semibold"> - $</span>
                    <span class="text-3xl font-bold">{{
                        plan.max_amount
                    }}</span>
                </div>
                <div class="flex items-center">
                    <span class="mr-2">Duration:</span>
                    <span class="text-dark font-bold"
                        >{{ plan.duration_in_days }} days</span
                    >
                </div>
            </div>
            <div class="mt-4 flex justify-between">
                <div class="flex items-center">
                    <span class="mr-2">Interest Rate:</span>
                    <span class="text-dark font-bold"
                        >{{ plan.interest_rate }}%</span
                    >
                </div>
                <div class="flex items-center">
                    <span class="mr-2">Total Investors:</span>
                    <span class="text-dark font-bold">{{
                        plan.total_investors
                    }}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button
                type="button"
                class="w-full rounded bg-blue-500 py-2 px-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-none focus:outline-none focus:ring"
                @click="showInvestmentModal(plan)"
            >
                Invest Now
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        plan: Object,
        recommended: Boolean,
    },
    emits: ["show-investment-modal"],
    methods: {
        showInvestmentModal(plan) {
            this.$emit("show-investment-modal", plan);
        },
    },
};
</script>

<style scoped>
.bg-recommended {
    position: absolute;
    top: 0;
    right: 0;
    background-image: url("path-to-star-image");
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
}
</style>
