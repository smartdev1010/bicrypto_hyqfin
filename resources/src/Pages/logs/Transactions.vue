<template>
    <div>
        <div class="row" id="table-hover-row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">
                            {{ $t("Transactions History") }}
                        </h4>
                        <div class="input-group w-50">
                            <span class="input-group-text" id="trx-search">{{
                                $t("Transaction ID")
                            }}</span>
                            <input
                                class="form-control"
                                v-model="filters.trx.value"
                            />
                        </div>
                    </div>
                    <div class="table-responsive">
                        <v-table
                            :data="logs"
                            :filters="filters"
                            :currentPage.sync="currentPage"
                            :pageSize="10"
                            @totalPagesChanged="totalPages = $event"
                            class="table table-hover"
                        >
                            <thead slot="head">
                                <tr>
                                    <v-th sortKey="created_at" scope="col">{{
                                        $t("Date")
                                    }}</v-th>
                                    <v-th sortKey="trx" scope="col">{{
                                        $t("Transaction ID")
                                    }}</v-th>
                                    <v-th sortKey="amount" scope="col">{{
                                        $t("Amount")
                                    }}</v-th>
                                    <v-th sortKey="charge" scope="col">{{
                                        $t("Charge")
                                    }}</v-th>
                                    <v-th sortKey="post_balance" scope="col">{{
                                        $t("Post Balance")
                                    }}</v-th>
                                </tr>
                            </thead>
                            <tbody slot="body" slot-scope="{ displayData }">
                                <template v-if="logs != null">
                                    <tr
                                        v-for="row in displayData"
                                        :key="row.id"
                                    >
                                        <td data-label="Date">
                                            {{
                                                row.created_at
                                                    | moment(
                                                        "dddd, MMMM Do YYYY"
                                                    )
                                            }}
                                        </td>
                                        <td data-label="trx">
                                            {{ row.trx }}
                                        </td>
                                        <td
                                            data-label="Amount"
                                            :class="
                                                'budget' + (row.trx_type == '+')
                                                    ? 'text-success'
                                                    : 'text-danger'
                                            "
                                        >
                                            {{
                                                row.trx_type == "+" ? "+" : "-"
                                            }}
                                            {{
                                                (row.currency
                                                    ? row.amount
                                                    : row.amount * cur_rate)
                                                    | toMoney(2)
                                            }}
                                            {{
                                                row.currency
                                                    ? row.currency
                                                    : cur_symbol
                                            }}
                                        </td>
                                        <td data-label="Charge" class="budget">
                                            {{
                                                (row.currency
                                                    ? row.charge
                                                    : row.charge * cur_rate)
                                                    | toMoney(2)
                                            }}
                                            {{
                                                row.currency
                                                    ? row.currency
                                                    : cur_symbol
                                            }}
                                        </td>
                                        <td data-label="After Charge">
                                            {{
                                                (row.currency
                                                    ? row.post_balance
                                                    : row.post_balance *
                                                      cur_rate) | toMoney(2)
                                            }}
                                            {{
                                                row.currency
                                                    ? row.currency
                                                    : cur_symbol
                                            }}
                                        </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <td colspan="100%">
                                            {{ $t("No results found!") }}
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

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchData() {
            this.$http
                .post("/user/fetch/transaction/history")
                .then((response) => {
                    this.logs = response.data.logs;
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
};
</script>
