<template>
    <div>
        <div
            class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
        >
            <div class="font-medium">{{ $t("Deposit History") }}</div>
            <Filter>
                <input
                    v-model="filters.trx.value"
                    type="text"
                    class="filter-input"
                    placeholder="Transaction ID"
            /></Filter>
        </div>
        <div class="card relative overflow-x-auto">
            <VTable
                :key="logStore.logs.deposit.length"
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="logStore.logs.deposit"
                :filters="filters"
                :page-size="10"
                :hide-sort-icons="true"
                @totalPagesChanged="totalPages = $event"
            >
                <template #head>
                    <tr
                        class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <VTh
                            sort-key="created_at"
                            scope="col"
                            class="py-3 px-6"
                        >
                            <Col text="Date" />
                        </VTh>

                        <VTh
                            sort-key="gateway.name"
                            scope="col"
                            class="py-3 px-6"
                        >
                            <Col text="Method" />
                        </VTh>
                        <VTh sort-key="amount" scope="col" class="py-3 px-6">
                            <Col text="Amount" />
                        </VTh>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="logStore.logs.deposit.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td data-label="Date" class="py-4 px-6">
                                <toDate :time="row.created_at" />
                            </td>
                            <td data-label="Gateway">
                                {{ row.gateway ? row.gateway.name : "" }}
                            </td>
                            <td
                                data-label="Amount"
                                class="py-4 px-6"
                                :class="
                                    'budget' + (row.trx_type == '+')
                                        ? 'text-success'
                                        : 'text-danger'
                                "
                            >
                                {{ row.trx_type == "+" ? "+" : "-" }}
                                <toMoney
                                    :num="row.amount * cur_rate"
                                    decimals="2"
                                />
                                {{ cur_symbol }}
                                <button
                                    v-if="row.admin_feedback != null"
                                    :data-tooltip-target="'tooltip-' + row.id"
                                    type="button"
                                    class="text-info"
                                >
                                    <i class="bi bi-info-circle"></i>
                                </button>

                                <div
                                    :id="'tooltip-' + row.id"
                                    role="tooltip"
                                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                >
                                    {{ row.admin_feedback }}
                                    <div
                                        class="tooltip-arrow"
                                        data-popper-arrow
                                    ></div>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr
                            scope="row"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td colspan="100%" class="py-4 px-6">
                                {{ $t("No results found!") }}
                            </td>
                        </tr>
                    </template>
                </template>
            </VTable>
        </div>

        <VTPagination
            v-model:currentPage="currentPage"
            class="float-right flex items-center justify-between pt-4"
            aria-label="Table navigation"
            :total-pages="totalPages"
            :boundary-links="true"
        >
            <template #firstPage> {{ $t("First") }} </template>

            <template #lastPage> {{ $t("Last") }} </template>

            <template #next
                ><span class="sr-only">{{ $t("Next") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>

            <template #previous>
                <span class="sr-only">{{ $t("Previous") }}</span>
                <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>
        </VTPagination>
    </div>
</template>

<script>
import toMoney from "../../partials/toMoney.vue";
import toDate from "../../partials/toDate.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
import { useLogStore } from "../../store/log";
export default {
    // component list
    components: { toDate, toMoney, Filter, Col },
    setup() {
        const logStore = useLogStore();
        return { logStore };
    },
    // component data
    data() {
        return {
            cur_rate: cur_rate,
            cur_symbol: cur_symbol,
            filters: {
                trx: { value: "", keys: ["trx"] },
            },
            currentPage: 1,
            totalPages: 0,
        };
    },

    // on component created
    created() {
        if (this.logStore.logs.deposit.length == 0) {
            this.logStore.fetch("deposit");
        }
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {},
};
</script>
