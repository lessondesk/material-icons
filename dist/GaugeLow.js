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

var GaugeLowIcon = function GaugeLowIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,14.4 5,16.5 6.7,18C8.1,16.7 10,16 12,16C14,16 15.8,16.7 17.3,18C19,16.5 20,14.4 20,12C20,7.58 16.42,4 12,4M10,5.89C10.38,5.9 10.74,6.15 10.9,6.54L12.19,9.77L12.29,10C13,10.13 13.59,10.6 13.86,11.26C14.27,12.29 13.77,13.45 12.74,13.86C11.71,14.27 10.55,13.77 10.14,12.74C9.88,12.08 10,11.32 10.43,10.76L10.33,10.5L9.04,7.29L9.03,7.26C8.83,6.75 9.08,6.17 9.59,5.96C9.72,5.91 9.85,5.89 10,5.89V5.89M14,6C14.55,6 15,6.45 15,7C15,7.55 14.55,8 14,8C13.45,8 13,7.55 13,7C13,6.45 13.45,6 14,6M17,9C17.55,9 18,9.45 18,10C18,10.55 17.55,11 17,11C16.45,11 16,10.55 16,10C16,9.45 16.45,9 17,9M7,9C7.55,9 8,9.45 8,10C8,10.55 7.55,11 7,11C6.45,11 6,10.55 6,10C6,9.45 6.45,9 7,9Z"
  }));
};

GaugeLowIcon.displayName = 'GaugeLowIcon';
GaugeLowIcon.defaultProps = {
  size: 24
};
var _default = GaugeLowIcon;
exports["default"] = _default;