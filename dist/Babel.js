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

var BabelIcon = function BabelIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.23,11.5C18.2,11.34 17.76,10.79 16.91,9.85C16.89,9.66 17.2,9.4 17.81,9.05L19.55,7.5C19.94,7 20.17,6.22 20.24,5.12L20.22,4.86C20.15,4.08 19.59,3.46 18.53,2.97C17.9,2.55 16.77,2.32 15.15,2.29C13.8,2.4 12.04,2.88 9.87,3.72C9.27,4.15 8.59,4.58 7.83,5L7.84,5.14L8.05,5.06C8.13,5.05 8.18,5.09 8.19,5.17L8.32,5.1L8.39,5.09L8.4,5.15C8.4,5.22 7.93,5.59 6.64,6.5L6.58,6.62C6.27,6.64 5.97,6.87 5.67,7.29L5.75,7.41L6,7.32L6.18,7.56C6.5,7.23 6.84,6.94 7.21,6.69C7.4,6.74 7.5,6.8 7.65,6.85C8.67,6.1 9.68,5.55 10.69,5.21L10.7,5.35C10.5,5.62 10.38,5.77 10.32,5.77L10.42,6C10.43,6.19 7.87,13 3.76,20.44L3.84,20.63C4.19,20.55 4.42,20.46 4.59,20.37L4.6,20.5L5,20.47L4.33,22.23L4.47,22.29C5.04,21.65 5.47,21 5.77,20.41C7.44,19.92 8.71,19.44 9.59,18.97C10.47,18.89 11.15,18.66 11.61,18.27L12.53,17.8C13.8,16.82 14.75,16.13 15.4,15.72C16.73,14.74 17.6,13.79 18,12.87L18.23,11.5M14.77,13.81L13,15.2C11.71,16.05 11,16.5 10.91,16.5C8.84,17.63 7.55,18.22 7.05,18.26L7,18.27C7.04,18.04 7.96,16.15 9.75,12.6C10.53,12.54 11.77,12.17 13.46,11.5L13.87,11.47C14.72,11.39 15.36,11.56 15.78,11.96L15.81,12.22C15.5,13.12 15.14,13.66 14.77,13.81M15.86,8.03C15.68,8.25 15.18,8.62 14.36,9.14C14.09,9.17 13.09,9.56 11.35,10.32L11.07,10.27L11.06,10.15C11.04,9.9 11.15,9.58 11.4,9.2C11.53,8.5 11.68,8.08 11.84,8L13.29,4.72C13.27,4.5 13.58,4.37 14.22,4.26L14.43,4.24L14.44,4.42L15.6,4.26C16.75,4.16 17.35,4.4 17.4,4.96L17.53,4.94L17.5,4.62L17.65,4.6C18,4.79 18.17,5 18.19,5.28C18.21,5.46 18.11,5.69 17.9,5.96C17.81,5.97 17.76,5.9 17.75,5.78L17.61,5.79L17.58,6.19C17,7.06 16.57,7.5 16.31,7.53L15.86,8.03Z"
  }));
};

BabelIcon.displayName = 'BabelIcon';
BabelIcon.defaultProps = {
  size: 24
};
var _default = BabelIcon;
exports["default"] = _default;