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

var HelpNetworkIcon = function HelpNetworkIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,3C18.1,3 19,3.9 19,5V15C19,16.1 18.1,17 17,17H13V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H7C5.89,17 5,16.1 5,15V5C5,3.9 5.9,3 7,3H17M12.19,5C11.32,5 10.62,5.2 10.08,5.59C9.56,6 9.3,6.57 9.31,7.36L9.32,7.39H11.25C11.26,7.09 11.35,6.86 11.53,6.7C11.71,6.55 11.93,6.47 12.19,6.47C12.5,6.47 12.76,6.57 12.94,6.75C13.12,6.94 13.2,7.2 13.2,7.5C13.2,7.82 13.13,8.09 12.97,8.32C12.83,8.55 12.62,8.75 12.36,8.91C11.85,9.25 11.5,9.55 11.31,9.82C11.11,10.08 11,10.5 11,11H13C13,10.69 13.04,10.44 13.13,10.26C13.22,10.07 13.39,9.9 13.64,9.74C14.09,9.5 14.46,9.21 14.75,8.81C15.04,8.41 15.19,8 15.19,7.5C15.19,6.74 14.92,6.13 14.38,5.68C13.85,5.23 13.12,5 12.19,5M11,12V14H13V12H11Z"
  }));
};

HelpNetworkIcon.displayName = 'HelpNetworkIcon';
HelpNetworkIcon.defaultProps = {
  size: 24
};
var _default = HelpNetworkIcon;
exports["default"] = _default;