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

var UberIcon = function UberIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6.38,13.24V13.24C6.38,11.84 6.38,10.44 6.38,9.04H7.4V15.84H6.39C6.39,15.63 6.39,15.42 6.39,15.21C5.93,15.68 5.29,15.96 4.58,15.96C3.12,15.96 2,14.9 2,13.3V9.04H3V13.24C3,14.33 3.74,15.04 4.7,15.04C5.64,15.04 6.38,14.31 6.38,13.24M9.14,9.04V11.5C9.37,11.29 9.65,11.1 9.95,10.97C10.25,10.85 10.58,10.78 10.91,10.78C12.37,10.78 13.5,11.94 13.5,13.37C13.5,14.8 12.37,15.96 10.91,15.96C10.58,15.96 10.25,15.89 9.95,15.77C9.64,15.64 9.37,15.45 9.13,15.22C9.13,15.43 9.13,15.63 9.13,15.84C8.81,15.84 8.5,15.84 8.16,15.84V9.04H9.14M12.55,13.37V13.37C12.55,12.41 11.77,11.65 10.84,11.65C9.89,11.65 9.13,12.41 9.13,13.37C9.13,14.32 9.88,15.09 10.84,15.09C11.77,15.09 12.55,14.32 12.55,13.37M16.46,10.79C17.9,10.79 18.95,11.89 18.95,13.36V13.69H14.91C15.04,14.5 15.71,15.09 16.55,15.09C17.13,15.09 17.61,14.86 18,14.36L18.7,14.89C18.2,15.55 17.46,15.95 16.55,15.95C15.06,15.95 13.91,14.84 13.91,13.36C13.91,11.97 15,10.79 16.46,10.79M14.92,12.91H17.95C17.79,12.15 17.18,11.65 16.44,11.65C15.71,11.65 15.1,12.15 14.92,12.91M20.5,13V15.84H19.5V10.89C19.82,10.89 20.14,10.89 20.47,10.89V11.5C20.71,11.1 21.11,10.85 21.66,10.85H22V11.76H21.59C20.95,11.76 20.5,12.26 20.5,13"
  }));
};

UberIcon.displayName = 'UberIcon';
UberIcon.defaultProps = {
  size: 24
};
var _default = UberIcon;
exports["default"] = _default;