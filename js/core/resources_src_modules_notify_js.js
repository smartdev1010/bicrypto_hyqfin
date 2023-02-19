(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_notify_js"],{

/***/ "./resources/src/modules/notify.js":
/*!*****************************************!*\
  !*** ./resources/src/modules/notify.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notify)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/src/modules/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Push notifications and custom alarms handler class
 */


var Notify = /*#__PURE__*/function () {
  // constructor
  function Notify(options) {
    _classCallCheck(this, Notify);

    this._queue = [];
    this._notices = [];
    this._options = {
      // toggle notifications
      enabled: true,
      // notifications duration (secs)
      duration: 10,
      // toggle notification sound
      sound: true,
      // volume of notification sound ( 0 - 1 )
      volume: 1,
      // audio file to play on with notifications
      audio: "/market/audio/audio_3.mp3",
      // default notification image file
      image: "/market/notification.png"
    };
    this.setOptions(options);

    this._watchQueue();
  } // merge new options


  _createClass(Notify, [{
    key: "setOptions",
    value: function setOptions(options) {
      Object.assign(this._options, options);
    } // add a notification message to the queue

  }, {
    key: "add",
    value: function add(title, body, icon, link) {
      if (!title || !body) return;
      var id = _utils__WEBPACK_IMPORTED_MODULE_0___default().randString(20);
      var time = Date.now();
      icon = String(icon || this._options.image);
      this._queue = this._queue.filter(function (n) {
        return n.title !== title;
      });

      this._queue.push({
        id: id,
        time: time,
        title: title,
        body: body,
        icon: icon,
        link: link
      });
    } // flush the queue

  }, {
    key: "flush",
    value: function flush() {
      this._queue = [];
    } // check if notification is supported

  }, {
    key: "hasSupport",
    value: function hasSupport() {
      return window && "Notification" in window;
    } // check if Notification is possible

  }, {
    key: "canNotify",
    value: function canNotify() {
      if (!this.hasSupport()) return false;
      if (Notification.permission !== "granted") return false;
      return true;
    } // ask for browser notifications permission

  }, {
    key: "permission",
    value: function permission(callback) {
      if (!this.hasSupport()) return;
      Notification.requestPermission().then(function (response) {
        if (typeof callback === "function") callback(response);
      });
    } // play notification sound if enabled

  }, {
    key: "playSound",
    value: function playSound() {
      if (this._options.sound) {
        _utils__WEBPACK_IMPORTED_MODULE_0___default().playAudio(this._options.audio, this._options.volume);
      }
    } // limit visible notifications to a fixed number

  }, {
    key: "_cleanupNotifications",
    value: function _cleanupNotifications() {
      var limit = 3;
      if (this._notices.length <= limit) return;

      for (var i = 0; i < this._notices.length - limit; ++i) {
        this._notices[i].close(); // trigger close event

      }
    } // create notifications from the queue on a timer

  }, {
    key: "_watchQueue",
    value: function _watchQueue() {
      var _this = this;

      this._cleanupNotifications();

      setTimeout(this._watchQueue.bind(this), 500);
      if (!this._options.enabled || !this._queue.length) return;
      if (!this.canNotify()) return; // create new notification

      var _this$_queue$shift = this._queue.shift(),
          id = _this$_queue$shift.id,
          time = _this$_queue$shift.time,
          title = _this$_queue$shift.title,
          body = _this$_queue$shift.body,
          icon = _this$_queue$shift.icon,
          link = _this$_queue$shift.link;

      var a = new Notification(title, {
        body: body,
        icon: icon,
        tag: id
      }); // auto-close on optional duration

      var ttl = parseInt(this._options.duration);
      if (ttl) setTimeout(function () {
        return a.close();
      }, 1000 * ttl); // keep track of visible notifications

      a.addEventListener("show", function (e) {
        if (!e || !e.target || !e.target.tag) return;

        _this.playSound();
      }); // remove notification from local array when it closes

      a.addEventListener("close", function (e) {
        if (!e || !e.target || !e.target.tag) return;
        _this._notices = _this._notices.filter(function (a) {
          return a.tag !== e.target.tag;
        });
      }); // convert url string to clickable link

      if (link && typeof link === "string") {
        a.addEventListener("click", function (e) {
          e.preventDefault();
          window.open(link, "_blank");
        });
      } // custom click handler


      if (link && typeof link === "function") {
        a.addEventListener("click", link);
      } // add to tracker


      this._notices.push(a);
    }
  }]);

  return Notify;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfbm90aWZ5X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkM7RUFDakI7RUFDQSxnQkFBWUMsT0FBWixFQUFxQjtJQUFBOztJQUNqQixLQUFLQyxNQUFMLEdBQWMsRUFBZDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7SUFDQSxLQUFLQyxRQUFMLEdBQWdCO01BQ1o7TUFDQUMsT0FBTyxFQUFFLElBRkc7TUFHWjtNQUNBQyxRQUFRLEVBQUUsRUFKRTtNQUtaO01BQ0FDLEtBQUssRUFBRSxJQU5LO01BT1o7TUFDQUMsTUFBTSxFQUFFLENBUkk7TUFTWjtNQUNBQyxLQUFLLEVBQUUsMkJBVks7TUFXWjtNQUNBQyxLQUFLLEVBQUU7SUFaSyxDQUFoQjtJQWNBLEtBQUtDLFVBQUwsQ0FBZ0JWLE9BQWhCOztJQUNBLEtBQUtXLFdBQUw7RUFDSCxFQUVEOzs7OztXQUNBLG9CQUFXWCxPQUFYLEVBQW9CO01BQ2hCWSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLVixRQUFuQixFQUE2QkgsT0FBN0I7SUFDSCxFQUVEOzs7O1dBQ0EsYUFBSWMsS0FBSixFQUFXQyxJQUFYLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkI7TUFDekIsSUFBSSxDQUFDSCxLQUFELElBQVUsQ0FBQ0MsSUFBZixFQUFxQjtNQUNyQixJQUFJRyxFQUFFLEdBQUdwQix3REFBQSxDQUFpQixFQUFqQixDQUFUO01BQ0EsSUFBSXNCLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVg7TUFDQU4sSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQUksSUFBSSxLQUFLYixRQUFMLENBQWNNLEtBQXZCLENBQWI7TUFDQSxLQUFLUixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZdUIsTUFBWixDQUFtQixVQUFDQyxDQUFEO1FBQUEsT0FBT0EsQ0FBQyxDQUFDWCxLQUFGLEtB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QUosQ0FBZTFNLENBQWYsQ0FBckI7SUFBWjs7SUFDQSxPQUFPLFVBQVV5TSxJQUFJLEtBQUssQ0FBbkIsQ0FBUDtFQUNILENBL1hZO0VBaVliO0VBQ0E1TixVQWxZYSxzQkFrWUZrQixNQWxZRSxFQWtZTTtJQUNmLElBQUk0TSxLQUFLLEdBQ0wsZ0VBREo7SUFFQSxJQUFJQyxLQUFLLEdBQUdsTSxRQUFRLENBQUNYLE1BQUQsQ0FBUixJQUFvQixFQUFoQztJQUNBLElBQUlrQyxNQUFNLEdBQUcsRUFBYjs7SUFFQSxPQUFPMkssS0FBUCxFQUFjO01BQ1YzSyxNQUFNLElBQUkwSyxLQUFLLENBQUNFLE1BQU4sQ0FBYTFJLElBQUksQ0FBQzRCLEtBQUwsQ0FBVzVCLElBQUksQ0FBQ2lILE1BQUwsS0FBZ0J1QixLQUFLLENBQUM1TSxNQUFqQyxDQUFiLENBQVY7TUFDQTZNLEtBQUs7SUFDUjs7SUFDRCxPQUFPM0ssTUFBUDtFQUNILENBN1lZO0VBK1liO0VBQ0E2SyxRQWhaYSxzQkFnWkY7SUFDUCxPQUFPLENBQ0gvTixJQUFJLENBQUNDLEdBQUwsR0FBVytOLFFBQVgsQ0FBb0IsRUFBcEIsSUFBMEI1SSxJQUFJLENBQUNpSCxNQUFMLEdBQWMyQixRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxNQUEzQixDQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUR2QixFQUVMWixXQUZLLEVBQVA7RUFHSDtBQXBaWSxDQUFqQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9ub3RpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUHVzaCBub3RpZmljYXRpb25zIGFuZCBjdXN0b20gYWxhcm1zIGhhbmRsZXIgY2xhc3NcbiAqL1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmeSB7XG4gICAgLy8gY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gW107XG4gICAgICAgIHRoaXMuX25vdGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIHRvZ2dsZSBub3RpZmljYXRpb25zXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgLy8gbm90aWZpY2F0aW9ucyBkdXJhdGlvbiAoc2VjcylcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgICAgIC8vIHRvZ2dsZSBub3RpZmljYXRpb24gc291bmRcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxuICAgICAgICAgICAgLy8gdm9sdW1lIG9mIG5vdGlmaWNhdGlvbiBzb3VuZCAoIDAgLSAxIClcbiAgICAgICAgICAgIHZvbHVtZTogMSxcbiAgICAgICAgICAgIC8vIGF1ZGlvIGZpbGUgdG8gcGxheSBvbiB3aXRoIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgIGF1ZGlvOiBcIi9tYXJrZXQvYXVkaW8vYXVkaW9fMy5tcDNcIixcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgbm90aWZpY2F0aW9uIGltYWdlIGZpbGVcbiAgICAgICAgICAgIGltYWdlOiBcIi9tYXJrZXQvbm90aWZpY2F0aW9uLnBuZ1wiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX3dhdGNoUXVldWUoKTtcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBuZXcgb3B0aW9uc1xuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIG5vdGlmaWNhdGlvbiBtZXNzYWdlIHRvIHRoZSBxdWV1ZVxuICAgIGFkZCh0aXRsZSwgYm9keSwgaWNvbiwgbGluaykge1xuICAgICAgICBpZiAoIXRpdGxlIHx8ICFib2R5KSByZXR1cm47XG4gICAgICAgIGxldCBpZCA9IHV0aWxzLnJhbmRTdHJpbmcoMjApO1xuICAgICAgICBsZXQgdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGljb24gPSBTdHJpbmcoaWNvbiB8fCB0aGlzLl9vcHRpb25zLmltYWdlKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSB0aGlzLl9xdWV1ZS5maWx0ZXIoKG4pID0+IG4udGl0bGUgIT09IHRpdGxlKTtcbiAgICAgICAgdGhpcy5fcXVldWUucHVzaCh7IGlkLCB0aW1lLCB0aXRsZSwgYm9keSwgaWNvbiwgbGluayB9KTtcbiAgICB9XG5cbiAgICAvLyBmbHVzaCB0aGUgcXVldWVcbiAgICBmbHVzaCgpIHtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBub3RpZmljYXRpb24gaXMgc3VwcG9ydGVkXG4gICAgaGFzU3VwcG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdyAmJiBcIk5vdGlmaWNhdGlvblwiIGluIHdpbmRvdztcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBOb3RpZmljYXRpb24gaXMgcG9zc2libGVcbiAgICBjYW5Ob3RpZnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNTdXBwb3J0KCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSBcImdyYW50ZWRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBhc2sgZm9yIGJyb3dzZXIgbm90aWZpY2F0aW9ucyBwZXJtaXNzaW9uXG4gICAgcGVybWlzc2lvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMuaGFzU3VwcG9ydCgpKSByZXR1cm47XG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcGxheSBub3RpZmljYXRpb24gc291bmQgaWYgZW5hYmxlZFxuICAgIHBsYXlTb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuc291bmQpIHtcbiAgICAgICAgICAgIHV0aWxzLnBsYXlBdWRpbyh0aGlzLl9vcHRpb25zLmF1ZGlvLCB0aGlzLl9vcHRpb25zLnZvbHVtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaW1pdCB2aXNpYmxlIG5vdGlmaWNhdGlvbnMgdG8gYSBmaXhlZCBudW1iZXJcbiAgICBfY2xlYW51cE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIGxldCBsaW1pdCA9IDM7XG4gICAgICAgIGlmICh0aGlzLl9ub3RpY2VzLmxlbmd0aCA8PSBsaW1pdCkgcmV0dXJuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25vdGljZXMubGVuZ3RoIC0gbGltaXQ7ICsraSkge1xuICAgICAgICAgICAgdGhpcy5fbm90aWNlc1tpXS5jbG9zZSgpOyAvLyB0cmlnZ2VyIGNsb3NlIGV2ZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBxdWV1ZSBvbiBhIHRpbWVyXG4gICAgX3dhdGNoUXVldWUoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXBOb3RpZmljYXRpb25zKCk7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5fd2F0Y2hRdWV1ZS5iaW5kKHRoaXMpLCA1MDApO1xuICAgICAgICBpZiAoIXRoaXMuX29wdGlvbnMuZW5hYmxlZCB8fCAhdGhpcy5fcXVldWUubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5jYW5Ob3RpZnkoKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgbm90aWZpY2F0aW9uXG4gICAgICAgIGxldCB7IGlkLCB0aW1lLCB0aXRsZSwgYm9keSwgaWNvbiwgbGluayB9ID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgbGV0IGEgPSBuZXcgTm90aWZpY2F0aW9uKHRpdGxlLCB7IGJvZHksIGljb24sIHRhZzogaWQgfSk7XG5cbiAgICAgICAgLy8gYXV0by1jbG9zZSBvbiBvcHRpb25hbCBkdXJhdGlvblxuICAgICAgICBsZXQgdHRsID0gcGFyc2VJbnQodGhpcy5fb3B0aW9ucy5kdXJhdGlvbik7XG4gICAgICAgIGlmICh0dGwpIHNldFRpbWVvdXQoKCkgPT4gYS5jbG9zZSgpLCAxMDAwICogdHRsKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHZpc2libGUgbm90aWZpY2F0aW9uc1xuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUudGFyZ2V0IHx8ICFlLnRhcmdldC50YWcpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMucGxheVNvdW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZW1vdmUgbm90aWZpY2F0aW9uIGZyb20gbG9jYWwgYXJyYXkgd2hlbiBpdCBjbG9zZXNcbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZSB8fCAhZS50YXJnZXQgfHwgIWUudGFyZ2V0LnRhZykgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fbm90aWNlcyA9IHRoaXMuX25vdGljZXMuZmlsdGVyKChhKSA9PiBhLnRhZyAhPT0gZS50YXJnZXQudGFnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnZlcnQgdXJsIHN0cmluZyB0byBjbGlja2FibGUgbGlua1xuICAgICAgICBpZiAobGluayAmJiB0eXBlb2YgbGluayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjdXN0b20gY2xpY2sgaGFuZGxlclxuICAgICAgICBpZiAobGluayAmJiB0eXBlb2YgbGluayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgdG8gdHJhY2tlclxuICAgICAgICB0aGlzLl9ub3RpY2VzLnB1c2goYSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb21tb24gdXRpbHNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gY29udmVydCB1cmwgc3RyaW5nIGludG8gYW4gYW5jaG9yIGVsZW1lbnQgKHBhcnNlcilcbiAgICBwYXJzZVVybCh1cmwsIHByb3ApIHtcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsZXQgZGF0YSA9IGxpbmtbcHJvcF0gfHwgXCJcIjtcbiAgICAgICAgbGluayA9IG51bGw7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IFVSTHMgaW50byBjbGlja2FibGUgbGlua3NcbiAgICBsaW5rVXJsKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0ZXh0IHx8IFwiXCIpLnJlcGxhY2UoXG4gICAgICAgICAgICAvKGh0dHBzP1xcOlxcL1xcL1tcXHdcXC1cXC5cXD9cXD1cXCZcXCVcXC9cXCNdKykvZ2ksXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiQxXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JDE8L2E+J1xuICAgICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IGh0bWwgdGFncyB0byB0ZXh0IGNvbnRlbnRcbiAgICBzdHJpcEh0bWwodGV4dCwgcmVtb3ZlVXJscykge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFN0cmluZyh0ZXh0IHx8IFwiXCIpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gU3RyaW5nKGRpdi50ZXh0Q29udGVudCB8fCBkaXYuaW5uZXJUZXh0IHx8IFwiXCIpO1xuICAgICAgICBpZiAocmVtb3ZlVXJscylcbiAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIC8oaHR0cHM/XFw6XFwvXFwvW1xcd1xcLVxcLlxcP1xcPVxcJlxcJVxcL1xcI10rKS9naSxcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sXG5cbiAgICAvLyBjb252ZXJ0IHJlbGF0aXZlIHBhdGggdG8gZnVsbCB1cmxcbiAgICBmdWxsVXJsKHJlbHBhdGgpIHtcbiAgICAgICAgaWYgKC9eKFtcXHdcXC1dK1xcOik/XFwvXFwvLiokLy50ZXN0KHJlbHBhdGgpKSByZXR1cm4gcmVscGF0aDtcbiAgICAgICAgbGV0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgbGV0IHBhdGggPSBTdHJpbmcobG9jLnBhdGhuYW1lIHx8IFwiXCIpLnJlcGxhY2UoL1xcLyskL2csIFwiXCIpO1xuICAgICAgICBsZXQgcmVsID0gU3RyaW5nKHJlbHBhdGggfHwgXCJcIikucmVwbGFjZSgvXlxcLysvZywgXCJcIik7XG4gICAgICAgIHJldHVybiBsb2MucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2MuaG9zdCArIHBhdGggKyBcIi9cIiArIHJlbDtcbiAgICB9LFxuXG4gICAgLy8gcGxheSBhdWRpbyBmaWxlXG4gICAgcGxheUF1ZGlvKGZpbGUsIHZvbCkge1xuICAgICAgICBpZiAoIWZpbGUgfHwgdHlwZW9mIGZpbGUgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICAgICAgLy8gbm9ybWFsaXplIHZvbHVtZVxuICAgICAgICB2b2wgPSBwYXJzZUZsb2F0KHZvbCkgfHwgMTtcbiAgICAgICAgdm9sID0gdm9sID4gMSA/IHZvbCAvIDEwMCA6IHZvbDtcbiAgICAgICAgdm9sID0gdm9sID4gMSB8fCB2b2wgPCAwID8gMSA6IHZvbDtcbiAgICAgICAgLy8gbG9hZCBhbmQgcGxheSBhdWRpb1xuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oKTtcbiAgICAgICAgYXVkaW8uc3JjID0gdGhpcy5mdWxsVXJsKGZpbGUpO1xuICAgICAgICBhdWRpby52b2x1bWUgPSB2b2w7XG4gICAgICAgIGF1ZGlvLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICAgICAgfSk7XG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICB9LFxuXG4gICAgLy8gY29weSB0ZXh0IHRvIGNsaXBib2FyZFxuICAgIGNvcHlUZXh0KHRleHQpIHtcbiAgICAgICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICBlbG0udmFsdWUgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgIGVsbS5zZWxlY3QoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbG0ucmVtb3ZlKCksIDEwMDApO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpO1xuICAgIH0sXG5cbiAgICAvLyBjbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gICAgY2xhbXAobnVtLCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xuICAgIH0sXG5cbiAgICAvLyBjdXQgcGFydCBvZiBhIHN0cmluZ1xuICAgIGxpbWl0KHN0ciwgbGVuZ3RoLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgNTA7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID4gbGVuZ3RoID8gc3RyLnN1YnN0cmluZygwLCBsZW5ndGgpICsgYXBwZW5kIDogc3RyO1xuICAgIH0sXG5cbiAgICAvLyBhbHdheSBrZWVwIGEgc3RyaW5nIGF0IGEgY2VydGFpbiBsZW5ndGhcbiAgICBmaWxsKHN0ciwgbGVuZ3RoLCBjaGFyLCBhcHBlbmQpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIGxlbmd0aCA9IHBhcnNlSW50KGxlbmd0aCkgfHwgMjA7XG4gICAgICAgIGNoYXIgPSBTdHJpbmcoY2hhciB8fCBcIiBcIik7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGggLSAzKSArIFwiLi4uXCI7XG4gICAgICAgIHJldHVybiBzdHIgKyBjaGFyLnJlcGVhdChsZW5ndGggLSBzdHIubGVuZ3RoKSArIGFwcGVuZDtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IG5vdW4gd29yZCBmb3IgYSBudW1iZXJcbiAgICBub3VuKG51bSwgc2luZ3VsYXIsIHBsdXRhbCwgYXBwZW5kKSB7XG4gICAgICAgIGFwcGVuZCA9IFN0cmluZyhhcHBlbmQgfHwgXCJcIik7XG4gICAgICAgIHJldHVybiBTdHJpbmcoXG4gICAgICAgICAgICBudW0gK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAocGFyc2VGbG9hdChudW0pID09PSAxID8gc2luZ3VsYXIgOiBwbHV0YWwpICtcbiAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgYXBwZW5kXG4gICAgICAgICkudHJpbSgpO1xuICAgIH0sXG5cbiAgICAvLyBmb3JtYXQgbnVtYmVyIHRvIG1vbmV5XG4gICAgbW9uZXkobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgbGV0IG8gPSB7XG4gICAgICAgICAgICBzdHlsZTogXCJkZWNpbWFsXCIsXG4gICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGZpeGVkLFxuICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBmaXhlZCxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIG8pLmZvcm1hdChudW0pO1xuICAgIH0sXG5cbiAgICAvKm1vbmV5X2NjeHQobnVtLCBmaXhlZCkge1xuICAgICAgICBudW0gPSBwYXJzZUZsb2F0KG51bSkgfHwgMDtcbiAgICAgICAgZml4ZWQgPSBwYXJzZUludChmaXhlZCkgfHwgMDtcbiAgICAgICAgcmV0dXJuIGNjeHQuZGVjaW1hbFRvUHJlY2lzaW9uKFxuICAgICAgICAgICAgbnVtLFxuICAgICAgICAgICAgY2N4dC5ST1VORCxcbiAgICAgICAgICAgIGZpeGVkLFxuICAgICAgICAgICAgY2N4dC5TSUdOSUZJQ0FOVF9ESUdJVFMsXG4gICAgICAgICAgICBjY3h0LlBBRF9XSVRIX1pFUk9cbiAgICAgICAgKTtcbiAgICB9LCovXG5cbiAgICAvLyBmaXhlZCBudW1iZXJzXG4gICAgZml4ZWQobnVtLCBkZWNpbWFscykge1xuICAgICAgICBpZiAodHlwZW9mIGRlY2ltYWxzID09PSBcIm51bWJlclwiKSByZXR1cm4gTnVtYmVyKG51bSkudG9GaXhlZChkZWNpbWFscyk7XG4gICAgICAgIGlmICgvKFVTRHxQQVh8REFJKS8udGVzdChkZWNpbWFscykpIHJldHVybiB0aGlzLm1vbmV5KG51bSwgMyk7XG4gICAgICAgIHJldHVybiBOdW1iZXIobnVtKS50b0ZpeGVkKDgpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgaW5mbyBhYm91dCBob3cgbG9uZyBzb21ldGhpbmcgaGFzIGJlZW5cbiAgICBlbGFwc2VkKHNlY3MsIHN1ZmZpeCwgc2hvcnQpIHtcbiAgICAgICAgc2VjcyA9IHBhcnNlSW50KHNlY3MpIHx8IDA7XG4gICAgICAgIGlmIChzaG9ydCAmJiBzZWNzIDwgNjApIHJldHVybiBcIkp1c3Qgbm93XCI7XG4gICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgTTogTWF0aC5mbG9vcihzZWNzIC8gMjQxOTIwMCksXG4gICAgICAgICAgICB3OiBNYXRoLmZsb29yKChzZWNzIC8gNjA0ODAwKSAlIDQpLFxuICAgICAgICAgICAgZDogTWF0aC5mbG9vcigoc2VjcyAvIDg2NDAwKSAlIDcpLFxuICAgICAgICAgICAgaDogTWF0aC5mbG9vcigoc2VjcyAvIDM2MDApICUgMjQpLFxuICAgICAgICAgICAgbTogTWF0aC5mbG9vcigoc2VjcyAvIDYwKSAlIDYwKSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFzaG9ydCkgZGF0YS5zID0gTWF0aC5mbG9vcihzZWNzICUgNjApO1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtrXSkgbGlzdC5wdXNoKGRhdGFba10gKyBrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdWZmaXgpIGxpc3QucHVzaChzdWZmaXgpO1xuICAgICAgICByZXR1cm4gbGlzdC5qb2luKFwiIFwiKTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IGRhdGEgYWJvdXQgY3VycmVudCBkYXRlIGFuZCB0aW1lXG4gICAgZGF0ZURhdGEodGltZSkge1xuICAgICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgICAgLy8gdGltZXN0YW1wIG9yIGRhdGVzdHJpbmcsIGtlZXAgYXMgaXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGltZSA9PT0gXCJudW1iZXJcIiB8fCAvXltcXHdcXC1cXCtcXDpdKyQvLnRlc3QodGltZSkpIHtcbiAgICAgICAgICAgICAgICBub3cgPSB0aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3RoZXIgc3RyaW5nLCBhc3N1bWUgdGltZXpvbmVcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbm93ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgX3AgPSAobikgPT4gKG4gPCAxMCA/IFwiMFwiICsgbiA6IFwiXCIgKyBuKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShub3cpO1xuICAgICAgICBsZXQgbW9udGggPSBbXG4gICAgICAgICAgICBcIkphblwiLFxuICAgICAgICAgICAgXCJGZWJcIixcbiAgICAgICAgICAgIFwiTWFyXCIsXG4gICAgICAgICAgICBcIkFwclwiLFxuICAgICAgICAgICAgXCJNYXlcIixcbiAgICAgICAgICAgIFwiSnVuXCIsXG4gICAgICAgICAgICBcIkp1bFwiLFxuICAgICAgICAgICAgXCJBdWdcIixcbiAgICAgICAgICAgIFwiU2VwXCIsXG4gICAgICAgICAgICBcIk9jdFwiLFxuICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgIFwiRGVjXCIsXG4gICAgICAgIF1bZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBkYXkgPSBfcChkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIGxldCBtaW51dGUgPSBfcChkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBfcChkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgIGxldCBmdWxsaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgbGV0IGFtcG0gPSBmdWxsaCA+IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgICBsZXQgaG91ciA9IGZ1bGxoID4gMTIgPyBmdWxsaCAtIDEyIDogZnVsbGg7XG4gICAgICAgIGhvdXIgPSBfcChob3VyID09PSAwID8gMTIgOiBob3VyKTtcbiAgICAgICAgcmV0dXJuIHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0IHJlYWRhYmxlIGRhdGVcbiAgICBkYXRlKHRpbWUsIGZ1bGwpIHtcbiAgICAgICAgbGV0IHsgbW9udGgsIGRheSwgeWVhciwgaG91ciwgbWludXRlLCBzZWNvbmQsIGFtcG0gfSA9XG4gICAgICAgICAgICB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICBsZXQgb3V0ID0gW21vbnRoICsgXCIvXCIgKyBkYXkgKyBcIi9cIiArIHllYXJdO1xuICAgICAgICBpZiAoZnVsbCkgb3V0LnB1c2goaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQsIGFtcG0pO1xuICAgICAgICByZXR1cm4gb3V0LmpvaW4oXCIgXCIpO1xuICAgIH0sXG5cbiAgICAvLyBnZXQgY3VycmVudCB0aW1lXG4gICAgdGltZSh0aW1lKSB7XG4gICAgICAgIGxldCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBhbXBtIH0gPSB0aGlzLmRhdGVEYXRhKHRpbWUpO1xuICAgICAgICByZXR1cm4gaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQgKyBcIiBcIiArIGFtcG07XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSBwZXJjZW50IGNoYW5nZVxuICAgIHBlcmNlbnQoY3VycmVudCwgbGFzdCwgdG9OdW0pIHtcbiAgICAgICAgbGV0IGlzbnVtID0gQm9vbGVhbihsYXN0ID4gMCk7XG4gICAgICAgIGxldCBpc3VwID0gQm9vbGVhbihjdXJyZW50ID49IGxhc3QpO1xuICAgICAgICBsZXQgY2hhbmdlID0gaXN1cCA/IGN1cnJlbnQgLSBsYXN0IDogbGFzdCAtIGN1cnJlbnQ7XG4gICAgICAgIGxldCBwZXJjZW50ID0gaXNudW0gPyAoY2hhbmdlIC8gbGFzdCkgKiAxMDAuMCA6IDAuMDtcbiAgICAgICAgbGV0IHNpZ24gPSBpc3VwID8gXCIrXCIgOiBcIi1cIjtcbiAgICAgICAgbGV0IGFycm93ID0gaXN1cCA/IFwi4payXCIgOiBcIuKWvFwiO1xuICAgICAgICBsZXQgY29sb3IgPSBpc3VwID8gXCJncmVlblwiIDogXCJyZWRcIjtcbiAgICAgICAgaWYgKHRvTnVtID09PSB0cnVlKSByZXR1cm4gK051bWJlcihzaWduICsgcGVyY2VudCkudG9GaXhlZCgzKTtcbiAgICAgICAgcmV0dXJuIHsgY2hhbmdlLCBwZXJjZW50LCBzaWduLCBhcnJvdywgY29sb3IgfTtcbiAgICB9LFxuXG4gICAgLy8gY2FsYyBjaGFydCBwb2ludHMgZm9yIGdpdmVuIGRpbWVuc2lvbnMgYW5kIHZhbHVlc1xuICAgIHBvaW50cyh3aWR0aCwgaGVpZ2h0LCB2YWx1ZXMpIHtcbiAgICAgICAgd2lkdGggPSBwYXJzZUZsb2F0KHdpZHRoKSB8fCAwO1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KGhlaWdodCkgfHwgMDtcbiAgICAgICAgdmFsdWVzID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gdmFsdWVzIDogW107XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoKG4pID0+IHBhcnNlRmxvYXQobikgfHwgMCk7XG5cbiAgICAgICAgbGV0IG1pbiA9IHZhbHVlcy5yZWR1Y2UoXG4gICAgICAgICAgICAobWluLCB2YWwpID0+ICh2YWwgPCBtaW4gPyB2YWwgOiBtaW4pLFxuICAgICAgICAgICAgdmFsdWVzWzBdXG4gICAgICAgICk7XG4gICAgICAgIGxldCBtYXggPSB2YWx1ZXMucmVkdWNlKFxuICAgICAgICAgICAgKG1heCwgdmFsKSA9PiAodmFsID4gbWF4ID8gdmFsIDogbWF4KSxcbiAgICAgICAgICAgIHZhbHVlc1swXVxuICAgICAgICApO1xuICAgICAgICBsZXQgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICAgICAgbGV0IGhhbGYgPSBoZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZ2UgPSBtYXggPiBtaW4gPyBtYXggLSBtaW4gOiBoZWlnaHQ7XG4gICAgICAgIGxldCBnYXAgPSBsZW4gPiAxID8gd2lkdGggLyAobGVuIC0gMSkgOiAxO1xuICAgICAgICBsZXQgb3V0ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbGV0IGQgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICBsZXQgdmFsID0gMiAqICgoZCAtIG1pbikgLyByYW5nZSAtIDAuNSk7XG4gICAgICAgICAgICBsZXQgeCA9IGkgKiBnYXA7XG4gICAgICAgICAgICBsZXQgeSA9IC12YWwgKiBoYWxmICogMC44ICsgaGFsZjtcbiAgICAgICAgICAgIG91dC5wdXNoKHsgeCwgeSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG5cbiAgICAvLyBjb21wdXRlIHBsYWNlbWVudCBmb3IgYW4gYWJzb2x1dGUgYm94IG9uIHRoZSBzY3JlZW5cbiAgICBib3hQb3NpdGlvbih0cmlnZ2VyRWxtKSB7XG4gICAgICAgIGxldCBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XSA9IFt0cnVlLCBmYWxzZSwgZmFsc2UsIHRydWVdO1xuXG4gICAgICAgIGlmICh0cmlnZ2VyRWxtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBib3ggPSB0cmlnZ2VyRWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHBvc3ggPSBib3gubGVmdCArIHRyaWdnZXJFbG0ub2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IHBvc3kgPSBib3gudG9wICsgdHJpZ2dlckVsbS5vZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgICAgICAgbGV0IGNlbnRlcnggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgICAgICBsZXQgY2VudGVyeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIHRvcCA9IHBvc3kgPCBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmlnaHQgPSBwb3N4ID4gY2VudGVyeCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGJvdHRvbSA9IHBvc3kgPiBjZW50ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgbGVmdCA9IHBvc3ggPCBjZW50ZXJ4ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2hlY2sgYSBrZXktcHJlc3MgZXZlbnQgZm9yIHNvbWUgY29tbW9uIGtleXMgYmVpbmcgcHJlc3NlZFxuICAgIGtleWJvYXJkKGUpIHtcbiAgICAgICAgbGV0IGNvZGUgPSBlLmtleUNvZGUgfHwgZS5rZXkgfHwgMDtcbiAgICAgICAgbGV0IHVwID0gY29kZSA9PT0gMzg7XG4gICAgICAgIGxldCBkb3duID0gY29kZSA9PT0gNDA7XG4gICAgICAgIGxldCBsZWZ0ID0gY29kZSA9PT0gMzc7XG4gICAgICAgIGxldCByaWdodCA9IGNvZGUgPT09IDM5O1xuICAgICAgICBsZXQgYmFjayA9IGNvZGUgPT09IDg7XG4gICAgICAgIGxldCBlc2NhcGUgPSBjb2RlID09PSAyNztcbiAgICAgICAgbGV0IHNwYWNlID0gY29kZSA9PT0gMzI7XG4gICAgICAgIGxldCBlbnRlciA9IGNvZGUgPT09IDEzO1xuICAgICAgICByZXR1cm4geyB1cCwgZG93biwgbGVmdCwgcmlnaHQsIGJhY2ssIGVzY2FwZSwgc3BhY2UsIGVudGVyIH07XG4gICAgfSxcblxuICAgIC8vIHNodWZmbGUgYW4gYXJyYXlcbiAgICBzaHVmZmxlKG8pIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICAgIGxldCBqLCB4LCBpID0gby5sZW5ndGg7XG4gICAgICAgICAgICBpO1xuICAgICAgICAgICAgaiA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH0sXG5cbiAgICAvLyBkZWVwIG1lcmdlIG9iaiBhcmd1bWVudHNcbiAgICBkZWVwTWVyZ2UoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzBdW2tleV0gPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmd1bWVudHNbaV1ba2V5XSA9PT0gXCJvYmplY3RcIlxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcE1lcmdlKGFyZ3VtZW50c1swXVtrZXldLCBhcmd1bWVudHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1ba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgfSxcblxuICAgIC8vIHNlYXJjaCBvYmplY3RzIGluIGEgbGlzdCBieSBrZXkgYW5kIHNlYXJjaCB0ZXh0XG4gICAgc2VhcmNoKGxpc3QsIGtleSwgdGV4dCwgZnVsbHdvcmQsIGZ1bGxjYXNlKSB7XG4gICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCB8fCBcIlwiKS5yZXBsYWNlKC9bXlxcd1xcc1xcfF0rL2csIFwiXCIpO1xuXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2ggPSBmdWxsd29yZFxuICAgICAgICAgICAgICAgID8gXCJcXFxcYlwiICsgdGV4dC5yZXBsYWNlKC9bXFx8XSsvZywgXCJcXFxcYnxcXFxcYlwiKSArIFwiXFxcXGJcIlxuICAgICAgICAgICAgICAgIDogdGV4dDtcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZnVsbGNhc2UgPyBcImdcIiA6IFwiZ2lcIjtcbiAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG91dHB1dCA9IFtdO1xuXG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgICAgICAgICAgIGlmIChTdHJpbmcobGlzdFtjb3VudF1ba2V5XSB8fCBcIlwiKS5zZWFyY2gocmVnZXgpIDwgMCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gobGlzdFtjb3VudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gc29ydCBvYmplY3RzIGluIGFuIGFycmF5IGJ5IGEga2V5XG4gICAgc29ydChsaXN0LCBrZXksIG9yZGVyLCBpZ25vcmUpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCBfYSA9IGFba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgX2IgPSBiW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvcnQgc3RyaW5ncyB1c2luZyBzYW1lIGNhc2VcbiAgICAgICAgICAgICAgICAgICAgX2EgPSB0eXBlb2YgX2EgPT09IFwic3RyaW5nXCIgPyBfYS50b1VwcGVyQ2FzZSgpIDogX2E7XG4gICAgICAgICAgICAgICAgICAgIF9iID0gdHlwZW9mIF9iID09PSBcInN0cmluZ1wiID8gX2IudG9VcHBlckNhc2UoKSA6IF9iO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiYXNjXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hIDwgX2IpIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9hID4gX2IpIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3JkZXIgPT09IFwiZGVzY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA+IF9iKSByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYSA8IF9iKSByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzdGFydCBvZiBhIGxpc3RcbiAgICB0cmltTGVmdChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZShsaXN0Lmxlbmd0aCAtIG1heCkgOiBsaXN0O1xuICAgIH0sXG5cbiAgICAvLyByZW1vdmUgaXRlbXMgZnJvbSB0aGUgZW5kIG9mIGEgbGlzdFxuICAgIHRyaW1SaWdodChsaXN0LCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gbWF4ID8gbGlzdC5zbGljZSgwLCBtYXgpIDogbGlzdDtcbiAgICB9LFxuXG4gICAgLy8gY3JlYXRlIHVuaXF1ZSBoYXNoIGZyb20gYSBzdHJpbmdcbiAgICB1bmlxdWUoc3RyKSB7XG4gICAgICAgIHN0ciA9IFN0cmluZyhzdHIgfHwgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXFx0XFxzXSsvZywgXCIgXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBsZXQgaGFzaCA9IDUzODEsXG4gICAgICAgICAgICBpID0gc3RyLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSkgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHJldHVybiBcInVucV9cIiArIChoYXNoID4+PiAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmFuZG9tIHN0cmluZyBmb3IgYSBnaXZlbiBsZW5ndGhcbiAgICByYW5kU3RyaW5nKGxlbmd0aCkge1xuICAgICAgICBsZXQgY2hhcnMgPVxuICAgICAgICAgICAgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuICAgICAgICBsZXQgdG90YWwgPSBwYXJzZUludChsZW5ndGgpIHx8IDEwO1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcblxuICAgICAgICB3aGlsZSAodG90YWwpIHtcbiAgICAgICAgICAgIG91dHB1dCArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgICAgICAgICB0b3RhbC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIC8vIGdldCBhIHVuaXF1ZSBJRCBzdHJpbmcgdGhhdCB1c2VzIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBhbmQgYSByYW5kb20gdmFsdWVcbiAgICBpZFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpXG4gICAgICAgICkudG9VcHBlckNhc2UoKTtcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJ1dGlscyIsIk5vdGlmeSIsIm9wdGlvbnMiLCJfcXVldWUiLCJfbm90aWNlcyIsIl9vcHRpb25zIiwiZW5hYmxlZCIsImR1cmF0aW9uIiwic291bmQiLCJ2b2x1bWUiLCJhdWRpbyIsImltYWdlIiwic2V0T3B0aW9ucyIsIl93YXRjaFF1ZXVlIiwiT2JqZWN0IiwiYXNzaWduIiwidGl0bGUiLCJib2R5IiwiaWNvbiIsImxpbmsiLCJpZCIsInJhbmRTdHJpbmciLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsIlN0cmluZyIsImZpbHRlciIsIm4iLCJwdXNoIiwid2luZG93IiwiaGFzU3VwcG9ydCIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJjYWxsYmFjayIsInJlcXVlc3RQZXJtaXNzaW9uIiwidGhlbiIsInJlc3BvbnNlIiwicGxheUF1ZGlvIiwibGltaXQiLCJsZW5ndGgiLCJpIiwiY2xvc2UiLCJfY2xlYW51cE5vdGlmaWNhdGlvbnMiLCJzZXRUaW1lb3V0IiwiYmluZCIsImNhbk5vdGlmeSIsInNoaWZ0IiwiYSIsInRhZyIsInR0bCIsInBhcnNlSW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJwbGF5U291bmQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwicGFyc2VVcmwiLCJ1cmwiLCJwcm9wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRhdGEiLCJsaW5rVXJsIiwidGV4dCIsInJlcGxhY2UiLCJzdHJpcEh0bWwiLCJyZW1vdmVVcmxzIiwiZGl2IiwiaW5uZXJIVE1MIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJmdWxsVXJsIiwicmVscGF0aCIsInRlc3QiLCJsb2MiLCJsb2NhdGlvbiIsInBhdGgiLCJwYXRobmFtZSIsInJlbCIsInByb3RvY29sIiwiaG9zdCIsImZpbGUiLCJ2b2wiLCJwYXJzZUZsb2F0IiwiQXVkaW8iLCJzcmMiLCJjcm9zc09yaWdpbiIsInBsYXkiLCJlcnIiLCJsb2FkIiwiY29weVRleHQiLCJlbG0iLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwidHJpbSIsInNlbGVjdCIsInJlbW92ZSIsImV4ZWNDb21tYW5kIiwiY2xhbXAiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwic3RyIiwiYXBwZW5kIiwic3Vic3RyaW5nIiwiZmlsbCIsImNoYXIiLCJyZXBlYXQiLCJub3VuIiwic2luZ3VsYXIiLCJwbHV0YWwiLCJtb25leSIsImZpeGVkIiwibyIsInN0eWxlIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwibWF4aW11bUZyYWN0aW9uRGlnaXRzIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImRlY2ltYWxzIiwiTnVtYmVyIiwidG9GaXhlZCIsImVsYXBzZWQiLCJzZWNzIiwic3VmZml4Iiwic2hvcnQiLCJsaXN0IiwiTSIsImZsb29yIiwidyIsImQiLCJoIiwibSIsInMiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJqb2luIiwiZGF0ZURhdGEiLCJ0b0xvY2FsZVN0cmluZyIsIl9wIiwiZGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJkYXkiLCJnZXREYXRlIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJmdWxsaCIsImdldEhvdXJzIiwiYW1wbSIsImhvdXIiLCJmdWxsIiwib3V0IiwicGVyY2VudCIsImN1cnJlbnQiLCJsYXN0IiwidG9OdW0iLCJpc251bSIsIkJvb2xlYW4iLCJpc3VwIiwiY2hhbmdlIiwic2lnbiIsImFycm93IiwiY29sb3IiLCJwb2ludHMiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJlZHVjZSIsInZhbCIsImxlbiIsImhhbGYiLCJyYW5nZSIsImdhcCIsIngiLCJ5IiwiYm94UG9zaXRpb24iLCJ0cmlnZ2VyRWxtIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiSFRNTEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwb3N4Iiwib2Zmc2V0V2lkdGgiLCJwb3N5Iiwib2Zmc2V0SGVpZ2h0IiwiY2VudGVyeCIsImlubmVyV2lkdGgiLCJjZW50ZXJ5IiwiaW5uZXJIZWlnaHQiLCJrZXlib2FyZCIsImNvZGUiLCJrZXlDb2RlIiwia2V5IiwidXAiLCJkb3duIiwiYmFjayIsImVzY2FwZSIsInNwYWNlIiwiZW50ZXIiLCJzaHVmZmxlIiwiaiIsInJhbmRvbSIsImRlZXBNZXJnZSIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5Iiwic2VhcmNoIiwiZnVsbHdvcmQiLCJmdWxsY2FzZSIsInJlZ2V4IiwiUmVnRXhwIiwiY291bnQiLCJzb3J0Iiwib3JkZXIiLCJpZ25vcmUiLCJiIiwiX2EiLCJfYiIsInRvVXBwZXJDYXNlIiwidHJpbUxlZnQiLCJzbGljZSIsInRyaW1SaWdodCIsInVuaXF1ZSIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hhcnMiLCJ0b3RhbCIsImNoYXJBdCIsImlkU3RyaW5nIiwidG9TdHJpbmciLCJzdWJzdHIiXSwic291cmNlUm9vdCI6IiJ9