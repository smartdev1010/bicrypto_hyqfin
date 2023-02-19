<template>
    <button
        type="button"
        class="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="showModal"
    >
        Show modal
    </button>
    <Modal v-if="isShowModal" :size="size" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">Terms of Service</div>
        </template>
        <template #body>
            <p
                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
            </p>
            <p
                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
            </p>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <button
                    type="button"
                    class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
                    @click="closeModal"
                >
                    Decline
                </button>
                <button
                    type="button"
                    class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="closeModal"
                >
                    I accept
                </button>
            </div>
        </template>
    </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
import { ref } from "vue";
export default {
    name: "Modal",
    // component list
    components: {},
    props: ["data"],
    // component data
    data() {
        return {
            loading: false,
            isShowModal: false,
        };
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom coin.methods
    methods: {
        closeModal() {
            isShowModal.value = false;
        },
        showModal() {
            isShowModal.value = true;
        },
        // submit() {
        //     this.loading = true;
        //     $("#btn-" + this.data.id).addClass(
        //         "focus:outline-none disabled:opacity-50"
        //     );
        //     $("#spinner").removeClass("hidden");
        //     let submit_data = $("#form-" + this.data.id).serialize();
        //     axios
        //         .post(this.data.action, {
        //             submit_data,
        //         })
        //         .then((response) => {
        //             this.$toast[response.data.type](response.data.message);
        //             $("#btn-" + this.data.id).removeClass(
        //                 "focus:outline-none disabled:opacity-50"
        //             );
        //             $("#spinner").addClass("hidden");
        //             $("#close-" + this.data.id).click();
        //             this.$emit(this.data.emit);
        //         })
        //         .catch((error) => {
        //             this.$toast.error(error.response.data);
        //             $("#btn-" + this.data.id).removeClass(
        //                 "focus:outline-none disabled:opacity-50"
        //             );
        //             $("#spinner").addClass("hidden");
        //             $("#close-" + this.data.id).click();
        //         })
        //         .finally(() => {
        //             this.loading = false;
        //         });
        // },
    },
};
</script>
