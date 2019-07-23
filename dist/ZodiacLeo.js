"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Svg = (0, _styledComponents["default"])('svg')({
  flex: 'none'
}, _styledSystem.space, _styledSystem.color);

var ZodiacLeoIcon = function ZodiacLeoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,17C20,18.66 18.66,20 17,20C15.38,19.92 14.08,18.62 14,17C14.16,15.39 14.5,13.8 15,12.26C15.54,10.55 15.87,8.79 16,7C15.93,4.27 13.73,2.07 11,2C8.27,2.07 6.07,4.27 6,7C6.15,8.53 6.5,10.03 7,11.5L7.21,12.2C5.1,11.53 2.86,12.7 2.19,14.8C1.5,16.91 2.68,19.16 4.79,19.83C6.9,20.5 9.14,19.33 9.81,17.22C9.94,16.83 10,16.41 10,16C9.84,14.27 9.5,12.56 8.91,10.92C8.47,9.65 8.16,8.34 8,7C8.08,5.38 9.38,4.08 11,4C12.62,4.08 13.92,5.38 14,7C13.84,8.61 13.5,10.2 13,11.74C12.46,13.45 12.13,15.21 12,17C12.07,19.73 14.27,21.93 17,22C19.76,22 22,19.76 22,17H20M6,18C4.9,18 4,17.1 4,16C4,14.9 4.9,14 6,14C7.1,14 8,14.9 8,16C8,17.1 7.1,18 6,18Z"
  }));
};

ZodiacLeoIcon.displayName = 'ZodiacLeoIcon';
ZodiacLeoIcon.defaultProps = {
  size: 24
};
var _default = ZodiacLeoIcon;
exports["default"] = _default;