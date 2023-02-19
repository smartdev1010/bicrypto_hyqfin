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
                <li role="presentation">
                    <button
                        id="spot-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        type="button"
                        role="tab"
                        aria-controls="spot"
                        :aria-selected="isActive('spot') ? true : false"
                        :class="
                            !isActive('spot')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        @click="setActive('spot')"
                    >
                        {{ $t("Spot") }}
                    </button>
                </li>
                <li role="presentation">
                    <button
                        id="limit-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        type="button"
                        role="tab"
                        aria-controls="limit"
                        :aria-selected="isActive('limit') ? true : false"
                        :class="
                            !isActive('limit')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        @click="setActive('limit')"
                    >
                        {{ $t("Limit") }}
                    </button>
                </li>
                <li role="presentation">
                    <button
                        id="wallets-tab"
                        class="inline-block py-2 pl-3 pr-4 text-xs font-medium"
                        type="button"
                        role="tab"
                        aria-controls="wallets"
                        :aria-selected="isActive('wallets') ? true : false"
                        :class="
                            !isActive('wallets')
                                ? 'cursor-pointer border-transparent bg-gray-200 text-gray-400 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                                : 'border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                        "
                        @click="setActive('wallets')"
                    >
                        {{ $t("Wallets") }}
                    </button>
                </li>
            </ul>
        </div>
        <div id="myTabContent" class="px-3 py-3">
            <div
                id="spot"
                :class="{ hidden: !isActive('spot') }"
                role="tabpanel"
                aria-labelledby="spot-tab"
            >
                <div class="grid grid-cols-2 gap-5">
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="marketBuy()"
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
                                            calculatePercentage(
                                                'market',
                                                rangeMB,
                                                'buy'
                                            )
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
                                            @click="
                                                calculatePercentage(
                                                    'market',
                                                    0,
                                                    'buy'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeMB >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'market',
                                                    25,
                                                    'buy'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    50,
                                                    'buy'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    75,
                                                    'buy'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    100,
                                                    'buy'
                                                )
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
                                    :key="Min"
                                    v-model="amountMarketBuy"
                                    type="number"
                                    class="MarketBuy block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('market', 'buy')"
                                    @change="calculatePrice('market', 'buy')"
                                />
                                <span
                                    :key="ecoStore.market.id"
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountMarketBuy = Number(
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
                                                ? Number(
                                                      (amountMarketBuy =
                                                          parseFloat(
                                                              parseFloat(
                                                                  amountMarketBuy
                                                              ) - Min
                                                          ).toFixed(
                                                              PrecisionAmount
                                                          ))
                                                  )
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
                                    >{{ $t("Taker Fee") }}:
                                    <span class="text-warning"
                                        >{{
                                            ecoStore.market.taker || toMoney
                                        }}%</span
                                    ></span
                                >
                            </label>
                            <div class="flex">
                                <input
                                    v-model="totalbuyMarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    disabled
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <Button
                            id="marketOrderBtnBuy"
                            color="green"
                            outline
                            size="sm"
                            class="marketType w-full"
                            :loading="loading"
                            :disabled="loading || !ecoStore.bestAsk"
                            >{{
                                ecoStore.bestAsk
                                    ? $t("Buy") + " " + symbol
                                    : "No Asks Founds"
                            }}</Button
                        >
                    </form>
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="marketSell()"
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
                                            calculatePercentage(
                                                'market',
                                                rangeMS,
                                                'sell'
                                            )
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
                                                calculatePercentage(
                                                    'market',
                                                    0,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    25,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    50,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    75,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'market',
                                                    100,
                                                    'sell'
                                                )
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
                                    :key="Min"
                                    v-model="amountMarketSell"
                                    type="number"
                                    class="MarketSell block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min ? Min : 0"
                                    :max="Max"
                                    step="0.00000001"
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
                                            amountMarketSell = Number(
                                                parseFloat(amountMarketSell) +
                                                    Min
                                            ).toFixed(PrecisionAmount);
                                            calculatePrice('market', 'buy');
                                        "
                                        ><i class="bi bi-caret-up-fill"></i
                                    ></a>
                                    <a
                                        class="px-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            parseFloat(amountMarketSell) -
                                                Min >=
                                            0
                                                ? Number(
                                                      (amountMarketSell =
                                                          parseFloat(
                                                              parseFloat(
                                                                  amountMarketSell
                                                              ) - Min
                                                          ).toFixed(
                                                              PrecisionAmount
                                                          ))
                                                  )
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
                                    >{{ $t("Maker Fee") }}:
                                    <span class="text-warning"
                                        >{{
                                            ecoStore.market.maker || toMoney
                                        }}%</span
                                    ></span
                                >
                            </label>
                            <div class="flex">
                                <input
                                    v-model="totalsellMarket"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    disabled
                                    aria-label="Amount (to the nearest dollar)"
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <Button
                            id="marketOrderBtnSell"
                            color="red"
                            outline
                            size="sm"
                            class="marketType w-full"
                            :loading="loading"
                            :disabled="loading || !ecoStore.bestBid"
                            >{{
                                ecoStore.bestBid
                                    ? $t("Sell") + " " + symbol
                                    : "No Bids Found"
                            }}</Button
                        >
                    </form>
                </div>
            </div>
            <div
                id="limit"
                :class="{ hidden: !isActive('limit') }"
                role="tabpanel"
                aria-labelledby="limit-tab"
            >
                <div class="grid grid-cols-2 gap-5">
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="limitBuy()"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Price") }}</span>
                                <a class="text-warning" @click="getBestAsk()">{{
                                    $t("Best Ask")
                                }}</a>
                            </label>
                            <div class="flex">
                                <input
                                    id="price"
                                    v-model="priceBuy"
                                    type="number"
                                    class="priceNowAsk block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    min="0.00000001"
                                    step="0.00000001"
                                    required=""
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'buy')"
                                    @change="calculatePrice('limit', 'buy')"
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
                                            calculatePercentage(
                                                'limit',
                                                rangeLB,
                                                'buy'
                                            )
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
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    0,
                                                    'buy'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    25,
                                                    'buy'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 50
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    50,
                                                    'buy'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB >= 75
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    75,
                                                    'buy'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLB == 100
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    100,
                                                    'buy'
                                                )
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
                                    :key="Min"
                                    v-model="amountLimitBuy"
                                    type="number"
                                    class="LimitBuy block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min ? Min : 0"
                                    :max="Max"
                                    :step="Min"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'buy')"
                                    @change="calculatePrice('limit', 'buy')"
                                />
                                <span
                                    :key="ecoStore.market.id"
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountLimitBuy = Number(
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
                                                ? (amountLimitBuy = Number(
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
                                    >{{ $t("Taker Fee") }}:
                                    <span class="text-warning"
                                        >{{ ecoStore.market.taker }}%</span
                                    ></span
                                >
                            </label>
                            <div class="flex">
                                <input
                                    v-model="totalbuyLimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    aria-label="Amount (to the nearest dollar)"
                                    disabled
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <Button
                            id="limitOrderBtnBuy"
                            color="green"
                            outline
                            size="sm"
                            class="limitType w-full"
                            :loading="loading"
                            :disabled="loading"
                            >{{ $t("Buy") + " " + symbol }}</Button
                        >
                    </form>
                    <form
                        class="space-y-3 text-center"
                        @submit.prevent="limitSell()"
                    >
                        <div>
                            <label
                                for="basic-url"
                                class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                            >
                                <span>{{ $t("Price") }}</span>
                                <a class="text-warning" @click="getBestBid()">{{
                                    $t("Best Bid")
                                }}</a>
                            </label>
                            <div class="flex">
                                <input
                                    id="price"
                                    v-model="priceSell"
                                    type="number"
                                    class="priceNowAsk block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    min="0"
                                    step="0.00000001"
                                    required=""
                                    placeholder="Price"
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'sell')"
                                    @change="calculatePrice('limit', 'sell')"
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
                                            calculatePercentage(
                                                'limit',
                                                rangeLS,
                                                'sell'
                                            )
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
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    0,
                                                    'sell'
                                                )
                                            "
                                        ></button>
                                        <button
                                            class="flex h-1 w-1 items-center justify-center rounded-lg hover:-m-1 hover:h-3 hover:w-3"
                                            :class="
                                                rangeLS >= 25
                                                    ? 'bg-gray-900 dark:bg-gray-50'
                                                    : 'bg-gray-300 dark:bg-gray-500'
                                            "
                                            @click="
                                                calculatePercentage(
                                                    'limit',
                                                    25,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'limit',
                                                    50,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'limit',
                                                    75,
                                                    'sell'
                                                )
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
                                                calculatePercentage(
                                                    'limit',
                                                    100,
                                                    'sell'
                                                )
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
                                    :key="Min"
                                    v-model="amountLimitSell"
                                    type="number"
                                    class="LimitSell block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    :min="Min ? Min : 0"
                                    :max="Max"
                                    step="0.00000001"
                                    required=""
                                    aria-label="Amount (to the nearest dollar)"
                                    @keyup="calculatePrice('limit', 'sell')"
                                />
                                <span
                                    :key="ecoStore.market.id"
                                    class="inline-flex flex-shrink-0 flex-col items-center border border-gray-300 bg-gray-100 text-center text-xs text-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >
                                    <a
                                        class="border-b border-gray-300 px-2 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        @click="
                                            amountLimitSell = Number(
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
                                                ? (amountLimitSell = Number(
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
                                    >{{ $t("Maker Fee") }}:
                                    <span class="text-warning"
                                        >{{
                                            ecoStore.market.maker || toMoney
                                        }}%</span
                                    ></span
                                >
                            </label>
                            <div class="flex">
                                <input
                                    v-model="totalsellLimit"
                                    type="number"
                                    class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    aria-label="Amount (to the nearest dollar)"
                                    disabled
                                />
                                <span
                                    class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    >{{ currency }}</span
                                >
                            </div>
                        </div>
                        <Button
                            id="limitOrderBtnSell"
                            color="red"
                            outline
                            size="sm"
                            class="limitType w-full"
                            :loading="loading"
                            :disabled="loading"
                            >{{
                                $t("Sell") +
                                " " +
                                (symbol.includes("_")
                                    ? symbol.substring(0, symbol.indexOf("_"))
                                    : symbol)
                            }}</Button
                        >
                    </form>
                </div>
            </div>
            <div
                id="wallets"
                :class="{ hidden: !isActive('wallets') }"
                role="tabpanel"
                aria-labelledby="wallets-tab"
            >
                <div class="grid grid-cols-2 gap-5">
                    <div :key="'sym' + walletSymbol">
                        <label
                            for="basic-url"
                            class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                        >
                            <a class="text-dark"
                                >{{
                                    symbol.includes("_")
                                        ? symbol.substring(
                                              0,
                                              symbol.indexOf("_")
                                          )
                                        : symbol
                                }}
                                {{ $t("Wallet") }}</a
                            >
                        </label>
                        <form
                            v-if="walletSymbol == null"
                            @submit.prevent="
                                createWallet(
                                    ecoStore.market.currency,
                                    ecoStore.market.currency_chain
                                )
                            "
                        >
                            <Button
                                color="green"
                                outline
                                size="sm"
                                :loading="loading"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </Button>
                        </form>
                        <div v-else class="flex">
                            <input
                                :key="walletSymbol"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :value="walletSymbol"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >{{ ecoStore.market.currency }}</span
                            >
                        </div>
                    </div>
                    <div :key="'cur' + walletCurrency">
                        <label
                            for="basic-url"
                            class="border-1 peer flex w-full appearance-none justify-between rounded-lg border-gray-300 bg-transparent pb-2 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-500"
                        >
                            <a class="text-dark"
                                >{{
                                    currency.includes("_")
                                        ? currency.substring(
                                              0,
                                              currency.indexOf("_")
                                          )
                                        : currency
                                }}
                                {{ $t("Wallet") }}</a
                            >
                        </label>
                        <form
                            v-if="walletCurrency == null"
                            @submit.prevent="
                                createWallet(
                                    ecoStore.market.pair,
                                    ecoStore.market.pair_chain
                                )
                            "
                        >
                            <Button
                                color="green"
                                outline
                                size="sm"
                                :loading="loading"
                                :disabled="loading"
                            >
                                {{ $t("Create Wallet") }}
                            </Button>
                        </form>
                        <div v-else class="flex">
                            <input
                                :key="walletCurrency"
                                type="number"
                                class="block w-full rounded-l-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                :value="walletCurrency"
                                readonly
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <span
                                class="inline-flex flex-shrink-0 items-center rounded-r-md border border-gray-300 bg-gray-100 p-2 text-center text-xs text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                >{{ ecoStore.market.pair }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div :class="{ hidden: !isActive('tab-wallets') }" id="tab-wallets">
            </div> -->
    </div>
</template>

<script>
// component
import { Button } from "flowbite-vue";
import { useUserStore } from "../../../store/user";
import { useEcoStore } from "../../../store/eco";
export default {
    // component list
    components: { Button },
    setup() {
        const userStore = useUserStore();
        const ecoStore = useEcoStore();
        return { userStore, ecoStore };
    },
    // component data
    data() {
        return {
            symbol: this.$route.params.symbol,
            currency: this.$route.params.currency,
            activeItem: "limit",
            amountMarketBuy: 0,
            amountMarketSell: 0,
            amountLimitBuy: 0,
            amountLimitSell: 0,
            priceBuy: 0,
            priceSell: 0,
            loading: false,
            walletSymbol: null,
            walletCurrency: null,
            totalbuyMarket: 0,
            totalsellMarket: 0,
            totalbuyLimit: 0,
            totalsellLimit: 0,
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
            return Number.parseFloat(this.ecoStore.market.min_amount) || 0.0001;
        },
        Max() {
            return Number.parseFloat(this.ecoStore.market.max_amount) || 10000;
        },
        PrecisionAmount() {
            return (
                Number.parseFloat(this.ecoStore.market.min_amount)
                    .toString()
                    .split(".")[1].length || 6
            );
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchWallet(
            this.ecoStore.market.currency,
            this.ecoStore.market.currency_chain
        );
        this.fetchWallet(
            this.ecoStore.market.pair,
            this.ecoStore.market.pair_chain
        );
    },

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
        countDecimals(val) {
            if (Math.floor(val.valueOf()) === val.valueOf()) return 0;
            return val.toString().split(".")[1].length || 0;
        },
        fetchWallet(coin, chain) {
            axios
                .post("/user/fetch/eco/wallet", {
                    symbol: coin.includes("_")
                        ? coin.substring(0, coin.indexOf("_"))
                        : coin,
                    postfix: coin.includes("_")
                        ? coin.substring(coin.indexOf("_"))
                        : "",
                    chain: chain,
                })
                .then((response) => {
                    if (coin == this.symbol) {
                        this.walletSymbol = response.balance;
                    } else if (coin == this.currency) {
                        this.walletCurrency = response.balance;
                    }
                })
                .catch((err) => {
                    this.fetchWallet(
                        coin.includes("_")
                            ? coin.substring(0, coin.indexOf("_"))
                            : coin,
                        chain
                    );
                });
        },
        createWallet(coin, chain) {
            this.loading = true;
            axios
                .post("/user/eco/wallet/create", {
                    chain: chain,
                    network: chain,
                    symbol: coin.includes("_")
                        ? coin.substring(0, coin.indexOf("_"))
                        : coin,
                    postfix: coin.includes("_")
                        ? coin.substring(coin.indexOf("_"))
                        : "",
                })
                .then((response) => {
                    this.$toast[response.type](response.message);
                    this.fetchWallet(coin, chain);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        marketBuy() {
            this.loading = true;
            if (this.ecoStore.bestAsk > 0) {
                axios
                    .post("/user/eco/trade/store", {
                        amount: Number.parseFloat(this.amountMarketBuy),
                        symbol: this.ecoStore.market.currency,
                        symbol_chain: this.ecoStore.market.currency_chain,
                        currency: this.ecoStore.market.pair,
                        currency_chain: this.ecoStore.market.pair_chain,
                        tradeType: "market",
                        type: "BUY",
                        taker: this.ecoStore.market.taker,
                        price: Number.parseFloat(this.ecoStore.bestAsk),
                    })
                    .then((response) => {
                        if (response.messages) {
                            response.message.forEach((msg) => {
                                this.$toast[response.type](msg);
                            });
                        } else {
                            this.$toast[response.type](response.message);
                        }
                        this.fetchWallet(
                            this.symbol,
                            this.ecoStore.market.currency_chain
                        );
                        this.fetchWallet(
                            this.currency,
                            this.ecoStore.market.pair_chain
                        );
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("No Market Price, Please Do Limit Order");
                this.loading = false;
            }
        },
        marketSell() {
            this.loading = true;
            if (this.ecoStore.bestBid > 0) {
                axios
                    .post("/user/eco/trade/store", {
                        amount: Number.parseFloat(this.amountMarketSell),
                        symbol: this.ecoStore.market.currency,
                        symbol_chain: this.ecoStore.market.currency_chain,
                        currency: this.ecoStore.market.pair,
                        currency_chain: this.ecoStore.market.pair_chain,
                        tradeType: "market",
                        type: "SELL",
                        maker: this.ecoStore.market.maker,
                        price: Number.parseFloat(this.ecoStore.bestBid),
                    })
                    .then((response) => {
                        if (response.messages) {
                            response.message.forEach((msg) => {
                                this.$toast[response.type](msg);
                            });
                        } else {
                            this.$toast[response.type](response.message);
                        }
                        this.fetchWallet(
                            this.symbol,
                            this.ecoStore.market.currency_chain
                        );
                        this.fetchWallet(
                            this.currency,
                            this.ecoStore.market.pair_chain
                        );
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please wait for orderbook to load");
                this.loading = false;
            }
        },
        limitBuy() {
            this.loading = true;
            if (this.priceBuy > 0) {
                axios
                    .post("/user/eco/trade/store", {
                        amount: Number.parseFloat(this.amountLimitBuy),
                        price: Number.parseFloat(this.priceBuy),
                        symbol: this.ecoStore.market.currency,
                        symbol_chain: this.ecoStore.market.currency_chain,
                        currency: this.ecoStore.market.pair,
                        currency_chain: this.ecoStore.market.pair_chain,
                        tradeType: "limit",
                        type: "BUY",
                        taker: this.ecoStore.market.taker,
                    })
                    .then((response) => {
                        if (response.messages) {
                            response.message.forEach((msg) => {
                                this.$toast[response.type](msg);
                            });
                        } else {
                            this.$toast[response.type](response.message);
                        }
                        this.fetchWallet(
                            this.symbol,
                            this.ecoStore.market.currency_chain
                        );
                        this.fetchWallet(
                            this.currency,
                            this.ecoStore.market.pair_chain
                        );
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please set a valid price");
                this.loading = false;
            }
        },
        limitSell() {
            this.loading = true;
            if (this.priceSell > 0) {
                axios
                    .post("/user/eco/trade/store", {
                        amount: Number(this.amountLimitSell),
                        price: Number(this.priceSell),
                        symbol: this.ecoStore.market.currency,
                        symbol_chain: this.ecoStore.market.currency_chain,
                        currency: this.ecoStore.market.pair,
                        currency_chain: this.ecoStore.market.pair_chain,
                        tradeType: "limit",
                        type: "SELL",
                        maker: this.ecoStore.market.maker,
                    })
                    .then((response) => {
                        if (response.messages) {
                            for (let i = 0; i < response.messages.length; i++) {
                                this.$toast.error(response.messages[i]);
                            }
                        } else {
                            this.$toast[response.type](response.message);
                        }
                        this.fetchWallet(
                            this.symbol,
                            this.ecoStore.market.currency_chain
                        );
                        this.fetchWallet(
                            this.currency,
                            this.ecoStore.market.pair_chain
                        );
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            } else {
                this.$toast.error("Please set a valid price");
                this.loading = false;
            }
        },
        calculatePercentage(orderType, percent, orderSide) {
            if (!this.walletCurrency && !this.walletSymbol) {
                this.$toast.error(
                    `Create ${
                        orderSide === "buy" ? this.currency : this.symbol
                    } Wallet First`
                );
                return;
            }
            if (!this.ecoStore.bestBid && !this.ecoStore.bestAsk) {
                this.$toast.error("Waiting For Orderbook...");
                return;
            }

            const amount = this.getAmount(orderSide);
            const total = this.calculateTotalAmount(
                amount,
                percent,
                orderSide,
                orderType
            );
            if (orderType === "market") {
                this.marketRange = orderSide === "buy" ? "MB" : "MS";
                this[`amountMarket${orderSide === "buy" ? "Buy" : "Sell"}`] =
                    amount;
                this[`total${orderSide}Market`] = total;
            } else {
                this.limitRange = orderSide === "buy" ? "LB" : "LS";
                this[`amountLimit${orderSide === "buy" ? "Buy" : "Sell"}`] =
                    amount;
                this[`total${orderSide}Limit`] = total;
            }
        },

        getAmount(orderSide) {
            const value =
                orderSide === "buy" ? this.walletCurrency : this.walletSymbol;
            return parseFloat(value).toFixed(this.precisionAmount);
        },

        calculateTotalAmount(amount, percent, orderSide, orderType) {
            const price =
                orderSide === "buy"
                    ? orderType === "market"
                        ? this.ecoStore.bestAsk
                        : this.priceBuy
                    : orderType === "market"
                    ? this.ecoStore.bestBid
                    : this.priceSell;
            const feeMultiplier =
                (orderSide === "buy"
                    ? this.ecoStore.market.taker
                    : this.ecoStore.market.maker) / 100;
            const total = (amount * (percent / 100)) / price;
            const fee = total * feeMultiplier;
            return parseFloat(total - fee).toFixed(this.precisionAmount);
        },

        calculatePrice(type, side) {
            let amount, wallet, symbol, fee;
            if (side === "buy") {
                amount =
                    type === "market"
                        ? this.amountMarketBuy
                        : this.amountLimitBuy;
                wallet = this.walletCurrency;
                symbol = this.currency;
                fee = this.ecoStore.market.taker;
            } else {
                amount =
                    type === "market"
                        ? this.amountMarketSell
                        : this.amountLimitSell;
                wallet = this.walletSymbol;
                symbol = this.symbol;
                fee = this.ecoStore.market.maker;
            }

            if (wallet === null) {
                this.$toast.error("Create " + symbol + " Wallet First");
                return;
            }

            if (type === "market" && this.ecoStore.bestBid === null) {
                this.$toast.error(
                    "No spot price detected, Make a limit order first"
                );
                return;
            }

            const orderAmount = amount + amount * (fee / 100);
            if (wallet < orderAmount) {
                this.$toast.error(
                    "Order price higher than your " + symbol + " wallet balance"
                );
                return;
            }

            const price =
                type === "market"
                    ? side === "buy"
                        ? this.ecoStore.bestAsk
                        : this.ecoStore.bestBid
                    : side === "buy"
                    ? this.priceBuy
                    : this.priceSell;
            const total = (amount - amount * (fee / 100)) * price;
            this[`total${side}${type === "market" ? "Market" : "Limit"}`] =
                total.toFixed(this.PrecisionAmount);
        },
        getBestAsk() {
            this.priceBuy = this.ecoStore.bestAsk
                ? this.ecoStore.bestAsk
                : this.ecoStore.bestBid;
        },
        getBestBid() {
            this.priceSell = this.ecoStore.bestBid
                ? this.ecoStore.bestBid
                : this.ecoStore.bestAsk;
        },
    },
};
</script>
