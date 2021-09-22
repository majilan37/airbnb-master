"use strict";
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InfoCard */ "./components/InfoCard.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "F:\\React JS Projects\\react js\\My React Projects\\Airbnb clone\\airbnb-clone-master\\pages\\search.js",
    _s = $RefreshSig$();









function Search(_ref) {
  _s();

  var _this = this;

  var searchResult = _ref.searchResult;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  var _router$query = router.query,
      location = _router$query.location,
      endDate = _router$query.endDate,
      numberOfGusts = _router$query.numberOfGusts,
      startDate = _router$query.startDate;
  var formattedStartDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(startDate), 'dd MMMM yy');
  var formattedEndDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(endDate), 'dd MMMM yy');
  var range = "".concat(formattedStartDate, " - ").concat(formattedEndDate);
  console.log(searchResult);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
      placeholder: "".concat(location, " | ").concat(range, " | ").concat(numberOfGusts)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
        className: "flex-grow pt-16 px-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "text-xs",
          children: [" ", searchResult.length, " Stays - ", range, " - for ", numberOfGusts, " number of guests "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          className: "text-3xl font-semibold mt-2 mb-6",
          children: ["Stays in ", location]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "hidden md:flex space-x-4 px-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "button",
            children: "Cancellation Flexibility"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "button",
            children: "Type of place"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "button",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "button",
            children: "Rooms and beds"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            className: "button",
            children: "More filters"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "flex flex-col",
          children: searchResult.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_InfoCard__WEBPACK_IMPORTED_MODULE_3__.default, {
              img: item.img,
              description: item.description,
              location: item.location,
              price: item.price,
              star: item.star,
              title: item.title,
              total: item.total,
              lat: item.lat,
              "long": item["long"]
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
        className: "hidden lg:inline-flex min-w-[600px]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_s(Search, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];
});

