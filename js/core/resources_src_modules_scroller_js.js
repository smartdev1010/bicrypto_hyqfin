"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_scroller_js"],{

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

/***/ "./resources/src/modules/scroller.js":
/*!*******************************************!*\
  !*** ./resources/src/modules/scroller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroller)
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
 * Scroller Class.
 * For calling custom function based on scroll position, or to auto-scroll.
 */


var Scroller = /*#__PURE__*/function (_Bus) {
  _inherits(Scroller, _Bus);

  var _super = _createSuper(Scroller);

  /**
   * Constructor
   */
  function Scroller(target) {
    var _this;

    _classCallCheck(this, Scroller);

    _this = _super.call(this);
    _this._tdef = document.scrollingElement || document.documentElement || window;
    _this._target = target instanceof Element ? target : _this._tdef;
    _this._scrolling = false;
    _this._pos = 0;
    _this._to = 0;
    _this._min = 0;
    _this._max = 0;
    _this._ease = 10;
    _this._triggers = [];
    _this._onScroll = _this._onScroll.bind(_assertThisInitialized(_this));

    _this.addTrigger('up');

    _this.addTrigger('down');

    window.addEventListener('scroll', _this._onScroll);
    window.addEventListener('resize', _this._onScroll);
    return _this;
  }
  /**
   * Add custom scroll trigger
   * @param {string}    name   Trigger name
   * @param {number}    pos    Trigger scroll position
   * @param {function}  cb     Optional callback handler
   * @param {object}    data
   */


  _createClass(Scroller, [{
    key: "addTrigger",
    value: function addTrigger(name, pos, cb, data) {
      var trigger = String(name || '').trim().toLowerCase();
      var position = parseFloat(pos) || 0;
      var callback = typeof cb === 'function' ? cb : function () {};
      var called = false;
      if (!trigger) return;

      this._triggers.push(Object.assign({
        trigger: trigger,
        position: position,
        called: called
      }, data));

      this.on(trigger, callback);
    }
    /**
     * Reset triggers called state to false
     */

  }, {
    key: "resetTriggers",
    value: function resetTriggers() {
      this._triggers.forEach(function (t) {
        called = false;
      });
    }
    /**
     * When elements enter and leave the viewport area
     * @param {*}         targets   CSS selector, or array list of target elements
     * @param {function}  callback  Callback function
     */

  }, {
    key: "onVisible",
    value: function onVisible(targets, callback) {
      var elms = this._getElmList(targets);

      var emap = new Array(elms.length).fill(false);
      this.addTrigger('reveal', 0, callback, {
        elms: elms,
        emap: emap
      });
    }
    /**
     * Auto scroll page to a target destination
     * @param {*}  dest      String selector, number or element
     * @param {*}  callback  Callback function
     */

  }, {
    key: "jumpTo",
    value: function jumpTo(dest, callback) {
      var scrollHeight = Math.max(0, Math.floor(this._target.scrollHeight || 0));
      var clientHeight = Math.max(0, Math.floor(this._target.clientHeight || 0));
      this._max = Math.floor(scrollHeight - clientHeight);
      this._pos = this._target.scrollTop || 0;
      this._to = this._pos;

      if (typeof dest === 'number') {
        this._to = dest;
      } else if (_typeof(dest) === 'object' && dest instanceof Element) {
        this._to = this._pos + dest.getBoundingClientRect().top || this._pos;
      } else if (typeof dest === 'string') {
        if (/^(up|top)$/i.test(dest)) {
          this._to = this._min;
        } else if (/^(middle|center)$/i.test(dest)) {
          this._to = this._max / 2;
        } else if (/^(down|bottom)$/i.test(dest)) {
          this._to = this._max;
        } else if (/^([0-9]+)$/.test(dest)) {
          this._to = parseInt(dest);
        } else {
          var node = document.querySelector(dest);
          this._to = node ? this._pos + node.getBoundingClientRect().top : this._pos;
        }
      }

      this._to = Math.max(this._min, Math.min(this._to, this._max));

      this._jumpLoop(callback);
    }
    /**
     * Autoscroll animation loop
     */

  }, {
    key: "_jumpLoop",
    value: function _jumpLoop(cb) {
      var _this2 = this;

      if (Math.abs(this._to - this._pos) < 1) {
        this._scrolling = false;
        this._target.scrollTop = this._to;

        this._onScrollTick();

        if (typeof cb === 'function') cb(this._to);
        return;
      }

      this._scrolling = true;
      this._pos += (this._to - this._pos) / this._ease;
      this._target.scrollTop = this._pos;
      window.requestAnimationFrame(function () {
        _this2._jumpLoop(cb);
      });
    } // check scroll behavior

  }, {
    key: "_onScrollTick",
    value: function _onScrollTick() {
      var sp = this._target.scrollTop | 0;
      this.emit('scroll', sp);

      for (var i = 0; i < this._triggers.length; ++i) {
        var t = this._triggers[i];

        if (t.trigger === 'up') {
          var check = sp < this._pos;
          if (!t.called && check) this.emit(t.trigger, sp);
          t.called = check;
        }

        if (t.trigger === 'down') {
          var _check = sp > this._pos;

          if (!t.called && _check) this.emit(t.trigger, sp);
          t.called = _check;
        }

        if (t.trigger === 'more') {
          var _check2 = sp > t.position;

          if (!t.called && _check2) this.emit(t.trigger, sp);
          t.called = _check2;
        }

        if (t.trigger === 'less') {
          var _check3 = sp < t.position;

          if (!t.called && _check3) this.emit(t.trigger, sp);
          t.called = _check3;
        }

        if (t.trigger === 'reveal' && t.elms) {
          for (var _i = 0; _i < t.elms.length; ++_i) {
            var e = t.elms[_i];
            var c = t.emap[_i];

            var v = this._checkVisible(e);

            if (!c && v) this.emit('show', e, sp); // entering

            if (c && !v) this.emit('hide', e, sp); // leaving

            t.emap[_i] = v;
          }
        }
      }

      this._pos = sp;
    }
    /**
     * Checks if an element is visible within the height of the scroll window
     * @param {element} elm  Element object
     */

  }, {
    key: "_checkVisible",
    value: function _checkVisible(elm) {
      var height = this._target.clientHeight | 0;
      var box = elm.getBoundingClientRect();
      var yPos = box.top + box.height / 2; // elm middle

      return yPos >= 0 && yPos <= height;
    }
    /**
     * Handler for native scroll event
     * @param {object}  e  Event object
     */

  }, {
    key: "_onScroll",
    value: function _onScroll(e) {
      var _this3 = this;

      if (this._scrolling) return;
      this._scrolling = true;
      window.requestAnimationFrame(function () {
        _this3._onScrollTick();

        _this3._scrolling = false;
      });
    }
    /**
     * Resolve list of elements from an arg
     * @param {*}  elms  String selector, nodelist or array
     */

  }, {
    key: "_getElmList",
    value: function _getElmList(elms) {
      if (typeof elms === 'string') return document.querySelectorAll(elms);
      if (Array.isArray(elms) || elms instanceof NodeList) return elms;
      if (elms instanceof Element) return [elms];
      return [];
    }
  }]);

  return Scroller;
}(_bus__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfc2Nyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUNxQkE7RUFFbkI7QUFDRjtBQUNBO0VBQ0UsZUFBYztJQUFBOztJQUNaLEtBQUtDLE9BQUwsR0FBZSxFQUFmO0VBQ0Q7RUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7OztXQUNFLFlBQUlDLElBQUosRUFBVUMsUUFBVixFQUFxQjtNQUNuQixJQUFLLENBQUNELElBQUQsSUFBUyxPQUFPQSxJQUFQLEtBQWdCLFFBQTlCLEVBQXlDO01BQ3pDLElBQUssT0FBT0MsUUFBUCxLQUFvQixVQUF6QixFQUFzQztNQUN0QyxJQUFLLENBQUMsS0FBS0YsT0FBTCxDQUFhRyxjQUFiLENBQTZCRixJQUE3QixDQUFOLEVBQTRDLEtBQUtELE9BQUwsQ0FBY0MsSUFBZCxJQUF1QixFQUF2Qjs7TUFDNUMsS0FBS0QsT0FBTCxDQUFjQyxJQUFkLEVBQXFCRyxJQUFyQixDQUEyQkYsUUFBM0I7SUFDRDtJQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGdCQUFPO01BQ0wsSUFBSUcsSUFBSSxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBWUMsU0FBWixDQUFYO01BQ0EsSUFBSVAsSUFBSSxHQUFHSSxJQUFJLENBQUNJLE1BQUwsR0FBY0osSUFBSSxDQUFDSyxLQUFMLEVBQWQsR0FBNkIsRUFBeEM7O01BRUEsSUFBSyxLQUFLVixPQUFMLENBQWFHLGNBQWIsQ0FBNkJGLElBQTdCLENBQUwsRUFBMkM7UUFDekMsS0FBTSxJQUFJVSxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHLEtBQUtYLE9BQUwsQ0FBY0MsSUFBZCxFQUFxQlEsTUFBMUMsRUFBa0QsRUFBRUUsQ0FBcEQsRUFBd0Q7VUFDdEQsSUFBSUMsRUFBRSxHQUFHLEtBQUtaLE9BQUwsQ0FBY0MsSUFBZCxFQUFzQlUsQ0FBdEIsQ0FBVDtVQUNBQyxFQUFFLENBQUND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Q0FBMkJqQyxJQUEzQixDQUFQO01BQ2hDLElBQUs1QyxLQUFLLENBQUM4RSxPQUFOLENBQWVsQyxJQUFmLEtBQXlCQSxJQUFJLFlBQVltQyxRQUE5QyxFQUF5RCxPQUFPbkMsSUFBUDtNQUN6RCxJQUFLQSxJQUFJLFlBQVkzQixPQUFyQixFQUErQixPQUFPLENBQUUyQixJQUFGLENBQVA7TUFDL0IsT0FBTyxFQUFQO0lBQ0Q7Ozs7RUF2TG1DbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvYnVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9zY3JvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQmFzaWMgZXZlbnQgYnVzIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXMge1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIG5hbWUgICAgICBFdmVudCBuYW1lXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICBFdmVudCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAqL1xyXG4gIG9uKCBuYW1lLCBjYWxsYmFjayApIHtcclxuICAgIGlmICggIW5hbWUgfHwgdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnICkgcmV0dXJuO1xyXG4gICAgaWYgKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSByZXR1cm47XHJcbiAgICBpZiAoICF0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHRoaXMuX2V2ZW50c1sgbmFtZSBdID0gW107XHJcbiAgICB0aGlzLl9ldmVudHNbIG5hbWUgXS5wdXNoKCBjYWxsYmFjayApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhbiBldmVudCBieSBuYW1lIChmaXJzdCBhcmcpIHdpdGggcmVzdCBvZiBhcmdzIHBhc3NlZCB0byBpdFxyXG4gICAqL1xyXG4gIGVtaXQoKSB7XHJcbiAgICBsZXQgYXJncyA9IEFycmF5LmZyb20oIGFyZ3VtZW50cyApO1xyXG4gICAgbGV0IG5hbWUgPSBhcmdzLmxlbmd0aCA/IGFyZ3Muc2hpZnQoKSA6ICcnO1xyXG5cclxuICAgIGlmICggdGhpcy5fZXZlbnRzLmhhc093blByb3BlcnR5KCBuYW1lICkgKSB7XHJcbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuX2V2ZW50c1sgbmFtZSBdLmxlbmd0aDsgKytpICkge1xyXG4gICAgICAgIGxldCBjYiA9IHRoaXMuX2V2ZW50c1sgbmFtZSBdWyBpIF07XHJcbiAgICAgICAgY2IuYXBwbHkoIGNiLCBhcmdzICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFyZ3MgPSB1bmRlZmluZWQ7IC8vIGdjXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBTY3JvbGxlciBDbGFzcy5cclxuICogRm9yIGNhbGxpbmcgY3VzdG9tIGZ1bmN0aW9uIGJhc2VkIG9uIHNjcm9sbCBwb3NpdGlvbiwgb3IgdG8gYXV0by1zY3JvbGwuXHJcbiAqL1xyXG5pbXBvcnQgQnVzIGZyb20gJy4vYnVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGVyIGV4dGVuZHMgQnVzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggdGFyZ2V0ICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX3RkZWYgICAgICA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHdpbmRvdztcclxuICAgIHRoaXMuX3RhcmdldCAgICA9ICggdGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCApID8gdGFyZ2V0IDogdGhpcy5fdGRlZjtcclxuICAgIHRoaXMuX3Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fcG9zICAgICAgID0gMDtcclxuICAgIHRoaXMuX3RvICAgICAgICA9IDA7XHJcbiAgICB0aGlzLl9taW4gICAgICAgPSAwO1xyXG4gICAgdGhpcy5fbWF4ICAgICAgID0gMDtcclxuICAgIHRoaXMuX2Vhc2UgICAgICA9IDEwO1xyXG4gICAgdGhpcy5fdHJpZ2dlcnMgID0gW107XHJcbiAgICB0aGlzLl9vblNjcm9sbCAgPSB0aGlzLl9vblNjcm9sbC5iaW5kKCB0aGlzICk7XHJcbiAgICB0aGlzLmFkZFRyaWdnZXIoICd1cCcgKTtcclxuICAgIHRoaXMuYWRkVHJpZ2dlciggJ2Rvd24nICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMuX29uU2Nyb2xsICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMuX29uU2Nyb2xsICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgY3VzdG9tIHNjcm9sbCB0cmlnZ2VyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9ICAgIG5hbWUgICBUcmlnZ2VyIG5hbWVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gICAgcG9zICAgIFRyaWdnZXIgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNiICAgICBPcHRpb25hbCBjYWxsYmFjayBoYW5kbGVyXHJcbiAgICogQHBhcmFtIHtvYmplY3R9ICAgIGRhdGFcclxuICAgKi9cclxuICBhZGRUcmlnZ2VyKCBuYW1lLCBwb3MsIGNiLCBkYXRhICkge1xyXG4gICAgbGV0IHRyaWdnZXIgID0gU3RyaW5nKCBuYW1lIHx8ICcnICkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBwYXJzZUZsb2F0KCBwb3MgKSB8fCAwO1xyXG4gICAgbGV0IGNhbGxiYWNrID0gKCB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicgKSA/IGNiIDogZnVuY3Rpb24oKSB7fTtcclxuICAgIGxldCBjYWxsZWQgICA9IGZhbHNlO1xyXG4gICAgaWYgKCAhdHJpZ2dlciApIHJldHVybjtcclxuICAgIHRoaXMuX3RyaWdnZXJzLnB1c2goIE9iamVjdC5hc3NpZ24oIHsgdHJpZ2dlciwgcG9zaXRpb24sIGNhbGxlZCB9LCBkYXRhICkgKTtcclxuICAgIHRoaXMub24oIHRyaWdnZXIsIGNhbGxiYWNrICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0cmlnZ2VycyBjYWxsZWQgc3RhdGUgdG8gZmFsc2VcclxuICAgKi9cclxuICByZXNldFRyaWdnZXJzKCkge1xyXG4gICAgdGhpcy5fdHJpZ2dlcnMuZm9yRWFjaCggdCA9PiB7IGNhbGxlZCA9IGZhbHNlIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gZWxlbWVudHMgZW50ZXIgYW5kIGxlYXZlIHRoZSB2aWV3cG9ydCBhcmVhXHJcbiAgICogQHBhcmFtIHsqfSAgICAgICAgIHRhcmdldHMgICBDU1Mgc2VsZWN0b3IsIG9yIGFycmF5IGxpc3Qgb2YgdGFyZ2V0IGVsZW1lbnRzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gIGNhbGxiYWNrICBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAqL1xyXG4gIG9uVmlzaWJsZSggdGFyZ2V0cywgY2FsbGJhY2sgKSB7XHJcbiAgICBsZXQgZWxtcyA9IHRoaXMuX2dldEVsbUxpc3QoIHRhcmdldHMgKTtcclxuICAgIGxldCBlbWFwID0gbmV3IEFycmF5KCBlbG1zLmxlbmd0aCApLmZpbGwoIGZhbHNlICk7XHJcbiAgICB0aGlzLmFkZFRyaWdnZXIoICdyZXZlYWwnLCAwLCBjYWxsYmFjaywgeyBlbG1zLCBlbWFwIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF1dG8gc2Nyb2xsIHBhZ2UgdG8gYSB0YXJnZXQgZGVzdGluYXRpb25cclxuICAgKiBAcGFyYW0geyp9ICBkZXN0ICAgICAgU3RyaW5nIHNlbGVjdG9yLCBudW1iZXIgb3IgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7Kn0gIGNhbGxiYWNrICBDYWxsYmFjayBmdW5jdGlvblxyXG4gICAqL1xyXG4gIGp1bXBUbyggZGVzdCwgY2FsbGJhY2sgKSB7XHJcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBNYXRoLm1heCggMCwgTWF0aC5mbG9vciggdGhpcy5fdGFyZ2V0LnNjcm9sbEhlaWdodCB8fCAwICkgKTtcclxuICAgIGNvbnN0IGNsaWVudEhlaWdodCA9IE1hdGgubWF4KCAwLCBNYXRoLmZsb29yKCB0aGlzLl90YXJnZXQuY2xpZW50SGVpZ2h0IHx8IDAgKSApO1xyXG5cclxuICAgIHRoaXMuX21heCA9IE1hdGguZmxvb3IoIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCApO1xyXG4gICAgdGhpcy5fcG9zID0gdGhpcy5fdGFyZ2V0LnNjcm9sbFRvcCB8fCAwO1xyXG4gICAgdGhpcy5fdG8gID0gdGhpcy5fcG9zO1xyXG5cclxuICAgIGlmICggdHlwZW9mIGRlc3QgPT09ICdudW1iZXInICkge1xyXG4gICAgICB0aGlzLl90byA9IGRlc3Q7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdHlwZW9mIGRlc3QgPT09ICdvYmplY3QnICYmIGRlc3QgaW5zdGFuY2VvZiBFbGVtZW50ICkge1xyXG4gICAgICB0aGlzLl90byA9ICggdGhpcy5fcG9zICsgZGVzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKSB8fCB0aGlzLl9wb3M7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggdHlwZW9mIGRlc3QgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICBpZiAoIC9eKHVwfHRvcCkkL2kudGVzdCggZGVzdCApICkgeyB0aGlzLl90byA9IHRoaXMuX21pbjsgfSBlbHNlXHJcbiAgICAgIGlmICggL14obWlkZGxlfGNlbnRlcikkL2kudGVzdCggZGVzdCApICkgeyB0aGlzLl90byA9IHRoaXMuX21heCAvIDI7IH0gZWxzZVxyXG4gICAgICBpZiAoIC9eKGRvd258Ym90dG9tKSQvaS50ZXN0KCBkZXN0ICkgKSB7IHRoaXMuX3RvID0gdGhpcy5fbWF4OyB9IGVsc2VcclxuICAgICAgaWYgKCAvXihbMC05XSspJC8udGVzdCggZGVzdCApICkgeyB0aGlzLl90byA9IHBhcnNlSW50KCBkZXN0ICk7IH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBkZXN0ICk7XHJcbiAgICAgICAgdGhpcy5fdG8gPSBub2RlID8gKCB0aGlzLl9wb3MgKyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCApIDogdGhpcy5fcG9zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLl90byA9IE1hdGgubWF4KCB0aGlzLl9taW4sIE1hdGgubWluKCB0aGlzLl90bywgdGhpcy5fbWF4ICkgKTtcclxuICAgIHRoaXMuX2p1bXBMb29wKCBjYWxsYmFjayApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXV0b3Njcm9sbCBhbmltYXRpb24gbG9vcFxyXG4gICAqL1xyXG4gIF9qdW1wTG9vcCggY2IgKSB7XHJcbiAgICBpZiAoIE1hdGguYWJzKCB0aGlzLl90byAtIHRoaXMuX3BvcyApIDwgMSApIHtcclxuICAgICAgdGhpcy5fc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3RhcmdldC5zY3JvbGxUb3AgPSB0aGlzLl90bztcclxuICAgICAgdGhpcy5fb25TY3JvbGxUaWNrKCk7XHJcbiAgICAgIGlmICggdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nICkgY2IoIHRoaXMuX3RvICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3Njcm9sbGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9wb3MgKz0gKCB0aGlzLl90byAtIHRoaXMuX3BvcyApIC8gdGhpcy5fZWFzZTtcclxuICAgIHRoaXMuX3RhcmdldC5zY3JvbGxUb3AgPSB0aGlzLl9wb3M7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7IHRoaXMuX2p1bXBMb29wKCBjYiApIH0gKTtcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIHNjcm9sbCBiZWhhdmlvclxyXG4gIF9vblNjcm9sbFRpY2soKSB7XHJcbiAgICBsZXQgc3AgPSB0aGlzLl90YXJnZXQuc2Nyb2xsVG9wIHwgMDtcclxuICAgIHRoaXMuZW1pdCggJ3Njcm9sbCcsIHNwICk7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fdHJpZ2dlcnMubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgIGxldCB0ID0gdGhpcy5fdHJpZ2dlcnNbIGkgXTtcclxuXHJcbiAgICAgIGlmICggdC50cmlnZ2VyID09PSAndXAnICkge1xyXG4gICAgICAgIGxldCBjaGVjayA9ICggc3AgPCB0aGlzLl9wb3MgKTtcclxuICAgICAgICBpZiAoICF0LmNhbGxlZCAmJiBjaGVjayApIHRoaXMuZW1pdCggdC50cmlnZ2VyLCBzcCApO1xyXG4gICAgICAgIHQuY2FsbGVkID0gY2hlY2s7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCB0LnRyaWdnZXIgPT09ICdkb3duJyApIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSAoIHNwID4gdGhpcy5fcG9zICk7XHJcbiAgICAgICAgaWYgKCAhdC5jYWxsZWQgJiYgY2hlY2sgKSB0aGlzLmVtaXQoIHQudHJpZ2dlciwgc3AgKTtcclxuICAgICAgICB0LmNhbGxlZCA9IGNoZWNrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggdC50cmlnZ2VyID09PSAnbW9yZScgKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gKCBzcCA+IHQucG9zaXRpb24gKTtcclxuICAgICAgICBpZiAoICF0LmNhbGxlZCAmJiBjaGVjayApIHRoaXMuZW1pdCggdC50cmlnZ2VyLCBzcCApO1xyXG4gICAgICAgIHQuY2FsbGVkID0gY2hlY2s7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCB0LnRyaWdnZXIgPT09ICdsZXNzJyApIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSAoIHNwIDwgdC5wb3NpdGlvbiApO1xyXG4gICAgICAgIGlmICggIXQuY2FsbGVkICYmIGNoZWNrICkgdGhpcy5lbWl0KCB0LnRyaWdnZXIsIHNwICk7XHJcbiAgICAgICAgdC5jYWxsZWQgPSBjaGVjaztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIHQudHJpZ2dlciA9PT0gJ3JldmVhbCcgJiYgdC5lbG1zICkge1xyXG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHQuZWxtcy5sZW5ndGg7ICsraSApIHtcclxuICAgICAgICAgIGxldCBlID0gdC5lbG1zWyBpIF07XHJcbiAgICAgICAgICBsZXQgYyA9IHQuZW1hcFsgaSBdO1xyXG4gICAgICAgICAgbGV0IHYgPSB0aGlzLl9jaGVja1Zpc2libGUoIGUgKTtcclxuICAgICAgICAgIGlmICggIWMgJiYgdiApIHRoaXMuZW1pdCggJ3Nob3cnLCBlLCBzcCApOyAvLyBlbnRlcmluZ1xyXG4gICAgICAgICAgaWYgKCBjICYmICF2ICkgdGhpcy5lbWl0KCAnaGlkZScsIGUsIHNwICk7IC8vIGxlYXZpbmdcclxuICAgICAgICAgIHQuZW1hcFsgaSBdID0gdjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX3BvcyA9IHNwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSB3aXRoaW4gdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsIHdpbmRvd1xyXG4gICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxtICBFbGVtZW50IG9iamVjdFxyXG4gICAqL1xyXG4gIF9jaGVja1Zpc2libGUoIGVsbSApIHtcclxuICAgIGxldCBoZWlnaHQgPSB0aGlzLl90YXJnZXQuY2xpZW50SGVpZ2h0IHwgMDtcclxuICAgIGxldCBib3ggICAgPSBlbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgeVBvcyAgID0gYm94LnRvcCArICggYm94LmhlaWdodCAvIDIgKTsgLy8gZWxtIG1pZGRsZVxyXG4gICAgcmV0dXJuICggeVBvcyA+PSAwICYmIHlQb3MgPD0gaGVpZ2h0ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciBuYXRpdmUgc2Nyb2xsIGV2ZW50XHJcbiAgICogQHBhcmFtIHtvYmplY3R9ICBlICBFdmVudCBvYmplY3RcclxuICAgKi9cclxuICBfb25TY3JvbGwoIGUgKSB7XHJcbiAgICBpZiAoIHRoaXMuX3Njcm9sbGluZyApIHJldHVybjtcclxuICAgIHRoaXMuX3Njcm9sbGluZyA9IHRydWU7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX29uU2Nyb2xsVGljaygpO1xyXG4gICAgICB0aGlzLl9zY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzb2x2ZSBsaXN0IG9mIGVsZW1lbnRzIGZyb20gYW4gYXJnXHJcbiAgICogQHBhcmFtIHsqfSAgZWxtcyAgU3RyaW5nIHNlbGVjdG9yLCBub2RlbGlzdCBvciBhcnJheVxyXG4gICAqL1xyXG4gIF9nZXRFbG1MaXN0KCBlbG1zICkge1xyXG4gICAgaWYgKCB0eXBlb2YgZWxtcyA9PT0gJ3N0cmluZycgKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggZWxtcyApO1xyXG4gICAgaWYgKCBBcnJheS5pc0FycmF5KCBlbG1zICkgfHwgZWxtcyBpbnN0YW5jZW9mIE5vZGVMaXN0ICkgcmV0dXJuIGVsbXM7XHJcbiAgICBpZiAoIGVsbXMgaW5zdGFuY2VvZiBFbGVtZW50ICkgcmV0dXJuIFsgZWxtcyBdO1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQnVzIiwiX2V2ZW50cyIsIm5hbWUiLCJjYWxsYmFjayIsImhhc093blByb3BlcnR5IiwicHVzaCIsImFyZ3MiLCJBcnJheSIsImZyb20iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzaGlmdCIsImkiLCJjYiIsImFwcGx5IiwidW5kZWZpbmVkIiwiU2Nyb2xsZXIiLCJ0YXJnZXQiLCJfdGRlZiIsImRvY3VtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsIndpbmRvdyIsIl90YXJnZXQiLCJFbGVtZW50IiwiX3Njcm9sbGluZyIsIl9wb3MiLCJfdG8iLCJfbWluIiwiX21heCIsIl9lYXNlIiwiX3RyaWdnZXJzIiwiX29uU2Nyb2xsIiwiYmluZCIsImFkZFRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicG9zIiwiZGF0YSIsInRyaWdnZXIiLCJTdHJpbmciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJwb3NpdGlvbiIsInBhcnNlRmxvYXQiLCJjYWxsZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJvbiIsImZvckVhY2giLCJ0IiwidGFyZ2V0cyIsImVsbXMiLCJfZ2V0RWxtTGlzdCIsImVtYXAiLCJmaWxsIiwiZGVzdCIsInNjcm9sbEhlaWdodCIsIk1hdGgiLCJtYXgiLCJmbG9vciIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInRlc3QiLCJwYXJzZUludCIsIm5vZGUiLCJxdWVyeVNlbGVjdG9yIiwibWluIiwiX2p1bXBMb29wIiwiYWJzIiwiX29uU2Nyb2xsVGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNwIiwiZW1pdCIsImNoZWNrIiwiZSIsImMiLCJ2IiwiX2NoZWNrVmlzaWJsZSIsImVsbSIsImhlaWdodCIsImJveCIsInlQb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXNBcnJheSIsIk5vZGVMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==