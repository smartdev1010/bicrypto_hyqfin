(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_history_js"],{

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

/***/ "./resources/src/modules/history.js":
/*!******************************************!*\
  !*** ./resources/src/modules/history.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
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
 * Handles saving data to a history list
 */




var History = /*#__PURE__*/function (_Bus) {
  _inherits(History, _Bus);

  var _super = _createSuper(History);

  /**
   * Constructor
   */
  function History(options) {
    var _this;

    _classCallCheck(this, History);

    _this = _super.call(this);
    _this._alarms = [];
    _this._sto = null;
    _this._options = Object.assign({
      // key used for storage
      key: 'history_data',
      // auto remove entries past this value (secs)
      expire: 1800,
      // total number of entries to keep in list
      total: 20 // ...

    }, options);
    return _this;
  }
  /**
   * Save current history data to store and emit list
   */


  _createClass(History, [{
    key: "saveData",
    value: function saveData() {
      this._autoClean();

      this.emit('update', this._alarms);
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].setData(this._options.key, this._alarms);
      if (this._sto) clearTimeout(this._sto);
      this._sto = setTimeout(this.saveData.bind(this), 30000);
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
      this.saveData();
    }
    /**
     * Add data to history
     * @param {string}  title  Title string
     * @param {string}  info   Info string
     * @param {string}  icon   Icon image URL
     */

  }, {
    key: "add",
    value: function add(title, info, icon) {
      if (!title || !info) return;
      var id = _utils__WEBPACK_IMPORTED_MODULE_2___default().randString(20);
      var time = Date.now();
      var isNew = true;

      this._alarms.unshift({
        id: id,
        time: time,
        isNew: isNew,
        title: title,
        info: info,
        icon: icon
      });

      this.saveData();
    }
    /**
     * Remove an entry from the list by ID
     * @param {string}  id  Unique entry ID
     */

  }, {
    key: "remove",
    value: function remove(id) {
      if (!id || typeof id !== 'string') return;
      this._alarms = this._alarms.filter(function (e) {
        return e.id !== id;
      });
      this.saveData();
    }
    /**
     * Reset new entry indicators
     */

  }, {
    key: "reset",
    value: function reset() {
      this._alarms.forEach(function (e) {
        e.isNew = false;
      });

      this.saveData();
    }
    /**
     * Remove all entries from the list
     */

  }, {
    key: "flush",
    value: function flush() {
      this._alarms = [];
      this.saveData();
    }
    /**
     * Cleanup the list and emit changes
     */

  }, {
    key: "_autoClean",
    value: function _autoClean() {
      var time = Date.now();
      var expire = parseInt(this._options.expire) | 0;
      var total = parseInt(this._options.total) | 0;
      if (expire) this._alarms = this._alarms.filter(function (e) {
        return (time - e.time) / 1000 < expire;
      });
      if (total) this._alarms = this._alarms.slice(0, total);
    }
  }]);

  return History;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfaGlzdG9yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ3FCQTtFQUVuQjtBQUNGO0FBQ0E7RUFDRSxlQUFjO0lBQUE7O0lBQ1osS0FBS0MsT0FBTCxHQUFlLEVBQWY7RUFDRDtFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQXFCO01BQ25CLElBQUssQ0FBQ0QsSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBOUIsRUFBeUM7TUFDekMsSUFBSyxPQUFPQyxRQUFQLEtBQW9CLFVBQXpCLEVBQXNDO01BQ3RDLElBQUssQ0FBQyxLQUFLRixPQUFMLENBQWFHLGNBQWIsQ0FBNkJGLElBQTdCLENBQU4sRUFBNEMsS0FBS0QsT0FBTCxDQUFjQyxJQUFkLElBQXVCLEVBQXZCOztNQUM1QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsRUFBcUJHLElBQXJCLENBQTJCRixRQUEzQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsZ0JBQU87TUFDTCxJQUFJRyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFZQyxTQUFaLENBQVg7TUFDQSxJQUFJUCxJQUFJLEdBQUdJLElBQUksQ0FBQ0ksTUFBTCxHQUFjSixJQUFJLENBQUNLLEtBQUwsRUFBZCxHQUE2QixFQUF4Qzs7TUFFQSxJQUFLLEtBQUtWLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTCxFQUEyQztRQUN6QyxLQUFNLElBQUlVLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsS0FBS1gsT0FBTCxDQUFjQyxJQUFkLEVBQXFCUSxNQUExQyxFQUFrRCxFQUFFRSxDQUFwRCxFQUF3RDtVQUN0RCxJQUFJQyxFQUFFLEdBQUcsS0FBS1osT0FBTCxDQUFjQyxJQUFkLEVBQXNCVSxDQUF0QixDQUFUO1VBQ0FDLEVBQUUsQ0FBQ0Ms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LHNCQWtZRmhDLE1BbFlFLEVBa1lNO0lBQ2YsSUFBSXNRLEtBQUssR0FDTCxnRUFESjtJQUVBLElBQUlyUCxLQUFLLEdBQUd3QixRQUFRLENBQUN6QyxNQUFELENBQVIsSUFBb0IsRUFBaEM7SUFDQSxJQUFJNEYsTUFBTSxHQUFHLEVBQWI7O0lBRUEsT0FBTzNFLEtBQVAsRUFBYztNQUNWMkUsTUFBTSxJQUFJMEssS0FBSyxDQUFDQyxNQUFOLENBQWFwSSxJQUFJLENBQUM2QixLQUFMLENBQVc3QixJQUFJLENBQUM4RyxNQUFMLEtBQWdCcUIsS0FBSyxDQUFDdFEsTUFBakMsQ0FBYixDQUFWO01BQ0FpQixLQUFLO0lBQ1I7O0lBQ0QsT0FBTzJFLE1BQVA7RUFDSCxDQTdZWTtFQStZYjtFQUNBNEssUUFoWmEsc0JBZ1pGO0lBQ1AsT0FBTyxDQUNIdE8sSUFBSSxDQUFDQyxHQUFMLEdBQVdzTyxRQUFYLENBQW9CLEVBQXBCLElBQTBCdEksSUFBSSxDQUFDOEcsTUFBTCxHQUFjd0IsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FEdkIsRUFFTFYsV0FGSyxFQUFQO0VBR0g7QUFwWlksQ0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvYnVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhc2ljIGV2ZW50IGJ1cyBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBuYW1lICAgICAgRXZlbnQgbmFtZVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgRXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbiggbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICBpZiAoICFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIGlmICggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgcmV0dXJuO1xyXG4gICAgaWYgKCAhdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB0aGlzLl9ldmVudHNbIG5hbWUgXSA9IFtdO1xyXG4gICAgdGhpcy5fZXZlbnRzWyBuYW1lIF0ucHVzaCggY2FsbGJhY2sgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgYnkgbmFtZSAoZmlyc3QgYXJnKSB3aXRoIHJlc3Qgb2YgYXJncyBwYXNzZWQgdG8gaXRcclxuICAgKi9cclxuICBlbWl0KCkge1xyXG4gICAgbGV0IGFyZ3MgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcclxuICAgIGxldCBuYW1lID0gYXJncy5sZW5ndGggPyBhcmdzLnNoaWZ0KCkgOiAnJztcclxuXHJcbiAgICBpZiAoIHRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkge1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHNbIG5hbWUgXS5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICBsZXQgY2IgPSB0aGlzLl9ldmVudHNbIG5hbWUgXVsgaSBdO1xyXG4gICAgICAgIGNiLmFwcGx5KCBjYiwgYXJncyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcmdzID0gdW5kZWZpbmVkOyAvLyBnY1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogSGFuZGxlcyBzYXZpbmcgZGF0YSB0byBhIGhpc3RvcnkgbGlzdFxyXG4gKi9cclxuaW1wb3J0IEJ1cyBmcm9tICcuL2J1cyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9yeSBleHRlbmRzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fYWxhcm1zID0gW107XHJcbiAgICB0aGlzLl9zdG8gPSBudWxsO1xyXG4gICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHtcclxuICAgICAgLy8ga2V5IHVzZWQgZm9yIHN0b3JhZ2VcclxuICAgICAga2V5OiAnaGlzdG9yeV9kYXRhJyxcclxuICAgICAgLy8gYXV0byByZW1vdmUgZW50cmllcyBwYXN0IHRoaXMgdmFsdWUgKHNlY3MpXHJcbiAgICAgIGV4cGlyZTogMTgwMCxcclxuICAgICAgLy8gdG90YWwgbnVtYmVyIG9mIGVudHJpZXMgdG8ga2VlcCBpbiBsaXN0XHJcbiAgICAgIHRvdGFsOiAyMCxcclxuICAgICAgLy8gLi4uXHJcbiAgICB9LCBvcHRpb25zICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTYXZlIGN1cnJlbnQgaGlzdG9yeSBkYXRhIHRvIHN0b3JlIGFuZCBlbWl0IGxpc3RcclxuICAgKi9cclxuICBzYXZlRGF0YSgpIHtcclxuICAgIHRoaXMuX2F1dG9DbGVhbigpO1xyXG4gICAgdGhpcy5lbWl0KCAndXBkYXRlJywgdGhpcy5fYWxhcm1zICk7XHJcbiAgICBzdG9yZS5zZXREYXRhKCB0aGlzLl9vcHRpb25zLmtleSwgdGhpcy5fYWxhcm1zICk7XHJcbiAgICBpZiAoIHRoaXMuX3N0byApIGNsZWFyVGltZW91dCggdGhpcy5fc3RvICk7XHJcbiAgICB0aGlzLl9zdG8gPSBzZXRUaW1lb3V0KCB0aGlzLnNhdmVEYXRhLmJpbmQoIHRoaXMgKSwgMzAwMDAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgc2F2ZWQgaGlzdG9yeSBkYXRhIGZyb20gc3RvcmVcclxuICAgKi9cclxuICBsb2FkRGF0YSgpIHtcclxuICAgIGxldCBkYXRhID0gc3RvcmUuZ2V0RGF0YSggdGhpcy5fb3B0aW9ucy5rZXkgKTtcclxuICAgIGlmICggIWRhdGEgfHwgIUFycmF5LmlzQXJyYXkoIGRhdGEgKSApIHJldHVybjtcclxuICAgIHRoaXMuX2FsYXJtcyA9IGRhdGE7XHJcbiAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgZGF0YSB0byBoaXN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICB0aXRsZSAgVGl0bGUgc3RyaW5nXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBpbmZvICAgSW5mbyBzdHJpbmdcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGljb24gICBJY29uIGltYWdlIFVSTFxyXG4gICAqL1xyXG4gIGFkZCggdGl0bGUsIGluZm8sIGljb24gKSB7XHJcbiAgICBpZiAoICF0aXRsZSB8fCAhaW5mbyApIHJldHVybjtcclxuICAgIGxldCBpZCAgICA9IHV0aWxzLnJhbmRTdHJpbmcoIDIwICk7XHJcbiAgICBsZXQgdGltZSAgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGlzTmV3ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2FsYXJtcy51bnNoaWZ0KCB7IGlkLCB0aW1lLCBpc05ldywgdGl0bGUsIGluZm8sIGljb24gfSApO1xyXG4gICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFuIGVudHJ5IGZyb20gdGhlIGxpc3QgYnkgSURcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGlkICBVbmlxdWUgZW50cnkgSURcclxuICAgKi9cclxuICByZW1vdmUoIGlkICkge1xyXG4gICAgaWYgKCAhaWQgfHwgdHlwZW9mIGlkICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIHRoaXMuX2FsYXJtcyA9IHRoaXMuX2FsYXJtcy5maWx0ZXIoIGUgPT4gZS5pZCAhPT0gaWQgKTtcclxuICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IG5ldyBlbnRyeSBpbmRpY2F0b3JzXHJcbiAgICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl9hbGFybXMuZm9yRWFjaCggZSA9PiB7IGUuaXNOZXcgPSBmYWxzZTsgfSApO1xyXG4gICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBlbnRyaWVzIGZyb20gdGhlIGxpc3RcclxuICAgKi9cclxuICBmbHVzaCgpIHtcclxuICAgIHRoaXMuX2FsYXJtcyA9IFtdO1xyXG4gICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYW51cCB0aGUgbGlzdCBhbmQgZW1pdCBjaGFuZ2VzXHJcbiAgICovXHJcbiAgX2F1dG9DbGVhbigpIHtcclxuICAgIGxldCB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBleHBpcmUgPSBwYXJzZUludCggdGhpcy5fb3B0aW9ucy5leHBpcmUgKSB8IDA7XHJcbiAgICBsZXQgdG90YWwgPSBwYXJzZUludCggdGhpcy5fb3B0aW9ucy50b3RhbCApIHwgMDtcclxuICAgIGlmICggZXhwaXJlICkgdGhpcy5fYWxhcm1zID0gdGhpcy5fYWxhcm1zLmZpbHRlciggZSA9PiAoICggdGltZSAtIGUudGltZSApIC8gMTAwMCApIDwgZXhwaXJlICk7XHJcbiAgICBpZiAoIHRvdGFsICkgdGhpcy5fYWxhcm1zID0gdGhpcy5fYWxhcm1zLnNsaWNlKCAwLCB0b3RhbCApO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogV2ViIGNhY2hlIGhhbmRsZXJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIC8vIGxvY2FsIHByb3BzXHJcbiAgX2FwaSAgICA6ICdsb2NhbFN0b3JhZ2UnLFxyXG4gIF9wcmVmaXggOiAnd2ViY2FjaGVfJyxcclxuICBfdHRsICAgIDogMCxcclxuXHJcbiAgLy8gc2F2ZSBkYXRhIHRvIGNhY2hlXHJcbiAgc2V0RGF0YSgga2V5LCBkYXRhLCB0aW1lICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NhdmUoIGtleSwgZGF0YSwgdGltZSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGdldCBzYXZlZCBkYXRhIGZvciBhIGtleSBhcyBpc1xyXG4gIGdldERhdGEoIGtleSApIHtcclxuICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2goIGtleSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGRlbGV0ZSBzYXZlZCBkYXRhIGZvciBrZXlcclxuICBkZWxldGVEYXRhKCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBzYW50aXplciBmb3Iga2V5c1xyXG4gIF9rZXkoIGtleSApIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVmaXggKyBTdHJpbmcoIGtleSB8fCAnJyApLnJlcGxhY2UoIC9bXlxcd10rL2csICdfJyApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGVycm9yIGhhbmRsZXJcclxuICBfZXJyb3IoIGUgKSB7XHJcbiAgICBsZXQgX2NvZGUgPSBlLmNvZGUgICAgfCAgMDtcclxuICAgIGxldCBfbmFtZSA9IGUubmFtZSAgICB8fCAnVW5rbm93bkVycm9yJztcclxuICAgIGxldCBfaW5mbyA9IGUubWVzc2FnZSB8fCAnUHJvYmxlbSB3aXRoICcgKyB0aGlzLl9hcGkgKycgYnJvd3NlciBBUEkuJyA7XHJcbiAgICBjb25zb2xlLmVycm9yKCAnU3RvcmFnZUVycm9yICgnKyBfY29kZSArJyk6JywgX2luZm8sICcoJysgX25hbWUgKycpLicgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICAvLyB0cnkgc2F2aW5nIHRoZSBkYXRhIGFuZCBoYW5kbGUgYW55IGVycm9yc1xyXG4gIF9zYXZlKCBrZXksIGRhdGEsIHR0bCApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3RpbWUgICA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IF90dGwgICAgPSBwYXJzZUludCggdHRsICkgfHwgdGhpcy5fdHRsO1xyXG4gICAgICBjb25zdCBfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoIHsgX3RpbWUsIF90dGwsIGRhdGEgfSApO1xyXG4gICAgICBfc3RvcmUuc2V0SXRlbSggX2tleSwgX3N0cmluZyApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGZldGNoaW5nIGRhdGEgZm9yIGtleVxyXG4gIF9mZXRjaCgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlICA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF9rZXkgICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBjb25zdCBfcGFyc2VkID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgIHJldHVybiAoIF9wYXJzZWQgJiYgX3BhcnNlZC5kYXRhICkgPyBfcGFyc2VkLmRhdGEgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyB0cnkgZGVsZXRpbmcgZGF0YSBieSBrZXlcclxuICBfZGVsZXRlKCBrZXkgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gY2xlYW4gYWxsIGV4cGlyZWQgaXRlbXMgZnJvbSBzdG9yYWdlXHJcbiAgX2NsZWFuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX3RpbWUgID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIC8vIGxvb3Aga2V5c1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBfc3RvcmUubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBpdCdzIGEga2V5IG1hbmFnZWQgYnkgdGhpcyBvYmplY3RcclxuICAgICAgICBjb25zdCBfa2V5ID0gX3N0b3JlLmtleSggaSApO1xyXG4gICAgICAgIGlmICggX2tleS5pbmRleE9mKCB0aGlzLl9wcmVmaXggKSA8IDAgKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGRhdGEgZm9yIGtleVxyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgICAgaWYgKCAhX2RhdGEuX3RpbWUgfHwgIV9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gbmVlZCB0aGVzZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIGFuZCBkZWxldGUga2V5XHJcbiAgICAgICAgY29uc3QgX3NlY3MgPSAoIF90aW1lIC0gX2RhdGEuX3RpbWUgKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKCBfc2VjcyA8IF9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gc3RpbGwgZnJlc2hcclxuICAgICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxufVxyXG4iLCIvKipcbiAqIENvbW1vbiB1dGlsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBjb252ZXJ0IHVybCBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAocGFyc2VyKVxuICAgIHBhcnNlVXJsKHVybCwgcHJvcCkge1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxldCBkYXRhID0gbGlua1twcm9wXSB8fCBcIlwiO1xuICAgICAgICBsaW5rID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgVVJMcyBpbnRvIGNsaWNrYWJsZSBsaW5rc1xuICAgIGxpbmtVcmwodGV4dCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRleHQgfHwgXCJcIikucmVwbGFjZShcbiAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgaHRtbCB0YWdzIHRvIHRleHQgY29udGVudFxuICAgIHN0cmlwSHRtbCh0ZXh0LCByZW1vdmVVcmxzKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gU3RyaW5nKHRleHQgfHwgXCJcIik7XG4gICAgICAgIGxldCBvdXRwdXQgPSBTdHJpbmcoZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgXCJcIik7XG4gICAgICAgIGlmIChyZW1vdmVVcmxzKVxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgLyhodHRwcz9cXDpcXC9cXC9bXFx3XFwtXFwuXFw/XFw9XFwmXFwlXFwvXFwjXSspL2dpLFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgcmVsYXRpdmUgcGF0aCB0byBmdWxsIHVybFxuICAgIGZ1bGxVcmwocmVscGF0aCkge1xuICAgICAgICBpZiAoL14oW1xcd1xcLV0rXFw6KT9cXC9cXC8uKiQvLnRlc3QocmVscGF0aCkpIHJldHVybiByZWxwYXRoO1xuICAgICAgICBsZXQgbG9jID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgICBsZXQgcGF0aCA9IFN0cmluZyhsb2MucGF0aG5hbWUgfHwgXCJcIikucmVwbGFjZSgvXFwvKyQvZywgXCJcIik7XG4gICAgICAgIGxldCByZWwgPSBTdHJpbmcocmVscGF0aCB8fCBcIlwiKS5yZXBsYWNlKC9eXFwvKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0ICsgcGF0aCArIFwiL1wiICsgcmVsO1xuICAgIH0sXG5cbiAgICAvLyBwbGF5IGF1ZGlvIGZpbGVcbiAgICBwbGF5QXVkaW8oZmlsZSwgdm9sKSB7XG4gICAgICAgIGlmICghZmlsZSB8fCB0eXBlb2YgZmlsZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgICAgICAvLyBub3JtYWxpemUgdm9sdW1lXG4gICAgICAgIHZvbCA9IHBhcnNlRmxvYXQodm9sKSB8fCAxO1xuICAgICAgICB2b2wgPSB2b2wgPiAxID8gdm9sIC8gMTAwIDogdm9sO1xuICAgICAgICB2b2wgPSB2b2wgPiAxIHx8IHZvbCA8IDAgPyAxIDogdm9sO1xuICAgICAgICAvLyBsb2FkIGFuZCBwbGF5IGF1ZGlvXG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICBhdWRpby5zcmMgPSB0aGlzLmZ1bGxVcmwoZmlsZSk7XG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbDtcbiAgICAgICAgYXVkaW8uY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICB9KTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgIH0sXG5cbiAgICAvLyBjb3B5IHRleHQgdG8gY2xpcGJvYXJkXG4gICAgY29weVRleHQodGV4dCkge1xuICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgIGVsbS52YWx1ZSA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgZWxtLnNlbGVjdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsbS5yZW1vdmUoKSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XG4gICAgfSxcblxuICAgIC8vIGNsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgICBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG4gICAgfSxcblxuICAgIC8vIGN1dCBwYXJ0IG9mIGEgc3RyaW5nXG4gICAgbGltaXQoc3RyLCBsZW5ndGgsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsZW5ndGggPyBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBhcHBlbmQgOiBzdHI7XG4gICAgfSxcblxuICAgIC8vIGFsd2F5IGtlZXAgYSBzdHJpbmcgYXQgYSBjZXJ0YWluIGxlbmd0aFxuICAgIGZpbGwoc3RyLCBsZW5ndGgsIGNoYXIsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCAyMDtcbiAgICAgICAgY2hhciA9IFN0cmluZyhjaGFyIHx8IFwiIFwiKTtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIDMpICsgXCIuLi5cIjtcbiAgICAgICAgcmV0dXJuIHN0ciArIGNoYXIucmVwZWF0KGxlbmd0aCAtIHN0ci5sZW5ndGgpICsgYXBwZW5kO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgbm91biB3b3JkIGZvciBhIG51bWJlclxuICAgIG5vdW4obnVtLCBzaW5ndWxhciwgcGx1dGFsLCBhcHBlbmQpIHtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhcbiAgICAgICAgICAgIG51bSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KG51bSkgPT09IDEgPyBzaW5ndWxhciA6IHBsdXRhbCkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBhcHBlbmRcbiAgICAgICAgKS50cmltKCk7XG4gICAgfSxcblxuICAgIC8vIGZvcm1hdCBudW1iZXIgdG8gbW9uZXlcbiAgICBtb25leShudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICBsZXQgbyA9IHtcbiAgICAgICAgICAgIHN0eWxlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZml4ZWQsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwgbykuZm9ybWF0KG51bSk7XG4gICAgfSxcblxuICAgIC8qbW9uZXlfY2N4dChudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICByZXR1cm4gY2N4dC5kZWNpbWFsVG9QcmVjaXNpb24oXG4gICAgICAgICAgICBudW0sXG4gICAgICAgICAgICBjY3h0LlJPVU5ELFxuICAgICAgICAgICAgZml4ZWQsXG4gICAgICAgICAgICBjY3h0LlNJR05JRklDQU5UX0RJR0lUUyxcbiAgICAgICAgICAgIGNjeHQuUEFEX1dJVEhfWkVST1xuICAgICAgICApO1xuICAgIH0sKi9cblxuICAgIC8vIGZpeGVkIG51bWJlcnNcbiAgICBmaXhlZChudW0sIGRlY2ltYWxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjaW1hbHMgPT09IFwibnVtYmVyXCIpIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgaWYgKC8oVVNEfFBBWHxEQUkpLy50ZXN0KGRlY2ltYWxzKSkgcmV0dXJuIHRoaXMubW9uZXkobnVtLCAzKTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihudW0pLnRvRml4ZWQoOCk7XG4gICAgfSxcblxuICAgIC8vIGdldCBpbmZvIGFib3V0IGhvdyBsb25nIHNvbWV0aGluZyBoYXMgYmVlblxuICAgIGVsYXBzZWQoc2Vjcywgc3VmZml4LCBzaG9ydCkge1xuICAgICAgICBzZWNzID0gcGFyc2VJbnQoc2VjcykgfHwgMDtcbiAgICAgICAgaWYgKHNob3J0ICYmIHNlY3MgPCA2MCkgcmV0dXJuIFwiSnVzdCBub3dcIjtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBNOiBNYXRoLmZsb29yKHNlY3MgLyAyNDE5MjAwKSxcbiAgICAgICAgICAgIHc6IE1hdGguZmxvb3IoKHNlY3MgLyA2MDQ4MDApICUgNCksXG4gICAgICAgICAgICBkOiBNYXRoLmZsb29yKChzZWNzIC8gODY0MDApICUgNyksXG4gICAgICAgICAgICBoOiBNYXRoLmZsb29yKChzZWNzIC8gMzYwMCkgJSAyNCksXG4gICAgICAgICAgICBtOiBNYXRoLmZsb29yKChzZWNzIC8gNjApICUgNjApLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXNob3J0KSBkYXRhLnMgPSBNYXRoLmZsb29yKHNlY3MgJSA2MCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW2tdKSBsaXN0LnB1c2goZGF0YVtrXSArIGspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1ZmZpeCkgbGlzdC5wdXNoKHN1ZmZpeCk7XG4gICAgICAgIHJldHVybiBsaXN0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgZGF0YSBhYm91dCBjdXJyZW50IGRhdGUgYW5kIHRpbWVcbiAgICBkYXRlRGF0YSh0aW1lKSB7XG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICAvLyB0aW1lc3RhbXAgb3IgZGF0ZXN0cmluZywga2VlcCBhcyBpc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lID09PSBcIm51bWJlclwiIHx8IC9eW1xcd1xcLVxcK1xcOl0rJC8udGVzdCh0aW1lKSkge1xuICAgICAgICAgICAgICAgIG5vdyA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdGhlciBzdHJpbmcsIGFzc3VtZSB0aW1lem9uZVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRpbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBfcCA9IChuKSA9PiAobiA8IDEwID8gXCIwXCIgKyBuIDogXCJcIiArIG4pO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG5vdyk7XG4gICAgICAgIGxldCBtb250aCA9IFtcbiAgICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXVtkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IGRheSA9IF9wKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IF9wKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IF9wKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgbGV0IGZ1bGxoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBsZXQgYW1wbSA9IGZ1bGxoID4gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICAgIGxldCBob3VyID0gZnVsbGggPiAxMiA/IGZ1bGxoIC0gMTIgOiBmdWxsaDtcbiAgICAgICAgaG91ciA9IF9wKGhvdXIgPT09IDAgPyAxMiA6IGhvdXIpO1xuICAgICAgICByZXR1cm4geyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9O1xuICAgIH0sXG5cbiAgICAvLyBnZXQgcmVhZGFibGUgZGF0ZVxuICAgIGRhdGUodGltZSwgZnVsbCkge1xuICAgICAgICBsZXQgeyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9ID1cbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIGxldCBvdXQgPSBbbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcl07XG4gICAgICAgIGlmIChmdWxsKSBvdXQucHVzaChob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCwgYW1wbSk7XG4gICAgICAgIHJldHVybiBvdXQuam9pbihcIiBcIik7XG4gICAgfSxcblxuICAgIC8vIGdldCBjdXJyZW50IHRpbWVcbiAgICB0aW1lKHRpbWUpIHtcbiAgICAgICAgbGV0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9IHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCArIFwiIFwiICsgYW1wbTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHBlcmNlbnQgY2hhbmdlXG4gICAgcGVyY2VudChjdXJyZW50LCBsYXN0LCB0b051bSkge1xuICAgICAgICBsZXQgaXNudW0gPSBCb29sZWFuKGxhc3QgPiAwKTtcbiAgICAgICAgbGV0IGlzdXAgPSBCb29sZWFuKGN1cnJlbnQgPj0gbGFzdCk7XG4gICAgICAgIGxldCBjaGFuZ2UgPSBpc3VwID8gY3VycmVudCAtIGxhc3QgOiBsYXN0IC0gY3VycmVudDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBpc251bSA/IChjaGFuZ2UgLyBsYXN0KSAqIDEwMC4wIDogMC4wO1xuICAgICAgICBsZXQgc2lnbiA9IGlzdXAgPyBcIitcIiA6IFwiLVwiO1xuICAgICAgICBsZXQgYXJyb3cgPSBpc3VwID8gXCLilrJcIiA6IFwi4pa8XCI7XG4gICAgICAgIGxldCBjb2xvciA9IGlzdXAgPyBcImdyZWVuXCIgOiBcInJlZFwiO1xuICAgICAgICBpZiAodG9OdW0gPT09IHRydWUpIHJldHVybiArTnVtYmVyKHNpZ24gKyBwZXJjZW50KS50b0ZpeGVkKDMpO1xuICAgICAgICByZXR1cm4geyBjaGFuZ2UsIHBlcmNlbnQsIHNpZ24sIGFycm93LCBjb2xvciB9O1xuICAgIH0sXG5cbiAgICAvLyBjYWxjIGNoYXJ0IHBvaW50cyBmb3IgZ2l2ZW4gZGltZW5zaW9ucyBhbmQgdmFsdWVzXG4gICAgcG9pbnRzKHdpZHRoLCBoZWlnaHQsIHZhbHVlcykge1xuICAgICAgICB3aWR0aCA9IHBhcnNlRmxvYXQod2lkdGgpIHx8IDA7XG4gICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KSB8fCAwO1xuICAgICAgICB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbXTtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCgobikgPT4gcGFyc2VGbG9hdChuKSB8fCAwKTtcblxuICAgICAgICBsZXQgbWluID0gdmFsdWVzLnJlZHVjZShcbiAgICAgICAgICAgIChtaW4sIHZhbCkgPT4gKHZhbCA8IG1pbiA/IHZhbCA6IG1pbiksXG4gICAgICAgICAgICB2YWx1ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG1heCA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWF4LCB2YWwpID0+ICh2YWwgPiBtYXggPyB2YWwgOiBtYXgpLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgaGFsZiA9IGhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5nZSA9IG1heCA+IG1pbiA/IG1heCAtIG1pbiA6IGhlaWdodDtcbiAgICAgICAgbGV0IGdhcCA9IGxlbiA+IDEgPyB3aWR0aCAvIChsZW4gLSAxKSA6IDE7XG4gICAgICAgIGxldCBvdXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZCA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWwgPSAyICogKChkIC0gbWluKSAvIHJhbmdlIC0gMC41KTtcbiAgICAgICAgICAgIGxldCB4ID0gaSAqIGdhcDtcbiAgICAgICAgICAgIGxldCB5ID0gLXZhbCAqIGhhbGYgKiAwLjggKyBoYWxmO1xuICAgICAgICAgICAgb3V0LnB1c2goeyB4LCB5IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbXB1dGUgcGxhY2VtZW50IGZvciBhbiBhYnNvbHV0ZSBib3ggb24gdGhlIHNjcmVlblxuICAgIGJveFBvc2l0aW9uKHRyaWdnZXJFbG0pIHtcbiAgICAgICAgbGV0IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV07XG5cbiAgICAgICAgaWYgKHRyaWdnZXJFbG0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGJveCA9IHRyaWdnZXJFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgcG9zeCA9IGJveC5sZWZ0ICsgdHJpZ2dlckVsbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgcG9zeSA9IGJveC50b3AgKyB0cmlnZ2VyRWxtLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBjZW50ZXJ5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgdG9wID0gcG9zeSA8IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByaWdodCA9IHBvc3ggPiBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgYm90dG9tID0gcG9zeSA+IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBsZWZ0ID0gcG9zeCA8IGNlbnRlcnggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjaGVjayBhIGtleS1wcmVzcyBldmVudCBmb3Igc29tZSBjb21tb24ga2V5cyBiZWluZyBwcmVzc2VkXG4gICAga2V5Ym9hcmQoZSkge1xuICAgICAgICBsZXQgY29kZSA9IGUua2V5Q29kZSB8fCBlLmtleSB8fCAwO1xuICAgICAgICBsZXQgdXAgPSBjb2RlID09PSAzODtcbiAgICAgICAgbGV0IGRvd24gPSBjb2RlID09PSA0MDtcbiAgICAgICAgbGV0IGxlZnQgPSBjb2RlID09PSAzNztcbiAgICAgICAgbGV0IHJpZ2h0ID0gY29kZSA9PT0gMzk7XG4gICAgICAgIGxldCBiYWNrID0gY29kZSA9PT0gODtcbiAgICAgICAgbGV0IGVzY2FwZSA9IGNvZGUgPT09IDI3O1xuICAgICAgICBsZXQgc3BhY2UgPSBjb2RlID09PSAzMjtcbiAgICAgICAgbGV0IGVudGVyID0gY29kZSA9PT0gMTM7XG4gICAgICAgIHJldHVybiB7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYmFjaywgZXNjYXBlLCBzcGFjZSwgZW50ZXIgfTtcbiAgICB9LFxuXG4gICAgLy8gc2h1ZmZsZSBhbiBhcnJheVxuICAgIHNodWZmbGUobykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGosIHgsIGkgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgIGk7XG4gICAgICAgICAgICBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHhcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfSxcblxuICAgIC8vIGRlZXAgbWVyZ2Ugb2JqIGFyZ3VtZW50c1xuICAgIGRlZXBNZXJnZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMF1ba2V5XSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1tpXVtrZXldID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwTWVyZ2UoYXJndW1lbnRzWzBdW2tleV0sIGFyZ3VtZW50c1tpXVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9LFxuXG4gICAgLy8gc2VhcmNoIG9iamVjdHMgaW4gYSBsaXN0IGJ5IGtleSBhbmQgc2VhcmNoIHRleHRcbiAgICBzZWFyY2gobGlzdCwga2V5LCB0ZXh0LCBmdWxsd29yZCwgZnVsbGNhc2UpIHtcbiAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1teXFx3XFxzXFx8XSsvZywgXCJcIik7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGZ1bGx3b3JkXG4gICAgICAgICAgICAgICAgPyBcIlxcXFxiXCIgKyB0ZXh0LnJlcGxhY2UoL1tcXHxdKy9nLCBcIlxcXFxifFxcXFxiXCIpICsgXCJcXFxcYlwiXG4gICAgICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBmdWxsY2FzZSA/IFwiZ1wiIDogXCJnaVwiO1xuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2gsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKFN0cmluZyhsaXN0W2NvdW50XVtrZXldIHx8IFwiXCIpLnNlYXJjaChyZWdleCkgPCAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChsaXN0W2NvdW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBzb3J0IG9iamVjdHMgaW4gYW4gYXJyYXkgYnkgYSBrZXlcbiAgICBzb3J0KGxpc3QsIGtleSwgb3JkZXIsIGlnbm9yZSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hID0gYVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBfYiA9IGJba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBzdHJpbmdzIHVzaW5nIHNhbWUgY2FzZVxuICAgICAgICAgICAgICAgICAgICBfYSA9IHR5cGVvZiBfYSA9PT0gXCJzdHJpbmdcIiA/IF9hLnRvVXBwZXJDYXNlKCkgOiBfYTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB0eXBlb2YgX2IgPT09IFwic3RyaW5nXCIgPyBfYi50b1VwcGVyQ2FzZSgpIDogX2I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJhc2NcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPCBfYikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPiBfYikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJkZXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIHN0YXJ0IG9mIGEgbGlzdFxuICAgIHRyaW1MZWZ0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKGxpc3QubGVuZ3RoIC0gbWF4KSA6IGxpc3Q7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBlbmQgb2YgYSBsaXN0XG4gICAgdHJpbVJpZ2h0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKDAsIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBjcmVhdGUgdW5pcXVlIGhhc2ggZnJvbSBhIHN0cmluZ1xuICAgIHVuaXF1ZShzdHIpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0ciB8fCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5cXHRcXHNdKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGxldCBoYXNoID0gNTM4MSxcbiAgICAgICAgICAgIGkgPSBzdHIubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pKSBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgcmV0dXJuIFwidW5xX1wiICsgKGhhc2ggPj4+IDApO1xuICAgIH0sXG5cbiAgICAvLyByYW5kb20gc3RyaW5nIGZvciBhIGdpdmVuIGxlbmd0aFxuICAgIHJhbmRTdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9XG4gICAgICAgICAgICBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCI7XG4gICAgICAgIGxldCB0b3RhbCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMTA7XG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuXG4gICAgICAgIHdoaWxlICh0b3RhbCkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKTtcbiAgICAgICAgICAgIHRvdGFsLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGEgdW5pcXVlIElEIHN0cmluZyB0aGF0IHVzZXMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBhIHJhbmRvbSB2YWx1ZVxuICAgIGlkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSlcbiAgICAgICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJ1cyIsIl9ldmVudHMiLCJuYW1lIiwiY2FsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhcmdzIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2hpZnQiLCJpIiwiY2IiLCJhcHBseSIsInVuZGVmaW5lZCIsInN0b3JlIiwidXRpbHMiLCJIaXN0b3J5Iiwib3B0aW9ucyIsIl9hbGFybXMiLCJfc3RvIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJrZXkiLCJleHBpcmUiLCJ0b3RhbCIsIl9hdXRvQ2xlYW4iLCJlbWl0Iiwic2V0RGF0YSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJzYXZlRGF0YSIsImJpbmQiLCJkYXRhIiwiZ2V0RGF0YSIsImlzQXJyYXkiLCJ0aXRsZSIsImluZm8iLCJpY29uIiwiaWQiLCJyYW5kU3RyaW5nIiwidGltZSIsIkRhdGUiLCJub3ciLCJpc05ldyIsInVuc2hpZnQiLCJmaWx0ZXIiLCJlIiwiZm9yRWFjaCIsInBhcnNlSW50Iiwic2xpY2UiLCJfYXBpIiwiX3ByZWZpeCIsIl90dGwiLCJfc2F2ZSIsIl9jbGVhbiIsIl9mZXRjaCIsImRlbGV0ZURhdGEiLCJfZGVsZXRlIiwiX2tleSIsIlN0cmluZyIsInJlcGxhY2UiLCJfZXJyb3IiLCJfY29kZSIsImNvZGUiLCJfbmFtZSIsIl9pbmZvIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInR0bCIsIl9zdG9yZSIsIndpbmRvdyIsIl90aW1lIiwiX3N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiX3BhcnNlZCIsInBhcnNlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleE9mIiwiX2RhdGEiLCJfc2VjcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJzZVVybCIsInVybCIsInByb3AiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImxpbmtVcmwiLCJ0ZXh0Iiwic3RyaXBIdG1sIiwicmVtb3ZlVXJscyIsImRpdiIsImlubmVySFRNTCIsIm91dHB1dCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZnVsbFVybCIsInJlbHBhdGgiLCJ0ZXN0IiwibG9jIiwibG9jYXRpb24iLCJwYXRoIiwicGF0aG5hbWUiLCJyZWwiLCJwcm90b2NvbCIsImhvc3QiLCJwbGF5QXVkaW8iLCJmaWxlIiwidm9sIiwicGFyc2VGbG9hdCIsImF1ZGlvIiwiQXVkaW8iLCJzcmMiLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiZXJyIiwibG9hZCIsImNvcHlUZXh0IiwiZWxtIiwiYm9keSIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJ0cmltIiwic2VsZWN0IiwicmVtb3ZlIiwiZXhlY0NvbW1hbmQiLCJjbGFtcCIsIm51bSIsIm1pbiIsIm1heCIsIk1hdGgiLCJsaW1pdCIsInN0ciIsImFwcGVuZCIsInN1YnN0cmluZyIsImZpbGwiLCJjaGFyIiwicmVwZWF0Iiwibm91biIsInNpbmd1bGFyIiwicGx1dGFsIiwibW9uZXkiLCJmaXhlZCIsIm8iLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJkZWNpbWFscyIsIk51bWJlciIsInRvRml4ZWQiLCJlbGFwc2VkIiwic2VjcyIsInN1ZmZpeCIsInNob3J0IiwibGlzdCIsIk0iLCJmbG9vciIsInciLCJkIiwiaCIsIm0iLCJzIiwia2V5cyIsImsiLCJqb2luIiwiZGF0ZURhdGEiLCJ0b0xvY2FsZVN0cmluZyIsIl9wIiwibiIsImRhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5IiwiZ2V0RGF0ZSIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwiZnVsbGgiLCJnZXRIb3VycyIsImFtcG0iLCJob3VyIiwiZnVsbCIsIm91dCIsInBlcmNlbnQiLCJjdXJyZW50IiwibGFzdCIsInRvTnVtIiwiaXNudW0iLCJCb29sZWFuIiwiaXN1cCIsImNoYW5nZSIsInNpZ24iLCJhcnJvdyIsImNvbG9yIiwicG9pbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZXMiLCJtYXAiLCJyZWR1Y2UiLCJ2YWwiLCJsZW4iLCJoYWxmIiwicmFuZ2UiLCJnYXAiLCJ4IiwieSIsImJveFBvc2l0aW9uIiwidHJpZ2dlckVsbSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIkhUTUxFbGVtZW50IiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zeCIsIm9mZnNldFdpZHRoIiwicG9zeSIsIm9mZnNldEhlaWdodCIsImNlbnRlcngiLCJpbm5lcldpZHRoIiwiY2VudGVyeSIsImlubmVySGVpZ2h0Iiwia2V5Ym9hcmQiLCJrZXlDb2RlIiwidXAiLCJkb3duIiwiYmFjayIsImVzY2FwZSIsInNwYWNlIiwiZW50ZXIiLCJzaHVmZmxlIiwiaiIsInJhbmRvbSIsImRlZXBNZXJnZSIsInNlYXJjaCIsImZ1bGx3b3JkIiwiZnVsbGNhc2UiLCJyZWdleCIsIlJlZ0V4cCIsImNvdW50Iiwic29ydCIsIm9yZGVyIiwiaWdub3JlIiwiYSIsImIiLCJfYSIsIl9iIiwidG9VcHBlckNhc2UiLCJ0cmltTGVmdCIsInRyaW1SaWdodCIsInVuaXF1ZSIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hhcnMiLCJjaGFyQXQiLCJpZFN0cmluZyIsInRvU3RyaW5nIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==