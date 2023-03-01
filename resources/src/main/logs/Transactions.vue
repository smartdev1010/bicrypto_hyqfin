<template>
    <div>
        <div
            class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
        >
            <div class="font-medium">{{ $t("Transactions Log") }}</div>
            <Filter>
                <input
                    v-model="filters.trx.value"
                    type="text"
                    class="filter-input"
                    placeholder="Transaction ID"
                />
            </Filter>
        </div>
        <div class="card relative overflow-x-auto">
            <VTable
                :key="logStore.logs.transaction.length"
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="logStore.logs.transaction"
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
                        <VTh sort-key="amount" scope="col" class="py-3 px-6">
                            <Col text="Amount" />
                        </VTh>
                        <VTh sort-key="charge" scope="col" class="py-3 px-6">
                            <Col text="Charge" />
                        </VTh>
                        <VTh
                            sort-key="post_balance"
                            scope="col"
                            class="py-3 px-6"
                        >
                            <Col text="Post Balance" />
                        </VTh>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="logStore.logs.transaction.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td data-label="Date" class="py-4 px-6">
                                <toDate :time="row.created_at" />
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
                                    :num="
                                        row.currency
                                            ? row.amount
                                            : row.amount * cur_rate
                                    "
                                    decimals="2"
                                />
                                {{ row.currency ? row.currency : cur_symbol }}
                            </td>
                            <td data-label="Charge" class="py-4 px-6">
                                <toMoney
                                    :num="
                                        row.currency
                                            ? row.charge
                                            : row.charge * cur_rate
                                    "
                                    decimals="2"
                                />
                                {{ row.currency ? row.currency : cur_symbol }}
                            </td>
                            <td data-label="After Charge" class="py-4 px-6">
                                <toMoney
                                    :num="
                                        row.currency
                                            ? row.post_balance
                                            : row.post_balance * cur_rate
                                    "
                                    decimals="2"
                                />
                                {{ row.currency ? row.currency : cur_symbol }}
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
            :total-pages="totalPages"
            :boundary-links="true"
            :hide-single-page="true"
            :max-page-links="3"
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
        if (this.logStore.logs.transaction.length == 0) {
            this.logStore.fetch("transaction");
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
