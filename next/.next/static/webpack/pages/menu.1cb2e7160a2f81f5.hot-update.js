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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useOrder; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction useOrder() {\n    var getOrderInfo = function getOrderInfo() {\n        return orderInfo;\n    };\n    var resetOrderInfo = function resetOrderInfo() {\n        setOrderInfo(initOrderInfo);\n    };\n    _s();\n    var ref = (0,lib_context__WEBPACK_IMPORTED_MODULE_1__.UseOrderInfoContext)(), orderInfo = ref.orderInfo, setOrderInfo = ref.setOrderInfo;\n    var initOrderInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(orderInfo).current;\n    function resgistOrderInfo(data, callback) {\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function _resgistOrderInfo() {\n        _resgistOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(data, callback) {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(data);\n                        return [\n                            4,\n                            setOrderInfo(function(prevState) {\n                                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prevState, data);\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        console.log(orderInfo);\n                        if (!callback) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            callback()\n                        ];\n                    case 2:\n                        _state.sent();\n                        _state.label = 3;\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _resgistOrderInfo.apply(this, arguments);\n    }\n    function postOrderInfo() {\n        return _postOrderInfo.apply(this, arguments);\n    }\n    function _postOrderInfo() {\n        _postOrderInfo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            3,\n                            4\n                        ]);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://localhost:3000/order\", orderInfo)\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(response.data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        resetOrderInfo();\n                        return [\n                            7\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _postOrderInfo.apply(this, arguments);\n    }\n    ;\n    return {\n        orderInfo: orderInfo,\n        setOrderInfo: resgistOrderInfo,\n        postOrderInfo: postOrderInfo,\n        getOrderInfo: getOrderInfo,\n        resetOrderInfo: resetOrderInfo\n    };\n}\n_s(useOrder, \"J9pzIsEOVEZ74gjFtMkCj+5Po7s=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvdXNlT3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDd0I7QUFDbkI7QUFFaEIsU0FBU0csUUFBUSxHQUFHO1FBeUJ4QkMsWUFBWSxHQUFyQixTQUFTQSxZQUFZLEdBQUU7UUFDckIsT0FBT0MsU0FBUyxDQUFDO0lBQ25CLENBQUM7UUFFUUMsY0FBYyxHQUF2QixTQUFTQSxjQUFjLEdBQUU7UUFDdkJDLFlBQVksQ0FBQ0MsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7SUE5QkQsSUFBbUNQLEdBQXFCLEdBQXJCQSxnRUFBbUIsRUFBRSxFQUFoREksU0FBUyxHQUFrQkosR0FBcUIsQ0FBaERJLFNBQVMsRUFBRUUsWUFBWSxHQUFJTixHQUFxQixDQUFyQ00sWUFBWTtJQUMvQixJQUFNQyxhQUFhLEdBQUdOLDZDQUFNLENBQUNHLFNBQVMsQ0FBQyxDQUFDSSxPQUFPO2FBRWhDQyxnQkFBZ0IsQ0FBQ0MsSUFBSSxFQUFFQyxRQUFRO2VBQS9CRixpQkFBZ0I7O2FBQWhCQSxpQkFBZ0I7UUFBaEJBLGlCQUFnQixHQUEvQiw2RkFBZ0NDLElBQUksRUFBRUMsUUFBUSxFQUFFOzs7O3dCQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO3dCQUNsQjs7NEJBQU1KLFlBQVksQ0FBQ1EsU0FBQUEsU0FBUzt1Q0FBSyxtRkFBS0EsU0FBUyxFQUFLSixJQUFJLENBQUU7NkJBQUMsQ0FBQzswQkFBQTs7d0JBQTVELGFBQTRELENBQUM7d0JBQzdERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsU0FBUyxDQUFDLENBQUM7NkJBQ25CTyxRQUFRLEVBQVJBOzs7MEJBQVE7d0JBQ1Y7OzRCQUFNQSxRQUFRLEVBQUU7MEJBQUE7O3dCQUFoQixhQUFnQixDQUFDOzs7Ozs7OztRQUVyQixDQUFDO2VBUGNGLGlCQUFnQjs7YUFTaEJNLGFBQWE7ZUFBYkEsY0FBYTs7YUFBYkEsY0FBYTtRQUFiQSxjQUFhLEdBQTVCLCtGQUErQjtnQkFFckJDLFFBQVEsRUFFUEMsS0FBSzs7Ozs7Ozs7Ozt3QkFGSzs7NEJBQU1sQixpREFBVSxDQUFDLDZCQUE2QixFQUFFSyxTQUFTLENBQUM7MEJBQUE7O3dCQUFyRVksUUFBUSxHQUFHLGFBQTBEO3dCQUMzRUosT0FBTyxDQUFDQyxHQUFHLENBQUNHLFFBQVEsQ0FBQ04sSUFBSSxDQUFDLENBQUM7Ozs7Ozt3QkFDcEJPLEtBQUs7d0JBQ1pMLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQzs7Ozs7O3dCQUdyQlosY0FBYyxFQUFFLENBQUM7Ozs7Ozs7Ozs7UUFFckIsQ0FBQztlQVZjVSxjQUFhOzs7SUFvQjVCLE9BQ0U7UUFBRVgsU0FBUyxFQUFUQSxTQUFTO1FBQUVFLFlBQVksRUFBRUcsZ0JBQWdCO1FBQUVNLGFBQWEsRUFBYkEsYUFBYTtRQUFFWixZQUFZLEVBQVpBLFlBQVk7UUFBRUUsY0FBYyxFQUFkQSxjQUFjO0tBQUMsQ0FDMUY7QUFFSCxDQUFDO0dBckN1QkgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkvdXNlT3JkZXIuanM/ZDdiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBVc2VPcmRlckluZm9Db250ZXh0IH0gZnJvbSBcImxpYi9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlT3JkZXIoKSB7XG4gIGNvbnN0IHsgb3JkZXJJbmZvLCBzZXRPcmRlckluZm99ID0gVXNlT3JkZXJJbmZvQ29udGV4dCgpO1xuICBjb25zdCBpbml0T3JkZXJJbmZvID0gdXNlUmVmKG9yZGVySW5mbykuY3VycmVudDtcblxuICBhc3luYyBmdW5jdGlvbiByZXNnaXN0T3JkZXJJbmZvKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgYXdhaXQgc2V0T3JkZXJJbmZvKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIC4uLmRhdGEgfSkpO1xuICAgIGNvbnNvbGUubG9nKG9yZGVySW5mbyk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3RPcmRlckluZm8oKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL29yZGVyJywgb3JkZXJJbmZvKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgZmluYWxseXtcbiAgICAgIHJlc2V0T3JkZXJJbmZvKCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE9yZGVySW5mbygpe1xuICAgIHJldHVybiBvcmRlckluZm87XG4gIH1cblxuICBmdW5jdGlvbiByZXNldE9yZGVySW5mbygpe1xuICAgIHNldE9yZGVySW5mbyhpbml0T3JkZXJJbmZvKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgeyBvcmRlckluZm8sIHNldE9yZGVySW5mbzogcmVzZ2lzdE9yZGVySW5mbywgcG9zdE9yZGVySW5mbywgZ2V0T3JkZXJJbmZvLCByZXNldE9yZGVySW5mb31cbiAgKVxuXG59Il0sIm5hbWVzIjpbImF4aW9zIiwiVXNlT3JkZXJJbmZvQ29udGV4dCIsInVzZVJlZiIsInVzZU9yZGVyIiwiZ2V0T3JkZXJJbmZvIiwib3JkZXJJbmZvIiwicmVzZXRPcmRlckluZm8iLCJzZXRPcmRlckluZm8iLCJpbml0T3JkZXJJbmZvIiwiY3VycmVudCIsInJlc2dpc3RPcmRlckluZm8iLCJkYXRhIiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwicHJldlN0YXRlIiwicG9zdE9yZGVySW5mbyIsInJlc3BvbnNlIiwiZXJyb3IiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/useOrder.js\n"));

/***/ })

});