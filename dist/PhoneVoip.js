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

var PhoneVoipIcon = function PhoneVoipIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,17V19H14C14.55,19 15,19.45 15,20H22V22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H13M23.7,7.67C23.88,7.85 24,8.09 24,8.37C24,8.65 23.89,8.9 23.71,9.08L21.23,11.56C21.05,11.74 20.8,11.85 20.5,11.85C20.25,11.85 20,11.75 19.82,11.57C19,10.84 18.13,10.21 17.15,9.72C16.82,9.56 16.59,9.21 16.59,8.82V5.72C15.14,5.25 13.59,5 12,5C10.4,5 8.85,5.25 7.4,5.73V8.83C7.4,9.23 7.17,9.57 6.84,9.73C5.87,10.22 4.97,10.84 4.18,11.58C4,11.75 3.75,11.86 3.5,11.86C3.2,11.86 2.95,11.75 2.77,11.57L0.29,9.09C0.11,8.91 0,8.66 0,8.38C0,8.1 0.11,7.85 0.29,7.67C3.34,4.78 7.46,3 12,3C16.53,3 20.65,4.78 23.7,7.67M11,10V15H10V10H11M12,10H15V13H13V15H12V10M14,12V11H13V12H14Z"
  }));
};

PhoneVoipIcon.displayName = 'PhoneVoipIcon';
PhoneVoipIcon.defaultProps = {
  size: 24
};
var _default = PhoneVoipIcon;
exports["default"] = _default;