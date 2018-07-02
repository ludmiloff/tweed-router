"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

exports.default = PageNotFoundError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageNotFoundError(path) {
  if (this == null) {
    throw new TypeError("Class constructor PageNotFoundError cannot be invoked without 'new'");
  }

  var message = "No page was found at the path '" + path + "'";

  this.path = path;
  this.name = 'PageNotFoundError';
  this.message = message;
  this.stack = new Error(message).stack;
}

PageNotFoundError.prototype = (0, _create2.default)(Error.prototype);