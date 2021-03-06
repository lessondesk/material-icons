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

var AccountMultiplePlusOutlineIcon = function AccountMultiplePlusOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,12C14.93,12 16.5,10.43 16.5,8.5C16.5,6.57 14.93,5 13,5C11.07,5 9.5,6.57 9.5,8.5C9.5,10.43 11.07,12 13,12M13,7C13.83,7 14.5,7.67 14.5,8.5C14.5,9.33 13.83,10 13,10C12.17,10 11.5,9.33 11.5,8.5C11.5,7.67 12.17,7 13,7M17.26,11.97C18.04,11.03 18.5,9.82 18.5,8.5C18.5,7.18 18.04,5.97 17.26,5.03C17.34,5 17.42,5 17.5,5C19.43,5 21,6.57 21,8.5C21,10.43 19.43,12 17.5,12C17.42,12 17.34,12 17.26,11.97M5,13V16H3V13H0V11H3V8H5V11H8V13M24,17.25V19H20.96V17.25C20.96,15.77 20.16,14.65 19,13.81C21.46,14.08 24,15.23 24,17.25M13,13.75C10.66,13.75 7,14.92 7,17.25V19H19V17.25C19,14.92 15.34,13.75 13,13.75M9.34,17C10.18,16.42 11.21,15.75 13,15.75C14.79,15.75 15.82,16.42 16.66,17"
  }));
};

AccountMultiplePlusOutlineIcon.displayName = 'AccountMultiplePlusOutlineIcon';
AccountMultiplePlusOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountMultiplePlusOutlineIcon;
exports["default"] = _default;