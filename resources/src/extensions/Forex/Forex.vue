<template>
    <div>
        <div class="grid gap-5 sm:grid-cols-1 md:grid-cols-4">
            <div class="card xs:col-span-1 md:col-span-2 lg:col-span-1">
                <div class="flex flex-col space-y-5 p-5 text-center">
                    <div class="flex justify-center">
                        <img class="rounded-full shadow-lg" height="96" width="96" v-lazy="
                            userStore.user
                                ? userStore.user.profile_photo_path
                                    ? '/assets/images/profile/' +
                                    userStore.user.profile_photo_path
                                    : '/assets/no-image.png'
                                : '/assets/no-image.png'
                        " />
                    </div>
                    <div class="text-center text-xl font-medium text-gray-900 dark:text-white">
                        {{ userStore.user ? userStore.user.firstname : "" }}
                    </div>
                    <div class="badge bg-success">
                        {{ $t("Verified Trader") }}
                    </div>
                </div>
            </div>
            <div class="xs:col-span-1 md:col-span-2 lg:col-span-3">
                <div class="mb-5 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                    <div class="grid grid-cols-2 gap-5">

                        <div class="card text-center" style="max-height: 280px; overflow-y: auto">
                            <div class="card-body">
                                <div class="icon-bg bg-info mb-1">
                                    <div class="avatar-content">
                                        <i class="bi bi-node-plus"></i>
                                    </div>
                                </div>
                                <h2 class="fw-bolder">
                                    <div v-for="(investment, key) in this.totalInvestment" class="badge bg-danger mb-1">
                                        <toMoney :key="key" :num="investment.amount" decimals="2" />
                                        <!-- {{ investment.wallet - 1 }} -->
                                        {{
    typeof(this.walletsStore.wallets.funding) === "object" ?
    this.walletsStore.wallets.funding[Object.keys(this.walletsStore.wallets.funding)[0]].symbol
    :
    null
                                        }}
                                        {{
    typeof(this.walletsStore.wallets.funding) === "array" ?
    this.walletsStore.wallets.funding[investment.wallet - 1].symbol
    :
    null
                                        }}
                                    </div>
                                </h2>
                                <p class="card-text">
                                    {{ $t("Total Investment") }}
                                </p>
                            </div>
                        </div>
                        <div class="card text-center" style="max-height: 280px; overflow-y: auto">
                            <div class="card-body">
                                <div class="icon-bg bg-success mb-1">
                                    <div class="avatar-content">
                                        <i class="bi bi-node-plus-fill"></i>
                                    </div>
                                </div>
                                <h2 class="fw-bolder">
                                    <div v-for="(profit, key) in this.totalProfit" class="badge bg-success mb-1">
                                        <toMoney :key="key" :num="profit.amount" decimals="2" />
                                        {{
    typeof(this.walletsStore.wallets.funding) === "object" ?
    this.walletsStore.wallets.funding[Object.keys(this.walletsStore.wallets.funding)[0]].symbol
    :
    null
                                        }}
                                        {{
    typeof(this.walletsStore.wallets.funding) === "array" ?
    this.walletsStore.wallets.funding[profit.wallet - 1].symbol
    :
    null
                                        }}
                                    </div>
                                </h2>
                                <p class="card-text">
                                    {{ $t("Investments Profit") }}
                                </p>
                            </div>
                        </div>
                        <!-- <template>
                            <div class="card">
                                <div class="card-body"></div>
                            </div>
                            <div class="card">
                                <div class="card-body"></div>
                            </div>
                            <div class="card">
                                <div class="card-body"></div>
                            </div>
                            <div class="card">
                                <div class="card-body"></div>
                            </div>
                        </template> -->
                    </div>
                    <div class="card card-transaction">
                        <div class="card-header">
                            <h4 class="card-title">
                                {{ $t("Investment Transactions") }}
                            </h4>
                        </div>
                        <div v-if="investmentStore.investment_logs.length > 0 && forexStore.forex_investment.length > 0"
                            class="" style="max-height: 280px; overflow-y: auto">
                            <div v-for="item in investmentStore.investment_logs" :key="item.id"
                                class="flex w-full justify-between rounded-t-lg border-gray-200 px-4 py-2 dark:border-gray-600"
                                :class="
                                    index != investmentStore.investment_logs.length - 1
                                        ? 'border-b'
                                        : ''
                                ">
                                <div class="flex items-center justify-start">
                                    <div class="bg-dark mr-1 rounded py-1 px-2 font-medium">
                                        <span class="text-success"><i class="bi bi-graph-up-arrow"></i></span>
                                    </div>
                                    <div>
                                        <span class="text-success font-medium">{{
                                            forexStore.forex_investment.filter(investment =>
                                                investment.id == item.plan_id)[0].title
                                        }}</span>
                                        <div class="text-xs">
                                            {{
                                                item.created_at.slice(0, 4) + "-" + item.created_at.slice(5, 7) + "-" +
                                                    item.created_at.slice(8,
                                                        10)
                                            }}
                                        </div>
                                    </div>
                                </div>
                                <div class="font-medium">
                                    <span class="badge bg-danger">+
                                        <toMoney :num="
                                            item.amount
                                        " decimals="2" />
                                        {{
    typeof(this.walletsStore.wallets.funding) === "object" ?
    this.walletsStore.wallets.funding[Object.keys(this.walletsStore.wallets.funding)[0]].symbol
    :
    null
                                        }}
                                        {{
    typeof(this.walletsStore.wallets.funding) === "array" ?
    this.walletsStore.wallets.funding[item.wallet_id - 1].symbol
    :
    null
                                        }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div v-else class="mb-5 text-center" colspan="100%">
                            <div class="flex w-full justify-center">
                                <img height="128" width="128"
                                    src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg" alt="" />
                            </div>
                            {{ $t("No Data Found") }}
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="startInvestment()">
                                <div class="card-title">
                                    {{ $t("Investments") }}
                                </div>
                                <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                                    <dropdown text="button">
                                        <template #trigger>
                                            <button class="btn btn-outline-primary" type="button" ref="wallett">
                                                <i class="bi bi-sort-down-alt mr-2"></i>
                                                <toMoney v-if="
                                                    investment_wallet !=
                                                    null
                                                " :num="
    investment_wallet.balance
" decimals="2" />
                                                {{
                                                    investment_wallet
                                                    ? investment_wallet.symbol
                                                                                                : $t("Select Wallet")
                                                }}
                                            </button>
                                        </template>
                                        <list-group :class="'text-start'">
                                            <div
                                                class="flex items-center border-b py-3 px-4 text-sm text-gray-900 dark:text-white">
                                                <i class="bi bi-sort-down-alt mr-2"></i>
                                                {{ $t("Select Wallet") }}
                                            </div>
                                            <list-group-item v-for="(
                                                    wallet, index
                                                ) in forexStore.wallets" :key="index"
                                                class="items-between inline-flex w-full cursor-pointer border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500">
                                                <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    @click="
                                                        selectWallet(wallet)
                                                    ">
                                                    <span class="mr-3">
                                                        <toMoney :num="
                                                            wallet.balance
                                                        " decimals="2" />
                                                    </span><span>{{
                                                        wallet.symbol
                                                    }}</span>
                                                </a>
                                            </list-group-item>
                                        </list-group>
                                    </dropdown>
                                    <div class="flex w-full">
                                        <input type="number"
                                            class="block min-w-0 flex-1 rounded-none rounded-l-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-red-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                            required="" v-model="amount" :key="forexStore.selected_inv" :min="
                                                forexStore.selected_inv
                                                    ? forexStore.selected_inv
                                                        .min
                                                    : 1
                                            " :max="
    forexStore.selected_inv
        ? forexStore.selected_inv
            .max
        : 1000000
