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

var EmoticonPoopOutlineIcon = function EmoticonPoopOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.42,13.87C21.2,13.41 20.84,12.94 20.25,12.64C19.85,12.39 19.5,12.26 19.24,12.2C19.5,11.25 19.13,10.5 18.62,9.94C17.85,9.12 17.06,9 17.06,9C17.32,8.5 17.42,7.9 17.28,7.32C17.12,6.61 16.73,6.16 16.22,5.86C15.7,5.55 15.06,5.4 14.4,5.28C14.08,5.22 12.75,5.03 12.2,4.27C11.75,3.65 11.74,2.53 11.62,2.2C11.57,2.07 11.5,2 11.36,2C11.15,2 10.87,2.12 10.57,2.32C10,2.7 8.85,3.9 8.4,5.1C8.06,6 8.05,6.82 8.19,7.43C7.63,7.53 7.22,7.71 7.06,7.78C6.55,8 5.47,8.96 5.37,10.45C5.34,10.89 5.41,11.34 5.5,11.78C5.5,11.86 5.5,11.94 5.5,12.03C4.88,12.22 4.53,12.43 4.5,12.44C4.18,12.56 3.65,12.93 3.5,13.13C3.15,13.53 2.92,14 2.79,14.5C2.5,15.59 2.6,16.83 3.13,17.83C3.42,18.39 3.82,19 4.26,19.43C5.7,20.91 8.18,21.47 10.14,21.79C10.96,21.93 11.8,22 12.63,22C14.22,22 15.8,21.73 17.26,21.13C20.61,19.74 21.5,17.5 21.64,16.89C21.93,15.5 21.57,14.19 21.42,13.87M16.05,11.33C16.61,11.36 17.04,11.84 17,12.4C16.96,12.95 16.5,13.38 15.91,13.34C15.35,13.31 14.92,12.83 14.96,12.28C15,11.75 15.42,11.35 15.94,11.33C16,11.33 16,11.33 16.05,11.33M20.18,16.55C20.17,16.57 19.7,18.5 16.69,19.74C15.47,20.25 14.1,20.5 12.63,20.5C11.9,20.5 11.14,20.44 10.38,20.31C8.76,20.05 6.5,19.56 5.31,18.36C5.04,18.09 4.72,17.63 4.46,17.13C4.12,16.5 4.04,15.65 4.24,14.88C4.32,14.58 4.45,14.32 4.63,14.12L4.65,14.09C4.74,14 4.95,13.88 5.03,13.84V13.84L5.14,13.8L5.26,13.74C5.32,13.7 5.46,13.63 5.67,13.55C6.13,14.81 7.28,15.7 8.59,15.7C8.67,15.7 8.74,15.69 8.82,15.69C9.65,15.63 10.41,15.22 10.94,14.55C11.47,13.89 11.73,13.04 11.66,12.17C11.54,10.5 10.22,9.16 8.64,9.11H8.62C8.5,9.11 8.4,9.11 8.31,9.12C8,9.15 7.73,9.23 7.46,9.34C7.55,9.24 7.63,9.17 7.66,9.15C7.79,9.1 8.07,9 8.45,8.91L10,8.63L9.65,7.09C9.61,6.9 9.53,6.35 9.81,5.63C9.96,5.2 10.27,4.76 10.58,4.38C10.68,4.65 10.81,4.91 11,5.15C11.77,6.23 13.12,6.58 14.06,6.74L14.13,6.76C14.6,6.84 15.13,6.95 15.46,7.15C15.67,7.28 15.76,7.41 15.82,7.67C15.87,7.87 15.84,8.1 15.73,8.31L15.21,9.2C13.95,9.5 12.95,10.64 12.79,12.06C12.59,13.87 13.78,15.46 15.5,15.68C15.62,15.69 15.74,15.7 15.85,15.7C16.56,15.7 17.25,15.44 17.82,14.95C18.23,14.59 18.54,14.13 18.74,13.62L18.9,13.66C19,13.68 19.17,13.74 19.45,13.91L19.5,13.95L19.57,14C19.78,14.08 19.94,14.26 20.05,14.5C20.13,14.67 20.38,15.6 20.18,16.55M7.64,12.45C7.57,11.9 7.97,11.39 8.53,11.32C8.57,11.31 8.6,11.31 8.64,11.31C9.15,11.3 9.61,11.67 9.67,12.19C9.73,12.74 9.33,13.25 8.77,13.32C8.21,13.39 7.7,13 7.64,12.45M8.71,16.15C9,16.14 9.26,16.23 9.5,16.28C10.68,16.5 11.7,16.53 12.19,16.53C12.68,16.53 13.69,16.5 14.86,16.28C15.27,16.2 15.74,16.03 16.11,16.28C16.59,16.6 16.24,17.75 15.5,18.53C15.04,19 13.97,19.91 12.19,19.91C10.41,19.91 9.33,19 8.88,18.53C8.14,17.75 7.79,16.6 8.26,16.28C8.4,16.19 8.55,16.15 8.71,16.15Z"
  }));
};

EmoticonPoopOutlineIcon.displayName = 'EmoticonPoopOutlineIcon';
EmoticonPoopOutlineIcon.defaultProps = {
  size: 24
};
var _default = EmoticonPoopOutlineIcon;
exports["default"] = _default;