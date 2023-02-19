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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX1N3YXBfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSEE7QUFDQTtBQUVBLGlFQUFlO0VBQ2Y7RUFDQUE7RUFFQTtFQUNBQztJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUVBO0VBQ0FDO0lBQ0FDO01BQ0FDLDRCQUNBLHNCQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQUM7a0JBQ0FDO2tCQUNBQztnQkFDQTtjQUFBO2dCQUFBO2dCQUFBLE9BQ0FGO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDQTtjQUFBO2dCQUNBO2dCQUNBO2tCQUNBRztrQkFDQUE7Z0JBQ0E7a0JBQ0FBLG1EQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQTtnQkFBQSxPQUNBSjtrQkFDQUs7Z0JBQ0E7Y0FBQTtnQkFGQUM7Z0JBR0FDO2dCQUVBO2dCQUFBLHVCQUNBYjtrQkFDQTtrQkFDQTtvQkFDQTtvQkFDQWM7b0JBQ0FBO29CQUNBLDBLQUNBQyxnR0FDQUEsMENBQ0E7b0JBQ0FEO29CQUNBQTtzQkFDQTtvQkFDQTtvQkFDQUQ7a0JBQ0E7Z0JBQUE7Z0JBZkE7a0JBQUE7Z0JBZ0JBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQUc7TUFDQTtNQUNBQztNQUNBQztNQUNBSjtNQUNBSztNQUNBO1FBQ0FDO1FBQ0E7VUFDQUQ7UUFDQTtV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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDZCQUE2QixrQkFBa0I7QUFDL0MsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9EO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQTZEO0FBQzlFLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBMEM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckMsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvU3dhcC52dWU/ZDE0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL1N3YXAudnVlP2JjZWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZT83OWZmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTcgY29sLW1kLTYgY29sLXNtLTEyIGNvbC0xMlwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy01IGNvbC1tZC02IGNvbC1zbS0xMiBjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Td2FwPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcm91bmRlZCBzaGFkb3cgZGFya2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tX3Rva2VuX3NlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuTW9kYWwoJ2Zyb20nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRva2VuX2ltYWdlIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzZweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZyb21fdG9rZW5faW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImZyb21fdG9rZW5fdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNlbGVjdCBDb2luPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dhcGJveF9zZWxlY3Qgdy01MCBtLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibnVtYmVyIGZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZnJvbV9hbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG15LTEgcm91bmRlZCBzaGFkb3cgZGFya2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b190b2tlbl9zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsKCd0bycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9rZW5faW1hZ2UgaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjM2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fdG9rZW5faW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRvX3Rva2VuX3RleHRcIj5TZWxlY3QgQ29pbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2FwYm94X3NlbGVjdCB3LTUwIG0tMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJudW1iZXIgZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImNhbGN1bGF0aW5nLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidG9fYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdW5kZWQgc2hhZG93IHAtMSBkYXJrZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIEdhczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZ2FzX2VzdGltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dhcF9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0cnlTd2FwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJ0b2tlbl9tb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5TZWxlY3QgdG9rZW48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9kYWxfY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2UgYnRuLWNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IG1vZGFsLXN3YXBcIiBpZD1cIm15RHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJteUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmaWx0ZXJGdW5jdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRva2VuX2xpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogNjAwcHg7IG92ZXJmbG93LXk6IGF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBzZXJ2ZXJVcmwgPSBcImh0dHBzOi8vdDZjYWNrYTRwZWtxLnVzZW1vcmFsaXMuY29tOjIwNTMvc2VydmVyXCI7XG5jb25zdCBhcHBJZCA9IFwiUjg4OTdBWVAzMEtwWGFKU3JHdXZ0cHFaR281Z1V6bUNIUjB5ZHhVdVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gY29tcG9uZW50IGxpc3RcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIC8vIGNvbXBvbmVudCBkYXRhXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnR1c2VyOiBudWxsLFxuICAgICAgICAgICAgY3VycmVudFRyYWRlOiB7fSxcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RTaWRlOiB7fSxcbiAgICAgICAgICAgIHRva2Vuczoge30sXG4gICAgICAgICAgICBhZGRyZXNzOiB7fSxcbiAgICAgICAgICAgIGFtb3VudDoge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIGN1c3RvbSBtZXRob2RzXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnb0JhY2soKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgICAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHtcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcmwsXG4gICAgICAgICAgICAgICAgYXBwSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuZW5hYmxlV2ViMygpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5saXN0QXZhaWxhYmxlVG9rZW5zKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gTW9yYWxpcy5Vc2VyLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2FwX2J1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhcF9idXR0b25cIikuaW5uZXJUZXh0ID0gXCJTd2FwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dhcF9idXR0b25cIikuaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgXCJDb25uZWN0IFdhbGxldCBGaXJzdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyBsaXN0QXZhaWxhYmxlVG9rZW5zKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgTW9yYWxpcy5QbHVnaW5zLm9uZUluY2guZ2V0U3VwcG9ydGVkVG9rZW5zKHtcbiAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRva2VuX2xpc3RcIik7XG5cbiAgICAgICAgICAgIHRoaXMudG9rZW5zID0gcmVzdWx0LnRva2VucztcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkcmVzcyBpbiB0aGlzLnRva2Vucykge1xuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMudG9rZW5zW2FkZHJlc3NdO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5zeW1ib2wgIT0gXCJCVEMrK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1hZGRyZXNzXCIsIGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gXCJ0b2tlbl9yb3dcIjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBgXG4gICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiA+PGltZyBjbGFzcz1cInRva2VuX2xpc3RfaW1nIG1lLTFcIiBoZWlnaHQ9XCIzNnB4XCIgd2lkdGg9XCIzNnB4XCIgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jcnlwdG9DdXJyZW5jeS8ke3Rva2VuLnN5bWJvbH0ucG5nXCIgIGxvYWRpbmc9XCJsYXp5XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRva2VuX2xpc3RfdGV4dFwiPiR7dG9rZW4uc3ltYm9sfTwvc3Bhbj48L2E+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgICAgICAgICAgZGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRva2VuKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlckZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGlucHV0LCBmaWx0ZXIsIGEsIGk7XG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlJbnB1dFwiKTtcbiAgICAgICAgICAgIGZpbHRlciA9IGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RHJvcGRvd25cIik7XG4gICAgICAgICAgICBhID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdHh0VmFsdWUgPSBhW2ldLnRleHRDb250ZW50IHx8IGFbaV0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGlmICh0eHRWYWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGFbaV0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RUb2tlbihhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9rZW5zKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlW3RoaXMuY3VycmVudFNlbGVjdFNpZGVdID0gdGhpcy50b2tlbnNbYWRkcmVzc107XG4gICAgICAgICAgICB0aGlzLnJlbmRlckludGVyZmFjZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50VHJhZGUpO1xuICAgICAgICAgICAgdGhpcy5nZXRRdW90ZSgpO1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXJJbnRlcmZhY2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhZGUuZnJvbSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV90b2tlbl9pbWdcIikuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5sb2dvVVJJO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZyb21fdG9rZW5faW1nXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbV90b2tlbl90ZXh0XCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLmZyb20uc3ltYm9sO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWRlLnRvKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b190b2tlbl9pbWdcIikuc3JjID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VHJhZGUudG8ubG9nb1VSSTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0b190b2tlbl9pbWdcIilcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b190b2tlbl90ZXh0XCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRyYWRlLnRvLnN5bWJvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3Blbk1vZGFsKHNpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdFNpZGUgPSBzaWRlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2tlbl9tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2tlbl9tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgZ2V0UXVvdGUoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXRoaXMuY3VycmVudFRyYWRlLmZyb20gfHxcbiAgICAgICAgICAgICAgICAhdGhpcy5jdXJyZW50VHJhZGUudG8gfHxcbiAgICAgICAgICAgICAgICAhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX2Ftb3VudFwiKS52YWx1ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmcm9tX2Ftb3VudFwiKS52YWx1ZSAqXG4gICAgICAgICAgICAgICAgICAgIDEwICoqIHRoaXMuY3VycmVudFRyYWRlLmZyb20uZGVjaW1hbHNcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1b3RlID0gYXdhaXQgTW9yYWxpcy5QbHVnaW5zLm9uZUluY2gucXVvdGUoe1xuICAgICAgICAgICAgICAgIGNoYWluOiBcImV0aFwiLCAvLyBUaGUgYmxvY2tjaGFpbiB5b3Ugd2FudCB0byB1c2UgKGV0aC9ic2MvcG9seWdvbilcbiAgICAgICAgICAgICAgICBmcm9tVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byBzd2FwXG4gICAgICAgICAgICAgICAgdG9Ub2tlbkFkZHJlc3M6IHRoaXMuY3VycmVudFRyYWRlLnRvLmFkZHJlc3MsIC8vIFRoZSB0b2tlbiB5b3Ugd2FudCB0byByZWNlaXZlXG4gICAgICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FzX2VzdGltYXRlXCIpLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgcXVvdGUuZXN0aW1hdGVkR2FzO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b19hbW91bnRcIikudmFsdWUgPVxuICAgICAgICAgICAgICAgIHF1b3RlLnRvVG9rZW5BbW91bnQgLyAxMCAqKiBxdW90ZS50b1Rva2VuLmRlY2ltYWxzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIHRyeVN3YXAoKSB7XG4gICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBNb3JhbGlzLlVzZXIuY3VycmVudCgpLmdldChcImV0aEFkZHJlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmFtb3VudCA9IE51bWJlcihcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZyb21fYW1vdW50XCIpLnZhbHVlICpcbiAgICAgICAgICAgICAgICAgICAgMTAgKiogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5kZWNpbWFsc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFkZS5mcm9tLnN5bWJvbCAhPT0gXCJFVEhcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbG93YW5jZSA9IGF3YWl0IE1vcmFsaXMuUGx1Z2lucy5vbmVJbmNoLmhhc0FsbG93YW5jZSh7XG4gICAgICAgICAgICAgICAgICAgIGNoYWluOiBcImV0aFwiLCAvLyBUaGUgYmxvY2tjaGFpbiB5b3Ugd2FudCB0byB1c2UgKGV0aC9ic2MvcG9seWdvbilcbiAgICAgICAgICAgICAgICAgICAgZnJvbVRva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gc3dhcFxuICAgICAgICAgICAgICAgICAgICBmcm9tQWRkcmVzczogdGhpcy5hZGRyZXNzLCAvLyBZb3VyIHdhbGxldCBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsb3dhbmNlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFsbG93YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5hcHByb3ZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluOiBcImV0aFwiLCAvLyBUaGUgYmxvY2tjaGFpbiB5b3Ugd2FudCB0byB1c2UgKGV0aC9ic2MvcG9seWdvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gc3dhcFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUFkZHJlc3M6IHRoaXMuYWRkcmVzcywgLy8gWW91ciB3YWxsZXQgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCByZWNlaXB0ID0gYXdhaXQgdGhpcy5kb1N3YXAodGhpcy5hZGRyZXNzLCB0aGlzLmFtb3VudCk7XG4gICAgICAgICAgICAgICAgbm90aWZ5KFwic3VjY2Vzc1wiLCBcIlN3YXAgQ29tcGxldGVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbm90aWZ5KFwid2FybmluZ1wiLCBcIlN3YXAgRmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG9Td2FwKHVzZXJBZGRyZXNzLCBhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3JhbGlzLlBsdWdpbnMub25lSW5jaC5zd2FwKHtcbiAgICAgICAgICAgICAgICBjaGFpbjogXCJldGhcIiwgLy8gVGhlIGJsb2NrY2hhaW4geW91IHdhbnQgdG8gdXNlIChldGgvYnNjL3BvbHlnb24pXG4gICAgICAgICAgICAgICAgZnJvbVRva2VuQWRkcmVzczogdGhpcy5jdXJyZW50VHJhZGUuZnJvbS5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gc3dhcFxuICAgICAgICAgICAgICAgIHRvVG9rZW5BZGRyZXNzOiB0aGlzLmN1cnJlbnRUcmFkZS50by5hZGRyZXNzLCAvLyBUaGUgdG9rZW4geW91IHdhbnQgdG8gcmVjZWl2ZVxuICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgICAgIGZyb21BZGRyZXNzOiB1c2VyQWRkcmVzcywgLy8gWW91ciB3YWxsZXQgYWRkcmVzc1xuICAgICAgICAgICAgICAgIHNsaXBwYWdlOiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBjcmVhdGVkXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBtb3VudGVkXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLypjb25zdCBwbHVnaW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgcGx1Z2luMS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgXCJodHRwczovL3VucGtnLmNvbS9tb3JhbGlzL2Rpc3QvbW9yYWxpcy5qc1wiXG4gICAgICAgICk7XG4gICAgICAgIHBsdWdpbjEuYXN5bmMgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHBsdWdpbjEpO1xuICAgICAgICBjb25zdCBwbHVnaW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgcGx1Z2luMi5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3dlYjNAbGF0ZXN0L2Rpc3Qvd2ViMy5taW4uanNcIlxuICAgICAgICApO1xuICAgICAgICBwbHVnaW4yLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwbHVnaW4yKTsqL1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N3YXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0ZGJhZjgxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N3YXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaHlxZmluL3B1YmxpY19odG1sL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI0ZGJhZjgxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI0ZGJhZjgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI0ZGJhZjgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Td2FwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGRiYWY4MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNGRiYWY4MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL3NyYy9QYWdlcy9Td2FwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Td2FwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N3YXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N3YXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0ZGJhZjgxJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNyBjb2wtbWQtNiBjb2wtc20tMTIgY29sLTEyXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNSBjb2wtbWQtNiBjb2wtc20tMTIgY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJmb3JtXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHJvdW5kZWQgc2hhZG93IGRhcmtlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1mbGF0LWluZm8gZHJvcGRvd24tdG9nZ2xlIG1zLTEgdy01MCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiZnJvbV90b2tlbl9zZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5Nb2RhbChcImZyb21cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRva2VuX2ltYWdlIGhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmcm9tX3Rva2VuX2ltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImZyb21fdG9rZW5fdGV4dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IENvaW5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzd2FwYm94X3NlbGVjdCB3LTUwIG0tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnVtYmVyIGZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcImFtb3VudFwiLCBpZDogXCJmcm9tX2Ftb3VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nZXRRdW90ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG15LTEgcm91bmRlZCBzaGFkb3cgZGFya2VkXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLWZsYXQtaW5mbyBkcm9wZG93bi10b2dnbGUgbXMtMSB3LTUwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJ0b190b2tlbl9zZWxlY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5Nb2RhbChcInRvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b2tlbl9pbWFnZSBoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG9fdG9rZW5faW1nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwidG9fdG9rZW5fdGV4dFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IENvaW5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiLCBpZDogXCJzd2FwX2J1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRyeVN3YXAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdGluZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbFwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJ0b2tlbl9tb2RhbFwiLCB0YWJpbmRleDogXCItMVwiLCByb2xlOiBcImRpYWxvZ1wiIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCIsIGF0dHJzOiB7IHJvbGU6IFwiZG9jdW1lbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgdG9rZW5cIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZSBidG4tY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1vZGFsX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlTW9kYWwgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keSBtb2RhbC1zd2FwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJteURyb3Bkb3duXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2guLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm15SW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsdGVyRnVuY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJtYXgtaGVpZ2h0XCI6IFwiNjAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRva2VuX2xpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlN3YXBcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzd2FwYm94X3NlbGVjdCB3LTUwIG0tMVwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJudW1iZXIgZm9ybS1jb250cm9sXCIsXG4gICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcImNhbGN1bGF0aW5nLi5cIiwgaWQ6IFwidG9fYW1vdW50XCIsIGRpc2FibGVkOiBcIlwiIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3VuZGVkIHNoYWRvdyBwLTEgZGFya2VkXCIgfSwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc3RpbWF0ZWQgR2FzOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJnYXNfZXN0aW1hdGVcIiB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkYXRhIiwiY3VycmVudHVzZXIiLCJjdXJyZW50VHJhZGUiLCJjdXJyZW50U2VsZWN0U2lkZSIsInRva2VucyIsImFkZHJlc3MiLCJhbW91bnQiLCJtZXRob2RzIiwiZ29CYWNrIiwid2luZG93IiwiaW5pdCIsIk1vcmFsaXMiLCJzZXJ2ZXJVcmwiLCJhcHBJZCIsImRvY3VtZW50IiwibGlzdEF2YWlsYWJsZVRva2VucyIsImNoYWluIiwicmVzdWx0IiwicGFyZW50IiwiZGl2IiwidG9rZW4iLCJmaWx0ZXJGdW5jdGlvbiIsImlucHV0IiwiZmlsdGVyIiwiYSIsInR4dFZhbHVlIiwic2VsZWN0VG9rZW4iLCJjb25zb2xlIiwicmVuZGVySW50ZXJmYWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZ2V0UXVvdGUiLCJmcm9tVG9rZW5BZGRyZXNzIiwidG9Ub2tlbkFkZHJlc3MiLCJxdW90ZSIsInRyeVN3YXAiLCJmcm9tQWRkcmVzcyIsImFsbG93YW5jZSIsInRva2VuQWRkcmVzcyIsInJlY2VpcHQiLCJub3RpZnkiLCJkb1N3YXAiLCJzbGlwcGFnZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwiZGVzdHJveWVkIl0sInNvdXJjZVJvb3QiOiIifQ==