_c = Search;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmY3NDFjMTk3YTY0MjAyZmIxZjY1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLE1BQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7QUFDNUIsTUFBTUMsTUFBTSxHQUFHUCxrRUFBUyxFQUF4QjtBQUNBLHNCQUFzRE8sTUFBTSxDQUFDQyxLQUE3RDtBQUFBLE1BQU9DLFFBQVAsaUJBQU9BLFFBQVA7QUFBQSxNQUFpQkMsT0FBakIsaUJBQWlCQSxPQUFqQjtBQUFBLE1BQTBCQyxhQUExQixpQkFBMEJBLGFBQTFCO0FBQUEsTUFBeUNDLFNBQXpDLGlCQUF5Q0EsU0FBekM7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR2QsZ0RBQU0sQ0FBQyxJQUFJZSxJQUFKLENBQVNGLFNBQVQsQ0FBRCxFQUFzQixZQUF0QixDQUFqQztBQUNBLE1BQU1HLGdCQUFnQixHQUFHaEIsZ0RBQU0sQ0FBQyxJQUFJZSxJQUFKLENBQVNKLE9BQVQsQ0FBRCxFQUFvQixZQUFwQixDQUEvQjtBQUNBLE1BQU1NLEtBQUssYUFBTUgsa0JBQU4sZ0JBQThCRSxnQkFBOUIsQ0FBWDtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosWUFBWjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBUSxpQkFBVyxZQUFLRyxRQUFMLGdCQUFtQk8sS0FBbkIsZ0JBQThCTCxhQUE5QjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLDhCQUNJO0FBQVMsaUJBQVMsRUFBQyxzQkFBbkI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBLDBCQUEwQkwsWUFBWSxDQUFDYSxNQUF2QyxlQUF3REgsS0FBeEQsYUFBc0VMLGFBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBLGtDQUE0REYsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFVSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUNLSCxZQUFZLENBQUNjLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQ2QsOERBQUMseURBQUQ7QUFDSSxpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEdBRGQ7QUFFSSx5QkFBVyxFQUFFRixJQUFJLENBQUNHLFdBRnRCO0FBR0ksc0JBQVEsRUFBRUgsSUFBSSxDQUFDWixRQUhuQjtBQUlJLG1CQUFLLEVBQUVZLElBQUksQ0FBQ0ksS0FKaEI7QUFLSSxrQkFBSSxFQUFFSixJQUFJLENBQUNLLElBTGY7QUFNSSxtQkFBSyxFQUFFTCxJQUFJLENBQUNNLEtBTmhCO0FBT0ksbUJBQUssRUFBRU4sSUFBSSxDQUFDTyxLQVBoQjtBQVFJLGlCQUFHLEVBQUVQLElBQUksQ0FBQ1EsR0FSZDtBQVNJLHNCQUFNUixJQUFJO0FBVGQsZUFVU0MsS0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBNEJJO0FBQVMsaUJBQVMsRUFBQyxxQ0FBbkI7QUFBQSwrQkFDSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQWtDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0NIOztHQTlDUWpCO1VBQ1VMOzs7S0FEVks7O0FBMERULCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IEluZm9DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9DYXJkXCJcclxuaW1wb3J0IE1hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXBcIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoKHtzZWFyY2hSZXN1bHR9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge2xvY2F0aW9uLCBlbmREYXRlLCBudW1iZXJPZkd1c3RzLCBzdGFydERhdGV9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBmb3JtYXR0ZWRTdGFydERhdGUgPSBmb3JtYXQobmV3IERhdGUoc3RhcnREYXRlKSwgJ2RkIE1NTU0geXknKVxyXG4gICAgY29uc3QgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShlbmREYXRlKSwgJ2RkIE1NTU0geXknKVxyXG4gICAgY29uc3QgcmFuZ2UgPSBgJHtmb3JtYXR0ZWRTdGFydERhdGV9IC0gJHtmb3JtYXR0ZWRFbmREYXRlfWBcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaFJlc3VsdCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciBwbGFjZWhvbGRlcj17YCR7bG9jYXRpb259IHwgJHtyYW5nZX0gfCAke251bWJlck9mR3VzdHN9YH0gLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmbGV4JyA+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBwdC0xNiBweC02JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzJyA+IHtzZWFyY2hSZXN1bHQubGVuZ3RofSBTdGF5cyAtIHtyYW5nZX0gLSBmb3Ige251bWJlck9mR3VzdHN9IG51bWJlciBvZiBndWVzdHMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtc2VtaWJvbGQgbXQtMiBtYi02JyA+U3RheXMgaW4ge2xvY2F0aW9ufTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IHNwYWNlLXgtNCBweC00JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5DYW5jZWxsYXRpb24gRmxleGliaWxpdHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5UeXBlIG9mIHBsYWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J1dHRvbic+UHJpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5Sb29tcyBhbmQgYmVkczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPk1vcmUgZmlsdGVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmZvQ2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2l0ZW0uaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtpdGVtLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXI9e2l0ZW0uc3Rhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17aXRlbS50b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ9e2l0ZW0ubGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmc9e2l0ZW0ubG9uZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6aW5saW5lLWZsZXggbWluLXctWzYwMHB4XVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8TWFwIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9pc3onKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiZm9ybWF0IiwidXNlUm91dGVyIiwiRm9vdGVyIiwiSGVhZGVyIiwiSW5mb0NhcmQiLCJNYXAiLCJTZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJyb3V0ZXIiLCJxdWVyeSIsImxvY2F0aW9uIiwiZW5kRGF0ZSIsIm51bWJlck9mR3VzdHMiLCJzdGFydERhdGUiLCJmb3JtYXR0ZWRTdGFydERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRW5kRGF0ZSIsInJhbmdlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltZyIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzdGFyIiwidGl0bGUiLCJ0b3RhbCIsImxhdCJdLCJzb3VyY2VSb290IjoiIn0=