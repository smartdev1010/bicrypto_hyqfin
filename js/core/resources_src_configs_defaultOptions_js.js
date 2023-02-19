"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_src_configs_defaultOptions_js"],{

/***/ "./resources/src/configs/defaultOptions.js":
/*!*************************************************!*\
  !*** ./resources/src/configs/defaultOptions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Application options object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // cors proxy for outgoing http requests
  proxy: gnl.cors,
  // custom proxy list
  proxylist: [gnl.cors],
  // notification options
  notify: {
    enabled: true,
    duration: 10
  },
  // notification audio
  audio: {
    enabled: true,
    volume: 0.5,
    file: "../../../../market/audio/audio_2.mp3"
  },
  // search options
  search: {
    fullword: false,
    // must type full search words
    fullcase: false // must type correct word upper/lower case letters

  },
  // live price options
  prices: {
    header: true,
    // show top coins in header
    chart: true,
    // show live price chart in list
    market: "USDT",
    // default selected market token
    sort: "marketVolume",
    // price data to sort by
    order: "desc",
    // price sort direction
    limit: 20 // how many entries to show

  },
  // news related options
  news: {
    enabled: true,
    // enable fetching on a timer
    notify: false,
    // show push notifications for news
    send: false,
    // include news in outgoing notifications (email/telegram)
    interval: 5,
    // how often to try fetching from each source (secs)
    delay: 500,
    // how long to wait before fetching again from each source (secs)
    tweets: 1,
    // how many tweets to fetch at once from each source
    total: 100,
    // how many total tweets to store
    max: 30,
    // max number of news entries to show
    days: 1 // only show entries posted within this number of days

  },
  // binance api config
  binance: {
    enabled: false,
    // status
    apikey: "",
    // api key
    apisecret: "" // api secret

  },
  // mailgun api config
  mailgun: {
    enabled: false,
    // status
    domain: "",
    // account domain
    apikey: "",
    // api key
    email: "" // recipient email

  },
  // telegram bot api config
  telegram: {
    enabled: false,
    // status
    botkey: "",
    // telegram bot id
    userid: "" // recipient chat id

  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY29yZS9yZXNvdXJjZXNfc3JjX2NvbmZpZ3NfZGVmYXVsdE9wdGlvbnNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ1g7RUFDQUEsS0FBSyxFQUFFQyxHQUFHLENBQUNDLElBRkE7RUFJWDtFQUNBQyxTQUFTLEVBQUUsQ0FBQ0YsR0FBRyxDQUFDQyxJQUFMLENBTEE7RUFPWDtFQUNBRSxNQUFNLEVBQUU7SUFDSkMsT0FBTyxFQUFFLElBREw7SUFFSkMsUUFBUSxFQUFFO0VBRk4sQ0FSRztFQWFYO0VBQ0FDLEtBQUssRUFBRTtJQUNIRixPQUFPLEVBQUUsSUFETjtJQUVIRyxNQUFNLEVBQUUsR0FGTDtJQUdIQyxJQUFJLEVBQUU7RUFISCxDQWRJO0VBb0JYO0VBQ0FDLE1BQU0sRUFBRTtJQUNKQyxRQUFRLEVBQUUsS0FETjtJQUNhO0lBQ2pCQyxRQUFRLEVBQUUsS0FGTixDQUVhOztFQUZiLENBckJHO0VBMEJYO0VBQ0FDLE1BQU0sRUFBRTtJQUNKQyxNQUFNLEVBQUUsSUFESjtJQUNVO0lBQ2RDLEtBQUssRUFBRSxJQUZIO0lBRVM7SUFDYkMsTUFBTSxFQUFFLE1BSEo7SUFHWTtJQUNoQkMsSUFBSSxFQUFFLGNBSkY7SUFJa0I7SUFDdEJDLEtBQUssRUFBRSxNQUxIO0lBS1c7SUFDZkMsS0FBSyxFQUFFLEVBTkgsQ0FNTzs7RUFOUCxDQTNCRztFQW9DWDtFQUNBQyxJQUFJLEVBQUU7SUFDRmYsT0FBTyxFQUFFLElBRFA7SUFDYTtJQUNmRCxNQUFNLEVBQUUsS0FGTjtJQUVhO0lBQ2ZpQixJQUFJLEVBQUUsS0FISjtJQUdXO0lBQ2JDLFFBQVEsRUFBRSxDQUpSO0lBSVc7SUFDYkMsS0FBSyxFQUFFLEdBTEw7SUFLVTtJQUNaQyxNQUFNLEVBQUUsQ0FOTjtJQU1TO0lBQ1hDLEtBQUssRUFBRSxHQVBMO0lBT1U7SUFDWkMsR0FBRyxFQUFFLEVBUkg7SUFRTztJQUNUQyxJQUFJLEVBQUUsQ0FUSixDQVNPOztFQVRQLENBckNLO0VBaURYO0VBQ0FDLE9BQU8sRUFBRTtJQUNMdkIsT0FBTyxFQUFFLEtBREo7SUFDVztJQUNoQndCLE1BQU0sRUFBRSxFQUZIO0lBRU87SUFDWkMsU0FBUyxFQUFFLEVBSE4sQ0FHVTs7RUFIVixDQWxERTtFQXdEWDtFQUNBQyxPQUFPLEVBQUU7SUFDTDFCLE9BQU8sRUFBRSxLQURKO0lBQ1c7SUFDaEIyQixNQUFNLEVBQUUsRUFGSDtJQUVPO0lBQ1pILE1BQU0sRUFBRSxFQUhIO0lBR087SUFDWkksS0FBSyxFQUFFLEVBSkYsQ0FJTTs7RUFKTixDQXpERTtFQWdFWDtFQUNBQyxRQUFRLEVBQUU7SUFDTjdCLE9BQU8sRUFBRSxLQURIO0lBQ1U7SUFDaEI4QixNQUFNLEVBQUUsRUFGRjtJQUVNO0lBQ1pDLE1BQU0sRUFBRSxFQUhGLENBR007O0VBSE47QUFqRUMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvY29uZmlncy9kZWZhdWx0T3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwcGxpY2F0aW9uIG9wdGlvbnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBjb3JzIHByb3h5IGZvciBvdXRnb2luZyBodHRwIHJlcXVlc3RzXG4gICAgcHJveHk6IGdubC5jb3JzLFxuXG4gICAgLy8gY3VzdG9tIHByb3h5IGxpc3RcbiAgICBwcm94eWxpc3Q6IFtnbmwuY29yc10sXG5cbiAgICAvLyBub3RpZmljYXRpb24gb3B0aW9uc1xuICAgIG5vdGlmeToge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgfSxcblxuICAgIC8vIG5vdGlmaWNhdGlvbiBhdWRpb1xuICAgIGF1ZGlvOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHZvbHVtZTogMC41LFxuICAgICAgICBmaWxlOiBcIi4uLy4uLy4uLy4uL21hcmtldC9hdWRpby9hdWRpb18yLm1wM1wiLFxuICAgIH0sXG5cbiAgICAvLyBzZWFyY2ggb3B0aW9uc1xuICAgIHNlYXJjaDoge1xuICAgICAgICBmdWxsd29yZDogZmFsc2UsIC8vIG11c3QgdHlwZSBmdWxsIHNlYXJjaCB3b3Jkc1xuICAgICAgICBmdWxsY2FzZTogZmFsc2UsIC8vIG11c3QgdHlwZSBjb3JyZWN0IHdvcmQgdXBwZXIvbG93ZXIgY2FzZSBsZXR0ZXJzXG4gICAgfSxcblxuICAgIC8vIGxpdmUgcHJpY2Ugb3B0aW9uc1xuICAgIHByaWNlczoge1xuICAgICAgICBoZWFkZXI6IHRydWUsIC8vIHNob3cgdG9wIGNvaW5zIGluIGhlYWRlclxuICAgICAgICBjaGFydDogdHJ1ZSwgLy8gc2hvdyBsaXZlIHByaWNlIGNoYXJ0IGluIGxpc3RcbiAgICAgICAgbWFya2V0OiBcIlVTRFRcIiwgLy8gZGVmYXVsdCBzZWxlY3RlZCBtYXJrZXQgdG9rZW5cbiAgICAgICAgc29ydDogXCJtYXJrZXRWb2x1bWVcIiwgLy8gcHJpY2UgZGF0YSB0byBzb3J0IGJ5XG4gICAgICAgIG9yZGVyOiBcImRlc2NcIiwgLy8gcHJpY2Ugc29ydCBkaXJlY3Rpb25cbiAgICAgICAgbGltaXQ6IDIwLCAvLyBob3cgbWFueSBlbnRyaWVzIHRvIHNob3dcbiAgICB9LFxuXG4gICAgLy8gbmV3cyByZWxhdGVkIG9wdGlvbnNcbiAgICBuZXdzOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBmZXRjaGluZyBvbiBhIHRpbWVyXG4gICAgICAgIG5vdGlmeTogZmFsc2UsIC8vIHNob3cgcHVzaCBub3RpZmljYXRpb25zIGZvciBuZXdzXG4gICAgICAgIHNlbmQ6IGZhbHNlLCAvLyBpbmNsdWRlIG5ld3MgaW4gb3V0Z29pbmcgbm90aWZpY2F0aW9ucyAoZW1haWwvdGVsZWdyYW0pXG4gICAgICAgIGludGVydmFsOiA1LCAvLyBob3cgb2Z0ZW4gdG8gdHJ5IGZldGNoaW5nIGZyb20gZWFjaCBzb3VyY2UgKHNlY3MpXG4gICAgICAgIGRlbGF5OiA1MDAsIC8vIGhvdyBsb25nIHRvIHdhaXQgYmVmb3JlIGZldGNoaW5nIGFnYWluIGZyb20gZWFjaCBzb3VyY2UgKHNlY3MpXG4gICAgICAgIHR3ZWV0czogMSwgLy8gaG93IG1hbnkgdHdlZXRzIHRvIGZldGNoIGF0IG9uY2UgZnJvbSBlYWNoIHNvdXJjZVxuICAgICAgICB0b3RhbDogMTAwLCAvLyBob3cgbWFueSB0b3RhbCB0d2VldHMgdG8gc3RvcmVcbiAgICAgICAgbWF4OiAzMCwgLy8gbWF4IG51bWJlciBvZiBuZXdzIGVudHJpZXMgdG8gc2hvd1xuICAgICAgICBkYXlzOiAxLCAvLyBvbmx5IHNob3cgZW50cmllcyBwb3N0ZWQgd2l0aGluIHRoaXMgbnVtYmVyIG9mIGRheXNcbiAgICB9LFxuXG4gICAgLy8gYmluYW5jZSBhcGkgY29uZmlnXG4gICAgYmluYW5jZToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8gc3RhdHVzXG4gICAgICAgIGFwaWtleTogXCJcIiwgLy8gYXBpIGtleVxuICAgICAgICBhcGlzZWNyZXQ6IFwiXCIsIC8vIGFwaSBzZWNyZXRcbiAgICB9LFxuXG4gICAgLy8gbWFpbGd1biBhcGkgY29uZmlnXG4gICAgbWFpbGd1bjoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8gc3RhdHVzXG4gICAgICAgIGRvbWFpbjogXCJcIiwgLy8gYWNjb3VudCBkb21haW5cbiAgICAgICAgYXBpa2V5OiBcIlwiLCAvLyBhcGkga2V5XG4gICAgICAgIGVtYWlsOiBcIlwiLCAvLyByZWNpcGllbnQgZW1haWxcbiAgICB9LFxuXG4gICAgLy8gdGVsZWdyYW0gYm90IGFwaSBjb25maWdcbiAgICB0ZWxlZ3JhbToge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8gc3RhdHVzXG4gICAgICAgIGJvdGtleTogXCJcIiwgLy8gdGVsZWdyYW0gYm90IGlkXG4gICAgICAgIHVzZXJpZDogXCJcIiwgLy8gcmVjaXBpZW50IGNoYXQgaWRcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJwcm94eSIsImdubCIsImNvcnMiLCJwcm94eWxpc3QiLCJub3RpZnkiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJhdWRpbyIsInZvbHVtZSIsImZpbGUiLCJzZWFyY2giLCJmdWxsd29yZCIsImZ1bGxjYXNlIiwicHJpY2VzIiwiaGVhZGVyIiwiY2hhcnQiLCJtYXJrZXQiLCJzb3J0Iiwib3JkZXIiLCJsaW1pdCIsIm5ld3MiLCJzZW5kIiwiaW50ZXJ2YWwiLCJkZWxheSIsInR3ZWV0cyIsInRvdGFsIiwibWF4IiwiZGF5cyIsImJpbmFuY2UiLCJhcGlrZXkiLCJhcGlzZWNyZXQiLCJtYWlsZ3VuIiwiZG9tYWluIiwiZW1haWwiLCJ0ZWxlZ3JhbSIsImJvdGtleSIsInVzZXJpZCJdLCJzb3VyY2VSb290IjoiIn0=