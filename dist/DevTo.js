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

var DevToIcon = function DevToIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.36,9.87C7.19,9.74 7,9.68 6.84,9.68H6.06V14.34H6.84C7,14.34 7.19,14.28 7.36,14.15C7.54,14 7.62,13.82 7.62,13.56V10.45C7.62,10.19 7.54,10 7.36,9.87M20.04,2H3.96C2.88,2 2,2.88 2,3.96V20.04C2,21.13 2.88,22 3.96,22H20.04C21.12,22 22,21.12 22,20.04V3.96C22,2.87 21.12,2 20.04,2M8.88,13.57C8.88,14.41 8.37,15.68 6.73,15.68H4.65V8.29H6.77C8.35,8.29 8.88,9.56 8.88,10.4V13.57M13.38,9.61H11V11.33H12.45V12.65H11V14.36H13.38V15.68H10.6C10.1,15.7 9.69,15.3 9.68,14.8V9.22C9.67,8.72 10.06,8.31 10.56,8.3H13.38V9.61M18,14.76C17.42,16.13 16.36,15.86 15.89,14.76L14.17,8.3H15.62L16.95,13.37L18.27,8.3H19.72L18,14.76V14.76Z"
  }));
};

DevToIcon.displayName = 'DevToIcon';
DevToIcon.defaultProps = {
  size: 24
};
var _default = DevToIcon;
exports["default"] = _default;