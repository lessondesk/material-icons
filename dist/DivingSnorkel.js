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

var DivingSnorkelIcon = function DivingSnorkelIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,3H4C2.9,3 2,3.9 2,5V10C2,11.1 2.9,12 4,12H7.15C7.57,12 7.95,12.24 8.1,12.63C8.44,13.68 9.58,14.25 10.62,13.91C11.23,13.71 11.7,13.23 11.9,12.63C12.05,12.24 12.43,12 12.85,12H16C17.1,12 18,11.1 18,10V5C18,3.9 17.1,3 16,3M16,10H11.35C11.1,9.46 10.59,9.09 10,9C9.41,9.09 8.9,9.46 8.65,10H4V5H16V10M22,2V15.5C22,19.09 19.09,22 15.5,22C13.79,22 12.15,21.32 10.93,20.12C8.95,20.58 6.88,19.79 5.71,18.12L7.62,17.29C8.5,18.22 9.84,18.5 11,18C11.2,17.91 11.39,17.8 11.56,17.67C12.4,17.05 12.87,16.04 12.78,15L14.69,14.17C15.1,16.04 14.41,18 12.9,19.17C13.66,19.71 14.57,20 15.5,20C18,20 20,18 20,15.5V2H22Z"
  }));
};

DivingSnorkelIcon.displayName = 'DivingSnorkelIcon';
DivingSnorkelIcon.defaultProps = {
  size: 24
};
var _default = DivingSnorkelIcon;
exports["default"] = _default;