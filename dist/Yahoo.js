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

var YahooIcon = function YahooIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.03,3.36C8.5,3.36 5.15,2.9 2,2C2,9.07 2,20.23 2,22C5.15,21.1 8.5,20.64 12.03,20.64C15.5,20.64 18.85,21.09 22,22C22,15.2 22,9.31 22,2C18.85,2.91 15.5,3.36 12.03,3.36M12.84,13.04L12.97,18.92L12,18.79C12,18.79 12,18.79 12,18.79C11.91,18.79 11.19,18.89 11,18.93L11.16,13.04C10.88,12.54 6.67,5.44 6.44,5.07L7.5,5.25C7.83,5.25 8.12,5.21 8.5,5.17C9.03,6.15 11.88,10.83 12,11.03C12,11.03 14.97,6.15 15.61,5.13C15.88,5.21 16.17,5.25 16.5,5.25C16.78,5.25 17.07,5.21 17.57,5.07L12.84,13.04Z"
  }));
};

YahooIcon.displayName = 'YahooIcon';
YahooIcon.defaultProps = {
  size: 24
};
var _default = YahooIcon;
exports["default"] = _default;