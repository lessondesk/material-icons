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

var DatabaseImportIcon = function DatabaseImportIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C8.59,3 5.69,4.07 4.54,5.57L9.79,10.82C10.5,10.93 11.22,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M3.92,7.08L2.5,8.5L5,11H0V13H5L2.5,15.5L3.92,16.92L8.84,12M20,9C20,11.21 16.42,13 12,13C11.34,13 10.7,12.95 10.09,12.87L7.62,15.34C8.88,15.75 10.38,16 12,16C16.42,16 20,14.21 20,12M20,14C20,16.21 16.42,18 12,18C9.72,18 7.67,17.5 6.21,16.75L4.53,18.43C5.68,19.93 8.59,21 12,21C16.42,21 20,19.21 20,17"
  }));
};

DatabaseImportIcon.displayName = 'DatabaseImportIcon';
DatabaseImportIcon.defaultProps = {
  size: 24
};
var _default = DatabaseImportIcon;
exports["default"] = _default;