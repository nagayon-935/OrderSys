"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./api/useOrder.js":
/*!*************************!*\
  !*** ./api/useOrder.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useOrder; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction useOrder() {\n    _s();\n    var ref = (0,lib_context__WEBPACK_IMPORTED_MODULE_1__.UseOrderInfoContext)(), orderInfo = ref.orderInfo, setOrderInfo = ref.setOrderInfo;\n    var initOrderInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(orderInfo).current;\n    function resgistOrderInfo(data, callback) {\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function _resgistOrderInfo() {\n        _resgistOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(data, callback) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            setOrderInfo(function(prevState) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prevState, data);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        if (!callback) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            callback()\n                        ];\n                    case 2:\n                        _state.sent();\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function postOrderInfo(data) {\n        return _postOrderInfo.apply(this, arguments);\n    }\n    function _postOrderInfo() {\n        _postOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(data) {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(data);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            4,\n                            5\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://localhost:3000/order\", orderInfo)\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        console.log(response.data);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 4:\n                        setOrderInfo(initOrderInfo);\n                        return [\n                            7\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _postOrderInfo.apply(this, arguments);\n    }\n    ;\n    return {\n        orderInfo: orderInfo,\n        setOrderInfo: resgistOrderInfo,\n        postOrderInfo: postOrderInfo\n    };\n}\n_s(useOrder, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvdXNlT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDd0I7QUFDbkI7QUFFaEIsU0FBU0csUUFBUSxHQUFHOztJQUNqQyxJQUFtQ0YsR0FBcUIsR0FBckJBLGdFQUFtQixFQUFFLEVBQWhERyxTQUFTLEdBQWtCSCxHQUFxQixDQUFoREcsU0FBUyxFQUFFQyxZQUFZLEdBQUlKLEdBQXFCLENBQXJDSSxZQUFZO0lBQy9CLElBQU1DLGFBQWEsR0FBR0osNkNBQU0sQ0FBQ0UsU0FBUyxDQUFDLENBQUNHLE9BQU87YUFFaENDLGdCQUFnQixDQUFDQyxJQUFJLEVBQUVDLFFBQVE7ZUFBL0JGLGlCQUFnQjs7YUFBaEJBLGlCQUFnQjtRQUFoQkEsaUJBQWdCLEdBQS9CLDZGQUFnQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUU7Ozs7d0JBQzlDOzs0QkFBTUwsWUFBWSxDQUFDTSxTQUFBQSxTQUFTO3VDQUFLLG1GQUFLQSxTQUFTLEVBQUtGLElBQUksQ0FBRTs2QkFBQyxDQUFDOzBCQUFBOzt3QkFBNUQsYUFBNEQsQ0FBQzs2QkFDekRDLFFBQVEsRUFBUkE7OzswQkFBUTt3QkFDVjs7NEJBQU1BLFFBQVEsRUFBRTswQkFBQTs7d0JBQWhCLGFBQWdCLENBQUM7Ozs7Ozs7O1FBRXJCLENBQUM7ZUFMY0YsaUJBQWdCOzthQU9oQkksYUFBYSxDQUFDSCxJQUFJO2VBQWxCRyxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FBNUIsNkZBQTZCSCxJQUFJLEVBQUU7Z0JBR3pCSSxRQUFRLEVBRVBDLEtBQUs7Ozs7d0JBSmRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7O3dCQUVDOzs0QkFBTVQsaURBQVUsQ0FBQyw2QkFBNkIsRUFBRUksU0FBUyxDQUFDOzBCQUFBOzt3QkFBckVTLFFBQVEsR0FBRyxhQUEwRDt3QkFDM0VFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNKLElBQUksQ0FBQyxDQUFDOzs7Ozs7d0JBQ3BCSyxLQUFLO3dCQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7Ozs7Ozt3QkFHckJULFlBQVksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7UUFFaEMsQ0FBQztlQVhjTSxjQUFhOzs7SUFhNUIsT0FDRTtRQUFFUixTQUFTLEVBQVRBLFNBQVM7UUFBRUMsWUFBWSxFQUFFRyxnQkFBZ0I7UUFBRUksYUFBYSxFQUFiQSxhQUFhO0tBQUMsQ0FDNUQ7QUFFSCxDQUFDO0dBNUJ1QlQsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvdXNlT3JkZXIuanM/ZDdiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBVc2VPcmRlckluZm9Db250ZXh0IH0gZnJvbSBcImxpYi9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT3JkZXIoKSB7XG4gIGNvbnN0IHsgb3JkZXJJbmZvLCBzZXRPcmRlckluZm99ID0gVXNlT3JkZXJJbmZvQ29udGV4dCgpO1xuICBjb25zdCBpbml0T3JkZXJJbmZvID0gdXNlUmVmKG9yZGVySW5mbykuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiByZXNnaXN0T3JkZXJJbmZvKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgYXdhaXQgc2V0T3JkZXJJbmZvKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIC4uLmRhdGEgfSkpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwb3N0T3JkZXJJbmZvKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvb3JkZXInLCBvcmRlckluZm8pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBmaW5hbGx5e1xuICAgICAgc2V0T3JkZXJJbmZvKGluaXRPcmRlckluZm8pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIHsgb3JkZXJJbmZvLCBzZXRPcmRlckluZm86IHJlc2dpc3RPcmRlckluZm8sIHBvc3RPcmRlckluZm99XG4gIClcblxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlVzZU9yZGVySW5mb0NvbnRleHQiLCJ1c2VSZWYiLCJ1c2VPcmRlciIsIm9yZGVySW5mbyIsInNldE9yZGVySW5mbyIsImluaXRPcmRlckluZm8iLCJjdXJyZW50IiwicmVzZ2lzdE9yZGVySW5mbyIsImRhdGEiLCJjYWxsYmFjayIsInByZXZTdGF0ZSIsInBvc3RPcmRlckluZm8iLCJyZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/useOrder.js\n"));

/***/ })

});