<template>
    <div>
        <div class="card mb-1">
            <div class="card-body">
                <div
                    class="d-flex align-items-center"
                    :class="
                        plat.trading.practice != null &&
                        plat.trading.practice != 1
                            ? ' justify-content-between'
                            : ' justify-content-start'
                    "
                >
                    <img
                        v-if="symbol"
                        class="avatar-content me-1 d-none d-sm-block"
                        :src="
                            symbol
                                ? '/assets/images/cryptoCurrency/' +
                                  symbol.toLowerCase() +
                                  '.png'
                                : '/market/notification.png'
                        "
                    />
                    <vue-skeleton-loader
                        v-else
                        type="circle"
                        :width="64"
                        :height="64"
                        animation="fade"
                    />
                    <span v-if="symbol" class="fw-bold fs-4 d-none d-lg-block"
                        >{{ symbol }}
                        <span v-if="api == 1">{{ type.toUpperCase() }} </span
                        >{{ $t("Wallet") }}</span
                    >
                    <vue-skeleton-loader
                        v-else
                        class="d-none d-lg-block"
                        type="rect"
                        :width="100"
                        :height="10"
                        animation="fade"
                    />
                    <div
                        class="d-flex justify-content-start"
                        v-if="
                            plat.trading.practice != null &&
                            plat.trading.practice != 1
                        "
                    >
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#deposit"
                            class="btn btn-success me-1"
                        >
                            <i class="bi bi-wallet2"></i> {{ $t("Deposit") }}
                        </button>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#withdraw"
                            class="btn btn-warning"
                        >
                            <i class="bi bi-journal-arrow-down"></i>
                            {{ $t("Withdraw") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card mb-0" id="table-hover-row" style="overflow: auto">
                <div class="card-header">
                    <h4 class="card-title">{{ $t("Wallet Transactions") }}</h4>
                </div>
                <div
                    class="table-responsive"
                    style="min-height: 57vh; max-height: 57vh; overflow-y: auto"
                >
                    <table class="table tableFixHead">
                        <thead>
                            <tr>
                                <th>{{ $t("Type") }}</th>
                                <th>{{ $t("Info") }}</th>
                                <th>{{ $t("Transaction") }}</th>
                            </tr>
                        </thead>
                        <tbody v-if="logs != null" :key="logs.length">
                            <template v-for="(chain, key, index) in logs">
                                <tr
                                    v-for="(trx, i) in chain"
                                    :key="i + '-' + index"
                                >
                                    <td>
                                        <div
                                            class="avatar bg-light-primary rounded float-start"
                                            style="max-height: 30px"
                                        >
                                            <div class="avatar-content">
                                                <i
                                                    v-if="trx.type == 1"
                                                    title="Deposit"
                                                    v-tooltip
                                                    class="text-success fs-3 bi bi-wallet2"
                                                ></i>
                                                <span
                                                    v-else-if="trx.type == 2"
                                                    title="Withdraw"
                                                    v-tooltip
                                                    class="text-danger fs-3"
                                                    ><i class="bi bi-cash"></i
                                                ></span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span class="text-warning">
                                                {{ $t("Amount") }}:
                                            </span>

                                            <span>
                                                {{ trx.amount | toMoney(4) }}
                                                <span v-if="symbol">
                                                    {{ symbol }}
                                                </span>
                                            </span>
                                        </div>
                                        <div v-if="trx.type == 2">
                                            <span class="text-warning">
                                                {{ $t("Fee") }}:
                                            </span>

                                            <span>
                                                {{ trx.fee | toMoney(4) }}
                                                <span v-if="symbol">
                                                    {{ symbol }}
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="text-warning"
                                                >{{ $t("Reference ID") }}:
                                            </span>
                                            {{ trx.ref_id }}
                                        </div>
                                        <div>
                                            <span class="text-warning"
                                                >{{ $t("Date") }}:
                                            </span>
                                            {{ trx.created | toDate }}
                                        </div>
                                    </td>
                                    <td>
                                        <a
                                            v-if="key == 'ETH'"
                                            :href="
                                                'https://etherscan.io/tx/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                        <a
                                            v-else-if="key == 'BSC'"
                                            :href="
                                                'https://bscscan.com/tx/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                        <a
                                            v-else-if="key == 'TRON'"
                                            :href="
                                                'https://tronscan.org/#/transaction/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                        <a
                                            v-else-if="key == 'MATIC'"
                                            :href="
                                                'https://polygonscan.com/tx/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                        <a
                                            v-else-if="key == 'KLAY'"
                                            :href="
                                                'https://scope.klaytn.com/tx/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                        <a
                                            v-else-if="key == 'CELO'"
                                            :href="
                                                'https://celoscan.io/tx/' +
                                                trx.txid
                                            "
                                            class="btn btn-outline-info btn-sm"
                                            target="_blank"
                                            >{{ $t("View") }}</a
                                        >
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td
                                    class="text-muted text-center"
                                    colspan="100%"
                                >
                                    <img
                                        height="128px"
                                        width="128px"
                                        src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                                        alt=""
                                    />
                                    <p class="">{{ $t("No Data Found") }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="deposit"
            tabindex="-1"
            aria-labelledby="deposit"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div v-if="addresses != null" class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h5 class="modal-title">
                            {{ $t("Select Deposit Network") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <ul class="nav nav-tabs" role="tablist">
                        <template v-for="(wallet, key, index) in addresses">
                            <li :key="index" class="nav-item">
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="key + '-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="'#' + key"
                                    role="tab"
                                    aria-selected="false"
                                    :aria-controls="key"
                                    >{{ key }}</a
                                >
                            </li>
                        </template>
                    </ul>
                    <div class="tab-content">
                        <template v-for="(wallet, key, index) in addresses">
                            <div
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="key"
                                role="tabpanel"
                            >
                                <div class="modal-body pb-3 px-sm-3">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-5">
                                            <div>
                                                <label
                                                    class="form-control-label h6"
                                                    >{{ $t("To") }}</label
                                                >
                                            </div>
                                            <qr-code
                                                :size="150"
                                                :text="
                                                    wallet.address
                                                        ? wallet.address
                                                        : ''
                                                "
                                            ></qr-code>
                                        </div>
                                        <div class="col-lg-9 col-md-7">
                                            <div>
                                                <label
                                                    class="form-control-label h6"
                                                    for="recieving_address"
                                                    >{{
                                                        $t("Wallet Address")
                                                    }}</label
                                                >
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    ref="
                                                            recieving_address
                                                        "
                                                    :value="
                                                        wallet.address
                                                            ? wallet.address
                                                            : ''
                                                    "
                                                    readonly
                                                />
                                            </div>
                                            <div
                                                class="d-flex justify-content-between mt-1"
                                            >
                                                <span>{{
                                                    $t("Transfer Limit")
                                                }}</span>
                                                <span>{{
                                                    $t("Unlimited")
                                                }}</span>
                                            </div>
                                            <hr />
                                            <template
                                                v-if="wallet.has_memo == 1"
                                            >
                                                <div
                                                    v-if="
                                                        wallet.memo != '' ||
                                                        wallet.memo != null
                                                    "
                                                    class="d-flex justify-content-between"
                                                >
                                                    <span>{{
                                                        $t("Memo")
                                                    }}</span>
                                                    <span
                                                        class="text-warning"
                                                        >{{
                                                            wallet.memo
                                                                ? wallet.memo
                                                                : ""
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                            </template>
                                        </div>
                                    </div>
                                    <div class="mt-1">
                                        {{ $t("This is a") }}
                                        <span :ref="key" class="text-info">{{
                                            key ? key : ""
                                        }}</span>
                                        {{
                                            $t(
                                                "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                            )
                                        }}.
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="withdraw"
            tabindex="-1"
            aria-labelledby="withdraw"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h5 class="modal-title">
                            {{ $t("Select Withdraw Network") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <ul class="nav nav-tabs" role="tablist">
                        <template v-for="(wallet, key, index) in addresses">
                            <li :key="index" class="nav-item">
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="key + '-withdraw-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="'#' + key + '-withdraw'"
                                    role="tab"
                                    aria-selected="false"
                                    :aria-controls="key"
                                    >{{ key }}</a
                                >
                            </li>
                        </template>
                    </ul>
                    <div class="tab-content">
                        <template v-for="(wallet, key, index) in addresses">
                            <div
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="key + '-withdraw'"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Withdraw(key)"
                                >
                                    <div class="modal-body pb-3 px-sm-3">
                                        <div class="mb-1">
                                            <label
                                                class="form-control-label h6"
                                                for="wallet_balance"
                                                >{{
                                                    $t("Wallet Balance")
                                                }}</label
                                            >
                                            <input
                                                class="form-control"
                                                type="text"
                                                :value="
                                                    wallet.balance +
                                                    ' ' +
                                                    symbol
                                                "
                                                readonly
                                            />
                                        </div>
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="withdraw_address"
                                                >{{
                                                    $t("Wallet Address")
                                                }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="withdraw_address"
                                            />
                                        </div>
                                        <div class="my-1">
                                            <div class="input-group">
                                                <span
                                                    class="input-group-text"
                                                    for="amount"
                                                    >{{ $t("Amount") }}</span
                                                >
                                                <input
                                                    type="number"
                                                    class="form-control"
                                                    v-model="withdraw_amount"
                                                    :min="wallet.withdraw_min"
                                                    :step="wallet.withdraw_min"
                                                    :max="wallet.withdraw_max"
                                                />
                                            </div>
                                            <small
                                                >{{ $t("Min") }}:
                                                <span class="text-warning">{{
                                                    wallet.withdraw_min
                                                        | toMoney(2)
                                                }}</span>
                                                / {{ $t("Max") }}:
                                                <span class="text-warning">{{
                                                    wallet.withdraw_max
                                                        | toMoney(2)
                                                }}</span>
                                            </small>
                                        </div>
                                        <div
                                            class="my-1"
                                            v-if="wallet.has_memo == 1"
                                        >
                                            <div class="input-group">
                                                <span
                                                    class="input-group-text"
                                                    for="memo"
                                                    >{{ $t("Memo") }}</span
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="withdraw_memo"
                                                />
                                            </div>
                                            >
                                        </div>
                                        <div class="input-group mt-1">
                                            <span
                                                class="input-group-text"
                                                for="fees"
                                                >{{ $t("Fees") }}</span
                                            >
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
                                        <!-- <div class="mt-1">
                                        {{ $t("Please make sure you have") }}
                                        {{ wallet.chain }}
                                        {{
                                            $t(
                                                "Balance for the withdrawal to be processed"
                                            )
                                        }}.
                                    </div> -->
                                    </div>
                                    <div class="modal-footer text-end">
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                            :disabled="loading"
                                        >
                                            {{ $t("Withdraw") }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// component
import VueQRCodeComponent from "vue-qrcode-component";
export default {
    props: ["type", "symbol", "address"],
    // component list
    components: { "qr-code": VueQRCodeComponent },

    // component data
    data() {
        return {
            wal: {},
            addresses: {},
            logs: {},
            gnl: gnl,
            loading: false,
            api: 1,
            pathname: "main",
            plat: plat,
            network: null,
            withdraw_address: null,
            withdraw_amount: null,
            timer: [],
        };
    },
    // custom methods
    methods: {
        fetchData() {
            this.$http
                .post(
                    "/user/fetch/eco/wallet/main/" +
                        this.symbol +
                        "/" +
                        this.address
                )
                .then((response) => {
                    (this.wal = response.data.wal),
                        (this.logs = response.data.logs),
                        (this.addresses = response.data.addresses);
                    this.$emit("RefreshMainWallet", response.data.wal);
                });
        },
        fetchWalletLogs() {
            this.$http
                .post(
                    "/user/fetch/eco/wallet/main/logs/" +
                        this.symbol +
                        "/" +
                        this.address
                )
                .then((response) => {
                    this.logs = response.data.logs;
                });
        },
        Withdraw(chain) {
            if (this.withdraw_amount <= 0) {
                this.$toast.error("Invalid amount");
            } else {
                this.loading = true;
                this.$http
                    .post("/user/eco/wallet/withdraw", {
                        chain: chain,
                        symbol: this.symbol,
                        withdraw_address: this.withdraw_address,
                        memo: this.withdraw_memo,
                        amount: this.withdraw_amount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.fetchData();
                        this.loading = false;
                        $("#withdraw").modal("hide");
                    });
            }
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {
        this.timer[this.address] = setInterval(() => {
            this.fetchWalletLogs();
        }, 30000);
        router.afterEach((to, from) => {
            clearInterval(this.timer[from.params.address]);
        });
    },
    // on component destroyed
    destroyed() {},
};
</script>

<style lang="scss">
@import "../../scss/variables";
@import "../../scss/tooltip";
</style>
