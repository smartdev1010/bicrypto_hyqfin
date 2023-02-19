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
                            v-if="exchange != null && runningBot != null"
                            :exchange="exchange"
                            :runningBot="runningBot"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                runningBot
                            "
                        />
                        <div
                            v-else
                            class="text-muted text-center my-5"
                            colspan="100%"
                        >
                            <img
                                height="128px"
                                width="128px"
                                src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                alt=""
                            />
                            <p class="">{{ $t("No Running Bot Found") }}</p>
                        </div>
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
                                    'EcoTradingview'
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
                        <div
                            class="px-0"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'order'
                            "
                        >
                            <ul
                                class="nav nav-tabs"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li class="nav-item">
                                    <button
                                        class="nav-link"
                                        @click.prevent="
                                            setActive('pills-market')
                                        "
                                        :class="{
                                            active: isActive('pills-market'),
                                        }"
                                        href="#pills-market"
                                    >
                                        {{ $t("Bot Settings") }}
                                    </button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div
                                    class="tab-pane fade"
                                    :class="{
                                        'active show': isActive('pills-market'),
                                    }"
                                    id="pills-market"
                                    role="tabpanel"
                                    aria-labelledby="pills-market-tab"
                                >
                                    <form id="Order" @submit.prevent="Order()">
                                        <div class="row pb-1 px-1">
                                            <div class="col-6">
                                                <label
                                                    for="selectBot"
                                                    class="form-label d-flex justify-content-between text-1 text-dark"
                                                >
                                                    <span>{{
                                                        $t("Bots")
                                                    }}</span>
                                                </label>
                                                <div>
                                                    <button
                                                        type="button"
                                                        class="w-100 btn btn-primary btn-sm mb-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#botTypeModal"
                                                        ref="selectBot"
                                                    >
                                                        {{ $t("Select Bot") }}
                                                    </button>
                                                </div>
                                                <label
                                                    v-if="bot_times != null"
                                                    for="botTimed"
                                                    class="form-label d-flex justify-content-between text-1 text-dark"
                                                >
                                                    <span>{{
                                                        $t("Duration")
                                                    }}</span>
                                                </label>
                                                <div
                                                    class="dropdown"
                                                    v-if="bot_times != null"
                                                >
                                                    <button
                                                        class="w-100 btn btn-outline-warning btn-sm dropdown-toggle mb-1"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        ref="botTimed"
                                                        name="botTimed"
                                                    >
                                                        {{ $t("Duration") }}
                                                    </button>
                                                    <ul
                                                        class="dropdown-menu dropdown-menu-end"
                                                    >
                                                        <li
                                                            v-for="(
                                                                timing, index
                                                            ) in bot_times"
                                                            :key="index"
                                                        >
                                                            <a
                                                                class="dropdown-item"
                                                                @click="
                                                                    setTiming(
                                                                        timing.duration,
                                                                        timing.type
                                                                    )
                                                                "
                                                                >{{
                                                                    timing.duration
                                                                }}
                                                                {{
                                                                    timing.type
                                                                }}s</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <label
                                                    for="botTimed"
                                                    class="form-label d-flex justify-content-between text-1 text-dark"
                                                >
                                                    <span>{{
                                                        $t("Launch")
                                                    }}</span>
                                                </label>
                                                <div class="d-grid" :key="ask">
                                                    <button
                                                        class="w-100 btn btn-success btn-sm btn-sm"
                                                        type="submit"
                                                        disabled
                                                        v-if="ask == null"
                                                    >
                                                        {{
                                                            $t(
                                                                "Loading Orderbook"
                                                            )
                                                        }}...
                                                    </button>
                                                    <button
                                                        class="w-100 btn btn-success btn-sm d-flex align-items-center justify-content-between"
                                                        type="submit"
                                                        :disabled="loading"
                                                        v-else
                                                    >
                                                        <i
                                                            class="bi bi-battery-charging fs-3"
                                                        ></i
                                                        ><span>
                                                            {{
                                                                $t("Start Bot")
                                                            }}</span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <label
                                                    for="basic-url"
                                                    class="form-label d-flex justify-content-between text-1 text-light"
                                                >
                                                    <a class="text-light">{{
                                                        $t("Wallet")
                                                    }}</a>
                                                </label>
                                                <div
                                                    class="input-group input-group-sm mb-1"
                                                >
                                                    <input
                                                        v-if="balance !== null"
                                                        type="number"
                                                        class="form-control text-white border-0"
                                                        :key="balance"
                                                        :value="balance"
                                                        readonly
                                                        aria-label="Amount (to the nearest dollar)"
                                                    />
                                                    <form
                                                        v-else
                                                        @submit.prevent="
                                                            createWallet()
                                                        "
                                                    >
                                                        <button
                                                            type="submit"
                                                            class="btn btn-success w-100"
                                                        >
                                                            {{
                                                                $t(
                                                                    "Create Wallet"
                                                                )
                                                            }}
                                                        </button>
                                                    </form>
                                                    <span
                                                        class="input-group-text text-light border-0"
                                                        >{{ currency }}</span
                                                    >
                                                </div>
                                                <label
                                                    for="Amount"
                                                    class="form-label d-flex justify-content-between text-1 text-dark"
                                                >
                                                    <span>{{
                                                        $t("Amount")
                                                    }}</span>
                                                </label>
                                                <div
                                                    class="input-group input-group-sm mb-1"
                                                >
                                                    <input
                                                        type="number"
                                                        class="form-control text-dark border-0"
                                                        :min="min_amount"
                                                        :key="min_amount"
                                                        :max="max_amount"
                                                        :step="0.0001"
                                                        required=""
                                                        v-model="amount"
                                                        placeholder="Amount"
                                                        aria-label="Amount (to the nearest dollar)"
                                                    />
                                                    <span
                                                        class="input-group-text text-dark border-0"
                                                        >{{ currency }}</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
                            v-if="exchange != null"
                            :exchange="exchange"
                            @bestAsk="setBestAsk"
                            :key="
                                this.$route.params.symbol +
                                this.$route.params.currency +
                                'Orderbook'
                            "
                        />
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
                        v-if="exchange != null && runningBot != null"
                        :exchange="exchange"
                        :runningBot="runningBot"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            runningBot
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
                    <div
                        v-else
                        class="text-muted text-center my-5"
                        colspan="100%"
                    >
                        <img
                            height="128px"
                            width="128px"
                            src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                            alt=""
                        />
                        <p class="">{{ $t("No Running Bot Found") }}</p>
                    </div>
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
                            'Marketinfo'
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
                                    'EcoTradingview'
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
                    </div>
                    <div
                        class="darked tabbable shadow"
                        style="margin-top: 5px"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'order'
                        "
                    >
                        <ul class="nav nav-tabs" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <button
                                    class="nav-link"
                                    @click.prevent="setActive('pills-market')"
                                    :class="{
                                        active: isActive('pills-market'),
                                    }"
                                    href="#pills-market"
                                >
                                    {{ $t("Bot Settings") }}
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div
                                class="tab-pane fade"
                                :class="{
                                    'active show': isActive('pills-market'),
                                }"
                                id="pills-market"
                                role="tabpanel"
                                aria-labelledby="pills-market-tab"
                            >
                                <form id="Order" @submit.prevent="Order()">
                                    <div class="row pb-1 px-1">
                                        <div class="col-6">
                                            <label
                                                for="selectBot"
                                                class="form-label d-flex justify-content-between text-1 text-dark"
                                            >
                                                <span>{{ $t("Bots") }}</span>
                                            </label>
                                            <div>
                                                <button
                                                    type="button"
                                                    class="w-100 btn btn-primary btn-sm mb-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#botTypeModal"
                                                    ref="selectBot"
                                                >
                                                    {{ $t("Select Bot") }}
                                                </button>
                                            </div>
                                            <label
                                                v-if="bot_times != null"
                                                for="botTimed"
                                                class="form-label d-flex justify-content-between text-1 text-dark"
                                            >
                                                <span>{{
                                                    $t("Duration")
                                                }}</span>
                                            </label>
                                            <div
                                                class="dropdown"
                                                v-if="bot_times != null"
                                            >
                                                <button
                                                    class="w-100 btn btn-outline-warning btn-sm dropdown-toggle mb-1"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                    ref="botTimed"
                                                    name="botTimed"
                                                >
                                                    {{ $t("Duration") }}
                                                </button>
                                                <ul
                                                    class="dropdown-menu dropdown-menu-end"
                                                >
                                                    <li
                                                        v-for="(
                                                            timing, index
                                                        ) in bot_times"
                                                        :key="index"
                                                    >
                                                        <a
                                                            class="dropdown-item"
                                                            @click="
                                                                setTiming(
                                                                    timing.duration,
                                                                    timing.type
                                                                )
                                                            "
                                                            >{{
                                                                timing.duration
                                                            }}
                                                            {{
                                                                timing.type
                                                            }}s</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <label
                                                for="botTimed"
                                                class="form-label d-flex justify-content-between text-1 text-dark"
                                            >
                                                <span>{{ $t("Launch") }}</span>
                                            </label>
                                            <div class="d-grid" :key="ask">
                                                <button
                                                    class="w-100 btn btn-success btn-sm btn-sm"
                                                    type="submit"
                                                    disabled
                                                    v-if="ask == null"
                                                >
                                                    {{
                                                        $t("Loading Orderbook")
                                                    }}...
                                                </button>
                                                <button
                                                    class="w-100 btn btn-success btn-sm d-flex align-items-center justify-content-between"
                                                    type="submit"
                                                    :disabled="loading"
                                                    v-else
                                                >
                                                    <i
                                                        class="bi bi-battery-charging fs-3"
                                                    ></i
                                                    ><span>
                                                        {{
                                                            $t("Start Bot")
                                                        }}</span
                                                    >
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <label
                                                for="basic-url"
                                                class="form-label d-flex justify-content-between text-1 text-light"
                                            >
                                                <a class="text-light">{{
                                                    $t("Wallet")
                                                }}</a>
                                            </label>
                                            <div
                                                class="input-group input-group-sm mb-1"
                                            >
                                                <input
                                                    v-if="balance !== null"
                                                    type="number"
                                                    class="form-control text-white border-0"
                                                    :key="balance"
                                                    :value="balance"
                                                    readonly
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                                <form
                                                    v-else
                                                    @submit.prevent="
                                                        createWallet()
                                                    "
                                                >
                                                    <button
                                                        type="submit"
                                                        class="btn btn-success w-100"
                                                    >
                                                        {{
                                                            $t("Create Wallet")
                                                        }}
                                                    </button>
                                                </form>
                                                <span
                                                    class="input-group-text text-light border-0"
                                                    >{{ currency }}</span
                                                >
                                            </div>
                                            <label
                                                for="Amount"
                                                class="form-label d-flex justify-content-between text-1 text-dark"
                                            >
                                                <span>{{ $t("Amount") }}</span>
                                            </label>
                                            <div
                                                class="input-group input-group-sm mb-1"
                                            >
                                                <input
                                                    type="number"
                                                    class="form-control text-dark border-0"
                                                    :min="min_amount"
                                                    :max="max_amount"
                                                    :step="0.0001"
                                                    required=""
                                                    v-model="amount"
                                                    placeholder="Amount"
                                                    aria-label="Amount (to the nearest dollar)"
                                                />
                                                <span
                                                    class="input-group-text text-dark border-0"
                                                    >{{ currency }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="col-lg-3 col-md-4"
                    style="padding: 0 5px !important"
                >
                    <Orderbook
                        v-if="exchange != null"
                        :exchange="exchange"
                        @bestAsk="setBestAsk"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'Orderbook'
                        "
                        class="darked tabbable shadow"
                        style="max-height: calc(100vh)"
                    />
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row g-0 match-height trading_row">
                <div v-if="plat.mobile.market_info == 1" class="col-12">
                    <Marketinfo
                        class="darked tabbable shadow"
                        style="
                            padding-right: 5px !important;
                            padding-left: 15px !important;
                            margin-bottom: 5px;
                        "
                        v-if="exchange != null"
                        :exchange="exchange"
                        :key="
                            this.$route.params.symbol +
                            this.$route.params.currency +
                            'marketinfo'
                        "
                    />
                </div>
                <div class="col-12">
                    <ul
                        class="nav nav-tabs nav-fill darked tabbable shadow"
                        style="font-size: 12px !important"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li class="nav-item" v-if="plat.mobile.charting == 1">
                            <button
                                class="nav-link"
                                @click.prevent="setActivee('pills-chart')"
                                :class="{ active: isActivee('pills-chart') }"
                                href="#pills-chart"
                            >
                                {{ $t("Chart") }}
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click.prevent="setActivee('pills-orderbook')"
                                :class="{
                                    active: isActivee('pills-orderbook'),
                                }"
                                href="#pills-orderbook"
                            >
                                {{ $t("Orderbook") }}
                            </button>
                        </li>
                        <li class="nav-item" v-if="plat.mobile.trades == 1">
                            <button
                                class="nav-link"
                                @click.prevent="setActivee('pills-trades')"
                                :class="{ active: isActivee('pills-trades') }"
                                href="#pills-trades"
                            >
                                {{ $t("Trades") }}
                            </button>
                        </li>
                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click.prevent="setActivee('pills-markets')"
                                :class="{ active: isActivee('pills-markets') }"
                                href="#pills-markets"
                            >
                                {{ $t("Markets") }}
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            v-if="plat.mobile.charting == 1"
                            class="tab-pane fade"
                            :class="{ 'active show': isActivee('pills-chart') }"
                            id="pills-chart"
                            role="tabpanel"
                            aria-labelledby="pills-chart-tab"
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
                            class="tab-pane fade"
                            :class="{
                                'active show': isActivee('pills-orderbook'),
                            }"
                            id="pills-orderbook"
                            role="tabpanel"
                            aria-labelledby="pills-orderbook-tab"
                        >
                            <OrderbookMobile
                                class="darked tabbable shadow"
                                style="max-height: calc(100vh)"
                                v-if="exchange != null"
                                :exchange="exchange"
                                @bestAsk="setBestAsk"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    'orderbook'
                                "
                            />
                        </div>
                        <div
                            v-if="plat.mobile.trades == 1"
                            class="tab-pane fade"
                            :class="{
                                'active show': isActivee('pills-trades'),
                            }"
                            id="pills-trades"
                            role="tabpanel"
                            aria-labelledby="pills-trades-tab"
                        >
                            <Trades
                                v-if="exchange != null && runningBot != null"
                                :exchange="exchange"
                                :runningBot="runningBot"
                                :key="
                                    this.$route.params.symbol +
                                    this.$route.params.currency +
                                    runningBot
                                "
                                class="darked tabbable shadow"
                                style="
                                    margin: 5px 0 5px 0;
                                    overflow-y: auto;
                                    overflow-x: hidden;
                                    min-height: calc(50vh);
                                    z-index: 2;
                                "
                            />
                        </div>
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActivee('pills-markets'),
                            }"
                            id="pills-markets"
                            role="tabpanel"
                            aria-labelledby="pills-markets-tab"
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
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-if="orderbtn == true"
                :key="orderbtn"
                class="darked tabbable shadow"
                style="
                    position: fixed;
                    bottom: 0%;
                    width: 100%;
                    opacity: 1;
                    z-index: 2;
                    margin-bottom: 29px;
                    padding: 8px;
                    margin-top: 5px;
                    border-top: #7367f0 solid 1px;
                "
            >
                <button
                    class="btn btn-success btn-sm w-100 d-flex justify-content-center align-items-center"
                    @click="
                        ordercard = !ordercard;
                        orderbtn = !orderbtn;
                    "
                >
                    <i class="bi bi-chevron-up fs-3 me-1"></i
                    ><span> {{ $t("Start Bot") }}</span>
                </button>
            </div>
            <div
                v-if="ordercard == true"
                :key="ordercard"
                class="darked"
                style="
                    position: fixed;
                    bottom: 0%;
                    width: 100%;
                    background-color: #000;
                    opacity: 1;
                    z-index: 3;
                    margin-bottom: 29px;
                    border-top: #7367f0 solid 1px;
                "
            >
                <div
                    class="darked tabbable shadow"
                    style="margin-top: 1px"
                    :key="
                        this.$route.params.symbol +
                        this.$route.params.currency +
                        'order'
                    "
                >
                    <ul
                        class="nav nav-tabs nav-fill"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click.prevent="setActive('pills-market')"
                                :class="{
                                    active: isActive('pills-market'),
                                }"
                                href="#pills-market"
                            >
                                {{ $t("Bot Settings") }}
                            </button>
                        </li>

                        <li class="nav-item">
                            <button
                                class="nav-link"
                                @click="
                                    ordercard = !ordercard;
                                    orderbtn = !orderbtn;
                                "
                            >
                                <i class="bi bi-chevron-down"></i>
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div
                            class="tab-pane fade"
                            :class="{
                                'active show': isActive('pills-market'),
                            }"
                            id="pills-market"
                            role="tabpanel"
                            aria-labelledby="pills-market-tab"
                        >
                            <form id="Order" @submit.prevent="Order()">
                                <div class="row pb-1 px-1">
                                    <div class="col-6">
                                        <label
                                            for="selectBot"
                                            class="form-label d-flex justify-content-between text-1 text-dark"
                                        >
                                            <span>{{ $t("Bots") }}</span>
                                        </label>
                                        <div>
                                            <button
                                                type="button"
                                                class="w-100 btn btn-primary btn-sm mb-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#botTypeModal"
                                                ref="selectBot"
                                            >
                                                {{ $t("Select Bot") }}
                                            </button>
                                        </div>
                                        <label
                                            v-if="bot_times != null"
                                            for="botTimed"
                                            class="form-label d-flex justify-content-between text-1 text-dark"
                                        >
                                            <span>{{ $t("Duration") }}</span>
                                        </label>
                                        <div
                                            class="dropdown"
                                            v-if="bot_times != null"
                                        >
                                            <button
                                                class="w-100 btn btn-outline-warning btn-sm dropdown-toggle mb-1"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                ref="botTimed"
                                                name="botTimed"
                                            >
                                                {{ $t("Duration") }}
                                            </button>
                                            <ul
                                                class="dropdown-menu dropdown-menu-end"
                                            >
                                                <li
                                                    v-for="(
                                                        timing, index
                                                    ) in bot_times"
                                                    :key="index"
                                                >
                                                    <a
                                                        class="dropdown-item"
                                                        @click="
                                                            setTiming(
                                                                timing.duration,
                                                                timing.type
                                                            )
                                                        "
                                                        >{{ timing.duration }}
                                                        {{ timing.type }}s</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <label
                                            for="botTimed"
                                            class="form-label d-flex justify-content-between text-1 text-dark"
                                        >
                                            <span>{{ $t("Launch") }}</span>
                                        </label>
                                        <div class="d-grid" :key="ask">
                                            <button
                                                class="w-100 btn btn-success btn-sm btn-sm"
                                                type="submit"
                                                disabled
                                                v-if="ask == null"
                                            >
                                                {{ $t("Loading Orderbook") }}...
                                            </button>
                                            <button
                                                class="w-100 btn btn-success btn-sm d-flex align-items-center justify-content-between"
                                                type="submit"
                                                :disabled="loading"
                                                v-else
                                            >
                                                <i
                                                    class="bi bi-battery-charging fs-3"
                                                ></i
                                                ><span>
                                                    {{ $t("Start Bot") }}</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <label
                                            for="basic-url"
                                            class="form-label d-flex justify-content-between text-1 text-light"
                                        >
                                            <a class="text-light">{{
                                                $t("Wallet")
                                            }}</a>
                                        </label>
                                        <div
                                            class="input-group input-group-sm mb-1"
                                        >
                                            <input
                                                v-if="balance !== null"
                                                type="number"
                                                class="form-control text-white border-0"
                                                :key="balance"
                                                :value="balance"
                                                readonly
                                                aria-label="Amount (to the nearest dollar)"
                                            />
                                            <form
                                                v-else
                                                @submit.prevent="createWallet()"
                                            >
                                                <button
                                                    type="submit"
                                                    class="btn btn-success w-100"
                                                >
                                                    {{ $t("Create Wallet") }}
                                                </button>
                                            </form>
                                            <span
                                                class="input-group-text text-light border-0"
                                                >{{ currency }}</span
                                            >
                                        </div>
                                        <label
                                            for="Amount"
                                            class="form-label d-flex justify-content-between text-1 text-dark"
                                        >
                                            <span>{{ $t("Amount") }}</span>
                                        </label>
                                        <div
                                            class="input-group input-group-sm mb-1"
                                        >
                                            <input
                                                type="number"
                                                class="form-control text-dark border-0"
                                                :min="
                                                    min_amount
                                                        ? min_amount
                                                        : 0.0001
                                                "
                                                :max="max_amount"
                                                :step="min_amount"
                                                :key="min_amount"
                                                required=""
                                                v-model="amount"
                                                placeholder="Amount"
                                                aria-label="Amount (to the nearest dollar)"
                                            />
                                            <span
                                                class="input-group-text text-dark border-0"
                                                >{{ currency }}</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="botTypeModal"
            tabindex="-1"
            aria-labelledby="botType"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body pb-3 px-sm-3">
                        <div
                            @click="setBot(bot)"
                            v-for="(bot, index) in bot_type"
                            :key="index"
                            style="stretched-link"
                        >
                            <div
                                class="row bg-wallet p-1 rounded mb-1"
                                :class="bot.id == 1 ? 'bg-wallet-active' : ''"
                            >
                                <div class="col-3">
                                    <img
                                        :src="
                                            bot.image
                                                ? 'assets/images/bot/' +
                                                  bot.image
                                                : '/market/notification.png'
                                        "
                                    />
                                </div>
                                <div class="col-9">
                                    <div class="d-flex justify-content-between">
                                        <div class="fw-bold fs-4 text-white">
                                            {{ bot.title }}
                                            <span
                                                v-if="bot.is_new == 1"
                                                class="fs-6 badge bg-success text-white"
                                                >{{ $t("New") }}</span
                                            >
                                        </div>
                                        <div
                                            class="fs-6 text-white d-none d-md-block"
                                        >
                                            <i class="bi bi-app-indicator"></i>
                                            {{ bot.fake }}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <small class="fs-6 text-warning">{{
                                            bot.desc
                                        }}</small>
                                        <div>
                                            {{ $t("Highest APR Today") }}:
                                            <span class="text-success"
                                                >{{ bot.perc }}%</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
