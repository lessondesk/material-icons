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

var ImageFilterVintageIcon = function ImageFilterVintageIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M18.7,12.4C18.42,12.24 18.13,12.11 17.84,12C18.13,11.89 18.42,11.76 18.7,11.6C20.62,10.5 21.69,8.5 21.7,6.41C19.91,5.38 17.63,5.3 15.7,6.41C15.42,6.57 15.16,6.76 14.92,6.95C14.97,6.64 15,6.32 15,6C15,3.78 13.79,1.85 12,0.81C10.21,1.85 9,3.78 9,6C9,6.32 9.03,6.64 9.08,6.95C8.84,6.75 8.58,6.56 8.3,6.4C6.38,5.29 4.1,5.37 2.3,6.4C2.3,8.47 3.37,10.5 5.3,11.59C5.58,11.75 5.87,11.88 6.16,12C5.87,12.1 5.58,12.23 5.3,12.39C3.38,13.5 2.31,15.5 2.3,17.58C4.09,18.61 6.37,18.69 8.3,17.58C8.58,17.42 8.84,17.23 9.08,17.04C9.03,17.36 9,17.68 9,18C9,20.22 10.21,22.15 12,23.19C13.79,22.15 15,20.22 15,18C15,17.68 14.97,17.36 14.92,17.05C15.16,17.25 15.42,17.43 15.7,17.59C17.62,18.7 19.9,18.62 21.7,17.59C21.69,15.5 20.62,13.5 18.7,12.4Z"
  }));
};

ImageFilterVintageIcon.displayName = 'ImageFilterVintageIcon';
ImageFilterVintageIcon.defaultProps = {
  size: 24
};
var _default = ImageFilterVintageIcon;
exports["default"] = _default;