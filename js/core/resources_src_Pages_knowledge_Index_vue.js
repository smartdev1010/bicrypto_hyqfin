"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_knowledge_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  // component list
  components: {},
  // component data
  data: function data() {
    return {
      categories: [],
      popularArticles: []
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchCategories: function fetchCategories() {
      var _this = this;
      this.$http.get("/user/knowledge").then(function (response) {
        _this.categories = response.data.categories, _this.popularArticles = response.data.popularArticles;
      })["catch"](function (error) {});
    },
    search: function search() {
      this.$router.push("/knowledge/faq/" + this.$refs.search.value)["catch"](function (err) {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (err.name !== "NavigationDuplicated" && !err.message.includes("Avoided redundant navigation to current location")) {
          // But print any other errors to the console
          logError(err);
        }
      });
    }
  },
  // on component created
  created: function created() {
    var recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "/js/scripts/pages/page-knowledge-base.js");
    document.head.appendChild(recaptchaScript);
  },
  // on component mounted
  mounted: function mounted() {
    this.fetchCategories();
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.knowledge-base-bg[data-v-19f918fa] {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.knowledge-base-bg .kb-search-input .input-group[data-v-19f918fa]:focus-within {\n    box-shadow: none;\n}\n.kb-search-content-info .kb-search-content .card-img-top[data-v-19f918fa] {\n    background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items[data-v-19f918fa] {\n    display: none;\n}\n.kb-title[data-v-19f918fa] {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group[data-v-19f918fa] {\n        width: 576px;\n        margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n.knowledge-base-bg .card-body[data-v-19f918fa] {\n        padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n.knowledge-base-bg .card-body[data-v-19f918fa] {\n        padding: 6rem;\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/src/Pages/knowledge/Index.vue"],"names":[],"mappings":";AA8RA;IACA,sBAAA;IACA,sDAAA;AACA;AACA;IACA,gBAAA;AACA;AAEA;IACA,yBAAA;AACA;AACA;IACA,aAAA;AACA;AAEA;IACA,aAAA;IACA,mBAAA;IACA,6BAAA;AACA;AAEA;AACA;QACA,YAAA;QACA,cAAA;AACA;AACA;AACA;AACA;QACA,aAAA;AACA;AACA;AACA;AACA;QACA,aAAA;AACA;AACA","sourcesContent":["<template>\n    <div>\n        <section id=\"knowledge-base-search\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div\n                        class=\"card knowledge-base-bg text-center\"\n                        style=\"\n                            background-image: url('images/banner/banner.png');\n                        \"\n                    >\n                        <div class=\"card-body\">\n                            <h2 class=\"text-primary\">\n                                {{ $t(\"Dedicated Knowledge Base\") }}\n                            </h2>\n                            <!-- <p class=\"card-text mb-2\">\n                                <span>Popular searches: </span\n                                ><span class=\"fw-bolder\"\n                                    >Sales automation, Email marketing</span\n                                >\n                            </p> -->\n\n                            <form\n                                class=\"kb-search-input\"\n                                @submit.prevent=\"search()\"\n                            >\n                                <div class=\"input-group input-group-merge\">\n                                    <div class=\"input-group-text\">\n                                        <i class=\"bi bi-search\"></i>\n                                    </div>\n                                    <input\n                                        type=\"text\"\n                                        class=\"form-control\"\n                                        placeholder=\"Ask a question...\"\n                                        ref=\"search\"\n                                    />\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!--/ Knowledge base Jumbotron -->\n\n        <!-- Knowledge base -->\n        <div class=\"row\">\n            <div class=\"col-lg-9 col-md-8 col-sm-12\">\n                <section id=\"knowledge-base-category\">\n                    <div class=\"row kb-search-content-info match-height\">\n                        <template v-if=\"categories != null\">\n                            <template v-for=\"(category, index) in categories\">\n                                <template v-if=\"category.articles_count != 0\">\n                                    <div\n                                        class=\"col-md-4 col-sm-6 col-12 kb-search-content\"\n                                        :key=\"index\"\n                                    >\n                                        <!-- account setting card -->\n                                        <div class=\"card\">\n                                            <div class=\"card-body\">\n                                                <!-- account setting header -->\n                                                <h6 class=\"kb-title\">\n                                                    <i\n                                                        class=\"bi bi-book font-medium-4 me-50 text-primary\"\n                                                    ></i>\n                                                    <span>\n                                                        <router-link\n                                                            :to=\"\n                                                                '/knowledge/categories/' +\n                                                                category.slug +\n                                                                '/' +\n                                                                category.id\n                                                            \"\n                                                            class=\"list-group-item text-body\"\n                                                            >{{\n                                                                category.name\n                                                            }}</router-link\n                                                        ></span\n                                                    >\n                                                    <span\n                                                        >({{\n                                                            category.articles_count\n                                                        }})</span\n                                                    >\n                                                </h6>\n\n                                                <div\n                                                    class=\"list-group list-group-circle mt-2\"\n                                                >\n                                                    <router-link\n                                                        v-for=\"(\n                                                            article, index\n                                                        ) in category.articles\"\n                                                        :key=\"index\"\n                                                        :to=\"\n                                                            '/knowledge/articles/' +\n                                                            article.slug +\n                                                            '/' +\n                                                            article.id\n                                                        \"\n                                                        class=\"list-group-item text-body\"\n                                                        >{{\n                                                            article.title\n                                                        }}</router-link\n                                                    >\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </template>\n                            </template>\n                        </template>\n                        <!-- no result -->\n                        <div\n                            class=\"col-12 text-center no-result no-items\"\n                            v-else\n                        >\n                            <h4 class=\"mt-4\">\n                                {{ $t(\"Search result not found!\") }}\n                            </h4>\n                        </div>\n                    </div>\n                </section>\n            </div>\n\n            <div class=\"col-lg-3 col-md-4 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"support-container\">\n                            <h2 class=\"support-heading\">\n                                {{ $t(\"Need more Support\") }}?\n                            </h2>\n                            {{\n                                $t(\n                                    \"If you cannot find an answer in the knowledgebase, you can\"\n                                )\n                            }}\n                            <a href=\"/user/support/ticket\">{{\n                                $t(\"contact us\")\n                            }}</a>\n                            {{ $t(\"for further help.\") }}\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"fb-heading-small\">\n                            {{ $t(\"Popular Articles\") }}\n                        </div>\n                        <hr class=\"style-three\" />\n                        <div class=\"list-group list-group-circle mt-2\">\n                            <router-link\n                                v-for=\"(article, index) in popularArticles\"\n                                :key=\"index\"\n                                :to=\"\n                                    '/knowledge/articles/' +\n                                    article.slug +\n                                    '/' +\n                                    article.id\n                                \"\n                                class=\"list-group-item text-body\"\n                            >\n                                {{ article.title }}</router-link\n                            >\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"fb-heading-small\">Latest Articles</div>\n                        <hr class=\"style-three\" />\n                        <div class=\"fat-content-small padding-left-10\">\n                            <ul>\n                                <li\n                                    v-for=\"(article, index) in latestArticles\"\n                                    :key=\"index\"\n                                >\n                                    <router-link\n                                        :to=\"\n                                            '/knowledge/articles/' +\n                                            article.slug +\n                                            '/' +\n                                            article.id\n                                        \"\n                                        class=\"list-group-item text-body\"\n                                        ><i class=\"bi bi-file\"></i>\n                                        {{ article.title }}</router-link\n                                    >\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"fb-heading-small\">Popular Tags</div>\n                        <hr class=\"style-three\" />\n                        <div class=\"fat-content-tags padding-left-10\">\n                            <router-link\n                                v-for=\"(tag, index) in popularTags\"\n                                :key=\"index\"\n                                :to=\"\n                                    '/knowledge/tag/' + tag.slug + '/' + tag.id\n                                \"\n                                class=\"btn btn-default btn-o btn-sm\"\n                                >{{ tag.name }}</router-link\n                            >\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    props: [],\n    // component list\n    components: {},\n\n    // component data\n    data() {\n        return {\n            categories: [],\n            popularArticles: [],\n        };\n    },\n\n    // custom methods\n    methods: {\n        goBack() {\n            window.history.length > 1\n                ? this.$router.go(-1)\n                : this.$router.push(\"/\");\n        },\n        fetchCategories() {\n            this.$http\n                .get(\"/user/knowledge\")\n                .then((response) => {\n                    (this.categories = response.data.categories),\n                        (this.popularArticles = response.data.popularArticles);\n                })\n                .catch((error) => {});\n        },\n        search() {\n            this.$router\n                .push(\"/knowledge/faq/\" + this.$refs.search.value)\n                .catch((err) => {\n                    // Ignore the vuex err regarding  navigating to the page they are already on.\n                    if (\n                        err.name !== \"NavigationDuplicated\" &&\n                        !err.message.includes(\n                            \"Avoided redundant navigation to current location\"\n                        )\n                    ) {\n                        // But print any other errors to the console\n                        logError(err);\n                    }\n                });\n        },\n    },\n\n    // on component created\n    created() {\n        let recaptchaScript = document.createElement(\"script\");\n        recaptchaScript.setAttribute(\n            \"src\",\n            \"/js/scripts/pages/page-knowledge-base.js\"\n        );\n        document.head.appendChild(recaptchaScript);\n    },\n\n    // on component mounted\n    mounted() {\n        this.fetchCategories();\n    },\n\n    // on component destroyed\n    destroyed() {},\n};\n</script>\n<style scoped>\n.knowledge-base-bg {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.knowledge-base-bg .kb-search-input .input-group:focus-within {\n    box-shadow: none;\n}\n\n.kb-search-content-info .kb-search-content .card-img-top {\n    background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n    display: none;\n}\n\n.kb-title {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n@media (min-width: 768px) {\n    .knowledge-base-bg .kb-search-input .input-group {\n        width: 576px;\n        margin: 0 auto;\n    }\n}\n@media (min-width: 992px) {\n    .knowledge-base-bg .card-body {\n        padding: 8rem;\n    }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n    .knowledge-base-bg .card-body {\n        padding: 6rem;\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_19f918fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_19f918fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_19f918fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/Pages/knowledge/Index.vue":
/*!*************************************************!*\
  !*** ./resources/src/Pages/knowledge/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=19f918fa&scoped=true& */ "./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_19f918fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& */ "./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "19f918fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/knowledge/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_19f918fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=style&index=0&id=19f918fa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_19f918fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=19f918fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Index.vue?vue&type=template&id=19f918fa&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { attrs: { id: "knowledge-base-search" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            {
              staticClass: "card knowledge-base-bg text-center",
              staticStyle: {
                "background-image": "url('images/banner/banner.png')",
              },
            },
            [
              _c("div", { staticClass: "card-body" }, [
                _c("h2", { staticClass: "text-primary" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Dedicated Knowledge Base")) +
                      "\n                        "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "kb-search-input",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.search()
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "input-group input-group-merge" },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          ref: "search",
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Ask a question...",
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-9 col-md-8 col-sm-12" }, [
        _c("section", { attrs: { id: "knowledge-base-category" } }, [
          _c(
            "div",
            { staticClass: "row kb-search-content-info match-height" },
            [
              _vm.categories != null
                ? [
                    _vm._l(_vm.categories, function (category, index) {
                      return [
                        category.articles_count != 0
                          ? [
                              _c(
                                "div",
                                {
                                  key: index,
                                  staticClass:
                                    "col-md-4 col-sm-6 col-12 kb-search-content",
                                },
                                [
                                  _c("div", { staticClass: "card" }, [
                                    _c("div", { staticClass: "card-body" }, [
                                      _c("h6", { staticClass: "kb-title" }, [
                                        _c("i", {
                                          staticClass:
                                            "bi bi-book font-medium-4 me-50 text-primary",
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "router-link",
                                              {
                                                staticClass:
                                                  "list-group-item text-body",
                                                attrs: {
                                                  to:
                                                    "/knowledge/categories/" +
                                                    category.slug +
                                                    "/" +
                                                    category.id,
                                                },
                                              },
                                              [_vm._v(_vm._s(category.name))]
                                            ),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "(" +
                                              _vm._s(category.articles_count) +
                                              ")"
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "list-group list-group-circle mt-2",
                                        },
                                        _vm._l(
                                          category.articles,
                                          function (article, index) {
                                            return _c(
                                              "router-link",
                                              {
                                                key: index,
                                                staticClass:
                                                  "list-group-item text-body",
                                                attrs: {
                                                  to:
                                                    "/knowledge/articles/" +
                                                    article.slug +
                                                    "/" +
                                                    article.id,
                                                },
                                              },
                                              [_vm._v(_vm._s(article.title))]
                                            )
                                          }
                                        ),
                                        1
                                      ),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          : _vm._e(),
                      ]
                    }),
                  ]
                : _c(
                    "div",
                    { staticClass: "col-12 text-center no-result no-items" },
                    [
                      _c("h4", { staticClass: "mt-4" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("Search result not found!")) +
                            "\n                        "
                        ),
                      ]),
                    ]
                  ),
            ],
            2
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "support-container" }, [
              _c("h2", { staticClass: "support-heading" }, [
                _vm._v(
                  "\n                            " +
                    _vm._s(_vm.$t("Need more Support")) +
                    "?\n                        "
                ),
              ]),
              _vm._v(
                "\n                        " +
                  _vm._s(
                    _vm.$t(
                      "If you cannot find an answer in the knowledgebase, you can"
                    )
                  ) +
                  "\n                        "
              ),
              _c("a", { attrs: { href: "/user/support/ticket" } }, [
                _vm._v(_vm._s(_vm.$t("contact us"))),
              ]),
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.$t("for further help.")) +
                  "\n                    "
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "fb-heading-small" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.$t("Popular Articles")) +
                  "\n                    "
              ),
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "style-three" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "list-group list-group-circle mt-2" },
              _vm._l(_vm.popularArticles, function (article, index) {
                return _c(
                  "router-link",
                  {
                    key: index,
                    staticClass: "list-group-item text-body",
                    attrs: {
                      to:
                        "/knowledge/articles/" +
                        article.slug +
                        "/" +
                        article.id,
                    },
                  },
                  [
                    _vm._v(
                      "\n                            " + _vm._s(article.title)
                    ),
                  ]
                )
              }),
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-text" }, [
      _c("i", { staticClass: "bi bi-search" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX2tub3dsZWRnZV9JbmRleF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJOQSxpRUFBZTtFQUNmQTtFQUNBO0VBQ0FDO0VBRUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBQyw0QkFDQSxzQkFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQSxXQUNBQyx1QkFDQUM7UUFDQSw2Q0FDQTtNQUNBLFdBQ0E7SUFDQTtJQUNBQztNQUNBLGFBQ0FDLDBEQUNBO1FBQ0E7UUFDQSxJQUNBQyx1Q0FDQSxzQkFDQSxtREFDQSxFQUNBO1VBQ0E7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUVBO0VBQ0FDO0lBQ0E7SUFDQUMsNkJBQ0EsT0FDQSwyQ0FDQTtJQUNBQztFQUNBO0VBRUE7RUFDQUM7SUFDQTtFQUNBO0VBRUE7RUFDQUM7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUkQ7QUFDd0o7QUFDN0I7QUFDM0gsOEJBQThCLDRHQUEyQixDQUFDLGlJQUFxQztBQUMvRjtBQUNBLGlGQUFpRiw2QkFBNkIsNkRBQTZELEdBQUcsa0ZBQWtGLHVCQUF1QixHQUFHLDZFQUE2RSxnQ0FBZ0MsR0FBRyxnRUFBZ0Usb0JBQW9CLEdBQUcsOEJBQThCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLEdBQUcsNkJBQTZCLHFFQUFxRSx1QkFBdUIseUJBQXlCLEdBQUcsR0FBRyw2QkFBNkIsa0RBQWtELHdCQUF3QixHQUFHLEdBQUcsdURBQXVELGtEQUFrRCx3QkFBd0IsR0FBRyxHQUFHLFNBQVMsc0dBQXNHLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLHlYQUF5WCxvTUFBb00sbUNBQW1DLDAzR0FBMDNHLCtJQUErSSw4UEFBOFAsaUpBQWlKLCt1Q0FBK3VDLHVJQUF1SSxtckJBQW1yQixtQ0FBbUMsMmJBQTJiLDRCQUE0QixvRUFBb0UsNE1BQTRNLGlFQUFpRSxvRkFBb0YscUNBQXFDLDRCQUE0QixzUUFBc1EsMkJBQTJCLDR1QkFBNHVCLGdCQUFnQix3dENBQXd0QyxnQkFBZ0IsaTZCQUFpNkIsV0FBVywrTkFBK04sMkRBQTJELHdDQUF3QyxrQkFBa0IsMkVBQTJFLE9BQU8sMENBQTBDLG9CQUFvQiwySEFBMkgsV0FBVyw4QkFBOEIsMEdBQTBHLG9KQUFvSixtQkFBbUIsdUNBQXVDLEVBQUUsV0FBVyxxQkFBcUIsbUlBQW1JLHFYQUFxWCw4R0FBOEcsdUJBQXVCLG1CQUFtQixFQUFFLFdBQVcsUUFBUSxpREFBaUQsbUVBQW1FLG1JQUFtSSxxREFBcUQsT0FBTyxpREFBaUQsaUNBQWlDLE9BQU8sc0RBQXNELEtBQUssaURBQWlELDZCQUE2Qiw2REFBNkQsR0FBRyxpRUFBaUUsdUJBQXVCLEdBQUcsOERBQThELGdDQUFnQyxHQUFHLCtDQUErQyxvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIsb0NBQW9DLEdBQUcsK0JBQStCLHdEQUF3RCx1QkFBdUIseUJBQXlCLE9BQU8sR0FBRyw2QkFBNkIscUNBQXFDLHdCQUF3QixPQUFPLEdBQUcsdURBQXVELHFDQUFxQyx3QkFBd0IsT0FBTyxHQUFHLCtCQUErQjtBQUM3N2Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDJEO0FBQ2xHLFlBQXdiOztBQUV4Yjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxpWUFBTzs7OztBQUl4QixpRUFBZSx3WUFBYyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNkQ7QUFDdkM7QUFDTDtBQUNwRCxDQUF5Rjs7O0FBR3pGO0FBQ2dHO0FBQ2hHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3NNLENBQUMsaUVBQWUsME1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBR0F6TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVMsK0JBQStCO0FBQzVELGtCQUFrQixvQkFBb0I7QUFDdEMsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRCwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQyxrQkFBa0IsNENBQTRDO0FBQzlELHdCQUF3QixTQUFTLGlDQUFpQztBQUNsRTtBQUNBO0FBQ0EsY0FBYyx3REFBd0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSw4Q0FBOEMscUJBQXFCO0FBQ25FLGdEQUFnRCwwQkFBMEI7QUFDMUUsaURBQWlELHlCQUF5QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFzRDtBQUM1RTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBNEM7QUFDOUQsb0JBQW9CLHFCQUFxQjtBQUN6QyxzQkFBc0IsMEJBQTBCO0FBQ2hELHdCQUF3QixrQ0FBa0M7QUFDMUQseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxnQ0FBZ0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekMsc0JBQXNCLDBCQUEwQjtBQUNoRCx3QkFBd0IsaUNBQWlDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQWtEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RCxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0luZGV4LnZ1ZT8wMmY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0luZGV4LnZ1ZT9hZjA3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9JbmRleC52dWU/MTlmYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9JbmRleC52dWU/ODEwMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9JbmRleC52dWU/Njg3ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9JbmRleC52dWU/MjhhZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJrbm93bGVkZ2UtYmFzZS1zZWFyY2hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCBrbm93bGVkZ2UtYmFzZS1iZyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2Jhbm5lci9iYW5uZXIucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiRGVkaWNhdGVkIEtub3dsZWRnZSBCYXNlXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwiY2FyZC10ZXh0IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UG9wdWxhciBzZWFyY2hlczogPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cImZ3LWJvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U2FsZXMgYXV0b21hdGlvbiwgRW1haWwgbWFya2V0aW5nPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+IC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrYi1zZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XCJzZWFyY2goKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbWVyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgYSBxdWVzdGlvbi4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0vIEtub3dsZWRnZSBiYXNlIEp1bWJvdHJvbiAtLT5cblxuICAgICAgICA8IS0tIEtub3dsZWRnZSBiYXNlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTkgY29sLW1kLTggY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJrbm93bGVkZ2UtYmFzZS1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGtiLXNlYXJjaC1jb250ZW50LWluZm8gbWF0Y2gtaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImNhdGVnb3JpZXMgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihjYXRlZ29yeSwgaW5kZXgpIGluIGNhdGVnb3JpZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjYXRlZ29yeS5hcnRpY2xlc19jb3VudCAhPSAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtbWQtNCBjb2wtc20tNiBjb2wtMTIga2Itc2VhcmNoLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBhY2NvdW50IHNldHRpbmcgY2FyZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGFjY291bnQgc2V0dGluZyBoZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJrYi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmkgYmktYm9vayBmb250LW1lZGl1bS00IG1lLTUwIHRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG89XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2tub3dsZWRnZS9jYXRlZ29yaWVzLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3JvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPih7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuYXJ0aWNsZXNfY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWNpcmNsZSBtdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLCBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIGluIGNhdGVnb3J5LmFydGljbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2tub3dsZWRnZS9hcnRpY2xlcy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuc2x1ZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3JvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIG5vIHJlc3VsdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBuby1yZXN1bHQgbm8taXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJTZWFyY2ggcmVzdWx0IG5vdCBmb3VuZCFcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cHBvcnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic3VwcG9ydC1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiTmVlZCBtb3JlIFN1cHBvcnRcIikgfX0/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSWYgeW91IGNhbm5vdCBmaW5kIGFuIGFuc3dlciBpbiB0aGUga25vd2xlZGdlYmFzZSwgeW91IGNhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdXNlci9zdXBwb3J0L3RpY2tldFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFwiY29udGFjdCB1c1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiZm9yIGZ1cnRoZXIgaGVscC5cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYi1oZWFkaW5nLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJQb3B1bGFyIEFydGljbGVzXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInN0eWxlLXRocmVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtY2lyY2xlIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoYXJ0aWNsZSwgaW5kZXgpIGluIHBvcHVsYXJBcnRpY2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy9rbm93bGVkZ2UvYXJ0aWNsZXMvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gdGV4dC1ib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGFydGljbGUudGl0bGUgfX08L3JvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmItaGVhZGluZy1zbWFsbFwiPkxhdGVzdCBBcnRpY2xlczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic3R5bGUtdGhyZWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdC1jb250ZW50LXNtYWxsIHBhZGRpbmctbGVmdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhcnRpY2xlLCBpbmRleCkgaW4gbGF0ZXN0QXJ0aWNsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcva25vd2xlZGdlL2FydGljbGVzLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWZpbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXJ0aWNsZS50aXRsZSB9fTwvcm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZiLWhlYWRpbmctc21hbGxcIj5Qb3B1bGFyIFRhZ3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInN0eWxlLXRocmVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXQtY29udGVudC10YWdzIHBhZGRpbmctbGVmdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIih0YWcsIGluZGV4KSBpbiBwb3B1bGFyVGFnc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy9rbm93bGVkZ2UvdGFnLycgKyB0YWcuc2x1ZyArICcvJyArIHRhZy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbyBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgdGFnLm5hbWUgfX08L3JvdXRlci1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFtdLFxuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge30sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgICAgIHBvcHVsYXJBcnRpY2xlczogW10sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIGN1c3RvbSBtZXRob2RzXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnb0JhY2soKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoQ2F0ZWdvcmllcygpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL3VzZXIva25vd2xlZGdlXCIpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhLmNhdGVnb3JpZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucG9wdWxhckFydGljbGVzID0gcmVzcG9uc2UuZGF0YS5wb3B1bGFyQXJ0aWNsZXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xuICAgICAgICB9LFxuICAgICAgICBzZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXJcbiAgICAgICAgICAgICAgICAucHVzaChcIi9rbm93bGVkZ2UvZmFxL1wiICsgdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoZSB2dWV4IGVyciByZWdhcmRpbmcgIG5hdmlnYXRpbmcgdG8gdGhlIHBhZ2UgdGhleSBhcmUgYWxyZWFkeSBvbi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm5hbWUgIT09IFwiTmF2aWdhdGlvbkR1cGxpY2F0ZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWVyci5tZXNzYWdlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbiB0byBjdXJyZW50IGxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgcHJpbnQgYW55IG90aGVyIGVycm9ycyB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGxldCByZWNhcHRjaGFTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICByZWNhcHRjaGFTY3JpcHQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiL2pzL3NjcmlwdHMvcGFnZXMvcGFnZS1rbm93bGVkZ2UtYmFzZS5qc1wiXG4gICAgICAgICk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocmVjYXB0Y2hhU2NyaXB0KTtcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoQ2F0ZWdvcmllcygpO1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLmtub3dsZWRnZS1iYXNlLWJnIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcbn1cbi5rbm93bGVkZ2UtYmFzZS1iZyAua2Itc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cDpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5rYi1zZWFyY2gtY29udGVudC1pbmZvIC5rYi1zZWFyY2gtY29udGVudCAuY2FyZC1pbWctdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuLmtiLXNlYXJjaC1jb250ZW50LWluZm8gLm5vLXJlc3VsdC5uby1pdGVtcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmtiLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5rbm93bGVkZ2UtYmFzZS1iZyAua2Itc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cCB7XG4gICAgICAgIHdpZHRoOiA1NzZweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmtub3dsZWRnZS1iYXNlLWJnIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA4cmVtO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLmtub3dsZWRnZS1iYXNlLWJnIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA2cmVtO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmtub3dsZWRnZS1iYXNlLWJnW2RhdGEtdi0xOWY5MThmYV0ge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XFxufVxcbi5rbm93bGVkZ2UtYmFzZS1iZyAua2Itc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cFtkYXRhLXYtMTlmOTE4ZmFdOmZvY3VzLXdpdGhpbiB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5rYi1zZWFyY2gtY29udGVudC1pbmZvIC5rYi1zZWFyY2gtY29udGVudCAuY2FyZC1pbWctdG9wW2RhdGEtdi0xOWY5MThmYV0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xcbn1cXG4ua2Itc2VhcmNoLWNvbnRlbnQtaW5mbyAubm8tcmVzdWx0Lm5vLWl0ZW1zW2RhdGEtdi0xOWY5MThmYV0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ua2ItdGl0bGVbZGF0YS12LTE5ZjkxOGZhXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4ua25vd2xlZGdlLWJhc2UtYmcgLmtiLXNlYXJjaC1pbnB1dCAuaW5wdXQtZ3JvdXBbZGF0YS12LTE5ZjkxOGZhXSB7XFxuICAgICAgICB3aWR0aDogNTc2cHg7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbi5rbm93bGVkZ2UtYmFzZS1iZyAuY2FyZC1ib2R5W2RhdGEtdi0xOWY5MThmYV0ge1xcbiAgICAgICAgcGFkZGluZzogOHJlbTtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuLmtub3dsZWRnZS1iYXNlLWJnIC5jYXJkLWJvZHlbZGF0YS12LTE5ZjkxOGZhXSB7XFxuICAgICAgICBwYWRkaW5nOiA2cmVtO1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvSW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4UkE7SUFDQSxzQkFBQTtJQUNBLHNEQUFBO0FBQ0E7QUFDQTtJQUNBLGdCQUFBO0FBQ0E7QUFFQTtJQUNBLHlCQUFBO0FBQ0E7QUFDQTtJQUNBLGFBQUE7QUFDQTtBQUVBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7QUFDQTtBQUVBO0FBQ0E7UUFDQSxZQUFBO1FBQ0EsY0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ0EsYUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ0EsYUFBQTtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHNlY3Rpb24gaWQ9XFxcImtub3dsZWRnZS1iYXNlLXNlYXJjaFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FyZCBrbm93bGVkZ2UtYmFzZS1iZyB0ZXh0LWNlbnRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2Jhbm5lci9iYW5uZXIucG5nJyk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJEZWRpY2F0ZWQgS25vd2xlZGdlIEJhc2VcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVxcXCJjYXJkLXRleHQgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Qb3B1bGFyIHNlYXJjaGVzOiA8L3NwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cXFwiZnctYm9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TYWxlcyBhdXRvbWF0aW9uLCBFbWFpbCBtYXJrZXRpbmc8L3NwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiAtLT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJrYi1zZWFyY2gtaW5wdXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XFxcInNlYXJjaCgpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1tZXJnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJiaSBiaS1zZWFyY2hcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkFzayBhIHF1ZXN0aW9uLi4uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgIDwhLS0vIEtub3dsZWRnZSBiYXNlIEp1bWJvdHJvbiAtLT5cXG5cXG4gICAgICAgIDwhLS0gS25vd2xlZGdlIGJhc2UgLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy05IGNvbC1tZC04IGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVxcXCJrbm93bGVkZ2UtYmFzZS1jYXRlZ29yeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cga2Itc2VhcmNoLWNvbnRlbnQtaW5mbyBtYXRjaC1oZWlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJjYXRlZ29yaWVzICE9IG51bGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XFxcIihjYXRlZ29yeSwgaW5kZXgpIGluIGNhdGVnb3JpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcImNhdGVnb3J5LmFydGljbGVzX2NvdW50ICE9IDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMiBrYi1zZWFyY2gtY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGFjY291bnQgc2V0dGluZyBjYXJkIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBhY2NvdW50IHNldHRpbmcgaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cXFwia2ItdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJpIGJpLWJvb2sgZm9udC1tZWRpdW0tNCBtZS01MCB0ZXh0LXByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy9rbm93bGVkZ2UvY2F0ZWdvcmllcy8nICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuc2x1ZyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvJyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmlkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gdGV4dC1ib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5uYW1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3JvdXRlci1saW5rXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4oe3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5hcnRpY2xlc19jb3VudFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pPC9zcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1jaXJjbGUgbXQtMlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLCBpbmRleFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBpbiBjYXRlZ29yeS5hcnRpY2xlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2tub3dsZWRnZS9hcnRpY2xlcy8nICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnNsdWcgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcvJyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnRpdGxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvcm91dGVyLWxpbmtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gbm8gcmVzdWx0IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbC0xMiB0ZXh0LWNlbnRlciBuby1yZXN1bHQgbm8taXRlbXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJtdC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJTZWFyY2ggcmVzdWx0IG5vdCBmb3VuZCFcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtc20tMTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VwcG9ydC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1cHBvcnQtaGVhZGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiTmVlZCBtb3JlIFN1cHBvcnRcXFwiKSB9fT9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJJZiB5b3UgY2Fubm90IGZpbmQgYW4gYW5zd2VyIGluIHRoZSBrbm93bGVkZ2ViYXNlLCB5b3UgY2FuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIvdXNlci9zdXBwb3J0L3RpY2tldFxcXCI+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFxcXCJjb250YWN0IHVzXFxcIilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJmb3IgZnVydGhlciBoZWxwLlxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYi1oZWFkaW5nLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIlBvcHVsYXIgQXJ0aWNsZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cXFwic3R5bGUtdGhyZWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWNpcmNsZSBtdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGFydGljbGUsIGluZGV4KSBpbiBwb3B1bGFyQXJ0aWNsZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy9rbm93bGVkZ2UvYXJ0aWNsZXMvJyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5zbHVnICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLycgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuaWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gdGV4dC1ib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhcnRpY2xlLnRpdGxlIH19PC9yb3V0ZXItbGlua1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZiLWhlYWRpbmctc21hbGxcXFwiPkxhdGVzdCBBcnRpY2xlczwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cXFwic3R5bGUtdGhyZWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmF0LWNvbnRlbnQtc21hbGwgcGFkZGluZy1sZWZ0LTEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihhcnRpY2xlLCBpbmRleCkgaW4gbGF0ZXN0QXJ0aWNsZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0bz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2tub3dsZWRnZS9hcnRpY2xlcy8nICtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFydGljbGUuc2x1ZyArXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLycgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pZFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gdGV4dC1ib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XFxcImJpIGJpLWZpbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYXJ0aWNsZS50aXRsZSB9fTwvcm91dGVyLWxpbmtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmItaGVhZGluZy1zbWFsbFxcXCI+UG9wdWxhciBUYWdzPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVxcXCJzdHlsZS10aHJlZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmYXQtY29udGVudC10YWdzIHBhZGRpbmctbGVmdC0xMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGlua1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIih0YWcsIGluZGV4KSBpbiBwb3B1bGFyVGFnc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnL2tub3dsZWRnZS90YWcvJyArIHRhZy5zbHVnICsgJy8nICsgdGFnLmlkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1vIGJ0bi1zbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyB0YWcubmFtZSB9fTwvcm91dGVyLWxpbmtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczogW10sXFxuICAgIC8vIGNvbXBvbmVudCBsaXN0XFxuICAgIGNvbXBvbmVudHM6IHt9LFxcblxcbiAgICAvLyBjb21wb25lbnQgZGF0YVxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcXG4gICAgICAgICAgICBwb3B1bGFyQXJ0aWNsZXM6IFtdLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgLy8gY3VzdG9tIG1ldGhvZHNcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZ29CYWNrKCkge1xcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXFxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXFxcIi9cXFwiKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKSB7XFxuICAgICAgICAgICAgdGhpcy4kaHR0cFxcbiAgICAgICAgICAgICAgICAuZ2V0KFxcXCIvdXNlci9rbm93bGVkZ2VcXFwiKVxcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhLmNhdGVnb3JpZXMpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnBvcHVsYXJBcnRpY2xlcyA9IHJlc3BvbnNlLmRhdGEucG9wdWxhckFydGljbGVzKTtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNlYXJjaCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXJcXG4gICAgICAgICAgICAgICAgLnB1c2goXFxcIi9rbm93bGVkZ2UvZmFxL1xcXCIgKyB0aGlzLiRyZWZzLnNlYXJjaC52YWx1ZSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgdnVleCBlcnIgcmVnYXJkaW5nICBuYXZpZ2F0aW5nIHRvIHRoZSBwYWdlIHRoZXkgYXJlIGFscmVhZHkgb24uXFxuICAgICAgICAgICAgICAgICAgICBpZiAoXFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm5hbWUgIT09IFxcXCJOYXZpZ2F0aW9uRHVwbGljYXRlZFxcXCIgJiZcXG4gICAgICAgICAgICAgICAgICAgICAgICAhZXJyLm1lc3NhZ2UuaW5jbHVkZXMoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJBdm9pZGVkIHJlZHVuZGFudCBuYXZpZ2F0aW9uIHRvIGN1cnJlbnQgbG9jYXRpb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgICAgICAgICAgKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IHByaW50IGFueSBvdGhlciBlcnJvcnMgdG8gdGhlIGNvbnNvbGVcXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dFcnJvcihlcnIpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIC8vIG9uIGNvbXBvbmVudCBjcmVhdGVkXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICBsZXQgcmVjYXB0Y2hhU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcXFwic2NyaXB0XFxcIik7XFxuICAgICAgICByZWNhcHRjaGFTY3JpcHQuc2V0QXR0cmlidXRlKFxcbiAgICAgICAgICAgIFxcXCJzcmNcXFwiLFxcbiAgICAgICAgICAgIFxcXCIvanMvc2NyaXB0cy9wYWdlcy9wYWdlLWtub3dsZWRnZS1iYXNlLmpzXFxcIlxcbiAgICAgICAgKTtcXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocmVjYXB0Y2hhU2NyaXB0KTtcXG4gICAgfSxcXG5cXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIHRoaXMuZmV0Y2hDYXRlZ29yaWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIC8vIG9uIGNvbXBvbmVudCBkZXN0cm95ZWRcXG4gICAgZGVzdHJveWVkKCkge30sXFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbi5rbm93bGVkZ2UtYmFzZS1iZyB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcXG59XFxuLmtub3dsZWRnZS1iYXNlLWJnIC5rYi1zZWFyY2gtaW5wdXQgLmlucHV0LWdyb3VwOmZvY3VzLXdpdGhpbiB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5rYi1zZWFyY2gtY29udGVudC1pbmZvIC5rYi1zZWFyY2gtY29udGVudCAuY2FyZC1pbWctdG9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcXG59XFxuLmtiLXNlYXJjaC1jb250ZW50LWluZm8gLm5vLXJlc3VsdC5uby1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5rYi10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmtub3dsZWRnZS1iYXNlLWJnIC5rYi1zZWFyY2gtaW5wdXQgLmlucHV0LWdyb3VwIHtcXG4gICAgICAgIHdpZHRoOiA1NzZweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAua25vd2xlZGdlLWJhc2UtYmcgLmNhcmQtYm9keSB7XFxuICAgICAgICBwYWRkaW5nOiA4cmVtO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuICAgIC5rbm93bGVkZ2UtYmFzZS1iZyAuY2FyZC1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDZyZW07XFxuICAgIH1cXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5ZjkxOGZhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5ZjkxOGZhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5ZjkxOGZhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOWY5MThmYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2h5cWZpbi9wdWJsaWNfaHRtbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOWY5MThmYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOWY5MThmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOWY5MThmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5ZjkxOGZhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5ZjkxOGZhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjVbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjVbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTlmOTE4ZmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5ZjkxOGZhJnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IGF0dHJzOiB7IGlkOiBcImtub3dsZWRnZS1iYXNlLXNlYXJjaFwiIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBrbm93bGVkZ2UtYmFzZS1iZyB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybCgnaW1hZ2VzL2Jhbm5lci9iYW5uZXIucG5nJylcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRGVkaWNhdGVkIEtub3dsZWRnZSBCYXNlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImtiLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoKClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLW1lcmdlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQXNrIGEgcXVlc3Rpb24uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IGNvbC1tZC04IGNvbC1zbS0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgYXR0cnM6IHsgaWQ6IFwia25vd2xlZGdlLWJhc2UtY2F0ZWdvcnlcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBrYi1zZWFyY2gtY29udGVudC1pbmZvIG1hdGNoLWhlaWdodFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5jYXRlZ29yaWVzICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoY2F0ZWdvcnksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFydGljbGVzX2NvdW50ICE9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbC1tZC00IGNvbC1zbS02IGNvbC0xMiBrYi1zZWFyY2gtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJrYi10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmkgYmktYm9vayBmb250LW1lZGl1bS00IG1lLTUwIHRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2tub3dsZWRnZS9jYXRlZ29yaWVzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5zbHVnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjYXRlZ29yeS5hcnRpY2xlc19jb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtY2lyY2xlIG10LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmFydGljbGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGFydGljbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2tub3dsZWRnZS9hcnRpY2xlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5zbHVnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhcnRpY2xlLnRpdGxlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyIG5vLXJlc3VsdCBuby1pdGVtc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJTZWFyY2ggcmVzdWx0IG5vdCBmb3VuZCFcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cHBvcnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwcG9ydC1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIk5lZWQgbW9yZSBTdXBwb3J0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgIFwiP1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFxuICAgICAgICAgICAgICAgICAgICAgIFwiSWYgeW91IGNhbm5vdCBmaW5kIGFuIGFuc3dlciBpbiB0aGUga25vd2xlZGdlYmFzZSwgeW91IGNhblwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi91c2VyL3N1cHBvcnQvdGlja2V0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJjb250YWN0IHVzXCIpKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZm9yIGZ1cnRoZXIgaGVscC5cIikpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZiLWhlYWRpbmctc21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJQb3B1bGFyIEFydGljbGVzXCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJzdHlsZS10aHJlZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1jaXJjbGUgbXQtMlwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ucG9wdWxhckFydGljbGVzLCBmdW5jdGlvbiAoYXJ0aWNsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSB0ZXh0LWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL2tub3dsZWRnZS9hcnRpY2xlcy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlLnNsdWcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhhcnRpY2xlLnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmkgYmktc2VhcmNoXCIgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbInByb3BzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjYXRlZ29yaWVzIiwicG9wdWxhckFydGljbGVzIiwibWV0aG9kcyIsImdvQmFjayIsIndpbmRvdyIsImZldGNoQ2F0ZWdvcmllcyIsImdldCIsInRoZW4iLCJzZWFyY2giLCJwdXNoIiwiZXJyIiwibG9nRXJyb3IiLCJjcmVhdGVkIiwicmVjYXB0Y2hhU2NyaXB0IiwiZG9jdW1lbnQiLCJtb3VudGVkIiwiZGVzdHJveWVkIl0sInNvdXJjZVJvb3QiOiIifQ==