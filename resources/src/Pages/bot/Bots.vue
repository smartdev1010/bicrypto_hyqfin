<template>
    <div>
        <div class="row match-height">
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card card-congratulation-medal mh-22vh">
                    <div class="card-body">
                        <h5>{{ $t("Welcome") }} 🎉 {{ user.firstname }}</h5>
                        <router-link
                            to="/bot/BTC/USDT"
                            type="button"
                            class="mt-3 btn btn-primary"
                            >{{ $t("New Bot") }}</router-link
                        >
                        <img
                            src="/images/illustration/badge.svg"
                            class="congratulation-medal"
                            alt="Medal Pic"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="row">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="avatar bg-light-info p-50 mb-1">
                                    <div class="avatar-content">
                                        <i
                                            class="bi bi-robot font-medium-5"
                                        ></i>
                                    </div>
                                </div>
                                <h2
                                    class="fw-bolder"
                                    v-if="bot_contracts_count_running != null"
                                    :key="bot_contracts_count_running"
                                >
                                    {{ bot_contracts_count_running }}
                                </h2>
                                <p class="card-text">
                                    {{ $t("Running Bots") }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="avatar bg-light-success p-50 mb-1">
                                    <div class="avatar-content">
                                        <i
                                            class="bi bi-check-lg font-medium-5"
                                        ></i>
                                    </div>
                                </div>
                                <h2
                                    class="fw-bolder"
                                    v-if="bot_contracts_count_completed != null"
                                    :key="bot_contracts_count_completed"
                                >
                                    {{ bot_contracts_count_completed }}
                                </h2>
                                <p class="card-text">
                                    {{ $t("Completed Bots") }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="row">
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="avatar bg-light-info p-50 mb-1">
                                    <div class="avatar-content">
                                        <i
                                            class="bi bi-robot font-medium-5"
                                        ></i>
                                    </div>
                                </div>
                                <h2
                                    class="fw-bolder"
                                    v-if="
                                        bot_contracts_count_amount != null &&
                                        currency != null
                                    "
                                    :key="bot_contracts_count_amount"
                                >
                                    {{
                                        bot_contracts_count_amount *
                                        currency.rate
                                    }}
                                    {{ currency.symbol }}
                                </h2>
                                <p class="card-text">
                                    {{ $t("Total Investment") }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-center">
                            <div class="card-body">
                                <div class="avatar bg-light-success p-50 mb-1">
                                    <div class="avatar-content">
                                        <i
                                            class="bi bi-check-lg font-medium-5"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    v-if="currency != null"
                                    :key="currency.rate"
                                >
                                    <h2 v-if="profit > 0" class="text-success">
                                        {{ profit * currency.rate }}
                                        {{ currency.symbol }}
                                    </h2>
                                    <h2
                                        v-else-if="profit < 0"
                                        class="fw-bolder text-danger"
                                    >
                                        {{ profit * currency.rate }}
                                        {{ currency.symbol }}
                                    </h2>
                                    <h2 v-else class="fw-bolder">
                                        {{ profit * currency.rate }}
                                        {{ currency.symbol }}
                                    </h2>
                                    <p class="card-text">
                                        {{ $t("Total Profit/Lose") }}
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                            {{ $t("Running Contracts") }}
                        </h4>
                        <div class="w-50 d-flex">
                            <div class="input-group w-50 me-1">
                                <span
                                    class="input-group-text"
                                    id="available-search"
                                    >{{ $t("Symbol") }}</span
                                >
                                <input
                                    class="form-control"
                                    v-model="filters.symbol.value"
                                />
                            </div>
                            <div class="input-group w-50">
                                <span
                                    class="input-group-text"
                                    id="available-search"
                                    >{{ $t("Pair") }}</span
                                >
                                <input
                                    class="form-control"
                                    v-model="filters.pair.value"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <v-table
                            :data="bot_contracts"
                            :filters="filters"
                            :currentPage.sync="currentPage"
                            :pageSize="10"
                            @totalPagesChanged="totalPages = $event"
                            class="table"
                        >
                            <thead slot="head">
                                <tr>
                                    <v-th sortKey="symbol" scope="col">{{
                                        $t("Bot")
                                    }}</v-th>
                                    <v-th sortKey="duration" scope="col">{{
                                        $t("Duration")
                                    }}</v-th>
                                    <v-th sortKey="profit" scope="col">{{
                                        $t("Profit")
                                    }}</v-th>
                                    <v-th sortKey="Status" scope="col">{{
                                        $t("Status")
                                    }}</v-th>
                                    <th scope="col">{{ $t("View") }}</th>
                                </tr>
                            </thead>
                            <tbody slot="body" slot-scope="{ displayData }">
                                <template v-if="bot_contracts != null">
                                    <tr
                                        v-for="row in displayData"
                                        :key="row.id"
                                    >
                                        <td data-label="Bot">
                                            <div class="fw-bold fs-4">
                                                {{ row.bot_name }}
                                            </div>
                                            <div
                                                class="text-warning"
                                                style="margin-top: 4px"
                                            >
                                                ({{ row.symbol }}/{{
                                                    row.pair
                                                }})
                                            </div>
                                        </td>
                                        <td data-label="Duration">
                                            <div>
                                                {{ $t("Start") }}:
                                                <span class="fw-bold">{{
                                                    row.start_date
                                                }}</span>
                                            </div>
                                            <div>
                                                {{ $t("End") }}:
                                                <span class="fw-bold">{{
                                                    row.end_date
                                                }}</span>
                                            </div>
                                        </td>
                                        <td data-label="Status">
                                            <template v-if="row.status != 1">
                                                <span
                                                    class="badge bg-warning"
                                                    >{{ $t("Running") }}</span
                                                >
                                            </template>
                                            <template v-else>
                                                <span
                                                    v-if="row.result == 1"
                                                    class="badge bg-success"
                                                    >+
                                                    {{
                                                        row.profit | toMoney(4)
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 2"
                                                    class="badge bg-danger"
                                                    >-
                                                    {{
                                                        row.profit | toMoney(4)
                                                    }}</span
                                                >
                                                <span
                                                    v-else-if="row.result == 3"
                                                    class="badge bg-secondary"
                                                    >{{
                                                        row.profit | toMoney(4)
                                                    }}</span
                                                >
                                            </template>
                                        </td>
                                        <td data-label="Status">
                                            <span
                                                v-if="row.status != 1"
                                                class="badge bg-warning"
                                                >{{ $t("Running") }}</span
                                            >
                                            <span
                                                v-else-if="row.status == 1"
                                                class="badge bg-success"
                                                >{{ $t("Completed") }}</span
                                            >
                                        </td>
                                        <td data-label="View">
                                            <router-link
                                                v-if="row.status != 1"
                                                :to="
                                                    '/bot/' +
                                                    row.symbol +
                                                    '/' +
                                                    row.pair
                                                "
                                                class="btn btn-icon btn-info btn-sm"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="View"
                                            >
                                                <i class="bi bi-display"></i>
                                            </router-link>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
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
                                            <p class="">
                                                {{ $t("No Data Found") }}
                                            </p>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </v-table>
                    </div>
                    <div class="card-footer ms-auto pb-0">
                        <smart-pagination
                            :currentPage.sync="currentPage"
                            :totalPages="totalPages"
                        />
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
            bot_contracts: [],
            bot_contracts_count_running: null,
            bot_contracts_count_completed: null,
            bot_contracts_count_amount: null,
            profit: null,
            gnl: gnl,
            currency: null,
            filters: {
                symbol: { value: "", keys: ["symbol"] },
                pair: { value: "", keys: ["pair"] },
            },
            currentPage: 1,
            totalPages: 0,
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
            this.$http.post("/user/fetch/bot").then((response) => {
                if (response.data.message == "Verify your identify first!") {
                    window.location.href = "/user/kyc";
                }
                (this.bot_contracts = response.data.bot_contracts),
                    (this.bot_contracts_count_running =
                        response.data.bot_contracts_count_running),
                    (this.bot_contracts_count_completed =
                        response.data.bot_contracts_count_completed),
                    (this.bot_contracts_count_amount =
                        response.data.bot_contracts_count_amount),
                    (this.profit = response.data.profit),
                    (this.currency = response.data.currency);
            });
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
    updated() {},
};
</script>
