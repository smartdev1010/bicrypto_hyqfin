<template>
    <div>
        <section id="knowledge-base-question">
            <div class="row">
                <div class="col-lg-3 col-md-5 col-12 order-2 order-md-1">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="kb-title">
                                <i
                                    data-feather="info"
                                    class="font-medium-4 me-50"
                                ></i
                                ><span>{{ $t("Categories") }}</span>
                            </h6>

                            <div class="list-group list-group-circle mt-1">
                                <div
                                    class="art-category"
                                    v-if="article.category"
                                >
                                    <router-link
                                        :to="
                                            '/knowledge/categories/' +
                                            article.category.slug +
                                            '/' +
                                            article.category.id
                                        "
                                    >
                                        <i class="bi bi-folder"></i>
                                        {{ article.category.name }}
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h6 class="kb-title">
                                <i
                                    data-feather="info"
                                    class="font-medium-4 me-50"
                                ></i
                                ><span>{{ $t("Tags") }}</span>
                            </h6>

                            <div class="list-group list-group-circle mt-1">
                                <div
                                    class="article-content"
                                    v-if="article.tags"
                                >
                                    <div class="article-tags">
                                        <router-link
                                            v-for="(tag, index) in article.tags"
                                            :key="index"
                                            :to="
                                                '/knowledge/tags/' +
                                                tag.slug +
                                                '/' +
                                                tag.id
                                            "
                                            class="badge bg-light-info"
                                            style="margin: 5px"
                                            >{{ tag.name }}</router-link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-7 col-12 order-1 order-md-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title mb-1">
                                <i
                                    data-feather="smartphone"
                                    class="font-medium-5 me-25"
                                ></i>
                                <span>{{ article.title }}</span>
                            </h4>
                            <p class="mb-2">
                                {{ $t("Published in") }}:
                                {{ article.created_at | toDate }}
                            </p>

                            <img
                                v-if="article.img != null"
                                :src="'/assets/images/article/' + article.img"
                                class="card-img-top"
                                alt="knowledge-base-image"
                            />
                            <p class="mt-2">
                                {{ article.full_text }}
                            </p>
                            <!-- <img
            src="{{asset('images/pages/kb-image.jpg')}}"
            class="img-fluid rounded w-100 my-1"
            alt="article-img"
          /> -->
                        </div>
                    </div>
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
        return { article: [] };
    },

    watch: {
        async $route(to) {
            if (to.params.slug != null) {
                this.fetchArticle();
            }
        },
    },
    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchArticle() {
            this.$http
                .get(
                    "/user/knowledge/articles/" +
                        (this.$route.params.slug
                            ? this.$route.params.slug + "/"
                            : "") +
                        this.$route.params.id
                )
                .then((response) => {
                    this.article = response.data.article;
                })
                .catch((error) => {});
        },
    },

    // on component created
    created() {},

    // on component mounted
    mounted() {
        this.fetchArticle();
    },

    // on component destroyed
    destroyed() {},
};
</script>
