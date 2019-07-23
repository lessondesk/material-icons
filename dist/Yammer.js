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

var YammerIcon = function YammerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.54,5.93L9.18,17.11C9.16,17.19 8.26,19.65 5.23,19.65C4.68,19.65 4.23,19.2 4.23,18.65C4.23,18.09 4.68,17.65 5.23,17.65C6.79,17.65 7.26,16.53 7.31,16.41L7.68,15.4L3.82,5.94C3.62,5.43 3.86,4.84 4.37,4.64C4.88,4.43 5.47,4.67 5.68,5.19L8.75,12.72L11.68,5.2C11.88,4.68 12.46,4.43 13,4.63C13.5,4.83 13.75,5.41 13.54,5.93M18.5,6.38C18.32,6.38 18.13,6.45 18,6.57C18,6.57 13.8,9.56 14,9.88C14.19,10.2 18.83,8.03 18.84,8C19.15,7.9 19.38,7.59 19.38,7.23C19.38,6.76 19,6.38 18.5,6.38M19.27,16.84C19.17,16.67 19,16.54 18.83,16.46C18.83,16.46 14.17,14.29 14,14.61C13.81,14.94 18,17.92 18,17.92C18.25,18.14 18.63,18.18 18.94,18C19.35,17.77 19.5,17.25 19.27,16.84M20.97,11.42C20.79,11.32 20.6,11.29 20.4,11.32C20.4,11.32 15.29,11.85 15.3,12.22C15.31,12.59 20.41,13 20.42,13C20.76,13.05 21.11,12.9 21.29,12.58C21.5,12.17 21.38,11.65 20.97,11.42Z"
  }));
};

YammerIcon.displayName = 'YammerIcon';
YammerIcon.defaultProps = {
  size: 24
};
var _default = YammerIcon;
exports["default"] = _default;