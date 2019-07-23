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

var JellyfishOutlineIcon = function JellyfishOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,4C15.8,4 18.5,6.8 18.5,10.8C14.31,12.39 9.69,12.39 5.5,10.8C5.5,6.8 8.2,4 12,4M12,2C7.3,2 3.5,5.5 3.5,10.9C3.56,11.7 4.06,12.4 4.8,12.7L6.5,13.2V15.5C6.5,15.78 6.28,16 6,16C5.72,16 5.5,15.78 5.5,15.5C5.57,14.92 5.08,14.43 4.5,14.5C3.92,14.43 3.43,14.92 3.5,15.5C3.44,16.86 4.54,18 5.9,18H6C7.41,18.06 8.56,16.91 8.5,15.5V13.7H9.5V19.4C9.5,20.07 8.5,20.07 8.5,19.4C8.57,18.82 8.08,18.33 7.5,18.4C6.92,18.33 6.43,18.82 6.5,19.4C6.39,20.8 7.5,22 8.9,22H9C10.41,22.06 11.56,20.91 11.5,19.5V14H12.5V19.5C12.44,20.91 13.59,22.06 15,22H15.1C16.47,22 17.56,20.86 17.5,19.5C17.5,18.17 15.5,18.17 15.5,19.5C15.5,20.17 14.5,20.17 14.5,19.5V13.8H15.5V15.6C15.5,16.96 16.63,18.06 18,18H18.1C19.47,18 20.56,16.86 20.5,15.5C20.5,14.17 18.5,14.17 18.5,15.5C18.5,16.17 17.5,16.17 17.5,15.5V13.2L19.2,12.7C19.92,12.36 20.41,11.68 20.5,10.9C20.5,5.5 16.7,2 12,2M12,6.2C10.53,6.6 9.24,7.53 8.4,8.8C8,9.33 7.2,8.73 7.6,8.2C8.6,6.73 10.09,5.67 11.8,5.2C12.08,5.14 12.35,5.32 12.4,5.6C12.5,5.9 12.3,6.1 12,6.2Z"
  }));
};

JellyfishOutlineIcon.displayName = 'JellyfishOutlineIcon';
JellyfishOutlineIcon.defaultProps = {
  size: 24
};
var _default = JellyfishOutlineIcon;
exports["default"] = _default;