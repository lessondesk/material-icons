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

var WatchVibrateOffIcon = function WatchVibrateOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M0,9H2V15H0V9M12,7.5C14.47,7.5 16.47,9.53 16.46,12C16.45,12.38 16.4,12.76 16.3,13.13L17.5,14.31C17.81,13.58 18,12.8 18,12C18,10.17 17.16,8.44 15.72,7.31L15,3H9L8.59,5.39L10.86,7.66C11.23,7.55 11.61,7.5 12,7.5M21,17V7H19V15.8L20.2,17H21M16.5,15.86L22.11,21.46L20.84,22.73L15.55,17.44L15,21H9L8.27,16.72C5.85,14.82 5.27,11.4 6.91,8.8L1.11,3L2.39,1.73L8.09,7.44L9.17,8.5L15.44,14.79L16.5,15.86M14.05,15.94L8.05,9.94C7.7,10.57 7.5,11.28 7.5,12C7.5,14.47 9.53,16.47 12,16.46C12.72,16.46 13.42,16.28 14.05,15.94M22,9V15H24V9H22M3,17H5V7H3V17Z"
  }));
};

WatchVibrateOffIcon.displayName = 'WatchVibrateOffIcon';
WatchVibrateOffIcon.defaultProps = {
  size: 24
};
var _default = WatchVibrateOffIcon;
exports["default"] = _default;