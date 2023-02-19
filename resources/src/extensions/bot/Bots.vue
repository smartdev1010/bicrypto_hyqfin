<template>
    <div>
        <div class="mb-5 grid gap-5 xs:grid-cols-1 md:grid-cols-2">
            <div class="card relative">
                <div class="card-body flex justify-between">
                    <div>
                        <h5>
                            {{ $t("Welcome") }} 🎉
                            {{ userStore.user ? userStore.user.firstname : "" }}
                        </h5>
                        <router-link
                            to="/bot/BTC/USDT"
                            type="button"
                            class="btn btn-primary my-3"
                            >{{ $t("New Bot") }}</router-link
                        >
                    </div>
                    <img
                        src="/assets/images/illustrations/bot.svg"
                        class="w-48"
                        alt="Medal Pic"
                    />
                </div>
            </div>
            <div
                class="grid gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
                <div class="card text-center">
                    <div class="p-5">
                        <div class="my-3">
                            <span
                                class="icon-bg rounded-full bg-gray-100 p-2 shadow dark:border dark:bg-gray-700 dark:shadow-lg"
                            >
                                <i class="bi bi-robot text-xl font-medium"></i>
                            </span>
                        </div>
                        <h2
                            v-if="botStore.bot_contracts_count_running != null"
                            :key="botStore.bot_contracts_count_running"
                            class="font-medium"
                        >
                            {{ botStore.bot_contracts_count_running }}
                        </h2>
                        <h2 v-else class="font-medium">0</h2>
                        <p class="card-text">
                            {{ $t("Running Bots") }}
                        </p>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="p-5">
                        <div class="my-3">
                            <span
                                class="icon-bg rounded-full bg-gray-100 p-2 shadow dark:border dark:bg-gray-700 dark:shadow-lg"
                            >
                                <i
                                    class="bi bi-check-lg text-xl font-medium"
                                ></i>
                            </span>
                        </div>
                        <h2
                            v-if="
                                botStore.bot_contracts_count_completed != null
                            "
                            :key="botStore.bot_contracts_count_completed"
                            class="font-medium"
                        >
                            {{ botStore.bot_contracts_count_completed }}
                        </h2>
                        <h2 v-else class="font-medium">0</h2>
                        <p class="card-text">
                            {{ $t("Completed Bots") }}
                        </p>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="p-5">
                        <div class="my-3">
                            <span
                                class="icon-bg rounded-full bg-gray-100 p-2 shadow dark:border dark:bg-gray-700 dark:shadow-lg"
                            >
                                <i class="bi bi-book text-xl font-medium"></i>
                            </span>
                        </div>
                        <h2
                            v-if="
                                botStore.bot_contracts_count_amount != null &&
                                userStore.currency != null
                            "
                            :key="botStore.bot_contracts_count_amount"
                            class="font-medium"
                        >
                            {{
                                botStore.bot_contracts_count_amount *
                                userStore.currency.rate
                            }}
                            {{ userStore.currency.symbol }}
                        </h2>
                        <h2 v-else class="font-medium">0</h2>
                        <p class="card-text">
                            {{ $t("Total Investment") }}
                        </p>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="p-5">
                        <div class="my-3">
                            <span
                                class="icon-bg rounded-full bg-gray-100 p-2 shadow dark:border dark:bg-gray-700 dark:shadow-lg"
                            >
                                <i
                                    class="bi bi-arrows-expand text-xl font-medium"
                                ></i>
                            </span>
                        </div>
                        <span>
                            <h2 v-if="botStore.profit > 0" class="text-success">
                                {{
                                    botStore.profit * userStore.currency
                                        ? userStore.currency.rate
                                        : 1
                                }}
                                {{
                                    userStore.currency
                                        ? userStore.currency.symbol
                                        : "$"
                                }}
                            </h2>
                            <h2
                                v-else-if="botStore.profit < 0"
                                class="text-danger font-medium"
                            >
                                {{
                                    botStore.profit * userStore.currency
                                        ? userStore.currency.rate
                                        : 1
                                }}
                                {{
                                    userStore.currency
                                        ? userStore.currency.symbol
                                        : "$"
                                }}
                            </h2>
                            <h2 v-else class="font-medium">
                                {{
                                    botStore.profit * userStore.currency
                                        ? userStore.currency.rate
                                        : 1
                                }}
                                {{
                                    userStore.currency
                                        ? userStore.currency.symbol
                                        : "$"
                                }}
                            </h2>
                            <p class="card-text">
                                {{ $t("Total Profit/Lose") }}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <div
                class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
            >
                <div class="font-medium">{{ $t("Running Contracts") }}</div>
                <div class="grid grid-cols-2 gap-5">
                    <Filter>
                        <input
                            v-model="filters.symbol.value"
                            type="text"
                            class="filter-input"
                            placeholder="Symbol"
                    /></Filter>
                    <Filter class="if-sm">
                        <input
                            v-model="filters.pair.value"
                            type="text"
                            class="filter-input"
                            placeholder="Pair"
                    /></Filter>
                </div>
            </div>
            <div class="card relative overflow-x-auto">
                <VTable
                    :key="botStore.logs.length"
                    v-model:current-page="currentPage"
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="botStore.logs"
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
                                sort-key="symbol"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="Bot" />
                            </VTh>
                            <VTh
                                sort-key="duration"
                                scope="col"
                                class="hidden py-3 px-6 md:flex"
                            >
                                <Col text="Duration" />
                            </VTh>
                            <VTh
                                sort-key="profit"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="Profit" />
                            </VTh>
                            <VTh
                                sort-key="status"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="Status" />
                            </VTh>
                            <th scope="col">{{ $t("View") }}</th>
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="botStore.logs.length > 0">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td class="py-3 px-6" data-label="Bot">
                                    <div class="fw-bold fs-4">
                                        {{ row.bot_name }}
                                    </div>
                                    <div
                                        class="text-warning"
                                        style="margin-top: 4px"
                                    >
                                        ({{ row.symbol }}/{{ row.pair }})
                                    </div>
                                </td>
                                <td
                                    class="hidden py-3 px-6 md:block"
                                    data-label="Duration"
                                >
                                    <div>
                                        {{ $t("Start") }}:
                                        <span class="fw-bold">{{
                                            row.start_date
                                        }}</span>
                                    </div>
                                    <div>
                                        {{ $t("End") }}:
                                        <span class="fw-bold">{{
                                            row.end_date
                                        }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6" data-label="Status">
                                    <template v-if="row.status != 1">
                                        <span class="badge bg-warning">{{
                                            $t("Running")
                                        }}</span>
                                    </template>
                                    <template v-else>
                                        <span
                                            v-if="row.result == 1"
                                            class="badge bg-success"
                                            >+
                                            <toMoney
                                                :num="row.profit"
                                                decimals="4"
                                        /></span>
                                        <span
                                            v-else-if="row.result == 2"
                                            class="badge bg-danger"
                                            >-
                                            <toMoney
                                                :num="row.profit"
                                                decimals="4"
                                        /></span>
                                        <span
                                            v-else-if="row.result == 3"
                                            class="badge bg-secondary"
                                            ><toMoney
                                                :num="row.profit"
                                                decimals="4"
                                        /></span>
                                    </template>
                                </td>
                                <td class="py-3 px-6" data-label="Status">
                                    <span
                                        v-if="row.status != 1"
                                        class="badge bg-warning"
                                        >{{ $t("Running") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 1"
                                        class="badge bg-success"
                                        >{{ $t("Completed") }}</span
                                    >
                                </td>
                                <td class="py-3 px-6" data-label="View">
                                    <router-link
                                        v-if="row.status != 1"
                                        :to="
                                            '/bot/' +
                                            row.symbol +
                                            '/' +
                                            row.pair
                                        "
                                        class="btn btn-icon btn-info btn-sm"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="View"
                                    >
                                        <i class="bi bi-display"></i>
                                    </router-link>
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
                aria-label="Table navigation"
                :total-pages="totalPages"
                :boundary-links="true"
                class="float-right flex items-center justify-between pt-4"
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
    </div>
</template>

<script>
import toMoney from "../../partials/toMoney.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
import { useBotStore } from "../../store/bot";
import { useUserStore } from "../../store/user";
export default {
    components: { toMoney, Filter, Col },
    setup() {
        const userStore = useUserStore();
        const botStore = useBotStore();
        return { userStore, botStore };
    },
    data() {
        return {
            gnl: gnl,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
                pair: { value: "", keys: ["pair"] },
            },
            currentPage: 1,
            totalPages: 0,
        };
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},
    updated() {},

    // custom methods
    methods: {
        async fetchData() {
            if (this.botStore.logs.length == 0) {
                await this.botStore.fetch();
            }
        },
    },
};
</script>
