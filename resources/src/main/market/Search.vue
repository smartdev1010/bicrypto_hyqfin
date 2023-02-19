<template>
    <div class="w-25">
        <label
            for="search"
            class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Search</label
        >
        <div class="relative">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <svg
                    v-if="!searchStr"
                    aria-hidden="true"
                    class="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <button v-if="searchStr" @click="onReset">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 text-red-600"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <input
                v-model="searchStr"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                placeholder="Search..."
                @click="onClick"
                @change="onChange"
                @keyup="onInput"
            />
        </div>
    </div>
</template>

<script>
// component
export default {
    // component props
    props: {
        value: { type: String, default: "" },
    },

    // component data
    data() {
        return {
            searchStr: "",
        };
    },

    // watch methods
    watch: {
        value() {
            this.searchStr = this.value;
        },
    },

    // custom mounted
    methods: {
        onClick(e) {
            this.$emit("click", e);
        },
        onChange(e) {
            this.$emit("change", e);
        },
        onInput(e) {
            this.$emit("input", this.searchStr);
        },
        onReset(e) {
            this.searchStr = "";
            this.$emit("input", "");
        },
    },
};
</script>
