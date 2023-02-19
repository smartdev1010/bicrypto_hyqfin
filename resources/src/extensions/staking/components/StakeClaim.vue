<template>
    <div
        id="claimModal"
        class="modal fade text-start"
        tabindex="-1"
        aria-hidden="true"
        role="dialog"
    >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ $t("Staking") }} {{ coin.symbol }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form @submit.prevent="ClaimStake()">
                    <div class="modal-body">
                        <p>
                            {{ $t("Are you sure to claim") }}
                            <span class="fw-bold">{{ coin.symbol }}</span>
                            {{ $t("Stake") }}?
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-dark"
                            data-bs-dismiss="modal"
                        >
                            {{ $t("Close") }}
                        </button>
                        <button
                            type="submit"
                            class="btn btn-success"
                            :disabled="loading"
                        >
                            {{ $t("Claim") }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StakeClaim",

    props: ["coin"],
    // component list
    components: {},

    // component data
    data() {
        return {
            loading: false,
        };
    },

    // custom methods
    methods: {},

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
