<template>
    <div>
        <section id="knowledge-base-search">
            <div class="row">
                <div class="col-12">
                    <div
                        class="card knowledge-base-bg text-center"
                        style="
                            background-image: url('images/banner/banner.png');
                        "
                    >
                        <div class="card-body">
                            <h2 class="text-primary">
                                {{ $t("Dedicated Knowledge Base") }}
                            </h2>
                            <!-- <p class="card-text mb-2">
                                <span>Popular searches: </span
                                ><span class="fw-bolder"
                                    >Sales automation, Email marketing</span
                                >
                            </p> -->

                            <form
                                class="kb-search-input"
                                @submit.prevent="search()"
                            >
                                <div class="input-group input-group-merge">
                                    <div class="input-group-text">
                                        <i class="bi bi-search"></i>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Ask a question..."
                                        ref="search"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--/ Knowledge base Jumbotron -->

        <!-- Knowledge base -->
        <div class="row">
            <div class="col-lg-9 col-md-8 col-sm-12">
                <section id="knowledge-base-category">
                    <div class="row kb-search-content-info match-height">
                        <template v-if="categories != null">
                            <template v-for="(category, index) in categories">
                                <template v-if="category.articles_count != 0">
                                    <div
                                        class="col-md-4 col-sm-6 col-12 kb-search-content"
                                        :key="index"
                                    >
                                        <!-- account setting card -->
                                        <div class="card">
                                            <div class="card-body">
                                                <!-- account setting header -->
                                                <h6 class="kb-title">
                                                    <i
                                                        class="bi bi-book font-medium-4 me-50 text-primary"
                                                    ></i>
                                                    <span>
                                                        <router-link
                                                            :to="
                                                                '/knowledge/categories/' +
                                                                category.slug +
                                                                '/' +
                                                                category.id
                                                            "
                                                            class="list-group-item text-body"
                                                            >{{
                                                                category.name
                                                            }}</router-link
                                                        ></span
                                                    >
                                                    <span
                                                        >({{
                                                            category.articles_count
                                                        }})</span
                                                    >
                                                </h6>

                                                <div
                                                    class="list-group list-group-circle mt-2"
                                                >
                                                    <router-link
                                                        v-for="(
                                                            article, index
                                                        ) in category.articles"
                                                        :key="index"
                                                        :to="
                                                            '/knowledge/articles/' +
                                                            article.slug +
                                                            '/' +
                                                            article.id
                                                        "
                                                        class="list-group-item text-body"
                                                        >{{
                                                            article.title
                                                        }}</router-link
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </template>
                        <!-- no result -->
                        <div
                            class="col-12 text-center no-result no-items"
                            v-else
                        >
                            <h4 class="mt-4">
                                {{ $t("Search result not found!") }}
                            </h4>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="support-container">
                            <h2 class="support-heading">
                                {{ $t("Need more Support") }}?
                            </h2>
                            {{
                                $t(
                                    "If you cannot find an answer in the knowledgebase, you can"
                                )
                            }}
                            <a href="/user/support/ticket">{{
                                $t("contact us")
                            }}</a>
                            {{ $t("for further help.") }}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="fb-heading-small">
                            {{ $t("Popular Articles") }}
                        </div>
                        <hr class="style-three" />
                        <div class="list-group list-group-circle mt-2">
                            <router-link
                                v-for="(article, index) in popularArticles"
                                :key="index"
                                :to="
                                    '/knowledge/articles/' +
                                    article.slug +
                                    '/' +
                                    article.id
                                "
                                class="list-group-item text-body"
                            >
                                {{ article.title }}</router-link
                            >
                        </div>
                    </div>
                </div>

                <!-- <div class="card">
                    <div class="card-body">
                        <div class="fb-heading-small">Latest Articles</div>
                        <hr class="style-three" />
                        <div class="fat-content-small padding-left-10">
                            <ul>
                                <li
                                    v-for="(article, index) in latestArticles"
                                    :key="index"
                                >
                                    <router-link
                                        :to="
                                            '/knowledge/articles/' +
                                            article.slug +
                                            '/' +
                                            article.id
                                        "
                                        class="list-group-item text-body"
                                        ><i class="bi bi-file"></i>
                                        {{ article.title }}</router-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="fb-heading-small">Popular Tags</div>
                        <hr class="style-three" />
                        <div class="fat-content-tags padding-left-10">
                            <router-link
                                v-for="(tag, index) in popularTags"
                                :key="index"
                                :to="
                                    '/knowledge/tag/' + tag.slug + '/' + tag.id
                                "
                                class="btn btn-default btn-o btn-sm"
                                >{{ tag.name }}</router-link
                            >
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
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
            categories: [],
            popularArticles: [],
        };
    },

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchCategories() {
            this.$http
                .get("/user/knowledge")
                .then((response) => {
                    (this.categories = response.data.categories),
                        (this.popularArticles = response.data.popularArticles);
                })
                .catch((error) => {});
        },
        search() {
            this.$router
                .push("/knowledge/faq/" + this.$refs.search.value)
                .catch((err) => {
                    // Ignore the vuex err regarding  navigating to the page they are already on.
                    if (
                        err.name !== "NavigationDuplicated" &&
                        !err.message.includes(
                            "Avoided redundant navigation to current location"
                        )
                    ) {
                        // But print any other errors to the console
                        logError(err);
                    }
                });
        },
    },

    // on component created
    created() {
        let recaptchaScript = document.createElement("script");
        recaptchaScript.setAttribute(
            "src",
            "/js/scripts/pages/page-knowledge-base.js"
        );
        document.head.appendChild(recaptchaScript);
    },

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
    align-items: center;
    justify-content: space-around;
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
