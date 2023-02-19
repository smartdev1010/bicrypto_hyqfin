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
      currentuser: null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX3NyY19QYWdlc19Td2FwX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEhBO0FBQ0E7QUFFQSxpRUFBZTtFQUNmO0VBQ0FBLGNBRkE7RUFJQTtFQUNBQyxJQUxBLGtCQUtBO0lBQ0E7TUFDQUMsaUJBREE7TUFFQUMsZ0JBRkE7TUFHQUMscUJBSEE7TUFJQUMsVUFKQTtNQUtBQyxXQUxBO01BTUFDO0lBTkE7RUFRQSxDQWRBO0VBZ0JBO0VBQ0FDO0lBQ0FDLE1BREEsb0JBQ0E7TUFDQUMsNEJBQ0EsbUJBREEsR0FFQSxzQkFGQTtJQUdBLENBTEE7SUFNQUMsSUFOQSxrQkFNQTtNQUFBOztNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQUM7a0JBQ0FDLG9CQURBO2tCQUVBQztnQkFGQSxFQURBOztjQUFBO2dCQUFBO2dCQUFBLE9BS0FGLG9CQUxBOztjQUFBO2dCQUFBO2dCQUFBLE9BTUEsMkJBTkE7O2NBQUE7Z0JBT0E7O2dCQUNBO2tCQUNBRztrQkFDQUE7Z0JBQ0EsQ0FIQSxNQUdBO2tCQUNBQSxtREFDQSxzQkFEQTtnQkFFQTs7Y0FkQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFlQSxDQXJCQTtJQXNCQUMsbUJBdEJBLGlDQXNCQTtNQUFBOztNQUFBO1FBQUE7O1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQUo7a0JBQ0FLLFlBREEsQ0FDQTs7Z0JBREEsRUFEQTs7Y0FBQTtnQkFDQUMsTUFEQTtnQkFJQUMsTUFKQSxHQUlBSixxQ0FKQTtnQkFNQTs7Z0JBTkEsdUJBT0FULE9BUEE7a0JBUUE7O2tCQUNBO29CQUNBOztvQkFDQWM7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cUI7QUFDckIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsNkJBQTZCLGtCQUFrQjtBQUMvQyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0Q7QUFDQTtBQUNBLGlCQUFpQiw2REFBNkQ7QUFDOUUsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUEwQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQyxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZT9kMTQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWU/NzlmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy03IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSBjb2wtbWQtNiBjb2wtc20tMTIgY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3dhcDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnJvbV90b2tlbl9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsKCdmcm9tJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2tlbl9pbWFnZSBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tX3Rva2VuX2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJmcm9tX3Rva2VuX3RleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZWxlY3QgQ29pbjwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3YXBib3hfc2VsZWN0IHctNTAgbS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm51bWJlciBmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZyb21fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRRdW90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0xIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fdG9rZW5fc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5Nb2RhbCgndG8nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRva2VuX2ltYWdlIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvX3Rva2VuX2ltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b190b2tlbl90ZXh0XCI+U2VsZWN0IENvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibnVtYmVyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJjYWxjdWxhdGluZy4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIHNoYWRvdyBwLTEgZGFya2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVzdGltYXRlZCBHYXM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImdhc19lc3RpbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3YXBfYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidHJ5U3dhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiIGlkPVwidG9rZW5fbW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVwiIHJvbGU9XCJkb2N1bWVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+U2VsZWN0IHRva2VuPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZGFsX2Nsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZU1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlIGJ0bi1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBtb2RhbC1zd2FwXCIgaWQ9XCJteURyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXlJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZmlsdGVyRnVuY3Rpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2tlbl9saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC1oZWlnaHQ6IDYwMHB4OyBvdmVyZmxvdy15OiBhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuY29uc3Qgc2VydmVyVXJsID0gXCJodHRwczovL3Q2Y2Fja2E0cGVrcS51c2Vtb3JhbGlzLmNvbToyMDUzL3NlcnZlclwiO1xuY29uc3QgYXBwSWQgPSBcIlI4ODk3QVlQMzBLcFhhSlNyR3V2dHBxWkdvNWdVem1DSFIweWR4VXVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge30sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50dXNlcjogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnRUcmFkZToge30sXG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0U2lkZToge30sXG4gICAgICAgICAgICB0b2tlbnM6IHt9LFxuICAgICAgICAgICAgYWRkcmVzczoge30sXG4gICAgICAgICAgICBhbW91bnQ6IHt9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBjdXN0b20gbWV0aG9kc1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ29CYWNrKCkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBpbml0KCkge1xuICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7XG4gICAgICAgICAgICAgICAgc2VydmVyVXJsLFxuICAgICAgICAgICAgICAgIGFwcElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCBNb3JhbGlzLmVuYWJsZVdlYjMoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubGlzdEF2YWlsYWJsZVRva2VucygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IE1vcmFsaXMuVXNlci5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhcF9idXR0b25cIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3YXBfYnV0dG9uXCIpLmlubmVyVGV4dCA9IFwiU3dhcFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3YXBfYnV0dG9uXCIpLmlubmVyVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIFwiQ29ubmVjdCBXYWxsZXQgRmlyc3RcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgbGlzdEF2YWlsYWJsZVRva2VucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLmdldFN1cHBvcnRlZFRva2Vucyh7XG4gICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2tlbl9saXN0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnRva2VucyA9IHJlc3VsdC50b2tlbnM7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZHJlc3MgaW4gdGhpcy50b2tlbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLnRva2Vuc1thZGRyZXNzXTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3ltYm9sICE9IFwiQlRDKytcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRhdGEtYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IFwidG9rZW5fcm93XCI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgPjxpbWcgY2xhc3M9XCJ0b2tlbl9saXN0X2ltZyBtZS0xXCIgaGVpZ2h0PVwiMzZweFwiIHdpZHRoPVwiMzZweFwiIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY3J5cHRvQ3VycmVuY3kvJHt0b2tlbi5zeW1ib2x9LnBuZ1wiICBsb2FkaW5nPVwibGF6eVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2tlbl9saXN0X3RleHRcIj4ke3Rva2VuLnN5bWJvbH08L3NwYW4+PC9hPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUb2tlbihhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJGdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpbnB1dCwgZmlsdGVyLCBhLCBpO1xuICAgICAgICAgICAgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIik7XG4gICAgICAgICAgICBmaWx0ZXIgPSBpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpO1xuICAgICAgICAgICAgYSA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIik7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHR4dFZhbHVlID0gYVtpXS50ZXh0Q29udGVudCB8fCBhW2ldLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAodHh0VmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0VG9rZW4oYWRkcmVzcykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRva2Vucyk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZVt0aGlzLmN1cnJlbnRTZWxlY3RTaWRlXSA9IHRoaXMudG9rZW5zW2FkZHJlc3NdO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJbnRlcmZhY2UoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRyYWRlKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UXVvdGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVySW50ZXJmYWNlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWRlLmZyb20pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fdG9rZW5faW1nXCIpLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLmZyb20ubG9nb1VSSTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX3Rva2VuX2ltZ1wiKVxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fdG9rZW5fdGV4dFwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLnN5bWJvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFkZS50bykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5faW1nXCIpLnNyYyA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLnRvLmxvZ29VUkk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5faW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fdG9rZW5fdGV4dFwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFkZS50by5zeW1ib2w7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5Nb2RhbChzaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RTaWRlID0gc2lkZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZW5fbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9rZW5fbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGdldFF1b3RlKCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICF0aGlzLmN1cnJlbnRUcmFkZS5mcm9tIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuY3VycmVudFRyYWRlLnRvIHx8XG4gICAgICAgICAgICAgICAgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV9hbW91bnRcIikudmFsdWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV9hbW91bnRcIikudmFsdWUgKlxuICAgICAgICAgICAgICAgICAgICAxMCAqKiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmRlY2ltYWxzXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBxdW90ZSA9IGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLnF1b3RlKHtcbiAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgZnJvbVRva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gc3dhcFxuICAgICAgICAgICAgICAgIHRvVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS50by5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhc19lc3RpbWF0ZVwiKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgIHF1b3RlLmVzdGltYXRlZEdhcztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9fYW1vdW50XCIpLnZhbHVlID1cbiAgICAgICAgICAgICAgICBxdW90ZS50b1Rva2VuQW1vdW50IC8gMTAgKiogcXVvdGUudG9Ub2tlbi5kZWNpbWFscztcbiAgICAgICAgfSxcblxuICAgICAgICBhc3luYyB0cnlTd2FwKCkge1xuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gTW9yYWxpcy5Vc2VyLmN1cnJlbnQoKS5nZXQoXCJldGhBZGRyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX2Ftb3VudFwiKS52YWx1ZSAqXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHRoaXMuY3VycmVudFRyYWRlLmZyb20uZGVjaW1hbHNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhZGUuZnJvbS5zeW1ib2wgIT09IFwiRVRIXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5oYXNBbGxvd2FuY2Uoe1xuICAgICAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgIGZyb21Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IHRoaXMuYWRkcmVzcywgLy8gWW91ciB3YWxsZXQgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbG93YW5jZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGxvd2FuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guYXBwcm92ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzOiB0aGlzLmFkZHJlc3MsIC8vIFlvdXIgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjZWlwdCA9IGF3YWl0IHRoaXMuZG9Td2FwKHRoaXMuYWRkcmVzcywgdGhpcy5hbW91bnQpO1xuICAgICAgICAgICAgICAgIG5vdGlmeShcInN1Y2Nlc3NcIiwgXCJTd2FwIENvbXBsZXRlZCBTdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG5vdGlmeShcIndhcm5pbmdcIiwgXCJTd2FwIEZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvU3dhcCh1c2VyQWRkcmVzcywgYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guc3dhcCh7XG4gICAgICAgICAgICAgICAgY2hhaW46IFwiZXRoXCIsIC8vIFRoZSBibG9ja2NoYWluIHlvdSB3YW50IHRvIHVzZSAoZXRoL2JzYy9wb2x5Z29uKVxuICAgICAgICAgICAgICAgIGZyb21Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLmZyb20uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHN3YXBcbiAgICAgICAgICAgICAgICB0b1Rva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUudG8uYWRkcmVzcywgLy8gVGhlIHRva2VuIHlvdSB3YW50IHRvIHJlY2VpdmVcbiAgICAgICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgICAgICBmcm9tQWRkcmVzczogdXNlckFkZHJlc3MsIC8vIFlvdXIgd2FsbGV0IGFkZHJlc3NcbiAgICAgICAgICAgICAgICBzbGlwcGFnZTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgbW91bnRlZFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8qY29uc3QgcGx1Z2luMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHBsdWdpbjEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly91bnBrZy5jb20vbW9yYWxpcy9kaXN0L21vcmFsaXMuanNcIlxuICAgICAgICApO1xuICAgICAgICBwbHVnaW4xLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwbHVnaW4xKTtcbiAgICAgICAgY29uc3QgcGx1Z2luMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHBsdWdpbjIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93ZWIzQGxhdGVzdC9kaXN0L3dlYjMubWluLmpzXCJcbiAgICAgICAgKTtcbiAgICAgICAgcGx1Z2luMi5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocGx1Z2luMik7Ki9cbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGRlc3Ryb3llZFxuICAgIGRlc3Ryb3llZCgpIHt9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGRiYWY4MSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNGRiYWY4MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNGRiYWY4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNGRiYWY4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3dhcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRkYmFmODEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjRkYmFmODEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3dhcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTcgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTUgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiZm9ybVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciByb3VuZGVkIHNoYWRvdyBkYXJrZWRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tZmxhdC1pbmZvIGRyb3Bkb3duLXRvZ2dsZSBtcy0xIHctNTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcImZyb21fdG9rZW5fc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTW9kYWwoXCJmcm9tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2tlbl9pbWFnZSBoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZnJvbV90b2tlbl9pbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJmcm9tX3Rva2VuX3RleHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBDb2luXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bWJlciBmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJhbW91bnRcIiwgaWQ6IFwiZnJvbV9hbW91bnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ2V0UXVvdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS0xIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwidG9fdG9rZW5fc2VsZWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuTW9kYWwoXCJ0b1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9rZW5faW1hZ2UgaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRvX3Rva2VuX2ltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInRvX3Rva2VuX3RleHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBDb2luXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogXCJcIiwgaWQ6IFwic3dhcF9idXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50cnlTd2FwIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RpbmdcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWxcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwidG9rZW5fbW9kYWxcIiwgdGFiaW5kZXg6IFwiLTFcIiwgcm9sZTogXCJkaWFsb2dcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1zbVwiLCBhdHRyczogeyByb2xlOiBcImRvY3VtZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IHRva2VuXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2UgYnRuLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJtb2RhbF9jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZU1vZGFsIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHkgbW9kYWwtc3dhcFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibXlEcm9wZG93blwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VhcmNoLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJteUlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbHRlckZ1bmN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjYwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0b2tlbl9saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJTd2FwXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibnVtYmVyIGZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJjYWxjdWxhdGluZy4uXCIsIGlkOiBcInRvX2Ftb3VudFwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm91bmRlZCBzaGFkb3cgcC0xIGRhcmtlZFwiIH0sIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIEdhczpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICksXG4gICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZ2FzX2VzdGltYXRlXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiZGF0YSIsImN1cnJlbnR1c2VyIiwiY3VycmVudFRyYWRlIiwiY3VycmVudFNlbGVjdFNpZGUiLCJ0b2tlbnMiLCJhZGRyZXNzIiwiYW1vdW50IiwibWV0aG9kcyIsImdvQmFjayIsIndpbmRvdyIsImluaXQiLCJNb3JhbGlzIiwic2VydmVyVXJsIiwiYXBwSWQiLCJkb2N1bWVudCIsImxpc3RBdmFpbGFibGVUb2tlbnMiLCJjaGFpbiIsInJlc3VsdCIsInBhcmVudCIsImRpdiIsInRva2VuIiwiZmlsdGVyRnVuY3Rpb24iLCJpbnB1dCIsImZpbHRlciIsImEiLCJ0eHRWYWx1ZSIsInNlbGVjdFRva2VuIiwiY29uc29sZSIsInJlbmRlckludGVyZmFjZSIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwib3Blbk1vZGFsIiwic2lkZSIsImNsb3NlTW9kYWwiLCJnZXRRdW90ZSIsImZyb21Ub2tlbkFkZHJlc3MiLCJ0b1Rva2VuQWRkcmVzcyIsInF1b3RlIiwidHJ5U3dhcCIsImZyb21BZGRyZXNzIiwiYWxsb3dhbmNlIiwidG9rZW5BZGRyZXNzIiwicmVjZWlwdCIsIm5vdGlmeSIsImRvU3dhcCIsInVzZXJBZGRyZXNzIiwic2xpcHBhZ2UiLCJjcmVhdGVkIiwibW91bnRlZCIsImRlc3Ryb3llZCJdLCJzb3VyY2VSb290IjoiIn0=