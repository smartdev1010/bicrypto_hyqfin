<template>
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
export default {
    props: ["items"],
    computed: {
        cx() {
            return this.items.length
                ? this.items[this.items.length - 1].x - 3
                : 0;
        },
        cy() {
            return this.items.length ? this.items[this.items.length - 1].y : 0;
        },
    },
};
</script>
