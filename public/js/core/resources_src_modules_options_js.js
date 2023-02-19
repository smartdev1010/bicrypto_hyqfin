(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_options_js"],{

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

/***/ "./resources/src/modules/options.js":
/*!******************************************!*\
  !*** ./resources/src/modules/options.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Options)
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
 * App Options helper class
 */




var Options = /*#__PURE__*/function (_Bus) {
  _inherits(Options, _Bus);

  var _super = _createSuper(Options);

  /**
   * Constructor
   */
  function Options(options) {
    var _this;

    _classCallCheck(this, Options);

    _this = _super.call(this);
    _this._key = 'app_options_data';
    _this._options = {};

    _this.setOptions(options);

    return _this;
  }
  /**
   * Loads and sets saved data from store
   */


  _createClass(Options, [{
    key: "loadOptions",
    value: function loadOptions() {
      var options = _store__WEBPACK_IMPORTED_MODULE_1__["default"].getData(this._key);
      this.setOptions(options);
    }
    /**
     * Set new options data and save to store
     * @param {object}  options  Options object
     */

  }, {
    key: "saveOptions",
    value: function saveOptions(options) {
      this.setOptions(options);
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].setData(this._key, this._options);
    }
    /**
     * Set new options data and emit changes
     * @param {object}  options  Options object
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this._options = _utils__WEBPACK_IMPORTED_MODULE_2___default().deepMerge({}, this._options, options);
      this.emit('update', this._options);
    }
    /**
     * Get options by name, or all
     * @param {string}  key  Options object key
     * @param {*}       def  Optional default value
     */

  }, {
    key: "getOptions",
    value: function getOptions(key, def) {
      if (key && typeof key === 'string') {
        if (this._options.hasOwnProperty(key)) return this._options[key];
        return def;
      }

      return this._options;
    }
  }]);

  return Options;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfb3B0aW9uc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ3FCQTtFQUVuQjtBQUNGO0FBQ0E7RUFDRSxlQUFjO0lBQUE7O0lBQ1osS0FBS0MsT0FBTCxHQUFlLEVBQWY7RUFDRDtFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQXFCO01BQ25CLElBQUssQ0FBQ0QsSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBOUIsRUFBeUM7TUFDekMsSUFBSyxPQUFPQyxRQUFQLEtBQW9CLFVBQXpCLEVBQXNDO01BQ3RDLElBQUssQ0FBQyxLQUFLRixPQUFMLENBQWFHLGNBQWIsQ0FBNkJGLElBQTdCLENBQU4sRUFBNEMsS0FBS0QsT0FBTCxDQUFjQyxJQUFkLElBQXVCLEVBQXZCOztNQUM1QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsRUFBcUJHLElBQXJCLENBQTJCRixRQUEzQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsZ0JBQU87TUFDTCxJQUFJRyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFZQyxTQUFaLENBQVg7TUFDQSxJQUFJUCxJQUFJLEdBQUdJLElBQUksQ0FBQ0ksTUFBTCxHQUFjSixJQUFJLENBQUNLLEtBQUwsRUFBZCxHQUE2QixFQUF4Qzs7TUFFQSxJQUFLLEtBQUtWLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTCxFQUEyQztRQUN6QyxLQUFNLElBQUlVLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsS0FBS1gsT0FBTCxDQUFjQyxJQUFkLEVBQXFCUSxNQUExQyxFQUFrRCxFQUFFRSxDQUFwRCxFQUF3RDtVQUN0RCxJQUFJQyxFQUFFLEdBQUcsS0FBS1osT0FBTCxDQUFjQyxJQUFkLEVBQXNCVSxDQUF0QixDQUFUO1VBQ0FDLEVBQUUsQ0FBQ0Ms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QXFDLENBQXJDLENBRHZCLEVBRUxiLFdBRkssRUFBUDtFQUdIO0FBcFpZLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2J1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCYXNpYyBldmVudCBidXMgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZSAgICAgIEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb24oIG5hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgaWYgKCAhbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgKSByZXR1cm47XHJcbiAgICBpZiAoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHJldHVybjtcclxuICAgIGlmICggIXRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkgdGhpcy5fZXZlbnRzWyBuYW1lIF0gPSBbXTtcclxuICAgIHRoaXMuX2V2ZW50c1sgbmFtZSBdLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IGJ5IG5hbWUgKGZpcnN0IGFyZykgd2l0aCByZXN0IG9mIGFyZ3MgcGFzc2VkIHRvIGl0XHJcbiAgICovXHJcbiAgZW1pdCgpIHtcclxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XHJcbiAgICBsZXQgbmFtZSA9IGFyZ3MubGVuZ3RoID8gYXJncy5zaGlmdCgpIDogJyc7XHJcblxyXG4gICAgaWYgKCB0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHtcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzWyBuYW1lIF0ubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgICAgbGV0IGNiID0gdGhpcy5fZXZlbnRzWyBuYW1lIF1bIGkgXTtcclxuICAgICAgICBjYi5hcHBseSggY2IsIGFyZ3MgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJncyA9IHVuZGVmaW5lZDsgLy8gZ2NcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEFwcCBPcHRpb25zIGhlbHBlciBjbGFzc1xyXG4gKi9cclxuaW1wb3J0IEJ1cyBmcm9tICcuL2J1cyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyBleHRlbmRzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fa2V5ID0gJ2FwcF9vcHRpb25zX2RhdGEnO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyBhbmQgc2V0cyBzYXZlZCBkYXRhIGZyb20gc3RvcmVcclxuICAgKi9cclxuICBsb2FkT3B0aW9ucygpIHtcclxuICAgIGxldCBvcHRpb25zID0gc3RvcmUuZ2V0RGF0YSggdGhpcy5fa2V5ICk7XHJcbiAgICB0aGlzLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBuZXcgb3B0aW9ucyBkYXRhIGFuZCBzYXZlIHRvIHN0b3JlXHJcbiAgICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zICBPcHRpb25zIG9iamVjdFxyXG4gICAqL1xyXG4gIHNhdmVPcHRpb25zKCBvcHRpb25zICkge1xyXG4gICAgdGhpcy5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcbiAgICBzdG9yZS5zZXREYXRhKCB0aGlzLl9rZXksIHRoaXMuX29wdGlvbnMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBuZXcgb3B0aW9ucyBkYXRhIGFuZCBlbWl0IGNoYW5nZXNcclxuICAgKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnMgIE9wdGlvbnMgb2JqZWN0XHJcbiAgICovXHJcbiAgc2V0T3B0aW9ucyggb3B0aW9ucyApIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSB1dGlscy5kZWVwTWVyZ2UoIHt9LCB0aGlzLl9vcHRpb25zLCBvcHRpb25zICk7XHJcbiAgICB0aGlzLmVtaXQoICd1cGRhdGUnLCB0aGlzLl9vcHRpb25zICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgb3B0aW9ucyBieSBuYW1lLCBvciBhbGxcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGtleSAgT3B0aW9ucyBvYmplY3Qga2V5XHJcbiAgICogQHBhcmFtIHsqfSAgICAgICBkZWYgIE9wdGlvbmFsIGRlZmF1bHQgdmFsdWVcclxuICAgKi9cclxuICBnZXRPcHRpb25zKCBrZXksIGRlZiApIHtcclxuICAgIGlmICgga2V5ICYmIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICBpZiAoIHRoaXMuX29wdGlvbnMuaGFzT3duUHJvcGVydHkoIGtleSApICkgcmV0dXJuIHRoaXMuX29wdGlvbnNbIGtleSBdO1xyXG4gICAgICByZXR1cm4gZGVmO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogV2ViIGNhY2hlIGhhbmRsZXJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIC8vIGxvY2FsIHByb3BzXHJcbiAgX2FwaSAgICA6ICdsb2NhbFN0b3JhZ2UnLFxyXG4gIF9wcmVmaXggOiAnd2ViY2FjaGVfJyxcclxuICBfdHRsICAgIDogMCxcclxuXHJcbiAgLy8gc2F2ZSBkYXRhIHRvIGNhY2hlXHJcbiAgc2V0RGF0YSgga2V5LCBkYXRhLCB0aW1lICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NhdmUoIGtleSwgZGF0YSwgdGltZSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGdldCBzYXZlZCBkYXRhIGZvciBhIGtleSBhcyBpc1xyXG4gIGdldERhdGEoIGtleSApIHtcclxuICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2goIGtleSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGRlbGV0ZSBzYXZlZCBkYXRhIGZvciBrZXlcclxuICBkZWxldGVEYXRhKCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBzYW50aXplciBmb3Iga2V5c1xyXG4gIF9rZXkoIGtleSApIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVmaXggKyBTdHJpbmcoIGtleSB8fCAnJyApLnJlcGxhY2UoIC9bXlxcd10rL2csICdfJyApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGVycm9yIGhhbmRsZXJcclxuICBfZXJyb3IoIGUgKSB7XHJcbiAgICBsZXQgX2NvZGUgPSBlLmNvZGUgICAgfCAgMDtcclxuICAgIGxldCBfbmFtZSA9IGUubmFtZSAgICB8fCAnVW5rbm93bkVycm9yJztcclxuICAgIGxldCBfaW5mbyA9IGUubWVzc2FnZSB8fCAnUHJvYmxlbSB3aXRoICcgKyB0aGlzLl9hcGkgKycgYnJvd3NlciBBUEkuJyA7XHJcbiAgICBjb25zb2xlLmVycm9yKCAnU3RvcmFnZUVycm9yICgnKyBfY29kZSArJyk6JywgX2luZm8sICcoJysgX25hbWUgKycpLicgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICAvLyB0cnkgc2F2aW5nIHRoZSBkYXRhIGFuZCBoYW5kbGUgYW55IGVycm9yc1xyXG4gIF9zYXZlKCBrZXksIGRhdGEsIHR0bCApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3RpbWUgICA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IF90dGwgICAgPSBwYXJzZUludCggdHRsICkgfHwgdGhpcy5fdHRsO1xyXG4gICAgICBjb25zdCBfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoIHsgX3RpbWUsIF90dGwsIGRhdGEgfSApO1xyXG4gICAgICBfc3RvcmUuc2V0SXRlbSggX2tleSwgX3N0cmluZyApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGZldGNoaW5nIGRhdGEgZm9yIGtleVxyXG4gIF9mZXRjaCgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlICA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF9rZXkgICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBjb25zdCBfcGFyc2VkID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgIHJldHVybiAoIF9wYXJzZWQgJiYgX3BhcnNlZC5kYXRhICkgPyBfcGFyc2VkLmRhdGEgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyB0cnkgZGVsZXRpbmcgZGF0YSBieSBrZXlcclxuICBfZGVsZXRlKCBrZXkgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gY2xlYW4gYWxsIGV4cGlyZWQgaXRlbXMgZnJvbSBzdG9yYWdlXHJcbiAgX2NsZWFuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX3RpbWUgID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIC8vIGxvb3Aga2V5c1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBfc3RvcmUubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBpdCdzIGEga2V5IG1hbmFnZWQgYnkgdGhpcyBvYmplY3RcclxuICAgICAgICBjb25zdCBfa2V5ID0gX3N0b3JlLmtleSggaSApO1xyXG4gICAgICAgIGlmICggX2tleS5pbmRleE9mKCB0aGlzLl9wcmVmaXggKSA8IDAgKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGRhdGEgZm9yIGtleVxyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgICAgaWYgKCAhX2RhdGEuX3RpbWUgfHwgIV9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gbmVlZCB0aGVzZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIGFuZCBkZWxldGUga2V5XHJcbiAgICAgICAgY29uc3QgX3NlY3MgPSAoIF90aW1lIC0gX2RhdGEuX3RpbWUgKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKCBfc2VjcyA8IF9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gc3RpbGwgZnJlc2hcclxuICAgICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxufVxyXG4iLCIvKipcbiAqIENvbW1vbiB1dGlsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBjb252ZXJ0IHVybCBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAocGFyc2VyKVxuICAgIHBhcnNlVXJsKHVybCwgcHJvcCkge1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxldCBkYXRhID0gbGlua1twcm9wXSB8fCBcIlwiO1xuICAgICAgICBsaW5rID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgVVJMcyBpbnRvIGNsaWNrYWJsZSBsaW5rc1xuICAgIGxpbmtVcmwodGV4dCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRleHQgfHwgXCJcIikucmVwbGFjZShcbiAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgaHRtbCB0YWdzIHRvIHRleHQgY29udGVudFxuICAgIHN0cmlwSHRtbCh0ZXh0LCByZW1vdmVVcmxzKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gU3RyaW5nKHRleHQgfHwgXCJcIik7XG4gICAgICAgIGxldCBvdXRwdXQgPSBTdHJpbmcoZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgXCJcIik7XG4gICAgICAgIGlmIChyZW1vdmVVcmxzKVxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgLyhodHRwcz9cXDpcXC9cXC9bXFx3XFwtXFwuXFw/XFw9XFwmXFwlXFwvXFwjXSspL2dpLFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgcmVsYXRpdmUgcGF0aCB0byBmdWxsIHVybFxuICAgIGZ1bGxVcmwocmVscGF0aCkge1xuICAgICAgICBpZiAoL14oW1xcd1xcLV0rXFw6KT9cXC9cXC8uKiQvLnRlc3QocmVscGF0aCkpIHJldHVybiByZWxwYXRoO1xuICAgICAgICBsZXQgbG9jID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgICBsZXQgcGF0aCA9IFN0cmluZyhsb2MucGF0aG5hbWUgfHwgXCJcIikucmVwbGFjZSgvXFwvKyQvZywgXCJcIik7XG4gICAgICAgIGxldCByZWwgPSBTdHJpbmcocmVscGF0aCB8fCBcIlwiKS5yZXBsYWNlKC9eXFwvKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0ICsgcGF0aCArIFwiL1wiICsgcmVsO1xuICAgIH0sXG5cbiAgICAvLyBwbGF5IGF1ZGlvIGZpbGVcbiAgICBwbGF5QXVkaW8oZmlsZSwgdm9sKSB7XG4gICAgICAgIGlmICghZmlsZSB8fCB0eXBlb2YgZmlsZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgICAgICAvLyBub3JtYWxpemUgdm9sdW1lXG4gICAgICAgIHZvbCA9IHBhcnNlRmxvYXQodm9sKSB8fCAxO1xuICAgICAgICB2b2wgPSB2b2wgPiAxID8gdm9sIC8gMTAwIDogdm9sO1xuICAgICAgICB2b2wgPSB2b2wgPiAxIHx8IHZvbCA8IDAgPyAxIDogdm9sO1xuICAgICAgICAvLyBsb2FkIGFuZCBwbGF5IGF1ZGlvXG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICBhdWRpby5zcmMgPSB0aGlzLmZ1bGxVcmwoZmlsZSk7XG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbDtcbiAgICAgICAgYXVkaW8uY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICB9KTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgIH0sXG5cbiAgICAvLyBjb3B5IHRleHQgdG8gY2xpcGJvYXJkXG4gICAgY29weVRleHQodGV4dCkge1xuICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgIGVsbS52YWx1ZSA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgZWxtLnNlbGVjdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsbS5yZW1vdmUoKSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XG4gICAgfSxcblxuICAgIC8vIGNsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgICBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG4gICAgfSxcblxuICAgIC8vIGN1dCBwYXJ0IG9mIGEgc3RyaW5nXG4gICAgbGltaXQoc3RyLCBsZW5ndGgsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsZW5ndGggPyBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBhcHBlbmQgOiBzdHI7XG4gICAgfSxcblxuICAgIC8vIGFsd2F5IGtlZXAgYSBzdHJpbmcgYXQgYSBjZXJ0YWluIGxlbmd0aFxuICAgIGZpbGwoc3RyLCBsZW5ndGgsIGNoYXIsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCAyMDtcbiAgICAgICAgY2hhciA9IFN0cmluZyhjaGFyIHx8IFwiIFwiKTtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIDMpICsgXCIuLi5cIjtcbiAgICAgICAgcmV0dXJuIHN0ciArIGNoYXIucmVwZWF0KGxlbmd0aCAtIHN0ci5sZW5ndGgpICsgYXBwZW5kO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgbm91biB3b3JkIGZvciBhIG51bWJlclxuICAgIG5vdW4obnVtLCBzaW5ndWxhciwgcGx1dGFsLCBhcHBlbmQpIHtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhcbiAgICAgICAgICAgIG51bSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KG51bSkgPT09IDEgPyBzaW5ndWxhciA6IHBsdXRhbCkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBhcHBlbmRcbiAgICAgICAgKS50cmltKCk7XG4gICAgfSxcblxuICAgIC8vIGZvcm1hdCBudW1iZXIgdG8gbW9uZXlcbiAgICBtb25leShudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICBsZXQgbyA9IHtcbiAgICAgICAgICAgIHN0eWxlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZml4ZWQsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwgbykuZm9ybWF0KG51bSk7XG4gICAgfSxcblxuICAgIC8qbW9uZXlfY2N4dChudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICByZXR1cm4gY2N4dC5kZWNpbWFsVG9QcmVjaXNpb24oXG4gICAgICAgICAgICBudW0sXG4gICAgICAgICAgICBjY3h0LlJPVU5ELFxuICAgICAgICAgICAgZml4ZWQsXG4gICAgICAgICAgICBjY3h0LlNJR05JRklDQU5UX0RJR0lUUyxcbiAgICAgICAgICAgIGNjeHQuUEFEX1dJVEhfWkVST1xuICAgICAgICApO1xuICAgIH0sKi9cblxuICAgIC8vIGZpeGVkIG51bWJlcnNcbiAgICBmaXhlZChudW0sIGRlY2ltYWxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjaW1hbHMgPT09IFwibnVtYmVyXCIpIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgaWYgKC8oVVNEfFBBWHxEQUkpLy50ZXN0KGRlY2ltYWxzKSkgcmV0dXJuIHRoaXMubW9uZXkobnVtLCAzKTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihudW0pLnRvRml4ZWQoOCk7XG4gICAgfSxcblxuICAgIC8vIGdldCBpbmZvIGFib3V0IGhvdyBsb25nIHNvbWV0aGluZyBoYXMgYmVlblxuICAgIGVsYXBzZWQoc2Vjcywgc3VmZml4LCBzaG9ydCkge1xuICAgICAgICBzZWNzID0gcGFyc2VJbnQoc2VjcykgfHwgMDtcbiAgICAgICAgaWYgKHNob3J0ICYmIHNlY3MgPCA2MCkgcmV0dXJuIFwiSnVzdCBub3dcIjtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBNOiBNYXRoLmZsb29yKHNlY3MgLyAyNDE5MjAwKSxcbiAgICAgICAgICAgIHc6IE1hdGguZmxvb3IoKHNlY3MgLyA2MDQ4MDApICUgNCksXG4gICAgICAgICAgICBkOiBNYXRoLmZsb29yKChzZWNzIC8gODY0MDApICUgNyksXG4gICAgICAgICAgICBoOiBNYXRoLmZsb29yKChzZWNzIC8gMzYwMCkgJSAyNCksXG4gICAgICAgICAgICBtOiBNYXRoLmZsb29yKChzZWNzIC8gNjApICUgNjApLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXNob3J0KSBkYXRhLnMgPSBNYXRoLmZsb29yKHNlY3MgJSA2MCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW2tdKSBsaXN0LnB1c2goZGF0YVtrXSArIGspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1ZmZpeCkgbGlzdC5wdXNoKHN1ZmZpeCk7XG4gICAgICAgIHJldHVybiBsaXN0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgZGF0YSBhYm91dCBjdXJyZW50IGRhdGUgYW5kIHRpbWVcbiAgICBkYXRlRGF0YSh0aW1lKSB7XG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICAvLyB0aW1lc3RhbXAgb3IgZGF0ZXN0cmluZywga2VlcCBhcyBpc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lID09PSBcIm51bWJlclwiIHx8IC9eW1xcd1xcLVxcK1xcOl0rJC8udGVzdCh0aW1lKSkge1xuICAgICAgICAgICAgICAgIG5vdyA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdGhlciBzdHJpbmcsIGFzc3VtZSB0aW1lem9uZVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRpbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBfcCA9IChuKSA9PiAobiA8IDEwID8gXCIwXCIgKyBuIDogXCJcIiArIG4pO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG5vdyk7XG4gICAgICAgIGxldCBtb250aCA9IFtcbiAgICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXVtkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IGRheSA9IF9wKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IF9wKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IF9wKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgbGV0IGZ1bGxoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBsZXQgYW1wbSA9IGZ1bGxoID4gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICAgIGxldCBob3VyID0gZnVsbGggPiAxMiA/IGZ1bGxoIC0gMTIgOiBmdWxsaDtcbiAgICAgICAgaG91ciA9IF9wKGhvdXIgPT09IDAgPyAxMiA6IGhvdXIpO1xuICAgICAgICByZXR1cm4geyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9O1xuICAgIH0sXG5cbiAgICAvLyBnZXQgcmVhZGFibGUgZGF0ZVxuICAgIGRhdGUodGltZSwgZnVsbCkge1xuICAgICAgICBsZXQgeyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9ID1cbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIGxldCBvdXQgPSBbbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcl07XG4gICAgICAgIGlmIChmdWxsKSBvdXQucHVzaChob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCwgYW1wbSk7XG4gICAgICAgIHJldHVybiBvdXQuam9pbihcIiBcIik7XG4gICAgfSxcblxuICAgIC8vIGdldCBjdXJyZW50IHRpbWVcbiAgICB0aW1lKHRpbWUpIHtcbiAgICAgICAgbGV0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9IHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCArIFwiIFwiICsgYW1wbTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHBlcmNlbnQgY2hhbmdlXG4gICAgcGVyY2VudChjdXJyZW50LCBsYXN0LCB0b051bSkge1xuICAgICAgICBsZXQgaXNudW0gPSBCb29sZWFuKGxhc3QgPiAwKTtcbiAgICAgICAgbGV0IGlzdXAgPSBCb29sZWFuKGN1cnJlbnQgPj0gbGFzdCk7XG4gICAgICAgIGxldCBjaGFuZ2UgPSBpc3VwID8gY3VycmVudCAtIGxhc3QgOiBsYXN0IC0gY3VycmVudDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBpc251bSA/IChjaGFuZ2UgLyBsYXN0KSAqIDEwMC4wIDogMC4wO1xuICAgICAgICBsZXQgc2lnbiA9IGlzdXAgPyBcIitcIiA6IFwiLVwiO1xuICAgICAgICBsZXQgYXJyb3cgPSBpc3VwID8gXCLilrJcIiA6IFwi4pa8XCI7XG4gICAgICAgIGxldCBjb2xvciA9IGlzdXAgPyBcImdyZWVuXCIgOiBcInJlZFwiO1xuICAgICAgICBpZiAodG9OdW0gPT09IHRydWUpIHJldHVybiArTnVtYmVyKHNpZ24gKyBwZXJjZW50KS50b0ZpeGVkKDMpO1xuICAgICAgICByZXR1cm4geyBjaGFuZ2UsIHBlcmNlbnQsIHNpZ24sIGFycm93LCBjb2xvciB9O1xuICAgIH0sXG5cbiAgICAvLyBjYWxjIGNoYXJ0IHBvaW50cyBmb3IgZ2l2ZW4gZGltZW5zaW9ucyBhbmQgdmFsdWVzXG4gICAgcG9pbnRzKHdpZHRoLCBoZWlnaHQsIHZhbHVlcykge1xuICAgICAgICB3aWR0aCA9IHBhcnNlRmxvYXQod2lkdGgpIHx8IDA7XG4gICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KSB8fCAwO1xuICAgICAgICB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbXTtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCgobikgPT4gcGFyc2VGbG9hdChuKSB8fCAwKTtcblxuICAgICAgICBsZXQgbWluID0gdmFsdWVzLnJlZHVjZShcbiAgICAgICAgICAgIChtaW4sIHZhbCkgPT4gKHZhbCA8IG1pbiA/IHZhbCA6IG1pbiksXG4gICAgICAgICAgICB2YWx1ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG1heCA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWF4LCB2YWwpID0+ICh2YWwgPiBtYXggPyB2YWwgOiBtYXgpLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgaGFsZiA9IGhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5nZSA9IG1heCA+IG1pbiA/IG1heCAtIG1pbiA6IGhlaWdodDtcbiAgICAgICAgbGV0IGdhcCA9IGxlbiA+IDEgPyB3aWR0aCAvIChsZW4gLSAxKSA6IDE7XG4gICAgICAgIGxldCBvdXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZCA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWwgPSAyICogKChkIC0gbWluKSAvIHJhbmdlIC0gMC41KTtcbiAgICAgICAgICAgIGxldCB4ID0gaSAqIGdhcDtcbiAgICAgICAgICAgIGxldCB5ID0gLXZhbCAqIGhhbGYgKiAwLjggKyBoYWxmO1xuICAgICAgICAgICAgb3V0LnB1c2goeyB4LCB5IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbXB1dGUgcGxhY2VtZW50IGZvciBhbiBhYnNvbHV0ZSBib3ggb24gdGhlIHNjcmVlblxuICAgIGJveFBvc2l0aW9uKHRyaWdnZXJFbG0pIHtcbiAgICAgICAgbGV0IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV07XG5cbiAgICAgICAgaWYgKHRyaWdnZXJFbG0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGJveCA9IHRyaWdnZXJFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgcG9zeCA9IGJveC5sZWZ0ICsgdHJpZ2dlckVsbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgcG9zeSA9IGJveC50b3AgKyB0cmlnZ2VyRWxtLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBjZW50ZXJ5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgdG9wID0gcG9zeSA8IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByaWdodCA9IHBvc3ggPiBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgYm90dG9tID0gcG9zeSA+IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBsZWZ0ID0gcG9zeCA8IGNlbnRlcnggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjaGVjayBhIGtleS1wcmVzcyBldmVudCBmb3Igc29tZSBjb21tb24ga2V5cyBiZWluZyBwcmVzc2VkXG4gICAga2V5Ym9hcmQoZSkge1xuICAgICAgICBsZXQgY29kZSA9IGUua2V5Q29kZSB8fCBlLmtleSB8fCAwO1xuICAgICAgICBsZXQgdXAgPSBjb2RlID09PSAzODtcbiAgICAgICAgbGV0IGRvd24gPSBjb2RlID09PSA0MDtcbiAgICAgICAgbGV0IGxlZnQgPSBjb2RlID09PSAzNztcbiAgICAgICAgbGV0IHJpZ2h0ID0gY29kZSA9PT0gMzk7XG4gICAgICAgIGxldCBiYWNrID0gY29kZSA9PT0gODtcbiAgICAgICAgbGV0IGVzY2FwZSA9IGNvZGUgPT09IDI3O1xuICAgICAgICBsZXQgc3BhY2UgPSBjb2RlID09PSAzMjtcbiAgICAgICAgbGV0IGVudGVyID0gY29kZSA9PT0gMTM7XG4gICAgICAgIHJldHVybiB7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYmFjaywgZXNjYXBlLCBzcGFjZSwgZW50ZXIgfTtcbiAgICB9LFxuXG4gICAgLy8gc2h1ZmZsZSBhbiBhcnJheVxuICAgIHNodWZmbGUobykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGosIHgsIGkgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgIGk7XG4gICAgICAgICAgICBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHhcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfSxcblxuICAgIC8vIGRlZXAgbWVyZ2Ugb2JqIGFyZ3VtZW50c1xuICAgIGRlZXBNZXJnZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMF1ba2V5XSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1tpXVtrZXldID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwTWVyZ2UoYXJndW1lbnRzWzBdW2tleV0sIGFyZ3VtZW50c1tpXVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9LFxuXG4gICAgLy8gc2VhcmNoIG9iamVjdHMgaW4gYSBsaXN0IGJ5IGtleSBhbmQgc2VhcmNoIHRleHRcbiAgICBzZWFyY2gobGlzdCwga2V5LCB0ZXh0LCBmdWxsd29yZCwgZnVsbGNhc2UpIHtcbiAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1teXFx3XFxzXFx8XSsvZywgXCJcIik7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGZ1bGx3b3JkXG4gICAgICAgICAgICAgICAgPyBcIlxcXFxiXCIgKyB0ZXh0LnJlcGxhY2UoL1tcXHxdKy9nLCBcIlxcXFxifFxcXFxiXCIpICsgXCJcXFxcYlwiXG4gICAgICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBmdWxsY2FzZSA/IFwiZ1wiIDogXCJnaVwiO1xuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2gsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKFN0cmluZyhsaXN0W2NvdW50XVtrZXldIHx8IFwiXCIpLnNlYXJjaChyZWdleCkgPCAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChsaXN0W2NvdW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBzb3J0IG9iamVjdHMgaW4gYW4gYXJyYXkgYnkgYSBrZXlcbiAgICBzb3J0KGxpc3QsIGtleSwgb3JkZXIsIGlnbm9yZSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hID0gYVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBfYiA9IGJba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBzdHJpbmdzIHVzaW5nIHNhbWUgY2FzZVxuICAgICAgICAgICAgICAgICAgICBfYSA9IHR5cGVvZiBfYSA9PT0gXCJzdHJpbmdcIiA/IF9hLnRvVXBwZXJDYXNlKCkgOiBfYTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB0eXBlb2YgX2IgPT09IFwic3RyaW5nXCIgPyBfYi50b1VwcGVyQ2FzZSgpIDogX2I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJhc2NcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPCBfYikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPiBfYikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJkZXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIHN0YXJ0IG9mIGEgbGlzdFxuICAgIHRyaW1MZWZ0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKGxpc3QubGVuZ3RoIC0gbWF4KSA6IGxpc3Q7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBlbmQgb2YgYSBsaXN0XG4gICAgdHJpbVJpZ2h0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKDAsIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBjcmVhdGUgdW5pcXVlIGhhc2ggZnJvbSBhIHN0cmluZ1xuICAgIHVuaXF1ZShzdHIpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0ciB8fCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5cXHRcXHNdKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGxldCBoYXNoID0gNTM4MSxcbiAgICAgICAgICAgIGkgPSBzdHIubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pKSBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgcmV0dXJuIFwidW5xX1wiICsgKGhhc2ggPj4+IDApO1xuICAgIH0sXG5cbiAgICAvLyByYW5kb20gc3RyaW5nIGZvciBhIGdpdmVuIGxlbmd0aFxuICAgIHJhbmRTdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9XG4gICAgICAgICAgICBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCI7XG4gICAgICAgIGxldCB0b3RhbCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMTA7XG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuXG4gICAgICAgIHdoaWxlICh0b3RhbCkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKTtcbiAgICAgICAgICAgIHRvdGFsLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGEgdW5pcXVlIElEIHN0cmluZyB0aGF0IHVzZXMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBhIHJhbmRvbSB2YWx1ZVxuICAgIGlkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSlcbiAgICAgICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJ1cyIsIl9ldmVudHMiLCJuYW1lIiwiY2FsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhcmdzIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2hpZnQiLCJpIiwiY2IiLCJhcHBseSIsInVuZGVmaW5lZCIsInN0b3JlIiwidXRpbHMiLCJPcHRpb25zIiwib3B0aW9ucyIsIl9rZXkiLCJfb3B0aW9ucyIsInNldE9wdGlvbnMiLCJnZXREYXRhIiwic2V0RGF0YSIsImRlZXBNZXJnZSIsImVtaXQiLCJrZXkiLCJkZWYiLCJfYXBpIiwiX3ByZWZpeCIsIl90dGwiLCJkYXRhIiwidGltZSIsIl9zYXZlIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJTdHJpbmciLCJyZXBsYWNlIiwiX2Vycm9yIiwiZSIsIl9jb2RlIiwiY29kZSIsIl9uYW1lIiwiX2luZm8iLCJtZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwidHRsIiwiX3N0b3JlIiwid2luZG93IiwiX3RpbWUiLCJEYXRlIiwibm93IiwicGFyc2VJbnQiLCJfc3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJfcGFyc2VkIiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImluZGV4T2YiLCJfZGF0YSIsIl9zZWNzIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhcnNlVXJsIiwidXJsIiwicHJvcCIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwibGlua1VybCIsInRleHQiLCJzdHJpcEh0bWwiLCJyZW1vdmVVcmxzIiwiZGl2IiwiaW5uZXJIVE1MIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJmdWxsVXJsIiwicmVscGF0aCIsInRlc3QiLCJsb2MiLCJsb2NhdGlvbiIsInBhdGgiLCJwYXRobmFtZSIsInJlbCIsInByb3RvY29sIiwiaG9zdCIsInBsYXlBdWRpbyIsImZpbGUiLCJ2b2wiLCJwYXJzZUZsb2F0IiwiYXVkaW8iLCJBdWRpbyIsInNyYyIsInZvbHVtZSIsImNyb3NzT3JpZ2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXkiLCJlcnIiLCJsb2FkIiwiY29weVRleHQiLCJlbG0iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsInRyaW0iLCJzZWxlY3QiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZXhlY0NvbW1hbmQiLCJjbGFtcCIsIm51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJsaW1pdCIsInN0ciIsImFwcGVuZCIsInN1YnN0cmluZyIsImZpbGwiLCJjaGFyIiwicmVwZWF0Iiwibm91biIsInNpbmd1bGFyIiwicGx1dGFsIiwibW9uZXkiLCJmaXhlZCIsIm8iLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJkZWNpbWFscyIsIk51bWJlciIsInRvRml4ZWQiLCJlbGFwc2VkIiwic2VjcyIsInN1ZmZpeCIsInNob3J0IiwibGlzdCIsIk0iLCJmbG9vciIsInciLCJkIiwiaCIsIm0iLCJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrIiwiam9pbiIsImRhdGVEYXRhIiwidG9Mb2NhbGVTdHJpbmciLCJfcCIsIm4iLCJkYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImRheSIsImdldERhdGUiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsImZ1bGxoIiwiZ2V0SG91cnMiLCJhbXBtIiwiaG91ciIsImZ1bGwiLCJvdXQiLCJwZXJjZW50IiwiY3VycmVudCIsImxhc3QiLCJ0b051bSIsImlzbnVtIiwiQm9vbGVhbiIsImlzdXAiLCJjaGFuZ2UiLCJzaWduIiwiYXJyb3ciLCJjb2xvciIsInBvaW50cyIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWVzIiwiaXNBcnJheSIsIm1hcCIsInJlZHVjZSIsInZhbCIsImxlbiIsImhhbGYiLCJyYW5nZSIsImdhcCIsIngiLCJ5IiwiYm94UG9zaXRpb24iLCJ0cmlnZ2VyRWxtIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiSFRNTEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3N4Iiwib2Zmc2V0V2lkdGgiLCJwb3N5Iiwib2Zmc2V0SGVpZ2h0IiwiY2VudGVyeCIsImlubmVyV2lkdGgiLCJjZW50ZXJ5IiwiaW5uZXJIZWlnaHQiLCJrZXlib2FyZCIsImtleUNvZGUiLCJ1cCIsImRvd24iLCJiYWNrIiwiZXNjYXBlIiwic3BhY2UiLCJlbnRlciIsInNodWZmbGUiLCJqIiwicmFuZG9tIiwic2VhcmNoIiwiZnVsbHdvcmQiLCJmdWxsY2FzZSIsInJlZ2V4IiwiUmVnRXhwIiwiY291bnQiLCJzb3J0Iiwib3JkZXIiLCJpZ25vcmUiLCJhIiwiYiIsIl9hIiwiX2IiLCJ0b1VwcGVyQ2FzZSIsInRyaW1MZWZ0Iiwic2xpY2UiLCJ0cmltUmlnaHQiLCJ1bmlxdWUiLCJoYXNoIiwiY2hhckNvZGVBdCIsInJhbmRTdHJpbmciLCJjaGFycyIsInRvdGFsIiwiY2hhckF0IiwiaWRTdHJpbmciLCJ0b1N0cmluZyIsInN1YnN0ciJdLCJzb3VyY2VSb290IjoiIn0=