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

var UbuntuIcon = function UbuntuIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M14.34,7.74C14.92,8.07 15.65,7.87 16,7.3C16.31,6.73 16.12,6 15.54,5.66C14.97,5.33 14.23,5.5 13.9,6.1C13.57,6.67 13.77,7.41 14.34,7.74M11.88,15.5C11.35,15.5 10.85,15.39 10.41,15.18L9.57,16.68C10.27,17 11.05,17.22 11.88,17.22C12.37,17.22 12.83,17.15 13.28,17.03C13.36,16.54 13.64,16.1 14.1,15.84C14.56,15.57 15.08,15.55 15.54,15.72C16.43,14.85 17,13.66 17.09,12.33L15.38,12.31C15.22,14.1 13.72,15.5 11.88,15.5M11.88,8.5C13.72,8.5 15.22,9.89 15.38,11.69L17.09,11.66C17,10.34 16.43,9.15 15.54,8.28C15.08,8.45 14.55,8.42 14.1,8.16C13.64,7.9 13.36,7.45 13.28,6.97C12.83,6.85 12.37,6.78 11.88,6.78C11.05,6.78 10.27,6.97 9.57,7.32L10.41,8.82C10.85,8.61 11.35,8.5 11.88,8.5M8.37,12C8.37,10.81 8.96,9.76 9.86,9.13L9,7.65C7.94,8.36 7.15,9.43 6.83,10.69C7.21,11 7.45,11.47 7.45,12C7.45,12.53 7.21,13 6.83,13.31C7.15,14.56 7.94,15.64 9,16.34L9.86,14.87C8.96,14.24 8.37,13.19 8.37,12M14.34,16.26C13.77,16.59 13.57,17.32 13.9,17.9C14.23,18.47 14.97,18.67 15.54,18.34C16.12,18 16.31,17.27 16,16.7C15.65,16.12 14.92,15.93 14.34,16.26M5.76,10.8C5.1,10.8 4.56,11.34 4.56,12C4.56,12.66 5.1,13.2 5.76,13.2C6.43,13.2 6.96,12.66 6.96,12C6.96,11.34 6.43,10.8 5.76,10.8Z"
  }));
};

UbuntuIcon.displayName = 'UbuntuIcon';
UbuntuIcon.defaultProps = {
  size: 24
};
var _default = UbuntuIcon;
exports["default"] = _default;