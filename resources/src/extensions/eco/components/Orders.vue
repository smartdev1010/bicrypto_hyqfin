<template>
    <div
        class="border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
        style="margin: 0 -20px"
    >
        <ul
            id="myTab"
            class="nf flex-cols -mb-px flex overflow-x-hidden bg-gray-200 text-center dark:bg-gray-800"
            role="tablist"
        >
            <li>
                <a
                    id="open-orders-tab"
                    class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                    :class="
                        !isActive('open-orders')
                            ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                            : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                    "
                    type="button"
                    role="tab"
                    aria-controls="open-orders"
                    aria-selected="false"
                    @click.prevent="setActive('open-orders')"
                >
                    {{ $t("Open Orders") }}</a
                >
            </li>
            <li>
                <a
                    id="closed-orders-tab"
                    class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                    :class="
                        !isActive('closed-orders')
                            ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                            : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                    "
                    type="button"
                    role="tab"
                    aria-controls="closed-orders"
                    aria-selected="false"
                    @click.prevent="setActive('closed-orders')"
                >
                    {{ $t("Order History") }}</a
                >
            </li>
        </ul>
        <div
            id="open-orders"
            class="pt-3"
            :class="isActive('open-orders') ? '' : 'hidden'"
            role="tabpanel"
            style="min-height: 300px"
        >
            <VTable
                v-model:current-page="currentPageOpen"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="open_orders"
                :page-size="10"
                :hide-sort-icons="true"
                @totalPagesChanged="totalPagesOpen = $event"
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
                        <VTh sort-key="order_id" scope="col" class="py-3 px-6">
                            <Col text="TxHash" />
                        </VTh>
                        <VTh sort-key="symbol" scope="col" class="py-3 px-6">
                            <Col text="Symbol" />
                        </VTh>
                        <VTh sort-key="side" scope="col" class="py-3 px-6">
                            <Col text="Side" />
                        </VTh>
                        <VTh sort-key="price" scope="col" class="py-3 px-6">
                            <Col text="Price" />
                        </VTh>
                        <VTh sort-key="amount" scope="col" class="py-3 px-6">
                            <Col text="Amount" />
                        </VTh>
                        <VTh sort-key="filled" scope="col" class="py-3 px-6">
                            <Col text="Filled" />
                        </VTh>
                        <VTh sort-key="status" scope="col" class="py-3 px-6">
                            <Col text="Status" />
                        </VTh>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="open_orders.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td class="py-3 px-6" data-label="Date">
                                <toDate :time="row.created_at" />
                            </td>
                            <td
                                data-label="TxHash"
                                class="text-uppercase text-center"
                            >
                                {{ row.id }}
                            </td>
                            <td
                                data-label="Symbol"
                                class="text-uppercase text-center"
                            >
                                {{ row.pair }}
                            </td>
                            <td
                                data-label="Side"
                                class="text-uppercase text-center"
                            >
                                <span
                                    v-if="row.type == 'BUY'"
                                    class="badge bg-sucess"
                                >
                                    {{ $t("Buy") }}</span
                                >
                                <span v-else class="badge bg-danger">
                                    {{ $t("Sell") }}</span
                                >
                            </td>
                            <td data-label="Price" class="text-center">
                                <toMoney :num="row.price" decimals="2" />
                                {{ row.pair }}
                            </td>
                            <td data-label="Amount" class="text-center">
                                <toMoney :num="row.amount" decimals="2" />
                                {{ symbol }}
                            </td>
                            <td data-label="Filled" class="text-center">
                                <toMoney :num="row.fill" decimals="2" />
                                {{ symbol }}
                            </td>
                            <td data-label="Status" class="text-center">
                                <template v-if="row.fill == 0">
                                    <span class="badge bg-primary">
                                        {{ $t("Pending") }}
                                    </span>
                                    <button
                                        class="btn btn-sm btn-danger"
                                        :loading="loadingCancel"
                                        :disabled="loadingCancel"
                                        type="button"
                                        @click="cancelOrder(row.id)"
                                    >
                                        {{ $t("Cancel") }}
                                    </button>
                                </template>
                                <span
                                    v-else-if="
                                        row.fill > 0 && row.fill != row.amount
                                    "
                                    class="badge bg-warning"
                                    >{{ $t("Filling") }}</span
                                >
                            </td>
                        </tr>
                    </template>
                    <template v-else
                        ><tr>
                            <td class="text-center" colspan="100%">
                                <div class="flex w-full justify-center">
                                    <img
                                        height="128"
                                        width="128"
                                        src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                        alt=""
                                    />
                                </div>
                                {{ $t("No Data Found") }}
                            </td>
                        </tr>
                    </template>
                </template>
            </VTable>

            <VTPagination
                v-model:currentPage="currentPageOpen"
                class="flex items-center justify-between p-3"
                aria-label="Table navigation"
                :total-pages="totalPagesOpen"
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
        <div
            id="closed-orders"
            class="pt-3"
            :class="isActive('closed-orders') ? '' : 'hidden'"
            role="tabpanel"
            style="min-height: 300px"
        >
            <VTable
                v-model:current-page="currentPage"
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                :data="closed_orders"
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
                        <VTh sort-key="order_id" scope="col" class="py-3 px-6">
                            <Col text="TxHash" />
                        </VTh>
                        <VTh sort-key="symbol" scope="col" class="py-3 px-6">
                            <Col text="Symbol" />
                        </VTh>
                        <VTh sort-key="side" scope="col" class="py-3 px-6">
                            <Col text="Side" />
                        </VTh>
                        <VTh sort-key="price" scope="col" class="py-3 px-6">
                            <Col text="Price" />
                        </VTh>
                        <VTh sort-key="amount" scope="col" class="py-3 px-6">
                            <Col text="Amount" />
                        </VTh>
                        <VTh sort-key="filled" scope="col" class="py-3 px-6">
                            <Col text="Filled" />
                        </VTh>
                        <VTh sort-key="status" scope="col" class="py-3 px-6">
                            <Col text="Status" />
                        </VTh>
                    </tr>
                </template>
                <template #body="{ rows }">
                    <template v-if="closed_orders.length > 0">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <td class="py-3 px-6" data-label="Date">
                                <toDate :time="row.created_at" />
                            </td>
                            <td data-label="TxHash" class="text-uppercase">
                                {{ row.id }}
                            </td>
                            <td data-label="Symbol" class="text-uppercase">
                                {{ row.pair }}
                            </td>
                            <td data-label="Side" class="text-uppercase">
                                <span
                                    v-if="row.type == 'BUY'"
                                    class="fw-bold text-success"
                                >
                                    {{ $t("Buy") }}</span
                                >
                                <span v-else class="fw-bold text-danger">
                                    {{ $t("Sell") }}</span
                                >
                            </td>
                            <td data-label="Price">
                                <toMoney :num="row.price" decimals="2" />
                                {{ currency }}
                            </td>
                            <td data-label="Amount">
                                <toMoney :num="row.amount" decimals="2" />
                                {{ symbol }}
                            </td>
                            <td data-label="Filled">
                                <toMoney :num="row.fill" decimals="2" />
                                {{ symbol }}
                            </td>
                            <td data-label="Status">
                                <span class="badge bg-success">{{
                                    $t("Filled")
                                }}</span>
                            </td>
                        </tr>
                    </template>
                    <template v-else
                        ><tr>
                            <td class="text-center" colspan="100%">
                                <div class="flex w-full justify-center">
                                    <img
                                        height="128"
                                        width="128"
                                        src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                        alt=""
                                    />
                                </div>
                                {{ $t("No Data Found") }}
                            </td>
                        </tr>
                    </template>
                </template>
            </VTable>

            <VTPagination
                v-model:currentPage="currentPage"
                class="flex items-center justify-between p-3"
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
    </div>
