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

var BrowserHistory = function () {
  function BrowserHistory() {
    (0, _classCallCheck3.default)(this, BrowserHistory);
  }

  (0, _createClass3.default)(BrowserHistory, [{
    key: 'onURLChange',
    value: function onURLChange(listener) {
      window.addEventListener('popstate', listener);
    }
  }, {
    key: 'changeURL',
    value: function changeURL(path) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.title;

      window.history.pushState(null, title, path);
    }
  }, {
    key: 'path',
    get: function get() {
      return window.location.pathname;
    }
  }]);
  return BrowserHistory;
}();

exports.default = BrowserHistory;