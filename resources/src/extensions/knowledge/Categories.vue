<template>
    <div>
        <section id="knowledge-base-search">
            <div
                class="card knowledge-base-bg"
                style="
                    background-image: url('/assets/images/banner/banner.png');
                "
            >
                <div class="p-5">
                    <a
                        @click="$router.go(-1)"
                        class="text-dark mr-5 rounded-full border p-1 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        <i class="bi bi-chevron-left"></i
                    ></a>
                </div>
                <div class="card-body text-center">
                    <h2 class="text-primary text-2xl">
                        {{ category.name ? category.name : "..." }}
                        ({{ category.articles_count }})
                    </h2>
                </div>
            </div>
        </section>
        <!--/ Knowledge base Jumbotron -->

        <!-- Knowledge base -->
        <section id="knowledge-base-content" class="mt-5">
            <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-3">
                <template v-if="articles.data != null">
                    <div v-for="(article, index) in articles.data" :key="index">
                        <div class="card">
                            <router-link
                                class="text-dark"
                                :to="
                                    '/knowledge/articles/' +
                                    article.slug +
                                    '/' +
                                    article.id
                                "
                            >
                                <img
                                    v-if="article.img != null"
                                    :src="
                                        '/assets/images/article/' + article.img
                                    "
                                    class="card-img-top"
                                    alt="knowledge-base-image"
                                />

                                <div class="card-body text-center">
                                    <h4>{{ article.title }}</h4>
                                    <p class="text-body mt-1 mb-0">
                                        {{ article.short_text }}
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </template>

                <!-- no result -->
                <div class="col-12 no-result no-items text-center" v-else>
                    <h4 class="mt-4">{{ $t("Search result not found!") }}</h4>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: [],
    // component list
    components: {},

    // component data
    data() {
        return {
            articles: [],
            category: [],
        };
    },

    watch: {
        async $route(to) {
            if (to.params.slug != null) {
                this.fetchCategories();
            }
        },
    },
    // custom methods
    methods: {
        fetchCategories() {
            axios
                .get(
                    "/user/knowledge/categories/" +
                        (this.$route.params.slug
                            ? this.$route.params.slug + "/"
                            : "") +
                        this.$route.params.id
                )
                .then((response) => {
                    (this.articles = response.articles),
                        (this.category = response.category);
                })
                .catch((error) => {});
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchCategories();
    },

    // on component destroyed
    destroyed() {},
};
</script>

<style scoped>
.knowledge-base-bg {
    background-size: cover;
    background-color: rgba(115, 103, 240, 0.12) !important;
}
.knowledge-base-bg .kb-search-input .input-group:focus-within {
    box-shadow: none;
}

.kb-search-content-info .kb-search-content .card-img-top {
    background-color: #fcfcfc;
}
.kb-search-content-info .no-result.no-items {
    display: none;
}

.kb-title {
    display: flex;
    items: center;
    justify: space-around;
}

@media (min-width: 768px) {
    .knowledge-base-bg .kb-search-input .input-group {
        width: 576px;
        margin: 0 auto;
    }
}
@media (min-width: 992px) {
    .knowledge-base-bg .card-body {
        padding: 8rem;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .knowledge-base-bg .card-body {
        padding: 6rem;
    }
}
</style>
