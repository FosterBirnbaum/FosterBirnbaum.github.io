(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Register"],{

/***/ "./homepage/frontend/src/components/accounts/LoginRegister.css":
/*!*********************************************************************!*\
  !*** ./homepage/frontend/src/components/accounts/LoginRegister.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!./LoginRegister.css */ \"./node_modules/css-loader/dist/cjs.js!./homepage/frontend/src/components/accounts/LoginRegister.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./homepage/frontend/src/components/accounts/LoginRegister.css?");

/***/ }),

/***/ "./homepage/frontend/src/components/accounts/Register.js":
/*!***************************************************************!*\
  !*** ./homepage/frontend/src/components/accounts/Register.js ***!
  \***************************************************************/
/*! exports provided: Register, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Register\", function() { return Register; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _actions_accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/accounts */ \"./homepage/frontend/src/actions/accounts.js\");\n/* harmony import */ var _LoginRegister_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginRegister.css */ \"./homepage/frontend/src/components/accounts/LoginRegister.css\");\n/* harmony import */ var _LoginRegister_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LoginRegister_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Register = /*#__PURE__*/function (_Component) {\n  _inherits(Register, _Component);\n\n  function Register(props) {\n    var _this;\n\n    _classCallCheck(this, Register);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this, props));\n\n    _this.fieldOnChange = function (e) {\n      switch (e.target.id) {\n        case \"registerUsername\":\n          _this.setState({\n            userName: e.target.value\n          });\n\n        case \"registerFirstName\":\n          _this.setState({\n            firstName: e.target.value\n          });\n\n          break;\n\n        case \"registerLastName\":\n          _this.setState({\n            lastName: e.target.value\n          });\n\n          break;\n\n        case \"registerEmail\":\n          _this.setState({\n            email: e.target.value\n          });\n\n          break;\n\n        case \"registerPassword\":\n          _this.setState({\n            password: e.target.value\n          });\n\n          break;\n\n        case \"registerPasswordConfirm\":\n          _this.setState({\n            passwordConfirm: e.target.value\n          });\n\n      }\n    };\n\n    _this.registerOnSubmit = function (e) {\n      e.preventDefault();\n      var info = {\n        username: _this.state.userName,\n        email: _this.state.email,\n        password: _this.state.password\n      };\n      Object(_actions_accounts__WEBPACK_IMPORTED_MODULE_4__[\"registerUser\"])(info, function (error) {\n        _this.setState({\n          errors: error\n        });\n      });\n    };\n\n    _this.state = {\n      userName: '',\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      passwordConfirm: '',\n      errors: {}\n    };\n    return _this;\n  }\n\n  _createClass(Register, [{\n    key: \"renderErrorForField\",\n    value: function renderErrorForField(field) {\n      if (field in this.state.errors) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n          className: \"errorVisible\"\n        }, this.state.errors[field].join(' '));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // First check if a user is already logged in\n      if ('token' in sessionStorage || this.props.token != null) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n          to: \"/user-profile\"\n        });\n      } // Otherwise render register form\n\n\n      var _this$state = this.state,\n          userName = _this$state.userName,\n          email = _this$state.email,\n          password = _this$state.password,\n          passwordConfirm = _this$state.passwordConfirm;\n      var confirmCheck = password == passwordConfirm;\n      var isEnabled = userName.length > 0 && email.length > 0 && password.length > 0 && confirmCheck;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        fluid: true\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n        xs: 4,\n        className: \"centered\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n        onSubmit: this.registerOnSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"text-center\"\n      }, \"Register as:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Group, {\n        controlId: \"registerUsername\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Control, {\n        type: \"text\",\n        placeholder: \"Username\",\n        onChange: this.fieldOnChange\n      }), this.renderErrorForField('username')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Group, {\n        controlId: \"registerEmail\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Control, {\n        type: \"email\",\n        placeholder: \"Email\",\n        onChange: this.fieldOnChange\n      }), this.renderErrorForField('email')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Group, {\n        controlId: \"registerPassword\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Control, {\n        type: \"password\",\n        placeholder: \"Password\",\n        onChange: this.fieldOnChange\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Group, {\n        controlId: \"registerPasswordConfirm\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Control, {\n        type: \"password\",\n        placeholder: \"Confirm Password\",\n        onChange: this.fieldOnChange\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: confirmCheck ? \"errorNotVisible\" : \"errorVisible\"\n      }, \"Passwords must match.\"), this.renderErrorForField('password')), this.renderErrorForField('other'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        variant: \"primary\",\n        size: \"lg\",\n        block: true,\n        type: \"submit\",\n        disabled: !isEnabled\n      }, \"Register\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"text-center footnote\"\n      }, \"Already have an account? \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n        to: \"/login\"\n      }, \"Sign in\")))));\n    }\n  }]);\n\n  return Register;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    token: state.accounts.token\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {\n  registerUser: _actions_accounts__WEBPACK_IMPORTED_MODULE_4__[\"registerUser\"]\n})(Register));\n\n//# sourceURL=webpack:///./homepage/frontend/src/components/accounts/Register.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./homepage/frontend/src/components/accounts/LoginRegister.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./homepage/frontend/src/components/accounts/LoginRegister.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"h2 {\\r\\n\\tmargin-bottom: 1.5rem;\\r\\n}\\r\\n\\r\\ndiv.centered {\\r\\n\\tmargin: 4rem auto;\\r\\n}\\r\\n\\r\\np.footnote {\\r\\n\\tmargin-top: 1rem;\\r\\n}\\r\\n\\r\\np.errorNotVisible {\\r\\n\\tmax-height:0;\\r\\n\\topacity: 0;\\r\\n}\\r\\n\\r\\np.errorVisible {\\r\\n\\tcolor: red\\r\\n}\\r\\n\\r\\nh1.header-text {\\r\\n\\tmargin: auto;\\r\\n\\tmargin-top: 1rem;\\r\\n}\\r\\n\\r\\ndiv.card-left {\\r\\n\\twidth: 30rem;\\r\\n\\tmargin-left: 3rem;\\r\\n\\tmargin-right: auto;\\r\\n\\tmargin-top: 1rem;\\r\\n\\tmargin-bottom: 1rem;\\r\\n}\\r\\n\\r\\ndiv.card-right {\\r\\n\\twidth: 30rem;\\r\\n\\tmargin-right: 3rem;\\r\\n\\tmargin-left: auto;\\r\\n\\tmargin-top: 1rem;\\r\\n\\tmargin-bottom: 1rem;\\r\\n}\\r\\n\\r\\ndiv.item-spaced {\\r\\n\\tmargin-bottom: 0.1rem;\\r\\n}\\r\\n\\r\\n.text-middle {\\r\\n\\tmargin: 0 2rem;\\r\\n}\\r\\n\\r\\ndiv.form-adjusted {\\r\\n\\tmargin-left: 0.1rem;\\r\\n\\tmargin-top: 1rem;\\r\\n}\\r\\n\\r\\ndiv.question-list-buttons {\\r\\n\\tmargin-left: auto;\\r\\n    margin-right: auto;\\r\\n    width: fit-content;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./homepage/frontend/src/components/accounts/LoginRegister.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

}]);