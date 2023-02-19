<template>
    <span class="mr-1">{{ number }}</span>
</template>

<script>
// component
export default {
    props: ["num", "s", "p"],
    computed: {
        number() {
            return this.noun(this.num, this.s, this.p);
        },
    },
    methods: {
        noun(num, singular, plutal, append) {
            append = String(append || "");
            return String(
                num +
                    " " +
                    (parseFloat(num) === 1 ? singular : plutal) +
                    " " +
                    append
            ).trim();
        },
    },
};
</script>
