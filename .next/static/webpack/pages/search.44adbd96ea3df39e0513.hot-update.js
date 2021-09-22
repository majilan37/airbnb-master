"use strict";
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_React_JS_Projects_react_js_My_React_Projects_Airbnb_clone_airbnb_clone_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolib */ "./node_modules/geolib/es/index.js");
/* harmony import */ var geolib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(geolib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\React JS Projects\\react js\\My React Projects\\Airbnb clone\\airbnb-clone-master\\components\\Map.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_React_JS_Projects_react_js_My_React_Projects_Airbnb_clone_airbnb_clone_master_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Map(_ref) {
  _s();

  var searchResult = _ref.searchResult;
  var _long = searchResult["long"],
      lat = searchResult.lat;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: '100%',
    height: '100%',
    latitude: lat,
    longitude: _long,
    zoom: 11
  }),
      viewPort = _useState[0],
      setViewPort = _useState[1];

  var coordinates = searchResult.map(function (item) {
    return {
      longitude: item["long"],
      latitude: item.lat
    };
  });
  var center = (0,geolib__WEBPACK_IMPORTED_MODULE_3__.getCenter)(coordinates);
  console.log(center);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj",
    mapboxApiAccessToken: "pk.eyJ1IjoibWFqaWxhbiIsImEiOiJja3R2bjJjbGUwbWRjMnVteHR3YXcwbnB2In0.6xIoxxemfBc3oGywbldxbg"
  }, viewPort), {}, {
    onViewportChange: function onViewportChange(nextViewPort) {
      return setViewPort(nextViewPort);
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(Map, "7HACPywU2UpnOp3VJr7Q6W1P6W0=");

_c = Map;
/* harmony default export */ __webpack_exports__["default"] = (Map);

var _c;

$RefreshReg$(_c, "Map");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjQ0YWRiZDk2ZWEzZGYzOWUwNTEzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0csR0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUN6QixNQUFPQyxLQUFQLEdBQW9CRCxZQUFwQjtBQUFBLE1BQWFFLEdBQWIsR0FBb0JGLFlBQXBCLENBQWFFLEdBQWI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDO0FBQ3JDTyxJQUFBQSxLQUFLLEVBQUUsTUFEOEI7QUFFckNDLElBQUFBLE1BQU0sRUFBRSxNQUY2QjtBQUdyQ0MsSUFBQUEsUUFBUSxFQUFFSCxHQUgyQjtBQUlyQ0ksSUFBQUEsU0FBUyxFQUFFTCxLQUowQjtBQUtyQ00sSUFBQUEsSUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQVFBLE1BQU1DLFdBQVcsR0FBR1YsWUFBWSxDQUFDVyxHQUFiLENBQWlCLFVBQUNDLElBQUQ7QUFBQSxXQUFXO0FBQ3hDTixNQUFBQSxTQUFTLEVBQUVNLElBQUksUUFEeUI7QUFFeENQLE1BQUFBLFFBQVEsRUFBRU8sSUFBSSxDQUFDVjtBQUZ5QixLQUFYO0FBQUEsR0FBakIsQ0FBcEI7QUFLRCxNQUFNVyxNQUFNLEdBQUdmLGlEQUFTLENBQUNZLFdBQUQsQ0FBeEI7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQyxzQkFDSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFBRyxtREFEZjtBQUVJLHdCQUFvQixFQUFFRywyRkFBc0JFO0FBRmhELEtBR1FWLFFBSFI7QUFJSSxvQkFBZ0IsRUFBRSwwQkFBQ1csWUFBRDtBQUFBLGFBQWtCVixXQUFXLENBQUNVLFlBQUQsQ0FBN0I7QUFBQTtBQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7R0ExQlFwQjs7S0FBQUE7QUE0QlQsK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1hcEdMIGZyb20gJ3JlYWN0LW1hcC1nbCc7XHJcbmltcG9ydCB7IGdldENlbnRlciB9IGZyb20gJ2dlb2xpYic7XHJcblxyXG5mdW5jdGlvbiBNYXAoe3NlYXJjaFJlc3VsdH0pIHtcclxuICAgIGNvbnN0IHtsb25nLCBsYXR9ID0gc2VhcmNoUmVzdWx0XHJcbiAgICBjb25zdCBbdmlld1BvcnQsIHNldFZpZXdQb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGxhdGl0dWRlOiBsYXQsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBsb25nLFxyXG4gICAgICAgIHpvb206IDExXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gc2VhcmNoUmVzdWx0Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmcsIFxyXG4gICAgICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRcclxuICAgIH0pIClcclxuXHJcbiAgIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcylcclxuICAgY29uc29sZS5sb2coY2VudGVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgICAgICBtYXBTdHlsZSA9ICdtYXBib3g6Ly9zdHlsZXMvbWFqaWxhbi9ja3R2bmNycWEyZmZ1MTdvazU5N3o4cGxqJ1xyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgICAgICAgey4uLnZpZXdQb3J0fVxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdQb3J0KSA9PiBzZXRWaWV3UG9ydChuZXh0Vmlld1BvcnQpfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdE1hcEdMIiwiZ2V0Q2VudGVyIiwiTWFwIiwic2VhcmNoUmVzdWx0IiwibG9uZyIsImxhdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwidmlld1BvcnQiLCJzZXRWaWV3UG9ydCIsImNvb3JkaW5hdGVzIiwibWFwIiwiaXRlbSIsImNlbnRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwibWFwYm94X2tleSIsIm5leHRWaWV3UG9ydCJdLCJzb3VyY2VSb290IjoiIn0=