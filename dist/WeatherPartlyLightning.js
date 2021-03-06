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

var WeatherPartlyLightningIcon = function WeatherPartlyLightningIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,15C18.65,15 18.31,15.06 18,15.17V15C18,13.19 17.19,11.56 15.92,10.46C16.35,8.03 15.1,5.5 12.75,4.47C9.97,3.24 6.72,4.5 5.5,7.25C4.6,9.24 5,11.45 6.27,13H6C3.79,13 2,14.79 2,17C2,19.21 3.79,21 6,21H7C7,21 8,21 8,20C8,19 7,19 7,19H6C4.9,19 4,18.1 4,17C4,15.9 4.9,15 6,15H8C8,12.79 9.79,11 12,11C14.21,11 16,12.79 16,15V17H19C19.55,17 20,17.45 20,18C20,18.55 19.55,19 19,19H17C17,19 16,19 16,20C16,21 17,21 17,21H19C20.66,21 22,19.66 22,18C22,16.34 20.66,15 19,15M12,9C10.16,9 8.5,9.83 7.41,11.13C6.93,10.22 6.85,9.09 7.31,8.07C8.09,6.31 10.16,5.5 11.93,6.3C13.18,6.86 13.94,8.06 14,9.34C13.38,9.12 12.7,9 12,9M13.55,2.63C13,2.4 12.45,2.23 11.88,2.12L14.37,0.82L15.27,3.71C14.76,3.29 14.19,2.93 13.55,2.63M6.09,3.44C5.6,3.79 5.17,4.19 4.8,4.63L4.91,1.82L7.87,2.5C7.25,2.71 6.65,3.03 6.09,3.44M18,8.71C17.91,8.12 17.78,7.55 17.59,7L19.97,8.5L17.92,10.73C18.03,10.08 18.05,9.4 18,8.71M3.04,10.3C3.11,10.9 3.25,11.47 3.43,12L1.06,10.5L3.1,8.28C3,8.93 2.97,9.61 3.04,10.3M11.8,15H14.25L12.61,18.27H14.25L11.18,24L11.8,19.91H9.75"
  }));
};

WeatherPartlyLightningIcon.displayName = 'WeatherPartlyLightningIcon';
WeatherPartlyLightningIcon.defaultProps = {
  size: 24
};
var _default = WeatherPartlyLightningIcon;
exports["default"] = _default;