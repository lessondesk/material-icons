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

var HubspotIcon = function HubspotIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.1,8.6V6.2C17.7,5.9 18.2,5.3 18.2,4.6V4.5C18.2,3.5 17.4,2.7 16.4,2.7H16.3C15.3,2.7 14.5,3.5 14.5,4.5V4.6C14.5,5.3 14.9,5.9 15.6,6.2V8.6C14.7,8.7 13.8,9.1 13.1,9.7L6.5,4.6C6.8,3.5 6.1,2.3 5,2.1C3.9,1.9 2.8,2.4 2.5,3.5C2.2,4.6 2.9,5.8 4,6.1C4.5,6.2 5.1,6.2 5.6,5.9L12,10.9C10.8,12.7 10.8,15 12.1,16.8L10.1,18.8C9.9,18.8 9.8,18.7 9.6,18.7C8.7,18.7 7.9,19.5 7.9,20.4C7.9,21.3 8.7,22 9.6,22C10.5,22 11.3,21.2 11.3,20.3V20.3C11.3,20.1 11.3,20 11.2,19.8L13.1,17.9C15.4,19.6 18.7,19.2 20.4,16.9C22.1,14.6 21.7,11.3 19.4,9.6C18.8,9.1 18,8.7 17.1,8.6M16.3,16.4C14.8,16.4 13.6,15.2 13.6,13.7C13.6,12.2 14.8,11 16.3,11C17.8,11 19,12.2 19,13.7C19,15.2 17.8,16.4 16.3,16.4"
  }));
};

HubspotIcon.displayName = 'HubspotIcon';
HubspotIcon.defaultProps = {
  size: 24
};
var _default = HubspotIcon;
exports["default"] = _default;