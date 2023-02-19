(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_components_wallets_MainWalletDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-qrcode-component */ "./node_modules/vue-qrcode-component/src/QRCode.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// component

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["type", "symbol", "address"],
  // component list
  components: {
    "qr-code": vue_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  // component data
  data: function data() {
    return {
      wal: {},
      addresses: {},
      logs: {},
      gnl: gnl,
      loading: false,
      api: 1,
      pathname: "main",
      plat: plat,
      network: null,
      withdraw_address: null,
      withdraw_amount: null,
      timer: []
    };
  },
  // custom methods
  methods: {
    fetchData: function fetchData() {
      var _this = this;
      this.$http.post("/user/fetch/eco/wallet/main/" + this.symbol + "/" + this.address).then(function (response) {
        _this.wal = response.data.wal, _this.logs = response.data.logs, _this.addresses = response.data.addresses;
        _this.$emit("RefreshMainWallet", response.data.wal);
      });
    },
    fetchWalletLogs: function fetchWalletLogs() {
      var _this2 = this;
      this.$http.post("/user/fetch/eco/wallet/main/logs/" + this.symbol + "/" + this.address).then(function (response) {
        _this2.logs = response.data.logs;
      });
    },
    Withdraw: function Withdraw(id) {
      var _this3 = this;
      if (this.withdraw_amount <= 0) {
        this.$toast.error("Invalid amount");
      } else {
        this.loading = true;
        this.$http.post("/user/eco/wallet/withdraw", {
          id: id,
          symbol: this.wal.symbol,
          withdraw_address: this.withdraw_address,
          memo: this.withdraw_memo,
          amount: this.withdraw_amount
        }).then(function (response) {
          _this3.$toast[response.data.type](response.data.message);
        })["catch"](function (error) {
          _this3.$toast.error(error.response.data);
        })["finally"](function () {
          _this3.fetchData();
          _this3.loading = false;
          $("#withdraw").modal("hide");
        });
      }
    }
  },
  // on component created
  created: function created() {
    this.fetchData();
  },
  // on component mounted
  mounted: function mounted() {
    var _this4 = this;
    this.timer[this.address] = setInterval(function () {
      _this4.fetchWalletLogs();
    }, 30000);
    router.afterEach(function (to, from) {
      clearInterval(_this4.timer[from.params.address]);
    });
  },
  // on component destroyed
  destroyed: function destroyed() {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Tooltips\n */\n@keyframes tooltipShowLeft {\n0% {\n    opacity: 0;\n    transform: translateX(-20px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(-10px);\n}\n}\n@keyframes tooltipShowRight {\n0% {\n    opacity: 0;\n    transform: translateX(20px);\n}\n100% {\n    opacity: 1;\n    transform: translateX(10px);\n}\n}\n@keyframes tooltipShowTop {\n0% {\n    opacity: 0;\n    transform: translateY(-20px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(-10px);\n}\n}\n@keyframes tooltipShowBottom {\n0% {\n    opacity: 0;\n    transform: translateY(20px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(10px);\n}\n}\n.tooltip-wrap {\n  display: block;\n  position: absolute;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n  transition: none;\n  border: none;\n  border-radius: 6px;\n  max-width: 500px;\n  margin: 0;\n  padding: 0.5em 1em;\n  font-size: 80%;\n  line-height: 1.2em;\n  color: #a9b8cb;\n  background-color: #405168;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);\n  left: 0;\n  top: 0;\n  z-index: 10009;\n}\n.tooltip-wrap.tooltip-left {\n  animation: tooltipShowLeft 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-right {\n  animation: tooltipShowRight 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-top {\n  animation: tooltipShowTop 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-bottom {\n  animation: tooltipShowBottom 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap:after {\n  content: \" \";\n  position: absolute;\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  transition: none;\n  border: solid transparent;\n  border-color: transparent;\n  border-width: 5px;\n}\n.tooltip-wrap.tooltip-left:after {\n  left: 100%;\n  top: 50%;\n  border-left-color: #405168;\n  margin-top: -5px;\n}\n.tooltip-wrap.tooltip-right:after {\n  right: 100%;\n  top: 50%;\n  border-right-color: #405168;\n  margin-top: -5px;\n}\n.tooltip-wrap.tooltip-top:after {\n  top: 100%;\n  left: 50%;\n  border-top-color: #405168;\n  margin-left: -5px;\n}\n.tooltip-wrap.tooltip-bottom:after {\n  bottom: 100%;\n  left: 50%;\n  border-bottom-color: #405168;\n  margin-left: -5px;\n}", "",{"version":3,"sources":["webpack://./resources/src/scss/tooltip.scss","webpack://./resources/src/components/wallets/MainWalletDetail.vue","webpack://./resources/src/scss/variables.scss"],"names":[],"mappings":"AAAA;;EAAA;AAMA;AACI;IAAO,UAAA;IAAY,4BAAA;ACArB;ADCE;IAAO,UAAA;IAAY,4BAAA;ACGrB;AACF;ADFA;AACI;IAAO,UAAA;IAAY,2BAAA;ACMrB;ADLE;IAAO,UAAA;IAAY,2BAAA;ACSrB;AACF;ADRA;AACI;IAAO,UAAA;IAAY,4BAAA;ACYrB;ADXE;IAAO,UAAA;IAAY,4BAAA;ACerB;AACF;ADdA;AACI;IAAO,UAAA;IAAY,2BAAA;ACkBrB;ADjBE;IAAO,UAAA;IAAY,2BAAA;ACqBrB;AACF;ADpBA;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,YAAA;EACA,kBEbS;EFcT,gBAAA;EACA,SAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,cAjCa;EAkCb,yBAnCS;EAoCT,yCE0DW;EFzDX,OAAA;EACA,MAAA;EACA,cAAA;ACsBF;ADpBE;EAAiB,gFAAA;ACuBnB;ADtBE;EAAkB,iFAAA;ACyBpB;ADxBE;EAAgB,+EAAA;AC2BlB;AD1BE;EAAmB,kFAAA;AC6BrB;AD3BE;EACE,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,oBAAA;EACA,gBAAA;EACA,yBAAA;EACA,yBAAA;EACA,iBAAA;AC6BJ;AD1BE;EACE,UAAA;EACA,QAAA;EACA,0BA7DO;EA8DP,gBAAA;AC4BJ;AD1BE;EACE,WAAA;EACA,QAAA;EACA,2BAnEO;EAoEP,gBAAA;AC4BJ;AD1BE;EACE,SAAA;EACA,SAAA;EACA,yBAzEO;EA0EP,iBAAA;AC4BJ;AD1BE;EACE,YAAA;EACA,SAAA;EACA,4BA/EO;EAgFP,iBAAA;AC4BJ","sourcesContent":["/**\n * Tooltips\n */\n$tipColor: lighten( $colorDocument, 20% );\n$tipTextColor: lighten( $colorDocument, 60% );\n\n@keyframes tooltipShowLeft {\n    0%   { opacity: 0; transform: translateX( -20px ); }\n    100% { opacity: 1; transform: translateX( -10px ); }\n}\n@keyframes tooltipShowRight {\n    0%   { opacity: 0; transform: translateX( 20px ); }\n    100% { opacity: 1; transform: translateX( 10px ); }\n}\n@keyframes tooltipShowTop {\n    0%   { opacity: 0; transform: translateY( -20px ); }\n    100% { opacity: 1; transform: translateY( -10px ); }\n}\n@keyframes tooltipShowBottom {\n    0%   { opacity: 0; transform: translateY( 20px ); }\n    100% { opacity: 1; transform: translateY( 10px ); }\n}\n.tooltip-wrap {\n  display: block;\n  position: absolute;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n  transition: none;\n  border: none;\n  border-radius: $lineJoin;\n  max-width: 500px;\n  margin: 0;\n  padding: calc( $padSpace / 2 ) $padSpace;\n  font-size: 80%;\n  line-height: 1.2em;\n  color: $tipTextColor;\n  background-color: $tipColor;\n  box-shadow: $shadowBold;\n  left: 0;\n  top: 0;\n  z-index: calc( $zindexAlerts + 10 );\n\n  &.tooltip-left { animation: tooltipShowLeft $fxSpeed $fxEaseBounce forwards; }\n  &.tooltip-right { animation: tooltipShowRight $fxSpeed $fxEaseBounce forwards; }\n  &.tooltip-top { animation: tooltipShowTop $fxSpeed $fxEaseBounce forwards; }\n  &.tooltip-bottom { animation: tooltipShowBottom $fxSpeed $fxEaseBounce forwards; }\n\n  &:after { // arrow\n    content: \" \";\n    position: absolute;\n    height: 0;\n    width: 0;\n    pointer-events: none;\n    transition: none;\n    border: solid transparent;\n    border-color: transparent;\n    border-width: 5px;\n  }\n\n  &.tooltip-left:after { // arrow on right\n    left: 100%;\n    top: 50%;\n    border-left-color: $tipColor;\n    margin-top: -5px;\n  }\n  &.tooltip-right:after { // arrow on left\n    right: 100%;\n    top: 50%;\n    border-right-color: $tipColor;\n    margin-top: -5px;\n  }\n  &.tooltip-top:after { // arrow on bottom\n    top: 100%;\n    left: 50%;\n    border-top-color: $tipColor;\n    margin-left: -5px;\n  }\n  &.tooltip-bottom:after { // arrow on top\n    bottom: 100%;\n    left: 50%;\n    border-bottom-color: $tipColor;\n    margin-left: -5px;\n  }\n}\n","/**\n * Tooltips\n */\n@keyframes tooltipShowLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(-10px);\n  }\n}\n@keyframes tooltipShowRight {\n  0% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(10px);\n  }\n}\n@keyframes tooltipShowTop {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-10px);\n  }\n}\n@keyframes tooltipShowBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(10px);\n  }\n}\n.tooltip-wrap {\n  display: block;\n  position: absolute;\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n  transition: none;\n  border: none;\n  border-radius: 6px;\n  max-width: 500px;\n  margin: 0;\n  padding: 0.5em 1em;\n  font-size: 80%;\n  line-height: 1.2em;\n  color: #a9b8cb;\n  background-color: #405168;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);\n  left: 0;\n  top: 0;\n  z-index: 10009;\n}\n.tooltip-wrap.tooltip-left {\n  animation: tooltipShowLeft 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-right {\n  animation: tooltipShowRight 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-top {\n  animation: tooltipShowTop 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap.tooltip-bottom {\n  animation: tooltipShowBottom 300ms cubic-bezier(0.64, -0.28, 0.05, 1.405) forwards;\n}\n.tooltip-wrap:after {\n  content: \" \";\n  position: absolute;\n  height: 0;\n  width: 0;\n  pointer-events: none;\n  transition: none;\n  border: solid transparent;\n  border-color: transparent;\n  border-width: 5px;\n}\n.tooltip-wrap.tooltip-left:after {\n  left: 100%;\n  top: 50%;\n  border-left-color: #405168;\n  margin-top: -5px;\n}\n.tooltip-wrap.tooltip-right:after {\n  right: 100%;\n  top: 50%;\n  border-right-color: #405168;\n  margin-top: -5px;\n}\n.tooltip-wrap.tooltip-top:after {\n  top: 100%;\n  left: 50%;\n  border-top-color: #405168;\n  margin-left: -5px;\n}\n.tooltip-wrap.tooltip-bottom:after {\n  bottom: 100%;\n  left: 50%;\n  border-bottom-color: #405168;\n  margin-left: -5px;\n}","// topbar size\n$topbarH: 62px;\n$topbarHeight: 50px;\n\n// list icons fixed size (w|h px)\n$iconSize: 46px;\n\n// spacing and padding\n$padSpace: 1em;\n$padSpaceSmall: calc($padSpace / 2);\n$colSpace: 1.2em;\n$rowSpace: 1.2em;\n$listSpace: 0.4em;\n\n// borders and lines\n$lineWidth: 2px;\n$lineStyle: solid;\n$lineColor: rgba( white, 0.02 );\n$lineJoin: 6px;\n\n// common z-index values\n$zindexUnder: -1;\n$zindexElements: 100;\n$zindexModals: 8888;\n$zindexAlerts: 9999;\n\n// base font options\n$fontSize: 17px;\n$fontSpace: 1.4em;\n$fontWeight: normal;\n$fontFamily: 'Open Sans Condensed', 'Contrail One', Capriola, Consolas, Monaco, monospace;\n$fontFixed: Consolas, Monaco, monospace;\n\n// document colors\n$colorDocument: #192029;\n$colorDocumentText: #babbbc;\n$colorDocumentLight: lighten( $colorDocument, 3% );\n$colorDocumentDark: darken( $colorDocument, 6% );\n\n//scrollbar colors\n$colorScrollTrack: lighten( $colorDocument, 3% );\n$colorScrollThumb: darken( $colorDocument, 3% );\n\n// default colors\n$colorDefault: lightgray;\n$colorDefaultText: darken( $colorDefault, 40% );\n\n// primary colors\n$colorGain: darken( yellowgreen, 10% );\n$colorGainText: darken( $colorGain, 40% );\n\n// primary colors\n$colorLoss: desaturate( red, 30% );\n$colorLossText: darken( $colorLoss, 40% );\n\n// primary colors\n$colorPrimary: desaturate( orange, 10% );\n$colorPrimaryText: darken( $colorPrimary, 40% );\n\n// secondary colors\n$colorSecondary: steelblue;\n$colorSecondaryText: darken( $colorSecondary, 40% );\n\n// success colors\n$colorSuccess: desaturate( olivedrab, 10% );\n$colorSuccessText: lighten( $colorSuccess, 45% );\n\n// warning colors\n$colorWarning: desaturate( orange, 30% );\n$colorWarningText: lighten( $colorWarning, 40% );\n\n// danger colors\n$colorDanger: desaturate( firebrick, 10% );\n$colorDangerText: lighten( $colorDanger, 40% );\n\n// info colors\n$colorInfo: darken( slategray, 15% );\n$colorInfoText: lighten( $colorInfo, 45% );\n\n// grey colors\n$colorGrey: lightslategray;\n$colorGreyText: lighten( $colorGrey, 40% );\n\n// bright colors\n$colorBright: aliceblue;\n$colorBrightText: darken( $colorBright, 40% );\n\n// other colors\n$colorText: lightgray;\n$colorOverlay: rgba( 0, 0, 0, 0.5 );\n\n// common shadow styles\n$shadowHollow: inset 0 1px 4px rgba( 0, 0, 0, 0.15 );\n$shadowBubble: inset 0 -20px 20px rgba( 0, 0, 0, 0.1 );\n$shadowPaper: 0 1px 2px rgba( 0, 0, 0, 0.2 );\n$shadowDark: 0 1px 3px rgba( 0, 0, 0, 0.3 );\n$shadowGlow: 0 0 10px rgba( 0, 0, 0, 0.2 );\n$shadowBold: 0 2px 12px rgba( 0, 0, 0, 0.4 );\n$shadowText: 1px 1px 0 rgba( 0, 0, 0, 0.3 );\n\n// transition props\n$fxSpeed: 300ms;\n$fxEase: cubic-bezier( 0.215, 0.610, 0.355, 1.000 );\n$fxEaseBounce: cubic-bezier( 0.640, -0.280, 0.050, 1.405 );\n$fxSpeedOffset: calc( #{$fxSpeed} / 3 );\n$fxSlideDist: 20px;\n$fxShrinkScale: .4;\n$fxGrowScale: 1.4;\n$fxRotateAmount: 8deg;\n\n// screen sizes\n$sizeSmall: 420px;\n$sizeMedium: 720px;\n$sizeLarge: 1280px;\n\n// screen breakpoints\n$screenSmall: \"only screen and (min-width : #{$sizeSmall})\";\n$screenMedium: \"only screen and (min-width : #{$sizeMedium})\";\n$screenLarge: \"only screen and (min-width : #{$sizeLarge})\";\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/qrcode-js-package/qrcode.js":
/*!**************************************************!*\
  !*** ./node_modules/qrcode-js-package/qrcode.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 * 
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function () {
	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of 
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];
	
	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}
	
	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;
		
		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);
			
			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}
		
		return android;
	}
	
	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(row), "y": String(col)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};
			
		/**
		 * Draw the QRCode
		 * 
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];
			
			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');
				
				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}
				
				aHTML.push('</tr>');
			}
			
			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');
			
			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;
			
			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";	
			}
		};
		
		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};
		
		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.setProperty("display", "block", "important");
			this._elCanvas.style.setProperty("display", "none", "important");
		}
		
		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage; 
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}
	    		
	        	drawImage.apply(this, arguments); 
	    	};
		}
		
		/**
		 * Check whether the user's browser supports Data URI or not
		 * 
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};
		
		/**
		 * Drawing QRCode by using canvas
		 * 
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options 
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();
		
			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.setProperty("display", "none", "important");
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};
			
		/**
		 * Draw the QRCode
		 * 
		 * @param {QRCode} oQRCode 
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;
            
			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.setProperty("display", "none", "important");
			this.clear();
			
			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;					
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);
					
					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
					
					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}
			
			this._bIsPainted = true;
		};
			
		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};
			
		/**
		 * Return whether the QRCode is painted or not
		 * 
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};
		
		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};
		
		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}
			
			return Math.floor(nNumber * 1000) / 1000;
		};
		
		return Drawing;
	})();
	
	/**
	 * Get the type by string length
	 * 
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {			
		var nType = 1;
		var length = _getUTF8Length(sText);
		
		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;
			
			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}
			
			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}
		
		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}
		
		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}
	
	/**
	 * @class QRCode
	 * @constructor
	 * @example 
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 * 
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H] 
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256, 
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};
		
		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}
		
		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}
		
		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}
		
		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);
		
		if (this._htOption.text) {
			this.makeCode(this._htOption.text);	
		}
	};
	
	/**
	 * Make the QRCode
	 * 
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);			
		this.makeImage();
	};
	
	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 * 
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};
	
	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};
	
	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
})();

if (module && module.exports) {
  module.exports = QRCode;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainWalletDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-qrcode-component/src/QRCode.vue":
/*!**********************************************************!*\
  !*** ./node_modules/vue-qrcode-component/src/QRCode.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QRCode.vue?vue&type=template&id=499cd36c& */ "./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c&");
/* harmony import */ var _QRCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QRCode.vue?vue&type=script&lang=js& */ "./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QRCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__.render,
  _QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-qrcode-component/src/QRCode.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var qrcode_js_package_qrcode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode-js-package/qrcode.js */ "./node_modules/qrcode-js-package/qrcode.js");
/* harmony import */ var qrcode_js_package_qrcode_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode_js_package_qrcode_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

    props: {
        text: {type: String, required: true},
        size: {type: Number, required: false, default: 256},
        color: {type: String, required: false, default: '#000'},
        bgColor: {type: String, required: false, default: '#FFF'},
        errorLevel: {
            type: String, 
            validator: function (value) {
                return value === 'L' || value === 'M' || value === 'Q' || value === 'H'
            }, 
            required: false, 
            default: 'H'
        }
    },

    watch: {
        text: function () {
            this.clear();
            this.makeCode(this.text);
        }
    },

    data() {
        return{
            qrCode: {}
        }
    },

    mounted() {
        this.qrCode = new (qrcode_js_package_qrcode_js__WEBPACK_IMPORTED_MODULE_0___default())(this.$el, {
            text: this.text,
            width: this.size,
            height: this.size,
            colorDark : this.color,
            colorLight : this.bgColor,
            correctLevel : (qrcode_js_package_qrcode_js__WEBPACK_IMPORTED_MODULE_0___default().CorrectLevel)[this.errorLevel]
        });
    },

    methods: {
        clear: function () {
            this.qrCode.clear();
        },
        makeCode: function (text) {
            this.qrCode.makeCode(text);
        }
    }
});


/***/ }),

/***/ "./resources/src/components/wallets/MainWalletDetail.vue":
/*!***************************************************************!*\
  !*** ./resources/src/components/wallets/MainWalletDetail.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainWalletDetail.vue?vue&type=template&id=29f8069e& */ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e&");
/* harmony import */ var _MainWalletDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainWalletDetail.vue?vue&type=script&lang=js& */ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _MainWalletDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainWalletDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainWalletDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__.render,
  _MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/components/wallets/MainWalletDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainWalletDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_68_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainWalletDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-68[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_QRCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/index.js??vue-loader-options!./QRCode.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_QRCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c&":
/*!*****************************************************************************************!*\
  !*** ./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QRCode_vue_vue_type_template_id_499cd36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-loader/lib/index.js??vue-loader-options!./QRCode.vue?vue&type=template&id=499cd36c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c&");


/***/ }),

