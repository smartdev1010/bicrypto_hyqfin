<template>
    <div>
        <div id="table-hover-row" class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{ $t("Referral Log") }}</h4>
                        <div class="input-group w-50">
                            <span id="trx-search" class="input-group-text">{{
                                $t("Transaction ID")
                            }}</span>
                            <input
                                v-model="filters.trx.value"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="table-responsive">
                        <v-table
                            v-model:current-page="currentPage"
                            :data="logs"
                            :filters="filters"
                            :page-size="10"
                            class="table-hover table"
                            @totalPagesChanged="totalPages = $event"
                        >
                            <thead slot="head">
                                <tr>
                                    <v-th sort-key="id" scope="col">ID</v-th>
                                    <v-th sort-key="gateway.name" scope="col">{{
                                        $t("First Name")
                                    }}</v-th>
                                    <v-th sort-key="amount" scope="col">{{
                                        $t("Last Name")
                                    }}</v-th>
                                    <v-th sort-key="status" scope="col">{{
                                        $t("Username")
                                    }}</v-th>
                                    <v-th sort-key="created_at" scope="col">{{
                                        $t("Date")
                                    }}</v-th>
                                </tr>
                            </thead>
                            <tbody slot="body" slot-scope="{ displayData }">
                                <template v-if="logs.length > 0">
                                    <tr
                                        v-for="row in displayData"
                                        :key="row.id"
                                    >
                                        <td data-label="trx">
                                            {{ row.trx }}
                                        </td>
                                        <td data-label="Gateway">
                                            {{ row.gateway.name }}
                                        </td>
                                        <td data-label="Amount">
                                            {{
                                                (row.amount * cur_rate)
                                                    | toMoney(2)
                                            }}
                                            {{ gnl_symbol }}
                                            <button
                                                v-if="
                                                    row.admin_feedback != null
                                                "
                                                class="btn-info btn-rounded badge detailBtn"
                                                :data-admin_feedback="
                                                    row.admin_feedback
                                                "
                                            >
                                                <i
                                                    class="bi bi-info-circle"
                                                ></i>
                                            </button>
                                        </td>

                                        <td data-label="Status">
                                            <span
                                                v-if="row.status == 1"
                                                class="badge bg-success"
                                                >{{ $t("Complete") }}</span
                                            >
                                            <span
                                                v-else-if="row.status == 2"
                                                class="badge bg-warning"
                                                >{{ $t("Pending") }}</span
                                            >
                                            <span
                                                v-else-if="row.status == 3"
                                                class="badge bg-danger"
                                                >{{ $t("Canceled") }}</span
                                            >
                                        </td>
                                        <td data-label="Date">
                                            {{
                                                row.created_at
                                                    | moment(
                                                        "dddd, MMMM Do YYYY"
                                                    )
                                            }}
                                        </td>
                                        <td data-label="Details">
                                            <a
                                                class="btn btn-primary btn-sm btn-icon"
                                            >
                                                <i
                                                    class="bi bi-info-circle"
                                                ></i>
                                            </a>
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr
                                        scope="row"
                                        class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <td colspan="100%" class="py-4 px-6">
                                            {{ $t("No results found!") }}
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </v-table>
                    </div>
                    <div class="card-footer ml-auto pb-0">
                        <smart-pagination
                            v-model:current-page="currentPage"
                            :total-pages="totalPages"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // component list
    components: {},

    // component data
    data() {
        return {
            logs: [],
            cur_rate: cur_rate,
            cur_symbol: cur_symbol,
            filters: {
                trx: { value: "", keys: ["trx"] },
            },
            currentPage: 1,
            totalPages: 0,
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
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchData() {
            axios.post("/user/fetch/deposit/history").then((response) => {
                this.logs = response.logs;
            });
        },
    },
};
</script>
