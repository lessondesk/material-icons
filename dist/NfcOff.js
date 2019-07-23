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

var NfcOffIcon = function NfcOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3.25,4.03L19.95,20.73L18.7,22L14.86,18.13C14.77,18.12 14.68,18.09 14.59,18.05C14.26,17.89 14.14,17.62 14.11,17.38L12.18,15.45C12.14,15.53 12.09,15.6 12.05,15.66C11.62,16.26 11.19,16.26 10.86,16.04C10.54,15.83 5.5,12 5.23,11.87C4.95,11.76 4.85,12.03 5.12,13.5C5.39,15 4.95,15.39 4.57,15.45C4.2,15.5 3.06,15.18 3,12.14C2.95,9.11 3.76,8.62 4.14,8.62C4.6,8.62 7.08,10.69 8.84,12.12L2,5.28L3.25,4.03M18.38,16.56C18.75,15.4 19.12,13.8 19.1,12.03V12C19.14,8.5 17.66,5.58 17.66,5.58C17.66,5.58 17.42,4.72 18.12,4.39C18.83,4.06 19.3,4.61 19.3,4.61C21.12,8.22 21,11.64 21,12C21,12.27 21.09,14.96 19.88,18.05L18.38,16.56M15.14,13.31C15.19,12.92 15.22,12.5 15.24,12.03V12C15.14,8.5 14.13,7.21 14.13,7.21C14.13,7.21 13.89,6.34 14.59,6C15.3,5.69 15.77,6.23 15.77,6.23C17.26,8.94 17.16,11.64 17.14,12C17.15,12.2 17.2,13.38 16.82,15L15.14,13.31M10.2,8.38C10.23,7.77 10.59,7.64 10.59,7.64C10.59,7.64 11.19,7.37 11.57,7.8C11.91,8.19 12.72,9.57 12.89,11.07L10.2,8.38Z"
  }));
};

NfcOffIcon.displayName = 'NfcOffIcon';
NfcOffIcon.defaultProps = {
  size: 24
};
var _default = NfcOffIcon;
exports["default"] = _default;