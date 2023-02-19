<template>
    <div>
        <section id="knowledge-base-search">
            <div class="row">
                <div class="col-12">
                    <div
                        class="card knowledge-base-bg mb-5 text-center"
                        style="
                            background-image: url('/assets/images/banner/banner.png');
                        "
                    >
                        <div class="card-body">
                            <h2 class="text-primary mb-5 text-2xl">
                                {{ $t("Dedicated Knowledge Base") }}
                            </h2>
                            <form
                                class="kb-search-input"
                                @submit.prevent="search()"
                            >
                                <div class="input-group">
                                    <input
                                        type="text"
                                        placeholder="Ask a question..."
                                        ref="search"
                                    />
                                    <span>
                                        <i class="bi bi-search"></i>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--/ Knowledge base Jumbotron -->

        <!-- Knowledge base -->
        <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-3">
            <div class="xs:col-span-1 md:col-span-2">
                <section id="knowledge-base-category">
                    <div class="grid gap-5 xs:grid-cols-1 md:grid-cols-2">
                        <template v-if="knowledgeStore.categories != null">
                            <template
                                v-for="(
                                    category, index
                                ) in knowledgeStore.categories"
                            >
                                <template v-if="category.articles_count != 0">
                                    <!-- account setting card -->
                                    <div class="card" :key="index">
                                        <div class="card-body">
                                            <!-- account setting header -->
                                            <h6
                                                class="mb-2 flex items-center justify-between border-b border-gray-300 p-1 dark:border-gray-600"
                                            >
                                                <router-link
                                                    class="text-dark"
                                                    :to="
                                                        '/knowledge/categories/' +
                                                        category.slug +
                                                        '/' +
                                                        category.id
                                                    "
                                                    >{{
                                                        category.name
                                                    }}</router-link
                                                >
                                                <span
                                                    >({{
                                                        category.articles_count
                                                    }})</span
                                                >
                                            </h6>

                                            <div class="list-disc">
                                                <li
                                                    v-for="(
                                                        article, index
                                                    ) in category.articles"
                                                    :key="index"
                                                >
                                                    <router-link
                                                        class="text-dark"
                                                        :to="
                                                            '/knowledge/articles/' +
                                                            article.slug +
                                                            '/' +
                                                            article.id
                                                        "
                                                        >{{
                                                            article.title
                                                        }}</router-link
                                                    >
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </template>
                        <!-- no result -->
                        <div class="no-result no-items text-center" v-else>
                            <h4 class="mt-4">
                                {{ $t("Search result not found!") }}
                            </h4>
                        </div>
                    </div>
                </section>
            </div>

            <div class="col-span-1">
                <div class="card mb-5">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title-gradient">
                                {{ $t("Need more Support") }}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="support-container">
                            {{
                                $t(
                                    "If you cannot find an answer in the knowledgebase, you can"
                                )
                            }}
                            <a href="/user/support/ticket" class="text-dark">{{
                                $t("contact us")
                            }}</a>
                            {{ $t("for further help.") }}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title-gradient">
                                {{ $t("Popular Articles") }}
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="list-disc">
                            <li
                                v-for="(
                                    article, index
                                ) in knowledgeStore.popularArticles"
                                :key="index"
                            >
                                <router-link
                                    class="text-dark"
                                    :to="
                                        '/knowledge/articles/' +
                                        article.slug +
                                        '/' +
                                        article.id
                                    "
                                >
                                    {{ article.title }}</router-link
                                >
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useKnowledgeStore } from "../../store/knowledge";
export default {
    setup() {
        const knowledgeStore = useKnowledgeStore();
        return { knowledgeStore };
    },
    // component list
    components: {},

    // component data
    data() {
        return {};
    },

    // custom methods
    methods: {
        async fetchCategories() {
            if (this.knowledgeStore.categories.length == 0) {
                await this.knowledgeStore.fetch();
            }
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
        $(function () {
            "use strict";
            var searchbar = $("#searchbar"),
                search_content = $(
                    ".kb-search-content-info .kb-search-content"
                ),
                no_result = $(".kb-search-content-info .no-result");

            // Filter for knowledge base and category page
            searchbar.on("keyup", function () {
                var value = $(this).val().toLowerCase();
                if (value != "") {
                    search_content.filter(function () {
                        $(this).toggle(
                            $(this).text().toLowerCase().indexOf(value) > -1
                        );
                    });
                    var search_row = $(
                        ".kb-search-content-info .kb-search-content:visible"
                    ).length;

                    //Check if search-content has row or not
                    if (search_row == 0) {
                        no_result.removeClass("no-items");
                    } else {
                        if (!no_result.hasClass("no-items")) {
                            no_result.addClass("no-items");
                        }
                    }
                } else {
                    // If filter box is empty
                    search_content.show();
                }
            });
        });
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
    justify-items: center;
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
