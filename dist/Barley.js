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

var BarleyIcon = function BarleyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.33,18.33C6.5,17.17 6.5,15.83 6.5,14.5C8.17,15.5 9.83,16.5 10.67,17.67L11,18.23V15.95C9.5,15.05 8.08,14.13 7.33,13.08C6.5,11.92 6.5,10.58 6.5,9.25C8.17,10.25 9.83,11.25 10.67,12.42L11,13V10.7C9.5,9.8 8.08,8.88 7.33,7.83C6.5,6.67 6.5,5.33 6.5,4C8.17,5 9.83,6 10.67,7.17C10.77,7.31 10.86,7.46 10.94,7.62C10.77,7 10.66,6.42 10.65,5.82C10.64,4.31 11.3,2.76 11.96,1.21C12.65,2.69 13.34,4.18 13.35,5.69C13.36,6.32 13.25,6.96 13.07,7.59C13.15,7.45 13.23,7.31 13.33,7.17C14.17,6 15.83,5 17.5,4C17.5,5.33 17.5,6.67 16.67,7.83C15.92,8.88 14.5,9.8 13,10.7V13L13.33,12.42C14.17,11.25 15.83,10.25 17.5,9.25C17.5,10.58 17.5,11.92 16.67,13.08C15.92,14.13 14.5,15.05 13,15.95V18.23L13.33,17.67C14.17,16.5 15.83,15.5 17.5,14.5C17.5,15.83 17.5,17.17 16.67,18.33C15.92,19.38 14.5,20.3 13,21.2V23H11V21.2C9.5,20.3 8.08,19.38 7.33,18.33Z"
  }));
};

BarleyIcon.displayName = 'BarleyIcon';
BarleyIcon.defaultProps = {
  size: 24
};
var _default = BarleyIcon;
exports["default"] = _default;