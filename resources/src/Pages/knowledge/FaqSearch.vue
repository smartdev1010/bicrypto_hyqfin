<template>
    <div>
        <section id="faq-search-filter">
            <div
                class="card faq-search"
                style="background-image: url('images/banner/banner.png')"
            >
                <div class="card-body text-center">
                    <!-- main title -->
                    <h2 class="text-primary">
                        {{ $t("Let's answer some questions") }}
                    </h2>

                    <!-- subtitle -->
                    <p class="card-text mb-2">
                        {{
                            $t(
                                "or choose a category to quickly find the help you need"
                            )
                        }}
                    </p>

                    <!-- search input -->
                    <form class="faq-search-input" @submit.prevent="search()">
                        <div class="input-group input-group-merge">
                            <div class="input-group-text">
                                <i class="bi bi-search"></i>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search faq..."
                                ref="search"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <!--/ Knowledge base Jumbotron -->

        <!-- Knowledge base -->
        <section id="faq-tabs">
            <!-- vertical tab pill -->
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <div
                        class="faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0"
                    >
                        <!-- FAQ image -->
                        <img
                            src="images/illustration/faq-illustrations.svg"
                            class="img-fluid d-none d-md-block"
                            alt="demand img"
                        />
                    </div>
                </div>

                <div class="col-lg-9 col-md-8 col-sm-12">
                    <template v-if="faqs != ''">
                        <div
                            v-for="(faq, index) in faqs"
                            :key="index"
                            class="accordion accordion-margin mt-2"
                            :id="'#faq-question-' + faq.id"
                        >
                            <div class="card accordion-item">
                                <h2
                                    class="accordion-header"
                                    :id="faq.category_id + faq.id"
                                >
                                    <button
                                        class="accordion-button collapsed"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        :data-bs-target="
                                            '#faq-question-' + faq.id
                                        "
                                        :aria-controls="
                                            '#faq-question-' + faq.id
                                        "
                                        aria-expanded="false"
                                    >
                                        {{ faq.question }}
                                    </button>
                                </h2>

                                <div
                                    :id="'faq-question-' + faq.id"
                                    class="collapse accordion-collapse"
                                    :aria-labelledby="faq.category_id + faq.id"
                                    :data-bs-parent="'#faq' + faq.id"
                                >
                                    <div class="accordion-body text-dark">
                                        {{ faq.answer }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <div v-else class="text-muted text-center" colspan="100%">
                        <img
                            height="128px"
                            width="128px"
                            src="https://assets.staticimg.com/pro/2.0.4/images/empty.svg"
                            alt=""
                        />
                        <p class="">{{ $t("No Data Found") }}</p>

                        <section class="faq-contact">
                            <div class="row mt-5 pt-75">
                                <div class="col-12 text-center">
                                    <h2>
                                        {{ $t("You still have a question") }}?
                                    </h2>
                                    <p class="mb-3">
                                        {{
                                            $t(
                                                "If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        <!-- / frequently asked questions tabs pills -->

        <!-- contact us -->
        <section class="faq-contact" v-if="faqs != ''">
            <div class="row mt-5 pt-75">
                <div class="col-12 text-center">
                    <h2>{{ $t("You still have a question") }}?</h2>
                    <p class="mb-3">
                        {{
                            $t(
                                "If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"
                            )
                        }}
                    </p>
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
            faqs: [],
        };
    },

    watch: {
        async $route(from, to) {
            if (
                to.params.search != from.params.search &&
                to.params.search != null
            ) {
                this.fetchCategories();
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
        fetchCategories() {
            this.$http
                .get("/user/knowledge/faq/" + this.$route.params.search)
                .then((response) => {
                    this.faqs = response.data.faqs;
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
.faq-search {
    background-size: cover;
    background-color: rgba(115, 103, 240, 0.12) !important;
}
.faq-search .faq-search-input .input-group:focus-within {
    box-shadow: none;
}

.faq-contact .faq-contact-card {
    background-color: rgba(186, 191, 199, 0.12);
}

@media (min-width: 992px) {
    .faq-search .card-body {
        padding: 8rem !important;
    }
}
@media (min-width: 768px) and (max-width: 991.98px) {
    .faq-search .card-body {
        padding: 6rem !important;
    }
}
@media (min-width: 768px) {
    .faq-search .faq-search-input .input-group {
        width: 576px;
        margin: 0 auto;
    }
    .faq-navigation {
        height: 550px;
    }
}
</style>
