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

var MastodonVariantIcon = function MastodonVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.93,14C20.66,15.4 18.5,16.95 15.97,17.25C14.66,17.4 13.38,17.55 12,17.5C9.76,17.38 8,16.95 8,16.95L8.03,17.57C8.32,19.78 10.22,19.92 12.03,20C13.85,20.04 15.47,19.53 15.47,19.53L15.55,21.17C15.55,21.17 14.27,21.86 12,22C10.75,22.05 9.2,21.95 7.39,21.47C3.47,20.43 2.79,16.25 2.69,12L2.68,8.57C2.68,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.36,11.77 20.93,14M8.33,10.32C8.33,9.54 7.7,8.91 6.93,8.91C6.15,8.91 5.5,9.54 5.5,10.32C5.5,11.09 6.15,11.72 6.93,11.72C7.7,11.72 8.33,11.09 8.33,10.32M13.41,10.32C13.41,9.54 12.78,8.91 12,8.91C11.22,8.91 10.59,9.54 10.59,10.32C10.59,11.09 11.22,11.72 12,11.72C12.78,11.72 13.41,11.09 13.41,10.32M18.5,10.32C18.5,9.54 17.85,8.91 17.07,8.91C16.3,8.91 15.67,9.54 15.67,10.32C15.67,11.09 16.3,11.72 17.07,11.72C17.85,11.72 18.5,11.09 18.5,10.32Z"
  }));
};

MastodonVariantIcon.displayName = 'MastodonVariantIcon';
MastodonVariantIcon.defaultProps = {
  size: 24
};
var _default = MastodonVariantIcon;
exports["default"] = _default;