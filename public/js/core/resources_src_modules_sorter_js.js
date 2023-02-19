"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_sorter_js"],{

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

/***/ "./resources/src/modules/sorter.js":
/*!*****************************************!*\
  !*** ./resources/src/modules/sorter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sorter)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/src/modules/store.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
 * Helper module for sorting lists
 */



var Sorter = /*#__PURE__*/function (_Bus) {
  _inherits(Sorter, _Bus);

  var _super = _createSuper(Sorter);

  /**
   * Constructor
   */
  function Sorter(target) {
    var _this;

    _classCallCheck(this, Sorter);

    _this = _super.call(this);
    _this._key = 'list_sort_data';
    _this._lists = {};
    return _this;
  }
  /**
   * Save sort data to store
   */


  _createClass(Sorter, [{
    key: "saveData",
    value: function saveData() {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].setData(this._key, this._lists);
      this.emit('save', this._lists);
    }
    /**
     * Load sort data from store
     */

  }, {
    key: "loadData",
    value: function loadData() {
      var data = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getData(this._key);
      this._lists = data || this._lists;
      this.emit('load', this._lists);
    }
    /**
     *  Get all sort data
     */

  }, {
    key: "getData",
    value: function getData() {
      return this._lists;
    }
    /**
     * Set sort data for a key
     */

  }, {
    key: "setKey",
    value: function setKey(key, column, order, search) {
      column = String(column || 'id');
      order = String(order || 'asc');
      search = String(search || '');
      this._lists[key] = {
        column: column,
        order: order,
        search: search
      };
      return this._lists[key];
    }
    /**
     * Get sort data for a key
     */

  }, {
    key: "getKey",
    value: function getKey(key) {
      return this._lists[key] || null;
    }
    /**
     * Set new sort order for a key
     */

  }, {
    key: "sortOrder",
    value: function sortOrder(key, column, order) {
      var d = this._lists[key] || null;

      if (d) {
        if (column !== d.column) {
          d.order = order || 'asc';
        } else {
          d.order = d.order === 'asc' ? 'desc' : 'asc';
        }

        d.column = column;
      }

      this.emit('change', this._lists);
      this.saveData();
      return d;
    }
    /**
     * Apply search text for a key
     */

  }, {
    key: "setSearch",
    value: function setSearch(key, text) {
      var d = this._lists[key] || null;
      if (d) d.search = String(text || '').trim();
      this.emit('change', this._lists);
      return d;
    }
    /**
     * Check if sort column is active for a key
     */

  }, {
    key: "checkActive",
    value: function checkActive(key, column) {
      var d = this._lists[key] || null;
      if (d) return d.column === column;
      return false;
    }
    /**
     * Get css icon style for a key
     */

  }, {
    key: "getStyles",
    value: function getStyles(key, column) {
      var d = this._lists[key] || null;
      var c = column || d.column;
      if (d && c === d.column && d.order === 'asc') return 'icon-up';
      if (d && c === d.column && d.order === 'desc') return 'icon-down';
      return 'hidden';
    }
  }]);

  return Sorter;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/src/modules/store.js":
/*!****************************************!*\
  !*** ./resources/src/modules/store.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Web cache handler
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // local props
  _api: 'localStorage',
  _prefix: 'webcache_',
  _ttl: 0,
  // save data to cache
  setData: function setData(key, data, time) {
    return this._save(key, data, time);
  },
  // get saved data for a key as is
  getData: function getData(key) {
    this._clean();

    return this._fetch(key);
  },
  // delete saved data for key
  deleteData: function deleteData(key) {
    return this._delete(key);
  },
  // santizer for keys
  _key: function _key(key) {
    return this._prefix + String(key || '').replace(/[^\w]+/g, '_');
  },
  // error handler
  _error: function _error(e) {
    var _code = e.code | 0;

    var _name = e.name || 'UnknownError';

    var _info = e.message || 'Problem with ' + this._api + ' browser API.';

    console.error('StorageError (' + _code + '):', _info, '(' + _name + ').');
    return false;
  },
  // try saving the data and handle any errors
  _save: function _save(key, data, ttl) {
    try {
      var _store = window[this._api];

      var _key = this._key(key);

      var _time = Date.now();

      var _ttl = parseInt(ttl) || this._ttl;

      var _string = JSON.stringify({
        _time: _time,
        _ttl: _ttl,
        data: data
      });

      _store.setItem(_key, _string);

      return true;
    } catch (e) {
      return this._error(e);
    }
  },
  // try fetching data for key
  _fetch: function _fetch(key) {
    try {
      var _store = window[this._api];

      var _key = this._key(key);

      var _parsed = JSON.parse(_store.getItem(_key) || '{}');

      return _parsed && _parsed.data ? _parsed.data : null;
    } catch (e) {
      return this._error(e);
    }
  },
  // try deleting data by key
  _delete: function _delete(key) {
    try {
      var _store = window[this._api];

      var _key = this._key(key);

      _store.removeItem(_key);

      return true;
    } catch (e) {
      return this._error(e);
    }
  },
  // clean all expired items from storage
  _clean: function _clean() {
    try {
      var _store = window[this._api];

      var _time = Date.now(); // loop keys


      for (var i = 0; i < _store.length; i++) {
        // make sure it's a key managed by this object
        var _key = _store.key(i);

        if (_key.indexOf(this._prefix) < 0) continue; // get data for key

        var _data = JSON.parse(_store.getItem(_key) || '{}');

        if (!_data._time || !_data._ttl) continue; // need these
        // check if enough time has passed and delete key

        var _secs = (_time - _data._time) / 1000;

        if (_secs < _data._ttl) continue; // still fresh

        _store.removeItem(_key);
      }

      return true;
    } catch (e) {
      return this._error(e);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfc29ydGVyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0VBRW5CO0FBQ0Y7QUFDQTtFQUNFLGVBQWM7SUFBQTs7SUFDWixLQUFLQyxPQUFMLEdBQWUsRUFBZjtFQUNEO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDRSxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBcUI7TUFDbkIsSUFBSyxDQUFDRCxJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE5QixFQUF5QztNQUN6QyxJQUFLLE9BQU9DLFFBQVAsS0FBb0IsVUFBekIsRUFBc0M7TUFDdEMsSUFBSyxDQUFDLEtBQUtGLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTixFQUE0QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsSUFBdUIsRUFBdkI7O01BQzVDLEtBQUtELE9BQUwsQ0FBY0MsSUFBZCxFQUFxQkcsSUFBckIsQ0FBMkJGLFFBQTNCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxnQkFBTztNQUNMLElBQUlHLElBQUksR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVlDLFNBQVosQ0FBWDtNQUNBLElBQUlQLElBQUksR0FBR0ksSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ssS0FBTCxFQUFkLEdBQTZCLEVBQXhDOztNQUVBLElBQUssS0FBS1YsT0FBTCxDQUFhRyxjQUFiLENBQTZCRixJQUE3QixDQUFMLEVBQTJDO1FBQ3pDLEtBQU0sSUFBSVUsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBRyxLQUFLWCxPQUFMLENBQWNDLElBQWQsRUFBcUJRLE1BQTFDLEVBQWtELEVBQUVFLENBQXBELEVBQXdEO1VBQ3RELElBQUlDLEVBQUUsR0FBRyxLQUFLWixPQUFMLENBQWNDLElBQWQsRUFBc0JVLENBQXRCLENBQVQ7VUFDQUMsRUFBRSxDQUFDQyxL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WSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2J1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvc29ydGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQmFzaWMgZXZlbnQgYnVzIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXMge1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIG5hbWUgICAgICBFdmVudCBuYW1lXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICBFdmVudCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAqL1xyXG4gIG9uKCBuYW1lLCBjYWxsYmFjayApIHtcclxuICAgIGlmICggIW5hbWUgfHwgdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnICkgcmV0dXJuO1xyXG4gICAgaWYgKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSByZXR1cm47XHJcbiAgICBpZiAoICF0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHRoaXMuX2V2ZW50c1sgbmFtZSBdID0gW107XHJcbiAgICB0aGlzLl9ldmVudHNbIG5hbWUgXS5wdXNoKCBjYWxsYmFjayApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCBieSBuYW1lIChmaXJzdCBhcmcpIHdpdGggcmVzdCBvZiBhcmdzIHBhc3NlZCB0byBpdFxyXG4gICAqL1xyXG4gIGVtaXQoKSB7XHJcbiAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xyXG4gICAgbGV0IG5hbWUgPSBhcmdzLmxlbmd0aCA/IGFyZ3Muc2hpZnQoKSA6ICcnO1xyXG5cclxuICAgIGlmICggdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB7XHJcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuX2V2ZW50c1sgbmFtZSBdLmxlbmd0aDsgKytpICkge1xyXG4gICAgICAgIGxldCBjYiA9IHRoaXMuX2V2ZW50c1sgbmFtZSBdWyBpIF07XHJcbiAgICAgICAgY2IuYXBwbHkoIGNiLCBhcmdzICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFyZ3MgPSB1bmRlZmluZWQ7IC8vIGdjXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXIgbW9kdWxlIGZvciBzb3J0aW5nIGxpc3RzXHJcbiAqL1xyXG5pbXBvcnQgQnVzIGZyb20gJy4vYnVzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGVyIGV4dGVuZHMgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggdGFyZ2V0ICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2tleSA9ICdsaXN0X3NvcnRfZGF0YSc7XHJcbiAgICB0aGlzLl9saXN0cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2F2ZSBzb3J0IGRhdGEgdG8gc3RvcmVcclxuICAgKi9cclxuICBzYXZlRGF0YSgpIHtcclxuICAgIHN0b3JlLnNldERhdGEoIHRoaXMuX2tleSwgdGhpcy5fbGlzdHMgKTtcclxuICAgIHRoaXMuZW1pdCggJ3NhdmUnLCB0aGlzLl9saXN0cyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBzb3J0IGRhdGEgZnJvbSBzdG9yZVxyXG4gICAqL1xyXG4gIGxvYWREYXRhKCkge1xyXG4gICAgbGV0IGRhdGEgPSBzdG9yZS5nZXREYXRhKCB0aGlzLl9rZXkgKTtcclxuICAgIHRoaXMuX2xpc3RzID0gZGF0YSB8fCB0aGlzLl9saXN0cztcclxuICAgIHRoaXMuZW1pdCggJ2xvYWQnLCB0aGlzLl9saXN0cyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEdldCBhbGwgc29ydCBkYXRhXHJcbiAgICovXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saXN0cztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBzb3J0IGRhdGEgZm9yIGEga2V5XHJcbiAgICovXHJcbiAgc2V0S2V5KCBrZXksIGNvbHVtbiwgb3JkZXIsIHNlYXJjaCApIHtcclxuICAgIGNvbHVtbiA9IFN0cmluZyggY29sdW1uIHx8ICdpZCcgKTtcclxuICAgIG9yZGVyICA9IFN0cmluZyggb3JkZXIgfHwgJ2FzYycgKTtcclxuICAgIHNlYXJjaCA9IFN0cmluZyggc2VhcmNoIHx8ICcnICk7XHJcbiAgICB0aGlzLl9saXN0c1sga2V5IF0gPSB7IGNvbHVtbiwgb3JkZXIsIHNlYXJjaCB9O1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RzWyBrZXkgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBzb3J0IGRhdGEgZm9yIGEga2V5XHJcbiAgICovXHJcbiAgZ2V0S2V5KCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdHNbIGtleSBdIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgbmV3IHNvcnQgb3JkZXIgZm9yIGEga2V5XHJcbiAgICovXHJcbiAgc29ydE9yZGVyKCBrZXksIGNvbHVtbiwgb3JkZXIgKSB7XHJcbiAgICBsZXQgZCA9IHRoaXMuX2xpc3RzWyBrZXkgXSB8fCBudWxsO1xyXG4gICAgaWYgKCBkICkge1xyXG4gICAgICBpZiAoIGNvbHVtbiAhPT0gZC5jb2x1bW4gKSB7IGQub3JkZXIgPSBvcmRlciB8fCAnYXNjJzsgfVxyXG4gICAgICBlbHNlIHsgZC5vcmRlciA9ICggZC5vcmRlciA9PT0gJ2FzYycgKSA/ICdkZXNjJyA6ICdhc2MnOyB9XHJcbiAgICAgIGQuY29sdW1uID0gY29sdW1uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCAnY2hhbmdlJywgdGhpcy5fbGlzdHMgKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIHJldHVybiBkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgc2VhcmNoIHRleHQgZm9yIGEga2V5XHJcbiAgICovXHJcbiAgc2V0U2VhcmNoKCBrZXksIHRleHQgKSB7XHJcbiAgICBsZXQgZCA9IHRoaXMuX2xpc3RzWyBrZXkgXSB8fCBudWxsO1xyXG4gICAgaWYgKCBkICkgZC5zZWFyY2ggPSBTdHJpbmcoIHRleHQgfHwgJycgKS50cmltKCk7XHJcbiAgICB0aGlzLmVtaXQoICdjaGFuZ2UnLCB0aGlzLl9saXN0cyApO1xyXG4gICAgcmV0dXJuIGQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBzb3J0IGNvbHVtbiBpcyBhY3RpdmUgZm9yIGEga2V5XHJcbiAgICovXHJcbiAgY2hlY2tBY3RpdmUoIGtleSwgY29sdW1uICkge1xyXG4gICAgbGV0IGQgPSB0aGlzLl9saXN0c1sga2V5IF0gfHwgbnVsbDtcclxuICAgIGlmICggZCApIHJldHVybiAoIGQuY29sdW1uID09PSBjb2x1bW4gKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBjc3MgaWNvbiBzdHlsZSBmb3IgYSBrZXlcclxuICAgKi9cclxuICBnZXRTdHlsZXMoIGtleSwgY29sdW1uICkge1xyXG4gICAgbGV0IGQgPSB0aGlzLl9saXN0c1sga2V5IF0gfHwgbnVsbDtcclxuICAgIGxldCBjID0gY29sdW1uIHx8IGQuY29sdW1uO1xyXG4gICAgaWYgKCBkICYmIGMgPT09IGQuY29sdW1uICYmIGQub3JkZXIgPT09ICdhc2MnICkgcmV0dXJuICdpY29uLXVwJztcclxuICAgIGlmICggZCAmJiBjID09PSBkLmNvbHVtbiAmJiBkLm9yZGVyID09PSAnZGVzYycgKSByZXR1cm4gJ2ljb24tZG93bic7XHJcbiAgICByZXR1cm4gJ2hpZGRlbic7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogV2ViIGNhY2hlIGhhbmRsZXJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIC8vIGxvY2FsIHByb3BzXHJcbiAgX2FwaSAgICA6ICdsb2NhbFN0b3JhZ2UnLFxyXG4gIF9wcmVmaXggOiAnd2ViY2FjaGVfJyxcclxuICBfdHRsICAgIDogMCxcclxuXHJcbiAgLy8gc2F2ZSBkYXRhIHRvIGNhY2hlXHJcbiAgc2V0RGF0YSgga2V5LCBkYXRhLCB0aW1lICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NhdmUoIGtleSwgZGF0YSwgdGltZSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGdldCBzYXZlZCBkYXRhIGZvciBhIGtleSBhcyBpc1xyXG4gIGdldERhdGEoIGtleSApIHtcclxuICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2goIGtleSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGRlbGV0ZSBzYXZlZCBkYXRhIGZvciBrZXlcclxuICBkZWxldGVEYXRhKCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBzYW50aXplciBmb3Iga2V5c1xyXG4gIF9rZXkoIGtleSApIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVmaXggKyBTdHJpbmcoIGtleSB8fCAnJyApLnJlcGxhY2UoIC9bXlxcd10rL2csICdfJyApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGVycm9yIGhhbmRsZXJcclxuICBfZXJyb3IoIGUgKSB7XHJcbiAgICBsZXQgX2NvZGUgPSBlLmNvZGUgICAgfCAgMDtcclxuICAgIGxldCBfbmFtZSA9IGUubmFtZSAgICB8fCAnVW5rbm93bkVycm9yJztcclxuICAgIGxldCBfaW5mbyA9IGUubWVzc2FnZSB8fCAnUHJvYmxlbSB3aXRoICcgKyB0aGlzLl9hcGkgKycgYnJvd3NlciBBUEkuJyA7XHJcbiAgICBjb25zb2xlLmVycm9yKCAnU3RvcmFnZUVycm9yICgnKyBfY29kZSArJyk6JywgX2luZm8sICcoJysgX25hbWUgKycpLicgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICAvLyB0cnkgc2F2aW5nIHRoZSBkYXRhIGFuZCBoYW5kbGUgYW55IGVycm9yc1xyXG4gIF9zYXZlKCBrZXksIGRhdGEsIHR0bCApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3RpbWUgICA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IF90dGwgICAgPSBwYXJzZUludCggdHRsICkgfHwgdGhpcy5fdHRsO1xyXG4gICAgICBjb25zdCBfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoIHsgX3RpbWUsIF90dGwsIGRhdGEgfSApO1xyXG4gICAgICBfc3RvcmUuc2V0SXRlbSggX2tleSwgX3N0cmluZyApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGZldGNoaW5nIGRhdGEgZm9yIGtleVxyXG4gIF9mZXRjaCgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlICA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF9rZXkgICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBjb25zdCBfcGFyc2VkID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgIHJldHVybiAoIF9wYXJzZWQgJiYgX3BhcnNlZC5kYXRhICkgPyBfcGFyc2VkLmRhdGEgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyB0cnkgZGVsZXRpbmcgZGF0YSBieSBrZXlcclxuICBfZGVsZXRlKCBrZXkgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gY2xlYW4gYWxsIGV4cGlyZWQgaXRlbXMgZnJvbSBzdG9yYWdlXHJcbiAgX2NsZWFuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX3RpbWUgID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIC8vIGxvb3Aga2V5c1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBfc3RvcmUubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBpdCdzIGEga2V5IG1hbmFnZWQgYnkgdGhpcyBvYmplY3RcclxuICAgICAgICBjb25zdCBfa2V5ID0gX3N0b3JlLmtleSggaSApO1xyXG4gICAgICAgIGlmICggX2tleS5pbmRleE9mKCB0aGlzLl9wcmVmaXggKSA8IDAgKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGRhdGEgZm9yIGtleVxyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgICAgaWYgKCAhX2RhdGEuX3RpbWUgfHwgIV9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gbmVlZCB0aGVzZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIGFuZCBkZWxldGUga2V5XHJcbiAgICAgICAgY29uc3QgX3NlY3MgPSAoIF90aW1lIC0gX2RhdGEuX3RpbWUgKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKCBfc2VjcyA8IF9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gc3RpbGwgZnJlc2hcclxuICAgICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiQnVzIiwiX2V2ZW50cyIsIm5hbWUiLCJjYWxsYmFjayIsImhhc093blByb3BlcnR5IiwicHVzaCIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzaGlmdCIsImkiLCJjYiIsImFwcGx5IiwidW5kZWZpbmVkIiwic3RvcmUiLCJTb3J0ZXIiLCJ0YXJnZXQiLCJfa2V5IiwiX2xpc3RzIiwic2V0RGF0YSIsImVtaXQiLCJkYXRhIiwiZ2V0RGF0YSIsImtleSIsImNvbHVtbiIsIm9yZGVyIiwic2VhcmNoIiwiU3RyaW5nIiwiZCIsInNhdmVEYXRhIiwidGV4dCIsInRyaW0iLCJjIiwiX2FwaSIsIl9wcmVmaXgiLCJfdHRsIiwidGltZSIsIl9zYXZlIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJyZXBsYWNlIiwiX2Vycm9yIiwiZSIsIl9jb2RlIiwiY29kZSIsIl9uYW1lIiwiX2luZm8iLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwidHRsIiwiX3N0b3JlIiwid2luZG93IiwiX3RpbWUiLCJEYXRlIiwibm93IiwicGFyc2VJbnQiLCJfc3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJfcGFyc2VkIiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4T2YiLCJfZGF0YSIsIl9zZWNzIl0sInNvdXJjZVJvb3QiOiIifQ==