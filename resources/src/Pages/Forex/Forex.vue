<template>
    <div>
        <div class="row match-height">
            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12">
                <div class="card card-profile">
                    <img src="assets/images/ico/stage-3.jpg" class="card-img-top" alt="Profile Cover Photo" />
                    <div class="card-body">
                        <div class="profile-image-wrapper">
                            <div class="profile-image">
                                <div class="avatar">
                                    <img class="round" v-if="user.profile_photo_path != null" :src="
                                        user.profile_photo_path
                                            ? 'assets/images/profile/' +
                                            user.profile_photo_path
                                            : '/market/notification.png'
                                    " alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <h3>{{ user.firstname }}</h3>
                        <div>
                            <h6 class="badge badge-light-success profile-badge">
                                {{ $t("Verified Trader") }}
                            </h6>
                        </div>
                        <template v-if="account != null">
                            <router-link v-if="account.status == 1" to="/forex/trade"><button type="button"
                                    class="btn btn-primary mt-1">
                                    {{ $t("Launch Forex App") }}
                                </button>
                            </router-link>
                            <div v-else>
                                <button type="button" class="btn btn-secondary mt-1" disabled>
                                    {{ $t("Forex App Locked") }}
                                </button>
                                <div class="text-warning">
                                    <small>{{ $t("Deposit Firstly") }}</small>
                                </div>
                            </div>
                            <div>
                                <div v-if="wallet != null" :key="wallet.balance"
                                    class="d-flex justify-content-center align-items-center my-1">
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                        data-bs-target="#deposit">
                                        {{ $t("Deposit") }}
                                    </button>
                                    <button type="button" class="btn btn-danger ms-1" data-bs-toggle="modal"
                                        data-bs-target="#withdraw">
                                        {{ $t("Withdraw") }}
                                    </button>
                                </div>
                                <form v-else :key="wallet" class="my-1" @submit.prevent="createWallet()">
                                    <button type="submit" class="btn btn-warning" :disabled="loading">
                                        {{ $t("Create Wallet") }}
                                    </button>
                                </form>
                            </div>
                        </template>
                        <a v-else @click="createAccount()">
                            <button type="submit" class="btn btn-success">
                                {{ $t("Create Forex Account") }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                <div class="row match-height">
                    <div v-if="account != null" class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="icon-bg bg-light-primary mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-briefcase font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{
                                            (account.balance *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Forex Account Balance") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="icon-bg bg-light-warning mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-diagram-3 font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{
                                            ((forex_log.profit
    ? forex_log.profit
    : 0) *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Forex Account Profit") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="icon-bg bg-light-info mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-node-plus font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{
                                            (investment_logs_amount *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Total Investment") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="card text-center">
                                    <div class="card-body">
                                        <div class="icon-bg bg-light-success mb-1">
                                            <div class="avatar-content">
                                                <i class="bi bi-node-plus-fill font-medium-5"></i>
                                            </div>
                                        </div>
                                        <h2 class="fw-bolder">
                                            {{
                                            (investment_logs_profit *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}
                                        </h2>
                                        <p class="card-text">
                                            {{ $t("Investments Profit") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">
                                    {{ $t("Forex Account Details") }}
                                </h4>
                            </div>
                            <div class="card-body text-center"></div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="card card-transaction">
                            <div class="card-header">
                                <h4 class="card-title">
                                    {{ $t("Forex Transactions") }}
                                </h4>
                            </div>
                            <div v-if="
                                forex_logs != null && forex_logs.length > 0
                            " class="card-body" style="max-height: 280px; overflow-y: auto">
                                <div v-for="(forex_log, index) in forex_logs" :key="index" class="transaction-item">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="icon-bg bg-light-primary rounded float-start me-1">
                                            <div class="avatar-content">
                                                <span v-if="forex_log.type == 1" class="text-success font-medium-5"><i
                                                        class="bi bi-journal-arrow-up"></i></span>
                                                <span v-else-if="
                                                    forex_log.type == 2
                                                " class="text-danger font-medium-5"><i
                                                        class="bi bi-journal-arrow-down"></i></span>
                                                <span v-else-if="
                                                    forex_log.type == 3
                                                " class="text-warning font-medium-5"><i
                                                        class="bi bi-briefcase"></i></span>
                                            </div>
                                        </div>
                                        <div class="transaction-percentage">
                                            <div v-if="forex_log.type == 1">
                                                <span class="text-success fw-bold">{{
                                                    $t("Forex Deposit")
                                                }}</span>
                                                <p>
                                                    <small>
                                                        {{
                                                            forex_log.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </p>
                                            </div>
                                            <div v-else-if="forex_log.type == 2">
                                                <span class="text-danger fw-bold">{{
                                                    $t("Forex Withdraw")
                                                }}</span>
                                                <p>
                                                    <small>
                                                        {{
                                                            forex_log.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </p>
                                            </div>
                                            <div v-else-if="forex_log.type == 3">
                                                <span class="text-warning fw-bold">{{
                                                    $t("Forex Investment")
                                                }}</span>
                                                <p>
                                                    <small>
                                                        {{
                                                            forex_log.created_at
                                                                | moment(
                                                                    "dddd, MMMM Do YYYY"
                                                                )
                                                        }}
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fw-bolder">
                                        <span v-if="
                                            (forex_log.type != 3 &&
                                                forex_log.status == 0) ||
                                            (forex_log.type == 3 &&
                                                forex_log.status != 1)
                                        " class="badge bg-warning">{{ $t("Pending") }}</span>
                                        <span v-if="
                                            forex_log.type == 1 &&
                                            forex_log.status != 0
                                        " class="badge bg-success">-
                                            {{
                                            (forex_log.amount *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}</span>
                                        <span v-else-if="
                                            forex_log.type == 2 &&
                                            forex_log.status != 0
                                        " class="badge bg-danger">+
                                            {{
                                            (forex_log.amount *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}</span>
                                        <span v-else-if="
                                            forex_log.type == 3 &&
                                            forex_log.status == 1
                                        " class="badge bg-warning">+
                                            {{
                                            (forex_log.profit *
    currency.rate)
    | toMoney
                                            }}
                                            {{ currency.symbol }}</span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-muted text-center" colspan="100%">
                                <img height="128px" width="128px"
                                    src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg" alt="" />
                                <p class="">{{ $t("No Data Found") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="account != null" class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form @submit.prevent="submitInvestment()">
                                    <div class="card-title">
                                        {{ $t("Forex Investments") }}
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div v-if="wallets != null" class="dropdown">
                                                <button class="btn btn-outline-warning dropdown-toggle w-100 mb-1"
                                                    type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                                    ref="wallett">
                                                    {{ $t("Select Wallet") }}
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li v-for="(
                                                            wallet, index
                                                        ) in wallets" :key="index">
                                                        <a class="dropdown-item" @click="
                                                            selectWallet(
                                                                wallet.symbol
                                                            )
                                                        ">{{ wallet.symbol }}
                                                            {{
                                                                wallet.balance
                                                                    | toMoney
                                                            }}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <form v-else :key="wallets" class="my-1" @submit.prevent="createWallet()">
                                                <button type="submit" class="btn btn-warning" :disabled="loading">
                                                    {{ $t("Create Wallet") }}
                                                </button>
                                            </form>
                                        </div>
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <button type="button" class="btn btn-primary w-100 mb-1"
                                                data-bs-toggle="modal" data-bs-target="#InvestmentType"
                                                ref="selectedInv">
                                                {{ $t("Select Plan") }}
                                            </button>
                                        </div>
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="input-group w-100 mb-1">
                                                <input type="number" class="form-control" required="" id="investAmount"
                                                    v-model="amount" min="1" max="1000000" placeholder="Amount" />
                                                <span class="input-group-text text-light" ref="selectedWallet">{{
                                                    currency.symbol
                                                }}</span>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <button
                                                class="w-100 mb-1 btn btn-success d-flex align-items-center justify-content-start"
                                                type="submit" :disabled="loading">
                                                <i class="bi bi-caret-right me-1"></i><span>{{
                                                    $t("Start Investment")
                                                }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">{{ $t("Plan") }}</th>
                                    <th scope="col">{{ $t("Amount") }}</th>
                                    <th scope="col">{{ $t("Profit") }}</th>
                                    <th scope="col">{{ $t("Duration") }}</th>
                                    <th scope="col">{{ $t("Status") }}</th>
                                </tr>
                            </thead>
                            <tbody v-if="
                                investment_logs != null &&
                                investment_logs.length > 0
                            " :key="investment_logs.length">
                                <tr v-for="(
                                        investment_log, index
                                    ) in investment_logs" :key="index">
                                    <td v-if="forex_plans != null" :key="
                                        forex_plans[
                                        investment_log.investment_id
                                        ]
                                    " data-label="Plan" class="text-uppercase">
                                        {{
                                            forex_plans.find(
                                                (forex_plans) =>
                                                    forex_plans.id ===
                                                    investment_log.investment_id
                                            ).title
                                        }}
                                    </td>
                                    <td data-label="Amount">
                                        {{
                                            investment_log.amount *
                                                currency.rate
                                        }}
                                        {{ currency.symbol }}
                                    </td>
                                    <td v-if="investment_log.result == 1" data-label="Profit" class="text-success">
                                        +
                                        {{
                                            investment_log.profit *
                                                currency.rate
                                        }}
                                        {{ currency.symbol }}
                                    </td>
                                    <td v-else-if="investment_log.result == 2" data-label="Profit" class="text-danger">
                                        -
                                        {{
                                            investment_log.profit *
                                                currency.rate
                                        }}
                                        {{ currency.symbol }}
                                    </td>
                                    <td v-else-if="investment_log.result == 3" data-label="Profit">
                                        {{
                                            investment_log.profit *
                                                currency.rate
                                        }}
                                        {{ currency.symbol }}
                                    </td>
                                    <td v-else data-label="Profit">
                                        <span class="badge bg-warning">{{
                                            $t("Pending")
                                        }}</span>
                                    </td>
                                    <td data-label="Duration">
                                        <div>
                                            {{ $t("Start") }}:
                                            <span class="fw-bold">{{
                                                investment_log.start_date
                                            }}</span>
                                        </div>
                                        <div>
                                            {{ $t("End") }}:
                                            <span class="fw-bold">{{
                                                investment_log.end_date
                                            }}</span>
                                        </div>
                                    </td>
                                    <td data-label="Status">
                                        <span v-if="investment_log.status !== 1" class="badge bg-primary">{{
                                            $t("Running")
                                        }}</span>
                                        <span v-else class="badge bg-success">{{
                                            $t("Complete")
                                        }}</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td class="text-muted text-center" colspan="100%">
                                        <img height="128px" width="128px"
                                            src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg" alt="" />
                                        <p class="">
                                            {{ $t("No Data Found") }}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="account !== null" class="row">
            <div v-if="getSignal(account.signal1_id) != null" class="col">
                <div class="card">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 1</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" :src="
                                    'assets/images/signal/' +
                                    getSignal(account.signal1_id)
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        'assets/images/signal/' +
                                        getSignal(account.signal1_id)
                                    " target="_blank"><i class="bi bi-cloud-download text-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="getSignal(account.signal2_id) != null" class="col">
                <div class="card">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 2</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" :src="
                                    'assets/images/signal/' +
                                    getSignal(account.signal2_id)
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        'assets/images/signal/' +
                                        getSignal(account.signal2_id)
                                    " target="_blank"><i class="bi bi-cloud-download text-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="getSignal(account.signal3_id) != null" class="col">
                <div class="card">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 3</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" :src="
                                    'assets/images/signal/' +
                                    getSignal(account.signal3_id)
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        'assets/images/signal/' +
                                        getSignal(account.signal3_id)
                                    " target="_blank"><i class="bi bi-cloud-download text-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="getSignal(account.signal4_id) != null" class="col">
                <div class="card">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 4</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" :src="
                                    'assets/images/signal/' +
                                    getSignal(account.signal4_id)
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        'assets/images/signal/' +
                                        getSignal(account.signal4_id)
                                    " target="_blank"><i class="bi bi-cloud-download text-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="getSignal(account.signal5_id) != null" class="col">
                <div class="card">
                    <div class="card-body">
                        <span class="card-title">{{ $t("Signal") }} 5</span>
                        <div class="data-doc-item data-doc-item-lg mx-auto my-1">
                            <div class="data-doc-image">
                                <img class="img-fluid img-thumbnail" :src="
                                    'assets/images/signal/' +
                                    getSignal(account.signal5_id)
                                " />
                            </div>
                            <ul class="data-doc-actions">
                                <li>
                                    <a :href="
                                        'assets/images/signal/' +
                                        getSignal(account.signal5_id)
                                    " target="_blank"><i class="bi bi-cloud-download text-white"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal modal-slide-in fade" id="deposit">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0" @submit.prevent="Deposit()">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        ×
                    </button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ $t("Deposit To Forex") }}
                        </h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div v-if="wallets != null" class="dropdown w-auto mb-1">
                            <button class="btn btn-outline-warning dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" ref="DepositWallet">
                                {{ $t("Select Wallet") }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li v-for="(wallet, index) in wallets" :key="index">
                                    <a class="dropdown-item" @click="
                                        SelectDepositWallet(wallet.symbol)
                                    ">{{ wallet.symbol }}
                                        {{ wallet.balance }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="input-group w-auto mb-1">
                            <input type="number" class="form-control" required="" v-model="DepositAmount" min="0"
                                placeholder="Amount" />
                            <span class="input-group-text text-light" ref="DepositAmountSymbol"></span>
                        </div>
                        <button type="submit" class="btn btn-primary data-submit me-1">
                            {{ $t("Deposit") }}
                        </button>
                        <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                            :disabled="loading">
                            {{ $t("Cancel") }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal modal-slide-in fade" id="withdraw">
            <div class="modal-dialog sidebar-sm">
                <form class="add-new-record modal-content pt-0" @submit.prevent="Withdraw()">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        ×
                    </button>
                    <div class="modal-header mb-1">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ $t("Withdraw From Forex") }}
                        </h5>
                    </div>
                    <div class="modal-body flex-grow-1">
                        <div class="input-group w-auto mb-1">
                            <input type="number" class="form-control" required="" v-model="WithdrawAmount" min="0"
                                placeholder="Amount" />
                            <span class="input-group-text text-light">{{
                                currency.symbol
                            }}</span>
                        </div>
                        <div v-if="wallets != null" class="dropdown w-auto mb-1">
                            <button class="btn btn-outline-warning dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false" ref="WithdrawWallet">
                                {{ $t("Select Recieving Wallet") }}
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li v-for="(wallet, index) in wallets" :key="index">
                                    <a class="dropdown-item" @click="
                                        SelectWithdrawWallet(wallet.symbol)
                                    " :data-symbol="wallet.symbol">{{ wallet.symbol }}
                                        {{ wallet.balance }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button type="submit" class="btn btn-primary data-submit me-1">
                            {{ $t("Withdraw") }}
                        </button>
                        <button type="reset" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                            :disabled="loading">
                            {{ $t("Cancel") }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal fade" id="InvestmentType" tabindex="-1" aria-labelledby="InvestmentType" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-transparent">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body pb-3 px-sm-3">
                        <template v-for="(investment, index) in forex_investment">
                            <a :key="index" @click="
                                selectInvestment(
                                    investment.id,
                                    investment.title
                                )
                            " style="stretched-link">
                                <div class="row bg-wallet p-1 rounded mb-1" :class="
                                    investment.id == 1
                                        ? 'bg-wallet-active'
                                        : ''
                                ">
                                    <div class="col-2">
                                        <img class="rounded-circle shadow-4" style="width: 64px" :src="
                                            'assets/images/forex/investment/' +
                                            investment.image
                                        " />
                                    </div>
                                    <div class="col-10">
                                        <div class="d-flex justify-content-between">
                                            <div class="fw-bold fs-4 text-white">
                                                {{ investment.title }}
                                                <span v-if="
                                                    investment.is_new == 1
                                                " class="fs-6 badge bg-success text-white">{{ $t("New") }}</span>
                                            </div>
                                            <div class="fs-6 text-white d-none d-md-block">
                                                <i class="bi bi-clock"></i>
                                                {{ investment.duration }}
                                                {{ $t("Days") }}
                                            </div>
                                        </div>
                                        <div class="row">
                                            <small class="fs-6 text-warning">{{
                                                investment.desc
                                            }}</small>
                                            <div>
                                                {{ investment.duration }}
                                                {{ $t("Days") }}
                                                {{
                                                    $t("Return on Investment")
                                                }}:
                                                <span class="text-success">{{ investment.roi }}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["user"],
    // component list
    components: {},

    // component data
    data() {
        return {
            account: {},
            forex_log: {},
            forex_logs: {},
            forex_investment: {},
            investment_logs: {},
            investment_logs_amount: {},
            investment_logs_profit: {},
            signals: [],
            investment: {},
            wallets: {},
            wallet: {},
            currency: {},
            forex_plans: [],
            investment_id: {},
            investment_wallet: null,
            deposit_wallet: null,
            withdraw_wallet: null,
            amount: 0,
            DepositAmount: 0,
            WithdrawAmount: 0,
            loading: false,
        };
    },

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchData() {
            this.$http.post("/user/fetch/forex").then((response) => {
                if (response.data.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.account = response.data.account),
                    (this.forex_logs = response.data.forex_logs),
                    (this.forex_log = response.data.forex_log),
                    (this.forex_investment = response.data.forex_investment),
                    (this.signals = response.data.signals),
                    (this.investment_logs = response.data.investment_logs),
                    (this.investment_logs_amount =
                        response.data.investment_logs_amount),
                    (this.investment_logs_profit =
                        response.data.investment_logs_profit),
                    (this.investment = response.data.investment),
                    (this.wallets = response.data.wallets),
                    (this.wallet = response.data.wallet),
                    (this.forex_plans = response.data.forex_plans),
                    (this.currency = response.data.currency);
            });
        },
        getPlan(id) {
            if (
                this.forex_plans.find((forex_plans) => forex_plans.id === id) !=
                null
            ) {
                this.forex_plans.find((forex_plans) => forex_plans.id === id)
                    .title;
            } else {
                return null;
            }
        },
        getSignal(id) {
            if (this.signals.find((signals) => signals.id === id) != null) {
                return this.signals.find((signals) => signals.id === id).image;
            } else {
                return null;
            }
        },
        createAccount() {
            this.$http
                .post("/user/forex/create")
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                    this.account = response.data.meta;
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                })
                .finally(() => { });
        },
        fetchWallet() {
            this.$http
                .post("/user/fetch/wallet", {
                    type: "funding",
                    symbol: "USDT",
                })
                .then((response) => {
                    this.wallet = response.data.balance;
                });
        },
        createWallet() {
            (this.loading = true),
                this.$http
                    .post("/user/wallet/j/create", {
                        type: "funding",
                        symbol: "USDT",
                    })
                    .then((response) => {
                        this.fetchWallet();
                        this.$toast[response.data.type](response.data.message);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
        },
        submitInvestment() {
            this.loading = true;
            this.$http
                .post("/user/forex/store", {
                    investment_id: this.investment_id,
                    symbol: this.investment_wallet,
                    amount: this.amount,
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message),
                        (this.forex_logs = response.data.meta);
                    this.fetchData();
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        Deposit() {
            (this.loading = true),
                this.$http
                    .post("/user/forex/deposit", {
                        symbol: this.deposit_wallet,
                        amount: this.DepositAmount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.forex_logs = response.data.meta);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        $("#deposit").modal("hide");
                        this.loading = false;
                    });
        },
        Withdraw() {
            (this.loading = true),
                this.$http
                    .post("/user/forex/withdraw", {
                        symbol: this.withdraw_wallet,
                        amount: this.WithdrawAmount,
                    })
                    .then((response) => {
                        this.$toast[response.data.type](response.data.message),
                            (this.forex_logs = response.data.meta);
                    })
                    .catch((error) => {
                        this.$toast.error(error.response.data);
                    })
                    .finally(() => {
                        $("#withdraw").modal("hide");
                        this.fetchData();
                        this.loading = false;
                    });
        },
        selectWallet(symbol) {
            this.$refs.wallett.innerText = symbol;
            this.$refs.selectedWallet.innerText = symbol;
            this.investment_wallet = symbol;
        },
        SelectDepositWallet(symbol) {
            this.$refs.DepositWallet.innerText = symbol;
            this.$refs.DepositAmountSymbol.innerText = symbol;
            this.deposit_wallet = symbol;
        },
        SelectWithdrawWallet(symbol) {
            this.$refs.WithdrawWallet.innerText = symbol;
            this.withdraw_wallet = symbol;
        },
        selectInvestment(id, title) {
            this.$refs.selectedInv.innerText = title;
            this.investment_id = id;
            $("#InvestmentType").modal("hide");
            this.forex_investment.forEach((e) => {
                if (e.id == id) {
                    $("#investAmount").attr({
                        max: e.max, // substitute your own
                        min: e.min, // values (or variables) here
                        step: e.min, // values (or variables) here
                    });
                }
            });
        },
    },

    // on component created
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() { },

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
