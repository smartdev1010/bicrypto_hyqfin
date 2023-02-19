<template>
    <section>
        <form
            v-if="pairData.symbol"
            class="flex-middle flex-stretch mb-3 flex-row"
            @submit.prevent="saveAlarm"
        >
            <div
                class="form-input mr-1 flex-1"
                style="background: rgb(255 255 255 / 6%)"
            >
                <i class="bi bi-graph-up text-dark mr-1"></i>
                <input
                    v-model="curPrice"
                    class="text-dark mr-1"
                    placeholder="0.00000000"
                    name="price"
                />
                <div class="text-dark">{{ pairData.asset }}</div>
            </div>
            <button
                type="submit"
                class="btn btn-sm btn-success bi bi-plus-lg iconLeft"
            >
                Set Alarm
            </button>
        </form>

        <div class="flex-list">
            <div class="flex-header">
                <div class="mr-1">
                    <span class="bi bi-alarm text-faded"></span>
                </div>
                <div class="mr-1 flex-1">Symbol</div>
                <div class="mr-1 flex-1">Alarm</div>
                <div class="mr-1 flex-1">Status</div>
                <div class="if-sm mr-1 flex-1">Created</div>
                <div>
                    <button
                        v-tooltip
                        class="bi bi-x-lg text-danger-hover"
                        title="Delete All"
                        @click="flushAlarms"
                    ></button>
                </div>
            </div>

            <div v-if="!alarmsList.length" class="flex-item">
                <div class="text-secondary text-faded flex-1">
                    <span class="bi bi-info-circle">&nbsp;</span>
                    <span v-if="pairData.symbol"
                        >There are no alarms for {{ pairData.symbol }}.</span
                    >
                    <span v-else>There are no alarms.</span>
                </div>
            </div>

            <div v-for="a in alarmsList" :key="a.id" class="flex-item">
                <div class="mr-1">
                    <button
                        v-tooltip
                        class="bi bi-alarm"
                        :class="{
                            'text-gain': a.active,
                            'text-secondary': !a.active,
                        }"
                        title="Toggle"
                        @click="toggleAlarm(a.id, a.symbol, !a.active)"
                    ></button>
                </div>
                <div class="mr-1 flex-1">
                    <router-link
                        class="text-dark"
                        :to="'/symbol/' + a.symbol"
                        >{{ a.pair }}</router-link
                    >
                </div>
                <div class="mr-1 flex-1">
                    <span class="text-big" :class="['text-' + a.check]">{{
                        a.sign
                    }}</span>
                    <span class="text-dark"
                        ><toFixed :num="a.price" :asset="a.asset"
                    /></span>
                    <span class="text-secondary">{{ a.asset }}</span>
                </div>
                <div class="mr-1 flex-1">
                    <span
                        :class="{
                            'text-success': a.active,
                            'text-secondary': !a.active,
                        }"
                        >{{ a.active ? "Active" : "Triggered" }}</span
                    >
                </div>
                <div class="if-sm mr-1 flex-1">
                    <span class="text-grey"><toDate :time="a.time" /></span>
                </div>
                <div>
                    <button
                        v-tooltip
                        class="bi bi-x-lg text-dark"
                        title="Delete"
                        @click="deleteAlarm(a.id, a.symbol)"
                    ></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import toFixed from "../../partials/toFixed.vue";
import toDate from "../../partials/toDate.vue";

export default {
    components: { toFixed, toDate },
    props: {
        alarmsData: {
            type: Array,
            default() {
                return [];
            },
            required: true,
        },
        pairData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    emits: ["listCount", "alarmsRefresh"],

    data() {
        return {
            curPrice: "",
        };
    },

    // computed methods
    computed: {
        // filter alarms for this token
        alarmsList() {
            let list = this.alarmsData.slice();
            let symbol = this.pairData.symbol || "";

            // sort all alarms by symbol
            list = this.$utils.sort(list, "symbol", "asc");

            // sort alarms for a specific symbol by status
            if (symbol) {
                list = list.filter((a) => a.symbol === symbol);
                list = this.$utils.sort(list, "active", "desc");
            }
            return list;
        },
    },

    // component mounted
    mounted() {
        if (this.pairData.symbol) {
            this.curPrice = Number(this.pairData.close).toFixed(8);
        }
    },
    // component methods
    methods: {
        // save a new alert for this token
        saveAlarm(e) {
            let { symbol, token, close } = this.pairData;
            let price = parseFloat(e.target.price.value) || 0;
            let saved = this.$alarms.add(this.pairData, price);
            if (!saved)
                return this.$toast.warning(
                    "Please enter a different " + token + " alarm price."
                );
            this.$toast.success(
                "New alarm for " +
                    symbol +
                    " set for " +
                    price.toFixed(8) +
                    " " +
                    token +
                    "."
            );
            this.$bus.emit("alarmsRefresh");
        },

        // toggle existing alarm for as symbol by id
        toggleAlarm(id, symbol, toggle) {
            let action = toggle ? "enabled" : "disabled";
            this.$alarms.toggle(id, toggle);
            this.$toast.success(
                "Alarm for " + symbol + " has been " + action + "."
            );
        },

        // remove an alert from the list by id
        deleteAlarm(id, symbol) {
            this.$alarms.remove(id);
            this.$toast.success("Alarm for " + symbol + " has been removed.");
        },

        // flush all alarms from the list
        flushAlarms() {
            if (!confirm("Delete all alarms from the list?")) return;
            this.$alarms.flush();
            this.$toast.success("All alarms have been deleted.");
        },
    },
};
</script>
