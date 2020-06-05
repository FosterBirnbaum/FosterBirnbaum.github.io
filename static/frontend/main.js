/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"common":"common","AboutUs":"AboutUs","Header":"Header","Login":"Login","Register":"Register","SearchResultsPage":"SearchResultsPage","PublicCandidateProfile":"PublicCandidateProfile","QuestionPage":"QuestionPage","VoterProfile":"VoterProfile"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/frontend/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./homepage/frontend/src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./homepage/frontend/src/actions/types.js":
/*!************************************************!*\
  !*** ./homepage/frontend/src/actions/types.js ***!
  \************************************************/
/*! exports provided: GET_QUESTIONS, GET_ANSWERS, POST_QUESTION, POST_UPVOTES, POST_ANSWER, UPDATE_ANSWER, FLAG_QUESTION, GET_ELECTION_TAGS, GET_TOPIC_TAGS, GET_SORT_TYPES, SET_ELECTION_TAGS, SET_TOPIC_TAGS, SET_SORT_TYPE, REGISTER_USER, LOGIN_USER, LOGOUT_USER, GET_USER_INFO, UPDATE_USER_INFO, GET_USER_QUESTIONS, GET_SEARCH_RESULTS, GET_QUESTION_FOR_ANSWER, GET_CANDIDATE_ANSWERED_QUESTIONS, GET_CANDIDATE_PUBLIC_INFO, GET_CANDIDATE_ANSWERS, RESET_RESULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_QUESTIONS\", function() { return GET_QUESTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ANSWERS\", function() { return GET_ANSWERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST_QUESTION\", function() { return POST_QUESTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST_UPVOTES\", function() { return POST_UPVOTES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POST_ANSWER\", function() { return POST_ANSWER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ANSWER\", function() { return UPDATE_ANSWER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLAG_QUESTION\", function() { return FLAG_QUESTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ELECTION_TAGS\", function() { return GET_ELECTION_TAGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TOPIC_TAGS\", function() { return GET_TOPIC_TAGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_SORT_TYPES\", function() { return GET_SORT_TYPES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_ELECTION_TAGS\", function() { return SET_ELECTION_TAGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_TOPIC_TAGS\", function() { return SET_TOPIC_TAGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SORT_TYPE\", function() { return SET_SORT_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGISTER_USER\", function() { return REGISTER_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_USER\", function() { return LOGIN_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT_USER\", function() { return LOGOUT_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_INFO\", function() { return GET_USER_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_USER_INFO\", function() { return UPDATE_USER_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_QUESTIONS\", function() { return GET_USER_QUESTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_SEARCH_RESULTS\", function() { return GET_SEARCH_RESULTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_QUESTION_FOR_ANSWER\", function() { return GET_QUESTION_FOR_ANSWER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_CANDIDATE_ANSWERED_QUESTIONS\", function() { return GET_CANDIDATE_ANSWERED_QUESTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_CANDIDATE_PUBLIC_INFO\", function() { return GET_CANDIDATE_PUBLIC_INFO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_CANDIDATE_ANSWERS\", function() { return GET_CANDIDATE_ANSWERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET_RESULTS\", function() { return RESET_RESULTS; });\n//Function types so that reducer knows which function was called\nvar GET_QUESTIONS = \"GET_QUESTIONS\";\nvar GET_ANSWERS = \"GET_ANSWERS\";\nvar POST_QUESTION = \"POST_QUESTION\";\nvar POST_UPVOTES = \"POST_UPVOTES\";\nvar POST_ANSWER = \"POST_ANSWER\";\nvar UPDATE_ANSWER = \"UPDATE_ANSWER\";\nvar FLAG_QUESTION = \"FLAG_QUESTION\";\nvar GET_ELECTION_TAGS = \"GET_ELECTION_TAGS\";\nvar GET_TOPIC_TAGS = \"GET_TOPIC_TAGS\";\nvar GET_SORT_TYPES = \"GET_SORT_TYPES\";\nvar SET_ELECTION_TAGS = \"SET_ELECTION_TAGS\";\nvar SET_TOPIC_TAGS = \"SET_TOPIC_TAGS\";\nvar SET_SORT_TYPE = \"SET_SORT_TYPE\";\nvar REGISTER_USER = \"REGISTER_USER\";\nvar LOGIN_USER = \"LOGIN_USER\";\nvar LOGOUT_USER = \"LOGOUT_USER\";\nvar GET_USER_INFO = \"GET_USER_INFO\";\nvar UPDATE_USER_INFO = \"UPDATE_USER_INFO\";\nvar GET_USER_QUESTIONS = \"GET_USER_QUESTIONS\";\nvar GET_SEARCH_RESULTS = \"GET_SEARCH_RESULTS\";\nvar GET_QUESTION_FOR_ANSWER = \"GET_QUESTION_FOR_ANSWER\";\nvar GET_CANDIDATE_ANSWERED_QUESTIONS = \"GET_CANDIDATE_ANSWERED_QUESTIONS\";\nvar GET_CANDIDATE_PUBLIC_INFO = \"GET_CANDIDATE_PUBLIC_INFO\";\nvar GET_CANDIDATE_ANSWERS = \"GET_CANDIDATE_ANSWERS\";\nvar RESET_RESULTS = \"RESET_RESULTS\";\n\n//# sourceURL=webpack:///./homepage/frontend/src/actions/types.js?");

/***/ }),

