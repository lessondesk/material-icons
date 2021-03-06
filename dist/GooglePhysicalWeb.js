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

var GooglePhysicalWebIcon = function GooglePhysicalWebIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1.5C16.97,1.5 21,5.53 21,10.5C21,13.11 19.89,15.47 18.11,17.11L17.05,16.05C18.55,14.68 19.5,12.7 19.5,10.5C19.5,6.36 16.14,3 12,3C7.86,3 4.5,6.36 4.5,10.5C4.5,12.7 5.45,14.68 6.95,16.05L5.89,17.11C4.11,15.47 3,13.11 3,10.5C3,5.53 7.03,1.5 12,1.5M12,4.5C15.31,4.5 18,7.19 18,10.5C18,12.28 17.22,13.89 16,15L14.92,13.92C15.89,13.1 16.5,11.87 16.5,10.5C16.5,8 14.5,6 12,6C9.5,6 7.5,8 7.5,10.5C7.5,11.87 8.11,13.1 9.08,13.92L8,15C6.78,13.89 6,12.28 6,10.5C6,7.19 8.69,4.5 12,4.5M8.11,17.65L11.29,14.46C11.68,14.07 12.32,14.07 12.71,14.46L15.89,17.65C16.28,18.04 16.28,18.67 15.89,19.06L12.71,22.24C12.32,22.63 11.68,22.63 11.29,22.24L8.11,19.06C7.72,18.67 7.72,18.04 8.11,17.65Z"
  }));
};

GooglePhysicalWebIcon.displayName = 'GooglePhysicalWebIcon';
GooglePhysicalWebIcon.defaultProps = {
  size: 24
};
var _default = GooglePhysicalWebIcon;
exports["default"] = _default;