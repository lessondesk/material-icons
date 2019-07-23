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

var LaravelIcon = function LaravelIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,11.87C22.03,11.66 21.96,11.43 21.81,11.27C21.75,11.2 21.29,10.63 20.81,10.03C20.32,9.42 19.8,8.77 19.64,8.59C19.46,8.37 19.2,8.12 18.81,8.12C18.74,8.12 18.68,8.13 18.58,8.14C18.46,8.15 17.53,8.31 16.8,8.43C16.36,8.5 16,8.56 15.9,8.58C15.55,8.63 15.32,8.78 15.22,9C15.17,9.14 15.11,9.4 15.33,9.69L16.83,11.82L12.08,12.95L7.63,5.5C7.5,5.29 7.29,5 6.76,5C6.71,5 6.66,5 6.61,5L5.59,5.1C4.68,5.17 3,5.31 2.82,5.31C2.5,5.31 2.27,5.43 2.13,5.65C1.96,5.9 1.96,6.23 2.13,6.63C2.37,7.19 6.04,15.12 6.06,15.16C6.25,15.64 6.71,15.95 7.22,15.95C7.36,15.95 7.5,15.93 7.59,15.89C8.16,15.75 10,15.27 11.24,14.95C11.87,16.09 13,18.12 13.24,18.45C13.4,18.68 13.67,19 14.14,19C14.35,19 14.55,18.93 14.79,18.85C15.14,18.74 20.74,16.74 21.03,16.62C21.23,16.53 21.5,16.42 21.6,16.11C21.66,15.91 21.62,15.7 21.47,15.5C21.36,15.32 20.31,13.92 19.53,12.88L21.47,12.36C21.82,12.25 21.94,12.03 22,11.87M13,14.5L17.89,13.24C18.73,14.39 19.18,15 19.42,15.33C15.88,16.53 14.79,16.9 14.47,17C14.24,16.65 13.56,15.47 13,14.5M17.3,9.87C17.76,9.79 18.35,9.68 18.67,9.62C18.88,9.89 19.44,10.6 19.83,11.1C19.4,11.21 18.8,11.36 18.44,11.45L17.3,9.87M6.38,6.5L10.35,13.38L7.6,14.04C7,12.79 4.78,8.22 4.06,6.72C4.32,6.7 6.13,6.54 6.38,6.5Z"
  }));
};

LaravelIcon.displayName = 'LaravelIcon';
LaravelIcon.defaultProps = {
  size: 24
};
var _default = LaravelIcon;
exports["default"] = _default;