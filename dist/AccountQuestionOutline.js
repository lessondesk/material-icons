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

var AccountQuestionOutlineIcon = function AccountQuestionOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9C17,7.34 18.34,6 20,6C21.66,6 23,7.34 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9C21.5,8.17 20.83,7.5 20,7.5C19.17,7.5 18.5,8.17 18.5,9V9.5M9,13C11.67,13 17,14.34 17,17V20H1V17C1,14.34 6.33,13 9,13M9,4C11.21,4 13,5.79 13,8C13,10.21 11.21,12 9,12C6.79,12 5,10.21 5,8C5,5.79 6.79,4 9,4M9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H15.1V17C15.1,16.36 11.97,14.9 9,14.9M9,5.9C7.84,5.9 6.9,6.84 6.9,8C6.9,9.16 7.84,10.1 9,10.1C10.16,10.1 11.1,9.16 11.1,8C11.1,6.84 10.16,5.9 9,5.9Z"
  }));
};

AccountQuestionOutlineIcon.displayName = 'AccountQuestionOutlineIcon';
AccountQuestionOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountQuestionOutlineIcon;
exports["default"] = _default;