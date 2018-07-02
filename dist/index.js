'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFoundError = exports.Router = undefined;

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

var _PageNotFoundError2 = require('./errors/PageNotFoundError');

var _PageNotFoundError3 = _interopRequireDefault(_PageNotFoundError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Router = _Router3.default;
exports.PageNotFoundError = _PageNotFoundError3.default;