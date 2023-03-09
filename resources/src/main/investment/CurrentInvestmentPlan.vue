<template>
    <div class="rounded-md bg-white p-4 shadow-md">
        <div class="mb-4 text-lg font-bold">Your Current Investment Plan</div>
        <div class="text-gray-700">
            <div v-if="currentPlan">
                <div>
                    <span class="font-bold">Plan:</span>
                    {{ currentPlan.name }}
                </div>
                <div>
                    <span class="font-bold">Investment Amount:</span>
                    {{ currentPlan.pivot.amount }}
                </div>
                <div>
                    <span class="font-bold">Start Date:</span>
                    {{ currentPlan.pivot.start_date }}
                </div>
                <div>
                    <span class="font-bold">End Date:</span>
                    {{ currentPlan.pivot.end_date }}
                </div>
                <div class="mt-4">
                    <span class="font-bold">Progress:</span>
                    <div class="relative pt-1">
                        <div
                            class="flex h-2 overflow-hidden rounded bg-gray-300 text-xs"
                        >
                            <div
                                :style="{ width: progressPercentage }"
                                class="flex flex-col justify-center whitespace-nowrap bg-blue-500 text-center text-white shadow-none"
                            ></div>
                        </div>
                        <div
                            class="mt-1 flex justify-between text-sm font-medium text-gray-500"
                        >
                            <div>{{ currentPlan.pivot.start_date }}</div>
                            <div>{{ currentPlan.pivot.end_date }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>You are not currently invested in any plans.</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentPlan: {
            type: Object,
            default: null,
        },
    },
    computed: {
        progressPercentage() {
            const start = new Date(this.currentPlan.pivot.start_date).getTime();
            const end = new Date(this.currentPlan.pivot.end_date).getTime();
            const now = new Date().getTime();
            const percentage = ((now - start) / (end - start)) * 100;
            return `${percentage}%`;
        },
    },
};
</script>
