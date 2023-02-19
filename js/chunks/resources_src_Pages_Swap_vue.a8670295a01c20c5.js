"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_Swap_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var serverUrl = "https://t6cacka4pekq.usemoralis.com:2053/server";
var appId = "R8897AYP30KpXaJSrGuvtpqZGo5gUzmCHR0ydxUu";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // component list
  components: {},
  // component data
  data: function data() {
    return {
      currentUser: {},
      currentTrade: {},
      currentSelectSide: {},
      tokens: {},
      address: {},
      amount: {}
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    init: function init() {
      var _this = this;

      return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
        return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Moralis.start({
                  serverUrl: serverUrl,
                  appId: appId
                });

              case 2:
                _context.next = 4;
                return Moralis.enableWeb3();

              case 4:
                _context.next = 6;
                return _this.listAvailableTokens();

              case 6:
                _this.currentUser = Moralis.User.current();

                if (_this.currentUser) {
                  document.getElementById("swap_button").disabled = false;
                  document.getElementById("swap_button").innerText = "Swap";
                } else {
                  document.getElementById("swap_button").innerText = "Connect Wallet First";
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    listAvailableTokens: function listAvailableTokens() {
      var _this2 = this;

      return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var result, parent, _loop, address;

        return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Moralis.Plugins.oneInch.getSupportedTokens({
                  chain: "eth" // The blockchain you want to use (eth/bsc/polygon)

                });

              case 2:
                result = _context2.sent;
                parent = document.getElementById("token_list");
                _this2.tokens = result.tokens;

                _loop = function _loop(address) {
                  var token = _this2.tokens[address];

                  if (token.symbol != "BTC++") {
                    var _div = document.createElement("div");

                    _div.setAttribute("data-address", address);

                    _div.className = "token_row";
                    var html = "\n            <a class=\"dropdown-item\" ><img class=\"token_list_img me-1\" height=\"36px\" width=\"36px\" src=\"../../assets/images/cryptoCurrency/".concat(token.symbol, ".png\"  loading=\"lazy\">\n            <span class=\"token_list_text\">").concat(token.symbol, "</span></a>\n            ");
                    _div.innerHTML = html;

                    _div.onclick = function () {
                      _this2.selectToken(address);
                    };

                    parent.appendChild(_div);
                  }
                };

                for (address in _this2.tokens) {
                  _loop(address);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    filterFunction: function filterFunction() {
      var input, filter, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");

      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    },
    selectToken: function selectToken(address) {
      this.closeModal();
      console.log(this.tokens);
      this.currentTrade[this.currentSelectSide] = this.tokens[address];
      this.renderInterface();
      console.log(this.currentTrade);
      this.getQuote();
    },
    renderInterface: function renderInterface() {
      if (this.currentTrade.from) {
        document.getElementById("from_token_img").src = this.currentTrade.from.logoURI;
        document.getElementById("from_token_img").classList.remove("hidden");
        document.getElementById("from_token_text").innerHTML = this.currentTrade.from.symbol;
      }

      if (this.currentTrade.to) {
        document.getElementById("to_token_img").src = this.currentTrade.to.logoURI;
        document.getElementById("to_token_img").classList.remove("hidden");
        document.getElementById("to_token_text").innerHTML = this.currentTrade.to.symbol;
      }
    },
    openModal: function openModal(side) {
      this.currentSelectSide = side;
      document.getElementById("token_modal").style.display = "block";
    },
    closeModal: function closeModal() {
      document.getElementById("token_modal").style.display = "none";
    },
    getQuote: function getQuote() {
      var _this3 = this;

      return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
        var quote;
        return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_this3.currentTrade.from || !_this3.currentTrade.to || !document.getElementById("from_amount").value)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _this3.amount = Number(document.getElementById("from_amount").value * Math.pow(10, _this3.currentTrade.from.decimals));
                _context3.next = 5;
                return Moralis.Plugins.oneInch.quote({
                  chain: "eth",
                  // The blockchain you want to use (eth/bsc/polygon)
                  fromTokenAddress: _this3.currentTrade.from.address,
                  // The token you want to swap
                  toTokenAddress: _this3.currentTrade.to.address,
                  // The token you want to receive
                  amount: amount
                });

              case 5:
                quote = _context3.sent;
                document.getElementById("gas_estimate").innerHTML = quote.estimatedGas;
                document.getElementById("to_amount").value = quote.toTokenAmount / Math.pow(10, quote.toToken.decimals);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    trySwap: function trySwap() {
      var _this4 = this;

      return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4() {
        var allowance, receipt;
        return (0,C_xampp_htdocs_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.address = Moralis.User.current().get("ethAddress");
                _this4.amount = Number(document.getElementById("from_amount").value * Math.pow(10, _this4.currentTrade.from.decimals));

                if (!(_this4.currentTrade.from.symbol !== "ETH")) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 5;
                return Moralis.Plugins.oneInch.hasAllowance({
                  chain: "eth",
                  // The blockchain you want to use (eth/bsc/polygon)
                  fromTokenAddress: _this4.currentTrade.from.address,
                  // The token you want to swap
                  fromAddress: _this4.address,
                  // Your wallet address
                  amount: _this4.amount
                });

              case 5:
                allowance = _context4.sent;
                console.log(allowance);

                if (allowance) {
                  _context4.next = 10;
                  break;
                }

                _context4.next = 10;
                return Moralis.Plugins.oneInch.approve({
                  chain: "eth",
                  // The blockchain you want to use (eth/bsc/polygon)
                  tokenAddress: _this4.currentTrade.from.address,
                  // The token you want to swap
                  fromAddress: _this4.address // Your wallet address

                });

              case 10:
                _context4.prev = 10;
                _context4.next = 13;
                return _this4.doSwap(_this4.address, _this4.amount);

              case 13:
                receipt = _context4.sent;
                notify("success", "Swap Completed Successfully");
                _context4.next = 21;
                break;

              case 17:
                _context4.prev = 17;
                _context4.t0 = _context4["catch"](10);
                notify("warning", "Swap Failed");
                console.log(_context4.t0);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[10, 17]]);
      }))();
    },
    doSwap: function doSwap(userAddress, amount) {
      return Moralis.Plugins.oneInch.swap({
        chain: "eth",
        // The blockchain you want to use (eth/bsc/polygon)
        fromTokenAddress: this.currentTrade.from.address,
        // The token you want to swap
        toTokenAddress: this.currentTrade.to.address,
        // The token you want to receive
        amount: amount,
        fromAddress: userAddress,
        // Your wallet address
        slippage: 1
      });
    }
  },
  // on component created
  created: function created() {
    this.init();
  },
  // on component mounted
  mounted: function mounted() {
    /*const plugin1 = document.createElement("script");
    plugin1.setAttribute(
        "src",
        "https://unpkg.com/moralis/dist/moralis.js"
    );
    plugin1.async = true;
    document.head.appendChild(plugin1);
    const plugin2 = document.createElement("script");
    plugin2.setAttribute(
        "src",
        "https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"
    );
    plugin2.async = true;
    document.head.appendChild(plugin2);*/
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./resources/src/Pages/Swap.vue":
/*!**************************************!*\
  !*** ./resources/src/Pages/Swap.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Swap.vue?vue&type=template&id=24dbaf81& */ "./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81&");
/* harmony import */ var _Swap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Swap.vue?vue&type=script&lang=js& */ "./resources/src/Pages/Swap.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Swap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__.render,
  _Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/Swap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/Swap.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/src/Pages/Swap.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Swap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Swap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81&":
/*!*********************************************************************!*\
  !*** ./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Swap_vue_vue_type_template_id_24dbaf81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Swap.vue?vue&type=template&id=24dbaf81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Swap.vue?vue&type=template&id=24dbaf81& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-7 col-md-6 col-sm-12 col-12" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-5 col-md-6 col-sm-12 col-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { attrs: { id: "form" } }, [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center rounded shadow darked",
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-flat-info dropdown-toggle ms-1 w-50 d-flex justify-content-between align-items-center",
                      attrs: { type: "button", id: "from_token_select" },
                      on: {
                        click: function ($event) {
                          return _vm.openModal("from")
                        },
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "token_image hidden",
                        attrs: {
                          height: "36px",
                          width: "36px",
                          id: "from_token_img",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "from_token_text" } }, [
                        _vm._v("Select Coin"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "swapbox_select w-50 m-1" }, [
                    _c("input", {
                      staticClass: "number form-control",
                      attrs: { placeholder: "amount", id: "from_amount" },
                      on: { click: _vm.getQuote },
                    }),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-between align-items-center my-1 rounded shadow darked",
                },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-flat-info dropdown-toggle ms-1 w-50 d-flex justify-content-between align-items-center",
                      attrs: { type: "button", id: "to_token_select" },
                      on: {
                        click: function ($event) {
                          return _vm.openModal("to")
                        },
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "token_image hidden",
                        attrs: {
                          height: "36px",
                          width: "36px",
                          id: "to_token_img",
                        },
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "to_token_text" } }, [
                        _vm._v("Select Coin"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1),
                ]
              ),
              _vm._v(" "),
              _vm._m(2),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary w-100",
                  attrs: { disabled: "", id: "swap_button" },
                  on: { click: _vm.trySwap },
                },
                [
                  _vm._v(
                    "\n                            Connecting\n                        "
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal",
        attrs: { id: "token_modal", tabindex: "-1", role: "dialog" },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-sm", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v("Select token"),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "close btn-close",
                  attrs: {
                    id: "modal_close",
                    type: "button",
                    "data-dismiss": "modal",
                    "aria-label": "Close",
                  },
                  on: { click: _vm.closeModal },
                }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal-body modal-swap",
                  attrs: { id: "myDropdown" },
                },
                [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Search..",
                      id: "myInput",
                      autocomplete: "off",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.filterFunction()
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticStyle: {
                      "max-height": "600px",
                      "overflow-y": "auto",
                    },
                    attrs: { id: "token_list" },
                  }),
                ]
              ),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h4", [_vm._v("Swap")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "swapbox_select w-50 m-1" }, [
      _c("input", {
        staticClass: "number form-control",
        attrs: { placeholder: "calculating..", id: "to_amount", disabled: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rounded shadow p-1 darked" }, [
      _vm._v(
        "\n                            Estimated Gas:\n                            "
      ),
      _c("span", {
        staticClass: "text-warning",
        attrs: { id: "gas_estimate" },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19zcmNfUGFnZXNfU3dhcF92dWUuYTg2NzAyOTVhMDFjMjBjNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSEE7QUFDQTtBQUVBLGlFQUFlO0VBQ2Y7RUFDQUEsY0FGQTtFQUlBO0VBQ0FDLElBTEEsa0JBS0E7SUFDQTtNQUNBQyxlQURBO01BRUFDLGdCQUZBO01BR0FDLHFCQUhBO01BSUFDLFVBSkE7TUFLQUMsV0FMQTtNQU1BQztJQU5BO0VBUUEsQ0FkQTtFQWdCQTtFQUNBQztJQUNBQyxNQURBLG9CQUNBO01BQ0FDLDRCQUNBLG1CQURBLEdBRUEsc0JBRkE7SUFHQSxDQUxBO0lBTUFDLElBTkEsa0JBTUE7TUFBQTs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0FDO2tCQUNBQyxvQkFEQTtrQkFFQUM7Z0JBRkEsRUFEQTs7Y0FBQTtnQkFBQTtnQkFBQSxPQUtBRixvQkFMQTs7Y0FBQTtnQkFBQTtnQkFBQSxPQU1BLDJCQU5BOztjQUFBO2dCQU9BOztnQkFDQTtrQkFDQUc7a0JBQ0FBO2dCQUNBLENBSEEsTUFHQTtrQkFDQUEsbURBQ0Esc0JBREE7Z0JBRUE7O2NBZEE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBZUEsQ0FyQkE7SUFzQkFDLG1CQXRCQSxpQ0FzQkE7TUFBQTs7TUFBQTtRQUFBOztRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0FKO2tCQUNBSyxZQURBLENBQ0E7O2dCQURBLEVBREE7O2NBQUE7Z0JBQ0FDLE1BREE7Z0JBSUFDLE1BSkEsR0FJQUoscUNBSkE7Z0JBTUE7O2dCQU5BLHVCQU9BVCxPQVBB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O0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDZCQUE2QixrQkFBa0I7QUFDL0MsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9EO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQTZEO0FBQzlFLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBMEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckMsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWU/ZDE0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlP2JjZWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZT83OWZmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTcgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy01IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Td2FwPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcm91bmRlZCBzaGFkb3cgZGFya2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tX3Rva2VuX3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuTW9kYWwoJ2Zyb20nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRva2VuX2ltYWdlIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZyb21fdG9rZW5faW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImZyb21fdG9rZW5fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNlbGVjdCBDb2luPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibnVtYmVyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnJvbV9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG15LTEgcm91bmRlZCBzaGFkb3cgZGFya2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b190b2tlbl9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsKCd0bycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9rZW5faW1hZ2UgaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fdG9rZW5faW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRvX3Rva2VuX3RleHRcIj5TZWxlY3QgQ29pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwYm94X3NlbGVjdCB3LTUwIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJudW1iZXIgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhbGN1bGF0aW5nLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQgc2hhZG93IHAtMSBkYXJrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIEdhczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZ2FzX2VzdGltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dhcF9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0cnlTd2FwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJ0b2tlbl9tb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5TZWxlY3QgdG9rZW48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9kYWxfY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2UgYnRuLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IG1vZGFsLXN3YXBcIiBpZD1cIm15RHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmaWx0ZXJGdW5jdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRva2VuX2xpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogNjAwcHg7IG92ZXJmbG93LXk6IGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vdDZjYWNrYTRwZWtxLnVzZW1vcmFsaXMuY29tOjIwNTMvc2VydmVyXCI7XG5jb25zdCBhcHBJZCA9IFwiUjg4OTdBWVAzMEtwWGFKU3JHdXZ0cHFaR281Z1V6bUNIUjB5ZHhVdVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gY29tcG9uZW50IGxpc3RcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIC8vIGNvbXBvbmVudCBkYXRhXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7fSxcbiAgICAgICAgICAgIGN1cnJlbnRUcmFkZToge30sXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0U2lkZToge30sXG4gICAgICAgICAgICB0b2tlbnM6IHt9LFxuICAgICAgICAgICAgYWRkcmVzczoge30sXG4gICAgICAgICAgICBhbW91bnQ6IHt9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBjdXN0b20gbWV0aG9kc1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ29CYWNrKCkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBpbml0KCkge1xuICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7XG4gICAgICAgICAgICAgICAgc2VydmVyVXJsLFxuICAgICAgICAgICAgICAgIGFwcElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCBNb3JhbGlzLmVuYWJsZVdlYjMoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubGlzdEF2YWlsYWJsZVRva2VucygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IE1vcmFsaXMuVXNlci5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhcF9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3YXBfYnV0dG9uXCIpLmlubmVyVGV4dCA9IFwiU3dhcFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3YXBfYnV0dG9uXCIpLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIFwiQ29ubmVjdCBXYWxsZXQgRmlyc3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbGlzdEF2YWlsYWJsZVRva2VucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLmdldFN1cHBvcnRlZFRva2Vucyh7XG4gICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2tlbl9saXN0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnRva2VucyA9IHJlc3VsdC50b2tlbnM7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZHJlc3MgaW4gdGhpcy50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2Vuc1thZGRyZXNzXTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3ltYm9sICE9IFwiQlRDKytcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwidG9rZW5fcm93XCI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgPjxpbWcgY2xhc3M9XCJ0b2tlbl9saXN0X2ltZyBtZS0xXCIgaGVpZ2h0PVwiMzZweFwiIHdpZHRoPVwiMzZweFwiIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY3J5cHRvQ3VycmVuY3kvJHt0b2tlbi5zeW1ib2x9LnBuZ1wiICBsb2FkaW5nPVwibGF6eVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2tlbl9saXN0X3RleHRcIj4ke3Rva2VuLnN5bWJvbH08L3NwYW4+PC9hPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUb2tlbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJGdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCwgZmlsdGVyLCBhLCBpO1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIik7XG4gICAgICAgICAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpO1xuICAgICAgICAgICAgYSA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHR4dFZhbHVlID0gYVtpXS50ZXh0Q29udGVudCB8fCBhW2ldLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0VG9rZW4oYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRva2Vucyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZVt0aGlzLmN1cnJlbnRTZWxlY3RTaWRlXSA9IHRoaXMudG9rZW5zW2FkZHJlc3NdO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRyYWRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVvdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVySW50ZXJmYWNlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWRlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fdG9rZW5faW1nXCIpLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLmZyb20ubG9nb1VSSTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX3Rva2VuX2ltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fdG9rZW5fdGV4dFwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLnN5bWJvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFkZS50bykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5faW1nXCIpLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLnRvLmxvZ29VUkk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5faW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5fdGV4dFwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS50by5zeW1ib2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5Nb2RhbChzaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RTaWRlID0gc2lkZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZW5fbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZW5fbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGdldFF1b3RlKCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF0aGlzLmN1cnJlbnRUcmFkZS5mcm9tIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuY3VycmVudFRyYWRlLnRvIHx8XG4gICAgICAgICAgICAgICAgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV9hbW91bnRcIikudmFsdWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV9hbW91bnRcIikudmFsdWUgKlxuICAgICAgICAgICAgICAgICAgICAxMCAqKiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmRlY2ltYWxzXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBxdW90ZSA9IGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLnF1b3RlKHtcbiAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgZnJvbVRva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gc3dhcFxuICAgICAgICAgICAgICAgIHRvVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS50by5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhc19lc3RpbWF0ZVwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIHF1b3RlLmVzdGltYXRlZEdhcztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fYW1vdW50XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICBxdW90ZS50b1Rva2VuQW1vdW50IC8gMTAgKiogcXVvdGUudG9Ub2tlbi5kZWNpbWFscztcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB0cnlTd2FwKCkge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gTW9yYWxpcy5Vc2VyLmN1cnJlbnQoKS5nZXQoXCJldGhBZGRyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX2Ftb3VudFwiKS52YWx1ZSAqXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHRoaXMuY3VycmVudFRyYWRlLmZyb20uZGVjaW1hbHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhZGUuZnJvbS5zeW1ib2wgIT09IFwiRVRIXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5oYXNBbGxvd2FuY2Uoe1xuICAgICAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgIGZyb21Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IHRoaXMuYWRkcmVzcywgLy8gWW91ciB3YWxsZXQgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbG93YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGxvd2FuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guYXBwcm92ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzOiB0aGlzLmFkZHJlc3MsIC8vIFlvdXIgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjZWlwdCA9IGF3YWl0IHRoaXMuZG9Td2FwKHRoaXMuYWRkcmVzcywgdGhpcy5hbW91bnQpO1xuICAgICAgICAgICAgICAgIG5vdGlmeShcInN1Y2Nlc3NcIiwgXCJTd2FwIENvbXBsZXRlZCBTdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG5vdGlmeShcIndhcm5pbmdcIiwgXCJTd2FwIEZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvU3dhcCh1c2VyQWRkcmVzcywgYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guc3dhcCh7XG4gICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgICAgIGZyb21Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICB0b1Rva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUudG8uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHJlY2VpdmVcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBmcm9tQWRkcmVzczogdXNlckFkZHJlc3MsIC8vIFlvdXIgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgICAgICAgICBzbGlwcGFnZTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgbW91bnRlZFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8qY29uc3QgcGx1Z2luMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHBsdWdpbjEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly91bnBrZy5jb20vbW9yYWxpcy9kaXN0L21vcmFsaXMuanNcIlxuICAgICAgICApO1xuICAgICAgICBwbHVnaW4xLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwbHVnaW4xKTtcbiAgICAgICAgY29uc3QgcGx1Z2luMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHBsdWdpbjIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93ZWIzQGxhdGVzdC9kaXN0L3dlYjMubWluLmpzXCJcbiAgICAgICAgKTtcbiAgICAgICAgcGx1Z2luMi5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGx1Z2luMik7Ki9cbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGRlc3Ryb3llZFxuICAgIGRlc3Ryb3llZCgpIHt9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGRiYWY4MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNGRiYWY4MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNGRiYWY4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNGRiYWY4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3dhcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRkYmFmODEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjRkYmFmODEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2FwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGRiYWY4MSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTcgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTUgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiZm9ybVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciByb3VuZGVkIHNoYWRvdyBkYXJrZWRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImZyb21fdG9rZW5fc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTW9kYWwoXCJmcm9tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2tlbl9pbWFnZSBoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZnJvbV90b2tlbl9pbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJmcm9tX3Rva2VuX3RleHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBDb2luXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bWJlciBmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJhbW91bnRcIiwgaWQ6IFwiZnJvbV9hbW91bnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ2V0UXVvdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0xIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwidG9fdG9rZW5fc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTW9kYWwoXCJ0b1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9rZW5faW1hZ2UgaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRvX3Rva2VuX2ltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInRvX3Rva2VuX3RleHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBDb2luXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogXCJcIiwgaWQ6IFwic3dhcF9idXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50cnlTd2FwIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWxcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwidG9rZW5fbW9kYWxcIiwgdGFiaW5kZXg6IFwiLTFcIiwgcm9sZTogXCJkaWFsb2dcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVwiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IHRva2VuXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgYnRuLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJtb2RhbF9jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZU1vZGFsIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHkgbW9kYWwtc3dhcFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibXlEcm9wZG93blwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJteUlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbHRlckZ1bmN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjYwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0b2tlbl9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJTd2FwXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibnVtYmVyIGZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJjYWxjdWxhdGluZy4uXCIsIGlkOiBcInRvX2Ftb3VudFwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRlZCBzaGFkb3cgcC0xIGRhcmtlZFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIEdhczpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICksXG4gICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZ2FzX2VzdGltYXRlXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnRVc2VyIiwiY3VycmVudFRyYWRlIiwiY3VycmVudFNlbGVjdFNpZGUiLCJ0b2tlbnMiLCJhZGRyZXNzIiwiYW1vdW50IiwibWV0aG9kcyIsImdvQmFjayIsIndpbmRvdyIsImluaXQiLCJNb3JhbGlzIiwic2VydmVyVXJsIiwiYXBwSWQiLCJkb2N1bWVudCIsImxpc3RBdmFpbGFibGVUb2tlbnMiLCJjaGFpbiIsInJlc3VsdCIsInBhcmVudCIsImRpdiIsInRva2VuIiwiZmlsdGVyRnVuY3Rpb24iLCJpbnB1dCIsImZpbHRlciIsImEiLCJ0eHRWYWx1ZSIsInNlbGVjdFRva2VuIiwiY29uc29sZSIsInJlbmRlckludGVyZmFjZSIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib3Blbk1vZGFsIiwic2lkZSIsImNsb3NlTW9kYWwiLCJnZXRRdW90ZSIsImZyb21Ub2tlbkFkZHJlc3MiLCJ0b1Rva2VuQWRkcmVzcyIsInF1b3RlIiwidHJ5U3dhcCIsImZyb21BZGRyZXNzIiwiYWxsb3dhbmNlIiwidG9rZW5BZGRyZXNzIiwicmVjZWlwdCIsIm5vdGlmeSIsImRvU3dhcCIsInVzZXJBZGRyZXNzIiwic2xpcHBhZ2UiLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCJdLCJzb3VyY2VSb290IjoiIn0=