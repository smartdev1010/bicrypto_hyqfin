<template>
    <div>
        <div class="row">
            <div class="col-12 card-search custom-data-search">
                <div class="input-group input-group-sm px-1 mb-1">
                    <span
                        class="input-group-text text-dark border-0"
                        id="basic-addon1"
                        ><i class="bi bi-search"></i
                    ></span>
                    <input
                        type="text"
                        id="search_table"
                        class="form-control form-control-sm text-dark border-0"
                        placeholder="Search..."
                        ref="searchInput"
                        @keyup="searchMarkets"
                    />
                </div>
            </div>
        </div>
        <table class="table text-dark table-sm table-borderless tableFixHead">
            <thead class="text-muted">
                <th scope="col">{{ $t("Pair") }}</th>
            </thead>
            <RecycleScroller
                class="scroller"
                :items="searched == true ? markets : list"
                :item-size="20"
                key-field="symbol"
                listTag="tbody"
                itemTag="tr"
                v-slot="{ item }"
            >
                <td>
                    <div class="d-flex justify-content-start">
                        <form
                            @submit.prevent="
                                addToWatchlist(
                                    item['currency'],
                                    item['pair'],
                                    1
                                )
                            "
                        >
                            <button
                                type="submit"
                                class="not-watchlisted"
                                style="
                                    background: transparent;
                                    border: transparent;
                                "
                            >
                                <i class="me-1 text-secondary bi bi-star"></i>
                            </button>
                        </form>
                        <router-link
                            :to="'../' + item['currency'] + '/' + item['pair']"
                        >
                            <span class="text-dark fw-bold">{{
                                item["currency"]
                            }}</span
                            >/<span class="text-secondary fw-bold">{{
                                item["pair"]
                            }}</span>
                        </router-link>
                    </div>
                </td>
            </RecycleScroller>
        </table>
    </div>
</template>

<script>
import { RecycleScroller } from "vue-virtual-scroller";
// component
export default {
    props: ["list"],
    // component list
    components: { RecycleScroller },

    // component data
    data() {
        return {
            markets: [],
            searchInput: [],
            searched: false,
        };
    },

    // custom methods
    methods: {
        searchMarkets() {
            this.searched = true;
            var search = this.$refs.searchInput.value.toUpperCase();
            this.markets = this.list
                .filter(function (e) {
                    return e["symbol"].toUpperCase().indexOf(search) >= 0
                        ? e
                        : null;
                })
                .sort();
        },
        addToWatchlist(currency, pair, type) {
            this.$http
                .post("/user/watchlist/store", {
                    currency: currency,
                    pair: pair,
                    type: type,
                })
                .then((response) => {
                    this.$toast[response.data.type](response.data.message);
                    this.$emit("fetchFavs");
                })
                .catch((error) => {
                    this.$toast.error(error.response.data);
                });
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {},
};
</script>
<style>
@import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
.not-watchlisted:hover .bi-star {
    color: rgb(255, 159, 67) !important;
}
.watchlisted:hover .bi-star-fill {
    color: rgb(130, 134, 139) !important;
}
</style>
