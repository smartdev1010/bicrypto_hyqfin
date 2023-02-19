"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_coincap_js"],{

/***/ "./resources/src/modules/bus.js":
/*!**************************************!*\
  !*** ./resources/src/modules/bus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bus)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Basic event bus class
 */
var Bus = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function Bus() {
    _classCallCheck(this, Bus);

    this._events = {};
  }
  /**
   * Register an event handler
   * @param {string}    name      Event name
   * @param {function}  callback  Event callback function
   */


  _createClass(Bus, [{
    key: "on",
    value: function on(name, callback) {
      if (!name || typeof name !== 'string') return;
      if (typeof callback !== 'function') return;
      if (!this._events.hasOwnProperty(name)) this._events[name] = [];

      this._events[name].push(callback);
    }
    /**
     * Emit an event by name (first arg) with rest of args passed to it
     */

  }, {
    key: "emit",
    value: function emit() {
      var args = Array.from(arguments);
      var name = args.length ? args.shift() : '';

      if (this._events.hasOwnProperty(name)) {
        for (var i = 0; i < this._events[name].length; ++i) {
          var cb = this._events[name][i];
          cb.apply(cb, args);
        }
      }

      args = undefined; // gc
    }
  }]);

  return Bus;
}();



/***/ }),

/***/ "./resources/src/modules/coincap.js":
/*!******************************************!*\
  !*** ./resources/src/modules/coincap.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coincap)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Handle talking to coincap.io to get coin related data
 * https://docs.coincap.io/
 */


