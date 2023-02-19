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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19zcmNfUGFnZXNfRm9yZXhfVHJhZGluZ192dWUuMzEwMDYwZWI4OGJjYjAzMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxpRUFBZTtFQUNmQSxTQURBO0VBRUE7RUFDQUMsY0FIQTtFQUtBO0VBQ0FDLElBTkEsa0JBTUE7SUFDQTtNQUNBQyxXQURBO01BRUFDLHVDQUZBO01BR0FDLHNDQUhBO01BSUFDO0lBSkE7RUFNQSxDQWJBO0VBZUE7RUFDQUM7SUFDQUMsTUFEQSxvQkFDQTtNQUNBQyw0QkFDQSxtQkFEQSxHQUVBLHNCQUZBO0lBR0EsQ0FMQTtJQU1BQyxTQU5BLHVCQU1BO01BQUE7O01BQ0E7UUFDQTtNQUNBLENBRkE7SUFHQSxDQVZBO0lBV0FDLFFBWEEsc0JBV0E7TUFDQTtNQUNBO0lBQ0E7RUFkQSxDQWhCQTtFQWlDQTtFQUNBQyxPQWxDQSxxQkFrQ0E7SUFDQTtFQUNBLENBcENBO0VBc0NBO0VBQ0FDLE9BdkNBLHFCQXVDQTtJQUFBOztJQUNBO01BQ0FKO0lBQ0EsQ0FGQTtFQUdBLENBM0NBO0VBNkNBSyxhQTdDQSwyQkE2Q0E7SUFDQUw7RUFDQSxDQS9DQTtFQWdEQTtFQUNBTSxTQWpEQSx1QkFpREE7QUFqREE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdEN3TSxDQUFDLGlFQUFlLDRNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBM087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9zcmMvUGFnZXMvRm9yZXgvVHJhZGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Gb3JleC9UcmFkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL1BhZ2VzL0ZvcmV4L1RyYWRpbmcudnVlPzVkMWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9QYWdlcy9Gb3JleC9UcmFkaW5nLnZ1ZT82MmQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvUGFnZXMvRm9yZXgvVHJhZGluZy52dWU/MDZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGlmcmFtZVxuICAgICAgICA6c3JjPVwiXG4gICAgICAgICAgICAnaHR0cHM6Ly90cmFkZS5tcWw1LmNvbS90cmFkZT9zZXJ2ZXJzPScgK1xuICAgICAgICAgICAgYWNjb3VudC5icm9rZXIgK1xuICAgICAgICAgICAgJyZhbXA7dHJhZGVfc2VydmVyPScgK1xuICAgICAgICAgICAgYWNjb3VudC5icm9rZXIgK1xuICAgICAgICAgICAgJyZkZW1vX2FsbF9zZXJ2ZXJzJj0xJmFtcDtzdGFydHVwX21vZGU9b3Blbl90cmFkZSZhbXA7bGFuZz0nICtcbiAgICAgICAgICAgIGFjY291bnQubGFuZ3VhZ2UgK1xuICAgICAgICAgICAgJyZhbXA7c2F2ZV9wYXNzd29yZD1vbiZsb2dpbj0nICtcbiAgICAgICAgICAgIGFjY291bnQubnVtYmVyXG4gICAgICAgIFwiXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbj1cImFsbG93ZnVsbHNjcmVlblwiXG4gICAgICAgIDpzdHlsZT1cIlxuICAgICAgICAgICAgJ2hlaWdodDonICtcbiAgICAgICAgICAgIHdpbmRvd0hlaWdodCArXG4gICAgICAgICAgICAncHg7JyArXG4gICAgICAgICAgICAnd2lkdGg6JyArXG4gICAgICAgICAgICB3aW5kb3dXaWR0aCArXG4gICAgICAgICAgICAncHg7JyArXG4gICAgICAgICAgICAnbWFyZ2luOi0yN3B4J1xuICAgICAgICBcIlxuICAgID48L2lmcmFtZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFtdLFxuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czoge30sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2NvdW50OiB7fSxcbiAgICAgICAgICAgIHdpbmRvd0hlaWdodDogd2luZG93LmlubmVySGVpZ2h0ICogMC44OCxcbiAgICAgICAgICAgIHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU1LFxuICAgICAgICAgICAgdHh0OiBcIlwiLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBjdXN0b20gbWV0aG9kc1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ29CYWNrKCkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgID8gdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICAgIDogdGhpcy4kcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoXCIvdXNlci9mZXRjaC9mb3JleFwiKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IHJlc3BvbnNlLmRhdGEuYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC44ODtcbiAgICAgICAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU1O1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBtb3VudGVkXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcbiAgICB9LFxuICAgIC8vIG9uIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICBkZXN0cm95ZWQoKSB7fSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVHJhZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmY0YjhlYTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVHJhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmY0YjhlYTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmY0YjhlYTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmY0YjhlYTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmNGI4ZWEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZmNGI4ZWEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvc3JjL1BhZ2VzL0ZvcmV4L1RyYWRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhZGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVHJhZGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmY0YjhlYTAmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImlmcmFtZVwiLCB7XG4gICAgc3R5bGU6XG4gICAgICBcImhlaWdodDpcIiArXG4gICAgICBfdm0ud2luZG93SGVpZ2h0ICtcbiAgICAgIFwicHg7XCIgK1xuICAgICAgXCJ3aWR0aDpcIiArXG4gICAgICBfdm0ud2luZG93V2lkdGggK1xuICAgICAgXCJweDtcIiArXG4gICAgICBcIm1hcmdpbjotMjdweFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBzcmM6XG4gICAgICAgIFwiaHR0cHM6Ly90cmFkZS5tcWw1LmNvbS90cmFkZT9zZXJ2ZXJzPVwiICtcbiAgICAgICAgX3ZtLmFjY291bnQuYnJva2VyICtcbiAgICAgICAgXCImdHJhZGVfc2VydmVyPVwiICtcbiAgICAgICAgX3ZtLmFjY291bnQuYnJva2VyICtcbiAgICAgICAgXCImZGVtb19hbGxfc2VydmVycyY9MSZzdGFydHVwX21vZGU9b3Blbl90cmFkZSZsYW5nPVwiICtcbiAgICAgICAgX3ZtLmFjY291bnQubGFuZ3VhZ2UgK1xuICAgICAgICBcIiZzYXZlX3Bhc3N3b3JkPW9uJmxvZ2luPVwiICtcbiAgICAgICAgX3ZtLmFjY291bnQubnVtYmVyLFxuICAgICAgYWxsb3dmdWxsc2NyZWVuOiBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgIH0sXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbInByb3BzIiwiY29tcG9uZW50cyIsImRhdGEiLCJhY2NvdW50Iiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ0eHQiLCJtZXRob2RzIiwiZ29CYWNrIiwid2luZG93IiwiZmV0Y2hEYXRhIiwib25SZXNpemUiLCJjcmVhdGVkIiwibW91bnRlZCIsImJlZm9yZURlc3Ryb3kiLCJkZXN0cm95ZWQiXSwic291cmNlUm9vdCI6IiJ9