</template>

<script>
import { Button } from "flowbite-vue";
import toMoney from "../../../partials/toMoney.vue";
import toDate from "../../../partials/toDate.vue";
import Filter from "../../../partials/table/Filter.vue";
import Col from "../../../partials/table/Col.vue";
export default {
    // component list
    components: {
        toDate,
        toMoney,
        Filter,
        Col,
        Button,
    },
    props: ["market"],
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "open-orders",
            open_orders: [],
            closed_orders: [],
            currentPage: 1,
            totalPages: 0,
            currentPageOpen: 1,
            totalPagesOpen: 0,
            loadingCancel: false,
        };
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchOrders();
        // this.$events.on("MainOrderPlaced", (e) => this.fetchOrders());
    },

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        fetchOrders() {
            axios
                .post("/user/fetch/eco/trade/get/orders", {
                    symbol: this.market.currency,
                    symbol_chain: this.market.currency_chain,
                    currency: this.market.pair,
                    currency_chain: this.market.pair_chain,
                })
                .then((response) => {
                    this.open_orders = response.open_orders;
                    this.closed_orders = response.closed_orders;
                    if (this.open_orders.errorCode) {
                        this.fetchOrders();
                    }
                })
                .catch((error) => {});
        },
        cancelOrder(id) {
            this.loadingCancel = true;
            axios
                .post("/user/eco/order/cancel/" + id)
                .then((response) => {
                    if (response.data) {
                        response.message.forEach((msg) => {
                            this.$toast[response.type](msg);
                        });
                    } else {
                        this.$toast[response.type](response.message);
                    }
                    this.fetchOrders();
                })
                .catch((error) => {})
                .finally(() => {
                    this.loadingCancel = false;
                });
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
    },
};
</script>
