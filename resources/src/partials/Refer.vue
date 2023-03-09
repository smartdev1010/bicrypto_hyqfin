<template>
    <div class="card">
        <div class="card-body text-center">
            <i
                class="bi bi-gift text-warning mb-2 rounded-full px-2 py-1 text-2xl shadow"
            ></i>
            <h5 class="card-title">{{ $t("Refer & Earn") }}</h5>
            <p
                class="mb-3 text-lg font-light text-gray-500 dark:text-gray-400 md:text-xl"
            >
                {{
                    $t("Refer your friends & Earn for") +
                    " " +
                    (reward ? reward : 5) +
                    "% " +
                    $t(
                        "of every customer that complete 1 deposit in the platform."
                    )
                }}
            </p>
            <button
                type="button"
                class="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                @click="showModal()"
            >
                {{ $t("Invite") }}
            </button>
        </div>

        <Modal v-if="isShowModal" size="4xl" @close="closeModal()">
            <template #header>
                <div
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                >
                    {{ $t("Refer & Earn") }}
                </div></template
            >
            <template #body>
                <div class="px-sm-4 mx-5 mb-10 text-center">
                    <p
                        class="mb-10 text-xl font-light text-gray-500 dark:text-gray-400 md:text-xl"
                    >
                        {{
                            $t(
                                "Invite your friend here, if thay sign up and complete 1 successful deposit,"
                            )
                        }}
                        <br />
                        {{
                            $t("you will earn") +
                            " " +
                            (reward ? reward : 5) +
                            "% " +
                            $t("of their future deposits")
                        }}
                    </p>

                    <div class="grid grid-cols-3 gap-5">
                        <div class="card p-5 shadow">
                            <div class="mb-1 flex justify-center">
                                <div class="rounded-full px-3 py-2 shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="text-warning h-12 w-12"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="text-center">
                                <h6 class="fw-bolder mb-1">
                                    {{ $t("Send Invitation") }} 🤟🏻
                                </h6>
                                <p>
                                    {{
                                        $t(
                                            "Send your referral link to your friend"
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                        <div class="card p-5 shadow">
                            <div class="mb-1 flex justify-center">
                                <div
                                    class="rounded-full px-3 px-3 py-2 py-2 shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="text-info h-12 w-12"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="text-center">
                                <h6 class="fw-bolder mb-1">
                                    {{ $t("Registration") }} 👩🏻‍💻
                                </h6>
                                <p>
                                    {{
                                        $t(
                                            "Let them register to our trading platform"
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                        <div class="card p-5 shadow">
                            <div class="mb-1 flex justify-center">
                                <div
                                    class="rounded-full px-3 px-3 py-2 py-2 shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="text-success h-12 w-12"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="text-center">
                                <h6 class="fw-bolder mb-1">
                                    {{ $t("Earn") }}
                                    {{ reward ? reward : 5 }}% 🎉
                                </h6>
                                <p>
                                    {{
                                        $t(
                                            "from each successful deposit from your friends"
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-sm-5 mx-5">
                    <h2 class="text-xl font-bold dark:text-white">
                        {{ $t("Share the referral link") }}
                    </h2>
                    <form
                        v-if="userStore.user != null"
                        class="row g-1"
                        onsubmit="return false"
                    >
                        <div class="lg:col-span-8">
                            <label class="form-label" for="referralURL">
                                {{
                                    $t(
                                        "You can also copy and send it or share it on your social media."
                                    )
                                }}
                                🥳
                            </label>
                            <div class="relative mb-2">
                                <input
                                    id="referralURL"
                                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    type="text"
                                    :value="
                                        pathname +
                                        '/register/' +
                                        userStore.user.username
                                    "
                                    readonly
                                />
                                <button
                                    id="copyBoard"
                                    type="submit"
                                    class="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    @click="Copy()"
                                >
                                    {{ $t("Copy link") }}
                                </button>
                            </div>
                        </div>
                        <div class="flex items-end lg:col-span-4">
                            <div class="social-btns">
                                <a
                                    :href="
                                        'https://www.facebook.com/sharer/sharer.php?u=' +
                                        pathname +
                                        '/register/' +
                                        userStore.user.username
                                    "
                                    type="button"
                                    class="btn btn-icon btn-facebook mr-5 text-2xl"
                                >
                                    <i class="bi bi-facebook font-medium-2"></i>
                                </a>
                                <a
                                    :href="
                                        'https://twitter.com/intent/tweet?url=' +
                                        pathname +
                                        '/register/' +
                                        userStore.user.username
                                    "
                                    type="button"
                                    class="btn btn-icon btn-twitter mr-5 text-2xl"
                                >
                                    <i class="bi bi-twitter font-medium-2"></i>
                                </a>
                                <a
                                    :href="
                                        'https://www.linkedin.com/shareArticle?mini=true&url=' +
                                        pathname +
                                        '/register/' +
                                        userStore.user.username
                                    "
                                    type="button"
                                    class="btn btn-icon btn-linkedin mr-5 text-2xl"
                                >
                                    <i class="bi bi-linkedin font-medium-2"></i>
                                </a>
                                <a
                                    :href="
                                        'https://pinterest.com/pin/create/button/?url=' +
                                        pathname +
                                        '/register/' +
                                        userStore.user.username
                                    "
                                    type="button"
                                    class="btn btn-icon btn-pinterest text-2xl"
                                >
                                    <i
                                        class="bi bi-pinterest font-medium-2"
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </form></div
            ></template>
            <template #footer>
                <div class="flex justify-end">
                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        @click="closeModal()"
                    >
                        {{ $t("Close") }}
                    </button>
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import { Modal } from "flowbite-vue";
import { useUserStore } from "../store/user";
export default {
    components: {
        Modal,
    },
    props: ["pathname", "reward"],
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },

    // component data
    data() {
        return { isShowModal: false };
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},

    // on component destroyed
    unmounted() {},

    // custom methods
    methods: {
        Copy() {
            var copyText = document.getElementById("referralURL");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            /*For mobile devices*/
            document.execCommand("copy");
            this.$toast.success("Referral Url Copied");
        },
        closeModal() {
            this.isShowModal = false;
        },
        showModal() {
            this.isShowModal = true;
        },
    },
};
</script>
