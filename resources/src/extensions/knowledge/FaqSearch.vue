<template>
    <div>
        <section id="faq-search-filter">
            <div
                class="card faq-search"
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
                    <!-- main title -->
                    <h2 class="text-primary text-2xl">
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
                        <div class="input-group">
                            <input
                                type="text"
                                placeholder="Search faq..."
                                ref="search"
                            />
                            <span>
                                <i class="bi bi-search"></i>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <!--/ Knowledge base Jumbotron -->

        <!-- Knowledge base -->
        <section id="faq-tabs" class="mt-5">
            <!-- vertical tab pill -->
            <div
                class="grid gap-5 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
            >
                <div class="col-span-1 xs:hidden md:block">
                    <div
                        class="faq-navigation flex-column mb-md-0 mb-2 flex justify-between"
                    >
                        <!-- FAQ image -->
                        <img
                            src="/assets/images/illustration/faq-illustrations.svg"
                            class="img-fluid"
                            alt="demand img"
                        />
                    </div>
                </div>

                <div class="xs:col-span-1 md:col-span-2 lg:col-span-3">
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
                                    class="accordion-collapse collapse"
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
                        <p class="text-dark text-lg">
                            {{ $t("No Data Found") }}
                        </p>

                        <section class="faq-contact">
                            <div class="row pt-75 mt-5">
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
            <div class="row pt-75 mt-5">
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
        fetchCategories() {
            axios
                .get("/user/knowledge/faq/" + this.$route.params.search)
                .then((response) => {
                    this.faqs = response.faqs;
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
