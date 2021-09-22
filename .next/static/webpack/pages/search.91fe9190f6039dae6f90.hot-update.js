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

  console.log(lat);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj",
    mapboxApiAccessToken: "pk.eyJ1IjoibWFqaWxhbiIsImEiOiJja3R2bjJjbGUwbWRjMnVteHR3YXcwbnB2In0.6xIoxxemfBc3oGywbldxbg"
  }, viewPort), {}, {
    onViewportChange: function onViewportChange(nextViewPort) {
      return setViewPort(nextViewPort);
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjkxZmU5MTkwZjYwMzlkYWU2ZjkwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0csR0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUN6QixNQUFPQyxLQUFQLEdBQW9CRCxZQUFwQjtBQUFBLE1BQWFFLEdBQWIsR0FBb0JGLFlBQXBCLENBQWFFLEdBQWI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDO0FBQ3JDTyxJQUFBQSxLQUFLLEVBQUUsTUFEOEI7QUFFckNDLElBQUFBLE1BQU0sRUFBRSxNQUY2QjtBQUdyQ0MsSUFBQUEsUUFBUSxFQUFFSCxHQUgyQjtBQUlyQ0ksSUFBQUEsU0FBUyxFQUFFTCxLQUowQjtBQUtyQ00sSUFBQUEsSUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQVFBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsR0FBWjtBQUVBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQ0ksWUFBUSxFQUFHLG1EQURmO0FBRUksd0JBQW9CLEVBQUVVLDJGQUFzQkU7QUFGaEQsS0FHUU4sUUFIUjtBQUlJLG9CQUFnQixFQUFFLDBCQUFDTyxZQUFEO0FBQUEsYUFBa0JOLFdBQVcsQ0FBQ00sWUFBRCxDQUE3QjtBQUFBO0FBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQXBCUWhCOztLQUFBQTtBQXNCVCwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICdnZW9saWInO1xyXG5cclxuZnVuY3Rpb24gTWFwKHtzZWFyY2hSZXN1bHR9KSB7XHJcbiAgICBjb25zdCB7bG9uZywgbGF0fSA9IHNlYXJjaFJlc3VsdFxyXG4gICAgY29uc3QgW3ZpZXdQb3J0LCBzZXRWaWV3UG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBsYXRpdHVkZTogbGF0LFxyXG4gICAgICAgIGxvbmdpdHVkZTogbG9uZyxcclxuICAgICAgICB6b29tOiAxMVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhsYXQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICAgIG1hcFN0eWxlID0gJ21hcGJveDovL3N0eWxlcy9tYWppbGFuL2NrdHZuY3JxYTJmZnUxN29rNTk3ejhwbGonXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxyXG4gICAgICAgICAgICB7Li4udmlld1BvcnR9XHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld1BvcnQpID0+IHNldFZpZXdQb3J0KG5leHRWaWV3UG9ydCl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlYWN0TWFwR0wiLCJnZXREaXN0YW5jZSIsIk1hcCIsInNlYXJjaFJlc3VsdCIsImxvbmciLCJsYXQiLCJ3aWR0aCIsImhlaWdodCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsInZpZXdQb3J0Iiwic2V0Vmlld1BvcnQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIm1hcGJveF9rZXkiLCJuZXh0Vmlld1BvcnQiXSwic291cmNlUm9vdCI6IiJ9