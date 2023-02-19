<template>
    <div class="grid gap-5 xs:sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <div class="col-span-1">
            <ul
                :key="walletsStore.api"
                class="mb-5 flex divide-x divide-gray-200 rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400"
            >
                <li v-if="ext.eco == 1" class="w-full">
                    <a
                        class="inline-block w-full rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        :class="
                            isActive('main')
                                ? 'active bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                        "
                        @click.prevent="setActive('main')"
                    >
                        {{ $t("Main") }}</a
                    >
                </li>
                <li
                    v-if="
                        plat.eco.ecosystem_trading_only != 1 &&
                        walletsStore.api == 1
                    "
                    class="w-full"
                >
                    <a
                        :class="
                            isActive('trading')
                                ? 'active bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                        "
                        class="inline-block w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        @click.prevent="setActive('trading')"
                    >
                        {{ $t("Trading") }}</a
                    >
                </li>
                <li class="w-full">
                    <a
                        :class="
                            isActive('funding')
                                ? 'active bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                        "
                        class="inline-block w-full rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        @click.prevent="setActive('funding')"
                    >
                        {{ $t("Funding") }}</a
                    >
                </li>
            </ul>
            <div>
                <div
                    class="space-y-2"
                    style="max-height: 73vh; overflow-y: auto"
                    :class="isActive('main') ? '' : 'hidden'"
                >
                    <template v-if="walletsStore.main_wallets != null">
                        <div
                            v-for="(wallet, index) in walletsStore.main_wallets"
                            :key="index"
                        >
                            <router-link
                                :to="
                                    '../../../wallets/main/' +
                                    wallet.symbol +
                                    '/' +
                                    wallet.address
                                "
                            >
                                <div
                                    :key="wallet.address"
                                    class="flex items-center justify-between rounded p-2 shadow"
                                    :class="
                                        checkPath(
                                            '/main/' +
                                                wallet.symbol +
                                                '/' +
                                                wallet.address
                                        )
                                            ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                            : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                                    "
                                >
                                    <div class="flex items-center">
                                        <img
                                            v-lazy="
                                                wallet.symbol
                                                    ? '/assets/images/cryptoCurrency/' +
                                                      wallet.symbol.toLowerCase() +
                                                      '.png'
                                                    : '/assets/no-image.png'
                                            "
                                            width="40"
                                            class="mr-2 rounded-full"
                                        />
                                        <span
                                            :class="
                                                checkPath(
                                                    '/main/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'text-gray-900 dark:text-white'
                                                    : 'text-dark'
                                            "
                                            >{{ wallet.symbol }}</span
                                        >
                                    </div>
                                    <div>
                                        <span
                                            :key="wallet.total_balance"
                                            :class="
                                                checkPath(
                                                    '/main/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'text-gray-900 dark:text-white'
                                                    : 'text-dark'
                                            "
                                            ><toMoney
                                                :num="wallet.total_balance"
                                                decimals="2"
                                        /></span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </template>
                    <button
                        class="card flex w-full items-center justify-center p-5"
                        @click="
                            selectType('main');
                            walletsStore.showModal('newMainWallet');
                        "
                    >
                        <i class="bi bi-plus-square-dotted mr-2 text-2xl"></i>
                        {{ $t("Create New Wallet") }}
                    </button>
                </div>
                <div
                    class="space-y-2"
                    style="max-height: 73vh; overflow-y: auto"
                    :class="isActive('trading') ? '' : 'hidden'"
                >
                    <template
                        v-if="
                            walletsStore.wallets != null &&
                            walletsStore.wallets.trading != null
                        "
                    >
                        <div
                            v-for="(wallet, index) in walletsStore.wallets
                                .trading"
                            :key="index"
                        >
                            <router-link
                                :to="
                                    '../../../wallets/' +
                                    wallet.type +
                                    '/' +
                                    wallet.symbol +
                                    '/' +
                                    wallet.address
                                "
                            >
                                <div
                                    class="flex items-center justify-between rounded p-2 shadow"
                                    :class="
                                        checkPath('funding/' + wallet.symbol)
                                            ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                            : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                                    "
                                >
                                    <div>
                                        <img
                                            v-lazy="
                                                wallet.symbol
                                                    ? '/assets/images/cryptoCurrency/' +
                                                      wallet.symbol.toLowerCase() +
                                                      '.png'
                                                    : '/market/notification.png'
                                            "
                                            width="40"
                                        />
                                    </div>
                                    <div>
                                        <span
                                            :class="
                                                checkPath(
                                                    wallet.type +
                                                        '/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'fs-5 fw-bold text-light'
                                                    : 'fs-6 text-dark'
                                            "
                                            >{{ wallet.symbol }}</span
                                        >
                                    </div>
                                    <div>
                                        <span
                                            :class="
                                                checkPath(
                                                    wallet.type +
                                                        '/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'fs-5 fw-bold text-light'
                                                    : 'fs-6 text-dark'
                                            "
                                            ><toMoney
                                                :num="wallet.balance"
                                                decimals="2"
                                        /></span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </template>
                    <button
                        class="card flex w-full items-center justify-center p-5"
                        @click="
                            selectType('trading');
                            walletsStore.showModal('newWallet');
                        "
                    >
                        <i class="bi bi-plus-square-dotted mr-2 text-2xl"></i>
                        {{ $t("Create New Wallet") }}
                    </button>
                </div>
                <div
                    class="space-y-2"
                    style="max-height: 73vh; overflow-y: auto"
                    :class="isActive('funding') ? '' : 'hidden'"
                >
                    <template
                        v-if="
                            walletsStore.wallets != null &&
                            walletsStore.wallets.funding != null
                        "
                    >
                        <div
                            v-for="(wallet, index) in walletsStore.wallets
                                .funding"
                            :key="index"
                        >
                            <router-link
                                :to="
                                    '../../../wallets/' +
                                    wallet.type +
                                    '/' +
                                    wallet.symbol +
                                    '/' +
                                    wallet.address
                                "
                            >
                                <div
                                    class="flex items-center justify-between rounded p-2 shadow"
                                    :class="
                                        checkPath('funding/' + wallet.symbol)
                                            ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                                            : 'bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                                    "
                                >
                                    <div>
                                        <img
                                            v-lazy="
                                                wallet.symbol
                                                    ? '/assets/images/cryptoCurrency/' +
                                                      wallet.symbol.toLowerCase() +
                                                      '.png'
                                                    : '/market/notification.png'
                                            "
                                            width="40"
                                        />
                                    </div>
                                    <div>
                                        <span
                                            :class="
                                                checkPath(
                                                    wallet.type +
                                                        '/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'fs-5 fw-bold text-light'
                                                    : 'fs-6 text-dark'
                                            "
                                            >{{ wallet.symbol }}</span
                                        >
                                    </div>
                                    <div>
                                        <span
                                            :class="
                                                checkPath(
                                                    wallet.type +
                                                        '/' +
                                                        wallet.symbol +
                                                        '/' +
                                                        wallet.address
                                                )
                                                    ? 'fs-5 fw-bold text-light'
                                                    : 'fs-6 text-dark'
                                            "
                                            ><toMoney
                                                :num="wallet.balance"
                                                decimals="2"
                                        /></span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </template>
                    <button
                        class="card flex w-full items-center justify-center p-5"
                        @click="
                            selectType('funding');
                            walletsStore.showModal('newWallet');
                        "
                    >
                        <i class="bi bi-plus-square-dotted mr-2 text-2xl"></i>
                        {{ $t("Create New Wallet") }}
                    </button>
                </div>
            </div>
        </div>
        <div class="xs:col-span-1 md:col-span-3 lg:col-span-3">
            <router-view v-slot="{ Component }">
                <transition
                    type="animation"
                    name="zoom-fade"
                    mode="out-in"
                    :duration="300"
                >
                    <component
                        :is="Component"
                        v-if="userStore.user != null"
                        :key="type + '/' + symbol + '/' + address"
                        :type="type"
                        :symbol="symbol"
                        :address="address"
                        @RefreshMainWallet="fetchMainWallet()"
                    />
                </transition>
            </router-view>
        </div>

        <Modal
            v-if="walletsStore.isShowModal.newWallet"
            size="lg"
            @close="walletsStore.closeModal('newWallet')"
        >
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Create New Wallet") }}
                </div>
            </template>
            <template #body>
                <div class="input-group w-full pb-2">
                    <input v-model="filters.symbol.value" />
                    <span id="symbol-search">{{ $t("Symbol") }}</span>
                </div>
                <div
                    style="
                        height: 500px;
                        overflow-y: auto;
                        margin: 0 -24px -22px -24px;
                    "
                >
                    <VTable
                        :key="walletsStore.currencies.length"
                        class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                        :data="walletsStore.currencies"
                        :filters="filters"
                        :hide-sort-icons="true"
                    >
                        <template #head>
                            <tr
                                class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                            >
                                <VTh
                                    sort-key="symbol"
                                    scope="col"
                                    default-sort="asc"
                                    class="py-3 px-6"
                                >
                                    <Col text="Symbol" />
                                </VTh>
                                <th scope="col">{{ $t("Action") }}</th>
                            </tr>
                        </template>
                        <template #body="{ rows }">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td
                                    class="flex items-center pl-5"
                                    data-label="symbol"
                                >
                                    <img
                                        v-lazy="
                                            row.symbol
                                                ? '/assets/images/cryptoCurrency/' +
                                                  row.symbol.toLowerCase() +
                                                  '.png'
                                                : '/assets/no-image.png'
                                        "
                                        class="mr-2 p-1"
                                        width="40"
                                        loading="lazy"
                                    />
                                    {{ row.symbol }}
                                </td>
                                <td data-label="action">
                                    <button
                                        class="btn btn-sm btn-success"
                                        :disabled="walletsStore.loading"
                                        @click="CreateWallet(row.symbol)"
                                    >
                                        {{ $t("Create Wallet") }}
                                    </button>
                                </td>
                            </tr>
                        </template>
                    </VTable>
                </div>
            </template>
        </Modal>

        <Modal
            v-if="walletsStore.isShowModal.newMainWallet"
            size="lg"
            @close="walletsStore.closeModal('newMainWallet')"
        >
            <template #header>
                <div class="flex items-center text-lg">
                    {{ $t("Create New Wallet") }}
                </div>
            </template>
            <template #body>
                <div class="input-group w-full p-1">
                    <input v-model="main_filters.symbol.value" />
                    <span id="symbol-search">{{ $t("Symbol") }}</span>
                </div>
                <div
                    style="
                        height: 500px;
                        overflow-y: auto;
                        margin: 0 -24px -22px -24px;
                    "
                >
                    <VTable
                        :key="walletsStore.main_currencies.length"
                        class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
                        :data="walletsStore.main_currencies"
                        :filters="main_filters"
                        :hide-sort-icons="true"
                    >
                        <template #head>
                            <tr
                                class="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
                            >
                                <VTh
                                    sort-key="symbol"
                                    scope="col"
                                    default-sort="asc"
                                    class="py-3 px-6"
                                >
                                    <Col text="Symbol" />
                                </VTh>
                                <th scope="col">{{ $t("Action") }}</th>
                            </tr>
                        </template>
                        <template #body="{ rows }">
                            <tr
                                v-for="row in rows"
                                :key="row.id"
                                class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                <td
                                    class="flex items-center pl-5"
                                    data-label="symbol"
                                >
                                    <img
                                        v-lazy="
                                            row.symbol
                                                ? '/assets/images/cryptoCurrency/' +
                                                  row.symbol.toLowerCase() +
                                                  '.png'
                                                : '/assets/no-image.png'
                                        "
                                        class="mr-2 p-1"
                                        width="40"
                                        loading="lazy"
                                    />
                                    {{ row.symbol }}{{ row.postfix }}
                                </td>
                                <td data-label="action">
                                    <button
                                        class="btn btn-sm btn-success"
                                        :disabled="walletsStore.loading"
                                        @click="CreateMainWallet(row)"
                                    >
                                        {{ $t("Create Wallet") }}
                                    </button>
                                </td>
                            </tr>
                        </template>
                    </VTable>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import toMoney from "../partials/toMoney.vue";
import { useWalletsStore } from "../store/wallets";
import { useUserStore } from "../store/user";
import { Modal } from "flowbite-vue";
import Filter from "../partials/table/Filter.vue";
import Col from "../partials/table/Col.vue";
export default {
    components: {
        toMoney,
        Modal,
        Filter,
        Col,
    },
    setup() {
        const userStore = useUserStore();
        const walletsStore = useWalletsStore();
        return { userStore, walletsStore };
    },

    // component data
    data() {
        return {
            isFunding: false,
            activeItem:
                this.$route.params.type != null
                    ? this.$route.params.type != "main"
                        ? this.$route.params.type == "trading"
                            ? "trading"
                            : "funding"
                        : "main"
                    : "funding",
            filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            main_filters: {
                symbol: { value: "", keys: ["symbol"] },
            },
            type: this.$route.params.type,
            symbol: this.$route.params.symbol,
            address: this.$route.params.address,
            ext: ext,
            plat: plat,
            imageLoading: true,
        };
    },

    watch: {
        $route(to, from) {
            if (to.meta.type != null && to.meta.type == "wallets") {
                this.type = this.$route.params.type;
                this.symbol = this.$route.params.symbol;
                this.address = this.$route.params.address;
            }
        },
    },

    // on component created
    created() {
        this.fetchData();
        if (ext.eco == 1) {
            this.fetchMainWallet();
        }
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},
    // custom methods
    methods: {
        isActive(menuItem) {
            return this.activeItem === menuItem;
        },
        setActive(menuItem) {
            this.activeItem = menuItem;
        },
        checkPath(path) {
            if (window.location.href.indexOf(path) > -1) {
                return true;
            }
        },
        async fetchData() {
            if (this.walletsStore.wallets.length == 0) {
                await this.walletsStore.fetch();
            }
            if (this.walletsStore.api == 0) {
                if (ext.eco == 1) {
                    this.activeItem = "main";
                } else {
                    this.activeItem = "funding";
                }
            }
        },
        async fetchMainWallet() {
            if (this.walletsStore.main_wallets.length == 0) {
                await this.walletsStore.fetch_main();
            }
        },
        async CreateWallet(symbol) {
            await this.walletsStore.create(symbol);
        },
        async CreateMainWallet(data) {
            await this.walletsStore.create_main(data);
        },
        selectType(type) {
            this.walletsStore.type = type;
        },
    },
};
</script>
