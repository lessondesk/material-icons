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

var WiperWashIcon = function WiperWashIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,6C13,5.7 13.1,4.6 13.8,3.8L12,2.4L10.2,3.9C10.9,4.6 11,5.7 11,6C4.7,6.4 2,11 2,11L9,18C9,18 9.7,16.7 11,16.2V18.3C10.4,18.6 10,19.3 10,20C10,21.1 10.9,22 12,22C13.1,22 14,21.1 14,20C14,19.3 13.6,18.6 13,18.3V16.2C14.3,16.7 15,18 15,18L22,11C22,11 19.3,6.5 13,6M11,14.1C10.2,14.3 9.5,14.6 8.9,15.1L4.7,10.9C5.8,9.8 7.8,8.3 11,8.1V14.1M15.1,15.1C14.5,14.7 13.8,14.3 13,14.1V8.1C16.2,8.4 18.2,9.8 19.3,10.9L15.1,15.1M18,1.3L17.3,3.2C16.6,2.9 15.5,2.9 14.7,3.2L14,1.3C15.2,0.9 16.8,0.9 18,1.3M21,6H19C19,6 19,4.7 18.2,3.9L19.7,2.6C21,4 21,5.9 21,6M4.2,2.6L5.7,3.9C5,4.7 5,6 5,6H3C3,5.9 3,4 4.2,2.6M10,1.3L9.3,3.2C8.6,2.9 7.5,2.9 6.7,3.2L6,1.3C7.2,0.9 8.8,0.9 10,1.3Z"
  }));
};

WiperWashIcon.displayName = 'WiperWashIcon';
WiperWashIcon.defaultProps = {
  size: 24
};
var _default = WiperWashIcon;
exports["default"] = _default;