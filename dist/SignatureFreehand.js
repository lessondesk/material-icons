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

var SignatureFreehandIcon = function SignatureFreehandIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,22H2V20H22V22M6.2,17.3L5.5,18L4.1,16.6L2.7,18L2,17.3L3.4,15.9L2,14.5L2.7,13.8L4.1,15.2L5.5,13.8L6.2,14.5L4.8,15.9L6.2,17.3M16.22,14.43C16.22,13.85 15.5,13.2 14.06,12.46C12.23,11.54 11,10.79 10.36,10.24C9.71,9.68 9.39,9.06 9.39,8.37C9.39,6.59 10.3,5.12 12.12,3.95C13.94,2.78 15.43,2.19 16.57,2.19C17.31,2.19 17.85,2.32 18.18,2.58C18.5,2.83 18.68,3.27 18.68,3.9C18.68,4.18 18.56,4.42 18.31,4.63C18.07,4.83 17.87,4.93 17.74,4.93C17.63,4.93 17.43,4.83 17.13,4.64L16.55,4.38C16.08,4.38 15.14,4.71 13.71,5.38C12.29,6.04 11.58,6.79 11.58,7.63C11.58,8.14 11.82,8.6 12.32,9C12.82,9.42 13.71,9.93 15,10.53C16.03,11 16.86,11.5 17.5,12.07C18.1,12.61 18.41,13.25 18.41,14C18.41,15.34 17.47,16.41 15.58,17.17C13.7,17.94 11.9,18.32 10.19,18.32C8.75,18.32 8,17.83 8,16.86C8,16.5 8.19,16.27 8.5,16.11C8.83,15.95 9.16,15.87 9.5,15.87L10.25,16L10.97,16.13C11.95,16.13 13,15.97 14.13,15.64C15.26,15.32 15.96,14.91 16.22,14.43Z"
  }));
};

SignatureFreehandIcon.displayName = 'SignatureFreehandIcon';
SignatureFreehandIcon.defaultProps = {
  size: 24
};
var _default = SignatureFreehandIcon;
exports["default"] = _default;