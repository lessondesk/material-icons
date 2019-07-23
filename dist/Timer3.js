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

var Timer3Icon = function Timer3Icon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.87,14.37C20.73,14.09 20.5,13.84 20.24,13.63C19.96,13.42 19.63,13.24 19.23,13.1C18.83,12.96 18.38,12.83 17.88,12.72C17.53,12.65 17.24,12.57 17,12.5C16.78,12.41 16.6,12.33 16.46,12.24C16.32,12.15 16.23,12.05 16.18,11.94C16.13,11.83 16.1,11.7 16.1,11.55C16.1,11.4 16.13,11.27 16.19,11.14C16.25,11 16.34,10.89 16.46,10.8C16.58,10.7 16.73,10.62 16.91,10.56C17.09,10.5 17.31,10.47 17.55,10.47C17.8,10.47 18,10.5 18.21,10.58C18.4,10.65 18.56,10.75 18.69,10.87C18.82,11 18.91,11.13 19,11.29C19.04,11.45 19.08,11.61 19.08,11.78H21.03C21.03,11.39 20.95,11.03 20.79,10.69C20.63,10.35 20.4,10.06 20.1,9.81C19.8,9.56 19.44,9.37 19,9.22C18.58,9.07 18.09,9 17.55,9C17.04,9 16.57,9.07 16.16,9.21C15.75,9.35 15.39,9.54 15.1,9.78C14.81,10 14.59,10.3 14.43,10.62C14.27,10.94 14.2,11.27 14.2,11.63C14.2,12 14.28,12.31 14.43,12.59C14.58,12.87 14.8,13.11 15.07,13.32C15.34,13.53 15.67,13.7 16.05,13.85C16.43,14 16.86,14.11 17.32,14.21C17.71,14.29 18.03,14.38 18.27,14.47C18.5,14.56 18.7,14.66 18.84,14.76C18.97,14.86 19.06,15 19.11,15.1C19.16,15.22 19.18,15.35 19.18,15.5C19.18,15.81 19.05,16.06 18.78,16.26C18.5,16.46 18.12,16.55 17.61,16.55C17.39,16.55 17.18,16.53 16.97,16.47C16.76,16.42 16.57,16.34 16.41,16.23C16.24,16.12 16.11,15.97 16,15.79C15.89,15.61 15.83,15.38 15.82,15.12H13.93C13.93,15.5 14,15.83 14.17,16.17C14.33,16.5 14.56,16.82 14.87,17.1C15.18,17.37 15.56,17.59 16,17.76C16.5,17.93 17,18 17.6,18C18.13,18 18.61,17.95 19.04,17.82C19.47,17.69 19.84,17.5 20.15,17.28C20.46,17.05 20.69,16.77 20.86,16.45C21.03,16.13 21.11,15.78 21.11,15.39C21.09,15 21,14.65 20.87,14.37M11.61,12.97C11.45,12.73 11.25,12.5 11,12.32C10.74,12.13 10.43,11.97 10.06,11.84C10.36,11.7 10.63,11.54 10.86,11.34C11.09,11.14 11.28,10.93 11.43,10.7C11.58,10.47 11.7,10.24 11.77,10C11.85,9.75 11.88,9.5 11.88,9.26C11.88,8.71 11.79,8.22 11.6,7.8C11.42,7.38 11.16,7.03 10.82,6.74C10.5,6.46 10.09,6.24 9.62,6.1C9.17,5.97 8.65,5.9 8.09,5.9C7.54,5.9 7.03,6 6.57,6.14C6.1,6.31 5.7,6.54 5.37,6.83C5.04,7.12 4.77,7.46 4.59,7.86C4.39,8.25 4.3,8.69 4.3,9.15H6.28C6.28,8.89 6.33,8.66 6.42,8.46C6.5,8.26 6.64,8.08 6.8,7.94C6.97,7.8 7.16,7.69 7.38,7.61C7.6,7.53 7.84,7.5 8.11,7.5C8.72,7.5 9.17,7.65 9.47,7.96C9.77,8.27 9.91,8.71 9.91,9.28C9.91,9.55 9.87,9.8 9.79,10C9.71,10.24 9.58,10.43 9.41,10.59C9.24,10.75 9.03,10.87 8.78,10.96C8.53,11.05 8.23,11.09 7.89,11.09H6.72V12.66H7.9C8.24,12.66 8.54,12.7 8.81,12.77C9.08,12.85 9.31,12.96 9.5,13.12C9.69,13.28 9.84,13.5 9.94,13.73C10.04,13.97 10.1,14.27 10.1,14.6C10.1,15.22 9.92,15.69 9.57,16C9.22,16.35 8.73,16.5 8.12,16.5C7.83,16.5 7.56,16.47 7.32,16.38C7.08,16.3 6.88,16.18 6.71,16C6.54,15.86 6.41,15.68 6.32,15.46C6.23,15.24 6.18,15 6.18,14.74H4.19C4.19,15.29 4.3,15.77 4.5,16.19C4.72,16.61 5,16.96 5.37,17.24C5.73,17.5 6.14,17.73 6.61,17.87C7.08,18 7.57,18.08 8.09,18.08C8.66,18.08 9.18,18 9.67,17.85C10.16,17.7 10.58,17.47 10.93,17.17C11.29,16.87 11.57,16.5 11.77,16.07C11.97,15.64 12.07,15.14 12.07,14.59C12.07,14.3 12.03,14 11.96,13.73C11.88,13.5 11.77,13.22 11.61,12.97Z"
  }));
};

Timer3Icon.displayName = 'Timer3Icon';
Timer3Icon.defaultProps = {
  size: 24
};
var _default = Timer3Icon;
exports["default"] = _default;