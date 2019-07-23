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

var UnrealIcon = function UnrealIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2C6.48,2 2,6.48 2,12M5.24,18.76C3.43,16.95 2.44,14.55 2.44,12C2.44,9.45 3.43,7.05 5.24,5.24C7.05,3.43 9.45,2.44 12,2.44C14.55,2.44 16.95,3.43 18.76,5.24C20.57,7.05 21.56,9.45 21.56,12C21.56,14.55 20.57,16.95 18.76,18.76C16.95,20.57 14.55,21.56 12,21.56C9.45,21.56 7.05,20.57 5.24,18.76M6.35,9.5C4.34,11.79 4.73,13.68 4.73,13.68C4.73,13.68 5.28,12.38 6.61,11C7.25,10.37 7.72,10.15 8.04,10.15C8.4,10.15 8.57,10.41 8.57,10.65V15.29C8.57,15.75 8.27,15.85 8,15.84C7.77,15.84 7.55,15.76 7.55,15.76C8.92,17.73 12.19,18 12.19,18L13.63,16.5H13.67L15,17.63C17.39,16.21 18.55,13.58 18.55,13.58C17.5,14.7 16.79,14.97 16.39,14.96C16.03,14.96 15.88,14.75 15.88,14.75C15.87,14.65 15.82,8.9 15.89,8.9C16.31,8.13 17.63,6.56 17.63,6.56C15.16,7.05 13.81,8.66 13.81,8.66C13.41,8.35 12.59,8.4 12.59,8.4C12.97,8.61 13.35,9.21 13.35,9.72V14.65C13.35,14.65 12.5,15.38 11.88,15.38C11.5,15.38 11.27,15.17 11.14,15C11.05,14.88 11,14.79 11,14.79V8.69C10.93,8.75 10.82,8.8 10.71,8.8C10.57,8.79 10.43,8.73 10.34,8.53C10.26,8.38 10.22,8.15 10.22,7.83C10.22,6.7 11.5,5.96 11.5,5.96C9.87,6.39 8.36,7.22 6.35,9.5"
  }));
};

UnrealIcon.displayName = 'UnrealIcon';
UnrealIcon.defaultProps = {
  size: 24
};
var _default = UnrealIcon;
exports["default"] = _default;