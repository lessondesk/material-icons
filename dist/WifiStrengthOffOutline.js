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

var WifiStrengthOffOutlineIcon = function WifiStrengthOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3.27,1.44L2,2.72L4.05,4.77C2.75,5.37 1.5,6.11 0.38,7C4.2,11.8 8.14,16.67 12,21.5L15.91,16.63L19.23,19.95L20.5,18.68C14.87,13.04 3.27,1.44 3.27,1.44M12,3C10.6,3 9.21,3.17 7.86,3.5L9.56,5.19C10.37,5.07 11.18,5 12,5C15.07,5 18.09,5.86 20.71,7.45L16.76,12.38L18.18,13.8C20.08,11.43 22,9 23.65,7C20.32,4.41 16.22,3 12,3M5.57,6.29L14.5,15.21L12,18.3L3.27,7.44C4,7 4.78,6.61 5.57,6.29Z"
  }));
};

WifiStrengthOffOutlineIcon.displayName = 'WifiStrengthOffOutlineIcon';
WifiStrengthOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = WifiStrengthOffOutlineIcon;
exports["default"] = _default;