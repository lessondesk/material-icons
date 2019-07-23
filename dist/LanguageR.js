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

var LanguageRIcon = function LanguageRIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,4.29C6.5,4.29 2,7.29 2,11C2,14.28 5.56,17 10.24,17.58V19.71H13.65V17.59C14.5,17.5 15.29,17.34 16.04,17.11L17.42,19.71H21.28L18.96,15.8C20.83,14.58 22,12.87 22,11C22,7.29 17.5,4.29 12,4.29V4.29M13.53,6.91C17.73,6.91 20.83,8.31 20.83,11.5C20.83,13.21 19.91,14.41 18.41,15.15C18.32,15.1 18.24,15.05 18.19,15C17.83,14.84 17.23,14.66 17.23,14.66C17.23,14.66 20.21,14.44 20.21,11.47C20.21,8.5 17.09,8.45 17.09,8.45H10.24V15.61C7.69,14.87 5.93,13.3 5.93,11.5C5.93,8.96 9.33,6.91 13.53,6.91M13.68,10.89H15.75C15.75,10.89 16.7,10.84 16.7,11.83C16.7,12.8 15.75,12.8 15.75,12.8H13.68V10.89M13.65,15.3H14.57C14.75,15.3 14.84,15.35 15,15.5C15.13,15.6 15.27,15.79 15.39,15.96C14.84,16.03 14.26,16.06 13.65,16.06V15.3Z"
  }));
};

LanguageRIcon.displayName = 'LanguageRIcon';
LanguageRIcon.defaultProps = {
  size: 24
};
var _default = LanguageRIcon;
exports["default"] = _default;