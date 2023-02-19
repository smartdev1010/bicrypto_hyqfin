"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_news_js"],{

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

/***/ "./resources/src/modules/news.js":
/*!***************************************!*\
  !*** ./resources/src/modules/news.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ News)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twitter */ "./resources/src/modules/twitter.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./resources/src/modules/store.js");
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
 * Twitter news handler class
 */




var News = /*#__PURE__*/function (_Bus) {
  _inherits(News, _Bus);

  var _super = _createSuper(News);

  /**
   * Constructor
   */
  function News() {
    var _this;

    _classCallCheck(this, News);

    _this = _super.call(this);
    _this._ajax = null;
    _this._accountsKey = 'news_accounts_data';
    _this._tweetsKey = 'news_tweets_data';
    _this._handlers = [];
    _this._tweets = [];
    _this._blacklist = [];
    _this._counter = 0;
    _this._interval = null;
    _this._options = {
      enabled: true,
      // aut re-fetch news on a timer
      interval: 5,
      // how often to try fetching from each source (secs)
      delay: 300,
      // how long to wait before fetching again from each source (secs)
      days: 1,
      // only show entries posted within this number of days
      tweets: 1,
      // how many tweets to fetch at once from each source
      total: 100 // max number of news entries to store in list

    };
    _this.tweetsHandler = _this.tweetsHandler.bind(_assertThisInitialized(_this));

    _this.setupTimer();

    return _this;
  }
  /**
   * Set ajax module reference to use for requests
   * @param {object}  ajax  Ajax class instance
   */


  _createClass(News, [{
    key: "useAjax",
    value: function useAjax(ajax) {
      this._ajax = ajax;
    }
    /**
     * Update options
     * @param {object}  options  Options object
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
      this.setupTimer();
      this.updateHandlers();
      this.filterTweets();
    }
    /**
     * Load saved accounts list from store
     */

  }, {
    key: "loadAccounts",
    value: function loadAccounts() {
      var accounts = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getData(this._accountsKey);
      if (!Array.isArray(accounts) || !accounts.length) return;
      this.importAccounts(accounts, true);
    }
    /**
     * Save accounts list to store
     */

  }, {
    key: "saveAccounts",
    value: function saveAccounts() {
      var accounts = this._handlers.map(function (tw) {
        return tw.handle;
      });

      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setData(this._accountsKey, accounts);
      this.emit('handlers', this._handlers);
    }
    /**
     * Load list of twitter handles
     * @param {array}    accounts  List of twitter handle string names
     * @param {boolean}  reset     Reset current list of loaded handlers
     * @param {boolean}  save      Save list of account after importing
     */

  }, {
    key: "importAccounts",
    value: function importAccounts(accounts, reset, save) {
      accounts = Array.isArray(accounts) ? accounts : [];
      var count = 0; // reset current list, if a new list is available

      if (reset && accounts.length) this._handlers = []; // import new accounts list

      var _iterator = _createForOfIteratorHelper(accounts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var handle = _step.value;
          this.trackAccount(handle) && count++;
        } // save accounts back to store, or just emit loaded list

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (save) {
        this.saveAccounts();
      } else {
        this.emit('handlers', this._handlers);
      }

      return count;
    }
    /**
     * Checks if a handle is already being tracked
     * @param {string}  handle  Twitter handle
     */

  }, {
    key: "tracking",
    value: function tracking(handle) {
      if (!handle || typeof handle !== 'string') return false;
      return this._handlers.filter(function (tw) {
        return tw.handle === handle;
      }).length ? true : false;
    }
    /**
     * Start tracking a new twitter account
     * @param {string}   handle  Twitter handle
     * @param {boolean}  fetch   Fetch tweets after adding
     * @param {boolean}  save    Save accounts after adding
     */

  }, {
    key: "trackAccount",
    value: function trackAccount(handle, fetch, save) {
      if (!handle || typeof handle !== 'string') return false;
      if (this.tracking(handle)) return false; // create new handler, add to list and update options

      var tw = new _twitter__WEBPACK_IMPORTED_MODULE_1__["default"](handle);
      this.updateHandlers(tw);

      this._handlers.push(tw); // fetch tweets now if needed and emit event


      if (fetch) tw.fetchTweets(this._ajax, this.tweetsHandler);
      if (save) this.saveAccounts();
      return true;
    }
    /**
     * Stop tracking a twitter account
     * @param {string}  handle  Twitter handle
     */

  }, {
    key: "untrackAccount",
    value: function untrackAccount(handle) {
      if (!handle || typeof handle !== 'string') return false; // get handler that is being removed from the list, if it exists

      var tw = this._handlers.filter(function (tw) {
        return tw.handle === handle;
      }).shift();

      if (!tw) return true; // remove handler from the list and emit events

      this._handlers = this._handlers.filter(function (tw) {
        return tw.handle !== handle;
      });
      this._tweets = this._tweets.filter(function (t) {
        return t.handle !== handle;
      });
      this.saveAccounts();
      this.saveTweets();
      return true;
    }
    /**
     * Update options for each Twitter handler
     */

  }, {
    key: "updateHandlers",
    value: function updateHandlers(tw) {
      var fetchDelay = parseInt(this._options.delay) || 300;
      var limitCount = parseInt(this._options.tweets) || 1;
      if (tw instanceof _twitter__WEBPACK_IMPORTED_MODULE_1__["default"]) return tw.setOptions({
        fetchDelay: fetchDelay,
        limitCount: limitCount
      });

      this._handlers.forEach(function (tw) {
        return tw.setOptions({
          fetchDelay: fetchDelay,
          limitCount: limitCount
        });
      });
    }
    /**
     * Load cached tweets from store
     */

  }, {
    key: "loadTweets",
    value: function loadTweets() {
      var tweets = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getData(this._tweetsKey);
      if (!Array.isArray(tweets) || !tweets.length) return;
      this._tweets = tweets;
      this.resetTweets();
      this.filterTweets();
      this.saveTweets();
    }
    /**
     * Save current tweets to store
     */

  }, {
    key: "saveTweets",
    value: function saveTweets() {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].setData(this._tweetsKey, this._tweets);
      this.emit('tweets', this._tweets);
    }
    /**
     * Reset new entries indicator
     */

  }, {
    key: "resetTweets",
    value: function resetTweets() {
      this._tweets.forEach(function (t) {
        t.isNew = false;
      });

      this.saveTweets();
    }
    /**
     * Flush tweets list
     */

  }, {
    key: "flushTweets",
    value: function flushTweets() {
      this._tweets = [];
      this._blacklist = [];
      this.saveTweets();
    }
    /**
     * Remove tweet from list and add ID to blacklist
     * @param {string}  id  Tweet ID
     */

  }, {
    key: "blockTweet",
    value: function blockTweet(id) {
      if (!id) return false;
      this._tweets = this._tweets.filter(function (t) {
        return t.id !== id;
      });
      this._blacklist = this._blacklist.filter(function (tid) {
        return tid !== id;
      });

      this._blacklist.push(id);

      this.saveTweets();
      return true;
    }
    /**
     * Add new tweet object to the list
     * @param {object}  tweet  Tweet object
     */

  }, {
    key: "addTweet",
    value: function addTweet(tweet) {
      if (!tweet || !('id' in tweet)) return false;
      if (this.tweetExists(tweet)) return false;
      if (this.tweetBlocked(tweet)) return false;
      if (this.tweetExpired(tweet)) return false;
      tweet.isNew = true; // for indicator

      this._tweets.push(tweet);

      return true;
    }
    /**
     * Checks if a tweet is in the list of news
     * @param {object}  tweet  Tweet object
     */

  }, {
    key: "tweetExists",
    value: function tweetExists(tweet) {
      if (!tweet || !('id' in tweet)) return false;
      return this._tweets.filter(function (t) {
        return t.id === tweet.id;
      }).length ? true : false;
    }
    /**
     * Checks if a tweet is in the blocklist
     * @param {object}  tweet  Tweet object
     */

  }, {
    key: "tweetBlocked",
    value: function tweetBlocked(tweet) {
      if (!tweet || !('id' in tweet)) return false;
      return this._blacklist.filter(function (id) {
        return id === tweet.id;
      }).length ? true : false;
    }
    /**
     * Checks if a tweet is too old, based on option
     * @param {object}  tweet  Tweet object
     */

  }, {
    key: "tweetExpired",
    value: function tweetExpired(tweet) {
      if (!tweet || !('id' in tweet)) return false;
      var days = parseInt(this._options.days) | 0;
      var secs = (Date.now() - tweet.time) / 1000;
      var age = Math.ceil(secs / 86400);
      return age > days ? true : false;
    }
    /**
     * Handles new tweets that are fetched from the Twitter class
     * @param {string}  err    Error string (empty on success)
     * @param {array}  tweets  Tweets array (empty on error)
     */

  }, {
    key: "tweetsHandler",
    value: function tweetsHandler(err, tweets) {
      if (err) return this.emit('error', err);
      if (!tweets.length) return;

      var _iterator2 = _createForOfIteratorHelper(tweets),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tweet = _step2.value;
          // it's possible added tweets can get removed due to filtering...
          var added = this.addTweet(tweet);
          this.filterTweets(); // double check if the tweet survived and emit it

          if (added && this.tweetExists(tweet)) {
            this.emit('tweet', tweet);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.saveAccounts();
      this.saveTweets();
    }
    /**
     * Cleanup tweets list
     */

  }, {
    key: "filterTweets",
    value: function filterTweets() {
      var _this2 = this;

      var total = parseInt(this._options.total); // filter out old tweets

      this._tweets = this._tweets.filter(function (tweet) {
        return !_this2.tweetExpired(tweet);
      }); // sort tweets from new to old

      this._tweets = this._tweets.sort(function (a, b) {
        if (a.time > b.time) return -1;
        if (a.time < b.time) return 1;
        return 0;
      }); // trim tweets list

      if (total) {
        this._tweets = this._tweets.slice(0, total);
      }
    }
    /**
     * Fetch tweets for an account by handle
     * @param {string}  handle  Twitter handle
     */

  }, {
    key: "fetchByHandle",
    value: function fetchByHandle(handle) {
      if (!handle || typeof handle !== 'string') return false;

      var tw = this._handlers.filter(function (tw) {
        return tw.handle === handle;
      }).shift();

      if (tw) tw.fetchTweets(this._ajax, this.tweetsHandler);
      return true;
    }
    /**
     * Fetch tweets from next handler down the list
     */

  }, {
    key: "fetchNextHandler",
    value: function fetchNextHandler() {
      if (!this._handlers.length) return;
      var last = this._handlers.length - 1;
      var tw = this._handlers[this._counter];
      if (tw) tw.fetchTweets(this._ajax, this.tweetsHandler);
      this._counter = this._counter < last ? this._counter + 1 : 0;
    }
    /**
     * Start the tweets interval handler
     */

  }, {
    key: "setupTimer",
    value: function setupTimer() {
      var _this3 = this;

      this.stopTimer();
      var secs = parseInt(this._options.interval);
      if (!secs) return;
      this._interval = setInterval(function () {
        if (!_this3._options.enabled) return;

        _this3.fetchNextHandler();
      }, 1000 * secs);
    }
    /**
     * Stop the tweets interval handler
     */

  }, {
    key: "stopTimer",
    value: function stopTimer() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
  }]);

  return News;
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

/***/ }),

