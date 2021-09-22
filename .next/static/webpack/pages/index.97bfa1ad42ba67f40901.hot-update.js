"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_LargeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LargeCard */ "./components/LargeCard.js");
/* harmony import */ var _components_MediumCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MediumCard */ "./components/MediumCard.js");
/* harmony import */ var _components_SmallCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SmallCard */ "./components/SmallCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "F:\\React JS Projects\\react js\\My React Projects\\Airbnb clone\\airbnb-clone-master\\pages\\index.js";






 //https://airbnb-master.vercel.app/


var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var exploreData = _ref.exploreData,
      cardsData = _ref.cardsData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "Airbnb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
      className: "max-w-7xl mx-auto px-8 sm:px-16 lg:px-32",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
        className: "pt-6",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          className: "text-xl md:text-2xl lg:text-4xl font-semibold pb-5",
          children: "Explore Nearby"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          children: exploreData === null || exploreData === void 0 ? void 0 : exploreData.map(function (data, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_SmallCard__WEBPACK_IMPORTED_MODULE_6__.default, {
              img: data.img,
              location: data.location,
              distance: data.distance
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h2", {
          className: "text-xl md:text-2xl lg:text-4xl font-semibold py-8",
          children: "Live Anywhere"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "flex max-w-full overflow-x-auto overflow-y-hidden  space-x-4 scrollbar-hide items-center p-3",
          children: cardsData === null || cardsData === void 0 ? void 0 : cardsData.map(function (data, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MediumCard__WEBPACK_IMPORTED_MODULE_5__.default, {
              img: data.img,
              title: data.title
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_LargeCard__WEBPACK_IMPORTED_MODULE_4__.default, {
        img: "https://links.papareact.com/4cj",
        title: "The Greatest Outdoor",
        description: "Wishlists curated by Airbnb",
        buttonText: "Get inspired"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTdiZmExYWQ0MmJhNjdmNDA5MDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzs7O0FBRWUsU0FBU08sSUFBVCxPQUF3QztBQUFBOztBQUFBLE1BQXpCQyxXQUF5QixRQUF6QkEsV0FBeUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDckQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQU0sZUFBUyxFQUFDLDBDQUFoQjtBQUFBLDhCQUNJO0FBQVMsaUJBQVMsRUFBQyxNQUFuQjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxvREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQywrREFBZjtBQUFBLG9CQUNHRCxXQURILGFBQ0dBLFdBREgsdUJBQ0dBLFdBQVcsQ0FBRUUsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDaEIsOERBQUMsMERBQUQ7QUFBdUIsaUJBQUcsRUFBRUQsSUFBSSxDQUFDRSxHQUFqQztBQUFzQyxzQkFBUSxFQUFFRixJQUFJLENBQUNHLFFBQXJEO0FBQStELHNCQUFRLEVBQUVILElBQUksQ0FBQ0k7QUFBOUUsZUFBZ0JILEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGdCO0FBQUEsV0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBU0k7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsOEZBQWY7QUFBQSxvQkFFS0gsU0FGTCxhQUVLQSxTQUZMLHVCQUVLQSxTQUFTLENBQUVDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxnQ0FDZCw4REFBQywyREFBRDtBQUF5QixpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEdBQW5DO0FBQXdDLG1CQUFLLEVBQUVGLElBQUksQ0FBQ0s7QUFBcEQsZUFBa0JKLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGM7QUFBQSxXQUFmO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQWtCSSw4REFBQywwREFBRDtBQUNFLFdBQUcsRUFBQyxpQ0FETjtBQUVFLGFBQUssRUFBQyxzQkFGUjtBQUdFLG1CQUFXLEVBQUMsNkJBSGQ7QUFJRSxrQkFBVSxFQUFDO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQWdDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0NEO0tBckN1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IExhcmdlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0xhcmdlQ2FyZCdcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTWVkaXVtQ2FyZCdcbmltcG9ydCBTbWFsbENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9TbWFsbENhcmQnXG5cbi8vaHR0cHM6Ly9haXJibmItbWFzdGVyLnZlcmNlbC5hcHAvXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2V4cGxvcmVEYXRhLCBjYXJkc0RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QWlyYm5iPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPEJhbm5lciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtOCBzbTpweC0xNiBsZzpweC0zMlwiID5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwdC02XCIgPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcGItNScgPkV4cGxvcmUgTmVhcmJ5PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQnID5cbiAgICAgICAgICAgICAgICB7ZXhwbG9yZURhdGE/Lm1hcCgoZGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxTbWFsbENhcmQga2V5PXtpbmRleH0gaW1nPXtkYXRhLmltZ30gbG9jYXRpb249e2RhdGEubG9jYXRpb259IGRpc3RhbmNlPXtkYXRhLmRpc3RhbmNlfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtNHhsIGZvbnQtc2VtaWJvbGQgcHktOCcgPkxpdmUgQW55d2hlcmU8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWF4LXctZnVsbCBvdmVyZmxvdy14LWF1dG8gb3ZlcmZsb3cteS1oaWRkZW4gXG4gICAgICAgICAgICAgICAgICBzcGFjZS14LTQgc2Nyb2xsYmFyLWhpZGUgaXRlbXMtY2VudGVyIHAtMycgPlxuICAgICAgICAgICAgICAgIHtjYXJkc0RhdGE/Lm1hcCgoZGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxNZWRpdW1DYXJkICBrZXk9e2luZGV4fSBpbWc9e2RhdGEuaW1nfSB0aXRsZT17ZGF0YS50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8TGFyZ2VDYXJkIFxuICAgICAgICAgICAgaW1nPSdodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vNGNqJ1xuICAgICAgICAgICAgdGl0bGU9J1RoZSBHcmVhdGVzdCBPdXRkb29yJ1xuICAgICAgICAgICAgZGVzY3JpcHRpb249J1dpc2hsaXN0cyBjdXJhdGVkIGJ5IEFpcmJuYidcbiAgICAgICAgICAgIGJ1dHRvblRleHQ9J0dldCBpbnNwaXJlZCdcbiAgICAgICAgICAvPlxuICAgICAgPC9tYWluPiBcbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbiAgY29uc3QgZXhwbG9yZURhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL3B5cCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgY29uc3QgY2FyZHNEYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS96cDEnKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZXhwbG9yZURhdGEsXG4gICAgICAgICAgY2FyZHNEYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIkJhbm5lciIsIkZvb3RlciIsIkhlYWRlciIsIkxhcmdlQ2FyZCIsIk1lZGl1bUNhcmQiLCJTbWFsbENhcmQiLCJIb21lIiwiZXhwbG9yZURhdGEiLCJjYXJkc0RhdGEiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJpbWciLCJsb2NhdGlvbiIsImRpc3RhbmNlIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9