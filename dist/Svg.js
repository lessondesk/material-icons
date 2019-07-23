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

var SvgIcon = function SvgIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.13,10.71H8.87L6.22,8.06C5.21,8.06 4.39,7.24 4.39,6.22C4.39,5.21 5.21,4.39 6.22,4.39C7.24,4.39 8.06,5.21 8.06,6.22L10.71,8.87V5.13C10,4.41 10,3.25 10.71,2.54C11.42,1.82 12.58,1.82 13.29,2.54C14,3.25 14,4.41 13.29,5.13V8.87L15.95,6.22C15.95,5.21 16.76,4.39 17.78,4.39C18.79,4.39 19.61,5.21 19.61,6.22C19.61,7.24 18.79,8.06 17.78,8.06L15.13,10.71H18.87C19.59,10 20.75,10 21.46,10.71C22.18,11.42 22.18,12.58 21.46,13.29C20.75,14 19.59,14 18.87,13.29H15.13L17.78,15.95C18.79,15.95 19.61,16.76 19.61,17.78C19.61,18.79 18.79,19.61 17.78,19.61C16.76,19.61 15.95,18.79 15.95,17.78L13.29,15.13V18.87C14,19.59 14,20.75 13.29,21.46C12.58,22.18 11.42,22.18 10.71,21.46C10,20.75 10,19.59 10.71,18.87V15.13L8.06,17.78C8.06,18.79 7.24,19.61 6.22,19.61C5.21,19.61 4.39,18.79 4.39,17.78C4.39,16.76 5.21,15.95 6.22,15.95L8.87,13.29H5.13C4.41,14 3.25,14 2.54,13.29C1.82,12.58 1.82,11.42 2.54,10.71C3.25,10 4.41,10 5.13,10.71Z"
  }));
};

SvgIcon.displayName = 'SvgIcon';
SvgIcon.defaultProps = {
  size: 24
};
var _default = SvgIcon;
exports["default"] = _default;