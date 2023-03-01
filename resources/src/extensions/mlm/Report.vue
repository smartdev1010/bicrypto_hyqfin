<template>
    <div>
        <div class="mt-5">
            <h1 class="mb-2 text-center text-lg">Level Detail</h1>
            <div class="card relative overflow-x-auto">
                <VTable
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="this.totalData"
                    :key="this.totalData.length"
                    :currentPage.sync="currentPage"
                    :pageSize="5"
                    :hideSortIcons="true"
                    @totalPagesChanged="totalPages = $event"
                >
                    <template #head>
                        <tr
                            class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <VTh sortKey="level" scope="col" class="py-3 px-6">
                                <Col text="Level" />
                            </VTh>
                            <VTh sortKey="count" scope="col" class="py-3 px-6">
                                <Col text="Current Id's" />
                            </VTh>
                            <VTh
                                sortKey="percentage"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="% of Income" />
                            </VTh>
                            <VTh
                                sortKey="balance"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="Total balance" />
                            </VTh>
                            <VTh sortKey="income" scope="col" class="py-3 px-6">
                                <Col text="Total Income" />
                            </VTh>
                            <!-- <VTh sortKey="status" scope="col" class="py-3 px-6">
                <Col text="Status" />
              </VTh> -->
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="this.totalData.length > 0">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td
                                    data-label="level"
                                    class="text-uppercase py-3 px-6"
                                >
                                    {{ row.level }}
                                </td>
                                <td class="py-3 px-6" data-label="count">
                                    <toMoney :num="row.count" decimals="0" />
                                </td>
                                <td data-label="Percentage" class="py-3 px-6">
                                    <toMoney
                                        :num="row.percentage"
                                        decimals="2"
                                    />
                                </td>
                                <td class="py-3 px-6" data-label="balance">
                                    <toMoney :num="row.balance" decimals="2" />
                                </td>
                                <td class="py-3 px-6" data-label="income">
                                    <toMoney :num="row.income" decimals="2" />
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
                    </template>
                </VTable>
            </div>

            <VTPagination
                aria-label="Table navigation"
                v-model:currentPage="currentPage"
                :total-pages="totalPages"
                :boundary-links="true"
                class="flex items-center justify-between pt-4"
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
        <div class="mt-5 mb-5 flex justify-center">
            <dropdown text="button" v-if="this.totalData.length > 0">
                <template #trigger>
                    <button class="btn btn-outline-primary" type="button">
                        <toMoney
                            v-if="deposit_wallet != null"
                            :num="deposit_wallet.balance"
                            decimals="2"
                        />
                        {{
                            this.curLevel > 0
                                ? "level " + this.curLevel
                                : "Select Level"
                        }}
                    </button>
                </template>
                <list-group :class="'text-start'">
                    <div
                        class="flex items-center border-b py-1 px-4 text-sm text-gray-900 dark:text-white"
                    >
                        {{ $t("Select Level") }}
                    </div>
                    <list-group-item
                        v-for="(data, index) in this.totalData"
                        :key="index"
                        class="items-between inline-flex w-full cursor-pointer border-b border-gray-200 px-4 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500"
                    >
                        <a
                            class="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            @click="this.selectLevel(data.level)"
                        >
                            <span>Level </span>
                            <span>{{ data.level }}</span>
                        </a>
                    </list-group-item>
                </list-group>
            </dropdown>
        </div>
        <h1 class="mb-2 text-center text-lg">Level Details</h1>
        <div class="mt-5">
            <div class="card relative overflow-x-auto">
                <VTable
                    class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                    :data="this.currentData"
                    :key="this.currentData.length"
                    :currentPage.sync="currentPage1"
                    :pageSize="5"
                    :hideSortIcons="true"
                    @totalPagesChanged="totalPages1 = $event"
                >
                    <template #head>
                        <tr
                            class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                        >
                            <VTh sortKey="no" scope="col" class="py-3 px-6">
                                <Col text="No" />
                            </VTh>
                            <!-- <VTh sortKey="userid" scope="col" class="py-3 px-6">
                <Col text="UserId" />
              </VTh> -->
                            <VTh
                                sortKey="username"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="UserName" />
                            </VTh>
                            <VTh sortKey="plan" scope="col" class="py-3 px-6">
                                <Col text="Plan" />
                            </VTh>
                            <VTh sortKey="date" scope="col" class="py-3 px-6">
                                <Col text="Date of Investment" />
                            </VTh>
                            <VTh
                                sortKey="endDate"
                                scope="col"
                                class="py-3 px-6"
                            >
                                <Col text="End Date of Investment" />
                            </VTh>
                            <VTh sortKey="amount" scope="col" class="py-3 px-6">
                                <Col text="Investment Amount" />
                            </VTh>
                            <!-- <VTh sortKey="status" scope="col" class="py-3 px-6">
                <Col text="Status" />
              </VTh> -->
                        </tr>
                    </template>
                    <template #body="{ rows }">
                        <template v-if="this.currentData.length > 0">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td
                                    data-label="level"
                                    class="text-uppercase py-3 px-6"
                                >
                                    {{ row.no }}
                                </td>
                                <!-- <td class="py-3 px-6" data-label="count">
                  <toMoney :num="row.userid" decimals="0" />
                </td> -->
                                <td data-label="Percentage" class="py-3 px-6">
                                    {{ row.name }}
                                </td>
                                <td data-label="Percentage" class="py-3 px-6">
                                    {{ row.plan }}
                                </td>
                                <td class="py-3 px-6" data-label="balance">
                                    <!-- {{ row.date }} -->
                                    <toDate
                                        v-if="row.date != ''"
                                        :time="row.date"
                                    />
                                    <span v-else>N/A</span>
                                </td>
                                <td class="py-3 px-6" data-label="balance">
                                    <!-- {{ row.endDate }} -->
                                    <toDate
                                        v-if="row.endDate != ''"
                                        :time="row.endDate"
                                    />
                                    <span v-else>N/A</span>
                                </td>
                                <td class="py-3 px-6" data-label="income">
                                    <toMoney :num="row.amount" decimals="2" />
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
                    </template>
                </VTable>
            </div>

            <VTPagination
                aria-label="Table navigation"
                v-model:currentPage="currentPage1"
                :total-pages="totalPages1"
                :boundary-links="true"
                class="flex items-center justify-between pt-4"
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
import { useMlmStore } from "../../store/mlm";
import toDate from "../../partials/toDate.vue";
import Filter from "../../partials/table/Filter.vue";
import Col from "../../partials/table/Col.vue";
export default {
    setup() {
        const userStore = useUserStore();
        const forexStore = useForexStore();
        const investmentStore = useInvestmentStore();
        const walletsStore = useWalletsStore();
        const mlmStore = useMlmStore();
        return {
            userStore,
            forexStore,
            investmentStore,
            walletsStore,
            mlmStore,
        };
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
            totalData: [],
            currentData: [],
            curLevel: 0,
            amount: 0,
            investment_wallet: null,
            deposit_wallet: null,
            withdraw_wallet: null,
            DepositAmount: 0,
            WithdrawAmount: 0,
            currentPage: 1,
            totalPages: 0,
            currentPage1: 1,
            totalPages1: 0,
            imageLoading: true,
            loading: false,
        };
    },
    // custom methods
    methods: {
        addDays(date, days) {
            date.setDate(date.getDate() + days);
            return date;
        },
        selectLevel(level) {
            this.curLevel = level;
            this.currentData = [];
            this.calculateCurrentData(this.mlmStore.mlm.downlines, 1);
        },
        async calculateCurrentData(downlines, depth) {
            if (depth > this.curLevel) return;
            for (let i = 0; i < downlines.length; i++) {
                await this.investmentStore.getInvestment(downlines[i].id);
                if (this.investmentStore.investment_logs_tmp.length > 0) {
                    for (
                        let j = 0;
                        j < this.investmentStore.investment_logs_tmp.length;
                        j++
                    ) {
                        if (depth == this.curLevel) {
                            let item =
                                this.investmentStore.investment_logs_tmp[j];

                            let data = {
                                no: this.currentData.length + 1,
                                userid: item.user_id,
                                name: this.userStore.users[item.user_id - 1]
                                    .username,
                                plan: this.investmentStore.investment[
                                    item.plan_id - 1
                                ].title,
                                date: item.created_at,
                                endDate: this.addDays(
                                    new Date(item.created_at),
                                    this.investmentStore.investment[
                                        item.plan_id - 1
                                    ].duration
                                ),
                                amount: item.amount,
                            };
                            this.currentData.push(data);
                        }
                    }
                } else if (depth == this.curLevel) {
                    if (
                        this.currentData.filter(
                            (item) => item.userid == downlines[i].id
                        ).length == 0
                    ) {
                        let data = {
                            no: this.currentData.length + 1,
                            userid: downlines[i].id,
                            name: downlines[i].username,
                            plan: "N/A",
                            //            name: this.userStore.users[item.user_id - 1].username,
                            date: "",
                            endDate: "",
                            amount: 0,
                        };
                        this.currentData.push(data);
                    }
                }
                await this.calculateCurrentData(
                    downlines[i].downlines,
                    depth + 1
                );
            }
        },
        async fetchData() {
            await this.walletsStore.fetch();
            await this.walletsStore.fetch_wallet();
            if (this.investmentStore.investment.length == 0)
                await this.investmentStore.fetch();
            if (this.mlmStore.mlm == null) {
                await this.mlmStore.fetch();
            }
            for (let i = 1; i <= 12; i++) {
                let percentage;
                if (i == 1)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline1_percentage;
                if (i == 2)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline2_percentage;
                if (i == 3)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline3_percentage;
                if (i == 4)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline4_percentage;
                if (i == 5)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline5_percentage;
                if (i == 6)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline6_percentage;
                if (i == 7)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline7_percentage;
                if (i == 8)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline8_percentage;
                if (i == 9)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline9_percentage;
                if (i == 10)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline10_percentage;
                if (i == 11)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline11_percentage;
                if (i == 12)
                    percentage =
                        this.walletsStore.platforms.mlm
                            .unilevel_upline12_percentage;
                let data = {
                    level: i,
                    count: 0,
                    percentage,
                    balance: 0,
                    income: 0,
                };
                this.totalData.push(data);
            }
            this.calculateTotalInvestment(this.mlmStore.mlm.downlines, 1);
        },
        async calculateTotalInvestment(downlines, depth) {
            let percentage;
            if (depth == 1)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline1_percentage;
            if (depth == 2)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline2_percentage;
            if (depth == 3)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline3_percentage;
            if (depth == 4)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline4_percentage;
            if (depth == 5)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline5_percentage;
            if (depth == 6)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline6_percentage;
            if (depth == 7)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline7_percentage;
            if (depth == 8)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline8_percentage;
            if (depth == 9)
                percentage =
                    this.walletsStore.platforms.mlm.unilevel_upline9_percentage;
            if (depth == 10)
                percentage =
                    this.walletsStore.platforms.mlm
                        .unilevel_upline10_percentage;
            if (depth == 11)
                percentage =
                    this.walletsStore.platforms.mlm
                        .unilevel_upline11_percentage;
            if (depth == 12)
                percentage =
                    this.walletsStore.platforms.mlm
                        .unilevel_upline12_percentage;
            percentage /= 100;
            this.totalData[depth - 1].count += downlines.length;
            if (depth > 12) return;
            for (let i = 0; i < downlines.length; i++) {
                await this.investmentStore.getInvestment(downlines[i].id);
                if (this.investmentStore.investment_logs_tmp.length > 0) {
                    for (
                        let j = 0;
                        j < this.investmentStore.investment_logs_tmp.length;
                        j++
                    ) {
                        let item = this.investmentStore.investment_logs_tmp[j];
                        let walletSymbol =
                            this.walletsStore.wallet[item.wallet_id - 1].symbol;
                        this.totalData[depth - 1].balance += item.amount;
                        this.totalData[depth - 1].income +=
                            item.amount * percentage;
                    }
                }
                await this.calculateTotalInvestment(
                    downlines[i].downlines,
                    depth + 1
                );
            }
        },
        // on component created
    },
    created() {
        this.fetchData();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
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
