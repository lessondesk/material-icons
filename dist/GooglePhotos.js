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

var GooglePhotosIcon = function GooglePhotosIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,13C10.55,13 11,13.18 11.41,13.57C11.8,13.96 12,14.44 12,15V22C12,22.17 11.91,22.27 11.72,22.27C11.66,22.27 11.58,22.22 11.5,22.13L7,17.67V13H10M12.5,1.88L17,6.33V11H14C13.45,11 13,10.82 12.59,10.43C12.2,10.04 12,9.56 12,9V2C12,1.83 12.09,1.73 12.28,1.73C12.34,1.73 12.42,1.78 12.5,1.88M22,12C22.17,12 22.27,12.09 22.27,12.28C22.27,12.34 22.22,12.42 22.13,12.5L17.67,17H13V14C13,13.45 13.18,13 13.57,12.59C13.96,12.2 14.44,12 15,12H22M6.33,7H11V10C11,10.55 10.82,11 10.43,11.41C10.04,11.8 9.56,12 9,12H2C1.83,12 1.73,11.91 1.73,11.72C1.73,11.66 1.78,11.58 1.88,11.5L6.33,7Z"
  }));
};

GooglePhotosIcon.displayName = 'GooglePhotosIcon';
GooglePhotosIcon.defaultProps = {
  size: 24
};
var _default = GooglePhotosIcon;
exports["default"] = _default;