(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_ico_ICODetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-countdown */ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuejs_countdown__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // component list
  components: {
    Countdown: (vuejs_countdown__WEBPACK_IMPORTED_MODULE_0___default())
  },
  // component data
  data: function data() {
    return {
      user: [],
      ico: [],
      amount: 0,
      rec_wallet: null,
      wallet_symbol: null,
      balance: null,
      cost: 0,
      loading: false
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchData: function fetchData() {
      var _this = this;

      this.$http.post("/user/fetch/ico/" + window.location.href.substring(window.location.href.lastIndexOf("/") + 1)).then(function (response) {
        _this.user = response.data.user, _this.ico = response.data.ico, _this.rec_wallet = response.data.rec_wallet, _this.wallet_symbol = response.data.ico.network_symbol, _this.balance = response.data.balance;
      });
    },
    purchase: function purchase() {
      var _this2 = this;

      this.loading = true, this.$http.post("/user/store/ico", {
        amount: this.amount,
        cost: this.cost,
        ico_symbol: this.ico.symbol,
        ico_id: this.ico.id,
        symbol: this.ico.network_symbol,
        rec_wallet: this.rec_wallet
      }).then(function (response) {
        _this2.$toast[response.data.type](response.data.message);

        _this2.fetchData();
      })["catch"](function (error) {
        _this2.$toast.error(error.response.data);
      })["finally"](function () {
        _this2.loading = false;
      });
    },
    fetchWallet: function fetchWallet() {
      var _this3 = this;

      this.$http.post("/user/fetch/wallet", {
        symbol: this.wallet_symbol,
        type: "funding"
      }).then(function (response) {
        _this3.balance = response.data.balance;
      });
    },
    createWallet: function createWallet() {
      var _this4 = this;

      this.loading = true, this.$http.post("/user/wallet/j/create", {
        symbol: this.wallet_symbol,
        type: "funding"
      }).then(function (response) {
        _this4.fetchWallet();

        _this4.$toast[response.data.type](response.data.message);
      })["catch"](function (error) {
        _this4.$toast.error(error.response.data);
      })["finally"](function () {
        _this4.loading = false;
      });
    },
    change_rec_wallet: function change_rec_wallet() {
      var _this5 = this;

      this.loading = true, this.$http.post("/user/store/ico/rec_wallet", {
        rec_wallet: this.rec_wallet,
        network_symbol: this.ico.network_symbol
      }).then(function (response) {
        _this5.fetchWallet();

        _this5.$toast[response.data.type](response.data.message);
      })["catch"](function (error) {
        _this5.$toast.error(error.response.data);
      })["finally"](function () {
        _this5.loading = false;
      });
    },
    costCal: function costCal() {
      this.cost = this.amount / this.ico.rate;
    }
  },
  // on component created
  created: function created() {
    this.fetchData();
  },
  // on component mounted
  mounted: function mounted() {},
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./resources/src/Pages/ico/ICODetails.vue":
/*!************************************************!*\
  !*** ./resources/src/Pages/ico/ICODetails.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ICODetails.vue?vue&type=template&id=4212fbd6& */ "./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6&");
/* harmony import */ var _ICODetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ICODetails.vue?vue&type=script&lang=js& */ "./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ICODetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/ico/ICODetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICODetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ICODetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ICODetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6&":
/*!*******************************************************************************!*\
  !*** ./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ICODetails_vue_vue_type_template_id_4212fbd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ICODetails.vue?vue&type=template&id=4212fbd6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/ico/ICODetails.vue?vue&type=template&id=4212fbd6& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8 col-md-6 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center",
                    },
                    [
                      _vm.ico.icon != null
                        ? _c("img", {
                            staticClass: "avatar",
                            staticStyle: { filter: "grayscale(0)" },
                            attrs: {
                              height: "48px",
                              width: "48px",
                              src: "assets/images/ico/" + _vm.ico.icon,
                              alt: "",
                            },
                          })
                        : _c("vue-skeleton-loader", {
                            attrs: {
                              type: "circle",
                              width: 48,
                              height: 48,
                              animation: "fade",
                            },
                          }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ms-1" },
                        [
                          _vm.ico.name != null
                            ? _c("h1", [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(_vm.ico.name) +
                                    "\n                                    "
                                ),
                              ])
                            : _c("vue-skeleton-loader", {
                                attrs: {
                                  type: "rect",
                                  width: 300,
                                  height: 10,
                                  animation: "fade",
                                },
                              }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { key: _vm.ico.status }, [
                    _vm.ico.status == 0
                      ? _c("span", { staticClass: "badge bg-warning" }, [
                          _vm._v("Upcoming"),
                        ])
                      : _vm.ico.status == 1
                      ? _c("span", { staticClass: "badge bg-success" }, [
                          _vm._v("Sale Live"),
                        ])
                      : _vm.ico.status == 2
                      ? _c("span", { staticClass: "badge bg-danger" }, [
                          _vm._v("Sale Ended"),
                        ])
                      : _vm.ico.status == 3
                      ? _c("span", { staticClass: "badge bg-secondary" }, [
                          _vm._v("Canceled"),
                        ])
                      : _c(
                          "span",
                          { staticClass: "badge bg-secondary" },
                          [
                            _c("vue-skeleton-loader", {
                              attrs: {
                                type: "rect",
                                width: 60,
                                height: 10,
                                animation: "fade",
                              },
                            }),
                          ],
                          1
                        ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _vm.ico.desc != null
                ? _c("div", { staticClass: "my-1" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.ico.desc) +
                        "\n                        "
                    ),
                  ])
                : _c(
                    "div",
                    { staticClass: "my-1" },
                    [
                      _c("vue-skeleton-loader", {
                        staticClass: "mb-1",
                        attrs: {
                          type: "rect",
                          width: 500,
                          height: 10,
                          animation: "fade",
                        },
                      }),
                      _vm._v(" "),
                      _c("vue-skeleton-loader", {
                        staticClass: "mb-1",
                        attrs: {
                          type: "rect",
                          width: 500,
                          height: 10,
                          animation: "fade",
                        },
                      }),
                      _vm._v(" "),
                      _c("vue-skeleton-loader", {
                        staticClass: "mb-1",
                        attrs: {
                          type: "rect",
                          width: 500,
                          height: 10,
                          animation: "fade",
                        },
                      }),
                      _vm._v(" "),
                      _c("vue-skeleton-loader", {
                        staticClass: "mb-1",
                        attrs: {
                          type: "rect",
                          width: 400,
                          height: 10,
                          animation: "fade",
                        },
                      }),
                    ],
                    1
                  ),
            ]),
            _vm._v(" "),
            _c("table", { staticClass: "table" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Presale Address")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: _vm.ico.presale_address,
                          target: "_blank",
                          rel: "noreferrer nofollow",
                        },
                      },
                      [_vm._v(_vm._s(_vm.ico.address))]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Token Name")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.ico.name))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Token Symbol")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.ico.symbol))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Token Decimals")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.ico.decimals))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Token Address")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        staticClass: "mr-1",
                        attrs: {
                          href: _vm.ico.address,
                          target: "_blank",
                          rel: "noreferrer nofollow",
                        },
                      },
                      [_vm._v(_vm._s(_vm.ico.address))]
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("p", { staticClass: "help is-info" }, [
                      _vm._v(
                        "\n                                        (Do not send\n                                        " +
                          _vm._s(_vm.ico.network_symbol) +
                          " to the\n                                        token address!)\n                                    "
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Total Supply")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.total_supply, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.symbol) +
                        "\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Tokens For Presale")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.presale_supply, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.symbol) +
                        "\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Tokens For Liquidity")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.liquidity_supply, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.symbol) +
                        "\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Initial Market Cap (estimate)")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "$" + _vm._s(_vm._f("toMoney")(_vm.ico.initial_cap, 2))
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Soft Cap")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.soft_cap, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.network_symbol) +
                        "\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Max Owner Receive")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.owner_max, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.network_symbol)
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        key: _vm.ico.owner_recieved,
                        staticClass: "has-text-info is-size-7",
                      },
                      [
                        _vm._v(
                          "\n                                        (Current:\n                                        " +
                            _vm._s(
                              _vm._f("toMoney")(_vm.ico.owner_recieved, 4)
                            ) +
                            "\n                                        " +
                            _vm._s(_vm.ico.network_symbol) +
                            ")\n                                    "
                        ),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Presale Start Time")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(
                          _vm._f("moment")(
                            _vm.ico.soft_start,
                            "dddd, MMMM Do YYYY"
                          )
                        ) +
                        "\n                                    (UTC)\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Presale End Time")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(
                          _vm._f("moment")(
                            _vm.ico.soft_end,
                            "dddd, MMMM Do YYYY"
                          )
                        ) +
                        "\n                                    (UTC)\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Liquidity Percent")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.ico.liquidity_percent) + "%")]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Liquidity Lockup Time")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.ico.lockup) +
                        " days after pool ends\n                                "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-md-6 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm.ico.stage != null
                ? _c(
                    "div",
                    { staticClass: "text-center mt-1" },
                    [
                      _vm.ico.stage == 0
                        ? _c("Countdown", {
                            attrs: { deadline: _vm.ico.soft_start },
                          })
                        : _vm.ico.stage == 1
                        ? _c("Countdown", {
                            attrs: { deadline: _vm.ico.soft_end },
                          })
                        : _vm.ico.stage == 2
                        ? _c("Countdown", {
                            attrs: { deadline: _vm.ico.hard_end },
                          })
                        : _vm._e(),
                    ],
                    1
                  )
                : _c("vue-skeleton-loader", {
                    staticClass: "text-center mt-1",
                    attrs: {
                      type: "rect",
                      width: 240,
                      height: 55,
                      animation: "fade",
                    },
                  }),
              _vm._v(" "),
              _c("div", { key: _vm.ico.soft_raised, staticClass: "mb-1" }, [
                _c("p", { staticClass: "title" }, [
                  _vm._v("\n                            Progress ("),
                  _c("span", { staticClass: "text-success" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("toMoney")(
                          (_vm.ico.soft_raised / _vm.ico.soft_cap) * 100,
                          2
                        )
                      ) + "%"
                    ),
                  ]),
                  _vm._v(")\n                        "),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mb-1" }, [
                  _c(
                    "div",
                    { staticClass: "progress", attrs: { id: "myRangeColor" } },
                    [
                      _c("div", {
                        staticClass:
                          "progress-bar progress-bar-striped progress-bar-animated",
                        style:
                          "width:" +
                          (_vm.ico.soft_raised / _vm.ico.soft_cap) * 100 +
                          "%",
                        attrs: {
                          id: "myRange",
                          role: "progressbar",
                          "aria-valuenow": "50",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100",
                        },
                      }),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("small", { staticClass: "d-flex justify-content-between" }, [
                  _c("span", { key: _vm.ico.soft_raised }, [
                    _vm._v(
                      _vm._s(_vm._f("toMoney")(_vm.ico.soft_raised, 2)) +
                        "\n                                " +
                        _vm._s(_vm.ico.symbol)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm._f("toMoney")(_vm.ico.soft_cap, 2)) +
                        "\n                                " +
                        _vm._s(_vm.ico.symbol)
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "text-start", attrs: { for: "amount" } },
                [_vm._v("Recieving Wallet")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-1 w-auto" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.rec_wallet,
                      expression: "rec_wallet",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "rec_wallet" },
                  domProps: { value: _vm.rec_wallet },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.rec_wallet = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "input-group-text text-light",
                    attrs: { disabled: _vm.loading },
                    on: {
                      click: function ($event) {
                        return _vm.change_rec_wallet()
                      },
                    },
                  },
                  [_c("i", { staticClass: "bi bi-arrow-repeat" })]
                ),
              ]),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "text-start", attrs: { for: "amount" } },
                [_vm._v("Amount")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-1 w-auto" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.amount,
                      expression: "amount",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "amount" },
                  domProps: { value: _vm.amount },
                  on: {
                    keyup: function ($event) {
                      return _vm.costCal()
                    },
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.amount = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-text text-light" }, [
                  _vm._v(_vm._s(_vm.ico.symbol)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "text-start", attrs: { for: "cost" } },
                [_vm._v("Cost")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-1 w-auto" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.cost,
                      expression: "cost",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", readonly: "", disabled: "" },
                  domProps: { value: _vm.cost },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.cost = $event.target.value
                    },
                  },
                }),
                _vm._v(" "),
                _c("span", { staticClass: "input-group-text text-light" }, [
                  _vm._v(_vm._s(_vm.ico.network_symbol)),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "text-start", attrs: { for: "balance" } },
                [_vm._v("Balance")]
              ),
              _vm._v(" "),
              _c("div", { key: _vm.balance }, [
                _vm.balance != null
                  ? _c(
                      "div",
                      {
                        staticClass: "w-100 mb-1 btn btn-outline-success",
                        attrs: { disabled: "" },
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.balance) +
                            "\n                            " +
                            _vm._s(_vm.wallet_symbol) +
                            "\n                        "
                        ),
                      ]
                    )
                  : _c(
                      "div",
                      {
                        staticClass: "w-100 mb-1 btn btn-outline-warning",
                        attrs: { disabled: _vm.loading },
                        on: {
                          click: function ($event) {
                            return _vm.createWallet()
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                            Create " +
                            _vm._s(_vm.ico.network_symbol) +
                            " Wallet\n                        "
                        ),
                      ]
                    ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _vm.ico.status == 1
            ? _c(
                "div",
                { staticClass: "card-footer d-flex justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { disabled: _vm.loading },
                      on: {
                        click: function ($event) {
                          return _vm.purchase()
                        },
                      },
                    },
                    [
                      _vm._v(
                        "\n                        Buy\n                    "
                      ),
                    ]
                  ),
                ]
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c("td", { key: _vm.ico.status }, [
                    _vm.ico.status == 0
                      ? _c("span", { staticClass: "text-warning" }, [
                          _vm._v("Upcoming"),
                        ])
                      : _vm.ico.status == 1
                      ? _c("span", { staticClass: "text-success" }, [
                          _vm._v("In Progress"),
                        ])
                      : _vm.ico.status == 2
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v("Sale Ended"),
                        ])
                      : _vm.ico.status == 3
                      ? _c("span", { staticClass: "text-secondary" }, [
                          _vm._v("Canceled"),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Current Rate")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n                                    1 " +
                        _vm._s(_vm.ico.network_symbol) +
                        " =\n                                    " +
                        _vm._s(_vm._f("toMoney")(_vm.ico.rate, 2)) +
                        "\n                                    " +
                        _vm._s(_vm.ico.symbol) +
                        "\n                                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Total Contributors")]),
                  _vm._v(" "),
                  _c("td", { key: _vm.ico.contributors }, [
                    _vm._v(
                      "\n                                    " +
                        _vm._s(_vm.ico.contributors) +
                        "\n                                "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuejs-countdown/dist/vuejs-countdown.js ***!
  \**************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=null;e.default={name:"vuejsCountDown",props:{deadline:{type:String},end:{type:String},stop:{type:Boolean}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),date:null,diff:0}},created:function(){var t=this;if(!this.deadline&&!this.end)throw new Error("Missing props 'deadline' or 'end'");var e=this.deadline?this.deadline:this.end;if(this.date=Math.trunc(Date.parse(e.replace(/-/g,"/"))/1e3),!this.date)throw new Error("Invalid props value, correct the 'deadline' or 'end'");r=setInterval(function(){t.now=Math.trunc((new Date).getTime()/1e3)},1e3)},computed:{seconds:function(){return Math.trunc(this.diff)%60},minutes:function(){return Math.trunc(this.diff/60)%60},hours:function(){return Math.trunc(this.diff/60/60)%24},days:function(){return Math.trunc(this.diff/60/60/24)}},watch:{now:function(t){this.diff=this.date-this.now,(this.diff<=0||this.stop)&&(this.diff=0,clearInterval(r))}},filters:{twoDigits:function(t){return t.toString().length<=1?"0"+t.toString():t.toString()}},destroyed:function(){clearInterval(r)}}},function(t,e,n){"use strict";function r(t){n(2)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);var a=n(8),u=n(7),c=r,d=u(i.a,a.a,!1,c,null,null);e.default=d.exports},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(5)("630d476e",r,!0,{})},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,'.vuejs-countdown{padding:0;margin:0}.vuejs-countdown li{display:inline-block;margin:0 8px;text-align:center;position:relative}.vuejs-countdown li p{margin:0}.vuejs-countdown li:after{content:":";position:absolute;top:0;right:-13px;font-size:32px}.vuejs-countdown li:first-of-type{margin-left:0}.vuejs-countdown li:last-of-type{margin-right:0}.vuejs-countdown li:last-of-type:after{content:""}.vuejs-countdown .digit{font-size:32px;font-weight:600;line-height:1.4;margin-bottom:0}.vuejs-countdown .text{text-transform:uppercase;margin-bottom:0;font-size:10px}',""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,r=document.querySelector("style["+m+'~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(_){var i=p++;r=l||(l=o()),e=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),e=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function a(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(m,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(6),d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},g=null,m="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){v=n,g=o||{};var i=c(t,e);return r(i),function(e){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=d[s.id];a.refs--,n.push(a)}e?(i=c(t,e),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=i[0],a=i[1],u=i[2],c=i[3],d={id:t+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}},function(t,e){t.exports=function(t,e,n,r,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var d;if(i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=d):r&&(d=r),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(t,e){return d.call(e),l(t,e)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:s,exports:a,options:c}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"vuejs-countdown"},[t.days>0?n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.days)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.days>1?"days":"day"))])]):t._e(),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.hours)))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.hours>1?"hours":"hour"))])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.minutes)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("min")])]),t._v(" "),n("li",[n("p",{staticClass:"digit"},[t._v(t._s(t._f("twoDigits")(t.seconds)))]),t._v(" "),n("p",{staticClass:"text"},[t._v("Sec")])])])},o=[],i={render:r,staticRenderFns:o};e.a=i}])});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19zcmNfUGFnZXNfaWNvX0lDT0RldGFpbHNfdnVlLjgyNTJhODNmNjUwMDZhMjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb2J3QztBQUV4QyxpRUFBZTtFQUNmO0VBQ0FBO0lBQ0FDLFdBQUFBLHdEQUFBQTtFQURBLENBRkE7RUFNQTtFQUNBQyxJQVBBLGtCQU9BO0lBQ0E7TUFDQUMsUUFEQTtNQUVBQyxPQUZBO01BR0FDLFNBSEE7TUFJQUMsZ0JBSkE7TUFLQUMsbUJBTEE7TUFNQUMsYUFOQTtNQU9BQyxPQVBBO01BUUFDO0lBUkE7RUFVQSxDQWxCQTtFQW9CQTtFQUNBQztJQUNBQyxNQURBLG9CQUNBO01BQ0FDLDRCQUNBLG1CQURBLEdBRUEsc0JBRkE7SUFHQSxDQUxBO0lBTUFDLFNBTkEsdUJBTUE7TUFBQTs7TUFDQSxXQUNBQyxJQURBLENBRUEscUJBQ0FGLCtCQUNBQSx5Q0FEQSxDQUhBLEVBT0FHLElBUEEsQ0FPQTtRQUNBLGlD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QUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbURBQW1EO0FBQ3JFLG9C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QUE4RCxtQkFBbUIsb0JBQW9CLFNBQVMsNEJBQTRCLE1BQU0sR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvc3JjL1BhZ2VzL2ljby9JQ09EZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2ljby9JQ09EZXRhaWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2ljby9JQ09EZXRhaWxzLnZ1ZT81YTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvaWNvL0lDT0RldGFpbHMudnVlPzE5ZGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9pY28vSUNPRGV0YWlscy52dWU/MTk1MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlanMtY291bnRkb3duL2Rpc3QvdnVlanMtY291bnRkb3duLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaWNvLmljb24gIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDhweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIidhc3NldHMvaW1hZ2VzL2ljby8nICsgaWNvLmljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmaWx0ZXI6IGdyYXlzY2FsZSgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1za2VsZXRvbi1sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCI0OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1zLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgdi1pZj1cImljby5uYW1lICE9IG51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2tlbGV0b24tbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDprZXk9XCJpY28uc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpY28uc3RhdHVzID09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmFkZ2UgYmctd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlVwY29taW5nPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImljby5zdGF0dXMgPT0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiYWRnZSBiZy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U2FsZSBMaXZlPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImljby5zdGF0dXMgPT0gMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiYWRnZSBiZy1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TYWxlIEVuZGVkPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImljby5zdGF0dXMgPT0gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiYWRnZSBiZy1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5DYW5jZWxlZDwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlIGNsYXNzPVwiYmFkZ2UgYmctc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1za2VsZXRvbi1sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCI2MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImljby5kZXNjICE9IG51bGxcIiBjbGFzcz1cIm15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLmRlc2MgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1za2VsZXRvbi1sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLXNrZWxldG9uLWxvYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3aWR0aD1cIjUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2tlbGV0b24tbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOndpZHRoPVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249XCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1za2VsZXRvbi1sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCI0MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByZXNhbGUgQWRkcmVzczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJpY28ucHJlc2FsZV9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub2ZvbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpY28uYWRkcmVzcyB9fTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ub2tlbiBOYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBpY28ubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ub2tlbiBTeW1ib2w8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGljby5zeW1ib2wgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG9rZW4gRGVjaW1hbHM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGljby5kZWNpbWFscyB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ub2tlbiBBZGRyZXNzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImljby5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub2ZvbGxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpY28uYWRkcmVzcyB9fTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlbHAgaXMtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRG8gbm90IHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLm5ldHdvcmtfc3ltYm9sIH19IHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiBhZGRyZXNzISlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWwgU3VwcGx5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28udG90YWxfc3VwcGx5IHwgdG9Nb25leSgyKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5zeW1ib2wgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Ub2tlbnMgRm9yIFByZXNhbGU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5wcmVzYWxlX3N1cHBseSB8IHRvTW9uZXkoMikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28uc3ltYm9sIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG9rZW5zIEZvciBMaXF1aWRpdHk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5saXF1aWRpdHlfc3VwcGx5IHwgdG9Nb25leSgyKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5zeW1ib2wgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Jbml0aWFsIE1hcmtldCBDYXAgKGVzdGltYXRlKTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHt7IGljby5pbml0aWFsX2NhcCB8IHRvTW9uZXkoMikgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U29mdCBDYXA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5zb2Z0X2NhcCB8IHRvTW9uZXkoMikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28ubmV0d29ya19zeW1ib2wgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NYXggT3duZXIgUmVjZWl2ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLm93bmVyX21heCB8IHRvTW9uZXkoMikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28ubmV0d29ya19zeW1ib2wgfX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGFzLXRleHQtaW5mbyBpcy1zaXplLTdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaWNvLm93bmVyX3JlY2lldmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChDdXJyZW50OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvLm93bmVyX3JlY2lldmVkIHwgdG9Nb25leSg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28ubmV0d29ya19zeW1ib2wgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QW1vdW50IFRpbGwgUmViYWxhbmNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgaWNvIH19IHt7IGljby5uZXR3b3JrX3N5bWJvbCB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByZXNhbGUgU3RhcnQgVGltZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvLnNvZnRfc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW9tZW50KFwiZGRkZCwgTU1NTSBEbyBZWVlZXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVVRDKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlByZXNhbGUgRW5kIFRpbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljby5zb2Z0X2VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtb21lbnQoXCJkZGRkLCBNTU1NIERvIFlZWVlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChVVEMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGlzdGluZyBPbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGNsYXNzPVwibXItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wYW5jYWtlc3dhcC5maW5hbmNlL3N3YXA/b3V0cHV0Q3VycmVuY3k9MHg4NjgxNDljN0VhQ0Q3RUIwYUI3MUE0M2Y3YjlGZjI1ZUMxREM4MDIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9mb2xsb3dcIj5QYW5jYWtlc3dhcDwvYT48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MaXF1aWRpdHkgUGVyY2VudDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgaWNvLmxpcXVpZGl0eV9wZXJjZW50IH19JTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MaXF1aWRpdHkgTG9ja3VwIFRpbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGljby5sb2NrdXAgfX0gZGF5cyBhZnRlciBwb29sIGVuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImljby5zdGFnZSAhPSBudWxsXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvdW50ZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaWNvLnN0YWdlID09IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVhZGxpbmU9XCJpY28uc29mdF9zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ291bnRkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwiaWNvLnN0YWdlID09IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVhZGxpbmU9XCJpY28uc29mdF9lbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0NvdW50ZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImljby5zdGFnZSA9PSAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRlYWRsaW5lPVwiaWNvLmhhcmRfZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Db3VudGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2tlbGV0b24tbG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOndpZHRoPVwiMjQwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiNTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xXCIgOmtleT1cImljby5zb2Z0X3JhaXNlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3MgKDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoaWNvLnNvZnRfcmFpc2VkIC8gaWNvLnNvZnRfY2FwKSAqIDEwMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b01vbmV5KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSU8L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJteVJhbmdlQ29sb3JcIiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJteVJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aDonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGljby5zb2Z0X3JhaXNlZCAvIGljby5zb2Z0X2NhcCkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6a2V5PVwiaWNvLnNvZnRfcmFpc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpY28uc29mdF9yYWlzZWQgfCB0b01vbmV5KDIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28uc3ltYm9sIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpY28uc29mdF9jYXAgfCB0b01vbmV5KDIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28uc3ltYm9sIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LXN0YXJ0XCIgZm9yPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+UmVjaWV2aW5nIFdhbGxldDwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0xIHctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY193YWxsZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmVjX3dhbGxldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgdGV4dC1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZV9yZWNfd2FsbGV0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktYXJyb3ctcmVwZWF0XCI+PC9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1zdGFydFwiIGZvcj1cImFtb3VudFwiPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMSB3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwiY29zdENhbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dCB0ZXh0LWxpZ2h0XCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvLnN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LXN0YXJ0XCIgZm9yPVwiY29zdFwiPkNvc3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTEgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgdGV4dC1saWdodFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljby5uZXR3b3JrX3N5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LXN0YXJ0XCIgZm9yPVwiYmFsYW5jZVwiPkJhbGFuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6a2V5PVwiYmFsYW5jZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImJhbGFuY2UgIT0gbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy0xMDAgbWItMSBidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBiYWxhbmNlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHdhbGxldF9zeW1ib2wgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctMTAwIG1iLTEgYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVXYWxsZXQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHt7IGljby5uZXR3b3JrX3N5bWJvbCB9fSBXYWxsZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWZvb3RlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImljby5zdGF0dXMgPT0gMVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicHVyY2hhc2UoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPk1ldGFtYXNrPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlN0YXR1czwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgOmtleT1cImljby5zdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaWNvLnN0YXR1cyA9PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+VXBjb21pbmc8L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwiaWNvLnN0YXR1cyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+SW4gUHJvZ3Jlc3M8L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwiaWNvLnN0YXR1cyA9PSAyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TYWxlIEVuZGVkPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImljby5zdGF0dXMgPT0gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q2FuY2VsZWQ8L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q3VycmVudCBSYXRlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIHt7IGljby5uZXR3b3JrX3N5bWJvbCB9fSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLnJhdGUgfCB0b01vbmV5KDIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaWNvLnN5bWJvbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRvdGFsIENvbnRyaWJ1dG9yczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgOmtleT1cImljby5jb250cmlidXRvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpY28uY29udHJpYnV0b3JzIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJ2dWVqcy1jb3VudGRvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDb3VudGRvd24sXG4gICAgfSxcblxuICAgIC8vIGNvbXBvbmVudCBkYXRhXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXI6IFtdLFxuICAgICAgICAgICAgaWNvOiBbXSxcbiAgICAgICAgICAgIGFtb3VudDogMCxcbiAgICAgICAgICAgIHJlY193YWxsZXQ6IG51bGwsXG4gICAgICAgICAgICB3YWxsZXRfc3ltYm9sOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZTogbnVsbCxcbiAgICAgICAgICAgIGNvc3Q6IDAsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gY3VzdG9tIG1ldGhvZHNcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJvdXRlci5nbygtMSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgICAgICAgICBcIi91c2VyL2ZldGNoL2ljby9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubGFzdEluZGV4T2YoXCIvXCIpICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXNlciA9IHJlc3BvbnNlLmRhdGEudXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pY28gPSByZXNwb25zZS5kYXRhLmljbyksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5yZWNfd2FsbGV0ID0gcmVzcG9uc2UuZGF0YS5yZWNfd2FsbGV0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLndhbGxldF9zeW1ib2wgPSByZXNwb25zZS5kYXRhLmljby5uZXR3b3JrX3N5bWJvbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5iYWxhbmNlID0gcmVzcG9uc2UuZGF0YS5iYWxhbmNlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHVyY2hhc2UoKSB7XG4gICAgICAgICAgICAodGhpcy5sb2FkaW5nID0gdHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgICAgICAgICAgICAucG9zdChcIi91c2VyL3N0b3JlL2ljb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29zdDogdGhpcy5jb3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvX3N5bWJvbDogdGhpcy5pY28uc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvX2lkOiB0aGlzLmljby5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5pY28ubmV0d29ya19zeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNfd2FsbGV0OiB0aGlzLnJlY193YWxsZXQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RbcmVzcG9uc2UuZGF0YS50eXBlXShyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hXYWxsZXQoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgICAgICAgLnBvc3QoXCIvdXNlci9mZXRjaC93YWxsZXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMud2FsbGV0X3N5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmdW5kaW5nXCIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlID0gcmVzcG9uc2UuZGF0YS5iYWxhbmNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVXYWxsZXQoKSB7XG4gICAgICAgICAgICAodGhpcy5sb2FkaW5nID0gdHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgICAgICAgICAgICAucG9zdChcIi91c2VyL3dhbGxldC9qL2NyZWF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMud2FsbGV0X3N5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVuZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hXYWxsZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0W3Jlc3BvbnNlLmRhdGEudHlwZV0ocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3QuZXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlX3JlY193YWxsZXQoKSB7XG4gICAgICAgICAgICAodGhpcy5sb2FkaW5nID0gdHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy4kaHR0cFxuICAgICAgICAgICAgICAgICAgICAucG9zdChcIi91c2VyL3N0b3JlL2ljby9yZWNfd2FsbGV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY193YWxsZXQ6IHRoaXMucmVjX3dhbGxldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtfc3ltYm9sOiB0aGlzLmljby5uZXR3b3JrX3N5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoV2FsbGV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdFtyZXNwb25zZS5kYXRhLnR5cGVdKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvc3RDYWwoKSB7XG4gICAgICAgICAgICB0aGlzLmNvc3QgPSB0aGlzLmFtb3VudCAvIHRoaXMuaWNvLnJhdGU7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBjcmVhdGVkXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcbiAgICBtb3VudGVkKCkge30sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lDT0RldGFpbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyMTJmYmQ2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lDT0RldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JQ09EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyMTJmYmQ2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyMTJmYmQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyMTJmYmQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JQ09EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjEyZmJkNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjEyZmJkNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL3NyYy9QYWdlcy9pY28vSUNPRGV0YWlscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSUNPRGV0YWlscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JQ09EZXRhaWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JQ09EZXRhaWxzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjEyZmJkNiZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTggY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaWNvLmljb24gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgZmlsdGVyOiBcImdyYXlzY2FsZSgwKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0OHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiYXNzZXRzL2ltYWdlcy9pY28vXCIgKyBfdm0uaWNvLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJ2dWUtc2tlbGV0b24tbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXMtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pY28ubmFtZSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaWNvLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInZ1ZS1za2VsZXRvbi1sb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBrZXk6IF92bS5pY28uc3RhdHVzIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmljby5zdGF0dXMgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmctd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXBjb21pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmljby5zdGF0dXMgPT0gMVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmctc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2FsZSBMaXZlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5pY28uc3RhdHVzID09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJnLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2FsZSBFbmRlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uaWNvLnN0YXR1cyA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiZy1zZWNvbmRhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhbmNlbGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiZy1zZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2dWUtc2tlbGV0b24tbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uaWNvLmRlc2MgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJteS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pY28uZGVzYykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm15LTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2dWUtc2tlbGV0b24tbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidnVlLXNrZWxldG9uLWxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInZ1ZS1za2VsZXRvbi1sb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2dWUtc2tlbGV0b24tbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJQcmVzYWxlIEFkZHJlc3NcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLmljby5wcmVzYWxlX2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vcmVmZXJyZXIgbm9mb2xsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaWNvLmFkZHJlc3MpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJUb2tlbiBOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaWNvLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJUb2tlbiBTeW1ib2xcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pY28uc3ltYm9sKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiVG9rZW4gRGVjaW1hbHNcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pY28uZGVjaW1hbHMpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJUb2tlbiBBZGRyZXNzXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IF92bS5pY28uYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw6IFwibm9yZWZlcnJlciBub2ZvbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY28uYWRkcmVzcykpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJoZWxwIGlzLWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKERvIG5vdCBzZW5kXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pY28ubmV0d29ya19zeW1ib2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgdG8gdGhlXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuIGFkZHJlc3MhKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiVG90YWwgU3VwcGx5XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJ0b01vbmV5XCIpKF92bS5pY28udG90YWxfc3VwcGx5LCAyKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5zeW1ib2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlRva2VucyBGb3IgUHJlc2FsZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uaWNvLnByZXNhbGVfc3VwcGx5LCAyKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5zeW1ib2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlRva2VucyBGb3IgTGlxdWlkaXR5XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJ0b01vbmV5XCIpKF92bS5pY28ubGlxdWlkaXR5X3N1cHBseSwgMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pY28uc3ltYm9sKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJJbml0aWFsIE1hcmtldCBDYXAgKGVzdGltYXRlKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIkXCIgKyBfdm0uX3MoX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uaWNvLmluaXRpYWxfY2FwLCAyKSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTb2Z0IENhcFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uaWNvLnNvZnRfY2FwLCAyKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5uZXR3b3JrX3N5bWJvbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiTWF4IE93bmVyIFJlY2VpdmVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcInRvTW9uZXlcIikoX3ZtLmljby5vd25lcl9tYXgsIDIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaWNvLm5ldHdvcmtfc3ltYm9sKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3ZtLmljby5vd25lcl9yZWNpZXZlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWluZm8gaXMtc2l6ZS03XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChDdXJyZW50OlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9Nb25leVwiKShfdm0uaWNvLm93bmVyX3JlY2lldmVkLCA0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5uZXR3b3JrX3N5bWJvbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJQcmVzYWxlIFN0YXJ0IFRpbWVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJtb21lbnRcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmljby5zb2Z0X3N0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGRkZCwgTU1NTSBEbyBZWVlZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChVVEMpXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlByZXNhbGUgRW5kIFRpbWVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJtb21lbnRcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmljby5zb2Z0X2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRkZGQsIE1NTU0gRG8gWVlZWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVVRDKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJMaXF1aWRpdHkgUGVyY2VudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmljby5saXF1aWRpdHlfcGVyY2VudCkgKyBcIiVcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiTGlxdWlkaXR5IExvY2t1cCBUaW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaWNvLmxvY2t1cCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgZGF5cyBhZnRlciBwb29sIGVuZHNcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5pY28uc3RhZ2UgIT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaWNvLnN0YWdlID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJDb3VudGRvd25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRlYWRsaW5lOiBfdm0uaWNvLnNvZnRfc3RhcnQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmljby5zdGFnZSA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiQ291bnRkb3duXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkZWFkbGluZTogX3ZtLmljby5zb2Z0X2VuZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uaWNvLnN0YWdlID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJDb3VudGRvd25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRlYWRsaW5lOiBfdm0uaWNvLmhhcmRfZW5kIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcInZ1ZS1za2VsZXRvbi1sb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0MCxcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU1LFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBrZXk6IF92bS5pY28uc29mdF9yYWlzZWQsIHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZ3Jlc3MgKFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvTW9uZXlcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uaWNvLnNvZnRfcmFpc2VkIC8gX3ZtLmljby5zb2Z0X2NhcCkgKiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzc1wiLCBhdHRyczogeyBpZDogXCJteVJhbmdlQ29sb3JcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aDpcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uaWNvLnNvZnRfcmFpc2VkIC8gX3ZtLmljby5zb2Z0X2NhcCkgKiAxMDAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm15UmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogXCI1MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBrZXk6IF92bS5pY28uc29mdF9yYWlzZWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcInRvTW9uZXlcIikoX3ZtLmljby5zb2Z0X3JhaXNlZCwgMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5zeW1ib2wpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcInRvTW9uZXlcIikoX3ZtLmljby5zb2Z0X2NhcCwgMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5zeW1ib2wpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3RhcnRcIiwgYXR0cnM6IHsgZm9yOiBcImFtb3VudFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVjaWV2aW5nIFdhbGxldFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0xIHctYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlY193YWxsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZWNfd2FsbGV0XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJyZWNfd2FsbGV0XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVjX3dhbGxldCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVjX3dhbGxldCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0IHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlX3JlY193YWxsZXQoKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJpIGJpLWFycm93LXJlcGVhdFwiIH0pXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN0YXJ0XCIsIGF0dHJzOiB7IGZvcjogXCJhbW91bnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFtb3VudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0xIHctYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwiYW1vdW50XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uYW1vdW50IH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29zdENhbCgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmFtb3VudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0IHRleHQtbGlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pY28uc3ltYm9sKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN0YXJ0XCIsIGF0dHJzOiB7IGZvcjogXCJjb3N0XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb3N0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTEgdy1hdXRvXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29zdCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZWFkb25seTogXCJcIiwgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29zdCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY29zdCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0IHRleHQtbGlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pY28ubmV0d29ya19zeW1ib2wpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3RhcnRcIiwgYXR0cnM6IHsgZm9yOiBcImJhbGFuY2VcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkJhbGFuY2VcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsga2V5OiBfdm0uYmFsYW5jZSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmJhbGFuY2UgIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwIG1iLTEgYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJhbGFuY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS53YWxsZXRfc3ltYm9sKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMCBtYi0xIGJ0biBidG4tb3V0bGluZS13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jcmVhdGVXYWxsZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5uZXR3b3JrX3N5bWJvbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFdhbGxldFxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaWNvLnN0YXR1cyA9PSAxXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHVyY2hhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXlcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGtleTogX3ZtLmljby5zdGF0dXMgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uaWNvLnN0YXR1cyA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlVwY29taW5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5pY28uc3RhdHVzID09IDFcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW4gUHJvZ3Jlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmljby5zdGF0dXMgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNhbGUgRW5kZWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmljby5zdGF0dXMgPT0gM1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhbmNlbGVkXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkN1cnJlbnQgUmF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaWNvLm5ldHdvcmtfc3ltYm9sKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiA9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcInRvTW9uZXlcIikoX3ZtLmljby5yYXRlLCAyKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmljby5zeW1ib2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlRvdGFsIENvbnRyaWJ1dG9yc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBrZXk6IF92bS5pY28uY29udHJpYnV0b3JzIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pY28uY29udHJpYnV0b3JzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwidnVlanMtY291bnRkb3duXCIsW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcInZ1ZWpzLWNvdW50ZG93blwiXT1lKCk6dFtcInZ1ZWpzLWNvdW50ZG93blwiXT1lKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmw9ITAsby5leHBvcnRzfXZhciBuPXt9O3JldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLHIpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sZS5wPVwiXCIsZShlLnM9MSl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bnVsbDtlLmRlZmF1bHQ9e25hbWU6XCJ2dWVqc0NvdW50RG93blwiLHByb3BzOntkZWFkbGluZTp7dHlwZTpTdHJpbmd9LGVuZDp7dHlwZTpTdHJpbmd9LHN0b3A6e3R5cGU6Qm9vbGVhbn19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57bm93Ok1hdGgudHJ1bmMoKG5ldyBEYXRlKS5nZXRUaW1lKCkvMWUzKSxkYXRlOm51bGwsZGlmZjowfX0sY3JlYXRlZDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7aWYoIXRoaXMuZGVhZGxpbmUmJiF0aGlzLmVuZCl0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHByb3BzICdkZWFkbGluZScgb3IgJ2VuZCdcIik7dmFyIGU9dGhpcy5kZWFkbGluZT90aGlzLmRlYWRsaW5lOnRoaXMuZW5kO2lmKHRoaXMuZGF0ZT1NYXRoLnRydW5jKERhdGUucGFyc2UoZS5yZXBsYWNlKC8tL2csXCIvXCIpKS8xZTMpLCF0aGlzLmRhdGUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wcyB2YWx1ZSwgY29ycmVjdCB0aGUgJ2RlYWRsaW5lJyBvciAnZW5kJ1wiKTtyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dC5ub3c9TWF0aC50cnVuYygobmV3IERhdGUpLmdldFRpbWUoKS8xZTMpfSwxZTMpfSxjb21wdXRlZDp7c2Vjb25kczpmdW5jdGlvbigpe3JldHVybiBNYXRoLnRydW5jKHRoaXMuZGlmZiklNjB9LG1pbnV0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC50cnVuYyh0aGlzLmRpZmYvNjApJTYwfSxob3VyczpmdW5jdGlvbigpe3JldHVybiBNYXRoLnRydW5jKHRoaXMuZGlmZi82MC82MCklMjR9LGRheXM6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC50cnVuYyh0aGlzLmRpZmYvNjAvNjAvMjQpfX0sd2F0Y2g6e25vdzpmdW5jdGlvbih0KXt0aGlzLmRpZmY9dGhpcy5kYXRlLXRoaXMubm93LCh0aGlzLmRpZmY8PTB8fHRoaXMuc3RvcCkmJih0aGlzLmRpZmY9MCxjbGVhckludGVydmFsKHIpKX19LGZpbHRlcnM6e3R3b0RpZ2l0czpmdW5jdGlvbih0KXtyZXR1cm4gdC50b1N0cmluZygpLmxlbmd0aDw9MT9cIjBcIit0LnRvU3RyaW5nKCk6dC50b1N0cmluZygpfX0sZGVzdHJveWVkOmZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChyKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtuKDIpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oMCksaT1uLm4obyk7Zm9yKHZhciBzIGluIG8pXCJkZWZhdWx0XCIhPT1zJiZmdW5jdGlvbih0KXtuLmQoZSx0LGZ1bmN0aW9uKCl7cmV0dXJuIG9bdF19KX0ocyk7dmFyIGE9big4KSx1PW4oNyksYz1yLGQ9dShpLmEsYS5hLCExLGMsbnVsbCxudWxsKTtlLmRlZmF1bHQ9ZC5leHBvcnRzfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1t0LmkscixcIlwiXV0pLHIubG9jYWxzJiYodC5leHBvcnRzPXIubG9jYWxzKTtuKDUpKFwiNjMwZDQ3NmVcIixyLCEwLHt9KX0sZnVuY3Rpb24odCxlLG4pe2U9dC5leHBvcnRzPW4oNCkoITEpLGUucHVzaChbdC5pLCcudnVlanMtY291bnRkb3due3BhZGRpbmc6MDttYXJnaW46MH0udnVlanMtY291bnRkb3duIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDhweDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZX0udnVlanMtY291bnRkb3duIGxpIHB7bWFyZ2luOjB9LnZ1ZWpzLWNvdW50ZG93biBsaTphZnRlcntjb250ZW50OlwiOlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0Oi0xM3B4O2ZvbnQtc2l6ZTozMnB4fS52dWVqcy1jb3VudGRvd24gbGk6Zmlyc3Qtb2YtdHlwZXttYXJnaW4tbGVmdDowfS52dWVqcy1jb3VudGRvd24gbGk6bGFzdC1vZi10eXBle21hcmdpbi1yaWdodDowfS52dWVqcy1jb3VudGRvd24gbGk6bGFzdC1vZi10eXBlOmFmdGVye2NvbnRlbnQ6XCJcIn0udnVlanMtY291bnRkb3duIC5kaWdpdHtmb250LXNpemU6MzJweDtmb250LXdlaWdodDo2MDA7bGluZS1oZWlnaHQ6MS40O21hcmdpbi1ib3R0b206MH0udnVlanMtY291bnRkb3duIC50ZXh0e3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjA7Zm9udC1zaXplOjEwcHh9JyxcIlwiXSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUpe3ZhciBuPXRbMV18fFwiXCIsbz10WzNdO2lmKCFvKXJldHVybiBuO2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBpPXIobyk7cmV0dXJuW25dLmNvbmNhdChvLnNvdXJjZXMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIitvLnNvdXJjZVJvb3QrdCtcIiAqL1wifSkpLmNvbmNhdChbaV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gcih0KXtyZXR1cm5cIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0KSkpKStcIiAqL1wifXQuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXt2YXIgcj1uKGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIityK1wifVwiOnJ9KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIHI9e30sbz0wO288dGhpcy5sZW5ndGg7bysrKXt2YXIgaT10aGlzW29dWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYocltpXT0hMCl9Zm9yKG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHM9dFtvXTtcIm51bWJlclwiPT10eXBlb2Ygc1swXSYmcltzWzBdXXx8KG4mJiFzWzJdP3NbMl09bjpuJiYoc1syXT1cIihcIitzWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChzKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe2Z1bmN0aW9uIHIodCl7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspe3ZhciBuPXRbZV0scj1kW24uaWRdO2lmKHIpe3IucmVmcysrO2Zvcih2YXIgbz0wO288ci5wYXJ0cy5sZW5ndGg7bysrKXIucGFydHNbb10obi5wYXJ0c1tvXSk7Zm9yKDtvPG4ucGFydHMubGVuZ3RoO28rKylyLnBhcnRzLnB1c2goaShuLnBhcnRzW29dKSk7ci5wYXJ0cy5sZW5ndGg+bi5wYXJ0cy5sZW5ndGgmJihyLnBhcnRzLmxlbmd0aD1uLnBhcnRzLmxlbmd0aCl9ZWxzZXtmb3IodmFyIHM9W10sbz0wO288bi5wYXJ0cy5sZW5ndGg7bysrKXMucHVzaChpKG4ucGFydHNbb10pKTtkW24uaWRdPXtpZDpuLmlkLHJlZnM6MSxwYXJ0czpzfX19fWZ1bmN0aW9uIG8oKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIHQudHlwZT1cInRleHQvY3NzXCIsZi5hcHBlbmRDaGlsZCh0KSx0fWZ1bmN0aW9uIGkodCl7dmFyIGUsbixyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtcIittKyd+PVwiJyt0LmlkKydcIl0nKTtpZihyKXtpZih2KXJldHVybiBoO3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKX1pZihfKXt2YXIgaT1wKys7cj1sfHwobD1vKCkpLGU9cy5iaW5kKG51bGwscixpLCExKSxuPXMuYmluZChudWxsLHIsaSwhMCl9ZWxzZSByPW8oKSxlPWEuYmluZChudWxsLHIpLG49ZnVuY3Rpb24oKXtyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocil9O3JldHVybiBlKHQpLGZ1bmN0aW9uKHIpe2lmKHIpe2lmKHIuY3NzPT09dC5jc3MmJnIubWVkaWE9PT10Lm1lZGlhJiZyLnNvdXJjZU1hcD09PXQuc291cmNlTWFwKXJldHVybjtlKHQ9cil9ZWxzZSBuKCl9fWZ1bmN0aW9uIHModCxlLG4scil7dmFyIG89bj9cIlwiOnIuY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD15KGUsbyk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvKSxzPXQuY2hpbGROb2RlcztzW2VdJiZ0LnJlbW92ZUNoaWxkKHNbZV0pLHMubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKGksc1tlXSk6dC5hcHBlbmRDaGlsZChpKX19ZnVuY3Rpb24gYSh0LGUpe3ZhciBuPWUuY3NzLHI9ZS5tZWRpYSxvPWUuc291cmNlTWFwO2lmKHImJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKSxnLnNzcklkJiZ0LnNldEF0dHJpYnV0ZShtLGUuaWQpLG8mJihuKz1cIlxcbi8qIyBzb3VyY2VVUkw9XCIrby5zb3VyY2VzWzBdK1wiICovXCIsbis9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG8pKSkpK1wiICovXCIpLHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD1uO2Vsc2V7Zm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX19dmFyIHU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50O2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBERUJVRyYmREVCVUcmJiF1KXRocm93IG5ldyBFcnJvcihcInZ1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIik7dmFyIGM9big2KSxkPXt9LGY9dSYmKGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSksbD1udWxsLHA9MCx2PSExLGg9ZnVuY3Rpb24oKXt9LGc9bnVsbCxtPVwiZGF0YS12dWUtc3NyLWlkXCIsXz1cInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixvKXt2PW4sZz1vfHx7fTt2YXIgaT1jKHQsZSk7cmV0dXJuIHIoaSksZnVuY3Rpb24oZSl7Zm9yKHZhciBuPVtdLG89MDtvPGkubGVuZ3RoO28rKyl7dmFyIHM9aVtvXSxhPWRbcy5pZF07YS5yZWZzLS0sbi5wdXNoKGEpfWU/KGk9Yyh0LGUpLHIoaSkpOmk9W107Zm9yKHZhciBvPTA7bzxuLmxlbmd0aDtvKyspe3ZhciBhPW5bb107aWYoMD09PWEucmVmcyl7Zm9yKHZhciB1PTA7dTxhLnBhcnRzLmxlbmd0aDt1KyspYS5wYXJ0c1t1XSgpO2RlbGV0ZSBkW2EuaWRdfX19fTt2YXIgeT1mdW5jdGlvbigpe3ZhciB0PVtdO3JldHVybiBmdW5jdGlvbihlLG4pe3JldHVybiB0W2VdPW4sdC5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX19KCl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPVtdLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgaT1lW29dLHM9aVswXSxhPWlbMV0sdT1pWzJdLGM9aVszXSxkPXtpZDp0K1wiOlwiK28sY3NzOmEsbWVkaWE6dSxzb3VyY2VNYXA6Y307cltzXT9yW3NdLnBhcnRzLnB1c2goZCk6bi5wdXNoKHJbc109e2lkOnMscGFydHM6W2RdfSl9cmV0dXJuIG59fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbixyLG8saSl7dmFyIHMsYT10PXR8fHt9LHU9dHlwZW9mIHQuZGVmYXVsdDtcIm9iamVjdFwiIT09dSYmXCJmdW5jdGlvblwiIT09dXx8KHM9dCxhPXQuZGVmYXVsdCk7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLm9wdGlvbnM6YTtlJiYoYy5yZW5kZXI9ZS5yZW5kZXIsYy5zdGF0aWNSZW5kZXJGbnM9ZS5zdGF0aWNSZW5kZXJGbnMsYy5fY29tcGlsZWQ9ITApLG4mJihjLmZ1bmN0aW9uYWw9ITApLG8mJihjLl9zY29wZUlkPW8pO3ZhciBkO2lmKGk/KGQ9ZnVuY3Rpb24odCl7dD10fHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsdHx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fCh0PV9fVlVFX1NTUl9DT05URVhUX18pLHImJnIuY2FsbCh0aGlzLHQpLHQmJnQuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQoaSl9LGMuX3NzclJlZ2lzdGVyPWQpOnImJihkPXIpLGQpe3ZhciBmPWMuZnVuY3Rpb25hbCxsPWY/Yy5yZW5kZXI6Yy5iZWZvcmVDcmVhdGU7Zj8oYy5faW5qZWN0U3R5bGVzPWQsYy5yZW5kZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZC5jYWxsKGUpLGwodCxlKX0pOmMuYmVmb3JlQ3JlYXRlPWw/W10uY29uY2F0KGwsZCk6W2RdfXJldHVybntlc01vZHVsZTpzLGV4cG9ydHM6YSxvcHRpb25zOmN9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuJGNyZWF0ZUVsZW1lbnQsbj10Ll9zZWxmLl9jfHxlO3JldHVybiBuKFwidWxcIix7c3RhdGljQ2xhc3M6XCJ2dWVqcy1jb3VudGRvd25cIn0sW3QuZGF5cz4wP24oXCJsaVwiLFtuKFwicFwiLHtzdGF0aWNDbGFzczpcImRpZ2l0XCJ9LFt0Ll92KHQuX3ModC5fZihcInR3b0RpZ2l0c1wiKSh0LmRheXMpKSldKSx0Ll92KFwiIFwiKSxuKFwicFwiLHtzdGF0aWNDbGFzczpcInRleHRcIn0sW3QuX3YodC5fcyh0LmRheXM+MT9cImRheXNcIjpcImRheVwiKSldKV0pOnQuX2UoKSx0Ll92KFwiIFwiKSxuKFwibGlcIixbbihcInBcIix7c3RhdGljQ2xhc3M6XCJkaWdpdFwifSxbdC5fdih0Ll9zKHQuX2YoXCJ0d29EaWdpdHNcIikodC5ob3VycykpKV0pLHQuX3YoXCIgXCIpLG4oXCJwXCIse3N0YXRpY0NsYXNzOlwidGV4dFwifSxbdC5fdih0Ll9zKHQuaG91cnM+MT9cImhvdXJzXCI6XCJob3VyXCIpKV0pXSksdC5fdihcIiBcIiksbihcImxpXCIsW24oXCJwXCIse3N0YXRpY0NsYXNzOlwiZGlnaXRcIn0sW3QuX3YodC5fcyh0Ll9mKFwidHdvRGlnaXRzXCIpKHQubWludXRlcykpKV0pLHQuX3YoXCIgXCIpLG4oXCJwXCIse3N0YXRpY0NsYXNzOlwidGV4dFwifSxbdC5fdihcIm1pblwiKV0pXSksdC5fdihcIiBcIiksbihcImxpXCIsW24oXCJwXCIse3N0YXRpY0NsYXNzOlwiZGlnaXRcIn0sW3QuX3YodC5fcyh0Ll9mKFwidHdvRGlnaXRzXCIpKHQuc2Vjb25kcykpKV0pLHQuX3YoXCIgXCIpLG4oXCJwXCIse3N0YXRpY0NsYXNzOlwidGV4dFwifSxbdC5fdihcIlNlY1wiKV0pXSldKX0sbz1bXSxpPXtyZW5kZXI6cixzdGF0aWNSZW5kZXJGbnM6b307ZS5hPWl9XSl9KTsiXSwibmFtZXMiOlsiY29tcG9uZW50cyIsIkNvdW50ZG93biIsImRhdGEiLCJ1c2VyIiwiaWNvIiwiYW1vdW50IiwicmVjX3dhbGxldCIsIndhbGxldF9zeW1ib2wiLCJiYWxhbmNlIiwiY29zdCIsImxvYWRpbmciLCJtZXRob2RzIiwiZ29CYWNrIiwid2luZG93IiwiZmV0Y2hEYXRhIiwicG9zdCIsInRoZW4iLCJwdXJjaGFzZSIsImljb19zeW1ib2wiLCJpY29faWQiLCJzeW1ib2wiLCJmZXRjaFdhbGxldCIsInR5cGUiLCJjcmVhdGVXYWxsZXQiLCJjaGFuZ2VfcmVjX3dhbGxldCIsIm5ldHdvcmtfc3ltYm9sIiwiY29zdENhbCIsImNyZWF0ZWQiLCJtb3VudGVkIiwiZGVzdHJveWVkIl0sInNvdXJjZVJvb3QiOiIifQ==