/***/ "./homepage/frontend/src/components/layout/ErrorBoundary.js":
/*!******************************************************************!*\
  !*** ./homepage/frontend/src/components/layout/ErrorBoundary.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ErrorBoundary = /*#__PURE__*/function (_Component) {\n  _inherits(ErrorBoundary, _Component);\n\n  function ErrorBoundary(props) {\n    var _this;\n\n    _classCallCheck(this, ErrorBoundary);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));\n    _this.state = {\n      hasError: false\n    };\n    return _this;\n  }\n\n  _createClass(ErrorBoundary, [{\n    key: \"componentDidCatch\",\n    value: function componentDidCatch(error, errorInfo) {\n      console.log(error);\n      console.log(errorInfo);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.state.hasError) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n          variant: \"danger\",\n          style: {\n            width: 'fit-content'\n          }\n        }, \"Something went wrong!\"));\n      }\n\n      return this.props.children;\n    }\n  }], [{\n    key: \"getDerivedStateFromError\",\n    value: function getDerivedStateFromError(error) {\n      return {\n        hasError: true\n      };\n    }\n  }]);\n\n  return ErrorBoundary;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./homepage/frontend/src/components/layout/ErrorBoundary.js?");

/***/ }),

/***/ "./homepage/frontend/src/components/misc/ErrorPage.js":
/*!************************************************************!*\
  !*** ./homepage/frontend/src/components/misc/ErrorPage.js ***!
  \************************************************************/
/*! exports provided: ErrorPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ErrorPage\", function() { return ErrorPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ErrorPage = /*#__PURE__*/function (_Component) {\n  _inherits(ErrorPage, _Component);\n\n  function ErrorPage() {\n    _classCallCheck(this, ErrorPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));\n  }\n\n  _createClass(ErrorPage, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n        className: \"text-center\",\n        style: {\n          \"backgroundColor\": \"white\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Uh oh!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"We're sorry we couldn't find the page you're looking for. \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"In the meantime, would you like to go back to the \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: \"/\"\n      }, \"homepage\"), \"?\"));\n    }\n  }]);\n\n  return ErrorPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorPage);\n\n//# sourceURL=webpack:///./homepage/frontend/src/components/misc/ErrorPage.js?");

/***/ }),

