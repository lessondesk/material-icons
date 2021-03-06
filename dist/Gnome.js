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

var GnomeIcon = function GnomeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.42,2C14.26,2 13.5,7.93 15.82,7.93C18.16,7.93 22.58,2 18.42,2M12,2.73C11.92,2.73 11.85,2.73 11.78,2.74C9.44,3.04 10.26,7.12 11.5,7.19C12.72,7.27 14.04,2.73 12,2.73M7.93,4.34C7.81,4.34 7.67,4.37 7.53,4.43C5.65,5.21 7.24,8.41 8.3,8.2C9.27,8 9.39,4.3 7.93,4.34M4.93,6.85C4.77,6.84 4.59,6.9 4.41,7.03C2.9,8.07 4.91,10.58 5.8,10.19C6.57,9.85 6.08,6.89 4.93,6.85M13.29,8.77C10.1,8.8 6.03,10.42 5.32,13.59C4.53,17.11 8.56,22 12.76,22C14.83,22 17.21,20.13 17.66,17.77C18,15.97 13.65,16.69 13.81,17.88C14,19.31 12.76,20 11.55,19.1C7.69,16.16 17.93,14.7 17.25,10.69C17.03,9.39 15.34,8.76 13.29,8.77Z"
  }));
};

GnomeIcon.displayName = 'GnomeIcon';
GnomeIcon.defaultProps = {
  size: 24
};
var _default = GnomeIcon;
exports["default"] = _default;