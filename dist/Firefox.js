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

var FirefoxIcon = function FirefoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,11.7C21,11.3 20.9,10.7 20.8,10.3C20.5,8.6 19.6,7.1 18.5,5.9C18.3,5.6 17.9,5.3 17.5,5C16.4,4.1 15.1,3.5 13.6,3.2C10.6,2.7 7.6,3.7 5.6,5.8C5.6,5.8 5.6,5.7 5.6,5.7C5.5,5.5 5.5,5.5 5.4,5.5C5.4,5.5 5.4,5.5 5.4,5.5C5.3,5.3 5.3,5.2 5.2,5.1C5.2,5.1 5.2,5.1 5.2,5.1C5.2,4.9 5.1,4.7 5.1,4.5C4.8,4.6 4.8,4.9 4.7,5.1C4.7,5.1 4.7,5.1 4.7,5.1C4.5,5.3 4.3,5.6 4.3,5.9C4.3,5.9 4.3,5.9 4.3,5.9C4.2,6.1 4,7 4.2,7.1C4.2,7.1 4.2,7.1 4.3,7.1C4.3,7.2 4.3,7.3 4.3,7.4C4.1,7.6 4,7.7 4,7.8C3.7,8.4 3.4,8.9 3.3,9.5C3.3,9.7 3.3,9.8 3.3,9.9C3.3,9.9 3.3,9.9 3.3,9.9C3.3,9.9 3.3,9.8 3.3,9.8C3.1,10 3.1,10.3 3,10.5C3.1,10.5 3.1,10.4 3.2,10.4C2.7,13 3.4,15.7 5,17.7C7.4,20.6 11.5,21.8 15.1,20.5C18.6,19.2 21,15.8 21,12C21,11.9 21,11.8 21,11.7M13.5,4.1C15,4.4 16.4,5.1 17.5,6.1C17.6,6.2 17.7,6.4 17.7,6.4C17.4,6.1 16.7,5.6 16.3,5.8C16.4,6.1 17.6,7.6 17.7,7.7C17.7,7.7 18,9 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.3 17.4,11.9 17.4,12.3C17.4,12.4 16.5,14.2 16.6,14.2C16.3,14.9 16,14.9 15.9,15C15.8,15 15.2,15.2 14.5,15.4C13.9,15.5 13.2,15.7 12.7,15.6C12.4,15.6 12,15.6 11.7,15.4C11.6,15.3 10.8,14.9 10.6,14.8C10.3,14.7 10.1,14.5 9.9,14.3C10.2,14.3 10.8,14.3 11,14.3C11.6,14.2 14.2,13.3 14.1,12.9C14.1,12.6 13.6,12.4 13.4,12.2C13.1,12.1 11.9,12.3 11.4,12.5C11.4,12.5 9.5,12 9,11.6C9,11.5 8.9,10.9 8.9,10.8C8.8,10.7 9.2,10.4 9.2,10.4C9.2,10.4 10.2,9.4 10.2,9.3C10.4,9.3 10.6,9.1 10.7,9C10.6,9 10.8,8.9 11.1,8.7C11.1,8.7 11.1,8.7 11.1,8.7C11.4,8.5 11.6,8.5 11.6,8.2C11.6,8.2 12.1,7.3 11.5,7.4C11.5,7.4 10.6,7.3 10.3,7.3C10,7.5 9.9,7.4 9.6,7.3C9.6,7.3 9.4,7.1 9.4,7C9.5,6.8 10.2,5.3 10.5,5.2C10.3,4.8 9.3,5.1 9.1,5.4C9.1,5.4 8.3,6 7.9,6.1C7.9,6.1 7.9,6.1 7.9,6.1C7.9,6 7.4,5.9 6.9,5.9C8.7,4.4 11.1,3.7 13.5,4.1Z"
  }));
};

FirefoxIcon.displayName = 'FirefoxIcon';
FirefoxIcon.defaultProps = {
  size: 24
};
var _default = FirefoxIcon;
exports["default"] = _default;