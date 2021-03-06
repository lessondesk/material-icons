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

var LinuxMintIcon = function LinuxMintIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,3.23V6.8H3.5C4.59,6.8 4.78,7.53 4.78,8.55V14.86C4.78,18.12 7.65,20.77 11.18,20.77H19.9C21,20.77 22,20.07 22,19V9.2C22,5.93 19.13,3.28 15.6,3.28H11.93V3.27L2,3.23V3.23M6.62,5.46H8.37V14.45C8.37,15.65 9.19,16.59 10.16,16.59L16.13,16.61C17.38,16.61 18.35,15.75 18.35,14.73L18.34,9.96C18.34,9.65 18.24,9.41 18,9.19C17.79,8.96 17.56,8.86 17.25,8.86C16.94,8.86 16.71,8.96 16.5,9.19C16.27,9.41 16.16,9.65 16.16,9.96V14.05H14.31V9.96C14.31,9.65 14.21,9.41 14,9.19C13.77,8.96 13.54,8.86 13.22,8.86C12.92,8.86 12.68,8.96 12.46,9.19C12.24,9.41 12.14,9.65 12.14,9.96V14.05H10.29V9.96C10.29,9.15 10.58,8.44 11.15,7.86C11.72,7.29 12.43,7 13.22,7C14,7 14.68,7.28 15.24,7.82C15.79,7.28 16.47,7 17.25,7C18.05,7 18.76,7.29 19.32,7.86C19.89,8.44 20.19,9.15 20.19,9.96L20.2,15.06C20.11,15.91 19.75,16.67 19.13,17.31V17.31C18.4,18.04 17.5,18.42 16.5,18.42H9.83C9,18.34 8.29,17.95 7.69,17.36C7,16.65 6.62,15.79 6.62,14.79V5.46H6.62Z"
  }));
};

LinuxMintIcon.displayName = 'LinuxMintIcon';
LinuxMintIcon.defaultProps = {
  size: 24
};
var _default = LinuxMintIcon;
exports["default"] = _default;