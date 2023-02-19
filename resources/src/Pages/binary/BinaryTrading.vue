<template>
    <div>
        <div v-if="!$isMobile()">
            <div
                class="trading-page"
                v-if="
                    typeof plat.trading.trading_cards === 'undefined' ||
                    plat.trading.trading_cards == 1
                "
            >
                <grid-layout
                    :layout.sync="layout"
                    :responsive-layouts="layouts"
                    :col-num="12"
                    :row-height="50"
                    :is-draggable="draggable"
                    :is-resizable="resizable"
                    :vertical-compact="true"
                    :use-css-transforms="true"
                    :responsive="responsive"
                >
                    <grid-item
                        :x="layout[0].x"
                        :y="layout[0].y"
                        :w="layout[0].w"
                        :h="layout[0].h"
                        :i="layout[0].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked tabbable rounded shadow"
                        style="overflow-y: auto; overflow-x: hidden"
                    >
                        <Markets v-if="exchange != null" :exchange="exchange" />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[1].x"
                        :y="layout[1].y"
                        :w="layout[1].w"
                        :h="layout[1].h"
                        :i="layout[1].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked tabbable rounded shadow"
                        style="overflow-y: auto; overflow-x: hidden"
                    >
                        <Trades
                            v-if="exchange != null"
                            :exchange="exchange"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'Trades'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[2].x"
                        :y="layout[2].y"
                        :w="layout[2].w"
                        :h="layout[2].h"
                        :i="layout[2].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Marketinfo
                            v-if="exchange != null"
                            :exchange="exchange"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'Marketinfo'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[3].x"
                        :y="layout[3].y"
                        :w="layout[3].w"
                        :h="layout[3].h"
                        :i="layout[3].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                        id="creatable"
                    >
                        <template v-if="ext.eco == 1">
                            <EcoTradingview
                                v-if="charting != null"
                                :charting="charting"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'eco'
                                "
                            />
                        </template>
                        <template v-else>
                            <Tradingview
                                v-if="provide != null"
                                :provide="provide"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'Tradingview'
                                "
                            />
                        </template>
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[4].x"
                        :y="layout[4].y"
                        :w="layout[4].w"
                        :h="layout[4].h"
                        :i="layout[4].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Order
                            v-if="limit != null"
                            :limit="limit"
                            :user="user"
                            :gnl="gnl"
                            :type="type"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'Order'
                            "
                            @Ordered="fetchOrders()"
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[5].x"
                        :y="layout[5].y"
                        :w="layout[5].w"
                        :h="layout[5].h"
                        :i="layout[5].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <Orderbook
                            v-if="symbol != null && exchange != null"
                            :exchange="exchange"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'orderbook'
                            "
                        />
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                    <grid-item
                        :x="layout[6].x"
                        :y="layout[6].y"
                        :w="layout[6].w"
                        :h="layout[6].h"
                        :i="layout[6].i"
                        drag-allow-from=".vue-draggable-handle"
                        drag-ignore-from=".no-drag"
                        class="darked rounded shadow"
                    >
                        <ul class="nav nav-tabs" id="orders-tab" role="tablist">
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
                                    :class="{
                                        active: isActive('closed-orders'),
                                    }"
                                    href="#closed-orders"
                                    >{{ $t("Order History") }}</a
                                >
                            </li>
                        </ul>

                        <div class="tab-content" id="orders-tabContent">
                            <div
                                class="tab-pane fade"
                                :class="{
                                    'active show': isActive('open-orders'),
                                }"
                                id="open-orders"
                                role="tabpanel"
                            >
                                <div class="ordercard hidden">
                                    <div id="Chart"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('closed-orders'),
                            }"
                            id="closed-orders"
                            role="tabpanel"
                        >
                            <div class="table-responsive">
                                <v-table
                                    :data="orders"
                                    :currentPage.sync="currentPage"
                                    :pageSize="10"
                                    @totalPagesChanged="totalPages = $event"
                                    class="table text-dark table-sm table-borderless"
                                >
                                    <thead slot="head">
                                        <tr>
                                            <v-th
                                                sortKey="created_at"
                                                scope="col"
                                                >{{ $t("Date") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Pair") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Type") }}
                                            </th>
                                            <v-th
                                                sortKey="amount"
                                                scope="col"
                                                >{{ $t("Amount") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Price Was") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Duration") }}
                                            </th>
                                            <v-th
                                                sortKey="result"
                                                scope="col"
                                                >{{ $t("Result") }}</v-th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody
                                        slot="body"
                                        slot-scope="{ displayData }"
                                    >
                                        <tr
                                            v-for="row in displayData"
                                            :key="row.id"
                                        >
                                            <td
                                                data-label="Date"
                                                class="text-uppercase"
                                            >
                                                {{
                                                    row.created_at
                                                        | moment(
                                                            "dddd, MMMM Do YYYY"
                                                        )
                                                }}
                                            </td>
                                            <td
                                                data-label="Pair"
                                                class="text-uppercase"
                                            >
                                                {{ row.symbol }}
                                            </td>
                                            <td
                                                data-label="Type"
                                                class="text-uppercase"
                                            >
                                                <span
                                                    v-if="row.hilow == '1'"
                                                    class="fw-bold text-success"
                                                    >{{ $t("Rise") }}</span
                                                >
                                                <span
                                                    v-else
                                                    class="fw-bold text-danger"
                                                    >{{ $t("Fall") }}</span
                                                >
                                            </td>
                                            <td data-label="Amount">
                                                {{ row.amount | toMoney(4) }}
                                                {{ symbol }}
                                            </td>
                                            <td data-label="Price Was">
                                                {{ row.price_was | toMoney(4) }}
                                                {{ row.pair }}
                                            </td>
                                            <td data-label="Duration">
                                                <span
                                                    v-if="
                                                        row.duration > 60 &&
                                                        row.duration < 3600
                                                    "
                                                >
                                                    {{ (row.duration / 60, 2) }}
                                                    {{ $t("Min") }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        row.duration > 3600
                                                    "
                                                >
                                                    {{
                                                        (row.duration / 3600, 2)
                                                    }}
                                                    {{ $t("Hours") }}</span
                                                >
                                                <span v-else>
                                                    {{ row.duration }}
                                                    {{ $t("Sec") }}</span
                                                >
                                            </td>
                                            <td data-label="Result">
                                                <span
                                                    v-if="row.result == 1"
                                                    class="badge bg-success"
                                                    >{{ $t("Win") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 2"
                                                    class="badge bg-danger"
                                                    >{{ $t("Lose") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 3"
                                                    class="badge bg-warning"
                                                    >{{ $t("Draw") }}</span
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>

                                <div class="me-5 float-end">
                                    <smart-pagination
                                        :currentPage.sync="currentPage"
                                        :totalPages="totalPages"
                                    />
                                </div>
                            </div>
                        </div>
                        <span class="vue-draggable-handle"></span>
                    </grid-item>
                </grid-layout>
            </div>
            <div class="row match-height trading_row" v-else>
                <div
                    class="col-lg-3 col-md-4"
                    style="
                        padding-right: 5px !important;
                        padding-left: 5px !important;
                    "
                >
                    <Markets
                        v-if="exchange != null"
                        :exchange="exchange"
                        class="darked tabbable shadow"
                        style="
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                        "
                    />
                    <Trades
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'trades'
                        "
                        class="darked tabbable shadow"
                        style="
                            margin: 5px 0;
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                        "
                    />
                </div>
                <div
                    class="col-lg-6 col-md-8"
                    style="
                        padding-right: 5px !important;
                        padding-left: 5px !important;
                    "
                >
                    <Marketinfo
                        class="darked tabbable shadow"
                        style="margin-bottom: 5px"
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'marketinfo'
                        "
                    />
                    <div id="creatable" style="height: calc(55vh)">
                        <template v-if="ext.eco == 1">
                            <EcoTradingview
                                v-if="charting != null"
                                :charting="charting"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'eco'
                                "
                            />
                        </template>
                        <template v-else>
                            <Tradingview
                                v-if="provide != null"
                                :provide="provide"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'tradingview'
                                "
                            />
                        </template>
                    </div>
                    <Order
                        class="darked tabbable shadow"
                        style="margin-top: 5px"
                        v-if="limit != null"
                        :limit="limit"
                        :user="user"
                        :gnl="gnl"
                        :type="type"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'order'
                        "
                        @Ordered="fetchOrders()"
                    />
                </div>
                <div
                    class="col-lg-3 col-md-4"
                    style="padding: 0 5px !important"
                >
                    <Orderbook
                        class="darked tabbable shadow"
                        style="max-height: calc(100vh)"
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'orderbook'
                        "
                    />
                </div>
                <div
                    class="col-lg-12 col-md-8"
                    style="padding: 0 5px !important"
                >
                    <div class="darked tabbable shadow">
                        <ul class="nav nav-tabs" id="orders-tab" role="tablist">
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
                                    :class="{
                                        active: isActive('closed-orders'),
                                    }"
                                    href="#closed-orders"
                                    >{{ $t("Order History") }}</a
                                >
                            </li>
                        </ul>

                        <div class="tab-content" id="orders-tabContent">
                            <div
                                class="tab-pane fade"
                                :class="{
                                    'active show': isActive('open-orders'),
                                }"
                                id="open-orders"
                                role="tabpanel"
                            >
                                <div class="ordercard hidden">
                                    <div id="Chart"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('closed-orders'),
                            }"
                            id="closed-orders"
                            role="tabpanel"
                        >
                            <div class="table-responsive">
                                <v-table
                                    :data="orders"
                                    :currentPage.sync="currentPage"
                                    :pageSize="10"
                                    @totalPagesChanged="totalPages = $event"
                                    class="table text-dark table-sm table-borderless"
                                >
                                    <thead slot="head">
                                        <tr>
                                            <v-th
                                                sortKey="created_at"
                                                scope="col"
                                                >{{ $t("Date") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Pair") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Type") }}
                                            </th>
                                            <v-th
                                                sortKey="amount"
                                                scope="col"
                                                >{{ $t("Amount") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Price Was") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Duration") }}
                                            </th>
                                            <v-th
                                                sortKey="result"
                                                scope="col"
                                                >{{ $t("Result") }}</v-th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody
                                        slot="body"
                                        slot-scope="{ displayData }"
                                    >
                                        <tr
                                            v-for="row in displayData"
                                            :key="row.id"
                                        >
                                            <td
                                                data-label="Date"
                                                class="text-uppercase"
                                            >
                                                {{
                                                    row.created_at
                                                        | moment(
                                                            "dddd, MMMM Do YYYY"
                                                        )
                                                }}
                                            </td>
                                            <td
                                                data-label="Pair"
                                                class="text-uppercase"
                                            >
                                                {{ row.symbol }}
                                            </td>
                                            <td
                                                data-label="Type"
                                                class="text-uppercase"
                                            >
                                                <span
                                                    v-if="row.hilow == '1'"
                                                    class="fw-bold text-success"
                                                    >{{ $t("Rise") }}</span
                                                >
                                                <span
                                                    v-else
                                                    class="fw-bold text-danger"
                                                    >{{ $t("Fall") }}</span
                                                >
                                            </td>
                                            <td data-label="Amount">
                                                {{ row.amount | toMoney(4) }}
                                                {{ symbol }}
                                            </td>
                                            <td data-label="Price Was">
                                                {{ row.price_was | toMoney(4) }}
                                                {{ row.pair }}
                                            </td>
                                            <td data-label="Duration">
                                                <span
                                                    v-if="
                                                        row.duration > 60 &&
                                                        row.duration < 3600
                                                    "
                                                >
                                                    {{ (row.duration / 60, 2) }}
                                                    {{ $t("Min") }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        row.duration > 3600
                                                    "
                                                >
                                                    {{
                                                        (row.duration / 3600, 2)
                                                    }}
                                                    {{ $t("Hours") }}</span
                                                >
                                                <span v-else>
                                                    {{ row.duration }}
                                                    {{ $t("Sec") }}</span
                                                >
                                            </td>
                                            <td data-label="Result">
                                                <span
                                                    v-if="row.result == 1"
                                                    class="badge bg-success"
                                                    >{{ $t("Win") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 2"
                                                    class="badge bg-danger"
                                                    >{{ $t("Lose") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 3"
                                                    class="badge bg-warning"
                                                    >{{ $t("Draw") }}</span
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>

                                <div class="me-5 float-end">
                                    <smart-pagination
                                        :currentPage.sync="currentPage"
                                        :totalPages="totalPages"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row match-height trading_row">
                <div
                    v-if="plat.mobile.market_info == 1"
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                    "
                >
                    <Marketinfo
                        class="darked tabbable shadow"
                        style="margin-bottom: 5px"
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'marketinfo'
                        "
                    />
                </div>
                <div
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                        margin-top: 5px;
                    "
                >
                    <div
                        id="creatable"
                        style="height: calc(55vh)"
                        v-if="plat.mobile.charting == 1"
                    >
                        <template v-if="ext.eco == 1">
                            <EcoTradingview
                                v-if="charting != null"
                                :charting="charting"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'eco'
                                "
                            />
                        </template>
                        <template v-else>
                            <Tradingview
                                v-if="provide != null"
                                :provide="provide"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'tradingview'
                                "
                            />
                        </template>
                    </div>
                </div>
                <div
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                        margin-top: 5px;
                    "
                >
                    <Orderbook
                        class="darked tabbable shadow"
                        style="max-height: calc(100vh)"
                        v-if="exchange != null"
                        :exchange="exchange"
                        @bestAsk="setBestAsk"
                        @bestBid="setBestBid"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'orderbook'
                        "
                    />
                </div>
                <div
                    v-if="plat.mobile.orders == 1"
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                        margin-top: 5px;
                    "
                >
                    <div style="z-index: 2" class="darked tabbable shadow">
                        <ul class="nav nav-tabs" id="orders-tab" role="tablist">
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
                                    :class="{
                                        active: isActive('closed-orders'),
                                    }"
                                    href="#closed-orders"
                                    >{{ $t("Order History") }}</a
                                >
                            </li>
                        </ul>

                        <div class="tab-content" id="orders-tabContent">
                            <div
                                class="tab-pane fade"
                                :class="{
                                    'active show': isActive('open-orders'),
                                }"
                                id="open-orders"
                                role="tabpanel"
                            >
                                <div class="ordercard hidden">
                                    <div id="Chart"></div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('closed-orders'),
                            }"
                            id="closed-orders"
                            role="tabpanel"
                        >
                            <div class="table-responsive">
                                <v-table
                                    :data="orders"
                                    :currentPage.sync="currentPage"
                                    :pageSize="10"
                                    @totalPagesChanged="totalPages = $event"
                                    class="table text-dark table-sm table-borderless"
                                >
                                    <thead slot="head">
                                        <tr>
                                            <v-th
                                                sortKey="created_at"
                                                scope="col"
                                                >{{ $t("Date") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Pair") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Type") }}
                                            </th>
                                            <v-th
                                                sortKey="amount"
                                                scope="col"
                                                >{{ $t("Amount") }}</v-th
                                            >
                                            <th scope="col">
                                                {{ $t("Price Was") }}
                                            </th>
                                            <th scope="col">
                                                {{ $t("Duration") }}
                                            </th>
                                            <v-th
                                                sortKey="result"
                                                scope="col"
                                                >{{ $t("Result") }}</v-th
                                            >
                                        </tr>
                                    </thead>
                                    <tbody
                                        slot="body"
                                        slot-scope="{ displayData }"
                                    >
                                        <tr
                                            v-for="row in displayData"
                                            :key="row.id"
                                        >
                                            <td
                                                data-label="Date"
                                                class="text-uppercase"
                                            >
                                                {{
                                                    row.created_at
                                                        | moment(
                                                            "dddd, MMMM Do YYYY"
                                                        )
                                                }}
                                            </td>
                                            <td
                                                data-label="Pair"
                                                class="text-uppercase"
                                            >
                                                {{ row.symbol }}
                                            </td>
                                            <td
                                                data-label="Type"
                                                class="text-uppercase"
                                            >
                                                <span
                                                    v-if="row.hilow == '1'"
                                                    class="fw-bold text-success"
                                                    >{{ $t("Rise") }}</span
                                                >
                                                <span
                                                    v-else
                                                    class="fw-bold text-danger"
                                                    >{{ $t("Fall") }}</span
                                                >
                                            </td>
                                            <td data-label="Amount">
                                                {{ row.amount | toMoney(4) }}
                                                {{ symbol }}
                                            </td>
                                            <td data-label="Price Was">
                                                {{ row.price_was | toMoney(4) }}
                                                {{ row.pair }}
                                            </td>
                                            <td data-label="Duration">
                                                <span
                                                    v-if="
                                                        row.duration > 60 &&
                                                        row.duration < 3600
                                                    "
                                                >
                                                    {{ (row.duration / 60, 2) }}
                                                    {{ $t("Min") }}</span
                                                >
                                                <span
                                                    v-else-if="
                                                        row.duration > 3600
                                                    "
                                                >
                                                    {{
                                                        (row.duration / 3600, 2)
                                                    }}
                                                    {{ $t("Hours") }}</span
                                                >
                                                <span v-else>
                                                    {{ row.duration }}
                                                    {{ $t("Sec") }}</span
                                                >
                                            </td>
                                            <td data-label="Result">
                                                <span
                                                    v-if="row.result == 1"
                                                    class="badge bg-success"
                                                    >{{ $t("Win") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 2"
                                                    class="badge bg-danger"
                                                    >{{ $t("Lose") }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 3"
                                                    class="badge bg-warning"
                                                    >{{ $t("Draw") }}</span
                                                >
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>

                                <div class="me-5 float-end">
                                    <smart-pagination
                                        :currentPage.sync="currentPage"
                                        :totalPages="totalPages"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="plat.mobile.trades == 1"
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                        margin-top: 5px;
                    "
                >
                    <Trades
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'trades'
                        "
                        class="darked tabbable shadow"
                        style="
                            margin: 5px 0 5px 0;
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                            z-index: 2;
                        "
                    />
                </div>
                <div
                    class="col-12"
                    style="
                        padding-right: 5px !important;
                        padding-left: 15px !important;
                        margin-top: 5px;
                    "
                >
                    <Markets
                        v-if="exchange != null"
                        :exchange="exchange"
                        class="darked tabbable shadow"
                        style="
                            overflow-y: auto;
                            overflow-x: hidden;
                            min-height: calc(50vh);
                            max-height: calc(50vh);
                            z-index: 2;
                            margin-bottom: calc(35vh);
                        "
                    />
                </div>
            </div>
            <div
                style="
                    position: fixed;
                    bottom: 0%;
                    width: 100%;
                    background-color: #7367f0;
                    opacity: 1;
                    z-index: 99;
                    margin-bottom: 16px;
                "
            >
                <Order
                    class="darked tabbable shadow"
                    style="margin-top: 1px"
                    v-if="limit != null"
                    :limit="limit"
                    :user="user"
                    :gnl="gnl"
                    :type="type"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        'Order'
                    "
                    @Ordered="fetchOrders()"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import Marketinfo from "../../components/trading/Marketinfo.vue";
import Tradingview from "../../components/trading/Tradingview.vue";
import EcoTradingview from "../../components/eco/Tradingview.vue";
import Orderbook from "../../components/trading/Orderbook.vue";
import Markets from "../../components/trading/Markets.vue";
import Order from "../../components/binary/trading/Order.vue";
import Trades from "../../components/trading/Trades.vue";
import { loadScript } from "vue-plugin-load-script";

let testLayouts = {
    xs: [
        { x: 0, y: 17, w: 2, h: 7, i: "0" }, // Markets
        { x: 0, y: 13, w: 2, h: 7, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 1, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 7, w: 4, h: 6, i: "4" }, // Order
        { x: 2, y: 13, w: 2, h: 14, i: "5" }, // Orderbook
        { x: 0, y: 20, w: 6, h: 8, i: "6" }, // Orders
    ],
    sm: [
        { x: 0, y: 16, w: 3, h: 7, i: "0" }, // Markets
        { x: 3, y: 16, w: 3, h: 7, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 2, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 10, w: 4, h: 6, i: "4" }, // Order
        { x: 4, y: 2, w: 2, h: 13, i: "5" }, // Orderbook
        { x: 0, y: 24, w: 6, h: 8, i: "6" }, // Orders
    ],
    md: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 7, i: "1" }, // Trades
        { x: 3, y: 0, w: 7, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 5, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 5, h: 6, i: "4" }, // Order
        { x: 8, y: 4, w: 2, h: 13, i: "5" }, // Orderbook
        { x: 0, y: 18, w: 10, h: 8, i: "6" }, // Orders
    ],
    lg: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 7, i: "1" }, // Trades
        { x: 3, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 6, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 6, h: 6, i: "4" }, // Order
        { x: 9, y: 0, w: 3, h: 14, i: "5" }, // Orderbook
        { x: 0, y: 18, w: 12, h: 8, i: "6" }, // Orders
    ],
};

