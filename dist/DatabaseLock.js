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

var DatabaseLockIcon = function DatabaseLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,3C15.42,3 19,4.79 19,7C19,9.21 15.42,11 11,11C6.58,11 3,9.21 3,7C3,4.79 6.58,3 11,3M19,12.03C17.11,12.24 15.57,13.62 15.13,15.43C13.92,15.79 12.5,16 11,16C6.58,16 3,14.21 3,12V9C3,11.21 6.58,13 11,13C15.42,13 19,11.21 19,9V12.03M14,17.71V20.71C13.07,20.9 12.06,21 11,21C6.58,21 3,19.21 3,17V14C3,16.21 6.58,18 11,18C12.06,18 13.07,17.9 14,17.71M19.5,14C20.88,14 22,15.12 22,16.5V17C22.55,17 23,17.45 23,18V22C23,22.55 22.55,23 22,23H17C16.45,23 16,22.55 16,22V18C16,17.45 16.45,17 17,17V16.5C17,15.12 18.12,14 19.5,14M19.5,15C18.67,15 18,15.67 18,16.5V17H21V16.5C21,15.67 20.33,15 19.5,15Z"
  }));
};

DatabaseLockIcon.displayName = 'DatabaseLockIcon';
DatabaseLockIcon.defaultProps = {
  size: 24
};
var _default = DatabaseLockIcon;
exports["default"] = _default;