/***/ "./homepage/frontend/src/index.js":
/*!****************************************!*\
  !*** ./homepage/frontend/src/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./homepage/frontend/src/store.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_layout_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/ErrorBoundary */ \"./homepage/frontend/src/components/layout/ErrorBoundary.js\");\n/* harmony import */ var _components_misc_ErrorPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/misc/ErrorPage */ \"./homepage/frontend/src/components/misc/ErrorPage.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-ga */ \"./node_modules/react-ga/dist/esm/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n//Overall organization of urls. \n\n\n\n\n\n\n\n\n\n\n\nvar Header = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | Header */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"Header\")]).then(__webpack_require__.bind(null, /*! ./components/layout/Header */ \"./homepage/frontend/src/components/layout/Header.js\"));\n});\nvar AboutUs = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | AboutUs */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"AboutUs\")]).then(__webpack_require__.bind(null, /*! ./components/misc/AboutUs */ \"./homepage/frontend/src/components/misc/AboutUs.js\"));\n});\nvar QuestionPage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | QuestionPage */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"vendor\"), __webpack_require__.e(\"QuestionPage\")]).then(__webpack_require__.bind(null, /*! ./components/questions/QuestionPage */ \"./homepage/frontend/src/components/questions/QuestionPage.js\"));\n});\nvar Login = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | Login */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"Login\")]).then(__webpack_require__.bind(null, /*! ./components/accounts/Login */ \"./homepage/frontend/src/components/accounts/Login.js\"));\n});\nvar Register = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | Register */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"Register\")]).then(__webpack_require__.bind(null, /*! ./components/accounts/Register */ \"./homepage/frontend/src/components/accounts/Register.js\"));\n});\nvar VoterProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | VoterProfile */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"vendor\"), __webpack_require__.e(\"VoterProfile\")]).then(__webpack_require__.bind(null, /*! ./components/accounts/VoterProfile */ \"./homepage/frontend/src/components/accounts/VoterProfile.js\"));\n});\nvar PublicCandidateProfile = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | PublicCandidateProfile */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"vendor\"), __webpack_require__.e(\"PublicCandidateProfile\")]).then(__webpack_require__.bind(null, /*! ./components/accounts/PublicCandidateProfile */ \"./homepage/frontend/src/components/accounts/PublicCandidateProfile.js\"));\n});\nvar SearchResultsPage = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() | SearchResultsPage */[__webpack_require__.e(\"common\"), __webpack_require__.e(\"SearchResultsPage\")]).then(__webpack_require__.bind(null, /*! ./components/misc/SearchResultsPage */ \"./homepage/frontend/src/components/misc/SearchResultsPage.js\"));\n});\nvar history = Object(history__WEBPACK_IMPORTED_MODULE_8__[\"createBrowserHistory\"])();\nhistory.listen(function (location, action) {\n  react_ga__WEBPACK_IMPORTED_MODULE_9__[\"default\"].set({\n    page: location.pathname + location.search\n  }); // Update the user's current page\n  // Record a pageview for the given page and send login status in dimension1\n\n  react_ga__WEBPACK_IMPORTED_MODULE_9__[\"default\"].ga('send', 'pageview', location.pathname, {\n    'dimension1': 'token' in sessionStorage ? \"true\" : \"false\"\n  });\n});\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props)); // Initialize google analytics page view tracking\n\n    react_ga__WEBPACK_IMPORTED_MODULE_9__[\"default\"].initialize('UA-166298200-1', {\n      debug: false\n    });\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n        store: _store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Router\"], {\n        history: history\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n        fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], {\n          animation: \"border\"\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/about\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutUs, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Login, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/register\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Register, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/user-profile\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VoterProfile, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/results\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchResultsPage, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/profile/:username\",\n        component: PublicCandidateProfile\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], {\n        exact: true,\n        path: \"/\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuestionPage, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Route\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_misc_ErrorPage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./homepage/frontend/src/index.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/accounts.js":
/*!****************************************************!*\
  !*** ./homepage/frontend/src/reducers/accounts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types.js */ \"./homepage/frontend/src/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"REGISTER_USER\"]:\n      return _objectSpread({}, state, {}, action.payload);\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_USER\"]:\n      return _objectSpread({}, state, {}, action.payload);\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"LOGOUT_USER\"]:\n      var newState = Object.assign({}, state);\n      delete newState.token;\n      delete newState.user;\n      return newState;\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_INFO\"]:\n      return _objectSpread({}, state, {\n        user: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_USER_INFO\"]:\n      return _objectSpread({}, state, {\n        user: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_QUESTIONS\"]:\n      return _objectSpread({}, state, {\n        questions: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_CANDIDATE_ANSWERS\"]:\n      return _objectSpread({}, state, {\n        answers: action.payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/accounts.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/index.js":
/*!*************************************************!*\
  !*** ./homepage/frontend/src/reducers/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions */ \"./homepage/frontend/src/reducers/questions.js\");\n/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags */ \"./homepage/frontend/src/reducers/tags.js\");\n/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts */ \"./homepage/frontend/src/reducers/accounts.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./homepage/frontend/src/reducers/search.js\");\n/* harmony import */ var _profiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles */ \"./homepage/frontend/src/reducers/profiles.js\");\n//Combines tag and question reducers into one\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  tags: _tags__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  questions: _questions__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  accounts: _accounts__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  search: _search__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  profiles: _profiles__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/index.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/profiles.js":
