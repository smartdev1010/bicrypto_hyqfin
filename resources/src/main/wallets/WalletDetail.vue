<template>
    <div>
        <div class="card mb-5">
            <div class="card-body">
                <div
                    class="flex items-center"
                    :class="
                        plat.trading.practice != null &&
                        plat.trading.practice != 1
                            ? 'xs:justify-start sm:justify-between'
                            : 'justify-start'
                    "
                >
                    <img
                        v-lazy="
                            wal.symbol
                                ? '/assets/images/cryptoCurrency/' +
                                  wal.symbol.toLowerCase() +
                                  '.png'
                                : '/market/notification.png'
                        "
                        class="avatar-content mr-5"
                        height="64"
                        width="64"
                    />
                    <span class="if-sm font-medium"
                        >{{ wal.symbol }}
                        <span v-if="api == 1">{{ type.toUpperCase() }} </span>
                        {{ $t("Wallet") }}</span
                    >
                    <div
                        v-if="
                            plat.trading.practice != null &&
                            plat.trading.practice != 1
                        "
                        class="if-sm-col flex justify-start xs:space-y-3 sm:space-y-0"
                    >
                        <template v-if="type == 'trading'">
                            <template v-if="provider == 'kucoin'">
                                <button
                                    v-if="wal != null"
                                    type="button"
                                    class="btn btn-success"
                                    @click="showModal('deposit')"
                                >
                                    <i class="bi bi-wallet2 mr-2"></i>
                                    {{ $t("Deposit") }}
                                </button>
                                <form
                                    v-else
                                    method="POST"
                                    action="/user/wallet/regenerates"
                                >
                                    <input
                                        id="symbol"
                                        type="hidden"
                                        name="symbol"
                                        :value="wal.symbol"
                                    />
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                    >
                                        <i
                                            class="bi bi-arrow-clockwise mr-2"
                                        ></i>
                                        {{ $t("Regenerate") }}
                                    </button>
                                </form>
                            </template>
                            <button
                                v-else
                                type="button"
                                class="btn btn-success"
                                @click="showModal('deposit')"
                            >
                                <i class="bi bi-wallet2 mr-2"></i>
                                {{ $t("Deposit") }}
                            </button>
                        </template>
                        <a
                            v-else-if="type == 'funding'"
                            href="/user/deposit/wallet"
                            ><button
                                v-if="dp == 1"
                                :key="dp"
                                class="btn btn-success"
                            >
                                <i class="bi bi-wallet2 mr-2"></i>
                                {{ $t("Deposit") }}
                            </button></a
                        >
                        <button
                            v-if="type == 'trading'"
                            type="button"
                            class="btn btn-danger ml-1"
                            @click="showModal('withdraw')"
                        >
                            <i class="bi bi-cash-coin mr-2"></i>
                            {{ $t("Withdraw") }}
                        </button>
                        <a
                            v-else-if="type == 'funding'"
                            :href="'/user/withdraw/wallet/' + wal.symbol"
                            ><button class="btn btn-danger ml-1">
                                <i class="bi bi-cash-coin mr-2"></i>
                                {{ $t("Withdraw") }}
                            </button></a
                        >
                        <div v-if="api || api == 1">
                            <button
                                v-if="type == 'trading'"
                                type="button"
                                class="btn btn-warning ml-1"
                                @click="showModal('transferTrading')"
                            >
                                <i class="bi bi-arrow-left-right mr-2"></i>
                                {{ $t("Transfer") }}
                            </button>
                            <button
                                v-else-if="type == 'funding'"
                                type="button"
                                class="btn btn-warning ml-1"
                                @click="showModal('transferFunding')"
                            >
                                <i class="bi bi-arrow-left-right mr-2"></i>
                                {{ $t("Transfer") }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div
                class="mb-4 items-center justify-between xs:block xs:space-y-5 sm:flex sm:space-y-0"
            >
                <div class="font-medium">{{ $t("Wallet Transactions") }}</div>
                <Filter>
                    <input
                        v-model="filters.symbol.value"
                        type="text"
                        class="filter-input"
                        placeholder="Symbol"
                /></Filter>
            </div>
            <div class="card relative overflow-x-auto">
                <VTable
                    :key="wal_trx.length"
                    v-model:current-page="currentPage"
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="wal_trx"
                    :filters="filters"
                    :page-size="5"
                    :hide-sort-icons="true"
                    @totalPagesChanged="totalPages = $event"
                >
                    <template #head>
                        <tr
                            class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <VTh sort-key="type" scope="col" class="py-3 px-6">
                                <Col text="Type" />
                            </VTh>
                            <th scope="col" class="py-3 px-6">
                                <Col text="Info" />
                            </th>
                            <th scope="col" class="py-3 px-6">
                                {{ $t("Status") }}
                            </th>
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="wal_trx.length > 0">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td data-label="Type" class="px-5 text-center">
                                    <div
                                        class="bg-dark w-8 rounded px-2 py-1 shadow"
                                    >
                                        <span
                                            v-if="row.type == 1"
                                            class="icon-bg text-success"
                                            ><i class="bi bi-wallet2"></i
                                        ></span>
                                        <span
                                            v-else-if="row.type == 2"
                                            class="icon-bg text-danger"
                                            ><i class="bi bi-cash"></i
                                        ></span>
                                        <span
                                            v-else-if="row.type == 3"
                                            class="icon-bg text-success"
                                            ><i class="bi bi-send"></i
                                        ></span>
                                        <span
                                            v-else-if="row.type == 4"
                                            class="icon-bg text-warning"
                                            ><i class="bi bi-envelope"></i
                                        ></span>
                                    </div>
                                </td>
                                <td data-label="Info" class="space-y-1 py-1">
                                    <div>
                                        <span class="text-warning">
                                            {{ $t("Amount") }}:
                                        </span>

                                        <span v-if="row.amount != 0">
                                            <toMoney
                                                :num="row.amount"
                                                decimals="4"
                                            />
                                            <span v-if="type == 'trading'">{{
                                                wal.symbol
                                            }}</span>
                                            <span v-else>{{ cur_symbol }}</span>
                                        </span>
                                        <span v-else class="badge bg-warning"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-warning">
                                            {{ $t("Charge") }}:
                                        </span>
                                        <span v-if="row.charge != 0">
                                            <toMoney
                                                :num="row.charge"
                                                decimals="4"
                                            />
                                            <span v-if="type == 'trading'">{{
                                                wal.symbol
                                            }}</span>
                                            <span v-else>{{ cur_symbol }}</span>
                                        </span>
                                        <span v-else class="badge bg-warning"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-warning"
                                            >{{ $t("Recieved") }}:
                                        </span>
                                        <span v-if="row.amount_recieved != 0">
                                            <toMoney
                                                :num="row.amount_recieved"
                                                decimals="4"
                                            />
                                            {{ wal.symbol }}
                                        </span>
                                        <span v-else class="badge bg-warning"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div
                                        v-if="
                                            type == 'trading' && row.type == 2
                                        "
                                    >
                                        <span class="text-warning"
                                            >{{ $t("Processing Fees") }}:
                                        </span>
                                        <toMoney :num="row.fees" decimals="4" />
                                        {{ wal.symbol }}
                                    </div>
                                    <div>
                                        <span class="text-warning"
                                            >{{ $t("Description") }}:
                                        </span>
                                        {{ row.details }}
                                    </div>
                                    <template v-if="provider == 'kucoin'">
                                        <div
                                            v-if="row.chain != null"
                                            :key="row.chain"
                                        >
                                            <span class="text-warning"
                                                >{{ $t("Chain") }}:</span
                                            >
                                            {{ row.chain }}
                                        </div>
                                    </template>
                                </td>
                                <td data-label="Status">
                                    <span
                                        v-if="row.status == 1"
                                        class="badge bg-success"
                                        >{{ $t("Completed") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 2"
                                        class="badge bg-warning"
                                        >{{ $t("Pending") }}</span
                                    >
                                    <span
                                        v-else-if="row.status == 3"
                                        class="badge bg-danger"
                                        >{{ $t("Rejected") }}</span
                                    >
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr
                                scope="row"
                                class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                            >
                                <td colspan="100%" class="py-4 px-6">
                                    {{ $t("No transaction found!") }}
                                </td>
                            </tr>
                        </template>
                    </template>
                </VTable>
            </div>

            <VTPagination
                v-model:currentPage="currentPage"
                class="float-right flex items-center justify-between pt-4"
                aria-label="Table navigation"
                :total-pages="totalPages"
                :boundary-links="true"
            >
                <template #firstPage> {{ $t("First") }} </template>

                <template #lastPage> {{ $t("Last") }} </template>

                <template #next
                    ><span class="sr-only">{{ $t("Next") }}</span>
                    <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </template>

                <template #previous>
                    <span class="sr-only">{{ $t("Previous") }}</span>
                    <svg
                        class="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </template>
            </VTPagination>
        </div>

        <Modal
            v-if="isShowModal.deposit"
            size="2xl"
            @close="closeModal('deposit')"
        >
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Select Deposit Network") }}
                </div>
            </template>
            <template #body>
                <div style="margin: -24px !important">
                    <template v-if="provider == 'coinbasepro'">
                        <form @submit.prevent="Deposit(wal)">
                            <div class="p-4">
                                <div
                                    class="grid gap-5 xs:grid-cols-1 md:grid-cols-3"
                                >
                                    <div class="col-span-1">
                                        <div>
                                            <label
                                                class="form-control-label h6"
                                                >{{ $t("To") }}</label
                                            >
                                        </div>
                                        <vue-qrcode
                                            :options="{ width: 150 }"
                                            :value="
                                                wal.address ? wal.address : ''
                                            "
                                        ></vue-qrcode>
                                    </div>
                                    <div
                                        class="space-y-3 xs:col-span-1 md:col-span-2"
                                    >
                                        <div>
                                            <label
                                                class="form-control-label h6"
                                                for="recieving_address"
                                            >
                                                {{
                                                    $t("Wallet Address")
                                                }}</label
                                            >
                                            <input
                                                ref="recieving_address"
                                                class="form-control"
                                                type="text"
                                                :value="
                                                    wal.address
                                                        ? wal.address
                                                        : ''
                                                "
                                                readonly
                                            />
                                        </div>
                                        <div
                                            class="mt-1 flex justify-between border-b border-gray-200 dark:border-gray-600"
                                        >
                                            <span>
                                                {{ $t("Transfer Limit") }}</span
                                            >
                                            <span> {{ $t("Unlimited") }}</span>
                                        </div>
                                        <div
                                            class="flex justify-between border-b border-gray-200 dark:border-gray-600"
                                        >
                                            <span>
                                                {{
                                                    $t("Processing Time")
                                                }}</span
                                            >
                                            <span>{{
                                                currency.network_confirmations
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="mt-5">
                                    {{ $t("This is a") }}
                                    <span class="text-info">{{
                                        wal.chain
                                    }}</span>
                                    {{
                                        $t(
                                            "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                        )
                                    }}.
                                </div> -->
                                <div class="input-group mt-5">
                                    <input v-model="trx_hash" type="text" />
                                    <span for="address">
                                        {{
                                            $t("Transaction Hash Address")
                                        }}</span
                                    >
                                </div>
                            </div>
                            <div class="modal-footer mt-5">
                                <div class="flex justify-end">
                                    <button
                                        type="submit"
                                        class="btn btn-outline-success mr-3"
                                        :disabled="loading"
                                    >
                                        {{ $t("Deposit") }}
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary"
                                        @click="closeModal('deposit')"
                                    >
                                        {{ $t("Close") }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </template>
                    <template v-else>
                        <div class="bg-gray-200 dark:bg-gray-900">
                            <ul
                                class="-mb-px flex flex-wrap text-center text-sm font-medium"
                                role="tablist"
                            >
                                <li
                                    v-for="(wallet, key, index) in addresses"
                                    :key="index"
                                    class="mr-2"
                                    :class="
                                        tab.deposit != null
                                            ? key == tab.deposit
                                                ? 'bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-500'
                                                : ''
                                            : index == 0
                                            ? 'bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-500'
                                            : ''
                                    "
                                    @click="tab.deposit = key"
                                >
                                    <button
                                        class="inline-block rounded-t-lg p-4"
                                        type="button"
                                        role="tab"
                                    >
                                        {{ key }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="dark:bg-gray-800"
                                :class="
                                    tab.deposit != null
                                        ? key == tab.deposit
                                            ? ''
                                            : 'hidden'
                                        : index == 0
                                        ? ''
                                        : 'hidden'
                                "
                            >
                                <form @submit.prevent="Deposit(wallet)">
                                    <div class="space-y-5 p-4">
                                        <div
                                            class="grid gap-5 xs:grid-cols-1 md:grid-cols-3"
                                        >
                                            <div class="col-span-1">
                                                <div>
                                                    <label
                                                        class="form-control-label h6"
                                                        >To</label
                                                    >
                                                </div>
                                                <vue-qrcode
                                                    :options="{ width: 150 }"
                                                    :value="
                                                        wallet.address
                                                            ? wallet.address
                                                            : 'non'
                                                    "
                                                ></vue-qrcode>
                                            </div>
                                            <div
                                                class="space-y-3 xs:col-span-1 md:col-span-2"
                                            >
                                                <div>
                                                    <label
                                                        class="form-control-label h6"
                                                        for="recieving_address"
                                                    >
                                                        {{
                                                            $t("Wallet Address")
                                                        }}</label
                                                    >
                                                    <input
                                                        ref="recieving_address"
                                                        class="form-control"
                                                        type="text"
                                                        :value="
                                                            wallet.address
                                                                ? wallet.address
                                                                : ''
                                                        "
                                                        readonly
                                                    />
                                                </div>
                                                <div
                                                    v-if="provider == 'binance'"
                                                    class="mt-1 flex justify-between border-b border-gray-200 dark:border-gray-600"
                                                >
                                                    <span>
                                                        {{
                                                            $t("Transfer Limit")
                                                        }}</span
                                                    >
                                                    <span>
                                                        {{ $t("Min") }}:
                                                        {{
                                                            wallet.chain
                                                                .withdrawMin
                                                        }}
                                                        / {{ $t("Max") }}:
                                                        {{
                                                            wallet.chain
                                                                .withdrawMax
                                                        }}
                                                    </span>
                                                </div>
                                                <div
                                                    class="flex justify-between border-b border-gray-200 dark:border-gray-600"
                                                >
                                                    <span>{{
                                                        $t("Memo")
                                                    }}</span>
                                                    <span
                                                        class="text-warning"
                                                        >{{
                                                            wallet.tag
                                                                ? wallet.tag
                                                                : ""
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {{ $t("This is a") }}
                                            <span
                                                v-if="provider == 'binance'"
                                                :ref="key"
                                                class="text-info"
                                                >{{ wallet.chain.name }}</span
                                            >
                                            <span
                                                v-if="provider == 'kucoin'"
                                                :ref="key"
                                                class="text-info"
                                                >{{
                                                    wallet.chain.chainName
                                                }}</span
                                            >
                                            {{
                                                $t(
                                                    "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                                )
                                            }}.
                                        </div>
                                        <div class="input-group">
                                            <input
                                                v-model="trx_hash"
                                                type="text"
                                            />
                                            <span for="address">{{
                                                $t("Transaction Hash")
                                            }}</span>
                                        </div>
                                        <small class="text-info">
                                            {{
                                                $t(
                                                    "After sending any payment in crypto wallet, u will recieve transaction hash, add it in this field to get verified in the blockchain to recieve your balance"
                                                )
                                            }}.</small
                                        >
                                    </div>
                                    <div class="modal-footer mt-5">
                                        <div class="flex justify-end">
                                            <button
                                                type="submit"
                                                class="btn btn-outline-success mr-3"
                                                :disabled="loading"
                                            >
                                                {{ $t("Deposit") }}
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-outline-secondary"
                                                @click="closeModal('deposit')"
                                            >
                                                {{ $t("Close") }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </Modal>

        <Modal
            v-if="isShowModal.withdraw"
            size="2xl"
            @close="closeModal('withdraw')"
        >
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Select Withdraw Network") }}
                </div>
            </template>
            <template #body>
                <div style="margin: -24px !important">
                    <template v-if="provider == 'coinbasepro'">
                        <form @submit.prevent="Withdraw('ETH')">
                            <div class="space-y-3 p-5">
                                <div>
                                    <label for="recieving_withdraw_address">
                                        {{ $t("Wallet Address") }}</label
                                    >
                                    <input
                                        ref="recieving_withdraw_address"
                                        type="text"
                                        class="form-control"
                                    />
                                    <!-- <small>
                                        {{ $t("Provide a") }}
                                        <span class="text-info">{{
                                            wal.chain
                                        }}</span>
                                        {{
                                            $t(
                                                "Chain address. Do not add any other Chain to this address or your funds may be lost"
                                            )
                                        }}.
                                    </small> -->
                                </div>
                                <div>
                                    <label for="amount">
                                        {{ $t("Amount") }}</label
                                    >
                                    <input
                                        v-model="withdraw_amount"
                                        type="number"
                                        required
                                        class="form-control"
                                        :min="
                                            currency.min_withdrawal_amount
                                                ? currency.min_withdrawal_amount
                                                : 0.0000001
                                        "
                                    />
                                </div>
                                <div>
                                    <div>
                                        <label for="amount">
                                            {{ $t("Memo") }}</label
                                        >
                                        <input
                                            v-model="memo"
                                            type="text"
                                            :min="curr.max_withdrawal_amount"
                                            :max="
                                                curr.min_withdrawal_amountmin_withdrawal_amount
                                            "
                                            class="form-control"
                                        />
                                    </div>
                                    <small class="text-warning">
                                        {{
                                            $t("Leave empty if no memo")
                                        }}</small
                                    >
                                </div>
                                <!-- <div>
                                    <label for="amount">
                                        {{ $t("Fees") }}</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        :value="
                                            curr.fee *
                                                (1 +
                                                    gnl.provider_withdraw_fee /
                                                        100) +
                                            ' ' +
                                            wal.symbol
                                        "
                                        disabled
                                    />
                                </div> -->
                            </div>
                            <div class="modal-footer mt-5">
                                <div class="flex justify-end">
                                    <button
                                        type="submit"
                                        class="btn btn-outline-success mr-3"
                                        :disabled="loading"
                                    >
                                        {{ $t("Withdraw") }}
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary"
                                        @click="closeModal('withdraw')"
                                    >
                                        {{ $t("Close") }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </template>
                    <template v-else>
                        <div class="bg-gray-200 dark:bg-gray-900">
                            <ul
                                class="-mb-px flex flex-wrap text-center text-sm font-medium"
                            >
                                <li
                                    v-for="(wallet, key, index) in addresses"
                                    :key="index"
                                    class="mr-2"
                                    :class="
                                        tab.withdraw != null
                                            ? key == tab.withdraw
                                                ? 'bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-500'
                                                : ''
                                            : index == 0
                                            ? 'bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-500'
                                            : ''
                                    "
                                    @click="tab.withdraw = key"
                                >
                                    <button
                                        class="inline-block rounded-t-lg p-4"
                                        type="button"
                                        role="tab"
                                    >
                                        {{ wallet.network }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="dark:bg-gray-800"
                                :class="
                                    tab.withdraw != null
                                        ? key == tab.withdraw
                                            ? ''
                                            : 'hidden'
                                        : index == 0
                                        ? ''
                                        : 'hidden'
                                "
                            >
                                <form @submit.prevent="Withdraw(key)">
                                    <div class="space-y-3 p-4">
                                        <div>
                                            <input
                                                ref="key"
                                                type="hidden"
                                                name="key"
                                                :value="key"
                                            />
                                            <label
                                                for="recieving_withdraw_address"
                                            >
                                                {{
                                                    $t("Wallet Address")
                                                }}</label
                                            >
                                            <input
                                                v-model="
                                                    recieving_withdraw_address
                                                "
                                                type="text"
                                                class="form-control"
                                            />
                                            <small>
                                                {{ $t("Provide a") }}
                                                <span class="text-info">{{
                                                    wallet.network
                                                }}</span>
                                                {{
                                                    $t(
                                                        "Chain address. Do not add any other Chain to this address or your funds may be lost"
                                                    )
                                                }}.
                                            </small>
                                        </div>
                                        <div>
                                            <label for="amount">
                                                {{ $t("Amount") }}</label
                                            >
                                            <input
                                                v-if="provider == 'binance'"
                                                v-model="withdraw_amount"
                                                class="form-control"
                                                type="number"
                                                required
                                                :min="
                                                    wallet.chain.withdrawMin
                                                        ? wallet.chain
                                                              .withdrawMin
                                                        : 0.0000001
                                                "
                                            />
                                            <input
                                                v-else-if="provider == 'kucoin'"
                                                v-model="withdraw_amount"
                                                class="form-control"
                                                type="number"
                                                required
                                                :min="
                                                    wallet.chain
                                                        .withdrawalMinSize
                                                        ? wallet.chain
                                                              .withdrawalMinSize
                                                        : 0.0000001
                                                "
                                            />
                                        </div>
                                        <div v-if="provider == 'binance'">
                                            <div
                                                v-if="
                                                    wallet.chain.memoRegex != ''
                                                "
                                            >
                                                <label for="memo">
                                                    {{ $t("Memo") }}</label
                                                >
                                                <input
                                                    v-model="memo"
                                                    type="text"
                                                    class="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div v-else>
                                            <label for="memo">
                                                {{ $t("Memo") }}</label
                                            >
                                            <input
                                                v-model="memo"
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label for="fees">
                                                {{ $t("Fees") }}</label
                                            >
                                            <input
                                                v-if="provider == 'binance'"
                                                class="form-control"
                                                type="text"
                                                :value="
                                                    wallet.chain.withdrawFee +
                                                    ' ' +
                                                    wal.symbol
                                                "
                                                disabled
                                            />
                                            <input
                                                v-else-if="provider == 'kucoin'"
                                                class="form-control"
                                                type="text"
                                                :value="
                                                    wallet.chain
                                                        .withdrawalMinFee +
                                                    ' ' +
                                                    wal.symbol
                                                "
                                                disabled
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    <div class="modal-footer mt-5">
                                        <div class="flex justify-end">
                                            <button
                                                type="submit"
                                                class="btn btn-outline-success mr-3"
                                                :disabled="loading"
                                            >
                                                {{ $t("Withdraw") }}
                                            </button>
                                            <button
                                                type="button"
                                                class="btn btn-outline-secondary"
                                                @click="closeModal('withdraw')"
                                            >
                                                {{ $t("Close") }}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </Modal>

        <form @submit.prevent="TransferTrading()">
            <Modal
                v-if="isShowModal.transferTrading"
                size="lg"
                @close="closeModal('transferTrading')"
            >
                <template #header>
                    <div class="flex items-center text-lg">
                        {{ $t("Trading To Funding Transfer") }}
                    </div>
                </template>
                <template #body>
                    <div>
                        <label for="amount"> {{ $t("Amount") }}</label>
                        <input
                            v-model="transfer_trading_amount"
                            type="number"
                            class="form-control"
                            min="0.000001"
                            step="0.000001"
                            max="999999999"
                            required
                        />
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end" style="margin: -10px">
                        <button
                            type="submit"
                            class="btn btn-outline-success mr-3"
                            :disabled="loading"
                        >
                            {{ $t("Transfer") }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            @click="closeModal('transferTrading')"
                        >
                            {{ $t("Close") }}
                        </button>
                    </div>
                </template>
            </Modal>
        </form>

        <form @submit.prevent="TransferFunding()">
            <Modal
                v-if="isShowModal.transferFunding"
                size="lg"
                @close="closeModal('transferFunding')"
            >
                <template #header>
                    <div class="flex items-center text-lg">
                        {{ $t("Funding To Trading Transfer") }}
                    </div>
                </template>
                <template #body>
                    <div>
                        <label for="amount"> {{ $t("Amount") }}</label>
                        <input
                            v-model="transfer_funding_amount"
                            type="number"
                            class="form-control"
                            min="0.000001"
                            step="0.000001"
                            max="999999999"
                            required
                        />
                    </div>
                </template>
                <template #footer>
                    <div class="flex justify-end" style="margin: -10px">
                        <button
                            type="submit"
                            class="btn btn-outline-success mr-3"
                            :disabled="loading"
                        >
                            {{ $t("Transfer") }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                            @click="closeModal('transferFunding')"
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
import { Modal } from "flowbite-vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
import toMoney from "../../partials/toMoney.vue";
import { useWalletsStore } from "../../store/wallets";
export default {
    // component list
    components: { Modal, Filter, Col, toMoney },
    props: ["type", "symbol", "address"],
    setup() {
        const walletsStore = useWalletsStore();
        return { walletsStore };
    },

    // component data
    data() {
        return {
            cur_rate: cur_rate,
            cur_symbol: cur_symbol,
            wal: [],
            wal_trx: [],
            addresses: [],
            currencies: [],
            currency: [],
            curr: [],
            provider: provider,
            gnl: gnl,
            trx_hash: null,
            loading: false,
            recieving_withdraw_address: null,
            memo: null,
            api: 1,
            withdraw_amount: null,
            transfer_trading_amount: 0,
            transfer_funding_amount: 0,
            pathname: "trading",
            plat: plat,
            network: null,
            withdrawfee: null,
            dp: null,
            isShowModal: {
                deposit: false,
                withdraw: false,
                transferFunding: false,
                transferTrading: false,
            },
            imageLoading: true,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            currentPage: 1,
            totalPages: 0,
            tab: {
                deposit: null,
                withdraw: null,
            },
        };
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},
    // custom methods
    methods: {
        fetchData() {
            axios
                .post(
                    "/user/fetch/wallet/" +
                        this.type +
                        "/" +
                        this.symbol +
                        "/" +
                        this.address
                )
                .then((response) => {
                    (this.wal = response.wal),
                        (this.wal_trx = response.wal_trx),
                        (this.addresses = response.addresses),
                        (this.curr = response.curr),
                        (this.currency = response.currency),
                        (this.api = response.api),
                        (this.dp = response.dp),
                        (this.currencies = response.currencies);
                    if (this.api == 0) {
                        this.activeItem = "funding";
                    }
                });
        },
        getDepositMin(key) {
            try {
                if (key == "ETH") {
                    return this.addresses["ERC20"].chain.limits.deposit.min;
                } else if (key == "TRX") {
                    return this.addresses["TRC20"].chain.limits.deposit.min;
                } else {
                    return this.addresses[key].chain.limits.deposit.min;
                }
            } catch (err) {}
        },
        closeModal(type) {
            if (type == "deposit") {
                this.isShowModal.deposit = false;
            } else if (type == "withdraw") {
                this.isShowModal.withdraw = false;
            } else if (type == "transferFunding") {
                this.isShowModal.transferFunding = false;
            } else if (type == "transferTrading") {
                this.isShowModal.transferTrading = false;
            }
        },
        showModal(type) {
            if (type == "deposit") {
                this.isShowModal.deposit = true;
            } else if (type == "withdraw") {
                this.isShowModal.withdraw = true;
            } else if (type == "transferFunding") {
                this.isShowModal.transferFunding = true;
            } else if (type == "transferTrading") {
                this.isShowModal.transferTrading = true;
            }
        },
        getDepositMinBinance(key) {
            return this.addresses[key].chain.withdrawMin;
        },
        getDepositMaxBinance(key) {
            return this.addresses[key].chain.withdrawMax;
        },
        getDepositMax(key) {
            try {
                if (key == "ETH") {
                    let val = this.addresses["ERC20"].chain.limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                } else if (key == "TRX") {
                    let val = this.addresses["TRC20"].chain.limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                } else {
                    let val = this.addresses[key].chain.limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                }
            } catch (err) {}
        },
        Deposit(wallet) {
            (this.loading = true),
                axios
                    .post("/user/wallet/deposit", {
                        symbol: this.symbol,
                        recieving_address: wallet.address,
                        address: this.trx_hash,
                        chain: wallet.network,
                    })
                    .then((response) => {
                        this.$toast[response.type](response.message),
                            (this.wal_trx = response.wal_trx),
                            this.walletsStore.fetch();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("deposit");
                    });
        },
        Withdraw(id) {
            if (id == "TRX") {
                this.network = "TRC20";
            } else if (id == "ETH") {
                this.network = "ERC20";
            } else if (id == "BSC") {
                this.network = "BEP20";
            } else {
                this.network = id;
            }
            if (provider == "binance") {
                this.withdrawfee = this.addresses[id].chain.withdrawFee;
            }
            (this.loading = true),
                axios
                    .post("/user/wallet/withdraw", {
                        symbol: this.symbol,
                        recieving_address: this.recieving_withdraw_address,
                        memo: this.memo,
                        amount: this.withdraw_amount,
                        chain: this.network,
                        fee: this.withdrawfee,
                    })
                    .then((response) => {
                        this.$toast[response.type](response.message),
                            (this.wal_trx = response.wal_trx),
                            this.walletsStore.fetch();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("withdraw");
                    });
        },
        TransferTrading() {
            if (this.transfer_trading_amount > 0) {
                this.loading = true;
                axios
                    .post("/user/wallet/transfer/trading", {
                        symbol: this.symbol,
                        amount: this.transfer_trading_amount,
                    })
                    .then((response) => {
                        this.$toast[response.type](response.message);
                        this.wal_trx = response.wal_trx;
                        this.wal = response.wal;
                        this.walletsStore.fetch();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("transferTrading");
                    });
            } else {
                this.$toast.error("Amount should be higher than 0");
            }
        },
        TransferFunding() {
            if (this.transfer_funding_amount > 0) {
                this.loading = true;
                axios
                    .post("/user/wallet/transfer/funding", {
                        symbol: this.symbol,
                        amount: this.transfer_funding_amount,
                    })
                    .then((response) => {
                        this.$toast[response.type](response.message);
                        this.wal_trx = response.wal_trx;
                        this.wal = response.wal;
                        this.walletsStore.fetch();
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.loading = false;
                        this.closeModal("transferFunding");
                    });
            } else {
                this.$toast.error("Amount should be higher than 0");
            }
        },
    },
};
</script>
