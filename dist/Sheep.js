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

var SheepIcon = function SheepIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,8.5C20,9.88 18.88,11 17.5,11C16.42,11 15.5,10.31 15.16,9.36C14.72,9.75 14.14,10 13.5,10C12.94,10 12.42,9.81 12,9.5C11.58,9.81 11.07,10 10.5,10C9.86,10 9.28,9.75 8.84,9.36C8.5,10.31 7.58,11 6.5,11C5.12,11 4,9.88 4,8.5C4,7.26 4.91,6.23 6.1,6.04C6.04,5.87 6,5.69 6,5.5C6,4.67 6.67,4 7.5,4C7.7,4 7.89,4.04 8.06,4.11C8.23,3.47 8.81,3 9.5,3C9.75,3 10,3.07 10.18,3.17C10.5,2.5 11.19,2 12,2C12.81,2 13.5,2.5 13.82,3.17C14,3.07 14.25,3 14.5,3C15.19,3 15.77,3.47 15.94,4.11C16.11,4.04 16.3,4 16.5,4C17.33,4 18,4.67 18,5.5C18,5.69 17.96,5.87 17.9,6.04C19.09,6.23 20,7.26 20,8.5M10,12C9.45,12 9,12.45 9,13C9,13.55 9.45,14 10,14C10.55,14 11,13.55 11,13C11,12.45 10.55,12 10,12M14,12C13.45,12 13,12.45 13,13C13,13.55 13.45,14 14,14C14.55,14 15,13.55 15,13C15,12.45 14.55,12 14,12M20.23,10.66C19.59,11.47 18.61,12 17.5,12C17.05,12 16.62,11.9 16.21,11.73C16.2,14.28 15.83,17.36 14.45,18.95C13.93,19.54 13.3,19.86 12.5,19.96V18H11.5V19.96C10.7,19.86 10.07,19.55 9.55,18.95C8.16,17.35 7.79,14.29 7.78,11.74C7.38,11.9 6.95,12 6.5,12C5.39,12 4.41,11.47 3.77,10.66C2.88,11.55 2,12 2,12C2,12 3,14 5,14C5.36,14 5.64,13.96 5.88,13.91C6.22,17.73 7.58,22 12,22C16.42,22 17.78,17.73 18.12,13.91C18.36,13.96 18.64,14 19,14C21,14 22,12 22,12C22,12 21.12,11.55 20.23,10.66Z"
  }));
};

SheepIcon.displayName = 'SheepIcon';
SheepIcon.defaultProps = {
  size: 24
};
var _default = SheepIcon;
exports["default"] = _default;