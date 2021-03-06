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

var VkBoxIcon = function VkBoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M5.5,8.5H7C7.36,8.5 7.5,8.66 7.64,9.07C8.36,11.17 9.57,13 10.07,13C10.26,13 10.35,12.92 10.35,12.45V10.28C10.29,9.28 9.76,9.19 9.76,8.84C9.76,8.67 9.9,8.5 10.14,8.5H12.45C12.77,8.5 12.87,8.67 12.87,9.04V11.96C12.87,12.27 13,12.38 13.1,12.38C13.29,12.38 13.45,12.27 13.79,11.93C14.85,10.74 15.6,8.92 15.6,8.92C15.7,8.7 15.87,8.5 16.24,8.5H17.71C18.16,8.5 18.26,8.73 18.16,9.04C17.97,9.9 16.18,12.43 16.18,12.43C16,12.68 15.96,12.8 16.18,13.09C16.33,13.3 16.85,13.74 17.19,14.15C17.83,14.86 18.3,15.46 18.44,15.87C18.56,16.29 18.35,16.5 17.93,16.5H16.45C15.89,16.5 15.73,16.05 14.73,15.05C13.85,14.21 13.5,14.1 13.26,14.1C12.96,14.1 12.87,14.18 12.87,14.61V15.93C12.87,16.29 12.76,16.5 11.82,16.5C10.26,16.5 8.54,15.55 7.33,13.8C5.5,11.24 5,9.31 5,8.92C5,8.7 5.08,8.5 5.5,8.5Z"
  }));
};

VkBoxIcon.displayName = 'VkBoxIcon';
VkBoxIcon.defaultProps = {
  size: 24
};
var _default = VkBoxIcon;
exports["default"] = _default;