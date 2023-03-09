<template>
    <tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <td class="py-3 px-6">{{ log.trx }}</td>
        <td class="py-3 px-6">{{ log.plan.name }}</td>
        <td class="py-3 px-6">{{ log.amount }}</td>
        <td class="py-3 px-6">{{ log.profit }}</td>
        <td class="py-3 px-6">{{ formatDate(log.created_at) }}</td>
        <td class="py-3 px-6">{{ formatDate(log.end_date) }}</td>
        <td class="py-3 px-6">
            <span class="badge" :class="getStatusStyle(log.status)">{{
                getStatusText(log.status)
            }}</span>
        </td>
        <td class="py-3 px-6">
            <button
                v-if="isCancelable(log.status)"
                class="btn btn-sm btn-danger"
                @click="showConfirmationModal = true"
            >
                Cancel
            </button>
            <confirmation-modal
                v-if="showConfirmationModal"
                @confirm="cancelLog"
                @cancel="showConfirmationModal = false"
            >
                Are you sure you want to cancel this investment?
            </confirmation-modal>
        </td>
    </tr>
</template>
<script>
import ConfirmationModal from "./ConfirmationModal.vue";
export default {
    components: {
        ConfirmationModal,
    },
    props: {
        log: {
            type: Object,
            required: true,
        },
    },
    emits: ["cancel-log"],
    data() {
        return {
            showConfirmationModal: false,
        };
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString();
        },
        getStatusText(status) {
            switch (status) {
                case 1:
                    return "Active";
                case 2:
                    return "Completed";
                case 3:
                    return "Cancelled";
                default:
                    return "";
            }
        },
        getStatusStyle(status) {
            switch (status) {
                case 1:
                    return "bg-primary";
                case 2:
                    return "bg-success";
                case 3:
                    return "bg-danger";
                default:
                    return "";
            }
        },
        isCancelable(status) {
            return status === 1;
        },
        cancelLog() {
            this.$emit("cancel-log", this.log.id);
            this.showConfirmationModal = false;
        },
    },
};
</script>
