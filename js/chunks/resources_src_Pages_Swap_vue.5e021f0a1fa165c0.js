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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result, parent, _loop, address;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var quote;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
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

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var allowance, receipt;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19zcmNfUGFnZXNfU3dhcF92dWUuNWUwMjFmMGExZmExNjVjMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEhBO0FBQ0E7QUFFQSxpRUFBZTtFQUNmO0VBQ0FBLGNBRkE7RUFJQTtFQUNBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUMsZUFEQTtNQUVBQyxnQkFGQTtNQUdBQyxxQkFIQTtNQUlBQyxVQUpBO01BS0FDLFdBTEE7TUFNQUM7SUFOQTtFQVFBLENBZEE7RUFnQkE7RUFDQUM7SUFDQUMsTUFEQSxvQkFDQTtNQUNBQyw0QkFDQSxtQkFEQSxHQUVBLHNCQUZBO0lBR0EsQ0FMQTtJQU1BQyxJQU5BLGtCQU1BO01BQUE7O01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNBQztrQkFDQUMsb0JBREE7a0JBRUFDO2dCQUZBLEVBREE7O2NBQUE7Z0JBQUE7Z0JBQUEsT0FLQUYsb0JBTEE7O2NBQUE7Z0JBQUE7Z0JBQUEsT0FNQSwyQkFOQTs7Y0FBQTtnQkFPQTs7Z0JBQ0E7a0JBQ0FHO2tCQUNBQTtnQkFDQSxDQUhBLE1BR0E7a0JBQ0FBLG1EQUNBLHNCQURBO2dCQUVBOztjQWRBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQWVBLENBckJBO0lBc0JBQyxtQkF0QkEsaUNBc0JBO01BQUE7O01BQUE7UUFBQTs7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNBSjtrQkFDQUssWUFEQSxDQUNBOztnQkFEQSxFQURBOztjQUFBO2dCQUNBQyxNQURBO2dCQUlBQyxNQUpBLEdBSUFKLHFDQUpBO2dCQU1BOztnQkFOQSx1QkFPQVQsT0FQQTtrQkFR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O0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw2QkFBNkIsa0JBQWtCO0FBQy9DLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdDQUF3QztBQUMvRDtBQUNBO0FBQ0EsaUJBQWlCLDZEQUE2RDtBQUM5RSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQTBDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlP2QxNDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZT9iY2VkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWU/NzlmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy03IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSBjb2wtbWQtNiBjb2wtc20tMTIgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3dhcDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnJvbV90b2tlbl9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsKCdmcm9tJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2tlbl9pbWFnZSBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tX3Rva2VuX2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJmcm9tX3Rva2VuX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZWxlY3QgQ29pbjwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXBib3hfc2VsZWN0IHctNTAgbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm51bWJlciBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZyb21fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRRdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0xIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fdG9rZW5fc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5Nb2RhbCgndG8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRva2VuX2ltYWdlIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvX3Rva2VuX2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b190b2tlbl90ZXh0XCI+U2VsZWN0IENvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibnVtYmVyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYWxjdWxhdGluZy4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIHNoYWRvdyBwLTEgZGFya2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGltYXRlZCBHYXM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdhc19lc3RpbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3YXBfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidHJ5U3dhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwidG9rZW5fbW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVwiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+U2VsZWN0IHRva2VuPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZGFsX2Nsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZU1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlIGJ0bi1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBtb2RhbC1zd2FwXCIgaWQ9XCJteURyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZmlsdGVyRnVuY3Rpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2tlbl9saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC1oZWlnaHQ6IDYwMHB4OyBvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3Qgc2VydmVyVXJsID0gXCJodHRwczovL3Q2Y2Fja2E0cGVrcS51c2Vtb3JhbGlzLmNvbToyMDUzL3NlcnZlclwiO1xuY29uc3QgYXBwSWQgPSBcIlI4ODk3QVlQMzBLcFhhSlNyR3V2dHBxWkdvNWdVem1DSFIweWR4VXVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge30sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50VXNlcjoge30sXG4gICAgICAgICAgICBjdXJyZW50VHJhZGU6IHt9LFxuICAgICAgICAgICAgY3VycmVudFNlbGVjdFNpZGU6IHt9LFxuICAgICAgICAgICAgdG9rZW5zOiB7fSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHt9LFxuICAgICAgICAgICAgYW1vdW50OiB7fSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gY3VzdG9tIG1ldGhvZHNcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJvdXRlci5nbygtMSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuc3RhcnQoe1xuICAgICAgICAgICAgICAgIHNlcnZlclVybCxcbiAgICAgICAgICAgICAgICBhcHBJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5lbmFibGVXZWIzKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxpc3RBdmFpbGFibGVUb2tlbnMoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBNb3JhbGlzLlVzZXIuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3YXBfYnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2FwX2J1dHRvblwiKS5pbm5lclRleHQgPSBcIlN3YXBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2FwX2J1dHRvblwiKS5pbm5lclRleHQgPVxuICAgICAgICAgICAgICAgICAgICBcIkNvbm5lY3QgV2FsbGV0IEZpcnN0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGxpc3RBdmFpbGFibGVUb2tlbnMoKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5nZXRTdXBwb3J0ZWRUb2tlbnMoe1xuICAgICAgICAgICAgICAgIGNoYWluOiBcImV0aFwiLCAvLyBUaGUgYmxvY2tjaGFpbiB5b3Ugd2FudCB0byB1c2UgKGV0aC9ic2MvcG9seWdvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZW5fbGlzdFwiKTtcblxuICAgICAgICAgICAgdGhpcy50b2tlbnMgPSByZXN1bHQudG9rZW5zO1xuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRyZXNzIGluIHRoaXMudG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy50b2tlbnNbYWRkcmVzc107XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLnN5bWJvbCAhPSBcIkJUQysrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFkZHJlc3NcIiwgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBcInRva2VuX3Jvd1wiO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IGBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiID48aW1nIGNsYXNzPVwidG9rZW5fbGlzdF9pbWcgbWUtMVwiIGhlaWdodD1cIjM2cHhcIiB3aWR0aD1cIjM2cHhcIiBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL2NyeXB0b0N1cnJlbmN5LyR7dG9rZW4uc3ltYm9sfS5wbmdcIiAgbG9hZGluZz1cImxhenlcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9rZW5fbGlzdF90ZXh0XCI+JHt0b2tlbi5zeW1ib2x9PC9zcGFuPjwvYT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICAgICAgICAgICAgICBkaXYub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VG9rZW4oYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyRnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQsIGZpbHRlciwgYSwgaTtcbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpO1xuICAgICAgICAgICAgZmlsdGVyID0gaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKTtcbiAgICAgICAgICAgIGEgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0eHRWYWx1ZSA9IGFbaV0udGV4dENvbnRlbnQgfHwgYVtpXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHR4dFZhbHVlLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdFRva2VuKGFkZHJlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50b2tlbnMpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhZGVbdGhpcy5jdXJyZW50U2VsZWN0U2lkZV0gPSB0aGlzLnRva2Vuc1thZGRyZXNzXTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW50ZXJmYWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUcmFkZSk7XG4gICAgICAgICAgICB0aGlzLmdldFF1b3RlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlckludGVyZmFjZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFkZS5mcm9tKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX3Rva2VuX2ltZ1wiKS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmxvZ29VUkk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZnJvbV90b2tlbl9pbWdcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX3Rva2VuX3RleHRcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5zeW1ib2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhZGUudG8pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX3Rva2VuX2ltZ1wiKS5zcmMgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS50by5sb2dvVVJJO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInRvX3Rva2VuX2ltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX3Rva2VuX3RleHRcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhZGUudG8uc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcGVuTW9kYWwoc2lkZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0U2lkZSA9IHNpZGU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRva2VuX21vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRva2VuX21vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyBnZXRRdW90ZSgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhdGhpcy5jdXJyZW50VHJhZGUuZnJvbSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLmN1cnJlbnRUcmFkZS50byB8fFxuICAgICAgICAgICAgICAgICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fYW1vdW50XCIpLnZhbHVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmFtb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fYW1vdW50XCIpLnZhbHVlICpcbiAgICAgICAgICAgICAgICAgICAgMTAgKiogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5kZWNpbWFsc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBhd2FpdCBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5xdW90ZSh7XG4gICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgICAgIGZyb21Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICB0b1Rva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUudG8uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHJlY2VpdmVcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYXNfZXN0aW1hdGVcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICBxdW90ZS5lc3RpbWF0ZWRHYXM7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvX2Ftb3VudFwiKS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgcXVvdGUudG9Ub2tlbkFtb3VudCAvIDEwICoqIHF1b3RlLnRvVG9rZW4uZGVjaW1hbHM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgdHJ5U3dhcCgpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IE1vcmFsaXMuVXNlci5jdXJyZW50KCkuZ2V0KFwiZXRoQWRkcmVzc1wiKTtcbiAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV9hbW91bnRcIikudmFsdWUgKlxuICAgICAgICAgICAgICAgICAgICAxMCAqKiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmRlY2ltYWxzXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWRlLmZyb20uc3ltYm9sICE9PSBcIkVUSFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsb3dhbmNlID0gYXdhaXQgTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guaGFzQWxsb3dhbmNlKHtcbiAgICAgICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgICAgICAgICBmcm9tVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byBzd2FwXG4gICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzOiB0aGlzLmFkZHJlc3MsIC8vIFlvdXIgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxvd2FuY2UpO1xuICAgICAgICAgICAgICAgIGlmICghYWxsb3dhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLmFwcHJvdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byBzd2FwXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tQWRkcmVzczogdGhpcy5hZGRyZXNzLCAvLyBZb3VyIHdhbGxldCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlY2VpcHQgPSBhd2FpdCB0aGlzLmRvU3dhcCh0aGlzLmFkZHJlc3MsIHRoaXMuYW1vdW50KTtcbiAgICAgICAgICAgICAgICBub3RpZnkoXCJzdWNjZXNzXCIsIFwiU3dhcCBDb21wbGV0ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBub3RpZnkoXCJ3YXJuaW5nXCIsIFwiU3dhcCBGYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb1N3YXAodXNlckFkZHJlc3MsIGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLnN3YXAoe1xuICAgICAgICAgICAgICAgIGNoYWluOiBcImV0aFwiLCAvLyBUaGUgYmxvY2tjaGFpbiB5b3Ugd2FudCB0byB1c2UgKGV0aC9ic2MvcG9seWdvbilcbiAgICAgICAgICAgICAgICBmcm9tVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byBzd2FwXG4gICAgICAgICAgICAgICAgdG9Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLnRvLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byByZWNlaXZlXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IHVzZXJBZGRyZXNzLCAvLyBZb3VyIHdhbGxldCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgc2xpcHBhZ2U6IDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGNyZWF0ZWRcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IG1vdW50ZWRcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAvKmNvbnN0IHBsdWdpbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBwbHVnaW4xLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vdW5wa2cuY29tL21vcmFsaXMvZGlzdC9tb3JhbGlzLmpzXCJcbiAgICAgICAgKTtcbiAgICAgICAgcGx1Z2luMS5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGx1Z2luMSk7XG4gICAgICAgIGNvbnN0IHBsdWdpbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBwbHVnaW4yLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgICBcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vd2ViM0BsYXRlc3QvZGlzdC93ZWIzLm1pbi5qc1wiXG4gICAgICAgICk7XG4gICAgICAgIHBsdWdpbjIuYXN5bmMgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHBsdWdpbjIpOyovXG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICBkZXN0cm95ZWQoKSB7fSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3dhcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRkYmFmODEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N3YXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjRkYmFmODEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRkYmFmODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRkYmFmODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N3YXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0ZGJhZjgxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0ZGJhZjgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N3YXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dhcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRkYmFmODEmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy03IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy01IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImZvcm1cIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcm91bmRlZCBzaGFkb3cgZGFya2VkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLWZsYXQtaW5mbyBkcm9wZG93bi10b2dnbGUgbXMtMSB3LTUwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJmcm9tX3Rva2VuX3NlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3Blbk1vZGFsKFwiZnJvbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9rZW5faW1hZ2UgaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZyb21fdG9rZW5faW1nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiZnJvbV90b2tlbl90ZXh0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgQ29pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN3YXBib3hfc2VsZWN0IHctNTAgbS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudW1iZXIgZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiYW1vdW50XCIsIGlkOiBcImZyb21fYW1vdW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmdldFF1b3RlIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMSByb3VuZGVkIHNoYWRvdyBkYXJrZWRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInRvX3Rva2VuX3NlbGVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3Blbk1vZGFsKFwidG9cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRva2VuX2ltYWdlIGhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0b190b2tlbl9pbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJ0b190b2tlbl90ZXh0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgQ29pblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIsIGlkOiBcInN3YXBfYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udHJ5U3dhcCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0aW5nXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBcInRva2VuX21vZGFsXCIsIHRhYmluZGV4OiBcIi0xXCIsIHJvbGU6IFwiZGlhbG9nXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1kaWFsb2cgbW9kYWwtc21cIiwgYXR0cnM6IHsgcm9sZTogXCJkb2N1bWVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCB0b2tlblwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlIGJ0bi1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibW9kYWxfY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VNb2RhbCB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5IG1vZGFsLXN3YXBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm15RHJvcGRvd25cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibXlJbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWx0ZXJGdW5jdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjogXCI2MDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidG9rZW5fbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiU3dhcFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN3YXBib3hfc2VsZWN0IHctNTAgbS0xXCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bWJlciBmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgYXR0cnM6IHsgcGxhY2Vob2xkZXI6IFwiY2FsY3VsYXRpbmcuLlwiLCBpZDogXCJ0b19hbW91bnRcIiwgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdW5kZWQgc2hhZG93IHAtMSBkYXJrZWRcIiB9LCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGltYXRlZCBHYXM6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICApLFxuICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBcImdhc19lc3RpbWF0ZVwiIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50VXNlciIsImN1cnJlbnRUcmFkZSIsImN1cnJlbnRTZWxlY3RTaWRlIiwidG9rZW5zIiwiYWRkcmVzcyIsImFtb3VudCIsIm1ldGhvZHMiLCJnb0JhY2siLCJ3aW5kb3ciLCJpbml0IiwiTW9yYWxpcyIsInNlcnZlclVybCIsImFwcElkIiwiZG9jdW1lbnQiLCJsaXN0QXZhaWxhYmxlVG9rZW5zIiwiY2hhaW4iLCJyZXN1bHQiLCJwYXJlbnQiLCJkaXYiLCJ0b2tlbiIsImZpbHRlckZ1bmN0aW9uIiwiaW5wdXQiLCJmaWx0ZXIiLCJhIiwidHh0VmFsdWUiLCJzZWxlY3RUb2tlbiIsImNvbnNvbGUiLCJyZW5kZXJJbnRlcmZhY2UiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm9wZW5Nb2RhbCIsInNpZGUiLCJjbG9zZU1vZGFsIiwiZ2V0UXVvdGUiLCJmcm9tVG9rZW5BZGRyZXNzIiwidG9Ub2tlbkFkZHJlc3MiLCJxdW90ZSIsInRyeVN3YXAiLCJmcm9tQWRkcmVzcyIsImFsbG93YW5jZSIsInRva2VuQWRkcmVzcyIsInJlY2VpcHQiLCJub3RpZnkiLCJkb1N3YXAiLCJ1c2VyQWRkcmVzcyIsInNsaXBwYWdlIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJkZXN0cm95ZWQiXSwic291cmNlUm9vdCI6IiJ9