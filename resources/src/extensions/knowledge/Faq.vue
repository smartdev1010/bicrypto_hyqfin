<template>
    <div>
        <section id="faq-search-filter">
            <div
                class="card faq-search"
                style="
                    background-image: url('/assets/images/banner/banner.png');
                "
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
                <div class="xs:col-span-12 md:col-span-4 lg:col-span-3">
                    <div
                        class="faq-navigation flex-column mb-md-0 mb-2 flex justify-between"
                    >
                        <!-- pill tabs navigation -->
                        <ul
                            class="nav nav-pills nav-left flex-column"
                            role="tablist"
                        >
                            <!-- payment -->
                            <li
                                class="nav-item"
                                v-for="(faqs, index) in categories"
                                :key="index"
                            >
                                <a
                                    class="nav-link"
                                    :class="faqs.id == 1 ? 'active' : ''"
                                    :id="faqs.id"
                                    data-bs-toggle="pill"
                                    :href="'#faq-category-' + faqs.id"
                                    aria-expanded="true"
                                    role="tab"
                                >
                                    <i
                                        data-feather="credit-card"
                                        class="font-medium-3 mr-1"
                                    ></i>
                                    <span class="fw-bold">{{
                                        faqs.category
                                    }}</span>
                                </a>
                            </li>
                        </ul>

                        <!-- FAQ image -->
                        <img
                            src="images/illustration/faq-illustrations.svg"
                            class="img-fluid d-none d-md-block"
                            alt="demand img"
                        />
                    </div>
                </div>

                <div class="xs:col-span-12 md:col-span-8 lg:col-span-9">
                    <!-- pill tabs tab content -->
                    <div class="tab-content">
                        <div
                            v-for="(faqs, index) in categories"
                            :key="index"
                            class="tab-pane"
                            :class="faqs.id == 1 ? 'active' : ''"
                            :id="'faq-category-' + faqs.id"
                            role="tabpanel"
                            :aria-labelledby="faqs.category"
                            aria-expanded="false"
                        >
                            <!-- icon and header -->
                            <div class="flex items-center">
                                <div
                                    class="avatar avatar-tag bg-light-primary mr-1"
                                >
                                    <i class="font-medium-4 bi bi-info-lg"></i>
                                </div>
                                <div>
                                    <h4 class="mb-0">{{ faqs.category }}</h4>
                                </div>
                            </div>

                            <!-- frequent answer and question  collapse  -->
                            <div
                                v-for="(faq, indexx) in faqs.faq_questions"
                                :key="indexx"
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
                                        :aria-labelledby="
                                            faq.category_id + faq.id
                                        "
                                        :data-bs-parent="'#faq' + faq.id"
                                    >
                                        <div class="accordion-body text-dark">
                                            {{ faq.answer }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / frequently asked questions tabs pills -->

        <!-- contact us -->
        <section class="faq-contact">
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
            categories: [],
        };
    },

    // custom methods
    methods: {
        fetchCategories() {
            axios
                .get("/user/knowledge/faq")
                .then((response) => {
                    this.categories = response.categories;
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
