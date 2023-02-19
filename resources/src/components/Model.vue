<template>
    <div
        class="modal fade"
        id="details"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
    >
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ log.title }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click.stop="close"
                    ></button>
                </div>
                <div class="modal-body flex-grow-1">
                    <div class="card bg-black">
                        <div class="card-body"></div>
                    </div>
                    <button
                        type="button"
                        class="btn btn-dark"
                        data-bs-dismiss="modal"
                    >
                        {{ $t("Close") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Details",
    props: ["log"],
    // component list
    components: {},

    // component data
    data() {
        return {};
    },

    // custom coin.methods
    methods: {},

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
