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

var HandOkayIcon = function HandOkayIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.3,19.26L18.96,13.61L21.08,15.73L15.42,21.38L13.3,19.26M16.5,11.13L13.4,8.05C13.27,7.92 13.13,7.83 13,7.76L11.88,3.47C11.74,2.93 11.2,2.61 10.66,2.75C10.13,2.88 9.81,3.43 9.94,3.96L11,8.03V8.03L8.67,3.19C8.44,2.69 7.84,2.5 7.34,2.71C6.84,2.95 6.63,3.55 6.87,4.05L8.56,7.59L5.19,4.25C4.8,3.86 4.16,3.86 3.77,4.25C3.38,4.65 3.39,5.28 3.78,5.67L7.5,9.37L6.8,9.64L5.72,10.07L3.81,11.39C3.81,11.39 3,12.44 2.93,12.89C2.85,13.34 3.72,15.6 3.72,15.6H3.73C3.89,15.94 4.23,16.18 4.63,16.18C5.18,16.18 5.63,15.73 5.63,15.18C5.63,15.08 5.6,15 5.57,14.91L5.59,14.9L5,13.17L6.23,12.19C6.7,12.21 7.71,12.29 8.2,12.32C10.93,14.77 8.35,15.73 8.35,15.73L4.89,16.79L4.72,16.93C4.5,17.13 4.41,17.4 4.42,17.68L4.44,18.75L10.87,18.25C11.25,18.26 11.61,18.12 11.89,17.85L16.5,13.25C17.03,12.71 17.05,11.7 16.5,11.13Z"
  }));
};

HandOkayIcon.displayName = 'HandOkayIcon';
HandOkayIcon.defaultProps = {
  size: 24
};
var _default = HandOkayIcon;
exports["default"] = _default;