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

var CreativeCommonsIcon = function CreativeCommonsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.89,10.34L10.55,11.04C10.41,10.74 10.24,10.53 10.03,10.41C9.82,10.29 9.62,10.23 9.45,10.23C8.55,10.23 8.11,10.82 8.11,12C8.11,12.54 8.22,12.97 8.45,13.29C8.67,13.61 9,13.77 9.45,13.77C10.03,13.77 10.44,13.5 10.68,12.91L11.91,13.54C11.65,14.03 11.29,14.41 10.82,14.69C10.36,14.97 9.85,15.11 9.29,15.11C8.39,15.11 7.67,14.84 7.12,14.29C6.58,13.74 6.3,13 6.3,12C6.3,11.05 6.58,10.3 7.13,9.74C7.69,9.18 8.39,8.9 9.23,8.9C10.47,8.89 11.36,9.38 11.89,10.34M17.66,10.34L16.34,11.04C16.2,10.74 16,10.53 15.81,10.41C15.6,10.29 15.4,10.23 15.21,10.23C14.32,10.23 13.87,10.82 13.87,12C13.87,12.54 14,12.97 14.21,13.29C14.44,13.61 14.77,13.77 15.21,13.77C15.8,13.77 16.21,13.5 16.45,12.91L17.7,13.54C17.42,14.03 17.05,14.41 16.59,14.69C16.12,14.97 15.62,15.11 15.07,15.11C14.17,15.11 13.44,14.84 12.9,14.29C12.36,13.74 12.09,13 12.09,12C12.09,11.05 12.37,10.3 12.92,9.74C13.47,9.18 14.17,8.9 15,8.9C16.26,8.89 17.14,9.38 17.66,10.34M12,3.5C16.69,3.5 20.5,7.31 20.5,12C20.5,16.69 16.69,20.5 12,20.5C7.31,20.5 3.5,16.69 3.5,12C3.5,7.31 7.31,3.5 12,3.5M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"
  }));
};

CreativeCommonsIcon.displayName = 'CreativeCommonsIcon';
CreativeCommonsIcon.defaultProps = {
  size: 24
};
var _default = CreativeCommonsIcon;
exports["default"] = _default;