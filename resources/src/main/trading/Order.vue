<template>
    <div
        class="Order border border-gray-100 bg-white shadow dark:border-gray-700 dark:bg-gray-900"
    >
        <div class="w-full bg-gray-200 dark:bg-gray-800">
            <ul
                id="myTab"
                class="nf flex-cols -mb-px flex overflow-x-hidden text-center"
                role="tablist"
            >
                <li>
                    <a
                        id="tab-market-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('tab-market')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="tab-market"
                        :aria-selected="isActive('tab-market') ? true : false"
                        @click.prevent="setActive('tab-market')"
                    >
                        {{ $t("Spot") }}</a
                    >
                </li>
                <li>
                    <a
                        id="tab-limit"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('tab-limit')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="tab-limit"
                        :aria-selected="isActive('tab-limit') ? true : false"
                        @click.prevent="setActive('tab-limit')"
                    >
                        {{ $t("Limit") }}</a
                    >
                </li>
                <li>
                    <a
                        id="tab-wallets-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        :class="
                            !isActive('tab-wallets')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        type="button"
                        role="tab"
                        aria-controls="tab-wallets"
                        :aria-selected="isActive('tab-wallets') ? true : false"
                        @click.prevent="setActive('tab-wallets')"
                    >
                        {{ $t("Wallets") }}</a
                    >
                </li>
                <!-- <li class="mr-2 bg-gray-900">
                    <button class="nav-link" @click="cardhide()">
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </li> -->
            </ul>
        </div>
        <div id="tabContent" class="px-3 py-3">
            <div v-if="activeItem === 'tab-market'" id="tab-market">
                <div class="grid grid-cols-2 gap-5">
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="placeOrder('market', 'buy')"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <div
                                    class="group relative"
                                    @mouseover="showMB = true"
                                    @mouseleave="showMB = false"
                                >
                                    <input
                                        v-model="rangeMB"
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        class="w-full"
                                        :style="
                                            'background: `linear-gradient(to right, #fff 0%, #fff ' +
                                            rangeMB +
                                            '%, rgb(255 255 255 / 0.2) ' +
                                            rangeMB +
                                            '%, rgb(255 255 255 / 0.2) 100%)`'
                                        "
                                        @change="
                                            getPerc('buy', 'market', rangeMB)
                                        "
                                    />
                                    <div
                                        class="mt-1 flex w-full justify-between px-1"
                                    >
                                        <button
                                            :key="rangeMB"
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB >= 0
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('buy', 'market', 0)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('buy', 'market', 25)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB >= 50
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('buy', 'market', 50)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB >= 75
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('buy', 'market', 75)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB == 100
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('buy', 'market', 100)
                                            "
                                        ></button>
                                    </div>
                                    <div
                                        :class="{ hidden: !showMB }"
                                        class="bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                        style="top: -30px"
                                        :style="'left: ' + (rangeMB - 10) + '%'"
                                    >
                                        {{ rangeMB }}%
                                    </div>
                                </div>
                            </label>
                            <div class="flex">
                                <input
                                    :key="marketStore.market.id"
                                    v-model="amountMarketBuy"
                                    type="number"
                                    class="MarketBuy block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('market', 'buy')"
                                />
                                <span
                                    :key="marketStore.market.id"
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountMarketBuy = (
                                                parseFloat(amountMarketBuy) +
                                                Min
                                            ).toFixed(PrecisionAmount);
                                            calculatePrice('market', 'buy');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        class="px-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            parseFloat(amountMarketBuy) - Min >=
                                            0
                                                ? (amountMarketBuy = parseFloat(
                                                      parseFloat(
                                                          amountMarketBuy
                                                      ) - Min
                                                  ).toFixed(PrecisionAmount))
                                                : '';
                                            calculatePrice('market', 'buy');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ symbol }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div :key="marketStore.market.id" class="flex">
                                <input
                                    v-if="provider == 'binance'"
                                    v-model="totalbuymarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinCost"
                                    :max="Max"
                                    :step="StepPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    @change="
                                        calculateTotalPrice('market', 'buy')
                                    "
                                    @keyup="
                                        calculateTotalPrice('market', 'buy')
                                    "
                                />
                                <input
                                    v-else
                                    v-model="totalbuymarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-75 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    readonly
                                    disabled
                                    aria-label="Amount (to the nearest dollar)"
                                    @change="
                                        calculateTotalPrice('market', 'buy')
                                    "
                                    @keyup="
                                        calculateTotalPrice('market', 'buy')
                                    "
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div :key="marketStore.bestBid">
                            <button
                                v-if="marketStore.bestBid == null"
                                id="marketOrderBtnBuy"
                                class="btn btn-outline-success marketType flex w-full justify-center"
                                type="submit"
                                disabled
                            >
                                {{ $t("Loading Orderbook") }}...
                            </button>
                            <button
                                v-else
                                id="marketOrderBtnBuy"
                                class="btn btn-outline-success marketType flex w-full justify-center"
                                type="submit"
                                :disabled="loading"
                            >
                                {{ $t("Buy") }} {{ symbol }}
                            </button>
                        </div>
                    </form>
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="placeOrder('market', 'sell')"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Amount") }}</span>

                                <div
                                    class="group relative"
                                    @mouseover="showMS = true"
                                    @mouseleave="showMS = false"
                                >
                                    <input
                                        v-model="rangeMS"
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        class="w-full"
                                        :style="
                                            'background: `linear-gradient(to right, #fff 0%, #fff ' +
                                            rangeMS +
                                            '%, rgb(255 255 255 / 0.2) ' +
                                            rangeMS +
                                            '%, rgb(255 255 255 / 0.2) 100%)`'
                                        "
                                        @change="
                                            getPerc('sell', 'market', rangeMS)
                                        "
                                    />
                                    <div
                                        class="mt-1 flex w-full justify-between px-1"
                                    >
                                        <button
                                            :key="rangeMS"
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMS >= 0
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'market', 0)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMS >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'market', 25)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMS >= 50
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'market', 50)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMS >= 75
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'market', 75)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMS == 100
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'market', 100)
                                            "
                                        ></button>
                                    </div>
                                    <div
                                        :class="{ hidden: !showMS }"
                                        class="bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                        style="top: -30px"
                                        :style="'left: ' + (rangeMS - 10) + '%'"
                                    >
                                        {{ rangeMS }}%
                                    </div>
                                </div>
                            </label>
                            <div class="flex">
                                <input
                                    :key="marketStore.market.id"
                                    v-model="amountMarketSell"
                                    type="number"
                                    class="MarketSell block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('market', 'sell')"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountMarketSell = (
                                                parseFloat(amountMarketSell) +
                                                Min
                                            ).toFixed(PrecisionAmount);
                                            calculatePrice('market', 'sell');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        class="px-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            parseFloat(amountMarketSell) -
                                                Min >=
                                            0
                                                ? (amountMarketSell =
                                                      parseFloat(
                                                          parseFloat(
                                                              amountMarketSell
                                                          ) - Min
                                                      ).toFixed(
                                                          PrecisionAmount
                                                      ))
                                                : '';
                                            calculatePrice('market', 'sell');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ symbol }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div :key="marketStore.market.id" class="flex">
                                <input
                                    v-if="provider == 'binance'"
                                    v-model="totalsellmarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinCost"
                                    :max="Max"
                                    :step="StepPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    @change="
                                        calculateTotalPrice('market', 'sell')
                                    "
                                    @keyup="
                                        calculateTotalPrice('market', 'sell')
                                    "
                                />
                                <input
                                    v-else
                                    v-model="totalsellmarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-75 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    readonly
                                    disabled
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div :key="marketStore.bestBid">
                            <button
                                v-if="marketStore.bestBid == null"
                                id="marketOrderBtnSell"
                                class="btn btn-outline-danger marketType flex w-full justify-center"
                                type="submit"
                                disabled
                            >
                                {{ $t("Loading Orderbook") }}...
                            </button>
                            <button
                                v-else
                                id="marketOrderBtnSell"
                                class="btn btn-outline-danger marketType flex w-full justify-center"
                                type="submit"
                                :disabled="loading"
                            >
                                {{ $t("Sell") }} {{ symbol }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div v-if="activeItem === 'tab-limit'" id="tab-limit" class="">
                <div class="grid grid-cols-2 gap-5">
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="placeOrder('limit', 'buy')"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="text-dark mb-1 flex justify-between text-xs"
                            >
                                <span>Price</span>
                                <a class="text-warning" @click="getBestAsk()">{{
                                    $t("Best Ask")
                                }}</a>
                            </label>
                            <div class="mb-1 flex">
                                <input
                                    id="price"
                                    v-model="priceBuy"
                                    type="number"
                                    class="priceNowAsk block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinPrice"
                                    :max="MaxPrice"
                                    :step="MinPrice"
                                    required=""
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'buy')"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Amount") }}</span>
                                <div
                                    class="group relative"
                                    @mouseover="showLB = true"
                                    @mouseleave="showLB = false"
                                >
                                    <input
                                        v-model="rangeLB"
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        class="w-full"
                                        :style="
                                            'background: `linear-gradient(to right, #fff 0%, #fff ' +
                                            rangeLB +
                                            '%, rgb(255 255 255 / 0.2) ' +
                                            rangeLB +
                                            '%, rgb(255 255 255 / 0.2) 100%)`'
                                        "
                                        @change="
                                            getPerc('buy', 'limit', rangeLB)
                                        "
                                    />
                                    <div
                                        class="mt-1 flex w-full justify-between px-1"
                                    >
                                        <button
                                            :key="rangeLB"
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 0
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('buy', 'limit', 0)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('buy', 'limit', 25)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 50
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('buy', 'limit', 50)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 75
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('buy', 'limit', 75)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB == 100
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('buy', 'limit', 100)
                                            "
                                        ></button>
                                    </div>
                                    <div
                                        :class="{ hidden: !showLB }"
                                        class="bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                        style="top: -30px"
                                        :style="'left: ' + (rangeLB - 10) + '%'"
                                    >
                                        {{ rangeLB }}%
                                    </div>
                                </div>
                            </label>
                            <div class="flex">
                                <input
                                    :key="marketStore.market.id"
                                    v-model="amountLimitBuy"
                                    type="number"
                                    class="LimitBuy block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'buy')"
                                />
                                <span
                                    :key="marketStore.market.id"
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountLimitBuy = (
                                                parseFloat(amountLimitBuy) + Min
                                            ).toFixed(PrecisionAmount);
                                            calculatePrice('limit', 'buy');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        class="px-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            parseFloat(amountLimitBuy) - Min >=
                                            0
                                                ? (amountLimitBuy = parseFloat(
                                                      parseFloat(
                                                          amountLimitBuy
                                                      ) - Min
                                                  ).toFixed(PrecisionAmount))
                                                : '';
                                            calculatePrice('limit', 'buy');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ symbol }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div :key="marketStore.market.id" class="flex">
                                <input
                                    v-if="provider == 'binance'"
                                    v-model="totalbuylimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinCost"
                                    :max="MaxPrice"
                                    :step="StepLimitPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    @change="
                                        calculateTotalPrice('limit', 'buy')
                                    "
                                    @keyup="calculateTotalPrice('limit', 'buy')"
                                />
                                <input
                                    v-else
                                    v-model="totalbuylimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-75 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    readonly
                                    disabled
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div :key="marketStore.bestBid">
                            <button
                                v-if="marketStore.bestBid == null"
                                id="limitOrderBtnBuy"
                                class="btn btn-outline-success limitType flex w-full justify-center"
                                type="submit"
                                disabled
                            >
                                {{ $t("Loading Orderbook") }}...
                            </button>
                            <button
                                v-else
                                id="limitOrderBtnBuy"
                                class="btn btn-outline-success limitType flex w-full justify-center"
                                type="submit"
                                :disabled="loading"
                            >
                                {{ $t("Buy") }} {{ symbol }}
                            </button>
                        </div>
                    </form>
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="placeOrder('limit', 'sell')"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="text-dark mb-1 flex justify-between text-xs"
                            >
                                <span>{{ $t("Price") }}</span>
                                <a class="text-warning" @click="getBestBid()">{{
                                    $t("Best Bid")
                                }}</a>
                            </label>
                            <div class="mb-1 flex">
                                <input
                                    id="price"
                                    :key="marketStore.market.id"
                                    v-model="priceSell"
                                    type="number"
                                    class="priceNowAsk block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinPrice"
                                    :max="MaxPrice"
                                    :step="MinPrice"
                                    required=""
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'sell')"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Amount") }}</span>

                                <div
                                    class="group relative"
                                    @mouseover="showLS = true"
                                    @mouseleave="showLS = false"
                                >
                                    <input
                                        v-model="rangeLS"
                                        type="range"
                                        min="0"
                                        max="100"
                                        step="1"
                                        class="w-full"
                                        :style="
                                            'background: `linear-gradient(to right, #fff 0%, #fff ' +
                                            rangeLS +
                                            '%, rgb(255 255 255 / 0.2) ' +
                                            rangeLS +
                                            '%, rgb(255 255 255 / 0.2) 100%)`'
                                        "
                                        @change="
                                            getPerc('sell', 'limit', rangeLS)
                                        "
                                    />
                                    <div
                                        class="mt-1 flex w-full justify-between px-1"
                                    >
                                        <button
                                            :key="rangeLS"
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS >= 0
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="getPerc('sell', 'limit', 0)"
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'limit', 25)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS >= 50
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'limit', 50)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS >= 75
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'limit', 75)
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS == 100
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                getPerc('sell', 'limit', 100)
                                            "
                                        ></button>
                                    </div>
                                    <div
                                        :class="{ hidden: !showLS }"
                                        class="bg-primary absolute origin-bottom scale-y-0 rounded-md py-1 px-2 text-xs transition-transform duration-200 ease-in group-hover:scale-100"
                                        style="top: -30px"
                                        :style="'left: ' + (rangeLS - 10) + '%'"
                                    >
                                        {{ rangeLS }}%
                                    </div>
                                </div>
                            </label>
                            <div class="flex">
                                <input
                                    :key="marketStore.market.id"
                                    v-model="amountLimitSell"
                                    type="number"
                                    class="LimitSell block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'sell')"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountLimitSell = (
                                                parseFloat(amountLimitSell) +
                                                Min
                                            ).toFixed(PrecisionAmount);
                                            calculatePrice('limit', 'sell');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        class="px-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            parseFloat(amountLimitSell) - Min >=
                                            0
                                                ? (amountLimitSell = parseFloat(
                                                      parseFloat(
                                                          amountLimitSell
                                                      ) - Min
                                                  ).toFixed(PrecisionAmount))
                                                : '';
                                            calculatePrice('limit', 'sell');
                                        "
                                        ><i class="bi bi-caret-down-fill"></i
                                    ></a>
                                </span>
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ symbol }}</span
                                >
                            </div>
                        </div>
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Total") }}</span>
                                <span
                                    >{{ $t("Processing Fee") }}:
                                    <span class="text-warning"
                                        >{{ fee }}%</span
                                    ></span
                                >
                            </label>
                            <div :key="marketStore.market.id" class="flex">
                                <input
                                    v-if="provider == 'binnace'"
                                    v-model="totalselllimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="MinCost"
                                    :max="MaxPrice"
                                    :step="StepLimitPrice"
                                    aria-label="Amount (to the nearest dollar)"
                                    @change="
                                        calculateTotalPrice('limit', 'sell')
                                    "
                                    @keyup="
                                        calculateTotalPrice('limit', 'sell')
                                    "
                                />
                                <input
                                    v-else
                                    v-model="totalselllimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-75 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    disabled
                                    readonly
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <div :key="marketStore.bestBid">
                            <button
                                v-if="marketStore.bestBid == null"
                                id="limitOrderBtnSell"
                                class="btn btn-outline-danger limitType flex w-full justify-center"
                                type="submit"
                                disabled
                            >
                                {{ $t("Loading Orderbook") }}...
                            </button>
                            <button
                                v-else
                                id="limitOrderBtnSell"
                                class="btn btn-outline-danger limitType flex w-full justify-center"
                                type="submit"
                                :disabled="loading"
                            >
                                {{ $t("Sell") }} {{ symbol }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div v-if="activeItem === 'tab-wallets'" id="tab-wallets">
                <div class="grid grid-cols-2 gap-5">
                    <div :key="marketStore.walSym">
                        <label
                            for="basic-url"
                            class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                        >
                            <a class="text-dark"
                                >{{ symbol }} {{ $t("Wallet") }}</a
                            >
                        </label>
                        <form
                            v-if="marketStore.walSym == null"
                            @submit.prevent="
                                marketStore.createWallet(symbol, 1)
                            "
                        >
                            <button
                                type="submit"
                                class="btn btn-outline-success"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </button>
                        </form>
                        <div v-else class="mb-1 flex">
                            <input
                                :key="marketStore.walSym"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :value="marketStore.walSym"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >{{ symbol }}</span
                            >
                        </div>
                    </div>
                    <div :key="marketStore.walCur">
                        <label
                            for="basic-url"
                            class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                        >
                            <a class="text-dark">{{ currency }} Wallet</a>
                        </label>
                        <form
                            v-if="marketStore.walCur == null"
                            @submit.prevent="
                                marketStore.createWallet(currency, 2)
                            "
                        >
                            <button
                                type="submit"
                                class="btn btn-outline-success"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </button>
                        </form>
                        <div v-else class="mb-1 flex">
                            <input
                                :key="marketStore.walCur"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :value="marketStore.walCur"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                >{{ currency }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useMarketStore } from "../../store/market";
import { useUserStore } from "../../store/user";
import { useRoute } from "vue-router";
export default {
    // component list
    components: {},
    props: ["fee", "pfee", "api"],
    async setup() {
        const route = useRoute();
        const userStore = useUserStore();
        const marketStore = useMarketStore();

        await marketStore.exchange.loadMarkets();
        marketStore.market = marketStore.exchange.market(
            route.params.symbol + "/" + route.params.currency
        );
        return { marketStore, userStore };
    },
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "tab-market",
            amountMarketBuy: 0,
            amountMarketSell: 0,
            amountLimitBuy: 0,
            amountLimitSell: 0,
            provider: provider,
            priceBuy: 0,
            priceSell: 0,
            loading: false,
            totalbuymarket: 0,
            totalsellmarket: 0,
            totalbuylimit: 0,
            totalselllimit: 0,
            rangeMB: 0,
            showMB: false,
            rangeMS: 0,
            showMS: false,
            rangeLB: 0,
            showLB: false,
            rangeLS: 0,
            showLS: false,
        };
    },
    computed: {
        Min() {
            return this.marketStore.market.limits.amount.min;
        },
        MinPrice() {
            return provider === "binance"
                ? this.marketStore.market.limits.price.min
                : this.marketStore.market.precision.price;
        },
        MinCost() {
            return this.marketStore.market.limits.cost.min;
        },
        StepPrice() {
            return provider === "binance"
                ? this.marketStore.market.limits.price.min
                : this.marketStore.market.limits.cost.min;
        },
        StepLimitPrice() {
            return Number(this.marketStore.market.limits.price.min).toFixed(
                this.marketStore.market.precision.price
            );
        },
        Max() {
            return this.marketStore.market.limits.amount.max;
        },
        MaxPrice() {
            return this.marketStore.market.limits.price.max;
        },
        PrecisionAmount() {
            return provider === "binance"
                ? this.marketStore.market.precision.amount
                : this.marketStore.market.precision.amount
                      .toString()
                      .split(".")[1].length || 0;
        },
        PrecisionPrice() {
            return provider === "binance"
                ? this.marketStore.market.precision.price
                : this.marketStore.market.precision.price
                      .toString()
                      .split(".")[1].length || 0;
        },
        PrecisionAmountStep() {
            return this.marketStore.market.precision.amount;
        },
        PrecisionPriceStep() {
            return this.marketStore.market.precision.price;
        },
    },

    // on component created
    created() {
        if (this.api == 1) {
            this.marketStore.wallet_type = "trading";
        } else {
            this.marketStore.wallet_type = "funding";
        }
        this.marketStore.fetchWallet(this.symbol, 1);
        this.marketStore.fetchWallet(this.currency, 2);
    },

    // on component mounted
    async mounted() {},

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
        handleError(error) {
            this.$toast.error(error.response.data.message);
            this.loading = false;
        },

        postOrder(params) {
            axios
                .post("/user/trade/store", params)
                .then((response) => {
                    this.$toast[response.type](response.message);
                    this.$emit("OrderPlaced");
                    this.fetchWallets();
                    this.loading = false;
                })
                .catch((error) => {
                    this.handleError(error);
                });
        },

        fetchWallets() {
            this.marketStore.fetchWallet(this.symbol, 1);
            this.marketStore.fetchWallet(this.currency, 2);
        },
        placeOrder(type, side) {
            this.loading = true;

            let price;
            let order;
            let amount;

            if (type === "market") {
                if (side === "buy") {
                    price = this.marketStore.bestAsk;
                    order = 1;
                    amount = this.amountMarketBuy;
                } else if (side === "sell") {
                    price = this.marketStore.bestBid;
                    order = 2;
                    amount = this.amountMarketSell;
                }
            } else if (type === "limit") {
                if (side === "buy") {
                    price = this.priceBuy;
                    order = 1;
                    amount = this.amountLimitBuy;
                } else if (side === "sell") {
                    price = this.priceSell;
                    order = 2;
                    amount = this.amountLimitSell;
                }
            }

            if (!price || !order || !amount) {
                this.$toast.error(
                    "Please wait for orderbook to load or set a valid price"
                );
                this.loading = false;
                return;
            }

            this.postOrder({
                amount,
                symbol: this.symbol,
                currency: this.currency,
                tradeType: order,
                type: order,
                wallettype: this.marketStore.wallet_type,
                price,
            });
        },
        getPerc(side, type, perc) {
            if (!this.marketStore.bestAsk || !this.marketStore.bestBid) {
                this.$toast.error("Waiting for Orderbook...");
                return;
            }

            const wallet =
                side === "buy"
                    ? this.marketStore.walCur
                    : this.marketStore.walSym;
            const bestPrice =
                side === "buy"
                    ? this.marketStore.bestAsk
                    : this.marketStore.bestBid;
            const price =
                type === "limit"
                    ? side === "buy"
                        ? this.priceBuy
                        : this.priceSell
                    : bestPrice;
            const totalPerc = wallet * (perc / 100);

            if (!wallet) {
                this.$toast.error(
                    `Create ${
                        side === "buy" ? this.currency : this.symbol
                    } Wallet First`
                );
                return;
            }

            const amount = totalPerc / price;
            const total = wallet * (perc / 100);

            const rangeKey = `range${type === "market" ? "M" : "L"}${
                side === "buy" ? "B" : "S"
            }`;
            this[rangeKey] = perc;

            const amountKey = `amount${type === "market" ? "Market" : "Limit"}${
                side === "buy" ? "Buy" : "Sell"
            }`;
            this[amountKey] = amount.toFixed(this.PrecisionAmount);

            const totalKey = `total${side === "buy" ? "buy" : "sell"}${
                type === "market" ? "market" : "limit"
            }`;
            this[totalKey] = total.toFixed(this.PrecisionPrice);
        },
        calculatePrice(type, action) {
            const isBuying = action === "buy";
            const bestPrice = isBuying
                ? this.marketStore.bestAsk
                : this.marketStore.bestBid;
            if (bestPrice === null) {
                this.$toast.error("Try Again");
                return;
            }

            const amount = isBuying
                ? type === "market"
                    ? this.amountMarketBuy
                    : this.amountLimitBuy
                : type === "market"
                ? this.amountMarketSell
                : this.amountLimitSell;

            const price = isBuying
                ? this.priceBuy || bestPrice
                : this.priceSell || bestPrice;
            const totalKey = `total${action}${type}`;
            const amountKey = `amount${action}${type}`;

            this[totalKey] = (
                (amount * price) /
                (isBuying ? 1 : this.pfee)
            ).toFixed(this.PrecisionPrice);
            this[amountKey] = (
                (this[totalKey] / price) *
                (isBuying ? 1 : this.pfee)
            ).toFixed(this.PrecisionAmount);
        },

        calculateTotalPrice(type, side) {
            const bestPrice =
                side === "buy"
                    ? this.marketStore.bestAsk
                    : this.marketStore.bestBid;
            if (!bestPrice) return this.$toast.error("Try Again");

            const price =
                type === "market"
                    ? bestPrice
                    : side === "buy"
                    ? this.priceBuy || bestPrice
                    : this.priceSell || bestPrice;
            const total =
                type === "market"
                    ? side === "buy"
                        ? this.totalbuymarket
                        : this.totalsellmarket
                    : side === "buy"
                    ? this.totalbuylimit
                    : this.totalselllimit;
            const amount =
                side === "buy"
                    ? (total / price) * this.pfee
                    : total / price / this.pfee;

            const prop = `amount${type[0].toUpperCase() + type.slice(1)}${
                side[0].toUpperCase() + side.slice(1)
            }`;
            this[prop] = amount.toFixed(this.PrecisionAmount);
        },

        getBestAsk() {
            this.priceBuy = this.marketStore.bestAsk;
        },
        getBestBid() {
            this.priceSell = this.marketStore.bestBid;
        },
    },
};
</script>
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
