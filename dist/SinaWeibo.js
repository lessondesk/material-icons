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

var SinaWeiboIcon = function SinaWeiboIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.82,13.87C10.89,13.87 11.77,14.74 11.77,15.82C11.77,16.9 10.9,17.77 9.82,17.77C8.74,17.77 7.87,16.89 7.87,15.82C7.87,14.74 8.74,13.87 9.82,13.87M14.5,3.34L15.18,3.31C18.94,3.31 22,6.37 22,10.13L21.95,10.95L20.76,10.58L20.78,10.13C20.78,7.04 18.27,4.53 15.18,4.53L14.83,4.54L14.5,3.34M15.32,6.23C17.38,6.3 19.05,8 19.08,10.06L17.84,9.68C17.65,8.56 16.78,7.68 15.67,7.5L15.32,6.23M2,15.41C1.97,14.8 2.07,12.64 4.95,9.97C8.35,6.81 9.82,7.05 9.82,7.05C9.82,7.05 13,6.75 11.06,10.46H11.13C11.6,9.96 12.62,9.21 14.69,9C16.77,8.79 16.77,10.5 16.5,11.7C18.38,12.64 19.56,14.03 19.56,15.58C19.56,18.4 15.63,20.69 10.78,20.69H10.65L10.5,20.69C7,20.69 4,19.42 2.71,17.59C2.25,16.97 2,16.29 2,15.58V15.41M9.82,11.92C6.59,11.92 3.97,13.67 3.97,15.82C3.97,17.97 6.59,19.72 9.82,19.72C13.05,19.72 15.67,17.97 15.67,15.82C15.67,13.67 13.05,11.92 9.82,11.92Z"
  }));
};

SinaWeiboIcon.displayName = 'SinaWeiboIcon';
SinaWeiboIcon.defaultProps = {
  size: 24
};
var _default = SinaWeiboIcon;
exports["default"] = _default;