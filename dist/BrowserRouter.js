'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HashHistory = exports.BrowserHistory = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _HashHistory = require('./HashHistory');

Object.defineProperty(exports, 'HashHistory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HashHistory).default;
  }
});

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

var _BrowserHistory = require('./BrowserHistory');

var _BrowserHistory2 = _interopRequireDefault(_BrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserHistory = _BrowserHistory2.default;

var BrowserRouter = function (_Router) {
  (0, _inherits3.default)(BrowserRouter, _Router);

  function BrowserRouter(routes, history) {
    (0, _classCallCheck3.default)(this, BrowserRouter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BrowserRouter.__proto__ || (0, _getPrototypeOf2.default)(BrowserRouter)).call(this, routes));

    _this._history = history;

    _this._onURLChange = _this._onURLChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(BrowserRouter, [{
    key: 'boot',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.navigate(this._history.path, false);

              case 2:

                this._history.onURLChange(this._onURLChange);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function boot() {
        return _ref.apply(this, arguments);
      }

      return boot;
    }()
  }, {
    key: '_onURLChange',
    value: function _onURLChange() {
      this.navigate(this._history.path, false);
    }
  }, {
    key: 'navigate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(path) {
        var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var route, title;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _get3.default)(BrowserRouter.prototype.__proto__ || (0, _getPrototypeOf2.default)(BrowserRouter.prototype), 'navigate', this).call(this, path);

              case 2:
                route = _context2.sent;


                window.scrollTo(0, 0);

                title = document.title;


                if (route.title != null) {
                  title = route.title;
                }

                if (push) {
                  this._history.changeURL(path, title);
                }

                document.title = title;

                return _context2.abrupt('return', route);

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function navigate(_x2) {
        return _ref2.apply(this, arguments);
      }

      return navigate;
    }()
  }, {
    key: 'link',
    value: function link(href, title, attributes) {
      if (this._history.prefix != null && this._hasRoute(href)) {
        return (0, _get3.default)(BrowserRouter.prototype.__proto__ || (0, _getPrototypeOf2.default)(BrowserRouter.prototype), 'link', this).call(this, this._history.prefix + href, title, attributes);
      }

      return (0, _get3.default)(BrowserRouter.prototype.__proto__ || (0, _getPrototypeOf2.default)(BrowserRouter.prototype), 'link', this).call(this, href, title, attributes);
    }
  }], [{
    key: 'make',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(routes) {
        var history = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _BrowserHistory2.default();
        var router;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                router = new BrowserRouter(routes, history);
                _context3.next = 3;
                return router.boot();

              case 3:
                return _context3.abrupt('return', router);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function make(_x4) {
        return _ref3.apply(this, arguments);
      }

      return make;
    }()
  }]);
  return BrowserRouter;
}(_Router3.default);

exports.default = BrowserRouter;