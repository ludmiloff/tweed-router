'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashHistory = function () {
  function HashHistory() {
    (0, _classCallCheck3.default)(this, HashHistory);
    this.prefix = '#';
  }

  (0, _createClass3.default)(HashHistory, [{
    key: 'onURLChange',
    value: function onURLChange(listener) {
      window.addEventListener('hashchange', listener);
    }
  }, {
    key: 'changeURL',
    value: function changeURL(path) {
      window.location.hash = path;
    }
  }, {
    key: 'path',
    get: function get() {
      if (window.location.hash === '') {
        this.changeURL('/');
      }

      return window.location.hash.slice(1) || '/';
    }
  }]);
  return HashHistory;
}();

exports.default = HashHistory;