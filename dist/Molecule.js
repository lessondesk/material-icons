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

var MoleculeIcon = function MoleculeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.27,10L9,7H14.42L15.58,5L15.5,4.5C15.5,3.67 16.17,3 17,3C17.83,3 18.5,3.67 18.5,4.5C18.5,5.21 18,5.81 17.33,5.96L16.37,7.63L17.73,10L18.59,8.5L18.5,8C18.5,7.17 19.17,6.5 20,6.5C20.83,6.5 21.5,7.17 21.5,8C21.5,8.71 21,9.3 20.35,9.46L18.89,12L20.62,15C21.39,15.07 22,15.71 22,16.5C22,17.33 21.33,18 20.5,18C19.67,18 19,17.33 19,16.5V16.24L17.73,14L16.37,16.37L17.33,18.04C18,18.19 18.5,18.79 18.5,19.5C18.5,20.33 17.83,21 17,21C16.17,21 15.5,20.33 15.5,19.5L15.58,19L14.42,17H10.58L9.42,19L9.5,19.5C9.5,20.33 8.83,21 8,21C7.17,21 6.5,20.33 6.5,19.5C6.5,18.79 7,18.19 7.67,18.04L8.63,16.37L4.38,9C3.61,8.93 3,8.29 3,7.5C3,6.67 3.67,6 4.5,6C5.33,6 6,6.67 6,7.5C6,7.59 6,7.68 6,7.76L7.27,10M10.15,9L8.42,12L10.15,15H14.85L16.58,12L14.85,9H10.15Z"
  }));
};

MoleculeIcon.displayName = 'MoleculeIcon';
MoleculeIcon.defaultProps = {
  size: 24
};
var _default = MoleculeIcon;
exports["default"] = _default;