"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_modules_store_js"],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX21vZHVsZXNfc3RvcmVfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlO0VBRWI7RUFDQUEsSUFBSSxFQUFNLGNBSEc7RUFJYkMsT0FBTyxFQUFHLFdBSkc7RUFLYkMsSUFBSSxFQUFNLENBTEc7RUFPYjtFQUNBQyxPQVJhLG1CQVFKQyxHQVJJLEVBUUNDLElBUkQsRUFRT0MsSUFSUCxFQVFjO0lBQ3pCLE9BQU8sS0FBS0MsS0FBTCxDQUFZSCxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsQ0FBUDtFQUNELENBVlk7RUFZYjtFQUNBRSxPQWJhLG1CQWFKSixHQWJJLEVBYUU7SUFDYixLQUFLSyxNQUFMOztJQUNBLE9BQU8sS0FBS0MsTUFBTCxDQUFhTixHQUFiLENBQVA7RUFDRCxDQWhCWTtFQWtCYjtFQUNBTyxVQW5CYSxzQkFtQkRQLEdBbkJDLEVBbUJLO0lBQ2hCLE9BQU8sS0FBS1EsT0FBTCxDQUFjUixHQUFkLENBQVA7RUFDRCxDQXJCWTtFQXVCYjtFQUNBUyxJQXhCYSxnQkF3QlBULEdBeEJPLEVBd0JEO0lBQ1YsT0FBTyxLQUFLSCxPQUFMLEdBQWVhLE1BQU0sQ0FBRVYsR0FBRyxJQUFJLEVBQVQsQ0FBTixDQUFvQlcsT0FBcEIsQ0FBNkIsU0FBN0IsRUFBd0MsR0FBeEMsQ0FBdEI7RUFDRCxDQTFCWTtFQTRCYjtFQUNBQyxNQTdCYSxrQkE2QkxDLENBN0JLLEVBNkJEO0lBQ1YsSUFBSUMsS0FBSyxHQUFHRCxDQUFDLENBQUNFLElBQUYsR0FBYSxDQUF6Qjs7SUFDQSxJQUFJQyxLQUFLLEdBQUdILENBQUMsQ0FBQ0ksSUFBRixJQUFhLGNBQXpCOztJQUNBLElBQUlDLEtBQUssR0FBR0wsQ0FBQyxDQUFDTSxPQUFGLElBQWEsa0JBQWtCLEtBQUt2QixJQUF2QixHQUE2QixlQUF0RDs7SUFDQXdCLE9BQU8sQ0FBQ0MsS0FBUixDQUFlLG1CQUFrQlAsS0FB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LENBQWQ7O1FBQ0EsSUFBSyxDQUFDK0IsS0FBSyxDQUFDZixLQUFQLElBQWdCLENBQUNlLEtBQUssQ0FBQzFDLElBQTVCLEVBQW1DLFNBUkssQ0FRSztRQUU3Qzs7UUFDQSxJQUFNMkMsS0FBSyxHQUFHLENBQUVoQixLQUFLLEdBQUdlLEtBQUssQ0FBQ2YsS0FBaEIsSUFBMEIsSUFBeEM7O1FBQ0EsSUFBS2dCLEtBQUssR0FBR0QsS0FBSyxDQUFDMUMsSUFBbkIsRUFBMEIsU0FaYyxDQVlKOztRQUNwQ3lCLE1BQU0sQ0FBQ2EsVUFBUCxDQUFtQjNCLElBQW5CO01BQ0Q7O01BQ0QsT0FBTyxJQUFQO0lBQ0QsQ0FyQkQsQ0FzQkEsT0FBUUksQ0FBUixFQUFZO01BQ1YsT0FBTyxLQUFLRCxNQUFMLENBQWFDLENBQWIsQ0FBUDtJQUNEO0VBQ0Y7QUExR1ksQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvbW9kdWxlcy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogV2ViIGNhY2hlIGhhbmRsZXJcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG4gIC8vIGxvY2FsIHByb3BzXHJcbiAgX2FwaSAgICA6ICdsb2NhbFN0b3JhZ2UnLFxyXG4gIF9wcmVmaXggOiAnd2ViY2FjaGVfJyxcclxuICBfdHRsICAgIDogMCxcclxuXHJcbiAgLy8gc2F2ZSBkYXRhIHRvIGNhY2hlXHJcbiAgc2V0RGF0YSgga2V5LCBkYXRhLCB0aW1lICkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NhdmUoIGtleSwgZGF0YSwgdGltZSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGdldCBzYXZlZCBkYXRhIGZvciBhIGtleSBhcyBpc1xyXG4gIGdldERhdGEoIGtleSApIHtcclxuICAgIHRoaXMuX2NsZWFuKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2goIGtleSApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGRlbGV0ZSBzYXZlZCBkYXRhIGZvciBrZXlcclxuICBkZWxldGVEYXRhKCBrZXkgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlKCBrZXkgKTtcclxuICB9LFxyXG5cclxuICAvLyBzYW50aXplciBmb3Iga2V5c1xyXG4gIF9rZXkoIGtleSApIHtcclxuICAgIHJldHVybiB0aGlzLl9wcmVmaXggKyBTdHJpbmcoIGtleSB8fCAnJyApLnJlcGxhY2UoIC9bXlxcd10rL2csICdfJyApO1xyXG4gIH0sXHJcblxyXG4gIC8vIGVycm9yIGhhbmRsZXJcclxuICBfZXJyb3IoIGUgKSB7XHJcbiAgICBsZXQgX2NvZGUgPSBlLmNvZGUgICAgfCAgMDtcclxuICAgIGxldCBfbmFtZSA9IGUubmFtZSAgICB8fCAnVW5rbm93bkVycm9yJztcclxuICAgIGxldCBfaW5mbyA9IGUubWVzc2FnZSB8fCAnUHJvYmxlbSB3aXRoICcgKyB0aGlzLl9hcGkgKycgYnJvd3NlciBBUEkuJyA7XHJcbiAgICBjb25zb2xlLmVycm9yKCAnU3RvcmFnZUVycm9yICgnKyBfY29kZSArJyk6JywgX2luZm8sICcoJysgX25hbWUgKycpLicgKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9LFxyXG5cclxuICAvLyB0cnkgc2F2aW5nIHRoZSBkYXRhIGFuZCBoYW5kbGUgYW55IGVycm9yc1xyXG4gIF9zYXZlKCBrZXksIGRhdGEsIHR0bCApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IF9zdG9yZSAgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgID0gdGhpcy5fa2V5KCBrZXkgKTtcclxuICAgICAgY29uc3QgX3RpbWUgICA9IERhdGUubm93KCk7XHJcbiAgICAgIGNvbnN0IF90dGwgICAgPSBwYXJzZUludCggdHRsICkgfHwgdGhpcy5fdHRsO1xyXG4gICAgICBjb25zdCBfc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoIHsgX3RpbWUsIF90dGwsIGRhdGEgfSApO1xyXG4gICAgICBfc3RvcmUuc2V0SXRlbSggX2tleSwgX3N0cmluZyApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gdHJ5IGZldGNoaW5nIGRhdGEgZm9yIGtleVxyXG4gIF9mZXRjaCgga2V5ICkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlICA9IHdpbmRvd1sgdGhpcy5fYXBpIF07XHJcbiAgICAgIGNvbnN0IF9rZXkgICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBjb25zdCBfcGFyc2VkID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgIHJldHVybiAoIF9wYXJzZWQgJiYgX3BhcnNlZC5kYXRhICkgPyBfcGFyc2VkLmRhdGEgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyB0cnkgZGVsZXRpbmcgZGF0YSBieSBrZXlcclxuICBfZGVsZXRlKCBrZXkgKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBfc3RvcmUgPSB3aW5kb3dbIHRoaXMuX2FwaSBdO1xyXG4gICAgICBjb25zdCBfa2V5ICAgPSB0aGlzLl9rZXkoIGtleSApO1xyXG4gICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCBlICk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gY2xlYW4gYWxsIGV4cGlyZWQgaXRlbXMgZnJvbSBzdG9yYWdlXHJcbiAgX2NsZWFuKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgX3N0b3JlID0gd2luZG93WyB0aGlzLl9hcGkgXTtcclxuICAgICAgY29uc3QgX3RpbWUgID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgIC8vIGxvb3Aga2V5c1xyXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBfc3RvcmUubGVuZ3RoOyBpKysgKSB7XHJcblxyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBpdCdzIGEga2V5IG1hbmFnZWQgYnkgdGhpcyBvYmplY3RcclxuICAgICAgICBjb25zdCBfa2V5ID0gX3N0b3JlLmtleSggaSApO1xyXG4gICAgICAgIGlmICggX2tleS5pbmRleE9mKCB0aGlzLl9wcmVmaXggKSA8IDAgKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGRhdGEgZm9yIGtleVxyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gSlNPTi5wYXJzZSggX3N0b3JlLmdldEl0ZW0oIF9rZXkgKSB8fCAne30nICk7XHJcbiAgICAgICAgaWYgKCAhX2RhdGEuX3RpbWUgfHwgIV9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gbmVlZCB0aGVzZVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIGFuZCBkZWxldGUga2V5XHJcbiAgICAgICAgY29uc3QgX3NlY3MgPSAoIF90aW1lIC0gX2RhdGEuX3RpbWUgKSAvIDEwMDA7XHJcbiAgICAgICAgaWYgKCBfc2VjcyA8IF9kYXRhLl90dGwgKSBjb250aW51ZTsgLy8gc3RpbGwgZnJlc2hcclxuICAgICAgICBfc3RvcmUucmVtb3ZlSXRlbSggX2tleSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoIGUgKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiX2FwaSIsIl9wcmVmaXgiLCJfdHRsIiwic2V0RGF0YSIsImtleSIsImRhdGEiLCJ0aW1lIiwiX3NhdmUiLCJnZXREYXRhIiwiX2NsZWFuIiwiX2ZldGNoIiwiZGVsZXRlRGF0YSIsIl9kZWxldGUiLCJfa2V5IiwiU3RyaW5nIiwicmVwbGFjZSIsIl9lcnJvciIsImUiLCJfY29kZSIsImNvZGUiLCJfbmFtZSIsIm5hbWUiLCJfaW5mbyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJ0dGwiLCJfc3RvcmUiLCJ3aW5kb3ciLCJfdGltZSIsIkRhdGUiLCJub3ciLCJwYXJzZUludCIsIl9zdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIl9wYXJzZWQiLCJwYXJzZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJfZGF0YSIsIl9zZWNzIl0sInNvdXJjZVJvb3QiOiIifQ==