<template>
    <div>
        <div
            class="card mb-5 bg-black"
            style="
                background-image: url('/assets/images/staking/bg/banner.gif');
            "
        >
            <div class="card-body">
                <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-3">
                    <div class="col-span-2 sm:col-span-3 md:col-span-2">
                        <div
                            class="px-2 py-2 text-center text-gray-200 dark:text-gray-200"
                            style="background-color: #000000db !important"
                        >
                            <h1>{{ $t("Staking") }}</h1>
                            <p
                                class="dark:text-gray-20 tracking-widest text-gray-200 md:text-lg"
                            >
                                {{
                                    $t(
                                        "Earn stable profits with professional asset management"
                                    )
                                }}
                            </p>
                        </div>
                    </div>
                    <div class="col-span-1 sm:col-span-3 md:col-span-1">
                        <div
                            class="card shadow"
                            style="
                                border-top: 6px solid #2dbd96;
                                background-color: #000000db !important;
                                border-bottom-right-radius: 10px;
                                border-bottom-left-radius: 10px;
                            "
                        >
                            <div class="card-body">
                                <div
                                    class="px-2 py-2 text-center text-gray-500 dark:text-gray-400"
                                >
                                    <div
                                        class="text-gray-200 dark:text-gray-200"
                                    >
                                        <div>{{ $t("Assets") }} (USDT)</div>
                                        <div :key="stakingStore.assets">
                                            {{ stakingStore.assets }}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <div
                                        class="text-center text-gray-200 dark:text-gray-200"
                                    >
                                        <div>
                                            {{ $t("Yesterday Profit") }} (USDT)
                                        </div>
                                        <div :key="stakingStore.last_profit">
                                            {{ stakingStore.last_profit }}
                                        </div>
                                    </div>
                                    <div
                                        class="text-center text-gray-200 dark:text-gray-200"
                                    >
                                        <div>
                                            {{ $t("Total Profit") }} (USDT)
                                        </div>
                                        <div :key="stakingStore.total_profit">
                                            {{ stakingStore.total_profit }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer w-full text-center">
                                <router-link to="/staking">
                                    <i class="bi bi-chevron-left mr-2"></i
                                    ><span> {{ $t("Go Back") }}</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="my-5">
            <div class="mb-4 flex items-center justify-between text-right">
                <div class="font-medium">{{ $t("Running Contracts") }}</div>
                <div class="flex items-center justify-end space-x-2">
                    <Filter>
                        <input
                            type="text"
                            v-model="filters.symbol.value"
                            class="filter-input"
                            placeholder="Symbol"
                    /></Filter>
                </div>
            </div>
            <div class="card relative overflow-x-auto">
                <VTable
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="stakingStore.logs"
                    :key="stakingStore.logs.length"
                    :filters="filters"
                    :currentPage.sync="currentPage"
                    :pageSize="10"
                    :hideSortIcons="true"
                    @totalPagesChanged="totalPages = $event"
                >
                    <template #head>
                        <tr
                            class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <VTh sortKey="symbol" scope="col" class="py-3 px-6">
                                <Col text="Coin" />
                            </VTh>
                            <VTh sortKey="staked" scope="col" class="py-3 px-6">
                                <Col text="Total Staking" />
                            </VTh>
                            <VTh sortKey="profit" scope="col" class="py-3 px-6">
                                <Col text="Staking Profit" />
                            </VTh>
                            <VTh
                                sortKey="duration"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="Duration (Days)" />
                            </VTh>
                            <th scope="col" class="py-3 px-6">
                                {{ $t("Status") }}
                            </th>
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="stakingStore.logs != null">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td class="py-3 px-6" data-label="Coin">
                                    <div class="flex items-center">
                                        <img
                                            class="mr-2 rounded-full"
                                            width="32"
                                            v-lazy="
                                                row.icon
                                                    ? '/assets/images/staking/' +
                                                      row.icon
                                                    : '/assets/images/cryptoCurrency/' +
                                                      row.symbol +
                                                      '.png'
                                            "
                                        />
                                        <Skeletor
                                            v-if="imageLoading"
                                            circle
                                            size="32"
                                            as="div"
                                        />
                                        <span class="fw-bold mr-1">{{
                                            row.symbol
                                        }}</span>
                                        <span class="text-mute">{{
                                            row.title
                                        }}</span>
                                    </div>
                                </td>
                                <td
                                    class="py-3 px-6"
                                    data-label="Total Staking"
                                >
                                    <span class="text-success fw-bold"
                                        ><toMoney
                                            :num="row.staked ? row.staked : 0"
                                            decimals="4"
                                        />
                                        {{ row.symbol }}</span
                                    >
                                </td>
                                <td class="py-3 px-6" data-label="Profit">
                                    <div>
                                        {{ $t("Yesterday Profit") }}:
                                        <span class="fw-bold text-success"
                                            ><toMoney
                                                :num="
                                                    row.last_profit
                                                        ? row.last_profit
                                                        : 0
                                                "
                                                decimals="4"
                                        /></span>
                                        USDT
                                    </div>
                                    <div>
                                        {{ $t("Total Profit") }}:
                                        <span class="fw-bold text-success"
                                            ><toMoney
                                                :num="
                                                    row.total_profit
                                                        ? row.total_profit
                                                        : 0
                                                "
                                                decimals="4"
                                        /></span>
                                        USDT
                                    </div>
                                </td>
                                <td class="py-3 px-6" data-label="Duration">
                                    <div>
                                        {{ $t("Start") }}:
                                        <span class="fw-bold text-warning">{{
                                            row.start_date
                                        }}</span>
                                    </div>
                                    <div>
                                        {{ $t("End") }}:
                                        <span class="fw-bold text-warning">{{
                                            row.end_date
                                        }}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6" data-label="Status">
                                    <span
                                        v-if="row.status == 0"
                                        class="badge bg-danger"
                                        >{{ $t("Canceled") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 1"
                                        class="badge bg-primary"
                                        >{{ $t("Staking") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 2"
                                        class="badge bg-warning"
                                        >{{ $t("Completed") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 3"
                                        class="badge bg-success"
                                        >{{ $t("Claimed") }}</span
                                    >
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr
                                scope="row"
                                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
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
                class="float-right flex items-center justify-between pt-4"
                aria-label="Table navigation"
                v-model:currentPage="currentPage"
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
    </div>
</template>

<script>
import toMoney from "../../partials/toMoney.vue";
import toDate from "../../partials/toDate.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
import { useStakingStore } from "../../store/staking";
export default {
    setup() {
        const stakingStore = useStakingStore();
        return { stakingStore };
    },
    components: {
        toDate,
        toMoney,
        Filter,
        Col,
    },

    // component data
    data() {
        return {
            filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            currentPage: 1,
            totalPages: 0,
            imageLoading: true,
        };
    },

    // custom methods
    methods: {
        async fetchData() {
            if (this.stakingStore.logs.length == 0) {
                await this.stakingStore.fetch();
            }
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
