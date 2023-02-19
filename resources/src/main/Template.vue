<template>
    <div></div>
</template>

<script>
export default {
    // component list
    components: {},
    props: [],

    // component data
    data() {
        return {};
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },
};
</script>
