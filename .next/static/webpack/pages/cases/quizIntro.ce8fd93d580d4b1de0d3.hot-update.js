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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Category */ \"./pages/cases/quiz/Category.tsx\");\n/* harmony import */ var _data_uk_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/uk.json */ \"./pages/cases/quiz/data/uk.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/faurskov/Documents/projekter/undervisning/next/nextjs-blog/pages/cases/quiz/Game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar jeopardyData = _data_uk_json__WEBPACK_IMPORTED_MODULE_5__;\n\nvar getStaticProps = /*#__PURE__*/function () {\n  var _ref = (0,_Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    return _Users_faurskov_Documents_projekter_undervisning_next_nextjs_blog_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", {\n              props: {\n                quizData: _data_uk_json__WEBPACK_IMPORTED_MODULE_5__\n              }\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getStaticProps() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n(function (_ref2) {\n  var quizData = _ref2.quizData;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: quizData\n  }, void 0, false);\n});\n\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      gamePoint = _useState[0],\n      setGamePoint = _useState[1];\n\n  var gamePointF = function gamePointF(point) {\n    setGamePoint(gamePoint + point);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"title\", {\n        children: \"QUIZ | GAME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n      children: [\"Point: \", gamePoint]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), jeopardyData.games.map(function (game, index) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_4__.default, {\n        category: game.category,\n        question_array: game.question_array,\n        gamePointF: gamePointF\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true);\n}\n\n_s(Game, \"13bHA2U6O7+37LLRGFmrCqhGyY4=\");\n\n_c = Game;\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXNlcy9xdWl6L0dhbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFJSyxZQUFZLEdBQUdGLDBDQUFuQjs7QUFFQSxJQUFNRyxjQUFjO0FBQUEsbVZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUNmO0FBQ0pDLGNBQUFBLEtBQUssRUFBQztBQUNKQyxnQkFBQUEsUUFBUSxFQUFDTCwwQ0FBSUE7QUFEVDtBQURGLGFBRGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZEcsY0FBYztBQUFBO0FBQUE7QUFBQSxHQUFwQjs7QUFPQTtBQUFBLE1BQUVFLFFBQUYsU0FBRUEsUUFBRjtBQUFBLHNCQUNFO0FBQUEsY0FDR0E7QUFESCxtQkFERjtBQUFBOztBQU1lLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0Isa0JBQWtDTCwrQ0FBUSxDQUFTLENBQVQsQ0FBMUM7QUFBQSxNQUFPTSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLE1BQU1DLFVBQVUsR0FBQyxTQUFYQSxVQUFXLENBQUNDLEtBQUQsRUFBZ0I7QUFDL0JGLElBQUFBLFlBQVksQ0FBQ0QsU0FBUyxHQUFDRyxLQUFYLENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUlFO0FBQUEsNEJBQVdILFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFNRUwsWUFBWSxDQUFDUyxLQUFiLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdEMsMEJBQ0EsOERBQUMsOENBQUQ7QUFFRSxnQkFBUSxFQUFXRCxJQUFJLENBQUNFLFFBRjFCO0FBR0Usc0JBQWMsRUFBS0YsSUFBSSxDQUFDRyxjQUgxQjtBQUlFLGtCQUFVLEVBQVNQO0FBSnJCLFNBQ3FCSyxLQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREE7QUFRRCxLQVRELENBTkY7QUFBQSxrQkFERjtBQW9CRDs7R0ExQnVCUjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzZXMvcXVpei9HYW1lLnRzeD82ZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuL0NhdGVnb3J5JztcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEvdWsuanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiY29uc29sZVwiO1xuXG5sZXQgamVvcGFyZHlEYXRhID0gZGF0YTtcblxuY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PntcbiAgcmV0dXJue1xuICAgIHByb3BzOntcbiAgICAgIHF1aXpEYXRhOmRhdGEsXG4gICAgfSxcbiAgfVxufVxuKHtxdWl6RGF0YX0pPT4oXG4gIDw+XG4gICAge3F1aXpEYXRhfVxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgW2dhbWVQb2ludCwgc2V0R2FtZVBvaW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7ICBcbiAgY29uc3QgZ2FtZVBvaW50Rj0ocG9pbnQ6bnVtYmVyKT0+e1xuICAgIHNldEdhbWVQb2ludChnYW1lUG9pbnQrcG9pbnQpO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+UVVJWiB8IEdBTUU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICAgIDxwPlBvaW50OiB7Z2FtZVBvaW50fTwvcD5cbiAgICAgIHtcbiAgICAgIGplb3BhcmR5RGF0YS5nYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPENhdGVnb3J5IFxuICAgICAgICAgIGtleSAgICAgICAgICAgICA9IHtpbmRleH1cbiAgICAgICAgICBjYXRlZ29yeSAgICAgICAgPSB7Z2FtZS5jYXRlZ29yeX1cbiAgICAgICAgICBxdWVzdGlvbl9hcnJheSAgPSB7Z2FtZS5xdWVzdGlvbl9hcnJheX1cbiAgICAgICAgICBnYW1lUG9pbnRGICAgICAgPSB7Z2FtZVBvaW50Rn1cbiAgICAgICAgICAvPlxuICAgICAgICApICBcbiAgICAgIH1cbiAgICApfVxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIkNhdGVnb3J5IiwiZGF0YSIsInVzZVN0YXRlIiwiamVvcGFyZHlEYXRhIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyIsInF1aXpEYXRhIiwiR2FtZSIsImdhbWVQb2ludCIsInNldEdhbWVQb2ludCIsImdhbWVQb2ludEYiLCJwb2ludCIsImdhbWVzIiwibWFwIiwiZ2FtZSIsImluZGV4IiwiY2F0ZWdvcnkiLCJxdWVzdGlvbl9hcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cases/quiz/Game.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanM/ODcxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\n");

/***/ })

});