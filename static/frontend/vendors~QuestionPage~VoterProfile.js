(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~QuestionPage~VoterProfile"],{

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconBase.js ***!
  \******************************************************/
/*! exports provided: GenIcon, IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenIcon\", function() { return GenIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconBase\", function() { return IconBase; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconContext */ \"./node_modules/react-icons/lib/esm/iconContext.js\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nvar __rest = undefined && undefined.__rest || function (s, e) {\n  var t = {};\n\n  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];\n  return t;\n};\n\n\n\n\nfunction Tree2Element(tree) {\n  return tree && tree.map(function (node, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](node.tag, __assign({\n      key: i\n    }, node.attr), Tree2Element(node.child));\n  });\n}\n\nfunction GenIcon(data) {\n  return function (props) {\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](IconBase, __assign({\n      attr: __assign({}, data.attr)\n    }, props), Tree2Element(data.child));\n  };\n}\nfunction IconBase(props) {\n  var elem = function (conf) {\n    var computedSize = props.size || conf.size || \"1em\";\n    var className;\n    if (conf.className) className = conf.className;\n    if (props.className) className = (className ? className + ' ' : '') + props.className;\n\n    var attr = props.attr,\n        title = props.title,\n        svgProps = __rest(props, [\"attr\", \"title\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", __assign({\n      stroke: \"currentColor\",\n      fill: \"currentColor\",\n      strokeWidth: \"0\"\n    }, conf.attr, attr, svgProps, {\n      className: className,\n      style: __assign({\n        color: props.color || conf.color\n      }, conf.style, props.style),\n      height: computedSize,\n      width: computedSize,\n      xmlns: \"http://www.w3.org/2000/svg\"\n    }), title && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"title\", null, title), props.children);\n  };\n\n  return _iconContext__WEBPACK_IMPORTED_MODULE_1__[\"IconContext\"] !== undefined ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_iconContext__WEBPACK_IMPORTED_MODULE_1__[\"IconContext\"].Consumer, null, function (conf) {\n    return elem(conf);\n  }) : elem(_iconContext__WEBPACK_IMPORTED_MODULE_1__[\"DefaultContext\"]);\n}\n\n//# sourceURL=webpack:///./node_modules/react-icons/lib/esm/iconBase.js?");

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconContext.js ***!
  \*********************************************************/
/*! exports provided: DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultContext\", function() { return DefaultContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconContext\", function() { return IconContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar DefaultContext = {\n  color: undefined,\n  size: undefined,\n  className: undefined,\n  style: undefined,\n  attr: undefined\n};\nvar IconContext = react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"] && react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"](DefaultContext);\n\n//# sourceURL=webpack:///./node_modules/react-icons/lib/esm/iconContext.js?");

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/iconsManifest.js ***!
  \***********************************************************/
/*! exports provided: IconsManifest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconsManifest\", function() { return IconsManifest; });\nvar IconsManifest = [{\n  \"id\": \"fa\",\n  \"name\": \"Font Awesome\",\n  \"projectUrl\": \"https://fontawesome.com/\",\n  \"license\": \"CC BY 4.0 License\",\n  \"licenseUrl\": \"https://creativecommons.org/licenses/by/4.0/\"\n}, {\n  \"id\": \"io\",\n  \"name\": \"Ionicons\",\n  \"projectUrl\": \"https://ionicons.com/\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://github.com/ionic-team/ionicons/blob/master/LICENSE\"\n}, {\n  \"id\": \"md\",\n  \"name\": \"Material Design icons\",\n  \"projectUrl\": \"http://google.github.io/material-design-icons/\",\n  \"license\": \"Apache License Version 2.0\",\n  \"licenseUrl\": \"https://github.com/google/material-design-icons/blob/master/LICENSE\"\n}, {\n  \"id\": \"ti\",\n  \"name\": \"Typicons\",\n  \"projectUrl\": \"http://s-ings.com/typicons/\",\n  \"license\": \"CC BY-SA 3.0\",\n  \"licenseUrl\": \"https://creativecommons.org/licenses/by-sa/3.0/\"\n}, {\n  \"id\": \"go\",\n  \"name\": \"Github Octicons icons\",\n  \"projectUrl\": \"https://octicons.github.com/\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://github.com/primer/octicons/blob/master/LICENSE\"\n}, {\n  \"id\": \"fi\",\n  \"name\": \"Feather\",\n  \"projectUrl\": \"https://feathericons.com/\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://github.com/feathericons/feather/blob/master/LICENSE\"\n}, {\n  \"id\": \"gi\",\n  \"name\": \"Game Icons\",\n  \"projectUrl\": \"https://game-icons.net/\",\n  \"license\": \"CC BY 3.0\",\n  \"licenseUrl\": \"https://creativecommons.org/licenses/by/3.0/\"\n}, {\n  \"id\": \"wi\",\n  \"name\": \"Weather Icons\",\n  \"projectUrl\": \"https://erikflowers.github.io/weather-icons/\",\n  \"license\": \"SIL OFL 1.1\",\n  \"licenseUrl\": \"http://scripts.sil.org/OFL\"\n}, {\n  \"id\": \"di\",\n  \"name\": \"Devicons\",\n  \"projectUrl\": \"https://vorillaz.github.io/devicons/\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n}, {\n  \"id\": \"ai\",\n  \"name\": \"Ant Design Icons\",\n  \"projectUrl\": \"https://github.com/ant-design/ant-design-icons\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n}, {\n  \"id\": \"bs\",\n  \"name\": \"Bootstrap Icons\",\n  \"projectUrl\": \"https://github.com/twbs/icons\",\n  \"license\": \"MIT\",\n  \"licenseUrl\": \"https://opensource.org/licenses/MIT\"\n}, {\n  \"id\": \"ri\",\n  \"name\": \"Remix Icon\",\n  \"projectUrl\": \"https://github.com/Remix-Design/RemixIcon\",\n  \"license\": \"Apache License Version 2.0\",\n  \"licenseUrl\": \"http://www.apache.org/licenses/\"\n}];\n\n//# sourceURL=webpack:///./node_modules/react-icons/lib/esm/iconsManifest.js?");

/***/ }),

