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

var ZodiacCancerIcon = function ZodiacCancerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,4C6.5,4 2,7.58 2,12C2,14.12 3.65,15.87 5.76,16H6C8.21,16 10,14.21 10,12C10,9.79 8.21,8 6,8H5.76C7.44,6.41 9.69,5.55 12,5.6C13.77,5.58 15.5,6.07 17,7L18.25,5.75C16.38,4.58 14.21,3.97 12,4M6,10C7.1,10 8,10.9 8,12C8,13.11 7.08,14 6,14C4.96,14 4.1,13.22 4,12.2C4,12.07 4,11.93 4,11.8C4.1,10.77 4.97,10 6,10M18.24,8H18C15.79,8 14,9.79 14,12C14,14.21 15.79,16 18,16H18.24C16.56,17.59 14.31,18.45 12,18.4C10.23,18.42 8.5,17.93 7,17L5.76,18.24C7.63,19.41 9.79,20 12,20C17.5,20 22,16.42 22,12C22,9.88 20.35,8.13 18.24,8M18,14C16.9,14 16,13.1 16,12C16,10.89 16.92,10 18,10C19.04,10 19.9,10.78 20,11.8C20,11.93 20,12.07 20,12.2C19.9,13.23 19.03,14 18,14Z"
  }));
};

ZodiacCancerIcon.displayName = 'ZodiacCancerIcon';
ZodiacCancerIcon.defaultProps = {
  size: 24
};
var _default = ZodiacCancerIcon;
exports["default"] = _default;