var Coincap = /*#__PURE__*/function (_Bus) {
  _inherits(Coincap, _Bus);

  var _super = _createSuper(Coincap);

  /**
   * Constructor
   */
  function Coincap() {
    var _this;

    _classCallCheck(this, Coincap);

    _this = _super.call(this);
    _this._ajax = null;
    _this._coins = {};
    return _this;
  }
  /**
   * Set ajax module reference to use for requests
   */


  _createClass(Coincap, [{
    key: "useAjax",
    value: function useAjax(ajax) {
      this._ajax = ajax;
    }
    /**
     * Get tokens data object
     */

  }, {
    key: "getData",
    value: function getData() {
      return this._coins;
    }
    /**
     * fetch list of all tokens and their names from API
     */

  }, {
    key: "fetchAll",
    value: function fetchAll() {
      var _this2 = this;

      if (!this._ajax) return;

      this._ajax.get(cors + "https://api.coincap.io/v2/assets?limit=2000", {
        type: "json",
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader("Authorization", "Bearer t-7618a141-3c2f-425d-af06-46690c5f5539");
        },
        cache: 600,
        proxy: false,
        success: function success(xhr, status, res) {
          if (!res || !Array.isArray(res.data)) return;

          var _iterator = _createForOfIteratorHelper(res.data),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var c = _step.value;
              _this2._coins[c.symbol] = c;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this2.emit("allcoins", _this2._coins);
        }
      });
    }
    /**
     * Fetch market cap data for a token
     */

  }, {
    key: "fetchCoin",
    value: function fetchCoin(id, cb) {
      var _this3 = this;

      if (!this._ajax || !id) return;

      this._ajax.get(cors + "https://api.coincap.io/v2/assets?limit=2000", {
        type: "json",
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader("Authorization", "Bearer t-7618a141-3c2f-425d-af06-46690c5f5539");
        },
        cache: 300,
        proxy: false,
        success: function success(xhr, status, res) {
          if (!res || !res.data) return;
          if (typeof cb === "function") cb(res.data);

          _this3.emit("coindata", res.data);
        }
      });
    }
  }]);

  return Coincap;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfY29pbmNhcF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ3FCQTtFQUVuQjtBQUNGO0FBQ0E7RUFDRSxlQUFjO0lBQUE7O0lBQ1osS0FBS0MsT0FBTCxHQUFlLEVBQWY7RUFDRDtFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQXFCO01BQ25CLElBQUssQ0FBQ0QsSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBOUIsRUFBeUM7TUFDekMsSUFBSyxPQUFPQyxRQUFQLEtBQW9CLFVBQXpCLEVBQXNDO01BQ3RDLElBQUssQ0FBQyxLQUFLRixPQUFMLENBQWFHLGNBQWIsQ0FBNkJGLElBQTdCLENBQU4sRUFBNEMsS0FBS0QsT0FBTCxDQUFjQyxJQUFkLElBQXVCLEVBQXZCOztNQUM1QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsRUFBcUJHLElBQXJCLENBQTJCRixRQUEzQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsZ0JBQU87TUFDTCxJQUFJRyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFZQyxTQUFaLENBQVg7TUFDQSxJQUFJUCxJQUFJLEdBQUdJLElBQUksQ0FBQ0ksTUFBTCxHQUFjSixJQUFJLENBQUNLLEtBQUwsRUFBZCxHQUE2QixFQUF4Qzs7TUFFQSxJQUFLLEtBQUtWLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTCxFQUEyQztRQUN6QyxLQUFNLElBQUlVLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsS0FBS1gsT0FBTCxDQUFjQyxJQUFkLEVBQXFCUSxNQUExQyxFQUFrRCxFQUFFRSxDQUFwRCxFQUF3RDtVQUN0RCxJQUFJQyxFQUFFLEdBQUcsS0FBS1osT0FBTCxDQUFjQyxJQUFkLEVBQXNCVSxDQUF0QixDQUFUO1VBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFVRCxFQUFWLEVBQWNQLElBQWQ7UUFDRDtNQUNGOztNQUNEQSxJQUFJLEdBQUdTLFNBQVAsQ0FWSyxDQVVhO0lBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQzs7Ozs7RUFDakI7QUFDSjtBQUNBO0VBQ0ksbUJBQWM7SUFBQTs7SUFBQTs7SUFDVjtJQUNBLE1BQUtDLEtBQUwsR0FBYSxJQUFiO0lBQ0EsTUFBS0MsTUFBTCxHQUFjLEVBQWQ7SUFIVTtFQUliO0VBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLGlCQUFRQyxJQUFSLEVBQWM7TUFDVixLQUFLRixLQUFMLEdBQWFFLElBQWI7SUFDSDtJQUVEO0FBQ0o7QUFDQTs7OztXQUNJLG1CQUFVO01BQ04sT0FBTyxLQUFLRCxNQUFaO0lBQ0g7SUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxvQkFBVztNQUFBOztNQUNQLElBQUksQ0FBQyxLQUFLRCxLQUFWLEVBQWlCOztNQUNqQixLQUFLQSxLQUFMLENBQVdHLEdBQVgsQ0FBZUMsSUFBSSxHQUFHLDZDQUF0QixFQUFxRTtRQUNqRUMsSUFBSSxFQUFFLE1BRDJEO1FBRWpFQyxVQUFVLEVBQUUsb0JBQVVDLEdBQVYsRUFBZTtVQUN2QkEsR0FBRyxDQUFDQyxnQkFBSixDQUNJLGVBREosRUFFSSwrQ0FGSjtRQUlILENBUGdFO1FBUWpFQyxLQUFLLEVBQUUsR0FSMEQ7UUFTakVDLEtBQUssRUFBRSxLQVQwRDtRQVVqRUMsT0FBTyxFQUFFLGlCQUFDSixHQUFELEVBQU1LLE1BQU4sRUFBY0MsR0FBZCxFQUFzQjtVQUMzQixJQUFJLENBQUNBLEdBQUQsSUFBUSxDQUFDdkIsS0FBSyxDQUFDd0IsT0FBTixDQUFjRCxHQUFHLENBQUNFLElBQWxCLENBQWIsRUFBc0M7O1VBRFgsMkNBRWJGLEdBQUcsQ0FBQ0UsSUFGUztVQUFBOztVQUFBO1lBRTNCLG9EQUF3QjtjQUFBLElBQWZDLENBQWU7Y0FDcEIsTUFBSSxDQUFDZixNQUFMLENBQVllLENBQUMsQ0FBQ0MsTUFBZCxJQUF3QkQsQ0FBeEI7WUFDSDtVQUowQjtZQUFBO1VBQUE7WUFBQTtVQUFBOztVQUszQixNQUFJLENBQUNFLElBQUwsQ0FBVSxVQUFWLEVBQXNCLE1BQUksQ0FBQ2pCLE1BQTNCO1FBQ0g7TUFoQmdFLENBQXJFO0lBa0JIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksbUJBQVVrQixFQUFWLEVBQWN2QixFQUFkLEVBQWtCO01BQUE7O01BQ2QsSUFBSSxDQUFDLEtBQUtJLEtBQU4sSUFBZSxDQUFDbUIsRUFBcEIsRUFBd0I7O01BQ3hCLEtBQUtuQixLQUFMLENBQVdHLEdBQVgsQ0FBZUMsSUFBSSxHQUFHLDZDQUF0QixFQUFxRTtRQUNqRUMsSUFBSSxFQUFFLE1BRDJEO1FBRWpFQyxVQUFVLEVBQUUsb0JBQVVDLEdBQVYsRUFBZTtVQUN2QkEsR0FBRyxDQUFDQyxnQkFBSixDQUNJLGVBREosRUFFSSwrQ0FGSjtRQUlILENBUGdFO1FBUWpFQyxLQUFLLEVBQUUsR0FSMEQ7UUFTakVDLEtBQUssRUFBRSxLQVQwRDtRQVVqRUMsT0FBTyxFQUFFLGlCQUFDSixHQUFELEVBQU1LLE1BQU4sRUFBY0MsR0FBZCxFQUFzQjtVQUMzQixJQUFJLENBQUNBLEdBQUQsSUFBUSxDQUFDQSxHQUFHLENBQUNFLElBQWpCLEVBQXVCO1VBQ3ZCLElBQUksT0FBT25CLEVBQVAsS0FBYyxVQUFsQixFQUE4QkEsRUFBRSxDQUFDaUIsR0FBRyxDQUFDRSxJQUFMLENBQUY7O1VBQzlCLE1BQUksQ0FBQ0csSUFBTCxDQUFVLFVBQVYsRUFBc0JMLEdBQUcsQ0FBQ0UsSUFBMUI7UUFDSDtNQWRnRSxDQUFyRTtJQWdCSDs7OztFQXRFZ0NoQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9idXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2NvaW5jYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhc2ljIGV2ZW50IGJ1cyBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBuYW1lICAgICAgRXZlbnQgbmFtZVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgRXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbiggbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICBpZiAoICFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIGlmICggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgcmV0dXJuO1xyXG4gICAgaWYgKCAhdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB0aGlzLl9ldmVudHNbIG5hbWUgXSA9IFtdO1xyXG4gICAgdGhpcy5fZXZlbnRzWyBuYW1lIF0ucHVzaCggY2FsbGJhY2sgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgYnkgbmFtZSAoZmlyc3QgYXJnKSB3aXRoIHJlc3Qgb2YgYXJncyBwYXNzZWQgdG8gaXRcclxuICAgKi9cclxuICBlbWl0KCkge1xyXG4gICAgbGV0IGFyZ3MgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcclxuICAgIGxldCBuYW1lID0gYXJncy5sZW5ndGggPyBhcmdzLnNoaWZ0KCkgOiAnJztcclxuXHJcbiAgICBpZiAoIHRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkge1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHNbIG5hbWUgXS5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICBsZXQgY2IgPSB0aGlzLl9ldmVudHNbIG5hbWUgXVsgaSBdO1xyXG4gICAgICAgIGNiLmFwcGx5KCBjYiwgYXJncyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcmdzID0gdW5kZWZpbmVkOyAvLyBnY1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIEhhbmRsZSB0YWxraW5nIHRvIGNvaW5jYXAuaW8gdG8gZ2V0IGNvaW4gcmVsYXRlZCBkYXRhXG4gKiBodHRwczovL2RvY3MuY29pbmNhcC5pby9cbiAqL1xuaW1wb3J0IEJ1cyBmcm9tIFwiLi9idXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29pbmNhcCBleHRlbmRzIEJ1cyB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYWpheCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NvaW5zID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFqYXggbW9kdWxlIHJlZmVyZW5jZSB0byB1c2UgZm9yIHJlcXVlc3RzXG4gICAgICovXG4gICAgdXNlQWpheChhamF4KSB7XG4gICAgICAgIHRoaXMuX2FqYXggPSBhamF4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlbnMgZGF0YSBvYmplY3RcbiAgICAgKi9cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29pbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmV0Y2ggbGlzdCBvZiBhbGwgdG9rZW5zIGFuZCB0aGVpciBuYW1lcyBmcm9tIEFQSVxuICAgICAqL1xuICAgIGZldGNoQWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2FqYXgpIHJldHVybjtcbiAgICAgICAgdGhpcy5fYWpheC5nZXQoY29ycyArIFwiaHR0cHM6Ly9hcGkuY29pbmNhcC5pby92Mi9hc3NldHM/bGltaXQ9MjAwMFwiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQmVhcmVyIHQtNzYxOGExNDEtM2MyZi00MjVkLWFmMDYtNDY2OTBjNWY1NTM5XCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhY2hlOiA2MDAsXG4gICAgICAgICAgICBwcm94eTogZmFsc2UsXG4gICAgICAgICAgICBzdWNjZXNzOiAoeGhyLCBzdGF0dXMsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICFBcnJheS5pc0FycmF5KHJlcy5kYXRhKSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgb2YgcmVzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29pbnNbYy5zeW1ib2xdID0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYWxsY29pbnNcIiwgdGhpcy5fY29pbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggbWFya2V0IGNhcCBkYXRhIGZvciBhIHRva2VuXG4gICAgICovXG4gICAgZmV0Y2hDb2luKGlkLCBjYikge1xuICAgICAgICBpZiAoIXRoaXMuX2FqYXggfHwgIWlkKSByZXR1cm47XG4gICAgICAgIHRoaXMuX2FqYXguZ2V0KGNvcnMgKyBcImh0dHBzOi8vYXBpLmNvaW5jYXAuaW8vdjIvYXNzZXRzP2xpbWl0PTIwMDBcIiwge1xuICAgICAgICAgICAgdHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJlYXJlciB0LTc2MThhMTQxLTNjMmYtNDI1ZC1hZjA2LTQ2NjkwYzVmNTUzOVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWNoZTogMzAwLFxuICAgICAgICAgICAgcHJveHk6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKHhociwgc3RhdHVzLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIGNiKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJjb2luZGF0YVwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQnVzIiwiX2V2ZW50cyIsIm5hbWUiLCJjYWxsYmFjayIsImhhc093blByb3BlcnR5IiwicHVzaCIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzaGlmdCIsImkiLCJjYiIsImFwcGx5IiwidW5kZWZpbmVkIiwiQ29pbmNhcCIsIl9hamF4IiwiX2NvaW5zIiwiYWpheCIsImdldCIsImNvcnMiLCJ0eXBlIiwiYmVmb3JlU2VuZCIsInhociIsInNldFJlcXVlc3RIZWFkZXIiLCJjYWNoZSIsInByb3h5Iiwic3VjY2VzcyIsInN0YXR1cyIsInJlcyIsImlzQXJyYXkiLCJkYXRhIiwiYyIsInN5bWJvbCIsImVtaXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=