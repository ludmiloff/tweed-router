'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _http = require('tweed/render/http');

var _http2 = _interopRequireDefault(_http);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServerRouter = function () {
  function ServerRouter(router) {
    (0, _classCallCheck3.default)(this, ServerRouter);

    this._router = router;
  }

  (0, _createClass3.default)(ServerRouter, [{
    key: 'handle',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response) {
        var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.navigate(request.url);

              case 2:

                (0, _http2.default)(this, response, logger);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handle(_x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return handle;
    }()
  }, {
    key: 'navigate',
    value: function navigate(path) {
      return this._router.navigate(path);
    }
  }, {
    key: 'render',
    value: function render() {
      return this._router.render();
    }
  }, {
    key: 'link',
    value: function link(href, title) {
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this._router.link(href, title, attributes);
    }
  }, {
    key: 'isActive',
    value: function isActive(path) {
      return this._router.isActive(path);
    }
  }, {
    key: 'current',
    get: function get() {
      return this._router.current;
    },
    set: function set(current) {
      this._router.current = current;
    }
  }, {
    key: 'routes',
    get: function get() {
      return this._router.routes;
    }
  }, {
    key: 'currentPath',
    get: function get() {
      return this._router.currentPath;
    }
  }, {
    key: 'isLoading',
    get: function get() {
      return this._router.isLoading;
    },
    set: function set(isLoading) {
      this._router.isLoading = isLoading;
    }
  }], [{
    key: 'make',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(routes) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new ServerRouter(new _Router2.default(routes)));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function make(_x5) {
        return _ref2.apply(this, arguments);
      }

      return make;
    }()
  }]);
  return ServerRouter;
}();

exports.default = ServerRouter;