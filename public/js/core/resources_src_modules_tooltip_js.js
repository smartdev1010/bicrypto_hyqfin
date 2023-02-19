"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_tooltip_js"],{

/***/ "./resources/src/modules/tooltip.js":
/*!******************************************!*\
  !*** ./resources/src/modules/tooltip.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport */ "./resources/src/modules/viewport.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Tooltips Class.
 * Adds custom tooltips to elements on the page.
 */


var Tooltip = /*#__PURE__*/function () {
  // class constructor
  function Tooltip(options) {
    _classCallCheck(this, Tooltip);

    this._options = Object.assign({
      // class to apply to tooltip element
      tipClass: 'tooltip-wrap',
      // class to apply when tooltip is placed on the left
      leftClass: 'tooltip-left',
      // class to apply when tooltip is placed on the right
      rightClass: 'tooltip-right',
      // class to apply when tooltip is placed on the top
      topClass: 'tooltip-top',
      // class to apply when tooltip is placed on the bottom
      bottomClass: 'tooltip-bottom',
      // delay to show the tooltip
      showDelay: 100,
      // auto hide delay
      hideDelay: 3000 // ...

    }, options);
    this._tooltip = null;
    this._hovItem = null;
    this._timeout = null;
    this._autohide = null;
    this._visible = false;
    this._elements = [];
    this._onScroll = this._onScroll.bind(this);

    this._init();
  } // set target elements


  _createClass(Tooltip, [{
    key: "select",
    value: function select(selector) {
      if (typeof selector === 'string') {
        this._elements = document.querySelectorAll(selector) || [];
      } else if (_typeof(selector) === 'object' && selector instanceof Element) {
        this._elements.push(selector);
      }

      for (var i = 0; i < this._elements.length; ++i) {
        this._setupItem(this._elements[i]);
      }

      this._hideTooltip();
    } // remove element from the list

  }, {
    key: "unselect",
    value: function unselect(element) {
      if (_typeof(element) === 'object' && element instanceof Element) {
        for (var i = 0, t = this._elements.length; i < t; ++i) {
          if (this._elements[i] === element) {
            this._resetItem(this._elements[i]);

            this._elements.splice(i, 1);

            break;
          }
        }

        this._hideTooltip();
      }
    } // cleanup this instance

  }, {
    key: "destroy",
    value: function destroy() {
      for (var i = 0; i < this._elements.length; ++i) {
        this._resetItem(this._elements[i]);
      }

      if (document.body.contains(this._tooltip)) {
        document.body.removeChild(this._tooltip);
      }

      window.removeEventListener('scroll', this._onScroll);
      window.removeEventListener('touchmove', this._onScroll);
      this._elements = [];
      this._tooltip = null;
    } // initlaize elements

  }, {
    key: "_init",
    value: function _init() {
      this._tooltip = document.createElement('div');
      this._tooltip.className = this._options.tipClass;
      this._tooltip.style['display'] = 'block';
      this._tooltip.style['position'] = 'absolute';
      this._tooltip.style['pointer-events'] = 'none';

      this._hideTooltip();

      document.body.appendChild(this._tooltip);
      window.addEventListener('scroll', this._onScroll);
      window.addEventListener('touchmove', this._onScroll);
    } // set an element to have tooltip, if not alredy setup

  }, {
    key: "_setupItem",
    value: function _setupItem(item) {
      var _this = this;

      if (item && item instanceof Element) {
        if (item.hasAttribute('title')) {
          var _passive = {
            passive: true
          };
          item.setAttribute('data-tip', item.getAttribute('title') || '');
          item.removeAttribute('title');
          item.addEventListener('mouseenter', function (e) {
            _this._onEnter(e);
          }, _passive);
          item.addEventListener('touchstart', function (e) {
            _this._onEnter(e);
          }, _passive);
          item.addEventListener('mouseleave', function (e) {
            _this._onLeave(e);
          }, _passive);
          item.addEventListener('touchend', function (e) {
            _this._onLeave(e);
          }, _passive);
        }
      }
    } // remove tooltip events from element, if needed

  }, {
    key: "_resetItem",
    value: function _resetItem(item) {
      var _this2 = this;

      if (item && item instanceof Element) {
        if (item.hasAttribute('data-tip')) {
          item.setAttribute('title', item.getAttribute('data-tip') || '');
          item.removeAttribute('data-tip');
          item.removeEventListener('mouseenter', function (e) {
            _this2._onEnter(e);
          });
          item.removeEventListener('touchstart', function (e) {
            _this2._onEnter(e);
          });
          item.removeEventListener('mouseleave', function (e) {
            _this2._onLeave(e);
          });
          item.removeEventListener('touchend', function (e) {
            _this2._onLeave(e);
          });
        }
      }
    } // decides where to place the tooltip in relation to item and screen bounds

  }, {
    key: "_showTooltip",
    value: function _showTooltip() {
      if (this._tooltip && this._hovItem) {
        var box = this._hovItem.getBoundingClientRect();

        var centerX = box.left + (this._hovItem.offsetWidth - this._tooltip.offsetWidth) / 2;
        var centerY = box.top + (this._hovItem.offsetHeight - this._tooltip.offsetHeight) / 2;
        var leftPos = box.left - this._tooltip.offsetWidth;
        var rightPos = box.left + this._hovItem.offsetWidth;
        var topPos = box.top - this._tooltip.offsetHeight;
        var bottomPos = box.top + this._hovItem.offsetHeight;
        var tipHalf = this._tooltip.offsetWidth / 2;
        var boxCenter = box.top - this._hovItem.offsetHeight / 2;
        var halfScreen = window.innerHeight / 2;
        var isNearLeft = box.left < tipHalf;
        var isNearRight = _viewport__WEBPACK_IMPORTED_MODULE_0__["default"].clientWidth() - rightPos < tipHalf;
        var clss = this._options.topClass;
        var left = centerX;
        var top = topPos; // move to the bottom

        if (boxCenter < halfScreen) {
          clss = this._options.bottomClass;
          left = centerX;
          top = bottomPos;
        } // move to the right


        if (isNearLeft && !isNearRight) {
          clss = this._options.rightClass;
          left = rightPos;
          top = centerY;
        } // move to the left


        if (isNearRight && !isNearLeft) {
          clss = this._options.leftClass;
          left = leftPos;
          top = centerY;
        } // show tooltip


        if (left > 1 && top > 1 && this._tooltip.innerHTML) {
          this._tooltip.className = this._options.tipClass + ' ' + clss;
          this._tooltip.style['left'] = _viewport__WEBPACK_IMPORTED_MODULE_0__["default"].scrollLeft() + left + 'px';
          this._tooltip.style['top'] = _viewport__WEBPACK_IMPORTED_MODULE_0__["default"].scrollTop() + top + 'px';
          this._visible = true;
        }
      }
    } // move tooltip object off screen, reset content and class

  }, {
    key: "_hideTooltip",
    value: function _hideTooltip() {
      if (this._tooltip) {
        this._tooltip.innerHTML = '';
        this._tooltip.className = this._options.tipClass;
        this._tooltip.style['left'] = '-1000px';
        this._tooltip.style['top'] = '-1000px';
        this._visible = false;
      }
    } // when mouse enters target element

  }, {
    key: "_onEnter",
    value: function _onEnter(e) {
      var item = e.target;
      var title = item.getAttribute('data-tip');

      if (title) {
        this._hovItem = item;
        this._tooltip.innerHTML = title;
        if (this._timeout) clearTimeout(this._timeout);
        this._timeout = setTimeout(this._showTooltip.bind(this), this._options.showDelay);
        if (this._autohide) clearTimeout(this._autohide);
        this._autohide = setTimeout(this._hideTooltip.bind(this), this._options.hideDelay);
      }
    } // when mouse leaves target element

  }, {
    key: "_onLeave",
    value: function _onLeave(e) {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }

      this._hovItem = null;

      this._hideTooltip();
    } // hide tooltip over fixed elements when scrolled

  }, {
    key: "_onScroll",
    value: function _onScroll(e) {
      if (this._visible) {
        this._hideTooltip();
      }
    }
  }]);

  return Tooltip;
}();



