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

var DribbbleBoxIcon = function DribbbleBoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M15.09,16.5C14.81,15.14 14.47,13.91 14.08,12.82L15.2,12.74H15.22V12.74C15.87,12.74 16.59,12.82 17.36,13C17.09,14.44 16.26,15.69 15.09,16.5M12,17.46C10.79,17.46 9.66,17.06 8.76,16.39C8.95,16.07 9.36,15.46 10,14.83C10.7,14.18 11.64,13.5 12.86,13.11C13.28,14.27 13.65,15.6 13.94,17.1C13.33,17.33 12.68,17.46 12,17.46M6.54,12V11.92L7.14,11.93V11.93C8.24,11.93 10.15,11.83 12.1,11.22L12.41,11.94C11.11,12.38 10.09,13.07 9.34,13.76C8.61,14.42 8.12,15.08 7.83,15.5C7.03,14.56 6.54,13.34 6.54,12M9.59,7.11C9.97,7.56 10.73,8.54 11.54,10.08C9.89,10.57 8.23,10.68 7.22,10.68H7.14V10.68H6.7C7.09,9.11 8.17,7.81 9.59,7.11M12,6.54C13.29,6.54 14.47,7 15.41,7.74C14.69,8.6 13.74,9.22 12.72,9.66C12,8.27 11.31,7.28 10.84,6.67C11.21,6.59 11.6,6.54 12,6.54M16.29,8.63C16.97,9.5 17.4,10.57 17.45,11.74C16.66,11.58 15.92,11.5 15.22,11.5V11.5C14.66,11.5 14.13,11.54 13.63,11.63L13.27,10.78C14.37,10.3 15.43,9.61 16.29,8.63M12,5C8.13,5 5,8.13 5,12C5,15.87 8.13,19 12,19C15.87,19 19,15.87 19,12C19,8.13 15.87,5 12,5Z"
  }));
};

DribbbleBoxIcon.displayName = 'DribbbleBoxIcon';
DribbbleBoxIcon.defaultProps = {
  size: 24
};
var _default = DribbbleBoxIcon;
exports["default"] = _default;