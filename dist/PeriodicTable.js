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

var PeriodicTableIcon = function PeriodicTableIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,4V6H4V4H2M20,4V6H22V4H20M2,7V9H4V7H2M5,7V9H7V7H5M14,7V9H16V7H14M17,7V9H19V7H17M20,7V9H22V7H20M2,10V12H4V10H2M5,10V12H7V10H5M8,10V12H10V10H8M11,10V12H13V10H11M14,10V12H16V10H14M17,10V12H19V10H17M20,10V12H22V10H20M2,13V15H4V13H2M5,13V15H7V13H5M8,13V15H10V13H8M11,13V15H13V13H11M14,13V15H16V13H14M17,13V15H19V13H17M20,13V15H22V13H20M5,17V19H7V17H5M8,17V19H10V17H8M11,17V19H13V17H11M14,17V19H16V17H14M17,17V19H19V17H17Z"
  }));
};

PeriodicTableIcon.displayName = 'PeriodicTableIcon';
PeriodicTableIcon.defaultProps = {
  size: 24
};
var _default = PeriodicTableIcon;
exports["default"] = _default;