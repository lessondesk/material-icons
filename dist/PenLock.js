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

var PenLockIcon = function PenLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.7,7C21.4,7.4 21,7.7 21,8C21,8.3 21.3,8.6 21.6,9C22.1,9.5 22.6,9.9 22.5,10.4C22.5,10.9 22,11.4 21.5,11.9L17.4,16L16,14.7L20.2,10.5L19.2,9.5L17.8,10.9L14,7.1L18,3.3C18.4,2.9 19,2.9 19.4,3.3L21.7,5.6C22.1,6 22.1,6.7 21.7,7M4,17.2L13.6,7.6L17.3,11.4L7.8,21H4V17.2M8,5V4.5C8,3.1 6.9,2 5.5,2C4.1,2 3,3.1 3,4.5V5C2.4,5 2,5.4 2,6V10C2,10.6 2.4,11 3,11H8C8.6,11 9,10.6 9,10V6C9,5.4 8.6,5 8,5M7,5H4V4.5C4,3.7 4.7,3 5.5,3C6.3,3 7,3.7 7,4.5V5Z"
  }));
};

PenLockIcon.displayName = 'PenLockIcon';
PenLockIcon.defaultProps = {
  size: 24
};
var _default = PenLockIcon;
exports["default"] = _default;