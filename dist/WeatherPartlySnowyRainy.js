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

var WeatherPartlySnowyRainyIcon = function WeatherPartlySnowyRainyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.55,2.66C13,2.42 12.45,2.26 11.88,2.15L14.37,0.84L15.27,3.73C14.76,3.31 14.19,2.95 13.55,2.66M6.09,3.46C5.6,3.81 5.17,4.21 4.8,4.66L4.91,1.84L7.87,2.53C7.25,2.73 6.65,3.05 6.09,3.46M18,8.73C17.91,8.15 17.78,7.57 17.59,7.03L19.97,8.53L17.92,10.76C18.03,10.1 18.05,9.42 18,8.73M3.04,10.32C3.11,10.92 3.25,11.5 3.43,12.03L1.06,10.53L3.1,8.3C3,8.95 2.97,9.64 3.04,10.32M16.68,22.21C16.68,23.2 15.91,24 14.95,24C14,24 13.23,23.2 13.23,22.21C13.23,21.03 14.95,19.03 14.95,19.03C14.95,19.03 16.68,21.03 16.68,22.21M6.03,21.45C5.93,21.07 6.15,20.68 6.54,20.58L8.13,20.15L6.96,19C6.68,18.72 6.68,18.27 6.96,18C7.23,17.7 7.7,17.7 8,18L9.14,19.14L9.55,17.56C9.65,17.17 10.05,16.94 10.43,17.05C10.82,17.15 11.05,17.55 10.93,17.93L10.5,19.5L12.1,19.1C12.5,19 12.88,19.21 13,19.6C13.08,19.97 12.86,20.37 12.47,20.47L10.89,20.89L12.05,22.05C12.33,22.32 12.33,22.79 12.05,23.07C11.77,23.35 11.31,23.35 11.03,23.07L9.87,21.9L9.45,23.5C9.35,23.88 8.95,24.1 8.57,24C8.18,23.9 7.97,23.5 8.06,23.12L8.5,21.55L6.91,21.96C6.5,22.06 6.13,21.84 6.03,21.45M19,15.03C18.65,15.03 18.31,15.08 18,15.19V15.03C18,13.21 17.19,11.58 15.92,10.5C16.35,8.05 15.1,5.53 12.75,4.5C9.97,3.27 6.72,4.53 5.5,7.28C4.6,9.27 5,11.47 6.27,13.03H6C3.79,13.03 2,14.81 2,17.03C2,18.17 2.5,19.2 3.27,19.93V19.93C3.27,19.93 3.97,20.64 4.68,19.93C5.39,19.22 4.68,18.5 4.68,18.5C4.27,18.15 4,17.62 4,17.03C4,15.92 4.9,15.03 6,15.03H8C8,12.81 9.79,11.03 12,11.03C14.21,11.03 16,12.82 16,15.03V17.03H19C19.55,17.03 20,17.48 20,18.03C20,18.57 19.55,19.03 19,19.03H18C18,19.03 17,19.03 17,20.03C17,21.03 18,21.03 18,21.03H19C20.66,21.03 22,19.69 22,18.03C22,16.37 20.66,15.03 19,15.03M12,9.03C10.16,9.03 8.5,9.85 7.41,11.16C6.93,10.25 6.85,9.11 7.31,8.09C8.09,6.33 10.16,5.53 11.93,6.32C13.18,6.89 13.94,8.08 14,9.37C13.38,9.15 12.7,9.03 12,9.03Z"
  }));
};

WeatherPartlySnowyRainyIcon.displayName = 'WeatherPartlySnowyRainyIcon';
WeatherPartlySnowyRainyIcon.defaultProps = {
  size: 24
};
var _default = WeatherPartlySnowyRainyIcon;
exports["default"] = _default;