/***/ }),

/***/ "./resources/src/modules/viewport.js":
/*!*******************************************!*\
  !*** ./resources/src/modules/viewport.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Viewport Object.
 * Helper for working with viewport data.
 */
var _w = window || {};

var _s = window.screen || {};

var _d = document.documentElement || {};

var _b = document.body || {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  screenWidth: function screenWidth() {
    return Math.max(0, _s.width || _s.availWidth || 0);
  },
  screenHeight: function screenHeight() {
    return Math.max(0, _s.height || _s.availHeight || 0);
  },
  clientWidth: function clientWidth() {
    return Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0);
  },
  clientHeight: function clientHeight() {
    return Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0);
  },
  pageWidth: function pageWidth() {
    return Math.max(0, _b.scrollWidth || 0, _b.offsetWidth || 0, _d.clientWidth || 0, _d.offsetWidth || 0, _d.scrollWidth || 0);
  },
  pageHeight: function pageHeight() {
    return Math.max(0, _b.scrollHeight || 0, _b.offsetHeight || 0, _d.clientHeight || 0, _d.offsetHeight || 0, _d.scrollHeight || 0);
  },
  pageLeft: function pageLeft() {
    return Math.max(0, _d.clientLeft || _b.clientLeft || 0);
  },
  pageTop: function pageTop() {
    return Math.max(0, _d.clientTop || _b.clientTop || 0);
  },
  scrollLeft: function scrollLeft() {
    return Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - this.pageLeft();
  },
  scrollTop: function scrollTop() {
    return Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - this.pageTop();
  },
  scrollRight: function scrollRight() {
    // max right
    return Math.max(0, Math.floor(this.pageWidth() - this.clientWidth()));
  },
  scrollBottom: function scrollBottom() {
    // max bottom
    return Math.max(0, Math.floor(this.pageHeight() - this.clientHeight()));
  },
  mouseLeft: function mouseLeft(e) {
    var t = e && e.changedTouches ? e.changedTouches[0] : {};
    return e ? Math.max(0, t.pageX || e.pageX || e.clientX || 0) : 0;
  },
  mouseTop: function mouseTop(e) {
    var t = e && e.changedTouches ? e.changedTouches[0] : {};
    return e ? Math.max(0, t.pageY || e.pageY || e.clientY || 0) : 0;
  },
  centerX: function centerX(e) {
    // pointer axis from center
    return this.mouseLeft(e) - this.clientWidth() / 2;
  },
  centerY: function centerY(e) {
    // pointer axis from center
    return this.mouseTop(e) - this.clientHeight() / 2;
  },
  elementWidth: function elementWidth(e) {
    // border-box
    return e ? Math.max(0, e.offsetWidth || 0) : 0;
  },
  elementHeight: function elementHeight(e) {
    // border-box
    return e ? Math.max(0, e.offsetHeight || 0) : 0;
  },
  elementLeft: function elementLeft(e) {
    // from window
    return e ? e.getBoundingClientRect().left : 0;
  },
  elementTop: function elementTop(e) {
    // from window
    return e ? e.getBoundingClientRect().top : 0;
  },
  clampValue: function clampValue(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfdG9vbHRpcF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJDO0VBRW5CO0VBQ0EsaUJBQWFDLE9BQWIsRUFBdUI7SUFBQTs7SUFDckIsS0FBS0MsUUFBTCxHQUFnQkMsTUFBTSxDQUFDQyxNQUFQLENBQWM7TUFDNUI7TUFDQUMsUUFBUSxFQUFHLGNBRmlCO01BRzVCO01BQ0FDLFNBQVMsRUFBRyxjQUpnQjtNQUs1QjtNQUNBQyxVQUFVLEVBQUcsZUFOZTtNQU81QjtNQUNBQyxRQUFRLEVBQUcsYUFSaUI7TUFTNUI7TUFDQUMsV0FBVyxFQUFHLGdCQVZjO01BVzVCO01BQ0FDLFNBQVMsRUFBRyxHQVpnQjtNQWE1QjtNQUNBQyxTQUFTLEVBQUUsSUFkaUIsQ0FlNUI7O0lBZjRCLENBQWQsRUFnQmJWLE9BaEJhLENBQWhCO0lBa0JBLEtBQUtXLFFBQUwsR0FBaUIsSUFBakI7SUFDQSxLQUFLQyxRQUFMLEdBQWlCLElBQWpCO0lBQ0EsS0FBS0MsUUFBTCxHQUFpQixJQUFqQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsSUFBakI7SUFDQSxLQUFLQyxRQUFMLEdBQWlCLEtBQWpCO0lBQ0EsS0FBS0MsU0FBTCxHQUFpQixFQUFqQjtJQUNBLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlQyxJQUFmLENBQXFCLElBQXJCLENBQWpCOztJQUNBLEtBQUtDLEtBQUw7RUFDRCxFQUVEOzs7OztXQUNBLGdCQUFRQyxRQUFSLEVBQW1CO01BQ2pCLElBQUssT0FBT0EsUUFBUCxLQUFvQixRQUF6QixFQUFvQztRQUNsQyxLQUFLSixTQUFMLEdBQWlCSyxRQUFRLENBQUNDLGdCQUFULENBQTJCRixRQUEzQixLQUF5QyxFQUExRDtNQUNELENBRkQsTUFHSyxJQUFLLFFBQU9BLFFBQVAsTUFBb0IsUUFBcEIsSUFBZ0NBLFFBQVEsWUFBWUcsT0FB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b2R1bGVzL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9tb2R1bGVzL3ZpZXdwb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUb29sdGlwcyBDbGFzcy5cclxuICogQWRkcyBjdXN0b20gdG9vbHRpcHMgdG8gZWxlbWVudHMgb24gdGhlIHBhZ2UuXHJcbiAqL1xyXG5pbXBvcnQgVmlld3BvcnQgZnJvbSAnLi92aWV3cG9ydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIHtcclxuXHJcbiAgLy8gY2xhc3MgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcclxuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgLy8gY2xhc3MgdG8gYXBwbHkgdG8gdG9vbHRpcCBlbGVtZW50XHJcbiAgICAgIHRpcENsYXNzIDogJ3Rvb2x0aXAtd3JhcCcsXHJcbiAgICAgIC8vIGNsYXNzIHRvIGFwcGx5IHdoZW4gdG9vbHRpcCBpcyBwbGFjZWQgb24gdGhlIGxlZnRcclxuICAgICAgbGVmdENsYXNzIDogJ3Rvb2x0aXAtbGVmdCcsXHJcbiAgICAgIC8vIGNsYXNzIHRvIGFwcGx5IHdoZW4gdG9vbHRpcCBpcyBwbGFjZWQgb24gdGhlIHJpZ2h0XHJcbiAgICAgIHJpZ2h0Q2xhc3MgOiAndG9vbHRpcC1yaWdodCcsXHJcbiAgICAgIC8vIGNsYXNzIHRvIGFwcGx5IHdoZW4gdG9vbHRpcCBpcyBwbGFjZWQgb24gdGhlIHRvcFxyXG4gICAgICB0b3BDbGFzcyA6ICd0b29sdGlwLXRvcCcsXHJcbiAgICAgIC8vIGNsYXNzIHRvIGFwcGx5IHdoZW4gdG9vbHRpcCBpcyBwbGFjZWQgb24gdGhlIGJvdHRvbVxyXG4gICAgICBib3R0b21DbGFzcyA6ICd0b29sdGlwLWJvdHRvbScsXHJcbiAgICAgIC8vIGRlbGF5IHRvIHNob3cgdGhlIHRvb2x0aXBcclxuICAgICAgc2hvd0RlbGF5IDogMTAwLFxyXG4gICAgICAvLyBhdXRvIGhpZGUgZGVsYXlcclxuICAgICAgaGlkZURlbGF5OiAzMDAwLFxyXG4gICAgICAvLyAuLi5cclxuICAgIH0sIG9wdGlvbnMgKTtcclxuXHJcbiAgICB0aGlzLl90b29sdGlwICA9IG51bGw7XHJcbiAgICB0aGlzLl9ob3ZJdGVtICA9IG51bGw7XHJcbiAgICB0aGlzLl90aW1lb3V0ICA9IG51bGw7XHJcbiAgICB0aGlzLl9hdXRvaGlkZSA9IG51bGw7XHJcbiAgICB0aGlzLl92aXNpYmxlICA9IGZhbHNlO1xyXG4gICAgdGhpcy5fZWxlbWVudHMgPSBbXTtcclxuICAgIHRoaXMuX29uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCggdGhpcyApO1xyXG4gICAgdGhpcy5faW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0IHRhcmdldCBlbGVtZW50c1xyXG4gIHNlbGVjdCggc2VsZWN0b3IgKSB7XHJcbiAgICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSB8fCBbXTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09ICdvYmplY3QnICYmIHNlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCApIHtcclxuICAgICAgdGhpcy5fZWxlbWVudHMucHVzaCggc2VsZWN0b3IgKTtcclxuICAgIH1cclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IHRoaXMuX2VsZW1lbnRzLmxlbmd0aDsgKytpICkge1xyXG4gICAgICB0aGlzLl9zZXR1cEl0ZW0oIHRoaXMuX2VsZW1lbnRzWyBpIF0gKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hpZGVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgZWxlbWVudCBmcm9tIHRoZSBsaXN0XHJcbiAgdW5zZWxlY3QoIGVsZW1lbnQgKSB7XHJcbiAgICBpZiAoIHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCApIHtcclxuICAgICAgZm9yICggbGV0IGkgPSAwLCB0ID0gdGhpcy5fZWxlbWVudHMubGVuZ3RoOyBpIDwgdDsgKytpICkge1xyXG4gICAgICAgIGlmICggdGhpcy5fZWxlbWVudHNbIGkgXSA9PT0gZWxlbWVudCApIHtcclxuICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbSggdGhpcy5fZWxlbWVudHNbIGkgXSApO1xyXG4gICAgICAgICAgdGhpcy5fZWxlbWVudHMuc3BsaWNlKCBpLCAxICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNsZWFudXAgdGhpcyBpbnN0YW5jZVxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbGVtZW50cy5sZW5ndGg7ICsraSApIHtcclxuICAgICAgdGhpcy5fcmVzZXRJdGVtKCB0aGlzLl9lbGVtZW50c1sgaSBdICk7XHJcbiAgICB9XHJcbiAgICBpZiAoIGRvY3VtZW50LmJvZHkuY29udGFpbnMoIHRoaXMuX3Rvb2x0aXAgKSApIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCggdGhpcy5fdG9vbHRpcCApO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCApO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLl9vblNjcm9sbCApO1xyXG4gICAgdGhpcy5fZWxlbWVudHMgPSBbXTtcclxuICAgIHRoaXMuX3Rvb2x0aXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gaW5pdGxhaXplIGVsZW1lbnRzXHJcbiAgX2luaXQoKSB7XHJcbiAgICB0aGlzLl90b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcclxuICAgIHRoaXMuX3Rvb2x0aXAuY2xhc3NOYW1lID0gdGhpcy5fb3B0aW9ucy50aXBDbGFzcztcclxuICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGVbJ2Rpc3BsYXknXSA9ICdibG9jayc7XHJcbiAgICB0aGlzLl90b29sdGlwLnN0eWxlWydwb3NpdGlvbiddID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGVbJ3BvaW50ZXItZXZlbnRzJ10gPSAnbm9uZSc7XHJcbiAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5fdG9vbHRpcCApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzLl9vblNjcm9sbCApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCB0aGlzLl9vblNjcm9sbCApO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0IGFuIGVsZW1lbnQgdG8gaGF2ZSB0b29sdGlwLCBpZiBub3QgYWxyZWR5IHNldHVwXHJcbiAgX3NldHVwSXRlbSggaXRlbSApIHtcclxuICAgIGlmICggaXRlbSAmJiBpdGVtIGluc3RhbmNlb2YgRWxlbWVudCApIHtcclxuICAgICAgaWYgKCBpdGVtLmhhc0F0dHJpYnV0ZSggJ3RpdGxlJyApICkge1xyXG4gICAgICAgIGNvbnN0IF9wYXNzaXZlID0geyBwYXNzaXZlOiB0cnVlIH07XHJcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoICdkYXRhLXRpcCcsIGl0ZW0uZ2V0QXR0cmlidXRlKCAndGl0bGUnICkgfHwgJycgKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSggJ3RpdGxlJyApO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCBlID0+IHsgdGhpcy5fb25FbnRlciggZSApOyB9LCBfcGFzc2l2ZSApO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBlID0+IHsgdGhpcy5fb25FbnRlciggZSApOyB9LCBfcGFzc2l2ZSApO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCBlID0+IHsgdGhpcy5fb25MZWF2ZSggZSApOyB9LCBfcGFzc2l2ZSApO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgZSA9PiB7IHRoaXMuX29uTGVhdmUoIGUgKTsgfSwgX3Bhc3NpdmUgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHRvb2x0aXAgZXZlbnRzIGZyb20gZWxlbWVudCwgaWYgbmVlZGVkXHJcbiAgX3Jlc2V0SXRlbSggaXRlbSApIHtcclxuICAgIGlmICggaXRlbSAmJiBpdGVtIGluc3RhbmNlb2YgRWxlbWVudCApIHtcclxuICAgICAgaWYgKCBpdGVtLmhhc0F0dHJpYnV0ZSggJ2RhdGEtdGlwJyApICkge1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCAndGl0bGUnLCBpdGVtLmdldEF0dHJpYnV0ZSggJ2RhdGEtdGlwJyApIHx8ICcnICk7XHJcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLXRpcCcgKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWVudGVyJywgZSA9PiB7IHRoaXMuX29uRW50ZXIoIGUgKTsgfSApO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBlID0+IHsgdGhpcy5fb25FbnRlciggZSApOyB9ICk7XHJcbiAgICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2VsZWF2ZScsIGUgPT4geyB0aGlzLl9vbkxlYXZlKCBlICk7IH0gKTtcclxuICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIGUgPT4geyB0aGlzLl9vbkxlYXZlKCBlICk7IH0gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZGVjaWRlcyB3aGVyZSB0byBwbGFjZSB0aGUgdG9vbHRpcCBpbiByZWxhdGlvbiB0byBpdGVtIGFuZCBzY3JlZW4gYm91bmRzXHJcbiAgX3Nob3dUb29sdGlwKCkge1xyXG4gICAgaWYgKCB0aGlzLl90b29sdGlwICYmIHRoaXMuX2hvdkl0ZW0gKSB7XHJcbiAgICAgIGxldCBib3ggICAgICAgICA9IHRoaXMuX2hvdkl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGxldCBjZW50ZXJYICAgICA9IGJveC5sZWZ0ICsgKCB0aGlzLl9ob3ZJdGVtLm9mZnNldFdpZHRoIC0gdGhpcy5fdG9vbHRpcC5vZmZzZXRXaWR0aCApIC8gMjtcclxuICAgICAgbGV0IGNlbnRlclkgICAgID0gYm94LnRvcCArICggdGhpcy5faG92SXRlbS5vZmZzZXRIZWlnaHQgLSB0aGlzLl90b29sdGlwLm9mZnNldEhlaWdodCApIC8gMjtcclxuICAgICAgbGV0IGxlZnRQb3MgICAgID0gYm94LmxlZnQgLSB0aGlzLl90b29sdGlwLm9mZnNldFdpZHRoO1xyXG4gICAgICBsZXQgcmlnaHRQb3MgICAgPSBib3gubGVmdCArIHRoaXMuX2hvdkl0ZW0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGxldCB0b3BQb3MgICAgICA9IGJveC50b3AgLSB0aGlzLl90b29sdGlwLm9mZnNldEhlaWdodDtcclxuICAgICAgbGV0IGJvdHRvbVBvcyAgID0gYm94LnRvcCArIHRoaXMuX2hvdkl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBsZXQgdGlwSGFsZiAgICAgPSB0aGlzLl90b29sdGlwLm9mZnNldFdpZHRoIC8gMjtcclxuICAgICAgbGV0IGJveENlbnRlciAgID0gYm94LnRvcCAtICggdGhpcy5faG92SXRlbS5vZmZzZXRIZWlnaHQgLyAyICk7XHJcbiAgICAgIGxldCBoYWxmU2NyZWVuICA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgIGxldCBpc05lYXJMZWZ0ICA9ICggYm94LmxlZnQgPCB0aXBIYWxmICk7XHJcbiAgICAgIGxldCBpc05lYXJSaWdodCA9ICggKCBWaWV3cG9ydC5jbGllbnRXaWR0aCgpIC0gcmlnaHRQb3MgKSA8IHRpcEhhbGYgKTtcclxuXHJcbiAgICAgIGxldCBjbHNzID0gdGhpcy5fb3B0aW9ucy50b3BDbGFzcztcclxuICAgICAgbGV0IGxlZnQgPSBjZW50ZXJYO1xyXG4gICAgICBsZXQgdG9wICA9IHRvcFBvcztcclxuXHJcbiAgICAgIC8vIG1vdmUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICBpZiAoIGJveENlbnRlciA8IGhhbGZTY3JlZW4gKSB7XHJcbiAgICAgICAgY2xzcyA9IHRoaXMuX29wdGlvbnMuYm90dG9tQ2xhc3M7XHJcbiAgICAgICAgbGVmdCA9IGNlbnRlclg7XHJcbiAgICAgICAgdG9wICA9IGJvdHRvbVBvcztcclxuICAgICAgfVxyXG4gICAgICAvLyBtb3ZlIHRvIHRoZSByaWdodFxyXG4gICAgICBpZiAoIGlzTmVhckxlZnQgJiYgIWlzTmVhclJpZ2h0ICkge1xyXG4gICAgICAgIGNsc3MgPSB0aGlzLl9vcHRpb25zLnJpZ2h0Q2xhc3M7XHJcbiAgICAgICAgbGVmdCA9IHJpZ2h0UG9zO1xyXG4gICAgICAgIHRvcCAgPSBjZW50ZXJZO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIG1vdmUgdG8gdGhlIGxlZnRcclxuICAgICAgaWYgKCBpc05lYXJSaWdodCAmJiAhaXNOZWFyTGVmdCApIHtcclxuICAgICAgICBjbHNzID0gdGhpcy5fb3B0aW9ucy5sZWZ0Q2xhc3M7XHJcbiAgICAgICAgbGVmdCA9IGxlZnRQb3M7XHJcbiAgICAgICAgdG9wICA9IGNlbnRlclk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gc2hvdyB0b29sdGlwXHJcbiAgICAgIGlmICggbGVmdCA+IDEgJiYgdG9wID4gMSAmJiB0aGlzLl90b29sdGlwLmlubmVySFRNTCApIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwLmNsYXNzTmFtZSA9IHRoaXMuX29wdGlvbnMudGlwQ2xhc3MgKyAnICcgKyBjbHNzO1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGVbJ2xlZnQnXSA9ICggVmlld3BvcnQuc2Nyb2xsTGVmdCgpICsgbGVmdCApICsncHgnO1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGVbJ3RvcCddID0gKCBWaWV3cG9ydC5zY3JvbGxUb3AoKSArIHRvcCApICsncHgnO1xyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBtb3ZlIHRvb2x0aXAgb2JqZWN0IG9mZiBzY3JlZW4sIHJlc2V0IGNvbnRlbnQgYW5kIGNsYXNzXHJcbiAgX2hpZGVUb29sdGlwKCkge1xyXG4gICAgaWYgKCB0aGlzLl90b29sdGlwICkge1xyXG4gICAgICB0aGlzLl90b29sdGlwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB0aGlzLl90b29sdGlwLmNsYXNzTmFtZSA9IHRoaXMuX29wdGlvbnMudGlwQ2xhc3M7XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGVbJ2xlZnQnXSA9ICctMTAwMHB4JztcclxuICAgICAgdGhpcy5fdG9vbHRpcC5zdHlsZVsndG9wJ10gPSAnLTEwMDBweCc7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHdoZW4gbW91c2UgZW50ZXJzIHRhcmdldCBlbGVtZW50XHJcbiAgX29uRW50ZXIoIGUgKSB7XHJcbiAgICBsZXQgaXRlbSAgPSBlLnRhcmdldDtcclxuICAgIGxldCB0aXRsZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKCAnZGF0YS10aXAnICk7XHJcblxyXG4gICAgaWYgKCB0aXRsZSApIHtcclxuICAgICAgdGhpcy5faG92SXRlbSA9IGl0ZW07XHJcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaW5uZXJIVE1MID0gdGl0bGU7XHJcblxyXG4gICAgICBpZiAoIHRoaXMuX3RpbWVvdXQgKSBjbGVhclRpbWVvdXQoIHRoaXMuX3RpbWVvdXQgKTtcclxuICAgICAgdGhpcy5fdGltZW91dCA9IHNldFRpbWVvdXQoIHRoaXMuX3Nob3dUb29sdGlwLmJpbmQoIHRoaXMgKSwgdGhpcy5fb3B0aW9ucy5zaG93RGVsYXkgKTtcclxuXHJcbiAgICAgIGlmICggdGhpcy5fYXV0b2hpZGUgKSBjbGVhclRpbWVvdXQoIHRoaXMuX2F1dG9oaWRlICk7XHJcbiAgICAgIHRoaXMuX2F1dG9oaWRlID0gc2V0VGltZW91dCggdGhpcy5faGlkZVRvb2x0aXAuYmluZCggdGhpcyApLCB0aGlzLl9vcHRpb25zLmhpZGVEZWxheSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gd2hlbiBtb3VzZSBsZWF2ZXMgdGFyZ2V0IGVsZW1lbnRcclxuICBfb25MZWF2ZSggZSApIHtcclxuICAgIGlmICggdGhpcy5fdGltZW91dCApIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLl90aW1lb3V0ICk7XHJcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faG92SXRlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gaGlkZSB0b29sdGlwIG92ZXIgZml4ZWQgZWxlbWVudHMgd2hlbiBzY3JvbGxlZFxyXG4gIF9vblNjcm9sbCggZSApIHtcclxuICAgIGlmICggdGhpcy5fdmlzaWJsZSApIHtcclxuICAgICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBWaWV3cG9ydCBPYmplY3QuXHJcbiAqIEhlbHBlciBmb3Igd29ya2luZyB3aXRoIHZpZXdwb3J0IGRhdGEuXHJcbiAqL1xyXG5jb25zdCBfdyA9IHdpbmRvdyB8fCB7fTtcclxuY29uc3QgX3MgPSB3aW5kb3cuc2NyZWVuIHx8IHt9O1xyXG5jb25zdCBfZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCB7fTtcclxuY29uc3QgX2IgPSBkb2N1bWVudC5ib2R5IHx8IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNjcmVlbldpZHRoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBNYXRoLm1heCggMCwgX3Mud2lkdGggfHwgX3MuYXZhaWxXaWR0aCB8fCAwICk7XHJcbiAgfSxcclxuICBzY3JlZW5IZWlnaHQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KCAwLCBfcy5oZWlnaHQgfHwgX3MuYXZhaWxIZWlnaHQgfHwgMCApO1xyXG4gIH0sXHJcbiAgY2xpZW50V2lkdGg6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KCAwLCBfdy5pbm5lcldpZHRoIHx8IF9kLmNsaWVudFdpZHRoIHx8IF9iLmNsaWVudFdpZHRoIHx8IDAgKTtcclxuICB9LFxyXG4gIGNsaWVudEhlaWdodDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIDAsIF93LmlubmVySGVpZ2h0IHx8IF9kLmNsaWVudEhlaWdodCB8fCBfYi5jbGllbnRIZWlnaHQgfHwgMCApO1xyXG4gIH0sXHJcbiAgcGFnZVdpZHRoOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBNYXRoLm1heCggMCwgX2Iuc2Nyb2xsV2lkdGggfHwgMCwgX2Iub2Zmc2V0V2lkdGggfHwgMCwgX2QuY2xpZW50V2lkdGggfHwgMCwgX2Qub2Zmc2V0V2lkdGggfHwgMCwgX2Quc2Nyb2xsV2lkdGggfHwgMCApO1xyXG4gIH0sXHJcbiAgcGFnZUhlaWdodDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIDAsIF9iLnNjcm9sbEhlaWdodCB8fCAwLCBfYi5vZmZzZXRIZWlnaHQgfHwgMCwgX2QuY2xpZW50SGVpZ2h0IHx8IDAsIF9kLm9mZnNldEhlaWdodCB8fCAwLCBfZC5zY3JvbGxIZWlnaHQgfHwgMCApO1xyXG4gIH0sXHJcbiAgcGFnZUxlZnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KCAwLCBfZC5jbGllbnRMZWZ0IHx8IF9iLmNsaWVudExlZnQgfHwgMCApO1xyXG4gIH0sXHJcbiAgcGFnZVRvcDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIDAsIF9kLmNsaWVudFRvcCB8fCBfYi5jbGllbnRUb3AgfHwgMCApO1xyXG4gIH0sXHJcbiAgc2Nyb2xsTGVmdDogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIDAsIF93LnBhZ2VYT2Zmc2V0IHx8IF9kLnNjcm9sbExlZnQgfHwgX2Iuc2Nyb2xsTGVmdCB8fCAwICkgLSB0aGlzLnBhZ2VMZWZ0KCk7XHJcbiAgfSxcclxuICBzY3JvbGxUb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KCAwLCBfdy5wYWdlWU9mZnNldCB8fCBfZC5zY3JvbGxUb3AgfHwgX2Iuc2Nyb2xsVG9wIHx8IDAgKSAtIHRoaXMucGFnZVRvcCgpO1xyXG4gIH0sXHJcbiAgc2Nyb2xsUmlnaHQ6IGZ1bmN0aW9uKCkgeyAvLyBtYXggcmlnaHRcclxuICAgIHJldHVybiBNYXRoLm1heCggMCwgTWF0aC5mbG9vciggdGhpcy5wYWdlV2lkdGgoKSAtIHRoaXMuY2xpZW50V2lkdGgoKSApICk7XHJcbiAgfSxcclxuICBzY3JvbGxCb3R0b206IGZ1bmN0aW9uKCkgeyAvLyBtYXggYm90dG9tXHJcbiAgICByZXR1cm4gTWF0aC5tYXgoIDAsIE1hdGguZmxvb3IoIHRoaXMucGFnZUhlaWdodCgpIC0gdGhpcy5jbGllbnRIZWlnaHQoKSApICk7XHJcbiAgfSxcclxuICBtb3VzZUxlZnQ6IGZ1bmN0aW9uKCBlICkge1xyXG4gICAgdmFyIHQgPSAoIGUgJiYgZS5jaGFuZ2VkVG91Y2hlcyApID8gZS5jaGFuZ2VkVG91Y2hlc1sgMCBdIDoge307XHJcbiAgICByZXR1cm4gZSA/IE1hdGgubWF4KCAwLCB0LnBhZ2VYIHx8IGUucGFnZVggfHwgZS5jbGllbnRYIHx8IDAgKSA6IDA7XHJcbiAgfSxcclxuICBtb3VzZVRvcDogZnVuY3Rpb24oIGUgKSB7XHJcbiAgICB2YXIgdCA9ICggZSAmJiBlLmNoYW5nZWRUb3VjaGVzICkgPyBlLmNoYW5nZWRUb3VjaGVzWyAwIF0gOiB7fTtcclxuICAgIHJldHVybiBlID8gTWF0aC5tYXgoIDAsIHQucGFnZVkgfHwgZS5wYWdlWSB8fCBlLmNsaWVudFkgfHwgMCApIDogMDtcclxuICB9LFxyXG4gIGNlbnRlclg6IGZ1bmN0aW9uKCBlICkgeyAvLyBwb2ludGVyIGF4aXMgZnJvbSBjZW50ZXJcclxuICAgIHJldHVybiAoIHRoaXMubW91c2VMZWZ0KCBlICkgLSAoIHRoaXMuY2xpZW50V2lkdGgoKSAvIDIgKSApO1xyXG4gIH0sXHJcbiAgY2VudGVyWTogZnVuY3Rpb24oIGUgKSB7IC8vIHBvaW50ZXIgYXhpcyBmcm9tIGNlbnRlclxyXG4gICAgcmV0dXJuICggdGhpcy5tb3VzZVRvcCggZSApIC0gKCB0aGlzLmNsaWVudEhlaWdodCgpIC8gMiApICk7XHJcbiAgfSxcclxuICBlbGVtZW50V2lkdGg6IGZ1bmN0aW9uKCBlICkgeyAvLyBib3JkZXItYm94XHJcbiAgICByZXR1cm4gZSA/IE1hdGgubWF4KCAwLCBlLm9mZnNldFdpZHRoIHx8IDAgKSA6IDA7XHJcbiAgfSxcclxuICBlbGVtZW50SGVpZ2h0OiBmdW5jdGlvbiggZSApIHsgLy8gYm9yZGVyLWJveFxyXG4gICAgcmV0dXJuIGUgPyBNYXRoLm1heCggMCwgZS5vZmZzZXRIZWlnaHQgfHwgMCApIDogMDtcclxuICB9LFxyXG4gIGVsZW1lbnRMZWZ0OiBmdW5jdGlvbiggZSApIHsgLy8gZnJvbSB3aW5kb3dcclxuICAgIHJldHVybiBlID8gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IDogMDtcclxuICB9LFxyXG4gIGVsZW1lbnRUb3A6IGZ1bmN0aW9uKCBlICkgeyAvLyBmcm9tIHdpbmRvd1xyXG4gICAgcmV0dXJuIGUgPyBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDA7XHJcbiAgfSxcclxuICBjbGFtcFZhbHVlOiBmdW5jdGlvbiggdmFsdWUsIG1pbiwgbWF4ICkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KCBtaW4sIE1hdGgubWluKCB2YWx1ZSwgbWF4ICkgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlZpZXdwb3J0IiwiVG9vbHRpcCIsIm9wdGlvbnMiLCJfb3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInRpcENsYXNzIiwibGVmdENsYXNzIiwicmlnaHRDbGFzcyIsInRvcENsYXNzIiwiYm90dG9tQ2xhc3MiLCJzaG93RGVsYXkiLCJoaWRlRGVsYXkiLCJfdG9vbHRpcCIsIl9ob3ZJdGVtIiwiX3RpbWVvdXQiLCJfYXV0b2hpZGUiLCJfdmlzaWJsZSIsIl9lbGVtZW50cyIsIl9vblNjcm9sbCIsImJpbmQiLCJfaW5pdCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiRWxlbWVudCIsInB1c2giLCJpIiwibGVuZ3RoIiwiX3NldHVwSXRlbSIsIl9oaWRlVG9vbHRpcCIsImVsZW1lbnQiLCJ0IiwiX3Jlc2V0SXRlbSIsInNwbGljZSIsImJvZHkiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJoYXNBdHRyaWJ1dGUiLCJfcGFzc2l2ZSIsInBhc3NpdmUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlIiwiX29uRW50ZXIiLCJfb25MZWF2ZSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNlbnRlclgiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJjZW50ZXJZIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibGVmdFBvcyIsInJpZ2h0UG9zIiwidG9wUG9zIiwiYm90dG9tUG9zIiwidGlwSGFsZiIsImJveENlbnRlciIsImhhbGZTY3JlZW4iLCJpbm5lckhlaWdodCIsImlzTmVhckxlZnQiLCJpc05lYXJSaWdodCIsImNsaWVudFdpZHRoIiwiY2xzcyIsImlubmVySFRNTCIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJ0YXJnZXQiLCJ0aXRsZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfc2hvd1Rvb2x0aXAiLCJfdyIsIl9zIiwic2NyZWVuIiwiX2QiLCJkb2N1bWVudEVsZW1lbnQiLCJfYiIsInNjcmVlbldpZHRoIiwiTWF0aCIsIm1heCIsIndpZHRoIiwiYXZhaWxXaWR0aCIsInNjcmVlbkhlaWdodCIsImhlaWdodCIsImF2YWlsSGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudEhlaWdodCIsInBhZ2VXaWR0aCIsInNjcm9sbFdpZHRoIiwicGFnZUhlaWdodCIsInNjcm9sbEhlaWdodCIsInBhZ2VMZWZ0IiwiY2xpZW50TGVmdCIsInBhZ2VUb3AiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsUmlnaHQiLCJmbG9vciIsInNjcm9sbEJvdHRvbSIsIm1vdXNlTGVmdCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJjbGllbnRYIiwibW91c2VUb3AiLCJwYWdlWSIsImNsaWVudFkiLCJlbGVtZW50V2lkdGgiLCJlbGVtZW50SGVpZ2h0IiwiZWxlbWVudExlZnQiLCJlbGVtZW50VG9wIiwiY2xhbXBWYWx1ZSIsInZhbHVlIiwibWluIl0sInNvdXJjZVJvb3QiOiIifQ==