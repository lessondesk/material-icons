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

var GoogleCardboardIcon = function GoogleCardboardIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.74,6H3.2C2.55,6 2,6.57 2,7.27V17.73C2,18.43 2.55,19 3.23,19H8C8.54,19 9,18.68 9.16,18.21L10.55,14.74C10.79,14.16 11.35,13.75 12,13.75C12.65,13.75 13.21,14.16 13.45,14.74L14.84,18.21C15.03,18.68 15.46,19 15.95,19H20.74C21.45,19 22,18.43 22,17.73V7.27C22,6.57 21.45,6 20.74,6M7.22,14.58C6,14.58 5,13.55 5,12.29C5,11 6,10 7.22,10C8.44,10 9.43,11 9.43,12.29C9.43,13.55 8.44,14.58 7.22,14.58M16.78,14.58C15.56,14.58 14.57,13.55 14.57,12.29C14.57,11.03 15.56,10 16.78,10C18,10 19,11.03 19,12.29C19,13.55 18,14.58 16.78,14.58Z"
  }));
};

GoogleCardboardIcon.displayName = 'GoogleCardboardIcon';
GoogleCardboardIcon.defaultProps = {
  size: 24
};
var _default = GoogleCardboardIcon;
exports["default"] = _default;