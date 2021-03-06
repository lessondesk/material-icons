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

var HangerIcon = function HangerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.76,16.34H20.75C21.5,16.77 22,17.58 22,18.5C22,19.88 20.88,21 19.5,21H4.5C3.12,21 2,19.88 2,18.5C2,17.58 2.5,16.77 3.25,16.34H3.24L11,11.86C11,11.86 11,11 12,10C13,10 14,9.1 14,8C14,6.9 13.1,6 12,6C10.9,6 10,6.9 10,8H8C8,5.79 9.79,4 12,4C14.21,4 16,5.79 16,8C16,9.86 14.73,11.42 13,11.87L20.76,16.34M4.5,19V19H19.5V19C19.67,19 19.84,18.91 19.93,18.75C20.07,18.5 20,18.21 19.75,18.07L12,13.59L4.25,18.07C4,18.21 3.93,18.5 4.07,18.75C4.16,18.91 4.33,19 4.5,19Z"
  }));
};

HangerIcon.displayName = 'HangerIcon';
HangerIcon.defaultProps = {
  size: 24
};
var _default = HangerIcon;
exports["default"] = _default;