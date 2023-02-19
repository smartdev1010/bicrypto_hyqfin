(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_ajax_js"],{

/***/ "./resources/src/modules/ajax.js":
/*!***************************************!*\
  !*** ./resources/src/modules/ajax.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ajax)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./resources/src/modules/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/src/modules/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Basic XHR ajax request module
 */
 //import logger from './logger';

 // ajax class

var Ajax = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {object}  options  Initial options
   */
  function Ajax(options) {
    _classCallCheck(this, Ajax);

    this._url = null;
    this._options = {
      // save response data to local store cache
      cache: false,
      // key prefix for local store cache
      prefix: "ajax_data_",
      // proxy url to preppend to outgoing requests
      proxy: ""
    };
    this.setOptions(options);
  }
  /**
   * Merge options
   * @param {object}  options  Options object
   */


  _createClass(Ajax, [{
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
    }
    /**
     * Convert object into a query string
     * @param {object}  data  Key/Val data pairs
     */

  }, {
    key: "serializeData",
    value: function serializeData(data) {
      var q = [];

      if (_typeof(data) === "object") {
        Object.keys(data).forEach(function (k) {
          q.push(encodeURIComponent(k) + "=" + encodeURIComponent(data[k]));
        });
      }

      return q.join("&");
    }
    /**
     * GET request alias
     */

  }, {
    key: "get",
    value: function get(address, options) {
      this.request("GET", address, options);
    }
    /**
     * POST request alias
     */

  }, {
    key: "post",
    value: function post(address, options) {
      this.request("POST", address, options);
    }
    /**
     * PUT request alias
     */

  }, {
    key: "put",
    value: function put(address, options) {
      this.request("PUT", address, options);
    }
    /**
     * DELETE request alias
     */

  }, {
    key: "delete",
    value: function _delete(address, options) {
      this.request("DELETE", address, options);
    }
    /**
     * AJAX request method
     * @param {string}  method   Request method verb
     * @param {string}  address  Endpoint URL
     * @param {object}  options  Request options
     */

  }, {
    key: "request",
    value: function request(method, address, options) {
      var _this = this;

      method = String(method || "").toUpperCase();
      address = String(address || "").trim();
      options = Object.assign({}, this._options, options); // setup options

      var isDone = false;
      var type = String(options.type || "text");
      var proxy = String(options.proxy || "").trim();
      var timeout = parseInt(options.timeout) || 0;
      var headers = Object.assign({}, options.headers);
      var cacheTime = parseInt(options.cache) || 0; // seconds to be cached

      var cacheKey = options.prefix + _utils__WEBPACK_IMPORTED_MODULE_1___default().unique(method + "|" + address);
      var xhr = new XMLHttpRequest(); // setup callbacks

      var onError = typeof options.error === "function" ? options.error : function () {};
      var onSuccess = typeof options.success === "function" ? options.success : function () {};
      var onDone = typeof options.done === "function" ? options.done : function () {}; // check params

      if (!method) return onError(xhr, 0, "Must specify a request method to make a new request.");
      if (!address) return onError(xhr, 0, "Must specify a request url address to make a new request."); // check cache

      if (cacheTime) {
        var cacheData = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getData(cacheKey);

        if (cacheData) {
          onSuccess(xhr, 200, cacheData);
          onDone(xhr, 200, cacheData);
          isDone = true;
          return;
        }
      } // resolve full request url


      var fullUrl = _utils__WEBPACK_IMPORTED_MODULE_1___default().fullUrl(address);

      try {
        this._url = new URL(fullUrl);
      } catch (err) {} // encode data for get requests


      if (method === "GET" && _typeof(options.data) === "object") {
        headers["Content-type"] = "application/x-www-form-urlencoded";
        fullUrl += "?" + this.serializeData(options.data);
        options.data = null;
      } // init request handler


      xhr.open(method, proxy + fullUrl, true);
      xhr.responseType = type; // set timeout

      if (timeout) {
        xhr.timeout = timeout < 1000 ? 1000 * timeout : timeout;
      } // default headers


      xhr.setRequestHeader("Accept", "application/json, text/plain, text/html, */*"); // send ajax header unless stated not to

      if (!options.notAjax) {
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      } // check for basic auth data and set header


      if (options.auth && _typeof(options.auth) === "object") {
        var username = String(options.auth.username || "").trim();
        var password = String(options.auth.password || "").trim();
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
      } // custom headers


      Object.keys(headers).forEach(function (name) {
        xhr.setRequestHeader(name, headers[name]);
      }); // data load handler

      xhr.addEventListener("load", function (e) {
        var _this$_responseParams = _this._responseParams("load", xhr, type),
            status = _this$_responseParams.status,
            response = _this$_responseParams.response,
            error = _this$_responseParams.error; //logger( status, method, fullUrl );
        //logger( response );


        if (status && status < 400) {
          if (cacheTime) _store__WEBPACK_IMPORTED_MODULE_0__["default"].setData(cacheKey, response, cacheTime);
          onSuccess(xhr, status, response);
        } else {
          onError(xhr, status, error);
        }

        if (!isDone) onDone(xhr, status, response);
        isDone = true;
      }); // request error handler

      xhr.addEventListener("error", function (e) {
        var _this$_responseParams2 = _this._responseParams("error", xhr, type),
            status = _this$_responseParams2.status,
            response = _this$_responseParams2.response,
            error = _this$_responseParams2.error;

        onError(xhr, status, error);
        if (!isDone) onDone(xhr, status, response);
        isDone = true;
      }); // request abort handler

      xhr.addEventListener("abort", function (e) {
        var _this$_responseParams3 = _this._responseParams("abort", xhr, type),
            status = _this$_responseParams3.status,
            response = _this$_responseParams3.response,
            error = _this$_responseParams3.error;

        onError(xhr, status, error);
        if (!isDone) onDone(xhr, status, response);
        isDone = true;
      }); // request timeout handler

      xhr.addEventListener("timeout", function (e) {
        var _this$_responseParams4 = _this._responseParams("timeout", xhr, type),
            status = _this$_responseParams4.status,
            response = _this$_responseParams4.response,
            error = _this$_responseParams4.error;

        onError(xhr, status, error);
        if (!isDone) onDone(xhr, status, response);
        isDone = true;
      }); // send the request

      xhr.send(options.data || null);
    }
    /**
     * Parse information about the response
     * @param {string}  evt   Event type
     * @param {object}  xhr   XMLHttpRequest object
     * @param {string}  type  Expected response type
     */

  }, {
    key: "_responseParams",
    value: function _responseParams(evt, xhr, type) {
      var hostname = this._url.hostname || "nohost";
      var status = xhr.status | 0;
      var response = type === "text" ? xhr.responseText : xhr.response;
      var error = "";

      if (evt === "load" && status >= 400 && response) {
        error = "".concat(hostname, "(").concat(status, "): ") + this._dataReduce(response);
      }

      if (evt === "error") {
        error = "".concat(hostname, "(").concat(status, "): The request has been aborted due to a network related problem.");
      }

      if (evt === "abort") {
        error = "".concat(hostname, "(").concat(status, "): The request has been aborted by the client before completing.");
      }

      if (evt === "timeout") {
        error = "".concat(hostname, "(").concat(status, "): The request has been aborted due to the server not responding.");
      }

      if ((status <= 0 || status >= 400) && !error) {
        error = "".concat(hostname, "(").concat(status, "): The request was rejected by the server and no error message was given.");
      }

      return {
        status: status,
        response: response,
        error: error
      };
    }
    /**
     * Reduce data object into a single string line.
     * @param {object}  data     Object or string to be scanned
     * @param {array}   output   Output array
     */

  }, {
    key: "_dataReduce",
    value: function _dataReduce(data, output) {
      var _this2 = this;

      output = output || [];

      if (data && typeof data === "string") {
        output.push(data);
      } else if (data && _typeof(data) === "object") {
        Object.keys(data).forEach(function (key) {
          _this2._dataReduce(data[key], output);
        });
      }

      return output.join(" | ").replace(/[\t\r\n\s]+/g, " ").trim();
    }
  }]);

  return Ajax;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfYWpheF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FHQTs7SUFDcUJFO0VBQ2pCO0FBQ0o7QUFDQTtBQUNBO0VBQ0ksY0FBWUMsT0FBWixFQUFxQjtJQUFBOztJQUNqQixLQUFLQyxJQUFMLEdBQVksSUFBWjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0I7TUFDWjtNQUNBQyxLQUFLLEVBQUUsS0FGSztNQUdaO01BQ0FDLE1BQU0sRUFBRSxZQUpJO01BS1o7TUFDQUMsS0FBSyxFQUFFO0lBTkssQ0FBaEI7SUFRQSxLQUFLQyxVQUFMLENBQWdCTixPQUFoQjtFQUNIO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7O1dBQ0ksb0JBQVdBLE9BQVgsRUFBb0I7TUFDaEJPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtOLFFBQW5CLEVBQTZCRixPQUE3QjtJQUNIO0lBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSx1QkFBY1MsSUFBZCxFQUFvQjtNQUNoQixJQUFJQyxDQUFDLEdBQUcsRUFBUjs7TUFDQSxJQUFJLFFBQU9ELElBQVAsTUFBZ0IsUUFBcEIsRUFBOEI7UUFDMUJGLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRixJQUFaLEVBQWtCRyxPQUFsQixDQUEwQixVQUFDQyxDQUFELEVBQU87VUFDN0JILENBQUMsQ0FBQ0ksSUFBRixDQUNJQyxrQkFBa0IsQ0FBQ0YsQ0FBRCxDQUFsQixHQUF3QixHQUF4QixHQUE4QkUsa0JBQWtCLENBQUNOLElBQUksQ0FBQ0ksQ0FBRCxDQUFMLENBRHBEO1FBR0gsQ0FKRDtNQUtIOztNQUNELE9BQU9ILENBQUMsQ0FBQ00sSUFBRixDQUFPLEdBQVAsQ0FBUDtJQUNIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksYUFBSUMsT0FBSixFQUFhakIsT0FBYixFQUFzQjtNQUNsQixLQUFLa0IsT0FBTCxDQUFhLEtBQWIsRUFBb0JELE9B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dUIsS0FBSyxDQUFDMUwsTUFBakMsQ0FBYixDQUFWO01BQ0EyTCxLQUFLO0lBQ1I7O0lBQ0QsT0FBTzlOLE1BQVA7RUFDSCxDQTdZWTtFQStZYjtFQUNBZ08sUUFoWmEsc0JBZ1pGO0lBQ1AsT0FBTyxDQUNIeE0sSUFBSSxDQUFDQyxHQUFMLEdBQVd3TSxRQUFYLENBQW9CLEVBQXBCLElBQTBCeEksSUFBSSxDQUFDNkcsTUFBTCxHQUFjMkIsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FEdkIsRUFFTDlRLFdBRkssRUFBUDtFQUdIO0FBcFpZLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJhc2ljIFhIUiBhamF4IHJlcXVlc3QgbW9kdWxlXG4gKi9cbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuLy9pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG4vLyBhamF4IGNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucyAgSW5pdGlhbCBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLl91cmwgPSBudWxsO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gc2F2ZSByZXNwb25zZSBkYXRhIHRvIGxvY2FsIHN0b3JlIGNhY2hlXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgICAvLyBrZXkgcHJlZml4IGZvciBsb2NhbCBzdG9yZSBjYWNoZVxuICAgICAgICAgICAgcHJlZml4OiBcImFqYXhfZGF0YV9cIixcbiAgICAgICAgICAgIC8vIHByb3h5IHVybCB0byBwcmVwcGVuZCB0byBvdXRnb2luZyByZXF1ZXN0c1xuICAgICAgICAgICAgcHJveHk6IFwiXCIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXJnZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBvcHRpb25zICBPcHRpb25zIG9iamVjdFxuICAgICAqL1xuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgb2JqZWN0IGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIGRhdGEgIEtleS9WYWwgZGF0YSBwYWlyc1xuICAgICAqL1xuICAgIHNlcmlhbGl6ZURhdGEoZGF0YSkge1xuICAgICAgICBsZXQgcSA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgICAgICBxLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba10pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxLmpvaW4oXCImXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdFVCByZXF1ZXN0IGFsaWFzXG4gICAgICovXG4gICAgZ2V0KGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwiR0VUXCIsIGFkZHJlc3MsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBPU1QgcmVxdWVzdCBhbGlhc1xuICAgICAqL1xuICAgIHBvc3QoYWRkcmVzcywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlcXVlc3QoXCJQT1NUXCIsIGFkZHJlc3MsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBVVCByZXF1ZXN0IGFsaWFzXG4gICAgICovXG4gICAgcHV0KGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwiUFVUXCIsIGFkZHJlc3MsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERFTEVURSByZXF1ZXN0IGFsaWFzXG4gICAgICovXG4gICAgZGVsZXRlKGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0KFwiREVMRVRFXCIsIGFkZHJlc3MsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFKQVggcmVxdWVzdCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIG1ldGhvZCAgIFJlcXVlc3QgbWV0aG9kIHZlcmJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGFkZHJlc3MgIEVuZHBvaW50IFVSTFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucyAgUmVxdWVzdCBvcHRpb25zXG4gICAgICovXG4gICAgcmVxdWVzdChtZXRob2QsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICAgICAgbWV0aG9kID0gU3RyaW5nKG1ldGhvZCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBhZGRyZXNzID0gU3RyaW5nKGFkZHJlc3MgfHwgXCJcIikudHJpbSgpO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gc2V0dXAgb3B0aW9uc1xuICAgICAgICBsZXQgaXNEb25lID0gZmFsc2U7XG4gICAgICAgIGxldCB0eXBlID0gU3RyaW5nKG9wdGlvbnMudHlwZSB8fCBcInRleHRcIik7XG4gICAgICAgIGxldCBwcm94eSA9IFN0cmluZyhvcHRpb25zLnByb3h5IHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgbGV0IHRpbWVvdXQgPSBwYXJzZUludChvcHRpb25zLnRpbWVvdXQpIHx8IDA7XG4gICAgICAgIGxldCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgbGV0IGNhY2hlVGltZSA9IHBhcnNlSW50KG9wdGlvbnMuY2FjaGUpIHx8IDA7IC8vIHNlY29uZHMgdG8gYmUgY2FjaGVkXG4gICAgICAgIGxldCBjYWNoZUtleSA9IG9wdGlvbnMucHJlZml4ICsgdXRpbHMudW5pcXVlKG1ldGhvZCArIFwifFwiICsgYWRkcmVzcyk7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAvLyBzZXR1cCBjYWxsYmFja3NcbiAgICAgICAgbGV0IG9uRXJyb3IgPVxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMuZXJyb3IgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5lcnJvclxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge307XG4gICAgICAgIGxldCBvblN1Y2Nlc3MgPVxuICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMuc3VjY2VzcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnN1Y2Nlc3NcbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBsZXQgb25Eb25lID1cbiAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmRvbmUgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMuZG9uZSA6IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICAgIC8vIGNoZWNrIHBhcmFtc1xuICAgICAgICBpZiAoIW1ldGhvZClcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKFxuICAgICAgICAgICAgICAgIHhocixcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIFwiTXVzdCBzcGVjaWZ5IGEgcmVxdWVzdCBtZXRob2QgdG8gbWFrZSBhIG5ldyByZXF1ZXN0LlwiXG4gICAgICAgICAgICApO1xuICAgICAgICBpZiAoIWFkZHJlc3MpXG4gICAgICAgICAgICByZXR1cm4gb25FcnJvcihcbiAgICAgICAgICAgICAgICB4aHIsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICBcIk11c3Qgc3BlY2lmeSBhIHJlcXVlc3QgdXJsIGFkZHJlc3MgdG8gbWFrZSBhIG5ldyByZXF1ZXN0LlwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIC8vIGNoZWNrIGNhY2hlXG4gICAgICAgIGlmIChjYWNoZVRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRGF0YSA9IHN0b3JlLmdldERhdGEoY2FjaGVLZXkpO1xuICAgICAgICAgICAgaWYgKGNhY2hlRGF0YSkge1xuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh4aHIsIDIwMCwgY2FjaGVEYXRhKTtcbiAgICAgICAgICAgICAgICBvbkRvbmUoeGhyLCAyMDAsIGNhY2hlRGF0YSk7XG4gICAgICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNvbHZlIGZ1bGwgcmVxdWVzdCB1cmxcbiAgICAgICAgbGV0IGZ1bGxVcmwgPSB1dGlscy5mdWxsVXJsKGFkZHJlc3MpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fdXJsID0gbmV3IFVSTChmdWxsVXJsKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgICAgIC8vIGVuY29kZSBkYXRhIGZvciBnZXQgcmVxdWVzdHNcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIiAmJiB0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiQ29udGVudC10eXBlXCJdID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIjtcbiAgICAgICAgICAgIGZ1bGxVcmwgKz0gXCI/XCIgKyB0aGlzLnNlcmlhbGl6ZURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbml0IHJlcXVlc3QgaGFuZGxlclxuICAgICAgICB4aHIub3BlbihtZXRob2QsIHByb3h5ICsgZnVsbFVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSB0eXBlO1xuXG4gICAgICAgIC8vIHNldCB0aW1lb3V0XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQgPCAxMDAwID8gMTAwMCAqIHRpbWVvdXQgOiB0aW1lb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdCBoZWFkZXJzXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgICAgXCJBY2NlcHRcIixcbiAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgdGV4dC9odG1sLCAqLypcIlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNlbmQgYWpheCBoZWFkZXIgdW5sZXNzIHN0YXRlZCBub3QgdG9cbiAgICAgICAgaWYgKCFvcHRpb25zLm5vdEFqYXgpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGJhc2ljIGF1dGggZGF0YSBhbmQgc2V0IGhlYWRlclxuICAgICAgICBpZiAob3B0aW9ucy5hdXRoICYmIHR5cGVvZiBvcHRpb25zLmF1dGggPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IFN0cmluZyhvcHRpb25zLmF1dGgudXNlcm5hbWUgfHwgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gU3RyaW5nKG9wdGlvbnMuYXV0aC5wYXNzd29yZCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBcIkJhc2ljIFwiICsgYnRvYSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3VzdG9tIGhlYWRlcnNcbiAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRhdGEgbG9hZCBoYW5kbGVyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgc3RhdHVzLCByZXNwb25zZSwgZXJyb3IgfSA9IHRoaXMuX3Jlc3BvbnNlUGFyYW1zKFxuICAgICAgICAgICAgICAgIFwibG9hZFwiLFxuICAgICAgICAgICAgICAgIHhocixcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvL2xvZ2dlciggc3RhdHVzLCBtZXRob2QsIGZ1bGxVcmwgKTtcbiAgICAgICAgICAgIC8vbG9nZ2VyKCByZXNwb25zZSApO1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzICYmIHN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZVRpbWUpIHN0b3JlLnNldERhdGEoY2FjaGVLZXksIHJlc3BvbnNlLCBjYWNoZVRpbWUpO1xuICAgICAgICAgICAgICAgIG9uU3VjY2Vzcyh4aHIsIHN0YXR1cywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yKHhociwgc3RhdHVzLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzRG9uZSkgb25Eb25lKHhociwgc3RhdHVzLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZXF1ZXN0IGVycm9yIGhhbmRsZXJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgc3RhdHVzLCByZXNwb25zZSwgZXJyb3IgfSA9IHRoaXMuX3Jlc3BvbnNlUGFyYW1zKFxuICAgICAgICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICB4aHIsXG4gICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG9uRXJyb3IoeGhyLCBzdGF0dXMsIGVycm9yKTtcbiAgICAgICAgICAgIGlmICghaXNEb25lKSBvbkRvbmUoeGhyLCBzdGF0dXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlcXVlc3QgYWJvcnQgaGFuZGxlclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBzdGF0dXMsIHJlc3BvbnNlLCBlcnJvciB9ID0gdGhpcy5fcmVzcG9uc2VQYXJhbXMoXG4gICAgICAgICAgICAgICAgXCJhYm9ydFwiLFxuICAgICAgICAgICAgICAgIHhocixcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgb25FcnJvcih4aHIsIHN0YXR1cywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKCFpc0RvbmUpIG9uRG9uZSh4aHIsIHN0YXR1cywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVxdWVzdCB0aW1lb3V0IGhhbmRsZXJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBzdGF0dXMsIHJlc3BvbnNlLCBlcnJvciB9ID0gdGhpcy5fcmVzcG9uc2VQYXJhbXMoXG4gICAgICAgICAgICAgICAgXCJ0aW1lb3V0XCIsXG4gICAgICAgICAgICAgICAgeGhyLFxuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBvbkVycm9yKHhociwgc3RhdHVzLCBlcnJvcik7XG4gICAgICAgICAgICBpZiAoIWlzRG9uZSkgb25Eb25lKHhociwgc3RhdHVzLCByZXNwb25zZSk7XG4gICAgICAgICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZW5kIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5zZW5kKG9wdGlvbnMuZGF0YSB8fCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGV2dCAgIEV2ZW50IHR5cGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIHhociAgIFhNTEh0dHBSZXF1ZXN0IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgdHlwZSAgRXhwZWN0ZWQgcmVzcG9uc2UgdHlwZVxuICAgICAqL1xuICAgIF9yZXNwb25zZVBhcmFtcyhldnQsIHhociwgdHlwZSkge1xuICAgICAgICBsZXQgaG9zdG5hbWUgPSB0aGlzLl91cmwuaG9zdG5hbWUgfHwgXCJub2hvc3RcIjtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHhoci5zdGF0dXMgfCAwO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0eXBlID09PSBcInRleHRcIiA/IHhoci5yZXNwb25zZVRleHQgOiB4aHIucmVzcG9uc2U7XG4gICAgICAgIGxldCBlcnJvciA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGV2dCA9PT0gXCJsb2FkXCIgJiYgc3RhdHVzID49IDQwMCAmJiByZXNwb25zZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBgJHtob3N0bmFtZX0oJHtzdGF0dXN9KTogYCArIHRoaXMuX2RhdGFSZWR1Y2UocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgZXJyb3IgPSBgJHtob3N0bmFtZX0oJHtzdGF0dXN9KTogVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWJvcnRlZCBkdWUgdG8gYSBuZXR3b3JrIHJlbGF0ZWQgcHJvYmxlbS5gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgPT09IFwiYWJvcnRcIikge1xuICAgICAgICAgICAgZXJyb3IgPSBgJHtob3N0bmFtZX0oJHtzdGF0dXN9KTogVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWJvcnRlZCBieSB0aGUgY2xpZW50IGJlZm9yZSBjb21wbGV0aW5nLmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2dCA9PT0gXCJ0aW1lb3V0XCIpIHtcbiAgICAgICAgICAgIGVycm9yID0gYCR7aG9zdG5hbWV9KCR7c3RhdHVzfSk6IFRoZSByZXF1ZXN0IGhhcyBiZWVuIGFib3J0ZWQgZHVlIHRvIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRpbmcuYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN0YXR1cyA8PSAwIHx8IHN0YXR1cyA+PSA0MDApICYmICFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSBgJHtob3N0bmFtZX0oJHtzdGF0dXN9KTogVGhlIHJlcXVlc3Qgd2FzIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIgYW5kIG5vIGVycm9yIG1lc3NhZ2Ugd2FzIGdpdmVuLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzLCByZXNwb25zZSwgZXJyb3IgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgZGF0YSBvYmplY3QgaW50byBhIHNpbmdsZSBzdHJpbmcgbGluZS5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIGRhdGEgICAgIE9iamVjdCBvciBzdHJpbmcgdG8gYmUgc2Nhbm5lZFxuICAgICAqIEBwYXJhbSB7YXJyYXl9ICAgb3V0cHV0ICAgT3V0cHV0IGFycmF5XG4gICAgICovXG4gICAgX2RhdGFSZWR1Y2UoZGF0YSwgb3V0cHV0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCB8fCBbXTtcblxuICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YVJlZHVjZShkYXRhW2tleV0sIG91dHB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0XG4gICAgICAgICAgICAuam9pbihcIiB8IFwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHRcXHJcXG5cXHNdKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgfVxufVxuIiwiLyoqXHJcbiAqIFdlYiBjYWNoZSBoYW5kbGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAvLyBsb2NhbCBwcm9wc1xyXG4gIF9hcGkgICAgOiAnbG9jYWxTdG9yYWdlJyxcclxuICBfcHJlZml4IDogJ3dlYmNhY2hlXycsXHJcbiAgX3R0bCAgICA6IDAsXHJcblxyXG4gIC8vIHNhdmUgZGF0YSB0byBjYWNoZVxyXG4gIHNldERhdGEoIGtleSwgZGF0YSwgdGltZSApIHtcclxuICAgIHJldHVybiB0aGlzLl9zYXZlKCBrZXksIGRhdGEsIHRpbWUgKTtcclxuICB9LFxyXG5cclxuICAvLyBnZXQgc2F2ZWQgZGF0YSBmb3IgYSBrZXkgYXMgaXNcclxuICBnZXREYXRhKCBrZXkgKSB7XHJcbiAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBkZWxldGUgc2F2ZWQgZGF0YSBmb3Iga2V5XHJcbiAgZGVsZXRlRGF0YSgga2V5ICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZSgga2V5ICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gc2FudGl6ZXIgZm9yIGtleXNcclxuICBfa2V5KCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4ICsgU3RyaW5nKCBrZXkgfHwgJycgKS5yZXBsYWNlKCAvW15cXHddKy9nLCAnXycgKTtcclxuICB9LFxyXG5cclxuICAvLyBlcnJvciBoYW5kbGVyXHJcbiAgX2Vycm9yKCBlICkge1xyXG4gICAgbGV0IF9jb2RlID0gZS5jb2RlICAgIHwgIDA7XHJcbiAgICBsZXQgX25hbWUgPSBlLm5hbWUgICAgfHwgJ1Vua25vd25FcnJvcic7XHJcbiAgICBsZXQgX2luZm8gPSBlLm1lc3NhZ2UgfHwgJ1Byb2JsZW0gd2l0aCAnICsgdGhpcy5fYXBpICsnIGJyb3dzZXIgQVBJLicgO1xyXG4gICAgY29uc29sZS5lcnJvciggJ1N0b3JhZ2VFcnJvciAoJysgX2NvZGUgKycpOicsIF9pbmZvLCAnKCcrIF9uYW1lICsnKS4nICk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IHNhdmluZyB0aGUgZGF0YSBhbmQgaGFuZGxlIGFueSBlcnJvcnNcclxuICBfc2F2ZSgga2V5LCBkYXRhLCB0dGwgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgICA9IHRoaXMuX2tleSgga2V5ICk7XHJcbiAgICAgIGNvbnN0IF90aW1lICAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCBfdHRsICAgID0gcGFyc2VJbnQoIHR0bCApIHx8IHRoaXMuX3R0bDtcclxuICAgICAgY29uc3QgX3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KCB7IF90aW1lLCBfdHRsLCBkYXRhIH0gKTtcclxuICAgICAgX3N0b3JlLnNldEl0ZW0oIF9rZXksIF9zdHJpbmcgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHRyeSBmZXRjaGluZyBkYXRhIGZvciBrZXlcclxuICBfZmV0Y2goIGtleSApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3BhcnNlZCA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICByZXR1cm4gKCBfcGFyc2VkICYmIF9wYXJzZWQuZGF0YSApID8gX3BhcnNlZC5kYXRhIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGRlbGV0aW5nIGRhdGEgYnkga2V5XHJcbiAgX2RlbGV0ZSgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIGNsZWFuIGFsbCBleHBpcmVkIGl0ZW1zIGZyb20gc3RvcmFnZVxyXG4gIF9jbGVhbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF90aW1lICA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAvLyBsb29wIGtleXNcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgX3N0b3JlLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgaXQncyBhIGtleSBtYW5hZ2VkIGJ5IHRoaXMgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgX2tleSA9IF9zdG9yZS5rZXkoIGkgKTtcclxuICAgICAgICBpZiAoIF9rZXkuaW5kZXhPZiggdGhpcy5fcHJlZml4ICkgPCAwICkgY29udGludWU7XHJcblxyXG4gICAgICAgIC8vIGdldCBkYXRhIGZvciBrZXlcclxuICAgICAgICBjb25zdCBfZGF0YSA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICAgIGlmICggIV9kYXRhLl90aW1lIHx8ICFfZGF0YS5fdHRsICkgY29udGludWU7IC8vIG5lZWQgdGhlc2VcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBhbmQgZGVsZXRlIGtleVxyXG4gICAgICAgIGNvbnN0IF9zZWNzID0gKCBfdGltZSAtIF9kYXRhLl90aW1lICkgLyAxMDAwO1xyXG4gICAgICAgIGlmICggX3NlY3MgPCBfZGF0YS5fdHRsICkgY29udGludWU7IC8vIHN0aWxsIGZyZXNoXHJcbiAgICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuIiwiLyoqXG4gKiBDb21tb24gdXRpbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gY29udmVydCB1cmwgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKHBhcnNlcilcbiAgICBwYXJzZVVybCh1cmwsIHByb3ApIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsZXQgZGF0YSA9IGxpbmtbcHJvcF0gfHwgXCJcIjtcbiAgICAgICAgbGluayA9IG51bGw7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IFVSTHMgaW50byBjbGlja2FibGUgbGlua3NcbiAgICBsaW5rVXJsKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoXG4gICAgICAgICAgICAvKGh0dHBzP1xcOlxcL1xcL1tcXHdcXC1cXC5cXD9cXD1cXCZcXCVcXC9cXCNdKykvZ2ksXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiQxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDE8L2E+J1xuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IGh0bWwgdGFncyB0byB0ZXh0IGNvbnRlbnRcbiAgICBzdHJpcEh0bWwodGV4dCwgcmVtb3ZlVXJscykge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gU3RyaW5nKGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8IFwiXCIpO1xuICAgICAgICBpZiAocmVtb3ZlVXJscylcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IHJlbGF0aXZlIHBhdGggdG8gZnVsbCB1cmxcbiAgICBmdWxsVXJsKHJlbHBhdGgpIHtcbiAgICAgICAgaWYgKC9eKFtcXHdcXC1dK1xcOik/XFwvXFwvLiokLy50ZXN0KHJlbHBhdGgpKSByZXR1cm4gcmVscGF0aDtcbiAgICAgICAgbGV0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgbGV0IHBhdGggPSBTdHJpbmcobG9jLnBhdGhuYW1lIHx8IFwiXCIpLnJlcGxhY2UoL1xcLyskL2csIFwiXCIpO1xuICAgICAgICBsZXQgcmVsID0gU3RyaW5nKHJlbHBhdGggfHwgXCJcIikucmVwbGFjZSgvXlxcLysvZywgXCJcIik7XG4gICAgICAgIHJldHVybiBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdCArIHBhdGggKyBcIi9cIiArIHJlbDtcbiAgICB9LFxuXG4gICAgLy8gcGxheSBhdWRpbyBmaWxlXG4gICAgcGxheUF1ZGlvKGZpbGUsIHZvbCkge1xuICAgICAgICBpZiAoIWZpbGUgfHwgdHlwZW9mIGZpbGUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgICAgLy8gbm9ybWFsaXplIHZvbHVtZVxuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCkgfHwgMTtcbiAgICAgICAgdm9sID0gdm9sID4gMSA/IHZvbCAvIDEwMCA6IHZvbDtcbiAgICAgICAgdm9sID0gdm9sID4gMSB8fCB2b2wgPCAwID8gMSA6IHZvbDtcbiAgICAgICAgLy8gbG9hZCBhbmQgcGxheSBhdWRpb1xuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgYXVkaW8uc3JjID0gdGhpcy5mdWxsVXJsKGZpbGUpO1xuICAgICAgICBhdWRpby52b2x1bWUgPSB2b2w7XG4gICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgfSk7XG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICB9LFxuXG4gICAgLy8gY29weSB0ZXh0IHRvIGNsaXBib2FyZFxuICAgIGNvcHlUZXh0KHRleHQpIHtcbiAgICAgICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICBlbG0udmFsdWUgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgIGVsbS5zZWxlY3QoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbG0ucmVtb3ZlKCksIDEwMDApO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgIH0sXG5cbiAgICAvLyBjbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgY2xhbXAobnVtLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xuICAgIH0sXG5cbiAgICAvLyBjdXQgcGFydCBvZiBhIHN0cmluZ1xuICAgIGxpbWl0KHN0ciwgbGVuZ3RoLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID4gbGVuZ3RoID8gc3RyLnN1YnN0cmluZygwLCBsZW5ndGgpICsgYXBwZW5kIDogc3RyO1xuICAgIH0sXG5cbiAgICAvLyBhbHdheSBrZWVwIGEgc3RyaW5nIGF0IGEgY2VydGFpbiBsZW5ndGhcbiAgICBmaWxsKHN0ciwgbGVuZ3RoLCBjaGFyLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMjA7XG4gICAgICAgIGNoYXIgPSBTdHJpbmcoY2hhciB8fCBcIiBcIik7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAzKSArIFwiLi4uXCI7XG4gICAgICAgIHJldHVybiBzdHIgKyBjaGFyLnJlcGVhdChsZW5ndGggLSBzdHIubGVuZ3RoKSArIGFwcGVuZDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IG5vdW4gd29yZCBmb3IgYSBudW1iZXJcbiAgICBub3VuKG51bSwgc2luZ3VsYXIsIHBsdXRhbCwgYXBwZW5kKSB7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBTdHJpbmcoXG4gICAgICAgICAgICBudW0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChudW0pID09PSAxID8gc2luZ3VsYXIgOiBwbHV0YWwpICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgYXBwZW5kXG4gICAgICAgICkudHJpbSgpO1xuICAgIH0sXG5cbiAgICAvLyBmb3JtYXQgbnVtYmVyIHRvIG1vbmV5XG4gICAgbW9uZXkobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgbGV0IG8gPSB7XG4gICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBmaXhlZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIG8pLmZvcm1hdChudW0pO1xuICAgIH0sXG5cbiAgICAvKm1vbmV5X2NjeHQobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgcmV0dXJuIGNjeHQuZGVjaW1hbFRvUHJlY2lzaW9uKFxuICAgICAgICAgICAgbnVtLFxuICAgICAgICAgICAgY2N4dC5ST1VORCxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgY2N4dC5TSUdOSUZJQ0FOVF9ESUdJVFMsXG4gICAgICAgICAgICBjY3h0LlBBRF9XSVRIX1pFUk9cbiAgICAgICAgKTtcbiAgICB9LCovXG5cbiAgICAvLyBmaXhlZCBudW1iZXJzXG4gICAgZml4ZWQobnVtLCBkZWNpbWFscykge1xuICAgICAgICBpZiAodHlwZW9mIGRlY2ltYWxzID09PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKG51bSkudG9GaXhlZChkZWNpbWFscyk7XG4gICAgICAgIGlmICgvKFVTRHxQQVh8REFJKS8udGVzdChkZWNpbWFscykpIHJldHVybiB0aGlzLm1vbmV5KG51bSwgMyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKDgpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgaW5mbyBhYm91dCBob3cgbG9uZyBzb21ldGhpbmcgaGFzIGJlZW5cbiAgICBlbGFwc2VkKHNlY3MsIHN1ZmZpeCwgc2hvcnQpIHtcbiAgICAgICAgc2VjcyA9IHBhcnNlSW50KHNlY3MpIHx8IDA7XG4gICAgICAgIGlmIChzaG9ydCAmJiBzZWNzIDwgNjApIHJldHVybiBcIkp1c3Qgbm93XCI7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgTTogTWF0aC5mbG9vcihzZWNzIC8gMjQxOTIwMCksXG4gICAgICAgICAgICB3OiBNYXRoLmZsb29yKChzZWNzIC8gNjA0ODAwKSAlIDQpLFxuICAgICAgICAgICAgZDogTWF0aC5mbG9vcigoc2VjcyAvIDg2NDAwKSAlIDcpLFxuICAgICAgICAgICAgaDogTWF0aC5mbG9vcigoc2VjcyAvIDM2MDApICUgMjQpLFxuICAgICAgICAgICAgbTogTWF0aC5mbG9vcigoc2VjcyAvIDYwKSAlIDYwKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFzaG9ydCkgZGF0YS5zID0gTWF0aC5mbG9vcihzZWNzICUgNjApO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtrXSkgbGlzdC5wdXNoKGRhdGFba10gKyBrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdWZmaXgpIGxpc3QucHVzaChzdWZmaXgpO1xuICAgICAgICByZXR1cm4gbGlzdC5qb2luKFwiIFwiKTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGRhdGEgYWJvdXQgY3VycmVudCBkYXRlIGFuZCB0aW1lXG4gICAgZGF0ZURhdGEodGltZSkge1xuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgLy8gdGltZXN0YW1wIG9yIGRhdGVzdHJpbmcsIGtlZXAgYXMgaXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGltZSA9PT0gXCJudW1iZXJcIiB8fCAvXltcXHdcXC1cXCtcXDpdKyQvLnRlc3QodGltZSkpIHtcbiAgICAgICAgICAgICAgICBub3cgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3RoZXIgc3RyaW5nLCBhc3N1bWUgdGltZXpvbmVcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgX3AgPSAobikgPT4gKG4gPCAxMCA/IFwiMFwiICsgbiA6IFwiXCIgKyBuKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgICAgICBsZXQgbW9udGggPSBbXG4gICAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF1bZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBkYXkgPSBfcChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIGxldCBtaW51dGUgPSBfcChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBfcChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgIGxldCBmdWxsaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgbGV0IGFtcG0gPSBmdWxsaCA+IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgICBsZXQgaG91ciA9IGZ1bGxoID4gMTIgPyBmdWxsaCAtIDEyIDogZnVsbGg7XG4gICAgICAgIGhvdXIgPSBfcChob3VyID09PSAwID8gMTIgOiBob3VyKTtcbiAgICAgICAgcmV0dXJuIHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IHJlYWRhYmxlIGRhdGVcbiAgICBkYXRlKHRpbWUsIGZ1bGwpIHtcbiAgICAgICAgbGV0IHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICBsZXQgb3V0ID0gW21vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXJdO1xuICAgICAgICBpZiAoZnVsbCkgb3V0LnB1c2goaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQsIGFtcG0pO1xuICAgICAgICByZXR1cm4gb3V0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgY3VycmVudCB0aW1lXG4gICAgdGltZSh0aW1lKSB7XG4gICAgICAgIGxldCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBhbXBtIH0gPSB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICByZXR1cm4gaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQgKyBcIiBcIiArIGFtcG07XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSBwZXJjZW50IGNoYW5nZVxuICAgIHBlcmNlbnQoY3VycmVudCwgbGFzdCwgdG9OdW0pIHtcbiAgICAgICAgbGV0IGlzbnVtID0gQm9vbGVhbihsYXN0ID4gMCk7XG4gICAgICAgIGxldCBpc3VwID0gQm9vbGVhbihjdXJyZW50ID49IGxhc3QpO1xuICAgICAgICBsZXQgY2hhbmdlID0gaXN1cCA/IGN1cnJlbnQgLSBsYXN0IDogbGFzdCAtIGN1cnJlbnQ7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaXNudW0gPyAoY2hhbmdlIC8gbGFzdCkgKiAxMDAuMCA6IDAuMDtcbiAgICAgICAgbGV0IHNpZ24gPSBpc3VwID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgbGV0IGFycm93ID0gaXN1cCA/IFwi4payXCIgOiBcIuKWvFwiO1xuICAgICAgICBsZXQgY29sb3IgPSBpc3VwID8gXCJncmVlblwiIDogXCJyZWRcIjtcbiAgICAgICAgaWYgKHRvTnVtID09PSB0cnVlKSByZXR1cm4gK051bWJlcihzaWduICsgcGVyY2VudCkudG9GaXhlZCgzKTtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlLCBwZXJjZW50LCBzaWduLCBhcnJvdywgY29sb3IgfTtcbiAgICB9LFxuXG4gICAgLy8gY2FsYyBjaGFydCBwb2ludHMgZm9yIGdpdmVuIGRpbWVuc2lvbnMgYW5kIHZhbHVlc1xuICAgIHBvaW50cyh3aWR0aCwgaGVpZ2h0LCB2YWx1ZXMpIHtcbiAgICAgICAgd2lkdGggPSBwYXJzZUZsb2F0KHdpZHRoKSB8fCAwO1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gdmFsdWVzIDogW107XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoKG4pID0+IHBhcnNlRmxvYXQobikgfHwgMCk7XG5cbiAgICAgICAgbGV0IG1pbiA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWluLCB2YWwpID0+ICh2YWwgPCBtaW4gPyB2YWwgOiBtaW4pLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBtYXggPSB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAgICAgKG1heCwgdmFsKSA9PiAodmFsID4gbWF4ID8gdmFsIDogbWF4KSxcbiAgICAgICAgICAgIHZhbHVlc1swXVxuICAgICAgICApO1xuICAgICAgICBsZXQgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgbGV0IGhhbGYgPSBoZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZ2UgPSBtYXggPiBtaW4gPyBtYXggLSBtaW4gOiBoZWlnaHQ7XG4gICAgICAgIGxldCBnYXAgPSBsZW4gPiAxID8gd2lkdGggLyAobGVuIC0gMSkgOiAxO1xuICAgICAgICBsZXQgb3V0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbGV0IGQgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICBsZXQgdmFsID0gMiAqICgoZCAtIG1pbikgLyByYW5nZSAtIDAuNSk7XG4gICAgICAgICAgICBsZXQgeCA9IGkgKiBnYXA7XG4gICAgICAgICAgICBsZXQgeSA9IC12YWwgKiBoYWxmICogMC44ICsgaGFsZjtcbiAgICAgICAgICAgIG91dC5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG5cbiAgICAvLyBjb21wdXRlIHBsYWNlbWVudCBmb3IgYW4gYWJzb2x1dGUgYm94IG9uIHRoZSBzY3JlZW5cbiAgICBib3hQb3NpdGlvbih0cmlnZ2VyRWxtKSB7XG4gICAgICAgIGxldCBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XSA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyRWxtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBib3ggPSB0cmlnZ2VyRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHBvc3ggPSBib3gubGVmdCArIHRyaWdnZXJFbG0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHBvc3kgPSBib3gudG9wICsgdHJpZ2dlckVsbS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgbGV0IGNlbnRlcnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIHRvcCA9IHBvc3kgPCBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmlnaHQgPSBwb3N4ID4gY2VudGVyeCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHBvc3kgPiBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgbGVmdCA9IHBvc3ggPCBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2hlY2sgYSBrZXktcHJlc3MgZXZlbnQgZm9yIHNvbWUgY29tbW9uIGtleXMgYmVpbmcgcHJlc3NlZFxuICAgIGtleWJvYXJkKGUpIHtcbiAgICAgICAgbGV0IGNvZGUgPSBlLmtleUNvZGUgfHwgZS5rZXkgfHwgMDtcbiAgICAgICAgbGV0IHVwID0gY29kZSA9PT0gMzg7XG4gICAgICAgIGxldCBkb3duID0gY29kZSA9PT0gNDA7XG4gICAgICAgIGxldCBsZWZ0ID0gY29kZSA9PT0gMzc7XG4gICAgICAgIGxldCByaWdodCA9IGNvZGUgPT09IDM5O1xuICAgICAgICBsZXQgYmFjayA9IGNvZGUgPT09IDg7XG4gICAgICAgIGxldCBlc2NhcGUgPSBjb2RlID09PSAyNztcbiAgICAgICAgbGV0IHNwYWNlID0gY29kZSA9PT0gMzI7XG4gICAgICAgIGxldCBlbnRlciA9IGNvZGUgPT09IDEzO1xuICAgICAgICByZXR1cm4geyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIGJhY2ssIGVzY2FwZSwgc3BhY2UsIGVudGVyIH07XG4gICAgfSxcblxuICAgIC8vIHNodWZmbGUgYW4gYXJyYXlcbiAgICBzaHVmZmxlKG8pIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBqLCB4LCBpID0gby5sZW5ndGg7XG4gICAgICAgICAgICBpO1xuICAgICAgICAgICAgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH0sXG5cbiAgICAvLyBkZWVwIG1lcmdlIG9iaiBhcmd1bWVudHNcbiAgICBkZWVwTWVyZ2UoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdW2tleV0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbaV1ba2V5XSA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcE1lcmdlKGFyZ3VtZW50c1swXVtrZXldLCBhcmd1bWVudHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1ba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfSxcblxuICAgIC8vIHNlYXJjaCBvYmplY3RzIGluIGEgbGlzdCBieSBrZXkgYW5kIHNlYXJjaCB0ZXh0XG4gICAgc2VhcmNoKGxpc3QsIGtleSwgdGV4dCwgZnVsbHdvcmQsIGZ1bGxjYXNlKSB7XG4gICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS5yZXBsYWNlKC9bXlxcd1xcc1xcfF0rL2csIFwiXCIpO1xuXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBmdWxsd29yZFxuICAgICAgICAgICAgICAgID8gXCJcXFxcYlwiICsgdGV4dC5yZXBsYWNlKC9bXFx8XSsvZywgXCJcXFxcYnxcXFxcYlwiKSArIFwiXFxcXGJcIlxuICAgICAgICAgICAgICAgIDogdGV4dDtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZnVsbGNhc2UgPyBcImdcIiA6IFwiZ2lcIjtcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFtdO1xuXG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgICAgICAgICAgIGlmIChTdHJpbmcobGlzdFtjb3VudF1ba2V5XSB8fCBcIlwiKS5zZWFyY2gocmVnZXgpIDwgMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gobGlzdFtjb3VudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gc29ydCBvYmplY3RzIGluIGFuIGFycmF5IGJ5IGEga2V5XG4gICAgc29ydChsaXN0LCBrZXksIG9yZGVyLCBpZ25vcmUpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBfYSA9IGFba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgX2IgPSBiW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgc3RyaW5ncyB1c2luZyBzYW1lIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgX2EgPSB0eXBlb2YgX2EgPT09IFwic3RyaW5nXCIgPyBfYS50b1VwcGVyQ2FzZSgpIDogX2E7XG4gICAgICAgICAgICAgICAgICAgIF9iID0gdHlwZW9mIF9iID09PSBcInN0cmluZ1wiID8gX2IudG9VcHBlckNhc2UoKSA6IF9iO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiYXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA+IF9iKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA8IF9iKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzdGFydCBvZiBhIGxpc3RcbiAgICB0cmltTGVmdChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZShsaXN0Lmxlbmd0aCAtIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyByZW1vdmUgaXRlbXMgZnJvbSB0aGUgZW5kIG9mIGEgbGlzdFxuICAgIHRyaW1SaWdodChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZSgwLCBtYXgpIDogbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlIHVuaXF1ZSBoYXNoIGZyb20gYSBzdHJpbmdcbiAgICB1bmlxdWUoc3RyKSB7XG4gICAgICAgIHN0ciA9IFN0cmluZyhzdHIgfHwgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXSsvZywgXCIgXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBsZXQgaGFzaCA9IDUzODEsXG4gICAgICAgICAgICBpID0gc3RyLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSkgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHJldHVybiBcInVucV9cIiArIChoYXNoID4+PiAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmFuZG9tIHN0cmluZyBmb3IgYSBnaXZlbiBsZW5ndGhcbiAgICByYW5kU3RyaW5nKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPVxuICAgICAgICAgICAgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuICAgICAgICBsZXQgdG90YWwgPSBwYXJzZUludChsZW5ndGgpIHx8IDEwO1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcblxuICAgICAgICB3aGlsZSAodG90YWwpIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgICAgICAgICB0b3RhbC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGdldCBhIHVuaXF1ZSBJRCBzdHJpbmcgdGhhdCB1c2VzIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhbmQgYSByYW5kb20gdmFsdWVcbiAgICBpZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpXG4gICAgICAgICkudG9VcHBlckNhc2UoKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJzdG9yZSIsInV0aWxzIiwiQWpheCIsIm9wdGlvbnMiLCJfdXJsIiwiX29wdGlvbnMiLCJjYWNoZSIsInByZWZpeCIsInByb3h5Iiwic2V0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImRhdGEiLCJxIiwia2V5cyIsImZvckVhY2giLCJrIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJhZGRyZXNzIiwicmVxdWVzdCIsIm1ldGhvZCIsIlN0cmluZyIsInRvVXBwZXJDYXNlIiwidHJpbSIsImlzRG9uZSIsInR5cGUiLCJ0aW1lb3V0IiwicGFyc2VJbnQiLCJoZWFkZXJzIiwiY2FjaGVUaW1lIiwiY2FjaGVLZXkiLCJ1bmlxdWUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uRXJyb3IiLCJlcnJvciIsIm9uU3VjY2VzcyIsInN1Y2Nlc3MiLCJvbkRvbmUiLCJkb25lIiwiY2FjaGVEYXRhIiwiZ2V0RGF0YSIsImZ1bGxVcmwiLCJVUkwiLCJlcnIiLCJzZXJpYWxpemVEYXRhIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNldFJlcXVlc3RIZWFkZXIiLCJub3RBamF4IiwiYXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJidG9hIiwibmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiX3Jlc3BvbnNlUGFyYW1zIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZXREYXRhIiwic2VuZCIsImV2dCIsImhvc3RuYW1lIiwicmVzcG9uc2VUZXh0IiwiX2RhdGFSZWR1Y2UiLCJvdXRwdXQiLCJrZXkiLCJyZXBsYWNlIiwiX2FwaSIsIl9wcmVmaXgiLCJfdHRsIiwidGltZSIsIl9zYXZlIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJfa2V5IiwiX2Vycm9yIiwiX2NvZGUiLCJjb2RlIiwiX25hbWUiLCJfaW5mbyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwidHRsIiwiX3N0b3JlIiwid2luZG93IiwiX3RpbWUiLCJEYXRlIiwibm93IiwiX3N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiX3BhcnNlZCIsInBhcnNlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsIl9kYXRhIiwiX3NlY3MiLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyc2VVcmwiLCJ1cmwiLCJwcm9wIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJsaW5rVXJsIiwidGV4dCIsInN0cmlwSHRtbCIsInJlbW92ZVVybHMiLCJkaXYiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImlubmVyVGV4dCIsInJlbHBhdGgiLCJ0ZXN0IiwibG9jIiwibG9jYXRpb24iLCJwYXRoIiwicGF0aG5hbWUiLCJyZWwiLCJwcm90b2NvbCIsImhvc3QiLCJwbGF5QXVkaW8iLCJmaWxlIiwidm9sIiwicGFyc2VGbG9hdCIsImF1ZGlvIiwiQXVkaW8iLCJzcmMiLCJ2b2x1bWUiLCJjcm9zc09yaWdpbiIsInBsYXkiLCJsb2FkIiwiY29weVRleHQiLCJlbG0iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2YWx1ZSIsInNlbGVjdCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJleGVjQ29tbWFuZCIsImNsYW1wIiwibnVtIiwibWluIiwibWF4IiwiTWF0aCIsImxpbWl0Iiwic3RyIiwiYXBwZW5kIiwic3Vic3RyaW5nIiwiZmlsbCIsImNoYXIiLCJyZXBlYXQiLCJub3VuIiwic2luZ3VsYXIiLCJwbHV0YWwiLCJtb25leSIsImZpeGVkIiwibyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImRlY2ltYWxzIiwiTnVtYmVyIiwidG9GaXhlZCIsImVsYXBzZWQiLCJzZWNzIiwic3VmZml4Iiwic2hvcnQiLCJsaXN0IiwiTSIsImZsb29yIiwidyIsImQiLCJoIiwibSIsInMiLCJkYXRlRGF0YSIsInRvTG9jYWxlU3RyaW5nIiwiX3AiLCJuIiwiZGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXkiLCJnZXREYXRlIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJmdWxsaCIsImdldEhvdXJzIiwiYW1wbSIsImhvdXIiLCJmdWxsIiwib3V0IiwicGVyY2VudCIsImN1cnJlbnQiLCJsYXN0IiwidG9OdW0iLCJpc251bSIsIkJvb2xlYW4iLCJpc3VwIiwiY2hhbmdlIiwic2lnbiIsImFycm93IiwiY29sb3IiLCJwb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJlZHVjZSIsInZhbCIsImxlbiIsImhhbGYiLCJyYW5nZSIsImdhcCIsIngiLCJ5IiwiYm94UG9zaXRpb24iLCJ0cmlnZ2VyRWxtIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiSFRNTEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3N4Iiwib2Zmc2V0V2lkdGgiLCJwb3N5Iiwib2Zmc2V0SGVpZ2h0IiwiY2VudGVyeCIsImlubmVyV2lkdGgiLCJjZW50ZXJ5IiwiaW5uZXJIZWlnaHQiLCJrZXlib2FyZCIsImtleUNvZGUiLCJ1cCIsImRvd24iLCJiYWNrIiwiZXNjYXBlIiwic3BhY2UiLCJlbnRlciIsInNodWZmbGUiLCJqIiwicmFuZG9tIiwiZGVlcE1lcmdlIiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJzZWFyY2giLCJmdWxsd29yZCIsImZ1bGxjYXNlIiwicmVnZXgiLCJSZWdFeHAiLCJjb3VudCIsInNvcnQiLCJvcmRlciIsImlnbm9yZSIsImEiLCJiIiwiX2EiLCJfYiIsInRyaW1MZWZ0Iiwic2xpY2UiLCJ0cmltUmlnaHQiLCJoYXNoIiwiY2hhckNvZGVBdCIsInJhbmRTdHJpbmciLCJjaGFycyIsInRvdGFsIiwiY2hhckF0IiwiaWRTdHJpbmciLCJ0b1N0cmluZyIsInN1YnN0ciJdLCJzb3VyY2VSb290IjoiIn0=