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
        className: "hidden xl:inline-flex min-w-[600px]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Map__WEBPACK_IMPORTED_MODULE_4__.default, {
          searchResult: searchResult
        }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmI2YWUxMjMwMmVhM2QyMDRjYzg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNNLE1BQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFmQyxZQUFlLFFBQWZBLFlBQWU7QUFDNUIsTUFBTUMsTUFBTSxHQUFHUCxrRUFBUyxFQUF4QjtBQUNBLHNCQUFzRE8sTUFBTSxDQUFDQyxLQUE3RDtBQUFBLE1BQU9DLFFBQVAsaUJBQU9BLFFBQVA7QUFBQSxNQUFpQkMsT0FBakIsaUJBQWlCQSxPQUFqQjtBQUFBLE1BQTBCQyxhQUExQixpQkFBMEJBLGFBQTFCO0FBQUEsTUFBeUNDLFNBQXpDLGlCQUF5Q0EsU0FBekM7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR2QsZ0RBQU0sQ0FBQyxJQUFJZSxJQUFKLENBQVNGLFNBQVQsQ0FBRCxFQUFzQixZQUF0QixDQUFqQztBQUNBLE1BQU1HLGdCQUFnQixHQUFHaEIsZ0RBQU0sQ0FBQyxJQUFJZSxJQUFKLENBQVNKLE9BQVQsQ0FBRCxFQUFvQixZQUFwQixDQUEvQjtBQUNBLE1BQU1NLEtBQUssYUFBTUgsa0JBQU4sZ0JBQThCRSxnQkFBOUIsQ0FBWDtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosWUFBWjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsdURBQUQ7QUFBUSxpQkFBVyxZQUFLRyxRQUFMLGdCQUFtQk8sS0FBbkIsZ0JBQThCTCxhQUE5QjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBLDhCQUNJO0FBQVMsaUJBQVMsRUFBQyxzQkFBbkI7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUMsU0FBYjtBQUFBLDBCQUEwQkwsWUFBWSxDQUFDYSxNQUF2QyxlQUF3REgsS0FBeEQsYUFBc0VMLGFBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUksbUJBQVMsRUFBQyxrQ0FBZDtBQUFBLGtDQUE0REYsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsa0NBQ0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFHLHFCQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFVSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLG9CQUNLSCxZQUFZLENBQUNjLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQ2QsOERBQUMseURBQUQ7QUFDSSxpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEdBRGQ7QUFFSSx5QkFBVyxFQUFFRixJQUFJLENBQUNHLFdBRnRCO0FBR0ksc0JBQVEsRUFBRUgsSUFBSSxDQUFDWixRQUhuQjtBQUlJLG1CQUFLLEVBQUVZLElBQUksQ0FBQ0ksS0FKaEI7QUFLSSxrQkFBSSxFQUFFSixJQUFJLENBQUNLLElBTGY7QUFNSSxtQkFBSyxFQUFFTCxJQUFJLENBQUNNLEtBTmhCO0FBT0ksbUJBQUssRUFBRU4sSUFBSSxDQUFDTyxLQVBoQjtBQVFJLGlCQUFHLEVBQUVQLElBQUksQ0FBQ1EsR0FSZDtBQVNJLHNCQUFNUixJQUFJO0FBVGQsZUFVU0MsS0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURjO0FBQUEsV0FBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBNEJJO0FBQVMsaUJBQVMsRUFBQyxxQ0FBbkI7QUFBQSwrQkFDSSw4REFBQyxvREFBRDtBQUFLLHNCQUFZLEVBQUVoQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQWtDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0NIOztHQTlDUUQ7VUFDVUw7OztLQURWSzs7QUEwRFQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCJcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxyXG5pbXBvcnQgSW5mb0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0NhcmRcIlxyXG5pbXBvcnQgTWFwIGZyb20gXCIuLi9jb21wb25lbnRzL01hcFwiXHJcblxyXG5mdW5jdGlvbiBTZWFyY2goe3NlYXJjaFJlc3VsdH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7bG9jYXRpb24sIGVuZERhdGUsIG51bWJlck9mR3VzdHMsIHN0YXJ0RGF0ZX0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdChuZXcgRGF0ZShzdGFydERhdGUpLCAnZGQgTU1NTSB5eScpXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRFbmREYXRlID0gZm9ybWF0KG5ldyBEYXRlKGVuZERhdGUpLCAnZGQgTU1NTSB5eScpXHJcbiAgICBjb25zdCByYW5nZSA9IGAke2Zvcm1hdHRlZFN0YXJ0RGF0ZX0gLSAke2Zvcm1hdHRlZEVuZERhdGV9YFxyXG4gICAgY29uc29sZS5sb2coc2VhcmNoUmVzdWx0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHBsYWNlaG9sZGVyPXtgJHtsb2NhdGlvbn0gfCAke3JhbmdlfSB8ICR7bnVtYmVyT2ZHdXN0c31gfSAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZsZXgnID5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleC1ncm93IHB0LTE2IHB4LTYnID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMnID4ge3NlYXJjaFJlc3VsdC5sZW5ndGh9IFN0YXlzIC0ge3JhbmdlfSAtIGZvciB7bnVtYmVyT2ZHdXN0c30gbnVtYmVyIG9mIGd1ZXN0cyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtdC0yIG1iLTYnID5TdGF5cyBpbiB7bG9jYXRpb259PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXggc3BhY2UteC00IHB4LTQnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPkNhbmNlbGxhdGlvbiBGbGV4aWJpbGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPlR5cGUgb2YgcGxhY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnV0dG9uJz5QcmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdidXR0b24nPlJvb21zIGFuZCBiZWRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2J1dHRvbic+TW9yZSBmaWx0ZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWFyY2hSZXN1bHQubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9DYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZz17aXRlbS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2l0ZW0ubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Rhcj17aXRlbS5zdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsPXtpdGVtLnRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdD17aXRlbS5sYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZz17aXRlbS5sb25nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbiB4bDppbmxpbmUtZmxleCBtaW4tdy1bNjAwcHhdXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYXAgc2VhcmNoUmVzdWx0PXtzZWFyY2hSZXN1bHR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCl7XHJcbiAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2lzeicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJmb3JtYXQiLCJ1c2VSb3V0ZXIiLCJGb290ZXIiLCJIZWFkZXIiLCJJbmZvQ2FyZCIsIk1hcCIsIlNlYXJjaCIsInNlYXJjaFJlc3VsdCIsInJvdXRlciIsInF1ZXJ5IiwibG9jYXRpb24iLCJlbmREYXRlIiwibnVtYmVyT2ZHdXN0cyIsInN0YXJ0RGF0ZSIsImZvcm1hdHRlZFN0YXJ0RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWRFbmREYXRlIiwicmFuZ2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaW1nIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInN0YXIiLCJ0aXRsZSIsInRvdGFsIiwibGF0Il0sInNvdXJjZVJvb3QiOiIifQ==