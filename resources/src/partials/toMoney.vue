<template>
    <span class="mr-1">{{ number }}</span>
</template>

<script>
// component
export default {
    props: ["num", "decimals"],
    computed: {
        number() {
            return this.money(this.num, this.decimals || 0);
        },
    },
    methods: {
        money(num, fixed) {
            num = parseFloat(num) || 0;
            fixed = parseInt(fixed) || 0;
            let o = {
                style: "decimal",
                minimumFractionDigits: fixed,
                maximumFractionDigits: fixed,
            };
            return new Intl.NumberFormat("en-US", o).format(num);
        },
    },
};
</script>
