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

var IncognitoIcon = function IncognitoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C9.31,3 7.41,4.22 7.41,4.22L6,9H18L16.59,4.22C16.59,4.22 14.69,3 12,3M12,11C9.27,11 5.39,11.54 5.13,11.59C4.09,11.87 3.25,12.15 2.59,12.41C1.58,12.75 1,13 1,13H23C23,13 22.42,12.75 21.41,12.41C20.75,12.15 19.89,11.87 18.84,11.59C18.84,11.59 14.82,11 12,11M7.5,14C5.57,14 4,15.57 4,17.5C4,19.43 5.57,21 7.5,21C9.43,21 11,19.43 11,17.5C11,17.34 11,17.18 10.97,17.03C11.29,16.96 11.63,16.9 12,16.91C12.37,16.91 12.71,16.96 13.03,17.03C13,17.18 13,17.34 13,17.5C13,19.43 14.57,21 16.5,21C18.43,21 20,19.43 20,17.5C20,15.57 18.43,14 16.5,14C15.03,14 13.77,14.9 13.25,16.19C12.93,16.09 12.55,16 12,16C11.45,16 11.07,16.09 10.75,16.19C10.23,14.9 8.97,14 7.5,14M7.5,15C8.88,15 10,16.12 10,17.5C10,18.88 8.88,20 7.5,20C6.12,20 5,18.88 5,17.5C5,16.12 6.12,15 7.5,15M16.5,15C17.88,15 19,16.12 19,17.5C19,18.88 17.88,20 16.5,20C15.12,20 14,18.88 14,17.5C14,16.12 15.12,15 16.5,15Z"
  }));
};

IncognitoIcon.displayName = 'IncognitoIcon';
IncognitoIcon.defaultProps = {
  size: 24
};
var _default = IncognitoIcon;
exports["default"] = _default;