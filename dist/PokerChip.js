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

var PokerChipIcon = function PokerChipIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M23,12C23,18.08 18.08,23 12,23C5.92,23 1,18.08 1,12C1,5.92 5.92,1 12,1C18.08,1 23,5.92 23,12M13,4.06C15.13,4.33 17.07,5.45 18.37,7.16L20.11,6.16C18.45,3.82 15.86,2.3 13,2V4.06M3.89,6.16L5.63,7.16C6.93,5.45 8.87,4.33 11,4.06V2C8.14,2.3 5.55,3.82 3.89,6.16M2.89,16.1L4.62,15.1C3.79,13.12 3.79,10.88 4.62,8.9L2.89,7.9C1.7,10.5 1.7,13.5 2.89,16.1M11,19.94C8.87,19.67 6.93,18.55 5.63,16.84L3.89,17.84C5.55,20.18 8.14,21.7 11,22V19.94M20.11,17.84L18.37,16.84C17.07,18.55 15.13,19.67 13,19.94V21.94C15.85,21.65 18.44,20.16 20.11,17.84M21.11,16.1C22.3,13.5 22.3,10.5 21.11,7.9L19.38,8.9C20.21,10.88 20.21,13.12 19.38,15.1L21.11,16.1M15,12L12,7L9,12L12,17L15,12Z"
  }));
};

PokerChipIcon.displayName = 'PokerChipIcon';
PokerChipIcon.defaultProps = {
  size: 24
};
var _default = PokerChipIcon;
exports["default"] = _default;