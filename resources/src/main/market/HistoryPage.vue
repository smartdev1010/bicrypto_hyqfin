<template>
    <section class="history-page">
        <div class="flex-middle flex-stretch mb-1 flex-row">
            <div class="mr-1 flex-1 text-clip">
                Recent price alert activity history ({{ historyData.length }})
            </div>
            <button
                class="form-btn bg-info-hover bi bi-x-lg iconLeft"
                :class="{ disabled: !historyData.length }"
                @click="flushHistory"
            >
                Flush
            </button>
        </div>

        <div class="flex-list">
            <div v-if="!historyData.length" class="flex-item">
                <div class="text-secondary text-faded flex-1">
                    <span class="bi bi-info-circle">
                        There's nothing here right now.</span
                    >
                </div>
            </div>
            <div v-for="e in historyData" :key="e.id" class="flex-item">
                <div class="mr-1" :class="{ 'alert-bubble': e.isNew }">
                    <TokenIcon :image="e.icon"></TokenIcon>
                </div>
                <div class="mr-1 flex-1">
                    <div class="text-default">{{ e.title }}</div>
                    <div class="text-secondary">{{ formatInfo(e.info) }}</div>
                </div>
                <div class="text-clip text-end">
                    <button
                        v-tooltip
                        class="bi bi-x-lg"
                        title="Delete"
                        @click="deleteHistory(e.id)"
                    ></button>
                    <div class="text-default">
                        <toElapsed :time="e.time" /> ago
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TokenIcon from "./TokenIcon.vue";
import toElapsed from "../../partials/toElapsed.vue";

// component
export default {
    // component list
    components: { TokenIcon, toElapsed },

    // component props
    props: {
        historyData: {
            type: Array,
            default() {
                return [];
            },
            required: true,
        },
        modalData: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    // on component destroyed
    unmounted() {
        this.$history.reset();
    },

    // custom methods
    methods: {
        // delete item from history
        deleteHistory(id) {
            this.$history.remove(id);
        },

        // flush history list
        flushHistory() {
            this.$history.flush();
        },

        // format info string
        formatInfo(info) {
            return String(info || "").replace(/[\r\n]+/g, ", ") + ".";
        },
    },
};
</script>
