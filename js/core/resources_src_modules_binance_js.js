(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_binance_js"],{

/***/ "./resources/src/modules/binance.js":
/*!******************************************!*\
  !*** ./resources/src/modules/binance.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Binance)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol */ "./resources/src/modules/symbol.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./resources/src/modules/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);
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
 * Binance socket api wrapper class
 */




var Binance = /*#__PURE__*/function (_Bus) {
  _inherits(Binance, _Bus);

  var _super = _createSuper(Binance);

  /**
   * Constructor
   */
  function Binance() {
    var _this;

    _classCallCheck(this, Binance);

    _this = _super.call(this);
    _this._ajax = null;
    _this._apiurl = "https://api.binance.com/api";
    _this._wssurl = "wss://stream.binance.com:9443";
    _this._apikey = ""; // binance API key

    _this._apisecret = ""; // binance API secret

    _this._listenkey = ""; // user stream listen key

    _this._wait = 10000; // reconnect wait (mils)

    _this._coindata = {}; // data about each token

    _this._symbols = {}; // unique symbols data cache

    _this._markets = {}; // available markets and total assets

    _this._reconnect = {};
    _this._timers = {};
    _this._socks = {};
    return _this;
  }
  /**
   * Set ajax module reference to use for requests
   */


  _createClass(Binance, [{
    key: "useAjax",
    value: function useAjax(ajax) {
      this._ajax = ajax;
    }
    /**
     * Set API key
     */

  }, {
    key: "setApiKey",
    value: function setApiKey() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      this._apikey = String(key || "").trim();
    }
    /**
     * Set API secret
     */

  }, {
    key: "setApiSecret",
    value: function setApiSecret() {
      var secret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      this._apisecret = String(secret || "").trim();
    }
    /**
     * Set coins data fetched from somewhere else
     */

  }, {
    key: "setCoinData",
    value: function setCoinData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._coindata = Object.assign(this._coindata, data);
    }
    /**
     * Set socket reconnect boolean for an id
     */

  }, {
    key: "setReconnect",
    value: function setReconnect(id, toggle) {
      this._reconnect[id] = toggle ? true : false;
    }
    /**
     * Check reconnect toggle for an id and call a handler function
     */

  }, {
    key: "checkReconnect",
    value: function checkReconnect(id, callback) {
      if (!this._reconnect[id]) return;
      setTimeout(callback, this._wait);
    }
    /**
     * Get public api endpoint url
     */

  }, {
    key: "getPublicUrl",
    value: function getPublicUrl(endpoint, params) {
      var qstr = this._ajax.serializeData(Object.assign({}, params));

      return this._apiurl + endpoint + "?" + qstr;
    }
    /**
     * Get user signed api endpoint url
     */

  }, {
    key: "getSignedUrl",
    value: function getSignedUrl(endpoint, params) {
      var crypto = window.CryptoJS || null;
      var recvWindow = 100000;
      var timestamp = Date.now() - recvWindow / 2;

      var qstr = this._ajax.serializeData(Object.assign({
        recvWindow: recvWindow,
        timestamp: timestamp
      }, params));

      var signature = crypto ? crypto.HmacSHA256(qstr, this._apisecret).toString(crypto.enc.Hex) : "";
      return this._apiurl + endpoint + "?" + qstr + "&signature=" + signature;
    }
    /**
     * Fetch data about available markets form exchange
     */

  }, {
    key: "fetchMarketsData",
    value: function fetchMarketsData() {
      var _this2 = this;

      if (!this._ajax) return;
      var local = "../market/json/exchangeInfo.json"; // build markets data and emit it out

      var handleResponse = function handleResponse(res) {
        if (res && Array.isArray(res.symbols)) {
          var _iterator = _createForOfIteratorHelper(res.symbols),
              _step;

          try {
            var _loop = function _loop() {
              var symb = _step.value;
              var token = symb.quoteAsset; // market

              var count = res.symbols.filter(function (s) {
                return s.quoteAsset === token && s.baseAsset !== token && s.status === "TRADING";
              }).length;
              _this2._markets[token] = {
                token: token,
                count: count
              };
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this2.emit("markets_data", _this2._markets);
        }
      }; // try remote, then local if it fails


      this._ajax.get(local, {
        type: "json",
        proxy: false,
        success: function success(xhr, status, res) {
          return handleResponse(res);
        },
        error: function error(xhr, status, err) {
          _this2._ajax.get(remote, {
            type: "json",
            success: function success(xhr, status, res) {
              return handleResponse(res);
            }
          });
        }
      });
    }
    /**
     * Fetch last 24h candle data
     */

  }, {
    key: "fetchChartData",
    value: function fetchChartData(symbol, cb) {
      var _this3 = this;

      if (!this._ajax || !symbol) return;
      var endpoint = "".concat(this._apiurl, "/v3/klines?symbol=").concat(symbol, "&interval=1h&limit=168");
      var prices = [];

      this._ajax.get(endpoint, {
        type: "json",
        // cache: 600,
        success: function success(xhr, status, res) {
          if (res && Array.isArray(res)) {
            for (var i = 0; i < res.length; ++i) {
              prices.push(parseFloat(res[i][4])); // close price
            }
          }

          if (typeof cb === "function") cb(prices);

          _this3.emit("chart_data", {
            symbol: symbol,
            prices: prices
          });
        },
        error: function error(xhr, status, err) {
          if (typeof cb === "function") cb(prices);
          console.warn(err);
        }
      });
    }
    /**
     * Parse user balances data
     */

  }, {
    key: "parseUserBalances",
    value: function parseUserBalances(data) {
      var _this4 = this;

      var balances = [];
      if (Array.isArray(data)) balances = data; // as-is

      if (Array.isArray(data.balances)) balances = data.balances; // http

      if (Array.isArray(data.B)) balances = data.B; // websocket

      balances = balances.map(function (t) {
        var asset = String(t.a || t.asset || "");
        var pair = asset === "BTC" ? "USDT" : "BTC";
        var route = "/symbol/" + asset + pair;
        var name = _this4._names[asset] || asset;
        var free = parseFloat(t.f || t.free) || 0;
        var locked = parseFloat(t.l || t.locked) || 0;
        var total = free + locked;
        return {
          asset: asset,
          name: name,
          route: route,
          free: free,
          locked: locked,
          total: total
        };
      });
      return balances.filter(function (t) {
        return t.total > 0;
      });
    }
    /**
     * Parse order data from an API/Socket response and combine it with symbol data
     * @param {object}  data  Order data response
     */

  }, {
    key: "parseOrderData",
    value: function parseOrderData(data) {
      var now = Date.now();
      var time = Number(data.T || data.transactTime || now); // transaction time

      var id = String(data.i || data.orderId || ""); // order id

      var symbol = String(data.s || data.symbol || ""); // trade pair symbol

      var side = String(data.S || data.side || ""); // book side (BUY, SELL)

      var type = String(data.o || data.type || ""); // order type (LIMIT, MARKET, etc)

      var status = String(data.X || data.status || ""); // order status (NEW, CANCELED, FILLED, etc)

      var price = Number(data.p || data.price || 0); // order book price

      var quantity = Number(data.q || data.origQty || 0); // original trade quantity

      var filled = Number(data.z || data.executedQty || 0); // filled trade quantity

      var total = Number(data.Z || data.cummulativeQuoteQty || 0); // total trade asset cost

      var feeAsset = String(data.N || ""); // fee asset used for commission (BNB, etc)

      var feeAmount = Number(data.n || 0); // fee commission amount

      var percent = Number(filled / quantity * 100); // filled percent
      // resolve available amount after token fee has been deducted

      var smb = this._symbols[symbol] || new _symbol__WEBPACK_IMPORTED_MODULE_1__["default"](symbol);
      var amount = feeAsset === smb.token ? quantity - feeAmount : quantity;
      var unique = _utils__WEBPACK_IMPORTED_MODULE_2___default().unique(symbol + "|" + Math.floor(amount));
      status = status === "NEW" ? "OPEN" : status;

      if (!price && total) {
        price = total / quantity;
      }

      if (!total && price) {
        total = price * quantity;
      }

      return smb.getData({
        id: id,
        unique: unique,
        side: side,
        time: time,
        type: type,
        status: status,
        price: price,
        quantity: quantity,
        filled: filled,
        amount: amount,
        total: total,
        feeAsset: feeAsset,
        feeAmount: feeAmount,
        percent: percent
      });
    }
    /**
     * Build fake order data
     * @param {string}  symbol    Full trading symbol
     * @param {string}  type      Order type (LIMIT, MARKET)
     * @param {string}  side      Book side (BUY, SELL)
     * @param {number}  price     Book price
     * @param {number}  quantity  Order quantity
     */

  }, {
    key: "fakeOrderData",
    value: function fakeOrderData(symbol, type, side, price, quantity, status) {
      var time = Date.now();
      var id = _utils__WEBPACK_IMPORTED_MODULE_2___default().randString(20);
      var priceStr = Number(price).toFixed(8);
      var quantityStr = Number(quantity).toFixed(0);
      var totalStr = Number(price * quantity).toFixed(8);
      return this.parseOrderData({
        symbol: symbol,
        orderId: id,
        transactTime: time,
        price: priceStr,
        origQty: quantityStr,
        executedQty: quantityStr,
        cummulativeQuoteQty: totalStr,
        status: status,
        type: type,
        side: side
      });
    }
    /**
     * Simulate an order with fake API request
     * @param {string}  symbol    Full trading symbol
     * @param {string}  type      Order type (LIMIT, MARKET)
     * @param {string}  side      Book side (BUY, SELL)
     * @param {number}  price     Book price
     * @param {number}  quantity  Order quantity
     */

  }, {
    key: "placeFakeOrder",
    value: function placeFakeOrder(symbol, type, side, price, quantity) {
      var _this5 = this;

      var secs = Math.floor(1000 + Math.random() * 4000); // 1-5 secs

      var orderOpen = this.fakeOrderData(symbol, type, side, price, quantity, "OPEN");
      var orderFilled = this.fakeOrderData(symbol, type, side, price, quantity, "FILLED");
      var orderCanceled = this.fakeOrderData(symbol, type, side, price, quantity, "CANCELED");
      var orderResult = secs < 4900 ? orderFilled : orderCanceled;
      setTimeout(function () {
        _this5.emit("book_create", orderOpen);
      }, 300); // added to book

      setTimeout(function () {
        _this5.emit("user_order", orderResult);
      }, secs); // filled or canceled
    }
    /**
     * Place new order in book
     * @param {string}  symbol    Full trading symbol
     * @param {string}  type      Order type (LIMIT, MARKET)
     * @param {string}  side      Book side (BUY, SELL)
     * @param {number}  price     Book price
     * @param {number}  quantity  Order quantity
     * @param {string}  inforce   Time inforce type (GTC, IOC, FOK)
     */

  }, {
    key: "placeOrder",
    value: function placeOrder(symbol, type, side, price, quantity, inforce) {
      var _this6 = this;

      if (!this._apikey || !this._ajax) return;
      if (!symbol || !type || !side || !quantity || quantity <= 0) return;
      price = Number(price).toFixed(8);
      quantity = Number(quantity).toFixed(0);
      inforce = String(inforce || "FOK");
      var params = {
        symbol: symbol,
        side: side,
        type: type,
        quantity: quantity
      };
      if (type === "LIMIT") Object.assign(params, {
        price: price,
        timeInForce: inforce
      });
      Object.assign(params, {
        newOrderRespType: "RESULT"
      });

      this._ajax.post(this.getSignedUrl("/v3/order", params), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          var order = _this6.parseOrderData(response);

          _this6.emit("book_create", order);
        },
        error: function error(xhr, status, _error) {
          var order = _this6.fakeOrderData(symbol, type, side, price, quantity, "REJECTED");

          _this6.emit("book_fail", order, _error);
        }
      });
    }
    /**
     * Cancel order from book
     * @param {string}  symbol    Full trading symbol
     * @param {number}  orderId   Order ID number
     * @param {number}  quantity  Order quantity
     */

  }, {
    key: "cancelOrder",
    value: function cancelOrder(symbol, orderId, quantity) {
      var _this7 = this;

      if (!this._apikey || !this._ajax) return;
      if (!symbol || !orderId) return;

      this._ajax["delete"](this.getSignedUrl("/v3/order", {
        symbol: symbol,
        orderId: orderId
      }), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          var order = _this7.fakeOrderData(symbol, "MARKET", "CANCEL", 1, quantity, "COMPLETE");

          _this7.emit("book_cancel", order);
        },
        error: function error(xhr, status, _error2) {
          var order = _this7.fakeOrderData(symbol, "MARKET", "CANCEL", 1, quantity, "FAILED");

          _this7.emit("book_fail", order, _error2);
        }
      });
    }
    /**
     * Get user account data over ajax
     */

  }, {
    key: "fetchUserAccount",
    value: function fetchUserAccount() {
      var _this8 = this;

      if (!this._apikey || !this._ajax) return;

      this._ajax.get(this.getSignedUrl("/v3/account"), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          var balances = _this8.parseUserBalances(response);

          _this8.emit("user_balances", balances);

          _this8.emit("user_data", true);
        },
        error: function error(xhr, status, _error3) {
          _this8.emit("user_fail", _error3);

          _this8.stopUserStream();
        }
      });
    }
    /**
     * Fetch current open orders
     */

  }, {
    key: "fetchOpenOrders",
    value: function fetchOpenOrders() {
      var _this9 = this;

      if (!this._apikey || !this._ajax) return;

      this._ajax.get(this.getSignedUrl("/v3/openOrders"), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          response.forEach(function (o) {
            return _this9.emit("user_order", _this9.parseOrderData(o));
          });

          _this9.emit("user_data", true);
        },
        error: function error(xhr, status, _error4) {
          _this9.emit("user_fail", _error4);
        }
      });
    }
    /**
     * Attempt to start a new user stream
     */

  }, {
    key: "initUserStream",
    value: function initUserStream(reconnect) {
      var _this10 = this;

      if (!this._apikey || !this._ajax) return;
      this.emit("user_init", Date.now());
      this.stopUserStream();

      this._ajax.post(this.getPublicUrl("/v1/userDataStream"), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          var time = 1000 * 60 * 20; // 20 mins

          var func = _this10.extendStreamKey.bind(_this10);

          _this10._listenkey = String(response.listenKey || "").trim();

          _this10.emit("user_listenkey", _this10._listenkey);

          _this10.startUserStream(_this10._listenkey, reconnect);

          _this10.startTimer("user", time, func, false);
        },
        error: function error(xhr, status, _error5) {
          _this10.emit("user_fail", _error5);
        }
      });
    }
    /**
     * Extend user stream listen key
     */

  }, {
    key: "extendStreamKey",
    value: function extendStreamKey() {
      var _this11 = this;

      if (!this._apikey || !this._ajax) return;
      if (!this._listenkey) return;

      this._ajax.put(this.getPublicUrl("/v1/userDataStream", {
        listenKey: this._listenkey
      }), {
        type: "json",
        headers: {
          "X-MBX-APIKEY": this._apikey
        },
        success: function success(xhr, status, response) {
          _this11.emit("user_listenkey", _this11._listenkey);
        }
      });
    }
    /**
     * Connect to a live user account data stream
     */

  }, {
    key: "startUserStream",
    value: function startUserStream(listenKey, reconnect) {
      var _this12 = this;

      this.setReconnect("user", reconnect || false);
      this.emit("user_init", Date.now());
      var ws = this.sockConnect("user", this._wssurl + "/ws/" + listenKey);
      if (!ws) return this.emit("user_fail", "Could not connect to user stream API endpoint.");
      ws.addEventListener("open", function (e) {
        _this12.emit("user_open", e);

        _this12.fetchUserAccount();

        _this12.fetchOpenOrders();
      });
      ws.addEventListener("error", function (e) {
        _this12.emit("user_error", e);

        _this12.stopTimer("user");
      });
      ws.addEventListener("close", function (e) {
        _this12.emit("user_close", e);

        _this12.stopTimer("user");

        _this12.checkReconnect("user", function () {
          return _this12.startUserStream(listenKey, reconnect);
        });
      });
      ws.addEventListener("message", function (e) {
        _this12.emit("user_data", true);

        var data = JSON.parse(e.data || "{}") || {};

        if (data.e === "outboundAccountInfo") {
          var balances = _this12.parseUserBalances(data);

          return _this12.emit("user_balances", balances);
        }

        if (data.e === "executionReport") {
          var order = _this12.parseOrderData(data);

          return _this12.emit("user_order", order);
        }
      });
    }
    /**
     * Stop user stream
     */

  }, {
    key: "stopUserStream",
    value: function stopUserStream() {
      this.setReconnect("user", false);
      this.stopTimer("user");
      this.sockClose("user");
    }
    /**
     * Connect to live ticker prices socket endpoint
     */

  }, {
    key: "startTickerStream",
    value: function startTickerStream(reconnect) {
      var _this13 = this;

      this.setReconnect("ticker", reconnect || false);
      this.emit("ticker_init", Date.now());
      var ws = this.sockConnect("ticker", this._wssurl + "/ws/!ticker@arr");
      if (!ws) return this.emit("ticker_fail", "Could not connect to live ticker stream API endpoint.");
      ws.addEventListener("open", function (e) {
        _this13.emit("ticker_open", e);

        _this13.startTickerTimer();
      });
      ws.addEventListener("error", function (e) {
        _this13.emit("ticker_error", e);

        _this13.stopTimer("ticker");
      });
      ws.addEventListener("close", function (e) {
        _this13.emit("ticker_close", e);

        _this13.stopTimer("ticker");

        _this13.checkReconnect("ticker", function () {
          return _this13.startTickerStream(reconnect);
        });
      });
      ws.addEventListener("message", function (e) {
        _this13.emit("ticker_data", true);

        var list = JSON.parse(e.data || "[]") || [];
        var markets = Object.keys(_this13._markets);
        var count = list.length; // wait for markets data to be available before creating symbols

        if (!markets.length || !count) return;

        while (count--) {
          var ticker = list[count];
          var pair = ticker.s; // trading pair symbol str

          var symbol = _this13._symbols[pair] || new _symbol__WEBPACK_IMPORTED_MODULE_1__["default"](pair); // cached

          symbol.splitSymbol(markets); // split pair symbol into token / market

          symbol.setCoinData(_this13._coindata[symbol.token]); // data from coincap.io

          symbol.setTickerData(ticker); // update symbol ticker data

          symbol.resolveImage(); // find an icon for this token

          _this13._symbols[pair] = symbol; // update cache
        }
      });
    }
    /**
     * Start ticker data timer
     */

  }, {
    key: "startTickerTimer",
    value: function startTickerTimer() {
      var _this14 = this;

      this.stopTimer("ticker");
      this.startTimer("ticker", 1000, function () {
        var keys = Object.keys(_this14._symbols);
        var count = keys.length;
        var prices = [];

        while (count--) {
          prices.push(_this14._symbols[keys[count]]);
        }

        _this14.emit("ticker_prices", prices);
      }, true);
    }
    /**
     * Stop price ticker
     */

  }, {
    key: "stopTickerStream",
    value: function stopTickerStream() {
      this.setReconnect("ticker", false);
      this.stopTimer("ticker");
      this.sockClose("ticker");
    }
    /**
     * Start custom timer
     * @param {string}    id        Timer id name
     * @param {number}    time      Interval mils
     * @param {function}  callback  Callback function
     * @param {boolean}   init      Init callback
     */

  }, {
    key: "startTimer",
    value: function startTimer(id, time, callback, init) {
      this.stopTimer(id);
      this._timers[id] = setInterval(callback, time);
      if (init) callback();
    }
    /**
     * Stop custom timer
     * @param {string}  id  Timer id name
     */

  }, {
    key: "stopTimer",
    value: function stopTimer(id) {
      if (!id || !this._timers.hasOwnProperty(id)) return;
      clearInterval(this._timers[id]);
      delete this._timers[id];
    }
    /**
     * Create a WebSocket connection
     * @param {string}  id      Ref id name
     * @param {string}  endpoint  Socket endpoint url
     */

  }, {
    key: "sockConnect",
    value: function sockConnect(id, endpoint) {
      if (!id || !endpoint) return;
      this.emit("sock_init", endpoint);
      this.sockClose(id);

      if (!("WebSocket" in window)) {
        this.emit("sock_fail", "This web browser does not have WebSocket support.");
        return false;
      }

      try {
        var ws = new WebSocket(endpoint);
        this._socks[id] = ws;
        return ws;
      } catch (err) {
        var message = String(err.message || "WebSocket endpoint connection failed for (" + endpoint + ").");
        this.emit("sock_fail", message);
        return false;
      }
    }
    /**
     * Close socket connection and remove it from the list
     * @param {string}  id  Socket id name
     */

  }, {
    key: "sockClose",
    value: function sockClose(id) {
      if (!id || !this._socks.hasOwnProperty(id)) return;
      this.emit("sock_close", id);

      this._socks[id].close();

      delete this._socks[id];
    }
    /**
     * Close all active socket connections
     */

  }, {
    key: "sockCloseAll",
    value: function sockCloseAll() {
      var _this15 = this;

      Object.keys(this._socks).forEach(function (id) {
        return _this15.sockClose(id);
      });
    }
  }]);

  return Binance;
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

