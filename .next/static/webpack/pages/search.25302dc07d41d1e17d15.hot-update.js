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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  }),
      viewPort = _useState[0],
      setViewPort = _useState[1];

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
            children: "\uD83D\uDCCC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(Map, "xF/kS9i//WhrRi+DKde9GWHs8pc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjI1MzAyZGMwN2Q0MWQxZTE3ZDE1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssR0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUN6QixNQUFNQyxXQUFXLEdBQUdELFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsV0FBVztBQUM1Q0MsTUFBQUEsU0FBUyxFQUFFRCxJQUFJLFFBRDZCO0FBRTVDRSxNQUFBQSxRQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFGNkIsS0FBWDtBQUFBLEdBQWpCLENBQXBCO0FBSUEsTUFBTUMsTUFBTSxHQUFHVCxpREFBUyxDQUFDRyxXQUFELENBQXhCOztBQUNBLGtCQUFnQ1AsK0NBQVEsQ0FBQztBQUNyQ2MsSUFBQUEsS0FBSyxFQUFFLE1BRDhCO0FBRXJDQyxJQUFBQSxNQUFNLEVBQUUsTUFGNkI7QUFHckNKLElBQUFBLFFBQVEsRUFBRUUsTUFBTSxDQUFDRixRQUhvQjtBQUlyQ0QsSUFBQUEsU0FBUyxFQUFFRyxNQUFNLENBQUNILFNBSm1CO0FBS3JDTSxJQUFBQSxJQUFJLEVBQUU7QUFMK0IsR0FBRCxDQUF4QztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBV0RDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaO0FBRUMsc0JBQ0ksOERBQUMsaURBQUQ7QUFDSSxZQUFRLEVBQUcsbURBRGY7QUFFSSx3QkFBb0IsRUFBRVEsMkZBQXNCRTtBQUZoRCxLQUdRTixRQUhSO0FBSUksb0JBQWdCLEVBQUUsMEJBQUNPLFlBQUQ7QUFBQSxhQUFrQk4sV0FBVyxDQUFDTSxZQUFELENBQTdCO0FBQUEsS0FKdEI7QUFBQSxjQU1LbEIsWUFBWSxDQUFDRSxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT2dCLEtBQVA7QUFBQSwwQkFDZDtBQUFBLCtCQUNJLDhEQUFDLGdEQUFEO0FBQ0ksbUJBQVMsRUFBRWhCLElBQUksUUFEbkI7QUFFSSxrQkFBUSxFQUFFQSxJQUFJLENBQUNHLEdBRm5CO0FBR0ksb0JBQVUsRUFBRSxDQUFDLEVBSGpCO0FBSUksbUJBQVMsRUFBRSxDQUFDLEVBSmhCO0FBQUEsaUNBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVWEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQjtBQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0F4Q1FwQjs7S0FBQUE7QUEwQ1QsK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1hcEdMLHtNYXJrZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQgeyBnZXRDZW50ZXIgfSBmcm9tICdnZW9saWInO1xyXG5cclxuZnVuY3Rpb24gTWFwKHtzZWFyY2hSZXN1bHR9KSB7XHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHNlYXJjaFJlc3VsdC5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxvbmcsIFxyXG4gICAgICAgIGxhdGl0dWRlOiBpdGVtLmxhdFxyXG4gICAgfSkgKVxyXG4gICAgY29uc3QgY2VudGVyID0gZ2V0Q2VudGVyKGNvb3JkaW5hdGVzKVxyXG4gICAgY29uc3QgW3ZpZXdQb3J0LCBzZXRWaWV3UG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgXHJcbiAgIGNvbnNvbGUubG9nKGNlbnRlcik7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0TWFwR0xcclxuICAgICAgICAgICAgbWFwU3R5bGUgPSAnbWFwYm94Oi8vc3R5bGVzL21hamlsYW4vY2t0dm5jcnFhMmZmdTE3b2s1OTd6OHBsaidcclxuICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3Byb2Nlc3MuZW52Lm1hcGJveF9rZXl9XHJcbiAgICAgICAgICAgIHsuLi52aWV3UG9ydH1cclxuICAgICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17KG5leHRWaWV3UG9ydCkgPT4gc2V0Vmlld1BvcnQobmV4dFZpZXdQb3J0KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzZWFyY2hSZXN1bHQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtlciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlPXtpdGVtLmxvbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlPXtpdGVtLmxhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdD17LTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRUb3A9ey0xMH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPvCfk4w8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NYXJrZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3RNYXBHTCIsIk1hcmtlciIsIlBvcHVwIiwiZ2V0Q2VudGVyIiwiTWFwIiwic2VhcmNoUmVzdWx0IiwiY29vcmRpbmF0ZXMiLCJtYXAiLCJpdGVtIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJsYXQiLCJjZW50ZXIiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJ2aWV3UG9ydCIsInNldFZpZXdQb3J0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdQb3J0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9