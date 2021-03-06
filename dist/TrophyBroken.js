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

var TrophyBrokenIcon = function TrophyBrokenIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,2V11C2,12 3,13 4,13H4.5L6.2,13C6.6,14.8 7.6,16.3 10,16.8V19.2C8.6,19.6 8,20.5 8,21.6V22H13.2L10.2,15L14.2,10L10.7,4H8V3.7C7.8,2.8 6.8,2 6,2H4.5L3.8,2H2M13.2,22H16V21.7C16,21.1 15.8,20.5 15.4,20.1C15.1,19.8 14.6,19.5 14,19.3V16.9C16.4,16.4 17.5,14.8 17.8,13.1H20C21,13.1 22,12.1 22,11.1V5.7L22,2H20.2L19.5,2H18C17.2,2 16.3,2.7 16.1,3.5C16,3.7 16,3.8 16,4H13.9L16.7,10L12.2,15L13.2,22M4,4H6V4.4L6,6V11H4V6.4L4,4M18,4H19.7L20,4V4.1L20,11H18V6L18,4Z"
  }));
};

TrophyBrokenIcon.displayName = 'TrophyBrokenIcon';
TrophyBrokenIcon.defaultProps = {
  size: 24
};
var _default = TrophyBrokenIcon;
exports["default"] = _default;