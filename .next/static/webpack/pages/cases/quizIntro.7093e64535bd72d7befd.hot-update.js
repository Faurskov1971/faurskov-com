"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cases/quizIntro",{

/***/ "./pages/cases/quiz/Game.tsx":
/*!***********************************!*\
  !*** ./pages/cases/quiz/Game.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ \"./pages/cases/quiz/Category.tsx\");\n/* harmony import */ var _data_uk_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/uk.json */ \"./pages/cases/quiz/data/uk.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/undervisning/next/nextjs-blog/pages/cases/quiz/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar jeopardyData = _data_uk_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Game(getStaticProps) {\n  _s();\n\n  var _this = this;\n\n  console.log(getStaticProps);\n\n  var onAction = function onAction() {};\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      gamePoint = _useState[0],\n      setGamePoint = _useState[1];\n\n  var gamePointF = function gamePointF(point) {\n    setGamePoint(gamePoint + point);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"QUIZ | GAME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: [\"Point: \", gamePoint]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), jeopardyData.games.map(function (game, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {\n        category: game.category,\n        question_array: game.question_array,\n        gamePointF: gamePointF\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(Game, \"13bHA2U6O7+37LLRGFmrCqhGyY4=\");\n\n_c = Game;\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlcy9xdWl6L0dhbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQSxJQUFJSyxZQUFZLEdBQUdGLDBDQUFuQjtBQUdlLFNBQVNHLElBQVQsQ0FBY0MsY0FBZCxFQUE4QjtBQUFBOztBQUFBOztBQUM3Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGNBQVo7O0FBQ0UsTUFBTUcsUUFBUSxHQUFDLFNBQVRBLFFBQVMsR0FBSSxDQUFFLENBQXJCOztBQUNBLGtCQUFrQ04sK0NBQVEsQ0FBUyxDQUFULENBQTFDO0FBQUEsTUFBT08sU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxNQUFNQyxVQUFVLEdBQUMsU0FBWEEsVUFBVyxDQUFDQyxLQUFELEVBQWdCO0FBQy9CRixJQUFBQSxZQUFZLENBQUNELFNBQVMsR0FBQ0csS0FBWCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFJRTtBQUFBLDRCQUFXSCxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBTUVOLFlBQVksQ0FBQ1UsS0FBYixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3RDLDBCQUNBLDhEQUFDLDhDQUFEO0FBRUUsZ0JBQVEsRUFBV0QsSUFBSSxDQUFDRSxRQUYxQjtBQUdFLHNCQUFjLEVBQUtGLElBQUksQ0FBQ0csY0FIMUI7QUFJRSxrQkFBVSxFQUFTUDtBQUpyQixTQUNxQkssS0FEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBO0FBUUQsS0FURCxDQU5GO0FBQUEsa0JBREY7QUFvQkQ7O0dBNUJ1Qlo7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Nhc2VzL3F1aXovR2FtZS50c3g/NmU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9DYXRlZ29yeSc7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhL3VrLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcImNvbnNvbGVcIjtcbmltcG9ydCB7Z2V0U3RhdGljUHJvcHN9IGZyb20gJy4vZGF0YS9RdWl6RGF0YSc7XG5cbmxldCBqZW9wYXJkeURhdGEgPSBkYXRhO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoZ2V0U3RhdGljUHJvcHMpIHtcbmNvbnNvbGUubG9nKGdldFN0YXRpY1Byb3BzKTtcbiAgY29uc3Qgb25BY3Rpb249KCk9Pnt9XG4gIGNvbnN0IFtnYW1lUG9pbnQsIHNldEdhbWVQb2ludF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApOyAgXG4gIGNvbnN0IGdhbWVQb2ludEY9KHBvaW50Om51bWJlcik9PntcbiAgICBzZXRHYW1lUG9pbnQoZ2FtZVBvaW50K3BvaW50KTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlFVSVogfCBHQU1FPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgICA8cD5Qb2ludDoge2dhbWVQb2ludH08L3A+XG4gICAgICB7XG4gICAgICBqZW9wYXJkeURhdGEuZ2FtZXMubWFwKChnYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgIDxDYXRlZ29yeSBcbiAgICAgICAgICBrZXkgICAgICAgICAgICAgPSB7aW5kZXh9XG4gICAgICAgICAgY2F0ZWdvcnkgICAgICAgID0ge2dhbWUuY2F0ZWdvcnl9XG4gICAgICAgICAgcXVlc3Rpb25fYXJyYXkgID0ge2dhbWUucXVlc3Rpb25fYXJyYXl9XG4gICAgICAgICAgZ2FtZVBvaW50RiAgICAgID0ge2dhbWVQb2ludEZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSAgXG4gICAgICB9XG4gICAgKX1cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJDYXRlZ29yeSIsImRhdGEiLCJ1c2VTdGF0ZSIsImplb3BhcmR5RGF0YSIsIkdhbWUiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvbkFjdGlvbiIsImdhbWVQb2ludCIsInNldEdhbWVQb2ludCIsImdhbWVQb2ludEYiLCJwb2ludCIsImdhbWVzIiwibWFwIiwiZ2FtZSIsImluZGV4IiwiY2F0ZWdvcnkiLCJxdWVzdGlvbl9hcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cases/quiz/Game.tsx\n");

/***/ })

});