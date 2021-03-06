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

var ShowerHeadIcon = function ShowerHeadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,20C20.55,20 21,20.45 21,21C21,21.55 20.55,22 20,22C19.45,22 19,21.55 19,21C19,20.45 19.45,20 20,20M16,20C16.55,20 17,20.45 17,21C17,21.55 16.55,22 16,22C15.45,22 15,21.55 15,21C15,20.45 15.45,20 16,20M12,20C12.55,20 13,20.45 13,21C13,21.55 12.55,22 12,22C11.45,22 11,21.55 11,21C11,20.45 11.45,20 12,20M8,20C8.55,20 9,20.45 9,21C9,21.55 8.55,22 8,22C7.45,22 7,21.55 7,21C7,20.45 7.45,20 8,20M4,20C4.55,20 5,20.45 5,21C5,21.55 4.55,22 4,22C3.45,22 3,21.55 3,21C3,20.45 3.45,20 4,20M6,17C6.55,17 7,17.45 7,18C7,18.55 6.55,19 6,19H6C5.45,19 5,18.55 5,18C5,17.45 5.45,17 6,17H6M10,17C10.55,17 11,17.45 11,18C11,18.55 10.55,19 10,19C9.45,19 9,18.55 9,18C9,17.45 9.45,17 10,17M14,17C14.55,17 15,17.45 15,18C15,18.55 14.55,19 14,19C13.45,19 13,18.55 13,18C13,17.45 13.45,17 14,17M18,17C18.55,17 19,17.45 19,18C19,18.55 18.55,19 18,19C17.45,19 17,18.55 17,18C17,17.45 17.45,17 18,17M8,14C8.55,14 9,14.45 9,15C9,15.55 8.55,16 8,16C7.45,16 7,15.55 7,15C7,14.45 7.45,14 8,14M12,14C12.55,14 13,14.45 13,15C13,15.55 12.55,16 12,16C11.45,16 11,15.55 11,15C11,14.45 11.45,14 12,14M16,14C16.55,14 17,14.45 17,15C17,15.55 16.55,16 16,16C15.45,16 15,15.55 15,15C15,14.45 15.45,14 16,14M19,12H5V10H19V12M17.92,9H6.08C6.5,6.5 8.5,4.5 11,4.08V2H13V4.08C15.5,4.5 17.5,6.5 17.92,9Z"
  }));
};

ShowerHeadIcon.displayName = 'ShowerHeadIcon';
ShowerHeadIcon.defaultProps = {
  size: 24
};
var _default = ShowerHeadIcon;
exports["default"] = _default;