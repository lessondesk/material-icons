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

var ClockFastIcon = function ClockFastIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,4C19.42,4 23,7.58 23,12C23,16.42 19.42,20 15,20C10.58,20 7,16.42 7,12C7,7.58 10.58,4 15,4M15,6C11.69,6 9,8.69 9,12C9,15.31 11.69,18 15,18C18.31,18 21,15.31 21,12C21,8.69 18.31,6 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18C1.45,18 1,17.55 1,17C1,16.45 1.45,16 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13C2.45,13 2,12.55 2,12C2,11.45 2.45,11 3,11H5.05L5,12L5.05,13H3M4,8C3.45,8 3,7.55 3,7C3,6.45 3.45,6 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z"
  }));
};

ClockFastIcon.displayName = 'ClockFastIcon';
ClockFastIcon.defaultProps = {
  size: 24
};
var _default = ClockFastIcon;
exports["default"] = _default;