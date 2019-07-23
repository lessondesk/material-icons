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

var LyftIcon = function LyftIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.56,12.5C9.56,12.6 9.5,12.72 9.4,12.79C9.2,12.97 8.89,12.94 8.71,12.74C8.63,12.65 8.59,12.53 8.59,12.41V8.5H5.66V13.39C5.66,14.74 6.75,15.83 8.1,15.83C8.68,15.83 9.24,15.62 9.68,15.24C9.64,15.6 9.43,15.93 9.11,16.11C8.75,16.31 8.35,16.42 7.94,16.41C7.46,16.41 7,16.3 6.56,16.09L6.39,16V18.6C7.04,18.86 7.74,19 8.44,19C9.47,19 10.46,18.66 11.25,18C12.08,17.25 12.54,16.18 12.5,15.06V8.5H9.56V12.5M4.93,13.39V5.59H2V12.9C1.84,14.35 2.88,15.65 4.33,15.81C4.41,15.82 4.5,15.83 4.56,15.83V15.83C4.93,15.83 5.29,15.74 5.63,15.59L5.75,15.5L5.65,15.41C5.17,14.85 4.91,14.13 4.93,13.39M22,11.39V8.5H21C20.59,6.38 18.53,5 16.41,5.41C16.17,5.45 15.94,5.5 15.71,5.61C14.28,6.24 13.33,7.62 13.26,9.18V15.83H13.39C14.95,15.76 16.19,14.47 16.19,12.9H17.41V10H16.15V9.17C16.15,8.86 16.32,8.57 16.59,8.41C17.06,8.13 17.68,8.28 17.96,8.76C18.05,8.91 18.09,9.07 18.1,9.24V11.93C18.07,14.05 19.75,15.79 21.87,15.83H22V12.9H22C21.45,12.9 21,12.45 21,11.9V11.41L22,11.39Z"
  }));
};

LyftIcon.displayName = 'LyftIcon';
LyftIcon.defaultProps = {
  size: 24
};
var _default = LyftIcon;
exports["default"] = _default;