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

var MailRuIcon = function MailRuIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.45,11.91C15.34,9.7 13.7,8.37 11.72,8.37H11.64C9.35,8.37 8.09,10.17 8.09,12.21C8.09,14.5 9.62,15.95 11.63,15.95C13.88,15.95 15.35,14.3 15.46,12.36M11.65,6.39C13.18,6.39 14.62,7.07 15.67,8.13V8.13C15.67,7.62 16,7.24 16.5,7.24H16.61C17.35,7.24 17.5,7.94 17.5,8.16V16.06C17.46,16.58 18.04,16.84 18.37,16.5C19.64,15.21 21.15,9.81 17.58,6.69C14.25,3.77 9.78,4.25 7.4,5.89C4.88,7.63 3.26,11.5 4.83,15.11C6.54,19.06 11.44,20.24 14.35,19.06C15.83,18.47 16.5,20.46 15,21.11C12.66,22.1 6.23,22 3.22,16.79C1.19,13.27 1.29,7.08 6.68,3.87C10.81,1.42 16.24,2.1 19.5,5.5C22.95,9.1 22.75,15.8 19.4,18.41C17.89,19.59 15.64,18.44 15.66,16.71L15.64,16.15C14.59,17.2 13.18,17.81 11.65,17.81C8.63,17.81 6,15.15 6,12.13C6,9.08 8.63,6.39 11.65,6.39Z"
  }));
};

MailRuIcon.displayName = 'MailRuIcon';
MailRuIcon.defaultProps = {
  size: 24
};
var _default = MailRuIcon;
exports["default"] = _default;