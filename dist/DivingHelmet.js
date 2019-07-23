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

var DivingHelmetIcon = function DivingHelmetIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,12C16,14.21 14.21,16 12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12M19.45,7.89L18.07,8.58L18.32,9H20V15H18.33C17.84,16.03 17.11,16.92 16.21,17.6C17.85,18.11 19.1,18.91 19.67,19.86C18.69,21.1 15.62,22 12,22C8.38,22 5.31,21.1 4.33,19.86C4.9,18.91 6.15,18.11 7.79,17.6C6.89,16.92 6.16,16.03 5.67,15H4V9H5.68C6.37,7.54 7.54,6.37 9,5.68V4H15V5.68C15.68,6 16.29,6.46 16.82,7L18.55,6.14C19.93,5.42 20,4.1 20,2H22C22,4.06 22,6.62 19.45,7.89M17,12C17,9.24 14.76,7 12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12Z"
  }));
};

DivingHelmetIcon.displayName = 'DivingHelmetIcon';
DivingHelmetIcon.defaultProps = {
  size: 24
};
var _default = DivingHelmetIcon;
exports["default"] = _default;