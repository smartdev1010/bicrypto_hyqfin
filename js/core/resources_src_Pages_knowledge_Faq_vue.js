"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_knowledge_Faq_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  // component list
  components: {},
  // component data
  data: function data() {
    return {
      categories: []
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchCategories: function fetchCategories() {
      var _this = this;
      this.$http.get("/user/knowledge/faq").then(function (response) {
        _this.categories = response.data.categories;
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
  created: function created() {},
  // on component mounted
  mounted: function mounted() {
    this.fetchCategories();
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.faq-search[data-v-222a8607] {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.faq-search .faq-search-input .input-group[data-v-222a8607]:focus-within {\n    box-shadow: none;\n}\n.faq-contact .faq-contact-card[data-v-222a8607] {\n    background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n.faq-search .card-body[data-v-222a8607] {\n        padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n.faq-search .card-body[data-v-222a8607] {\n        padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group[data-v-222a8607] {\n        width: 576px;\n        margin: 0 auto;\n}\n.faq-navigation[data-v-222a8607] {\n        height: 550px;\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/src/Pages/knowledge/Faq.vue"],"names":[],"mappings":";AAgPA;IACA,sBAAA;IACA,sDAAA;AACA;AACA;IACA,gBAAA;AACA;AAEA;IACA,2CAAA;AACA;AAEA;AACA;QACA,wBAAA;AACA;AACA;AACA;AACA;QACA,wBAAA;AACA;AACA;AACA;AACA;QACA,YAAA;QACA,cAAA;AACA;AACA;QACA,aAAA;AACA;AACA","sourcesContent":["<template>\n    <div>\n        <section id=\"faq-search-filter\">\n            <div\n                class=\"card faq-search\"\n                style=\"background-image: url('images/banner/banner.png')\"\n            >\n                <div class=\"card-body text-center\">\n                    <!-- main title -->\n                    <h2 class=\"text-primary\">\n                        {{ $t(\"Let's answer some questions\") }}\n                    </h2>\n\n                    <!-- subtitle -->\n                    <p class=\"card-text mb-2\">\n                        {{\n                            $t(\n                                \"or choose a category to quickly find the help you need\"\n                            )\n                        }}\n                    </p>\n\n                    <!-- search input -->\n                    <form class=\"faq-search-input\" @submit.prevent=\"search()\">\n                        <div class=\"input-group input-group-merge\">\n                            <div class=\"input-group-text\">\n                                <i class=\"bi bi-search\"></i>\n                            </div>\n                            <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                placeholder=\"Search faq...\"\n                                ref=\"search\"\n                            />\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </section>\n        <!--/ Knowledge base Jumbotron -->\n\n        <!-- Knowledge base -->\n        <section id=\"faq-tabs\">\n            <!-- vertical tab pill -->\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-4 col-sm-12\">\n                    <div\n                        class=\"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0\"\n                    >\n                        <!-- pill tabs navigation -->\n                        <ul\n                            class=\"nav nav-pills nav-left flex-column\"\n                            role=\"tablist\"\n                        >\n                            <!-- payment -->\n                            <li\n                                class=\"nav-item\"\n                                v-for=\"(faqs, index) in categories\"\n                                :key=\"index\"\n                            >\n                                <a\n                                    class=\"nav-link\"\n                                    :class=\"faqs.id == 1 ? 'active' : ''\"\n                                    :id=\"faqs.id\"\n                                    data-bs-toggle=\"pill\"\n                                    :href=\"'#faq-category-' + faqs.id\"\n                                    aria-expanded=\"true\"\n                                    role=\"tab\"\n                                >\n                                    <i\n                                        data-feather=\"credit-card\"\n                                        class=\"font-medium-3 me-1\"\n                                    ></i>\n                                    <span class=\"fw-bold\">{{\n                                        faqs.category\n                                    }}</span>\n                                </a>\n                            </li>\n                        </ul>\n\n                        <!-- FAQ image -->\n                        <img\n                            src=\"images/illustration/faq-illustrations.svg\"\n                            class=\"img-fluid d-none d-md-block\"\n                            alt=\"demand img\"\n                        />\n                    </div>\n                </div>\n\n                <div class=\"col-lg-9 col-md-8 col-sm-12\">\n                    <!-- pill tabs tab content -->\n                    <div class=\"tab-content\">\n                        <div\n                            v-for=\"(faqs, index) in categories\"\n                            :key=\"index\"\n                            class=\"tab-pane\"\n                            :class=\"faqs.id == 1 ? 'active' : ''\"\n                            :id=\"'faq-category-' + faqs.id\"\n                            role=\"tabpanel\"\n                            :aria-labelledby=\"faqs.category\"\n                            aria-expanded=\"false\"\n                        >\n                            <!-- icon and header -->\n                            <div class=\"d-flex align-items-center\">\n                                <div\n                                    class=\"avatar avatar-tag bg-light-primary me-1\"\n                                >\n                                    <i class=\"font-medium-4 bi bi-info-lg\"></i>\n                                </div>\n                                <div>\n                                    <h4 class=\"mb-0\">{{ faqs.category }}</h4>\n                                </div>\n                            </div>\n\n                            <!-- frequent answer and question  collapse  -->\n                            <div\n                                v-for=\"(faq, indexx) in faqs.faq_questions\"\n                                :key=\"indexx\"\n                                class=\"accordion accordion-margin mt-2\"\n                                :id=\"'#faq-question-' + faq.id\"\n                            >\n                                <div class=\"card accordion-item\">\n                                    <h2\n                                        class=\"accordion-header\"\n                                        :id=\"faq.category_id + faq.id\"\n                                    >\n                                        <button\n                                            class=\"accordion-button collapsed\"\n                                            data-bs-toggle=\"collapse\"\n                                            role=\"button\"\n                                            :data-bs-target=\"\n                                                '#faq-question-' + faq.id\n                                            \"\n                                            :aria-controls=\"\n                                                '#faq-question-' + faq.id\n                                            \"\n                                            aria-expanded=\"false\"\n                                        >\n                                            {{ faq.question }}\n                                        </button>\n                                    </h2>\n\n                                    <div\n                                        :id=\"'faq-question-' + faq.id\"\n                                        class=\"collapse accordion-collapse\"\n                                        :aria-labelledby=\"\n                                            faq.category_id + faq.id\n                                        \"\n                                        :data-bs-parent=\"'#faq' + faq.id\"\n                                    >\n                                        <div class=\"accordion-body text-dark\">\n                                            {{ faq.answer }}\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- / frequently asked questions tabs pills -->\n\n        <!-- contact us -->\n        <section class=\"faq-contact\">\n            <div class=\"row mt-5 pt-75\">\n                <div class=\"col-12 text-center\">\n                    <h2>{{ $t(\"You still have a question\") }}?</h2>\n                    <p class=\"mb-3\">\n                        {{\n                            $t(\n                                \"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!\"\n                            )\n                        }}\n                    </p>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n\n<script>\nexport default {\n    props: [],\n    // component list\n    components: {},\n\n    // component data\n    data() {\n        return {\n            categories: [],\n        };\n    },\n\n    // custom methods\n    methods: {\n        goBack() {\n            window.history.length > 1\n                ? this.$router.go(-1)\n                : this.$router.push(\"/\");\n        },\n        fetchCategories() {\n            this.$http\n                .get(\"/user/knowledge/faq\")\n                .then((response) => {\n                    this.categories = response.data.categories;\n                })\n                .catch((error) => {});\n        },\n        search() {\n            this.$router\n                .push(\"/knowledge/faq/\" + this.$refs.search.value)\n                .catch((err) => {\n                    // Ignore the vuex err regarding  navigating to the page they are already on.\n                    if (\n                        err.name !== \"NavigationDuplicated\" &&\n                        !err.message.includes(\n                            \"Avoided redundant navigation to current location\"\n                        )\n                    ) {\n                        // But print any other errors to the console\n                        logError(err);\n                    }\n                });\n        },\n    },\n\n    // on component created\n    created() {},\n\n    // on component mounted\n    mounted() {\n        this.fetchCategories();\n    },\n\n    // on component destroyed\n    destroyed() {},\n};\n</script>\n<style scoped>\n.faq-search {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.faq-search .faq-search-input .input-group:focus-within {\n    box-shadow: none;\n}\n\n.faq-contact .faq-contact-card {\n    background-color: rgba(186, 191, 199, 0.12);\n}\n\n@media (min-width: 992px) {\n    .faq-search .card-body {\n        padding: 8rem !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n    .faq-search .card-body {\n        padding: 6rem !important;\n    }\n}\n@media (min-width: 768px) {\n    .faq-search .faq-search-input .input-group {\n        width: 576px;\n        margin: 0 auto;\n    }\n    .faq-navigation {\n        height: 550px;\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_222a8607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_222a8607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_222a8607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/Pages/knowledge/Faq.vue":
/*!***********************************************!*\
  !*** ./resources/src/Pages/knowledge/Faq.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=222a8607&scoped=true& */ "./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js&");
/* harmony import */ var _Faq_vue_vue_type_style_index_0_id_222a8607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& */ "./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "222a8607",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/knowledge/Faq.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_style_index_0_id_222a8607_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=style&index=0&id=222a8607&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_222a8607_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Faq.vue?vue&type=template&id=222a8607&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/Faq.vue?vue&type=template&id=222a8607&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("section", { attrs: { id: "faq-search-filter" } }, [
      _c(
        "div",
        {
          staticClass: "card faq-search",
          staticStyle: {
            "background-image": "url('images/banner/banner.png')",
          },
        },
        [
          _c("div", { staticClass: "card-body text-center" }, [
            _c("h2", { staticClass: "text-primary" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("Let's answer some questions")) +
                  "\n                "
              ),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "card-text mb-2" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(
                    _vm.$t(
                      "or choose a category to quickly find the help you need"
                    )
                  ) +
                  "\n                "
              ),
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "faq-search-input",
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.search()
                  },
                },
              },
              [
                _c("div", { staticClass: "input-group input-group-merge" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("input", {
                    ref: "search",
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Search faq..." },
                  }),
                ]),
              ]
            ),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("section", { attrs: { id: "faq-tabs" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-12" }, [
          _c(
            "div",
            {
              staticClass:
                "faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",
            },
            [
              _c(
                "ul",
                {
                  staticClass: "nav nav-pills nav-left flex-column",
                  attrs: { role: "tablist" },
                },
                _vm._l(_vm.categories, function (faqs, index) {
                  return _c("li", { key: index, staticClass: "nav-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link",
                        class: faqs.id == 1 ? "active" : "",
                        attrs: {
                          id: faqs.id,
                          "data-bs-toggle": "pill",
                          href: "#faq-category-" + faqs.id,
                          "aria-expanded": "true",
                          role: "tab",
                        },
                      },
                      [
                        _c("i", {
                          staticClass: "font-medium-3 me-1",
                          attrs: { "data-feather": "credit-card" },
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "fw-bold" }, [
                          _vm._v(_vm._s(faqs.category)),
                        ]),
                      ]
                    ),
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "img-fluid d-none d-md-block",
                attrs: {
                  src: "images/illustration/faq-illustrations.svg",
                  alt: "demand img",
                },
              }),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-9 col-md-8 col-sm-12" }, [
          _c(
            "div",
            { staticClass: "tab-content" },
            _vm._l(_vm.categories, function (faqs, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "tab-pane",
                  class: faqs.id == 1 ? "active" : "",
                  attrs: {
                    id: "faq-category-" + faqs.id,
                    role: "tabpanel",
                    "aria-labelledby": faqs.category,
                    "aria-expanded": "false",
                  },
                },
                [
                  _c("div", { staticClass: "d-flex align-items-center" }, [
                    _vm._m(1, true),
                    _vm._v(" "),
                    _c("div", [
                      _c("h4", { staticClass: "mb-0" }, [
                        _vm._v(_vm._s(faqs.category)),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._l(faqs.faq_questions, function (faq, indexx) {
                    return _c(
                      "div",
                      {
                        key: indexx,
                        staticClass: "accordion accordion-margin mt-2",
                        attrs: { id: "#faq-question-" + faq.id },
                      },
                      [
                        _c("div", { staticClass: "card accordion-item" }, [
                          _c(
                            "h2",
                            {
                              staticClass: "accordion-header",
                              attrs: { id: faq.category_id + faq.id },
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "accordion-button collapsed",
                                  attrs: {
                                    "data-bs-toggle": "collapse",
                                    role: "button",
                                    "data-bs-target": "#faq-question-" + faq.id,
                                    "aria-controls": "#faq-question-" + faq.id,
                                    "aria-expanded": "false",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(faq.question) +
                                      "\n                                    "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "collapse accordion-collapse",
                              attrs: {
                                id: "faq-question-" + faq.id,
                                "aria-labelledby": faq.category_id + faq.id,
                                "data-bs-parent": "#faq" + faq.id,
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "accordion-body text-dark" },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(faq.answer) +
                                      "\n                                    "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    )
                  }),
                ],
                2
              )
            }),
            0
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "faq-contact" }, [
      _c("div", { staticClass: "row mt-5 pt-75" }, [
        _c("div", { staticClass: "col-12 text-center" }, [
          _c("h2", [_vm._v(_vm._s(_vm.$t("You still have a question")) + "?")]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-3" }, [
            _vm._v(
              "\n                    " +
                _vm._s(
                  _vm.$t(
                    "If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"
                  )
                ) +
                "\n                "
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "avatar avatar-tag bg-light-primary me-1" },
      [_c("i", { staticClass: "font-medium-4 bi bi-info-lg" })]
    )
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX2tub3dsZWRnZV9GYXFfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNMQSxpRUFBZTtFQUNmQTtFQUNBO0VBQ0FDO0VBRUE7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBQyw0QkFDQSxzQkFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQSxXQUNBQywyQkFDQUM7UUFDQTtNQUNBLFdBQ0E7SUFDQTtJQUNBQztNQUNBLGFBQ0FDLDBEQUNBO1FBQ0E7UUFDQSxJQUNBQyx1Q0FDQSxzQkFDQSxtREFDQSxFQUNBO1VBQ0E7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7RUFDQTtFQUVBO0VBQ0FDO0VBRUE7RUFDQUM7SUFDQTtFQUNBO0VBRUE7RUFDQUM7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3T0Q7QUFDd0o7QUFDN0I7QUFDM0gsOEJBQThCLDRHQUEyQixDQUFDLGlJQUFxQztBQUMvRjtBQUNBLDBFQUEwRSw2QkFBNkIsNkRBQTZELEdBQUcsNEVBQTRFLHVCQUF1QixHQUFHLG1EQUFtRCxrREFBa0QsR0FBRyw2QkFBNkIsMkNBQTJDLG1DQUFtQyxHQUFHLEdBQUcsdURBQXVELDJDQUEyQyxtQ0FBbUMsR0FBRyxHQUFHLDZCQUE2QiwrREFBK0QsdUJBQXVCLHlCQUF5QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxHQUFHLFNBQVMsb0dBQW9HLE1BQU0sV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssaWFBQWlhLHNDQUFzQyxrSkFBa0osd0xBQXdMLG04RUFBbThFLCtGQUErRiw0bURBQTRtRCxnQkFBZ0Isa2pEQUFrakQsZUFBZSx5c0JBQXlzQixhQUFhLG1pQkFBbWlCLG9DQUFvQywwRUFBMEUscU9BQXFPLGlKQUFpSiwyREFBMkQsd0NBQXdDLGtCQUFrQix5Q0FBeUMsT0FBTywwQ0FBMEMsb0JBQW9CLDJIQUEySCxXQUFXLDhCQUE4Qiw4R0FBOEcsaUVBQWlFLG1CQUFtQix1Q0FBdUMsRUFBRSxXQUFXLHFCQUFxQixtSUFBbUkscVhBQXFYLDhHQUE4Ryx1QkFBdUIsbUJBQW1CLEVBQUUsV0FBVyxRQUFRLGtEQUFrRCxpREFBaUQsaUNBQWlDLE9BQU8sc0RBQXNELEtBQUssMENBQTBDLDZCQUE2Qiw2REFBNkQsR0FBRywyREFBMkQsdUJBQXVCLEdBQUcsb0NBQW9DLGtEQUFrRCxHQUFHLCtCQUErQiw4QkFBOEIsbUNBQW1DLE9BQU8sR0FBRyx1REFBdUQsOEJBQThCLG1DQUFtQyxPQUFPLEdBQUcsNkJBQTZCLGtEQUFrRCx1QkFBdUIseUJBQXlCLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLEdBQUcsK0JBQStCO0FBQ3hqWDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkQ7QUFDbEcsWUFBc2I7O0FBRXRiOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLCtYQUFPOzs7O0FBSXhCLGlFQUFlLHNZQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1oyRDtBQUN2QztBQUNMO0FBQ2xELENBQXVGOzs7QUFHdkY7QUFDZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDb00sQ0FBQyxpRUFBZSx3TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQXZPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUywyQkFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBLDRCQUE0Qiw4Q0FBOEM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBNEM7QUFDekUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxrQkFBa0I7QUFDL0Msa0JBQWtCLG9CQUFvQjtBQUN0QyxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsaUJBQWlCO0FBQ2pCO0FBQ0Esb0NBQW9DLHFDQUFxQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFLHlCQUF5QjtBQUN6QjtBQUNBLHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBNEM7QUFDaEU7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQSw4QkFBOEIsMENBQTBDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywrQkFBK0I7QUFDaEUsdUJBQXVCO0FBQ3ZCO0FBQ0Esb0NBQW9DLG9DQUFvQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEI7QUFDckUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQXlDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hELGtCQUFrQiwrQkFBK0I7QUFDakQsb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RCxnQkFBZ0IsNkJBQTZCO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQXdEO0FBQ2hFLGlCQUFpQiw0Q0FBNEM7QUFDN0Q7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcS52dWU/OGMwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXEudnVlPzc4ODIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXEudnVlPzljNTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxLnZ1ZT9jNjUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcS52dWU/MzRjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXEudnVlPzhkODMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiZmFxLXNlYXJjaC1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQgZmFxLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9iYW5uZXIvYmFubmVyLnBuZycpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbWFpbiB0aXRsZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkxldCdzIGFuc3dlciBzb21lIHF1ZXN0aW9uc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc3VidGl0bGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0IG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3IgY2hvb3NlIGEgY2F0ZWdvcnkgdG8gcXVpY2tseSBmaW5kIHRoZSBoZWxwIHlvdSBuZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzZWFyY2ggaW5wdXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZmFxLXNlYXJjaC1pbnB1dFwiIEBzdWJtaXQucHJldmVudD1cInNlYXJjaCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbWVyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZhcS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8IS0tLyBLbm93bGVkZ2UgYmFzZSBKdW1ib3Ryb24gLS0+XG5cbiAgICAgICAgPCEtLSBLbm93bGVkZ2UgYmFzZSAtLT5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJmYXEtdGFic1wiPlxuICAgICAgICAgICAgPCEtLSB2ZXJ0aWNhbCB0YWIgcGlsbCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFxLW5hdmlnYXRpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uIG1iLTIgbWItbWQtMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gcGlsbCB0YWJzIG5hdmlnYXRpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdiBuYXYtcGlsbHMgbmF2LWxlZnQgZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHBheW1lbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmYXFzLCBpbmRleCkgaW4gY2F0ZWdvcmllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJmYXFzLmlkID09IDEgPyAnYWN0aXZlJyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImZhcXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJwaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiJyNmYXEtY2F0ZWdvcnktJyArIGZhcXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1mZWF0aGVyPVwiY3JlZGl0LWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1tZWRpdW0tMyBtZS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhcXMuY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRkFRIGltYWdlIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9pbGx1c3RyYXRpb24vZmFxLWlsbHVzdHJhdGlvbnMuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mbHVpZCBkLW5vbmUgZC1tZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGVtYW5kIGltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOSBjb2wtbWQtOCBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBwaWxsIHRhYnMgdGFiIGNvbnRlbnQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGZhcXMsIGluZGV4KSBpbiBjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImZhcXMuaWQgPT0gMSA/ICdhY3RpdmUnIDogJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cIidmYXEtY2F0ZWdvcnktJyArIGZhcXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtbGFiZWxsZWRieT1cImZhcXMuY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBpY29uIGFuZCBoZWFkZXIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXRhZyBiZy1saWdodC1wcmltYXJ5IG1lLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZvbnQtbWVkaXVtLTQgYmkgYmktaW5mby1sZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtYi0wXCI+e3sgZmFxcy5jYXRlZ29yeSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBmcmVxdWVudCBhbnN3ZXIgYW5kIHF1ZXN0aW9uICBjb2xsYXBzZSAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmYXEsIGluZGV4eCkgaW4gZmFxcy5mYXFfcXVlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uIGFjY29yZGlvbi1tYXJnaW4gbXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cIicjZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiZmFxLmNhdGVnb3J5X2lkICsgZmFxLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWJzLXRhcmdldD1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNmYXEtcXVlc3Rpb24tJyArIGZhcS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyNmYXEtcXVlc3Rpb24tJyArIGZhcS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmFxLnF1ZXN0aW9uIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbGxhcHNlIGFjY29yZGlvbi1jb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtbGFiZWxsZWRieT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWJzLXBhcmVudD1cIicjZmFxJyArIGZhcS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5IHRleHQtZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmYXEuYW5zd2VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8IS0tIC8gZnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnMgdGFicyBwaWxscyAtLT5cblxuICAgICAgICA8IS0tIGNvbnRhY3QgdXMgLS0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZmFxLWNvbnRhY3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNSBwdC03NVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ICR0KFwiWW91IHN0aWxsIGhhdmUgYSBxdWVzdGlvblwiKSB9fT88L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSWYgeW91IGNhbm5vdCBmaW5kIGEgcXVlc3Rpb24gaW4gb3VyIEZBUSwgeW91IGNhbiBhbHdheXMgY29udGFjdCB1cy4gV2Ugd2lsbCBhbnN3ZXIgdG8geW91IHNob3J0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogW10sXG4gICAgLy8gY29tcG9uZW50IGxpc3RcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIC8vIGNvbXBvbmVudCBkYXRhXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBjdXN0b20gbWV0aG9kc1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ29CYWNrKCkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgICAgICAgLmdldChcIi91c2VyL2tub3dsZWRnZS9mYXFcIilcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge30pO1xuICAgICAgICB9LFxuICAgICAgICBzZWFyY2goKSB7XG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXJcbiAgICAgICAgICAgICAgICAucHVzaChcIi9rbm93bGVkZ2UvZmFxL1wiICsgdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoZSB2dWV4IGVyciByZWdhcmRpbmcgIG5hdmlnYXRpbmcgdG8gdGhlIHBhZ2UgdGhleSBhcmUgYWxyZWFkeSBvbi5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm5hbWUgIT09IFwiTmF2aWdhdGlvbkR1cGxpY2F0ZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWVyci5tZXNzYWdlLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbiB0byBjdXJyZW50IGxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgcHJpbnQgYW55IG90aGVyIGVycm9ycyB0byB0aGUgY29uc29sZVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7fSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBtb3VudGVkXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaENhdGVnb3JpZXMoKTtcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGRlc3Ryb3llZFxuICAgIGRlc3Ryb3llZCgpIHt9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbi5mYXEtc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcbn1cbi5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cDpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mYXEtY29udGFjdCAuZmFxLWNvbnRhY3QtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDE5MSwgMTk5LCAwLjEyKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmZhcS1zZWFyY2ggLmNhcmQtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDhyZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC5mYXEtc2VhcmNoIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA2cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmZhcS1zZWFyY2ggLmZhcS1zZWFyY2gtaW5wdXQgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDU3NnB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLmZhcS1uYXZpZ2F0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mYXEtc2VhcmNoW2RhdGEtdi0yMjJhODYwN10ge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XFxufVxcbi5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cFtkYXRhLXYtMjIyYTg2MDddOmZvY3VzLXdpdGhpbiB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5mYXEtY29udGFjdCAuZmFxLWNvbnRhY3QtY2FyZFtkYXRhLXYtMjIyYTg2MDddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODYsIDE5MSwgMTk5LCAwLjEyKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuLmZhcS1zZWFyY2ggLmNhcmQtYm9keVtkYXRhLXYtMjIyYTg2MDddIHtcXG4gICAgICAgIHBhZGRpbmc6IDhyZW0gIWltcG9ydGFudDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuLmZhcS1zZWFyY2ggLmNhcmQtYm9keVtkYXRhLXYtMjIyYTg2MDddIHtcXG4gICAgICAgIHBhZGRpbmc6IDZyZW0gIWltcG9ydGFudDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbi5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cFtkYXRhLXYtMjIyYTg2MDddIHtcXG4gICAgICAgIHdpZHRoOiA1NzZweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uZmFxLW5hdmlnYXRpb25bZGF0YS12LTIyMmE4NjA3XSB7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ1BBO0lBQ0Esc0JBQUE7SUFDQSxzREFBQTtBQUNBO0FBQ0E7SUFDQSxnQkFBQTtBQUNBO0FBRUE7SUFDQSwyQ0FBQTtBQUNBO0FBRUE7QUFDQTtRQUNBLHdCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDQSx3QkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ0EsWUFBQTtRQUNBLGNBQUE7QUFDQTtBQUNBO1FBQ0EsYUFBQTtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHNlY3Rpb24gaWQ9XFxcImZhcS1zZWFyY2gtZmlsdGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYXJkIGZhcS1zZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9iYW5uZXIvYmFubmVyLnBuZycpXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gbWFpbiB0aXRsZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidGV4dC1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiTGV0J3MgYW5zd2VyIHNvbWUgcXVlc3Rpb25zXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIHN1YnRpdGxlIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtdGV4dCBtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJvciBjaG9vc2UgYSBjYXRlZ29yeSB0byBxdWlja2x5IGZpbmQgdGhlIGhlbHAgeW91IG5lZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzZWFyY2ggaW5wdXQgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cXFwiZmFxLXNlYXJjaC1pbnB1dFxcXCIgQHN1Ym1pdC5wcmV2ZW50PVxcXCJzZWFyY2goKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbWVyZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC10ZXh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJiaSBiaS1zZWFyY2hcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGZhcS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgICAgIDwhLS0vIEtub3dsZWRnZSBiYXNlIEp1bWJvdHJvbiAtLT5cXG5cXG4gICAgICAgIDwhLS0gS25vd2xlZGdlIGJhc2UgLS0+XFxuICAgICAgICA8c2VjdGlvbiBpZD1cXFwiZmFxLXRhYnNcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gdmVydGljYWwgdGFiIHBpbGwgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmFxLW5hdmlnYXRpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uIG1iLTIgbWItbWQtMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHBpbGwgdGFicyBuYXZpZ2F0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibmF2IG5hdi1waWxscyBuYXYtbGVmdCBmbGV4LWNvbHVtblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cXFwidGFibGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gcGF5bWVudCAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGZhcXMsIGluZGV4KSBpbiBjYXRlZ29yaWVzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm5hdi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiZmFxcy5pZCA9PSAxID8gJ2FjdGl2ZScgOiAnJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XFxcImZhcXMuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XFxcInBpbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XFxcIicjZmFxLWNhdGVnb3J5LScgKyBmYXFzLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cXFwidGFiXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmVhdGhlcj1cXFwiY3JlZGl0LWNhcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb250LW1lZGl1bS0zIG1lLTFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZnctYm9sZFxcXCI+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFxcy5jYXRlZ29yeVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGQVEgaW1hZ2UgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcImltYWdlcy9pbGx1c3RyYXRpb24vZmFxLWlsbHVzdHJhdGlvbnMuc3ZnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW1nLWZsdWlkIGQtbm9uZSBkLW1kLWJsb2NrXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcImRlbWFuZCBpbWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTkgY29sLW1kLTggY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gcGlsbCB0YWJzIHRhYiBjb250ZW50IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihmYXFzLCBpbmRleCkgaW4gY2F0ZWdvcmllc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0YWItcGFuZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJmYXFzLmlkID09IDEgPyAnYWN0aXZlJyA6ICcnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XFxcIidmYXEtY2F0ZWdvcnktJyArIGZhcXMuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcInRhYnBhbmVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1sYWJlbGxlZGJ5PVxcXCJmYXFzLmNhdGVnb3J5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gaWNvbiBhbmQgaGVhZGVyIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYXZhdGFyIGF2YXRhci10YWcgYmctbGlnaHQtcHJpbWFyeSBtZS0xXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmb250LW1lZGl1bS00IGJpIGJpLWluZm8tbGdcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1iLTBcXFwiPnt7IGZhcXMuY2F0ZWdvcnkgfX08L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGZyZXF1ZW50IGFuc3dlciBhbmQgcXVlc3Rpb24gIGNvbGxhcHNlICAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihmYXEsIGluZGV4eCkgaW4gZmFxcy5mYXFfcXVlc3Rpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXh4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImFjY29yZGlvbiBhY2NvcmRpb24tbWFyZ2luIG10LTJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XFxcIicjZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQgYWNjb3JkaW9uLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYWNjb3JkaW9uLWhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVxcXCJmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS1icy10YXJnZXQ9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWNvbnRyb2xzPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnI2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmFxLnF1ZXN0aW9uIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XFxcIidmYXEtcXVlc3Rpb24tJyArIGZhcS5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbGxhcHNlIGFjY29yZGlvbi1jb2xsYXBzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtbGFiZWxsZWRieT1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS1icy1wYXJlbnQ9XFxcIicjZmFxJyArIGZhcS5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFjY29yZGlvbi1ib2R5IHRleHQtZGFya1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmYXEuYW5zd2VyIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgPCEtLSAvIGZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zIHRhYnMgcGlsbHMgLS0+XFxuXFxuICAgICAgICA8IS0tIGNvbnRhY3QgdXMgLS0+XFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiZmFxLWNvbnRhY3RcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtdC01IHB0LTc1XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyAkdChcXFwiWW91IHN0aWxsIGhhdmUgYSBxdWVzdGlvblxcXCIpIH19PzwvaDI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiSWYgeW91IGNhbm5vdCBmaW5kIGEgcXVlc3Rpb24gaW4gb3VyIEZBUSwgeW91IGNhbiBhbHdheXMgY29udGFjdCB1cy4gV2Ugd2lsbCBhbnN3ZXIgdG8geW91IHNob3J0bHkhXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiBbXSxcXG4gICAgLy8gY29tcG9uZW50IGxpc3RcXG4gICAgY29tcG9uZW50czoge30sXFxuXFxuICAgIC8vIGNvbXBvbmVudCBkYXRhXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgLy8gY3VzdG9tIG1ldGhvZHNcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZ29CYWNrKCkge1xcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXFxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXFxcIi9cXFwiKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmZXRjaENhdGVnb3JpZXMoKSB7XFxuICAgICAgICAgICAgdGhpcy4kaHR0cFxcbiAgICAgICAgICAgICAgICAuZ2V0KFxcXCIvdXNlci9rbm93bGVkZ2UvZmFxXFxcIilcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhLmNhdGVnb3JpZXM7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZWFyY2goKSB7XFxuICAgICAgICAgICAgdGhpcy4kcm91dGVyXFxuICAgICAgICAgICAgICAgIC5wdXNoKFxcXCIva25vd2xlZGdlL2ZhcS9cXFwiICsgdGhpcy4kcmVmcy5zZWFyY2gudmFsdWUpXFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgdGhlIHZ1ZXggZXJyIHJlZ2FyZGluZyAgbmF2aWdhdGluZyB0byB0aGUgcGFnZSB0aGV5IGFyZSBhbHJlYWR5IG9uLlxcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5uYW1lICE9PSBcXFwiTmF2aWdhdGlvbkR1cGxpY2F0ZWRcXFwiICYmXFxuICAgICAgICAgICAgICAgICAgICAgICAgIWVyci5tZXNzYWdlLmluY2x1ZGVzKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbiB0byBjdXJyZW50IGxvY2F0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICAgICAgICAgICkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBwcmludCBhbnkgb3RoZXIgZXJyb3JzIHRvIHRoZSBjb25zb2xlXFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nRXJyb3IoZXJyKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxcbiAgICBjcmVhdGVkKCkge30sXFxuXFxuICAgIC8vIG9uIGNvbXBvbmVudCBtb3VudGVkXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICB0aGlzLmZldGNoQ2F0ZWdvcmllcygpO1xcbiAgICB9LFxcblxcbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXFxuICAgIGRlc3Ryb3llZCgpIHt9LFxcbn07XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG4uZmFxLXNlYXJjaCB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE1LCAxMDMsIDI0MCwgMC4xMikgIWltcG9ydGFudDtcXG59XFxuLmZhcS1zZWFyY2ggLmZhcS1zZWFyY2gtaW5wdXQgLmlucHV0LWdyb3VwOmZvY3VzLXdpdGhpbiB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5mYXEtY29udGFjdCAuZmFxLWNvbnRhY3QtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAxOTEsIDE5OSwgMC4xMik7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICAuZmFxLXNlYXJjaCAuY2FyZC1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDhyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xcbiAgICAuZmFxLXNlYXJjaCAuY2FyZC1ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDZyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmZhcS1zZWFyY2ggLmZhcS1zZWFyY2gtaW5wdXQgLmlucHV0LWdyb3VwIHtcXG4gICAgICAgIHdpZHRoOiA1NzZweDtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB9XFxuICAgIC5mYXEtbmF2aWdhdGlvbiB7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICB9XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjIyYTg2MDcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMmE4NjA3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZhcS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRmFxLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyMmE4NjA3JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMjJhODYwN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2h5cWZpbi9wdWJsaWNfaHRtbC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMjJhODYwNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMjJhODYwNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMjJhODYwNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmFxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjJhODYwNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMjJhODYwNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjJhODYwNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyMmE4NjA3JnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwic2VjdGlvblwiLCB7IGF0dHJzOiB7IGlkOiBcImZhcS1zZWFyY2gtZmlsdGVyXCIgfSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgZmFxLXNlYXJjaFwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJ2ltYWdlcy9iYW5uZXIvYmFubmVyLnBuZycpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiTGV0J3MgYW5zd2VyIHNvbWUgcXVlc3Rpb25zXCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0IG1iLTJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0uJHQoXG4gICAgICAgICAgICAgICAgICAgICAgXCJvciBjaG9vc2UgYSBjYXRlZ29yeSB0byBxdWlja2x5IGZpbmQgdGhlIGhlbHAgeW91IG5lZWRcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXEtc2VhcmNoLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaCgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLW1lcmdlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGZhcS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic2VjdGlvblwiLCB7IGF0dHJzOiB7IGlkOiBcImZhcS10YWJzXCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtc20tMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImZhcS1uYXZpZ2F0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWNvbHVtbiBtYi0yIG1iLW1kLTBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXBpbGxzIG5hdi1sZWZ0IGZsZXgtY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYXRlZ29yaWVzLCBmdW5jdGlvbiAoZmFxcywgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZmFxcy5pZCA9PSAxID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmFxcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRvZ2dsZVwiOiBcInBpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjZmFxLWNhdGVnb3J5LVwiICsgZmFxcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtbWVkaXVtLTMgbWUtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtZmVhdGhlclwiOiBcImNyZWRpdC1jYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZ3LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmFxcy5jYXRlZ29yeSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWctZmx1aWQgZC1ub25lIGQtbWQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBcImltYWdlcy9pbGx1c3RyYXRpb24vZmFxLWlsbHVzdHJhdGlvbnMuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICBhbHQ6IFwiZGVtYW5kIGltZ1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IGNvbC1tZC04IGNvbC1zbS0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY2F0ZWdvcmllcywgZnVuY3Rpb24gKGZhcXMsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IGZhcXMuaWQgPT0gMSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmFxLWNhdGVnb3J5LVwiICsgZmFxcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBmYXFzLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZhcXMuY2F0ZWdvcnkpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woZmFxcy5mYXFfcXVlc3Rpb25zLCBmdW5jdGlvbiAoZmFxLCBpbmRleHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleHgsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24gYWNjb3JkaW9uLW1hcmdpbiBtdC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCIjZmFxLXF1ZXN0aW9uLVwiICsgZmFxLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYWNjb3JkaW9uLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24taGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogZmFxLmNhdGVnb3J5X2lkICsgZmFxLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjZmFxLXF1ZXN0aW9uLVwiICsgZmFxLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiI2ZhcS1xdWVzdGlvbi1cIiArIGZhcS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZhcS5xdWVzdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sbGFwc2UgYWNjb3JkaW9uLWNvbGxhcHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmYXEtcXVlc3Rpb24tXCIgKyBmYXEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGZhcS5jYXRlZ29yeV9pZCArIGZhcS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXBhcmVudFwiOiBcIiNmYXFcIiArIGZhcS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24tYm9keSB0ZXh0LWRhcmtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZmFxLmFuc3dlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFxLWNvbnRhY3RcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01IHB0LTc1XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIllvdSBzdGlsbCBoYXZlIGEgcXVlc3Rpb25cIikpICsgXCI/XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS4kdChcbiAgICAgICAgICAgICAgICAgICAgXCJJZiB5b3UgY2Fubm90IGZpbmQgYSBxdWVzdGlvbiBpbiBvdXIgRkFRLCB5b3UgY2FuIGFsd2F5cyBjb250YWN0IHVzLiBXZSB3aWxsIGFuc3dlciB0byB5b3Ugc2hvcnRseSFcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJpIGJpLXNlYXJjaFwiIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhciBhdmF0YXItdGFnIGJnLWxpZ2h0LXByaW1hcnkgbWUtMVwiIH0sXG4gICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1tZWRpdW0tNCBiaSBiaS1pbmZvLWxnXCIgfSldXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsicHJvcHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImNhdGVnb3JpZXMiLCJtZXRob2RzIiwiZ29CYWNrIiwid2luZG93IiwiZmV0Y2hDYXRlZ29yaWVzIiwiZ2V0IiwidGhlbiIsInNlYXJjaCIsInB1c2giLCJlcnIiLCJsb2dFcnJvciIsImNyZWF0ZWQiLCJtb3VudGVkIiwiZGVzdHJveWVkIl0sInNvdXJjZVJvb3QiOiIifQ==