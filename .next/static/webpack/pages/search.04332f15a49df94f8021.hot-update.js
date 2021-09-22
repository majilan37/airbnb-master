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

  console.log(selectedLocation);
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            onClick: function onClick() {
              return setSelectedLocation(item);
            },
            className: "cursor-pointer text-xl animate-bounce",
            children: "\uD83D\uDCCC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), selectedLocation["long"] === item["long"] ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__.Popup, {
            onClose: function onClose() {
              return setSelectedLocation({});
            },
            closeOnClick: true,
            latitude: result["long"],
            children: result.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, _this) : false]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjA0MzMyZjE1YTQ5ZGY5NGY4MDIxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0ssR0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUV6QixNQUFNQyxXQUFXLEdBQUdELFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsV0FBVztBQUM1Q0MsTUFBQUEsU0FBUyxFQUFFRCxJQUFJLFFBRDZCO0FBRTVDRSxNQUFBQSxRQUFRLEVBQUVGLElBQUksQ0FBQ0c7QUFGNkIsS0FBWDtBQUFBLEdBQWpCLENBQXBCO0FBSUEsTUFBTUMsTUFBTSxHQUFHVCxpREFBUyxDQUFDRyxXQUFELENBQXhCOztBQUNBLGtCQUFnRFAsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUEsTUFBT2MsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUNBLG1CQUFnQ2YsK0NBQVEsQ0FBQztBQUNyQ2dCLElBQUFBLEtBQUssRUFBRSxNQUQ4QjtBQUVyQ0MsSUFBQUEsTUFBTSxFQUFFLE1BRjZCO0FBR3JDTixJQUFBQSxRQUFRLEVBQUVFLE1BQU0sQ0FBQ0YsUUFIb0I7QUFJckNELElBQUFBLFNBQVMsRUFBRUcsTUFBTSxDQUFDSCxTQUptQjtBQUtyQ1EsSUFBQUEsSUFBSSxFQUFFO0FBTCtCLEdBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQVFBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsZ0JBQVo7QUFFQSxzQkFDSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFBRyxtREFEZjtBQUVJLHdCQUFvQixFQUFFUywyRkFBc0JFO0FBRmhELEtBR1FOLFFBSFI7QUFJSSxvQkFBZ0IsRUFBRSwwQkFBQ08sWUFBRDtBQUFBLGFBQWtCTixXQUFXLENBQUNNLFlBQUQsQ0FBN0I7QUFBQSxLQUp0QjtBQUFBLGNBTUtwQixZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPa0IsS0FBUDtBQUFBLDBCQUNkO0FBQUEsK0JBQ0ksOERBQUMsZ0RBQUQ7QUFDSSxtQkFBUyxFQUFFbEIsSUFBSSxRQURuQjtBQUVJLGtCQUFRLEVBQUVBLElBQUksQ0FBQ0csR0FGbkI7QUFHSSxvQkFBVSxFQUFFLENBQUMsRUFIakI7QUFJSSxtQkFBUyxFQUFFLENBQUMsRUFKaEI7QUFBQSxrQ0FNSTtBQUNJLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUcsbUJBQW1CLENBQUNOLElBQUQsQ0FBekI7QUFBQSxhQURiO0FBRUkscUJBQVMsRUFBQyx1Q0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSixFQVlLSyxnQkFBZ0IsUUFBaEIsS0FBMEJMLElBQUksUUFBOUIsZ0JBQ0csOERBQUMsK0NBQUQ7QUFDSSxtQkFBTyxFQUFFO0FBQUEscUJBQU1NLG1CQUFtQixDQUFDLEVBQUQsQ0FBekI7QUFBQSxhQURiO0FBRUksd0JBQVksRUFBRSxJQUZsQjtBQUdJLG9CQUFRLEVBQUVhLE1BQU0sUUFIcEI7QUFBQSxzQkFLS0EsTUFBTSxDQUFDQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREgsR0FRRyxLQXBCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVRixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYztBQUFBLEtBQWpCO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQXJEUXRCOztLQUFBQTtBQXVEVCwrREFBZUEsR0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFwR0wse01hcmtlciwgUG9wdXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XHJcbmltcG9ydCB7IGdldENlbnRlciB9IGZyb20gJ2dlb2xpYic7XHJcblxyXG5mdW5jdGlvbiBNYXAoe3NlYXJjaFJlc3VsdH0pIHtcclxuICAgIFxyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZWFyY2hSZXN1bHQubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIGxvbmdpdHVkZTogaXRlbS5sb25nLCBcclxuICAgICAgICBsYXRpdHVkZTogaXRlbS5sYXRcclxuICAgIH0pIClcclxuICAgIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcylcclxuICAgIGNvbnN0IFtzZWxlY3RlZExvY2F0aW9uLCBzZXRTZWxlY3RlZExvY2F0aW9uXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW3ZpZXdQb3J0LCBzZXRWaWV3UG9ydF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSxcclxuICAgICAgICB6b29tOiAxMVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZExvY2F0aW9uKTsgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdE1hcEdMXHJcbiAgICAgICAgICAgIG1hcFN0eWxlID0gJ21hcGJveDovL3N0eWxlcy9tYWppbGFuL2NrdHZuY3JxYTJmZnUxN29rNTk3ejhwbGonXHJcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtwcm9jZXNzLmVudi5tYXBib3hfa2V5fVxyXG4gICAgICAgICAgICB7Li4udmlld1BvcnR9XHJcbiAgICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9eyhuZXh0Vmlld1BvcnQpID0+IHNldFZpZXdQb3J0KG5leHRWaWV3UG9ydCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXJrZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZT17aXRlbS5sb25nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZT17aXRlbS5sYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQ9ey0yMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0VG9wPXstMTB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkTG9jYXRpb24oaXRlbSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGFuaW1hdGUtYm91bmNlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+TjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZExvY2F0aW9uLmxvbmcgPT09IGl0ZW0ubG9uZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3B1cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZExvY2F0aW9uKHt9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU9e3Jlc3VsdC5sb25nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApOiAoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWFya2VyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmVhY3RNYXBHTD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlYWN0TWFwR0wiLCJNYXJrZXIiLCJQb3B1cCIsImdldENlbnRlciIsIk1hcCIsInNlYXJjaFJlc3VsdCIsImNvb3JkaW5hdGVzIiwibWFwIiwiaXRlbSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibGF0IiwiY2VudGVyIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJ2aWV3UG9ydCIsInNldFZpZXdQb3J0IiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJtYXBib3hfa2V5IiwibmV4dFZpZXdQb3J0IiwiaW5kZXgiLCJyZXN1bHQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=