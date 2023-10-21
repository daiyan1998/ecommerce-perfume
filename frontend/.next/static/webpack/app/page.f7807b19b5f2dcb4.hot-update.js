"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/slices/productsApiSlice.js":
/*!****************************************!*\
  !*** ./src/slices/productsApiSlice.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   productsApiSlice: function() { return /* binding */ productsApiSlice; },\n/* harmony export */   useGetProductDetailsQuery: function() { return /* binding */ useGetProductDetailsQuery; },\n/* harmony export */   useGetProductsQuery: function() { return /* binding */ useGetProductsQuery; }\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants.js */ \"(app-pages-browser)/./src/constants.js\");\n/* harmony import */ var _apiSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiSlice.js */ \"(app-pages-browser)/./src/slices/apiSlice.js\");\n\n\nconst productsApiSlice = _apiSlice_js__WEBPACK_IMPORTED_MODULE_1__.apiSlice.injectEndpoints({\n    endpoints: (builder)=>({\n            getProducts: builder.query({\n                query: ()=>({\n                        url: _constants_js__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_URL\n                    }),\n                keepUnusedDataFor: 5\n            }),\n            getProductDetails: builder.query({\n                query: (prductId)=>({\n                        url: \"\".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__.PRODUCTS_URL, \"/\").concat(prductId)\n                    })\n            })\n        })\n});\nconst { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zbGljZXMvcHJvZHVjdHNBcGlTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUNMO0FBRWxDLE1BQU1FLG1CQUFtQkQsa0RBQVFBLENBQUNFLGVBQWUsQ0FBQztJQUN2REMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxhQUFhRCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3pCQSxPQUFPLElBQU87d0JBQ1pDLEtBQUtSLHVEQUFZQTtvQkFDbkI7Z0JBQ0FTLG1CQUFtQjtZQUNyQjtZQUNBQyxtQkFBbUJMLFFBQVFFLEtBQUssQ0FBQztnQkFDL0JBLE9BQU8sQ0FBQ0ksV0FBYzt3QkFDcEJILEtBQUssR0FBbUJHLE9BQWhCWCx1REFBWUEsRUFBQyxLQUFZLE9BQVRXO29CQUMxQjtZQUNGO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFQyxtQkFBbUIsRUFBRUMseUJBQXlCLEVBQUUsR0FDN0RYLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2xpY2VzL3Byb2R1Y3RzQXBpU2xpY2UuanM/ZTAyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQUk9EVUNUU19VUkwgfSBmcm9tIFwiQC9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IHsgYXBpU2xpY2UgfSBmcm9tIFwiLi9hcGlTbGljZS5qc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzQXBpU2xpY2UgPSBhcGlTbGljZS5pbmplY3RFbmRwb2ludHMoe1xyXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XHJcbiAgICBnZXRQcm9kdWN0czogYnVpbGRlci5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiAoKSA9PiAoe1xyXG4gICAgICAgIHVybDogUFJPRFVDVFNfVVJMLFxyXG4gICAgICB9KSxcclxuICAgICAga2VlcFVudXNlZERhdGFGb3I6IDUsXHJcbiAgICB9KSxcclxuICAgIGdldFByb2R1Y3REZXRhaWxzOiBidWlsZGVyLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IChwcmR1Y3RJZCkgPT4gKHtcclxuICAgICAgICB1cmw6IGAke1BST0RVQ1RTX1VSTH0vJHtwcmR1Y3RJZH1gLFxyXG4gICAgICB9KSxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHVzZUdldFByb2R1Y3RzUXVlcnksIHVzZUdldFByb2R1Y3REZXRhaWxzUXVlcnkgfSA9XHJcbiAgcHJvZHVjdHNBcGlTbGljZTtcclxuIl0sIm5hbWVzIjpbIlBST0RVQ1RTX1VSTCIsImFwaVNsaWNlIiwicHJvZHVjdHNBcGlTbGljZSIsImluamVjdEVuZHBvaW50cyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRQcm9kdWN0cyIsInF1ZXJ5IiwidXJsIiwia2VlcFVudXNlZERhdGFGb3IiLCJnZXRQcm9kdWN0RGV0YWlscyIsInByZHVjdElkIiwidXNlR2V0UHJvZHVjdHNRdWVyeSIsInVzZUdldFByb2R1Y3REZXRhaWxzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/slices/productsApiSlice.js\n"));

/***/ })

});