import OrderbookMobile from "../../components/trading/OrderbookMobile.vue";
import Markets from "../../components/trading/Markets.vue";
import Trades from "../../components/bot/Trades.vue";
import { loadScript } from "vue-plugin-load-script";

let testLayouts = {
    xs: [
        { x: 0, y: 17, w: 2, h: 7, i: "0" }, // Markets
        { x: 0, y: 13, w: 2, h: 7, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 1, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 7, w: 4, h: 6, i: "4" }, // Order
        { x: 2, y: 13, w: 2, h: 14, i: "5" }, // Orderbook
    ],
    sm: [
        { x: 0, y: 16, w: 3, h: 7, i: "0" }, // Markets
        { x: 3, y: 16, w: 3, h: 6, i: "1" }, // Trades
        { x: 0, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 0, y: 2, w: 4, h: 7, i: "3" }, // Tradingview
        { x: 0, y: 10, w: 4, h: 5, i: "4" }, // Order
        { x: 4, y: 2, w: 2, h: 12, i: "5" }, // Orderbook
    ],
    md: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 6, i: "1" }, // Trades
        { x: 3, y: 0, w: 7, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 5, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 5, h: 5, i: "4" }, // Order
        { x: 8, y: 4, w: 2, h: 12, i: "5" }, // Orderbook
    ],
    lg: [
        { x: 0, y: 0, w: 3, h: 7, i: "0" }, // Markets
        { x: 0, y: 10, w: 3, h: 7, i: "1" }, // Trades
        { x: 3, y: 0, w: 6, h: 1, i: "2" }, // Marketinfo
        { x: 3, y: 2, w: 6, h: 7, i: "3" }, // Tradingview
        { x: 3, y: 10, w: 6, h: 6, i: "4" }, // Order
        { x: 9, y: 0, w: 3, h: 14, i: "5" }, // Orderbook
    ],
};

