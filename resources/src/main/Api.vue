<template>
    <div>
        <div class="card">
            <div
                class="card-header"
                :class="tokens.length <= 10 ? 'flex justify-between' : ''"
            >
                <div class="card-title">
                    <div class="title-gradient">API Management</div>
                </div>
                <div>
                    <button
                        v-if="tokens.length <= 10"
                        type="submit"
                        class="btn"
                        :class="
                            newAPI == false
                                ? 'btn-outline-primary'
                                : 'btn-outline-danger'
                        "
                        @click="newAPI = !newAPI"
                    >
                        <span v-if="newAPI == false"
                            ><i class="bi bi-plus-lg"></i>Create API</span
                        >
                        <span v-else><i class="bi bi-x-lg"></i>Close</span>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <ul class="list-disc px-4 py-3">
                    <li>Each account can create up to 30 API Keys.</li>
                    <li>
                        Do not disclose your API Key to anyone to avoid asset
                        losses. You should treat your API Key like your
                        passwords.
                    </li>
                    <!-- <li>
                        3. It is recommended to restrict access to trusted IPs only to increase your account security.
                    </li> -->
                    <!-- <li>
                        You will not be able to create an API Key if KYC is not
                        completed.
                    </li> -->
                </ul>
                <div
                    v-if="newAPI == true"
                    :key="newAPI"
                    class="my-5 rounded border border-gray-300 p-5 dark:border-gray-600"
                >
                    <form method="post" @submit.prevent="createApi()">
                        <div class="flex justify-between">
                            <div class="text-medium mb-2 text-xl text-blue-500">
                                Permissions
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="btn btn-outline-success btn-sm"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                        <div class="my-5 max-w-sm">
                            <label for="newApiTitle">Token Title</label>
                            <input
                                v-model="newApiTitle"
                                type="text"
                                class="form-control"
                                required
                            />
                        </div>
                        <div
                            class="grid gap-4 py-3 xs:grid-cols-2 md:grid-cols-4"
                        >
                            <div class="flex items-center">
                                <input
                                    id="default-checkbox"
                                    v-model="newabilities"
                                    type="checkbox"
                                    value="trading"
                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Trading</label
                                >
                            </div>
                            <div class="flex items-center">
                                <input
                                    id="default-checkbox"
                                    v-model="newabilities"
                                    type="checkbox"
                                    value="transfer"
                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Transfer</label
                                >
                            </div>
                            <div class="flex items-center">
                                <input
                                    id="default-checkbox"
                                    v-model="newabilities"
                                    type="checkbox"
                                    value="withdraw"
                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                />
                                <label
                                    for="default-checkbox"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Withdraw</label
                                >
                            </div>
                        </div>
                    </form>
                </div>
                <div class="space-y-5">
                    <template v-if="tokens.length > 0" :key="tokens.length">
                        <template v-for="(token, index) in tokens" :key="index">
                            <div
                                class="rounded border border-gray-300 dark:border-gray-600"
                            >
                                <div
                                    class="flex items-center justify-between px-4 py-3"
                                    :class="
                                        status[index].edit == true
                                            ? 'border-b border-gray-300 dark:border-gray-600'
                                            : ''
                                    "
                                >
                                    <div>{{ token.name }}</div>
                                    <div :key="status[index].token">
                                        <span
                                            v-if="status[index].token == false"
                                            >*****************
                                            <a
                                                class="rounded border border-gray-300 p-1 dark:border-gray-600"
                                                ><i
                                                    class="bi bi-eye px-1"
                                                    style="
                                                        margin-right: 0 !important;
                                                    "
                                                    @click="
                                                        status[index].token =
                                                            !status[index].token
                                                    "
                                                ></i></a
                                        ></span>
                                        <span v-else
                                            >{{ token.token
                                            }}<a
                                                class="ml-2 rounded border border-gray-300 p-1 dark:border-gray-600"
                                                ><i
                                                    class="bi bi-eye-slash px-1 text-red-500"
                                                    style="
                                                        margin-right: 0 !important;
                                                    "
                                                    @click="
                                                        status[index].token =
                                                            !status[index].token
                                                    "
                                                ></i></a
                                        ></span>
                                    </div>
                                    <div class="space-x-2">
                                        <button
                                            type="button"
                                            class="btn btn-outline-warning btn-sm"
                                            :disabled="
                                                edit !== index && edit !== null
                                            "
                                            @click="selectedToken(token, index)"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-outline-danger btn-sm"
                                            @click="deleteApi(token.id)"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div
                                    v-if="status[index].edit == true"
                                    :key="status[index].edit"
                                    class="space-y-3 px-4 py-3"
                                >
                                    <form
                                        method="post"
                                        @submit.prevent="editApi(token, index)"
                                    >
                                        <div class="flex justify-between">
                                            <div
                                                class="text-medium mb-2 text-xl text-blue-500"
                                            >
                                                Permissions
                                            </div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    class="btn btn-outline-success btn-sm"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            class="grid gap-4 py-3 xs:grid-cols-2 md:grid-cols-4"
                                        >
                                            <div class="flex items-center">
                                                <input
                                                    id="default-checkbox"
                                                    v-model="abilities"
                                                    type="checkbox"
                                                    :checked="
                                                        abilities.includes(
                                                            'trading'
                                                        )
                                                    "
                                                    value="trading"
                                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                                />
                                                <label
                                                    for="default-checkbox"
                                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    >Trading</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    id="default-checkbox"
                                                    v-model="abilities"
                                                    type="checkbox"
                                                    :checked="
                                                        abilities.includes(
                                                            'transfer'
                                                        )
                                                    "
                                                    value="transfer"
                                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                                />
                                                <label
                                                    for="default-checkbox"
                                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    >Transfer</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    id="default-checkbox"
                                                    v-model="abilities"
                                                    type="checkbox"
                                                    :checked="
                                                        abilities.includes(
                                                            'withdraw'
                                                        )
                                                    "
                                                    value="withdraw"
                                                    class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                                    @click="value = !value"
                                                />
                                                <label
                                                    for="default-checkbox"
                                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    >Withdraw</label
                                                >
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tokens: [],
            status: [],
            abilities: [],
            newabilities: [],
            edit: null,
            newAPI: false,
            newApiTitle: null,
        };
    },
    created() {
        this.fetch();
    },
    mounted() {},
    methods: {
        async fetch() {
            await axios.get("/user/fetch/api/tokens").then((response) => {
                this.tokens = response.tokens;
                this.tokens.forEach((e) => {
                    this.status.push({ id: e.id, token: false, edit: false });
                });
            });
        },
        async editApi(token, index) {
            await axios
                .post("/user/api/tokens/edit", {
                    token: token.id,
                    abilities: this.abilities,
                })
                .then((response) => {
                    this.fetch();
                    this.$toast[response.type](response.message);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.status[index].edit = false;
                    this.abilities = [];
                });
        },
        async createApi() {
            await axios
                .post("/user/api/tokens/store", {
                    name: this.newApiTitle,
                    abilities: this.newabilities,
                })
                .then((response) => {
                    this.fetch();
                    this.$toast[response.type](response.message);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                })
                .finally(() => {
                    this.newAPI = false;
                    this.newApiTitle = null;
                    this.newabilities = [];
                });
        },
        async deleteApi(id) {
            await axios
                .post("/user/api/tokens/delete", {
                    id: id,
                })
                .then((response) => {
                    this.fetch();
                    this.$toast[response.type](response.message);
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                });
        },
        selectedToken(token, index) {
            this.edit = this.edit == index ? null : index;
            this.status[index].edit = !this.status[index].edit;
            this.abilities = token.abilities;
        },
    },
};
</script>
