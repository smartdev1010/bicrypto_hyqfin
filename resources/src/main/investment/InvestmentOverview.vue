<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <div class="title-gradient">Total Invested</div>
                </div>
            </div>
            <div class="card-body">
                <div class="text-3xl font-bold">${{ totalInvested }}</div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <div class="title-gradient">Total Profit</div>
                </div>
            </div>
            <div class="card-body">
                <div class="text-3xl font-bold">${{ totalProfit }}</div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <div class="title-gradient">Today's Profit</div>
                </div>
            </div>
            <div class="card-body">
                <div class="text-3xl font-bold">${{ todayProfit }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
};
</script>

<style>
/* Add custom styling here */
</style>
