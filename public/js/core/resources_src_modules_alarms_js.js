(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_alarms_js"],{

/***/ "./resources/src/modules/alarms.js":
/*!*****************************************!*\
  !*** ./resources/src/modules/alarms.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alarms)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/src/modules/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./resources/src/modules/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
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
 * Price alarms helper class
 */




var Alarms = /*#__PURE__*/function (_Bus) {
  _inherits(Alarms, _Bus);

  var _super = _createSuper(Alarms);

  /**
   * Constructor
   */
  function Alarms(options) {
    var _this;

    _classCallCheck(this, Alarms);

    _this = _super.call(this);
    _this._alarms = [];
    _this._options = Object.assign({
      // key used for storage
      key: 'alarms_data' // ...

    }, options);
    return _this;
  }
  /**
   * Save current alarms data to store and emit list
   */


  _createClass(Alarms, [{
    key: "saveData",
    value: function saveData() {
      this.emit('update', this._alarms);
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].setData(this._options.key, this._alarms);
    }
    /**
     * Load saved history data from store
     */

  }, {
    key: "loadData",
    value: function loadData() {
      var data = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getData(this._options.key);
      if (!data || !Array.isArray(data)) return;
      this._alarms = data;
      this.emit('update', this._alarms);
    }
    /**
     * Get count of active alarms for a symbol
     * @param {string}  symbol  Pair symbol string
     */

  }, {
    key: "getCount",
    value: function getCount(symbol) {
      return this._alarms.filter(function (a) {
        return a.symbol === symbol && a.active;
      }).length;
    }
    /**
     * Adds an alarm for a pair
     * @param {object}  pairData  Pair data object from binance socket class
     * @param {number}  price     Alarm price
     */

  }, {
    key: "add",
    value: function add(pairData, price) {
      if (!pairData || !pairData.symbol || !pairData.close) return false;
      var symbol = pairData.symbol,
          token = pairData.token,
          asset = pairData.asset,
          pair = pairData.pair,
          image = pairData.image,
          close = pairData.close;
      close = parseFloat(close) || 0; // current price

      price = parseFloat(price) || 0; // alarm price

      if (!close || !price || close === price) return false;
      if (this.find(symbol, price).length) return false;
      var id = _utils__WEBPACK_IMPORTED_MODULE_2___default().randString(20);
      var time = Date.now();
      var active = true;
      var arrow = price > close ? '▲' : '▼';
      var sign = price > close ? '≥' : '≤';
      var check = price > close ? 'gain' : 'loss';
      var alarm = {
        id: id,
        time: time,
        active: active,
        arrow: arrow,
        sign: sign,
        check: check,
        symbol: symbol,
        token: token,
        asset: asset,
        pair: pair,
        image: image,
        close: close,
        price: price
      };

      this._alarms.push(alarm);

      this.saveData();
      return true;
    }
    /**
     * Find existing alarms for a symbol and price
     * @param {string}  symbol  Pair symbol string
     * @param {number}  price   Alarm price
     */

  }, {
    key: "find",
    value: function find(symbol, price) {
      price = parseFloat(price) || 0;
      return this._alarms.filter(function (a) {
        return a.symbol === symbol && a.price === price;
      });
    }
    /**
     * Remove an alarm from the list by ID
     * @param {string}  id  Unique alarm ID
     */

  }, {
    key: "remove",
    value: function remove(id) {
      if (!id || typeof id !== 'string') return;
      this._alarms = this._alarms.filter(function (a) {
        return a.id !== id;
      });
      this.saveData();
    }
    /**
     * Toggle status for an alarm by ID
     * @param {string}   id      Unique alarm ID
     * @param {boolean}  active  Alarm active status
     */

  }, {
    key: "toggle",
    value: function toggle(id, active) {
      if (!id || typeof id !== 'string') return;
      if (typeof active !== 'boolean') return;

      this._alarms.forEach(function (a) {
        if (a.id !== id) return;
        a.active = active;
      });

      this.saveData();
    }
    /**
     * Flush all alarms
     */

  }, {
    key: "flush",
    value: function flush() {
      this._alarms = [];
      this.saveData();
    }
    /**
     * Check price of a symbol against all saved alarms
     * @param {string}   symbol    Pair symbol string
     * @param {number}   close     Current pair close price
     * @param {function} callback  Callback handler
     */

  }, {
    key: "check",
    value: function check(symbol, close, callback) {
      var count = 0;

      for (var i = 0; i < this._alarms.length; ++i) {
        var a = this._alarms[i];
        var price = Number(a.price || 0);
        if (a.symbol !== symbol || !a.active) continue;
        if (a.check === 'loss' && close > price) continue;
        if (a.check === 'gain' && close < price) continue;
        var diff = 'equal to';
        if (close > price) diff = 'more than';
        if (close < price) diff = 'less than';
        var closeFixed = Number(close).toFixed(8);
        var priceFixed = Number(price).toFixed(8);
        var title = "".concat(a.symbol, " price ").concat(a.arrow, " ").concat(closeFixed, " ").concat(a.asset);
        var info = "".concat(a.symbol, " is now ").concat(diff, " your alarm price of ").concat(priceFixed, " ").concat(a.asset, ".");
        callback(title, info, a);
        a.active = false;
        count++;
      } // save alarms data if alarms were triggered


      if (count) this.saveData();
    }
  }]);

  return Alarms;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/src/modules/bus.js":
/*!**************************************!*\
  !*** ./resources/src/modules/bus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/src/modules/store.js":
/*!****************************************!*\
  !*** ./resources/src/modules/store.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./resources/src/modules/utils.js":
/*!****************************************!*\
  !*** ./resources/src/modules/utils.js ***!
  \****************************************/
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Common utils
 */
module.exports = {
  // convert url string into an anchor element (parser)
  parseUrl: function parseUrl(url, prop) {
    var link = document.createElement("a");
    link.href = url;
    var data = link[prop] || "";
    link = null;
    return data;
  },
  // convert URLs into clickable links
  linkUrl: function linkUrl(text) {
    return String(text || "").replace(/(https?\:\/\/[\w\-\.\?\=\&\%\/\#]+)/gi, '<a href="$1" target="_blank">$1</a>');
  },
  // convert html tags to text content
  stripHtml: function stripHtml(text, removeUrls) {
    var div = document.createElement("div");
    div.innerHTML = String(text || "");
    var output = String(div.textContent || div.innerText || "");
    if (removeUrls) output = output.replace(/(https?\:\/\/[\w\-\.\?\=\&\%\/\#]+)/gi, "");
    return output;
  },
  // convert relative path to full url
  fullUrl: function fullUrl(relpath) {
    if (/^([\w\-]+\:)?\/\/.*$/.test(relpath)) return relpath;
    var loc = window.location;
    var path = String(loc.pathname || "").replace(/\/+$/g, "");
    var rel = String(relpath || "").replace(/^\/+/g, "");
    return loc.protocol + "//" + loc.host + path + "/" + rel;
  },
  // play audio file
  playAudio: function playAudio(file, vol) {
    if (!file || typeof file !== "string") return; // normalize volume

    vol = parseFloat(vol) || 1;
    vol = vol > 1 ? vol / 100 : vol;
    vol = vol > 1 || vol < 0 ? 1 : vol; // load and play audio

    var audio = new Audio();
    audio.src = this.fullUrl(file);
    audio.volume = vol;
    audio.crossOrigin = "anonymous";
    audio.addEventListener("canplaythrough", function (e) {
      try {
        audio.play();
      } catch (err) {}
    });
    audio.load();
  },
  // copy text to clipboard
  copyText: function copyText(text) {
    var elm = document.createElement("input");
    document.body.appendChild(elm);
    elm.value = String(text || "").trim();
    elm.select();
    setTimeout(function () {
      return elm.remove();
    }, 1000);
    return document.execCommand("Copy");
  },
  // clamp a number between min and max
  clamp: function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
  },
  // cut part of a string
  limit: function limit(str, length, append) {
    str = String(str);
    length = parseInt(length) || 50;
    append = String(append || "");
    return str.length > length ? str.substring(0, length) + append : str;
  },
  // alway keep a string at a certain length
  fill: function fill(str, length, _char, append) {
    str = String(str);
    length = parseInt(length) || 20;
    _char = String(_char || " ");
    append = String(append || "");
    if (str.length > length) return str.substring(0, length - 3) + "...";
    return str + _char.repeat(length - str.length) + append;
  },
  // get noun word for a number
  noun: function noun(num, singular, plutal, append) {
    append = String(append || "");
    return String(num + " " + (parseFloat(num) === 1 ? singular : plutal) + " " + append).trim();
  },
  // format number to money
  money: function money(num, fixed) {
    num = parseFloat(num) || 0;
    fixed = parseInt(fixed) || 0;
    var o = {
      style: "decimal",
      minimumFractionDigits: fixed,
      maximumFractionDigits: fixed
    };
    return new Intl.NumberFormat("en-US", o).format(num);
  },

  /*money_ccxt(num, fixed) {
      num = parseFloat(num) || 0;
      fixed = parseInt(fixed) || 0;
      return ccxt.decimalToPrecision(
          num,
          ccxt.ROUND,
          fixed,
          ccxt.SIGNIFICANT_DIGITS,
          ccxt.PAD_WITH_ZERO
      );
  },*/
  // fixed numbers
  fixed: function fixed(num, decimals) {
    if (typeof decimals === "number") return Number(num).toFixed(decimals);
    if (/(USD|PAX|DAI)/.test(decimals)) return this.money(num, 3);
    return Number(num).toFixed(8);
  },
  // get info about how long something has been
  elapsed: function elapsed(secs, suffix, _short) {
    secs = parseInt(secs) || 0;
    if (_short && secs < 60) return "Just now";
    var list = [];
    var data = {
      M: Math.floor(secs / 2419200),
      w: Math.floor(secs / 604800 % 4),
      d: Math.floor(secs / 86400 % 7),
      h: Math.floor(secs / 3600 % 24),
      m: Math.floor(secs / 60 % 60)
    };
    if (!_short) data.s = Math.floor(secs % 60);
    Object.keys(data).forEach(function (k) {
      if (data[k]) list.push(data[k] + k);
    });
    if (suffix) list.push(suffix);
    return list.join(" ");
  },
  // get data about current date and time
  dateData: function dateData(time) {
    var now = Date.now();

    if (time) {
      // timestamp or datestring, keep as is
      if (typeof time === "number" || /^[\w\-\+\:]+$/.test(time)) {
        now = time;
      } // other string, assume timezone
      else if (typeof time === "string") {
        now = new Date().toLocaleString("en-US", {
          time: time
        });
      }
    }

    var _p = function _p(n) {
      return n < 10 ? "0" + n : "" + n;
    };

    var date = new Date(now);
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
    var year = date.getFullYear();

    var day = _p(date.getDate());

    var minute = _p(date.getMinutes());

    var second = _p(date.getSeconds());

    var fullh = date.getHours();
    var ampm = fullh > 12 ? "PM" : "AM";
    var hour = fullh > 12 ? fullh - 12 : fullh;
    hour = _p(hour === 0 ? 12 : hour);
    return {
      month: month,
      day: day,
      year: year,
      hour: hour,
      minute: minute,
      second: second,
      ampm: ampm
    };
  },
  // get readable date
  date: function date(time, full) {
    var _this$dateData = this.dateData(time),
        month = _this$dateData.month,
        day = _this$dateData.day,
        year = _this$dateData.year,
        hour = _this$dateData.hour,
        minute = _this$dateData.minute,
        second = _this$dateData.second,
        ampm = _this$dateData.ampm;

    var out = [month + "/" + day + "/" + year];
    if (full) out.push(hour + ":" + minute + ":" + second, ampm);
    return out.join(" ");
  },
  // get current time
  time: function time(_time) {
    var _this$dateData2 = this.dateData(_time),
        hour = _this$dateData2.hour,
        minute = _this$dateData2.minute,
        second = _this$dateData2.second,
        ampm = _this$dateData2.ampm;

    return hour + ":" + minute + ":" + second + " " + ampm;
  },
  // calculate percent change
  percent: function percent(current, last, toNum) {
    var isnum = Boolean(last > 0);
    var isup = Boolean(current >= last);
    var change = isup ? current - last : last - current;
    var percent = isnum ? change / last * 100.0 : 0.0;
    var sign = isup ? "+" : "-";
    var arrow = isup ? "▲" : "▼";
    var color = isup ? "green" : "red";
    if (toNum === true) return +Number(sign + percent).toFixed(3);
    return {
      change: change,
      percent: percent,
      sign: sign,
      arrow: arrow,
      color: color
    };
  },
  // calc chart points for given dimensions and values
  points: function points(width, height, values) {
    width = parseFloat(width) || 0;
    height = parseFloat(height) || 0;
    values = Array.isArray(values) ? values : [];
    values = values.map(function (n) {
      return parseFloat(n) || 0;
    });
    var min = values.reduce(function (min, val) {
      return val < min ? val : min;
    }, values[0]);
    var max = values.reduce(function (max, val) {
      return val > max ? val : max;
    }, values[0]);
    var len = values.length;
    var half = height / 2;
    var range = max > min ? max - min : height;
    var gap = len > 1 ? width / (len - 1) : 1;
    var out = [];

    for (var i = 0; i < len; ++i) {
      var d = values[i];
      var val = 2 * ((d - min) / range - 0.5);
      var x = i * gap;
      var y = -val * half * 0.8 + half;
      out.push({
        x: x,
        y: y
      });
    }

    return out;
  },
  // compute placement for an absolute box on the screen
  boxPosition: function boxPosition(triggerElm) {
    var top = true,
        right = false,
        bottom = false,
        left = true;

    if (triggerElm instanceof HTMLElement) {
      var box = triggerElm.getBoundingClientRect();
      var posx = box.left + triggerElm.offsetWidth / 2;
      var posy = box.top + triggerElm.offsetHeight / 2;
      var centerx = window.innerWidth / 2;
      var centery = window.innerHeight / 2;
      top = posy < centery ? true : false;
      right = posx > centerx ? true : false;
      bottom = posy > centery ? true : false;
      left = posx < centerx ? true : false;
      return {
        top: top,
        right: right,
        bottom: bottom,
        left: left
      };
    }
  },
  // check a key-press event for some common keys being pressed
  keyboard: function keyboard(e) {
    var code = e.keyCode || e.key || 0;
    var up = code === 38;
    var down = code === 40;
    var left = code === 37;
    var right = code === 39;
    var back = code === 8;
    var escape = code === 27;
    var space = code === 32;
    var enter = code === 13;
    return {
      up: up,
      down: down,
      left: left,
      right: right,
      back: back,
      escape: escape,
      space: space,
      enter: enter
    };
  },
  // shuffle an array
  shuffle: function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
      ;
    }

    return o;
  },
  // deep merge obj arguments
  deepMerge: function deepMerge() {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          if (_typeof(arguments[0][key]) === "object" && _typeof(arguments[i][key]) === "object") {
            this.deepMerge(arguments[0][key], arguments[i][key]);
          } else {
            arguments[0][key] = arguments[i][key];
          }
        }
      }
    }

    return arguments[0];
  },
  // search objects in a list by key and search text
  search: function search(list, key, text, fullword, fullcase) {
    text = String(text || "").replace(/[^\w\s\|]+/g, "");

    if (text.length > 1) {
      var search = fullword ? "\\b" + text.replace(/[\|]+/g, "\\b|\\b") + "\\b" : text;
      var options = fullcase ? "g" : "gi";
      var regex = new RegExp(search, options);
      var count = list.length;
      var output = [];

      while (count--) {
        if (String(list[count][key] || "").search(regex) < 0) continue;
        output.push(list[count]);
      }

      return output;
    }

    return list;
  },
  // sort objects in an array by a key
  sort: function sort(list, key, order, ignore) {
    return list.sort(function (a, b) {
      if (a.hasOwnProperty(key)) {
        var _a = a[key];
        var _b = b[key];

        if (ignore) {
          // sort strings using same case
          _a = typeof _a === "string" ? _a.toUpperCase() : _a;
          _b = typeof _b === "string" ? _b.toUpperCase() : _b;
        }

        if (order === "asc") {
          if (_a < _b) return -1;
          if (_a > _b) return 1;
        }

        if (order === "desc") {
          if (_a > _b) return -1;
          if (_a < _b) return 1;
        }
      }

      return 0;
    });
  },
  // remove items from the start of a list
  trimLeft: function trimLeft(list, max) {
    return list.length > max ? list.slice(list.length - max) : list;
  },
  // remove items from the end of a list
  trimRight: function trimRight(list, max) {
    return list.length > max ? list.slice(0, max) : list;
  },
  // create unique hash from a string
  unique: function unique(str) {
    str = String(str || "").replace(/[\r\n\t\s]+/g, " ").trim();
    var hash = 5381,
        i = str.length;

    while (--i) {
      hash = hash * 33 ^ str.charCodeAt(i);
    }

    return "unq_" + (hash >>> 0);
  },
  // random string for a given length
  randString: function randString(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var total = parseInt(length) || 10;
    var output = "";

    while (total) {
      output += chars.charAt(Math.floor(Math.random() * chars.length));
      total--;
    }

    return output;
  },
  // get a unique ID string that uses the current timestamp and a random value
  idString: function idString() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfYWxhcm1zX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJHOzs7OztFQUVuQjtBQUNGO0FBQ0E7RUFDRSxnQkFBYUMsT0FBYixFQUF1QjtJQUFBOztJQUFBOztJQUNyQjtJQUNBLE1BQUtDLE9BQUwsR0FBZ0IsRUFBaEI7SUFDQSxNQUFLQyxRQUFMLEdBQWdCQyxNQUFNLENBQUNDLE1BQVAsQ0FBZTtNQUM3QjtNQUNBQyxHQUFHLEVBQUUsYUFGd0IsQ0FHN0I7O0lBSDZCLENBQWYsRUFJYkwsT0FKYSxDQUFoQjtJQUhxQjtFQVF0QjtFQUVEO0FBQ0Y7QUFDQTs7Ozs7V0FDRSxvQkFBVztNQUNULEtBQUtNLElBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtMLE9BQTFCO01BQ0FKLHNEQUFBLENBQWUsS0FBS0ssUUFBTCxDQUFjRyxHQUE3QixFQUFrQyxLQUFLSixPQUF2QztJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0Usb0JBQVc7TUFDVCxJQUFJTyxJQUFJLEdBQUdYLHNEQUFBLENBQWUsS0FBS0ssUUFBTCxDQUFjRyxHQUE3QixDQUFYO01BQ0EsSUFBSyxDQUFDRyxJQUFELElBQVMsQ0FBQ0UsS0FBSyxDQUFDQyxPQUFOLENBQWVILElBQWYsQ0FBZixFQUF1QztNQUN2QyxLQUFLUCxPQUFMLEdBQWVPLElBQWY7TUFDQSxLQUFLRixJQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLTCxPQUExQjtJQUNEO0lBRUQ7QUFDRjtBQUNBO0FBQ0E7Ozs7V0FDRSxrQkFBVVcsTUFBVixFQUFtQjtNQUNqQixPQUFPLEtBQUtYLE9BQUwsQ0FBYVksTUFBYixDQUFxQixVQUFBQyxDQUFDO1FBQUEsT0FBTUEsQ0FBQyxDQUFDRixNQUFGLEtBQWFBLE1BQWIsSUFBdUJFLENBQUMsQ0FBQ0MsTUFBL0I7TUFBQSxD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LENBQU4sQ0FDRGxGLE9BREMsQ0FDTyxjQURQLEVBQ3VCLEdBRHZCLEVBRUR1RSxJQUZDLEVBQU47SUFHQSxJQUFJcUksSUFBSSxHQUFHLElBQVg7SUFBQSxJQUNJeE8sQ0FBQyxHQUFHOEcsR0FBRyxDQUFDdEksTUFEWjs7SUFFQSxPQUFPLEVBQUV3QixDQUFUO01BQVl3TyxJQUFJLEdBQUlBLElBQUksR0FBRyxFQUFSLEdBQWMxSCxHQUFHLENBQUMySCxVQUFKLENBQWV6TyxDQUFmLENBQXJCO0lBQVo7O0lBQ0EsT0FBTyxVQUFVd08sSUFBSSxLQUFLLENBQW5CLENBQVA7RUFDSCxDQS9YWTtFQWlZYjtFQUNBclAsVUFsWWEsc0JBa1lGWCxNQWxZRSxFQWtZTTtJQUNmLElBQUlrUSxLQUFLLEdBQ0wsZ0VBREo7SUFFQSxJQUFJQyxLQUFLLEdBQUdqTSxRQUFRLENBQUNsRSxNQUFELENBQVIsSUFBb0IsRUFBaEM7SUFDQSxJQUFJNkYsTUFBTSxHQUFHLEVBQWI7O0lBRUEsT0FBT3NLLEtBQVAsRUFBYztNQUNWdEssTUFBTSxJQUFJcUssS0FBSyxDQUFDRSxNQUFOLENBQWFoSSxJQUFJLENBQUMyQixLQUFMLENBQVczQixJQUFJLENBQUMwRyxNQUFMLEtBQWdCb0IsS0FBSyxDQUFDbFEsTUFBakMsQ0FBYixDQUFWO01BQ0FtUSxLQUFLO0lBQ1I7O0lBQ0QsT0FBT3RLLE1BQVA7RUFDSCxDQTdZWTtFQStZYjtFQUNBd0ssUUFoWmEsc0JBZ1pGO0lBQ1AsT0FBTyxDQUNIeFAsSUFBSSxDQUFDQyxHQUFMLEdBQVd3UCxRQUFYLENBQW9CLEVBQXBCLElBQTBCbEksSUFBSSxDQUFDMEcsTUFBTCxHQUFjd0IsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FEdkIsRUFFTFosV0FGSyxFQUFQO0VBR0g7QUFwWlksQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvYWxhcm1zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9idXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUHJpY2UgYWxhcm1zIGhlbHBlciBjbGFzc1xyXG4gKi9cclxuaW1wb3J0IEJ1cyBmcm9tICcuL2J1cyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxhcm1zIGV4dGVuZHMgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9hbGFybXMgID0gW107XHJcbiAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge1xyXG4gICAgICAvLyBrZXkgdXNlZCBmb3Igc3RvcmFnZVxyXG4gICAgICBrZXk6ICdhbGFybXNfZGF0YScsXHJcbiAgICAgIC8vIC4uLlxyXG4gICAgfSwgb3B0aW9ucyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2F2ZSBjdXJyZW50IGFsYXJtcyBkYXRhIHRvIHN0b3JlIGFuZCBlbWl0IGxpc3RcclxuICAgKi9cclxuICBzYXZlRGF0YSgpIHtcclxuICAgIHRoaXMuZW1pdCggJ3VwZGF0ZScsIHRoaXMuX2FsYXJtcyApO1xyXG4gICAgc3RvcmUuc2V0RGF0YSggdGhpcy5fb3B0aW9ucy5rZXksIHRoaXMuX2FsYXJtcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBzYXZlZCBoaXN0b3J5IGRhdGEgZnJvbSBzdG9yZVxyXG4gICAqL1xyXG4gIGxvYWREYXRhKCkge1xyXG4gICAgbGV0IGRhdGEgPSBzdG9yZS5nZXREYXRhKCB0aGlzLl9vcHRpb25zLmtleSApO1xyXG4gICAgaWYgKCAhZGF0YSB8fCAhQXJyYXkuaXNBcnJheSggZGF0YSApICkgcmV0dXJuO1xyXG4gICAgdGhpcy5fYWxhcm1zID0gZGF0YTtcclxuICAgIHRoaXMuZW1pdCggJ3VwZGF0ZScsIHRoaXMuX2FsYXJtcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGNvdW50IG9mIGFjdGl2ZSBhbGFybXMgZm9yIGEgc3ltYm9sXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBzeW1ib2wgIFBhaXIgc3ltYm9sIHN0cmluZ1xyXG4gICAqL1xyXG4gIGdldENvdW50KCBzeW1ib2wgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWxhcm1zLmZpbHRlciggYSA9PiAoIGEuc3ltYm9sID09PSBzeW1ib2wgJiYgYS5hY3RpdmUgKSApLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYW4gYWxhcm0gZm9yIGEgcGFpclxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgcGFpckRhdGEgIFBhaXIgZGF0YSBvYmplY3QgZnJvbSBiaW5hbmNlIHNvY2tldCBjbGFzc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJpY2UgICAgIEFsYXJtIHByaWNlXHJcbiAgICovXHJcbiAgYWRkKCBwYWlyRGF0YSwgcHJpY2UgKSB7XHJcbiAgICBpZiAoICFwYWlyRGF0YSB8fCAhcGFpckRhdGEuc3ltYm9sIHx8ICFwYWlyRGF0YS5jbG9zZSApIHJldHVybiBmYWxzZTtcclxuICAgIGxldCB7IHN5bWJvbCwgdG9rZW4sIGFzc2V0LCBwYWlyLCBpbWFnZSwgY2xvc2UgfSA9IHBhaXJEYXRhO1xyXG5cclxuICAgIGNsb3NlID0gcGFyc2VGbG9hdCggY2xvc2UgKSB8fCAwOyAvLyBjdXJyZW50IHByaWNlXHJcbiAgICBwcmljZSA9IHBhcnNlRmxvYXQoIHByaWNlICkgfHwgMDsgLy8gYWxhcm0gcHJpY2VcclxuXHJcbiAgICBpZiAoICFjbG9zZSB8fCAhcHJpY2UgfHwgY2xvc2UgPT09IHByaWNlICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKCB0aGlzLmZpbmQoIHN5bWJvbCwgcHJpY2UgKS5sZW5ndGggKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgbGV0IGlkICAgICA9IHV0aWxzLnJhbmRTdHJpbmcoIDIwICk7XHJcbiAgICBsZXQgdGltZSAgID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBhY3RpdmUgPSB0cnVlO1xyXG4gICAgbGV0IGFycm93ICA9ICggcHJpY2UgPiBjbG9zZSApID8gJ+KWsicgOiAn4pa8JztcclxuICAgIGxldCBzaWduICAgPSAoIHByaWNlID4gY2xvc2UgKSA/ICfiiaUnIDogJ+KJpCc7XHJcbiAgICBsZXQgY2hlY2sgID0gKCBwcmljZSA+IGNsb3NlICkgPyAnZ2FpbicgOiAnbG9zcyc7XHJcbiAgICBsZXQgYWxhcm0gID0geyBpZCwgdGltZSwgYWN0aXZlLCBhcnJvdywgc2lnbiwgY2hlY2ssIHN5bWJvbCwgdG9rZW4sIGFzc2V0LCBwYWlyLCBpbWFnZSwgY2xvc2UsIHByaWNlIH07XHJcblxyXG4gICAgdGhpcy5fYWxhcm1zLnB1c2goIGFsYXJtICk7XHJcbiAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgZXhpc3RpbmcgYWxhcm1zIGZvciBhIHN5bWJvbCBhbmQgcHJpY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHN5bWJvbCAgUGFpciBzeW1ib2wgc3RyaW5nXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmljZSAgIEFsYXJtIHByaWNlXHJcbiAgICovXHJcbiAgZmluZCggc3ltYm9sLCBwcmljZSApIHtcclxuICAgIHByaWNlID0gcGFyc2VGbG9hdCggcHJpY2UgKSB8fCAwO1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsYXJtcy5maWx0ZXIoIGEgPT4gKCBhLnN5bWJvbCA9PT0gc3ltYm9sICYmIGEucHJpY2UgPT09IHByaWNlICkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhbiBhbGFybSBmcm9tIHRoZSBsaXN0IGJ5IElEXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBpZCAgVW5pcXVlIGFsYXJtIElEXHJcbiAgICovXHJcbiAgcmVtb3ZlKCBpZCApIHtcclxuICAgIGlmICggIWlkIHx8IHR5cGVvZiBpZCAhPT0gJ3N0cmluZycgKSByZXR1cm47XHJcbiAgICB0aGlzLl9hbGFybXMgPSB0aGlzLl9hbGFybXMuZmlsdGVyKCBhID0+IGEuaWQgIT09IGlkICk7XHJcbiAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgc3RhdHVzIGZvciBhbiBhbGFybSBieSBJRFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgIGlkICAgICAgVW5pcXVlIGFsYXJtIElEXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgYWN0aXZlICBBbGFybSBhY3RpdmUgc3RhdHVzXHJcbiAgICovXHJcbiAgdG9nZ2xlKCBpZCwgYWN0aXZlICkge1xyXG4gICAgaWYgKCAhaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIGlmICggdHlwZW9mIGFjdGl2ZSAhPT0gJ2Jvb2xlYW4nICkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuX2FsYXJtcy5mb3JFYWNoKCBhID0+IHtcclxuICAgICAgaWYgKCBhLmlkICE9PSBpZCApIHJldHVybjtcclxuICAgICAgYS5hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsdXNoIGFsbCBhbGFybXNcclxuICAgKi9cclxuICBmbHVzaCgpIHtcclxuICAgIHRoaXMuX2FsYXJtcyA9IFtdO1xyXG4gICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgcHJpY2Ugb2YgYSBzeW1ib2wgYWdhaW5zdCBhbGwgc2F2ZWQgYWxhcm1zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgc3ltYm9sICAgIFBhaXIgc3ltYm9sIHN0cmluZ1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgIGNsb3NlICAgICBDdXJyZW50IHBhaXIgY2xvc2UgcHJpY2VcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgQ2FsbGJhY2sgaGFuZGxlclxyXG4gICAqL1xyXG4gIGNoZWNrKCBzeW1ib2wsIGNsb3NlLCBjYWxsYmFjayApIHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fYWxhcm1zLmxlbmd0aDsgKytpICkge1xyXG4gICAgICBsZXQgYSA9IHRoaXMuX2FsYXJtc1sgaSBdO1xyXG4gICAgICBsZXQgcHJpY2UgPSBOdW1iZXIoIGEucHJpY2UgfHwgMCApO1xyXG5cclxuICAgICAgaWYgKCBhLnN5bWJvbCAhPT0gc3ltYm9sIHx8ICFhLmFjdGl2ZSApIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoIGEuY2hlY2sgPT09ICdsb3NzJyAmJiBjbG9zZSA+IHByaWNlICkgY29udGludWU7XHJcbiAgICAgIGlmICggYS5jaGVjayA9PT0gJ2dhaW4nICYmIGNsb3NlIDwgcHJpY2UgKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGxldCBkaWZmID0gJ2VxdWFsIHRvJztcclxuICAgICAgaWYgKCBjbG9zZSA+IHByaWNlICkgZGlmZiA9ICdtb3JlIHRoYW4nO1xyXG4gICAgICBpZiAoIGNsb3NlIDwgcHJpY2UgKSBkaWZmID0gJ2xlc3MgdGhhbic7XHJcblxyXG4gICAgICBsZXQgY2xvc2VGaXhlZCA9IE51bWJlciggY2xvc2UgKS50b0ZpeGVkKCA4ICk7XHJcbiAgICAgIGxldCBwcmljZUZpeGVkID0gTnVtYmVyKCBwcmljZSApLnRvRml4ZWQoIDggKTtcclxuXHJcbiAgICAgIGxldCB0aXRsZSA9IGAke2Euc3ltYm9sfSBwcmljZSAke2EuYXJyb3d9ICR7Y2xvc2VGaXhlZH0gJHthLmFzc2V0fWA7XHJcbiAgICAgIGxldCBpbmZvICA9IGAke2Euc3ltYm9sfSBpcyBub3cgJHtkaWZmfSB5b3VyIGFsYXJtIHByaWNlIG9mICR7cHJpY2VGaXhlZH0gJHthLmFzc2V0fS5gO1xyXG5cclxuICAgICAgY2FsbGJhY2soIHRpdGxlLCBpbmZvLCBhICk7XHJcbiAgICAgIGEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIGNvdW50Kys7XHJcbiAgICB9XHJcbiAgICAvLyBzYXZlIGFsYXJtcyBkYXRhIGlmIGFsYXJtcyB3ZXJlIHRyaWdnZXJlZFxyXG4gICAgaWYgKCBjb3VudCApIHRoaXMuc2F2ZURhdGEoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBCYXNpYyBldmVudCBidXMgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZSAgICAgIEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb24oIG5hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgaWYgKCAhbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgKSByZXR1cm47XHJcbiAgICBpZiAoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHJldHVybjtcclxuICAgIGlmICggIXRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkgdGhpcy5fZXZlbnRzWyBuYW1lIF0gPSBbXTtcclxuICAgIHRoaXMuX2V2ZW50c1sgbmFtZSBdLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IGJ5IG5hbWUgKGZpcnN0IGFyZykgd2l0aCByZXN0IG9mIGFyZ3MgcGFzc2VkIHRvIGl0XHJcbiAgICovXHJcbiAgZW1pdCgpIHtcclxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XHJcbiAgICBsZXQgbmFtZSA9IGFyZ3MubGVuZ3RoID8gYXJncy5zaGlmdCgpIDogJyc7XHJcblxyXG4gICAgaWYgKCB0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHtcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzWyBuYW1lIF0ubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgICAgbGV0IGNiID0gdGhpcy5fZXZlbnRzWyBuYW1lIF1bIGkgXTtcclxuICAgICAgICBjYi5hcHBseSggY2IsIGFyZ3MgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJncyA9IHVuZGVmaW5lZDsgLy8gZ2NcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFdlYiBjYWNoZSBoYW5kbGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAvLyBsb2NhbCBwcm9wc1xyXG4gIF9hcGkgICAgOiAnbG9jYWxTdG9yYWdlJyxcclxuICBfcHJlZml4IDogJ3dlYmNhY2hlXycsXHJcbiAgX3R0bCAgICA6IDAsXHJcblxyXG4gIC8vIHNhdmUgZGF0YSB0byBjYWNoZVxyXG4gIHNldERhdGEoIGtleSwgZGF0YSwgdGltZSApIHtcclxuICAgIHJldHVybiB0aGlzLl9zYXZlKCBrZXksIGRhdGEsIHRpbWUgKTtcclxuICB9LFxyXG5cclxuICAvLyBnZXQgc2F2ZWQgZGF0YSBmb3IgYSBrZXkgYXMgaXNcclxuICBnZXREYXRhKCBrZXkgKSB7XHJcbiAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBkZWxldGUgc2F2ZWQgZGF0YSBmb3Iga2V5XHJcbiAgZGVsZXRlRGF0YSgga2V5ICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZSgga2V5ICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gc2FudGl6ZXIgZm9yIGtleXNcclxuICBfa2V5KCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4ICsgU3RyaW5nKCBrZXkgfHwgJycgKS5yZXBsYWNlKCAvW15cXHddKy9nLCAnXycgKTtcclxuICB9LFxyXG5cclxuICAvLyBlcnJvciBoYW5kbGVyXHJcbiAgX2Vycm9yKCBlICkge1xyXG4gICAgbGV0IF9jb2RlID0gZS5jb2RlICAgIHwgIDA7XHJcbiAgICBsZXQgX25hbWUgPSBlLm5hbWUgICAgfHwgJ1Vua25vd25FcnJvcic7XHJcbiAgICBsZXQgX2luZm8gPSBlLm1lc3NhZ2UgfHwgJ1Byb2JsZW0gd2l0aCAnICsgdGhpcy5fYXBpICsnIGJyb3dzZXIgQVBJLicgO1xyXG4gICAgY29uc29sZS5lcnJvciggJ1N0b3JhZ2VFcnJvciAoJysgX2NvZGUgKycpOicsIF9pbmZvLCAnKCcrIF9uYW1lICsnKS4nICk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IHNhdmluZyB0aGUgZGF0YSBhbmQgaGFuZGxlIGFueSBlcnJvcnNcclxuICBfc2F2ZSgga2V5LCBkYXRhLCB0dGwgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgICA9IHRoaXMuX2tleSgga2V5ICk7XHJcbiAgICAgIGNvbnN0IF90aW1lICAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCBfdHRsICAgID0gcGFyc2VJbnQoIHR0bCApIHx8IHRoaXMuX3R0bDtcclxuICAgICAgY29uc3QgX3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KCB7IF90aW1lLCBfdHRsLCBkYXRhIH0gKTtcclxuICAgICAgX3N0b3JlLnNldEl0ZW0oIF9rZXksIF9zdHJpbmcgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHRyeSBmZXRjaGluZyBkYXRhIGZvciBrZXlcclxuICBfZmV0Y2goIGtleSApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3BhcnNlZCA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICByZXR1cm4gKCBfcGFyc2VkICYmIF9wYXJzZWQuZGF0YSApID8gX3BhcnNlZC5kYXRhIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGRlbGV0aW5nIGRhdGEgYnkga2V5XHJcbiAgX2RlbGV0ZSgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIGNsZWFuIGFsbCBleHBpcmVkIGl0ZW1zIGZyb20gc3RvcmFnZVxyXG4gIF9jbGVhbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF90aW1lICA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAvLyBsb29wIGtleXNcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgX3N0b3JlLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgaXQncyBhIGtleSBtYW5hZ2VkIGJ5IHRoaXMgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgX2tleSA9IF9zdG9yZS5rZXkoIGkgKTtcclxuICAgICAgICBpZiAoIF9rZXkuaW5kZXhPZiggdGhpcy5fcHJlZml4ICkgPCAwICkgY29udGludWU7XHJcblxyXG4gICAgICAgIC8vIGdldCBkYXRhIGZvciBrZXlcclxuICAgICAgICBjb25zdCBfZGF0YSA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICAgIGlmICggIV9kYXRhLl90aW1lIHx8ICFfZGF0YS5fdHRsICkgY29udGludWU7IC8vIG5lZWQgdGhlc2VcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBhbmQgZGVsZXRlIGtleVxyXG4gICAgICAgIGNvbnN0IF9zZWNzID0gKCBfdGltZSAtIF9kYXRhLl90aW1lICkgLyAxMDAwO1xyXG4gICAgICAgIGlmICggX3NlY3MgPCBfZGF0YS5fdHRsICkgY29udGludWU7IC8vIHN0aWxsIGZyZXNoXHJcbiAgICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuIiwiLyoqXG4gKiBDb21tb24gdXRpbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gY29udmVydCB1cmwgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKHBhcnNlcilcbiAgICBwYXJzZVVybCh1cmwsIHByb3ApIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsZXQgZGF0YSA9IGxpbmtbcHJvcF0gfHwgXCJcIjtcbiAgICAgICAgbGluayA9IG51bGw7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IFVSTHMgaW50byBjbGlja2FibGUgbGlua3NcbiAgICBsaW5rVXJsKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoXG4gICAgICAgICAgICAvKGh0dHBzP1xcOlxcL1xcL1tcXHdcXC1cXC5cXD9cXD1cXCZcXCVcXC9cXCNdKykvZ2ksXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiQxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDE8L2E+J1xuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IGh0bWwgdGFncyB0byB0ZXh0IGNvbnRlbnRcbiAgICBzdHJpcEh0bWwodGV4dCwgcmVtb3ZlVXJscykge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gU3RyaW5nKGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8IFwiXCIpO1xuICAgICAgICBpZiAocmVtb3ZlVXJscylcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IHJlbGF0aXZlIHBhdGggdG8gZnVsbCB1cmxcbiAgICBmdWxsVXJsKHJlbHBhdGgpIHtcbiAgICAgICAgaWYgKC9eKFtcXHdcXC1dK1xcOik/XFwvXFwvLiokLy50ZXN0KHJlbHBhdGgpKSByZXR1cm4gcmVscGF0aDtcbiAgICAgICAgbGV0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgbGV0IHBhdGggPSBTdHJpbmcobG9jLnBhdGhuYW1lIHx8IFwiXCIpLnJlcGxhY2UoL1xcLyskL2csIFwiXCIpO1xuICAgICAgICBsZXQgcmVsID0gU3RyaW5nKHJlbHBhdGggfHwgXCJcIikucmVwbGFjZSgvXlxcLysvZywgXCJcIik7XG4gICAgICAgIHJldHVybiBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdCArIHBhdGggKyBcIi9cIiArIHJlbDtcbiAgICB9LFxuXG4gICAgLy8gcGxheSBhdWRpbyBmaWxlXG4gICAgcGxheUF1ZGlvKGZpbGUsIHZvbCkge1xuICAgICAgICBpZiAoIWZpbGUgfHwgdHlwZW9mIGZpbGUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgICAgLy8gbm9ybWFsaXplIHZvbHVtZVxuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCkgfHwgMTtcbiAgICAgICAgdm9sID0gdm9sID4gMSA/IHZvbCAvIDEwMCA6IHZvbDtcbiAgICAgICAgdm9sID0gdm9sID4gMSB8fCB2b2wgPCAwID8gMSA6IHZvbDtcbiAgICAgICAgLy8gbG9hZCBhbmQgcGxheSBhdWRpb1xuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgYXVkaW8uc3JjID0gdGhpcy5mdWxsVXJsKGZpbGUpO1xuICAgICAgICBhdWRpby52b2x1bWUgPSB2b2w7XG4gICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgfSk7XG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICB9LFxuXG4gICAgLy8gY29weSB0ZXh0IHRvIGNsaXBib2FyZFxuICAgIGNvcHlUZXh0KHRleHQpIHtcbiAgICAgICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICBlbG0udmFsdWUgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgIGVsbS5zZWxlY3QoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbG0ucmVtb3ZlKCksIDEwMDApO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgIH0sXG5cbiAgICAvLyBjbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgY2xhbXAobnVtLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xuICAgIH0sXG5cbiAgICAvLyBjdXQgcGFydCBvZiBhIHN0cmluZ1xuICAgIGxpbWl0KHN0ciwgbGVuZ3RoLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID4gbGVuZ3RoID8gc3RyLnN1YnN0cmluZygwLCBsZW5ndGgpICsgYXBwZW5kIDogc3RyO1xuICAgIH0sXG5cbiAgICAvLyBhbHdheSBrZWVwIGEgc3RyaW5nIGF0IGEgY2VydGFpbiBsZW5ndGhcbiAgICBmaWxsKHN0ciwgbGVuZ3RoLCBjaGFyLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMjA7XG4gICAgICAgIGNoYXIgPSBTdHJpbmcoY2hhciB8fCBcIiBcIik7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAzKSArIFwiLi4uXCI7XG4gICAgICAgIHJldHVybiBzdHIgKyBjaGFyLnJlcGVhdChsZW5ndGggLSBzdHIubGVuZ3RoKSArIGFwcGVuZDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IG5vdW4gd29yZCBmb3IgYSBudW1iZXJcbiAgICBub3VuKG51bSwgc2luZ3VsYXIsIHBsdXRhbCwgYXBwZW5kKSB7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBTdHJpbmcoXG4gICAgICAgICAgICBudW0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChudW0pID09PSAxID8gc2luZ3VsYXIgOiBwbHV0YWwpICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgYXBwZW5kXG4gICAgICAgICkudHJpbSgpO1xuICAgIH0sXG5cbiAgICAvLyBmb3JtYXQgbnVtYmVyIHRvIG1vbmV5XG4gICAgbW9uZXkobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgbGV0IG8gPSB7XG4gICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBmaXhlZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIG8pLmZvcm1hdChudW0pO1xuICAgIH0sXG5cbiAgICAvKm1vbmV5X2NjeHQobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgcmV0dXJuIGNjeHQuZGVjaW1hbFRvUHJlY2lzaW9uKFxuICAgICAgICAgICAgbnVtLFxuICAgICAgICAgICAgY2N4dC5ST1VORCxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgY2N4dC5TSUdOSUZJQ0FOVF9ESUdJVFMsXG4gICAgICAgICAgICBjY3h0LlBBRF9XSVRIX1pFUk9cbiAgICAgICAgKTtcbiAgICB9LCovXG5cbiAgICAvLyBmaXhlZCBudW1iZXJzXG4gICAgZml4ZWQobnVtLCBkZWNpbWFscykge1xuICAgICAgICBpZiAodHlwZW9mIGRlY2ltYWxzID09PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKG51bSkudG9GaXhlZChkZWNpbWFscyk7XG4gICAgICAgIGlmICgvKFVTRHxQQVh8REFJKS8udGVzdChkZWNpbWFscykpIHJldHVybiB0aGlzLm1vbmV5KG51bSwgMyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKDgpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgaW5mbyBhYm91dCBob3cgbG9uZyBzb21ldGhpbmcgaGFzIGJlZW5cbiAgICBlbGFwc2VkKHNlY3MsIHN1ZmZpeCwgc2hvcnQpIHtcbiAgICAgICAgc2VjcyA9IHBhcnNlSW50KHNlY3MpIHx8IDA7XG4gICAgICAgIGlmIChzaG9ydCAmJiBzZWNzIDwgNjApIHJldHVybiBcIkp1c3Qgbm93XCI7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgTTogTWF0aC5mbG9vcihzZWNzIC8gMjQxOTIwMCksXG4gICAgICAgICAgICB3OiBNYXRoLmZsb29yKChzZWNzIC8gNjA0ODAwKSAlIDQpLFxuICAgICAgICAgICAgZDogTWF0aC5mbG9vcigoc2VjcyAvIDg2NDAwKSAlIDcpLFxuICAgICAgICAgICAgaDogTWF0aC5mbG9vcigoc2VjcyAvIDM2MDApICUgMjQpLFxuICAgICAgICAgICAgbTogTWF0aC5mbG9vcigoc2VjcyAvIDYwKSAlIDYwKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFzaG9ydCkgZGF0YS5zID0gTWF0aC5mbG9vcihzZWNzICUgNjApO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtrXSkgbGlzdC5wdXNoKGRhdGFba10gKyBrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdWZmaXgpIGxpc3QucHVzaChzdWZmaXgpO1xuICAgICAgICByZXR1cm4gbGlzdC5qb2luKFwiIFwiKTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGRhdGEgYWJvdXQgY3VycmVudCBkYXRlIGFuZCB0aW1lXG4gICAgZGF0ZURhdGEodGltZSkge1xuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgLy8gdGltZXN0YW1wIG9yIGRhdGVzdHJpbmcsIGtlZXAgYXMgaXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGltZSA9PT0gXCJudW1iZXJcIiB8fCAvXltcXHdcXC1cXCtcXDpdKyQvLnRlc3QodGltZSkpIHtcbiAgICAgICAgICAgICAgICBub3cgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3RoZXIgc3RyaW5nLCBhc3N1bWUgdGltZXpvbmVcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgX3AgPSAobikgPT4gKG4gPCAxMCA/IFwiMFwiICsgbiA6IFwiXCIgKyBuKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgICAgICBsZXQgbW9udGggPSBbXG4gICAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF1bZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBkYXkgPSBfcChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIGxldCBtaW51dGUgPSBfcChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBfcChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgIGxldCBmdWxsaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgbGV0IGFtcG0gPSBmdWxsaCA+IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgICBsZXQgaG91ciA9IGZ1bGxoID4gMTIgPyBmdWxsaCAtIDEyIDogZnVsbGg7XG4gICAgICAgIGhvdXIgPSBfcChob3VyID09PSAwID8gMTIgOiBob3VyKTtcbiAgICAgICAgcmV0dXJuIHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IHJlYWRhYmxlIGRhdGVcbiAgICBkYXRlKHRpbWUsIGZ1bGwpIHtcbiAgICAgICAgbGV0IHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICBsZXQgb3V0ID0gW21vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXJdO1xuICAgICAgICBpZiAoZnVsbCkgb3V0LnB1c2goaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQsIGFtcG0pO1xuICAgICAgICByZXR1cm4gb3V0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgY3VycmVudCB0aW1lXG4gICAgdGltZSh0aW1lKSB7XG4gICAgICAgIGxldCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBhbXBtIH0gPSB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICByZXR1cm4gaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQgKyBcIiBcIiArIGFtcG07XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSBwZXJjZW50IGNoYW5nZVxuICAgIHBlcmNlbnQoY3VycmVudCwgbGFzdCwgdG9OdW0pIHtcbiAgICAgICAgbGV0IGlzbnVtID0gQm9vbGVhbihsYXN0ID4gMCk7XG4gICAgICAgIGxldCBpc3VwID0gQm9vbGVhbihjdXJyZW50ID49IGxhc3QpO1xuICAgICAgICBsZXQgY2hhbmdlID0gaXN1cCA/IGN1cnJlbnQgLSBsYXN0IDogbGFzdCAtIGN1cnJlbnQ7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaXNudW0gPyAoY2hhbmdlIC8gbGFzdCkgKiAxMDAuMCA6IDAuMDtcbiAgICAgICAgbGV0IHNpZ24gPSBpc3VwID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgbGV0IGFycm93ID0gaXN1cCA/IFwi4payXCIgOiBcIuKWvFwiO1xuICAgICAgICBsZXQgY29sb3IgPSBpc3VwID8gXCJncmVlblwiIDogXCJyZWRcIjtcbiAgICAgICAgaWYgKHRvTnVtID09PSB0cnVlKSByZXR1cm4gK051bWJlcihzaWduICsgcGVyY2VudCkudG9GaXhlZCgzKTtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlLCBwZXJjZW50LCBzaWduLCBhcnJvdywgY29sb3IgfTtcbiAgICB9LFxuXG4gICAgLy8gY2FsYyBjaGFydCBwb2ludHMgZm9yIGdpdmVuIGRpbWVuc2lvbnMgYW5kIHZhbHVlc1xuICAgIHBvaW50cyh3aWR0aCwgaGVpZ2h0LCB2YWx1ZXMpIHtcbiAgICAgICAgd2lkdGggPSBwYXJzZUZsb2F0KHdpZHRoKSB8fCAwO1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gdmFsdWVzIDogW107XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoKG4pID0+IHBhcnNlRmxvYXQobikgfHwgMCk7XG5cbiAgICAgICAgbGV0IG1pbiA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWluLCB2YWwpID0+ICh2YWwgPCBtaW4gPyB2YWwgOiBtaW4pLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBtYXggPSB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAgICAgKG1heCwgdmFsKSA9PiAodmFsID4gbWF4ID8gdmFsIDogbWF4KSxcbiAgICAgICAgICAgIHZhbHVlc1swXVxuICAgICAgICApO1xuICAgICAgICBsZXQgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgbGV0IGhhbGYgPSBoZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZ2UgPSBtYXggPiBtaW4gPyBtYXggLSBtaW4gOiBoZWlnaHQ7XG4gICAgICAgIGxldCBnYXAgPSBsZW4gPiAxID8gd2lkdGggLyAobGVuIC0gMSkgOiAxO1xuICAgICAgICBsZXQgb3V0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbGV0IGQgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICBsZXQgdmFsID0gMiAqICgoZCAtIG1pbikgLyByYW5nZSAtIDAuNSk7XG4gICAgICAgICAgICBsZXQgeCA9IGkgKiBnYXA7XG4gICAgICAgICAgICBsZXQgeSA9IC12YWwgKiBoYWxmICogMC44ICsgaGFsZjtcbiAgICAgICAgICAgIG91dC5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG5cbiAgICAvLyBjb21wdXRlIHBsYWNlbWVudCBmb3IgYW4gYWJzb2x1dGUgYm94IG9uIHRoZSBzY3JlZW5cbiAgICBib3hQb3NpdGlvbih0cmlnZ2VyRWxtKSB7XG4gICAgICAgIGxldCBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XSA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyRWxtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBib3ggPSB0cmlnZ2VyRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHBvc3ggPSBib3gubGVmdCArIHRyaWdnZXJFbG0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHBvc3kgPSBib3gudG9wICsgdHJpZ2dlckVsbS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgbGV0IGNlbnRlcnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIHRvcCA9IHBvc3kgPCBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmlnaHQgPSBwb3N4ID4gY2VudGVyeCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHBvc3kgPiBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgbGVmdCA9IHBvc3ggPCBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2hlY2sgYSBrZXktcHJlc3MgZXZlbnQgZm9yIHNvbWUgY29tbW9uIGtleXMgYmVpbmcgcHJlc3NlZFxuICAgIGtleWJvYXJkKGUpIHtcbiAgICAgICAgbGV0IGNvZGUgPSBlLmtleUNvZGUgfHwgZS5rZXkgfHwgMDtcbiAgICAgICAgbGV0IHVwID0gY29kZSA9PT0gMzg7XG4gICAgICAgIGxldCBkb3duID0gY29kZSA9PT0gNDA7XG4gICAgICAgIGxldCBsZWZ0ID0gY29kZSA9PT0gMzc7XG4gICAgICAgIGxldCByaWdodCA9IGNvZGUgPT09IDM5O1xuICAgICAgICBsZXQgYmFjayA9IGNvZGUgPT09IDg7XG4gICAgICAgIGxldCBlc2NhcGUgPSBjb2RlID09PSAyNztcbiAgICAgICAgbGV0IHNwYWNlID0gY29kZSA9PT0gMzI7XG4gICAgICAgIGxldCBlbnRlciA9IGNvZGUgPT09IDEzO1xuICAgICAgICByZXR1cm4geyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIGJhY2ssIGVzY2FwZSwgc3BhY2UsIGVudGVyIH07XG4gICAgfSxcblxuICAgIC8vIHNodWZmbGUgYW4gYXJyYXlcbiAgICBzaHVmZmxlKG8pIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBqLCB4LCBpID0gby5sZW5ndGg7XG4gICAgICAgICAgICBpO1xuICAgICAgICAgICAgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH0sXG5cbiAgICAvLyBkZWVwIG1lcmdlIG9iaiBhcmd1bWVudHNcbiAgICBkZWVwTWVyZ2UoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdW2tleV0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbaV1ba2V5XSA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcE1lcmdlKGFyZ3VtZW50c1swXVtrZXldLCBhcmd1bWVudHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1ba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfSxcblxuICAgIC8vIHNlYXJjaCBvYmplY3RzIGluIGEgbGlzdCBieSBrZXkgYW5kIHNlYXJjaCB0ZXh0XG4gICAgc2VhcmNoKGxpc3QsIGtleSwgdGV4dCwgZnVsbHdvcmQsIGZ1bGxjYXNlKSB7XG4gICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS5yZXBsYWNlKC9bXlxcd1xcc1xcfF0rL2csIFwiXCIpO1xuXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBmdWxsd29yZFxuICAgICAgICAgICAgICAgID8gXCJcXFxcYlwiICsgdGV4dC5yZXBsYWNlKC9bXFx8XSsvZywgXCJcXFxcYnxcXFxcYlwiKSArIFwiXFxcXGJcIlxuICAgICAgICAgICAgICAgIDogdGV4dDtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZnVsbGNhc2UgPyBcImdcIiA6IFwiZ2lcIjtcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFtdO1xuXG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgICAgICAgICAgIGlmIChTdHJpbmcobGlzdFtjb3VudF1ba2V5XSB8fCBcIlwiKS5zZWFyY2gocmVnZXgpIDwgMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gobGlzdFtjb3VudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gc29ydCBvYmplY3RzIGluIGFuIGFycmF5IGJ5IGEga2V5XG4gICAgc29ydChsaXN0LCBrZXksIG9yZGVyLCBpZ25vcmUpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBfYSA9IGFba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgX2IgPSBiW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgc3RyaW5ncyB1c2luZyBzYW1lIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgX2EgPSB0eXBlb2YgX2EgPT09IFwic3RyaW5nXCIgPyBfYS50b1VwcGVyQ2FzZSgpIDogX2E7XG4gICAgICAgICAgICAgICAgICAgIF9iID0gdHlwZW9mIF9iID09PSBcInN0cmluZ1wiID8gX2IudG9VcHBlckNhc2UoKSA6IF9iO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiYXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA+IF9iKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA8IF9iKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzdGFydCBvZiBhIGxpc3RcbiAgICB0cmltTGVmdChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZShsaXN0Lmxlbmd0aCAtIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyByZW1vdmUgaXRlbXMgZnJvbSB0aGUgZW5kIG9mIGEgbGlzdFxuICAgIHRyaW1SaWdodChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZSgwLCBtYXgpIDogbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlIHVuaXF1ZSBoYXNoIGZyb20gYSBzdHJpbmdcbiAgICB1bmlxdWUoc3RyKSB7XG4gICAgICAgIHN0ciA9IFN0cmluZyhzdHIgfHwgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXSsvZywgXCIgXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBsZXQgaGFzaCA9IDUzODEsXG4gICAgICAgICAgICBpID0gc3RyLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSkgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHJldHVybiBcInVucV9cIiArIChoYXNoID4+PiAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmFuZG9tIHN0cmluZyBmb3IgYSBnaXZlbiBsZW5ndGhcbiAgICByYW5kU3RyaW5nKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPVxuICAgICAgICAgICAgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuICAgICAgICBsZXQgdG90YWwgPSBwYXJzZUludChsZW5ndGgpIHx8IDEwO1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcblxuICAgICAgICB3aGlsZSAodG90YWwpIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgICAgICAgICB0b3RhbC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGdldCBhIHVuaXF1ZSBJRCBzdHJpbmcgdGhhdCB1c2VzIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhbmQgYSByYW5kb20gdmFsdWVcbiAgICBpZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpXG4gICAgICAgICkudG9VcHBlckNhc2UoKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJCdXMiLCJzdG9yZSIsInV0aWxzIiwiQWxhcm1zIiwib3B0aW9ucyIsIl9hbGFybXMiLCJfb3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImtleSIsImVtaXQiLCJzZXREYXRhIiwiZGF0YSIsImdldERhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJzeW1ib2wiLCJmaWx0ZXIiLCJhIiwiYWN0aXZlIiwibGVuZ3RoIiwicGFpckRhdGEiLCJwcmljZSIsImNsb3NlIiwidG9rZW4iLCJhc3NldCIsInBhaXIiLCJpbWFnZSIsInBhcnNlRmxvYXQiLCJmaW5kIiwiaWQiLCJyYW5kU3RyaW5nIiwidGltZSIsIkRhdGUiLCJub3ciLCJhcnJvdyIsInNpZ24iLCJjaGVjayIsImFsYXJtIiwicHVzaCIsInNhdmVEYXRhIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwiY291bnQiLCJpIiwiTnVtYmVyIiwiZGlmZiIsImNsb3NlRml4ZWQiLCJ0b0ZpeGVkIiwicHJpY2VGaXhlZCIsInRpdGxlIiwiaW5mbyIsIl9ldmVudHMiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJhcmdzIiwiZnJvbSIsImFyZ3VtZW50cyIsInNoaWZ0IiwiY2IiLCJhcHBseSIsInVuZGVmaW5lZCIsIl9hcGkiLCJfcHJlZml4IiwiX3R0bCIsIl9zYXZlIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJfa2V5IiwiU3RyaW5nIiwicmVwbGFjZSIsIl9lcnJvciIsImUiLCJfY29kZSIsImNvZGUiLCJfbmFtZSIsIl9pbmZvIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInR0bCIsIl9zdG9yZSIsIndpbmRvdyIsIl90aW1lIiwicGFyc2VJbnQiLCJfc3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJfcGFyc2VkIiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4T2YiLCJfZGF0YSIsIl9zZWNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhcnNlVXJsIiwidXJsIiwicHJvcCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwibGlua1VybCIsInRleHQiLCJzdHJpcEh0bWwiLCJyZW1vdmVVcmxzIiwiZGl2IiwiaW5uZXJIVE1MIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJmdWxsVXJsIiwicmVscGF0aCIsInRlc3QiLCJsb2MiLCJsb2NhdGlvbiIsInBhdGgiLCJwYXRobmFtZSIsInJlbCIsInByb3RvY29sIiwiaG9zdCIsInBsYXlBdWRpbyIsImZpbGUiLCJ2b2wiLCJhdWRpbyIsIkF1ZGlvIiwic3JjIiwidm9sdW1lIiwiY3Jvc3NPcmlnaW4iLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsImVyciIsImxvYWQiLCJjb3B5VGV4dCIsImVsbSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwidHJpbSIsInNlbGVjdCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJleGVjQ29tbWFuZCIsImNsYW1wIiwibnVtIiwibWluIiwibWF4IiwiTWF0aCIsImxpbWl0Iiwic3RyIiwiYXBwZW5kIiwic3Vic3RyaW5nIiwiZmlsbCIsImNoYXIiLCJyZXBlYXQiLCJub3VuIiwic2luZ3VsYXIiLCJwbHV0YWwiLCJtb25leSIsImZpeGVkIiwibyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImRlY2ltYWxzIiwiZWxhcHNlZCIsInNlY3MiLCJzdWZmaXgiLCJzaG9ydCIsImxpc3QiLCJNIiwiZmxvb3IiLCJ3IiwiZCIsImgiLCJtIiwicyIsImtleXMiLCJrIiwiam9pbiIsImRhdGVEYXRhIiwidG9Mb2NhbGVTdHJpbmciLCJfcCIsIm4iLCJkYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheSIsImdldERhdGUiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsImZ1bGxoIiwiZ2V0SG91cnMiLCJhbXBtIiwiaG91ciIsImZ1bGwiLCJvdXQiLCJwZXJjZW50IiwiY3VycmVudCIsImxhc3QiLCJ0b051bSIsImlzbnVtIiwiQm9vbGVhbiIsImlzdXAiLCJjaGFuZ2UiLCJjb2xvciIsInBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWVzIiwibWFwIiwicmVkdWNlIiwidmFsIiwibGVuIiwiaGFsZiIsInJhbmdlIiwiZ2FwIiwieCIsInkiLCJib3hQb3NpdGlvbiIsInRyaWdnZXJFbG0iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJIVE1MRWxlbWVudCIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBvc3giLCJvZmZzZXRXaWR0aCIsInBvc3kiLCJvZmZzZXRIZWlnaHQiLCJjZW50ZXJ4IiwiaW5uZXJXaWR0aCIsImNlbnRlcnkiLCJpbm5lckhlaWdodCIsImtleWJvYXJkIiwia2V5Q29kZSIsInVwIiwiZG93biIsImJhY2siLCJlc2NhcGUiLCJzcGFjZSIsImVudGVyIiwic2h1ZmZsZSIsImoiLCJyYW5kb20iLCJkZWVwTWVyZ2UiLCJzZWFyY2giLCJmdWxsd29yZCIsImZ1bGxjYXNlIiwicmVnZXgiLCJSZWdFeHAiLCJzb3J0Iiwib3JkZXIiLCJpZ25vcmUiLCJiIiwiX2EiLCJfYiIsInRvVXBwZXJDYXNlIiwidHJpbUxlZnQiLCJzbGljZSIsInRyaW1SaWdodCIsInVuaXF1ZSIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hhcnMiLCJ0b3RhbCIsImNoYXJBdCIsImlkU3RyaW5nIiwidG9TdHJpbmciLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9