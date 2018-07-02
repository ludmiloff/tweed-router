'use strict';

import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$keys from 'babel-runtime/core-js/object/keys';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowserRouter = undefined;

var _ = require('.');

_Object$keys(_).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _[key];
    }
  });
});

var _BrowserRouter2 = require('./BrowserRouter');

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;