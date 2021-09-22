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

  var _this = this;

  var searchResult = _ref.searchResult;
  var coordinates = searchResult.map(function (item) {
    return {
      longitude: item["long"],
      latitude: item.lat
    };
  });
  var center = (0,geolib__WEBPACK_IMPORTED_MODULE_3__.getCenter)(coordinates);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      selectedLocation = _useState[0],
      setSelectedLocation = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  }),
      viewPort = _useState2[0],
      setViewPort = _useState2[1];

  console.log(center);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    mapStyle: "mapbox://styles/majilan/cktvncrqa2ffu17ok597z8plj",
    mapboxApiAccessToken: "pk.eyJ1IjoibWFqaWxhbiIsImEiOiJja3R2bjJjbGUwbWRjMnVteHR3YXcwbnB2In0.6xIoxxemfBc3oGywbldxbg"
  }, viewPort), {}, {
    onViewportChange: function onViewportChange(nextViewPort) {
      return setViewPort(nextViewPort);
    },
    children: searchResult.map(function (item, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Marker, {
          longitude: item["long"],
          latitude: item.lat,
          offsetLeft: -20,
          offsetTop: -10,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            onClick: function onClick() {
              return setSelectedLocation(item);
            },
            className: "cursor-pointer text-xl animate-bounce",
            children: "\uD83D\uDCCC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(Map, "KsXstq0Z87Nh00AAFl/D/BhDxFI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjY3MWM2NTUyM2NkOTRlMTEyN2JlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssR0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUV6QixNQUFNQyxXQUFXLEdBQUdELFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsV0FBVztBQUM1Q0MsTUFBQUEsU0FBUyxFQUFFRCxJQUFJLFFBRDZCO0FBRTVDRSxNQUFBQSxRQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFGNkIsS0FBWDtBQUFBLEdBQWpCLENBQXBCO0FBSUEsTUFBTUMsTUFBTSxHQUFHVCxpREFBUyxDQUFDRyxXQUFELENBQXhCOztBQUNBLGtCQUFnRFAsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUEsTUFBT2MsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLG1CQUFnQ2YsK0NBQVEsQ0FBQztBQUNyQ2dCLElBQUFBLEtBQUssRUFBRSxNQUQ4QjtBQUVyQ0MsSUFBQUEsTUFBTSxFQUFFLE1BRjZCO0FBR3JDTixJQUFBQSxRQUFRLEVBQUVFLE1BQU0sQ0FBQ0YsUUFIb0I7QUFJckNELElBQUFBLFNBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUptQjtBQUtyQ1EsSUFBQUEsSUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQVdEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVDLHNCQUNJLDhEQUFDLGlEQUFEO0FBQ0ksWUFBUSxFQUFHLG1EQURmO0FBRUksd0JBQW9CLEVBQUVVLDJGQUFzQkU7QUFGaEQsS0FHUU4sUUFIUjtBQUlJLG9CQUFnQixFQUFFLDBCQUFDTyxZQUFEO0FBQUEsYUFBa0JOLFdBQVcsQ0FBQ00sWUFBRCxDQUE3QjtBQUFBLEtBSnRCO0FBQUEsY0FNS3BCLFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9rQixLQUFQO0FBQUEsMEJBQ2Q7QUFBQSwrQkFDSSw4REFBQyxnREFBRDtBQUNJLG1CQUFTLEVBQUVsQixJQUFJLFFBRG5CO0FBRUksa0JBQVEsRUFBRUEsSUFBSSxDQUFDRyxHQUZuQjtBQUdJLG9CQUFVLEVBQUUsQ0FBQyxFQUhqQjtBQUlJLG1CQUFTLEVBQUUsQ0FBQyxFQUpoQjtBQUFBLGlDQU1JO0FBQUcsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRyxtQkFBbUIsQ0FBQ04sSUFBRCxDQUF6QjtBQUFBLGFBQVo7QUFBNkMscUJBQVMsRUFBQyx1Q0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVWtCLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBakI7QUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0dBMUNRdEI7O0tBQUFBO0FBNENULCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXBHTCx7TWFya2VyLCBQb3B1cH0gZnJvbSAncmVhY3QtbWFwLWdsJztcclxuaW1wb3J0IHsgZ2V0Q2VudGVyIH0gZnJvbSAnZ2VvbGliJztcclxuXHJcbmZ1bmN0aW9uIE1hcCh7c2VhcmNoUmVzdWx0fSkge1xyXG4gICAgXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHNlYXJjaFJlc3VsdC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmcsIFxyXG4gICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdFxyXG4gICAgfSkgKVxyXG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGNvb3JkaW5hdGVzKVxyXG4gICAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbdmlld1BvcnQsIHNldFZpZXdQb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgIGxhdGl0dWRlOiBjZW50ZXIubGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlLFxyXG4gICAgICAgIHpvb206IDExXHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICBcclxuICAgY29uc29sZS5sb2coY2VudGVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3RNYXBHTFxyXG4gICAgICAgICAgICBtYXBTdHlsZSA9ICdtYXBib3g6Ly9zdHlsZXMvbWFqaWxhbi9ja3R2bmNycWEyZmZ1MTdvazU5N3o4cGxqJ1xyXG4gICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgICAgICAgey4uLnZpZXdQb3J0fVxyXG4gICAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXsobmV4dFZpZXdQb3J0KSA9PiBzZXRWaWV3UG9ydChuZXh0Vmlld1BvcnQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TWFya2VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU9e2l0ZW0ubG9uZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e2l0ZW0ubGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0PXstMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFRvcD17LTEwfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRMb2NhdGlvbihpdGVtKX0gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGFuaW1hdGUtYm91bmNlJyA+8J+TjDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1JlYWN0TWFwR0w+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdE1hcEdMIiwiTWFya2VyIiwiUG9wdXAiLCJnZXRDZW50ZXIiLCJNYXAiLCJzZWFyY2hSZXN1bHQiLCJjb29yZGluYXRlcyIsIm1hcCIsIml0ZW0iLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImxhdCIsImNlbnRlciIsInNlbGVjdGVkTG9jYXRpb24iLCJzZXRTZWxlY3RlZExvY2F0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwidmlld1BvcnQiLCJzZXRWaWV3UG9ydCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwibWFwYm94X2tleSIsIm5leHRWaWV3UG9ydCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==