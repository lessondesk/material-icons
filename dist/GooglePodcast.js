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

var GooglePodcastIcon = function GooglePodcastIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.68,7.22V8.62C17.68,9.3 17.13,9.86 16.43,9.86C15.74,9.86 15.18,9.3 15.18,8.62V7.22C15.18,6.53 15.74,5.97 16.43,5.97C17.13,5.97 17.68,6.53 17.68,7.22M13.25,8.36V15.63C13.25,16.32 12.69,16.88 12,16.88C11.31,16.88 10.75,16.32 10.75,15.63V8.36C10.75,7.68 11.31,7.11 12,7.11C12.69,7.11 13.25,7.68 13.25,8.36M22,11.3V12.7C22,13.38 21.44,13.94 20.75,13.94C20.06,13.94 19.5,13.38 19.5,12.7V11.3C19.5,10.61 20.06,10.06 20.75,10.06C21.44,10.06 22,10.61 22,11.3M4.5,11.3V12.7C4.5,13.38 3.94,13.94 3.25,13.94C2.55,13.94 2,13.38 2,12.7V11.3C2,10.61 2.55,10.06 3.25,10.06C3.94,10.06 4.5,10.61 4.5,11.3M8.82,15.38V16.77C8.82,17.45 8.26,18 7.57,18C6.88,18 6.32,17.45 6.32,16.77V15.38C6.32,14.68 6.88,14.13 7.57,14.13C8.26,14.13 8.82,14.69 8.82,15.38M13.25,19.36V20.75C13.25,21.44 12.69,22 12,22C11.31,22 10.75,21.44 10.75,20.75V19.36C10.75,18.67 11.31,18.11 12,18.11C12.69,18.11 13.25,18.67 13.25,19.36M13.25,3.25V4.64C13.25,5.33 12.69,5.89 12,5.89C11.31,5.89 10.75,5.33 10.75,4.64V3.25C10.75,2.55 11.31,2 12,2C12.69,2 13.25,2.56 13.25,3.25M17.68,12.34V16.77C17.68,17.46 17.13,18 16.43,18C15.74,18 15.18,17.46 15.18,16.77V12.34C15.18,11.64 15.74,11.09 16.43,11.09C17.13,11.09 17.68,11.64 17.68,12.34M8.82,7.22V11.65C8.82,12.35 8.26,12.9 7.57,12.9C6.88,12.9 6.32,12.34 6.32,11.65V7.22C6.32,6.53 6.88,5.97 7.57,5.97C8.26,5.97 8.82,6.53 8.82,7.22Z"
  }));
};

GooglePodcastIcon.displayName = 'GooglePodcastIcon';
GooglePodcastIcon.defaultProps = {
  size: 24
};
var _default = GooglePodcastIcon;
exports["default"] = _default;