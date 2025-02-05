"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ConfigurationError = /*#__PURE__*/function (_Error) {
  _inherits(ConfigurationError, _Error);

  var _super = _createSuper(ConfigurationError);

  function ConfigurationError(parameter, value) {
    var _this;

    _classCallCheck(this, ConfigurationError);

    _this = _super.call(this);
    _this.code = 1;
    _this.name = 'CONFIGURATION_ERROR';
    _this.parameter = parameter;
    _this.value = value;
    _this.message = !_this.value ? "Missing parameter: ".concat(_this.parameter) : "Invalid value ".concat(JSON.stringify(_this.value), " for parameter \"").concat(_this.parameter, "\"");
    return _this;
  }

  return ConfigurationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var InvalidStateError = /*#__PURE__*/function (_Error2) {
  _inherits(InvalidStateError, _Error2);

  var _super2 = _createSuper(InvalidStateError);

  function InvalidStateError(status) {
    var _this2;

    _classCallCheck(this, InvalidStateError);

    _this2 = _super2.call(this);
    _this2.code = 2;
    _this2.name = 'INVALID_STATE_ERROR';
    _this2.status = status;
    _this2.message = "Invalid status: ".concat(status);
    return _this2;
  }

  return InvalidStateError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var NotSupportedError = /*#__PURE__*/function (_Error3) {
  _inherits(NotSupportedError, _Error3);

  var _super3 = _createSuper(NotSupportedError);

  function NotSupportedError(message) {
    var _this3;

    _classCallCheck(this, NotSupportedError);

    _this3 = _super3.call(this);
    _this3.code = 3;
    _this3.name = 'NOT_SUPPORTED_ERROR';
    _this3.message = message;
    return _this3;
  }

  return NotSupportedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var NotReadyError = /*#__PURE__*/function (_Error4) {
  _inherits(NotReadyError, _Error4);

  var _super4 = _createSuper(NotReadyError);

  function NotReadyError(message) {
    var _this4;

    _classCallCheck(this, NotReadyError);

    _this4 = _super4.call(this);
    _this4.code = 4;
    _this4.name = 'NOT_READY_ERROR';
    _this4.message = message;
    return _this4;
  }

  return NotReadyError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = {
  ConfigurationError: ConfigurationError,
  InvalidStateError: InvalidStateError,
  NotSupportedError: NotSupportedError,
  NotReadyError: NotReadyError
};