/***/ "./resources/src/modules/symbol.js":
/*!*****************************************!*\
  !*** ./resources/src/modules/symbol.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _Symbol)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Ticker symbol class
 */
var _Symbol = /*#__PURE__*/function () {
  // constructor
  function _Symbol() {
    var symbol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, _Symbol);

    this.symbol = String(symbol || "").toUpperCase();
    this.id = ""; // custom unique token id

    this.token = ""; // base asset token

    this.market = ""; // quote asset token (market)

    this.name = ""; // name of token

    this.pair = ""; // token/market

    this.route = this.symbol;
    this.image = "../../../assets/images/cryptoCurrency/default_.png";
    this.imageLoaded = false;
    this.open = 0;
    this.high = 0;
    this.low = 0;
    this.close = 0;
    this.change = 0;
    this.percent = 0;
    this.trades = 0;
    this.tokenVolume = 0;
    this.marketVolume = 0;
    this.volatility = 0;
    this.danger = 0;
    this.time = 0;
    this.rank = 0;
    this.supply = 0;
    this.capusd = 0;
    this.history = [];
    this.candles = [];
    this.sign = "";
    this.arrow = "";
    this.style = "";
  }
  /**
   * Split full symbol (BTCUSD) into token and asset symbols (BTC, USD)
   */


  _createClass(_Symbol, [{
    key: "splitSymbol",
    value: function splitSymbol() {
      var markets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (this.token || this.market || !markets.length) return;
      var quotes = markets.join("|");
      var regexp = new RegExp("^([A-Z0-9]+)(".concat(quotes, ")$"));
      this.token = this.symbol.replace(regexp, "$1") || this.token;
      this.market = this.symbol.replace(regexp, "$2") || this.market;
      this.name = this.token;
      this.pair = this.token + "/" + this.market;
    }
    /**
     * Set coin data fetched from coincap API
     * https://docs.coincap.io/
     */

  }, {
    key: "setCoinData",
    value: function setCoinData(data) {
      if (_typeof(data) !== "object") return;
      this.id = String(data.id || this.id).trim();
      this.name = String(data.name || this.token).trim();
      this.rank = Number(data.rank || 0);
      this.supply = Number(data.supply || 0);
      this.capusd = Number(data.marketCapUsd || 0);
    }
    /**
     * Set latest ticker values from binance socket API
     * https://binance-docs.github.io/apidocs/spot/en/#individual-symbol-mini-ticker-stream
     */

  }, {
    key: "setTickerData",
    value: function setTickerData(data) {
      this.open = Number(data.o || data.openPrice || 0);
      this.high = Number(data.h || data.highPrice || 0);
      this.low = Number(data.l || data.lowPrice || 0);
      this.close = Number(data.c || data.lastPrice || 0);
      this.change = Number(data.p || data.priceChange || 0);
      this.percent = Number(data.P || data.priceChangePercent || 0);
      this.trades = Number(data.n || data.count || 0);
      this.tokenVolume = Number(data.v || data.volume || 0);
      this.marketVolume = Number(data.q || data.quoteVolume || 0);
      this.sign = this.percent > 0 ? "+" : "";
      this.arrow = this.percent > 0 ? "▲" : "▼";
      this.calcVolatility();
      this.calcDanger();
      this.calcHistory();
      this.calcStyle();
    }
    /**
     * Resolve token icon image
     */

  }, {
    key: "resolveImage",
    value: function resolveImage() {
      //if ( !this.token || this.imageLoaded ) return;
      //let img = new Image();
      //img.addEventListener( 'load',  e => { this.imageLoaded = true; this.image = img.src; } );
      //img.addEventListener( 'error', e => { this.imageLoaded = true; } );
      //img.src = '../../../assets/images/cryptoCurrency/'+ String( this.token ).toLowerCase() +'_.png';
      this.imageLoaded = !0, this.image = "../../../assets/images/cryptoCurrency/" + String(this.token).toLowerCase() + ".png";
    }
    /**
     * Get symbol data with merged data
     * @param {object}  merge  Optional object
     */

  }, {
    key: "getData",
    value: function getData(merge) {
      var volume = this.marketVolume;
      var id = this.id,
          symbol = this.symbol,
          token = this.token,
          market = this.market,
          name = this.name,
          pair = this.pair,
          route = this.route,
          image = this.image,
          close = this.close,
          capusd = this.capusd,
          supply = this.supply;
      return Object.assign({
        id: id,
        symbol: symbol,
        token: token,
        market: market,
        name: name,
        pair: pair,
        route: route,
        image: image,
        close: close,
        capusd: capusd,
        supply: supply,
        volume: volume
      }, merge);
    }
    /**
     * Cleanup stored price data
     */

  }, {
    key: "flushData",
    value: function flushData() {
      this.history = [];
      this.candles = [];
    }
    /**
     * Calculate style class based on percent
     */

  }, {
    key: "calcStyle",
    value: function calcStyle() {
      this.style = "";
      if (this.percent > 0) this.style = "gain";
      if (this.percent < 0) this.style = "loss";
    }
    /**
     * Calculate 24h high/low volatility score
     */

  }, {
    key: "calcVolatility",
    value: function calcVolatility() {
      var change = this.high - this.low;
      this.volatility = this.high ? change / this.high * 100.0 : 0.0;
    }
    /**
     * Calculate possible pump/dump danger score based on cached price action from recent few hours
     */

  }, {
    key: "calcDanger",
    value: function calcDanger() {
      var now = Date.now();
      var wait = 300; // secs to wait

      var hrs = 3; // hours to store prices

      var secs = (now - this.time) / 1000;
      var total = 60 * 60 * hrs / wait;
      if (secs < wait) return;
      this.candles.push(this.close);
      this.candles.splice(0, this.candles.length - total);
      var idx = this.candles.length;
      var min = this.candles[0];
      var max = this.candles[0];

      while (idx--) {
        var price = this.candles[idx];
        min = price < min ? price : min;
        max = price > max ? price : max;
      }

      var change = max - min;
      this.danger = max ? change / max * 100.0 : 0.0;
      this.time = now;
    }
    /**
     * Manages a history list with the latest close price
     */

  }, {
    key: "calcHistory",
    value: function calcHistory() {
      if (!this.history.length) this.fakeHistory();
      this.history.push(this.close);
      this.history.splice(0, this.history.length - 30);
    }
    /**
     * Come up with some fake history prices to fill in the initial line chart
     */

  }, {
    key: "fakeHistory",
    value: function fakeHistory() {
      var num = this.close * 0.0002;
      var min = -Math.abs(num);
      var max = Math.abs(num);
      this.history = [];

      for (var i = 0; i < 30; ++i) {
        var rand = Math.random() * (max - min) + min;
        this.history.push(this.close + rand);
      }
    }
  }]);

  return _Symbol;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfYmluYW5jZV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCRzs7Ozs7RUFDakI7QUFDSjtBQUNBO0VBQ0ksbUJBQWM7SUFBQTs7SUFBQTs7SUFDVjtJQUNBLE1BQUtDLEtBQUwsR0FBYSxJQUFiO0lBQ0EsTUFBS0MsT0FBTCxHQUFlLDZCQUFmO0lBQ0EsTUFBS0MsT0FBTCxHQUFlLCtCQUFmO0lBQ0EsTUFBS0MsT0FBTCxHQUFlLEVBQWYsQ0FMVSxDQUtTOztJQUNuQixNQUFLQyxVQUFMLEdBQWtCLEVBQWxCLENBTlUsQ0FNWTs7SUFDdEIsTUFBS0MsVUFBTCxHQUFrQixFQUFsQixDQVBVLENBT1k7O0lBQ3RCLE1BQUtDLEtBQUwsR0FBYSxLQUFiLENBUlUsQ0FRVTs7SUFDcEIsTUFBS0MsU0FBTCxHQUFpQixFQUFqQixDQVRVLENBU1c7O0lBQ3JCLE1BQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FWVSxDQVVVOztJQUNwQixNQUFLQyxRQUFMLEdBQWdCLEVBQWhCLENBWFUsQ0FXVTs7SUFDcEIsTUFBS0MsVUFBTCxHQUFrQixFQUFsQjtJQUNBLE1BQUtDLE9BQUwsR0FBZSxFQUFmO0lBQ0EsTUFBS0MsTUFBTCxHQUFjLEVBQWQ7SUFkVTtFQWViO0VBRUQ7QUFDSjtBQUNBOzs7OztXQUNJLGlCQUFRQyxJQUFSLEVBQWM7TUFDVixLQUFLYixLQUFMLEdBQWFhLElBQWI7SUFDSDtJQUVEO0FBQ0o7QUFDQTs7OztXQUNJLHFCQUFvQjtNQUFBLElBQVZDLEdBQVUsdUVBQUosRUFBSTtNQUNoQixLQUFLWCxPQUFMLEdBQWVZLE1BQU0sQ0FBQ0QsR0FBRyxJQUFJLEVBQVIsQ0FBTixDQUFrQkUsSUFBbEIsRUFBZjtJQUNIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksd0JBQTBCO01BQUEsSUFB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QUssQ0FBQ3ZWLE1BQWpDLENBQWIsQ0FBVjtNQUNBZ0MsS0FBSztJQUNSOztJQUNELE9BQU8wSyxNQUFQO0VBQ0gsQ0E3WVk7RUErWWI7RUFDQStJLFFBaFphLHNCQWdaRjtJQUNQLE9BQU8sQ0FDSDlXLElBQUksQ0FBQ0MsR0FBTCxHQUFXRyxRQUFYLENBQW9CLEVBQXBCLElBQTBCNkUsSUFBSSxDQUFDVSxNQUFMLEdBQWN2RixRQUFkLENBQXVCLEVBQXZCLEVBQTJCMlcsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FEdkIsRUFFTHROLFdBRkssRUFBUDtFQUdIO0FBcFpZLENBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2JpbmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL2J1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJpbmFuY2Ugc29ja2V0IGFwaSB3cmFwcGVyIGNsYXNzXG4gKi9cbmltcG9ydCBCdXMgZnJvbSBcIi4vYnVzXCI7XG5pbXBvcnQgU3ltYm9sIGZyb20gXCIuL3N5bWJvbFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmFuY2UgZXh0ZW5kcyBCdXMge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2FqYXggPSBudWxsO1xuICAgICAgICB0aGlzLl9hcGl1cmwgPSBcImh0dHBzOi8vYXBpLmJpbmFuY2UuY29tL2FwaVwiO1xuICAgICAgICB0aGlzLl93c3N1cmwgPSBcIndzczovL3N0cmVhbS5iaW5hbmNlLmNvbTo5NDQzXCI7XG4gICAgICAgIHRoaXMuX2FwaWtleSA9IFwiXCI7IC8vIGJpbmFuY2UgQVBJIGtleVxuICAgICAgICB0aGlzLl9hcGlzZWNyZXQgPSBcIlwiOyAvLyBiaW5hbmNlIEFQSSBzZWNyZXRcbiAgICAgICAgdGhpcy5fbGlzdGVua2V5ID0gXCJcIjsgLy8gdXNlciBzdHJlYW0gbGlzdGVuIGtleVxuICAgICAgICB0aGlzLl93YWl0ID0gMTAwMDA7IC8vIHJlY29ubmVjdCB3YWl0IChtaWxzKVxuICAgICAgICB0aGlzLl9jb2luZGF0YSA9IHt9OyAvLyBkYXRhIGFib3V0IGVhY2ggdG9rZW5cbiAgICAgICAgdGhpcy5fc3ltYm9scyA9IHt9OyAvLyB1bmlxdWUgc3ltYm9scyBkYXRhIGNhY2hlXG4gICAgICAgIHRoaXMuX21hcmtldHMgPSB7fTsgLy8gYXZhaWxhYmxlIG1hcmtldHMgYW5kIHRvdGFsIGFzc2V0c1xuICAgICAgICB0aGlzLl9yZWNvbm5lY3QgPSB7fTtcbiAgICAgICAgdGhpcy5fdGltZXJzID0ge307XG4gICAgICAgIHRoaXMuX3NvY2tzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFqYXggbW9kdWxlIHJlZmVyZW5jZSB0byB1c2UgZm9yIHJlcXVlc3RzXG4gICAgICovXG4gICAgdXNlQWpheChhamF4KSB7XG4gICAgICAgIHRoaXMuX2FqYXggPSBhamF4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBBUEkga2V5XG4gICAgICovXG4gICAgc2V0QXBpS2V5KGtleSA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5fYXBpa2V5ID0gU3RyaW5nKGtleSB8fCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IEFQSSBzZWNyZXRcbiAgICAgKi9cbiAgICBzZXRBcGlTZWNyZXQoc2VjcmV0ID0gXCJcIikge1xuICAgICAgICB0aGlzLl9hcGlzZWNyZXQgPSBTdHJpbmcoc2VjcmV0IHx8IFwiXCIpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY29pbnMgZGF0YSBmZXRjaGVkIGZyb20gc29tZXdoZXJlIGVsc2VcbiAgICAgKi9cbiAgICBzZXRDb2luRGF0YShkYXRhID0ge30pIHtcbiAgICAgICAgdGhpcy5fY29pbmRhdGEgPSBPYmplY3QuYXNzaWduKHRoaXMuX2NvaW5kYXRhLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgc29ja2V0IHJlY29ubmVjdCBib29sZWFuIGZvciBhbiBpZFxuICAgICAqL1xuICAgIHNldFJlY29ubmVjdChpZCwgdG9nZ2xlKSB7XG4gICAgICAgIHRoaXMuX3JlY29ubmVjdFtpZF0gPSB0b2dnbGUgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgcmVjb25uZWN0IHRvZ2dsZSBmb3IgYW4gaWQgYW5kIGNhbGwgYSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgICovXG4gICAgY2hlY2tSZWNvbm5lY3QoaWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVjb25uZWN0W2lkXSkgcmV0dXJuO1xuICAgICAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLl93YWl0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcHVibGljIGFwaSBlbmRwb2ludCB1cmxcbiAgICAgKi9cbiAgICBnZXRQdWJsaWNVcmwoZW5kcG9pbnQsIHBhcmFtcykge1xuICAgICAgICBsZXQgcXN0ciA9IHRoaXMuX2FqYXguc2VyaWFsaXplRGF0YShPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaXVybCArIGVuZHBvaW50ICsgXCI/XCIgKyBxc3RyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB1c2VyIHNpZ25lZCBhcGkgZW5kcG9pbnQgdXJsXG4gICAgICovXG4gICAgZ2V0U2lnbmVkVXJsKGVuZHBvaW50LCBwYXJhbXMpIHtcbiAgICAgICAgbGV0IGNyeXB0byA9IHdpbmRvdy5DcnlwdG9KUyB8fCBudWxsO1xuICAgICAgICBsZXQgcmVjdldpbmRvdyA9IDEwMDAwMDtcbiAgICAgICAgbGV0IHRpbWVzdGFtcCA9IERhdGUubm93KCkgLSByZWN2V2luZG93IC8gMjtcbiAgICAgICAgbGV0IHFzdHIgPSB0aGlzLl9hamF4LnNlcmlhbGl6ZURhdGEoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHsgcmVjdldpbmRvdywgdGltZXN0YW1wIH0sIHBhcmFtcylcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHNpZ25hdHVyZSA9IGNyeXB0b1xuICAgICAgICAgICAgPyBjcnlwdG8uSG1hY1NIQTI1Nihxc3RyLCB0aGlzLl9hcGlzZWNyZXQpLnRvU3RyaW5nKGNyeXB0by5lbmMuSGV4KVxuICAgICAgICAgICAgOiBcIlwiO1xuICAgICAgICByZXR1cm4gdGhpcy5fYXBpdXJsICsgZW5kcG9pbnQgKyBcIj9cIiArIHFzdHIgKyBcIiZzaWduYXR1cmU9XCIgKyBzaWduYXR1cmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggZGF0YSBhYm91dCBhdmFpbGFibGUgbWFya2V0cyBmb3JtIGV4Y2hhbmdlXG4gICAgICovXG4gICAgZmV0Y2hNYXJrZXRzRGF0YSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hamF4KSByZXR1cm47XG4gICAgICAgIGNvbnN0IGxvY2FsID0gYC4uL21hcmtldC9qc29uL2V4Y2hhbmdlSW5mby5qc29uYDtcblxuICAgICAgICAvLyBidWlsZCBtYXJrZXRzIGRhdGEgYW5kIGVtaXQgaXQgb3V0XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcyAmJiBBcnJheS5pc0FycmF5KHJlcy5zeW1ib2xzKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHN5bWIgb2YgcmVzLnN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gc3ltYi5xdW90ZUFzc2V0OyAvLyBtYXJrZXRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gcmVzLnN5bWJvbHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5xdW90ZUFzc2V0ID09PSB0b2tlbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuYmFzZUFzc2V0ICE9PSB0b2tlbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc3RhdHVzID09PSBcIlRSQURJTkdcIlxuICAgICAgICAgICAgICAgICAgICApLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFya2V0c1t0b2tlbl0gPSB7IHRva2VuLCBjb3VudCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJtYXJrZXRzX2RhdGFcIiwgdGhpcy5fbWFya2V0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRyeSByZW1vdGUsIHRoZW4gbG9jYWwgaWYgaXQgZmFpbHNcbiAgICAgICAgdGhpcy5fYWpheC5nZXQobG9jYWwsIHtcbiAgICAgICAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgcHJveHk6IGZhbHNlLFxuICAgICAgICAgICAgc3VjY2VzczogKHhociwgc3RhdHVzLCByZXMpID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICBlcnJvcjogKHhociwgc3RhdHVzLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hamF4LmdldChyZW1vdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh4aHIsIHN0YXR1cywgcmVzKSA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggbGFzdCAyNGggY2FuZGxlIGRhdGFcbiAgICAgKi9cbiAgICBmZXRjaENoYXJ0RGF0YShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGlmICghdGhpcy5fYWpheCB8fCAhc3ltYm9sKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVuZHBvaW50ID0gYCR7dGhpcy5fYXBpdXJsfS92My9rbGluZXM/c3ltYm9sPSR7c3ltYm9sfSZpbnRlcnZhbD0xaCZsaW1pdD0xNjhgO1xuICAgICAgICBjb25zdCBwcmljZXMgPSBbXTtcblxuICAgICAgICB0aGlzLl9hamF4LmdldChlbmRwb2ludCwge1xuICAgICAgICAgICAgdHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAvLyBjYWNoZTogNjAwLFxuICAgICAgICAgICAgc3VjY2VzczogKHhociwgc3RhdHVzLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzICYmIEFycmF5LmlzQXJyYXkocmVzKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzLnB1c2gocGFyc2VGbG9hdChyZXNbaV1bNF0pKTsgLy8gY2xvc2UgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIGNiKHByaWNlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiY2hhcnRfZGF0YVwiLCB7IHN5bWJvbCwgcHJpY2VzIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoeGhyLCBzdGF0dXMsIGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikgY2IocHJpY2VzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHVzZXIgYmFsYW5jZXMgZGF0YVxuICAgICAqL1xuICAgIHBhcnNlVXNlckJhbGFuY2VzKGRhdGEpIHtcbiAgICAgICAgbGV0IGJhbGFuY2VzID0gW107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSBiYWxhbmNlcyA9IGRhdGE7IC8vIGFzLWlzXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuYmFsYW5jZXMpKSBiYWxhbmNlcyA9IGRhdGEuYmFsYW5jZXM7IC8vIGh0dHBcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5CKSkgYmFsYW5jZXMgPSBkYXRhLkI7IC8vIHdlYnNvY2tldFxuXG4gICAgICAgIGJhbGFuY2VzID0gYmFsYW5jZXMubWFwKCh0KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXQgPSBTdHJpbmcodC5hIHx8IHQuYXNzZXQgfHwgXCJcIik7XG4gICAgICAgICAgICBsZXQgcGFpciA9IGFzc2V0ID09PSBcIkJUQ1wiID8gXCJVU0RUXCIgOiBcIkJUQ1wiO1xuICAgICAgICAgICAgbGV0IHJvdXRlID0gXCIvc3ltYm9sL1wiICsgYXNzZXQgKyBwYWlyO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSB0aGlzLl9uYW1lc1thc3NldF0gfHwgYXNzZXQ7XG4gICAgICAgICAgICBsZXQgZnJlZSA9IHBhcnNlRmxvYXQodC5mIHx8IHQuZnJlZSkgfHwgMDtcbiAgICAgICAgICAgIGxldCBsb2NrZWQgPSBwYXJzZUZsb2F0KHQubCB8fCB0LmxvY2tlZCkgfHwgMDtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IGZyZWUgKyBsb2NrZWQ7XG4gICAgICAgICAgICByZXR1cm4geyBhc3NldCwgbmFtZSwgcm91dGUsIGZyZWUsIGxvY2tlZCwgdG90YWwgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiYWxhbmNlcy5maWx0ZXIoKHQpID0+IHQudG90YWwgPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBvcmRlciBkYXRhIGZyb20gYW4gQVBJL1NvY2tldCByZXNwb25zZSBhbmQgY29tYmluZSBpdCB3aXRoIHN5bWJvbCBkYXRhXG4gICAgICogQHBhcmFtIHtvYmplY3R9ICBkYXRhICBPcmRlciBkYXRhIHJlc3BvbnNlXG4gICAgICovXG4gICAgcGFyc2VPcmRlckRhdGEoZGF0YSkge1xuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IHRpbWUgPSBOdW1iZXIoZGF0YS5UIHx8IGRhdGEudHJhbnNhY3RUaW1lIHx8IG5vdyk7IC8vIHRyYW5zYWN0aW9uIHRpbWVcbiAgICAgICAgbGV0IGlkID0gU3RyaW5nKGRhdGEuaSB8fCBkYXRhLm9yZGVySWQgfHwgXCJcIik7IC8vIG9yZGVyIGlkXG4gICAgICAgIGxldCBzeW1ib2wgPSBTdHJpbmcoZGF0YS5zIHx8IGRhdGEuc3ltYm9sIHx8IFwiXCIpOyAvLyB0cmFkZSBwYWlyIHN5bWJvbFxuICAgICAgICBsZXQgc2lkZSA9IFN0cmluZyhkYXRhLlMgfHwgZGF0YS5zaWRlIHx8IFwiXCIpOyAvLyBib29rIHNpZGUgKEJVWSwgU0VMTClcbiAgICAgICAgbGV0IHR5cGUgPSBTdHJpbmcoZGF0YS5vIHx8IGRhdGEudHlwZSB8fCBcIlwiKTsgLy8gb3JkZXIgdHlwZSAoTElNSVQsIE1BUktFVCwgZXRjKVxuICAgICAgICBsZXQgc3RhdHVzID0gU3RyaW5nKGRhdGEuWCB8fCBkYXRhLnN0YXR1cyB8fCBcIlwiKTsgLy8gb3JkZXIgc3RhdHVzIChORVcsIENBTkNFTEVELCBGSUxMRUQsIGV0YylcbiAgICAgICAgbGV0IHByaWNlID0gTnVtYmVyKGRhdGEucCB8fCBkYXRhLnByaWNlIHx8IDApOyAvLyBvcmRlciBib29rIHByaWNlXG4gICAgICAgIGxldCBxdWFudGl0eSA9IE51bWJlcihkYXRhLnEgfHwgZGF0YS5vcmlnUXR5IHx8IDApOyAvLyBvcmlnaW5hbCB0cmFkZSBxdWFudGl0eVxuICAgICAgICBsZXQgZmlsbGVkID0gTnVtYmVyKGRhdGEueiB8fCBkYXRhLmV4ZWN1dGVkUXR5IHx8IDApOyAvLyBmaWxsZWQgdHJhZGUgcXVhbnRpdHlcbiAgICAgICAgbGV0IHRvdGFsID0gTnVtYmVyKGRhdGEuWiB8fCBkYXRhLmN1bW11bGF0aXZlUXVvdGVRdHkgfHwgMCk7IC8vIHRvdGFsIHRyYWRlIGFzc2V0IGNvc3RcbiAgICAgICAgbGV0IGZlZUFzc2V0ID0gU3RyaW5nKGRhdGEuTiB8fCBcIlwiKTsgLy8gZmVlIGFzc2V0IHVzZWQgZm9yIGNvbW1pc3Npb24gKEJOQiwgZXRjKVxuICAgICAgICBsZXQgZmVlQW1vdW50ID0gTnVtYmVyKGRhdGEubiB8fCAwKTsgLy8gZmVlIGNvbW1pc3Npb24gYW1vdW50XG4gICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKChmaWxsZWQgLyBxdWFudGl0eSkgKiAxMDApOyAvLyBmaWxsZWQgcGVyY2VudFxuXG4gICAgICAgIC8vIHJlc29sdmUgYXZhaWxhYmxlIGFtb3VudCBhZnRlciB0b2tlbiBmZWUgaGFzIGJlZW4gZGVkdWN0ZWRcbiAgICAgICAgbGV0IHNtYiA9IHRoaXMuX3N5bWJvbHNbc3ltYm9sXSB8fCBuZXcgU3ltYm9sKHN5bWJvbCk7XG4gICAgICAgIGxldCBhbW91bnQgPSBmZWVBc3NldCA9PT0gc21iLnRva2VuID8gcXVhbnRpdHkgLSBmZWVBbW91bnQgOiBxdWFudGl0eTtcbiAgICAgICAgbGV0IHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZShzeW1ib2wgKyBcInxcIiArIE1hdGguZmxvb3IoYW1vdW50KSk7XG5cbiAgICAgICAgc3RhdHVzID0gc3RhdHVzID09PSBcIk5FV1wiID8gXCJPUEVOXCIgOiBzdGF0dXM7XG4gICAgICAgIGlmICghcHJpY2UgJiYgdG90YWwpIHtcbiAgICAgICAgICAgIHByaWNlID0gdG90YWwgLyBxdWFudGl0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRvdGFsICYmIHByaWNlKSB7XG4gICAgICAgICAgICB0b3RhbCA9IHByaWNlICogcXVhbnRpdHk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc21iLmdldERhdGEoe1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB1bmlxdWUsXG4gICAgICAgICAgICBzaWRlLFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICAgICAgZmlsbGVkLFxuICAgICAgICAgICAgYW1vdW50LFxuICAgICAgICAgICAgdG90YWwsXG4gICAgICAgICAgICBmZWVBc3NldCxcbiAgICAgICAgICAgIGZlZUFtb3VudCxcbiAgICAgICAgICAgIHBlcmNlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZha2Ugb3JkZXIgZGF0YVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgc3ltYm9sICAgIEZ1bGwgdHJhZGluZyBzeW1ib2xcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHR5cGUgICAgICBPcmRlciB0eXBlIChMSU1JVCwgTUFSS0VUKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgc2lkZSAgICAgIEJvb2sgc2lkZSAoQlVZLCBTRUxMKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcHJpY2UgICAgIEJvb2sgcHJpY2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gIHF1YW50aXR5ICBPcmRlciBxdWFudGl0eVxuICAgICAqL1xuICAgIGZha2VPcmRlckRhdGEoc3ltYm9sLCB0eXBlLCBzaWRlLCBwcmljZSwgcXVhbnRpdHksIHN0YXR1cykge1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBpZCA9IHV0aWxzLnJhbmRTdHJpbmcoMjApO1xuICAgICAgICBsZXQgcHJpY2VTdHIgPSBOdW1iZXIocHJpY2UpLnRvRml4ZWQoOCk7XG4gICAgICAgIGxldCBxdWFudGl0eVN0ciA9IE51bWJlcihxdWFudGl0eSkudG9GaXhlZCgwKTtcbiAgICAgICAgbGV0IHRvdGFsU3RyID0gTnVtYmVyKHByaWNlICogcXVhbnRpdHkpLnRvRml4ZWQoOCk7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlT3JkZXJEYXRhKHtcbiAgICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICAgICAgb3JkZXJJZDogaWQsXG4gICAgICAgICAgICB0cmFuc2FjdFRpbWU6IHRpbWUsXG4gICAgICAgICAgICBwcmljZTogcHJpY2VTdHIsXG4gICAgICAgICAgICBvcmlnUXR5OiBxdWFudGl0eVN0cixcbiAgICAgICAgICAgIGV4ZWN1dGVkUXR5OiBxdWFudGl0eVN0cixcbiAgICAgICAgICAgIGN1bW11bGF0aXZlUXVvdGVRdHk6IHRvdGFsU3RyLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgc2lkZTogc2lkZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2ltdWxhdGUgYW4gb3JkZXIgd2l0aCBmYWtlIEFQSSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzeW1ib2wgICAgRnVsbCB0cmFkaW5nIHN5bWJvbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgdHlwZSAgICAgIE9yZGVyIHR5cGUgKExJTUlULCBNQVJLRVQpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzaWRlICAgICAgQm9vayBzaWRlIChCVVksIFNFTEwpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmljZSAgICAgQm9vayBwcmljZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcXVhbnRpdHkgIE9yZGVyIHF1YW50aXR5XG4gICAgICovXG4gICAgcGxhY2VGYWtlT3JkZXIoc3ltYm9sLCB0eXBlLCBzaWRlLCBwcmljZSwgcXVhbnRpdHkpIHtcbiAgICAgICAgbGV0IHNlY3MgPSBNYXRoLmZsb29yKDEwMDAgKyBNYXRoLnJhbmRvbSgpICogNDAwMCk7IC8vIDEtNSBzZWNzXG4gICAgICAgIGxldCBvcmRlck9wZW4gPSB0aGlzLmZha2VPcmRlckRhdGEoXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICBcIk9QRU5cIlxuICAgICAgICApO1xuICAgICAgICBsZXQgb3JkZXJGaWxsZWQgPSB0aGlzLmZha2VPcmRlckRhdGEoXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICBcIkZJTExFRFwiXG4gICAgICAgICk7XG4gICAgICAgIGxldCBvcmRlckNhbmNlbGVkID0gdGhpcy5mYWtlT3JkZXJEYXRhKFxuICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgIHF1YW50aXR5LFxuICAgICAgICAgICAgXCJDQU5DRUxFRFwiXG4gICAgICAgICk7XG4gICAgICAgIGxldCBvcmRlclJlc3VsdCA9IHNlY3MgPCA0OTAwID8gb3JkZXJGaWxsZWQgOiBvcmRlckNhbmNlbGVkO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImJvb2tfY3JlYXRlXCIsIG9yZGVyT3Blbik7XG4gICAgICAgIH0sIDMwMCk7IC8vIGFkZGVkIHRvIGJvb2tcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1c2VyX29yZGVyXCIsIG9yZGVyUmVzdWx0KTtcbiAgICAgICAgfSwgc2Vjcyk7IC8vIGZpbGxlZCBvciBjYW5jZWxlZFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlIG5ldyBvcmRlciBpbiBib29rXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzeW1ib2wgICAgRnVsbCB0cmFkaW5nIHN5bWJvbFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgdHlwZSAgICAgIE9yZGVyIHR5cGUgKExJTUlULCBNQVJLRVQpXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBzaWRlICAgICAgQm9vayBzaWRlIChCVVksIFNFTEwpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBwcmljZSAgICAgQm9vayBwcmljZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSAgcXVhbnRpdHkgIE9yZGVyIHF1YW50aXR5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBpbmZvcmNlICAgVGltZSBpbmZvcmNlIHR5cGUgKEdUQywgSU9DLCBGT0spXG4gICAgICovXG4gICAgcGxhY2VPcmRlcihzeW1ib2wsIHR5cGUsIHNpZGUsIHByaWNlLCBxdWFudGl0eSwgaW5mb3JjZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2FwaWtleSB8fCAhdGhpcy5fYWpheCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXN5bWJvbCB8fCAhdHlwZSB8fCAhc2lkZSB8fCAhcXVhbnRpdHkgfHwgcXVhbnRpdHkgPD0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHByaWNlID0gTnVtYmVyKHByaWNlKS50b0ZpeGVkKDgpO1xuICAgICAgICBxdWFudGl0eSA9IE51bWJlcihxdWFudGl0eSkudG9GaXhlZCgwKTtcbiAgICAgICAgaW5mb3JjZSA9IFN0cmluZyhpbmZvcmNlIHx8IFwiRk9LXCIpO1xuXG4gICAgICAgIGxldCBwYXJhbXMgPSB7IHN5bWJvbCwgc2lkZSwgdHlwZSwgcXVhbnRpdHkgfTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiTElNSVRcIilcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLCB7IHByaWNlLCB0aW1lSW5Gb3JjZTogaW5mb3JjZSB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIHsgbmV3T3JkZXJSZXNwVHlwZTogXCJSRVNVTFRcIiB9KTtcblxuICAgICAgICB0aGlzLl9hamF4LnBvc3QodGhpcy5nZXRTaWduZWRVcmwoXCIvdjMvb3JkZXJcIiwgcGFyYW1zKSwge1xuICAgICAgICAgICAgdHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiWC1NQlgtQVBJS0VZXCI6IHRoaXMuX2FwaWtleSB9LFxuXG4gICAgICAgICAgICBzdWNjZXNzOiAoeGhyLCBzdGF0dXMsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyID0gdGhpcy5wYXJzZU9yZGVyRGF0YShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiYm9va19jcmVhdGVcIiwgb3JkZXIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoeGhyLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9yZGVyID0gdGhpcy5mYWtlT3JkZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgXCJSRUpFQ1RFRFwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJib29rX2ZhaWxcIiwgb3JkZXIsIGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbCBvcmRlciBmcm9tIGJvb2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHN5bWJvbCAgICBGdWxsIHRyYWRpbmcgc3ltYm9sXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBvcmRlcklkICAgT3JkZXIgSUQgbnVtYmVyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICBxdWFudGl0eSAgT3JkZXIgcXVhbnRpdHlcbiAgICAgKi9cbiAgICBjYW5jZWxPcmRlcihzeW1ib2wsIG9yZGVySWQsIHF1YW50aXR5KSB7XG4gICAgICAgIGlmICghdGhpcy5fYXBpa2V5IHx8ICF0aGlzLl9hamF4KSByZXR1cm47XG4gICAgICAgIGlmICghc3ltYm9sIHx8ICFvcmRlcklkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fYWpheC5kZWxldGUodGhpcy5nZXRTaWduZWRVcmwoXCIvdjMvb3JkZXJcIiwgeyBzeW1ib2wsIG9yZGVySWQgfSksIHtcbiAgICAgICAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIlgtTUJYLUFQSUtFWVwiOiB0aGlzLl9hcGlrZXkgfSxcblxuICAgICAgICAgICAgc3VjY2VzczogKHhociwgc3RhdHVzLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IHRoaXMuZmFrZU9yZGVyRGF0YShcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICBcIk1BUktFVFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNBTkNFTFwiLFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgXCJDT01QTEVURVwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJib29rX2NhbmNlbFwiLCBvcmRlcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICh4aHIsIHN0YXR1cywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb3JkZXIgPSB0aGlzLmZha2VPcmRlckRhdGEoXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgXCJNQVJLRVRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDQU5DRUxcIixcbiAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgICAgIFwiRkFJTEVEXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImJvb2tfZmFpbFwiLCBvcmRlciwgZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHVzZXIgYWNjb3VudCBkYXRhIG92ZXIgYWpheFxuICAgICAqL1xuICAgIGZldGNoVXNlckFjY291bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXBpa2V5IHx8ICF0aGlzLl9hamF4KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5fYWpheC5nZXQodGhpcy5nZXRTaWduZWRVcmwoXCIvdjMvYWNjb3VudFwiKSwge1xuICAgICAgICAgICAgdHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiWC1NQlgtQVBJS0VZXCI6IHRoaXMuX2FwaWtleSB9LFxuXG4gICAgICAgICAgICBzdWNjZXNzOiAoeGhyLCBzdGF0dXMsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJhbGFuY2VzID0gdGhpcy5wYXJzZVVzZXJCYWxhbmNlcyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9iYWxhbmNlc1wiLCBiYWxhbmNlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9kYXRhXCIsIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoeGhyLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9mYWlsXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BVc2VyU3RyZWFtKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBjdXJyZW50IG9wZW4gb3JkZXJzXG4gICAgICovXG4gICAgZmV0Y2hPcGVuT3JkZXJzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2FwaWtleSB8fCAhdGhpcy5fYWpheCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuX2FqYXguZ2V0KHRoaXMuZ2V0U2lnbmVkVXJsKFwiL3YzL29wZW5PcmRlcnNcIiksIHtcbiAgICAgICAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIlgtTUJYLUFQSUtFWVwiOiB0aGlzLl9hcGlrZXkgfSxcblxuICAgICAgICAgICAgc3VjY2VzczogKHhociwgc3RhdHVzLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKG8pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfb3JkZXJcIiwgdGhpcy5wYXJzZU9yZGVyRGF0YShvKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfZGF0YVwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKHhociwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfZmFpbFwiLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRlbXB0IHRvIHN0YXJ0IGEgbmV3IHVzZXIgc3RyZWFtXG4gICAgICovXG4gICAgaW5pdFVzZXJTdHJlYW0ocmVjb25uZWN0KSB7XG4gICAgICAgIGlmICghdGhpcy5fYXBpa2V5IHx8ICF0aGlzLl9hamF4KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9pbml0XCIsIERhdGUubm93KCkpO1xuICAgICAgICB0aGlzLnN0b3BVc2VyU3RyZWFtKCk7XG5cbiAgICAgICAgdGhpcy5fYWpheC5wb3N0KHRoaXMuZ2V0UHVibGljVXJsKFwiL3YxL3VzZXJEYXRhU3RyZWFtXCIpLCB7XG4gICAgICAgICAgICB0eXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJYLU1CWC1BUElLRVlcIjogdGhpcy5fYXBpa2V5IH0sXG5cbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh4aHIsIHN0YXR1cywgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gMTAwMCAqIDYwICogMjA7IC8vIDIwIG1pbnNcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jID0gdGhpcy5leHRlbmRTdHJlYW1LZXkuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0ZW5rZXkgPSBTdHJpbmcocmVzcG9uc2UubGlzdGVuS2V5IHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ1c2VyX2xpc3RlbmtleVwiLCB0aGlzLl9saXN0ZW5rZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRVc2VyU3RyZWFtKHRoaXMuX2xpc3RlbmtleSwgcmVjb25uZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoXCJ1c2VyXCIsIHRpbWUsIGZ1bmMsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKHhociwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfZmFpbFwiLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRlbmQgdXNlciBzdHJlYW0gbGlzdGVuIGtleVxuICAgICAqL1xuICAgIGV4dGVuZFN0cmVhbUtleSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hcGlrZXkgfHwgIXRoaXMuX2FqYXgpIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5rZXkpIHJldHVybjtcblxuICAgICAgICB0aGlzLl9hamF4LnB1dChcbiAgICAgICAgICAgIHRoaXMuZ2V0UHVibGljVXJsKFwiL3YxL3VzZXJEYXRhU3RyZWFtXCIsIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5LZXk6IHRoaXMuX2xpc3RlbmtleSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJYLU1CWC1BUElLRVlcIjogdGhpcy5fYXBpa2V5IH0sXG5cbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoeGhyLCBzdGF0dXMsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfbGlzdGVua2V5XCIsIHRoaXMuX2xpc3RlbmtleSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25uZWN0IHRvIGEgbGl2ZSB1c2VyIGFjY291bnQgZGF0YSBzdHJlYW1cbiAgICAgKi9cbiAgICBzdGFydFVzZXJTdHJlYW0obGlzdGVuS2V5LCByZWNvbm5lY3QpIHtcbiAgICAgICAgdGhpcy5zZXRSZWNvbm5lY3QoXCJ1c2VyXCIsIHJlY29ubmVjdCB8fCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZW1pdChcInVzZXJfaW5pdFwiLCBEYXRlLm5vdygpKTtcblxuICAgICAgICBjb25zdCB3cyA9IHRoaXMuc29ja0Nvbm5lY3QoXCJ1c2VyXCIsIHRoaXMuX3dzc3VybCArIFwiL3dzL1wiICsgbGlzdGVuS2V5KTtcbiAgICAgICAgaWYgKCF3cylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVtaXQoXG4gICAgICAgICAgICAgICAgXCJ1c2VyX2ZhaWxcIixcbiAgICAgICAgICAgICAgICBcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHVzZXIgc3RyZWFtIEFQSSBlbmRwb2ludC5cIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9vcGVuXCIsIGUpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaFVzZXJBY2NvdW50KCk7XG4gICAgICAgICAgICB0aGlzLmZldGNoT3Blbk9yZGVycygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVzZXJfZXJyb3JcIiwgZSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lcihcInVzZXJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9jbG9zZVwiLCBlKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyKFwidXNlclwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZWNvbm5lY3QoXCJ1c2VyXCIsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFVzZXJTdHJlYW0obGlzdGVuS2V5LCByZWNvbm5lY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXNlcl9kYXRhXCIsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSB8fCBcInt9XCIpIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5lID09PSBcIm91dGJvdW5kQWNjb3VudEluZm9cIikge1xuICAgICAgICAgICAgICAgIGxldCBiYWxhbmNlcyA9IHRoaXMucGFyc2VVc2VyQmFsYW5jZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcInVzZXJfYmFsYW5jZXNcIiwgYmFsYW5jZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEuZSA9PT0gXCJleGVjdXRpb25SZXBvcnRcIikge1xuICAgICAgICAgICAgICAgIGxldCBvcmRlciA9IHRoaXMucGFyc2VPcmRlckRhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdChcInVzZXJfb3JkZXJcIiwgb3JkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIHVzZXIgc3RyZWFtXG4gICAgICovXG4gICAgc3RvcFVzZXJTdHJlYW0oKSB7XG4gICAgICAgIHRoaXMuc2V0UmVjb25uZWN0KFwidXNlclwiLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKFwidXNlclwiKTtcbiAgICAgICAgdGhpcy5zb2NrQ2xvc2UoXCJ1c2VyXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbm5lY3QgdG8gbGl2ZSB0aWNrZXIgcHJpY2VzIHNvY2tldCBlbmRwb2ludFxuICAgICAqL1xuICAgIHN0YXJ0VGlja2VyU3RyZWFtKHJlY29ubmVjdCkge1xuICAgICAgICB0aGlzLnNldFJlY29ubmVjdChcInRpY2tlclwiLCByZWNvbm5lY3QgfHwgZmFsc2UpO1xuICAgICAgICB0aGlzLmVtaXQoXCJ0aWNrZXJfaW5pdFwiLCBEYXRlLm5vdygpKTtcblxuICAgICAgICBjb25zdCB3cyA9IHRoaXMuc29ja0Nvbm5lY3QoXCJ0aWNrZXJcIiwgdGhpcy5fd3NzdXJsICsgXCIvd3MvIXRpY2tlckBhcnJcIik7XG4gICAgICAgIGlmICghd3MpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0KFxuICAgICAgICAgICAgICAgIFwidGlja2VyX2ZhaWxcIixcbiAgICAgICAgICAgICAgICBcIkNvdWxkIG5vdCBjb25uZWN0IHRvIGxpdmUgdGlja2VyIHN0cmVhbSBBUEkgZW5kcG9pbnQuXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInRpY2tlcl9vcGVuXCIsIGUpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpY2tlclRpbWVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidGlja2VyX2Vycm9yXCIsIGUpO1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoXCJ0aWNrZXJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidGlja2VyX2Nsb3NlXCIsIGUpO1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoXCJ0aWNrZXJcIik7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUmVjb25uZWN0KFwidGlja2VyXCIsICgpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFRpY2tlclN0cmVhbShyZWNvbm5lY3QpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidGlja2VyX2RhdGFcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IEpTT04ucGFyc2UoZS5kYXRhIHx8IFwiW11cIikgfHwgW107XG4gICAgICAgICAgICBsZXQgbWFya2V0cyA9IE9iamVjdC5rZXlzKHRoaXMuX21hcmtldHMpO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gbGlzdC5sZW5ndGg7XG5cbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIG1hcmtldHMgZGF0YSB0byBiZSBhdmFpbGFibGUgYmVmb3JlIGNyZWF0aW5nIHN5bWJvbHNcbiAgICAgICAgICAgIGlmICghbWFya2V0cy5sZW5ndGggfHwgIWNvdW50KSByZXR1cm47XG5cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpY2tlciA9IGxpc3RbY291bnRdO1xuICAgICAgICAgICAgICAgIGxldCBwYWlyID0gdGlja2VyLnM7IC8vIHRyYWRpbmcgcGFpciBzeW1ib2wgc3RyXG4gICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuX3N5bWJvbHNbcGFpcl0gfHwgbmV3IFN5bWJvbChwYWlyKTsgLy8gY2FjaGVkXG5cbiAgICAgICAgICAgICAgICBzeW1ib2wuc3BsaXRTeW1ib2wobWFya2V0cyk7IC8vIHNwbGl0IHBhaXIgc3ltYm9sIGludG8gdG9rZW4gLyBtYXJrZXRcbiAgICAgICAgICAgICAgICBzeW1ib2wuc2V0Q29pbkRhdGEodGhpcy5fY29pbmRhdGFbc3ltYm9sLnRva2VuXSk7IC8vIGRhdGEgZnJvbSBjb2luY2FwLmlvXG4gICAgICAgICAgICAgICAgc3ltYm9sLnNldFRpY2tlckRhdGEodGlja2VyKTsgLy8gdXBkYXRlIHN5bWJvbCB0aWNrZXIgZGF0YVxuICAgICAgICAgICAgICAgIHN5bWJvbC5yZXNvbHZlSW1hZ2UoKTsgLy8gZmluZCBhbiBpY29uIGZvciB0aGlzIHRva2VuXG4gICAgICAgICAgICAgICAgdGhpcy5fc3ltYm9sc1twYWlyXSA9IHN5bWJvbDsgLy8gdXBkYXRlIGNhY2hlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRpY2tlciBkYXRhIHRpbWVyXG4gICAgICovXG4gICAgc3RhcnRUaWNrZXJUaW1lcigpIHtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoXCJ0aWNrZXJcIik7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcihcbiAgICAgICAgICAgIFwidGlja2VyXCIsXG4gICAgICAgICAgICAxMDAwLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fc3ltYm9scyk7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGV0IHByaWNlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGNvdW50LS0pIHByaWNlcy5wdXNoKHRoaXMuX3N5bWJvbHNba2V5c1tjb3VudF1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJ0aWNrZXJfcHJpY2VzXCIsIHByaWNlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgcHJpY2UgdGlja2VyXG4gICAgICovXG4gICAgc3RvcFRpY2tlclN0cmVhbSgpIHtcbiAgICAgICAgdGhpcy5zZXRSZWNvbm5lY3QoXCJ0aWNrZXJcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0b3BUaW1lcihcInRpY2tlclwiKTtcbiAgICAgICAgdGhpcy5zb2NrQ2xvc2UoXCJ0aWNrZXJcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgY3VzdG9tIHRpbWVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgIGlkICAgICAgICBUaW1lciBpZCBuYW1lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ICAgIHRpbWUgICAgICBJbnRlcnZhbCBtaWxzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICBDYWxsYmFjayBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gICBpbml0ICAgICAgSW5pdCBjYWxsYmFja1xuICAgICAqL1xuICAgIHN0YXJ0VGltZXIoaWQsIHRpbWUsIGNhbGxiYWNrLCBpbml0KSB7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKGlkKTtcbiAgICAgICAgdGhpcy5fdGltZXJzW2lkXSA9IHNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcbiAgICAgICAgaWYgKGluaXQpIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCBjdXN0b20gdGltZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGlkICBUaW1lciBpZCBuYW1lXG4gICAgICovXG4gICAgc3RvcFRpbWVyKGlkKSB7XG4gICAgICAgIGlmICghaWQgfHwgIXRoaXMuX3RpbWVycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHJldHVybjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcnNbaWRdKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3RpbWVyc1tpZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGlkICAgICAgUmVmIGlkIG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGVuZHBvaW50ICBTb2NrZXQgZW5kcG9pbnQgdXJsXG4gICAgICovXG4gICAgc29ja0Nvbm5lY3QoaWQsIGVuZHBvaW50KSB7XG4gICAgICAgIGlmICghaWQgfHwgIWVuZHBvaW50KSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdChcInNvY2tfaW5pdFwiLCBlbmRwb2ludCk7XG4gICAgICAgIHRoaXMuc29ja0Nsb3NlKGlkKTtcblxuICAgICAgICBpZiAoIShcIldlYlNvY2tldFwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcbiAgICAgICAgICAgICAgICBcInNvY2tfZmFpbFwiLFxuICAgICAgICAgICAgICAgIFwiVGhpcyB3ZWIgYnJvd3NlciBkb2VzIG5vdCBoYXZlIFdlYlNvY2tldCBzdXBwb3J0LlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgd3MgPSBuZXcgV2ViU29ja2V0KGVuZHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuX3NvY2tzW2lkXSA9IHdzO1xuICAgICAgICAgICAgcmV0dXJuIHdzO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gU3RyaW5nKFxuICAgICAgICAgICAgICAgIGVyci5tZXNzYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgIFwiV2ViU29ja2V0IGVuZHBvaW50IGNvbm5lY3Rpb24gZmFpbGVkIGZvciAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwic29ja19mYWlsXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2Ugc29ja2V0IGNvbm5lY3Rpb24gYW5kIHJlbW92ZSBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBpZCAgU29ja2V0IGlkIG5hbWVcbiAgICAgKi9cbiAgICBzb2NrQ2xvc2UoaWQpIHtcbiAgICAgICAgaWYgKCFpZCB8fCAhdGhpcy5fc29ja3MuaGFzT3duUHJvcGVydHkoaWQpKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdChcInNvY2tfY2xvc2VcIiwgaWQpO1xuICAgICAgICB0aGlzLl9zb2Nrc1tpZF0uY2xvc2UoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3NvY2tzW2lkXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZSBhbGwgYWN0aXZlIHNvY2tldCBjb25uZWN0aW9uc1xuICAgICAqL1xuICAgIHNvY2tDbG9zZUFsbCgpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fc29ja3MpLmZvckVhY2goKGlkKSA9PiB0aGlzLnNvY2tDbG9zZShpZCkpO1xuICAgIH1cbn1cbiIsIi8qKlxyXG4gKiBCYXNpYyBldmVudCBidXMgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZSAgICAgIEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb24oIG5hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgaWYgKCAhbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgKSByZXR1cm47XHJcbiAgICBpZiAoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHJldHVybjtcclxuICAgIGlmICggIXRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkgdGhpcy5fZXZlbnRzWyBuYW1lIF0gPSBbXTtcclxuICAgIHRoaXMuX2V2ZW50c1sgbmFtZSBdLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IGJ5IG5hbWUgKGZpcnN0IGFyZykgd2l0aCByZXN0IG9mIGFyZ3MgcGFzc2VkIHRvIGl0XHJcbiAgICovXHJcbiAgZW1pdCgpIHtcclxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XHJcbiAgICBsZXQgbmFtZSA9IGFyZ3MubGVuZ3RoID8gYXJncy5zaGlmdCgpIDogJyc7XHJcblxyXG4gICAgaWYgKCB0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHtcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzWyBuYW1lIF0ubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgICAgbGV0IGNiID0gdGhpcy5fZXZlbnRzWyBuYW1lIF1bIGkgXTtcclxuICAgICAgICBjYi5hcHBseSggY2IsIGFyZ3MgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJncyA9IHVuZGVmaW5lZDsgLy8gZ2NcclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBUaWNrZXIgc3ltYm9sIGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5bWJvbCB7XG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihzeW1ib2wgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMuc3ltYm9sID0gU3RyaW5nKHN5bWJvbCB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLmlkID0gXCJcIjsgLy8gY3VzdG9tIHVuaXF1ZSB0b2tlbiBpZFxuICAgICAgICB0aGlzLnRva2VuID0gXCJcIjsgLy8gYmFzZSBhc3NldCB0b2tlblxuICAgICAgICB0aGlzLm1hcmtldCA9IFwiXCI7IC8vIHF1b3RlIGFzc2V0IHRva2VuIChtYXJrZXQpXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7IC8vIG5hbWUgb2YgdG9rZW5cbiAgICAgICAgdGhpcy5wYWlyID0gXCJcIjsgLy8gdG9rZW4vbWFya2V0XG4gICAgICAgIHRoaXMucm91dGUgPSB0aGlzLnN5bWJvbDtcbiAgICAgICAgdGhpcy5pbWFnZSA9IFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jcnlwdG9DdXJyZW5jeS9kZWZhdWx0Xy5wbmdcIjtcbiAgICAgICAgdGhpcy5pbWFnZUxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wZW4gPSAwO1xuICAgICAgICB0aGlzLmhpZ2ggPSAwO1xuICAgICAgICB0aGlzLmxvdyA9IDA7XG4gICAgICAgIHRoaXMuY2xvc2UgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZSA9IDA7XG4gICAgICAgIHRoaXMucGVyY2VudCA9IDA7XG4gICAgICAgIHRoaXMudHJhZGVzID0gMDtcbiAgICAgICAgdGhpcy50b2tlblZvbHVtZSA9IDA7XG4gICAgICAgIHRoaXMubWFya2V0Vm9sdW1lID0gMDtcbiAgICAgICAgdGhpcy52b2xhdGlsaXR5ID0gMDtcbiAgICAgICAgdGhpcy5kYW5nZXIgPSAwO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICB0aGlzLnJhbmsgPSAwO1xuICAgICAgICB0aGlzLnN1cHBseSA9IDA7XG4gICAgICAgIHRoaXMuY2FwdXNkID0gMDtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuY2FuZGxlcyA9IFtdO1xuICAgICAgICB0aGlzLnNpZ24gPSBcIlwiO1xuICAgICAgICB0aGlzLmFycm93ID0gXCJcIjtcbiAgICAgICAgdGhpcy5zdHlsZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BsaXQgZnVsbCBzeW1ib2wgKEJUQ1VTRCkgaW50byB0b2tlbiBhbmQgYXNzZXQgc3ltYm9scyAoQlRDLCBVU0QpXG4gICAgICovXG4gICAgc3BsaXRTeW1ib2wobWFya2V0cyA9IFtdKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2VuIHx8IHRoaXMubWFya2V0IHx8ICFtYXJrZXRzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBxdW90ZXMgPSBtYXJrZXRzLmpvaW4oXCJ8XCIpO1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeKFtBLVowLTldKykoJHtxdW90ZXN9KSRgKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRoaXMuc3ltYm9sLnJlcGxhY2UocmVnZXhwLCBcIiQxXCIpIHx8IHRoaXMudG9rZW47XG4gICAgICAgIHRoaXMubWFya2V0ID0gdGhpcy5zeW1ib2wucmVwbGFjZShyZWdleHAsIFwiJDJcIikgfHwgdGhpcy5tYXJrZXQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMudG9rZW47XG4gICAgICAgIHRoaXMucGFpciA9IHRoaXMudG9rZW4gKyBcIi9cIiArIHRoaXMubWFya2V0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjb2luIGRhdGEgZmV0Y2hlZCBmcm9tIGNvaW5jYXAgQVBJXG4gICAgICogaHR0cHM6Ly9kb2NzLmNvaW5jYXAuaW8vXG4gICAgICovXG4gICAgc2V0Q29pbkRhdGEoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgICAgICAgdGhpcy5pZCA9IFN0cmluZyhkYXRhLmlkIHx8IHRoaXMuaWQpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5uYW1lID0gU3RyaW5nKGRhdGEubmFtZSB8fCB0aGlzLnRva2VuKS50cmltKCk7XG4gICAgICAgIHRoaXMucmFuayA9IE51bWJlcihkYXRhLnJhbmsgfHwgMCk7XG4gICAgICAgIHRoaXMuc3VwcGx5ID0gTnVtYmVyKGRhdGEuc3VwcGx5IHx8IDApO1xuICAgICAgICB0aGlzLmNhcHVzZCA9IE51bWJlcihkYXRhLm1hcmtldENhcFVzZCB8fCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbGF0ZXN0IHRpY2tlciB2YWx1ZXMgZnJvbSBiaW5hbmNlIHNvY2tldCBBUElcbiAgICAgKiBodHRwczovL2JpbmFuY2UtZG9jcy5naXRodWIuaW8vYXBpZG9jcy9zcG90L2VuLyNpbmRpdmlkdWFsLXN5bWJvbC1taW5pLXRpY2tlci1zdHJlYW1cbiAgICAgKi9cbiAgICBzZXRUaWNrZXJEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gTnVtYmVyKGRhdGEubyB8fCBkYXRhLm9wZW5QcmljZSB8fCAwKTtcbiAgICAgICAgdGhpcy5oaWdoID0gTnVtYmVyKGRhdGEuaCB8fCBkYXRhLmhpZ2hQcmljZSB8fCAwKTtcbiAgICAgICAgdGhpcy5sb3cgPSBOdW1iZXIoZGF0YS5sIHx8IGRhdGEubG93UHJpY2UgfHwgMCk7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBOdW1iZXIoZGF0YS5jIHx8IGRhdGEubGFzdFByaWNlIHx8IDApO1xuICAgICAgICB0aGlzLmNoYW5nZSA9IE51bWJlcihkYXRhLnAgfHwgZGF0YS5wcmljZUNoYW5nZSB8fCAwKTtcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gTnVtYmVyKGRhdGEuUCB8fCBkYXRhLnByaWNlQ2hhbmdlUGVyY2VudCB8fCAwKTtcbiAgICAgICAgdGhpcy50cmFkZXMgPSBOdW1iZXIoZGF0YS5uIHx8IGRhdGEuY291bnQgfHwgMCk7XG4gICAgICAgIHRoaXMudG9rZW5Wb2x1bWUgPSBOdW1iZXIoZGF0YS52IHx8IGRhdGEudm9sdW1lIHx8IDApO1xuICAgICAgICB0aGlzLm1hcmtldFZvbHVtZSA9IE51bWJlcihkYXRhLnEgfHwgZGF0YS5xdW90ZVZvbHVtZSB8fCAwKTtcbiAgICAgICAgdGhpcy5zaWduID0gdGhpcy5wZXJjZW50ID4gMCA/IFwiK1wiIDogXCJcIjtcbiAgICAgICAgdGhpcy5hcnJvdyA9IHRoaXMucGVyY2VudCA+IDAgPyBcIuKWslwiIDogXCLilrxcIjtcbiAgICAgICAgdGhpcy5jYWxjVm9sYXRpbGl0eSgpO1xuICAgICAgICB0aGlzLmNhbGNEYW5nZXIoKTtcbiAgICAgICAgdGhpcy5jYWxjSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLmNhbGNTdHlsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmUgdG9rZW4gaWNvbiBpbWFnZVxuICAgICAqL1xuICAgIHJlc29sdmVJbWFnZSgpIHtcbiAgICAgICAgLy9pZiAoICF0aGlzLnRva2VuIHx8IHRoaXMuaW1hZ2VMb2FkZWQgKSByZXR1cm47XG4gICAgICAgIC8vbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAvL2ltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICBlID0+IHsgdGhpcy5pbWFnZUxvYWRlZCA9IHRydWU7IHRoaXMuaW1hZ2UgPSBpbWcuc3JjOyB9ICk7XG4gICAgICAgIC8vaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIGUgPT4geyB0aGlzLmltYWdlTG9hZGVkID0gdHJ1ZTsgfSApO1xuICAgICAgICAvL2ltZy5zcmMgPSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jcnlwdG9DdXJyZW5jeS8nKyBTdHJpbmcoIHRoaXMudG9rZW4gKS50b0xvd2VyQ2FzZSgpICsnXy5wbmcnO1xuICAgICAgICAodGhpcy5pbWFnZUxvYWRlZCA9ICEwKSxcbiAgICAgICAgICAgICh0aGlzLmltYWdlID1cbiAgICAgICAgICAgICAgICBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY3J5cHRvQ3VycmVuY3kvXCIgK1xuICAgICAgICAgICAgICAgIFN0cmluZyh0aGlzLnRva2VuKS50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICBcIi5wbmdcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN5bWJvbCBkYXRhIHdpdGggbWVyZ2VkIGRhdGFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIG1lcmdlICBPcHRpb25hbCBvYmplY3RcbiAgICAgKi9cbiAgICBnZXREYXRhKG1lcmdlKSB7XG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLm1hcmtldFZvbHVtZTtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBtYXJrZXQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBjbG9zZSxcbiAgICAgICAgICAgIGNhcHVzZCxcbiAgICAgICAgICAgIHN1cHBseSxcbiAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHN5bWJvbCxcbiAgICAgICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgICAgICBtYXJrZXQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYWlyLFxuICAgICAgICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgICAgIGNsb3NlLFxuICAgICAgICAgICAgICAgIGNhcHVzZCxcbiAgICAgICAgICAgICAgICBzdXBwbHksXG4gICAgICAgICAgICAgICAgdm9sdW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lcmdlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW51cCBzdG9yZWQgcHJpY2UgZGF0YVxuICAgICAqL1xuICAgIGZsdXNoRGF0YSgpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgICAgIHRoaXMuY2FuZGxlcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBzdHlsZSBjbGFzcyBiYXNlZCBvbiBwZXJjZW50XG4gICAgICovXG4gICAgY2FsY1N0eWxlKCkge1xuICAgICAgICB0aGlzLnN0eWxlID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA+IDApIHRoaXMuc3R5bGUgPSBcImdhaW5cIjtcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudCA8IDApIHRoaXMuc3R5bGUgPSBcImxvc3NcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgMjRoIGhpZ2gvbG93IHZvbGF0aWxpdHkgc2NvcmVcbiAgICAgKi9cbiAgICBjYWxjVm9sYXRpbGl0eSgpIHtcbiAgICAgICAgbGV0IGNoYW5nZSA9IHRoaXMuaGlnaCAtIHRoaXMubG93O1xuICAgICAgICB0aGlzLnZvbGF0aWxpdHkgPSB0aGlzLmhpZ2ggPyAoY2hhbmdlIC8gdGhpcy5oaWdoKSAqIDEwMC4wIDogMC4wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwb3NzaWJsZSBwdW1wL2R1bXAgZGFuZ2VyIHNjb3JlIGJhc2VkIG9uIGNhY2hlZCBwcmljZSBhY3Rpb24gZnJvbSByZWNlbnQgZmV3IGhvdXJzXG4gICAgICovXG4gICAgY2FsY0RhbmdlcigpIHtcbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCB3YWl0ID0gMzAwOyAvLyBzZWNzIHRvIHdhaXRcbiAgICAgICAgbGV0IGhycyA9IDM7IC8vIGhvdXJzIHRvIHN0b3JlIHByaWNlc1xuICAgICAgICBsZXQgc2VjcyA9IChub3cgLSB0aGlzLnRpbWUpIC8gMTAwMDtcbiAgICAgICAgbGV0IHRvdGFsID0gKDYwICogNjAgKiBocnMpIC8gd2FpdDtcblxuICAgICAgICBpZiAoc2VjcyA8IHdhaXQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jYW5kbGVzLnB1c2godGhpcy5jbG9zZSk7XG4gICAgICAgIHRoaXMuY2FuZGxlcy5zcGxpY2UoMCwgdGhpcy5jYW5kbGVzLmxlbmd0aCAtIHRvdGFsKTtcblxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5jYW5kbGVzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1pbiA9IHRoaXMuY2FuZGxlc1swXTtcbiAgICAgICAgbGV0IG1heCA9IHRoaXMuY2FuZGxlc1swXTtcblxuICAgICAgICB3aGlsZSAoaWR4LS0pIHtcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRoaXMuY2FuZGxlc1tpZHhdO1xuICAgICAgICAgICAgbWluID0gcHJpY2UgPCBtaW4gPyBwcmljZSA6IG1pbjtcbiAgICAgICAgICAgIG1heCA9IHByaWNlID4gbWF4ID8gcHJpY2UgOiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoYW5nZSA9IG1heCAtIG1pbjtcbiAgICAgICAgdGhpcy5kYW5nZXIgPSBtYXggPyAoY2hhbmdlIC8gbWF4KSAqIDEwMC4wIDogMC4wO1xuICAgICAgICB0aGlzLnRpbWUgPSBub3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFuYWdlcyBhIGhpc3RvcnkgbGlzdCB3aXRoIHRoZSBsYXRlc3QgY2xvc2UgcHJpY2VcbiAgICAgKi9cbiAgICBjYWxjSGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhpc3RvcnkubGVuZ3RoKSB0aGlzLmZha2VIaXN0b3J5KCk7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKHRoaXMuY2xvc2UpO1xuICAgICAgICB0aGlzLmhpc3Rvcnkuc3BsaWNlKDAsIHRoaXMuaGlzdG9yeS5sZW5ndGggLSAzMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tZSB1cCB3aXRoIHNvbWUgZmFrZSBoaXN0b3J5IHByaWNlcyB0byBmaWxsIGluIHRoZSBpbml0aWFsIGxpbmUgY2hhcnRcbiAgICAgKi9cbiAgICBmYWtlSGlzdG9yeSgpIHtcbiAgICAgICAgbGV0IG51bSA9IHRoaXMuY2xvc2UgKiAwLjAwMDI7XG4gICAgICAgIGxldCBtaW4gPSAtTWF0aC5hYnMobnVtKTtcbiAgICAgICAgbGV0IG1heCA9IE1hdGguYWJzKG51bSk7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7ICsraSkge1xuICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCh0aGlzLmNsb3NlICsgcmFuZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIENvbW1vbiB1dGlsc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBjb252ZXJ0IHVybCBzdHJpbmcgaW50byBhbiBhbmNob3IgZWxlbWVudCAocGFyc2VyKVxuICAgIHBhcnNlVXJsKHVybCwgcHJvcCkge1xuICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxldCBkYXRhID0gbGlua1twcm9wXSB8fCBcIlwiO1xuICAgICAgICBsaW5rID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgVVJMcyBpbnRvIGNsaWNrYWJsZSBsaW5rc1xuICAgIGxpbmtVcmwodGV4dCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRleHQgfHwgXCJcIikucmVwbGFjZShcbiAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nXG4gICAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgaHRtbCB0YWdzIHRvIHRleHQgY29udGVudFxuICAgIHN0cmlwSHRtbCh0ZXh0LCByZW1vdmVVcmxzKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gU3RyaW5nKHRleHQgfHwgXCJcIik7XG4gICAgICAgIGxldCBvdXRwdXQgPSBTdHJpbmcoZGl2LnRleHRDb250ZW50IHx8IGRpdi5pbm5lclRleHQgfHwgXCJcIik7XG4gICAgICAgIGlmIChyZW1vdmVVcmxzKVxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgLyhodHRwcz9cXDpcXC9cXC9bXFx3XFwtXFwuXFw/XFw9XFwmXFwlXFwvXFwjXSspL2dpLFxuICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbnZlcnQgcmVsYXRpdmUgcGF0aCB0byBmdWxsIHVybFxuICAgIGZ1bGxVcmwocmVscGF0aCkge1xuICAgICAgICBpZiAoL14oW1xcd1xcLV0rXFw6KT9cXC9cXC8uKiQvLnRlc3QocmVscGF0aCkpIHJldHVybiByZWxwYXRoO1xuICAgICAgICBsZXQgbG9jID0gd2luZG93LmxvY2F0aW9uO1xuICAgICAgICBsZXQgcGF0aCA9IFN0cmluZyhsb2MucGF0aG5hbWUgfHwgXCJcIikucmVwbGFjZSgvXFwvKyQvZywgXCJcIik7XG4gICAgICAgIGxldCByZWwgPSBTdHJpbmcocmVscGF0aCB8fCBcIlwiKS5yZXBsYWNlKC9eXFwvKy9nLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIGxvYy5wcm90b2NvbCArIFwiLy9cIiArIGxvYy5ob3N0ICsgcGF0aCArIFwiL1wiICsgcmVsO1xuICAgIH0sXG5cbiAgICAvLyBwbGF5IGF1ZGlvIGZpbGVcbiAgICBwbGF5QXVkaW8oZmlsZSwgdm9sKSB7XG4gICAgICAgIGlmICghZmlsZSB8fCB0eXBlb2YgZmlsZSAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgICAgICAvLyBub3JtYWxpemUgdm9sdW1lXG4gICAgICAgIHZvbCA9IHBhcnNlRmxvYXQodm9sKSB8fCAxO1xuICAgICAgICB2b2wgPSB2b2wgPiAxID8gdm9sIC8gMTAwIDogdm9sO1xuICAgICAgICB2b2wgPSB2b2wgPiAxIHx8IHZvbCA8IDAgPyAxIDogdm9sO1xuICAgICAgICAvLyBsb2FkIGFuZCBwbGF5IGF1ZGlvXG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuICAgICAgICBhdWRpby5zcmMgPSB0aGlzLmZ1bGxVcmwoZmlsZSk7XG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IHZvbDtcbiAgICAgICAgYXVkaW8uY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheXRocm91Z2hcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICB9KTtcbiAgICAgICAgYXVkaW8ubG9hZCgpO1xuICAgIH0sXG5cbiAgICAvLyBjb3B5IHRleHQgdG8gY2xpcGJvYXJkXG4gICAgY29weVRleHQodGV4dCkge1xuICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgIGVsbS52YWx1ZSA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgZWxtLnNlbGVjdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGVsbS5yZW1vdmUoKSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNvcHlcIik7XG4gICAgfSxcblxuICAgIC8vIGNsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAgICBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG4gICAgfSxcblxuICAgIC8vIGN1dCBwYXJ0IG9mIGEgc3RyaW5nXG4gICAgbGltaXQoc3RyLCBsZW5ndGgsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCA1MDtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggPiBsZW5ndGggPyBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCkgKyBhcHBlbmQgOiBzdHI7XG4gICAgfSxcblxuICAgIC8vIGFsd2F5IGtlZXAgYSBzdHJpbmcgYXQgYSBjZXJ0YWluIGxlbmd0aFxuICAgIGZpbGwoc3RyLCBsZW5ndGgsIGNoYXIsIGFwcGVuZCkge1xuICAgICAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICAgICAgbGVuZ3RoID0gcGFyc2VJbnQobGVuZ3RoKSB8fCAyMDtcbiAgICAgICAgY2hhciA9IFN0cmluZyhjaGFyIHx8IFwiIFwiKTtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW5ndGgpIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIGxlbmd0aCAtIDMpICsgXCIuLi5cIjtcbiAgICAgICAgcmV0dXJuIHN0ciArIGNoYXIucmVwZWF0KGxlbmd0aCAtIHN0ci5sZW5ndGgpICsgYXBwZW5kO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgbm91biB3b3JkIGZvciBhIG51bWJlclxuICAgIG5vdW4obnVtLCBzaW5ndWxhciwgcGx1dGFsLCBhcHBlbmQpIHtcbiAgICAgICAgYXBwZW5kID0gU3RyaW5nKGFwcGVuZCB8fCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhcbiAgICAgICAgICAgIG51bSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KG51bSkgPT09IDEgPyBzaW5ndWxhciA6IHBsdXRhbCkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBhcHBlbmRcbiAgICAgICAgKS50cmltKCk7XG4gICAgfSxcblxuICAgIC8vIGZvcm1hdCBudW1iZXIgdG8gbW9uZXlcbiAgICBtb25leShudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICBsZXQgbyA9IHtcbiAgICAgICAgICAgIHN0eWxlOiBcImRlY2ltYWxcIixcbiAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZml4ZWQsXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwgbykuZm9ybWF0KG51bSk7XG4gICAgfSxcblxuICAgIC8qbW9uZXlfY2N4dChudW0sIGZpeGVkKSB7XG4gICAgICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKSB8fCAwO1xuICAgICAgICBmaXhlZCA9IHBhcnNlSW50KGZpeGVkKSB8fCAwO1xuICAgICAgICByZXR1cm4gY2N4dC5kZWNpbWFsVG9QcmVjaXNpb24oXG4gICAgICAgICAgICBudW0sXG4gICAgICAgICAgICBjY3h0LlJPVU5ELFxuICAgICAgICAgICAgZml4ZWQsXG4gICAgICAgICAgICBjY3h0LlNJR05JRklDQU5UX0RJR0lUUyxcbiAgICAgICAgICAgIGNjeHQuUEFEX1dJVEhfWkVST1xuICAgICAgICApO1xuICAgIH0sKi9cblxuICAgIC8vIGZpeGVkIG51bWJlcnNcbiAgICBmaXhlZChudW0sIGRlY2ltYWxzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVjaW1hbHMgPT09IFwibnVtYmVyXCIpIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKGRlY2ltYWxzKTtcbiAgICAgICAgaWYgKC8oVVNEfFBBWHxEQUkpLy50ZXN0KGRlY2ltYWxzKSkgcmV0dXJuIHRoaXMubW9uZXkobnVtLCAzKTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihudW0pLnRvRml4ZWQoOCk7XG4gICAgfSxcblxuICAgIC8vIGdldCBpbmZvIGFib3V0IGhvdyBsb25nIHNvbWV0aGluZyBoYXMgYmVlblxuICAgIGVsYXBzZWQoc2Vjcywgc3VmZml4LCBzaG9ydCkge1xuICAgICAgICBzZWNzID0gcGFyc2VJbnQoc2VjcykgfHwgMDtcbiAgICAgICAgaWYgKHNob3J0ICYmIHNlY3MgPCA2MCkgcmV0dXJuIFwiSnVzdCBub3dcIjtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBNOiBNYXRoLmZsb29yKHNlY3MgLyAyNDE5MjAwKSxcbiAgICAgICAgICAgIHc6IE1hdGguZmxvb3IoKHNlY3MgLyA2MDQ4MDApICUgNCksXG4gICAgICAgICAgICBkOiBNYXRoLmZsb29yKChzZWNzIC8gODY0MDApICUgNyksXG4gICAgICAgICAgICBoOiBNYXRoLmZsb29yKChzZWNzIC8gMzYwMCkgJSAyNCksXG4gICAgICAgICAgICBtOiBNYXRoLmZsb29yKChzZWNzIC8gNjApICUgNjApLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXNob3J0KSBkYXRhLnMgPSBNYXRoLmZsb29yKHNlY3MgJSA2MCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW2tdKSBsaXN0LnB1c2goZGF0YVtrXSArIGspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1ZmZpeCkgbGlzdC5wdXNoKHN1ZmZpeCk7XG4gICAgICAgIHJldHVybiBsaXN0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgZGF0YSBhYm91dCBjdXJyZW50IGRhdGUgYW5kIHRpbWVcbiAgICBkYXRlRGF0YSh0aW1lKSB7XG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgICAvLyB0aW1lc3RhbXAgb3IgZGF0ZXN0cmluZywga2VlcCBhcyBpc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aW1lID09PSBcIm51bWJlclwiIHx8IC9eW1xcd1xcLVxcK1xcOl0rJC8udGVzdCh0aW1lKSkge1xuICAgICAgICAgICAgICAgIG5vdyA9IHRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvdGhlciBzdHJpbmcsIGFzc3VtZSB0aW1lem9uZVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRpbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB0aW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBfcCA9IChuKSA9PiAobiA8IDEwID8gXCIwXCIgKyBuIDogXCJcIiArIG4pO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG5vdyk7XG4gICAgICAgIGxldCBtb250aCA9IFtcbiAgICAgICAgICAgIFwiSmFuXCIsXG4gICAgICAgICAgICBcIkZlYlwiLFxuICAgICAgICAgICAgXCJNYXJcIixcbiAgICAgICAgICAgIFwiQXByXCIsXG4gICAgICAgICAgICBcIk1heVwiLFxuICAgICAgICAgICAgXCJKdW5cIixcbiAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICBcIkF1Z1wiLFxuICAgICAgICAgICAgXCJTZXBcIixcbiAgICAgICAgICAgIFwiT2N0XCIsXG4gICAgICAgICAgICBcIk5vdlwiLFxuICAgICAgICAgICAgXCJEZWNcIixcbiAgICAgICAgXVtkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IGRheSA9IF9wKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IF9wKGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IF9wKGRhdGUuZ2V0U2Vjb25kcygpKTtcbiAgICAgICAgbGV0IGZ1bGxoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBsZXQgYW1wbSA9IGZ1bGxoID4gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICAgIGxldCBob3VyID0gZnVsbGggPiAxMiA/IGZ1bGxoIC0gMTIgOiBmdWxsaDtcbiAgICAgICAgaG91ciA9IF9wKGhvdXIgPT09IDAgPyAxMiA6IGhvdXIpO1xuICAgICAgICByZXR1cm4geyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9O1xuICAgIH0sXG5cbiAgICAvLyBnZXQgcmVhZGFibGUgZGF0ZVxuICAgIGRhdGUodGltZSwgZnVsbCkge1xuICAgICAgICBsZXQgeyBtb250aCwgZGF5LCB5ZWFyLCBob3VyLCBtaW51dGUsIHNlY29uZCwgYW1wbSB9ID1cbiAgICAgICAgICAgIHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIGxldCBvdXQgPSBbbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhcl07XG4gICAgICAgIGlmIChmdWxsKSBvdXQucHVzaChob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCwgYW1wbSk7XG4gICAgICAgIHJldHVybiBvdXQuam9pbihcIiBcIik7XG4gICAgfSxcblxuICAgIC8vIGdldCBjdXJyZW50IHRpbWVcbiAgICB0aW1lKHRpbWUpIHtcbiAgICAgICAgbGV0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9IHRoaXMuZGF0ZURhdGEodGltZSk7XG4gICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW51dGUgKyBcIjpcIiArIHNlY29uZCArIFwiIFwiICsgYW1wbTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHBlcmNlbnQgY2hhbmdlXG4gICAgcGVyY2VudChjdXJyZW50LCBsYXN0LCB0b051bSkge1xuICAgICAgICBsZXQgaXNudW0gPSBCb29sZWFuKGxhc3QgPiAwKTtcbiAgICAgICAgbGV0IGlzdXAgPSBCb29sZWFuKGN1cnJlbnQgPj0gbGFzdCk7XG4gICAgICAgIGxldCBjaGFuZ2UgPSBpc3VwID8gY3VycmVudCAtIGxhc3QgOiBsYXN0IC0gY3VycmVudDtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSBpc251bSA/IChjaGFuZ2UgLyBsYXN0KSAqIDEwMC4wIDogMC4wO1xuICAgICAgICBsZXQgc2lnbiA9IGlzdXAgPyBcIitcIiA6IFwiLVwiO1xuICAgICAgICBsZXQgYXJyb3cgPSBpc3VwID8gXCLilrJcIiA6IFwi4pa8XCI7XG4gICAgICAgIGxldCBjb2xvciA9IGlzdXAgPyBcImdyZWVuXCIgOiBcInJlZFwiO1xuICAgICAgICBpZiAodG9OdW0gPT09IHRydWUpIHJldHVybiArTnVtYmVyKHNpZ24gKyBwZXJjZW50KS50b0ZpeGVkKDMpO1xuICAgICAgICByZXR1cm4geyBjaGFuZ2UsIHBlcmNlbnQsIHNpZ24sIGFycm93LCBjb2xvciB9O1xuICAgIH0sXG5cbiAgICAvLyBjYWxjIGNoYXJ0IHBvaW50cyBmb3IgZ2l2ZW4gZGltZW5zaW9ucyBhbmQgdmFsdWVzXG4gICAgcG9pbnRzKHdpZHRoLCBoZWlnaHQsIHZhbHVlcykge1xuICAgICAgICB3aWR0aCA9IHBhcnNlRmxvYXQod2lkdGgpIHx8IDA7XG4gICAgICAgIGhlaWdodCA9IHBhcnNlRmxvYXQoaGVpZ2h0KSB8fCAwO1xuICAgICAgICB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlcykgPyB2YWx1ZXMgOiBbXTtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcCgobikgPT4gcGFyc2VGbG9hdChuKSB8fCAwKTtcblxuICAgICAgICBsZXQgbWluID0gdmFsdWVzLnJlZHVjZShcbiAgICAgICAgICAgIChtaW4sIHZhbCkgPT4gKHZhbCA8IG1pbiA/IHZhbCA6IG1pbiksXG4gICAgICAgICAgICB2YWx1ZXNbMF1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IG1heCA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWF4LCB2YWwpID0+ICh2YWwgPiBtYXggPyB2YWwgOiBtYXgpLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgaGFsZiA9IGhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5nZSA9IG1heCA+IG1pbiA/IG1heCAtIG1pbiA6IGhlaWdodDtcbiAgICAgICAgbGV0IGdhcCA9IGxlbiA+IDEgPyB3aWR0aCAvIChsZW4gLSAxKSA6IDE7XG4gICAgICAgIGxldCBvdXQgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZCA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWwgPSAyICogKChkIC0gbWluKSAvIHJhbmdlIC0gMC41KTtcbiAgICAgICAgICAgIGxldCB4ID0gaSAqIGdhcDtcbiAgICAgICAgICAgIGxldCB5ID0gLXZhbCAqIGhhbGYgKiAwLjggKyBoYWxmO1xuICAgICAgICAgICAgb3V0LnB1c2goeyB4LCB5IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcblxuICAgIC8vIGNvbXB1dGUgcGxhY2VtZW50IGZvciBhbiBhYnNvbHV0ZSBib3ggb24gdGhlIHNjcmVlblxuICAgIGJveFBvc2l0aW9uKHRyaWdnZXJFbG0pIHtcbiAgICAgICAgbGV0IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdID0gW3RydWUsIGZhbHNlLCBmYWxzZSwgdHJ1ZV07XG5cbiAgICAgICAgaWYgKHRyaWdnZXJFbG0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgbGV0IGJveCA9IHRyaWdnZXJFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgcG9zeCA9IGJveC5sZWZ0ICsgdHJpZ2dlckVsbS5vZmZzZXRXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgcG9zeSA9IGJveC50b3AgKyB0cmlnZ2VyRWxtLm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgICAgIGxldCBjZW50ZXJ5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgdG9wID0gcG9zeSA8IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByaWdodCA9IHBvc3ggPiBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgYm90dG9tID0gcG9zeSA+IGNlbnRlcnkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBsZWZ0ID0gcG9zeCA8IGNlbnRlcnggPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4geyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjaGVjayBhIGtleS1wcmVzcyBldmVudCBmb3Igc29tZSBjb21tb24ga2V5cyBiZWluZyBwcmVzc2VkXG4gICAga2V5Ym9hcmQoZSkge1xuICAgICAgICBsZXQgY29kZSA9IGUua2V5Q29kZSB8fCBlLmtleSB8fCAwO1xuICAgICAgICBsZXQgdXAgPSBjb2RlID09PSAzODtcbiAgICAgICAgbGV0IGRvd24gPSBjb2RlID09PSA0MDtcbiAgICAgICAgbGV0IGxlZnQgPSBjb2RlID09PSAzNztcbiAgICAgICAgbGV0IHJpZ2h0ID0gY29kZSA9PT0gMzk7XG4gICAgICAgIGxldCBiYWNrID0gY29kZSA9PT0gODtcbiAgICAgICAgbGV0IGVzY2FwZSA9IGNvZGUgPT09IDI3O1xuICAgICAgICBsZXQgc3BhY2UgPSBjb2RlID09PSAzMjtcbiAgICAgICAgbGV0IGVudGVyID0gY29kZSA9PT0gMTM7XG4gICAgICAgIHJldHVybiB7IHVwLCBkb3duLCBsZWZ0LCByaWdodCwgYmFjaywgZXNjYXBlLCBzcGFjZSwgZW50ZXIgfTtcbiAgICB9LFxuXG4gICAgLy8gc2h1ZmZsZSBhbiBhcnJheVxuICAgIHNodWZmbGUobykge1xuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGosIHgsIGkgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgIGk7XG4gICAgICAgICAgICBqID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHhcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfSxcblxuICAgIC8vIGRlZXAgbWVyZ2Ugb2JqIGFyZ3VtZW50c1xuICAgIGRlZXBNZXJnZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBhcmd1bWVudHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbMF1ba2V5XSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1tpXVtrZXldID09PSBcIm9iamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwTWVyZ2UoYXJndW1lbnRzWzBdW2tleV0sIGFyZ3VtZW50c1tpXVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVtrZXldID0gYXJndW1lbnRzW2ldW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9LFxuXG4gICAgLy8gc2VhcmNoIG9iamVjdHMgaW4gYSBsaXN0IGJ5IGtleSBhbmQgc2VhcmNoIHRleHRcbiAgICBzZWFyY2gobGlzdCwga2V5LCB0ZXh0LCBmdWxsd29yZCwgZnVsbGNhc2UpIHtcbiAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoL1teXFx3XFxzXFx8XSsvZywgXCJcIik7XG5cbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IGZ1bGx3b3JkXG4gICAgICAgICAgICAgICAgPyBcIlxcXFxiXCIgKyB0ZXh0LnJlcGxhY2UoL1tcXHxdKy9nLCBcIlxcXFxifFxcXFxiXCIpICsgXCJcXFxcYlwiXG4gICAgICAgICAgICAgICAgOiB0ZXh0O1xuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBmdWxsY2FzZSA/IFwiZ1wiIDogXCJnaVwiO1xuICAgICAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2gsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgb3V0cHV0ID0gW107XG5cbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKFN0cmluZyhsaXN0W2NvdW50XVtrZXldIHx8IFwiXCIpLnNlYXJjaChyZWdleCkgPCAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChsaXN0W2NvdW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBzb3J0IG9iamVjdHMgaW4gYW4gYXJyYXkgYnkgYSBrZXlcbiAgICBzb3J0KGxpc3QsIGtleSwgb3JkZXIsIGlnbm9yZSkge1xuICAgICAgICByZXR1cm4gbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hID0gYVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBfYiA9IGJba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChpZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29ydCBzdHJpbmdzIHVzaW5nIHNhbWUgY2FzZVxuICAgICAgICAgICAgICAgICAgICBfYSA9IHR5cGVvZiBfYSA9PT0gXCJzdHJpbmdcIiA/IF9hLnRvVXBwZXJDYXNlKCkgOiBfYTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSB0eXBlb2YgX2IgPT09IFwic3RyaW5nXCIgPyBfYi50b1VwcGVyQ2FzZSgpIDogX2I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJhc2NcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPCBfYikgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2EgPiBfYikgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChvcmRlciA9PT0gXCJkZXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIHN0YXJ0IG9mIGEgbGlzdFxuICAgIHRyaW1MZWZ0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKGxpc3QubGVuZ3RoIC0gbWF4KSA6IGxpc3Q7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBlbmQgb2YgYSBsaXN0XG4gICAgdHJpbVJpZ2h0KGxpc3QsIG1heCkge1xuICAgICAgICByZXR1cm4gbGlzdC5sZW5ndGggPiBtYXggPyBsaXN0LnNsaWNlKDAsIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyBjcmVhdGUgdW5pcXVlIGhhc2ggZnJvbSBhIHN0cmluZ1xuICAgIHVuaXF1ZShzdHIpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0ciB8fCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5cXHRcXHNdKy9nLCBcIiBcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgIGxldCBoYXNoID0gNTM4MSxcbiAgICAgICAgICAgIGkgPSBzdHIubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoLS1pKSBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgcmV0dXJuIFwidW5xX1wiICsgKGhhc2ggPj4+IDApO1xuICAgIH0sXG5cbiAgICAvLyByYW5kb20gc3RyaW5nIGZvciBhIGdpdmVuIGxlbmd0aFxuICAgIHJhbmRTdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgIGxldCBjaGFycyA9XG4gICAgICAgICAgICBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5XCI7XG4gICAgICAgIGxldCB0b3RhbCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMTA7XG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuXG4gICAgICAgIHdoaWxlICh0b3RhbCkge1xuICAgICAgICAgICAgb3V0cHV0ICs9IGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKTtcbiAgICAgICAgICAgIHRvdGFsLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGEgdW5pcXVlIElEIHN0cmluZyB0aGF0IHVzZXMgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFuZCBhIHJhbmRvbSB2YWx1ZVxuICAgIGlkU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgNSlcbiAgICAgICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgIH0sXG59O1xuIl0sIm5hbWVzIjpbIkJ1cyIsIlN5bWJvbCIsInV0aWxzIiwiQmluYW5jZSIsIl9hamF4IiwiX2FwaXVybCIsIl93c3N1cmwiLCJfYXBpa2V5IiwiX2FwaXNlY3JldCIsIl9saXN0ZW5rZXkiLCJfd2FpdCIsIl9jb2luZGF0YSIsIl9zeW1ib2xzIiwiX21hcmtldHMiLCJfcmVjb25uZWN0IiwiX3RpbWVycyIsIl9zb2NrcyIsImFqYXgiLCJrZXkiLCJTdHJpbmciLCJ0cmltIiwic2VjcmV0IiwiZGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImlkIiwidG9nZ2xlIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiZW5kcG9pbnQiLCJwYXJhbXMiLCJxc3RyIiwic2VyaWFsaXplRGF0YSIsImNyeXB0byIsIndpbmRvdyIsIkNyeXB0b0pTIiwicmVjdldpbmRvdyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaWduYXR1cmUiLCJIbWFjU0hBMjU2IiwidG9TdHJpbmciLCJlbmMiLCJIZXgiLCJsb2NhbCIsImhhbmRsZVJlc3BvbnNlIiwicmVzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3ltYm9scyIsInN5bWIiLCJ0b2tlbiIsInF1b3RlQXNzZXQiLCJjb3VudCIsImZpbHRlciIsInMiLCJiYXNlQXNzZXQiLCJzdGF0dXMiLCJsZW5ndGgiLCJlbWl0IiwiZ2V0IiwidHlwZSIsInByb3h5Iiwic3VjY2VzcyIsInhociIsImVycm9yIiwiZXJyIiwicmVtb3RlIiwic3ltYm9sIiwiY2IiLCJwcmljZXMiLCJpIiwicHVzaCIsInBhcnNlRmxvYXQiLCJjb25zb2xlIiwid2FybiIsImJhbGFuY2VzIiwiQiIsIm1hcCIsInQiLCJhc3NldCIsImEiLCJwYWlyIiwicm91dGUiLCJuYW1lIiwiX25hbWVzIiwiZnJlZSIsImYiLCJsb2NrZWQiLCJsIiwidG90YWwiLCJ0aW1lIiwiTnVtYmVyIiwiVCIsInRyYW5zYWN0VGltZSIsIm9yZGVySWQiLCJzaWRlIiwiUyIsIm8iLCJYIiwicHJpY2UiLCJwIiwicXVhbnRpdHkiLCJxIiwib3JpZ1F0eSIsImZpbGxlZCIsInoiLCJleGVjdXRlZFF0eSIsIloiLCJjdW1tdWxhdGl2ZVF1b3RlUXR5IiwiZmVlQXNzZXQiLCJOIiwiZmVlQW1vdW50IiwibiIsInBlcmNlbnQiLCJzbWIiLCJhbW91bnQiLCJ1bmlxdWUiLCJNYXRoIiwiZmxvb3IiLCJnZXREYXRhIiwicmFuZFN0cmluZyIsInByaWNlU3RyIiwidG9GaXhlZCIsInF1YW50aXR5U3RyIiwidG90YWxTdHIiLCJwYXJzZU9yZGVyRGF0YSIsInNlY3MiLCJyYW5kb20iLCJvcmRlck9wZW4iLCJmYWtlT3JkZXJEYXRhIiwib3JkZXJGaWxsZWQiLCJvcmRlckNhbmNlbGVkIiwib3JkZXJSZXN1bHQiLCJpbmZvcmNlIiwidGltZUluRm9yY2UiLCJuZXdPcmRlclJlc3BUeXBlIiwicG9zdCIsImdldFNpZ25lZFVybCIsImhlYWRlcnMiLCJyZXNwb25zZSIsIm9yZGVyIiwicGFyc2VVc2VyQmFsYW5jZXMiLCJzdG9wVXNlclN0cmVhbSIsImZvckVhY2giLCJyZWNvbm5lY3QiLCJnZXRQdWJsaWNVcmwiLCJmdW5jIiwiZXh0ZW5kU3RyZWFtS2V5IiwiYmluZCIsImxpc3RlbktleSIsInN0YXJ0VXNlclN0cmVhbSIsInN0YXJ0VGltZXIiLCJwdXQiLCJzZXRSZWNvbm5lY3QiLCJ3cyIsInNvY2tDb25uZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmZXRjaFVzZXJBY2NvdW50IiwiZmV0Y2hPcGVuT3JkZXJzIiwic3RvcFRpbWVyIiwiY2hlY2tSZWNvbm5lY3QiLCJKU09OIiwicGFyc2UiLCJzb2NrQ2xvc2UiLCJzdGFydFRpY2tlclRpbWVyIiwic3RhcnRUaWNrZXJTdHJlYW0iLCJsaXN0IiwibWFya2V0cyIsImtleXMiLCJ0aWNrZXIiLCJzcGxpdFN5bWJvbCIsInNldENvaW5EYXRhIiwic2V0VGlja2VyRGF0YSIsInJlc29sdmVJbWFnZSIsImluaXQiLCJzZXRJbnRlcnZhbCIsImhhc093blByb3BlcnR5IiwiY2xlYXJJbnRlcnZhbCIsIldlYlNvY2tldCIsIm1lc3NhZ2UiLCJjbG9zZSIsIl9ldmVudHMiLCJhcmdzIiwiZnJvbSIsImFyZ3VtZW50cyIsInNoaWZ0IiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJ0b1VwcGVyQ2FzZSIsIm1hcmtldCIsImltYWdlIiwiaW1hZ2VMb2FkZWQiLCJvcGVuIiwiaGlnaCIsImxvdyIsImNoYW5nZSIsInRyYWRlcyIsInRva2VuVm9sdW1lIiwibWFya2V0Vm9sdW1lIiwidm9sYXRpbGl0eSIsImRhbmdlciIsInJhbmsiLCJzdXBwbHkiLCJjYXB1c2QiLCJoaXN0b3J5IiwiY2FuZGxlcyIsInNpZ24iLCJhcnJvdyIsInN0eWxlIiwicXVvdGVzIiwiam9pbiIsInJlZ2V4cCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJtYXJrZXRDYXBVc2QiLCJvcGVuUHJpY2UiLCJoIiwiaGlnaFByaWNlIiwibG93UHJpY2UiLCJjIiwibGFzdFByaWNlIiwicHJpY2VDaGFuZ2UiLCJQIiwicHJpY2VDaGFuZ2VQZXJjZW50IiwidiIsInZvbHVtZSIsInF1b3RlVm9sdW1lIiwiY2FsY1ZvbGF0aWxpdHkiLCJjYWxjRGFuZ2VyIiwiY2FsY0hpc3RvcnkiLCJjYWxjU3R5bGUiLCJ0b0xvd2VyQ2FzZSIsIm1lcmdlIiwid2FpdCIsImhycyIsInNwbGljZSIsImlkeCIsIm1pbiIsIm1heCIsImZha2VIaXN0b3J5IiwibnVtIiwiYWJzIiwicmFuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJwYXJzZVVybCIsInVybCIsInByb3AiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImxpbmtVcmwiLCJ0ZXh0Iiwic3RyaXBIdG1sIiwicmVtb3ZlVXJscyIsImRpdiIsImlubmVySFRNTCIsIm91dHB1dCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwiZnVsbFVybCIsInJlbHBhdGgiLCJ0ZXN0IiwibG9jIiwibG9jYXRpb24iLCJwYXRoIiwicGF0aG5hbWUiLCJyZWwiLCJwcm90b2NvbCIsImhvc3QiLCJwbGF5QXVkaW8iLCJmaWxlIiwidm9sIiwiYXVkaW8iLCJBdWRpbyIsInNyYyIsImNyb3NzT3JpZ2luIiwicGxheSIsImxvYWQiLCJjb3B5VGV4dCIsImVsbSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwic2VsZWN0IiwicmVtb3ZlIiwiZXhlY0NvbW1hbmQiLCJjbGFtcCIsImxpbWl0Iiwic3RyIiwiYXBwZW5kIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJmaWxsIiwiY2hhciIsInJlcGVhdCIsIm5vdW4iLCJzaW5ndWxhciIsInBsdXRhbCIsIm1vbmV5IiwiZml4ZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiZGVjaW1hbHMiLCJlbGFwc2VkIiwic3VmZml4Iiwic2hvcnQiLCJNIiwidyIsImQiLCJtIiwiayIsImRhdGVEYXRhIiwidG9Mb2NhbGVTdHJpbmciLCJfcCIsImRhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZGF5IiwiZ2V0RGF0ZSIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwiZnVsbGgiLCJnZXRIb3VycyIsImFtcG0iLCJob3VyIiwiZnVsbCIsIm91dCIsImN1cnJlbnQiLCJsYXN0IiwidG9OdW0iLCJpc251bSIsIkJvb2xlYW4iLCJpc3VwIiwiY29sb3IiLCJwb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlcyIsInJlZHVjZSIsInZhbCIsImxlbiIsImhhbGYiLCJyYW5nZSIsImdhcCIsIngiLCJ5IiwiYm94UG9zaXRpb24iLCJ0cmlnZ2VyRWxtIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiSFRNTEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3N4Iiwib2Zmc2V0V2lkdGgiLCJwb3N5Iiwib2Zmc2V0SGVpZ2h0IiwiY2VudGVyeCIsImlubmVyV2lkdGgiLCJjZW50ZXJ5IiwiaW5uZXJIZWlnaHQiLCJrZXlib2FyZCIsImNvZGUiLCJrZXlDb2RlIiwidXAiLCJkb3duIiwiYmFjayIsImVzY2FwZSIsInNwYWNlIiwiZW50ZXIiLCJzaHVmZmxlIiwiaiIsImRlZXBNZXJnZSIsInNlYXJjaCIsImZ1bGx3b3JkIiwiZnVsbGNhc2UiLCJvcHRpb25zIiwicmVnZXgiLCJzb3J0IiwiaWdub3JlIiwiYiIsIl9hIiwiX2IiLCJ0cmltTGVmdCIsInNsaWNlIiwidHJpbVJpZ2h0IiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjaGFycyIsImNoYXJBdCIsImlkU3RyaW5nIiwic3Vic3RyIl0sInNvdXJjZVJvb3QiOiIifQ==