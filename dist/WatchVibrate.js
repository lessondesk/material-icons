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

var WatchVibrateIcon = function WatchVibrateIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,17V7H5V17H3M19,17V7H21V17H19M22,9H24V15H22V9M0,15V9H2V15H0M17.96,11.97C17.96,13.87 17.07,15.57 15.68,16.67L14.97,20.95H9L8.27,16.67C6.88,15.57 6,13.87 6,11.97C6,10.07 6.88,8.37 8.27,7.28L9,3H14.97L15.68,7.28C17.07,8.37 17.96,10.07 17.96,11.97M7.5,11.97C7.5,14.45 9.5,16.46 11.97,16.46C14.46,16.46 16.46,14.46 16.46,11.97C16.46,9.5 14.45,7.5 11.97,7.5C9.5,7.5 7.5,9.5 7.5,11.97Z"
  }));
};

WatchVibrateIcon.displayName = 'WatchVibrateIcon';
WatchVibrateIcon.defaultProps = {
  size: 24
};
var _default = WatchVibrateIcon;
exports["default"] = _default;