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

var GraphqlIcon = function GraphqlIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,5.37L11.56,5.31L6,14.9C6.24,15.11 6.4,15.38 6.47,15.68H17.53C17.6,15.38 17.76,15.11 18,14.9L12.44,5.31L12,5.37M6.6,16.53L10.88,19.06C11.17,18.79 11.57,18.63 12,18.63C12.43,18.63 12.83,18.79 13.12,19.06L17.4,16.53H6.6M12,22C11.07,22 10.32,21.25 10.32,20.32L10.41,19.76L6.11,17.21C5.8,17.57 5.35,17.79 4.84,17.79C3.91,17.79 3.16,17.04 3.16,16.11C3.16,15.32 3.69,14.66 4.42,14.47V9.36C3.59,9.25 2.95,8.54 2.95,7.68C2.95,6.75 3.7,6 4.63,6C5.18,6 5.66,6.26 5.97,6.66L10.38,4.13L10.32,3.68C10.32,2.75 11.07,2 12,2C12.93,2 13.68,2.75 13.68,3.68L13.62,4.13L18.03,6.66C18.34,6.26 18.82,6 19.37,6C20.3,6 21.05,6.75 21.05,7.68C21.05,8.54 20.41,9.25 19.58,9.36V14.47C20.31,14.66 20.84,15.32 20.84,16.11C20.84,17.04 20.09,17.79 19.16,17.79C18.65,17.79 18.2,17.57 17.89,17.21L13.59,19.76L13.68,20.32C13.68,21.25 12.93,22 12,22M10.8,4.86L6.3,7.44L6.32,7.68C6.32,8.39 5.88,9 5.26,9.25L5.29,14.5L10.8,4.86M13.2,4.86L18.71,14.5L18.74,9.25C18.12,9 17.68,8.39 17.68,7.68L17.7,7.44L13.2,4.86Z"
  }));
};

GraphqlIcon.displayName = 'GraphqlIcon';
GraphqlIcon.defaultProps = {
  size: 24
};
var _default = GraphqlIcon;
exports["default"] = _default;