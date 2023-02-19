<template>
    <div
        class="Markets border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
    >
        <div class="mb-4 flex border-gray-200 dark:border-gray-800">
            <button
                class="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                @click.prevent="scrollLeft()"
            >
                <i class="bi bi-chevron-left text-warning"></i>
            </button>
            <ul
                id="myTab"
                class="nf flex-cols -mb-px flex overflow-x-hidden bg-gray-200 text-center text-sm font-medium dark:bg-gray-800"
                role="tablist"
            >
                <li>
                    <small
                        ><a
                            class="inline-block px-2 py-1 text-gray-600 dark:text-gray-300"
                            :class="
                                !isActive('fav')
                                    ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                    : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                            "
                            @click="setActive('fav')"
                            ><i class="bi bi-star bi-icon"></i></a
                    ></small>
                </li>
                <li v-if="ext.eco == 1 && marketStore.ecos != ''">
                    <small
                        ><a
                            class="inline-block px-2 py-1 text-gray-600 dark:text-gray-300"
                            :class="
                                !isActive('eco')
                                    ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                    : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                            "
                            @click="setActive('eco')"
                            ><i class="bi bi-award bi-icon"></i></a
                    ></small>
                </li>
                <li
                    v-for="(mark, key, index) in marketStore.markets"
                    :key="index"
                >
                    <small>
                        <a
                            class="inline-block px-2 py-1 text-gray-600 dark:text-gray-300"
                            :class="
                                !isActive(key)
                                    ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                    : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                            "
                            @click="setActive(key)"
                            >{{ key }}</a
                        ></small
                    >
                </li>
            </ul>
            <button
                class="-mb-px bg-gray-200 px-1 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                @click.prevent="scrollRight()"
            >
                <i class="bi bi-chevron-right text-warning fs-6"></i>
            </button>
        </div>
        <div id="myTabContent" class="px-3">
            <MarketList
                v-if="activeItem === 'fav'"
                :key="marketStore.favs.length"
                :list="Object.values(marketStore.favs)"
                :type="type"
                :subtype="subtype"
                iffav="true"
                @fetchFavs="marketStore.fetch_favs()"
            ></MarketList>
            <MarketList
                v-if="activeItem === 'eco'"
                :key="marketStore.ecos.length"
                :list="Object.values(marketStore.ecos)"
                :type="type"
                :subtype="subtype"
                ifeco="true"
                @fetchFavs="marketStore.fetch_favs()"
            ></MarketList>
            <div
                v-for="(mark, key, index) in marketStore.markets"
                :key="index"
                :class="isActive(key) ? '' : 'hidden'"
            >
                <template v-if="activeItem === key">
                    <MarketList
                        :key="mark.length"
                        :list="Object.values(mark)"
                        :type="type"
                        :subtype="subtype"
                        @fetchFavs="marketStore.fetch_favs()"
                    ></MarketList>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import MarketList from "./MarketsList.vue";