export default {
    props: ["user"],
    // component list
    components: {
        Marketinfo,
        Tradingview,
        EcoTradingview,
        Order,
        Orderbook,
        Markets,
        Trades,
        GridLayout,
        GridItem,
    },

    // component data
    data() {
        return {
            type: this.$route.params.type,
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "open-orders",
            orders: [],
            provider: null,
            provide: null,
            limit: null,
            gnl: gnl,
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: true,
            responsive: true,
            index: 0,
            currentPage: 1,
            totalPages: 0,
            ext: ext,
            exchange: null,
            charting: null,
            plat: plat,
        };
    },
    watch: {
        eventLog: function () {
            const eventsDiv = this.$refs.eventsDiv;
            eventsDiv.scrollTop = eventsDiv.scrollHeight;
        },
        async $route(to, from) {
            const connection =
                this.exchange.clients[Object.keys(this.exchange.clients)[1]];
            for (var key in connection.subscriptions) {
                const message = {
                    id: this.getRandomInt(0, 1000).toString(),
                    type: "unsubscribe",
                    topic: key,
                    privateChannel: false,
                    response: true,
                };
                connection.send(message);
            }
            await this.exchange.close();

            if (ext.eco == 1) {
                const eco_connection =
                    this.charting.clients[
                        Object.keys(this.charting.clients)[1]
                    ];
                for (var key in eco_connection.subscriptions) {
                    const message = {
                        id: this.getRandomInt(0, 1000).toString(),
                        type: "unsubscribe",
                        topic: key,
                        privateChannel: false,
                        response: true,
                    };
                    eco_connection.send(message);
                }
                await this.charting.close();
            }
            $("asks").empty();
            $("bids").empty();
            $("tradeTable").empty();
        },
    },

    // custom methods
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        fetchData() {
            this.$http
                .post(
                    "/user/fetch/binary/" +
                        this.$route.params.type +
                        "/" +
                        this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                )
                .then((response) => {
                    (this.provider = response.data.provider),
                        (this.provide = response.data.provide),
                        (this.limit = response.data.limit);
                });
        },
        fetchOrders() {
            this.$http
                .post(
                    "/user/fetch/binary/" + this.$route.params.type + "/orders"
                )
                .then((response) => {
                    this.orders = response.data.orders;
                });
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },

    created() {
        loadScript("/vendors/js/exchanges.js")
            .then(() => {
                const config = {
                    enableRateLimit: true,
                    //verbose: true,
                    proxy: gnl.cors,
                    options: {
                        tradesLimit: 10,
                    },
                };
                this.exchange = new ccxt[provider](config);
                if (ext.eco == 1) {
                    this.charting = new ccxt[provider](config);
                }
            })
            .catch(() => {
                // Failed to fetch script
            });
        this.fetchData();
        this.fetchOrders();
    },
    mounted() {},
    // on component destroyed
    destroyed() {},
};
</script>
<style lang="scss" scope>
$dark: #031219;
$light: #d5f0e9;
$ease-out-expo: cubic-bezier(0.005, 1, 0.22, 1);