export default {
    props: ["user"],
    // component list
    components: {
        Marketinfo,
        Tradingview,
        EcoTradingview,
        Orderbook,
        OrderbookMobile,
        Markets,
        Trades,
        GridLayout,
        GridItem,
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "pills-market",
            provider: null,
            provide: null,
            limit: null,
            gnl: gnl,
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: true,
            responsive: true,
            bot_timing: null,
            bot_times: null,
            bot_type: null,
            runningBot: null,
            ask: null,
            loading: false,
            timing: null,
            amount: null,
            balance: null,
            bot_id: null,
            type: null,
            min_amount: null,
            max_amount: null,
            ext: ext,
            exchange: null,
            charting: null,
            plat: plat,
            activeItemm:
                plat.mobile.charting == 1 ? "pills-chart" : "pills-orderbook",
            ordercard: false,
            orderbtn: true,
        };
    },
    watch: {
        eventLog: function () {
            const eventsDiv = this.$refs.eventsDiv;
            eventsDiv.scrollTop = eventsDiv.scrollHeight;
        },
        async $route(to, from) {
            location.reload();
        },
    },

    // custom methods
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        isActivee(menuItem) {
            return this.activeItemm === menuItem;
        },
        setActivee(menuItem) {
            this.activeItemm = menuItem;
        },
        setBestAsk(value) {
            this.ask = value;
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        Order() {
            this.loading = true;
            if (this.ask > 0) {
                this.$http
                    .post("/user/store/bot", {
                        amount: this.amount,
                        botTime: this.timing,
                        bot_id: this.bot_id,
                        currency: this.currency,
                        symbol: this.symbol,
                        type: this.type,
                        price: this.ask,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                        this.fetchData();
                        this.fetchWallet();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please wait for orderbook to load");
                this.loading = false;
            }
        },
        setBot(bot) {
            this.$refs.selectBot.innerText = bot.title;
            this.bot_id = bot.id;
            var times = [];
            this.bot_timing.forEach((timing) => {
                if (timing.bot_id === bot.id) {
                    times.push(timing);
                }
            });
            this.bot_times = times;
            this.min_amount = JSON.parse(bot.limits).min_bot_amount;
            this.max_amount = JSON.parse(bot.limits).max_bot_amount;
            $("#botTypeModal").modal("hide");
        },
        setTiming(duration, type) {
            if (duration != 1) {
                this.$refs.botTimed.innerText = duration + " " + type + "s";
            } else {
                this.$refs.botTimed.innerText = duration + " " + type;
            }
            this.type = type;
            this.timing = duration;
        },
        fetchWallet() {
            this.$http
                .post("/user/fetch/wallet", {
                    type: "funding",
                    symbol: this.currency,
                })
                .then((response) => {
                    this.balance = response.data.balance;
                });
        },
        createWallet() {
            (this.loading = true),
                this.$http
                    .post("/user/wallet/j/create", {
                        type: "funding",
                        symbol: this.symbol,
                    })
                    .then((response) => {
                        this.fetchWallet();
                        this.$toast[response.data.type](response.data.message);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        fetchData() {
            this.$http
                .post("/user/fetch/bot/info", {
                    symbol: this.$route.params.symbol,
                    currency: this.$route.params.currency,
                })
                .then((response) => {
                    (this.provider = response.data.provider),
                        (this.bot_timing = response.data.bot_timing),
                        (this.bot_type = response.data.bot_type),
                        (this.runningBot = response.data.runningBot),
                        (this.provide = response.data.provide),
                        (this.limit = response.data.limit);
                });
        },
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
    },

    beforeCreate() {
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
    },
    created() {
        this.fetchData();
        this.fetchWallet();
    },
    mounted() {},
    // on component destroyed
    destroyed() {},
};
</script>
<style lang="scss" scope>
$dark: #171b29;
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