import { useMarketStore } from "../../store/market";
export default {
    // component list
    components: { MarketList },
    props: ["type", "subtype"],
    setup() {
        const marketStore = useMarketStore();
        return { marketStore };
    },

    // component data
    data() {
        return {
            old: [],
            oldChange: [],
            ext: ext,
            provider: provider,
            activeItem: "USDT",
            tickerElements: [],
            changeElements: [],
        };
    },
    computed: {},

    // on component created
    created() {
        this.fetchMarkets();
        this.fetchFavs();
        if (ext.eco == 1 && this.$route.path.includes("binary") != true) {
            this.fetchEcos();
        }
        this.loop();
    },

    // on component mounted
    mounted() {},

    // custom methods
    methods: {
        async fetchMarkets() {
            if (this.marketStore.markets.length == 0) {
                await this.marketStore.fetch_markets(provider);
            }
        },
        async fetchFavs() {
            if (this.marketStore.favs.length == 0) {
                await this.marketStore.fetch_favs();
            }
        },
        async fetchEcos() {
            if (this.marketStore.ecos.length == 0) {
                await this.marketStore.fetch_ecos();
            }
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        scrollLeft() {
            var leftPos = $(".nf").scrollLeft();
            $(".nf").animate({ scrollLeft: leftPos - 200 }, 800);
        },
        scrollRight() {
            var leftPos = $(".nf").scrollLeft();
            $(".nf").animate({ scrollLeft: leftPos + 200 }, 800);
        },
        updateTickerElements(updates) {
            updates.forEach((update) => {
                const { tickerElement, newValue, symbol } = update;
                const oldValue = this.old[symbol];

                if (newValue > oldValue) {
                    tickerElement
                        .text(newValue)
                        .addClass("text-success")
                        .removeClass("text-danger");
                } else if (newValue < oldValue) {
                    tickerElement
                        .text(newValue)
                        .addClass("text-danger")
                        .removeClass("text-success");
                }

                this.old[symbol] = newValue;
            });
        },

        updateTickerIcons(updates) {
            updates.forEach((update) => {
                const { tickerIcon, newValue, symbol } = update;
                const oldValue = this.old[symbol];

                if (newValue > oldValue) {
                    tickerIcon
                        .addClass("bi-arrow-up text-success")
                        .removeClass("bi-arrow-down text-danger");
                } else if (newValue < oldValue) {
                    tickerIcon
                        .addClass("bi-arrow-down text-danger")
                        .removeClass("bi-arrow-up text-success");
                }
            });
        },

        updateChangeElements(updates) {
            updates.forEach((update) => {
                const { changeElement, newValue, symbol } = update;
                const oldValue = this.old[symbol];

                if (newValue > oldValue) {
                    changeElement
                        .text(`${this.formatTotal(newValue)}%`)
                        .addClass("bi-arrow-up text-success")
                        .removeClass("bi-arrow-down text-danger");
                } else if (newValue < oldValue) {
                    changeElement
                        .text(`${this.formatTotal(newValue)}%`)
                        .addClass("bi-arrow-down text-danger")
                        .removeClass("bi-arrow-up text-success");
                } else {
                    changeElement.text(`${this.formatTotal(newValue)}%`);
                }
            });
        },
        handle(tickers) {
            try {
                for (const [symbol, ticker] of Object.entries(tickers)) {
                    if (ticker.last) {
                        if (this.marketStore.markets[this.activeItem]) {
                            if (
                                this.marketStore.markets[this.activeItem][
                                    symbol
                                ]
                            ) {
                                this.marketStore.markets[this.activeItem][
                                    symbol
                                ]["price"] = ticker.last;
                                const isPriceIncrease =
                                    !this.old || ticker.last > this.old[symbol];
                                this.marketStore.markets[this.activeItem][
                                    symbol
                                ]["class"] = isPriceIncrease
                                    ? "text-success"
                                    : "text-danger";
                                if (ticker.percentage) {
                                    this.marketStore.markets[this.activeItem][
                                        symbol
                                    ]["change"] = ticker.percentage;
                                    const isChangeIncrease =
                                        !this.oldChange ||
                                        ticker.percentage >
                                            this.oldChange[symbol];
                                    this.marketStore.markets[this.activeItem][
                                        symbol
                                    ]["classChange"] = isChangeIncrease
                                        ? "text-success"
                                        : "text-danger";
                                }
                            }
                        }
                    }
                }
                this.old = Object.fromEntries(
                    Object.entries(tickers).map(([symbol, ticker]) => [
                        symbol,
                        ticker.last,
                    ])
                );
            } catch (error) {
                console.log(error);
            }
        },

        async loop() {
            while (
                window.location.href.indexOf(
                    this.$route.params.symbol +
                        "/" +
                        this.$route.params.currency
                ) > -1
            ) {
                try {
                    const tickers =
                        await this.marketStore.exchange.fetchTickers();
                    this.handle(tickers);
                } catch (e) {
                    break;
                }
            }
        },
        formatTotal(total) {
            return ccxt.decimalToPrecision(
                total,
                ccxt.ROUND,
                3,
                ccxt.DECIMAL_PLACES,
                ccxt.PAD_WITH_ZERO
            );
        },
    },
};
</script>
