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
                        v-if="wal.symbol != null"
                        class="avatar-content me-1 d-none d-sm-block"
                        :src="
                            wal.symbol
                                ? '/assets/images/cryptoCurrency/' +
                                  wal.symbol.toLowerCase() +
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
                    <span
                        v-if="wal.symbol != null"
                        class="fw-bold fs-4 d-none d-lg-block"
                        >{{ wal.symbol }}
                        <span v-if="api == 1">{{ type.toUpperCase() }} </span>
                        {{ $t("Wallet") }}</span
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
                        <div v-if="$route.params.type == 'trading'">
                            <template v-if="provider == 'kucoin'">
                                <button
                                    v-if="wal != null"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deposit"
                                    class="btn btn-success"
                                >
                                    <i class="bi bi-wallet2"></i>
                                    {{ $t("Deposit") }}
                                </button>
                                <form
                                    v-else
                                    method="POST"
                                    action="/user/wallet/regenerates"
                                >
                                    <input
                                        type="hidden"
                                        id="symbol"
                                        name="symbol"
                                        :value="wal.symbol"
                                    />
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                    >
                                        <i class="bi bi-arrow-clockwise"></i>
                                        {{ $t("Regenerate") }}
                                    </button>
                                </form>
                            </template>
                            <button
                                v-else
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#deposit"
                                class="btn btn-success"
                            >
                                <i class="bi bi-wallet2"></i>
                                {{ $t("Deposit") }}
                            </button>
                        </div>
                        <a
                            v-else-if="type == 'funding'"
                            href="/user/deposit/wallet"
                            ><button
                                v-if="dp == 1"
                                :key="dp"
                                class="btn btn-success"
                            >
                                <i class="bi bi-wallet2"></i>
                                {{ $t("Deposit") }}
                            </button></a
                        >
                        <button
                            v-if="type == 'trading'"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#withdraw"
                            class="btn btn-danger ms-1"
                        >
                            <i class="bi bi-cash-coin"></i>
                            {{ $t("Withdraw") }}
                        </button>
                        <a
                            v-else-if="type == 'funding'"
                            :href="'/user/withdraw/wallet/' + wal.symbol"
                            ><button class="btn btn-danger ms-1">
                                <i class="bi bi-cash-coin"></i>
                                {{ $t("Withdraw") }}
                            </button></a
                        >
                        <div v-if="api || api == 1">
                            <button
                                v-if="type == 'trading'"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#transfer_trading"
                                class="btn btn-warning ms-1"
                            >
                                <i class="bi bi-arrow-left-right"></i>
                                {{ $t("Transfer") }}
                            </button>
                            <button
                                v-else-if="type == 'funding'"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#transfer_funding"
                                class="btn btn-warning ms-1"
                            >
                                <i class="bi bi-arrow-left-right"></i>
                                {{ $t("Transfer") }}
                            </button>
                        </div>
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
                                <th>{{ $t("Status") }}</th>
                            </tr>
                        </thead>
                        <tbody
                            v-if="wal_trx != null && wal_trx.length > 0"
                            :key="wal_trx.length"
                        >
                            <tr v-for="(trx, index) in wal_trx" :key="index">
                                <td>
                                    <div
                                        class="avatar bg-light-primary rounded float-start"
                                        style="max-height: 30px"
                                    >
                                        <div class="avatar-content">
                                            <i
                                                v-if="trx.type == 1"
                                                class="text-success fs-3 bi bi-wallet2"
                                            ></i>
                                            <span
                                                v-else-if="trx.type == 2"
                                                class="text-danger fs-3"
                                                ><i class="bi bi-cash"></i
                                            ></span>
                                            <span
                                                v-else-if="trx.type == 3"
                                                class="text-success fs-3"
                                                ><i class="bi bi-send"></i
                                            ></span>
                                            <span
                                                v-else-if="trx.type == 4"
                                                class="text-warning fs-3"
                                                ><i class="bi bi-envelope"></i
                                            ></span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span class="text-warning">
                                            {{ $t("Amount") }}:
                                        </span>

                                        <span v-if="trx.amount != 0">
                                            {{ trx.amount | toMoney(4) }}
                                            <span v-if="type == 'trading'">{{
                                                wal.symbol
                                            }}</span>
                                            <span v-else>{{ cur_symbol }}</span>
                                        </span>
                                        <span
                                            v-else
                                            class="badge rounded-pill badge-light-warning me-1"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-warning">
                                            {{ $t("Charge") }}:
                                        </span>
                                        <span v-if="trx.charge != 0">
                                            {{ trx.charge | toMoney(4) }}
                                            <span v-if="type == 'trading'">{{
                                                wal.symbol
                                            }}</span>
                                            <span v-else>{{ cur_symbol }}</span>
                                        </span>
                                        <span
                                            v-else
                                            class="badge rounded-pill badge-light-warning me-1"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-warning"
                                            >{{ $t("Recieved") }}:
                                        </span>
                                        <span v-if="trx.amount_recieved != 0">
                                            {{
                                                trx.amount_recieved | toMoney(4)
                                            }}
                                            {{ wal.symbol }}
                                        </span>
                                        <span
                                            v-else
                                            class="badge rounded-pill badge-light-warning me-1"
                                            >{{ $t("Pending") }}
                                        </span>
                                    </div>
                                    <div
                                        v-if="
                                            type == 'trading' && trx.type == 2
                                        "
                                    >
                                        <span class="text-warning"
                                            >{{ $t("Processing Fees") }}:
                                        </span>
                                        {{ trx.fees | toMoney(4) }}
                                        {{ wal.symbol }}
                                    </div>
                                    <template v-if="provider == 'kucoin'">
                                        <div
                                            v-if="trx.chain != null"
                                            :key="trx.chain"
                                        >
                                            <span class="text-warning"
                                                >{{ $t("Chain") }}:</span
                                            >
                                            {{ trx.chain }}
                                        </div>
                                    </template>
                                </td>
                                <td>
                                    <span
                                        v-if="trx.status == 1"
                                        class="badge rounded-pill badge-light-success me-1"
                                        >{{ $t("Completed") }}</span
                                    >
                                    <span
                                        v-else-if="trx.status == 2"
                                        class="badge rounded-pill badge-light-warning me-1"
                                        >{{ $t("Pending") }}</span
                                    >
                                    <span
                                        v-else-if="trx.status == 3"
                                        class="badge rounded-pill badge-light-danger me-1"
                                        >{{ $t("Rejected") }}</span
                                    >
                                </td>
                            </tr>
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
                <template v-if="provider == 'kucoin'">
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
                            <li
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="nav-item"
                            >
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="key + '-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="'#' + key"
                                    role="tab"
                                    aria-selected="false"
                                    >{{ key }}</a
                                >
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="key"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Deposit()"
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
                                                    >
                                                        {{
                                                            $t(
                                                                " Wallet Address"
                                                            )
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
                                                    <span>
                                                        {{
                                                            $t("Transfer Limit")
                                                        }}</span
                                                    >
                                                    <span>
                                                        {{
                                                            $t(" Unlimited")
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                                <div
                                                    class="d-flex justify-content-between"
                                                >
                                                    <span>
                                                        {{ $t("Memo") }}</span
                                                    >
                                                    <span
                                                        class="text-warning"
                                                        >{{
                                                            wallet.tag
                                                                ? wallet.tag
                                                                : ""
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            {{ $t("This is a") }}
                                            <span
                                                :ref="key"
                                                class="text-info"
                                                >{{ key ? key : "" }}</span
                                            >
                                            {{
                                                $t(
                                                    "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                                )
                                            }}.
                                        </div>
                                        <hr />
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="address"
                                            >
                                                {{
                                                    $t(" Transaction Hash")
                                                }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="trx_hash"
                                            />
                                        </div>
                                        <small
                                            class="text-info"
                                            :disabled="loading"
                                        >
                                            {{
                                                $t(
                                                    "After sending any payment in crypto wallet, u will recieve transaction hash, add it in this field to get verified in the blockchain to recieve your balance"
                                                )
                                            }}.</small
                                        >
                                    </div>
                                    <div class="modal-footer text-end">
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                            :disabled="loading"
                                        >
                                            {{ $t("Deposit") }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else-if="provider == 'bybit'">
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
                            <li
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="nav-item"
                            >
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="key + '-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="'#' + key"
                                    role="tab"
                                    aria-selected="false"
                                    >{{ key }}</a
                                >
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="key"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Deposit()"
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
                                                    <span>
                                                        {{
                                                            $t("Transfer Limit")
                                                        }}</span
                                                    >
                                                    <span
                                                        >{{ $t("Min") }}:
                                                        {{ getDepositMin(key) }}
                                                        / Max:
                                                        {{
                                                            getDepositMax(key)
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                                <div
                                                    class="d-flex justify-content-between"
                                                >
                                                    <span>
                                                        {{ $t("Memo") }}</span
                                                    >
                                                    <span
                                                        class="text-warning"
                                                        >{{
                                                            wallet.tag
                                                                ? wallet.tag
                                                                : ""
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            {{ $t("This is a") }}
                                            <span
                                                :ref="key"
                                                class="text-info"
                                                >{{
                                                    wallet.info.chain_type
                                                        ? wallet.info.chain_type
                                                        : ""
                                                }}</span
                                            >
                                            {{
                                                $t(
                                                    "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                                )
                                            }}.
                                        </div>
                                        <hr />
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="address"
                                            >
                                                {{
                                                    $t("Transaction Hash")
                                                }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="trx_hash"
                                            />
                                        </div>
                                        <small class="text-info">
                                            {{
                                                $t(
                                                    "After sending any payment in crypto wallet, u will recieve transaction hash, add it in this field to get verified in the blockchain to recieve your balance"
                                                )
                                            }}.</small
                                        >
                                    </div>
                                    <div class="modal-footer text-end">
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                            :disabled="loading"
                                        >
                                            {{ $t("Deposit") }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else-if="provider == 'binance'">
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
                            <li
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="nav-item"
                            >
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="key + '-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="'#' + key"
                                    role="tab"
                                    aria-selected="false"
                                    >{{ key }}</a
                                >
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                v-for="(wallet, key, index) in addresses"
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="key"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Deposit()"
                                >
                                    <div class="modal-body pb-3 px-sm-3">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-5">
                                                <div>
                                                    <label
                                                        class="form-control-label h6"
                                                        >To</label
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
                                                    >
                                                        {{
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
                                                    <span>
                                                        {{
                                                            $t("Transfer Limit")
                                                        }}</span
                                                    >
                                                    <span>
                                                        {{ $t("Min") }}:
                                                        {{
                                                            JSON.parse(
                                                                JSON.stringify(
                                                                    chains[key]
                                                                )
                                                            ).withdrawMin
                                                        }}
                                                        / {{ $t("Max") }}:
                                                        {{
                                                            JSON.parse(
                                                                JSON.stringify(
                                                                    chains[key]
                                                                )
                                                            ).withdrawMax
                                                        }}</span
                                                    >
                                                </div>
                                                <hr />
                                                <div
                                                    class="d-flex justify-content-between"
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
                                                <hr />
                                            </div>
                                        </div>
                                        <div class="mt-1">
                                            {{ $t("This is a") }}
                                            <span
                                                :ref="key"
                                                class="text-info"
                                                >{{
                                                    JSON.parse(
                                                        JSON.stringify(
                                                            chains[key]
                                                        )
                                                    ).name
                                                }}</span
                                            >
                                            {{
                                                $t(
                                                    "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                                )
                                            }}.
                                        </div>
                                        <hr />
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="address"
                                                >{{
                                                    $t("Transaction Hash")
                                                }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="trx_hash"
                                            />
                                        </div>
                                        <small class="text-info">
                                            {{
                                                $t(
                                                    "After sending any payment in crypto wallet, u will recieve transaction hash, add it in this field to get verified in the blockchain to recieve your balance"
                                                )
                                            }}.</small
                                        >
                                    </div>
                                    <div class="modal-footer text-end">
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                            :disabled="loading"
                                        >
                                            {{ $t("Deposit") }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="modal-content">
                        <div class="modal-header bg-transparent">
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <form
                            class="add-new-record modal-content pt-0"
                            @submit.prevent="Deposit()"
                        >
                            <div class="modal-body pb-3 px-sm-3">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4">
                                        <div>
                                            <label
                                                class="form-control-label h6"
                                                >{{ $t("To") }}</label
                                            >
                                        </div>
                                        <qr-code
                                            :size="150"
                                            v-if="wal.address != null"
                                            :text="wal.address"
                                        ></qr-code>
                                    </div>
                                    <div class="col-lg-9 col-md-8">
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
                                                class="form-control"
                                                type="text"
                                                ref="
                                                            recieving_address
                                                        "
                                                :value="
                                                    wal.address
                                                        ? wal.address
                                                        : ''
                                                "
                                                readonly
                                            />
                                        </div>
                                        <div
                                            class="d-flex justify-content-between mt-1"
                                        >
                                            <span>
                                                {{ $t("Transfer Limit") }}</span
                                            >
                                            <span> {{ $t("Unlimited") }}</span>
                                        </div>
                                        <hr />
                                        <div
                                            class="d-flex justify-content-between"
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
                                        <hr />
                                    </div>
                                </div>
                                <div class="mt-1">
                                    {{ $t("This is a") }}
                                    <span class="text-info">{{
                                        wal.chain
                                    }}</span>
                                    {{
                                        $t(
                                            "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                        )
                                    }}.
                                </div>
                                <hr />
                                <div class="input-group">
                                    <span
                                        class="input-group-text"
                                        for="address"
                                    >
                                        {{
                                            $t("Transaction Hash Address")
                                        }}</span
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="trx_hash"
                                    />
                                </div>
                            </div>
                            <div class="modal-footer text-end">
                                <button
                                    type="submit"
                                    class="btn btn-success"
                                    :disabled="loading"
                                >
                                    {{ $t("Deposit") }}
                                </button>
                            </div>
                        </form>
                    </div>
                </template>
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
                    <template v-if="provider == 'kucoin'">
                        <ul
                            v-if="chains != null"
                            class="nav nav-tabs"
                            role="tablist"
                        >
                            <li
                                v-for="(chain, key, index) in chains"
                                :key="index"
                                class="nav-item"
                            >
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="chain.chainName + '-withdraw-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="
                                        '#' + chain.chainName + '-withdraw'
                                    "
                                    role="tab"
                                    aria-selected="false"
                                    :aria-controls="
                                        chain.chainName + '-withdraw'
                                    "
                                    >{{ chain.chainName }}</a
                                >
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                v-for="(chain, key, index) in chains"
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="chain.chainName + '-withdraw'"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Withdraw(key)"
                                >
                                    <div class="modal-body pb-3 px-sm-3">
                                        <div class="mt-1">
                                            {{ $t("Provide a") }}
                                            <span class="text-info">{{
                                                chain.chainName
                                            }}</span>
                                            {{
                                                $t(
                                                    "Chain address. Do not add any other Chain to this address or your funds may be lost"
                                                )
                                            }}.
                                        </div>
                                        <hr />
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="recieving_withdraw_address"
                                            >
                                                {{ $t("Wallet Address") }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="
                                                    recieving_withdraw_address
                                                "
                                            />
                                        </div>
                                        <div class="input-group my-1">
                                            <span
                                                class="input-group-text"
                                                for="amount"
                                            >
                                                {{ $t("Amount") }}</span
                                            >
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model="withdraw_amount"
                                                :min="
                                                    chain.withdrawalMinSize
                                                        ? chain.withdrawalMinSize
                                                        : 0.0000001
                                                "
                                            />
                                        </div>
                                        <div class="my-1">
                                            <div class="input-group">
                                                <span
                                                    class="input-group-text"
                                                    for="memo"
                                                >
                                                    {{ $t("Memo") }}</span
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="memo"
                                                />
                                            </div>
                                            <small class="text-warning">
                                                {{
                                                    $t(
                                                        "Leave empty if the network chain dont require memo"
                                                    )
                                                }}</small
                                            >
                                        </div>
                                        <div class="input-group my-1">
                                            <span
                                                class="input-group-text"
                                                for="fees"
                                            >
                                                {{ $t("Fees") }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                :value="
                                                    chain.withdrawalMinFee +
                                                    ' ' +
                                                    wal.symbol
                                                "
                                                disabled
                                            />
                                        </div>
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
                        </div>
                    </template>
                    <template v-if="provider == 'binance'">
                        <ul
                            v-if="chains != null"
                            class="nav nav-tabs"
                            role="tablist"
                        >
                            <li
                                v-for="(chain, key, index) in chains"
                                :key="index"
                                class="nav-item"
                            >
                                <a
                                    class="nav-link"
                                    :class="index == 0 ? 'active' : ''"
                                    :id="chain.network + '-withdraw-tab'"
                                    data-bs-toggle="tab"
                                    :data-bs-target="
                                        '#' + chain.network + '-withdraw'
                                    "
                                    role="tab"
                                    aria-selected="false"
                                    >{{ chain.network }}</a
                                >
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div
                                v-for="(chain, key, index) in chains"
                                :key="index"
                                class="tab-pane"
                                :class="index == 0 ? 'active' : ''"
                                :id="chain.network + '-withdraw'"
                                role="tabpanel"
                            >
                                <form
                                    class="add-new-record modal-content pt-0"
                                    @submit.prevent="Withdraw(key)"
                                >
                                    <div class="modal-body pb-3 px-sm-3">
                                        <div class="mt-1">
                                            {{ $t("Provide a") }}
                                            <span class="text-info">{{
                                                chain.name
                                            }}</span>
                                            {{
                                                $t(
                                                    "Chain address. Do not add any other Chain to this address or your funds may be lost"
                                                )
                                            }}.
                                        </div>
                                        <hr />
                                        <div class="input-group">
                                            <span
                                                class="input-group-text"
                                                for="recieving_withdraw_address"
                                            >
                                                {{ $t("Wallet Address") }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="
                                                    recieving_withdraw_address
                                                "
                                            />
                                        </div>
                                        <div class="input-group my-1">
                                            <span
                                                class="input-group-text"
                                                for="amount"
                                            >
                                                {{ $t("Amount") }}</span
                                            >
                                            <input
                                                type="number"
                                                class="form-control"
                                                v-model="withdraw_amount"
                                                :min="
                                                    chain.withdrawMin
                                                        ? chain.withdrawMin
                                                        : 0.0000001
                                                "
                                            />
                                        </div>
                                        <div
                                            class="my-1"
                                            v-if="chain.memoRegex != ''"
                                        >
                                            <div class="input-group">
                                                <span
                                                    class="input-group-text"
                                                    for="memo"
                                                >
                                                    {{ $t("Memo") }}</span
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="memo"
                                                />
                                            </div>
                                        </div>
                                        <div class="input-group my-1">
                                            <span
                                                class="input-group-text"
                                                for="fees"
                                            >
                                                {{ $t("Fees") }}</span
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                :value="
                                                    chain.withdrawFee +
                                                    ' ' +
                                                    wal.symbol
                                                "
                                                disabled
                                            />
                                        </div>
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
                        </div>
                    </template>
                    <template v-else-if="provider == 'coinbasepro'">
                        <form
                            class="add-new-record modal-content pt-0"
                            @submit.prevent="Withdraw()"
                        >
                            <div class="modal-body pb-3 px-sm-3">
                                <div class="mt-1">
                                    {{ $t("Provide a") }}
                                    <span class="text-info">{{
                                        wal.chain
                                    }}</span>
                                    {{
                                        $t(
                                            "Chain address. Do not add any other Chain to this address or your funds may be lost"
                                        )
                                    }}.
                                </div>
                                <hr />
                                <div class="input-group">
                                    <span
                                        class="input-group-text"
                                        for="recieving_withdraw_address"
                                    >
                                        {{ $t("Wallet Address") }}</span
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        ref="recieving_withdraw_address"
                                    />
                                </div>
                                <div class="input-group my-1">
                                    <span class="input-group-text" for="amount">
                                        {{ $t("Amount") }}</span
                                    >
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model="withdraw_amount"
                                        :min="
                                            currency.min_withdrawal_amount
                                                ? currency.min_withdrawal_amount
                                                : 0.0000001
                                        "
                                    />
                                </div>
                                <div class="my-1">
                                    <div class="input-group">
                                        <span
                                            class="input-group-text"
                                            for="amount"
                                        >
                                            {{ $t("Memo") }}</span
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="memo"
                                        />
                                    </div>
                                    <small class="text-warning">
                                        {{
                                            $t("Leave empty if no memo")
                                        }}</small
                                    >
                                </div>
                                <div class="input-group my-1">
                                    <span class="input-group-text" for="amount">
                                        {{ $t("Fees") }}</span
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
                                </div>
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
                    </template>
                </div>
            </div>
        </div>

        <div
            class="modal fade"
            id="transfer_trading"
            tabindex="-1"
            aria-labelledby="transfer"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h5 class="modal-title">
                            {{ $t("Trading To Funding Transfer") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        class="add-new-record modal-content pt-0"
                        @submit.prevent="TransferTrading()"
                    >
                        <div class="modal-body pb-3 px-sm-3">
                            <div class="input-group my-1">
                                <span class="input-group-text" for="amount">
                                    {{ $t("Amount") }}</span
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    min="0.000001"
                                    step="0.000001"
                                    max="999999999"
                                    v-model="transfer_trading_amount"
                                />
                            </div>
                        </div>
                        <div class="modal-footer text-end">
                            <button type="submit" class="btn btn-success">
                                {{ $t("Transfer") }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div
            class="modal fade"
            id="transfer_funding"
            tabindex="-1"
            aria-labelledby="transfer"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <h5 class="modal-title">
                            {{ $t("Funding To Trading Transfer") }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <form
                        class="add-new-record modal-content pt-0"
                        @submit.prevent="TransferFunding()"
                    >
                        <div class="modal-body pb-3 px-sm-3">
                            <div class="input-group my-1">
                                <span class="input-group-text" for="amount">
                                    {{ $t("Amount") }}</span
                                >
                                <input
                                    type="number"
                                    class="form-control"
                                    min="0.000001"
                                    step="0.000001"
                                    max="999999999"
                                    v-model="transfer_funding_amount"
                                />
                            </div>
                        </div>
                        <div class="modal-footer text-end">
                            <button type="submit" class="btn btn-success">
                                {{ $t("Transfer") }}
                            </button>
                        </div>
                    </form>
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
            cur_rate: cur_rate,
            cur_symbol: cur_symbol,
            wal: {},
            wal_trx: {},
            addresses: {},
            currencies: {},
            currency: {},
            curr: {},
            provider: {},
            gnl: gnl,
            chains: {},
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
        };
    },
    // custom methods
    methods: {
        getDepositMin(key) {
            try {
                if (key == "ETH") {
                    return JSON.parse(JSON.stringify(this.chains["ERC20"]))
                        .limits.deposit.min;
                } else if (key == "TRX") {
                    return JSON.parse(JSON.stringify(this.chains["TRC20"]))
                        .limits.deposit.min;
                } else {
                    return JSON.parse(JSON.stringify(this.chains[key])).limits
                        .deposit.min;
                }
            } catch (err) {}
        },
        getDepositMinBinance(key) {
            return JSON.parse(JSON.stringify(this.chains[key])).withdrawMin;
        },
        getDepositMaxBinance(key) {
            return JSON.parse(JSON.stringify(this.chains[key])).withdrawMax;
        },
        getDepositMax(key) {
            try {
                if (key == "ETH") {
                    let val = JSON.parse(JSON.stringify(this.chains["ERC20"]))
                        .limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                } else if (key == "TRX") {
                    let val = JSON.parse(JSON.stringify(this.chains["TRC20"]))
                        .limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                } else {
                    let val = JSON.parse(JSON.stringify(this.chains[key]))
                        .limits.deposit.max;
                    if (val === null || val === undefined) {
                        return "Unlimited";
                    } else {
                        return val;
                    }
                }
            } catch (err) {}
        },
        fetchData() {
            this.$http
                .post(
                    "/user/fetch/wallet/" +
                        this.type +
                        "/" +
                        this.symbol +
                        "/" +
                        this.address
                )
                .then((response) => {
                    (this.wal = response.data.wal),
                        (this.wal_trx = response.data.wal_trx),
                        (this.addresses = response.data.addresses),
                        (this.curr = response.data.curr),
                        (this.provider = response.data.provider),
                        (this.currency = response.data.currency),
                        (this.api = response.data.api),
                        (this.dp = response.data.dp),
                        (this.currencies = response.data.currencies);
                    response.data.chains.forEach((element) => {
                        if (this.provider == "kucoin") {
                            this.chains[element.chainName] = element;
                        } else if (this.provider == "binance") {
                            this.chains[element.network] = element;
                        }
                    });
                    if (this.api == 0) {
                        this.activeItem = "funding";
                    }
                });
        },
        Deposit() {
            (this.loading = true),
                this.$http
                    .post("/user/wallet/deposit", {
                        symbol: this.symbol,
                        recieving_address: this.$refs.recieving_address,
                        address: this.trx_hash,
                        chain: this.$refs.chain,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.wal_trx = response.data.wal_trx),
                            this.$emit("RefreshWallet", response.data.wal);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                        $("#deposit").modal("hide");
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
            if (this.provider == "binance") {
                this.withdrawfee = this.chains[id].withdrawFee;
            }
            (this.loading = true),
                this.$http
                    .post("/user/wallet/withdraw", {
                        symbol: this.symbol,
                        recieving_address: this.recieving_withdraw_address,
                        memo: this.memo,
                        amount: this.withdraw_amount,
                        chain: this.network,
                        fee: this.withdrawfee,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.wal_trx = response.data.wal_trx),
                            this.$emit("RefreshWallet", response.data.wal);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                        $("#withdraw").modal("hide");
                    });
        },
        TransferTrading() {
            if (this.transfer_trading_amount > 0) {
                this.loading = true;
                this.$http
                    .post("/user/wallet/transfer/trading", {
                        symbol: this.symbol,
                        amount: this.transfer_trading_amount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.wal_trx = response.data.wal_trx),
                            (this.wal = response.data.wal),
                            this.$emit("RefreshWallet", response.data.wal);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                        $("#transfer_trading").modal("hide");
                    });
            } else {
                this.$toast.error("Amount should be higher than 0");
            }
        },
        TransferFunding() {
            if (this.transfer_funding_amount > 0) {
                this.loading = true;
                this.$http
                    .post("/user/wallet/transfer/funding", {
                        symbol: this.symbol,
                        amount: this.transfer_funding_amount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.wal_trx = response.data.wal_trx),
                            (this.wal = response.data.wal),
                            this.$emit("RefreshWallet", response.data.wal);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                        $("#transfer_funding").modal("hide");
                    });
            } else {
                this.$toast.error("Amount should be higher than 0");
            }
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>
