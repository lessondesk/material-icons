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

var BufferIcon = function BufferIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.6,2.86C15.27,4.1 18,5.39 20.66,6.63C20.81,6.7 21,6.75 21,6.95C21,7.15 20.81,7.19 20.66,7.26C18,8.5 15.3,9.77 12.62,11C12.21,11.21 11.79,11.21 11.38,11C8.69,9.76 6,8.5 3.32,7.25C3.18,7.19 3,7.14 3,6.94C3,6.76 3.18,6.71 3.31,6.65C6,5.39 8.74,4.1 11.44,2.85C11.73,2.72 12.3,2.73 12.6,2.86M12,21.15C11.8,21.15 11.66,21.07 11.38,20.97C8.69,19.73 6,18.47 3.33,17.22C3.19,17.15 3,17.11 3,16.9C3,16.7 3.19,16.66 3.34,16.59C3.78,16.38 4.23,16.17 4.67,15.96C5.12,15.76 5.56,15.76 6,15.97C7.79,16.8 9.57,17.63 11.35,18.46C11.79,18.67 12.23,18.66 12.67,18.46C14.45,17.62 16.23,16.79 18,15.96C18.44,15.76 18.87,15.75 19.29,15.95C19.77,16.16 20.24,16.39 20.71,16.61C20.78,16.64 20.85,16.68 20.91,16.73C21.04,16.83 21.04,17 20.91,17.08C20.83,17.14 20.74,17.19 20.65,17.23C18,18.5 15.33,19.72 12.66,20.95C12.46,21.05 12.19,21.15 12,21.15M12,16.17C11.9,16.17 11.55,16.07 11.36,16C8.68,14.74 6,13.5 3.34,12.24C3.2,12.18 3,12.13 3,11.93C3,11.72 3.2,11.68 3.35,11.61C3.8,11.39 4.25,11.18 4.7,10.97C5.13,10.78 5.56,10.78 6,11C7.78,11.82 9.58,12.66 11.38,13.5C11.79,13.69 12.21,13.69 12.63,13.5C14.43,12.65 16.23,11.81 18.04,10.97C18.45,10.78 18.87,10.78 19.29,10.97C19.76,11.19 20.24,11.41 20.71,11.63C20.77,11.66 20.84,11.69 20.9,11.74C21.04,11.85 21.04,12 20.89,12.12C20.84,12.16 20.77,12.19 20.71,12.22C18,13.5 15.31,14.75 12.61,16C12.42,16.09 12.08,16.17 12,16.17Z"
  }));
};

BufferIcon.displayName = 'BufferIcon';
BufferIcon.defaultProps = {
  size: 24
};
var _default = BufferIcon;
exports["default"] = _default;