/***/ "./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e&":
/*!**********************************************************************************************!*\
  !*** ./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainWalletDetail_vue_vue_type_template_id_29f8069e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MainWalletDetail.vue?vue&type=template&id=29f8069e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-qrcode-component/src/QRCode.vue?vue&type=template&id=499cd36c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/components/wallets/MainWalletDetail.vue?vue&type=template&id=29f8069e& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card mb-1" }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          {
            staticClass: "d-flex align-items-center",
            class:
              _vm.plat.trading.practice != null &&
              _vm.plat.trading.practice != 1
                ? " justify-content-between"
                : " justify-content-start",
          },
          [
            _vm.symbol
              ? _c("img", {
                  staticClass: "avatar-content me-1 d-none d-sm-block",
                  attrs: {
                    src: _vm.symbol
                      ? "/assets/images/cryptoCurrency/" +
                        _vm.symbol.toLowerCase() +
                        ".png"
                      : "/market/notification.png",
                  },
                })
              : _c("vue-skeleton-loader", {
                  attrs: {
                    type: "circle",
                    width: 64,
                    height: 64,
                    animation: "fade",
                  },
                }),
            _vm._v(" "),
            _vm.symbol
              ? _c("span", { staticClass: "fw-bold fs-4 d-none d-lg-block" }, [
                  _vm._v(_vm._s(_vm.symbol) + "\n                    "),
                  _vm.api == 1
                    ? _c("span", [_vm._v(_vm._s(_vm.type.toUpperCase()) + " ")])
                    : _vm._e(),
                  _vm._v(_vm._s(_vm.$t("Wallet"))),
                ])
              : _c("vue-skeleton-loader", {
                  staticClass: "d-none d-lg-block",
                  attrs: {
                    type: "rect",
                    width: 100,
                    height: 10,
                    animation: "fade",
                  },
                }),
            _vm._v(" "),
            _vm.plat.trading.practice != null && _vm.plat.trading.practice != 1
              ? _c("div", { staticClass: "d-flex justify-content-start" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success me-1",
                      attrs: {
                        type: "button",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#deposit",
                      },
                    },
                    [
                      _c("i", { staticClass: "bi bi-wallet2" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("Deposit")) +
                          "\n                    "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: {
                        type: "button",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#withdraw",
                      },
                    },
                    [
                      _c("i", { staticClass: "bi bi-journal-arrow-down" }),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.$t("Withdraw")) +
                          "\n                    "
                      ),
                    ]
                  ),
                ])
              : _vm._e(),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        {
          staticClass: "card mb-0",
          staticStyle: { overflow: "auto" },
          attrs: { id: "table-hover-row" },
        },
        [
          _c("div", { staticClass: "card-header" }, [
            _c("h4", { staticClass: "card-title" }, [
              _vm._v(_vm._s(_vm.$t("Wallet Transactions"))),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "table-responsive",
              staticStyle: {
                "min-height": "57vh",
                "max-height": "57vh",
                "overflow-y": "auto",
              },
            },
            [
              _c("table", { staticClass: "table tableFixHead" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v(_vm._s(_vm.$t("Type")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("Info")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("Transaction")))]),
                  ]),
                ]),
                _vm._v(" "),
                _vm.logs != null
                  ? _c(
                      "tbody",
                      { key: _vm.logs.length },
                      [
                        _vm._l(_vm.logs, function (chain, key, index) {
                          return _vm._l(chain, function (trx, i) {
                            return _c("tr", { key: i + "-" + index }, [
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "avatar bg-light-primary rounded float-start",
                                    staticStyle: { "max-height": "30px" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "avatar-content" },
                                      [
                                        trx.type == 1
                                          ? _c("i", {
                                              directives: [
                                                {
                                                  name: "tooltip",
                                                  rawName: "v-tooltip",
                                                },
                                              ],
                                              staticClass:
                                                "text-success fs-3 bi bi-wallet2",
                                              attrs: { title: "Deposit" },
                                            })
                                          : trx.type == 2
                                          ? _c(
                                              "span",
                                              {
                                                directives: [
                                                  {
                                                    name: "tooltip",
                                                    rawName: "v-tooltip",
                                                  },
                                                ],
                                                staticClass: "text-danger fs-3",
                                                attrs: { title: "Withdraw" },
                                              },
                                              [
                                                _c("i", {
                                                  staticClass: "bi bi-cash",
                                                }),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("div", [
                                  _c("span", { staticClass: "text-warning" }, [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(_vm.$t("Amount")) +
                                        ":\n                                        "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(
                                          _vm._f("toMoney")(trx.amount, 4)
                                        ) +
                                        "\n                                            "
                                    ),
                                    _vm.symbol
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(_vm.symbol) +
                                              "\n                                            "
                                          ),
                                        ])
                                      : _vm._e(),
                                  ]),
                                ]),
                                _vm._v(" "),
                                trx.type == 2
                                  ? _c("div", [
                                      _c(
                                        "span",
                                        { staticClass: "text-warning" },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(_vm.$t("Fee")) +
                                              ":\n                                        "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm._f("toMoney")(trx.fee, 4)
                                            ) +
                                            "\n                                            "
                                        ),
                                        _vm.symbol
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(_vm.symbol) +
                                                  "\n                                            "
                                              ),
                                            ])
                                          : _vm._e(),
                                      ]),
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", [
                                  _c("span", { staticClass: "text-warning" }, [
                                    _vm._v(
                                      _vm._s(_vm.$t("Reference ID")) +
                                        ":\n                                        "
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(trx.ref_id) +
                                      "\n                                    "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _c("span", { staticClass: "text-warning" }, [
                                    _vm._v(
                                      _vm._s(_vm.$t("Date")) +
                                        ":\n                                        "
                                    ),
                                  ]),
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(_vm._f("toDate")(trx.created)) +
                                      "\n                                    "
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                key == "ETH"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://etherscan.io/tx/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : key == "BSC"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://bscscan.com/tx/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : key == "TRON"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://tronscan.org/#/transaction/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : key == "MATIC"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://polygonscan.com/tx/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : key == "KLAY"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://scope.klaytn.com/tx/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : key == "CELO"
                                  ? _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-outline-info btn-sm",
                                        attrs: {
                                          href:
                                            "https://celoscan.io/tx/" +
                                            trx.txid,
                                          target: "_blank",
                                        },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("View")))]
                                    )
                                  : _vm._e(),
                              ]),
                            ])
                          })
                        }),
                      ],
                      2
                    )
                  : _c("tbody", [
                      _c("tr", [
                        _c(
                          "td",
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
                            _c("p", {}, [
                              _vm._v(_vm._s(_vm.$t("No Data Found"))),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
              ]),
            ]
          ),
        ]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "deposit",
          tabindex: "-1",
          "aria-labelledby": "deposit",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-dialog-centered modal-lg" },
          [
            _vm.addresses != null
              ? _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header bg-transparent" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.$t("Select Deposit Network")) +
                          "\n                    "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
                    [
                      _vm._l(_vm.addresses, function (wallet, key, index) {
                        return [
                          _c("li", { key: index, staticClass: "nav-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "nav-link",
                                class: index == 0 ? "active" : "",
                                attrs: {
                                  id: key + "-tab",
                                  "data-bs-toggle": "tab",
                                  "data-bs-target": "#" + key,
                                  role: "tab",
                                  "aria-selected": "false",
                                  "aria-controls": key,
                                },
                              },
                              [_vm._v(_vm._s(key))]
                            ),
                          ]),
                        ]
                      }),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "tab-content" },
                    [
                      _vm._l(_vm.addresses, function (wallet, key, index) {
                        return [
                          _c(
                            "div",
                            {
                              key: index,
                              staticClass: "tab-pane",
                              class: index == 0 ? "active" : "",
                              attrs: { id: key, role: "tabpanel" },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "modal-body pb-3 px-sm-3" },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "col-lg-3 col-md-5" },
                                      [
                                        _c("div", [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "form-control-label h6",
                                            },
                                            [_vm._v(_vm._s(_vm.$t("To")))]
                                          ),
                                        ]),
                                        _vm._v(" "),
                                        _c("qr-code", {
                                          attrs: {
                                            size: 150,
                                            text: wallet.address
                                              ? wallet.address
                                              : "",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-lg-9 col-md-7" },
                                      [
                                        _c("div", [
                                          _c(
                                            "label",
                                            {
                                              staticClass:
                                                "form-control-label h6",
                                              attrs: {
                                                for: "recieving_address",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.$t("Wallet Address"))
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            ref: "\n                                                        recieving_address\n                                                    ",
                                            refInFor: true,
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              readonly: "",
                                            },
                                            domProps: {
                                              value: wallet.address
                                                ? wallet.address
                                                : "",
                                            },
                                          }),
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between mt-1",
                                          },
                                          [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(_vm.$t("Transfer Limit"))
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(_vm.$t("Unlimited"))
                                              ),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("hr"),
                                        _vm._v(" "),
                                        wallet.has_memo == 1
                                          ? [
                                              wallet.memo != "" ||
                                              wallet.memo != null
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "d-flex justify-content-between",
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(_vm.$t("Memo"))
                                                        ),
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "text-warning",
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              wallet.memo
                                                                ? wallet.memo
                                                                : ""
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("hr"),
                                            ]
                                          : _vm._e(),
                                      ],
                                      2
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mt-1" }, [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(_vm.$t("This is a")) +
                                        "\n                                    "
                                    ),
                                    _c(
                                      "span",
                                      {
                                        ref: key,
                                        refInFor: true,
                                        staticClass: "text-info",
                                      },
                                      [_vm._v(_vm._s(key ? key : ""))]
                                    ),
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "Chain address. Do not send any other Chain to this address or your funds may be lost."
                                          )
                                        ) +
                                        ".\n                                "
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ]
                      }),
                    ],
                    2
                  ),
                ])
              : _vm._e(),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "withdraw",
          tabindex: "-1",
          "aria-labelledby": "withdraw",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-dialog-centered modal-lg" },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header bg-transparent" }, [
                _c("h5", { staticClass: "modal-title" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.$t("Select Withdraw Network")) +
                      "\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "modal",
                    "aria-label": "Close",
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "nav nav-tabs", attrs: { role: "tablist" } },
                [
                  _vm._l(_vm.addresses, function (wallet, key, index) {
                    return [
                      _c("li", { key: index, staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            class: index == 0 ? "active" : "",
                            attrs: {
                              id: key + "-withdraw-tab",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#" + key + "-withdraw",
                              role: "tab",
                              "aria-selected": "false",
                              "aria-controls": key,
                            },
                          },
                          [_vm._v(_vm._s(key))]
                        ),
                      ]),
                    ]
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "tab-content" },
                [
                  _vm._l(_vm.addresses, function (wallet, key, index) {
                    return [
                      _c(
                        "div",
                        {
                          key: index,
                          staticClass: "tab-pane",
                          class: index == 0 ? "active" : "",
                          attrs: { id: key + "-withdraw", role: "tabpanel" },
                        },
                        [
                          _c(
                            "form",
                            {
                              staticClass: "add-new-record modal-content pt-0",
                              on: {
                                submit: function ($event) {
                                  $event.preventDefault()
                                  return _vm.Withdraw(wallet.id)
                                },
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "modal-body pb-3 px-sm-3" },
                                [
                                  _c("div", { staticClass: "mb-1" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "form-control-label h6",
                                        attrs: { for: "wallet_balance" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Wallet Balance")))]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: { type: "text", readonly: "" },
                                      domProps: {
                                        value:
                                          wallet.balance + " " + _vm.symbol,
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "input-group" }, [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "input-group-text",
                                        attrs: { for: "withdraw_address" },
                                      },
                                      [_vm._v(_vm._s(_vm.$t("Wallet Address")))]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.withdraw_address,
                                          expression: "withdraw_address",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: _vm.withdraw_address },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.withdraw_address =
                                            $event.target.value
                                        },
                                      },
                                    }),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "my-1" }, [
                                    _c("div", { staticClass: "input-group" }, [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "input-group-text",
                                          attrs: { for: "amount" },
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Amount")))]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.withdraw_amount,
                                            expression: "withdraw_amount",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "number",
                                          min: wallet.withdraw_min,
                                          step: wallet.withdraw_min,
                                          max: wallet.withdraw_max,
                                        },
                                        domProps: {
                                          value: _vm.withdraw_amount,
                                        },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.withdraw_amount =
                                              $event.target.value
                                          },
                                        },
                                      }),
                                    ]),
                                    _vm._v(" "),
                                    _c("small", [
                                      _vm._v(
                                        _vm._s(_vm.$t("Min")) +
                                          ":\n                                            "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "text-warning" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("toMoney")(
                                                wallet.withdraw_min,
                                                2
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                                            / " +
                                          _vm._s(_vm.$t("Max")) +
                                          ":\n                                            "
                                      ),
                                      _c(
                                        "span",
                                        { staticClass: "text-warning" },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("toMoney")(
                                                wallet.withdraw_max,
                                                2
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  wallet.has_memo == 1
                                    ? _c("div", { staticClass: "my-1" }, [
                                        _c(
                                          "div",
                                          { staticClass: "input-group" },
                                          [
                                            _c(
                                              "span",
                                              {
                                                staticClass: "input-group-text",
                                                attrs: { for: "memo" },
                                              },
                                              [_vm._v(_vm._s(_vm.$t("Memo")))]
                                            ),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.withdraw_memo,
                                                  expression: "withdraw_memo",
                                                },
                                              ],
                                              staticClass: "form-control",
                                              attrs: { type: "text" },
                                              domProps: {
                                                value: _vm.withdraw_memo,
                                              },
                                              on: {
                                                input: function ($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.withdraw_memo =
                                                    $event.target.value
                                                },
                                              },
                                            }),
                                          ]
                                        ),
                                        _vm._v(
                                          "\n                                        >\n                                    "
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group mt-1" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "input-group-text",
                                          attrs: { for: "fees" },
                                        },
                                        [_vm._v(_vm._s(_vm.$t("Fees")))]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: {
                                          value:
                                            wallet.withdraw_fee +
                                            " " +
                                            _vm.symbol,
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "modal-footer text-end" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      attrs: {
                                        type: "submit",
                                        disabled: _vm.loading,
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.$t("Withdraw")) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  }),
                ],
                2
              ),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX2NvbXBvbmVudHNfd2FsbGV0c19NYWluV2FsbGV0RGV0YWlsX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ2pCQTtBQUNzRDtBQUN0RCxpRUFBZTtFQUNmQTtFQUNBO0VBQ0FDO0lBQUE7RUFBQTtFQUVBO0VBQ0FDO0lBQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0E7RUFDQUM7SUFDQUM7TUFBQTtNQUNBLFdBQ0FDLEtBQ0EsaUNBQ0EsY0FDQSxNQUNBLGFBQ0EsQ0FDQUM7UUFDQSwrQkFDQSxp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Q0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkU7QUFDQTtBQUNBLDRDQUE0Qyw0QkFBNEI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxhQUFhO0FBQ3RFLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEUseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNEJBQTRCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNDQUFzQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9zcmMvY29tcG9uZW50cy93YWxsZXRzL01haW5XYWxsZXREZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29tcG9uZW50cy93YWxsZXRzL01haW5XYWxsZXREZXRhaWwudnVlPzliODYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FyY29kZS1qcy1wYWNrYWdlL3FyY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmVudHMvd2FsbGV0cy9NYWluV2FsbGV0RGV0YWlsLnZ1ZT84ZDJiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtcXJjb2RlLWNvbXBvbmVudC9zcmMvUVJDb2RlLnZ1ZSIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1xcmNvZGUtY29tcG9uZW50L3NyYy9RUkNvZGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29tcG9uZW50cy93YWxsZXRzL01haW5XYWxsZXREZXRhaWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29tcG9uZW50cy93YWxsZXRzL01haW5XYWxsZXREZXRhaWwudnVlPzQ4MDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9jb21wb25lbnRzL3dhbGxldHMvTWFpbldhbGxldERldGFpbC52dWU/OTczNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXFyY29kZS1jb21wb25lbnQvc3JjL1FSQ29kZS52dWU/YWY0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmVudHMvd2FsbGV0cy9NYWluV2FsbGV0RGV0YWlsLnZ1ZT80NTZkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtcXJjb2RlLWNvbXBvbmVudC9zcmMvUVJDb2RlLnZ1ZT80YTdlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29tcG9uZW50cy93YWxsZXRzL01haW5XYWxsZXREZXRhaWwudnVlPzRiY2MiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhdC50cmFkaW5nLnByYWN0aWNlICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXQudHJhZGluZy5wcmFjdGljZSAhPSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwic3ltYm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXZhdGFyLWNvbnRlbnQgbWUtMSBkLW5vbmUgZC1zbS1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJy9hc3NldHMvaW1hZ2VzL2NyeXB0b0N1cnJlbmN5LycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbC50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnL21hcmtldC9ub3RpZmljYXRpb24ucG5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHZ1ZS1za2VsZXRvbi1sb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCI2NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiNjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJzeW1ib2xcIiBjbGFzcz1cImZ3LWJvbGQgZnMtNCBkLW5vbmUgZC1sZy1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgc3ltYm9sIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiYXBpID09IDFcIj57eyB0eXBlLnRvVXBwZXJDYXNlKCkgfX0gPC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJXYWxsZXRcIikgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dnVlLXNrZWxldG9uLWxvYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtbm9uZSBkLWxnLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp3aWR0aD1cIjEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPVwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhdC50cmFkaW5nLnByYWN0aWNlICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0LnRyYWRpbmcucHJhY3RpY2UgIT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2RlcG9zaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1lLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktd2FsbGV0MlwiPjwvaT4ge3sgJHQoXCJEZXBvc2l0XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiN3aXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktam91cm5hbC1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiV2l0aGRyYXdcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTBcIiBpZD1cInRhYmxlLWhvdmVyLXJvd1wiIHN0eWxlPVwib3ZlcmZsb3c6IGF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7ICR0KFwiV2FsbGV0IFRyYW5zYWN0aW9uc1wiKSB9fTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDU3dmg7IG1heC1oZWlnaHQ6IDU3dmg7IG92ZXJmbG93LXk6IGF1dG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGVGaXhIZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+e3sgJHQoXCJUeXBlXCIpIH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnt7ICR0KFwiSW5mb1wiKSB9fTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57eyAkdChcIlRyYW5zYWN0aW9uXCIpIH19PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSB2LWlmPVwibG9ncyAhPSBudWxsXCIgOmtleT1cImxvZ3MubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKGNoYWluLCBrZXksIGluZGV4KSBpbiBsb2dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIodHJ4LCBpKSBpbiBjaGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaSArICctJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhdmF0YXIgYmctbGlnaHQtcHJpbWFyeSByb3VuZGVkIGZsb2F0LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtaGVpZ2h0OiAzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwidHJ4LnR5cGUgPT0gMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZXBvc2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc3VjY2VzcyBmcy0zIGJpIGJpLXdhbGxldDJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwidHJ4LnR5cGUgPT0gMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXaXRoZHJhd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10b29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmcy0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1jYXNoXCI+PC9pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiQW1vdW50XCIpIH19OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cnguYW1vdW50IHwgdG9Nb25leSg0KSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInN5bWJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHN5bWJvbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwidHJ4LnR5cGUgPT0gMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJHQoXCJGZWVcIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyeC5mZWUgfCB0b01vbmV5KDQpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwic3ltYm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc3ltYm9sIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJSZWZlcmVuY2UgSURcIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJ4LnJlZl9pZCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyAkdChcIkRhdGVcIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJ4LmNyZWF0ZWQgfCB0b0RhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImtleSA9PSAnRVRIJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9ldGhlcnNjYW4uaW8vdHgvJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cngudHhpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1pbmZvIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyAkdChcIlZpZXdcIikgfX08L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwia2V5ID09ICdCU0MnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2JzY3NjYW4uY29tL3R4LycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR4aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJWaWV3XCIpIH19PC9hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImtleSA9PSAnVFJPTidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vdHJvbnNjYW4ub3JnLyMvdHJhbnNhY3Rpb24vJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cngudHhpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1pbmZvIGJ0bi1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyAkdChcIlZpZXdcIikgfX08L2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlLWlmPVwia2V5ID09ICdNQVRJQydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vcG9seWdvbnNjYW4uY29tL3R4LycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR4aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJWaWV3XCIpIH19PC9hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZS1pZj1cImtleSA9PSAnS0xBWSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc2NvcGUua2xheXRuLmNvbS90eC8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50eGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiVmlld1wiKSB9fTwvYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2UtaWY9XCJrZXkgPT0gJ0NFTE8nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2NlbG9zY2FuLmlvL3R4LycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR4aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJWaWV3XCIpIH19PC9hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1tdXRlZCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMjhweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMjhweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hc3NldHMuc3RhdGljaW1nLmNvbS9wcm8vMi4wLjQvaW1hZ2VzL2VtcHR5LnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlwiPnt7ICR0KFwiTm8gRGF0YSBGb3VuZFwiKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJtb2RhbCBmYWRlXCJcbiAgICAgICAgICAgIGlkPVwiZGVwb3NpdFwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRlcG9zaXRcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJhZGRyZXNzZXMgIT0gbnVsbFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VsZWN0IERlcG9zaXQgTmV0d29ya1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKHdhbGxldCwga2V5LCBpbmRleCkgaW4gYWRkcmVzc2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIDprZXk9XCJpbmRleFwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiaW5kZXggPT0gMCA/ICdhY3RpdmUnIDogJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwia2V5ICsgJy10YWInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkYXRhLWJzLXRhcmdldD1cIicjJyArIGtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sga2V5IH19PC9hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIod2FsbGV0LCBrZXksIGluZGV4KSBpbiBhZGRyZXNzZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpbmRleCA9PSAwID8gJ2FjdGl2ZScgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBwYi0zIHB4LXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsIGg2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgJHQoXCJUb1wiKSB9fTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxxci1jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c2l6ZT1cIjE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dD1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2FsbGV0LmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcXItY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTkgY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sLWxhYmVsIGg2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJyZWNpZXZpbmdfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFwiV2FsbGV0IEFkZHJlc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNpZXZpbmdfYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3YWxsZXQuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcIlRyYW5zZmVyIExpbWl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHQoXCJVbmxpbWl0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndhbGxldC5oYXNfbWVtbyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm1lbW8gIT0gJycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lm1lbW8gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFwiTWVtb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQubWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2FsbGV0Lm1lbW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiVGhpcyBpcyBhXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOnJlZj1cImtleVwiIGNsYXNzPVwidGV4dC1pbmZvXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID8ga2V5IDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFpbiBhZGRyZXNzLiBEbyBub3Qgc2VuZCBhbnkgb3RoZXIgQ2hhaW4gdG8gdGhpcyBhZGRyZXNzIG9yIHlvdXIgZnVuZHMgbWF5IGJlIGxvc3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwibW9kYWwgZmFkZVwiXG4gICAgICAgICAgICBpZD1cIndpdGhkcmF3XCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwid2l0aGRyYXdcIlxuICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiU2VsZWN0IFdpdGhkcmF3IE5ldHdvcmtcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIih3YWxsZXQsIGtleSwgaW5kZXgpIGluIGFkZHJlc3Nlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImluZGV4ID09IDAgPyAnYWN0aXZlJyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImtleSArICctd2l0aGRyYXctdGFiJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGF0YS1icy10YXJnZXQ9XCInIycgKyBrZXkgKyAnLXdpdGhkcmF3J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1jb250cm9scz1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sga2V5IH19PC9hXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIod2FsbGV0LCBrZXksIGluZGV4KSBpbiBhZGRyZXNzZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpbmRleCA9PSAwID8gJ2FjdGl2ZScgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImtleSArICctd2l0aGRyYXcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkZC1uZXctcmVjb3JkIG1vZGFsLWNvbnRlbnQgcHQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XCJXaXRoZHJhdyh3YWxsZXQuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgcGItMyBweC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbC1sYWJlbCBoNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3I9XCJ3YWxsZXRfYmFsYW5jZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcIldhbGxldCBCYWxhbmNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5iYWxhbmNlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwid2l0aGRyYXdfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcIldhbGxldCBBZGRyZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndpdGhkcmF3X2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImFtb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiQW1vdW50XCIpIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndpdGhkcmF3X2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cIndhbGxldC53aXRoZHJhd19taW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdGVwPVwid2FsbGV0LndpdGhkcmF3X21pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cIndhbGxldC53aXRoZHJhd19tYXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiTWluXCIpIH19OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdhcm5pbmdcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC53aXRoZHJhd19taW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0b01vbmV5KDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8ge3sgJHQoXCJNYXhcIikgfX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LndpdGhkcmF3X21heFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRvTW9uZXkoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJteS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIndhbGxldC5oYXNfbWVtbyA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cIm1lbW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyAkdChcIk1lbW9cIikgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIndpdGhkcmF3X21lbW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcj1cImZlZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7ICR0KFwiRmVlc1wiKSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LndpdGhkcmF3X2ZlZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkdChcIlBsZWFzZSBtYWtlIHN1cmUgeW91IGhhdmVcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB3YWxsZXQuY2hhaW4gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQmFsYW5jZSBmb3IgdGhlIHdpdGhkcmF3YWwgdG8gYmUgcHJvY2Vzc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyIHRleHQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ICR0KFwiV2l0aGRyYXdcIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBjb21wb25lbnRcbmltcG9ydCBWdWVRUkNvZGVDb21wb25lbnQgZnJvbSBcInZ1ZS1xcmNvZGUtY29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFtcInR5cGVcIiwgXCJzeW1ib2xcIiwgXCJhZGRyZXNzXCJdLFxuICAgIC8vIGNvbXBvbmVudCBsaXN0XG4gICAgY29tcG9uZW50czogeyBcInFyLWNvZGVcIjogVnVlUVJDb2RlQ29tcG9uZW50IH0sXG5cbiAgICAvLyBjb21wb25lbnQgZGF0YVxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3YWw6IHt9LFxuICAgICAgICAgICAgYWRkcmVzc2VzOiB7fSxcbiAgICAgICAgICAgIGxvZ3M6IHt9LFxuICAgICAgICAgICAgZ25sOiBnbmwsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGFwaTogMSxcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIm1haW5cIixcbiAgICAgICAgICAgIHBsYXQ6IHBsYXQsXG4gICAgICAgICAgICBuZXR3b3JrOiBudWxsLFxuICAgICAgICAgICAgd2l0aGRyYXdfYWRkcmVzczogbnVsbCxcbiAgICAgICAgICAgIHdpdGhkcmF3X2Ftb3VudDogbnVsbCxcbiAgICAgICAgICAgIHRpbWVyOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8vIGN1c3RvbSBtZXRob2RzXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgICAgIFwiL3VzZXIvZmV0Y2gvZWNvL3dhbGxldC9tYWluL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMud2FsID0gcmVzcG9uc2UuZGF0YS53YWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubG9ncyA9IHJlc3BvbnNlLmRhdGEubG9ncyksXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5hZGRyZXNzZXMgPSByZXNwb25zZS5kYXRhLmFkZHJlc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJSZWZyZXNoTWFpbldhbGxldFwiLCByZXNwb25zZS5kYXRhLndhbCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZldGNoV2FsbGV0TG9ncygpIHtcbiAgICAgICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgICAgICAgICAgXCIvdXNlci9mZXRjaC9lY28vd2FsbGV0L21haW4vbG9ncy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ncyA9IHJlc3BvbnNlLmRhdGEubG9ncztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgV2l0aGRyYXcoaWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLndpdGhkcmF3X2Ftb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdG9hc3QuZXJyb3IoXCJJbnZhbGlkIGFtb3VudFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL3VzZXIvZWNvL3dhbGxldC93aXRoZHJhd1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMud2FsLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3X2FkZHJlc3M6IHRoaXMud2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbW86IHRoaXMud2l0aGRyYXdfbWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RbcmVzcG9uc2UuZGF0YS50eXBlXShyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiN3aXRoZHJhd1wiKS5tb2RhbChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBvbiBjb21wb25lbnQgY3JlYXRlZFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcblxuICAgIC8vIG9uIGNvbXBvbmVudCBtb3VudGVkXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy50aW1lclt0aGlzLmFkZHJlc3NdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFdhbGxldExvZ3MoKTtcbiAgICAgICAgfSwgMzAwMDApO1xuICAgICAgICByb3V0ZXIuYWZ0ZXJFYWNoKCh0bywgZnJvbSkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyW2Zyb20ucGFyYW1zLmFkZHJlc3NdKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyBvbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgZGVzdHJveWVkKCkge30sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vc2Nzcy90b29sdGlwXCI7XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFRvb2x0aXBzXFxuICovXFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd0xlZnQge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG59XFxuMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHRvb2x0aXBTaG93UmlnaHQge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd1RvcCB7XFxuMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgdG9vbHRpcFNob3dCb3R0b20ge1xcbjAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xcbn1cXG59XFxuLnRvb2x0aXAtd3JhcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBmb250LXNpemU6IDgwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gIGNvbG9yOiAjYTliOGNiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTE2ODtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwMDA5O1xcbn1cXG4udG9vbHRpcC13cmFwLnRvb2x0aXAtbGVmdCB7XFxuICBhbmltYXRpb246IHRvb2x0aXBTaG93TGVmdCAzMDBtcyBjdWJpYy1iZXppZXIoMC42NCwgLTAuMjgsIDAuMDUsIDEuNDA1KSBmb3J3YXJkcztcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLXJpZ2h0IHtcXG4gIGFuaW1hdGlvbjogdG9vbHRpcFNob3dSaWdodCAzMDBtcyBjdWJpYy1iZXppZXIoMC42NCwgLTAuMjgsIDAuMDUsIDEuNDA1KSBmb3J3YXJkcztcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLXRvcCB7XFxuICBhbmltYXRpb246IHRvb2x0aXBTaG93VG9wIDMwMG1zIGN1YmljLWJlemllcigwLjY0LCAtMC4yOCwgMC4wNSwgMS40MDUpIGZvcndhcmRzO1xcbn1cXG4udG9vbHRpcC13cmFwLnRvb2x0aXAtYm90dG9tIHtcXG4gIGFuaW1hdGlvbjogdG9vbHRpcFNob3dCb3R0b20gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQsIC0wLjI4LCAwLjA1LCAxLjQwNSkgZm9yd2FyZHM7XFxufVxcbi50b29sdGlwLXdyYXA6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbn1cXG4udG9vbHRpcC13cmFwLnRvb2x0aXAtbGVmdDphZnRlciB7XFxuICBsZWZ0OiAxMDAlO1xcbiAgdG9wOiA1MCU7XFxuICBib3JkZXItbGVmdC1jb2xvcjogIzQwNTE2ODtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxufVxcbi50b29sdGlwLXdyYXAudG9vbHRpcC1yaWdodDphZnRlciB7XFxuICByaWdodDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjNDA1MTY4O1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLXRvcDphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNDA1MTY4O1xcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxufVxcbi50b29sdGlwLXdyYXAudG9vbHRpcC1ib3R0b206YWZ0ZXIge1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQwNTE2ODtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc3JjL3Njc3MvdG9vbHRpcC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvc3JjL2NvbXBvbmVudHMvd2FsbGV0cy9NYWluV2FsbGV0RGV0YWlsLnZ1ZVwiLFwid2VicGFjazovLy4vcmVzb3VyY2VzL3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUFBO0FBTUE7QUFDSTtJQUFPLFVBQUE7SUFBWSw0QkFBQTtBQ0FyQjtBRENFO0lBQU8sVUFBQTtJQUFZLDRCQUFBO0FDR3JCO0FBQ0Y7QURGQTtBQUNJO0lBQU8sVUFBQTtJQUFZLDJCQUFBO0FDTXJCO0FETEU7SUFBTyxVQUFBO0lBQVksMkJBQUE7QUNTckI7QUFDRjtBRFJBO0FBQ0k7SUFBTyxVQUFBO0lBQVksNEJBQUE7QUNZckI7QURYRTtJQUFPLFVBQUE7SUFBWSw0QkFBQTtBQ2VyQjtBQUNGO0FEZEE7QUFDSTtJQUFPLFVBQUE7SUFBWSwyQkFBQTtBQ2tCckI7QURqQkU7SUFBTyxVQUFBO0lBQVksMkJBQUE7QUNxQnJCO0FBQ0Y7QURwQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCRWJTO0VGY1QsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQWpDYTtFQWtDYix5QkFuQ1M7RUFvQ1QseUNFMERXO0VGekRYLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQ3NCRjtBRHBCRTtFQUFpQixnRkFBQTtBQ3VCbkI7QUR0QkU7RUFBa0IsaUZBQUE7QUN5QnBCO0FEeEJFO0VBQWdCLCtFQUFBO0FDMkJsQjtBRDFCRTtFQUFtQixrRkFBQTtBQzZCckI7QUQzQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUM2Qko7QUQxQkU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQTdETztFQThEUCxnQkFBQTtBQzRCSjtBRDFCRTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBbkVPO0VBb0VQLGdCQUFBO0FDNEJKO0FEMUJFO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkF6RU87RUEwRVAsaUJBQUE7QUM0Qko7QUQxQkU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQS9FTztFQWdGUCxpQkFBQTtBQzRCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBUb29sdGlwc1xcbiAqL1xcbiR0aXBDb2xvcjogbGlnaHRlbiggJGNvbG9yRG9jdW1lbnQsIDIwJSApO1xcbiR0aXBUZXh0Q29sb3I6IGxpZ2h0ZW4oICRjb2xvckRvY3VtZW50LCA2MCUgKTtcXG5cXG5Aa2V5ZnJhbWVzIHRvb2x0aXBTaG93TGVmdCB7XFxuICAgIDAlICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoIC0yMHB4ICk7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCggLTEwcHggKTsgfVxcbn1cXG5Aa2V5ZnJhbWVzIHRvb2x0aXBTaG93UmlnaHQge1xcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCAyMHB4ICk7IH1cXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCggMTBweCApOyB9XFxufVxcbkBrZXlmcmFtZXMgdG9vbHRpcFNob3dUb3Age1xcbiAgICAwJSAgIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAtMjBweCApOyB9XFxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIC0xMHB4ICk7IH1cXG59XFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd0JvdHRvbSB7XFxuICAgIDAlICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoIDIwcHggKTsgfVxcbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCAxMHB4ICk7IH1cXG59XFxuLnRvb2x0aXAtd3JhcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6ICRsaW5lSm9pbjtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiBjYWxjKCAkcGFkU3BhY2UgLyAyICkgJHBhZFNwYWNlO1xcbiAgZm9udC1zaXplOiA4MCU7XFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxuICBjb2xvcjogJHRpcFRleHRDb2xvcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aXBDb2xvcjtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3dCb2xkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IGNhbGMoICR6aW5kZXhBbGVydHMgKyAxMCApO1xcblxcbiAgJi50b29sdGlwLWxlZnQgeyBhbmltYXRpb246IHRvb2x0aXBTaG93TGVmdCAkZnhTcGVlZCAkZnhFYXNlQm91bmNlIGZvcndhcmRzOyB9XFxuICAmLnRvb2x0aXAtcmlnaHQgeyBhbmltYXRpb246IHRvb2x0aXBTaG93UmlnaHQgJGZ4U3BlZWQgJGZ4RWFzZUJvdW5jZSBmb3J3YXJkczsgfVxcbiAgJi50b29sdGlwLXRvcCB7IGFuaW1hdGlvbjogdG9vbHRpcFNob3dUb3AgJGZ4U3BlZWQgJGZ4RWFzZUJvdW5jZSBmb3J3YXJkczsgfVxcbiAgJi50b29sdGlwLWJvdHRvbSB7IGFuaW1hdGlvbjogdG9vbHRpcFNob3dCb3R0b20gJGZ4U3BlZWQgJGZ4RWFzZUJvdW5jZSBmb3J3YXJkczsgfVxcblxcbiAgJjphZnRlciB7IC8vIGFycm93XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICB9XFxuXFxuICAmLnRvb2x0aXAtbGVmdDphZnRlciB7IC8vIGFycm93IG9uIHJpZ2h0XFxuICAgIGxlZnQ6IDEwMCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJHRpcENvbG9yO1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcbiAgJi50b29sdGlwLXJpZ2h0OmFmdGVyIHsgLy8gYXJyb3cgb24gbGVmdFxcbiAgICByaWdodDogMTAwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRpcENvbG9yO1xcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgfVxcbiAgJi50b29sdGlwLXRvcDphZnRlciB7IC8vIGFycm93IG9uIGJvdHRvbVxcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHRpcENvbG9yO1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIH1cXG4gICYudG9vbHRpcC1ib3R0b206YWZ0ZXIgeyAvLyBhcnJvdyBvbiB0b3BcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR0aXBDb2xvcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxuICB9XFxufVxcblwiLFwiLyoqXFxuICogVG9vbHRpcHNcXG4gKi9cXG5Aa2V5ZnJhbWVzIHRvb2x0aXBTaG93TGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd1JpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd1RvcCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB0b29sdGlwU2hvd0JvdHRvbSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XFxuICB9XFxufVxcbi50b29sdGlwLXdyYXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgZm9udC1zaXplOiA4MCU7XFxuICBsaW5lLWhlaWdodDogMS4yZW07XFxuICBjb2xvcjogI2E5YjhjYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDUxNjg7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDAwOTtcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLWxlZnQge1xcbiAgYW5pbWF0aW9uOiB0b29sdGlwU2hvd0xlZnQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQsIC0wLjI4LCAwLjA1LCAxLjQwNSkgZm9yd2FyZHM7XFxufVxcbi50b29sdGlwLXdyYXAudG9vbHRpcC1yaWdodCB7XFxuICBhbmltYXRpb246IHRvb2x0aXBTaG93UmlnaHQgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQsIC0wLjI4LCAwLjA1LCAxLjQwNSkgZm9yd2FyZHM7XFxufVxcbi50b29sdGlwLXdyYXAudG9vbHRpcC10b3Age1xcbiAgYW5pbWF0aW9uOiB0b29sdGlwU2hvd1RvcCAzMDBtcyBjdWJpYy1iZXppZXIoMC42NCwgLTAuMjgsIDAuMDUsIDEuNDA1KSBmb3J3YXJkcztcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLWJvdHRvbSB7XFxuICBhbmltYXRpb246IHRvb2x0aXBTaG93Qm90dG9tIDMwMG1zIGN1YmljLWJlemllcigwLjY0LCAtMC4yOCwgMC4wNSwgMS40MDUpIGZvcndhcmRzO1xcbn1cXG4udG9vbHRpcC13cmFwOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG59XFxuLnRvb2x0aXAtd3JhcC50b29sdGlwLWxlZnQ6YWZ0ZXIge1xcbiAgbGVmdDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM0MDUxNjg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbn1cXG4udG9vbHRpcC13cmFwLnRvb2x0aXAtcmlnaHQ6YWZ0ZXIge1xcbiAgcmlnaHQ6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzQwNTE2ODtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxufVxcbi50b29sdGlwLXdyYXAudG9vbHRpcC10b3A6YWZ0ZXIge1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQwNTE2ODtcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbn1cXG4udG9vbHRpcC13cmFwLnRvb2x0aXAtYm90dG9tOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0MDUxNjg7XFxuICBtYXJnaW4tbGVmdDogLTVweDtcXG59XCIsXCIvLyB0b3BiYXIgc2l6ZVxcbiR0b3BiYXJIOiA2MnB4O1xcbiR0b3BiYXJIZWlnaHQ6IDUwcHg7XFxuXFxuLy8gbGlzdCBpY29ucyBmaXhlZCBzaXplICh3fGggcHgpXFxuJGljb25TaXplOiA0NnB4O1xcblxcbi8vIHNwYWNpbmcgYW5kIHBhZGRpbmdcXG4kcGFkU3BhY2U6IDFlbTtcXG4kcGFkU3BhY2VTbWFsbDogY2FsYygkcGFkU3BhY2UgLyAyKTtcXG4kY29sU3BhY2U6IDEuMmVtO1xcbiRyb3dTcGFjZTogMS4yZW07XFxuJGxpc3RTcGFjZTogMC40ZW07XFxuXFxuLy8gYm9yZGVycyBhbmQgbGluZXNcXG4kbGluZVdpZHRoOiAycHg7XFxuJGxpbmVTdHlsZTogc29saWQ7XFxuJGxpbmVDb2xvcjogcmdiYSggd2hpdGUsIDAuMDIgKTtcXG4kbGluZUpvaW46IDZweDtcXG5cXG4vLyBjb21tb24gei1pbmRleCB2YWx1ZXNcXG4kemluZGV4VW5kZXI6IC0xO1xcbiR6aW5kZXhFbGVtZW50czogMTAwO1xcbiR6aW5kZXhNb2RhbHM6IDg4ODg7XFxuJHppbmRleEFsZXJ0czogOTk5OTtcXG5cXG4vLyBiYXNlIGZvbnQgb3B0aW9uc1xcbiRmb250U2l6ZTogMTdweDtcXG4kZm9udFNwYWNlOiAxLjRlbTtcXG4kZm9udFdlaWdodDogbm9ybWFsO1xcbiRmb250RmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsICdDb250cmFpbCBPbmUnLCBDYXByaW9sYSwgQ29uc29sYXMsIE1vbmFjbywgbW9ub3NwYWNlO1xcbiRmb250Rml4ZWQ6IENvbnNvbGFzLCBNb25hY28sIG1vbm9zcGFjZTtcXG5cXG4vLyBkb2N1bWVudCBjb2xvcnNcXG4kY29sb3JEb2N1bWVudDogIzE5MjAyOTtcXG4kY29sb3JEb2N1bWVudFRleHQ6ICNiYWJiYmM7XFxuJGNvbG9yRG9jdW1lbnRMaWdodDogbGlnaHRlbiggJGNvbG9yRG9jdW1lbnQsIDMlICk7XFxuJGNvbG9yRG9jdW1lbnREYXJrOiBkYXJrZW4oICRjb2xvckRvY3VtZW50LCA2JSApO1xcblxcbi8vc2Nyb2xsYmFyIGNvbG9yc1xcbiRjb2xvclNjcm9sbFRyYWNrOiBsaWdodGVuKCAkY29sb3JEb2N1bWVudCwgMyUgKTtcXG4kY29sb3JTY3JvbGxUaHVtYjogZGFya2VuKCAkY29sb3JEb2N1bWVudCwgMyUgKTtcXG5cXG4vLyBkZWZhdWx0IGNvbG9yc1xcbiRjb2xvckRlZmF1bHQ6IGxpZ2h0Z3JheTtcXG4kY29sb3JEZWZhdWx0VGV4dDogZGFya2VuKCAkY29sb3JEZWZhdWx0LCA0MCUgKTtcXG5cXG4vLyBwcmltYXJ5IGNvbG9yc1xcbiRjb2xvckdhaW46IGRhcmtlbiggeWVsbG93Z3JlZW4sIDEwJSApO1xcbiRjb2xvckdhaW5UZXh0OiBkYXJrZW4oICRjb2xvckdhaW4sIDQwJSApO1xcblxcbi8vIHByaW1hcnkgY29sb3JzXFxuJGNvbG9yTG9zczogZGVzYXR1cmF0ZSggcmVkLCAzMCUgKTtcXG4kY29sb3JMb3NzVGV4dDogZGFya2VuKCAkY29sb3JMb3NzLCA0MCUgKTtcXG5cXG4vLyBwcmltYXJ5IGNvbG9yc1xcbiRjb2xvclByaW1hcnk6IGRlc2F0dXJhdGUoIG9yYW5nZSwgMTAlICk7XFxuJGNvbG9yUHJpbWFyeVRleHQ6IGRhcmtlbiggJGNvbG9yUHJpbWFyeSwgNDAlICk7XFxuXFxuLy8gc2Vjb25kYXJ5IGNvbG9yc1xcbiRjb2xvclNlY29uZGFyeTogc3RlZWxibHVlO1xcbiRjb2xvclNlY29uZGFyeVRleHQ6IGRhcmtlbiggJGNvbG9yU2Vjb25kYXJ5LCA0MCUgKTtcXG5cXG4vLyBzdWNjZXNzIGNvbG9yc1xcbiRjb2xvclN1Y2Nlc3M6IGRlc2F0dXJhdGUoIG9saXZlZHJhYiwgMTAlICk7XFxuJGNvbG9yU3VjY2Vzc1RleHQ6IGxpZ2h0ZW4oICRjb2xvclN1Y2Nlc3MsIDQ1JSApO1xcblxcbi8vIHdhcm5pbmcgY29sb3JzXFxuJGNvbG9yV2FybmluZzogZGVzYXR1cmF0ZSggb3JhbmdlLCAzMCUgKTtcXG4kY29sb3JXYXJuaW5nVGV4dDogbGlnaHRlbiggJGNvbG9yV2FybmluZywgNDAlICk7XFxuXFxuLy8gZGFuZ2VyIGNvbG9yc1xcbiRjb2xvckRhbmdlcjogZGVzYXR1cmF0ZSggZmlyZWJyaWNrLCAxMCUgKTtcXG4kY29sb3JEYW5nZXJUZXh0OiBsaWdodGVuKCAkY29sb3JEYW5nZXIsIDQwJSApO1xcblxcbi8vIGluZm8gY29sb3JzXFxuJGNvbG9ySW5mbzogZGFya2VuKCBzbGF0ZWdyYXksIDE1JSApO1xcbiRjb2xvckluZm9UZXh0OiBsaWdodGVuKCAkY29sb3JJbmZvLCA0NSUgKTtcXG5cXG4vLyBncmV5IGNvbG9yc1xcbiRjb2xvckdyZXk6IGxpZ2h0c2xhdGVncmF5O1xcbiRjb2xvckdyZXlUZXh0OiBsaWdodGVuKCAkY29sb3JHcmV5LCA0MCUgKTtcXG5cXG4vLyBicmlnaHQgY29sb3JzXFxuJGNvbG9yQnJpZ2h0OiBhbGljZWJsdWU7XFxuJGNvbG9yQnJpZ2h0VGV4dDogZGFya2VuKCAkY29sb3JCcmlnaHQsIDQwJSApO1xcblxcbi8vIG90aGVyIGNvbG9yc1xcbiRjb2xvclRleHQ6IGxpZ2h0Z3JheTtcXG4kY29sb3JPdmVybGF5OiByZ2JhKCAwLCAwLCAwLCAwLjUgKTtcXG5cXG4vLyBjb21tb24gc2hhZG93IHN0eWxlc1xcbiRzaGFkb3dIb2xsb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKCAwLCAwLCAwLCAwLjE1ICk7XFxuJHNoYWRvd0J1YmJsZTogaW5zZXQgMCAtMjBweCAyMHB4IHJnYmEoIDAsIDAsIDAsIDAuMSApO1xcbiRzaGFkb3dQYXBlcjogMCAxcHggMnB4IHJnYmEoIDAsIDAsIDAsIDAuMiApO1xcbiRzaGFkb3dEYXJrOiAwIDFweCAzcHggcmdiYSggMCwgMCwgMCwgMC4zICk7XFxuJHNoYWRvd0dsb3c6IDAgMCAxMHB4IHJnYmEoIDAsIDAsIDAsIDAuMiApO1xcbiRzaGFkb3dCb2xkOiAwIDJweCAxMnB4IHJnYmEoIDAsIDAsIDAsIDAuNCApO1xcbiRzaGFkb3dUZXh0OiAxcHggMXB4IDAgcmdiYSggMCwgMCwgMCwgMC4zICk7XFxuXFxuLy8gdHJhbnNpdGlvbiBwcm9wc1xcbiRmeFNwZWVkOiAzMDBtcztcXG4kZnhFYXNlOiBjdWJpYy1iZXppZXIoIDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwICk7XFxuJGZ4RWFzZUJvdW5jZTogY3ViaWMtYmV6aWVyKCAwLjY0MCwgLTAuMjgwLCAwLjA1MCwgMS40MDUgKTtcXG4kZnhTcGVlZE9mZnNldDogY2FsYyggI3skZnhTcGVlZH0gLyAzICk7XFxuJGZ4U2xpZGVEaXN0OiAyMHB4O1xcbiRmeFNocmlua1NjYWxlOiAuNDtcXG4kZnhHcm93U2NhbGU6IDEuNDtcXG4kZnhSb3RhdGVBbW91bnQ6IDhkZWc7XFxuXFxuLy8gc2NyZWVuIHNpemVzXFxuJHNpemVTbWFsbDogNDIwcHg7XFxuJHNpemVNZWRpdW06IDcyMHB4O1xcbiRzaXplTGFyZ2U6IDEyODBweDtcXG5cXG4vLyBzY3JlZW4gYnJlYWtwb2ludHNcXG4kc2NyZWVuU21hbGw6IFxcXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6ICN7JHNpemVTbWFsbH0pXFxcIjtcXG4kc2NyZWVuTWVkaXVtOiBcXFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAjeyRzaXplTWVkaXVtfSlcXFwiO1xcbiRzY3JlZW5MYXJnZTogXFxcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogI3skc2l6ZUxhcmdlfSlcXFwiO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIC0gVXNpbmcgdGhlICdRUkNvZGUgZm9yIEphdmFzY3JpcHQgbGlicmFyeSdcbiAqIC0gRml4ZWQgZGF0YXNldCBvZiAnUVJDb2RlIGZvciBKYXZhc2NyaXB0IGxpYnJhcnknIGZvciBzdXBwb3J0IGZ1bGwtc3BlYy5cbiAqIC0gdGhpcyBsaWJyYXJ5IGhhcyBubyBkZXBlbmRlbmNpZXMuXG4gKiBcbiAqIEBhdXRob3IgZGF2aWRzaGltanNcbiAqIEBzZWUgPGEgaHJlZj1cImh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwOi8vd3d3LmQtcHJvamVjdC5jb20vPC9hPlxuICogQHNlZSA8YSBocmVmPVwiaHR0cDovL2plcm9tZWV0aWVubmUuZ2l0aHViLmNvbS9qcXVlcnktcXJjb2RlL1wiIHRhcmdldD1cIl9ibGFua1wiPmh0dHA6Ly9qZXJvbWVldGllbm5lLmdpdGh1Yi5jb20vanF1ZXJ5LXFyY29kZS88L2E+XG4gKi9cbnZhciBRUkNvZGU7XG5cbihmdW5jdGlvbiAoKSB7XG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuXHQvL1xuXHQvLyBDb3B5cmlnaHQgKGMpIDIwMDkgS2F6dWhpa28gQXJhc2Vcblx0Ly9cblx0Ly8gVVJMOiBodHRwOi8vd3d3LmQtcHJvamVjdC5jb20vXG5cdC8vXG5cdC8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcblx0Ly8gICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHQvL1xuXHQvLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZiBcblx0Ly8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcblx0Ly8gICBodHRwOi8vd3d3LmRlbnNvLXdhdmUuY29tL3FyY29kZS9mYXFwYXRlbnQtZS5odG1sXG5cdC8vXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdGZ1bmN0aW9uIFFSOGJpdEJ5dGUoZGF0YSkge1xuXHRcdHRoaXMubW9kZSA9IFFSTW9kZS5NT0RFXzhCSVRfQllURTtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMucGFyc2VkRGF0YSA9IFtdO1xuXG5cdFx0Ly8gQWRkZWQgdG8gc3VwcG9ydCBVVEYtOCBDaGFyYWN0ZXJzXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHR2YXIgYnl0ZUFycmF5ID0gW107XG5cdFx0XHR2YXIgY29kZSA9IHRoaXMuZGF0YS5jaGFyQ29kZUF0KGkpO1xuXG5cdFx0XHRpZiAoY29kZSA+IDB4MTAwMDApIHtcblx0XHRcdFx0Ynl0ZUFycmF5WzBdID0gMHhGMCB8ICgoY29kZSAmIDB4MUMwMDAwKSA+Pj4gMTgpO1xuXHRcdFx0XHRieXRlQXJyYXlbMV0gPSAweDgwIHwgKChjb2RlICYgMHgzRjAwMCkgPj4+IDEyKTtcblx0XHRcdFx0Ynl0ZUFycmF5WzJdID0gMHg4MCB8ICgoY29kZSAmIDB4RkMwKSA+Pj4gNik7XG5cdFx0XHRcdGJ5dGVBcnJheVszXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xuXHRcdFx0fSBlbHNlIGlmIChjb2RlID4gMHg4MDApIHtcblx0XHRcdFx0Ynl0ZUFycmF5WzBdID0gMHhFMCB8ICgoY29kZSAmIDB4RjAwMCkgPj4+IDEyKTtcblx0XHRcdFx0Ynl0ZUFycmF5WzFdID0gMHg4MCB8ICgoY29kZSAmIDB4RkMwKSA+Pj4gNik7XG5cdFx0XHRcdGJ5dGVBcnJheVsyXSA9IDB4ODAgfCAoY29kZSAmIDB4M0YpO1xuXHRcdFx0fSBlbHNlIGlmIChjb2RlID4gMHg4MCkge1xuXHRcdFx0XHRieXRlQXJyYXlbMF0gPSAweEMwIHwgKChjb2RlICYgMHg3QzApID4+PiA2KTtcblx0XHRcdFx0Ynl0ZUFycmF5WzFdID0gMHg4MCB8IChjb2RlICYgMHgzRik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRieXRlQXJyYXlbMF0gPSBjb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhcnNlZERhdGEucHVzaChieXRlQXJyYXkpO1xuXHRcdH1cblxuXHRcdHRoaXMucGFyc2VkRGF0YSA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIHRoaXMucGFyc2VkRGF0YSk7XG5cblx0XHRpZiAodGhpcy5wYXJzZWREYXRhLmxlbmd0aCAhPSB0aGlzLmRhdGEubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLnBhcnNlZERhdGEudW5zaGlmdCgxOTEpO1xuXHRcdFx0dGhpcy5wYXJzZWREYXRhLnVuc2hpZnQoMTg3KTtcblx0XHRcdHRoaXMucGFyc2VkRGF0YS51bnNoaWZ0KDIzOSk7XG5cdFx0fVxuXHR9XG5cblx0UVI4Yml0Qnl0ZS5wcm90b3R5cGUgPSB7XG5cdFx0Z2V0TGVuZ3RoOiBmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZWREYXRhLmxlbmd0aDtcblx0XHR9LFxuXHRcdHdyaXRlOiBmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMucGFyc2VkRGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0YnVmZmVyLnB1dCh0aGlzLnBhcnNlZERhdGFbaV0sIDgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRmdW5jdGlvbiBRUkNvZGVNb2RlbCh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xuXHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XG5cdFx0dGhpcy5lcnJvckNvcnJlY3RMZXZlbCA9IGVycm9yQ29ycmVjdExldmVsO1xuXHRcdHRoaXMubW9kdWxlcyA9IG51bGw7XG5cdFx0dGhpcy5tb2R1bGVDb3VudCA9IDA7XG5cdFx0dGhpcy5kYXRhQ2FjaGUgPSBudWxsO1xuXHRcdHRoaXMuZGF0YUxpc3QgPSBbXTtcblx0fVxuXG5cdFFSQ29kZU1vZGVsLnByb3RvdHlwZT17YWRkRGF0YTpmdW5jdGlvbihkYXRhKXt2YXIgbmV3RGF0YT1uZXcgUVI4Yml0Qnl0ZShkYXRhKTt0aGlzLmRhdGFMaXN0LnB1c2gobmV3RGF0YSk7dGhpcy5kYXRhQ2FjaGU9bnVsbDt9LGlzRGFyazpmdW5jdGlvbihyb3csY29sKXtpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93fHxjb2w8MHx8dGhpcy5tb2R1bGVDb3VudDw9Y29sKXt0aHJvdyBuZXcgRXJyb3Iocm93K1wiLFwiK2NvbCk7fVxuXHRyZXR1cm4gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTt9LGdldE1vZHVsZUNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9kdWxlQ291bnQ7fSxtYWtlOmZ1bmN0aW9uKCl7dGhpcy5tYWtlSW1wbChmYWxzZSx0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKTt9LG1ha2VJbXBsOmZ1bmN0aW9uKHRlc3QsbWFza1BhdHRlcm4pe3RoaXMubW9kdWxlQ291bnQ9dGhpcy50eXBlTnVtYmVyKjQrMTc7dGhpcy5tb2R1bGVzPW5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtmb3IodmFyIHJvdz0wO3Jvdzx0aGlzLm1vZHVsZUNvdW50O3JvdysrKXt0aGlzLm1vZHVsZXNbcm93XT1uZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7Zm9yKHZhciBjb2w9MDtjb2w8dGhpcy5tb2R1bGVDb3VudDtjb2wrKyl7dGhpcy5tb2R1bGVzW3Jvd11bY29sXT1udWxsO319XG5cdHRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApO3RoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCk7dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KTt0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTt0aGlzLnNldHVwVHlwZUluZm8odGVzdCxtYXNrUGF0dGVybik7aWYodGhpcy50eXBlTnVtYmVyPj03KXt0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTt9XG5cdGlmKHRoaXMuZGF0YUNhY2hlPT1udWxsKXt0aGlzLmRhdGFDYWNoZT1RUkNvZGVNb2RlbC5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlcix0aGlzLmVycm9yQ29ycmVjdExldmVsLHRoaXMuZGF0YUxpc3QpO31cblx0dGhpcy5tYXBEYXRhKHRoaXMuZGF0YUNhY2hlLG1hc2tQYXR0ZXJuKTt9LHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm46ZnVuY3Rpb24ocm93LGNvbCl7Zm9yKHZhciByPS0xO3I8PTc7cisrKXtpZihyb3crcjw9LTF8fHRoaXMubW9kdWxlQ291bnQ8PXJvdytyKWNvbnRpbnVlO2Zvcih2YXIgYz0tMTtjPD03O2MrKyl7aWYoY29sK2M8PS0xfHx0aGlzLm1vZHVsZUNvdW50PD1jb2wrYyljb250aW51ZTtpZigoMDw9ciYmcjw9NiYmKGM9PTB8fGM9PTYpKXx8KDA8PWMmJmM8PTYmJihyPT0wfHxyPT02KSl8fCgyPD1yJiZyPD00JiYyPD1jJiZjPD00KSl7dGhpcy5tb2R1bGVzW3JvdytyXVtjb2wrY109dHJ1ZTt9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZTt9fX19LGdldEJlc3RNYXNrUGF0dGVybjpmdW5jdGlvbigpe3ZhciBtaW5Mb3N0UG9pbnQ9MDt2YXIgcGF0dGVybj0wO2Zvcih2YXIgaT0wO2k8ODtpKyspe3RoaXMubWFrZUltcGwodHJ1ZSxpKTt2YXIgbG9zdFBvaW50PVFSVXRpbC5nZXRMb3N0UG9pbnQodGhpcyk7aWYoaT09MHx8bWluTG9zdFBvaW50Pmxvc3RQb2ludCl7bWluTG9zdFBvaW50PWxvc3RQb2ludDtwYXR0ZXJuPWk7fX1cblx0cmV0dXJuIHBhdHRlcm47fSxjcmVhdGVNb3ZpZUNsaXA6ZnVuY3Rpb24odGFyZ2V0X21jLGluc3RhbmNlX25hbWUsZGVwdGgpe3ZhciBxcl9tYz10YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSxkZXB0aCk7dmFyIGNzPTE7dGhpcy5tYWtlKCk7Zm9yKHZhciByb3c9MDtyb3c8dGhpcy5tb2R1bGVzLmxlbmd0aDtyb3crKyl7dmFyIHk9cm93KmNzO2Zvcih2YXIgY29sPTA7Y29sPHRoaXMubW9kdWxlc1tyb3ddLmxlbmd0aDtjb2wrKyl7dmFyIHg9Y29sKmNzO3ZhciBkYXJrPXRoaXMubW9kdWxlc1tyb3ddW2NvbF07aWYoZGFyayl7cXJfbWMuYmVnaW5GaWxsKDAsMTAwKTtxcl9tYy5tb3ZlVG8oeCx5KTtxcl9tYy5saW5lVG8oeCtjcyx5KTtxcl9tYy5saW5lVG8oeCtjcyx5K2NzKTtxcl9tYy5saW5lVG8oeCx5K2NzKTtxcl9tYy5lbmRGaWxsKCk7fX19XG5cdHJldHVybiBxcl9tYzt9LHNldHVwVGltaW5nUGF0dGVybjpmdW5jdGlvbigpe2Zvcih2YXIgcj04O3I8dGhpcy5tb2R1bGVDb3VudC04O3IrKyl7aWYodGhpcy5tb2R1bGVzW3JdWzZdIT1udWxsKXtjb250aW51ZTt9XG5cdHRoaXMubW9kdWxlc1tyXVs2XT0ociUyPT0wKTt9XG5cdGZvcih2YXIgYz04O2M8dGhpcy5tb2R1bGVDb3VudC04O2MrKyl7aWYodGhpcy5tb2R1bGVzWzZdW2NdIT1udWxsKXtjb250aW51ZTt9XG5cdHRoaXMubW9kdWxlc1s2XVtjXT0oYyUyPT0wKTt9fSxzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybjpmdW5jdGlvbigpe3ZhciBwb3M9UVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO2Zvcih2YXIgaT0wO2k8cG9zLmxlbmd0aDtpKyspe2Zvcih2YXIgaj0wO2o8cG9zLmxlbmd0aDtqKyspe3ZhciByb3c9cG9zW2ldO3ZhciBjb2w9cG9zW2pdO2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbF0hPW51bGwpe2NvbnRpbnVlO31cblx0Zm9yKHZhciByPS0yO3I8PTI7cisrKXtmb3IodmFyIGM9LTI7Yzw9MjtjKyspe2lmKHI9PS0yfHxyPT0yfHxjPT0tMnx8Yz09Mnx8KHI9PTAmJmM9PTApKXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT10cnVlO31lbHNle3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPWZhbHNlO319fX19fSxzZXR1cFR5cGVOdW1iZXI6ZnVuY3Rpb24odGVzdCl7dmFyIGJpdHM9UVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtmb3IodmFyIGk9MDtpPDE4O2krKyl7dmFyIG1vZD0oIXRlc3QmJigoYml0cz4+aSkmMSk9PTEpO3RoaXMubW9kdWxlc1tNYXRoLmZsb29yKGkvMyldW2klMyt0aGlzLm1vZHVsZUNvdW50LTgtM109bW9kO31cblx0Zm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTt0aGlzLm1vZHVsZXNbaSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXVtNYXRoLmZsb29yKGkvMyldPW1vZDt9fSxzZXR1cFR5cGVJbmZvOmZ1bmN0aW9uKHRlc3QsbWFza1BhdHRlcm4pe3ZhciBkYXRhPSh0aGlzLmVycm9yQ29ycmVjdExldmVsPDwzKXxtYXNrUGF0dGVybjt2YXIgYml0cz1RUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7Zm9yKHZhciBpPTA7aTwxNTtpKyspe3ZhciBtb2Q9KCF0ZXN0JiYoKGJpdHM+PmkpJjEpPT0xKTtpZihpPDYpe3RoaXMubW9kdWxlc1tpXVs4XT1tb2Q7fWVsc2UgaWYoaTw4KXt0aGlzLm1vZHVsZXNbaSsxXVs4XT1tb2Q7fWVsc2V7dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtMTUraV1bOF09bW9kO319XG5cdGZvcih2YXIgaT0wO2k8MTU7aSsrKXt2YXIgbW9kPSghdGVzdCYmKChiaXRzPj5pKSYxKT09MSk7aWYoaTw4KXt0aGlzLm1vZHVsZXNbOF1bdGhpcy5tb2R1bGVDb3VudC1pLTFdPW1vZDt9ZWxzZSBpZihpPDkpe3RoaXMubW9kdWxlc1s4XVsxNS1pLTErMV09bW9kO31lbHNle3RoaXMubW9kdWxlc1s4XVsxNS1pLTFdPW1vZDt9fVxuXHR0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudC04XVs4XT0oIXRlc3QpO30sbWFwRGF0YTpmdW5jdGlvbihkYXRhLG1hc2tQYXR0ZXJuKXt2YXIgaW5jPS0xO3ZhciByb3c9dGhpcy5tb2R1bGVDb3VudC0xO3ZhciBiaXRJbmRleD03O3ZhciBieXRlSW5kZXg9MDtmb3IodmFyIGNvbD10aGlzLm1vZHVsZUNvdW50LTE7Y29sPjA7Y29sLT0yKXtpZihjb2w9PTYpY29sLS07d2hpbGUodHJ1ZSl7Zm9yKHZhciBjPTA7YzwyO2MrKyl7aWYodGhpcy5tb2R1bGVzW3Jvd11bY29sLWNdPT1udWxsKXt2YXIgZGFyaz1mYWxzZTtpZihieXRlSW5kZXg8ZGF0YS5sZW5ndGgpe2Rhcms9KCgoZGF0YVtieXRlSW5kZXhdPj4+Yml0SW5kZXgpJjEpPT0xKTt9XG5cdHZhciBtYXNrPVFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLHJvdyxjb2wtYyk7aWYobWFzayl7ZGFyaz0hZGFyazt9XG5cdHRoaXMubW9kdWxlc1tyb3ddW2NvbC1jXT1kYXJrO2JpdEluZGV4LS07aWYoYml0SW5kZXg9PS0xKXtieXRlSW5kZXgrKztiaXRJbmRleD03O319fVxuXHRyb3crPWluYztpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93KXtyb3ctPWluYztpbmM9LWluYzticmVhazt9fX19fTtRUkNvZGVNb2RlbC5QQUQwPTB4RUM7UVJDb2RlTW9kZWwuUEFEMT0weDExO1FSQ29kZU1vZGVsLmNyZWF0ZURhdGE9ZnVuY3Rpb24odHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCxkYXRhTGlzdCl7dmFyIHJzQmxvY2tzPVFSUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKTt2YXIgYnVmZmVyPW5ldyBRUkJpdEJ1ZmZlcigpO2Zvcih2YXIgaT0wO2k8ZGF0YUxpc3QubGVuZ3RoO2krKyl7dmFyIGRhdGE9ZGF0YUxpc3RbaV07YnVmZmVyLnB1dChkYXRhLm1vZGUsNCk7YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLHR5cGVOdW1iZXIpKTtkYXRhLndyaXRlKGJ1ZmZlcik7fVxuXHR2YXIgdG90YWxEYXRhQ291bnQ9MDtmb3IodmFyIGk9MDtpPHJzQmxvY2tzLmxlbmd0aDtpKyspe3RvdGFsRGF0YUNvdW50Kz1yc0Jsb2Nrc1tpXS5kYXRhQ291bnQ7fVxuXHRpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+dG90YWxEYXRhQ291bnQqOCl7dGhyb3cgbmV3IEVycm9yKFwiY29kZSBsZW5ndGggb3ZlcmZsb3cuIChcIlxuXHQrYnVmZmVyLmdldExlbmd0aEluQml0cygpXG5cdCtcIj5cIlxuXHQrdG90YWxEYXRhQ291bnQqOFxuXHQrXCIpXCIpO31cblx0aWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpKzQ8PXRvdGFsRGF0YUNvdW50Kjgpe2J1ZmZlci5wdXQoMCw0KTt9XG5cdHdoaWxlKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSU4IT0wKXtidWZmZXIucHV0Qml0KGZhbHNlKTt9XG5cdHdoaWxlKHRydWUpe2lmKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKT49dG90YWxEYXRhQ291bnQqOCl7YnJlYWs7fVxuXHRidWZmZXIucHV0KFFSQ29kZU1vZGVsLlBBRDAsOCk7aWYoYnVmZmVyLmdldExlbmd0aEluQml0cygpPj10b3RhbERhdGFDb3VudCo4KXticmVhazt9XG5cdGJ1ZmZlci5wdXQoUVJDb2RlTW9kZWwuUEFEMSw4KTt9XG5cdHJldHVybiBRUkNvZGVNb2RlbC5jcmVhdGVCeXRlcyhidWZmZXIscnNCbG9ja3MpO307UVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXM9ZnVuY3Rpb24oYnVmZmVyLHJzQmxvY2tzKXt2YXIgb2Zmc2V0PTA7dmFyIG1heERjQ291bnQ9MDt2YXIgbWF4RWNDb3VudD0wO3ZhciBkY2RhdGE9bmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7dmFyIGVjZGF0YT1uZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtmb3IodmFyIHI9MDtyPHJzQmxvY2tzLmxlbmd0aDtyKyspe3ZhciBkY0NvdW50PXJzQmxvY2tzW3JdLmRhdGFDb3VudDt2YXIgZWNDb3VudD1yc0Jsb2Nrc1tyXS50b3RhbENvdW50LWRjQ291bnQ7bWF4RGNDb3VudD1NYXRoLm1heChtYXhEY0NvdW50LGRjQ291bnQpO21heEVjQ291bnQ9TWF0aC5tYXgobWF4RWNDb3VudCxlY0NvdW50KTtkY2RhdGFbcl09bmV3IEFycmF5KGRjQ291bnQpO2Zvcih2YXIgaT0wO2k8ZGNkYXRhW3JdLmxlbmd0aDtpKyspe2RjZGF0YVtyXVtpXT0weGZmJmJ1ZmZlci5idWZmZXJbaStvZmZzZXRdO31cblx0b2Zmc2V0Kz1kY0NvdW50O3ZhciByc1BvbHk9UVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7dmFyIHJhd1BvbHk9bmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0scnNQb2x5LmdldExlbmd0aCgpLTEpO3ZhciBtb2RQb2x5PXJhd1BvbHkubW9kKHJzUG9seSk7ZWNkYXRhW3JdPW5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTxlY2RhdGFbcl0ubGVuZ3RoO2krKyl7dmFyIG1vZEluZGV4PWkrbW9kUG9seS5nZXRMZW5ndGgoKS1lY2RhdGFbcl0ubGVuZ3RoO2VjZGF0YVtyXVtpXT0obW9kSW5kZXg+PTApP21vZFBvbHkuZ2V0KG1vZEluZGV4KTowO319XG5cdHZhciB0b3RhbENvZGVDb3VudD0wO2Zvcih2YXIgaT0wO2k8cnNCbG9ja3MubGVuZ3RoO2krKyl7dG90YWxDb2RlQ291bnQrPXJzQmxvY2tzW2ldLnRvdGFsQ291bnQ7fVxuXHR2YXIgZGF0YT1uZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO3ZhciBpbmRleD0wO2Zvcih2YXIgaT0wO2k8bWF4RGNDb3VudDtpKyspe2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7aWYoaTxkY2RhdGFbcl0ubGVuZ3RoKXtkYXRhW2luZGV4KytdPWRjZGF0YVtyXVtpXTt9fX1cblx0Zm9yKHZhciBpPTA7aTxtYXhFY0NvdW50O2krKyl7Zm9yKHZhciByPTA7cjxyc0Jsb2Nrcy5sZW5ndGg7cisrKXtpZihpPGVjZGF0YVtyXS5sZW5ndGgpe2RhdGFbaW5kZXgrK109ZWNkYXRhW3JdW2ldO319fVxuXHRyZXR1cm4gZGF0YTt9O3ZhciBRUk1vZGU9e01PREVfTlVNQkVSOjE8PDAsTU9ERV9BTFBIQV9OVU06MTw8MSxNT0RFXzhCSVRfQllURToxPDwyLE1PREVfS0FOSkk6MTw8M307dmFyIFFSRXJyb3JDb3JyZWN0TGV2ZWw9e0w6MSxNOjAsUTozLEg6Mn07dmFyIFFSTWFza1BhdHRlcm49e1BBVFRFUk4wMDA6MCxQQVRURVJOMDAxOjEsUEFUVEVSTjAxMDoyLFBBVFRFUk4wMTE6MyxQQVRURVJOMTAwOjQsUEFUVEVSTjEwMTo1LFBBVFRFUk4xMTA6NixQQVRURVJOMTExOjd9O3ZhciBRUlV0aWw9e1BBVFRFUk5fUE9TSVRJT05fVEFCTEU6W1tdLFs2LDE4XSxbNiwyMl0sWzYsMjZdLFs2LDMwXSxbNiwzNF0sWzYsMjIsMzhdLFs2LDI0LDQyXSxbNiwyNiw0Nl0sWzYsMjgsNTBdLFs2LDMwLDU0XSxbNiwzMiw1OF0sWzYsMzQsNjJdLFs2LDI2LDQ2LDY2XSxbNiwyNiw0OCw3MF0sWzYsMjYsNTAsNzRdLFs2LDMwLDU0LDc4XSxbNiwzMCw1Niw4Ml0sWzYsMzAsNTgsODZdLFs2LDM0LDYyLDkwXSxbNiwyOCw1MCw3Miw5NF0sWzYsMjYsNTAsNzQsOThdLFs2LDMwLDU0LDc4LDEwMl0sWzYsMjgsNTQsODAsMTA2XSxbNiwzMiw1OCw4NCwxMTBdLFs2LDMwLDU4LDg2LDExNF0sWzYsMzQsNjIsOTAsMTE4XSxbNiwyNiw1MCw3NCw5OCwxMjJdLFs2LDMwLDU0LDc4LDEwMiwxMjZdLFs2LDI2LDUyLDc4LDEwNCwxMzBdLFs2LDMwLDU2LDgyLDEwOCwxMzRdLFs2LDM0LDYwLDg2LDExMiwxMzhdLFs2LDMwLDU4LDg2LDExNCwxNDJdLFs2LDM0LDYyLDkwLDExOCwxNDZdLFs2LDMwLDU0LDc4LDEwMiwxMjYsMTUwXSxbNiwyNCw1MCw3NiwxMDIsMTI4LDE1NF0sWzYsMjgsNTQsODAsMTA2LDEzMiwxNThdLFs2LDMyLDU4LDg0LDExMCwxMzYsMTYyXSxbNiwyNiw1NCw4MiwxMTAsMTM4LDE2Nl0sWzYsMzAsNTgsODYsMTE0LDE0MiwxNzBdXSxHMTU6KDE8PDEwKXwoMTw8OCl8KDE8PDUpfCgxPDw0KXwoMTw8Mil8KDE8PDEpfCgxPDwwKSxHMTg6KDE8PDEyKXwoMTw8MTEpfCgxPDwxMCl8KDE8PDkpfCgxPDw4KXwoMTw8NSl8KDE8PDIpfCgxPDwwKSxHMTVfTUFTSzooMTw8MTQpfCgxPDwxMil8KDE8PDEwKXwoMTw8NCl8KDE8PDEpLGdldEJDSFR5cGVJbmZvOmZ1bmN0aW9uKGRhdGEpe3ZhciBkPWRhdGE8PDEwO3doaWxlKFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSk+PTApe2RePShRUlV0aWwuRzE1PDwoUVJVdGlsLmdldEJDSERpZ2l0KGQpLVFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE1KSkpO31cblx0cmV0dXJuKChkYXRhPDwxMCl8ZCleUVJVdGlsLkcxNV9NQVNLO30sZ2V0QkNIVHlwZU51bWJlcjpmdW5jdGlvbihkYXRhKXt2YXIgZD1kYXRhPDwxMjt3aGlsZShRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpPj0wKXtkXj0oUVJVdGlsLkcxODw8KFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxOCkpKTt9XG5cdHJldHVybihkYXRhPDwxMil8ZDt9LGdldEJDSERpZ2l0OmZ1bmN0aW9uKGRhdGEpe3ZhciBkaWdpdD0wO3doaWxlKGRhdGEhPTApe2RpZ2l0Kys7ZGF0YT4+Pj0xO31cblx0cmV0dXJuIGRpZ2l0O30sZ2V0UGF0dGVyblBvc2l0aW9uOmZ1bmN0aW9uKHR5cGVOdW1iZXIpe3JldHVybiBRUlV0aWwuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyLTFdO30sZ2V0TWFzazpmdW5jdGlvbihtYXNrUGF0dGVybixpLGope3N3aXRjaChtYXNrUGF0dGVybil7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6cmV0dXJuKGkraiklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpyZXR1cm4gaSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOnJldHVybiBqJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6cmV0dXJuKGkraiklMz09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpyZXR1cm4oTWF0aC5mbG9vcihpLzIpK01hdGguZmxvb3Ioai8zKSklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMTpyZXR1cm4oaSpqKSUyKyhpKmopJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6cmV0dXJuKChpKmopJTIrKGkqaiklMyklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMTpyZXR1cm4oKGkqaiklMysoaStqKSUyKSUyPT0wO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiYmFkIG1hc2tQYXR0ZXJuOlwiK21hc2tQYXR0ZXJuKTt9fSxnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOmZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCl7dmFyIGE9bmV3IFFSUG9seW5vbWlhbChbMV0sMCk7Zm9yKHZhciBpPTA7aTxlcnJvckNvcnJlY3RMZW5ndGg7aSsrKXthPWEubXVsdGlwbHkobmV3IFFSUG9seW5vbWlhbChbMSxRUk1hdGguZ2V4cChpKV0sMCkpO31cblx0cmV0dXJuIGE7fSxnZXRMZW5ndGhJbkJpdHM6ZnVuY3Rpb24obW9kZSx0eXBlKXtpZigxPD10eXBlJiZ0eXBlPDEwKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEwO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiA5O2Nhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOnJldHVybiA4O2Nhc2UgUVJNb2RlLk1PREVfS0FOSkk6cmV0dXJuIDg7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiK21vZGUpO319ZWxzZSBpZih0eXBlPDI3KXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEyO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMTtjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTA7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiK21vZGUpO319ZWxzZSBpZih0eXBlPDQxKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDE0O2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMztjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTI7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiK21vZGUpO319ZWxzZXt0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlOlwiK3R5cGUpO319LGdldExvc3RQb2ludDpmdW5jdGlvbihxckNvZGUpe3ZhciBtb2R1bGVDb3VudD1xckNvZGUuZ2V0TW9kdWxlQ291bnQoKTt2YXIgbG9zdFBvaW50PTA7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQ7cm93Kyspe2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXt2YXIgc2FtZUNvdW50PTA7dmFyIGRhcms9cXJDb2RlLmlzRGFyayhyb3csY29sKTtmb3IodmFyIHI9LTE7cjw9MTtyKyspe2lmKHJvdytyPDB8fG1vZHVsZUNvdW50PD1yb3crcil7Y29udGludWU7fVxuXHRmb3IodmFyIGM9LTE7Yzw9MTtjKyspe2lmKGNvbCtjPDB8fG1vZHVsZUNvdW50PD1jb2wrYyl7Y29udGludWU7fVxuXHRpZihyPT0wJiZjPT0wKXtjb250aW51ZTt9XG5cdGlmKGRhcms9PXFyQ29kZS5pc0Rhcmsocm93K3IsY29sK2MpKXtzYW1lQ291bnQrKzt9fX1cblx0aWYoc2FtZUNvdW50PjUpe2xvc3RQb2ludCs9KDMrc2FtZUNvdW50LTUpO319fVxuXHRmb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudC0xO3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC0xO2NvbCsrKXt2YXIgY291bnQ9MDtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKzEpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wrMSkpY291bnQrKztpZihjb3VudD09MHx8Y291bnQ9PTQpe2xvc3RQb2ludCs9Mzt9fX1cblx0Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQ7cm93Kyspe2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50LTY7Y29sKyspe2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdyxjb2wrMSkmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCsyKSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzMpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrNCkmJiFxckNvZGUuaXNEYXJrKHJvdyxjb2wrNSkmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCs2KSl7bG9zdFBvaW50Kz00MDt9fX1cblx0Zm9yKHZhciBjb2w9MDtjb2w8bW9kdWxlQ291bnQ7Y29sKyspe2Zvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50LTY7cm93Kyspe2lmKHFyQ29kZS5pc0Rhcmsocm93LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdysxLGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzIsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crMyxjb2wpJiZxckNvZGUuaXNEYXJrKHJvdys0LGNvbCkmJiFxckNvZGUuaXNEYXJrKHJvdys1LGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzYsY29sKSl7bG9zdFBvaW50Kz00MDt9fX1cblx0dmFyIGRhcmtDb3VudD0wO2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXtmb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudDtyb3crKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSl7ZGFya0NvdW50Kys7fX19XG5cdHZhciByYXRpbz1NYXRoLmFicygxMDAqZGFya0NvdW50L21vZHVsZUNvdW50L21vZHVsZUNvdW50LTUwKS81O2xvc3RQb2ludCs9cmF0aW8qMTA7cmV0dXJuIGxvc3RQb2ludDt9fTt2YXIgUVJNYXRoPXtnbG9nOmZ1bmN0aW9uKG4pe2lmKG48MSl7dGhyb3cgbmV3IEVycm9yKFwiZ2xvZyhcIituK1wiKVwiKTt9XG5cdHJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO30sZ2V4cDpmdW5jdGlvbihuKXt3aGlsZShuPDApe24rPTI1NTt9XG5cdHdoaWxlKG4+PTI1Nil7bi09MjU1O31cblx0cmV0dXJuIFFSTWF0aC5FWFBfVEFCTEVbbl07fSxFWFBfVEFCTEU6bmV3IEFycmF5KDI1NiksTE9HX1RBQkxFOm5ldyBBcnJheSgyNTYpfTtmb3IodmFyIGk9MDtpPDg7aSsrKXtRUk1hdGguRVhQX1RBQkxFW2ldPTE8PGk7fVxuXHRmb3IodmFyIGk9ODtpPDI1NjtpKyspe1FSTWF0aC5FWFBfVEFCTEVbaV09UVJNYXRoLkVYUF9UQUJMRVtpLTRdXlFSTWF0aC5FWFBfVEFCTEVbaS01XV5RUk1hdGguRVhQX1RBQkxFW2ktNl1eUVJNYXRoLkVYUF9UQUJMRVtpLThdO31cblx0Zm9yKHZhciBpPTA7aTwyNTU7aSsrKXtRUk1hdGguTE9HX1RBQkxFW1FSTWF0aC5FWFBfVEFCTEVbaV1dPWk7fVxuXHRmdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLHNoaWZ0KXtpZihudW0ubGVuZ3RoPT11bmRlZmluZWQpe3Rocm93IG5ldyBFcnJvcihudW0ubGVuZ3RoK1wiL1wiK3NoaWZ0KTt9XG5cdHZhciBvZmZzZXQ9MDt3aGlsZShvZmZzZXQ8bnVtLmxlbmd0aCYmbnVtW29mZnNldF09PTApe29mZnNldCsrO31cblx0dGhpcy5udW09bmV3IEFycmF5KG51bS5sZW5ndGgtb2Zmc2V0K3NoaWZ0KTtmb3IodmFyIGk9MDtpPG51bS5sZW5ndGgtb2Zmc2V0O2krKyl7dGhpcy5udW1baV09bnVtW2krb2Zmc2V0XTt9fVxuXHRRUlBvbHlub21pYWwucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24oaW5kZXgpe3JldHVybiB0aGlzLm51bVtpbmRleF07fSxnZXRMZW5ndGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5udW0ubGVuZ3RoO30sbXVsdGlwbHk6ZnVuY3Rpb24oZSl7dmFyIG51bT1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKStlLmdldExlbmd0aCgpLTEpO2Zvcih2YXIgaT0wO2k8dGhpcy5nZXRMZW5ndGgoKTtpKyspe2Zvcih2YXIgaj0wO2o8ZS5nZXRMZW5ndGgoKTtqKyspe251bVtpK2pdXj1RUk1hdGguZ2V4cChRUk1hdGguZ2xvZyh0aGlzLmdldChpKSkrUVJNYXRoLmdsb2coZS5nZXQoaikpKTt9fVxuXHRyZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCk7fSxtb2Q6ZnVuY3Rpb24oZSl7aWYodGhpcy5nZXRMZW5ndGgoKS1lLmdldExlbmd0aCgpPDApe3JldHVybiB0aGlzO31cblx0dmFyIHJhdGlvPVFSTWF0aC5nbG9nKHRoaXMuZ2V0KDApKS1RUk1hdGguZ2xvZyhlLmdldCgwKSk7dmFyIG51bT1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7bnVtW2ldPXRoaXMuZ2V0KGkpO31cblx0Zm9yKHZhciBpPTA7aTxlLmdldExlbmd0aCgpO2krKyl7bnVtW2ldXj1RUk1hdGguZ2V4cChRUk1hdGguZ2xvZyhlLmdldChpKSkrcmF0aW8pO31cblx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLDApLm1vZChlKTt9fTtmdW5jdGlvbiBRUlJTQmxvY2sodG90YWxDb3VudCxkYXRhQ291bnQpe3RoaXMudG90YWxDb3VudD10b3RhbENvdW50O3RoaXMuZGF0YUNvdW50PWRhdGFDb3VudDt9XG5cdFFSUlNCbG9jay5SU19CTE9DS19UQUJMRT1bWzEsMjYsMTldLFsxLDI2LDE2XSxbMSwyNiwxM10sWzEsMjYsOV0sWzEsNDQsMzRdLFsxLDQ0LDI4XSxbMSw0NCwyMl0sWzEsNDQsMTZdLFsxLDcwLDU1XSxbMSw3MCw0NF0sWzIsMzUsMTddLFsyLDM1LDEzXSxbMSwxMDAsODBdLFsyLDUwLDMyXSxbMiw1MCwyNF0sWzQsMjUsOV0sWzEsMTM0LDEwOF0sWzIsNjcsNDNdLFsyLDMzLDE1LDIsMzQsMTZdLFsyLDMzLDExLDIsMzQsMTJdLFsyLDg2LDY4XSxbNCw0MywyN10sWzQsNDMsMTldLFs0LDQzLDE1XSxbMiw5OCw3OF0sWzQsNDksMzFdLFsyLDMyLDE0LDQsMzMsMTVdLFs0LDM5LDEzLDEsNDAsMTRdLFsyLDEyMSw5N10sWzIsNjAsMzgsMiw2MSwzOV0sWzQsNDAsMTgsMiw0MSwxOV0sWzQsNDAsMTQsMiw0MSwxNV0sWzIsMTQ2LDExNl0sWzMsNTgsMzYsMiw1OSwzN10sWzQsMzYsMTYsNCwzNywxN10sWzQsMzYsMTIsNCwzNywxM10sWzIsODYsNjgsMiw4Nyw2OV0sWzQsNjksNDMsMSw3MCw0NF0sWzYsNDMsMTksMiw0NCwyMF0sWzYsNDMsMTUsMiw0NCwxNl0sWzQsMTAxLDgxXSxbMSw4MCw1MCw0LDgxLDUxXSxbNCw1MCwyMiw0LDUxLDIzXSxbMywzNiwxMiw4LDM3LDEzXSxbMiwxMTYsOTIsMiwxMTcsOTNdLFs2LDU4LDM2LDIsNTksMzddLFs0LDQ2LDIwLDYsNDcsMjFdLFs3LDQyLDE0LDQsNDMsMTVdLFs0LDEzMywxMDddLFs4LDU5LDM3LDEsNjAsMzhdLFs4LDQ0LDIwLDQsNDUsMjFdLFsxMiwzMywxMSw0LDM0LDEyXSxbMywxNDUsMTE1LDEsMTQ2LDExNl0sWzQsNjQsNDAsNSw2NSw0MV0sWzExLDM2LDE2LDUsMzcsMTddLFsxMSwzNiwxMiw1LDM3LDEzXSxbNSwxMDksODcsMSwxMTAsODhdLFs1LDY1LDQxLDUsNjYsNDJdLFs1LDU0LDI0LDcsNTUsMjVdLFsxMSwzNiwxMl0sWzUsMTIyLDk4LDEsMTIzLDk5XSxbNyw3Myw0NSwzLDc0LDQ2XSxbMTUsNDMsMTksMiw0NCwyMF0sWzMsNDUsMTUsMTMsNDYsMTZdLFsxLDEzNSwxMDcsNSwxMzYsMTA4XSxbMTAsNzQsNDYsMSw3NSw0N10sWzEsNTAsMjIsMTUsNTEsMjNdLFsyLDQyLDE0LDE3LDQzLDE1XSxbNSwxNTAsMTIwLDEsMTUxLDEyMV0sWzksNjksNDMsNCw3MCw0NF0sWzE3LDUwLDIyLDEsNTEsMjNdLFsyLDQyLDE0LDE5LDQzLDE1XSxbMywxNDEsMTEzLDQsMTQyLDExNF0sWzMsNzAsNDQsMTEsNzEsNDVdLFsxNyw0NywyMSw0LDQ4LDIyXSxbOSwzOSwxMywxNiw0MCwxNF0sWzMsMTM1LDEwNyw1LDEzNiwxMDhdLFszLDY3LDQxLDEzLDY4LDQyXSxbMTUsNTQsMjQsNSw1NSwyNV0sWzE1LDQzLDE1LDEwLDQ0LDE2XSxbNCwxNDQsMTE2LDQsMTQ1LDExN10sWzE3LDY4LDQyXSxbMTcsNTAsMjIsNiw1MSwyM10sWzE5LDQ2LDE2LDYsNDcsMTddLFsyLDEzOSwxMTEsNywxNDAsMTEyXSxbMTcsNzQsNDZdLFs3LDU0LDI0LDE2LDU1LDI1XSxbMzQsMzcsMTNdLFs0LDE1MSwxMjEsNSwxNTIsMTIyXSxbNCw3NSw0NywxNCw3Niw0OF0sWzExLDU0LDI0LDE0LDU1LDI1XSxbMTYsNDUsMTUsMTQsNDYsMTZdLFs2LDE0NywxMTcsNCwxNDgsMTE4XSxbNiw3Myw0NSwxNCw3NCw0Nl0sWzExLDU0LDI0LDE2LDU1LDI1XSxbMzAsNDYsMTYsMiw0NywxN10sWzgsMTMyLDEwNiw0LDEzMywxMDddLFs4LDc1LDQ3LDEzLDc2LDQ4XSxbNyw1NCwyNCwyMiw1NSwyNV0sWzIyLDQ1LDE1LDEzLDQ2LDE2XSxbMTAsMTQyLDExNCwyLDE0MywxMTVdLFsxOSw3NCw0Niw0LDc1LDQ3XSxbMjgsNTAsMjIsNiw1MSwyM10sWzMzLDQ2LDE2LDQsNDcsMTddLFs4LDE1MiwxMjIsNCwxNTMsMTIzXSxbMjIsNzMsNDUsMyw3NCw0Nl0sWzgsNTMsMjMsMjYsNTQsMjRdLFsxMiw0NSwxNSwyOCw0NiwxNl0sWzMsMTQ3LDExNywxMCwxNDgsMTE4XSxbMyw3Myw0NSwyMyw3NCw0Nl0sWzQsNTQsMjQsMzEsNTUsMjVdLFsxMSw0NSwxNSwzMSw0NiwxNl0sWzcsMTQ2LDExNiw3LDE0NywxMTddLFsyMSw3Myw0NSw3LDc0LDQ2XSxbMSw1MywyMywzNyw1NCwyNF0sWzE5LDQ1LDE1LDI2LDQ2LDE2XSxbNSwxNDUsMTE1LDEwLDE0NiwxMTZdLFsxOSw3NSw0NywxMCw3Niw0OF0sWzE1LDU0LDI0LDI1LDU1LDI1XSxbMjMsNDUsMTUsMjUsNDYsMTZdLFsxMywxNDUsMTE1LDMsMTQ2LDExNl0sWzIsNzQsNDYsMjksNzUsNDddLFs0Miw1NCwyNCwxLDU1LDI1XSxbMjMsNDUsMTUsMjgsNDYsMTZdLFsxNywxNDUsMTE1XSxbMTAsNzQsNDYsMjMsNzUsNDddLFsxMCw1NCwyNCwzNSw1NSwyNV0sWzE5LDQ1LDE1LDM1LDQ2LDE2XSxbMTcsMTQ1LDExNSwxLDE0NiwxMTZdLFsxNCw3NCw0NiwyMSw3NSw0N10sWzI5LDU0LDI0LDE5LDU1LDI1XSxbMTEsNDUsMTUsNDYsNDYsMTZdLFsxMywxNDUsMTE1LDYsMTQ2LDExNl0sWzE0LDc0LDQ2LDIzLDc1LDQ3XSxbNDQsNTQsMjQsNyw1NSwyNV0sWzU5LDQ2LDE2LDEsNDcsMTddLFsxMiwxNTEsMTIxLDcsMTUyLDEyMl0sWzEyLDc1LDQ3LDI2LDc2LDQ4XSxbMzksNTQsMjQsMTQsNTUsMjVdLFsyMiw0NSwxNSw0MSw0NiwxNl0sWzYsMTUxLDEyMSwxNCwxNTIsMTIyXSxbNiw3NSw0NywzNCw3Niw0OF0sWzQ2LDU0LDI0LDEwLDU1LDI1XSxbMiw0NSwxNSw2NCw0NiwxNl0sWzE3LDE1MiwxMjIsNCwxNTMsMTIzXSxbMjksNzQsNDYsMTQsNzUsNDddLFs0OSw1NCwyNCwxMCw1NSwyNV0sWzI0LDQ1LDE1LDQ2LDQ2LDE2XSxbNCwxNTIsMTIyLDE4LDE1MywxMjNdLFsxMyw3NCw0NiwzMiw3NSw0N10sWzQ4LDU0LDI0LDE0LDU1LDI1XSxbNDIsNDUsMTUsMzIsNDYsMTZdLFsyMCwxNDcsMTE3LDQsMTQ4LDExOF0sWzQwLDc1LDQ3LDcsNzYsNDhdLFs0Myw1NCwyNCwyMiw1NSwyNV0sWzEwLDQ1LDE1LDY3LDQ2LDE2XSxbMTksMTQ4LDExOCw2LDE0OSwxMTldLFsxOCw3NSw0NywzMSw3Niw0OF0sWzM0LDU0LDI0LDM0LDU1LDI1XSxbMjAsNDUsMTUsNjEsNDYsMTZdXTtRUlJTQmxvY2suZ2V0UlNCbG9ja3M9ZnVuY3Rpb24odHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCl7dmFyIHJzQmxvY2s9UVJSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKTtpZihyc0Jsb2NrPT11bmRlZmluZWQpe3Rocm93IG5ldyBFcnJvcihcImJhZCBycyBibG9jayBAIHR5cGVOdW1iZXI6XCIrdHlwZU51bWJlcitcIi9lcnJvckNvcnJlY3RMZXZlbDpcIitlcnJvckNvcnJlY3RMZXZlbCk7fVxuXHR2YXIgbGVuZ3RoPXJzQmxvY2subGVuZ3RoLzM7dmFyIGxpc3Q9W107Zm9yKHZhciBpPTA7aTxsZW5ndGg7aSsrKXt2YXIgY291bnQ9cnNCbG9ja1tpKjMrMF07dmFyIHRvdGFsQ291bnQ9cnNCbG9ja1tpKjMrMV07dmFyIGRhdGFDb3VudD1yc0Jsb2NrW2kqMysyXTtmb3IodmFyIGo9MDtqPGNvdW50O2orKyl7bGlzdC5wdXNoKG5ldyBRUlJTQmxvY2sodG90YWxDb3VudCxkYXRhQ291bnQpKTt9fVxuXHRyZXR1cm4gbGlzdDt9O1FSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGU9ZnVuY3Rpb24odHlwZU51bWJlcixlcnJvckNvcnJlY3RMZXZlbCl7c3dpdGNoKGVycm9yQ29ycmVjdExldmVsKXtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrMF07Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlci0xKSo0KzFdO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5ROnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCsyXTtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrM107ZGVmYXVsdDpyZXR1cm4gdW5kZWZpbmVkO319O2Z1bmN0aW9uIFFSQml0QnVmZmVyKCl7dGhpcy5idWZmZXI9W107dGhpcy5sZW5ndGg9MDt9XG5cdFFSQml0QnVmZmVyLnByb3RvdHlwZT17Z2V0OmZ1bmN0aW9uKGluZGV4KXt2YXIgYnVmSW5kZXg9TWF0aC5mbG9vcihpbmRleC84KTtyZXR1cm4oKHRoaXMuYnVmZmVyW2J1ZkluZGV4XT4+Pig3LWluZGV4JTgpKSYxKT09MTt9LHB1dDpmdW5jdGlvbihudW0sbGVuZ3RoKXtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3RoaXMucHV0Qml0KCgobnVtPj4+KGxlbmd0aC1pLTEpKSYxKT09MSk7fX0sZ2V0TGVuZ3RoSW5CaXRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RoO30scHV0Qml0OmZ1bmN0aW9uKGJpdCl7dmFyIGJ1ZkluZGV4PU1hdGguZmxvb3IodGhpcy5sZW5ndGgvOCk7aWYodGhpcy5idWZmZXIubGVuZ3RoPD1idWZJbmRleCl7dGhpcy5idWZmZXIucHVzaCgwKTt9XG5cdGlmKGJpdCl7dGhpcy5idWZmZXJbYnVmSW5kZXhdfD0oMHg4MD4+Pih0aGlzLmxlbmd0aCU4KSk7fVxuXHR0aGlzLmxlbmd0aCsrO319O3ZhciBRUkNvZGVMaW1pdExlbmd0aD1bWzE3LDE0LDExLDddLFszMiwyNiwyMCwxNF0sWzUzLDQyLDMyLDI0XSxbNzgsNjIsNDYsMzRdLFsxMDYsODQsNjAsNDRdLFsxMzQsMTA2LDc0LDU4XSxbMTU0LDEyMiw4Niw2NF0sWzE5MiwxNTIsMTA4LDg0XSxbMjMwLDE4MCwxMzAsOThdLFsyNzEsMjEzLDE1MSwxMTldLFszMjEsMjUxLDE3NywxMzddLFszNjcsMjg3LDIwMywxNTVdLFs0MjUsMzMxLDI0MSwxNzddLFs0NTgsMzYyLDI1OCwxOTRdLFs1MjAsNDEyLDI5MiwyMjBdLFs1ODYsNDUwLDMyMiwyNTBdLFs2NDQsNTA0LDM2NCwyODBdLFs3MTgsNTYwLDM5NCwzMTBdLFs3OTIsNjI0LDQ0MiwzMzhdLFs4NTgsNjY2LDQ4MiwzODJdLFs5MjksNzExLDUwOSw0MDNdLFsxMDAzLDc3OSw1NjUsNDM5XSxbMTA5MSw4NTcsNjExLDQ2MV0sWzExNzEsOTExLDY2MSw1MTFdLFsxMjczLDk5Nyw3MTUsNTM1XSxbMTM2NywxMDU5LDc1MSw1OTNdLFsxNDY1LDExMjUsODA1LDYyNV0sWzE1MjgsMTE5MCw4NjgsNjU4XSxbMTYyOCwxMjY0LDkwOCw2OThdLFsxNzMyLDEzNzAsOTgyLDc0Ml0sWzE4NDAsMTQ1MiwxMDMwLDc5MF0sWzE5NTIsMTUzOCwxMTEyLDg0Ml0sWzIwNjgsMTYyOCwxMTY4LDg5OF0sWzIxODgsMTcyMiwxMjI4LDk1OF0sWzIzMDMsMTgwOSwxMjgzLDk4M10sWzI0MzEsMTkxMSwxMzUxLDEwNTFdLFsyNTYzLDE5ODksMTQyMywxMDkzXSxbMjY5OSwyMDk5LDE0OTksMTEzOV0sWzI4MDksMjIxMywxNTc5LDEyMTldLFsyOTUzLDIzMzEsMTY2MywxMjczXV07XG5cdFxuXHRmdW5jdGlvbiBfaXNTdXBwb3J0Q2FudmFzKCkge1xuXHRcdHJldHVybiB0eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEICE9IFwidW5kZWZpbmVkXCI7XG5cdH1cblx0XG5cdC8vIGFuZHJvaWQgMi54IGRvZXNuJ3Qgc3VwcG9ydCBEYXRhLVVSSSBzcGVjXG5cdGZ1bmN0aW9uIF9nZXRBbmRyb2lkKCkge1xuXHRcdHZhciBhbmRyb2lkID0gZmFsc2U7XG5cdFx0dmFyIHNBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0XG5cdFx0aWYgKC9hbmRyb2lkL2kudGVzdChzQWdlbnQpKSB7IC8vIGFuZHJvaWRcblx0XHRcdGFuZHJvaWQgPSB0cnVlO1xuXHRcdFx0dmFyIGFNYXQgPSBzQWdlbnQudG9TdHJpbmcoKS5tYXRjaCgvYW5kcm9pZCAoWzAtOV1cXC5bMC05XSkvaSk7XG5cdFx0XHRcblx0XHRcdGlmIChhTWF0ICYmIGFNYXRbMV0pIHtcblx0XHRcdFx0YW5kcm9pZCA9IHBhcnNlRmxvYXQoYU1hdFsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBhbmRyb2lkO1xuXHR9XG5cdFxuXHR2YXIgc3ZnRHJhd2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIERyYXdpbmcgPSBmdW5jdGlvbiAoZWwsIGh0T3B0aW9uKSB7XG5cdFx0XHR0aGlzLl9lbCA9IGVsO1xuXHRcdFx0dGhpcy5faHRPcHRpb24gPSBodE9wdGlvbjtcblx0XHR9O1xuXG5cdFx0RHJhd2luZy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChvUVJDb2RlKSB7XG5cdFx0XHR2YXIgX2h0T3B0aW9uID0gdGhpcy5faHRPcHRpb247XG5cdFx0XHR2YXIgX2VsID0gdGhpcy5fZWw7XG5cdFx0XHR2YXIgbkNvdW50ID0gb1FSQ29kZS5nZXRNb2R1bGVDb3VudCgpO1xuXHRcdFx0dmFyIG5XaWR0aCA9IE1hdGguZmxvb3IoX2h0T3B0aW9uLndpZHRoIC8gbkNvdW50KTtcblx0XHRcdHZhciBuSGVpZ2h0ID0gTWF0aC5mbG9vcihfaHRPcHRpb24uaGVpZ2h0IC8gbkNvdW50KTtcblxuXHRcdFx0dGhpcy5jbGVhcigpO1xuXG5cdFx0XHRmdW5jdGlvbiBtYWtlU1ZHKHRhZywgYXR0cnMpIHtcblx0XHRcdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZyk7XG5cdFx0XHRcdGZvciAodmFyIGsgaW4gYXR0cnMpXG5cdFx0XHRcdFx0aWYgKGF0dHJzLmhhc093blByb3BlcnR5KGspKSBlbC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzdmcgPSBtYWtlU1ZHKFwic3ZnXCIgLCB7J3ZpZXdCb3gnOiAnMCAwICcgKyBTdHJpbmcobkNvdW50KSArIFwiIFwiICsgU3RyaW5nKG5Db3VudCksICd3aWR0aCc6ICcxMDAlJywgJ2hlaWdodCc6ICcxMDAlJywgJ2ZpbGwnOiBfaHRPcHRpb24uY29sb3JMaWdodH0pO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIiwgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG5cdFx0XHRfZWwuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuXHRcdFx0c3ZnLmFwcGVuZENoaWxkKG1ha2VTVkcoXCJyZWN0XCIsIHtcImZpbGxcIjogX2h0T3B0aW9uLmNvbG9yTGlnaHQsIFwid2lkdGhcIjogXCIxMDAlXCIsIFwiaGVpZ2h0XCI6IFwiMTAwJVwifSkpO1xuXHRcdFx0c3ZnLmFwcGVuZENoaWxkKG1ha2VTVkcoXCJyZWN0XCIsIHtcImZpbGxcIjogX2h0T3B0aW9uLmNvbG9yRGFyaywgXCJ3aWR0aFwiOiBcIjFcIiwgXCJoZWlnaHRcIjogXCIxXCIsIFwiaWRcIjogXCJ0ZW1wbGF0ZVwifSkpO1xuXG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuQ291bnQ7IHJvdysrKSB7XG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG5Db3VudDsgY29sKyspIHtcblx0XHRcdFx0XHRpZiAob1FSQ29kZS5pc0Rhcmsocm93LCBjb2wpKSB7XG5cdFx0XHRcdFx0XHR2YXIgY2hpbGQgPSBtYWtlU1ZHKFwidXNlXCIsIHtcInhcIjogU3RyaW5nKHJvdyksIFwieVwiOiBTdHJpbmcoY29sKX0pO1xuXHRcdFx0XHRcdFx0Y2hpbGQuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBcIiN0ZW1wbGF0ZVwiKVxuXHRcdFx0XHRcdFx0c3ZnLmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdERyYXdpbmcucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2hpbGUgKHRoaXMuX2VsLmhhc0NoaWxkTm9kZXMoKSlcblx0XHRcdFx0dGhpcy5fZWwucmVtb3ZlQ2hpbGQodGhpcy5fZWwubGFzdENoaWxkKTtcblx0XHR9O1xuXHRcdHJldHVybiBEcmF3aW5nO1xuXHR9KSgpO1xuXG5cdHZhciB1c2VTVkcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiO1xuXG5cdC8vIERyYXdpbmcgaW4gRE9NIGJ5IHVzaW5nIFRhYmxlIHRhZ1xuXHR2YXIgRHJhd2luZyA9IHVzZVNWRyA/IHN2Z0RyYXdlciA6ICFfaXNTdXBwb3J0Q2FudmFzKCkgPyAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBEcmF3aW5nID0gZnVuY3Rpb24gKGVsLCBodE9wdGlvbikge1xuXHRcdFx0dGhpcy5fZWwgPSBlbDtcblx0XHRcdHRoaXMuX2h0T3B0aW9uID0gaHRPcHRpb247XG5cdFx0fTtcblx0XHRcdFxuXHRcdC8qKlxuXHRcdCAqIERyYXcgdGhlIFFSQ29kZVxuXHRcdCAqIFxuXHRcdCAqIEBwYXJhbSB7UVJDb2RlfSBvUVJDb2RlXG5cdFx0ICovXG5cdFx0RHJhd2luZy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChvUVJDb2RlKSB7XG4gICAgICAgICAgICB2YXIgX2h0T3B0aW9uID0gdGhpcy5faHRPcHRpb247XG4gICAgICAgICAgICB2YXIgX2VsID0gdGhpcy5fZWw7XG5cdFx0XHR2YXIgbkNvdW50ID0gb1FSQ29kZS5nZXRNb2R1bGVDb3VudCgpO1xuXHRcdFx0dmFyIG5XaWR0aCA9IE1hdGguZmxvb3IoX2h0T3B0aW9uLndpZHRoIC8gbkNvdW50KTtcblx0XHRcdHZhciBuSGVpZ2h0ID0gTWF0aC5mbG9vcihfaHRPcHRpb24uaGVpZ2h0IC8gbkNvdW50KTtcblx0XHRcdHZhciBhSFRNTCA9IFsnPHRhYmxlIHN0eWxlPVwiYm9yZGVyOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1wiPiddO1xuXHRcdFx0XG5cdFx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCBuQ291bnQ7IHJvdysrKSB7XG5cdFx0XHRcdGFIVE1MLnB1c2goJzx0cj4nKTtcblx0XHRcdFx0XG5cdFx0XHRcdGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG5Db3VudDsgY29sKyspIHtcblx0XHRcdFx0XHRhSFRNTC5wdXNoKCc8dGQgc3R5bGU9XCJib3JkZXI6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7cGFkZGluZzowO21hcmdpbjowO3dpZHRoOicgKyBuV2lkdGggKyAncHg7aGVpZ2h0OicgKyBuSGVpZ2h0ICsgJ3B4O2JhY2tncm91bmQtY29sb3I6JyArIChvUVJDb2RlLmlzRGFyayhyb3csIGNvbCkgPyBfaHRPcHRpb24uY29sb3JEYXJrIDogX2h0T3B0aW9uLmNvbG9yTGlnaHQpICsgJztcIj48L3RkPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRhSFRNTC5wdXNoKCc8L3RyPicpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRhSFRNTC5wdXNoKCc8L3RhYmxlPicpO1xuXHRcdFx0X2VsLmlubmVySFRNTCA9IGFIVE1MLmpvaW4oJycpO1xuXHRcdFx0XG5cdFx0XHQvLyBGaXggdGhlIG1hcmdpbiB2YWx1ZXMgYXMgcmVhbCBzaXplLlxuXHRcdFx0dmFyIGVsVGFibGUgPSBfZWwuY2hpbGROb2Rlc1swXTtcblx0XHRcdHZhciBuTGVmdE1hcmdpblRhYmxlID0gKF9odE9wdGlvbi53aWR0aCAtIGVsVGFibGUub2Zmc2V0V2lkdGgpIC8gMjtcblx0XHRcdHZhciBuVG9wTWFyZ2luVGFibGUgPSAoX2h0T3B0aW9uLmhlaWdodCAtIGVsVGFibGUub2Zmc2V0SGVpZ2h0KSAvIDI7XG5cdFx0XHRcblx0XHRcdGlmIChuTGVmdE1hcmdpblRhYmxlID4gMCAmJiBuVG9wTWFyZ2luVGFibGUgPiAwKSB7XG5cdFx0XHRcdGVsVGFibGUuc3R5bGUubWFyZ2luID0gblRvcE1hcmdpblRhYmxlICsgXCJweCBcIiArIG5MZWZ0TWFyZ2luVGFibGUgKyBcInB4XCI7XHRcblx0XHRcdH1cblx0XHR9O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIENsZWFyIHRoZSBRUkNvZGVcblx0XHQgKi9cblx0XHREcmF3aW5nLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX2VsLmlubmVySFRNTCA9ICcnO1xuXHRcdH07XG5cdFx0XG5cdFx0cmV0dXJuIERyYXdpbmc7XG5cdH0pKCkgOiAoZnVuY3Rpb24gKCkgeyAvLyBEcmF3aW5nIGluIENhbnZhc1xuXHRcdGZ1bmN0aW9uIF9vbk1ha2VJbWFnZSgpIHtcblx0XHRcdHRoaXMuX2VsSW1hZ2Uuc3JjID0gdGhpcy5fZWxDYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXHRcdFx0dGhpcy5fZWxJbWFnZS5zdHlsZS5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIiwgXCJibG9ja1wiLCBcImltcG9ydGFudFwiKTtcblx0XHRcdHRoaXMuX2VsQ2FudmFzLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0fVxuXHRcdFxuXHRcdC8vIEFuZHJvaWQgMi4xIGJ1ZyB3b3JrYXJvdW5kXG5cdFx0Ly8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2FuZHJvaWQvaXNzdWVzL2RldGFpbD9pZD01MTQxXG5cdFx0aWYgKHRoaXMuX2FuZHJvaWQgJiYgdGhpcy5fYW5kcm9pZCA8PSAyLjEpIHtcblx0ICAgIFx0dmFyIGZhY3RvciA9IDEgLyB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcblx0ICAgICAgICB2YXIgZHJhd0ltYWdlID0gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5kcmF3SW1hZ2U7IFxuXHQgICAgXHRDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSwgc3gsIHN5LCBzdywgc2gsIGR4LCBkeSwgZHcsIGRoKSB7XG5cdCAgICBcdFx0aWYgKChcIm5vZGVOYW1lXCIgaW4gaW1hZ2UpICYmIC9pbWcvaS50ZXN0KGltYWdlLm5vZGVOYW1lKSkge1xuXHRcdCAgICAgICAgXHRmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMTsgaS0tKSB7XG5cdFx0ICAgICAgICAgICAgXHRhcmd1bWVudHNbaV0gPSBhcmd1bWVudHNbaV0gKiBmYWN0b3I7XG5cdFx0ICAgICAgICBcdH1cblx0ICAgIFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBkdyA9PSBcInVuZGVmaW5lZFwiKSB7XG5cdCAgICBcdFx0XHRhcmd1bWVudHNbMV0gKj0gZmFjdG9yO1xuXHQgICAgXHRcdFx0YXJndW1lbnRzWzJdICo9IGZhY3Rvcjtcblx0ICAgIFx0XHRcdGFyZ3VtZW50c1szXSAqPSBmYWN0b3I7XG5cdCAgICBcdFx0XHRhcmd1bWVudHNbNF0gKj0gZmFjdG9yO1xuXHQgICAgXHRcdH1cblx0ICAgIFx0XHRcblx0ICAgICAgICBcdGRyYXdJbWFnZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyBcblx0ICAgIFx0fTtcblx0XHR9XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgd2hldGhlciB0aGUgdXNlcidzIGJyb3dzZXIgc3VwcG9ydHMgRGF0YSBVUkkgb3Igbm90XG5cdFx0ICogXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmU3VjY2VzcyBPY2N1cnMgaWYgaXQgc3VwcG9ydHMgRGF0YSBVUklcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmRmFpbCBPY2N1cnMgaWYgaXQgZG9lc24ndCBzdXBwb3J0IERhdGEgVVJJXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gX3NhZmVTZXREYXRhVVJJKGZTdWNjZXNzLCBmRmFpbCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2VsZi5fZkZhaWwgPSBmRmFpbDtcbiAgICAgICAgICAgIHNlbGYuX2ZTdWNjZXNzID0gZlN1Y2Nlc3M7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGl0IGp1c3Qgb25jZVxuICAgICAgICAgICAgaWYgKHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgdmFyIGZPbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9mRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZkZhaWwuY2FsbChzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGZPblN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fYlN1cHBvcnREYXRhVVJJID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fZlN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZWwub25hYm9ydCA9IGZPbkVycm9yO1xuICAgICAgICAgICAgICAgIGVsLm9uZXJyb3IgPSBmT25FcnJvcjtcbiAgICAgICAgICAgICAgICBlbC5vbmxvYWQgPSBmT25TdWNjZXNzO1xuICAgICAgICAgICAgICAgIGVsLnNyYyA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFGQ0FZQUFBQ05ieWJsQUFBQUhFbEVRVlFJMTJQNC8vOC93MzhHSUFYRElCS0UwREh4Z2xqTkJBQU85VFhMMFk0T0h3QUFBQUJKUlU1RXJrSmdnZz09XCI7IC8vIHRoZSBJbWFnZSBjb250YWlucyAxcHggZGF0YS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9PT0gdHJ1ZSAmJiBzZWxmLl9mU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGYuX2JTdXBwb3J0RGF0YVVSSSA9PT0gZmFsc2UgJiYgc2VsZi5fZkZhaWwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9mRmFpbC5jYWxsKHNlbGYpO1xuICAgICAgICAgICAgfVxuXHRcdH07XG5cdFx0XG5cdFx0LyoqXG5cdFx0ICogRHJhd2luZyBRUkNvZGUgYnkgdXNpbmcgY2FudmFzXG5cdFx0ICogXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gaHRPcHRpb24gUVJDb2RlIE9wdGlvbnMgXG5cdFx0ICovXG5cdFx0dmFyIERyYXdpbmcgPSBmdW5jdGlvbiAoZWwsIGh0T3B0aW9uKSB7XG4gICAgXHRcdHRoaXMuX2JJc1BhaW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0dGhpcy5fYW5kcm9pZCA9IF9nZXRBbmRyb2lkKCk7XG5cdFx0XG5cdFx0XHR0aGlzLl9odE9wdGlvbiA9IGh0T3B0aW9uO1xuXHRcdFx0dGhpcy5fZWxDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dGhpcy5fZWxDYW52YXMud2lkdGggPSBodE9wdGlvbi53aWR0aDtcblx0XHRcdHRoaXMuX2VsQ2FudmFzLmhlaWdodCA9IGh0T3B0aW9uLmhlaWdodDtcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRoaXMuX2VsQ2FudmFzKTtcblx0XHRcdHRoaXMuX2VsID0gZWw7XG5cdFx0XHR0aGlzLl9vQ29udGV4dCA9IHRoaXMuX2VsQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRcdHRoaXMuX2JJc1BhaW50ZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMuX2VsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdFx0dGhpcy5fZWxJbWFnZS5hbHQgPSBcIlNjYW4gbWUhXCI7XG5cdFx0XHR0aGlzLl9lbEltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLl9lbC5hcHBlbmRDaGlsZCh0aGlzLl9lbEltYWdlKTtcblx0XHRcdHRoaXMuX2JTdXBwb3J0RGF0YVVSSSA9IG51bGw7XG5cdFx0fTtcblx0XHRcdFxuXHRcdC8qKlxuXHRcdCAqIERyYXcgdGhlIFFSQ29kZVxuXHRcdCAqIFxuXHRcdCAqIEBwYXJhbSB7UVJDb2RlfSBvUVJDb2RlIFxuXHRcdCAqL1xuXHRcdERyYXdpbmcucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAob1FSQ29kZSkge1xuICAgICAgICAgICAgdmFyIF9lbEltYWdlID0gdGhpcy5fZWxJbWFnZTtcbiAgICAgICAgICAgIHZhciBfb0NvbnRleHQgPSB0aGlzLl9vQ29udGV4dDtcbiAgICAgICAgICAgIHZhciBfaHRPcHRpb24gPSB0aGlzLl9odE9wdGlvbjtcbiAgICAgICAgICAgIFxuXHRcdFx0dmFyIG5Db3VudCA9IG9RUkNvZGUuZ2V0TW9kdWxlQ291bnQoKTtcblx0XHRcdHZhciBuV2lkdGggPSBfaHRPcHRpb24ud2lkdGggLyBuQ291bnQ7XG5cdFx0XHR2YXIgbkhlaWdodCA9IF9odE9wdGlvbi5oZWlnaHQgLyBuQ291bnQ7XG5cdFx0XHR2YXIgblJvdW5kZWRXaWR0aCA9IE1hdGgucm91bmQobldpZHRoKTtcblx0XHRcdHZhciBuUm91bmRlZEhlaWdodCA9IE1hdGgucm91bmQobkhlaWdodCk7XG5cblx0XHRcdF9lbEltYWdlLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIik7XG5cdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0XHRcblx0XHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG5Db3VudDsgcm93KyspIHtcblx0XHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgbkNvdW50OyBjb2wrKykge1xuXHRcdFx0XHRcdHZhciBiSXNEYXJrID0gb1FSQ29kZS5pc0Rhcmsocm93LCBjb2wpO1xuXHRcdFx0XHRcdHZhciBuTGVmdCA9IGNvbCAqIG5XaWR0aDtcblx0XHRcdFx0XHR2YXIgblRvcCA9IHJvdyAqIG5IZWlnaHQ7XG5cdFx0XHRcdFx0X29Db250ZXh0LnN0cm9rZVN0eWxlID0gYklzRGFyayA/IF9odE9wdGlvbi5jb2xvckRhcmsgOiBfaHRPcHRpb24uY29sb3JMaWdodDtcblx0XHRcdFx0XHRfb0NvbnRleHQubGluZVdpZHRoID0gMTtcblx0XHRcdFx0XHRfb0NvbnRleHQuZmlsbFN0eWxlID0gYklzRGFyayA/IF9odE9wdGlvbi5jb2xvckRhcmsgOiBfaHRPcHRpb24uY29sb3JMaWdodDtcdFx0XHRcdFx0XG5cdFx0XHRcdFx0X29Db250ZXh0LmZpbGxSZWN0KG5MZWZ0LCBuVG9wLCBuV2lkdGgsIG5IZWlnaHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIOyViO2LsCDslajrpqzslrTsi7Eg67Cp7KeAIOyymOumrFxuXHRcdFx0XHRcdF9vQ29udGV4dC5zdHJva2VSZWN0KFxuXHRcdFx0XHRcdFx0TWF0aC5mbG9vcihuTGVmdCkgKyAwLjUsXG5cdFx0XHRcdFx0XHRNYXRoLmZsb29yKG5Ub3ApICsgMC41LFxuXHRcdFx0XHRcdFx0blJvdW5kZWRXaWR0aCxcblx0XHRcdFx0XHRcdG5Sb3VuZGVkSGVpZ2h0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRfb0NvbnRleHQuc3Ryb2tlUmVjdChcblx0XHRcdFx0XHRcdE1hdGguY2VpbChuTGVmdCkgLSAwLjUsXG5cdFx0XHRcdFx0XHRNYXRoLmNlaWwoblRvcCkgLSAwLjUsXG5cdFx0XHRcdFx0XHRuUm91bmRlZFdpZHRoLFxuXHRcdFx0XHRcdFx0blJvdW5kZWRIZWlnaHRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMuX2JJc1BhaW50ZWQgPSB0cnVlO1xuXHRcdH07XG5cdFx0XHRcblx0XHQvKipcblx0XHQgKiBNYWtlIHRoZSBpbWFnZSBmcm9tIENhbnZhcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBEYXRhIFVSSS5cblx0XHQgKi9cblx0XHREcmF3aW5nLnByb3RvdHlwZS5tYWtlSW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodGhpcy5fYklzUGFpbnRlZCkge1xuXHRcdFx0XHRfc2FmZVNldERhdGFVUkkuY2FsbCh0aGlzLCBfb25NYWtlSW1hZ2UpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0XHRcblx0XHQvKipcblx0XHQgKiBSZXR1cm4gd2hldGhlciB0aGUgUVJDb2RlIGlzIHBhaW50ZWQgb3Igbm90XG5cdFx0ICogXG5cdFx0ICogQHJldHVybiB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHREcmF3aW5nLnByb3RvdHlwZS5pc1BhaW50ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fYklzUGFpbnRlZDtcblx0XHR9O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIENsZWFyIHRoZSBRUkNvZGVcblx0XHQgKi9cblx0XHREcmF3aW5nLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuX29Db250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLl9lbENhbnZhcy53aWR0aCwgdGhpcy5fZWxDYW52YXMuaGVpZ2h0KTtcblx0XHRcdHRoaXMuX2JJc1BhaW50ZWQgPSBmYWxzZTtcblx0XHR9O1xuXHRcdFxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtOdW1iZXJ9IG5OdW1iZXJcblx0XHQgKi9cblx0XHREcmF3aW5nLnByb3RvdHlwZS5yb3VuZCA9IGZ1bmN0aW9uIChuTnVtYmVyKSB7XG5cdFx0XHRpZiAoIW5OdW1iZXIpIHtcblx0XHRcdFx0cmV0dXJuIG5OdW1iZXI7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHJldHVybiBNYXRoLmZsb29yKG5OdW1iZXIgKiAxMDAwKSAvIDEwMDA7XG5cdFx0fTtcblx0XHRcblx0XHRyZXR1cm4gRHJhd2luZztcblx0fSkoKTtcblx0XG5cdC8qKlxuXHQgKiBHZXQgdGhlIHR5cGUgYnkgc3RyaW5nIGxlbmd0aFxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHNUZXh0XG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBuQ29ycmVjdExldmVsXG5cdCAqIEByZXR1cm4ge051bWJlcn0gdHlwZVxuXHQgKi9cblx0ZnVuY3Rpb24gX2dldFR5cGVOdW1iZXIoc1RleHQsIG5Db3JyZWN0TGV2ZWwpIHtcdFx0XHRcblx0XHR2YXIgblR5cGUgPSAxO1xuXHRcdHZhciBsZW5ndGggPSBfZ2V0VVRGOExlbmd0aChzVGV4dCk7XG5cdFx0XG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IFFSQ29kZUxpbWl0TGVuZ3RoLmxlbmd0aDsgaSA8PSBsZW47IGkrKykge1xuXHRcdFx0dmFyIG5MaW1pdCA9IDA7XG5cdFx0XHRcblx0XHRcdHN3aXRjaCAobkNvcnJlY3RMZXZlbCkge1xuXHRcdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTCA6XG5cdFx0XHRcdFx0bkxpbWl0ID0gUVJDb2RlTGltaXRMZW5ndGhbaV1bMF07XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5NIDpcblx0XHRcdFx0XHRuTGltaXQgPSBRUkNvZGVMaW1pdExlbmd0aFtpXVsxXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLlEgOlxuXHRcdFx0XHRcdG5MaW1pdCA9IFFSQ29kZUxpbWl0TGVuZ3RoW2ldWzJdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSCA6XG5cdFx0XHRcdFx0bkxpbWl0ID0gUVJDb2RlTGltaXRMZW5ndGhbaV1bM107XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmIChsZW5ndGggPD0gbkxpbWl0KSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0blR5cGUrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYgKG5UeXBlID4gUVJDb2RlTGltaXRMZW5ndGgubGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUb28gbG9uZyBkYXRhXCIpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gblR5cGU7XG5cdH1cblxuXHRmdW5jdGlvbiBfZ2V0VVRGOExlbmd0aChzVGV4dCkge1xuXHRcdHZhciByZXBsYWNlZFRleHQgPSBlbmNvZGVVUkkoc1RleHQpLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwlWzAtOWEtZkEtRl17Mn0vZywgJ2EnKTtcblx0XHRyZXR1cm4gcmVwbGFjZWRUZXh0Lmxlbmd0aCArIChyZXBsYWNlZFRleHQubGVuZ3RoICE9IHNUZXh0ID8gMyA6IDApO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQGNsYXNzIFFSQ29kZVxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGV4YW1wbGUgXG5cdCAqIG5ldyBRUkNvZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0XCIpLCBcImh0dHA6Ly9qaW5kby5kZXYubmF2ZXIuY29tL2NvbGxpZVwiKTtcblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogdmFyIG9RUkNvZGUgPSBuZXcgUVJDb2RlKFwidGVzdFwiLCB7XG5cdCAqICAgIHRleHQgOiBcImh0dHA6Ly9uYXZlci5jb21cIixcblx0ICogICAgd2lkdGggOiAxMjgsXG5cdCAqICAgIGhlaWdodCA6IDEyOFxuXHQgKiB9KTtcblx0ICogXG5cdCAqIG9RUkNvZGUuY2xlYXIoKTsgLy8gQ2xlYXIgdGhlIFFSQ29kZS5cblx0ICogb1FSQ29kZS5tYWtlQ29kZShcImh0dHA6Ly9tYXAubmF2ZXIuY29tXCIpOyAvLyBSZS1jcmVhdGUgdGhlIFFSQ29kZS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxTdHJpbmd9IGVsIHRhcmdldCBlbGVtZW50IG9yICdpZCcgYXR0cmlidXRlIG9mIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdk9wdGlvblxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdk9wdGlvbi50ZXh0IFFSQ29kZSBsaW5rIGRhdGFcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt2T3B0aW9uLndpZHRoPTI1Nl1cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt2T3B0aW9uLmhlaWdodD0yNTZdXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbdk9wdGlvbi5jb2xvckRhcms9XCIjMDAwMDAwXCJdXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbdk9wdGlvbi5jb2xvckxpZ2h0PVwiI2ZmZmZmZlwiXVxuXHQgKiBAcGFyYW0ge1FSQ29kZS5Db3JyZWN0TGV2ZWx9IFt2T3B0aW9uLmNvcnJlY3RMZXZlbD1RUkNvZGUuQ29ycmVjdExldmVsLkhdIFtMfE18UXxIXSBcblx0ICovXG5cdFFSQ29kZSA9IGZ1bmN0aW9uIChlbCwgdk9wdGlvbikge1xuXHRcdHRoaXMuX2h0T3B0aW9uID0ge1xuXHRcdFx0d2lkdGggOiAyNTYsIFxuXHRcdFx0aGVpZ2h0IDogMjU2LFxuXHRcdFx0dHlwZU51bWJlciA6IDQsXG5cdFx0XHRjb2xvckRhcmsgOiBcIiMwMDAwMDBcIixcblx0XHRcdGNvbG9yTGlnaHQgOiBcIiNmZmZmZmZcIixcblx0XHRcdGNvcnJlY3RMZXZlbCA6IFFSRXJyb3JDb3JyZWN0TGV2ZWwuSFxuXHRcdH07XG5cdFx0XG5cdFx0aWYgKHR5cGVvZiB2T3B0aW9uID09PSAnc3RyaW5nJykge1xuXHRcdFx0dk9wdGlvblx0PSB7XG5cdFx0XHRcdHRleHQgOiB2T3B0aW9uXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRcblx0XHQvLyBPdmVyd3JpdGVzIG9wdGlvbnNcblx0XHRpZiAodk9wdGlvbikge1xuXHRcdFx0Zm9yICh2YXIgaSBpbiB2T3B0aW9uKSB7XG5cdFx0XHRcdHRoaXMuX2h0T3B0aW9uW2ldID0gdk9wdGlvbltpXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYgKHR5cGVvZiBlbCA9PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5faHRPcHRpb24udXNlU1ZHKSB7XG5cdFx0XHREcmF3aW5nID0gc3ZnRHJhd2VyO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLl9hbmRyb2lkID0gX2dldEFuZHJvaWQoKTtcblx0XHR0aGlzLl9lbCA9IGVsO1xuXHRcdHRoaXMuX29RUkNvZGUgPSBudWxsO1xuXHRcdHRoaXMuX29EcmF3aW5nID0gbmV3IERyYXdpbmcodGhpcy5fZWwsIHRoaXMuX2h0T3B0aW9uKTtcblx0XHRcblx0XHRpZiAodGhpcy5faHRPcHRpb24udGV4dCkge1xuXHRcdFx0dGhpcy5tYWtlQ29kZSh0aGlzLl9odE9wdGlvbi50ZXh0KTtcdFxuXHRcdH1cblx0fTtcblx0XG5cdC8qKlxuXHQgKiBNYWtlIHRoZSBRUkNvZGVcblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzVGV4dCBsaW5rIGRhdGFcblx0ICovXG5cdFFSQ29kZS5wcm90b3R5cGUubWFrZUNvZGUgPSBmdW5jdGlvbiAoc1RleHQpIHtcblx0XHR0aGlzLl9vUVJDb2RlID0gbmV3IFFSQ29kZU1vZGVsKF9nZXRUeXBlTnVtYmVyKHNUZXh0LCB0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpLCB0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpO1xuXHRcdHRoaXMuX29RUkNvZGUuYWRkRGF0YShzVGV4dCk7XG5cdFx0dGhpcy5fb1FSQ29kZS5tYWtlKCk7XG5cdFx0dGhpcy5fZWwudGl0bGUgPSBzVGV4dDtcblx0XHR0aGlzLl9vRHJhd2luZy5kcmF3KHRoaXMuX29RUkNvZGUpO1x0XHRcdFxuXHRcdHRoaXMubWFrZUltYWdlKCk7XG5cdH07XG5cdFxuXHQvKipcblx0ICogTWFrZSB0aGUgSW1hZ2UgZnJvbSBDYW52YXMgZWxlbWVudFxuXHQgKiAtIEl0IG9jY3VycyBhdXRvbWF0aWNhbGx5XG5cdCAqIC0gQW5kcm9pZCBiZWxvdyAzIGRvZXNuJ3Qgc3VwcG9ydCBEYXRhLVVSSSBzcGVjLlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICovXG5cdFFSQ29kZS5wcm90b3R5cGUubWFrZUltYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5fb0RyYXdpbmcubWFrZUltYWdlID09IFwiZnVuY3Rpb25cIiAmJiAoIXRoaXMuX2FuZHJvaWQgfHwgdGhpcy5fYW5kcm9pZCA+PSAzKSkge1xuXHRcdFx0dGhpcy5fb0RyYXdpbmcubWFrZUltYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRcblx0LyoqXG5cdCAqIENsZWFyIHRoZSBRUkNvZGVcblx0ICovXG5cdFFSQ29kZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5fb0RyYXdpbmcuY2xlYXIoKTtcblx0fTtcblx0XG5cdC8qKlxuXHQgKiBAbmFtZSBRUkNvZGUuQ29ycmVjdExldmVsXG5cdCAqL1xuXHRRUkNvZGUuQ29ycmVjdExldmVsID0gUVJFcnJvckNvcnJlY3RMZXZlbDtcbn0pKCk7XG5cbmlmIChtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBRUkNvZGU7XG59XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjhbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjhbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02OFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluV2FsbGV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1FSQ29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5Y2QzNmMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUVJDb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUVJDb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oeXFmaW4vcHVibGljX2h0bWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDk5Y2QzNmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDk5Y2QzNmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDk5Y2QzNmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1FSQ29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5Y2QzNmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDk5Y2QzNmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy92dWUtcXJjb2RlLWNvbXBvbmVudC9zcmMvUVJDb2RlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxyXG48dGVtcGxhdGU+XHJcbiAgICA8ZGl2PjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLWpzLXBhY2thZ2UvcXJjb2RlLmpzJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB0ZXh0OiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHNpemU6IHt0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogMjU2fSxcclxuICAgICAgICAgICAgY29sb3I6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSwgZGVmYXVsdDogJyMwMDAnfSxcclxuICAgICAgICAgICAgYmdDb2xvcjoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlLCBkZWZhdWx0OiAnI0ZGRid9LFxyXG4gICAgICAgICAgICBlcnJvckxldmVsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsIFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICdMJyB8fCB2YWx1ZSA9PT0gJ00nIHx8IHZhbHVlID09PSAnUScgfHwgdmFsdWUgPT09ICdIJ1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ0gnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VDb2RlKHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBxckNvZGU6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLnFyQ29kZSA9IG5ldyBRUkNvZGUodGhpcy4kZWwsIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yRGFyayA6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBjb2xvckxpZ2h0IDogdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgY29ycmVjdExldmVsIDogUVJDb2RlLkNvcnJlY3RMZXZlbFt0aGlzLmVycm9yTGV2ZWxdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXJDb2RlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ha2VDb2RlOiBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xckNvZGUubWFrZUNvZGUodGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFpbldhbGxldERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjlmODA2OWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbldhbGxldERldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01haW5XYWxsZXREZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01haW5XYWxsZXREZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9oeXFmaW4vcHVibGljX2h0bWwvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjlmODA2OWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjlmODA2OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjlmODA2OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01haW5XYWxsZXREZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZjgwNjllJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI5ZjgwNjllJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvc3JjL2NvbXBvbmVudHMvd2FsbGV0cy9NYWluV2FsbGV0RGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluV2FsbGV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5XYWxsZXREZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjhbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNjhbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC02OFswXS5ydWxlc1swXS51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluV2FsbGV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FSQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1FSQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbldhbGxldERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjlmODA2OWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgbWItMVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICBfdm0ucGxhdC50cmFkaW5nLnByYWN0aWNlICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgX3ZtLnBsYXQudHJhZGluZy5wcmFjdGljZSAhPSAxXG4gICAgICAgICAgICAgICAgPyBcIiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgOiBcIiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5zeW1ib2xcbiAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhdmF0YXItY29udGVudCBtZS0xIGQtbm9uZSBkLXNtLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiL2Fzc2V0cy9pbWFnZXMvY3J5cHRvQ3VycmVuY3kvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN5bWJvbC50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIi9tYXJrZXQvbm90aWZpY2F0aW9uLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF9jKFwidnVlLXNrZWxldG9uLWxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjQsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjQsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zeW1ib2xcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmdy1ib2xkIGZzLTQgZC1ub25lIGQtbGctYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zeW1ib2wpICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5hcGkgPT0gMVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udHlwZS50b1VwcGVyQ2FzZSgpKSArIFwiIFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIldhbGxldFwiKSkpLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJ2dWUtc2tlbGV0b24tbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtbm9uZSBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnBsYXQudHJhZGluZy5wcmFjdGljZSAhPSBudWxsICYmIF92bS5wbGF0LnRyYWRpbmcucHJhY3RpY2UgIT0gMVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1lLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNkZXBvc2l0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImJpIGJpLXdhbGxldDJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJEZXBvc2l0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXdhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiN3aXRoZHJhd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJiaSBiaS1qb3VybmFsLWFycm93LWRvd25cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIldpdGhkcmF3XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkIG1iLTBcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBvdmVyZmxvdzogXCJhdXRvXCIgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWJsZS1ob3Zlci1yb3dcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIldhbGxldCBUcmFuc2FjdGlvbnNcIikpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgXCJtaW4taGVpZ2h0XCI6IFwiNTd2aFwiLFxuICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjU3dmhcIixcbiAgICAgICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGVGaXhIZWFkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiVHlwZVwiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiSW5mb1wiKSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiVHJhbnNhY3Rpb25cIikpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0ubG9ncyAhPSBudWxsXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogX3ZtLmxvZ3MubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbiAoY2hhaW4sIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5fbChjaGFpbiwgZnVuY3Rpb24gKHRyeCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpICsgXCItXCIgKyBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXIgYmctbGlnaHQtcHJpbWFyeSByb3VuZGVkIGZsb2F0LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC1oZWlnaHRcIjogXCIzMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF2YXRhci1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50eXBlID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3MgZnMtMyBiaSBiaS13YWxsZXQyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRGVwb3NpdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRyeC50eXBlID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlciBmcy0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogXCJXaXRoZHJhd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiaSBiaS1jYXNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIkFtb3VudFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9Nb25leVwiKSh0cnguYW1vdW50LCA0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN5bWJvbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR5cGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJGZWVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjpcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0b01vbmV5XCIpKHRyeC5mZWUsIDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zeW1ib2wpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiUmVmZXJlbmNlIElEXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRyeC5yZWZfaWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiRGF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJ0b0RhdGVcIikodHJ4LmNyZWF0ZWQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT0gXCJFVEhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1pbmZvIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vZXRoZXJzY2FuLmlvL3R4L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR4aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiVmlld1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09IFwiQlNDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2JzY3NjYW4uY29tL3R4L1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ4LnR4aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiVmlld1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5ID09IFwiVFJPTlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gYnRuLXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly90cm9uc2Nhbi5vcmcvIy90cmFuc2FjdGlvbi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50eGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIlZpZXdcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PSBcIk1BVElDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90eC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50eGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIlZpZXdcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PSBcIktMQVlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1pbmZvIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vc2NvcGUua2xheXRuLmNvbS90eC9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeC50eGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS4kdChcIlZpZXdcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGtleSA9PSBcIkNFTE9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1pbmZvIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2Vsb3NjYW4uaW8vdHgvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cngudHhpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJWaWV3XCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LW11dGVkIHRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9hc3NldHMuc3RhdGljaW1nLmNvbS9wcm8vMi4wLjQvaW1hZ2VzL2VtcHR5LnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcIk5vIERhdGEgRm91bmRcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJkZXBvc2l0XCIsXG4gICAgICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcImRlcG9zaXRcIixcbiAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtbGdcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5hZGRyZXNzZXMgIT0gbnVsbFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtaGVhZGVyIGJnLXRyYW5zcGFyZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJTZWxlY3QgRGVwb3NpdCBOZXR3b3JrXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtZGlzbWlzc1wiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIiwgYXR0cnM6IHsgcm9sZTogXCJ0YWJsaXN0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZGRyZXNzZXMsIGZ1bmN0aW9uICh3YWxsZXQsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaW5kZXggPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXkgKyBcIi10YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtYnMtdG9nZ2xlXCI6IFwidGFiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLXRhcmdldFwiOiBcIiNcIiArIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhrZXkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFkZHJlc3NlcywgZnVuY3Rpb24gKHdhbGxldCwga2V5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBpbmRleCA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDoga2V5LCByb2xlOiBcInRhYnBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJvZHkgcGItMyBweC1zbS0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgY29sLW1kLTVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wtbGFiZWwgaDZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiVG9cIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInFyLWNvZGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB3YWxsZXQuYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2FsbGV0LmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy05IGNvbC1tZC03XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sLWxhYmVsIGg2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcjogXCJyZWNpZXZpbmdfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiV2FsbGV0IEFkZHJlc3NcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaWV2aW5nX2FkZHJlc3NcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogd2FsbGV0LmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gd2FsbGV0LmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJUcmFuc2ZlciBMaW1pdFwiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiVW5saW1pdGVkXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0Lmhhc19tZW1vID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5tZW1vICE9IFwiXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQubWVtbyAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIk1lbW9cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5tZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB3YWxsZXQubWVtb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIlRoaXMgaXMgYVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Moa2V5ID8ga2V5IDogXCJcIikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNoYWluIGFkZHJlc3MuIERvIG5vdCBzZW5kIGFueSBvdGhlciBDaGFpbiB0byB0aGlzIGFkZHJlc3Mgb3IgeW91ciBmdW5kcyBtYXkgYmUgbG9zdC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsIGZhZGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJ3aXRoZHJhd1wiLFxuICAgICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ3aXRoZHJhd1wiLFxuICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1sZ1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWhlYWRlciBiZy10cmFuc3BhcmVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJTZWxlY3QgV2l0aGRyYXcgTmV0d29ya1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWJzLWRpc21pc3NcIjogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiLCBhdHRyczogeyByb2xlOiBcInRhYmxpc3RcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZGRyZXNzZXMsIGZ1bmN0aW9uICh3YWxsZXQsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBpbmRleCA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXkgKyBcIi13aXRoZHJhdy10YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10b2dnbGVcIjogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1icy10YXJnZXRcIjogXCIjXCIgKyBrZXkgKyBcIi13aXRoZHJhd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGtleSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZGRyZXNzZXMsIGZ1bmN0aW9uICh3YWxsZXQsIGtleSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBpbmRleCA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBrZXkgKyBcIi13aXRoZHJhd1wiLCByb2xlOiBcInRhYnBhbmVsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFkZC1uZXctcmVjb3JkIG1vZGFsLWNvbnRlbnQgcHQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLldpdGhkcmF3KHdhbGxldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1ib2R5IHBiLTMgcHgtc20tM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sLWxhYmVsIGg2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIndhbGxldF9iYWxhbmNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiV2FsbGV0IEJhbGFuY2VcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5iYWxhbmNlICsgXCIgXCIgKyBfdm0uc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ3aXRoZHJhd19hZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiV2FsbGV0IEFkZHJlc3NcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud2l0aGRyYXdfYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwid2l0aGRyYXdfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLndpdGhkcmF3X2FkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndpdGhkcmF3X2FkZHJlc3MgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJteS0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImFtb3VudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJBbW91bnRcIikpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndpdGhkcmF3X2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3aXRoZHJhd19hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogd2FsbGV0LndpdGhkcmF3X21pbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IHdhbGxldC53aXRoZHJhd19taW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IHdhbGxldC53aXRoZHJhd19tYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53aXRoZHJhd19hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLndpdGhkcmF3X2Ftb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kdChcIk1pblwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI6XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2FybmluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidG9Nb25leVwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC53aXRoZHJhd19taW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJNYXhcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRvTW9uZXlcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxsZXQud2l0aGRyYXdfbWF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGxldC5oYXNfbWVtbyA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXktMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIm1lbW9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLiR0KFwiTWVtb1wiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ud2l0aGRyYXdfbWVtbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ3aXRoZHJhd19tZW1vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53aXRoZHJhd19tZW1vLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS53aXRoZHJhd19tZW1vID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG10LTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZmVlc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJGZWVzXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBkaXNhYmxlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FsbGV0LndpdGhkcmF3X2ZlZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlciB0ZXh0LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJHQoXCJXaXRoZHJhd1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbInByb3BzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ3YWwiLCJhZGRyZXNzZXMiLCJsb2dzIiwiZ25sIiwibG9hZGluZyIsImFwaSIsInBhdGhuYW1lIiwicGxhdCIsIm5ldHdvcmsiLCJ3aXRoZHJhd19hZGRyZXNzIiwid2l0aGRyYXdfYW1vdW50IiwidGltZXIiLCJtZXRob2RzIiwiZmV0Y2hEYXRhIiwicG9zdCIsInRoZW4iLCJmZXRjaFdhbGxldExvZ3MiLCJXaXRoZHJhdyIsImlkIiwic3ltYm9sIiwibWVtbyIsImFtb3VudCIsIiQiLCJjcmVhdGVkIiwibW91bnRlZCIsInJvdXRlciIsImNsZWFySW50ZXJ2YWwiLCJkZXN0cm95ZWQiXSwic291cmNlUm9vdCI6IiJ9