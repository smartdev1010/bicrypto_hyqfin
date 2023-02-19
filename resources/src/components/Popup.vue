<template>
    <div
        class="modal-overlay modal fade"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-modal="true"
        role="dialog"
        :class="{ visible: visible, under: under }"
    >
        <div class="modal-container">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ popup.title }}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        @click.stop="close"
                    ></button>
                </div>
                <div class="modal-body" v-html="popup.msg"></div>

                <img
                    v-if="popup.image != null"
                    :src="'/assets/images/popup/' + popup.image"
                    alt="Title"
                />
                <div
                    class="modal-footer d-flex justify-content-between align-items-center"
                >
                    <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            @click="DisablePopup(popup.id)"
                        />
                        <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                        >
                            {{ $t("Disable Popup") }}</label
                        >
                    </div>
                    <a
                        v-if="popup.link != null"
                        :href="popup.link"
                        target="_blank"
                        ><button class="btn btn-success btn-sm">
                            {{ $t("View") }}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["popup"],

    // component list
    components: {},

    // component data
    data() {
        return {
            showModal: false,
            visible: false,
            under: true,
            sto: null,
        };
    },

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        show() {
            if (this.visible) return;
            this.under = false;
            this.visible = true;
        },
        close(e) {
            if (!this.visible) return;
            if (this.sto) clearTimeout(this.sto);
            this.sto = setTimeout(this.onDone, 400);
            this.$emit("onClose", e);
            this.visible = false;
        },
        // when the modal is done animating out
        onDone(e) {
            if (this.under) return;
            this.$emit("onDone", e);
            this.under = true;
        },

        // check for escape key
        onKey(e) {
            if (e.keyCode !== 27) return;
            this.close(e);
        },
        DisablePopup(id) {
            this.$http
                .post("/user/popups/disable", {
                    popup_id: id,
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                });
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.show();
    },

    // on destroyed
    destroyed() {
        document.removeEventListener("keydown", this.onKey);
    },
};
</script>
<style lang="scss">
@import "../scss/variables";
// modal overlay
.modal-overlay {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    opacity: 0;
    z-index: 8887;
    .modal-container {
        margin: 0 auto;
        width: calc(100% - (#{$padSpace} * 2));
        max-width: calc(#{$sizeMedium} + (#{$padSpace} * 2));
        background-color: $colorDocumentLight;
        border-radius: $lineJoin;
        box-shadow: $shadowBold;
        transform: scale(0.5);
        transition-duration: 1s;
    }
}
// visible state
.modal-overlay.visible {
    opacity: 1;
    .modal-container {
        transform: scale(1);
    }
}
// inactive state
.modal-overlay.under {
    pointer-events: none;
    z-index: -1;
}
.form-switch .form-check-input:checked {
    background-color: #b50505;
}
</style>