/***/ "./resources/src/modules/twitter.js":
/*!******************************************!*\
  !*** ./resources/src/modules/twitter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Twitter)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Twitter scraper and tweets manager class.
 */
var Twitter = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {string}  handle   Twitter handle
   * @param {object}  options  Fetching options
   */
  function Twitter(handle, options) {
    _classCallCheck(this, Twitter);

    if (!handle || typeof handle !== 'string') {
      throw 'Must provide a valid twitter handle string.';
    }

    this.uid = '';
    this.handle = '';
    this.name = '';
    this.avatar = '';
    this.url = '';
    this.error = '';
    this.last = 0;
    this.fetching = false;
    this._options = {
      skipPinned: true,
      // ignore pinned tweets
      skipRetweet: true,
      // ignore re-tweets
      cleanTweets: true,
      // strip html and whitespace from tweets
      fetchDelay: 300,
      // prevent re-fetching for (secs)
      limitCount: 1 // limit number of tweets parsed

    };
    this.setOptions(options);
    this.setData({
      handle: handle,
      name: handle
    });
  }
  /**
    * Update options
    * @param {object}  options  Options object
    */


  _createClass(Twitter, [{
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
    }
    /**
     * Set new acocunt data
     * @param {object} data  Twitter account data
     */

  }, {
    key: "setData",
    value: function setData(data) {
      if (_typeof(data) !== 'object') return;
      if (data.uid) this.uid = String(this.uid).replace(/[^\w\-]+/g, '');
      if (data.handle) this.handle = String(data.handle).replace(/[^\w\-]+/g, '');
      if (data.name) this.name = String(data.name).replace(/[\r\n\s\t]+/g, ' ').trim();
      if (data.avatar) this.avatar = String(data.avatar).trim();
      this.url = 'https://twitter.com/' + this.handle;
    }
    /**
     * Get account info
     */

  }, {
    key: "getData",
    value: function getData() {
      var uid = this.uid,
          handle = this.handle,
          name = this.name,
          avatar = this.avatar,
          url = this.url,
          last = this.last,
          fetching = this.fetching,
          error = this.error;
      return {
        uid: uid,
        handle: handle,
        name: name,
        avatar: avatar,
        url: url,
        last: last,
        fetching: fetching,
        error: error
      };
    }
    /**
     * Fetch remote tweets using ajax module
     * @param {object}    ajax      Ajax module instance to use for request
     * @param {function}  callback  Callback function
     */

  }, {
    key: "fetchTweets",
    value: function fetchTweets(ajax, callback) {
      var _this = this;

      if (!callback || typeof callback !== 'function') return;
      if (!ajax || _typeof(ajax) !== 'object') return callback('Must provide an ajax module reference.', []);
      if (!this._canFetch()) return callback('', []); // too soon, ignore

      this.fetching = true;
      this.error = '';
      ajax.get(this.url, {
        type: 'text',
        timeout: 30,
        notAjax: true,
        done: function done(xhr, status, response) {
          _this.fetching = false;
        },
        error: function error(xhr, status, _error) {
          _this.error = _error + ' | @' + _this.handle + '.';
          return callback(_this.error, []);
        },
        success: function success(xhr, status, response) {
          var parser = new DOMParser();

          var html = _this._cleanHtml(response);

          var doc = parser.parseFromString(html, 'text/html');

          if (doc && doc instanceof HTMLDocument) {
            _this.last = Date.now();
            callback('', _this.parseTweets(doc));
          } else {
            _this.error = 'DOMParserError: Could not parse response from ' + _this.url;
            callback(_this.error, []);
          }

          parser = null;
          html = null;
          doc = null;
        }
      });
    }
    /**
     * Parse account and tweets data from a fetched HTML response
     * @param {HTMLDocument}  doc  Twitter account page document
     */

  }, {
    key: "parseTweets",
    value: function parseTweets(doc) {
      var limit = this._options.limitCount | 0;
      var count = 0;
      var output = []; // look for profile avatar

      var avatar = doc.querySelector('img.ProfileAvatar-image');
      avatar = avatar ? avatar.src : ''; // look for items

      var items = doc.querySelectorAll('.stream-item') || []; // loop tweet list items

      for (var i = 0; i < items.length; ++i) {
        if (limit && count >= limit) break; // look for tweet data

        var item = items[i];
        var tweet = item ? item.querySelector('.js-stream-tweet') : null; // metadata tag

        var posted = item ? item.querySelector('.js-short-timestamp') : null; // date tag

        var content = item ? item.querySelector('.js-tweet-text') : null; // tweet wrapper

        var text = ''; // look for account info

        var id = tweet ? tweet.getAttribute('data-tweet-id') || '' : '';
        var uid = tweet ? tweet.getAttribute('data-user-id') || '' : '';
        var name = tweet ? tweet.getAttribute('data-name') || '' : '';
        var handle = tweet ? tweet.getAttribute('data-screen-name') || '' : '';
        var link = tweet ? 'https://twitter.com' + tweet.getAttribute('data-permalink-path') || 0 : '';
        var time = posted ? Number(posted.getAttribute('data-time-ms')) || 0 : 0; // update profile details

        this.setData({
          uid: uid,
          handle: handle,
          name: name,
          avatar: avatar
        }); // resolve tweet text

        if (content) {
          text = this._options.cleanTweets ? this._cleanTweet(content.textContent) : String(content.innerHTML || '').trim();
        } // check a few things, skip if needed


        if (!id || !uid || !name || !handle || !text || !time || time < 0) continue;
        if (this._options.skipPinned && item.classList.contains('js-pinned')) continue;
        if (this._options.skipRetweet && tweet.hasAttribute('data-retweet-id')) continue; // format time

        var d = new Date(time);
        var date = d.toDateString(); // add tweet to list and update account info

        output.push({
          id: id,
          uid: uid,
          time: time,
          date: date,
          name: name,
          handle: handle,
          avatar: avatar,
          text: text,
          link: link
        });
        count++;
      }

      items = null;
      return output;
    }
    /**
     * Check last fetch time to see if it's ok to fetch again
     */

  }, {
    key: "_canFetch",
    value: function _canFetch() {
      var now = Date.now();
      var elapsed = Math.floor((now - this.last) / 1000);
      var delay = this._options.fetchDelay | 0;
      if (this.fetching || this.last >= now) return false; // busy, wait

      if (delay && elapsed < delay) return false; // too soon, wait

      return true; // looks good
    }
    /**
     * Clean tweet text
     * @param {string}  text  Strign to clean
     */

  }, {
    key: "_cleanTweet",
    value: function _cleanTweet(text) {
      return String(text || '').replace(/([^\s]+)(https?\:|pic\.)/g, '$1 $2') // add space around links
      .replace('pic.twitter', 'https://pic.twitter') // fix some links without proto
      .replace(/([\`\'\’]+)/g, "'") // normalize apostrophes
      .replace(/([\“\”\“\”\"]+)/g, '"') // normalize quotes
      .replace(/[\…\#\$]+/g, ' ') // remove some junk chars
      .replace(/[\t\r\n\s\uFEFF\xA0]+/g, ' ').trim(); // collapse whitespace
    }
    /**
     * Clean html content
     * @param {string}  html  HTML text to clean
     */

  }, {
    key: "_cleanHtml",
    value: function _cleanHtml(html) {
      return String(html || '').replace(/<(style|script)[^>]*>(?:(?!<\/(style|script)>)[^])*<\/(style|script)>/gim, '').replace(/[\r\n\s\t]+/g, ' ').trim();
    }
  }]);

  return Twitter;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfbmV3c19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ3FCQTtFQUVuQjtBQUNGO0FBQ0E7RUFDRSxlQUFjO0lBQUE7O0lBQ1osS0FBS0MsT0FBTCxHQUFlLEVBQWY7RUFDRDtFQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsWUFBSUMsSUFBSixFQUFVQyxRQUFWLEVBQXFCO01BQ25CLElBQUssQ0FBQ0QsSUFBRCxJQUFTLE9BQU9BLElBQVAsS0FBZ0IsUUFBOUIsRUFBeUM7TUFDekMsSUFBSyxPQUFPQyxRQUFQLEtBQW9CLFVBQXpCLEVBQXNDO01BQ3RDLElBQUssQ0FBQyxLQUFLRixPQUFMLENBQWFHLGNBQWIsQ0FBNkJGLElBQTdCLENBQU4sRUFBNEMsS0FBS0QsT0FBTCxDQUFjQyxJQUFkLElBQXVCLEVBQXZCOztNQUM1QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsRUFBcUJHLElBQXJCLENBQTJCRixRQUEzQjtJQUNEO0lBRUQ7QUFDRjtBQUNBOzs7O1dBQ0UsZ0JBQU87TUFDTCxJQUFJRyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFZQyxTQUFaLENBQVg7TUFDQSxJQUFJUCxJQUFJLEdBQUdJLElBQUksQ0FBQ0ksTUFBTCxHQUFjSixJQUFJLENBQUNLLEtBQUwsRUFBZCxHQUE2QixFQUF4Qzs7TUFFQSxJQUFLLEtBQUtWLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTCxFQUEyQztRQUN6QyxLQUFNLElBQUlVLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsS0FBS1gsT0FBTCxDQUFjQyxJQUFkLEVBQXFCUSxNQUExQyxFQUFrRCxFQUFFRSxDQUFwRCxFQUF3RDtVQUN0RCxJQUFJQyxFQUFFLEdBQUcsS0FBS1osT0FBTCxDQUFjQyxJQUFkLEVBQXNCVSxDQUF0QixDQUFUO1VBQ0FDLEVBQUUsQ0FBQ0MsS0FB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RyxZQUxILEVBS2lCLEdBTGpCLEVBS3VCO01BTHZCLENBTU5BLE9BTk0sQ0FNRyx3QkFOSCxFQU02QixHQU43QixFQU1tQ2dDLElBTm5DLEVBQVAsQ0FEa0IsQ0FPZ0M7SUFDbkQ7SUFFRDtBQUNGO0FBQ0E7QUFDQTs7OztXQUNFLG9CQUFZYSxJQUFaLEVBQW1CO01BQ2pCLE9BQU85QyxNQUFNLENBQUU4QyxJQUFJLElBQUksRUFBVixDQUFOLENBQ043QyxPQURNLENBQ0csMEVBREgsRUFDK0UsRUFEL0UsRUFFTkEsT0FGTSxDQUVHLGNBRkgsRUFFbUIsR0FGbkIsRUFHTmdDLElBSE0sRUFBUDtJQUlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2J1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvbmV3cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3R3aXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhc2ljIGV2ZW50IGJ1cyBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBuYW1lICAgICAgRXZlbnQgbmFtZVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgRXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbiggbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICBpZiAoICFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIGlmICggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgcmV0dXJuO1xyXG4gICAgaWYgKCAhdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB0aGlzLl9ldmVudHNbIG5hbWUgXSA9IFtdO1xyXG4gICAgdGhpcy5fZXZlbnRzWyBuYW1lIF0ucHVzaCggY2FsbGJhY2sgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgYnkgbmFtZSAoZmlyc3QgYXJnKSB3aXRoIHJlc3Qgb2YgYXJncyBwYXNzZWQgdG8gaXRcclxuICAgKi9cclxuICBlbWl0KCkge1xyXG4gICAgbGV0IGFyZ3MgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcclxuICAgIGxldCBuYW1lID0gYXJncy5sZW5ndGggPyBhcmdzLnNoaWZ0KCkgOiAnJztcclxuXHJcbiAgICBpZiAoIHRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkge1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHNbIG5hbWUgXS5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICBsZXQgY2IgPSB0aGlzLl9ldmVudHNbIG5hbWUgXVsgaSBdO1xyXG4gICAgICAgIGNiLmFwcGx5KCBjYiwgYXJncyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcmdzID0gdW5kZWZpbmVkOyAvLyBnY1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogVHdpdHRlciBuZXdzIGhhbmRsZXIgY2xhc3NcclxuICovXHJcbmltcG9ydCBCdXMgZnJvbSAnLi9idXMnO1xyXG5pbXBvcnQgVHdpdHRlciBmcm9tICcuL3R3aXR0ZXInO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzIGV4dGVuZHMgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9hamF4ICAgICAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9hY2NvdW50c0tleSA9ICduZXdzX2FjY291bnRzX2RhdGEnO1xyXG4gICAgdGhpcy5fdHdlZXRzS2V5ICAgPSAnbmV3c190d2VldHNfZGF0YSc7XHJcbiAgICB0aGlzLl9oYW5kbGVycyAgICA9IFtdO1xyXG4gICAgdGhpcy5fdHdlZXRzICAgICAgPSBbXTtcclxuICAgIHRoaXMuX2JsYWNrbGlzdCAgID0gW107XHJcbiAgICB0aGlzLl9jb3VudGVyICAgICA9IDA7XHJcbiAgICB0aGlzLl9pbnRlcnZhbCAgICA9IG51bGw7XHJcbiAgICB0aGlzLl9vcHRpb25zICAgICA9IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSwgIC8vIGF1dCByZS1mZXRjaCBuZXdzIG9uIGEgdGltZXJcclxuICAgICAgaW50ZXJ2YWw6IDUsICAgIC8vIGhvdyBvZnRlbiB0byB0cnkgZmV0Y2hpbmcgZnJvbSBlYWNoIHNvdXJjZSAoc2VjcylcclxuICAgICAgZGVsYXk6IDMwMCwgICAgIC8vIGhvdyBsb25nIHRvIHdhaXQgYmVmb3JlIGZldGNoaW5nIGFnYWluIGZyb20gZWFjaCBzb3VyY2UgKHNlY3MpXHJcbiAgICAgIGRheXM6IDEsICAgICAgICAvLyBvbmx5IHNob3cgZW50cmllcyBwb3N0ZWQgd2l0aGluIHRoaXMgbnVtYmVyIG9mIGRheXNcclxuICAgICAgdHdlZXRzOiAxLCAgICAgIC8vIGhvdyBtYW55IHR3ZWV0cyB0byBmZXRjaCBhdCBvbmNlIGZyb20gZWFjaCBzb3VyY2VcclxuICAgICAgdG90YWw6IDEwMCwgICAgIC8vIG1heCBudW1iZXIgb2YgbmV3cyBlbnRyaWVzIHRvIHN0b3JlIGluIGxpc3RcclxuICAgIH07XHJcbiAgICB0aGlzLnR3ZWV0c0hhbmRsZXIgPSB0aGlzLnR3ZWV0c0hhbmRsZXIuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5zZXR1cFRpbWVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgYWpheCBtb2R1bGUgcmVmZXJlbmNlIHRvIHVzZSBmb3IgcmVxdWVzdHNcclxuICAgKiBAcGFyYW0ge29iamVjdH0gIGFqYXggIEFqYXggY2xhc3MgaW5zdGFuY2VcclxuICAgKi9cclxuICB1c2VBamF4KCBhamF4ICkge1xyXG4gICAgdGhpcy5fYWpheCA9IGFqYXg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucyAgT3B0aW9ucyBvYmplY3RcclxuICAgKi9cclxuICBzZXRPcHRpb25zKCBvcHRpb25zICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbiggdGhpcy5fb3B0aW9ucywgb3B0aW9ucyApO1xyXG4gICAgdGhpcy5zZXR1cFRpbWVyKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCk7XHJcbiAgICB0aGlzLmZpbHRlclR3ZWV0cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZCBzYXZlZCBhY2NvdW50cyBsaXN0IGZyb20gc3RvcmVcclxuICAgKi9cclxuICBsb2FkQWNjb3VudHMoKSB7XHJcbiAgICBsZXQgYWNjb3VudHMgPSBzdG9yZS5nZXREYXRhKCB0aGlzLl9hY2NvdW50c0tleSApO1xyXG4gICAgaWYgKCAhQXJyYXkuaXNBcnJheSggYWNjb3VudHMgKSB8fCAhYWNjb3VudHMubGVuZ3RoICkgcmV0dXJuO1xyXG4gICAgdGhpcy5pbXBvcnRBY2NvdW50cyggYWNjb3VudHMsIHRydWUgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmUgYWNjb3VudHMgbGlzdCB0byBzdG9yZVxyXG4gICAqL1xyXG4gIHNhdmVBY2NvdW50cygpIHtcclxuICAgIGxldCBhY2NvdW50cyA9IHRoaXMuX2hhbmRsZXJzLm1hcCggdHcgPT4gdHcuaGFuZGxlICk7XHJcbiAgICBzdG9yZS5zZXREYXRhKCB0aGlzLl9hY2NvdW50c0tleSwgYWNjb3VudHMgKTtcclxuICAgIHRoaXMuZW1pdCggJ2hhbmRsZXJzJywgdGhpcy5faGFuZGxlcnMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWQgbGlzdCBvZiB0d2l0dGVyIGhhbmRsZXNcclxuICAgKiBAcGFyYW0ge2FycmF5fSAgICBhY2NvdW50cyAgTGlzdCBvZiB0d2l0dGVyIGhhbmRsZSBzdHJpbmcgbmFtZXNcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICByZXNldCAgICAgUmVzZXQgY3VycmVudCBsaXN0IG9mIGxvYWRlZCBoYW5kbGVyc1xyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gIHNhdmUgICAgICBTYXZlIGxpc3Qgb2YgYWNjb3VudCBhZnRlciBpbXBvcnRpbmdcclxuICAgKi9cclxuICBpbXBvcnRBY2NvdW50cyggYWNjb3VudHMsIHJlc2V0LCBzYXZlICkge1xyXG4gICAgYWNjb3VudHMgPSBBcnJheS5pc0FycmF5KCBhY2NvdW50cyApID8gYWNjb3VudHMgOiBbXTtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcblxyXG4gICAgLy8gcmVzZXQgY3VycmVudCBsaXN0LCBpZiBhIG5ldyBsaXN0IGlzIGF2YWlsYWJsZVxyXG4gICAgaWYgKCByZXNldCAmJiBhY2NvdW50cy5sZW5ndGggKSB0aGlzLl9oYW5kbGVycyA9IFtdO1xyXG4gICAgLy8gaW1wb3J0IG5ldyBhY2NvdW50cyBsaXN0XHJcbiAgICBmb3IgKCBsZXQgaGFuZGxlIG9mIGFjY291bnRzICkgdGhpcy50cmFja0FjY291bnQoIGhhbmRsZSApICYmIGNvdW50Kys7XHJcbiAgICAvLyBzYXZlIGFjY291bnRzIGJhY2sgdG8gc3RvcmUsIG9yIGp1c3QgZW1pdCBsb2FkZWQgbGlzdFxyXG4gICAgaWYgKCBzYXZlICkgeyB0aGlzLnNhdmVBY2NvdW50cygpOyB9XHJcbiAgICBlbHNlIHsgdGhpcy5lbWl0KCAnaGFuZGxlcnMnLCB0aGlzLl9oYW5kbGVycyApOyB9XHJcblxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGEgaGFuZGxlIGlzIGFscmVhZHkgYmVpbmcgdHJhY2tlZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaGFuZGxlICBUd2l0dGVyIGhhbmRsZVxyXG4gICAqL1xyXG4gIHRyYWNraW5nKCBoYW5kbGUgKSB7XHJcbiAgICBpZiAoICFoYW5kbGUgfHwgdHlwZW9mIGhhbmRsZSAhPT0gJ3N0cmluZycgKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gKCB0aGlzLl9oYW5kbGVycy5maWx0ZXIoIHR3ID0+IHR3LmhhbmRsZSA9PT0gaGFuZGxlICkubGVuZ3RoICkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCB0cmFja2luZyBhIG5ldyB0d2l0dGVyIGFjY291bnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICBoYW5kbGUgIFR3aXR0ZXIgaGFuZGxlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgZmV0Y2ggICBGZXRjaCB0d2VldHMgYWZ0ZXIgYWRkaW5nXHJcbiAgICogQHBhcmFtIHtib29sZWFufSAgc2F2ZSAgICBTYXZlIGFjY291bnRzIGFmdGVyIGFkZGluZ1xyXG4gICAqL1xyXG4gIHRyYWNrQWNjb3VudCggaGFuZGxlLCBmZXRjaCwgc2F2ZSApIHtcclxuICAgIGlmICggIWhhbmRsZSB8fCB0eXBlb2YgaGFuZGxlICE9PSAnc3RyaW5nJyApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggdGhpcy50cmFja2luZyggaGFuZGxlICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyBjcmVhdGUgbmV3IGhhbmRsZXIsIGFkZCB0byBsaXN0IGFuZCB1cGRhdGUgb3B0aW9uc1xyXG4gICAgY29uc3QgdHcgPSBuZXcgVHdpdHRlciggaGFuZGxlICk7XHJcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXJzKCB0dyApO1xyXG4gICAgdGhpcy5faGFuZGxlcnMucHVzaCggdHcgKTtcclxuICAgIC8vIGZldGNoIHR3ZWV0cyBub3cgaWYgbmVlZGVkIGFuZCBlbWl0IGV2ZW50XHJcbiAgICBpZiAoIGZldGNoICkgdHcuZmV0Y2hUd2VldHMoIHRoaXMuX2FqYXgsIHRoaXMudHdlZXRzSGFuZGxlciApO1xyXG4gICAgaWYgKCBzYXZlICkgdGhpcy5zYXZlQWNjb3VudHMoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCB0cmFja2luZyBhIHR3aXR0ZXIgYWNjb3VudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaGFuZGxlICBUd2l0dGVyIGhhbmRsZVxyXG4gICAqL1xyXG4gIHVudHJhY2tBY2NvdW50KCBoYW5kbGUgKSB7XHJcbiAgICBpZiAoICFoYW5kbGUgfHwgdHlwZW9mIGhhbmRsZSAhPT0gJ3N0cmluZycgKSByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyBnZXQgaGFuZGxlciB0aGF0IGlzIGJlaW5nIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCwgaWYgaXQgZXhpc3RzXHJcbiAgICBjb25zdCB0dyA9IHRoaXMuX2hhbmRsZXJzLmZpbHRlciggdHcgPT4gdHcuaGFuZGxlID09PSBoYW5kbGUgKS5zaGlmdCgpO1xyXG4gICAgaWYgKCAhdHcgKSByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIHJlbW92ZSBoYW5kbGVyIGZyb20gdGhlIGxpc3QgYW5kIGVtaXQgZXZlbnRzXHJcbiAgICB0aGlzLl9oYW5kbGVycyA9IHRoaXMuX2hhbmRsZXJzLmZpbHRlciggdHcgPT4gdHcuaGFuZGxlICE9PSBoYW5kbGUgKTtcclxuICAgIHRoaXMuX3R3ZWV0cyA9IHRoaXMuX3R3ZWV0cy5maWx0ZXIoIHQgPT4gdC5oYW5kbGUgIT09IGhhbmRsZSApO1xyXG4gICAgdGhpcy5zYXZlQWNjb3VudHMoKTtcclxuICAgIHRoaXMuc2F2ZVR3ZWV0cygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgb3B0aW9ucyBmb3IgZWFjaCBUd2l0dGVyIGhhbmRsZXJcclxuICAgKi9cclxuICB1cGRhdGVIYW5kbGVycyggdHcgKSB7XHJcbiAgICBjb25zdCBmZXRjaERlbGF5ID0gcGFyc2VJbnQoIHRoaXMuX29wdGlvbnMuZGVsYXkgKSB8fCAzMDA7XHJcbiAgICBjb25zdCBsaW1pdENvdW50ID0gcGFyc2VJbnQoIHRoaXMuX29wdGlvbnMudHdlZXRzICkgfHwgMTtcclxuICAgIGlmICggdHcgaW5zdGFuY2VvZiBUd2l0dGVyICkgcmV0dXJuIHR3LnNldE9wdGlvbnMoIHsgZmV0Y2hEZWxheSwgbGltaXRDb3VudCB9ICk7XHJcbiAgICB0aGlzLl9oYW5kbGVycy5mb3JFYWNoKCB0dyA9PiB0dy5zZXRPcHRpb25zKCB7IGZldGNoRGVsYXksIGxpbWl0Q291bnQgfSApICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGNhY2hlZCB0d2VldHMgZnJvbSBzdG9yZVxyXG4gICAqL1xyXG4gIGxvYWRUd2VldHMoKSB7XHJcbiAgICBsZXQgdHdlZXRzID0gc3RvcmUuZ2V0RGF0YSggdGhpcy5fdHdlZXRzS2V5ICk7XHJcbiAgICBpZiAoICFBcnJheS5pc0FycmF5KCB0d2VldHMgKSB8fCAhdHdlZXRzLmxlbmd0aCApIHJldHVybjtcclxuICAgIHRoaXMuX3R3ZWV0cyA9IHR3ZWV0cztcclxuICAgIHRoaXMucmVzZXRUd2VldHMoKTtcclxuICAgIHRoaXMuZmlsdGVyVHdlZXRzKCk7XHJcbiAgICB0aGlzLnNhdmVUd2VldHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmUgY3VycmVudCB0d2VldHMgdG8gc3RvcmVcclxuICAgKi9cclxuICBzYXZlVHdlZXRzKCkge1xyXG4gICAgc3RvcmUuc2V0RGF0YSggdGhpcy5fdHdlZXRzS2V5LCB0aGlzLl90d2VldHMgKTtcclxuICAgIHRoaXMuZW1pdCggJ3R3ZWV0cycsIHRoaXMuX3R3ZWV0cyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgbmV3IGVudHJpZXMgaW5kaWNhdG9yXHJcbiAgICovXHJcbiAgcmVzZXRUd2VldHMoKSB7XHJcbiAgICB0aGlzLl90d2VldHMuZm9yRWFjaCggdCA9PiB7IHQuaXNOZXcgPSBmYWxzZTsgfSApO1xyXG4gICAgdGhpcy5zYXZlVHdlZXRzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbHVzaCB0d2VldHMgbGlzdFxyXG4gICAqL1xyXG4gIGZsdXNoVHdlZXRzKCkge1xyXG4gICAgdGhpcy5fdHdlZXRzID0gW107XHJcbiAgICB0aGlzLl9ibGFja2xpc3QgPSBbXTtcclxuICAgIHRoaXMuc2F2ZVR3ZWV0cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHR3ZWV0IGZyb20gbGlzdCBhbmQgYWRkIElEIHRvIGJsYWNrbGlzdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaWQgIFR3ZWV0IElEXHJcbiAgICovXHJcbiAgYmxvY2tUd2VldCggaWQgKSB7XHJcbiAgICBpZiAoICFpZCApIHJldHVybiBmYWxzZTtcclxuICAgIHRoaXMuX3R3ZWV0cyA9IHRoaXMuX3R3ZWV0cy5maWx0ZXIoIHQgPT4gdC5pZCAhPT0gaWQgKTtcclxuICAgIHRoaXMuX2JsYWNrbGlzdCA9IHRoaXMuX2JsYWNrbGlzdC5maWx0ZXIoIHRpZCA9PiB0aWQgIT09IGlkICk7XHJcbiAgICB0aGlzLl9ibGFja2xpc3QucHVzaCggaWQgKTtcclxuICAgIHRoaXMuc2F2ZVR3ZWV0cygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgbmV3IHR3ZWV0IG9iamVjdCB0byB0aGUgbGlzdFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgdHdlZXQgIFR3ZWV0IG9iamVjdFxyXG4gICAqL1xyXG4gIGFkZFR3ZWV0KCB0d2VldCApIHtcclxuICAgIGlmICggIXR3ZWV0IHx8ICEoICdpZCcgaW4gdHdlZXQgKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggdGhpcy50d2VldEV4aXN0cyggdHdlZXQgKSApIHJldHVybiBmYWxzZTtcclxuICAgIGlmICggdGhpcy50d2VldEJsb2NrZWQoIHR3ZWV0ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoIHRoaXMudHdlZXRFeHBpcmVkKCB0d2VldCApICkgcmV0dXJuIGZhbHNlO1xyXG4gICAgdHdlZXQuaXNOZXcgPSB0cnVlOyAvLyBmb3IgaW5kaWNhdG9yXHJcbiAgICB0aGlzLl90d2VldHMucHVzaCggdHdlZXQgKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGEgdHdlZXQgaXMgaW4gdGhlIGxpc3Qgb2YgbmV3c1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgdHdlZXQgIFR3ZWV0IG9iamVjdFxyXG4gICAqL1xyXG4gIHR3ZWV0RXhpc3RzKCB0d2VldCApIHtcclxuICAgIGlmICggIXR3ZWV0IHx8ICEoICdpZCcgaW4gdHdlZXQgKSApIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLl90d2VldHMuZmlsdGVyKCB0ID0+IHQuaWQgPT09IHR3ZWV0LmlkICkubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGEgdHdlZXQgaXMgaW4gdGhlIGJsb2NrbGlzdFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSAgdHdlZXQgIFR3ZWV0IG9iamVjdFxyXG4gICAqL1xyXG4gIHR3ZWV0QmxvY2tlZCggdHdlZXQgKSB7XHJcbiAgICBpZiAoICF0d2VldCB8fCAhKCAnaWQnIGluIHR3ZWV0ICkgKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5fYmxhY2tsaXN0LmZpbHRlciggaWQgPT4gaWQgPT09IHR3ZWV0LmlkICkubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGEgdHdlZXQgaXMgdG9vIG9sZCwgYmFzZWQgb24gb3B0aW9uXHJcbiAgICogQHBhcmFtIHtvYmplY3R9ICB0d2VldCAgVHdlZXQgb2JqZWN0XHJcbiAgICovXHJcbiAgdHdlZXRFeHBpcmVkKCB0d2VldCApIHtcclxuICAgIGlmICggIXR3ZWV0IHx8ICEoICdpZCcgaW4gdHdlZXQgKSApIHJldHVybiBmYWxzZTtcclxuICAgIGxldCBkYXlzID0gcGFyc2VJbnQoIHRoaXMuX29wdGlvbnMuZGF5cyApIHwgMDtcclxuICAgIGxldCBzZWNzID0gKCBEYXRlLm5vdygpIC0gdHdlZXQudGltZSApIC8gMTAwMDtcclxuICAgIGxldCBhZ2UgID0gTWF0aC5jZWlsKCBzZWNzIC8gODY0MDAgKTtcclxuICAgIHJldHVybiAoIGFnZSA+IGRheXMgKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXMgbmV3IHR3ZWV0cyB0aGF0IGFyZSBmZXRjaGVkIGZyb20gdGhlIFR3aXR0ZXIgY2xhc3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGVyciAgICBFcnJvciBzdHJpbmcgKGVtcHR5IG9uIHN1Y2Nlc3MpXHJcbiAgICogQHBhcmFtIHthcnJheX0gIHR3ZWV0cyAgVHdlZXRzIGFycmF5IChlbXB0eSBvbiBlcnJvcilcclxuICAgKi9cclxuICB0d2VldHNIYW5kbGVyKCBlcnIsIHR3ZWV0cyApIHtcclxuICAgIGlmICggZXJyICkgcmV0dXJuIHRoaXMuZW1pdCggJ2Vycm9yJywgZXJyICk7XHJcbiAgICBpZiAoICF0d2VldHMubGVuZ3RoICkgcmV0dXJuO1xyXG5cclxuICAgIGZvciAoIGxldCB0d2VldCBvZiB0d2VldHMgKSB7XHJcbiAgICAgIC8vIGl0J3MgcG9zc2libGUgYWRkZWQgdHdlZXRzIGNhbiBnZXQgcmVtb3ZlZCBkdWUgdG8gZmlsdGVyaW5nLi4uXHJcbiAgICAgIGxldCBhZGRlZCA9IHRoaXMuYWRkVHdlZXQoIHR3ZWV0ICk7XHJcbiAgICAgIHRoaXMuZmlsdGVyVHdlZXRzKCk7XHJcblxyXG4gICAgICAvLyBkb3VibGUgY2hlY2sgaWYgdGhlIHR3ZWV0IHN1cnZpdmVkIGFuZCBlbWl0IGl0XHJcbiAgICAgIGlmICggYWRkZWQgJiYgdGhpcy50d2VldEV4aXN0cyggdHdlZXQgKSApIHtcclxuICAgICAgICB0aGlzLmVtaXQoICd0d2VldCcsIHR3ZWV0ICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2F2ZUFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNhdmVUd2VldHMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFudXAgdHdlZXRzIGxpc3RcclxuICAgKi9cclxuICBmaWx0ZXJUd2VldHMoKSB7XHJcbiAgICBsZXQgdG90YWwgPSBwYXJzZUludCggdGhpcy5fb3B0aW9ucy50b3RhbCApO1xyXG5cclxuICAgIC8vIGZpbHRlciBvdXQgb2xkIHR3ZWV0c1xyXG4gICAgdGhpcy5fdHdlZXRzID0gdGhpcy5fdHdlZXRzLmZpbHRlciggdHdlZXQgPT4ge1xyXG4gICAgICByZXR1cm4gIXRoaXMudHdlZXRFeHBpcmVkKCB0d2VldCApO1xyXG4gICAgfSk7XHJcbiAgICAvLyBzb3J0IHR3ZWV0cyBmcm9tIG5ldyB0byBvbGRcclxuICAgIHRoaXMuX3R3ZWV0cyA9IHRoaXMuX3R3ZWV0cy5zb3J0KCAoIGEsIGIgKSA9PiB7XHJcbiAgICAgIGlmICggYS50aW1lID4gYi50aW1lICkgcmV0dXJuIC0xO1xyXG4gICAgICBpZiAoIGEudGltZSA8IGIudGltZSApIHJldHVybiAxO1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG4gICAgLy8gdHJpbSB0d2VldHMgbGlzdFxyXG4gICAgaWYgKCB0b3RhbCApIHtcclxuICAgICAgdGhpcy5fdHdlZXRzID0gdGhpcy5fdHdlZXRzLnNsaWNlKCAwLCB0b3RhbCApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggdHdlZXRzIGZvciBhbiBhY2NvdW50IGJ5IGhhbmRsZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaGFuZGxlICBUd2l0dGVyIGhhbmRsZVxyXG4gICAqL1xyXG4gIGZldGNoQnlIYW5kbGUoIGhhbmRsZSApIHtcclxuICAgIGlmICggIWhhbmRsZSB8fCB0eXBlb2YgaGFuZGxlICE9PSAnc3RyaW5nJyApIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IHR3ID0gdGhpcy5faGFuZGxlcnMuZmlsdGVyKCB0dyA9PiB0dy5oYW5kbGUgPT09IGhhbmRsZSApLnNoaWZ0KCk7XHJcbiAgICBpZiAoIHR3ICkgdHcuZmV0Y2hUd2VldHMoIHRoaXMuX2FqYXgsIHRoaXMudHdlZXRzSGFuZGxlciApO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCB0d2VldHMgZnJvbSBuZXh0IGhhbmRsZXIgZG93biB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIGZldGNoTmV4dEhhbmRsZXIoKSB7XHJcbiAgICBpZiAoICF0aGlzLl9oYW5kbGVycy5sZW5ndGggKSByZXR1cm47XHJcbiAgICBjb25zdCBsYXN0ID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IHR3ID0gdGhpcy5faGFuZGxlcnNbIHRoaXMuX2NvdW50ZXIgXTtcclxuICAgIGlmICggdHcgKSB0dy5mZXRjaFR3ZWV0cyggdGhpcy5fYWpheCwgdGhpcy50d2VldHNIYW5kbGVyICk7XHJcbiAgICB0aGlzLl9jb3VudGVyID0gKCB0aGlzLl9jb3VudGVyIDwgbGFzdCApID8gKCB0aGlzLl9jb3VudGVyICsgMSApIDogMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSB0d2VldHMgaW50ZXJ2YWwgaGFuZGxlclxyXG4gICAqL1xyXG4gIHNldHVwVGltZXIoKSB7XHJcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgY29uc3Qgc2VjcyA9IHBhcnNlSW50KCB0aGlzLl9vcHRpb25zLmludGVydmFsICk7XHJcbiAgICBpZiAoICFzZWNzICkgcmV0dXJuO1xyXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICBpZiAoICF0aGlzLl9vcHRpb25zLmVuYWJsZWQgKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZmV0Y2hOZXh0SGFuZGxlcigpO1xyXG4gICAgfSwgMTAwMCAqIHNlY3MgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdGhlIHR3ZWV0cyBpbnRlcnZhbCBoYW5kbGVyXHJcbiAgICovXHJcbiAgc3RvcFRpbWVyKCkge1xyXG4gICAgaWYgKCB0aGlzLl9pbnRlcnZhbCApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCggdGhpcy5faW50ZXJ2YWwgKTtcclxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIFdlYiBjYWNoZSBoYW5kbGVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuICAvLyBsb2NhbCBwcm9wc1xyXG4gIF9hcGkgICAgOiAnbG9jYWxTdG9yYWdlJyxcclxuICBfcHJlZml4IDogJ3dlYmNhY2hlXycsXHJcbiAgX3R0bCAgICA6IDAsXHJcblxyXG4gIC8vIHNhdmUgZGF0YSB0byBjYWNoZVxyXG4gIHNldERhdGEoIGtleSwgZGF0YSwgdGltZSApIHtcclxuICAgIHJldHVybiB0aGlzLl9zYXZlKCBrZXksIGRhdGEsIHRpbWUgKTtcclxuICB9LFxyXG5cclxuICAvLyBnZXQgc2F2ZWQgZGF0YSBmb3IgYSBrZXkgYXMgaXNcclxuICBnZXREYXRhKCBrZXkgKSB7XHJcbiAgICB0aGlzLl9jbGVhbigpO1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBkZWxldGUgc2F2ZWQgZGF0YSBmb3Iga2V5XHJcbiAgZGVsZXRlRGF0YSgga2V5ICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZSgga2V5ICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gc2FudGl6ZXIgZm9yIGtleXNcclxuICBfa2V5KCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4ICsgU3RyaW5nKCBrZXkgfHwgJycgKS5yZXBsYWNlKCAvW15cXHddKy9nLCAnXycgKTtcclxuICB9LFxyXG5cclxuICAvLyBlcnJvciBoYW5kbGVyXHJcbiAgX2Vycm9yKCBlICkge1xyXG4gICAgbGV0IF9jb2RlID0gZS5jb2RlICAgIHwgIDA7XHJcbiAgICBsZXQgX25hbWUgPSBlLm5hbWUgICAgfHwgJ1Vua25vd25FcnJvcic7XHJcbiAgICBsZXQgX2luZm8gPSBlLm1lc3NhZ2UgfHwgJ1Byb2JsZW0gd2l0aCAnICsgdGhpcy5fYXBpICsnIGJyb3dzZXIgQVBJLicgO1xyXG4gICAgY29uc29sZS5lcnJvciggJ1N0b3JhZ2VFcnJvciAoJysgX2NvZGUgKycpOicsIF9pbmZvLCAnKCcrIF9uYW1lICsnKS4nICk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IHNhdmluZyB0aGUgZGF0YSBhbmQgaGFuZGxlIGFueSBlcnJvcnNcclxuICBfc2F2ZSgga2V5LCBkYXRhLCB0dGwgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgICA9IHRoaXMuX2tleSgga2V5ICk7XHJcbiAgICAgIGNvbnN0IF90aW1lICAgPSBEYXRlLm5vdygpO1xyXG4gICAgICBjb25zdCBfdHRsICAgID0gcGFyc2VJbnQoIHR0bCApIHx8IHRoaXMuX3R0bDtcclxuICAgICAgY29uc3QgX3N0cmluZyA9IEpTT04uc3RyaW5naWZ5KCB7IF90aW1lLCBfdHRsLCBkYXRhIH0gKTtcclxuICAgICAgX3N0b3JlLnNldEl0ZW0oIF9rZXksIF9zdHJpbmcgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIHRyeSBmZXRjaGluZyBkYXRhIGZvciBrZXlcclxuICBfZmV0Y2goIGtleSApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3BhcnNlZCA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICByZXR1cm4gKCBfcGFyc2VkICYmIF9wYXJzZWQuZGF0YSApID8gX3BhcnNlZC5kYXRhIDogbnVsbDtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGRlbGV0aW5nIGRhdGEgYnkga2V5XHJcbiAgX2RlbGV0ZSgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX2tleSAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvciggZSApO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8vIGNsZWFuIGFsbCBleHBpcmVkIGl0ZW1zIGZyb20gc3RvcmFnZVxyXG4gIF9jbGVhbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF90aW1lICA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAvLyBsb29wIGtleXNcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgX3N0b3JlLmxlbmd0aDsgaSsrICkge1xyXG5cclxuICAgICAgICAvLyBtYWtlIHN1cmUgaXQncyBhIGtleSBtYW5hZ2VkIGJ5IHRoaXMgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgX2tleSA9IF9zdG9yZS5rZXkoIGkgKTtcclxuICAgICAgICBpZiAoIF9rZXkuaW5kZXhPZiggdGhpcy5fcHJlZml4ICkgPCAwICkgY29udGludWU7XHJcblxyXG4gICAgICAgIC8vIGdldCBkYXRhIGZvciBrZXlcclxuICAgICAgICBjb25zdCBfZGF0YSA9IEpTT04ucGFyc2UoIF9zdG9yZS5nZXRJdGVtKCBfa2V5ICkgfHwgJ3t9JyApO1xyXG4gICAgICAgIGlmICggIV9kYXRhLl90aW1lIHx8ICFfZGF0YS5fdHRsICkgY29udGludWU7IC8vIG5lZWQgdGhlc2VcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBhbmQgZGVsZXRlIGtleVxyXG4gICAgICAgIGNvbnN0IF9zZWNzID0gKCBfdGltZSAtIF9kYXRhLl90aW1lICkgLyAxMDAwO1xyXG4gICAgICAgIGlmICggX3NlY3MgPCBfZGF0YS5fdHRsICkgY29udGludWU7IC8vIHN0aWxsIGZyZXNoXHJcbiAgICAgICAgX3N0b3JlLnJlbW92ZUl0ZW0oIF9rZXkgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuIiwiLyoqXG4gKiBUd2l0dGVyIHNjcmFwZXIgYW5kIHR3ZWV0cyBtYW5hZ2VyIGNsYXNzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2l0dGVyIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBoYW5kbGUgICBUd2l0dGVyIGhhbmRsZVxuICAgKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnMgIEZldGNoaW5nIG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKCBoYW5kbGUsIG9wdGlvbnMgKSB7XG4gICAgaWYgKCAhaGFuZGxlIHx8IHR5cGVvZiBoYW5kbGUgIT09ICdzdHJpbmcnICkge1xuICAgICAgdGhyb3cgJ011c3QgcHJvdmlkZSBhIHZhbGlkIHR3aXR0ZXIgaGFuZGxlIHN0cmluZy4nO1xuICAgIH1cbiAgICB0aGlzLnVpZCAgICAgICA9ICcnO1xuICAgIHRoaXMuaGFuZGxlICAgID0gJyc7XG4gICAgdGhpcy5uYW1lICAgICAgPSAnJztcbiAgICB0aGlzLmF2YXRhciAgICA9ICcnO1xuICAgIHRoaXMudXJsICAgICAgID0gJyc7XG4gICAgdGhpcy5lcnJvciAgICAgPSAnJztcbiAgICB0aGlzLmxhc3QgICAgICA9IDA7XG4gICAgdGhpcy5mZXRjaGluZyAgPSBmYWxzZTtcbiAgICB0aGlzLl9vcHRpb25zICA9IHtcbiAgICAgIHNraXBQaW5uZWQgIDogdHJ1ZSwgIC8vIGlnbm9yZSBwaW5uZWQgdHdlZXRzXG4gICAgICBza2lwUmV0d2VldCA6IHRydWUsICAvLyBpZ25vcmUgcmUtdHdlZXRzXG4gICAgICBjbGVhblR3ZWV0cyA6IHRydWUsICAvLyBzdHJpcCBodG1sIGFuZCB3aGl0ZXNwYWNlIGZyb20gdHdlZXRzXG4gICAgICBmZXRjaERlbGF5ICA6IDMwMCwgICAvLyBwcmV2ZW50IHJlLWZldGNoaW5nIGZvciAoc2VjcylcbiAgICAgIGxpbWl0Q291bnQgIDogMSwgICAgIC8vIGxpbWl0IG51bWJlciBvZiB0d2VldHMgcGFyc2VkXG4gICAgfTtcbiAgICB0aGlzLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcbiAgICB0aGlzLnNldERhdGEoIHsgaGFuZGxlOiBoYW5kbGUsIG5hbWU6IGhhbmRsZSB9ICk7XG4gIH1cblxuIC8qKlxuICAgKiBVcGRhdGUgb3B0aW9uc1xuICAgKiBAcGFyYW0ge29iamVjdH0gIG9wdGlvbnMgIE9wdGlvbnMgb2JqZWN0XG4gICAqL1xuICBzZXRPcHRpb25zKCBvcHRpb25zICkge1xuICAgIE9iamVjdC5hc3NpZ24oIHRoaXMuX29wdGlvbnMsIG9wdGlvbnMgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbmV3IGFjb2N1bnQgZGF0YVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAgVHdpdHRlciBhY2NvdW50IGRhdGFcbiAgICovXG4gIHNldERhdGEoIGRhdGEgKSB7XG4gICAgaWYgKCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgKSByZXR1cm47XG4gICAgaWYgKCBkYXRhLnVpZCApICAgIHRoaXMudWlkICAgID0gU3RyaW5nKCB0aGlzLnVpZCApLnJlcGxhY2UoIC9bXlxcd1xcLV0rL2csICcnICk7XG4gICAgaWYgKCBkYXRhLmhhbmRsZSApIHRoaXMuaGFuZGxlID0gU3RyaW5nKCBkYXRhLmhhbmRsZSApLnJlcGxhY2UoIC9bXlxcd1xcLV0rL2csICcnICk7XG4gICAgaWYgKCBkYXRhLm5hbWUgKSAgIHRoaXMubmFtZSAgID0gU3RyaW5nKCBkYXRhLm5hbWUgKS5yZXBsYWNlKCAvW1xcclxcblxcc1xcdF0rL2csICcgJyApLnRyaW0oKTtcbiAgICBpZiAoIGRhdGEuYXZhdGFyICkgdGhpcy5hdmF0YXIgPSBTdHJpbmcoIGRhdGEuYXZhdGFyICkudHJpbSgpO1xuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vJysgdGhpcy5oYW5kbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjY291bnQgaW5mb1xuICAgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBsZXQgeyB1aWQsIGhhbmRsZSwgbmFtZSwgYXZhdGFyLCB1cmwsIGxhc3QsIGZldGNoaW5nLCBlcnJvciB9ID0gdGhpcztcbiAgICByZXR1cm4geyB1aWQsIGhhbmRsZSwgbmFtZSwgYXZhdGFyLCB1cmwsIGxhc3QsIGZldGNoaW5nLCBlcnJvciB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHJlbW90ZSB0d2VldHMgdXNpbmcgYWpheCBtb2R1bGVcbiAgICogQHBhcmFtIHtvYmplY3R9ICAgIGFqYXggICAgICBBamF4IG1vZHVsZSBpbnN0YW5jZSB0byB1c2UgZm9yIHJlcXVlc3RcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICBDYWxsYmFjayBmdW5jdGlvblxuICAgKi9cbiAgZmV0Y2hUd2VldHMoIGFqYXgsIGNhbGxiYWNrICkge1xuICAgIGlmICggIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHJldHVybjtcbiAgICBpZiAoICFhamF4IHx8IHR5cGVvZiBhamF4ICE9PSAnb2JqZWN0JyApIHJldHVybiBjYWxsYmFjayggJ011c3QgcHJvdmlkZSBhbiBhamF4IG1vZHVsZSByZWZlcmVuY2UuJywgW10gKTtcbiAgICBpZiAoICF0aGlzLl9jYW5GZXRjaCgpICkgcmV0dXJuIGNhbGxiYWNrKCAnJywgW10gKTsgLy8gdG9vIHNvb24sIGlnbm9yZVxuXG4gICAgdGhpcy5mZXRjaGluZyA9IHRydWU7XG4gICAgdGhpcy5lcnJvciA9ICcnO1xuXG4gICAgYWpheC5nZXQoIHRoaXMudXJsLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB0aW1lb3V0OiAzMCxcbiAgICAgIG5vdEFqYXg6IHRydWUsXG5cbiAgICAgIGRvbmU6ICggeGhyLCBzdGF0dXMsIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICB0aGlzLmZldGNoaW5nID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ICggeGhyLCBzdGF0dXMsIGVycm9yICkgPT4ge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3IgKycgfCBAJysgdGhpcy5oYW5kbGUgKycuJztcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCB0aGlzLmVycm9yLCBbXSApO1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6ICggeGhyLCBzdGF0dXMsIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBsZXQgaHRtbCAgID0gdGhpcy5fY2xlYW5IdG1sKCByZXNwb25zZSApO1xuICAgICAgICBsZXQgZG9jICAgID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyggaHRtbCwgJ3RleHQvaHRtbCcgKTtcblxuICAgICAgICBpZiAoIGRvYyAmJiBkb2MgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgKSB7XG4gICAgICAgICAgdGhpcy5sYXN0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBjYWxsYmFjayggJycsIHRoaXMucGFyc2VUd2VldHMoIGRvYyApICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9ICdET01QYXJzZXJFcnJvcjogQ291bGQgbm90IHBhcnNlIHJlc3BvbnNlIGZyb20gJysgdGhpcy51cmw7XG4gICAgICAgICAgY2FsbGJhY2soIHRoaXMuZXJyb3IsIFtdICk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VyID0gbnVsbDtcbiAgICAgICAgaHRtbCA9IG51bGw7XG4gICAgICAgIGRvYyA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYWNjb3VudCBhbmQgdHdlZXRzIGRhdGEgZnJvbSBhIGZldGNoZWQgSFRNTCByZXNwb25zZVxuICAgKiBAcGFyYW0ge0hUTUxEb2N1bWVudH0gIGRvYyAgVHdpdHRlciBhY2NvdW50IHBhZ2UgZG9jdW1lbnRcbiAgICovXG4gIHBhcnNlVHdlZXRzKCBkb2MgKSB7XG4gICAgbGV0IGxpbWl0ICA9IHRoaXMuX29wdGlvbnMubGltaXRDb3VudCB8IDA7XG4gICAgbGV0IGNvdW50ICA9IDA7XG4gICAgbGV0IG91dHB1dCA9IFtdO1xuXG4gICAgLy8gbG9vayBmb3IgcHJvZmlsZSBhdmF0YXJcbiAgICBsZXQgYXZhdGFyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoICdpbWcuUHJvZmlsZUF2YXRhci1pbWFnZScgKTtcbiAgICBhdmF0YXIgPSBhdmF0YXIgPyBhdmF0YXIuc3JjIDogJyc7XG5cbiAgICAvLyBsb29rIGZvciBpdGVtc1xuICAgIGxldCBpdGVtcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCAnLnN0cmVhbS1pdGVtJyApIHx8IFtdO1xuXG4gICAgLy8gbG9vcCB0d2VldCBsaXN0IGl0ZW1zXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyArK2kgKSB7XG4gICAgICBpZiAoIGxpbWl0ICYmIGNvdW50ID49IGxpbWl0ICkgYnJlYWs7XG5cbiAgICAgIC8vIGxvb2sgZm9yIHR3ZWV0IGRhdGFcbiAgICAgIGxldCBpdGVtICAgID0gaXRlbXNbIGkgXTtcbiAgICAgIGxldCB0d2VldCAgID0gaXRlbSAgID8gaXRlbS5xdWVyeVNlbGVjdG9yKCAnLmpzLXN0cmVhbS10d2VldCcgKSA6IG51bGw7IC8vIG1ldGFkYXRhIHRhZ1xuICAgICAgbGV0IHBvc3RlZCAgPSBpdGVtICAgPyBpdGVtLnF1ZXJ5U2VsZWN0b3IoICcuanMtc2hvcnQtdGltZXN0YW1wJyApIDogbnVsbDsgLy8gZGF0ZSB0YWdcbiAgICAgIGxldCBjb250ZW50ID0gaXRlbSAgID8gaXRlbS5xdWVyeVNlbGVjdG9yKCAnLmpzLXR3ZWV0LXRleHQnICkgOiBudWxsOyAvLyB0d2VldCB3cmFwcGVyXG4gICAgICBsZXQgdGV4dCAgICA9ICcnO1xuXG4gICAgICAvLyBsb29rIGZvciBhY2NvdW50IGluZm9cbiAgICAgIGxldCBpZCAgICAgID0gdHdlZXQgID8gdHdlZXQuZ2V0QXR0cmlidXRlKCAnZGF0YS10d2VldC1pZCcgKSB8fCAnJyA6ICcnO1xuICAgICAgbGV0IHVpZCAgICAgPSB0d2VldCAgPyB0d2VldC5nZXRBdHRyaWJ1dGUoICdkYXRhLXVzZXItaWQnICkgfHwgJycgOiAnJztcbiAgICAgIGxldCBuYW1lICAgID0gdHdlZXQgID8gdHdlZXQuZ2V0QXR0cmlidXRlKCAnZGF0YS1uYW1lJyApIHx8ICcnIDogJyc7XG4gICAgICBsZXQgaGFuZGxlICA9IHR3ZWV0ICA/IHR3ZWV0LmdldEF0dHJpYnV0ZSggJ2RhdGEtc2NyZWVuLW5hbWUnICkgfHwgJycgOiAnJztcbiAgICAgIGxldCBsaW5rICAgID0gdHdlZXQgID8gJ2h0dHBzOi8vdHdpdHRlci5jb20nKyB0d2VldC5nZXRBdHRyaWJ1dGUoICdkYXRhLXBlcm1hbGluay1wYXRoJyApIHx8ICcnIDogJyc7XG4gICAgICBsZXQgdGltZSAgICA9IHBvc3RlZCA/IE51bWJlciggcG9zdGVkLmdldEF0dHJpYnV0ZSggJ2RhdGEtdGltZS1tcycgKSApIHx8IDAgOiAwO1xuXG4gICAgICAvLyB1cGRhdGUgcHJvZmlsZSBkZXRhaWxzXG4gICAgICB0aGlzLnNldERhdGEoIHsgdWlkLCBoYW5kbGUsIG5hbWUsIGF2YXRhciB9ICk7XG5cbiAgICAgIC8vIHJlc29sdmUgdHdlZXQgdGV4dFxuICAgICAgaWYgKCBjb250ZW50ICkge1xuICAgICAgICB0ZXh0ID0gdGhpcy5fb3B0aW9ucy5jbGVhblR3ZWV0c1xuICAgICAgICAgID8gdGhpcy5fY2xlYW5Ud2VldCggY29udGVudC50ZXh0Q29udGVudCApXG4gICAgICAgICAgOiBTdHJpbmcoIGNvbnRlbnQuaW5uZXJIVE1MIHx8ICcnICkudHJpbSgpO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgYSBmZXcgdGhpbmdzLCBza2lwIGlmIG5lZWRlZFxuICAgICAgaWYgKCAhaWQgfHwgIXVpZCB8fCAhbmFtZSB8fCAhaGFuZGxlIHx8ICF0ZXh0IHx8ICF0aW1lIHx8IHRpbWUgPCAwICkgY29udGludWU7XG4gICAgICBpZiAoIHRoaXMuX29wdGlvbnMuc2tpcFBpbm5lZCAmJiBpdGVtLmNsYXNzTGlzdC5jb250YWlucyggJ2pzLXBpbm5lZCcgKSApIGNvbnRpbnVlO1xuICAgICAgaWYgKCB0aGlzLl9vcHRpb25zLnNraXBSZXR3ZWV0ICYmIHR3ZWV0Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtcmV0d2VldC1pZCcgKSApIGNvbnRpbnVlO1xuXG4gICAgICAvLyBmb3JtYXQgdGltZVxuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSggdGltZSApO1xuICAgICAgbGV0IGRhdGUgPSBkLnRvRGF0ZVN0cmluZygpO1xuXG4gICAgICAvLyBhZGQgdHdlZXQgdG8gbGlzdCBhbmQgdXBkYXRlIGFjY291bnQgaW5mb1xuICAgICAgb3V0cHV0LnB1c2goIHsgaWQsIHVpZCwgdGltZSwgZGF0ZSwgbmFtZSwgaGFuZGxlLCBhdmF0YXIsIHRleHQsIGxpbmsgfSApO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgaXRlbXMgPSBudWxsO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbGFzdCBmZXRjaCB0aW1lIHRvIHNlZSBpZiBpdCdzIG9rIHRvIGZldGNoIGFnYWluXG4gICAqL1xuICBfY2FuRmV0Y2goKSB7XG4gICAgbGV0IG5vdyAgICAgID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgZWxhcHNlZCAgPSBNYXRoLmZsb29yKCAoIG5vdyAtIHRoaXMubGFzdCApIC8gMTAwMCApO1xuICAgIGxldCBkZWxheSAgICA9IHRoaXMuX29wdGlvbnMuZmV0Y2hEZWxheSB8IDA7XG5cbiAgICBpZiAoIHRoaXMuZmV0Y2hpbmcgfHwgdGhpcy5sYXN0ID49IG5vdyApIHJldHVybiBmYWxzZTsgLy8gYnVzeSwgd2FpdFxuICAgIGlmICggZGVsYXkgJiYgZWxhcHNlZCA8IGRlbGF5ICkgcmV0dXJuIGZhbHNlOyAvLyB0b28gc29vbiwgd2FpdFxuICAgIHJldHVybiB0cnVlOyAvLyBsb29rcyBnb29kXG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdHdlZXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHRleHQgIFN0cmlnbiB0byBjbGVhblxuICAgKi9cbiAgX2NsZWFuVHdlZXQoIHRleHQgKSB7XG4gICAgcmV0dXJuIFN0cmluZyggdGV4dCB8fCAnJyApXG4gICAgLnJlcGxhY2UoIC8oW15cXHNdKykoaHR0cHM/XFw6fHBpY1xcLikvZywgJyQxICQyJyApIC8vIGFkZCBzcGFjZSBhcm91bmQgbGlua3NcbiAgICAucmVwbGFjZSggJ3BpYy50d2l0dGVyJywgJ2h0dHBzOi8vcGljLnR3aXR0ZXInICkgLy8gZml4IHNvbWUgbGlua3Mgd2l0aG91dCBwcm90b1xuICAgIC5yZXBsYWNlKCAvKFtcXGBcXCdcXOKAmV0rKS9nLCBcIidcIiApIC8vIG5vcm1hbGl6ZSBhcG9zdHJvcGhlc1xuICAgIC5yZXBsYWNlKCAvKFtcXOKAnFxc4oCdXFzigJxcXOKAnVxcXCJdKykvZywgJ1wiJyApIC8vIG5vcm1hbGl6ZSBxdW90ZXNcbiAgICAucmVwbGFjZSggL1tcXOKAplxcI1xcJF0rL2csICcgJyApIC8vIHJlbW92ZSBzb21lIGp1bmsgY2hhcnNcbiAgICAucmVwbGFjZSggL1tcXHRcXHJcXG5cXHNcXHVGRUZGXFx4QTBdKy9nLCAnICcgKS50cmltKCk7IC8vIGNvbGxhcHNlIHdoaXRlc3BhY2VcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhbiBodG1sIGNvbnRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBodG1sICBIVE1MIHRleHQgdG8gY2xlYW5cbiAgICovXG4gIF9jbGVhbkh0bWwoIGh0bWwgKSB7XG4gICAgcmV0dXJuIFN0cmluZyggaHRtbCB8fCAnJyApXG4gICAgLnJlcGxhY2UoIC88KHN0eWxlfHNjcmlwdClbXj5dKj4oPzooPyE8XFwvKHN0eWxlfHNjcmlwdCk+KVteXSkqPFxcLyhzdHlsZXxzY3JpcHQpPi9naW0sICcnIClcbiAgICAucmVwbGFjZSggL1tcXHJcXG5cXHNcXHRdKy9nLCAnICcgKVxuICAgIC50cmltKCk7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbIkJ1cyIsIl9ldmVudHMiLCJuYW1lIiwiY2FsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhcmdzIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2hpZnQiLCJpIiwiY2IiLCJhcHBseSIsInVuZGVmaW5lZCIsIlR3aXR0ZXIiLCJzdG9yZSIsIk5ld3MiLCJfYWpheCIsIl9hY2NvdW50c0tleSIsIl90d2VldHNLZXkiLCJfaGFuZGxlcnMiLCJfdHdlZXRzIiwiX2JsYWNrbGlzdCIsIl9jb3VudGVyIiwiX2ludGVydmFsIiwiX29wdGlvbnMiLCJlbmFibGVkIiwiaW50ZXJ2YWwiLCJkZWxheSIsImRheXMiLCJ0d2VldHMiLCJ0b3RhbCIsInR3ZWV0c0hhbmRsZXIiLCJiaW5kIiwic2V0dXBUaW1lciIsImFqYXgiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlSGFuZGxlcnMiLCJmaWx0ZXJUd2VldHMiLCJhY2NvdW50cyIsImdldERhdGEiLCJpc0FycmF5IiwiaW1wb3J0QWNjb3VudHMiLCJtYXAiLCJ0dyIsImhhbmRsZSIsInNldERhdGEiLCJlbWl0IiwicmVzZXQiLCJzYXZlIiwiY291bnQiLCJ0cmFja0FjY291bnQiLCJzYXZlQWNjb3VudHMiLCJmaWx0ZXIiLCJmZXRjaCIsInRyYWNraW5nIiwiZmV0Y2hUd2VldHMiLCJ0Iiwic2F2ZVR3ZWV0cyIsImZldGNoRGVsYXkiLCJwYXJzZUludCIsImxpbWl0Q291bnQiLCJzZXRPcHRpb25zIiwiZm9yRWFjaCIsInJlc2V0VHdlZXRzIiwiaXNOZXciLCJpZCIsInRpZCIsInR3ZWV0IiwidHdlZXRFeGlzdHMiLCJ0d2VldEJsb2NrZWQiLCJ0d2VldEV4cGlyZWQiLCJzZWNzIiwiRGF0ZSIsIm5vdyIsInRpbWUiLCJhZ2UiLCJNYXRoIiwiY2VpbCIsImVyciIsImFkZGVkIiwiYWRkVHdlZXQiLCJzb3J0IiwiYSIsImIiLCJzbGljZSIsImxhc3QiLCJzdG9wVGltZXIiLCJzZXRJbnRlcnZhbCIsImZldGNoTmV4dEhhbmRsZXIiLCJjbGVhckludGVydmFsIiwiX2FwaSIsIl9wcmVmaXgiLCJfdHRsIiwia2V5IiwiZGF0YSIsIl9zYXZlIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJfa2V5IiwiU3RyaW5nIiwicmVwbGFjZSIsIl9lcnJvciIsImUiLCJfY29kZSIsImNvZGUiLCJfbmFtZSIsIl9pbmZvIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInR0bCIsIl9zdG9yZSIsIndpbmRvdyIsIl90aW1lIiwiX3N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiX3BhcnNlZCIsInBhcnNlIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJpbmRleE9mIiwiX2RhdGEiLCJfc2VjcyIsInVpZCIsImF2YXRhciIsInVybCIsImZldGNoaW5nIiwic2tpcFBpbm5lZCIsInNraXBSZXR3ZWV0IiwiY2xlYW5Ud2VldHMiLCJ0cmltIiwiX2NhbkZldGNoIiwiZ2V0IiwidHlwZSIsInRpbWVvdXQiLCJub3RBamF4IiwiZG9uZSIsInhociIsInN0YXR1cyIsInJlc3BvbnNlIiwic3VjY2VzcyIsInBhcnNlciIsIkRPTVBhcnNlciIsImh0bWwiLCJfY2xlYW5IdG1sIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSFRNTERvY3VtZW50IiwicGFyc2VUd2VldHMiLCJsaW1pdCIsIm91dHB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwicG9zdGVkIiwiY29udGVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJsaW5rIiwiTnVtYmVyIiwiX2NsZWFuVHdlZXQiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaGFzQXR0cmlidXRlIiwiZCIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJlbGFwc2VkIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9