/***/ "./node_modules/react-icons/lib/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/esm/index.js ***!
  \***************************************************/
/*! exports provided: IconsManifest, GenIcon, IconBase, DefaultContext, IconContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _iconsManifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iconsManifest */ \"./node_modules/react-icons/lib/esm/iconsManifest.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IconsManifest\", function() { return _iconsManifest__WEBPACK_IMPORTED_MODULE_0__[\"IconsManifest\"]; });\n\n/* harmony import */ var _iconBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconBase */ \"./node_modules/react-icons/lib/esm/iconBase.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GenIcon\", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__[\"GenIcon\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IconBase\", function() { return _iconBase__WEBPACK_IMPORTED_MODULE_1__[\"IconBase\"]; });\n\n/* harmony import */ var _iconContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconContext */ \"./node_modules/react-icons/lib/esm/iconContext.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DefaultContext\", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__[\"DefaultContext\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"IconContext\", function() { return _iconContext__WEBPACK_IMPORTED_MODULE_2__[\"IconContext\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/react-icons/lib/esm/index.js?");

/***/ }),

/***/ "./node_modules/reactjs-popup/reactjs-popup.es.js":
/*!********************************************************!*\
  !*** ./node_modules/reactjs-popup/reactjs-popup.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/*!\n * reactjs-popup v1.5.0\n * (c) 2019-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>\n * Released under the MIT License.\n */\n\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (typeof call === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n    return arr2;\n  }\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n/* Algo to calculate position\n  1. center position for popup content : the center of the trigger will be the center of the content content\n      so the popup content position will be like this :\n      top => the y of the center for the trigger element : trigger.top + trigger.height/2\n      left => the x of the center for the trigger element : trigger.left + trigger.width/2\n\n  2. translate position according to the first  position attribute  passed  in the function argument\n      for example :\n        position = 'left top'\n        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2\n\n  3.translate position according to the first  position attribute  passed  in the function argument\n    for example :\n      position = 'left top'\n      the second argument 'top' => translate popup content by + content.height*4/5\n\n  4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element\n*/\nfunction getCoordinatesForPosition(triggerBounding, ContentBounding, position, arrow, _ref) {\n  var offsetX = _ref.offsetX,\n      offsetY = _ref.offsetY;\n  var margin = arrow ? 8 : 0;\n  var args = position.split(' '); // the step N 1 : center the popup content => ok\n\n  var CenterTop = triggerBounding.top + triggerBounding.height / 2;\n  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;\n  var height = ContentBounding.height,\n      width = ContentBounding.width;\n  var top = CenterTop - height / 2;\n  var left = CenterLeft - width / 2;\n  var transform = '';\n  var arrowTop = '0%';\n  var arrowLeft = '0%'; // the  step N 2 : => ok\n\n  switch (args[0]) {\n    case 'top':\n      top -= height / 2 + triggerBounding.height / 2 + margin;\n      transform = \"rotate(45deg)\";\n      arrowTop = '100%';\n      arrowLeft = '50%';\n      break;\n\n    case 'bottom':\n      top += height / 2 + triggerBounding.height / 2 + margin;\n      transform = \"rotate(225deg)\";\n      arrowLeft = '50%';\n      break;\n\n    case 'left':\n      left -= width / 2 + triggerBounding.width / 2 + margin;\n      transform = \" rotate(-45deg)\";\n      arrowLeft = '100%';\n      arrowTop = '50%';\n      break;\n\n    case 'right':\n      left += width / 2 + triggerBounding.width / 2 + margin;\n      transform = \"rotate(135deg)\";\n      arrowTop = '50%';\n      break;\n\n    default:\n  }\n\n  switch (args[1]) {\n    case 'top':\n      top = triggerBounding.top;\n      arrowTop = \"\".concat(triggerBounding.height / 2, \"px\");\n      break;\n\n    case 'bottom':\n      top = triggerBounding.top - height + triggerBounding.height;\n      arrowTop = \"\".concat(height - triggerBounding.height / 2, \"px\");\n      break;\n\n    case 'left':\n      left = triggerBounding.left;\n      arrowLeft = \"\".concat(triggerBounding.width / 2, \"px\");\n      break;\n\n    case 'right':\n      left = triggerBounding.left - width + triggerBounding.width;\n      arrowLeft = \"\".concat(width - triggerBounding.width / 2, \"px\");\n      break;\n\n    default:\n  }\n\n  top = args[0] === 'top' ? top - offsetY : top + offsetY;\n  left = args[0] === 'left' ? left - offsetX : left + offsetX;\n  return {\n    top: top,\n    left: left,\n    transform: transform,\n    arrowLeft: arrowLeft,\n    arrowTop: arrowTop\n  };\n}\n\nfunction calculatePosition(triggerBounding, ContentBounding, positions, arrow, _ref2, wrapperBox) {\n  var offsetX = _ref2.offsetX,\n      offsetY = _ref2.offsetY;\n  var bestCoords;\n  var i = 0;\n\n  while (i < positions.length) {\n    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {\n      offsetX: offsetX,\n      offsetY: offsetY\n    });\n    var contentBox = {\n      top: bestCoords.top,\n      left: bestCoords.left,\n      width: ContentBounding.width,\n      height: ContentBounding.height\n    };\n\n    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {\n      i++;\n    } else {\n      break;\n    }\n  }\n\n  return bestCoords;\n}\n\nvar styles = {\n  popupContent: {\n    tooltip: {\n      position: 'absolute',\n      zIndex: '2',\n      width: '200px',\n      background: \"rgb(255, 255, 255)\",\n      border: \"1px solid rgb(187, 187, 187)\",\n      boxShadow: \"rgba(0, 0, 0, 0.2) 0px 1px 3px\",\n      padding: '5px'\n    },\n    modal: {\n      position: 'relative',\n      background: \"rgb(255, 255, 255)\",\n      width: '50%',\n      margin: 'auto',\n      border: \"1px solid rgb(187, 187, 187)\",\n      padding: '5px'\n    }\n  },\n  popupArrow: {\n    height: '10px',\n    width: '10px',\n    position: 'absolute',\n    background: 'rgb(255, 255, 255)',\n    transform: 'rotate(45deg)',\n    margin: '-5px',\n    zIndex: '-1',\n    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 1px'\n  },\n  overlay: {\n    tooltip: {\n      position: 'fixed',\n      top: '0',\n      bottom: '0',\n      left: '0',\n      right: '0'\n    },\n    modal: {\n      position: 'fixed',\n      top: '0',\n      bottom: '0',\n      left: '0',\n      right: '0',\n      background: \"rgba(0, 0, 0,0.5)\",\n      display: 'flex',\n      zIndex: '999'\n    }\n  }\n};\n\nvar POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom', 'center center'];\n\nvar Popup =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(Popup, _React$PureComponent);\n\n  function Popup(props) {\n    var _this;\n\n    _classCallCheck(this, Popup);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"repositionOnResize\", function () {\n      _this.setPosition();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onEscape\", function (e) {\n      if (e.key === 'Escape') _this.closePopup();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"lockScroll\", function () {\n      var lockScroll = _this.props.lockScroll;\n      var modal = _this.state.modal;\n      if (modal && lockScroll)\n        /* eslint-disable-next-line no-undef */\n        document.getElementsByTagName('body')[0].style.overflow = 'hidden';\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"resetScroll\", function () {\n      var lockScroll = _this.props.lockScroll;\n      var modal = _this.state.modal;\n      if (modal && lockScroll)\n        /* eslint-disable-next-line no-undef */\n        document.getElementsByTagName('body')[0].style.overflow = 'auto';\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"togglePopup\", function (e) {\n      // https://reactjs.org/docs/events.html#event-pooling\n      e.persist();\n      if (_this.state.isOpen) _this.closePopup(e);else _this.openPopup(e);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"openPopup\", function (e) {\n      var _this$props = _this.props,\n          disabled = _this$props.disabled,\n          onOpen = _this$props.onOpen;\n      var isOpen = _this.state.isOpen;\n      if (isOpen || disabled) return;\n      onOpen(e);\n\n      _this.setState({\n        isOpen: true\n      }, function () {\n        _this.setPosition();\n\n        _this.lockScroll();\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"closePopup\", function (e) {\n      var onClose = _this.props.onClose;\n      var isOpen = _this.state.isOpen;\n      if (!isOpen) return;\n      onClose(e);\n\n      _this.setState({\n        isOpen: false\n      }, function () {\n        _this.resetScroll();\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onMouseEnter\", function () {\n      clearTimeout(_this.timeOut);\n      var mouseEnterDelay = _this.props.mouseEnterDelay;\n      _this.timeOut = setTimeout(function () {\n        return _this.openPopup();\n      }, mouseEnterDelay);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onMouseLeave\", function () {\n      clearTimeout(_this.timeOut);\n      var mouseLeaveDelay = _this.props.mouseLeaveDelay;\n      _this.timeOut = setTimeout(function () {\n        return _this.closePopup();\n      }, mouseLeaveDelay);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getTooltipBoundary\", function () {\n      var keepTooltipInside = _this.props.keepTooltipInside;\n      var boundingBox = {\n        top: 0,\n        left: 0,\n\n        /* eslint-disable-next-line no-undef */\n        width: window.innerWidth,\n\n        /* eslint-disable-next-line no-undef */\n        height: window.innerHeight\n      };\n\n      if (typeof keepTooltipInside === 'string') {\n        /* eslint-disable-next-line no-undef */\n        var selector = document.querySelector(keepTooltipInside);\n\n        if (true) {\n          if (selector === null) throw new Error(\"\".concat(keepTooltipInside, \" selector is not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value\"));\n        }\n\n        boundingBox = selector.getBoundingClientRect();\n      }\n\n      return boundingBox;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"setPosition\", function () {\n      var _this$state = _this.state,\n          modal = _this$state.modal,\n          isOpen = _this$state.isOpen;\n      if (modal || !isOpen) return;\n      var _this$props2 = _this.props,\n          arrow = _this$props2.arrow,\n          position = _this$props2.position,\n          offsetX = _this$props2.offsetX,\n          offsetY = _this$props2.offsetY,\n          keepTooltipInside = _this$props2.keepTooltipInside,\n          arrowStyle = _this$props2.arrowStyle,\n          className = _this$props2.className;\n\n      var helper = _this.HelperEl.getBoundingClientRect();\n\n      var trigger = _this.TriggerEl.getBoundingClientRect();\n\n      var content = _this.ContentEl.getBoundingClientRect();\n\n      var boundingBox = _this.getTooltipBoundary();\n\n      var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array\n\n      if (keepTooltipInside || Array.isArray(position)) positions = [].concat(_toConsumableArray(positions), POSITION_TYPES);\n      var cords = calculatePosition(trigger, content, positions, arrow, {\n        offsetX: offsetX,\n        offsetY: offsetY\n      }, boundingBox);\n      _this.ContentEl.style.top = \"\".concat(cords.top - helper.top, \"px\");\n      _this.ContentEl.style.left = \"\".concat(cords.left - helper.left, \"px\");\n\n      if (arrow) {\n        _this.ArrowEl.style.transform = cords.transform;\n        _this.ArrowEl.style['-ms-transform'] = cords.transform;\n        _this.ArrowEl.style['-webkit-transform'] = cords.transform;\n        _this.ArrowEl.style.top = arrowStyle.top || cords.arrowTop;\n        _this.ArrowEl.style.left = arrowStyle.left || cords.arrowLeft;\n\n        _this.ArrowEl.classList.add(\"popup-arrow\");\n\n        if (className !== '') {\n          _this.ArrowEl.classList.add(\"\".concat(className, \"-arrow\"));\n        }\n      }\n\n      if (\n      /* eslint-disable-next-line no-undef */\n      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === 'static' ||\n      /* eslint-disable-next-line no-undef */\n      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === '') _this.TriggerEl.style.position = 'relative';\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"addWarperAction\", function () {\n      var _this$props3 = _this.props,\n          contentStyle = _this$props3.contentStyle,\n          className = _this$props3.className,\n          on = _this$props3.on;\n      var modal = _this.state.modal;\n      var popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;\n      var childrenElementProps = {\n        className: \"popup-content \".concat(className !== '' ? \"\".concat(className, \"-content\") : ''),\n        style: Object.assign({}, popupContentStyle, contentStyle),\n        ref: _this.setContentRef,\n        onClick: function onClick(e) {\n          e.stopPropagation();\n        }\n      };\n\n      if (!modal && on.indexOf('hover') >= 0) {\n        childrenElementProps.onMouseEnter = _this.onMouseEnter;\n        childrenElementProps.onMouseLeave = _this.onMouseLeave;\n      }\n\n      return childrenElementProps;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"renderTrigger\", function () {\n      var triggerProps = {\n        key: 'T',\n        ref: _this.setTriggerRef\n      };\n      var _this$props4 = _this.props,\n          on = _this$props4.on,\n          trigger = _this$props4.trigger;\n      var isOpen = _this.state.isOpen;\n      var onAsArray = Array.isArray(on) ? on : [on];\n\n      for (var i = 0, len = onAsArray.length; i < len; i++) {\n        switch (onAsArray[i]) {\n          case 'click':\n            triggerProps.onClick = _this.togglePopup;\n            break;\n\n          case 'hover':\n            triggerProps.onMouseEnter = _this.onMouseEnter;\n            triggerProps.onMouseLeave = _this.onMouseLeave;\n            break;\n\n          case 'focus':\n            triggerProps.onFocus = _this.onMouseEnter;\n            break;\n\n          default:\n        }\n      }\n\n      if (typeof trigger === 'function') return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger(isOpen), triggerProps);\n      return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger, triggerProps);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"renderContent\", function () {\n      var _this$props5 = _this.props,\n          arrow = _this$props5.arrow,\n          arrowStyle = _this$props5.arrowStyle,\n          children = _this$props5.children;\n      var _this$state2 = _this.state,\n          modal = _this$state2.modal,\n          isOpen = _this$state2.isOpen;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({}, _this.addWarperAction(), {\n        key: \"C\"\n      }), arrow && !modal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        ref: _this.setArrowRef,\n        style: Object.assign({}, styles.popupArrow, arrowStyle)\n      }), typeof children === 'function' ? children(_this.closePopup, isOpen) : children);\n    });\n\n    _this.setTriggerRef = function (r) {\n      return _this.TriggerEl = r;\n    };\n\n    _this.setContentRef = function (r) {\n      return _this.ContentEl = r;\n    };\n\n    _this.setArrowRef = function (r) {\n      return _this.ArrowEl = r;\n    };\n\n    _this.setHelperRef = function (r) {\n      return _this.HelperEl = r;\n    };\n\n    _this.timeOut = 0;\n    var open = props.open,\n        _modal = props.modal,\n        defaultOpen = props.defaultOpen,\n        _trigger = props.trigger;\n    _this.state = {\n      isOpen: open || defaultOpen,\n      modal: _modal ? true : !_trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't exist\n\n    };\n    return _this;\n  }\n\n  _createClass(Popup, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props6 = this.props,\n          closeOnEscape = _this$props6.closeOnEscape,\n          defaultOpen = _this$props6.defaultOpen,\n          repositionOnResize = _this$props6.repositionOnResize;\n      if (defaultOpen) this.setPosition();\n\n      if (closeOnEscape) {\n        /* eslint-disable-next-line no-undef */\n        window.addEventListener('keyup', this.onEscape);\n      }\n\n      if (repositionOnResize) {\n        /* eslint-disable-next-line no-undef */\n        window.addEventListener('resize', this.repositionOnResize);\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      var _this$props7 = this.props,\n          open = _this$props7.open,\n          disabled = _this$props7.disabled;\n      var isOpen = this.state.isOpen;\n\n      if (prevProps.open !== open) {\n        if (open) this.openPopup();else this.closePopup(undefined, true);\n      }\n\n      if (prevProps.disabled !== disabled && disabled && isOpen) {\n        this.closePopup();\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      // kill any function to execute if the component is unmounted\n      clearTimeout(this.timeOut);\n      var _this$props8 = this.props,\n          closeOnEscape = _this$props8.closeOnEscape,\n          repositionOnResize = _this$props8.repositionOnResize; // remove events listeners\n\n      if (closeOnEscape) {\n        /* eslint-disable-next-line no-undef */\n        window.removeEventListener('keyup', this.onEscape);\n      }\n\n      if (repositionOnResize) {\n        /* eslint-disable-next-line no-undef */\n        window.removeEventListener('resize', this.repositionOnResize);\n      }\n\n      this.resetScroll();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props9 = this.props,\n          overlayStyle = _this$props9.overlayStyle,\n          closeOnDocumentClick = _this$props9.closeOnDocumentClick,\n          className = _this$props9.className,\n          on = _this$props9.on,\n          trigger = _this$props9.trigger;\n      var _this$state3 = this.state,\n          modal = _this$state3.modal,\n          isOpen = _this$state3.isOpen;\n      var overlay = isOpen && !(on.indexOf('hover') >= 0);\n      var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;\n      return [this.renderTrigger(), isOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: \"H\",\n        style: {\n          position: 'absolute',\n          top: '0px',\n          left: '0px'\n        },\n        ref: this.setHelperRef\n      }), overlay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: \"O\",\n        className: \"popup-overlay \".concat(className !== '' ? \"\".concat(className, \"-overlay\") : ''),\n        style: Object.assign({}, ovStyle, overlayStyle),\n        onClick: closeOnDocumentClick ? this.closePopup : undefined\n      }, modal && this.renderContent()), isOpen && !modal && this.renderContent()];\n    }\n  }]);\n\n  return Popup;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n_defineProperty(Popup, \"defaultProps\", {\n  trigger: null,\n  onOpen: function onOpen() {},\n  onClose: function onClose() {},\n  defaultOpen: false,\n  open: false,\n  disabled: false,\n  closeOnDocumentClick: true,\n  repositionOnResize: true,\n  closeOnEscape: true,\n  on: ['click'],\n  contentStyle: {},\n  arrowStyle: {},\n  overlayStyle: {},\n  className: '',\n  position: 'bottom center',\n  modal: false,\n  lockScroll: false,\n  arrow: true,\n  offsetX: 0,\n  offsetY: 0,\n  mouseEnterDelay: 100,\n  mouseLeaveDelay: 100,\n  keepTooltipInside: false\n});\n\nif (true) {\n  var PropTypes = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n\n  var TRIGGER_TYPES = ['hover', 'click', 'focus'];\n  Popup.propTypes = {\n    arrowStyle: PropTypes.object,\n    contentStyle: PropTypes.object,\n    overlayStyle: PropTypes.object,\n    className: PropTypes.string,\n    modal: PropTypes.bool,\n    arrow: PropTypes.bool,\n    closeOnDocumentClick: PropTypes.bool,\n    repositionOnResize: PropTypes.bool,\n    disabled: PropTypes.bool,\n    closeOnEscape: PropTypes.bool,\n    lockScroll: PropTypes.bool,\n    offsetX: PropTypes.number,\n    offsetY: PropTypes.number,\n    mouseEnterDelay: PropTypes.number,\n    mouseLeaveDelay: PropTypes.number,\n    onOpen: PropTypes.func,\n    onClose: PropTypes.func,\n    open: PropTypes.bool,\n    defaultOpen: PropTypes.bool,\n    trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),\n    // for uncontrolled component we don't need the trigger Element\n    on: PropTypes.oneOfType([PropTypes.oneOf(TRIGGER_TYPES), PropTypes.arrayOf(PropTypes.oneOf(TRIGGER_TYPES))]),\n    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]).isRequired,\n    position: PropTypes.oneOfType([PropTypes.oneOf(POSITION_TYPES), PropTypes.arrayOf(PropTypes.oneOf(POSITION_TYPES))]),\n    keepTooltipInside: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popup);\n\n\n//# sourceURL=webpack:///./node_modules/reactjs-popup/reactjs-popup.es.js?");

/***/ })

}]);