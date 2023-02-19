"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_knowledge_FaqSearch_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      faqs: []
    };
  },
  watch: {
    $route: function $route(from, to) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (to.params.search != from.params.search && to.params.search != null) {
                  _this.fetchCategories();
                }
              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchCategories: function fetchCategories() {
      var _this2 = this;
      this.$http.get("/user/knowledge/faq/" + this.$route.params.search).then(function (response) {
        _this2.faqs = response.data.faqs;
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.faq-search[data-v-06e5248f] {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.faq-search .faq-search-input .input-group[data-v-06e5248f]:focus-within {\n    box-shadow: none;\n}\n.faq-contact .faq-contact-card[data-v-06e5248f] {\n    background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n.faq-search .card-body[data-v-06e5248f] {\n        padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n.faq-search .card-body[data-v-06e5248f] {\n        padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group[data-v-06e5248f] {\n        width: 576px;\n        margin: 0 auto;\n}\n.faq-navigation[data-v-06e5248f] {\n        height: 550px;\n}\n}\n", "",{"version":3,"sources":["webpack://./resources/src/Pages/knowledge/FaqSearch.vue"],"names":[],"mappings":";AA4NA;IACA,sBAAA;IACA,sDAAA;AACA;AACA;IACA,gBAAA;AACA;AAEA;IACA,2CAAA;AACA;AAEA;AACA;QACA,wBAAA;AACA;AACA;AACA;AACA;QACA,wBAAA;AACA;AACA;AACA;AACA;QACA,YAAA;QACA,cAAA;AACA;AACA;QACA,aAAA;AACA;AACA","sourcesContent":["<template>\n    <div>\n        <section id=\"faq-search-filter\">\n            <div\n                class=\"card faq-search\"\n                style=\"background-image: url('images/banner/banner.png')\"\n            >\n                <div class=\"card-body text-center\">\n                    <!-- main title -->\n                    <h2 class=\"text-primary\">\n                        {{ $t(\"Let's answer some questions\") }}\n                    </h2>\n\n                    <!-- subtitle -->\n                    <p class=\"card-text mb-2\">\n                        {{\n                            $t(\n                                \"or choose a category to quickly find the help you need\"\n                            )\n                        }}\n                    </p>\n\n                    <!-- search input -->\n                    <form class=\"faq-search-input\" @submit.prevent=\"search()\">\n                        <div class=\"input-group input-group-merge\">\n                            <div class=\"input-group-text\">\n                                <i class=\"bi bi-search\"></i>\n                            </div>\n                            <input\n                                type=\"text\"\n                                class=\"form-control\"\n                                placeholder=\"Search faq...\"\n                                ref=\"search\"\n                            />\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </section>\n        <!--/ Knowledge base Jumbotron -->\n\n        <!-- Knowledge base -->\n        <section id=\"faq-tabs\">\n            <!-- vertical tab pill -->\n            <div class=\"row\">\n                <div class=\"col-lg-3 col-md-4 col-sm-12\">\n                    <div\n                        class=\"faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0\"\n                    >\n                        <!-- FAQ image -->\n                        <img\n                            src=\"images/illustration/faq-illustrations.svg\"\n                            class=\"img-fluid d-none d-md-block\"\n                            alt=\"demand img\"\n                        />\n                    </div>\n                </div>\n\n                <div class=\"col-lg-9 col-md-8 col-sm-12\">\n                    <template v-if=\"faqs != ''\">\n                        <div\n                            v-for=\"(faq, index) in faqs\"\n                            :key=\"index\"\n                            class=\"accordion accordion-margin mt-2\"\n                            :id=\"'#faq-question-' + faq.id\"\n                        >\n                            <div class=\"card accordion-item\">\n                                <h2\n                                    class=\"accordion-header\"\n                                    :id=\"faq.category_id + faq.id\"\n                                >\n                                    <button\n                                        class=\"accordion-button collapsed\"\n                                        data-bs-toggle=\"collapse\"\n                                        role=\"button\"\n                                        :data-bs-target=\"\n                                            '#faq-question-' + faq.id\n                                        \"\n                                        :aria-controls=\"\n                                            '#faq-question-' + faq.id\n                                        \"\n                                        aria-expanded=\"false\"\n                                    >\n                                        {{ faq.question }}\n                                    </button>\n                                </h2>\n\n                                <div\n                                    :id=\"'faq-question-' + faq.id\"\n                                    class=\"collapse accordion-collapse\"\n                                    :aria-labelledby=\"faq.category_id + faq.id\"\n                                    :data-bs-parent=\"'#faq' + faq.id\"\n                                >\n                                    <div class=\"accordion-body text-dark\">\n                                        {{ faq.answer }}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </template>\n\n                    <div v-else class=\"text-muted text-center\" colspan=\"100%\">\n                        <img\n                            height=\"128px\"\n                            width=\"128px\"\n                            src=\"https://assets.staticimg.com/pro/2.0.4/images/empty.svg\"\n                            alt=\"\"\n                        />\n                        <p class=\"\">{{ $t(\"No Data Found\") }}</p>\n\n                        <section class=\"faq-contact\">\n                            <div class=\"row mt-5 pt-75\">\n                                <div class=\"col-12 text-center\">\n                                    <h2>\n                                        {{ $t(\"You still have a question\") }}?\n                                    </h2>\n                                    <p class=\"mb-3\">\n                                        {{\n                                            $t(\n                                                \"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!\"\n                                            )\n                                        }}\n                                    </p>\n                                </div>\n                            </div>\n                        </section>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- / frequently asked questions tabs pills -->\n\n        <!-- contact us -->\n        <section class=\"faq-contact\" v-if=\"faqs != ''\">\n            <div class=\"row mt-5 pt-75\">\n                <div class=\"col-12 text-center\">\n                    <h2>{{ $t(\"You still have a question\") }}?</h2>\n                    <p class=\"mb-3\">\n                        {{\n                            $t(\n                                \"If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!\"\n                            )\n                        }}\n                    </p>\n                </div>\n            </div>\n        </section>\n    </div>\n</template>\n\n<script>\nexport default {\n    props: [],\n    // component list\n    components: {},\n\n    // component data\n    data() {\n        return {\n            faqs: [],\n        };\n    },\n\n    watch: {\n        async $route(from, to) {\n            if (\n                to.params.search != from.params.search &&\n                to.params.search != null\n            ) {\n                this.fetchCategories();\n            }\n        },\n    },\n\n    // custom methods\n    methods: {\n        goBack() {\n            window.history.length > 1\n                ? this.$router.go(-1)\n                : this.$router.push(\"/\");\n        },\n        fetchCategories() {\n            this.$http\n                .get(\"/user/knowledge/faq/\" + this.$route.params.search)\n                .then((response) => {\n                    this.faqs = response.data.faqs;\n                })\n                .catch((error) => {});\n        },\n        search() {\n            this.$router\n                .push(\"/knowledge/faq/\" + this.$refs.search.value)\n                .catch((err) => {\n                    // Ignore the vuex err regarding  navigating to the page they are already on.\n                    if (\n                        err.name !== \"NavigationDuplicated\" &&\n                        !err.message.includes(\n                            \"Avoided redundant navigation to current location\"\n                        )\n                    ) {\n                        // But print any other errors to the console\n                        logError(err);\n                    }\n                });\n        },\n    },\n\n    // on component created\n    created() {},\n\n    // on component mounted\n    mounted() {\n        this.fetchCategories();\n    },\n\n    // on component destroyed\n    destroyed() {},\n};\n</script>\n<style scoped>\n.faq-search {\n    background-size: cover;\n    background-color: rgba(115, 103, 240, 0.12) !important;\n}\n.faq-search .faq-search-input .input-group:focus-within {\n    box-shadow: none;\n}\n\n.faq-contact .faq-contact-card {\n    background-color: rgba(186, 191, 199, 0.12);\n}\n\n@media (min-width: 992px) {\n    .faq-search .card-body {\n        padding: 8rem !important;\n    }\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n    .faq-search .card-body {\n        padding: 6rem !important;\n    }\n}\n@media (min-width: 768px) {\n    .faq-search .faq-search-input .input-group {\n        width: 576px;\n        margin: 0 auto;\n    }\n    .faq-navigation {\n        height: 550px;\n    }\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_style_index_0_id_06e5248f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_style_index_0_id_06e5248f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_style_index_0_id_06e5248f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/src/Pages/knowledge/FaqSearch.vue":
/*!*****************************************************!*\
  !*** ./resources/src/Pages/knowledge/FaqSearch.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true& */ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true&");
/* harmony import */ var _FaqSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FaqSearch.vue?vue&type=script&lang=js& */ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _FaqSearch_vue_vue_type_style_index_0_id_06e5248f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& */ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FaqSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "06e5248f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/knowledge/FaqSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaqSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_65_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_style_index_0_id_06e5248f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=style&index=0&id=06e5248f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FaqSearch_vue_vue_type_template_id_06e5248f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/knowledge/FaqSearch.vue?vue&type=template&id=06e5248f&scoped=true& ***!
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
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-9 col-md-8 col-sm-12" },
          [
            _vm.faqs != ""
              ? _vm._l(_vm.faqs, function (faq, index) {
                  return _c(
                    "div",
                    {
                      key: index,
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
                                  "\n                                    " +
                                    _vm._s(faq.question) +
                                    "\n                                "
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
                                  "\n                                    " +
                                    _vm._s(faq.answer) +
                                    "\n                                "
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]
                  )
                })
              : _c(
                  "div",
                  {
                    staticClass: "text-muted text-center",
                    attrs: { colspan: "100%" },
                  },
                  [
                    _c("img", {
                      attrs: {
                        height: "128px",
                        width: "128px",
                        src: "https://assets.staticimg.com/pro/2.0.4/images/empty.svg",
                        alt: "",
                      },
                    }),
                    _vm._v(" "),
                    _c("p", {}, [_vm._v(_vm._s(_vm.$t("No Data Found")))]),
                    _vm._v(" "),
                    _c("section", { staticClass: "faq-contact" }, [
                      _c("div", { staticClass: "row mt-5 pt-75" }, [
                        _c("div", { staticClass: "col-12 text-center" }, [
                          _c("h2", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(_vm.$t("You still have a question")) +
                                "?\n                                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-3" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.$t(
                                    "If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!"
                                  )
                                ) +
                                "\n                                "
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
          ],
          2
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm.faqs != ""
      ? _c("section", { staticClass: "faq-contact" }, [
          _c("div", { staticClass: "row mt-5 pt-75" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("You still have a question")) + "?"),
              ]),
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
        ])
      : _vm._e(),
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
    return _c("div", { staticClass: "col-lg-3 col-md-4 col-sm-12" }, [
      _c(
        "div",
        {
          staticClass:
            "faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0",
        },
        [
          _c("img", {
            staticClass: "img-fluid d-none d-md-block",
            attrs: {
              src: "images/illustration/faq-illustrations.svg",
              alt: "demand img",
            },
          }),
        ]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX2tub3dsZWRnZV9GYXFTZWFyY2hfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVKQSxpRUFBZTtFQUNmQTtFQUNBO0VBQ0FDO0VBRUE7RUFDQUM7SUFDQTtNQUNBQztJQUNBO0VBQ0E7RUFFQUM7SUFDQUM7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0EsSUFDQUMsMENBQ0FBLDBCQUNBO2tCQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7RUFDQTtFQUVBO0VBQ0FDO0lBQ0FDO01BQ0FDLDRCQUNBLHNCQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBLFdBQ0FDLHdEQUNBQztRQUNBO01BQ0EsV0FDQTtJQUNBO0lBQ0FDO01BQ0EsYUFDQUMsMERBQ0E7UUFDQTtRQUNBLElBQ0FDLHVDQUNBLHNCQUNBLG1EQUNBLEVBQ0E7VUFDQTtVQUNBQztRQUNBO01BQ0E7SUFDQTtFQUNBO0VBRUE7RUFDQUM7RUFFQTtFQUNBQztJQUNBO0VBQ0E7RUFFQTtFQUNBQztBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pORDtBQUN3SjtBQUM3QjtBQUMzSCw4QkFBOEIsNEdBQTJCLENBQUMsaUlBQXFDO0FBQy9GO0FBQ0EsMEVBQTBFLDZCQUE2Qiw2REFBNkQsR0FBRyw0RUFBNEUsdUJBQXVCLEdBQUcsbURBQW1ELGtEQUFrRCxHQUFHLDZCQUE2QiwyQ0FBMkMsbUNBQW1DLEdBQUcsR0FBRyx1REFBdUQsMkNBQTJDLG1DQUFtQyxHQUFHLEdBQUcsNkJBQTZCLCtEQUErRCx1QkFBdUIseUJBQXlCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLEdBQUcsU0FBUywwR0FBMEcsTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxpYUFBaWEsc0NBQXNDLGtKQUFrSix3TEFBd0wsODVGQUE4NUYsZUFBZSx5a0JBQXlrQixhQUFhLGtsQkFBa2xCLHdCQUF3QixzUkFBc1Isb0NBQW9DLGdKQUFnSixxU0FBcVMseWdCQUF5Z0Isb0NBQW9DLDBFQUEwRSxxT0FBcU8saUpBQWlKLDJEQUEyRCx3Q0FBd0Msa0JBQWtCLG1DQUFtQyxPQUFPLGlCQUFpQixrQ0FBa0Msd0lBQXdJLHlDQUF5QyxlQUFlLFdBQVcsUUFBUSwwQ0FBMEMsb0JBQW9CLDJIQUEySCxXQUFXLDhCQUE4QiwySUFBMkkscURBQXFELG1CQUFtQix1Q0FBdUMsRUFBRSxXQUFXLHFCQUFxQixtSUFBbUkscVhBQXFYLDhHQUE4Ryx1QkFBdUIsbUJBQW1CLEVBQUUsV0FBVyxRQUFRLGtEQUFrRCxpREFBaUQsaUNBQWlDLE9BQU8sc0RBQXNELEtBQUssMENBQTBDLDZCQUE2Qiw2REFBNkQsR0FBRywyREFBMkQsdUJBQXVCLEdBQUcsb0NBQW9DLGtEQUFrRCxHQUFHLCtCQUErQiw4QkFBOEIsbUNBQW1DLE9BQU8sR0FBRyx1REFBdUQsOEJBQThCLG1DQUFtQyxPQUFPLEdBQUcsNkJBQTZCLGtEQUFrRCx1QkFBdUIseUJBQXlCLE9BQU8sdUJBQXVCLHdCQUF3QixPQUFPLEdBQUcsK0JBQStCO0FBQzV0VTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkQ7QUFDbEcsWUFBNGI7O0FBRTViOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHFZQUFPOzs7O0FBSXhCLGlFQUFlLDRZQUFjLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ppRTtBQUN2QztBQUNMO0FBQ3hELENBQTZGOzs7QUFHN0Y7QUFDZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDME0sQ0FBQyxpRUFBZSw4TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQTdPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUywyQkFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBLDRCQUE0Qiw4Q0FBOEM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBNEM7QUFDekUsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxrQkFBa0I7QUFDL0Msa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNENBQTRDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlELHFCQUFxQjtBQUNyQjtBQUNBLGtDQUFrQyxvQ0FBb0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlDQUF5QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUMsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLG9DQUFvQyw0QkFBNEI7QUFDaEUsa0NBQWtDLCtCQUErQjtBQUNqRSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRCxzQkFBc0IsK0JBQStCO0FBQ3JELHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQ0FBaUM7QUFDeEQsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBNEM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxU2VhcmNoLnZ1ZT9mOWM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWU/OTAyMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXFTZWFyY2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWU/NTE2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL2tub3dsZWRnZS9GYXFTZWFyY2gudnVlP2ViZDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9rbm93bGVkZ2UvRmFxU2VhcmNoLnZ1ZT8xNGFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWU/MDhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJmYXEtc2VhcmNoLWZpbHRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZCBmYXEtc2VhcmNoXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2Jhbm5lci9iYW5uZXIucG5nJylcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBtYWluIHRpdGxlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiTGV0J3MgYW5zd2VyIHNvbWUgcXVlc3Rpb25zXCIpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdWJ0aXRsZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvciBjaG9vc2UgYSBjYXRlZ29yeSB0byBxdWlja2x5IGZpbmQgdGhlIGhlbHAgeW91IG5lZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIHNlYXJjaCBpbnB1dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmYXEtc2VhcmNoLWlucHV0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic2VhcmNoKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1tZXJnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmFxLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0vIEtub3dsZWRnZSBiYXNlIEp1bWJvdHJvbiAtLT5cblxuICAgICAgICA8IS0tIEtub3dsZWRnZSBiYXNlIC0tPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImZhcS10YWJzXCI+XG4gICAgICAgICAgICA8IS0tIHZlcnRpY2FsIHRhYiBwaWxsIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNCBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmYXEtbmF2aWdhdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1jb2x1bW4gbWItMiBtYi1tZC0wXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGQVEgaW1hZ2UgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2lsbHVzdHJhdGlvbi9mYXEtaWxsdXN0cmF0aW9ucy5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkIGQtbm9uZSBkLW1kLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJkZW1hbmQgaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05IGNvbC1tZC04IGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZhcXMgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihmYXEsIGluZGV4KSBpbiBmYXFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uIGFjY29yZGlvbi1tYXJnaW4gbXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJyNmYXEtcXVlc3Rpb24tJyArIGZhcS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiZmFxLmNhdGVnb3J5X2lkICsgZmFxLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWJzLXRhcmdldD1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnI2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnI2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZhcS5xdWVzdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sbGFwc2UgYWNjb3JkaW9uLWNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtYnMtcGFyZW50PVwiJyNmYXEnICsgZmFxLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5IHRleHQtZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZhcS5hbnN3ZXIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiIGNvbHNwYW49XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTI4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTI4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYXNzZXRzLnN0YXRpY2ltZy5jb20vcHJvLzIuMC40L2ltYWdlcy9lbXB0eS5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJcIj57eyAkdChcIk5vIERhdGEgRm91bmRcIikgfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZmFxLWNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTUgcHQtNzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiWW91IHN0aWxsIGhhdmUgYSBxdWVzdGlvblwiKSB9fT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSWYgeW91IGNhbm5vdCBmaW5kIGEgcXVlc3Rpb24gaW4gb3VyIEZBUSwgeW91IGNhbiBhbHdheXMgY29udGFjdCB1cy4gV2Ugd2lsbCBhbnN3ZXIgdG8geW91IHNob3J0bHkhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwhLS0gLyBmcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9ucyB0YWJzIHBpbGxzIC0tPlxuXG4gICAgICAgIDwhLS0gY29udGFjdCB1cyAtLT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJmYXEtY29udGFjdFwiIHYtaWY9XCJmYXFzICE9ICcnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTUgcHQtNzVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyAkdChcIllvdSBzdGlsbCBoYXZlIGEgcXVlc3Rpb25cIikgfX0/PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdSBjYW5ub3QgZmluZCBhIHF1ZXN0aW9uIGluIG91ciBGQVEsIHlvdSBjYW4gYWx3YXlzIGNvbnRhY3QgdXMuIFdlIHdpbGwgYW5zd2VyIHRvIHlvdSBzaG9ydGx5IVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFtdLFxuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge30sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYXFzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgYXN5bmMgJHJvdXRlKGZyb20sIHRvKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdG8ucGFyYW1zLnNlYXJjaCAhPSBmcm9tLnBhcmFtcy5zZWFyY2ggJiZcbiAgICAgICAgICAgICAgICB0by5wYXJhbXMuc2VhcmNoICE9IG51bGxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hDYXRlZ29yaWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIGN1c3RvbSBtZXRob2RzXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnb0JhY2soKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoQ2F0ZWdvcmllcygpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAgICAgICAuZ2V0KFwiL3VzZXIva25vd2xlZGdlL2ZhcS9cIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5zZWFyY2gpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFxcyA9IHJlc3BvbnNlLmRhdGEuZmFxcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHt9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoKCkge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyXG4gICAgICAgICAgICAgICAgLnB1c2goXCIva25vd2xlZGdlL2ZhcS9cIiArIHRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSB0aGUgdnVleCBlcnIgcmVnYXJkaW5nICBuYXZpZ2F0aW5nIHRvIHRoZSBwYWdlIHRoZXkgYXJlIGFscmVhZHkgb24uXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyci5uYW1lICE9PSBcIk5hdmlnYXRpb25EdXBsaWNhdGVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFlcnIubWVzc2FnZS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF2b2lkZWQgcmVkdW5kYW50IG5hdmlnYXRpb24gdG8gY3VycmVudCBsb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IHByaW50IGFueSBvdGhlciBlcnJvcnMgdG8gdGhlIGNvbnNvbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0Vycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGNyZWF0ZWRcbiAgICBjcmVhdGVkKCkge30sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgbW91bnRlZFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hDYXRlZ29yaWVzKCk7XG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICBkZXN0cm95ZWQoKSB7fSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4uZmFxLXNlYXJjaCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XG59XG4uZmFxLXNlYXJjaCAuZmFxLXNlYXJjaC1pbnB1dCAuaW5wdXQtZ3JvdXA6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmFxLWNvbnRhY3QgLmZhcS1jb250YWN0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAxOTEsIDE5OSwgMC4xMik7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5mYXEtc2VhcmNoIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA4cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAuZmFxLXNlYXJjaCAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogNnJlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cCB7XG4gICAgICAgIHdpZHRoOiA1NzZweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5mYXEtbmF2aWdhdGlvbiB7XG4gICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmFxLXNlYXJjaFtkYXRhLXYtMDZlNTI0OGZdIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTUsIDEwMywgMjQwLCAwLjEyKSAhaW1wb3J0YW50O1xcbn1cXG4uZmFxLXNlYXJjaCAuZmFxLXNlYXJjaC1pbnB1dCAuaW5wdXQtZ3JvdXBbZGF0YS12LTA2ZTUyNDhmXTpmb2N1cy13aXRoaW4ge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uZmFxLWNvbnRhY3QgLmZhcS1jb250YWN0LWNhcmRbZGF0YS12LTA2ZTUyNDhmXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg2LCAxOTEsIDE5OSwgMC4xMik7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbi5mYXEtc2VhcmNoIC5jYXJkLWJvZHlbZGF0YS12LTA2ZTUyNDhmXSB7XFxuICAgICAgICBwYWRkaW5nOiA4cmVtICFpbXBvcnRhbnQ7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xcbi5mYXEtc2VhcmNoIC5jYXJkLWJvZHlbZGF0YS12LTA2ZTUyNDhmXSB7XFxuICAgICAgICBwYWRkaW5nOiA2cmVtICFpbXBvcnRhbnQ7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4uZmFxLXNlYXJjaCAuZmFxLXNlYXJjaC1pbnB1dCAuaW5wdXQtZ3JvdXBbZGF0YS12LTA2ZTUyNDhmXSB7XFxuICAgICAgICB3aWR0aDogNTc2cHg7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmZhcS1uYXZpZ2F0aW9uW2RhdGEtdi0wNmU1MjQ4Zl0ge1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG59XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTROQTtJQUNBLHNCQUFBO0lBQ0Esc0RBQUE7QUFDQTtBQUNBO0lBQ0EsZ0JBQUE7QUFDQTtBQUVBO0lBQ0EsMkNBQUE7QUFDQTtBQUVBO0FBQ0E7UUFDQSx3QkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ0Esd0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtRQUNBLFlBQUE7UUFDQSxjQUFBO0FBQ0E7QUFDQTtRQUNBLGFBQUE7QUFDQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxzZWN0aW9uIGlkPVxcXCJmYXEtc2VhcmNoLWZpbHRlclxcXCI+XFxuICAgICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FyZCBmYXEtc2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICBzdHlsZT1cXFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYmFubmVyL2Jhbm5lci5wbmcnKVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIG1haW4gdGl0bGUgLS0+XFxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXFxcIkxldCdzIGFuc3dlciBzb21lIHF1ZXN0aW9uc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBzdWJ0aXRsZSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLXRleHQgbWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwib3IgY2hvb3NlIGEgY2F0ZWdvcnkgdG8gcXVpY2tseSBmaW5kIHRoZSBoZWxwIHlvdSBuZWVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gc2VhcmNoIGlucHV0IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcImZhcS1zZWFyY2gtaW5wdXRcXFwiIEBzdWJtaXQucHJldmVudD1cXFwic2VhcmNoKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLW1lcmdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtdGV4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiYmkgYmktc2VhcmNoXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmYXEuLi5cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9XFxcInNlYXJjaFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgICA8IS0tLyBLbm93bGVkZ2UgYmFzZSBKdW1ib3Ryb24gLS0+XFxuXFxuICAgICAgICA8IS0tIEtub3dsZWRnZSBiYXNlIC0tPlxcbiAgICAgICAgPHNlY3Rpb24gaWQ9XFxcImZhcS10YWJzXFxcIj5cXG4gICAgICAgICAgICA8IS0tIHZlcnRpY2FsIHRhYiBwaWxsIC0tPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC00IGNvbC1zbS0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZhcS1uYXZpZ2F0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWNvbHVtbiBtYi0yIG1iLW1kLTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGQVEgaW1hZ2UgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XFxcImltYWdlcy9pbGx1c3RyYXRpb24vZmFxLWlsbHVzdHJhdGlvbnMuc3ZnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW1nLWZsdWlkIGQtbm9uZSBkLW1kLWJsb2NrXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcImRlbWFuZCBpbWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTkgY29sLW1kLTggY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVxcXCJmYXFzICE9ICcnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIoZmFxLCBpbmRleCkgaW4gZmFxc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJhY2NvcmRpb24gYWNjb3JkaW9uLW1hcmdpbiBtdC0yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XFxcIicjZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkIGFjY29yZGlvbi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJhY2NvcmRpb24taGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cXFwiZmFxLmNhdGVnb3J5X2lkICsgZmFxLmlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImFjY29yZGlvbi1idXR0b24gY29sbGFwc2VkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtYnMtdGFyZ2V0PVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcjZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnI2ZhcS1xdWVzdGlvbi0nICsgZmFxLmlkXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBmYXEucXVlc3Rpb24gfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVxcXCInZmFxLXF1ZXN0aW9uLScgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbGxhcHNlIGFjY29yZGlvbi1jb2xsYXBzZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1sYWJlbGxlZGJ5PVxcXCJmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRhdGEtYnMtcGFyZW50PVxcXCInI2ZhcScgKyBmYXEuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWNjb3JkaW9uLWJvZHkgdGV4dC1kYXJrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZmFxLmFuc3dlciB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVxcXCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cXFwiMTI4cHhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVxcXCIxMjhweFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Fzc2V0cy5zdGF0aWNpbWcuY29tL3Byby8yLjAuNC9pbWFnZXMvZW1wdHkuc3ZnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJcXFwiPnt7ICR0KFxcXCJObyBEYXRhIEZvdW5kXFxcIikgfX08L3A+XFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImZhcS1jb250YWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG10LTUgcHQtNzVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLTEyIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFxcXCJZb3Ugc3RpbGwgaGF2ZSBhIHF1ZXN0aW9uXFxcIikgfX0/XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibWItM1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiSWYgeW91IGNhbm5vdCBmaW5kIGEgcXVlc3Rpb24gaW4gb3VyIEZBUSwgeW91IGNhbiBhbHdheXMgY29udGFjdCB1cy4gV2Ugd2lsbCBhbnN3ZXIgdG8geW91IHNob3J0bHkhXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuICAgICAgICA8IS0tIC8gZnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnMgdGFicyBwaWxscyAtLT5cXG5cXG4gICAgICAgIDwhLS0gY29udGFjdCB1cyAtLT5cXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJmYXEtY29udGFjdFxcXCIgdi1pZj1cXFwiZmFxcyAhPSAnJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IG10LTUgcHQtNzVcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtMTIgdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7ICR0KFxcXCJZb3Ugc3RpbGwgaGF2ZSBhIHF1ZXN0aW9uXFxcIikgfX0/PC9oMj5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtYi0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJJZiB5b3UgY2Fubm90IGZpbmQgYSBxdWVzdGlvbiBpbiBvdXIgRkFRLCB5b3UgY2FuIGFsd2F5cyBjb250YWN0IHVzLiBXZSB3aWxsIGFuc3dlciB0byB5b3Ugc2hvcnRseSFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IFtdLFxcbiAgICAvLyBjb21wb25lbnQgbGlzdFxcbiAgICBjb21wb25lbnRzOiB7fSxcXG5cXG4gICAgLy8gY29tcG9uZW50IGRhdGFcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZmFxczogW10sXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgYXN5bmMgJHJvdXRlKGZyb20sIHRvKSB7XFxuICAgICAgICAgICAgaWYgKFxcbiAgICAgICAgICAgICAgICB0by5wYXJhbXMuc2VhcmNoICE9IGZyb20ucGFyYW1zLnNlYXJjaCAmJlxcbiAgICAgICAgICAgICAgICB0by5wYXJhbXMuc2VhcmNoICE9IG51bGxcXG4gICAgICAgICAgICApIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaENhdGVnb3JpZXMoKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICAvLyBjdXN0b20gbWV0aG9kc1xcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBnb0JhY2soKSB7XFxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMVxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJvdXRlci5nbygtMSlcXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaChcXFwiL1xcXCIpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZldGNoQ2F0ZWdvcmllcygpIHtcXG4gICAgICAgICAgICB0aGlzLiRodHRwXFxuICAgICAgICAgICAgICAgIC5nZXQoXFxcIi91c2VyL2tub3dsZWRnZS9mYXEvXFxcIiArIHRoaXMuJHJvdXRlLnBhcmFtcy5zZWFyY2gpXFxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYXFzID0gcmVzcG9uc2UuZGF0YS5mYXFzO1xcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2VhcmNoKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlclxcbiAgICAgICAgICAgICAgICAucHVzaChcXFwiL2tub3dsZWRnZS9mYXEvXFxcIiArIHRoaXMuJHJlZnMuc2VhcmNoLnZhbHVlKVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIHRoZSB2dWV4IGVyciByZWdhcmRpbmcgIG5hdmlnYXRpbmcgdG8gdGhlIHBhZ2UgdGhleSBhcmUgYWxyZWFkeSBvbi5cXG4gICAgICAgICAgICAgICAgICAgIGlmIChcXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubmFtZSAhPT0gXFxcIk5hdmlnYXRpb25EdXBsaWNhdGVkXFxcIiAmJlxcbiAgICAgICAgICAgICAgICAgICAgICAgICFlcnIubWVzc2FnZS5pbmNsdWRlcyhcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcIkF2b2lkZWQgcmVkdW5kYW50IG5hdmlnYXRpb24gdG8gY3VycmVudCBsb2NhdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgICAgICAgICApIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdXQgcHJpbnQgYW55IG90aGVyIGVycm9ycyB0byB0aGUgY29uc29sZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ0Vycm9yKGVycik7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgLy8gb24gY29tcG9uZW50IGNyZWF0ZWRcXG4gICAgY3JlYXRlZCgpIHt9LFxcblxcbiAgICAvLyBvbiBjb21wb25lbnQgbW91bnRlZFxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgdGhpcy5mZXRjaENhdGVnb3JpZXMoKTtcXG4gICAgfSxcXG5cXG4gICAgLy8gb24gY29tcG9uZW50IGRlc3Ryb3llZFxcbiAgICBkZXN0cm95ZWQoKSB7fSxcXG59O1xcbjwvc2NyaXB0PlxcbjxzdHlsZSBzY29wZWQ+XFxuLmZhcS1zZWFyY2gge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTAzLCAyNDAsIDAuMTIpICFpbXBvcnRhbnQ7XFxufVxcbi5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cDpmb2N1cy13aXRoaW4ge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4uZmFxLWNvbnRhY3QgLmZhcS1jb250YWN0LWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NiwgMTkxLCAxOTksIDAuMTIpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLmZhcS1zZWFyY2ggLmNhcmQtYm9keSB7XFxuICAgICAgICBwYWRkaW5nOiA4cmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcXG4gICAgLmZhcS1zZWFyY2ggLmNhcmQtYm9keSB7XFxuICAgICAgICBwYWRkaW5nOiA2cmVtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5mYXEtc2VhcmNoIC5mYXEtc2VhcmNoLWlucHV0IC5pbnB1dC1ncm91cCB7XFxuICAgICAgICB3aWR0aDogNTc2cHg7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgfVxcbiAgICAuZmFxLW5hdmlnYXRpb24ge1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgfVxcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjVbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjVbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxU2VhcmNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2ZTUyNDhmJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmFxU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmU1MjQ4ZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GYXFTZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GYXFTZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZhcVNlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmU1MjQ4ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDZlNTI0OGZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oeXFmaW4vcHVibGljX2h0bWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZlNTI0OGYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZlNTI0OGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZlNTI0OGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZhcVNlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZlNTI0OGYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDZlNTI0OGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9zcmMvUGFnZXMva25vd2xlZGdlL0ZhcVNlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZhcVNlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02NVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GYXFTZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZlNTI0OGYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmFxU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmU1MjQ4ZiZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBhdHRyczogeyBpZDogXCJmYXEtc2VhcmNoLWZpbHRlclwiIH0gfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIGZhcS1zZWFyY2hcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCdpbWFnZXMvYmFubmVyL2Jhbm5lci5wbmcnKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkxldCdzIGFuc3dlciBzb21lIHF1ZXN0aW9uc1wiKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGV4dCBtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFxuICAgICAgICAgICAgICAgICAgICAgIFwib3IgY2hvb3NlIGEgY2F0ZWdvcnkgdG8gcXVpY2tseSBmaW5kIHRoZSBoZWxwIHlvdSBuZWVkXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFxLXNlYXJjaC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWFyY2goKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1tZXJnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmOiBcInNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmYXEuLi5cIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInNlY3Rpb25cIiwgeyBhdHRyczogeyBpZDogXCJmYXEtdGFic1wiIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IGNvbC1tZC04IGNvbC1zbS0xMlwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLmZhcXMgIT0gXCJcIlxuICAgICAgICAgICAgICA/IF92bS5fbChfdm0uZmFxcywgZnVuY3Rpb24gKGZhcSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWNjb3JkaW9uIGFjY29yZGlvbi1tYXJnaW4gbXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIiNmYXEtcXVlc3Rpb24tXCIgKyBmYXEuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBhY2NvcmRpb24taXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24taGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IGZhcS5jYXRlZ29yeV9pZCArIGZhcS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNmYXEtcXVlc3Rpb24tXCIgKyBmYXEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiI2ZhcS1xdWVzdGlvbi1cIiArIGZhcS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGZhcS5xdWVzdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlIGFjY29yZGlvbi1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmYXEtcXVlc3Rpb24tXCIgKyBmYXEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBmYXEuY2F0ZWdvcnlfaWQgKyBmYXEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtcGFyZW50XCI6IFwiI2ZhcVwiICsgZmFxLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFjY29yZGlvbi1ib2R5IHRleHQtZGFya1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhmYXEuYW5zd2VyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWQgdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vYXNzZXRzLnN0YXRpY2ltZy5jb20vcHJvLzIuMC40L2ltYWdlcy9lbXB0eS5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHt9LCBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJObyBEYXRhIEZvdW5kXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFxLWNvbnRhY3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNSBwdC03NVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIllvdSBzdGlsbCBoYXZlIGEgcXVlc3Rpb25cIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI/XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJZiB5b3UgY2Fubm90IGZpbmQgYSBxdWVzdGlvbiBpbiBvdXIgRkFRLCB5b3UgY2FuIGFsd2F5cyBjb250YWN0IHVzLiBXZSB3aWxsIGFuc3dlciB0byB5b3Ugc2hvcnRseSFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5mYXFzICE9IFwiXCJcbiAgICAgID8gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFxLWNvbnRhY3RcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNSBwdC03NVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIllvdSBzdGlsbCBoYXZlIGEgcXVlc3Rpb25cIikpICsgXCI/XCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJJZiB5b3UgY2Fubm90IGZpbmQgYSBxdWVzdGlvbiBpbiBvdXIgRkFRLCB5b3UgY2FuIGFsd2F5cyBjb250YWN0IHVzLiBXZSB3aWxsIGFuc3dlciB0byB5b3Ugc2hvcnRseSFcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmkgYmktc2VhcmNoXCIgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTEyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZmFxLW5hdmlnYXRpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uIG1iLTIgbWItbWQtMFwiLFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkIGQtbm9uZSBkLW1kLWJsb2NrXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiaW1hZ2VzL2lsbHVzdHJhdGlvbi9mYXEtaWxsdXN0cmF0aW9ucy5zdmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcImRlbWFuZCBpbWdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbInByb3BzIiwiY29tcG9uZW50cyIsImRhdGEiLCJmYXFzIiwid2F0Y2giLCIkcm91dGUiLCJ0byIsIm1ldGhvZHMiLCJnb0JhY2siLCJ3aW5kb3ciLCJmZXRjaENhdGVnb3JpZXMiLCJnZXQiLCJ0aGVuIiwic2VhcmNoIiwicHVzaCIsImVyciIsImxvZ0Vycm9yIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJkZXN0cm95ZWQiXSwic291cmNlUm9vdCI6IiJ9