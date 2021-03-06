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

var NfcSearchVariantIcon = function NfcSearchVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.5,12C19,12 21,14 21,16.5C21,17.38 20.76,18.21 20.32,18.9L23.4,22L22,23.39L18.89,20.32C18.2,20.75 17.38,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14C15.12,14 14,15.12 14,16.5C14,17.88 15.12,19 16.5,19C17.89,19 19,17.88 19,16.5C19,15.12 17.88,14 16.5,14M18,6V10.18C17.33,10 16.66,9.97 16,10V8H13V10.28L13.53,10.72C12.34,11.33 11.35,12.3 10.72,13.53C10.28,13.17 10,12.62 10,12C10,11.26 10.41,10.62 11,10.28V8C11,6.9 11.9,6 13,6H18M6,18V6H8L10,6V8H8V16H10C9.96,16.68 10,17.35 10.17,18H6M20,4H4V20H11C11.53,20.8 12.21,21.5 13.03,22H4C2.89,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2H20C21.1,2 22,2.9 22,4V13.04C21.5,12.24 20.82,11.54 20,11V4Z"
  }));
};

NfcSearchVariantIcon.displayName = 'NfcSearchVariantIcon';
NfcSearchVariantIcon.defaultProps = {
  size: 24
};
var _default = NfcSearchVariantIcon;
exports["default"] = _default;