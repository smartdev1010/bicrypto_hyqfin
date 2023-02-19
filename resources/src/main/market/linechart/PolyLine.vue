<template>
    <polyline
        class="polyline"
        fill="none"
        stroke="#f0f0f0"
        stroke-width="1"
        stroke-linecap="round"
        :points="chartPoints"
    />
</template>

<script>
export default {
    props: ["items"],
    computed: {
        chartPoints() {
            return this.items.map((d) => d.x - 8 + "," + d.y).join(" ");
        },
    },
};
</script>
