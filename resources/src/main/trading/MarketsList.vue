<template>
    <div>
        <div class="mb-3 flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                    <svg
                        aria-hidden="true"
                        class="h-4 w-4 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
                <input
                    id="simple-search"
                    v-model="searchTerm"
                    type="text"
                    class="block w-full rounded border border-gray-300 bg-gray-50 p-1 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search"
                />
            </div>
        </div>
        <div class="mb-2 flex justify-between text-start text-xs">
            <a
                class="flex"
                @click="
                    filter != 1
                        ? filter == 2
                            ? (filter = 0)
                            : (filter = 1)
                        : (filter = 2)
                "
                ><span class="mr-1">Market</span>
                <div class="flex flex-col" style="font-size: 8px">
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 1
                                ? 'text-warning bi-caret-up-fill'
                                : 'bi-caret-up'
                        "
                    ></i>
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 2
                                ? 'text-warning bi-caret-down-fill'
                                : 'bi-caret-down'
                        "
                    ></i>
                </div>
            </a>
            <a
                class="flex"
                @click="
                    filter != 3
                        ? filter == 4
                            ? (filter = 0)
                            : (filter = 3)
                        : (filter = 4)
                "
                ><span class="mr-1">Price</span>
                <div class="flex flex-col" style="font-size: 8px">
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 3
                                ? 'text-warning bi-caret-up-fill'
                                : 'bi-caret-up'
                        "
                    ></i>
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 4
                                ? 'text-warning bi-caret-down-fill'
                                : 'bi-caret-down'
                        "
                    ></i>
                </div>
            </a>
            <a
                class="flex"
                @click="
                    filter != 5
                        ? filter == 6
                            ? (filter = 0)
                            : (filter = 5)
                        : (filter = 6)
                "
                ><span class="mr-1">%</span>
                <div class="flex flex-col" style="font-size: 8px">
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 5
                                ? 'text-warning bi-caret-up-fill'
                                : 'bi-caret-up'
                        "
                    ></i>
                    <i
                        class="bi"
                        style="line-height: 0px !important"
                        :class="
                            filter == 6
                                ? 'text-warning bi-caret-down-fill'
                                : 'bi-caret-down'
                        "
                    ></i>
                </div>
            </a>
        </div>
        <RecycleScroller
            v-slot="{ item }"
            class="scroller text-xs"
            style="margin-right: -10px"
            :items="markets"
            :item-size="22"
            key-field="symbol"
        >
            <div class="flex justify-between text-start">
                <div>
                    <button
                        type="button"
                        class="not-watchlisted"
                        style="background: transparent; border: transparent"
                        @click.prevent="
                            iffav
                                ? removeFromWatchlist(item['id'])
                                : addToWatchlist(
                                      item.currency,
                                      item.pair,
                                      ifeco ? 1 : 2
                                  )
                        "
                    >
                        <i class="text-secondary bi bi-star mr-1" />
                    </button>
                    <router-link
                        :to="
                            '/' +
                            type +
                            '/' +
                            (subtype != 'non' ? subtype + '/' : '') +
                            item.currency +
                            (ifeco ? '-' : '/') +
                            item.pair
                        "
                    >
                        <span class="text-dark fw-bold"
                            >{{ item.currency }}/</span
                        ><span class="text-secondary fw-bold">{{
                            item.pair
                        }}</span>
                    </router-link>
                </div>
                <span class="text-start" :class="item.class">{{
                    priceFormatter(item.price) || ""
                }}</span>
                <span class="mr-1 text-start" :class="item.classChange">{{
                    priceFormatter(item.change, 2) || ""
                }}</span>
            </div>
        </RecycleScroller>
    </div>
</template>

<script>
import { RecycleScroller } from "vue-virtual-scroller";

// component
export default {
    components: { RecycleScroller },
    props: ["list", "type", "subtype", "iffav", "ifeco"],

    emits: ["fetchFavs"],
    data() {
        return {
            searchTerm: "",
            searched: false,
            filter: 0,
        };
    },
    computed: {
        markets() {
            try {
                if (!this.list) return [];

                const filteredList = this.searchTerm
                    ? this.list.filter((e) =>
                          e.symbol
                              .toUpperCase()
                              .includes(this.searchTerm.toUpperCase())
                      )
                    : this.list;

                const sortedList = [...filteredList];
                const sortFunctions = [
                    (a, b) => a.symbol.localeCompare(b.symbol),
                    (a, b) => b.symbol.localeCompare(a.symbol),
                    (a, b) => b.price - a.price,
                    (a, b) => a.price - b.price,
                    (a, b) => b.change - a.change,
                    (a, b) => a.change - b.change,
                ];

                return this.filter
                    ? sortedList.sort(sortFunctions[this.filter - 1])
                    : sortedList;
            } catch (error) {
                console.log(error);
            }
        },
    },

    watch: {
        searchTerm() {
            this.markets;
        },
        filter() {
            this.markets;
        },
    },
    methods: {
        priceFormatter(p, f1 = 8, f2 = 2, d = ",") {
            if (p == null || isNaN(p)) {
                return 0;
            }

            p =
                parseInt(p) !== 0
                    ? parseFloat(p).toFixed(f2)
                    : parseFloat(p).toFixed(f1);
            p =
                parseInt(p) !== 0
                    ? p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, d)
                    : p;
            return p;
        },
        async addToWatchlist(currency, pair, type) {
            await axios
                .post("/user/watchlist/store", {
                    currency,
                    pair,
                    type,
                })
                .then((response) => {
                    this.$toast[response.type](response.message);
                    this.$emit("fetchFavs");
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                });
        },
        async removeFromWatchlist(id) {
            await axios
                .post("/user/watchlist/delete", {
                    id: id,
                })
                .then((response) => {
                    this.$toast[response.type](response.message);
                    this.$emit("fetchFavs");
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                });
        },
    },
};
</script>
<style>
.vue-recycle-scroller {
    position: relative;
}
.vue-recycle-scroller.direction-vertical:not(.page-mode) {
    overflow-y: auto;
}
.vue-recycle-scroller.direction-horizontal:not(.page-mode) {
    overflow-x: auto;
}
.vue-recycle-scroller.direction-horizontal {
    display: flex;
}
.vue-recycle-scroller__slot {
    flex: auto 0 0;
}
.vue-recycle-scroller__item-wrapper {
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
}
.vue-recycle-scroller.ready .vue-recycle-scroller__item-view {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
}
.vue-recycle-scroller.direction-vertical .vue-recycle-scroller__item-wrapper {
    width: 100%;
}
.vue-recycle-scroller.direction-horizontal .vue-recycle-scroller__item-wrapper {
    height: 100%;
}
.vue-recycle-scroller.ready.direction-vertical
    .vue-recycle-scroller__item-view {
    width: 100%;
}
.vue-recycle-scroller.ready.direction-horizontal
    .vue-recycle-scroller__item-view {
    height: 100%;
}
.resize-observer[data-v-b329ee4c] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    pointer-events: none;
    display: block;
    overflow: hidden;
    opacity: 0;
}
.resize-observer[data-v-b329ee4c] object {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
}
.not-watchlisted:hover .bi-star {
    color: rgb(255, 159, 67) !important;
}
.watchlisted:hover .bi-star-fill {
    color: rgb(130, 134, 139) !important;
}
</style>