/*!****************************************************!*\
  !*** ./homepage/frontend/src/reducers/profiles.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./homepage/frontend/src/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_CANDIDATE_ANSWERED_QUESTIONS\"]:\n      return _objectSpread({}, state, {\n        candidate_answered: action.payload\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_CANDIDATE_PUBLIC_INFO\"]:\n      return _objectSpread({}, state, {\n        candidate_info: action.payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/profiles.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/questions.js":
/*!*****************************************************!*\
  !*** ./homepage/frontend/src/reducers/questions.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types.js */ \"./homepage/frontend/src/actions/types.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//Updates state based on latest action of users interaction with questions\n\nvar initialState = {\n  questions: [],\n  answers: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_QUESTIONS\"]:\n      return _objectSpread({}, state, {\n        questions: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_ANSWERS\"]:\n      return _objectSpread({}, state, {\n        answers: _objectSpread({}, state.answers, _defineProperty({}, action.questionId, action.payload))\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"POST_QUESTION\"]:\n      return _objectSpread({}, state, {\n        questions: [action.payload].concat(_toConsumableArray(state.questions))\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"POST_ANSWER\"]:\n      return _objectSpread({}, state, {\n        answers: _objectSpread({}, state.answers, _defineProperty({}, action.payload.question, [].concat(_toConsumableArray(state.answers[action.payload.question]), [action.payload])))\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"UPDATE_ANSWER\"]:\n      return _objectSpread({}, state, {\n        answers: _objectSpread({}, state.answers, _defineProperty({}, action.payload.questions, [action.payload]))\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"POST_UPVOTES\"]:\n      return _objectSpread({}, state, {\n        updated_question: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"FLAG_QUESTION\"]:\n      return _objectSpread({}, state);\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/questions.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/search.js":
/*!**************************************************!*\
  !*** ./homepage/frontend/src/reducers/search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types.js */ \"./homepage/frontend/src/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar initialState = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var payload = action.payload;\n\n  switch (action.type) {\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_SEARCH_RESULTS\"]:\n      return _objectSpread({}, state, {\n        results: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_QUESTION_FOR_ANSWER\"]:\n      return _objectSpread({}, state, {\n        questionsForAnswers: _objectSpread({}, state.questionsForAnswers, _defineProperty({}, action.id, action.payload))\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"RESET_RESULTS\"]:\n      return {\n        initialState: initialState\n      };\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/search.js?");

/***/ }),

/***/ "./homepage/frontend/src/reducers/tags.js":
/*!************************************************!*\
  !*** ./homepage/frontend/src/reducers/tags.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types.js */ \"./homepage/frontend/src/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//Updates state based on latest action of users interaction with tags\n\nvar initialState = {\n  electionTags: {},\n  topicTags: {},\n  sortTypes: [],\n  curElectionTags: [],\n  curTopicTags: [],\n  curSortType: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_ELECTION_TAGS\"]:\n      return _objectSpread({}, state, {\n        electionTags: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_TOPIC_TAGS\"]:\n      return _objectSpread({}, state, {\n        topicTags: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"GET_SORT_TYPES\"]:\n      return _objectSpread({}, state, {\n        sortTypes: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"SET_ELECTION_TAGS\"]:\n      return _objectSpread({}, state, {\n        curElectionTags: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"SET_TOPIC_TAGS\"]:\n      return _objectSpread({}, state, {\n        curTopicTags: action.payload\n      });\n\n    case _actions_types_js__WEBPACK_IMPORTED_MODULE_0__[\"SET_SORT_TYPE\"]:\n      return _objectSpread({}, state, {\n        curSortType: action.payload\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./homepage/frontend/src/reducers/tags.js?");

/***/ }),

/***/ "./homepage/frontend/src/store.js":
/*!****************************************!*\
  !*** ./homepage/frontend/src/store.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./homepage/frontend/src/reducers/index.js\");\n//Initialize store that holds global state\n\n\n\n\nvar initialState = {};\nvar middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middleware)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./homepage/frontend/src/store.js?");

/***/ })

/******/ });