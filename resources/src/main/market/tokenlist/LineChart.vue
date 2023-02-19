<template>
    <polyline
        class="polyline"
        fill="none"
        stroke="#f0f0f0"
        stroke-width="1"
        stroke-linecap="round"
        :points="chartPoints"
    />
    <circle
        class="circle"
        :cx="cx"
        :cy="cy"
        r="3"
        fill="#f0f0f0"
        stroke="none"
    />
</template>

<script>
// component
export default {
    // component props
    props: ["values"],

    // computed methods
    computed: {
        // build points for SVG polyline
        chartPoints() {
            return this.values.map((d) => d.x - 8 + "," + d.y).join(" ");
        },
        cx() {
            return this.values.length
                ? this.values[this.values.length - 1].x - 3
                : 0;
        },
        cy() {
            return this.values.length
                ? this.values[this.values.length - 1].y
                : 0;
        },
    },
};
</script>
