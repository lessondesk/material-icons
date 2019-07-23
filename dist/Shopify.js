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

var ShopifyIcon = function ShopifyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.61,5.89C18.6,5.79 18.5,5.73 18.44,5.73C18.37,5.72 16.83,5.61 16.83,5.61C16.83,5.61 15.76,4.55 15.65,4.43C15.53,4.31 15.3,4.35 15.21,4.37C15.2,4.37 15,4.44 14.61,4.55C14.25,3.5 13.62,2.58 12.43,2.58C12.11,2.18 11.72,2 11.38,2C8.8,2 7.57,5.22 7.18,6.86C6.18,7.17 5.47,7.39 5.37,7.42C4.82,7.6 4.8,7.62 4.73,8.14C4.67,8.54 3.21,19.86 3.21,19.86L14.61,22L20.79,20.66C20.79,20.66 18.62,6 18.61,5.89M14,4.76C13.69,4.85 13.37,4.95 13,5.06C13,5 13,4.93 13,4.85C13,4.21 12.93,3.7 12.79,3.29C13.35,3.36 13.73,4 14,4.76M12.08,3.42C12.24,3.82 12.34,4.39 12.34,5.16C12.34,5.2 12.34,5.24 12.34,5.27C11.71,5.46 11.03,5.68 10.35,5.89C10.73,4.4 11.45,3.69 12.08,3.42M11.31,2.69C11.42,2.69 11.53,2.73 11.64,2.8C10.81,3.19 9.93,4.17 9.55,6.12C9,6.3 8.47,6.46 8,6.62C8.42,5.12 9.46,2.69 11.31,2.69M12.5,9.15L11.76,11.42C11.76,11.42 11.09,11.06 10.27,11.06C9.07,11.06 9,11.81 9,12C9,13.04 11.71,13.43 11.71,15.86C11.71,17.77 10.5,19 8.87,19C6.91,19 5.91,17.78 5.91,17.78L6.43,16.05C6.43,16.05 7.46,16.93 8.33,16.93C8.9,16.93 9.13,16.5 9.13,16.16C9.13,14.81 6.92,14.75 6.92,12.53C6.92,10.66 8.26,8.85 10.97,8.85C12,8.85 12.5,9.15 12.5,9.15M15.43,5.29L16.75,6.6L17.71,6.68C18.05,9 19.19,16.73 19.66,19.88L14.66,20.97L15.43,5.29Z"
  }));
};

ShopifyIcon.displayName = 'ShopifyIcon';
ShopifyIcon.defaultProps = {
  size: 24
};
var _default = ShopifyIcon;
exports["default"] = _default;