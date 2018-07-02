'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor, _descriptor2; /** @jsx VirtualNode */

var _tweed = require('tweed');

var _PageNotFoundError = require('./errors/PageNotFoundError');

var _PageNotFoundError2 = _interopRequireDefault(_PageNotFoundError);

var _Endpoint = require('./Endpoint');

var _Endpoint2 = _interopRequireDefault(_Endpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Router = (_class = function () {
  function Router(routes) {
    (0, _classCallCheck3.default)(this, Router);

    _initDefineProp(this, 'current', _descriptor, this);

    _initDefineProp(this, 'isLoading', _descriptor2, this);

    this.currentPath = '/';

    this.routes = (0, _keys2.default)(routes).map(function (s) {
      return [_Endpoint2.default.parse(s), routes[s]];
    });
  }

  (0, _createClass3.default)(Router, [{
    key: 'navigate',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(path) {
        var i, _routes$i, endpoint, handler, match, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;

                i = 0;

              case 2:
                if (!(i < this.routes.length)) {
                  _context.next = 20;
                  break;
                }

                _routes$i = (0, _slicedToArray3.default)(this.routes[i], 2), endpoint = _routes$i[0], handler = _routes$i[1];
                match = endpoint.match(path);

                if (!match.matches) {
                  _context.next = 17;
                  break;
                }

                _context.next = 8;
                return handler(this, match.params);

              case 8:
                result = _context.sent;

                this.currentEndpoint = endpoint;
                this.currentMatch = match;
                this.currentPath = '/' + path.split('/').filter(function (s) {
                  return s;
                }).join('/');
                _context.next = 14;
                return this._normalizeRouteResponse(result);

              case 14:
                this.current = _context.sent;

                this.isLoading = false;
                return _context.abrupt('return', this.current);

              case 17:
                i++;
                _context.next = 2;
                break;

              case 20:
                this.isLoading = false;

                throw new _PageNotFoundError2.default(path);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function navigate(_x) {
        return _ref.apply(this, arguments);
      }

      return navigate;
    }()
  }, {
    key: '_normalizeRouteResponse',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(response) {
        var isAnObject, isAnObjectWithLoad, isAModuleWithDefault, isAModuleWithDefaultComponent, isAModuleWithDefaultClass, isAModuleWithDefaultClassWithLoad;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                isAnObject = (typeof response === 'undefined' ? 'undefined' : (0, _typeof3.default)(response)) === 'object';
                isAnObjectWithLoad = isAnObject && typeof response.load === 'function';
                isAModuleWithDefault = isAnObject && response.default != null;
                isAModuleWithDefaultComponent = isAModuleWithDefault && typeof response.default.render === 'function';
                isAModuleWithDefaultClass = isAModuleWithDefault && typeof response.default === 'function';
                isAModuleWithDefaultClassWithLoad = isAModuleWithDefaultClass && typeof response.default.load === 'function';

                if (!isAnObjectWithLoad) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt('return', response.load(this, this.currentMatch.params));

              case 8:
                if (!isAModuleWithDefaultComponent) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt('return', response.default);

              case 10:
                if (!isAModuleWithDefaultClassWithLoad) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt('return', response.default.load(this, this.currentMatch.params));

              case 12:
                if (!isAModuleWithDefaultClass) {
                  _context2.next = 14;
                  break;
                }

                return _context2.abrupt('return', new response.default(this, this.currentMatch.params));

              case 14:
                return _context2.abrupt('return', response);

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _normalizeRouteResponse(_x2) {
        return _ref2.apply(this, arguments);
      }

      return _normalizeRouteResponse;
    }()
  }, {
    key: 'render',
    value: function render() {
      if (this.current == null) {
        return (0, _tweed.VirtualNode)(
          'div',
          null,
          'Not Found'
        );
      }

      if (typeof this.current.render === 'function') {
        return this.current.render();
      }

      return this.current;
    }
  }, {
    key: '_onClickLink',
    value: function _onClickLink(href, event) {
      event.preventDefault();

      this.navigate(href);
    }
  }, {
    key: 'link',
    value: function link(href, title) {
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var event = this._hasRoute(href) ? { 'on-click': this._onClickLink.bind(this, href) } : {};

      return (0, _tweed.VirtualNode)(
        'a',
        (0, _extends3.default)({
          href: href
        }, event, attributes),
        title
      );
    }
  }, {
    key: '_hasRoute',
    value: function _hasRoute(path) {
      return this.routes.filter(function (_ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
            e = _ref4[0];

        return e.match(path).matches;
      }).length > 0;
    }
  }, {
    key: 'isActive',
    value: function isActive(path) {
      return this.currentPath === '/' + path.split('/').filter(function (s) {
        return s;
      }).join('/');
    }
  }]);
  return Router;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'current', [_tweed.mutating], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'isLoading', [_tweed.mutating], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);
exports.default = Router;