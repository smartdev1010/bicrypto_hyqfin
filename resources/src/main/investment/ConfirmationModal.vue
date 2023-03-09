<template>
    <Modal size="2xl" @close="$emit('cancel')">
        <template #header>
            <div class="flex items-center text-lg">
                <h3 id="modal-headline" class="text-lg">
                    Cancel Investment Confirmation
                </h3>
            </div>
        </template>
        <template #body>
            <span class="font-medium"
                >Are you sure you want to perform this action?</span
            >
        </template>
        <template #footer>
            <div class="flex justify-end">
                <button
                    type="button"
                    class="btn btn-outline-danger mr-3"
                    @click="$emit('confirm')"
                >
                    Confirm
                </button>
                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="$emit('cancel')"
                >
                    Cancel
                </button>
            </div>
        </template>
    </Modal>
</template>

<script>
import { Modal } from "flowbite-vue";
export default {
    name: "ConfirmationModal",
    components: { Modal },
    emits: ["cancel", "confirm"],
};
</script>
