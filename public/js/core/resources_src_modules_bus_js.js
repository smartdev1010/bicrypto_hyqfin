"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_bus_js"],{

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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfYnVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDcUJBO0VBRW5CO0FBQ0Y7QUFDQTtFQUNFLGVBQWM7SUFBQTs7SUFDWixLQUFLQyxPQUFMLEdBQWUsRUFBZjtFQUNEO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7V0FDRSxZQUFJQyxJQUFKLEVBQVVDLFFBQVYsRUFBcUI7TUFDbkIsSUFBSyxDQUFDRCxJQUFELElBQVMsT0FBT0EsSUFBUCxLQUFnQixRQUE5QixFQUF5QztNQUN6QyxJQUFLLE9BQU9DLFFBQVAsS0FBb0IsVUFBekIsRUFBc0M7TUFDdEMsSUFBSyxDQUFDLEtBQUtGLE9BQUwsQ0FBYUcsY0FBYixDQUE2QkYsSUFBN0IsQ0FBTixFQUE0QyxLQUFLRCxPQUFMLENBQWNDLElBQWQsSUFBdUIsRUFBdkI7O01BQzVDLEtBQUtELE9BQUwsQ0FBY0MsSUFBZCxFQUFxQkcsSUFBckIsQ0FBMkJGLFFBQTNCO0lBQ0Q7SUFFRDtBQUNGO0FBQ0E7Ozs7V0FDRSxnQkFBTztNQUNMLElBQUlHLElBQUksR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVlDLFNBQVosQ0FBWDtNQUNBLElBQUlQLElBQUksR0FBR0ksSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ssS0FBTCxFQUFkLEdBQTZCLEVBQXhDOztNQUVBLElBQUssS0FBS1YsT0FBTCxDQUFhRyxjQUFiLENBQTZCRixJQUE3QixDQUFMLEVBQTJDO1FBQ3pDLEtBQU0sSUFBSVUsQ0FBQyxHQUFHLENBQWQsRUFBaUJBLENBQUMsR0FBRyxLQUFLWCxPQUFMLENBQWNDLElBQWQsRUFBcUJRLE1BQTFDLEVBQWtELEVBQUVFLENBQXBELEVBQXdEO1VBQ3RELElBQUlDLEVBQUUsR0FBRyxLQUFLWixPQUFMLENBQWNDLElBQWQsRUFBc0JVLENBQXRCLENBQVQ7VUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVVELEVBQVYsRUFBY1AsSUFBZDtRQUNEO01BQ0Y7O01BQ0RBLElBQUksR0FBR1MsU0FBUCxDQVZLLENBVWE7SUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL21vZHVsZXMvYnVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCYXNpYyBldmVudCBidXMgY2xhc3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1cyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgbmFtZSAgICAgIEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgY2FsbGJhY2sgIEV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICovXHJcbiAgb24oIG5hbWUsIGNhbGxiYWNrICkge1xyXG4gICAgaWYgKCAhbmFtZSB8fCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgKSByZXR1cm47XHJcbiAgICBpZiAoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHJldHVybjtcclxuICAgIGlmICggIXRoaXMuX2V2ZW50cy5oYXNPd25Qcm9wZXJ0eSggbmFtZSApICkgdGhpcy5fZXZlbnRzWyBuYW1lIF0gPSBbXTtcclxuICAgIHRoaXMuX2V2ZW50c1sgbmFtZSBdLnB1c2goIGNhbGxiYWNrICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGFuIGV2ZW50IGJ5IG5hbWUgKGZpcnN0IGFyZykgd2l0aCByZXN0IG9mIGFyZ3MgcGFzc2VkIHRvIGl0XHJcbiAgICovXHJcbiAgZW1pdCgpIHtcclxuICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbSggYXJndW1lbnRzICk7XHJcbiAgICBsZXQgbmFtZSA9IGFyZ3MubGVuZ3RoID8gYXJncy5zaGlmdCgpIDogJyc7XHJcblxyXG4gICAgaWYgKCB0aGlzLl9ldmVudHMuaGFzT3duUHJvcGVydHkoIG5hbWUgKSApIHtcclxuICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzWyBuYW1lIF0ubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgICAgbGV0IGNiID0gdGhpcy5fZXZlbnRzWyBuYW1lIF1bIGkgXTtcclxuICAgICAgICBjYi5hcHBseSggY2IsIGFyZ3MgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXJncyA9IHVuZGVmaW5lZDsgLy8gZ2NcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJ1cyIsIl9ldmVudHMiLCJuYW1lIiwiY2FsbGJhY2siLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJhcmdzIiwiQXJyYXkiLCJmcm9tIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2hpZnQiLCJpIiwiY2IiLCJhcHBseSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=