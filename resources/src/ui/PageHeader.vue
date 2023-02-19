<template>
    <nav class="border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6">
        <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center justify-start">
                <button
                    id="toggleSidebar"
                    aria-expanded="false"
                    aria-controls="sidebar"
                    class="mr-3 hidden cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
                    @click="sidebarCollapsed = !sidebarCollapsed"
                >
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <button
                    id="toggleSidebarMobile"
                    aria-expanded="false"
                    aria-controls="sidebar"
                    class="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
                >
                    <svg
                        id="toggleSidebarMobileHamburger"
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <svg
                        id="toggleSidebarMobileClose"
                        class="hidden h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <router-link to="/" class="mr-4 flex">
                    <span
                        class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
                        >{{ siteName }}</span
                    >
                </router-link>
            </div>
            <div class="flex items-center lg:order-2">
                <button
                    id="theme-toggle"
                    data-tooltip-target="tooltip-toggle"
                    type="button"
                    class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                    <svg
                        id="theme-toggle-dark-icon"
                        class="hidden h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        ></path>
                    </svg>
                    <svg
                        id="theme-toggle-light-icon"
                        class="hidden h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    id="tooltip-toggle"
                    role="tooltip"
                    class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
                >
                    Toggle dark mode
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                    id="user-menu-button"
                    type="button"
                    class="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
                    aria-expanded="false"
                    data-dropdown-toggle="profile-dropdown"
                >
                    <span class="sr-only">Open user menu</span>
                    <img
                        class="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                    />
                </button>
                <!-- Dropdown menu -->
                <div
                    id="profile-dropdown"
                    class="z-50 my-4 hidden w-56 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                    <div class="py-3 px-4">
                        <span
                            class="block text-sm font-semibold text-gray-900 dark:text-white"
                            >Neil sims</span
                        >
                        <span
                            class="block truncate text-sm font-light text-gray-500 dark:text-gray-400"
                            >name@flowbite.com</span
                        >
                    </div>
                    <ul
                        class="py-1 font-light text-gray-500 dark:text-gray-400"
                        aria-labelledby="dropdown"
                    >
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                >My profile</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Account settings</a
                            >
                        </li>
                    </ul>
                    <ul
                        class="py-1 font-light text-gray-500 dark:text-gray-400"
                        aria-labelledby="dropdown"
                    >
                        <li>
                            <a
                                href="#"
                                class="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Sign out</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    // props: ["user"],
    components: {},
    setup() {},
    // component data
    data() {
        return {
            siteName: window.siteName,
            ext: window.ext,
        };
    },
    created() {},
    methods: {
        user_logout() {
            axios
                .post("/logout")
                .then((response) => {
                    this.$toast.success("Logged Out Successfully");
                    location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async login_post() {
            if (!window.ethereum) {
                alert("MetaMask not detected. Please install MetaMask first.");
                return;
            }

            const provider = new ethers.providers.Web3Provider(
                window.ethereum,
                "any"
            );

            const message =
                "Sign this message to confirm you own this wallet address. This action will not cost any gas fees.";

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            const account = accounts[0];

            const signer = provider.getSigner();

            const address = await signer.getAddress();
            const signature = await signer.signMessage(message);
            axios
                .post("/user/wallet/connect", {
                    address: address,
                    signature: signature,
                })
                .then((response) => {
                    $("#walletConnect").modal("hide");
                    $("#WalletModal").collapse("hide");
                    if (response.data == 1) {
                        this.$emit("walletConnectionUpdated");
                        this.$toast.success("Wallet Connected Successfully");
                    } else {
                        this.$toast.error("Wallet Connection Failed");
                    }
                    this.fetchData();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        login() {
            loadScript("https://cdn.ethers.io/lib/ethers-5.2.umd.min.js")
                .then(() => {
                    this.login_post();
                })
                .catch(() => {
                    // Failed to fetch script
                });
        },
        async logOut() {
            axios
                .post("/user/wallet/disconnect")
                .then((response) => {
                    $("#walletConnect").modal("hide");
                    $("#WalletModal").collapse("hide");
                    if (response.data == 1) {
                        this.$emit("walletConnectionUpdated");
                        this.$toast.success("Wallet Disconnected Successfully");
                    } else {
                        this.$toast.error("Wallet Disconnection Failed");
                    }
                    this.fetchData();
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {});
        },
        truncate(str, n) {
            return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
        },
    },
};
</script>
