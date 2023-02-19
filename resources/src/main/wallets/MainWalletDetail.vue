<template>
    <div>
        <div class="card mb-5">
            <div class="card-body">
                <div
                    class="flex items-center"
                    :class="
                        plat.trading.practice != null &&
                        plat.trading.practice != 1
                            ? 'justify-between'
                            : ' justify-start'
                    "
                >
                    <img
                        v-lazy="
                            symbol
                                ? '/assets/images/cryptoCurrency/' +
                                  symbol.toLowerCase() +
                                  '.png'
                                : '/market/notification.png'
                        "
                        class="avatar-content"
                        height="64"
                        width="64"
                    />
                    <span class="if-sm font-medium">
                        {{ symbol }}
                        <span v-if="api == 1">{{ type.toUpperCase() }} </span
                        >{{ $t("Wallet") }}
                    </span>
                    <div
                        v-if="
                            plat.trading.practice != null &&
                            plat.trading.practice != 1
                        "
                        class="if-sm-col flex justify-start space-x-1 xs:space-y-3 sm:space-y-0"
                    >
                        <button
                            type="button"
                            class="btn btn-success"
                            @click="showModal('deposit')"
                        >
                            <i class="bi bi-wallet2"></i> {{ $t("Deposit") }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-warning"
                            @click="showModal('withdraw')"
                        >
                            <i class="bi bi-journal-arrow-down"></i>
                            {{ $t("Withdraw") }}
                        </button>
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
                    :key="walletsStore.mianLogs.length"
                    v-model:current-page="currentPage"
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="walletsStore.mianLogs"
                    :filters="filters"
                    :page-size="5"
                    :hide-sort-icons="true"
                    @totalPagesChanged="totalPages = $event"
                >
                    <template #head>
                        <tr
                            class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <th scope="col" class="py-3 px-6">
                                <Col text="Type" />
                            </th>
                            <th scope="col" class="py-3 px-6">
                                <Col text="Info" />
                            </th>
                            <th scope="col" class="py-3 px-6">
                                {{ $t("Trx") }}
                            </th>
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="walletsStore.mianLogs.length > 0">
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
                                            title="Deposit"
                                            class="icon-bg text-success"
                                            ><i class="bi bi-wallet2"></i
                                        ></span>
                                        <span
                                            v-else-if="row.type == 2"
                                            title="Withdraw"
                                            class="icon-bg text-danger"
                                            ><i class="bi bi-cash"></i
                                        ></span>
                                    </div>
                                </td>
                                <td data-label="Info" class="space-y-1 py-1">
                                    <div>
                                        <span class="text-warning">
                                            {{ $t("Amount") }}:
                                        </span>

                                        <span>
                                            <toMoney
                                                :num="row.amount"
                                                decimals="4"
                                            />
                                            <span v-if="symbol">
                                                {{ symbol }}
                                            </span>
                                        </span>
                                    </div>
                                    <div v-if="row.type == 2">
                                        <span class="text-warning">
                                            {{ $t("Fee") }}:
                                        </span>

                                        <span>
                                            <toMoney
                                                :num="row.fee"
                                                decimals="4"
                                            />
                                            <span v-if="symbol">
                                                {{ symbol }}
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-warning"
                                            >{{ $t("Reference ID") }}:
                                        </span>
                                        {{ row.ref_id }}
                                    </div>
                                    <div>
                                        <span class="text-warning"
                                            >{{ $t("Date") }}:
                                        </span>
                                        <toDate :time="row.created" />
                                    </div>
                                </td>
                                <td data-label="Transaction">
                                    <a
                                        v-if="row.chain == 'ETH'"
                                        :href="
                                            'https://etherscan.io/tx/' +
                                            row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
                                    >
                                    <a
                                        v-else-if="row.chain == 'BSC'"
                                        :href="
                                            'https://bscscan.com/tx/' + row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
                                    >
                                    <a
                                        v-else-if="row.chain == 'TRON'"
                                        :href="
                                            'https://tronscan.org/#/transaction/' +
                                            row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
                                    >
                                    <a
                                        v-else-if="row.chain == 'MATIC'"
                                        :href="
                                            'https://polygonscan.com/tx/' +
                                            row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
                                    >
                                    <a
                                        v-else-if="row.chain == 'KLAY'"
                                        :href="
                                            'https://scope.klaytn.com/tx/' +
                                            row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
                                    >
                                    <a
                                        v-else-if="row.chain == 'CELO'"
                                        :href="
                                            'https://celoscan.io/tx/' + row.txid
                                        "
                                        class="btn btn-outline-info btn-sm"
                                        target="_blank"
                                        >{{ $t("View") }}</a
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
                            <div class="p-4">
                                <div
                                    class="grid gap-5 xs:grid-cols-1 md:grid-cols-3"
                                >
                                    <div class="col-span-1">
                                        <div>
                                            <label class="form-control-label h6"
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
                                            class="mt-1 flex justify-between border-b border-gray-200 dark:border-gray-600"
                                        >
                                            <span>{{
                                                $t("Transfer Limit")
                                            }}</span>
                                            <span>{{ $t("Unlimited") }}</span>
                                        </div>
                                        <template v-if="wallet.has_memo == 1">
                                            <div
                                                v-if="
                                                    wallet.memo != '' ||
                                                    wallet.memo != null
                                                "
                                                class="flex justify-between border-b border-gray-200 dark:border-gray-600"
                                            >
                                                <span>{{ $t("Memo") }}</span>
                                                <span class="text-warning">{{
                                                    wallet.memo
                                                        ? wallet.memo
                                                        : ""
                                                }}</span>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                                <div class="mt-5">
                                    {{ $t("This is a") }}
                                    <span :ref="key" class="text-info">{{
                                        key
                                    }}</span>
                                    {{
                                        $t(
                                            "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                        )
                                    }}.
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <label
                                            class="form-control-label h6"
                                            for="wallet_balance"
                                            >{{ $t("Wallet Balance") }}</label
                                        >
                                        <input
                                            class="form-control"
                                            type="text"
                                            :value="
                                                wallet.balance + ' ' + symbol
                                            "
                                            readonly
                                        />
                                    </div>
                                    <div>
                                        <label for="withdraw_address">{{
                                            $t("Wallet Address")
                                        }}</label>
                                        <input
                                            v-model="withdraw_address"
                                            type="text"
                                            class="form-control"
                                        />
                                    </div>
                                    <div class="my-1">
                                        <div>
                                            <label for="amount">{{
                                                $t("Amount")
                                            }}</label>
                                            <input
                                                v-model="withdraw_amount"
                                                type="number"
                                                class="form-control"
                                                :min="wallet.withdraw_min"
                                                :step="wallet.withdraw_min"
                                                :max="wallet.withdraw_max"
                                            />
                                        </div>
                                        <small
                                            >{{ $t("Min") }}:
                                            <span class="text-warning">
                                                <toMoney
                                                    :num="wallet.withdraw_min"
                                                    decimals="2"
                                            /></span>
                                            / {{ $t("Max") }}:
                                            <span class="text-warning">
                                                <toMoney
                                                    :num="wallet.withdraw_max"
                                                    decimals="2"
                                            /></span>
                                        </small>
                                    </div>
                                    <div
                                        v-if="wallet.has_memo == 1"
                                        class="my-1"
                                    >
                                        <div>
                                            <label for="memo">{{
                                                $t("Memo")
                                            }}</label>
                                            <input
                                                v-model="withdraw_memo"
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                        >
                                    </div>
                                    <div>
                                        <label for="fees">{{
                                            $t("Fees")
                                        }}</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            :value="
                                                wallet.withdraw_fee +
                                                ' ' +
                                                symbol
                                            "
                                            disabled
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
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import { Modal } from "flowbite-vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
import { useRouter, useRoute } from "vue-router";
import toMoney from "../../partials/toMoney.vue";
import toDate from "../../partials/toDate.vue";
import { useWalletsStore } from "../../store/wallets";
export default {
    components: { Modal, Filter, Col, toMoney, toDate },
    props: ["type", "symbol", "address"],
    setup(props) {
        const router = useRouter();
        const route = useRoute();
        const walletsStore = useWalletsStore();

        walletsStore.timer[props.address] = setInterval(() => {
            walletsStore.fetchMainWalletLogs(props.symbol, props.address);
        }, 30000);
        router.afterEach((to, from) => {
            clearInterval(walletsStore.timer[from.params.address]);
        });
        return { walletsStore };
    },
    // component data
    data() {
        return {
            wal: [],
            addresses: [],
            gnl: gnl,
            loading: false,
            api: 1,
            pathname: "main",
            plat: plat,
            network: null,
            withdraw_address: null,
            withdraw_amount: null,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            currentPage: 1,
            totalPages: 0,
            tab: {
                deposit: null,
                withdraw: null,
            },
            isShowModal: {
                deposit: false,
                withdraw: false,
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
                    "/user/fetch/eco/wallet/main/" +
                        this.symbol +
                        "/" +
                        this.address
                )
                .then((response) => {
                    this.wal = response.wal;
                    this.walletsStore.mianLogs = response.logs;
                    this.addresses = response.addresses;
                    this.walletsStore.fetch_main();
                });
        },
        Withdraw(chain) {
            if (this.withdraw_amount <= 0) {
                this.$toast.error("Invalid amount");
            } else {
                this.loading = true;
                axios
                    .post("/user/eco/wallet/withdraw", {
                        chain: chain,
                        symbol: this.symbol,
                        withdraw_address: this.withdraw_address,
                        memo: this.withdraw_memo,
                        amount: this.withdraw_amount,
                    })
                    .then((response) => {
                        this.$toast[response.type](response.message);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data.message);
                    })
                    .finally(() => {
                        this.fetchData();
                        this.loading = false;
                        this.closeModal("withdraw");
                    });
            }
        },
        closeModal(type) {
            if (type == "deposit") {
                this.isShowModal.deposit = false;
            } else if (type == "withdraw") {
                this.isShowModal.withdraw = false;
            }
        },
        showModal(type) {
            if (type == "deposit") {
                this.isShowModal.deposit = true;
            } else if (type == "withdraw") {
                this.isShowModal.withdraw = true;
            }
        },
    },
};
</script>

<style lang="scss">
@import "../../scss/variables";
@import "../../scss/tooltip";
</style>
