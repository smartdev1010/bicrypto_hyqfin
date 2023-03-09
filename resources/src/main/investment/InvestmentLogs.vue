<template>
    <div>
        <div
            class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
        >
            <div class="font-medium">
                {{ $t("Investments Log") }}
            </div>
            <Filter>
                <input
                    v-model="filters.trx.value"
                    type="text"
                    class="filter-input"
                    placeholder="Transaction ID"
            /></Filter>
        </div>
        <div v-if="logs != null" class="card relative overflow-x-auto">
            <VTable
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="logs"
                :filters="filters"
                :page-size="20"
                :hide-sort-icons="true"
                @totalPagesChanged="totalPages = $event"
            >
                <template #head>
                    <tr
                        class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <VTh sort-key="id" scope="col" class="py-3 px-6">
                            <Col text="Transaction ID" />
                        </VTh>
                        <th scope="col" class="py-3 px-6">
                            <Col text="Plan" />
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <Col text="Amount" />
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <Col text="Profit" />
                        </th>
                        <VTh
                            sort-key="created_at"
                            scope="col"
                            class="py-3 px-6"
                        >
                            <Col text="Start Date" />
                        </VTh>
                        <VTh sort-key="end_date" scope="col" class="py-3 px-6">
                            <Col text="End Date" />
                        </VTh>
                        <VTh sort-key="status" scope="col" class="py-3 px-6">
                            <Col text="Status" />
                        </VTh>
                        <th class="py-3 px-6">Actions</th>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="logs.length > 0">
                        <InvestmentLog
                            v-for="row in rows"
                            :key="row.id"
                            :log="row"
                            @cancel-log="cancelLog"
                        />
                    </template>
                    <template v-else>
                        <tr
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
import InvestmentLog from "./InvestmentLog.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";

export default {
    components: {
        InvestmentLog,
        Filter,
        Col,
    },
    props: {
        logs: {
            type: Object,
            required: true,
        },
    },
    emits: ["investment-cancel"],
    data() {
        return {
            filters: {
                trx: { value: "", keys: ["trx"] },
            },
            currentPage: 1,
            totalPages: 0,
        };
    },
    methods: {
        cancelLog(logId) {
            axios
                .post("/user/investment/log/cancel", {
                    id: logId,
                })
                .then((response) => {
                    this.$emit("investment-cancel");
                    this.$toast[response.type || "success"](
                        response.message || "Investment cancelled successfully"
                    );
                })
                .catch((error) => {
                    console.log(error);
                    this.$toast[error.response.data.type || "error"](
                        error.response.data.message ||
                            "Error cancelling investment"
                    );
                });
        },
    },
};
</script>
