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

var VlcIcon = function VlcIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1C11.58,1 11.19,1.23 11,1.75L9.88,4.88C10.36,5.4 11.28,5.5 12,5.5C12.72,5.5 13.64,5.4 14.13,4.88L13,1.75C12.82,1.25 12.42,1 12,1M8.44,8.91L7,12.91C8.07,14.27 10.26,14.5 12,14.5C13.74,14.5 15.93,14.27 17,12.91L15.56,8.91C14.76,9.83 13.24,10 12,10C10.76,10 9.24,9.83 8.44,8.91M5.44,15C4.62,15 3.76,15.65 3.53,16.44L2.06,21.56C1.84,22.35 2.3,23 3.13,23H20.88C21.7,23 22.16,22.35 21.94,21.56L20.47,16.44C20.24,15.65 19.38,15 18.56,15H17.75L18.09,15.97C18.21,16.29 18.29,16.69 18.09,16.97C16.84,18.7 14.14,19 12,19C9.86,19 7.16,18.7 5.91,16.97C5.71,16.69 5.79,16.29 5.91,15.97L6.25,15H5.44Z"
  }));
};

VlcIcon.displayName = 'VlcIcon';
VlcIcon.defaultProps = {
  size: 24
};
var _default = VlcIcon;
exports["default"] = _default;