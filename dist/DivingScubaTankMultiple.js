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

var DivingScubaTankMultipleIcon = function DivingScubaTankMultipleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,18.5C22,19.88 20.88,21 19.5,21C18.12,21 17,19.88 17,18.5C17,17.47 17.62,16.59 18.5,16.21V6H14V7.35C15.22,7.93 16,9.15 16,10.5V22H2V10.5C2,9.15 2.78,7.93 4,7.35V6H2V4H4V3.5C4,2.67 4.67,2 5.5,2C6.33,2 7,2.67 7,3.5V4H11V3.5C11,2.67 11.67,2 12.5,2C13.33,2 14,2.67 14,3.5V4H18.5C19.6,4 20.5,4.9 20.5,6V16.21C21.38,16.59 22,17.47 22,18.5M11,7.35V6H7V7.35C8.22,7.93 9,9.15 9,10.5C9,9.15 9.78,7.93 11,7.35Z"
  }));
};

DivingScubaTankMultipleIcon.displayName = 'DivingScubaTankMultipleIcon';
DivingScubaTankMultipleIcon.defaultProps = {
  size: 24
};
var _default = DivingScubaTankMultipleIcon;
exports["default"] = _default;