"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_messenger_js"],{

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

/***/ "./resources/src/modules/messenger.js":
/*!********************************************!*\
  !*** ./resources/src/modules/messenger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Messenger)
/* harmony export */ });
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ "./resources/src/modules/bus.js");
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
 * Binance socket api wrapper class
 */


var Messenger = /*#__PURE__*/function (_Bus) {
  _inherits(Messenger, _Bus);

  var _super = _createSuper(Messenger);

  // constructor
  function Messenger(options) {
    var _this;

    _classCallCheck(this, Messenger);

    _this = _super.call(this);
    _this._ajax = null;
    _this._sto = null;
    _this._queue = [];
    _this._options = Object.assign({
      // how often to check the queue
      seconds: 60,
      // API options for mailgun
      mailgun: {
        enabled: false,
        apikey: "",
        email: "",
        domain: ""
      },
      // API options for telegram
      telegram: {
        enabled: false,
        botkey: "",
        userid: ""
      } // ...

    }, options);
    return _this;
  }
  /**
   * Merge options
   * @param {object}  options  Options object
   */


  _createClass(Messenger, [{
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
    }
    /**
     * Set ajax module reference to use for requests
     * @param {object}  ajax  Ajax class instance
     */

  }, {
    key: "useAjax",
    value: function useAjax(ajax) {
      this._ajax = ajax;
    }
    /**
     * Push message data to queue
     * @param {string}  title     Message title
     * @param {string}  message   Message text
     * @param {string}  image     Message image/icon
     * @param {*}       data      Optional data
     */

  }, {
    key: "add",
    value: function add(title, message, image, data) {
      title = String(title || "");
      message = String(message || "");
      image = String(image || "");
      if (!title || !message) return;

      this._queue.push({
        title: title,
        message: message,
        image: image,
        data: data
      });
    }
    /**
     * Flush queue data
     */

  }, {
    key: "flush",
    value: function flush() {
      this._queue = [];
    }
    /**
     * Start the timer
     */

  }, {
    key: "start",
    value: function start() {
      this.stop();

      this._checkQueue();
    }
    /**
     * Stop the timer
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this._sto) clearTimeout(this._sto);
    }
    /**
     * Queue checker
     */

  }, {
    key: "_checkQueue",
    value: function _checkQueue() {
      var secs = parseInt(this._options.seconds) || 0;
      this._sto = setTimeout(this._checkQueue.bind(this), 1000 * secs);
      if (!secs || !this._queue.length) return;
      this.emit("queue", this._queue);

      this._mailgunSend();

      this._telegramSend();

      this._queue = [];
    }
    /**
     * Send queue messages using Mailgun API
     */

  }, {
    key: "_mailgunSend",
    value: function _mailgunSend() {
      var _this2 = this;

      var _this$_options$mailgu = this._options.mailgun,
          enabled = _this$_options$mailgu.enabled,
          apikey = _this$_options$mailgu.apikey,
          email = _this$_options$mailgu.email,
          domain = _this$_options$mailgu.domain;
      if (!enabled || !apikey || !email || !domain || !this._ajax) return;
      var content = "";

      this._queue.forEach(function (q) {
        var title = q.title,
            message = q.message,
            image = q.image;
        message = String(message).replace(/\n+/g, " <br />");
        content += "\n      <div style=\"border-top: 1px dashed rgba( 0,0,0,0.1 ); margin: 0 0 1em 0;\">\n        <table width=\"100%\" border=\"0\">\n          <tr>\n            <td><img src=\"".concat(image, "\" alt=\"image\" style=\"width: 42px; height: auto; margin: 0 .5em 0 0;\" /></td>\n            <td width=\"100%\"><b>").concat(title, "</b> <br /> ").concat(message, "</td>\n          </tr>\n        </table>\n      </div>");
      });

      var html = "\n    <!DOCTYPE html>\n    <html lang=\"en-US\">\n      <body style=\"margin: 0; padding: 0;\">\n        <div style=\"font-family: monospace; font-size: 10px; padding: 1em;\">\n          ".concat(content, "\n        </div>\n      </body>\n    </html>");
      var fdata = new FormData();
      fdata.append("from", "Market Analysis");
      fdata.append("to", "E-mail Recipient <" + email + ">");
      fdata.append("subject", "E-mail Notifications (" + this._queue.length + ")");
      fdata.append("html", String(html).trim());

      this._ajax.post("https://api.mailgun.net/v3/" + domain + "/messages", {
        type: "json",
        data: fdata,
        auth: {
          username: "api",
          password: apikey
        },
        done: function done(xhr, status, response) {
          if (!response || !response.id) return console.warn("Mailgun-API", status, response);

          _this2.emit("sent", "E-mail notifications sent to (" + email + ").");
        }
      });
    }
    /**
     * Send queue messages using Telegram API
     */

  }, {
    key: "_telegramSend",
    value: function _telegramSend() {
      var _this3 = this;

      var _this$_options$telegr = this._options.telegram,
          enabled = _this$_options$telegr.enabled,
          botkey = _this$_options$telegr.botkey,
          userid = _this$_options$telegr.userid;
      if (!enabled || !botkey || !userid || !this._ajax) return;
      var content = "";

      this._queue.forEach(function (q) {
        var title = q.title,
            message = q.message;
        content += "<b>".concat(title, "</b> \n");
        content += "".concat(message, " \n");
        content += "\n";
      });

      var fdata = new FormData();
      fdata.append("chat_id", userid);
      fdata.append("text", String(content).trim());
      fdata.append("parse_mode", "html");

      this._ajax.post("https://api.telegram.org/bot" + botkey + "/sendMessage", {
        type: "json",
        data: fdata,
        done: function done(xhr, status, response) {
          if (!response || !response.ok) return console.warn("Telegram-API", status, response);

          _this3.emit("sent", "Telegram notifications sent to (" + userid + ").");
        }
      });
    }
  }]);

  return Messenger;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfbWVzc2VuZ2VyX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0VBRW5CO0FBQ0Y7QUFDQTtFQUNFLGVBQWM7SUFBQTs7SUFDWixLQUFLQyxPQUFMLEdBQWUsRUFBZjtFQUNEO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDRSxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBcUI7TUFDbkIsSUFBSyxDQUFDRCxJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE5QixFQUF5QztNQUN6QyxJQUFLLE9BQU9DLFFBQVAsS0FBb0IsVUFBekIsRUFBc0M7TUFDdEMsSUFBSyxDQUFDLEtBQUtGLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTixFQUE0QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsSUFBdUIsRUFBdkI7O01BQzVDLEtBQUtELE9BQUwsQ0FBY0MsSUFBZCxFQUFxQkcsSUFBckIsQ0FBMkJGLFFBQTNCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxnQkFBTztNQUNMLElBQUlHLElBQUksR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVlDLFNBQVosQ0FBWDtNQUNBLElBQUlQLElBQUksR0FBR0ksSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ssS0FBTCxFQUFkLEdBQTZCLEVBQXhDOztNQUVBLElBQUssS0FBS1YsT0FBTCxDQUFhRyxjQUFiLENBQTZCRixJQUE3QixDQUFMLEVBQTJDO1FBQ3pDLEtBQU0sSUFBSVUsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBRyxLQUFLWCxPQUFMLENBQWNDLElBQWQsRUFBcUJRLE1BQTFDLEVBQWtELEVBQUVFLENBQXBELEVBQXdEO1VBQ3RELElBQUlDLEVBQUUsR0FBRyxLQUFLWixPQUFMLENBQWNDLElBQWQsRUFBc0JVLENBQXRCLENBQVQ7VUFDQUMsRUFBRSxDQUFD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ekIsQ0FBTWpCLEtBQU47UUFBQSxJQUFhQyxPQUFiLEdBQXlCZ0IsQ0FBekIsQ0FBYWhCLE9BQWI7UUFDQWMsT0FBTyxpQkFBVWYsS0FBVixZQUFQO1FBQ0FlLE9BQU8sY0FBT2QsT0FBUCxRQUFQO1FBQ0FjLE9BQU8sUUFBUDtNQUNILENBTEQ7O01BT0EsSUFBTUssS0FBSyxHQUFHLElBQUlDLFFBQUosRUFBZDtNQUNBRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxTQUFiLEVBQXdCeEIsTUFBeEI7TUFDQXNCLEtBQUssQ0FBQ0UsTUFBTixDQUFhLE1BQWIsRUFBcUJsQixNQUFNLENBQUNXLE9BQUQsQ0FBTixDQUFnQlEsSUFBaEIsRUFBckI7TUFDQUgsS0FBSyxDQUFDRSxNQUFOLENBQWEsWUFBYixFQUEyQixNQUEzQjs7TUFFQSxLQUFLdEMsS0FBTCxDQUFXd0MsSUFBWCxDQUNJLGlDQUFpQzNCLE1BQWpDLEdBQTBDLGNBRDlDLEVBRUk7UUFDSTRCLElBQUksRUFBRSxNQURWO1FBRUl0QixJQUFJLEVBQUVpQixLQUZWO1FBR0lTLElBQUksRUFBRSxjQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsUUFBZCxFQUEyQjtVQUM3QixJQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUNJLEVBQTNCLEVBQ0ksT0FBT0YsT0FBTyxDQUFDQyxJQUFSLENBQWEsY0FBYixFQUE2QkosTUFBN0IsRUFBcUNDLFFBQXJDLENBQVA7O1VBQ0osTUFBSSxDQUFDcEIsSUFBTCxDQUNJLE1BREosRUFFSSxxQ0FBcUNkLE1BQXJDLEdBQThDLElBRmxEO1FBSUg7TUFWTCxDQUZKO0lBZUg7Ozs7RUFsTGtDaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvYnVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9tZXNzZW5nZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhc2ljIGV2ZW50IGJ1cyBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICBuYW1lICAgICAgRXZlbnQgbmFtZVxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICBjYWxsYmFjayAgRXZlbnQgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKi9cclxuICBvbiggbmFtZSwgY2FsbGJhY2sgKSB7XHJcbiAgICBpZiAoICFuYW1lIHx8IHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyApIHJldHVybjtcclxuICAgIGlmICggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgcmV0dXJuO1xyXG4gICAgaWYgKCAhdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB0aGlzLl9ldmVudHNbIG5hbWUgXSA9IFtdO1xyXG4gICAgdGhpcy5fZXZlbnRzWyBuYW1lIF0ucHVzaCggY2FsbGJhY2sgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYW4gZXZlbnQgYnkgbmFtZSAoZmlyc3QgYXJnKSB3aXRoIHJlc3Qgb2YgYXJncyBwYXNzZWQgdG8gaXRcclxuICAgKi9cclxuICBlbWl0KCkge1xyXG4gICAgbGV0IGFyZ3MgPSBBcnJheS5mcm9tKCBhcmd1bWVudHMgKTtcclxuICAgIGxldCBuYW1lID0gYXJncy5sZW5ndGggPyBhcmdzLnNoaWZ0KCkgOiAnJztcclxuXHJcbiAgICBpZiAoIHRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkge1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudHNbIG5hbWUgXS5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICBsZXQgY2IgPSB0aGlzLl9ldmVudHNbIG5hbWUgXVsgaSBdO1xyXG4gICAgICAgIGNiLmFwcGx5KCBjYiwgYXJncyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcmdzID0gdW5kZWZpbmVkOyAvLyBnY1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIEJpbmFuY2Ugc29ja2V0IGFwaSB3cmFwcGVyIGNsYXNzXG4gKi9cbmltcG9ydCBCdXMgZnJvbSBcIi4vYnVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NlbmdlciBleHRlbmRzIEJ1cyB7XG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2FqYXggPSBudWxsO1xuICAgICAgICB0aGlzLl9zdG8gPSBudWxsO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBob3cgb2Z0ZW4gdG8gY2hlY2sgdGhlIHF1ZXVlXG4gICAgICAgICAgICAgICAgc2Vjb25kczogNjAsXG4gICAgICAgICAgICAgICAgLy8gQVBJIG9wdGlvbnMgZm9yIG1haWxndW5cbiAgICAgICAgICAgICAgICBtYWlsZ3VuOiB7IGVuYWJsZWQ6IGZhbHNlLCBhcGlrZXk6IFwiXCIsIGVtYWlsOiBcIlwiLCBkb21haW46IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAvLyBBUEkgb3B0aW9ucyBmb3IgdGVsZWdyYW1cbiAgICAgICAgICAgICAgICB0ZWxlZ3JhbTogeyBlbmFibGVkOiBmYWxzZSwgYm90a2V5OiBcIlwiLCB1c2VyaWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2Ugb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSAgb3B0aW9ucyAgT3B0aW9ucyBvYmplY3RcbiAgICAgKi9cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWpheCBtb2R1bGUgcmVmZXJlbmNlIHRvIHVzZSBmb3IgcmVxdWVzdHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gIGFqYXggIEFqYXggY2xhc3MgaW5zdGFuY2VcbiAgICAgKi9cbiAgICB1c2VBamF4KGFqYXgpIHtcbiAgICAgICAgdGhpcy5fYWpheCA9IGFqYXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVzaCBtZXNzYWdlIGRhdGEgdG8gcXVldWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIHRpdGxlICAgICBNZXNzYWdlIHRpdGxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBtZXNzYWdlICAgTWVzc2FnZSB0ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICBpbWFnZSAgICAgTWVzc2FnZSBpbWFnZS9pY29uXG4gICAgICogQHBhcmFtIHsqfSAgICAgICBkYXRhICAgICAgT3B0aW9uYWwgZGF0YVxuICAgICAqL1xuICAgIGFkZCh0aXRsZSwgbWVzc2FnZSwgaW1hZ2UsIGRhdGEpIHtcbiAgICAgICAgdGl0bGUgPSBTdHJpbmcodGl0bGUgfHwgXCJcIik7XG4gICAgICAgIG1lc3NhZ2UgPSBTdHJpbmcobWVzc2FnZSB8fCBcIlwiKTtcbiAgICAgICAgaW1hZ2UgPSBTdHJpbmcoaW1hZ2UgfHwgXCJcIik7XG4gICAgICAgIGlmICghdGl0bGUgfHwgIW1lc3NhZ2UpIHJldHVybjtcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7IHRpdGxlLCBtZXNzYWdlLCBpbWFnZSwgZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGbHVzaCBxdWV1ZSBkYXRhXG4gICAgICovXG4gICAgZmx1c2goKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHRpbWVyXG4gICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLl9jaGVja1F1ZXVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCB0aGUgdGltZXJcbiAgICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fc3RvKSBjbGVhclRpbWVvdXQodGhpcy5fc3RvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBRdWV1ZSBjaGVja2VyXG4gICAgICovXG4gICAgX2NoZWNrUXVldWUoKSB7XG4gICAgICAgIGNvbnN0IHNlY3MgPSBwYXJzZUludCh0aGlzLl9vcHRpb25zLnNlY29uZHMpIHx8IDA7XG4gICAgICAgIHRoaXMuX3N0byA9IHNldFRpbWVvdXQodGhpcy5fY2hlY2tRdWV1ZS5iaW5kKHRoaXMpLCAxMDAwICogc2Vjcyk7XG4gICAgICAgIGlmICghc2VjcyB8fCAhdGhpcy5fcXVldWUubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHRoaXMuZW1pdChcInF1ZXVlXCIsIHRoaXMuX3F1ZXVlKTtcbiAgICAgICAgdGhpcy5fbWFpbGd1blNlbmQoKTtcbiAgICAgICAgdGhpcy5fdGVsZWdyYW1TZW5kKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBxdWV1ZSBtZXNzYWdlcyB1c2luZyBNYWlsZ3VuIEFQSVxuICAgICAqL1xuICAgIF9tYWlsZ3VuU2VuZCgpIHtcbiAgICAgICAgbGV0IHsgZW5hYmxlZCwgYXBpa2V5LCBlbWFpbCwgZG9tYWluIH0gPSB0aGlzLl9vcHRpb25zLm1haWxndW47XG4gICAgICAgIGlmICghZW5hYmxlZCB8fCAhYXBpa2V5IHx8ICFlbWFpbCB8fCAhZG9tYWluIHx8ICF0aGlzLl9hamF4KSByZXR1cm47XG4gICAgICAgIGxldCBjb250ZW50ID0gXCJcIjtcblxuICAgICAgICB0aGlzLl9xdWV1ZS5mb3JFYWNoKChxKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyB0aXRsZSwgbWVzc2FnZSwgaW1hZ2UgfSA9IHE7XG4gICAgICAgICAgICBtZXNzYWdlID0gU3RyaW5nKG1lc3NhZ2UpLnJlcGxhY2UoL1xcbisvZywgXCIgPGJyIC8+XCIpO1xuICAgICAgICAgICAgY29udGVudCArPSBgXG4gICAgICA8ZGl2IHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IGRhc2hlZCByZ2JhKCAwLDAsMCwwLjEgKTsgbWFyZ2luOiAwIDAgMWVtIDA7XCI+XG4gICAgICAgIDx0YWJsZSB3aWR0aD1cIjEwMCVcIiBib3JkZXI9XCIwXCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCJpbWFnZVwiIHN0eWxlPVwid2lkdGg6IDQycHg7IGhlaWdodDogYXV0bzsgbWFyZ2luOiAwIC41ZW0gMCAwO1wiIC8+PC90ZD5cbiAgICAgICAgICAgIDx0ZCB3aWR0aD1cIjEwMCVcIj48Yj4ke3RpdGxlfTwvYj4gPGJyIC8+ICR7bWVzc2FnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuICAgIDxodG1sIGxhbmc9XCJlbi1VU1wiPlxuICAgICAgPGJvZHkgc3R5bGU9XCJtYXJnaW46IDA7IHBhZGRpbmc6IDA7XCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEwcHg7IHBhZGRpbmc6IDFlbTtcIj5cbiAgICAgICAgICAke2NvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5gO1xuXG4gICAgICAgIGNvbnN0IGZkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZkYXRhLmFwcGVuZChcImZyb21cIiwgXCJNYXJrZXQgQW5hbHlzaXNcIik7XG4gICAgICAgIGZkYXRhLmFwcGVuZChcInRvXCIsIFwiRS1tYWlsIFJlY2lwaWVudCA8XCIgKyBlbWFpbCArIFwiPlwiKTtcbiAgICAgICAgZmRhdGEuYXBwZW5kKFxuICAgICAgICAgICAgXCJzdWJqZWN0XCIsXG4gICAgICAgICAgICBcIkUtbWFpbCBOb3RpZmljYXRpb25zIChcIiArIHRoaXMuX3F1ZXVlLmxlbmd0aCArIFwiKVwiXG4gICAgICAgICk7XG4gICAgICAgIGZkYXRhLmFwcGVuZChcImh0bWxcIiwgU3RyaW5nKGh0bWwpLnRyaW0oKSk7XG5cbiAgICAgICAgdGhpcy5fYWpheC5wb3N0KFwiaHR0cHM6Ly9hcGkubWFpbGd1bi5uZXQvdjMvXCIgKyBkb21haW4gKyBcIi9tZXNzYWdlc1wiLCB7XG4gICAgICAgICAgICB0eXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGRhdGE6IGZkYXRhLFxuICAgICAgICAgICAgYXV0aDogeyB1c2VybmFtZTogXCJhcGlcIiwgcGFzc3dvcmQ6IGFwaWtleSB9LFxuICAgICAgICAgICAgZG9uZTogKHhociwgc3RhdHVzLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmlkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFwiTWFpbGd1bi1BUElcIiwgc3RhdHVzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFxuICAgICAgICAgICAgICAgICAgICBcInNlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFLW1haWwgbm90aWZpY2F0aW9ucyBzZW50IHRvIChcIiArIGVtYWlsICsgXCIpLlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgcXVldWUgbWVzc2FnZXMgdXNpbmcgVGVsZWdyYW0gQVBJXG4gICAgICovXG4gICAgX3RlbGVncmFtU2VuZCgpIHtcbiAgICAgICAgbGV0IHsgZW5hYmxlZCwgYm90a2V5LCB1c2VyaWQgfSA9IHRoaXMuX29wdGlvbnMudGVsZWdyYW07XG4gICAgICAgIGlmICghZW5hYmxlZCB8fCAhYm90a2V5IHx8ICF1c2VyaWQgfHwgIXRoaXMuX2FqYXgpIHJldHVybjtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuX3F1ZXVlLmZvckVhY2goKHEpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHRpdGxlLCBtZXNzYWdlIH0gPSBxO1xuICAgICAgICAgICAgY29udGVudCArPSBgPGI+JHt0aXRsZX08L2I+IFxcbmA7XG4gICAgICAgICAgICBjb250ZW50ICs9IGAke21lc3NhZ2V9IFxcbmA7XG4gICAgICAgICAgICBjb250ZW50ICs9IGBcXG5gO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmZGF0YS5hcHBlbmQoXCJjaGF0X2lkXCIsIHVzZXJpZCk7XG4gICAgICAgIGZkYXRhLmFwcGVuZChcInRleHRcIiwgU3RyaW5nKGNvbnRlbnQpLnRyaW0oKSk7XG4gICAgICAgIGZkYXRhLmFwcGVuZChcInBhcnNlX21vZGVcIiwgXCJodG1sXCIpO1xuXG4gICAgICAgIHRoaXMuX2FqYXgucG9zdChcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdFwiICsgYm90a2V5ICsgXCIvc2VuZE1lc3NhZ2VcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOiBmZGF0YSxcbiAgICAgICAgICAgICAgICBkb25lOiAoeGhyLCBzdGF0dXMsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihcIlRlbGVncmFtLUFQSVwiLCBzdGF0dXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRlbGVncmFtIG5vdGlmaWNhdGlvbnMgc2VudCB0byAoXCIgKyB1c2VyaWQgKyBcIikuXCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJCdXMiLCJfZXZlbnRzIiwibmFtZSIsImNhbGxiYWNrIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiYXJncyIsIkFycmF5IiwiZnJvbSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNoaWZ0IiwiaSIsImNiIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJNZXNzZW5nZXIiLCJvcHRpb25zIiwiX2FqYXgiLCJfc3RvIiwiX3F1ZXVlIiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJzZWNvbmRzIiwibWFpbGd1biIsImVuYWJsZWQiLCJhcGlrZXkiLCJlbWFpbCIsImRvbWFpbiIsInRlbGVncmFtIiwiYm90a2V5IiwidXNlcmlkIiwiYWpheCIsInRpdGxlIiwibWVzc2FnZSIsImltYWdlIiwiZGF0YSIsIlN0cmluZyIsInN0b3AiLCJfY2hlY2tRdWV1ZSIsImNsZWFyVGltZW91dCIsInNlY3MiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJiaW5kIiwiZW1pdCIsIl9tYWlsZ3VuU2VuZCIsIl90ZWxlZ3JhbVNlbmQiLCJjb250ZW50IiwiZm9yRWFjaCIsInEiLCJyZXBsYWNlIiwiaHRtbCIsImZkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0cmltIiwicG9zdCIsInR5cGUiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJ4aHIiLCJzdGF0dXMiLCJyZXNwb25zZSIsImlkIiwiY29uc29sZSIsIndhcm4iLCJvayJdLCJzb3VyY2VSb290IjoiIn0=