:root {
    --theme-background-base: #{lighten($dark, 0%)};
    --theme-background-300: #{lighten($dark, 75%)};
    --theme-background-o75: #{rgba(lighten($dark, 10%), 0.75)};
    --theme-background-o20: #{rgba(lighten($dark, 10%), 0.2)};
    --theme-color-o75: #{rgba($light, 0.75)};
}

table {
    border-collapse: collapse;
    width: 100%;
    font-size: 11px;
    font-weight: 500;
    color: #b7bdc6;
    overflow: hidden;
    width: 100%;
}
.tdd {
    position: relative;
    height: 18px;
    line-height: 18px;
}
td {
    height: 12px;
    line-height: 12px;
    span {
        position: relative;
        z-index: 2;
    }
    .percent {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
    }
}
td.price {
    width: 30%;
    span {
        padding-left: 5px;
    }
}
td.quantity {
    width: 30%;
    text-align: right;
}
td.time {
    width: 40%;
    text-align: right;
    color: #999;
    padding-right: 5px;
}
td.btc {
    width: 40%;
    text-align: right;
    padding-right: 5px;
}
table.asks {
    .percent {
        background-color: rgba(246, 70, 94, 0.2);
    }
}
table.bids {
    .percent {
        background-color: rgba(14, 203, 129, 0.2);
    }
}
table.asks_only {
    .percent {
        background-color: rgba(246, 70, 94, 0.2);
    }
}
table.bids_only {
    .percent {
        background-color: rgba(14, 203, 129, 0.2);
    }
}
.order-loader {
    position: relative;
    right: 0px;
    top: 120px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #000000b5;
}
.se-pre-con2 {
    position: absolute;
    top: 50%;
    left: 50%;
}
.hidden {
    display: none;
}

.trading_row {
    margin: -20px -20px 5px -20px !important;
}
@media (max-width: 767.98px) {
    html {
        body.navbar-sticky {
            .app-content {
                padding: calc(1rem - 0.8rem + 4.45rem) 0 0 0 !important;
            }
        }
    }
    .trading_row {
        margin: 0 10px 0 0 !important;
    }
}
</style>
