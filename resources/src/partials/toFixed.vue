<template>
    <span class="mr-1">{{ number }}</span>
</template>

<script>
// component
export default {
    props: ["num", "asset"],
    computed: {
        number() {
            return this.fixed(this.num, this.asset);
        },
    },
    methods: {
        fixed(num, decimals) {
            if (typeof decimals === "number")
                return Number(num).toFixed(decimals);
            if (/(USD|PAX|DAI)/.test(decimals)) return this.money(num, 3);
            return Number(num).toFixed(8);
        },
    },
};
</script>
