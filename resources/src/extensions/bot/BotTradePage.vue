<template>
    <div style="font-family: BinancePlex, Arial, sans-serif !important">
        <div class="containered" style="margin: -20px; margin-bottom: 3px">
            <Marketinfo
                :key="
                    $route.params.symbol + $route.params.currency + 'Marketinfo'
                "
            />
            <Orderbook
                :key="
                    $route.params.symbol + $route.params.currency + 'Orderbook'
                "
            />
            <Markets
                style="overflow-y: auto; overflow-x: hidden"
                type="bot"
                subtype="non"
            />
            <Trades
                :key="
                    $route.params.symbol +
                    $route.params.currency +
                    runningBots.length
                "
                :running-bots="runningBots"
            />
            <div id="creatable" class="Chart border border-gray-700">
                <template v-if="ext.eco == 1 && provider != 'coinbasepro'">
                    <EcoTradingview
                        :key="
                            $route.params.symbol +
                            $route.params.currency +
                            'EcoTradingview'
                        "
                    />
                </template>
                <template v-else>
                    <Tradingview
                        v-if="provide != null"
                        :key="
                            $route.params.symbol +
                            $route.params.currency +
                            'Tradingview'
                        "
                        :provide="provide"
                    />
                </template>
            </div>
            <div
                :key="$route.params.symbol + $route.params.currency + 'order'"
                class="Order border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
            >
                <div class="w-full bg-gray-200 dark:bg-gray-800">
                    <ul
                        id="myTab"
                        class="nf flex-cols -mb-px flex overflow-x-hidden text-center"
                        role="tablist"
                    >
                        <li class="mr-2 bg-gray-900">
                            <a
                                id="bot-settings-tab"
                                class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                                :class="
                                    !isActive('bot-settings')
                                        ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                        : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                                "
                                type="button"
                                role="tab"
                                aria-controls="bot-settings"
                                aria-selected="false"
                                @click.prevent="setActive('bot-settings')"
                            >
                                {{ $t("Bot Settings") }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div id="orderContent" class="px-3 py-5">
                    <div
                        id="bot-settings"
                        :class="isActive('bot-settings') ? '' : 'hidden'"
                    >
                        <form id="Order" @submit.prevent="Order()">
                            <div class="grid grid-cols-2 gap-5">
                                <Button
                                    type="button"
                                    size="sm"
                                    class="w-full"
                                    @click="botStore.showModal()"
                                >
                                    {{
                                        active_bot.length != 0
                                            ? active_bot.title
                                            : $t("Select Bot")
                                    }}
                                </Button>
                                <select
                                    id="durations"
                                    :key="active_bot.length"
                                    ref="active_duration"
                                    :disabled="active_bot.length == 0"
                                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                >
                                    <option selected>
                                        {{ $t("Select Duration") }}
                                    </option>
                                    <template
                                        v-for="(
                                            timing, index
                                        ) in active_bot.timing"
                                        :key="index"
                                    >
                                        <option :value="timing.id">
                                            {{ timing.duration }}
                                            {{ timing.type }}s
                                        </option></template
                                    >
                                </select>
                                <div class="">
                                    <label
                                        for="Amount"
                                        class="form-label text-1 text-dark flex justify-between"
                                    >
                                        <span>{{ $t("Amount") }}</span>
                                    </label>
                                    <div class="flex">
                                        <input
                                            :key="active_bot.length"
                                            v-model="amount"
                                            :disabled="active_bot.length == 0"
                                            :class="{
                                                'opacity-50':
                                                    active_bot.length == 0,
                                            }"
                                            type="number"
                                            class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            :min="
                                                active_bot
                                                    ? active_bot.min_amount
                                                    : 0.00001
                                            "
                                            :max="
                                                active_bot
                                                    ? active_bot.max_amount
                                                    : 100000
                                            "
                                            :step="
                                                active_bot
                                                    ? active_bot.min_amount
                                                    : 0.00001
                                            "
                                            required=""
                                            placeholder="Amount"
                                            aria-label="Amount (to the nearest dollar)"
                                        />
                                        <span
                                            class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                            >{{ currency }}</span
                                        >
                                    </div>
                                </div>
                                <div :key="marketStore.bestAsk">
                                    <label
                                        for="botTimed"
                                        class="form-label text-1 text-dark flex justify-between"
                                    >
                                        <span>{{ $t("Launch") }}</span>
                                    </label>

                                    <Button
                                        v-if="marketStore.bestAsk == null"
                                        size="sm"
                                        class="w-full"
                                        color="alternative"
                                        disabled
                                    >
                                        {{ $t("Loading Orderbook") }}...
                                    </Button>
                                    <Button
                                        v-else
                                        size="sm"
                                        class="flex w-full items-center justify-between"
                                        color="green"
                                        :loading="loading"
                                        :disabled="loading"
                                    >
                                        <template #prefix
                                            ><i
                                                class="bi bi-battery-charging"
                                            ></i
                                        ></template>
                                        <span> {{ $t("Start Bot") }}</span>
                                    </Button>
                                </div>
                                <div class="">
                                    <label
                                        for="basic-url"
                                        class="form-label text-1 text-light flex justify-between"
                                    >
                                        <a class="text-light">{{
                                            $t("Wallet")
                                        }}</a>
                                    </label>
                                    <div class="flex">
                                        <div
                                            v-if="balance !== null"
                                            class="input-group"
                                        >
                                            <input
                                                :key="balance"
                                                type="number"
                                                :value="balance"
                                                readonly
                                                aria-label="Amount (to the nearest dollar)"
                                            />
                                            <span>{{ currency }}</span>
                                        </div>
                                        <form
                                            v-else
                                            @submit.prevent="createWallet()"
                                        >
                                            <button
                                                type="submit"
                                                class="btn btn-success w-full"
                                            >
                                                {{ $t("Create Wallet") }}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <Modal
            v-if="botStore.isShowModal"
            size="3xl"
            @close="botStore.closeModal()"
        >
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Top Ranking Bots") }}
                </div>
            </template>
            <template #body
                ><div
                    v-for="(bot, index) in bot_type"
                    :key="index"
                    class="mb-3 flex w-full cursor-pointer items-center rounded-lg p-3 shadow-lg"
                    :class="
                        bot.id == active_bot.id
                            ? 'bg-gray-300 dark:bg-gray-800'
                            : 'bg-white hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-700'
                    "
                    @click="setBot(bot)"
                >
                    <div class="mr-3">
                        <img
                            v-lazy="
                                bot.image
                                    ? '/assets/images/bot/' + bot.image
                                    : '/market/notification.png'
                            "
                        />
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between">
                            <div class="fw-bold fs-4 text-white">
                                {{ bot.title }}
                                <span
                                    v-if="bot.is_new == 1"
                                    class="badge bg-success text-white"
                                    >{{ $t("New") }}</span
                                >
                            </div>
                            <div class="text-white">
                                <i class="bi bi-app-indicator"></i>
                                {{ bot.uses }}
                            </div>
                        </div>
                        <div class="row">
                            <small class="text-warning">{{ bot.desc }}</small>
                            <div>
                                {{ $t("Highest APR Today") }}:
                                <span class="text-success"
                                    >{{ bot.perc }}%</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div class="flex justify-end">
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        @click="botStore.closeModal()"
                    >
                        {{ $t("Close") }}
                    </button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import { Modal, ListGroup, ListGroupItem, Button } from "flowbite-vue";
