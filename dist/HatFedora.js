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

var HatFedoraIcon = function HatFedoraIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.11,11.92C19.13,11.71 19.14,11.5 19.14,11.29C19.14,7.86 17.71,4.14 16.28,4.14C14.85,4.14 13.42,5.57 12,5.57C10.57,5.57 9.14,4.14 7.71,4.14C6.28,4.14 4.86,7.79 4.86,11.29C4.86,11.5 4.86,11.71 4.88,11.92C7.22,12.45 9.6,12.72 12,12.71C14.45,12.71 16.83,12.44 19.11,11.92M3.45,18.18C9,19.85 14.96,19.86 20.54,18.18C20.96,18.04 21.33,17.77 21.59,17.41C21.85,17.05 22,16.61 22,16.17C22,15.72 21.86,15.29 21.61,14.92C21.35,14.56 21,14.29 20.56,14.14C17.86,15 15,15.45 12,15.45C9,15.45 6.13,15 3.43,14.14C3,14.29 2.65,14.57 2.39,14.93C2.14,15.29 2,15.72 2,16.17C2,17.11 2.61,17.9 3.45,18.18V18.18Z"
  }));
};

HatFedoraIcon.displayName = 'HatFedoraIcon';
HatFedoraIcon.defaultProps = {
  size: 24
};
var _default = HatFedoraIcon;
exports["default"] = _default;