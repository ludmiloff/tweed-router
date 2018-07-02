'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notEmpty = function notEmpty(s) {
  return s !== '';
};

var Endpoint = function () {
  function Endpoint(pattern, params) {
    (0, _classCallCheck3.default)(this, Endpoint);

    this.pattern = pattern;
    this.params = params;
  }

  (0, _createClass3.default)(Endpoint, [{
    key: 'match',
    value: function match(path) {
      return new Match(this.pattern, path, this.params);
    }
  }], [{
    key: 'parse',
    value: function parse(expression) {
      var params = [];

      var pattern = '^\\/?' + expression.replace(/(?:^|\/):([^/]+)(?=$|\/)/g, function (m, name) {
        params.push(name);
        return '/([^/]+)/';
      }).split('/').filter(notEmpty).join('\\/?') + '\\/?$';

      return new Endpoint(new RegExp(pattern), params);
    }
  }]);
  return Endpoint;
}();

exports.default = Endpoint;

var Match = function () {
  function Match(pattern, path, paramNames) {
    (0, _classCallCheck3.default)(this, Match);

    this._pattern = pattern;
    this._path = path;
    this._paramNames = paramNames;
  }

  (0, _createClass3.default)(Match, [{
    key: 'matches',
    get: function get() {
      return this._pattern.test(this._path);
    }
  }, {
    key: 'params',
    get: function get() {
      var _this = this;

      var _pattern$exec = this._pattern.exec(this._path),
          _pattern$exec2 = (0, _toArray3.default)(_pattern$exec),
          params = _pattern$exec2.slice(1);

      return params.reduce(function (params, param, index) {
        params[_this._paramNames[index]] = param;
        return params;
      }, {});
    }
  }]);
  return Match;
}();