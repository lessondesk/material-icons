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

var OneUpIcon = function OneUpIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,19V19C9.4,19 9,18.6 9,18V17C9,16.5 9.4,16 10,16V16C10.5,16 11,16.4 11,17V18C11,18.6 10.6,19 10,19M15,18V17C15,16.5 14.6,16 14,16V16C13.5,16 13,16.4 13,17V18C13,18.5 13.4,19 14,19V19C14.6,19 15,18.6 15,18M22,12C22,14.6 20.4,16.9 18,18.4V20C18,21.1 17.1,22 16,22H8C6.9,22 6,21.1 6,20V18.4C3.6,16.9 2,14.6 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M7,10C7,8.9 6.4,7.9 5.5,7.4C4.5,8.7 4,10.3 4,12C4,12.3 4,12.7 4.1,13C5.7,12.9 7,11.6 7,10M9,9C9,10.7 10.3,12 12,12C13.7,12 15,10.7 15,9C15,7.3 13.7,6 12,6C10.3,6 9,7.3 9,9M16,20V15.5C14.8,15.2 13.4,15 12,15C10.6,15 9.2,15.2 8,15.5V20H16M19.9,13C20,12.7 20,12.3 20,12C20,10.3 19.5,8.7 18.5,7.4C17.6,7.9 17,8.9 17,10C17,11.6 18.3,12.9 19.9,13Z"
  }));
};

OneUpIcon.displayName = 'OneUpIcon';
OneUpIcon.defaultProps = {
  size: 24
};
var _default = OneUpIcon;
exports["default"] = _default;