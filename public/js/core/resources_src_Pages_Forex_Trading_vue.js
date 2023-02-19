"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_Pages_Forex_Trading_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: [],
  // component list
  components: {},
  // component data
  data: function data() {
    return {
      account: {},
      windowHeight: window.innerHeight * 0.88,
      windowWidth: window.innerWidth * 0.955,
      txt: ""
    };
  },
  // custom methods
  methods: {
    goBack: function goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    fetchData: function fetchData() {
      var _this = this;
      this.$http.post("/user/fetch/forex").then(function (response) {
        _this.account = response.data.account;
      });
    },
    onResize: function onResize() {
      this.windowHeight = window.innerHeight * 0.88;
      this.windowWidth = window.innerWidth * 0.955;
    }
  },
  // on component created
  created: function created() {
    this.fetchData();
  },
  // on component mounted
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      window.addEventListener("resize", _this2.onResize);
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./resources/src/Pages/Forex/Trading.vue":
/*!***********************************************!*\
  !*** ./resources/src/Pages/Forex/Trading.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trading.vue?vue&type=template&id=6f4b8ea0& */ "./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0&");
/* harmony import */ var _Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trading.vue?vue&type=script&lang=js& */ "./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/Pages/Forex/Trading.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0&":
/*!******************************************************************************!*\
  !*** ./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trading_vue_vue_type_template_id_6f4b8ea0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Trading.vue?vue&type=template&id=6f4b8ea0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/Pages/Forex/Trading.vue?vue&type=template&id=6f4b8ea0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("iframe", {
    style:
      "height:" +
      _vm.windowHeight +
      "px;" +
      "width:" +
      _vm.windowWidth +
      "px;" +
      "margin:-27px",
    attrs: {
      src:
        "https://trade.mql5.com/trade?servers=" +
        _vm.account.broker +
        "&trade_server=" +
        _vm.account.broker +
        "&demo_all_servers&=1&startup_mode=open_trade&lang=" +
        _vm.account.language +
        "&save_password=on&login=" +
        _vm.account.number,
      allowfullscreen: "allowfullscreen",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX1BhZ2VzX0ZvcmV4X1RyYWRpbmdfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxpRUFBZTtFQUNmQTtFQUNBO0VBQ0FDO0VBRUE7RUFDQUM7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFFQTtFQUNBQztJQUNBQztNQUNBQyw0QkFDQSxzQkFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtFQUNBO0VBRUE7RUFDQUM7SUFDQTtFQUNBO0VBRUE7RUFDQUM7SUFBQTtJQUNBO01BQ0FKO0lBQ0E7RUFDQTtFQUVBSztJQUNBTDtFQUNBO0VBQ0E7RUFDQU07QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVFcUY7QUFDM0I7QUFDTDs7O0FBR3REO0FBQ0EsQ0FBZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RDd00sQ0FBQyxpRUFBZSw0TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQTNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvc3JjL1BhZ2VzL0ZvcmV4L1RyYWRpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvRm9yZXgvVHJhZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Gb3JleC9UcmFkaW5nLnZ1ZT81ZDFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvRm9yZXgvVHJhZGluZy52dWU/NjJkMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL0ZvcmV4L1RyYWRpbmcudnVlPzA2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxpZnJhbWVcbiAgICAgICAgOnNyYz1cIlxuICAgICAgICAgICAgJ2h0dHBzOi8vdHJhZGUubXFsNS5jb20vdHJhZGU/c2VydmVycz0nICtcbiAgICAgICAgICAgIGFjY291bnQuYnJva2VyICtcbiAgICAgICAgICAgICcmYW1wO3RyYWRlX3NlcnZlcj0nICtcbiAgICAgICAgICAgIGFjY291bnQuYnJva2VyICtcbiAgICAgICAgICAgICcmZGVtb19hbGxfc2VydmVycyY9MSZhbXA7c3RhcnR1cF9tb2RlPW9wZW5fdHJhZGUmYW1wO2xhbmc9JyArXG4gICAgICAgICAgICBhY2NvdW50Lmxhbmd1YWdlICtcbiAgICAgICAgICAgICcmYW1wO3NhdmVfcGFzc3dvcmQ9b24mbG9naW49JyArXG4gICAgICAgICAgICBhY2NvdW50Lm51bWJlclxuICAgICAgICBcIlxuICAgICAgICBhbGxvd2Z1bGxzY3JlZW49XCJhbGxvd2Z1bGxzY3JlZW5cIlxuICAgICAgICA6c3R5bGU9XCJcbiAgICAgICAgICAgICdoZWlnaHQ6JyArXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQgK1xuICAgICAgICAgICAgJ3B4OycgK1xuICAgICAgICAgICAgJ3dpZHRoOicgK1xuICAgICAgICAgICAgd2luZG93V2lkdGggK1xuICAgICAgICAgICAgJ3B4OycgK1xuICAgICAgICAgICAgJ21hcmdpbjotMjdweCdcbiAgICAgICAgXCJcbiAgICA+PC9pZnJhbWU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbXSxcbiAgICAvLyBjb21wb25lbnQgbGlzdFxuICAgIGNvbXBvbmVudHM6IHt9LFxuXG4gICAgLy8gY29tcG9uZW50IGRhdGFcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjb3VudDoge30sXG4gICAgICAgICAgICB3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuODgsXG4gICAgICAgICAgICB3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGggKiAwLjk1NSxcbiAgICAgICAgICAgIHR4dDogXCJcIixcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gY3VzdG9tIG1ldGhvZHNcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJvdXRlci5nbygtMSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5wb3N0KFwiL3VzZXIvZmV0Y2gvZm9yZXhcIikudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSByZXNwb25zZS5kYXRhLmFjY291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25SZXNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuODg7XG4gICAgICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjk1NTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gb24gY29tcG9uZW50IGNyZWF0ZWRcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgbW91bnRlZFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG4gICAgfSxcbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmNGI4ZWEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaHlxZmluL3B1YmxpY19odG1sL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmNGI4ZWEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmNGI4ZWEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmNGI4ZWEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UcmFkaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjRiOGVhMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZjRiOGVhMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL3NyYy9QYWdlcy9Gb3JleC9UcmFkaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFkaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmNGI4ZWEwJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJpZnJhbWVcIiwge1xuICAgIHN0eWxlOlxuICAgICAgXCJoZWlnaHQ6XCIgK1xuICAgICAgX3ZtLndpbmRvd0hlaWdodCArXG4gICAgICBcInB4O1wiICtcbiAgICAgIFwid2lkdGg6XCIgK1xuICAgICAgX3ZtLndpbmRvd1dpZHRoICtcbiAgICAgIFwicHg7XCIgK1xuICAgICAgXCJtYXJnaW46LTI3cHhcIixcbiAgICBhdHRyczoge1xuICAgICAgc3JjOlxuICAgICAgICBcImh0dHBzOi8vdHJhZGUubXFsNS5jb20vdHJhZGU/c2VydmVycz1cIiArXG4gICAgICAgIF92bS5hY2NvdW50LmJyb2tlciArXG4gICAgICAgIFwiJnRyYWRlX3NlcnZlcj1cIiArXG4gICAgICAgIF92bS5hY2NvdW50LmJyb2tlciArXG4gICAgICAgIFwiJmRlbW9fYWxsX3NlcnZlcnMmPTEmc3RhcnR1cF9tb2RlPW9wZW5fdHJhZGUmbGFuZz1cIiArXG4gICAgICAgIF92bS5hY2NvdW50Lmxhbmd1YWdlICtcbiAgICAgICAgXCImc2F2ZV9wYXNzd29yZD1vbiZsb2dpbj1cIiArXG4gICAgICAgIF92bS5hY2NvdW50Lm51bWJlcixcbiAgICAgIGFsbG93ZnVsbHNjcmVlbjogXCJhbGxvd2Z1bGxzY3JlZW5cIixcbiAgICB9LFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJuYW1lcyI6WyJwcm9wcyIsImNvbXBvbmVudHMiLCJkYXRhIiwiYWNjb3VudCIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwidHh0IiwibWV0aG9kcyIsImdvQmFjayIsIndpbmRvdyIsImZldGNoRGF0YSIsIm9uUmVzaXplIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJiZWZvcmVEZXN0cm95IiwiZGVzdHJveWVkIl0sInNvdXJjZVJvb3QiOiIifQ==