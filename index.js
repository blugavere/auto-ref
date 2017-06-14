'use strict';

const argList = require('get-parameter-names');
// const argList = require('args-list');

const defaults = {
  enumerable: true
};

const autoRef = (self, args, options) => {
  options = Object.assign({}, defaults, options);
  const names = argList(self.constructor);
  Object.keys(args).forEach((key, i) => {
    Object.defineProperty(self, names[i], {
      value: args[key],
      enumerable: options.enumerable,
      configurable: true,
      writable: true
    });
  });
};

module.exports = autoRef;
