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

var AccountNetworkOutlineIcon = function AccountNetworkOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,10C13.93,10 15.5,8.43 15.5,6.5C15.5,4.57 13.93,3 12,3C10.07,3 8.5,4.57 8.5,6.5C8.5,8.43 10.07,10 12,10M12,5C12.83,5 13.5,5.67 13.5,6.5C13.5,7.33 12.83,8 12,8C11.17,8 10.5,7.33 10.5,6.5C10.5,5.67 11.17,5 12,5M15,20C15,19.45 14.55,19 14,19H13V17H19V15.5C19,13.57 15.87,12 12,12C8.13,12 5,13.57 5,15.5V17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M7.61,15C8.39,14.53 9.89,14 12,14C14.11,14 15.61,14.53 16.39,15H7.61Z"
  }));
};

AccountNetworkOutlineIcon.displayName = 'AccountNetworkOutlineIcon';
AccountNetworkOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountNetworkOutlineIcon;
exports["default"] = _default;