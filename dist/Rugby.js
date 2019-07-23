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

var RugbyIcon = function RugbyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.22,16.22C18.25,14.19 19.33,11.5 19.45,8.2C18.36,10.61 16.81,12.81 14.81,14.81C12.81,16.81 10.61,18.36 8.2,19.45C11.5,19.36 14.16,18.28 16.22,16.22M7.78,7.78C5.75,9.81 4.67,12.5 4.55,15.8C5,14.8 5.7,13.65 6.61,12.35C7.5,11.05 8.38,10 9.19,9.19C11.19,7.19 13.39,5.64 15.8,4.55C12.5,4.64 9.84,5.72 7.78,7.78M20.5,3.5C21,4.05 21.34,5.11 21.47,6.7C21.59,8.3 21.35,10.16 20.74,12.3C20.13,14.45 19.11,16.23 17.67,17.67C16.36,19 14.8,19.95 13,20.55C11.21,21.16 9.44,21.47 7.69,21.47C5.56,21.47 4.17,21.14 3.5,20.5C3,19.95 2.66,18.89 2.53,17.3C2.41,15.7 2.65,13.84 3.26,11.7C3.87,9.55 4.89,7.77 6.33,6.33C7.64,5 9.2,4.05 11,3.45C12.79,2.84 14.56,2.53 16.31,2.53C18.44,2.53 19.83,2.86 20.5,3.5Z"
  }));
};

RugbyIcon.displayName = 'RugbyIcon';
RugbyIcon.defaultProps = {
  size: 24
};
var _default = RugbyIcon;
exports["default"] = _default;