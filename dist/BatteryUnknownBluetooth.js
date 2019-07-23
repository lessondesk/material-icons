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

var BatteryUnknownBluetoothIcon = function BatteryUnknownBluetoothIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,2V4H3.33C2.6,4 2,4.6 2,5.33V20.66C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.66V5.33C14,4.59 13.4,4 12.67,4H11V2H5M8,6C10.21,6 12,7.79 12,10C12,10.88 11.64,11.68 11.07,12.25L10.17,13.17C9.63,13.71 9.25,14.18 9.09,15H7.05C7.16,14.1 7.56,13.28 8.17,12.67L9.41,11.41C9.78,11.05 10,10.55 10,10C10,8.89 9.1,8 8,8C6.9,8 6,8.9 6,10H4C4,7.79 5.79,6 8,6M19,8V11.79L16.71,9.5L16,10.21L18.79,13L16,15.79L16.71,16.5L19,14.21V18H19.5L22.35,15.14L20.21,13L22.35,10.85L19.5,8H19M20,9.91L20.94,10.85L20,11.79V9.91M20,14.21L20.94,15.14L20,16.08V14.21M7,17H9V19H7V17Z"
  }));
};

BatteryUnknownBluetoothIcon.displayName = 'BatteryUnknownBluetoothIcon';
BatteryUnknownBluetoothIcon.defaultProps = {
  size: 24
};
var _default = BatteryUnknownBluetoothIcon;
exports["default"] = _default;