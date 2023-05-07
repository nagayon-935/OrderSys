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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useOrder; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction useOrder() {\n    _s();\n    var ref = (0,lib_context__WEBPACK_IMPORTED_MODULE_1__.UseOrderInfoContext)(), orderInfo = ref.orderInfo, setOrderInfo = ref.setOrderInfo;\n    var initOrderInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(orderInfo).current;\n    function resgistOrderInfo(data, callback) {\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function _resgistOrderInfo() {\n        _resgistOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(data, callback) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            setOrderInfo(function(prevState) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prevState, data);\n                            }, function() {\n                                if (callback) {\n                                    callback();\n                                }\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function postOrderInfo() {\n        return _postOrderInfo.apply(this, arguments);\n    }\n    function _postOrderInfo() {\n        _postOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            3,\n                            4\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://localhost:3000/order\", orderInfo)\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(response.data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        setOrderInfo(initOrderInfo);\n                        return [\n                            7\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _postOrderInfo.apply(this, arguments);\n    }\n    ;\n    return {\n        orderInfo: orderInfo,\n        setOrderInfo: resgistOrderInfo,\n        postOrderInfo: postOrderInfo\n    };\n}\n_s(useOrder, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvdXNlT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDd0I7QUFDbkI7QUFFaEIsU0FBU0csUUFBUSxHQUFHOztJQUNqQyxJQUFtQ0YsR0FBcUIsR0FBckJBLGdFQUFtQixFQUFFLEVBQWhERyxTQUFTLEdBQWtCSCxHQUFxQixDQUFoREcsU0FBUyxFQUFFQyxZQUFZLEdBQUlKLEdBQXFCLENBQXJDSSxZQUFZO0lBQy9CLElBQU1DLGFBQWEsR0FBR0osNkNBQU0sQ0FBQ0UsU0FBUyxDQUFDLENBQUNHLE9BQU87YUFFaENDLGdCQUFnQixDQUFDQyxJQUFJLEVBQUVDLFFBQVE7ZUFBL0JGLGlCQUFnQjs7YUFBaEJBLGlCQUFnQjtRQUFoQkEsaUJBQWdCLEdBQS9CLDZGQUFnQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUU7Ozs7d0JBQzlDOzs0QkFBTUwsWUFBWSxDQUFDTSxTQUFBQSxTQUFTO3VDQUFLLG1GQUFLQSxTQUFTLEVBQUtGLElBQUksQ0FBRTs2QkFBQyxFQUFFLFdBQUk7Z0NBQy9ELElBQUlDLFFBQVEsRUFBRTtvQ0FDWEEsUUFBUSxFQUFFLENBQUM7Z0NBQ2QsQ0FBQzs0QkFFSCxDQUFDLENBQUM7MEJBQUE7O3dCQUxGLGFBS0UsQ0FBQzs7Ozs7O1FBQ0wsQ0FBQztlQVBjRixpQkFBZ0I7O2FBU2hCSSxhQUFhO2VBQWJBLGNBQWE7O2FBQWJBLGNBQWE7UUFBYkEsY0FBYSxHQUE1QiwrRkFBK0I7Z0JBRXJCQyxRQUFRLEVBRVBDLEtBQUs7Ozs7Ozs7Ozs7d0JBRks7OzRCQUFNZCxpREFBVSxDQUFDLDZCQUE2QixFQUFFSSxTQUFTLENBQUM7MEJBQUE7O3dCQUFyRVMsUUFBUSxHQUFHLGFBQTBEO3dCQUMzRUcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLENBQUM7Ozs7Ozt3QkFDcEJLLEtBQUs7d0JBQ1pFLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQzs7Ozs7O3dCQUVyQlQsWUFBWSxDQUFDQyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7OztRQUVoQyxDQUFDO2VBVGNNLGNBQWE7OztJQVc1QixPQUNFO1FBQUVSLFNBQVMsRUFBVEEsU0FBUztRQUFFQyxZQUFZLEVBQUVHLGdCQUFnQjtRQUFFSSxhQUFhLEVBQWJBLGFBQWE7S0FBQyxDQUM1RDtBQUVILENBQUM7R0E1QnVCVCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS91c2VPcmRlci5qcz9kN2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFVzZU9yZGVySW5mb0NvbnRleHQgfSBmcm9tIFwibGliL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPcmRlcigpIHtcbiAgY29uc3QgeyBvcmRlckluZm8sIHNldE9yZGVySW5mb30gPSBVc2VPcmRlckluZm9Db250ZXh0KCk7XG4gIGNvbnN0IGluaXRPcmRlckluZm8gPSB1c2VSZWYob3JkZXJJbmZvKS5jdXJyZW50O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHJlc2dpc3RPcmRlckluZm8oZGF0YSwgY2FsbGJhY2spIHtcbiAgICBhd2FpdCBzZXRPcmRlckluZm8ocHJldlN0YXRlID0+ICh7IC4uLnByZXZTdGF0ZSwgLi4uZGF0YSB9KSwgKCk9PntcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcG9zdE9yZGVySW5mbygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvb3JkZXInLCBvcmRlckluZm8pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1maW5hbGx5e1xuICAgICAgc2V0T3JkZXJJbmZvKGluaXRPcmRlckluZm8pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIHsgb3JkZXJJbmZvLCBzZXRPcmRlckluZm86IHJlc2dpc3RPcmRlckluZm8sIHBvc3RPcmRlckluZm99XG4gIClcblxufSJdLCJuYW1lcyI6WyJheGlvcyIsIlVzZU9yZGVySW5mb0NvbnRleHQiLCJ1c2VSZWYiLCJ1c2VPcmRlciIsIm9yZGVySW5mbyIsInNldE9yZGVySW5mbyIsImluaXRPcmRlckluZm8iLCJjdXJyZW50IiwicmVzZ2lzdE9yZGVySW5mbyIsImRhdGEiLCJjYWxsYmFjayIsInByZXZTdGF0ZSIsInBvc3RPcmRlckluZm8iLCJyZXNwb25zZSIsImVycm9yIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/useOrder.js\n"));

/***/ })

});