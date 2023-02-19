"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_binary_logs_Preview_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_plugin_load_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-plugin-load-script */ "./node_modules/vue-plugin-load-script/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


$(window).resize(function () {
  chart.applyOptions({
    width: $(".parent-chart").innerWidth(),
    height: $(".parent-chart").innerHeight()
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  // component list
  components: {},
  // component data
  data: function data() {
    return {
      gnl: gnl,
      contract: [],
      data: [],
      duration: []
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchData: function fetchData() {
      var _this = this;
      this.$http.post("/user/fetch/binary/contract/view/" + this.$route.params.type + "/" + this.$route.params.id).then(function (response) {
        _this.contract = response.data.contract, _this.data = response.data.data, _this.duration = response.data.duration;
        (0,vue_plugin_load_script__WEBPACK_IMPORTED_MODULE_0__.loadScript)("https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js").then(function () {
          var chart = LightweightCharts.createChart(document.getElementById("chart"), {
            rightPriceScale: {
              scaleMargins: {
                top: 0.1,
                bottom: 0.1
              }
            },
            layout: {
              backgroundColor: "#ffffff",
              textColor: "rgba(33, 56, 77, 1)"
            },
            grid: {
              vertLines: {
                color: "rgba(197, 203, 206, 0.4)"
              },
              horzLines: {
                color: "rgba(197, 203, 206, 0.4)"
              }
            },
            timeScale: {
              timeVisible: true,
              secondsVisible: false
            }
          });
          var lineSeries = chart.addBaselineSeries({
            baseValue: {
              type: "price",
              price: _this.data[0].value
            },
            lastPriceAnimation: 1
          });
          lineSeries.setData(_this.data);
          var lineSeries1 = chart.addLineSeries({
            color: "#bdc3c7"
          });
          lineSeries1.setData(_this.data[0]);
          chart.timeScale().fitContent();
        })["catch"](function () {
          // Failed to fetch script
        });
      });
    }
  },
  // on component created
  created: function created() {},
  // on component mounted
  mounted: function mounted() {
    this.fetchData();
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.parent-chart[data-v-208e7ab8] {\n    position: relative;\n    width: 100%;\n    padding-bottom: 50%;\n}\n.child-chart[data-v-208e7ab8] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./resources/src/Pages/binary/logs/Preview.vue"],"names":[],"mappings":";AAkUA;IACA,kBAAA;IACA,WAAA;IACA,mBAAA;AACA;AACA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;AACA","sourcesContent":["<template>\n    <div class=\"row match-height\">\n        <div class=\"col-lg-3\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\">\n                        BTC <span v-if=\"contract.hilow\">{{ $t(\"Rise\") }}</span\n                        ><span v-else>{{ $t(\"Fall\") }}</span>\n                    </div>\n                    <hr />\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            {{ $t(\"Profit/Loss\") }}:<br />\n                            <div\n                                :class=\"\n                                    contract.result == 1\n                                        ? 'text-success'\n                                        : contract.result == 2\n                                        ? 'text-danger'\n                                        : 'text-secondary'\n                                \"\n                            >\n                                <b\n                                    ><span v-if=\"contract.result == 1\"\n                                        >+\n                                        {{ contract.amount * gnl.profit }}</span\n                                    ><span v-else-if=\"contract.result == 2\"\n                                        >-\n                                        {{ contract.amount * gnl.profit }}</span\n                                    ><span v-else>{{ $t(\"Draw\") }}</span>\n                                </b>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            {{ $t(\"Sell price\") }}:<br /><b>{{\n                                (contract.amount + contract.amount * gnl.profit)\n                                    | toMoney(4)\n                            }}</b>\n                        </div>\n                    </div>\n                    <div class=\"row mt-1\">\n                        <div class=\"col\">\n                            {{ $t(\"Buy price\") }}:<br /><b>{{\n                                contract.amount | toMoney(4)\n                            }}</b>\n                        </div>\n                        <div class=\"col\">\n                            {{ $t(\"Payout limit\") }}:<br /><b>{{\n                                contract.amount * gnl.profit\n                            }}</b>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card\">\n                <div\n                    class=\"card-body\"\n                    style=\"max-height: 280px; overflow-y: auto\"\n                >\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <i\n                                class=\"border-white bi bi-play btn btn-icon fs-3 rounded bg-light-secondary\"\n                            ></i>\n                        </div>\n                        <div class=\"col-9\">\n                            {{ $t(\"Reference ID\") }}:<br /><b>{{\n                                contract.id\n                            }}</b>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"bi bi-clock btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Duration\") }}:<br /><span\n                                    v-if=\"\n                                        contract.duration >= 60 &&\n                                        contract.duration < 3600\n                                    \"\n                                    ><b> {{ contract.duration / 60 }}</b>\n                                    {{ $t(\"Min\") }}</span\n                                >\n                                <span v-else-if=\"contract.duration > 3600\"\n                                    ><b> {{ contract.duration / 3600 }}</b>\n                                    {{ $t(\"hour\") }}\n                                </span>\n                                <span v-else\n                                    ><b>{{ contract.duration }}</b>\n                                    {{ $t(\"Sec\") }}</span\n                                >\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"bi bi-chevron-bar-contract btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Barrier\") }}:<br /><b>{{\n                                    data[\"0\"].value | toMoney(4)\n                                }}</b>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"border-warning bi bi-geo-alt btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Start time\") }}:<br /><b>{{\n                                    contract.in_time\n                                }}</b>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"border-danger bi bi-record-circle btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Entry spot\") }}:<br /><b>{{\n                                    contract.price_was | toMoney(4)\n                                }}</b>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"border-info bi bi-record-circle-fill btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Exit spot\") }}:<br /><b>{{\n                                    data[data.length - 1].value\n                                }}</b>\n                            </div>\n                        </div>\n                        <hr />\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <i\n                                    class=\"border-success bi bi-flag btn btn-icon fs-3 rounded bg-light-secondary\"\n                                ></i>\n                            </div>\n                            <div class=\"col-9\">\n                                {{ $t(\"Exit time\") }}:<br /><b>{{\n                                    duration\n                                }}</b>\n                            </div>\n                        </div>\n                        <hr />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-9\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <!-- Line Chart Starts -->\n                    <div class=\"col-12\">\n                        <div class=\"card\">\n                            <div\n                                class=\"card-header d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start\"\n                            >\n                                <div>\n                                    <h4 class=\"card-title mb-25\">\n                                        {{ $t(\"Contract details\") }}\n                                    </h4>\n                                </div>\n                                <div\n                                    class=\"d-flex align-items-center flex-wrap mt-sm-0 mt-1\"\n                                >\n                                    <h5 class=\"fw-bolder mb-0 me-1\">\n                                        $ {{ data[data.length - 1].value }}\n                                    </h5>\n                                    <span class=\"badge badge-light-secondary\">\n                                        <i\n                                            class=\"text-danger font-small-3 bi bi-arrow-down\"\n                                        ></i>\n                                        <span class=\"align-middle\"\n                                            >{{\n                                                (data[\"0\"].value /\n                                                    data[data.length - 1].value)\n                                                    | toMoney(4)\n                                            }}%</span\n                                        >\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"card-body parent-chart\">\n                                <div class=\"child-chart\" id=\"chart\"></div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- Line Chart Ends -->\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n\n<script>\nimport { loadScript } from \"vue-plugin-load-script\";\n$(window).resize(function () {\n    chart.applyOptions({\n        width: $(\".parent-chart\").innerWidth(),\n        height: $(\".parent-chart\").innerHeight(),\n    });\n});\n\nexport default {\n    props: [],\n    // component list\n    components: {},\n\n    // component data\n    data() {\n        return {\n            gnl: gnl,\n            contract: [],\n            data: [],\n            duration: [],\n        };\n    },\n\n    // custom methods\n    methods: {\n        goBack() {\n            window.history.length > 1\n                ? this.$router.go(-1)\n                : this.$router.push(\"/\");\n        },\n        fetchData() {\n            this.$http\n                .post(\n                    \"/user/fetch/binary/contract/view/\" +\n                        this.$route.params.type +\n                        \"/\" +\n                        this.$route.params.id\n                )\n                .then((response) => {\n                    (this.contract = response.data.contract),\n                        (this.data = response.data.data),\n                        (this.duration = response.data.duration);\n                    loadScript(\n                        \"https://unpkg.com/lightweight-charts/dist/lightweight-charts.standalone.production.js\"\n                    )\n                        .then(() => {\n                            var chart = LightweightCharts.createChart(\n                                document.getElementById(\"chart\"),\n                                {\n                                    rightPriceScale: {\n                                        scaleMargins: {\n                                            top: 0.1,\n                                            bottom: 0.1,\n                                        },\n                                    },\n                                    layout: {\n                                        backgroundColor: \"#ffffff\",\n                                        textColor: \"rgba(33, 56, 77, 1)\",\n                                    },\n                                    grid: {\n                                        vertLines: {\n                                            color: \"rgba(197, 203, 206, 0.4)\",\n                                        },\n                                        horzLines: {\n                                            color: \"rgba(197, 203, 206, 0.4)\",\n                                        },\n                                    },\n                                    timeScale: {\n                                        timeVisible: true,\n                                        secondsVisible: false,\n                                    },\n                                }\n                            );\n                            var lineSeries = chart.addBaselineSeries({\n                                baseValue: {\n                                    type: \"price\",\n                                    price: this.data[0].value,\n                                },\n                                lastPriceAnimation: 1,\n                            });\n                            lineSeries.setData(this.data);\n\n                            var lineSeries1 = chart.addLineSeries({\n                                color: \"#bdc3c7\",\n                            });\n\n                            lineSeries1.setData(this.data[0]);\n                            chart.timeScale().fitContent();\n                        })\n                        .catch(() => {\n                            // Failed to fetch script\n                        });\n                });\n        },\n    },\n\n    // on component created\n    created() {},\n\n    // on component mounted\n    mounted() {\n        this.fetchData();\n    },\n\n    // on component destroyed\n    destroyed() {},\n};\n</script>\n<style scoped>\n.parent-chart {\n    position: relative;\n    width: 100%;\n    padding-bottom: 50%;\n}\n.child-chart {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_id_208e7ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_id_208e7ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_id_208e7ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/Pages/binary/logs/Preview.vue":
/*!*****************************************************!*\
  !*** ./resources/src/Pages/binary/logs/Preview.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Preview.vue?vue&type=template&id=208e7ab8&scoped=true& */ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true&");
/* harmony import */ var _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preview.vue?vue&type=script&lang=js& */ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js&");
/* harmony import */ var _Preview_vue_vue_type_style_index_0_id_208e7ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& */ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "208e7ab8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/binary/logs/Preview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_style_index_0_id_208e7ab8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=style&index=0&id=208e7ab8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Preview_vue_vue_type_template_id_208e7ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Preview.vue?vue&type=template&id=208e7ab8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/binary/logs/Preview.vue?vue&type=template&id=208e7ab8&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row match-height" }, [
    _c("div", { staticClass: "col-lg-3" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "card-title" }, [
            _vm._v("\n                    BTC "),
            _vm.contract.hilow
              ? _c("span", [_vm._v(_vm._s(_vm.$t("Rise")))])
              : _c("span", [_vm._v(_vm._s(_vm.$t("Fall")))]),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.$t("Profit/Loss")) +
                  ":"
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                {
                  class:
                    _vm.contract.result == 1
                      ? "text-success"
                      : _vm.contract.result == 2
                      ? "text-danger"
                      : "text-secondary",
                },
                [
                  _c("b", [
                    _vm.contract.result == 1
                      ? _c("span", [
                          _vm._v(
                            "+\n                                    " +
                              _vm._s(_vm.contract.amount * _vm.gnl.profit)
                          ),
                        ])
                      : _vm.contract.result == 2
                      ? _c("span", [
                          _vm._v(
                            "-\n                                    " +
                              _vm._s(_vm.contract.amount * _vm.gnl.profit)
                          ),
                        ])
                      : _c("span", [_vm._v(_vm._s(_vm.$t("Draw")))]),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.$t("Sell price")) +
                  ":"
              ),
              _c("br"),
              _c("b", [
                _vm._v(
                  _vm._s(
                    _vm._f("toMoney")(
                      _vm.contract.amount +
                        _vm.contract.amount * _vm.gnl.profit,
                      4
                    )
                  )
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-1" }, [
            _c("div", { staticClass: "col" }, [
              _vm._v(
                "\n                        " + _vm._s(_vm.$t("Buy price")) + ":"
              ),
              _c("br"),
              _c("b", [
                _vm._v(_vm._s(_vm._f("toMoney")(_vm.contract.amount, 4))),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.$t("Payout limit")) +
                  ":"
              ),
              _c("br"),
              _c("b", [_vm._v(_vm._s(_vm.contract.amount * _vm.gnl.profit))]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          {
            staticClass: "card-body",
            staticStyle: { "max-height": "280px", "overflow-y": "auto" },
          },
          [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-9" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.$t("Reference ID")) +
                    ":"
                ),
                _c("br"),
                _c("b", [_vm._v(_vm._s(_vm.contract.id))]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Duration")) +
                      ":"
                  ),
                  _c("br"),
                  _vm.contract.duration >= 60 && _vm.contract.duration < 3600
                    ? _c("span", [
                        _c("b", [
                          _vm._v(" " + _vm._s(_vm.contract.duration / 60)),
                        ]),
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.$t("Min"))
                        ),
                      ])
                    : _vm.contract.duration > 3600
                    ? _c("span", [
                        _c("b", [
                          _vm._v(" " + _vm._s(_vm.contract.duration / 3600)),
                        ]),
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.$t("hour")) +
                            "\n                            "
                        ),
                      ])
                    : _c("span", [
                        _c("b", [_vm._v(_vm._s(_vm.contract.duration))]),
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.$t("Sec"))
                        ),
                      ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Barrier")) +
                      ":"
                  ),
                  _c("br"),
                  _c("b", [
                    _vm._v(_vm._s(_vm._f("toMoney")(_vm.data["0"].value, 4))),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Start time")) +
                      ":"
                  ),
                  _c("br"),
                  _c("b", [_vm._v(_vm._s(_vm.contract.in_time))]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Entry spot")) +
                      ":"
                  ),
                  _c("br"),
                  _c("b", [
                    _vm._v(
                      _vm._s(_vm._f("toMoney")(_vm.contract.price_was, 4))
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Exit spot")) +
                      ":"
                  ),
                  _c("br"),
                  _c("b", [
                    _vm._v(_vm._s(_vm.data[_vm.data.length - 1].value)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "col-9" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.$t("Exit time")) +
                      ":"
                  ),
                  _c("br"),
                  _c("b", [_vm._v(_vm._s(_vm.duration))]),
                ]),
              ]),
              _vm._v(" "),
              _c("hr"),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-9" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start",
                },
                [
                  _c("div", [
                    _c("h4", { staticClass: "card-title mb-25" }, [
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.$t("Contract details")) +
                          "\n                                "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center flex-wrap mt-sm-0 mt-1",
                    },
                    [
                      _c("h5", { staticClass: "fw-bolder mb-0 me-1" }, [
                        _vm._v(
                          "\n                                    $ " +
                            _vm._s(_vm.data[_vm.data.length - 1].value) +
                            "\n                                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "badge badge-light-secondary" },
                        [
                          _c("i", {
                            staticClass:
                              "text-danger font-small-3 bi bi-arrow-down",
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "align-middle" }, [
                            _vm._v(
                              _vm._s(
                                _vm._f("toMoney")(
                                  _vm.data["0"].value /
                                    _vm.data[_vm.data.length - 1].value,
                                  4
                                )
                              ) + "%"
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._m(7),
            ]),
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
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "border-white bi bi-play btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass: "bi bi-clock btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "bi bi-chevron-bar-contract btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "border-warning bi bi-geo-alt btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "border-danger bi bi-record-circle btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "border-info bi bi-record-circle-fill btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-3" }, [
      _c("i", {
        staticClass:
          "border-success bi bi-flag btn btn-icon fs-3 rounded bg-light-secondary",
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body parent-chart" }, [
      _c("div", { staticClass: "child-chart", attrs: { id: "chart" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX2JpbmFyeV9sb2dzX1ByZXZpZXdfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcU5vRDtBQUNwREE7RUFDQUM7SUFDQUM7SUFDQUM7RUFDQTtBQUNBO0FBRUEsaUVBQWU7RUFDZkM7RUFDQTtFQUNBQztFQUVBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUY7TUFDQUc7SUFDQTtFQUNBO0VBRUE7RUFDQUM7SUFDQUM7TUFDQUMsNEJBQ0Esc0JBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0EsV0FDQUMsS0FDQSxzQ0FDQSwwQkFDQSxNQUNBLHNCQUNBLENBQ0FDO1FBQ0EseUNBQ0EsaUNBQ0E7UUFDQUMsa0VBQUFBLENBQ0Esd0ZBQ0EsQ0FDQUQ7VUFDQSwwQ0FDQUUsa0NBQ0E7WUFDQUM7Y0FDQUM7Z0JBQ0FDO2dCQUNBQztjQUNBO1lBQ0E7WUFDQUM7Y0FDQUM7Y0FDQUM7WUFDQTtZQUNBQztjQUNBQztnQkFDQUM7Y0FDQTtjQUNBQztnQkFDQUQ7Y0FDQTtZQUNBO1lBQ0FFO2NBQ0FDO2NBQ0FDO1lBQ0E7VUFDQSxFQUNBO1VBQ0E7WUFDQUM7Y0FDQUM7Y0FDQUM7WUFDQTtZQUNBQztVQUNBO1VBQ0FDO1VBRUE7WUFDQVQ7VUFDQTtVQUVBVTtVQUNBcEM7UUFDQSxXQUNBO1VBQ0E7UUFBQSxDQUNBO01BQ0E7SUFDQTtFQUNBO0VBRUE7RUFDQXFDO0VBRUE7RUFDQUM7SUFDQTtFQUNBO0VBRUE7RUFDQUM7QUFDQSxD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ZUFBZTtBQUN0RTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9zcmMvUGFnZXMvYmluYXJ5L2xvZ3MvUHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9iaW5hcnkvbG9ncy9QcmV2aWV3LnZ1ZT9lYWRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvYmluYXJ5L2xvZ3MvUHJldmlldy52dWU/YmU1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2JpbmFyeS9sb2dzL1ByZXZpZXcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvYmluYXJ5L2xvZ3MvUHJldmlldy52dWU/NzA3MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2JpbmFyeS9sb2dzL1ByZXZpZXcudnVlPzc4YzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9iaW5hcnkvbG9ncy9QcmV2aWV3LnZ1ZT9kMTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvYmluYXJ5L2xvZ3MvUHJldmlldy52dWU/OWI5MiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBtYXRjaC1oZWlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJUQyA8c3BhbiB2LWlmPVwiY29udHJhY3QuaGlsb3dcIj57eyAkdChcIlJpc2VcIikgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWVsc2U+e3sgJHQoXCJGYWxsXCIpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIlByb2ZpdC9Mb3NzXCIpIH19OjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5yZXN1bHQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtc3VjY2VzcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvbnRyYWN0LnJlc3VsdCA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1kYW5nZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtaWY9XCJjb250cmFjdC5yZXN1bHQgPT0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPitcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb250cmFjdC5hbW91bnQgKiBnbmwucHJvZml0IH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gdi1lbHNlLWlmPVwiY29udHJhY3QucmVzdWx0ID09IDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29udHJhY3QuYW1vdW50ICogZ25sLnByb2ZpdCB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtZWxzZT57eyAkdChcIkRyYXdcIikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VsbCBwcmljZVwiKSB9fTo8YnIgLz48Yj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udHJhY3QuYW1vdW50ICsgY29udHJhY3QuYW1vdW50ICogZ25sLnByb2ZpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdG9Nb25leSg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkJ1eSBwcmljZVwiKSB9fTo8YnIgLz48Yj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5hbW91bnQgfCB0b01vbmV5KDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIlBheW91dCBsaW1pdFwiKSB9fTo8YnIgLz48Yj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5hbW91bnQgKiBnbmwucHJvZml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogMjgwcHg7IG92ZXJmbG93LXk6IGF1dG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItd2hpdGUgYmkgYmktcGxheSBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJSZWZlcmVuY2UgSURcIikgfX06PGJyIC8+PGI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJpIGJpLWNsb2NrIGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJEdXJhdGlvblwiKSB9fTo8YnIgLz48c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0LmR1cmF0aW9uID49IDYwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QuZHVyYXRpb24gPCAzNjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxiPiB7eyBjb250cmFjdC5kdXJhdGlvbiAvIDYwIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJNaW5cIikgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb250cmFjdC5kdXJhdGlvbiA+IDM2MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxiPiB7eyBjb250cmFjdC5kdXJhdGlvbiAvIDM2MDAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcImhvdXJcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48Yj57eyBjb250cmFjdC5kdXJhdGlvbiB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VjXCIpIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJpIGJpLWNoZXZyb24tYmFyLWNvbnRyYWN0IGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJCYXJyaWVyXCIpIH19OjxiciAvPjxiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW1wiMFwiXS52YWx1ZSB8IHRvTW9uZXkoNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXItd2FybmluZyBiaSBiaS1nZW8tYWx0IGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJTdGFydCB0aW1lXCIpIH19OjxiciAvPjxiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5pbl90aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWRhbmdlciBiaSBiaS1yZWNvcmQtY2lyY2xlIGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJFbnRyeSBzcG90XCIpIH19OjxiciAvPjxiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5wcmljZV93YXMgfCB0b01vbmV5KDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWluZm8gYmkgYmktcmVjb3JkLWNpcmNsZS1maWxsIGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJFeGl0IHNwb3RcIikgfX06PGJyIC8+PGI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlci1zdWNjZXNzIGJpIGJpLWZsYWcgYnRuIGJ0bi1pY29uIGZzLTMgcm91bmRlZCBiZy1saWdodC1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIkV4aXQgdGltZVwiKSB9fTo8YnIgLz48Yj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMaW5lIENoYXJ0IFN0YXJ0cyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGZsZXgtc20tcm93IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZSBtYi0yNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiQ29udHJhY3QgZGV0YWlsc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgbXQtc20tMCBtdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiZnctYm9sZGVyIG1iLTAgbWUtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQge3sgZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZGFuZ2VyIGZvbnQtc21hbGwtMyBiaSBiaS1hcnJvdy1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YVtcIjBcIl0udmFsdWUgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvTW9uZXkoNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0lPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHBhcmVudC1jaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQtY2hhcnRcIiBpZD1cImNoYXJ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTGluZSBDaGFydCBFbmRzIC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGxvYWRTY3JpcHQgfSBmcm9tIFwidnVlLXBsdWdpbi1sb2FkLXNjcmlwdFwiO1xuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgY2hhcnQuYXBwbHlPcHRpb25zKHtcbiAgICAgICAgd2lkdGg6ICQoXCIucGFyZW50LWNoYXJ0XCIpLmlubmVyV2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiAkKFwiLnBhcmVudC1jaGFydFwiKS5pbm5lckhlaWdodCgpLFxuICAgIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogW10sXG4gICAgLy8gY29tcG9uZW50IGxpc3RcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIC8vIGNvbXBvbmVudCBkYXRhXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdubDogZ25sLFxuICAgICAgICAgICAgY29udHJhY3Q6IFtdLFxuICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICBkdXJhdGlvbjogW10sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIGN1c3RvbSBtZXRob2RzXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnb0JhY2soKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9mZXRjaC9iaW5hcnkvY29udHJhY3Qvdmlldy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXMudHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNvbnRyYWN0ID0gcmVzcG9uc2UuZGF0YS5jb250cmFjdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmR1cmF0aW9uID0gcmVzcG9uc2UuZGF0YS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRTY3JpcHQoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vdW5wa2cuY29tL2xpZ2h0d2VpZ2h0LWNoYXJ0cy9kaXN0L2xpZ2h0d2VpZ2h0LWNoYXJ0cy5zdGFuZGFsb25lLnByb2R1Y3Rpb24uanNcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJ0ID0gTGlnaHR3ZWlnaHRDaGFydHMuY3JlYXRlQ2hhcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0UHJpY2VTY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTWFyZ2luczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogXCJyZ2JhKDMzLCA1NiwgNzcsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE5NywgMjAzLCAyMDYsIDAuNClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcnpMaW5lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE5NywgMjAzLCAyMDYsIDAuNClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTY2FsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHNWaXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lU2VyaWVzID0gY2hhcnQuYWRkQmFzZWxpbmVTZXJpZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicHJpY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB0aGlzLmRhdGFbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQcmljZUFuaW1hdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU2VyaWVzLnNldERhdGEodGhpcy5kYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lU2VyaWVzMSA9IGNoYXJ0LmFkZExpbmVTZXJpZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYmRjM2M3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lU2VyaWVzMS5zZXREYXRhKHRoaXMuZGF0YVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQudGltZVNjYWxlKCkuZml0Q29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFpbGVkIHRvIGZldGNoIHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBjcmVhdGVkXG4gICAgY3JlYXRlZCgpIHt9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuLnBhcmVudC1jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XG59XG4uY2hpbGQtY2hhcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5wYXJlbnQtY2hhcnRbZGF0YS12LTIwOGU3YWI4XSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MCU7XFxufVxcbi5jaGlsZC1jaGFydFtkYXRhLXYtMjA4ZTdhYjhdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zcmMvUGFnZXMvYmluYXJ5L2xvZ3MvUHJldmlldy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtVQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0FBQ0E7QUFDQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IG1hdGNoLWhlaWdodFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctM1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBCVEMgPHNwYW4gdi1pZj1cXFwiY29udHJhY3QuaGlsb3dcXFwiPnt7ICR0KFxcXCJSaXNlXFxcIikgfX08L3NwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4gdi1lbHNlPnt7ICR0KFxcXCJGYWxsXFxcIikgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiUHJvZml0L0xvc3NcXFwiKSB9fTo8YnIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5yZXN1bHQgPT0gMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LXN1Y2Nlc3MnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29udHJhY3QucmVzdWx0ID09IDJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1kYW5nZXInXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtc2Vjb25kYXJ5J1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWlmPVxcXCJjb250cmFjdC5yZXN1bHQgPT0gMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPitcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgY29udHJhY3QuYW1vdW50ICogZ25sLnByb2ZpdCB9fTwvc3BhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3BhbiB2LWVsc2UtaWY9XFxcImNvbnRyYWN0LnJlc3VsdCA9PSAyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+LVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBjb250cmFjdC5hbW91bnQgKiBnbmwucHJvZml0IH19PC9zcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxzcGFuIHYtZWxzZT57eyAkdChcXFwiRHJhd1xcXCIpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiU2VsbCBwcmljZVxcXCIpIH19OjxiciAvPjxiPnt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udHJhY3QuYW1vdW50ICsgY29udHJhY3QuYW1vdW50ICogZ25sLnByb2ZpdClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvTW9uZXkoNClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvdyBtdC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiQnV5IHByaWNlXFxcIikgfX06PGJyIC8+PGI+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0LmFtb3VudCB8IHRvTW9uZXkoNClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIlBheW91dCBsaW1pdFxcXCIpIH19OjxiciAvPjxiPnt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5hbW91bnQgKiBnbmwucHJvZml0XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDI4MHB4OyBvdmVyZmxvdy15OiBhdXRvXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib3JkZXItd2hpdGUgYmkgYmktcGxheSBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtOVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJSZWZlcmVuY2UgSURcXFwiKSB9fTo8YnIgLz48Yj57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QuaWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmkgYmktY2xvY2sgYnRuIGJ0bi1pY29uIGZzLTMgcm91bmRlZCBiZy1saWdodC1zZWNvbmRhcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIkR1cmF0aW9uXFxcIikgfX06PGJyIC8+PHNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QuZHVyYXRpb24gPj0gNjAgJiZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3QuZHVyYXRpb24gPCAzNjAwXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48Yj4ge3sgY29udHJhY3QuZHVyYXRpb24gLyA2MCB9fTwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiTWluXFxcIikgfX08L3NwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwiY29udHJhY3QuZHVyYXRpb24gPiAzNjAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48Yj4ge3sgY29udHJhY3QuZHVyYXRpb24gLyAzNjAwIH19PC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJob3VyXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48Yj57eyBjb250cmFjdC5kdXJhdGlvbiB9fTwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcXFwiU2VjXFxcIikgfX08L3NwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmkgYmktY2hldnJvbi1iYXItY29udHJhY3QgYnRuIGJ0bi1pY29uIGZzLTMgcm91bmRlZCBiZy1saWdodC1zZWNvbmRhcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIkJhcnJpZXJcXFwiKSB9fTo8YnIgLz48Yj57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbXFxcIjBcXFwiXS52YWx1ZSB8IHRvTW9uZXkoNClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtM1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJib3JkZXItd2FybmluZyBiaSBiaS1nZW8tYWx0IGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC05XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJTdGFydCB0aW1lXFxcIikgfX06PGJyIC8+PGI+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5pbl90aW1lXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9yZGVyLWRhbmdlciBiaSBiaS1yZWNvcmQtY2lyY2xlIGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC05XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJFbnRyeSBzcG90XFxcIikgfX06PGJyIC8+PGI+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFjdC5wcmljZV93YXMgfCB0b01vbmV5KDQpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvYj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYm9yZGVyLWluZm8gYmkgYmktcmVjb3JkLWNpcmNsZS1maWxsIGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC05XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJFeGl0IHNwb3RcXFwiKSB9fTo8YnIgLz48Yj57e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbZGF0YS5sZW5ndGggLSAxXS52YWx1ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2I+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJvcmRlci1zdWNjZXNzIGJpIGJpLWZsYWcgYnRuIGJ0bi1pY29uIGZzLTMgcm91bmRlZCBiZy1saWdodC1zZWNvbmRhcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIkV4aXQgdGltZVxcXCIpIH19OjxiciAvPjxiPnt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9iPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTlcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMaW5lIENoYXJ0IFN0YXJ0cyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJjYXJkLWhlYWRlciBkLWZsZXggZmxleC1zbS1yb3cgZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4gYWxpZ24taXRlbXMtc3RhcnQganVzdGlmeS1jb250ZW50LXN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZSBtYi0yNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJDb250cmFjdCBkZXRhaWxzXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwIG10LXNtLTAgbXQtMVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcImZ3LWJvbGRlciBtYi0wIG1lLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkIHt7IGRhdGFbZGF0YS5sZW5ndGggLSAxXS52YWx1ZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWxpZ2h0LXNlY29uZGFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1kYW5nZXIgZm9udC1zbWFsbC0zIGJpIGJpLWFycm93LWRvd25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhbGlnbi1taWRkbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YVtcXFwiMFxcXCJdLnZhbHVlIC9cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtkYXRhLmxlbmd0aCAtIDFdLnZhbHVlKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvTW9uZXkoNClcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19JTwvc3BhblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHkgcGFyZW50LWNoYXJ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNoaWxkLWNoYXJ0XFxcIiBpZD1cXFwiY2hhcnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMaW5lIENoYXJ0IEVuZHMgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgeyBsb2FkU2NyaXB0IH0gZnJvbSBcXFwidnVlLXBsdWdpbi1sb2FkLXNjcmlwdFxcXCI7XFxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XFxuICAgIGNoYXJ0LmFwcGx5T3B0aW9ucyh7XFxuICAgICAgICB3aWR0aDogJChcXFwiLnBhcmVudC1jaGFydFxcXCIpLmlubmVyV2lkdGgoKSxcXG4gICAgICAgIGhlaWdodDogJChcXFwiLnBhcmVudC1jaGFydFxcXCIpLmlubmVySGVpZ2h0KCksXFxuICAgIH0pO1xcbn0pO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IFtdLFxcbiAgICAvLyBjb21wb25lbnQgbGlzdFxcbiAgICBjb21wb25lbnRzOiB7fSxcXG5cXG4gICAgLy8gY29tcG9uZW50IGRhdGFcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZ25sOiBnbmwsXFxuICAgICAgICAgICAgY29udHJhY3Q6IFtdLFxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBbXSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIC8vIGN1c3RvbSBtZXRob2RzXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGdvQmFjaygpIHtcXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXFxuICAgICAgICAgICAgICAgID8gdGhpcy4kcm91dGVyLmdvKC0xKVxcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJvdXRlci5wdXNoKFxcXCIvXFxcIik7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGh0dHBcXG4gICAgICAgICAgICAgICAgLnBvc3QoXFxuICAgICAgICAgICAgICAgICAgICBcXFwiL3VzZXIvZmV0Y2gvYmluYXJ5L2NvbnRyYWN0L3ZpZXcvXFxcIiArXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGUucGFyYW1zLnR5cGUgK1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCIvXFxcIiArXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGUucGFyYW1zLmlkXFxuICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAodGhpcy5jb250cmFjdCA9IHJlc3BvbnNlLmRhdGEuY29udHJhY3QpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGEpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmR1cmF0aW9uID0gcmVzcG9uc2UuZGF0YS5kdXJhdGlvbik7XFxuICAgICAgICAgICAgICAgICAgICBsb2FkU2NyaXB0KFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJodHRwczovL3VucGtnLmNvbS9saWdodHdlaWdodC1jaGFydHMvZGlzdC9saWdodHdlaWdodC1jaGFydHMuc3RhbmRhbG9uZS5wcm9kdWN0aW9uLmpzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXJ0ID0gTGlnaHR3ZWlnaHRDaGFydHMuY3JlYXRlQ2hhcnQoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiY2hhcnRcXFwiKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodFByaWNlU2NhbGU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVNYXJnaW5zOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMC4xLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXFxcIiNmZmZmZmZcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IFxcXCJyZ2JhKDMzLCA1NiwgNzcsIDEpXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQ6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydExpbmVzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXFxcInJnYmEoMTk3LCAyMDMsIDIwNiwgMC40KVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcnpMaW5lczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFxcXCJyZ2JhKDE5NywgMjAzLCAyMDYsIDAuNClcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNjYWxlOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVWaXNpYmxlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzVmlzaWJsZTogZmFsc2UsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmVTZXJpZXMgPSBjaGFydC5hZGRCYXNlbGluZVNlcmllcyh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlVmFsdWU6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcXFwicHJpY2VcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiB0aGlzLmRhdGFbMF0udmFsdWUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFByaWNlQW5pbWF0aW9uOiAxLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZVNlcmllcy5zZXREYXRhKHRoaXMuZGF0YSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW5lU2VyaWVzMSA9IGNoYXJ0LmFkZExpbmVTZXJpZXMoe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFxcXCIjYmRjM2M3XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVTZXJpZXMxLnNldERhdGEodGhpcy5kYXRhWzBdKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnQudGltZVNjYWxlKCkuZml0Q29udGVudCgpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFpbGVkIHRvIGZldGNoIHNjcmlwdFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIC8vIG9uIGNvbXBvbmVudCBjcmVhdGVkXFxuICAgIGNyZWF0ZWQoKSB7fSxcXG5cXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XFxuICAgIH0sXFxuXFxuICAgIC8vIG9uIGNvbXBvbmVudCBkZXN0cm95ZWRcXG4gICAgZGVzdHJveWVkKCkge30sXFxufTtcXG48L3NjcmlwdD5cXG48c3R5bGUgc2NvcGVkPlxcbi5wYXJlbnQtY2hhcnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xcbn1cXG4uY2hpbGQtY2hhcnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTY1WzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjA4ZTdhYjgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDhlN2FiOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUHJldmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMDhlN2FiOCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjA4ZTdhYjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oeXFmaW4vcHVibGljX2h0bWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjA4ZTdhYjgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjA4ZTdhYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjA4ZTdhYjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwOGU3YWI4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwOGU3YWI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvc3JjL1BhZ2VzL2JpbmFyeS9sb2dzL1ByZXZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIwOGU3YWI4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwOGU3YWI4JnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWF0Y2gtaGVpZ2h0XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgQlRDIFwiKSxcbiAgICAgICAgICAgIF92bS5jb250cmFjdC5oaWxvd1xuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJSaXNlXCIpKSldKVxuICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJGYWxsXCIpKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUHJvZml0L0xvc3NcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIF92bS5jb250cmFjdC5yZXN1bHQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNvbnRyYWN0LnJlc3VsdCA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jb250cmFjdC5yZXN1bHQgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY29udHJhY3QuYW1vdW50ICogX3ZtLmdubC5wcm9maXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNvbnRyYWN0LnJlc3VsdCA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb250cmFjdC5hbW91bnQgKiBfdm0uZ25sLnByb2ZpdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiRHJhd1wiKSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlNlbGwgcHJpY2VcIikpICtcbiAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b01vbmV5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jb250cmFjdC5hbW91bnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRyYWN0LmFtb3VudCAqIF92bS5nbmwucHJvZml0LFxuICAgICAgICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS4kdChcIkJ1eSBwcmljZVwiKSkgKyBcIjpcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uY29udHJhY3QuYW1vdW50LCA0KSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUGF5b3V0IGxpbWl0XCIpKSArXG4gICAgICAgICAgICAgICAgICBcIjpcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRyYWN0LmFtb3VudCAqIF92bS5nbmwucHJvZml0KSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LWhlaWdodFwiOiBcIjI4MHB4XCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtOVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlJlZmVyZW5jZSBJRFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIjpcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRyYWN0LmlkKSldKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRHVyYXRpb25cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIjpcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uY29udHJhY3QuZHVyYXRpb24gPj0gNjAgJiYgX3ZtLmNvbnRyYWN0LmR1cmF0aW9uIDwgMzYwMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmNvbnRyYWN0LmR1cmF0aW9uIC8gNjApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJNaW5cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLmNvbnRyYWN0LmR1cmF0aW9uID4gMzYwMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmNvbnRyYWN0LmR1cmF0aW9uIC8gMzYwMCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcImhvdXJcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRyYWN0LmR1cmF0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiU2VjXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiQmFycmllclwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uZGF0YVtcIjBcIl0udmFsdWUsIDQpKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiU3RhcnQgdGltZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY29udHJhY3QuaW5fdGltZSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC05XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkVudHJ5IHNwb3RcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIjpcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcInRvTW9uZXlcIikoX3ZtLmNvbnRyYWN0LnByaWNlX3dhcywgNCkpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRXhpdCBzcG90XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCI6XCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YVtfdm0uZGF0YS5sZW5ndGggLSAxXS52YWx1ZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC05XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkV4aXQgdGltZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiOlwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZHVyYXRpb24pKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1oZWFkZXIgZC1mbGV4IGZsZXgtc20tcm93IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1zdGFydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0yNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkNvbnRyYWN0IGRldGFpbHNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBtdC1zbS0wIG10LTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmdy1ib2xkZXIgbWItMCBtZS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGF0YVtfdm0uZGF0YS5sZW5ndGggLSAxXS52YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLWxpZ2h0LXNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyIGZvbnQtc21hbGwtMyBiaSBiaS1hcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b01vbmV5XCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRhW1wiMFwiXS52YWx1ZSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0YVtfdm0uZGF0YS5sZW5ndGggLSAxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oNyksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJib3JkZXItd2hpdGUgYmkgYmktcGxheSBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiLFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJiaSBiaS1jbG9jayBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiLFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImJpIGJpLWNoZXZyb24tYmFyLWNvbnRyYWN0IGJ0biBidG4taWNvbiBmcy0zIHJvdW5kZWQgYmctbGlnaHQtc2Vjb25kYXJ5XCIsXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtM1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiYm9yZGVyLXdhcm5pbmcgYmkgYmktZ2VvLWFsdCBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiLFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImJvcmRlci1kYW5nZXIgYmkgYmktcmVjb3JkLWNpcmNsZSBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiLFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImJvcmRlci1pbmZvIGJpIGJpLXJlY29yZC1jaXJjbGUtZmlsbCBidG4gYnRuLWljb24gZnMtMyByb3VuZGVkIGJnLWxpZ2h0LXNlY29uZGFyeVwiLFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICBfYyhcImlcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImJvcmRlci1zdWNjZXNzIGJpIGJpLWZsYWcgYnRuIGJ0bi1pY29uIGZzLTMgcm91bmRlZCBiZy1saWdodC1zZWNvbmRhcnlcIixcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSBwYXJlbnQtY2hhcnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoaWxkLWNoYXJ0XCIsIGF0dHJzOiB7IGlkOiBcImNoYXJ0XCIgfSB9KSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiJCIsImNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsImNvbXBvbmVudHMiLCJkYXRhIiwiZ25sIiwiY29udHJhY3QiLCJkdXJhdGlvbiIsIm1ldGhvZHMiLCJnb0JhY2siLCJ3aW5kb3ciLCJmZXRjaERhdGEiLCJwb3N0IiwidGhlbiIsImxvYWRTY3JpcHQiLCJkb2N1bWVudCIsInJpZ2h0UHJpY2VTY2FsZSIsInNjYWxlTWFyZ2lucyIsInRvcCIsImJvdHRvbSIsImxheW91dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImdyaWQiLCJ2ZXJ0TGluZXMiLCJjb2xvciIsImhvcnpMaW5lcyIsInRpbWVTY2FsZSIsInRpbWVWaXNpYmxlIiwic2Vjb25kc1Zpc2libGUiLCJiYXNlVmFsdWUiLCJ0eXBlIiwicHJpY2UiLCJsYXN0UHJpY2VBbmltYXRpb24iLCJsaW5lU2VyaWVzIiwibGluZVNlcmllczEiLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCJdLCJzb3VyY2VSb290IjoiIn0=