" :step="
    forexStore.selected_inv
        ? forexStore.selected_inv
            .min
        : 1
" placeholder="Amount" />
                                        <span
                                            class="inline-flex items-center rounded-r-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
                                            ref="selectedWallet">{{
    investment_wallet
    ? investment_wallet.symbol
                                            : "$"
                                            }}</span>
                                    </div>
                                    <Button size="sm" class="flex w-full items-center justify-between" color="purple"
                                        type="button" @click="
                                            forexStore.showModal(
                                                'selectInvestment'
                                            )
                                        ">
                                        {{
                                            forexStore.selected_inv
                                                ? forexStore.selected_inv.title
                                                : $t("Select Plan")
                                        }}
                                    </Button>

                                    <Button size="sm" class="flex w-full items-center justify-between" color="green"
                                        :loading="forexStore.loading" :disabled="forexStore.loading">
                                        <i class="bi bi-caret-right"></i><span>
                                            {{ $t("Start Investment") }}</span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="card relative overflow-x-auto">
                <VTable class="w-full text-left text-sm text-gray-500 dark:text-gray-400" :data="this.investment_logs"
                    :key="forexStore.investment_logs.length" :currentPage.sync="currentPage" :pageSize="5"
                    :hideSortIcons="true" @totalPagesChanged="totalPages = $event">
                    <template #head>
                        <tr class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <VTh sortKey="investment_id" scope="col" class="py-3 px-6">
                                <Col text="Plan" />
                            </VTh>
                            <VTh sortKey="amount" scope="col" class="py-3 px-6">
                                <Col text="Amount" />
                            </VTh>
                            <VTh sortKey="profit" scope="col" class="py-3 px-6">
                                <Col text="Profit" />
                            </VTh>
                            <VTh sortKey="profited" scope="col" class="py-3 px-6">
                                <Col text="Profited" />
                            </VTh>
                            <VTh sortKey="status" scope="col" class="py-3 px-6">
                                <Col text="Status" />
                            </VTh>
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="this.investment_logs.length > 0">
                            <tr v-for="row in rows" :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                <td data-label="Plan" class="text-uppercase py-3 px-6">
                                    {{ row.plan }}
                                </td>
                                <td class="py-3 px-6" data-label="Amount">
                                    <toMoney :num="row.amount" decimals="2" />
                                    {{
    typeof(this.walletsStore.wallets.funding) === "object" ?
    this.walletsStore.wallets.funding[Object.keys(this.walletsStore.wallets.funding)[0]].symbol
    :
    null
                                    }}
                                    {{
    typeof(this.walletsStore.wallets.funding) === "array" ?
    this.walletsStore.wallets.funding[row.wallet - 1].symbol
    :
    null
                                    }}
                                </td>
                                <td data-label="Profit" class="py-3 px-6">
                                    <span class="text-success">
                                        <toMoney :num="row.profit" decimals="2" />
                                        {{
    typeof(this.walletsStore.wallets.funding) === "object" ?
    this.walletsStore.wallets.funding[Object.keys(this.walletsStore.wallets.funding)[0]].symbol
    :
    null
                                        }}
                                        {{
    typeof(this.walletsStore.wallets.funding) === "array" ?
    this.walletsStore.wallets.funding[row.wallet - 1].symbol
    :
    null
                                        }}
                                    </span>
                                </td>
                                <td class="py-3 px-6" data-label="Duration">
                                    <span class="badge bg-success">{{
                                        row.profited.getFullYear() + "-" + (row.profited.getMonth() + 1) +
                                            "-" + row.profited.getDate()
                                    }}</span>
                                </td>
                                <td class="py-3 px-6" data-label="Status">
                                    <span class="badge bg-success">{{ row.status }}</span>
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr scope="row" class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                <td colspan="100%" class="py-4 px-6">
                                    {{ $t("No results found!") }}
                                </td>
                            </tr>
                        </template>
                    </template>
                </VTable>
            </div>

            <VTPagination aria-label="Table navigation" v-model:currentPage="currentPage" :total-pages="totalPages"
                :boundary-links="true" class="flex items-center justify-between pt-4">
                <template #firstPage> {{ $t("First") }} </template>

                <template #lastPage> {{ $t("Last") }} </template>

                <template #next><span class="sr-only">{{ $t("Next") }}</span>
                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </template>

                <template #previous>
                    <span class="sr-only">{{ $t("Previous") }}</span>
                    <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </template>
            </VTPagination>
        </div>

        <div v-if="forexStore.account.length != 0" class="mt-5 grid gap-5 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
            :key="forexStore.account.length">
            <template v-for="(signal, index) in forexStore.account.signals" :key="index">
                <div class="card max-w-xs" v-if="signal != null">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 1</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" v-lazy="
                                    '/assets/images/signal/' + signal.image
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        '/assets/images/signal/' +
                                        signal.image
                                    " target="_blank"><i class="bi bi-cloud-download"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <form @submit.prevent="Deposit()">
            <Modal size="lg" v-if="forexStore.isShowModal.deposit" @close="forexStore.closeModal('deposit')">
                <template #header>
                    <div class="flex items-center text-lg">
                        {{ $t("Forex Deposit") }}
                    </div>
                </template>
                <template #body>
                    <div class="mb-2">
                        <div for="">From Wallet</div>
                        <dropdown text="button" v-if="forexStore.wallets != null">
                            <template #trigger>
                                <button class="btn btn-outline-primary" type="button">
                                    <i class="bi bi-sort-down-alt mr-2"></i>
                                    <toMoney v-if="deposit_wallet != null" :num="deposit_wallet.balance" decimals="2" />
                                    {{
    deposit_wallet
    ? deposit_wallet.symbol
                                    : "Select Wallet"
                                    }}
                                </button>
                            </template>
                            <list-group :class="'text-start'">
                                <div class="flex items-center border-b py-3 px-4 text-sm text-gray-900 dark:text-white">
                                    <i class="bi bi-sort-down-alt mr-2"></i>
                                    {{ $t("Select Wallet") }}
                                </div>
                                <list-group-item v-for="(
                                        wallet, index
                                    ) in forexStore.wallets" :key="index"
                                    class="items-between inline-flex w-full cursor-pointer border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500">
                                    <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        @click="SelectDepositWallet(wallet)">
                                        <span class="mr-3">
                                            <toMoney :num="wallet.balance" decimals="2" />
                                        </span><span>{{ wallet.symbol }}</span>
                                    </a>
                                </list-group-item>
                            </list-group>
                        </dropdown>
                    </div>
                    <div>
                        <label for="">Amount</label>
                        <div class="input-group mb-1 w-auto">
                            <input type="number" required="" v-model="DepositAmount" min="0" placeholder="Amount" />
                            <span>{{
                                deposit_wallet? deposit_wallet.symbol : ""
                            }}</span>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end space-x-2">
                        <Button size="sm" class="flex items-center justify-between" color="green"
                            :loading="forexStore.depositing" :disabled="forexStore.depositing">
                            <span> {{ $t("Deposit") }}</span>
                        </Button>
                        <button @click="forexStore.closeModal('deposit')" type="button"
                            class="btn btn-outline-secondary">
                            {{ $t("Close") }}
                        </button>
                    </div>
                </template>
            </Modal>
        </form>

        <form @submit.prevent="Withdraw()">
            <Modal size="lg" v-if="forexStore.isShowModal.withdraw" @close="forexStore.closeModal('withdraw')">
                <template #header>
                    <div class="flex items-center text-lg">
                        {{ $t("Forex Withdraw") }}
                    </div>
                </template>
                <template #body>
                    <div class="mb-2 flex justify-between">
                        <div>
                            <div for="">To Wallet</div>
                            <dropdown text="button" v-if="forexStore.wallets != null">
                                <template #trigger>
                                    <button class="btn btn-outline-primary" type="button">
                                        <i class="bi bi-sort-down-alt mr-2"></i>
                                        <toMoney v-if="withdraw_wallet != null" :num="withdraw_wallet.balance"
                                            decimals="2" />
                                        {{
    withdraw_wallet
    ? withdraw_wallet.symbol
                                        : "Select Wallet"
                                        }}
                                    </button>
                                </template>
                                <list-group :class="'text-start'">
                                    <div
                                        class="flex items-center border-b py-3 px-4 text-sm text-gray-900 dark:text-white">
                                        <i class="bi bi-sort-down-alt mr-2"></i>
                                        {{ $t("Select Wallet") }}
                                    </div>
                                    <list-group-item v-for="(
                                            wallet, index
                                        ) in forexStore.wallets" :key="index"
                                        class="items-between inline-flex w-full cursor-pointer border-b border-gray-200 px-4 py-2 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500">
                                        <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            @click="
                                                SelectWithdrawWallet(wallet)
                                            ">
                                            <span class="mr-3">
                                                <toMoney :num="wallet.balance" decimals="2" />
                                            </span><span>{{ wallet.symbol }}</span>
                                        </a>
                                    </list-group-item>
                                </list-group>
                            </dropdown>
                        </div>
                        <div>
                            <label for="">Balance</label>
                            <div class="input-group mb-1 w-auto">
                                <input v-if="forexStore.account.balance != null" type="number" placeholder="Amount"
                                    disabled readonly :key="forexStore.account.balance" :value="
                                        (forexStore.account
                                            ? forexStore.account.balance
                                            : 1) *
                                        (userStore.currency
                                            ? userStore.currency.rate
                                            : 1)
                                    " />
                                <span>{{
                                    userStore.currency
                                        ? userStore.currency.symbol
                                        : "USD"
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label for="">Amount</label>
                        <div class="input-group mb-1 w-auto">
                            <input type="number" required="" v-model="WithdrawAmount" min="0" placeholder="Amount" />
                            <span>{{
                                userStore.currency
                                    ? userStore.currency.symbol
                                    : "USD"
                            }}</span>
                        </div>
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end space-x-2">
                        <Button size="sm" class="flex items-center justify-between" color="green"
                            :loading="forexStore.withdrawing" :disabled="forexStore.withdrawing">
                            <span> {{ $t("Withdraw") }}</span>
                        </Button>
                        <button @click="forexStore.closeModal('withdraw')" type="button"
                            class="btn btn-outline-secondary">
                            {{ $t("Close") }}
                        </button>
                    </div>
                </template>
            </Modal>
        </form>

        <Modal size="3xl" v-if="forexStore.isShowModal.selectInvestment"
            @close="forexStore.closeModal('selectInvestment')">
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Forex Withdraw") }}
                </div>
            </template>
            <template #body>
                <template v-for="(investment, index) in forexStore.forex_investment" :key="index">
                    <div class="mb-2 flex cursor-pointer justify-start rounded border border-gray-200 p-2 shadow hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-600"
                        @click="
    forexStore.closeModal('selectInvestment');
forexStore.selectInvestment(investment);
                        " :class="
                            forexStore.selected_inv
                                ? forexStore.selected_inv.id == investment.id
                                    ? 'bg-gray-200 dark:bg-gray-900'
                                    : ' dark:bg-gray-700'
                                : ' dark:bg-gray-700'
                        ">
                        <div class="p-2">
                            <img class="rounded-circle shadow-4" width="64" v-lazy="
                                '/assets/images/forex/investment/' +
                                investment.image
                            " />
                        </div>
                        <div class="w-full">
                            <div class="flex justify-between">
                                <div class="fw-bold fs-4">
                                    {{ investment.title }}
                                    <span v-if="investment.is_new == 1" class="fs-6 badge bg-success">{{
                                        $t("New")
                                    }}</span>
                                </div>
                                <div class="fs-6 d-none d-md-block">
                                    <i class="bi bi-clock"></i>
                                    {{ investment.duration }}
                                    {{ $t("Days") }}
                                </div>
                            </div>
                            <small class="fs-6 text-warning">{{
                                investment.desc
                            }}</small>
                            <div>
                                {{ investment.duration }}
                                {{ $t("Days") }}
                                {{ $t("Return on Investment") }}:
                                <span class="text-success">{{ investment.roi }}%</span>
                            </div>
                        </div>
                    </div>
                </template>
            </template>
            <template #footer>
                <div class="flex justify-end">
                    <button @click="forexStore.closeModal('selectInvestment')" type="button"
                        class="btn btn-outline-secondary">
                        {{ $t("Close") }}
                    </button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import {
    Dropdown,
    ListGroup,
    ListGroupItem,
    Modal,
    Button,
} from "flowbite-vue";
import toMoney from "../../partials/toMoney.vue";
import { useForexStore } from "../../store/forex";
import { useUserStore } from "../../store/user";
import { useWalletsStore } from "../../store/wallets";
import { useInvestmentStore } from "../../store/investment";
import toDate from "../../partials/toDate.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
export default {
    setup() {
        const userStore = useUserStore();
        const forexStore = useForexStore();
        const investmentStore = useInvestmentStore();
        const walletsStore = useWalletsStore();
        return { userStore, forexStore, investmentStore, walletsStore };
    },
    // component list
    components: {
        toMoney,
        Dropdown,
        ListGroup,
        ListGroupItem,
        Modal,
        toDate,
        Filter,
        Col,
        Button,
    },

    // component data
    data() {
        return {
            investment_logs: [],
            totalInvestment: [],
            totalProfit: [],
            curPlan: 0,
            amount: 0,
            investment_wallet: null,
            deposit_wallet: null,
            withdraw_wallet: null,
            DepositAmount: 0,
            WithdrawAmount: 0,
            currentPage: 1,
            totalPages: 0,
            imageLoading: true,
            loading: false,
        };
    },

    // custom methods
    methods: {
        async fetchData() {
            if (
                this.forexStore.investment_logs.length == 0 &&
                this.forexStore.account.length == 0
            ) {
                await this.forexStore.fetch();
            }
            if (this.investmentStore.investment.length == 0) {
                await this.investmentStore.fetch();
                for (let i = 0; i < this.investmentStore.investment_logs.length; i++) {
                    let item = this.investmentStore.investment_logs[i];
                    if (this.totalInvestment.filter(investment => investment.wallet == item.wallet_id).length == 0)
                        this.totalInvestment.push({
                            wallet: item.wallet_id,
                            amount: item.amount
                        });
                    else
                        this.totalInvestment.filter(investment => investment.wallet == item.wallet_id)[0].amount += item.amount

                    let startDate = new Date(item.created_at);
                    let profitedDate = new Date(item.profited_at);

                    let currentDate = new Date(this.investmentStore.currentDate);
                    let currentProfit = 0;
                    let currentInvestment = this.forexStore.forex_investment.filter(investment => investment.id == item.plan_id)[0];
                    let deadline = currentInvestment.duration;
                    let tmpDate = new Date(startDate);
                    while (1) {
                        startDate.setDate(startDate.getDate() + 1);
                        if (deadline == 0) break;
                        if (startDate.getTime() >= currentDate.getTime())
                            break;

                        deadline--;
                        this.investment_logs.push(
                            {
                                plan: currentInvestment.title,
                                amount: item.amount,
                                profit: item.amount * currentInvestment.roi / 100,
                                profited: new Date(startDate),
                                status: (currentDate.getTime() - tmpDate.getTime()) / (1000 * 3600 * 24) <= currentInvestment.duration ? "Running" : "Closed",
                                wallet: item.wallet_id
                            }
                        );
                        if (this.totalProfit.filter(investment => investment.wallet == item.wallet_id).length == 0)
                            this.totalProfit.push({
                                wallet: item.wallet_id,
                                amount: item.amount * currentInvestment.roi / 100
                            });
                        else
                            this.totalProfit.filter(investment => investment.wallet == item.wallet_id)[0].amount += item.amount * currentInvestment.roi / 100;
                        currentProfit += item.amount * currentInvestment.roi / 100;

                    }
                    await this.investmentStore.updateProfitedDate(currentDate, item.id);
                    currentProfit = 0;
                    profitedDate.setDate(profitedDate.getDate() + 1);
                    while (1) {
                        if (profitedDate.getTime() > currentDate.getTime())
                            break;
                        currentProfit += item.amount * this.forexStore.forex_investment.filter(investment => investment.id == item.plan_id)[0].roi / 100;
                        profitedDate.setDate(profitedDate.getDate() + 1);
                        if ((profitedDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) > currentInvestment.duration) break;
                    }
                    await this.walletsStore.walletUpdate({
                        id: this.investmentStore.investment_logs[i].wallet_id,
                        amount: currentProfit
                    });
                    await this.investmentStore.updateProfit(currentProfit, item.id);
                }
            }
        },
        async startInvestment() {
            var data = {
                plan_id: this.forexStore.selected_inv.id,
                amount: this.amount,
                profit: this.forexStore.selected_inv.roi,
                wallet: this.investment_wallet.id,
                minimum: this.forexStore.selected_inv.min,
                budget: this.investment_wallet.balance
            }

            const result = await this.investmentStore.start(data);
            console.log(result);
            if (result !== false) {
                await this.walletsStore.walletUpdate({
                    id: this.investment_wallet.id,
                    amount: - this.amount
                });
                if (this.totalInvestment.filter(investment => investment.wallet == this.investment_wallet.id).length == 0)
                    this.totalInvestment.push({
                        wallet: item.wallet_id,
                        amount: item.amount
                    });
                else
                    this.totalInvestment.filter(investment => investment.wallet == item.wallet_id)[0].amount += item.amount

                await this.forexStore.fetch();
            }
        },
        async Deposit() {
            this.forexStore.depositing = true;
            await this.forexStore.Deposit(
                this.deposit_wallet.symbol,
                this.DepositAmount
            );
            this.deposit_wallet = null;
        },
        async Withdraw() {
            this.forexStore.withdrawing = true;
            await this.forexStore.Withdraw(
                this.withdraw_wallet.symbol,
                this.WithdrawAmount
            );
            this.withdraw_wallet = null;
        },
        async submitInvestment() {
            this.forexStore.loading = true;
            await this.forexStore.submitInvestment(
                this.investment_wallet.symbol,
                this.amount
            );
        },
        selectWallet(wallet) {
            this.investment_wallet = wallet;
        },
        SelectDepositWallet(wallet) {
            this.deposit_wallet = wallet;
        },
        SelectWithdrawWallet(wallet) {
            this.withdraw_wallet = wallet;
        },
    },

    // on component created
    created() { },

    // on component mounted
    mounted() {
        this.fetchData();
    },

    // on component destroyed
    destroyed() { },
};
</script>
<style scoped>
.icon-bg {
    white-space: nowrap;
    background-color: #c3c3c3;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    color: #fff;
    display: inline-flex;
    font-size: 1rem;
    text-align: center;
    vertical-align: middle;
    font-weight: 600;
    padding: 8px 12px;
}
</style>
