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
                                <th scope="col" v-if="!$isMobile()">
                                    {{ $t("TxHash") }}
                                </th>
                                <th scope="col" v-if="!$isMobile()">
                                    {{ $t("Date") }}
                                </th>
                                <th scope="col" v-if="!$isMobile()">
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
                            v-if="orders.open != null && orders.open.length > 0"
                            :key="orders.open.order_id"
                        >
                            <tr
                                v-for="(order, index) in orders.open"
                                :key="index"
                            >
                                <td
                                    v-if="!$isMobile()"
                                    data-label="TxHash"
                                    class="text-uppercase"
                                >
                                    {{ order.order_id }}
                                </td>
                                <td
                                    v-if="!$isMobile()"
                                    data-label="Date"
                                    class="text-uppercase"
                                >
                                    {{
                                        order.created_at
                                            | moment("dddd, MMMM Do YYYY")
                                    }}
                                </td>
                                <td
                                    v-if="!$isMobile()"
                                    data-label="Pair"
                                    class="text-uppercase"
                                >
                                    {{ order.symbol }}
                                </td>
                                <td data-label="Side" class="text-uppercase">
                                    <span
                                        v-if="order.side == 'buy'"
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
                                    {{ order.pair }}
                                </td>
                                <td data-label="Amount">
                                    {{ order.amount | toMoney(4) }}
                                    {{ symbol }}
                                </td>
                                <td data-label="Filled">
                                    {{ order.filled | toMoney(4) }}
                                    {{ symbol }}
                                </td>
                                <td data-label="Status">
                                    <span
                                        v-if="order.status == 'open'"
                                        class="badge bg-primary"
                                        >{{ $t("Live") }}</span
                                    >
                                    <span
                                        v-else-if="order.status == 'filling'"
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
                        v-if="orders.closed != null && orders.closed.length > 0"
                        :key="orders.closed.order_id"
                    >
                        <tr
                            v-for="(order, index) in orders.closed"
                            :key="index"
                        >
                            <td
                                v-if="!$isMobile()"
                                data-label="TxHash"
                                class="text-uppercase"
                            >
                                {{ order.order_id }}
                            </td>
                            <td
                                v-if="!$isMobile()"
                                data-label="Date"
                                class="text-uppercase"
                            >
                                {{
                                    order.created_at
                                        | moment("dddd, MMMM Do YYYY")
                                }}
                            </td>
                            <td
                                v-if="!$isMobile()"
                                data-label="Pair"
                                class="text-uppercase"
                            >
                                {{ order.symbol }}
                            </td>
                            <td data-label="Side" class="text-uppercase">
                                <span
                                    v-if="order.side == 'buy'"
                                    class="fw-bold text-success"
                                    >{{ $t("Buy") }}</span
                                >
                                <span v-else class="fw-bold text-danger">{{
                                    $t("Sell")
                                }}</span>
                            </td>
                            <td data-label="Price">
                                {{ order.price | toMoney(4) }}
                                {{ order.pair }}
                            </td>
                            <td data-label="Amount">
                                {{ order.amount | toMoney(4) }}
                                {{ symbol }}
                            </td>
                            <td data-label="Filled">
                                {{ order.filled | toMoney(4) }}
                                {{ symbol }}
                            </td>
                            <td data-label="Status">
                                <span
                                    v-if="order.status == 'closed'"
                                    class="badge bg-success"
                                    >{{ $t("Filled") }}</span
                                >
                                <span
                                    v-else-if="order.status == 'open'"
                                    class="badge bg-primary"
                                    >{{ $t("Live") }}</span
                                >
                                <span v-else class="badge bg-danger">{{
                                    $t("Canceled")
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
    props: ["exchange"],
    // component list
    components: {},

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "open-orders",
            orders: [],
        };
    },

    // custom methods
    methods: {
        fetchOrders() {
            this.$http
                .post(
                    "/user/fetch/trade/orders/" +
                        this.symbol +
                        "/" +
                        this.currency
                )
                .then((response) => {
                    this.orders = response.data.orders;
                });
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        async updateTrades(trades) {
            console.log(trades);
        },
        async loopTrades() {
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ) > -1
            ) {
                try {
                    const data = await this.exchange.watchMyTrades(
                        this.$route.params.symbol +
                            "/" +
                            this.$route.params.currency
                    );
                    this.updateTrades(data);
                } catch (e) {
                    console.log(e);
                    break;
                }
            }
        },
    },

    // on component created
    created() {
        //this.loopTrades();
        this.fetchOrders();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
