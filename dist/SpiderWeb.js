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

var SpiderWebIcon = function SpiderWebIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.62,13.28L15.26,15.54C15.29,15 15.38,14.47 15.56,13.93C15.74,13.37 16,12.86 16.3,12.41L13.62,13.28M17.77,19C17.75,17.68 17.95,16.27 18.41,14.85C18.88,13.42 19.56,12.14 20.36,11.09L18.32,11.75C17.54,12.26 16.87,13.14 16.5,14.23C16.17,15.29 16.18,16.36 16.5,17.22L17.77,19M19.25,21C18.75,21.46 18.21,21.86 17.63,22.2L17.31,21.76C15.9,21 14.04,20.5 12,20.5C9.96,20.5 8.1,21 6.69,21.76L6.37,22.2C5.79,21.86 5.25,21.46 4.75,21L5,20.69C5.33,19.08 5.22,17.12 4.58,15.14C3.94,13.19 2.9,11.56 1.71,10.46L1.27,10.32C1.42,9.66 1.63,9 1.89,8.41L2.29,8.54C3.92,8.37 5.74,7.65 7.43,6.43C9.09,5.22 10.32,3.73 11,2.26V1.79L12,1.75L13,1.79V2.21C13.67,3.71 14.91,5.23 16.6,6.45C18.26,7.66 20.06,8.37 21.67,8.56L22.11,8.41C22.37,9 22.58,9.66 22.73,10.32L22.23,10.5C21.04,11.58 20,13.21 19.37,15.16C18.74,17.09 18.62,19 18.92,20.57L19.25,21M11,11.37V8.5C10.66,8.92 10.26,9.32 9.78,9.67C9.29,10 8.77,10.29 8.25,10.5L11,11.37M11,4.22C10.25,5.31 9.24,6.35 8,7.24C6.78,8.14 5.46,8.78 4.18,9.16L6.15,9.8C7.11,9.88 8.22,9.56 9.19,8.86C10.13,8.18 10.76,7.27 11,6.36V4.22M13,11.37L15.74,10.5C15.23,10.3 14.72,10.03 14.25,9.69C13.76,9.33 13.34,8.92 13,8.5V11.37M19.8,9.16C18.53,8.78 17.23,8.15 16,7.26C14.77,6.36 13.76,5.31 13,4.2V6.27C13.22,7.21 13.86,8.17 14.84,8.88C15.77,9.56 16.83,9.87 17.77,9.82L19.8,9.16M10.38,13.28L7.64,12.39C7.95,12.84 8.2,13.35 8.38,13.91C8.57,14.5 8.66,15.06 8.68,15.62L10.38,13.28M3.58,11.07C4.38,12.12 5.06,13.4 5.53,14.83C6,16.29 6.2,17.74 6.17,19.08L7.38,17.41C7.76,16.5 7.8,15.36 7.43,14.22C7.07,13.12 6.4,12.24 5.61,11.73L3.58,11.07M12,14.45L10.35,16.72C10.87,16.58 11.42,16.5 12,16.5C12.58,16.5 13.13,16.58 13.65,16.72L12,14.45M7.84,20.18C9.08,19.75 10.5,19.5 12,19.5C13.5,19.5 14.92,19.75 16.16,20.18L14.88,18.42C14.16,17.85 13.13,17.5 12,17.5C10.87,17.5 9.84,17.85 9.12,18.42L7.84,20.18Z"
  }));
};

SpiderWebIcon.displayName = 'SpiderWebIcon';
SpiderWebIcon.defaultProps = {
  size: 24
};
var _default = SpiderWebIcon;
exports["default"] = _default;