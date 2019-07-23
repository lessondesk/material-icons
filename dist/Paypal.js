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

var PaypalIcon = function PaypalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8.32,21.97C8.21,21.92 8.08,21.76 8.06,21.65C8.03,21.5 8,21.76 8.66,17.56C9.26,13.76 9.25,13.82 9.33,13.71C9.46,13.54 9.44,13.54 10.94,13.53C12.26,13.5 12.54,13.5 13.13,13.41C16.38,12.96 18.39,11.05 19.09,7.75C19.13,7.53 19.17,7.34 19.18,7.34C19.18,7.33 19.25,7.38 19.33,7.44C20.36,8.22 20.71,9.66 20.32,11.58C19.86,13.87 18.64,15.39 16.74,16.04C15.93,16.32 15.25,16.43 14.05,16.46C13.25,16.5 13.23,16.5 13,16.65C12.83,16.82 12.84,16.79 12.45,19.2C12.18,20.9 12.08,21.45 12.04,21.55C11.97,21.71 11.83,21.85 11.67,21.93L11.56,22H10C8.71,22 8.38,22 8.32,21.97V21.97M3.82,19.74C3.63,19.64 3.5,19.47 3.5,19.27C3.5,19 6.11,2.68 6.18,2.5C6.27,2.32 6.5,2.13 6.68,2.06L6.83,2H10.36C14.27,2 14.12,2 15,2.2C17.62,2.75 18.82,4.5 18.37,7.13C17.87,10.06 16.39,11.8 13.87,12.43C13,12.64 12.39,12.7 10.73,12.7C9.42,12.7 9.32,12.71 9.06,12.85C8.8,13 8.59,13.27 8.5,13.6C8.46,13.67 8.23,15.07 7.97,16.7C7.71,18.33 7.5,19.69 7.5,19.72L7.47,19.78H5.69C4.11,19.78 3.89,19.78 3.82,19.74V19.74Z"
  }));
};

PaypalIcon.displayName = 'PaypalIcon';
PaypalIcon.defaultProps = {
  size: 24
};
var _default = PaypalIcon;
exports["default"] = _default;