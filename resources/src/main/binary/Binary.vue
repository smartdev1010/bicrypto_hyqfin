<template>
    <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
                id="myTab"
                class="-mb-px flex flex-wrap text-center text-sm font-medium"
                data-tabs-toggle="#myTabContent"
                role="tablist"
            >
                <li class="mr-2" role="presentation">
                    <button
                        id="practice-tab"
                        class="inline-block rounded-t-lg border-b-2 p-4"
                        data-tabs-target="#practice"
                        type="button"
                        role="tab"
                        aria-controls="practice"
                        aria-selected="false"
                        :class="
                            isActive('practice')
                                ? 'text-gray-900 dark:text-gray-300'
                                : 'border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                        "
                        href="#practice"
                        @click.prevent="setActive('practice')"
                    >
                        <div class="flex">
                            <svg
                                aria-hidden="true"
                                class="mr-2 h-5 w-5"
                                :class="
                                    isActive('practice')
                                        ? 'text-blue-600 dark:text-blue-500'
                                        : ' text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                                "
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                ></path>
                            </svg>
                            {{ $t("Binary Practice") }}
                        </div>
                    </button>
                </li>
                <li class="mr-2" role="presentation">
                    <button
                        id="trading-tab"
                        class="inline-block rounded-t-lg border-b-2 p-4"
                        data-tabs-target="#trading"
                        type="button"
                        role="tab"
                        aria-controls="trading"
                        aria-selected="false"
                        :class="
                            isActive('trading')
                                ? 'text-gray-900 dark:text-gray-300'
                                : 'border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'
                        "
                        href="#trading"
                        @click.prevent="setActive('trading')"
                    >
                        <div class="flex">
                            <svg
                                aria-hidden="true"
                                :class="
                                    isActive('trading')
                                        ? 'text-blue-600 dark:text-blue-500'
                                        : ' text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'
                                "
                                class="mr-2 h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>

                            {{ $t("Binary Trading") }}
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div
                v-if="activeItem === 'practice'"
                id="practice"
                class="rounded-lg"
                role="tabpanel"
                aria-labelledby="practice-tab"
            >
                <div
                    class="grid grid-cols-3 gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between">
                                <div>
                                    <p
                                        class="text-lg font-medium text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Welcome") }} 🎉
                                        {{
                                            userStore.user
                                                ? userStore.user.firstname
                                                : ""
                                        }}
                                    </p>
                                    <p
                                        class="font-small text-sm text-gray-900 dark:text-white"
                                    >
                                        {{ $t("You have earned") }}
                                    </p>
                                    <p class="mb-2 mt-5 text-2xl text-blue-600">
                                        <a href="#" class="text-dark mr-2"
                                            ><toMoney
                                                :num="
                                                    binaryStore.trade
                                                        .practice_Won
                                                "
                                                decimals="2"
                                            /><span>{{ symbol }}</span></a
                                        >
                                    </p>
                                    <router-link
                                        to="/binary/practice/BTC/USDT"
                                        type="button"
                                        class="btn btn-primary"
                                        >{{ $t("Practice Now") }}</router-link
                                    >
                                </div>
                                <img
                                    src="/assets/images/illustration/badge.svg"
                                    class="congratulation-medal"
                                    alt="Medal Pic"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Earnings") }}
                                </div>
                            </h4>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="text-xs">
                                    {{ $t("This Week") }}
                                </div>
                                <h5>
                                    <toMoney
                                        :num="
                                            binaryStore.perc
                                                ? binaryStore.perc
                                                      .tradeWon_last_week
                                                : 0
                                        "
                                        decimals="2"
                                    />{{ symbol }}
                                </h5>
                                <p class="card-text text-muted mt-5 text-xs">
                                    <span> {{ $t("Total Trades") }}: </span>
                                    <span class="font-medium">{{
                                        binaryStore.practice_totaltrades
                                    }}</span>
                                </p>
                            </div>
                            <div>
                                <apexchart
                                    width="120"
                                    type="donut"
                                    :options="binaryStore.practice"
                                    :series="binaryStore.practice.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="background-color: #000000">
                        <div
                            class="card-body h-full"
                            style="
                                background: url('/assets/gif/rotating-shape.gif');
                                background-position: right;
                                background-repeat: no-repeat;
                            "
                        >
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Balance") }}
                                </div>
                            </h4>
                            <div class="flex justify-between">
                                <div class="h2 text-warning mb-1">
                                    <toMoney
                                        :num="
                                            userStore.user
                                                ? userStore.user
                                                      .practice_balance
                                                : 0
                                        "
                                        decimals="2"
                                    />
                                    {{ symbol }}
                                </div>
                            </div>
                            <div class="mt-1 flex">
                                <button
                                    type="button"
                                    class="btn btn-outline-warning"
                                    @click="showModal()"
                                >
                                    + {{ $t("Top Up") }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-2 gap-5 xs:grid-cols-1 sm:grid-cols-2"
                    >
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-warning h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.practice_Log }}
                                    </p>

                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Trade Log") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-success h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.practice_Win }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Wining Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-info h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.practice_Draw }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Draw Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-danger h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.practice_Lose }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Losing Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Practice Contracts") }}
                                </div>
                            </h4>
                        </div>
                        <div style="max-height: 280px; overflow-y: auto">
                            <template
                                v-if="binaryStore.practicelogs.length > 0"
                                :key="binaryStore.practicelogs.length"
                            >
                                <div
                                    v-for="(
                                        practicelog, index
                                    ) in binaryStore.practicelogs"
                                    :key="index"
                                    class="flex w-full justify-between rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"
                                    :class="
                                        index != practicelog.length - 1
                                            ? 'border-b'
                                            : ''
                                    "
                                >
                                    <div
                                        class="flex items-center justify-start"
                                    >
                                        <div
                                            class="bg-dark mr-1 rounded py-1 px-2 font-medium"
                                        >
                                            <span
                                                v-if="practicelog.hilow == 1"
                                                class="text-success"
                                                ><i
                                                    class="bi bi-graph-up-arrow"
                                                ></i
                                            ></span>
                                            <span
                                                v-else-if="
                                                    practicelog.hilow == 2
                                                "
                                                class="text-danger font-medium"
                                                ><i
                                                    class="bi bi-graph-down-arrow"
                                                ></i
                                            ></span>
                                        </div>
                                        <div>
                                            <span
                                                v-if="practicelog.hilow == 1"
                                                class="text-success font-medium"
                                                >{{ $t("Rise") }}</span
                                            >
                                            <span
                                                v-if="practicelog.hilow == 2"
                                                class="text-danger font-medium"
                                                >{{ $t("Fall") }}</span
                                            >
                                            <div class="text-xs">
                                                {{ practicelog.symbol }} /
                                                {{ practicelog.pair }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="font-medium">
                                        <span
                                            v-if="practicelog.result == 1"
                                            class="badge bg-success"
                                            >+<toMoney
                                                :num="
                                                    practicelog.amount *
                                                    (gnl.profit / 100)
                                                "
                                                decimals="2"
                                            />
                                            {{ practicelog.pair }}</span
                                        >
                                        <span
                                            v-else-if="practicelog.result == 2"
                                            class="badge bg-danger"
                                            >-<toMoney
                                                :num="practicelog.amount"
                                                decimals="2"
                                            />
                                            {{ practicelog.pair }}</span
                                        >
                                        <span
                                            v-else-if="practicelog.result == 3"
                                            class="badge bg-warning"
                                            >{{ $t("Draw") }}</span
                                        >
                                        <span v-else class="badge bg-warning">{{
                                            $t("Pending")
                                        }}</span>
                                    </div>
                                </div>
                            </template>
                            <div
                                v-else
                                class="text-muted flex flex-col items-center justify-center text-center"
                                colspan="100%"
                            >
                                <img
                                    height="128"
                                    width="128"
                                    src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                    alt=""
                                />
                                <p class="">
                                    {{ $t("No Transactions Found") }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Refer
                        v-if="ext.mlm == 1"
                        :pathname="pathname"
                        :reward="
                            plat.mlm.unilevel_upline1_percentage
                                ? plat.mlm.unilevel_upline1_percentage
                                : 5
                        "
                    />
                </div>
            </div>
            <div
                v-if="activeItem === 'trading'"
                id="trading"
                class="rounded-lg"
                aria-labelledby="trading-tab"
                role="tabpanel"
            >
                <div
                    class="grid grid-cols-3 gap-5 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    <div class="card">
                        <div class="card-body flex justify-between">
                            <div>
                                <p
                                    class="text-lg font-medium text-gray-900 dark:text-white"
                                >
                                    {{ $t("Welcome") }} 🎉
                                    {{
                                        userStore.user
                                            ? userStore.user.firstname
                                            : ""
                                    }}
                                </p>
                                <p
                                    class="font-small text-sm text-gray-900 dark:text-white"
                                >
                                    {{ $t("You have earned") }}
                                </p>
                                <p class="mb-2 mt-5 text-2xl text-blue-600">
                                    <a href="#" class="text-dark mr-2"
                                        ><toMoney
                                            :num="binaryStore.trade.Won"
                                            decimals="2"
                                        /><span>{{ symbol }}</span></a
                                    >
                                </p>
                                <router-link
                                    to="/binary/trade/BTC/USDT"
                                    type="button"
                                    class="btn btn-primary"
                                    >{{ $t("Start Trading") }}</router-link
                                >
                            </div>
                            <img
                                src="/assets/images/illustration/badge.svg"
                                class="congratulation-medal"
                                alt="Medal Pic"
                            />
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Earnings") }}
                                </div>
                            </h4>
                        </div>
                        <div class="card-body">
                            <div>
                                <div class="text-xs">
                                    {{ $t("This Week") }}
                                </div>
                                <h5>
                                    <toMoney
                                        :num="
                                            binaryStore.perc
                                                ? binaryStore.perc
                                                      .tradeWon_last_week
                                                : 0
                                        "
                                        decimals="2"
                                    />{{ symbol }}
                                </h5>
                                <p class="card-text text-muted mt-5 text-xs">
                                    <span> {{ $t("Total Trades") }}: </span>
                                    <span class="font-medium">{{
                                        binaryStore.totaltrades
                                    }}</span>
                                </p>
                            </div>
                            <div>
                                <apexchart
                                    width="180"
                                    type="donut"
                                    :options="binaryStore.trade"
                                    :series="binaryStore.trade.series"
                                >
                                </apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="background-color: #000000">
                        <div
                            class="card-body h-full"
                            style="
                                background: url('/assets/gif/rotating.gif');
                                background-position: right;
                                background-repeat: no-repeat;
                            "
                        >
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Balance") }}
                                </div>
                            </h4>
                            <div class="flex justify-between">
                                <div class="h2 text-success mb-1">
                                    <toMoney
                                        :num="binaryStore.funding_wallets"
                                        decimals="2"
                                    />
                                    {{ symbol }}
                                </div>
                            </div>
                            <div class="mt-1 flex">
                                <router-link
                                    to="/wallets"
                                    class="btn btn-outline-success"
                                    >+ {{ $t("Deposit") }}</router-link
                                >
                            </div>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-2 gap-5 xs:grid-cols-1 sm:grid-cols-2"
                    >
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-warning h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.Log }}
                                    </p>

                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Trade Log") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-success h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.Win }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Wining Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-info h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.Draw }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Draw Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div class="mb-1 flex justify-center">
                                    <div
                                        class="rounded-full p-2 shadow-lg dark:bg-gray-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="text-danger h-8 w-8 justify-center"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <h2
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ binaryStore.trade.Lose }}
                                    </h2>
                                    <p
                                        class="text-4xl font-thin text-gray-900 dark:text-white"
                                    >
                                        {{ $t("Total Losing Trade") }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">
                                <div class="title-gradient">
                                    {{ $t("Trade Contracts") }}
                                </div>
                            </h4>
                        </div>
                        <div
                            :key="binaryStore.tradelogs.length"
                            style="max-height: 280px; overflow-y: auto"
                        >
                            <template v-if="binaryStore.tradelogs.length > 0">
                                <div
                                    v-for="(
                                        tradelog, index
                                    ) in binaryStore.tradelogs"
                                    :key="index"
                                    class="flex w-full justify-between rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"
                                    :class="
                                        index != tradelog.length - 1
                                            ? 'border-b'
                                            : ''
                                    "
                                >
                                    <div
                                        class="flex items-center justify-start"
                                    >
                                        <div
                                            class="bg-dark mr-1 rounded py-1 px-2 font-medium"
                                        >
                                            <span
                                                v-if="tradelog.hilow == 1"
                                                class="text-success"
                                                ><i
                                                    class="bi bi-graph-up-arrow"
                                                ></i
                                            ></span>
                                            <span
                                                v-else-if="tradelog.hilow == 2"
                                                class="text-danger font-medium"
                                                ><i
                                                    class="bi bi-graph-down-arrow"
                                                ></i
                                            ></span>
                                        </div>
                                        <div>
                                            <span
                                                v-if="tradelog.hilow == 1"
                                                class="text-success font-medium"
                                                >{{ $t("Rise") }}</span
                                            >
                                            <span
                                                v-if="tradelog.hilow == 2"
                                                class="text-danger font-medium"
                                                >{{ $t("Fall") }}</span
                                            >
                                            <div class="text-xs">
                                                {{ tradelog.symbol }} /
                                                {{ tradelog.pair }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="font-medium">
                                        <span
                                            v-if="tradelog.result == 1"
                                            class="badge bg-success"
                                            >+<toMoney
                                                :num="
                                                    tradelog.amount *
                                                    (gnl.profit / 100)
                                                "
                                                decimals="2"
                                            />
                                            {{ tradelog.pair }}</span
                                        >
                                        <span
                                            v-else-if="tradelog.result == 2"
                                            class="badge bg-danger"
                                            >-<toMoney
                                                :num="tradelog.amount"
                                                decimals="2"
                                            />
                                            {{ tradelog.pair }}</span
                                        >
                                        <span
                                            v-else-if="tradelog.result == 3"
                                            class="badge bg-warning"
                                            >{{ $t("Draw") }}</span
                                        >
                                        <span v-else class="badge bg-warning">{{
                                            $t("Pending")
                                        }}</span>
                                    </div>
                                </div>
                            </template>
                            <div
                                v-else
                                class="text-muted flex flex-col items-center justify-center text-center"
                                colspan="100%"
                            >
                                <img
                                    height="128"
                                    width="128"
                                    src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                    alt=""
                                />
                                <p class="">
                                    {{ $t("No Transactions Found") }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div v-if="plat.kyc.kyc_status == 1" class="">
                        <KYC />
                    </div>
                </div>
            </div>
        </div>

        <form @submit.prevent="userStore.AddPracticeBalance()">
            <Modal v-if="isShowModal" size="lg" @close="closeModal()">
                <template #header>
                    <div class="flex items-center text-lg">
                        {{ $t("Add Practice Balance") }}
                    </div>
                </template>
                <template #body>
                    <p>
                        {{
                            $t("Are you sure you want to add practice balance")
                        }}?
                    </p>
                </template>
                <template #footer>
                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="btn btn-outline-success mr-3"
                        >
                            {{ $t("Confirm") }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            @click="closeModal()"
                        >
                            {{ $t("Close") }}
                        </button>
                    </div>
                </template>
            </Modal>
        </form>
    </div>
</template>

<script>
import { VueApexCharts } from "vue3-apexcharts";
import Refer from "../../partials/Refer.vue";
import { defineAsyncComponent } from "vue";
import AddPracticeBalance from "./components/AddPracticeBalance.vue";
import toMoney from "../../partials/toMoney.vue";
import { useBinaryStore } from "../../store/binary";
import { useUserStore } from "../../store/user";
import { Modal } from "flowbite-vue";
export default {
    components: {
        VueApexCharts,
        Refer,
        KYC: defineAsyncComponent(() => import("../../partials/KYC.vue")),
        AddPracticeBalance,
        toMoney,
        Modal,
    },
    setup() {
        const userStore = useUserStore();
        const binaryStore = useBinaryStore();
        return { userStore, binaryStore };
    },

    // component data
    data() {
        return {
            plat: plat,
            ext: ext,
            gnl: gnl,
            pathname:
                window.location.protocol + "//" + window.location.hostname,
            symbol: "USD",
            activeItem: "practice",
            isShowModal: false,
        };
    },
    created() {
        this.fetchData();
    },
    mounted() {},
    unmounted() {},
    // custom methods
    methods: {
        closeModal() {
            this.isShowModal = false;
        },
        showModal() {
            this.isShowModal = true;
        },
        async AddPracticeBalance() {
            await this.userStore.AddPracticeBalance();
            this.closeModal();
        },
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        async fetchData() {
            if (this.binaryStore.tradelogs.length == 0) {
                await this.binaryStore.fetch();
            }
        },
    },
};
</script>
