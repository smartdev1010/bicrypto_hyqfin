<template>
    <div>
        <ul class="nav nav-tabs nav-fill" id="orders-tab" role="tablist">
            <li class="nav-item">
                <a
                    class="nav-link"
                    @click.prevent="setActive('open-orders')"
                    :class="{ active: isActive('open-orders') }"
                    href="#open-orders"
                    >{{ $t("Open Orders") }}</a
                >
            </li>
            <li class="nav-item">
                <a
                    class="nav-link"
                    @click.prevent="setActive('closed-orders')"
                    :class="{ active: isActive('closed-orders') }"
                    href="#closed-orders"
                    >{{ $t("Order History") }}</a
                >
            </li>
        </ul>

        <div class="tab-content" id="orders-tabContent">
            <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('open-orders') }"
                id="open-orders"
                role="tabpanel"
            >
                <div class="table-responsive">
                    <table class="table text-dark table-sm table-borderless">
                        <thead>
                            <tr>
                                <th v-if="!$isMobile()" scope="col">
                                    {{ $t("TxHash") }}
                                </th>
                                <th v-if="!$isMobile()" scope="col">
                                    {{ $t("Date") }}
                                </th>
                                <th v-if="!$isMobile()" scope="col">
                                    {{ $t("Pair") }}
                                </th>
                                <th scope="col">{{ $t("Type") }}</th>
                                <th scope="col">{{ $t("Price") }}</th>
                                <th scope="col">{{ $t("Amount") }}</th>
                                <th scope="col">{{ $t("Filled") }}</th>
                                <th scope="col">{{ $t("Status") }}</th>
                            </tr>
                        </thead>
                        <tbody
                            v-if="open_orders != null && open_orders.length > 0"
                        >
                            <tr
                                v-for="(order, index) in open_orders"
                                :key="index"
                            >
                                <td
                                    v-if="!$isMobile()"
                                    data-label="TxHash"
                                    class="text-uppercase"
                                >
                                    {{ order.id }}
                                </td>
                                <td
                                    v-if="!$isMobile()"
                                    data-label="Date"
                                    class="text-uppercase"
                                >
                                    {{
                                        order.created
                                            | moment("dddd, MMMM Do YYYY")
                                    }}
                                </td>
                                <td
                                    v-if="!$isMobile()"
                                    data-label="Pair"
                                    class="text-uppercase"
                                >
                                    {{ order.pair }}
                                </td>
                                <td data-label="Type" class="text-uppercase">
                                    <span
                                        v-if="order.type == 'BUY'"
                                        class="fw-bold text-success"
                                    >
                                        {{ $t("Buy") }}</span
                                    >
                                    <span v-else class="fw-bold text-danger">
                                        {{ $t("Sell") }}</span
                                    >
                                </td>
                                <td data-label="Price">
                                    {{ order.price | toMoney(4) }}
                                    {{ currency }}
                                </td>
                                <td data-label="Amount">
                                    {{ order.amount | toMoney(4) }}
                                    {{ symbol }}
                                </td>
                                <td data-label="Filled">
                                    {{ order.fill }}
                                    {{ symbol }}
                                </td>
                                <td data-label="Status">
                                    <template v-if="order.fill == 0">
                                        <span class="badge bg-primary">
                                            {{ $t("Pending") }}
                                        </span>
                                        <span
                                            class="badge bg-danger"
                                            @click="cancelOrder(order.id)"
                                            >{{ $t("Cancel") }}</span
                                        >
                                    </template>
                                    <span
                                        v-else-if="
                                            order.fill > 0 &&
                                            order.fill != order.amount
                                        "
                                        class="badge bg-warning"
                                        >{{ $t("Filling") }}</span
                                    >
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td
                                    class="text-muted text-center"
                                    colspan="100%"
                                >
                                    <img
                                        height="128px"
                                        width="128px"
                                        src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                        alt=""
                                    />
                                    <p class="">{{ $t("No Data Found") }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('closed-orders') }"
            id="closed-orders"
            role="tabpanel"
        >
            <div class="table-responsive">
                <table class="table text-dark table-sm table-borderless">
                    <thead>
                        <tr>
                            <th v-if="!$isMobile()" scope="col">
                                {{ $t("TxHash") }}
                            </th>
                            <th v-if="!$isMobile()" scope="col">
                                {{ $t("Date") }}
                            </th>
                            <th v-if="!$isMobile()" scope="col">
                                {{ $t("Pair") }}
                            </th>
                            <th scope="col">{{ $t("Side") }}</th>
                            <th scope="col">{{ $t("Price") }}</th>
                            <th scope="col">{{ $t("Amount") }}</th>
                            <th scope="col">{{ $t("Filled") }}</th>
                            <th scope="col">{{ $t("Status") }}</th>
                        </tr>
                    </thead>
                    <tbody
                        v-if="closed_orders != null && closed_orders.length > 0"
                    >
                        <tr
                            v-for="(order, index) in closed_orders"
                            :key="index"
                        >
                            <td
                                v-if="!$isMobile()"
                                data-label="TxHash"
                                class="text-uppercase"
                            >
                                {{ order.id }}
                            </td>
                            <td
                                v-if="!$isMobile()"
                                data-label="Date"
                                class="text-uppercase"
                            >
                                {{
                                    order.created | moment("dddd, MMMM Do YYYY")
                                }}
                            </td>
                            <td
                                v-if="!$isMobile()"
                                data-label="Pair"
                                class="text-uppercase"
                            >
                                {{ order.pair }}
                            </td>
                            <td data-label="Type" class="text-uppercase">
                                <span
                                    v-if="order.type == 'BUY'"
                                    class="fw-bold text-success"
                                    >{{ $t("Buy") }}</span
                                >
                                <span v-else class="fw-bold text-danger">{{
                                    $t("Sell")
                                }}</span>
                            </td>
                            <td data-label="Price">
                                {{ order.price | toMoney(4) }}
                                {{ currency }}
                            </td>
                            <td data-label="Amount">
                                {{ order.amount | toMoney(4) }}
                                {{ symbol }}
                            </td>
                            <td data-label="Filled">
                                {{ order.fill }}
                                {{ symbol }}
                            </td>
                            <td data-label="Status">
                                <span class="badge bg-success">{{
                                    $t("Filled")
                                }}</span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td class="text-muted text-center" colspan="100%">
                                <img
                                    height="128px"
                                    width="128px"
                                    src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                    alt=""
                                />
                                <p class="">{{ $t("No Data Found") }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["market"],
    // component list
    components: {},

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "open-orders",
            open_orders: [],
            closed_orders: [],
        };
    },

    // custom methods
    methods: {
        fetchOrders() {
            this.$http
                .post("/user/fetch/eco/trade/get/orders", {
                    symbol: this.market.currency,
                    symbol_chain: this.market.currency_chain,
                    currency: this.market.pair,
                    currency_chain: this.market.pair_chain,
                })
                .then((response) => {
                    this.open_orders = response.data.open_orders;
                    this.closed_orders = response.data.closed_orders;
                    if (this.open_orders.errorCode) {
                        this.fetchOrders();
                    }
                })
                .catch((error) => {});
        },
        cancelOrder(id) {
            this.$http
                .post("/user/eco/order/cancel/" + id)
                .then((response) => {
                    if (response.data.data) {
                        response.data.message.forEach((msg) => {
                            this.$toast[response.data.type](msg);
                        });
                    } else {
                        this.$toast[response.data.type](response.data.message);
                    }
                    this.fetchOrders();
                })
                .catch((error) => {});
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchOrders();
        this.$events.on("MainOrderPlaced", (e) => this.fetchOrders());
    },

    // on component destroyed
    destroyed() {},
};
</script>
