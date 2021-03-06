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

var MidiPortIcon = function MidiPortIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M20.18,12C20.18,8.18 17.55,4.96 14,4.07V6H10V4.07C6.45,4.96 3.82,8.18 3.82,12C3.82,16.52 7.48,20.18 12,20.18C16.52,20.18 20.18,16.52 20.18,12M7,10.64C7.75,10.64 8.36,11.25 8.36,12C8.36,12.75 7.75,13.36 7,13.36C6.25,13.36 5.64,12.75 5.64,12C5.64,11.25 6.25,10.64 7,10.64M17,10.64C17.75,10.64 18.36,11.25 18.36,12C18.36,12.75 17.75,13.36 17,13.36C16.25,13.36 15.64,12.75 15.64,12C15.64,11.25 16.25,10.64 17,10.64M8.36,14.27C9.12,14.27 9.73,14.88 9.73,15.64C9.73,16.39 9.12,17 8.36,17C7.61,17 7,16.39 7,15.64C7,14.88 7.61,14.27 8.36,14.27M15.64,14.27C16.39,14.27 17,14.88 17,15.64C17,16.39 16.39,17 15.64,17C14.88,17 14.27,16.39 14.27,15.64C14.27,14.88 14.88,14.27 15.64,14.27M12,15.64C12.75,15.64 13.36,16.25 13.36,17C13.36,17.75 12.75,18.36 12,18.36C11.25,18.36 10.64,17.75 10.64,17C10.64,16.25 11.25,15.64 12,15.64Z"
  }));
};

MidiPortIcon.displayName = 'MidiPortIcon';
MidiPortIcon.defaultProps = {
  size: 24
};
var _default = MidiPortIcon;
exports["default"] = _default;