import Marketinfo from "../../main/trading/Marketinfo.vue";
import Orderbook from "../../main/trading/Orderbook.vue";
import Markets from "../../main/trading/Markets.vue";
import Trades from "./components/Trades.vue";
import { defineAsyncComponent } from "vue";
import { useUserStore } from "../../store/user";
import { useMarketStore } from "../../store/market";
import { useBotStore } from "../../store/bot";
export default {
    props: ["user"],
    setup() {
        const userStore = useUserStore();
        const marketStore = useMarketStore();
        const botStore = useBotStore();

        if (marketStore.exchange == null) {
            const config = {
                //enableRateLimit: true,
                // verbose: true,
                proxy: gnl.cors,
                options: {
                    tradesLimit: 10,
                },
                newUpdates: true,
                timeout: 20000,
            };
            marketStore.exchange = new ccxt.pro[provider](config);
        }
        return { userStore, marketStore, botStore };
    },
    // component list
    components: {
        Marketinfo,
        Tradingview: defineAsyncComponent(() =>
            import("../../main/trading/Tradingview.vue")
        ),
        EcoTradingview: defineAsyncComponent(() =>
            import("../eco/components/Tradingview.vue")
        ),
        Orderbook,
        Markets,
        Trades,
        Modal,
        ListGroup,
        ListGroupItem,
        Button,
    },

    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "bot-settings",
            provider: null,
            provide: null,
            gnl: gnl,
            runningBots: [],
            loading: false,
            amount: null,
            balance: null,
            active_bot: [],
            active_duration: null,
            min_amount: null,
            max_amount: null,
            ext: ext,
            plat: plat,
            activeItemm:
                plat.mobile.charting == 1 ? "pills-chart" : "pills-orderbook",
            ordercard: false,
            orderbtn: true,
        };
    },

    created() {
        this.fetchData();
        this.fetchWallet();
    },
    mounted() {},
    // on component destroyed
    unmounted() {},

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
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        Order() {
            this.loading = true;
            const time = this.active_bot.timing.find(
                (timing) =>
                    timing.id === Number(this.$refs.active_duration.value)
            );

            if (time) {
                if (this.marketStore.bestAsk > 0) {
                    axios
                        .post("/user/store/bot", {
                            amount: this.amount,
                            botTime: time.duration,
                            bot_id: this.active_bot.id,
                            currency: this.currency,
                            symbol: this.symbol,
                            type: time.type,
                            price: this.marketStore.bestAsk,
                        })
                        .then((response) => {
                            this.$toast[response.type](response.message);
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
            } else {
                this.$toast.error("Duration not found");
                this.loading = false;
            }
        },
        setBot(bot) {
            this.active_bot = bot;
            this.active_duration = null;
            this.active_bot.min_amount = JSON.parse(bot.limits).min_bot_amount;
            this.active_bot.max_amount = JSON.parse(bot.limits).max_bot_amount;
            this.botStore.closeModal();
        },
        fetchWallet() {
            axios
                .post("/user/fetch/wallet", {
                    type: "funding",
                    symbol: this.currency,
                })
                .then((response) => {
                    this.balance = response.balance;
                });
        },
        createWallet() {
            (this.loading = true),
                axios
                    .post("/user/wallet/j/create", {
                        type: "funding",
                        symbol: this.symbol,
                    })
                    .then((response) => {
                        this.fetchWallet();
                        this.$toast[response.type](response.message);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        fetchData() {
            axios
                .post("/user/fetch/bot/info", {
                    symbol: this.$route.params.symbol,
                    currency: this.$route.params.currency,
                })
                .then((response) => {
                    (this.provider = response.provider),
                        (this.bot_type = response.bot_type),
                        (this.runningBots = response.runningBots),
                        (this.provide = response.provide);
                });
        },
    },
};
</script>
<style lang="scss" scope>
table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    color: #b7bdc6;
    overflow: hidden;
}
@media only screen and (min-width: 1200px) {
    table {
        border-collapse: collapse;
        width: 100%;
        font-size: 13px;
        font-weight: 500;
        color: #b7bdc6;
        overflow: hidden;
    }
}
.tdd {
    position: relative;
    height: 18px;
    line-height: 18px;
}
td {
    .percent_ask {
        position: absolute;
        top: 0;
        height: 100%;
        bottom: 0;
        right: 0;
        background-color: rgba(246, 70, 94, 0.2);
    }
    .percent_bid {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        right: 0;
        background-color: rgba(14, 203, 129, 0.2);
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
</style>
