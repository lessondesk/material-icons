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

var RedditIcon = function RedditIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,12.14C22,10.92 21,9.96 19.81,9.96C19.22,9.96 18.68,10.19 18.29,10.57C16.79,9.5 14.72,8.79 12.43,8.7L13.43,4L16.7,4.71C16.73,5.53 17.41,6.19 18.25,6.19C19.11,6.19 19.81,5.5 19.81,4.63C19.81,3.77 19.11,3.08 18.25,3.08C17.65,3.08 17.11,3.43 16.86,3.95L13.22,3.18C13.11,3.16 13,3.18 12.93,3.24C12.84,3.29 12.79,3.38 12.77,3.5L11.66,8.72C9.33,8.79 7.23,9.5 5.71,10.58C5.32,10.21 4.78,10 4.19,10C2.97,10 2,10.96 2,12.16C2,13.06 2.54,13.81 3.29,14.15C3.25,14.37 3.24,14.58 3.24,14.81C3.24,18.18 7.16,20.93 12,20.93C16.84,20.93 20.76,18.2 20.76,14.81C20.76,14.6 20.75,14.37 20.71,14.15C21.46,13.81 22,13.04 22,12.14M7,13.7C7,12.84 7.68,12.14 8.54,12.14C9.4,12.14 10.1,12.84 10.1,13.7C10.1,14.56 9.4,15.26 8.54,15.26C7.68,15.28 7,14.56 7,13.7M15.71,17.84C14.63,18.92 12.59,19 12,19C11.39,19 9.35,18.9 8.29,17.84C8.13,17.68 8.13,17.43 8.29,17.27C8.45,17.11 8.7,17.11 8.86,17.27C9.54,17.95 11,18.18 12,18.18C13,18.18 14.47,17.95 15.14,17.27C15.3,17.11 15.55,17.11 15.71,17.27C15.85,17.43 15.85,17.68 15.71,17.84M15.42,15.28C14.56,15.28 13.86,14.58 13.86,13.72C13.86,12.86 14.56,12.16 15.42,12.16C16.28,12.16 17,12.86 17,13.72C17,14.56 16.28,15.28 15.42,15.28Z"
  }));
};

RedditIcon.displayName = 'RedditIcon';
RedditIcon.defaultProps = {
  size: 24
};
var _default = RedditIcon;
exports["default"] = _default;