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

var GamepadCircleOutlineIcon = function GamepadCircleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,8C7.21,8 9,9.79 9,12C9,14.21 7.21,16 5,16C2.79,16 1,14.21 1,12C1,9.79 2.79,8 5,8M5,10C3.9,10 3,10.9 3,12C3,13.1 3.9,14 5,14C6.1,14 7,13.1 7,12C7,10.9 6.1,10 5,10M12,1C14.21,1 16,2.79 16,5C16,7.21 14.21,9 12,9C9.79,9 8,7.21 8,5C8,2.79 9.79,1 12,1M12,3C10.9,3 10,3.9 10,5C10,6.1 10.9,7 12,7C13.1,7 14,6.1 14,5C14,3.9 13.1,3 12,3M12,15C14.21,15 16,16.79 16,19C16,21.21 14.21,23 12,23C9.79,23 8,21.21 8,19C8,16.79 9.79,15 12,15M12,17C10.9,17 10,17.9 10,19C10,20.1 10.9,21 12,21C13.1,21 14,20.1 14,19C14,17.9 13.1,17 12,17M19,8C21.21,8 23,9.79 23,12C23,14.21 21.21,16 19,16C16.79,16 15,14.21 15,12C15,9.79 16.79,8 19,8M19,10C17.9,10 17,10.9 17,12C17,13.1 17.9,14 19,14C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10Z"
  }));
};

GamepadCircleOutlineIcon.displayName = 'GamepadCircleOutlineIcon';
GamepadCircleOutlineIcon.defaultProps = {
  size: 24
};
var _default = GamepadCircleOutlineIcon;
exports["default"] = _default;